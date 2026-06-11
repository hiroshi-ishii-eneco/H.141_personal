// app.js
// 漢字練習プリント生成ツール - アプリケーションロジック
// バニラJS / ビルドステップなし / グローバル window.* 統一

(function () {
  "use strict";

  // === 1. データ読込・検証 ===

  // 学年順序 (累積出題やプール構築で使用)
  const GRADE_ORDER = ["g1", "g2", "g3", "g4", "g5", "g6", "jhs1", "jhs2", "jhs3"];

  // 学年ラベル (UI 表示用)
  const GRADE_LABEL = {
    g1: { text: "1年生", ruby: "いちねんせい", short: "小1" },
    g2: { text: "2年生", ruby: "にねんせい", short: "小2" },
    g3: { text: "3年生", ruby: "さんねんせい", short: "小3" },
    g4: { text: "4年生", ruby: "よねんせい", short: "小4" },
    g5: { text: "5年生", ruby: "ごねんせい", short: "小5" },
    g6: { text: "6年生", ruby: "ろくねんせい", short: "小6" },
    jhs1: { text: "中学1年", ruby: "ちゅうがくいちねん", short: "中1" },
    jhs2: { text: "中学2年", ruby: "ちゅうがくにねん", short: "中2" },
    jhs3: { text: "中学3年", ruby: "ちゅうがくさんねん", short: "中3" }
  };

  // 学年→KANJI_DATA グローバル名
  const DATA_VAR = {
    g1: "KANJI_DATA_G1",
    g2: "KANJI_DATA_G2",
    g3: "KANJI_DATA_G3",
    g4: "KANJI_DATA_G4",
    g5: "KANJI_DATA_G5",
    g6: "KANJI_DATA_G6",
    jhs1: "KANJI_DATA_JHS1",
    jhs2: "KANJI_DATA_JHS2",
    jhs3: "KANJI_DATA_JHS3"
  };

  // 印刷可能な正答の最大文字数 (これを超える単語は除外)
  const MAX_ANSWER_LEN = 5;

  // 空欄に入る側 (read=word / write=reading) の最大文字数
  const MAX_BLANK_LEN = 6;

  // 1ページあたりの問題数
  const PROBLEMS_PER_PAGE = 20;

  // 起動時に欠落しているデータ変数を検出する
  function detectMissingData() {
    const missing = [];
    for (const g of GRADE_ORDER) {
      if (!Array.isArray(window[DATA_VAR[g]])) missing.push(g);
    }
    return missing;
  }

  // エラー表示 (.error-message を #error-container に出す)
  function showError(message) {
    const container = document.getElementById("error-container");
    if (!container) return;
    const div = document.createElement("div");
    div.className = "error-message";
    div.textContent = message;
    container.appendChild(div);
  }

  function clearErrors() {
    const container = document.getElementById("error-container");
    if (container) container.innerHTML = "";
  }

  // === 2. 設定管理 (localStorage) ===

  const SETTINGS_KEY = "kanji_practice_settings_v1";

  const DEFAULT_SETTINGS = {
    grades: ["g1"],             // 複数選択対応 (配列)
    cumulative: true,
    mode: "write",
    sheetCount: 1,
    durationGoal: 15,
    includeAnswerPage: false
  };

  function loadSettings() {
    try {
      const raw = localStorage.getItem(SETTINGS_KEY);
      if (!raw) return { ...DEFAULT_SETTINGS, grades: DEFAULT_SETTINGS.grades.slice() };
      const parsed = JSON.parse(raw);
      // 既知キーのみマージ (未知値は無視)
      const merged = { ...DEFAULT_SETTINGS, grades: DEFAULT_SETTINGS.grades.slice() };
      for (const k of Object.keys(DEFAULT_SETTINGS)) {
        if (parsed[k] !== undefined) merged[k] = parsed[k];
      }
      // 旧バージョン (単一 grade) からの移行
      if (parsed.grade && !Array.isArray(parsed.grades)) {
        merged.grades = [parsed.grade];
      }
      // grades の正規化 (有効な学年のみ、最低 1 つ)
      if (!Array.isArray(merged.grades)) merged.grades = [];
      merged.grades = merged.grades.filter((g) => GRADE_ORDER.includes(g));
      if (merged.grades.length === 0) merged.grades = DEFAULT_SETTINGS.grades.slice();

      if (merged.mode !== "read" && merged.mode !== "write") merged.mode = DEFAULT_SETTINGS.mode;
      merged.cumulative = !!merged.cumulative;
      merged.includeAnswerPage = !!merged.includeAnswerPage;
      merged.sheetCount = clampInt(merged.sheetCount, 1, 20, DEFAULT_SETTINGS.sheetCount);
      merged.durationGoal = clampInt(merged.durationGoal, 0, 120, DEFAULT_SETTINGS.durationGoal);
      return merged;
    } catch (e) {
      // パース失敗時はデフォルトに戻す
      return { ...DEFAULT_SETTINGS, grades: DEFAULT_SETTINGS.grades.slice() };
    }
  }

  function saveSettings(settings) {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (e) {
      // 容量超過などはサイレントスキップ
    }
  }

  function clampInt(v, min, max, fallback) {
    const n = parseInt(v, 10);
    if (!Number.isFinite(n)) return fallback;
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  // === 3. 漢字プール構築 ===

  // 選択学年群の中で最も高い学年を返す
  function highestGrade(grades) {
    let best = grades[0];
    let bestIdx = GRADE_ORDER.indexOf(best);
    for (const g of grades) {
      const idx = GRADE_ORDER.indexOf(g);
      if (idx > bestIdx) { best = g; bestIdx = idx; }
    }
    return best;
  }

  // grades: 選択された学年配列 (例: ["g1", "g6"])
  // cumulative: true なら最も高い学年までの全範囲を pool に含める、
  //             false なら明示選択された学年のみ
  function buildPool(grades, cumulative) {
    const targets = new Set();
    if (cumulative) {
      const top = highestGrade(grades);
      for (const g of GRADE_ORDER) {
        targets.add(g);
        if (g === top) break;
      }
    } else {
      for (const g of grades) targets.add(g);
    }

    const pool = [];
    for (const g of targets) {
      const list = window[DATA_VAR[g]];
      if (!Array.isArray(list)) continue;
      for (const entry of list) {
        // 内部用に _grade を付与 (元データは変更しない)
        pool.push({ ...entry, _grade: g });
      }
    }
    return pool;
  }

  // 「学習済み」の配当漢字集合を構築。
  // 選択学年群のうち最高学年までを累積で「学習済み」とする
  // (該当学年の児童はそれまでに習った全漢字を知っているため)。
  function buildLearnedKanjiSet(grades) {
    const top = highestGrade(grades);
    const set = new Set();
    for (const g of GRADE_ORDER) {
      const list = window[DATA_VAR[g]];
      if (Array.isArray(list)) {
        for (const entry of list) {
          if (entry && typeof entry.kanji === "string") set.add(entry.kanji);
        }
      }
      if (g === top) break;
    }
    return set;
  }

  // === 4. 問題生成 ===

  // Fisher-Yates シャッフル (in-place)
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
    }
    return arr;
  }

  // sentence 内の ○+ を見つけ、前後パーツに分解する
  function splitSentence(sentence) {
    if (typeof sentence !== "string") return { before: "", after: "", hasBlank: false };
    const m = sentence.match(/○+/);
    if (!m) return { before: sentence, after: "", hasBlank: false };
    const idx = m.index;
    return {
      before: sentence.slice(0, idx),
      after: sentence.slice(idx + m[0].length),
      hasBlank: true
    };
  }

  // 文字列中の漢字 (CJK統合漢字) を配列で返す
  function extractKanji(s) {
    if (typeof s !== "string") return [];
    return s.match(/[一-鿿]/g) || [];
  }

  // ひらがな → カタカナ変換 (書きモードの出題表記用、漢字検定スタイル)
  function hiraToKata(s) {
    if (typeof s !== "string") return "";
    return s.replace(/[ぁ-ゖ]/g, (c) =>
      String.fromCharCode(c.charCodeAt(0) + 0x60)
    );
  }

  function generateProblems(pool, mode, count, learnedKanji) {
    if (!Array.isArray(pool) || pool.length === 0) {
      return { problems: [], excludedCount: 0, totalCandidates: 0 };
    }

    // 1. 全 words をフラット化
    const flat = [];
    for (const entry of pool) {
      if (!entry || !Array.isArray(entry.words)) continue;
      for (const w of entry.words) {
        flat.push({
          kanji: entry.kanji,
          word: w.word,
          reading: w.reading,
          sentence: w.sentence,
          okurigana: w.okurigana,
          printable: w.printable,
          _grade: entry._grade
        });
      }
    }

    const totalCandidates = flat.length;

    // 2. 各種フィルタ
    const filtered = flat.filter((w) => {
      if (w.printable === false) return false;
      if (!w.word || !w.reading) return false;
      // 正答長 (read=reading, write=word)
      const ansLen = (mode === "read" ? w.reading : w.word).length;
      if (ansLen === 0 || ansLen > MAX_ANSWER_LEN) return false;
      // 空欄に入る表示側 (read=word / write=reading) の長さ。長すぎるとセルに収まらない
      const blankLen = (mode === "read" ? w.word : w.reading).length;
      if (blankLen > MAX_BLANK_LEN) return false;
      // word に含まれる漢字がすべて学習済みか
      if (learnedKanji) {
        const kanjiInWord = extractKanji(w.word);
        for (const k of kanjiInWord) {
          if (!learnedKanji.has(k)) return false;
        }
      }
      return true;
    });

    const excludedCount = totalCandidates - filtered.length;

    // 3. シャッフル
    shuffle(filtered);

    // 4. 先頭から count 件。同じ単語が同一出力内に重複しないようスキップ
    //    (同じ単語が複数の漢字エントリ・複数学年に登録されているため)
    const limit = Math.max(0, count | 0);
    const picked = [];
    const usedWords = new Set();
    for (const w of filtered) {
      if (picked.length >= limit) break;
      if (usedWords.has(w.word)) continue;
      usedWords.add(w.word);
      picked.push(w);
    }

    // 5. 各問題: 文を before/after に分解し、blank に入る表示テキストを決定
    //    漢字検定スタイル:
    //      - 読みモード: blank に word (漢字) を表示 + 左に傍線
    //      - 書きモード: blank に reading をカタカナ化したものを表示 (太字)
    const problems = picked.map((w) => {
      const answer = mode === "read" ? w.reading : w.word;
      const parts = splitSentence(w.sentence);
      const blankDisplay = mode === "read" ? w.word : hiraToKata(w.reading);

      return {
        kanji: w.kanji,
        word: w.word,
        reading: w.reading,
        okurigana: w.okurigana,
        sentenceBefore: parts.before,
        sentenceAfter: parts.after,
        blankDisplay: blankDisplay,
        answer: answer,
        answerLength: answer.length,
        _grade: w._grade
      };
    });

    return { problems, excludedCount, totalCandidates };
  }

  // === 5. レンダリング ===

  // 単純なテキストエスケープ (innerHTML 経由で挿入する箇所のため)
  function escapeHtml(s) {
    if (s == null) return "";
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // body に学年バンド (low/mid/high) を付与 (最高学年で判定)
  function applyGradeBand(grades) {
    document.body.classList.remove("grade-low", "grade-mid", "grade-high");
    const top = highestGrade(grades);
    if (top === "g1" || top === "g2") document.body.classList.add("grade-low");
    else if (top === "g3" || top === "g4") document.body.classList.add("grade-mid");
    else document.body.classList.add("grade-high");
  }

  // 学年表示 (低学年はふりがな付き)
  function gradeHeaderHtml(grade) {
    const label = GRADE_LABEL[grade];
    if (!label) return "";
    if (grade === "g1" || grade === "g2") {
      return `<ruby>${escapeHtml(label.text)}<rt>${escapeHtml(label.ruby)}</rt></ruby>`;
    }
    return escapeHtml(label.text);
  }

  // 複数学年表示: 単一なら1年生風、複数なら「小1・小6」
  function gradesHeaderHtml(grades) {
    const sorted = [...grades].sort(
      (a, b) => GRADE_ORDER.indexOf(a) - GRADE_ORDER.indexOf(b)
    );
    if (sorted.length === 1) return gradeHeaderHtml(sorted[0]);
    return escapeHtml(sorted.map((g) => GRADE_LABEL[g]?.short || g).join("・"));
  }

  function modeLabel(mode) {
    return mode === "read" ? "読み" : "書き";
  }

  // タイムスタンプ生成: YYMMDD_HHMMSS
  function formatTimestamp(date) {
    const pad2 = (n) => String(n).padStart(2, "0");
    const pad3 = (n) => String(n).padStart(3, "0");
    const yy = pad2(date.getFullYear() % 100);
    const mm = pad2(date.getMonth() + 1);
    const dd = pad2(date.getDate());
    const hh = pad2(date.getHours());
    const mi = pad2(date.getMinutes());
    const ss = pad2(date.getSeconds());
    return { base: `${yy}${mm}${dd}_${hh}${mi}${ss}`, pad3 };
  }

  // 印刷識別 ID: YYMMDD_HHMMSS_NNN/TTT
  function sheetId(timestamp, sheetNumber, total) {
    return `${timestamp.base}_${timestamp.pad3(sheetNumber)}/${timestamp.pad3(total)}`;
  }

  // ページごとのヘッダ HTML
  // 1 列構成: タイトル + 日付 + 名前 を 1 span に統合
  function buildPageHeader(grades, mode) {
    const gradePart = gradesHeaderHtml(grades);
    const modePart = escapeHtml(modeLabel(mode));
    return [
      `<header class="page-header">`,
      `<span>漢字練習 ${gradePart} (${modePart})　　　日付　　　　　　　　名前　　　　　　　</span>`,
      `</header>`
    ].join("");
  }

  // 1 問のセル HTML
  // 構造:
  //   .problem-cell
  //     .self-check                (採点用 5mm 角)
  //     .problem-line              (番号 + 問題文 横並び)
  //       .problem-number
  //       .problem-sentence
  //         <text> <span.blank>[漢字 or 空]</span> <text>
  //     .answer-area               (セル幅最大の解答下線)
  // 縦書きセル構造 (CSS Grid: 上段=番号、下段=解答|問題文):
  //   .problem-cell
  //     .self-check       (absolute right-top)
  //     .problem-number   (上段、両列スパン)
  //     .answer-area      (下段左、縦長の書込み枠)
  //     .problem-sentence (下段右、縦書き vertical-rl)
  //       <text> <span.blank> <text>
  function buildProblemCell(problem, indexInPage, settings) {
    const num = indexInPage + 1;
    const isRead = settings.mode === "read";
    const blankText = escapeHtml(problem.blankDisplay || "");
    const blankClass = isRead ? "blank blank-kanji" : "blank blank-kana";
    return [
      `<div class="problem-cell">`,
      `<div class="problem-number">${numLabel(num)}</div>`,
      `<div class="answer-area"></div>`,
      `<div class="problem-sentence">`,
      escapeHtml(problem.sentenceBefore),
      `<span class="${blankClass}">${blankText}</span>`,
      escapeHtml(problem.sentenceAfter),
      `</div>`,
      `</div>`
    ].join("");
  }

  // 2 桁以上の数字を縦中横 (text-combine-upright) で横並び化するためのラッパ
  function numLabel(n) {
    const s = String(n);
    return s.length >= 2 ? `<span class="tcy">${s}</span>` : s;
  }

  // 3 桁ゼロ詰めラベル ("001", "002", ...)
  function pad3(n) {
    return String(n).padStart(3, "0");
  }

  // 解答ページ HTML を組み立てる
  // - 1 ページに最大 5 グループ × 20 問 = 100 問の答えを掲載
  // - 各グループは「001」「002」… の 3 桁ゼロ詰めラベル付きの枠
  // - 枠内に 1〜20 の連番で正答
  // - 縦書き、明朝体
  // 戻り値: { html, sheetCount }
  function buildAnswerPages(problems, settings, firstSheetNumber, totalSheets, timestamp) {
    const GROUPS_PER_PAGE = 5;
    const ITEMS_PER_PAGE = PROBLEMS_PER_PAGE * GROUPS_PER_PAGE;  // 100

    const pages = [];
    for (let i = 0; i < problems.length; i += ITEMS_PER_PAGE) {
      pages.push(problems.slice(i, i + ITEMS_PER_PAGE));
    }
    if (pages.length === 0) pages.push([]);

    const gradePart = gradesHeaderHtml(settings.grades);
    const modePart = escapeHtml(modeLabel(settings.mode));

    const htmls = pages.map((pageProblems, pageIdx) => {
      const sheetNumber = firstSheetNumber + pageIdx;
      const id = escapeHtml(sheetId(timestamp, sheetNumber, totalSheets));

      // 各 20 問を 1 グループに分割
      const groups = [];
      for (let g = 0; g < pageProblems.length; g += PROBLEMS_PER_PAGE) {
        const items = pageProblems.slice(g, g + PROBLEMS_PER_PAGE);
        const groupNumber = pageIdx * GROUPS_PER_PAGE + (g / PROBLEMS_PER_PAGE) + 1;
        groups.push({ items, groupNumber });
      }

      const groupsHtml = groups.map(({ items, groupNumber }) => {
        const itemsHtml = items.map((p, idx) => {
          const num = idx + 1;
          return [
            `<li>`,
            `<span class="num">${numLabel(num)}</span>`,
            `<span class="ans">${escapeHtml(p.answer)}</span>`,
            `</li>`
          ].join("");
        }).join("");
        return [
          `<div class="answer-group">`,
          `<div class="group-label">${pad3(groupNumber)}</div>`,
          `<ol class="group-items">${itemsHtml}</ol>`,
          `</div>`
        ].join("");
      }).join("");

      return [
        `<section class="page answer-page">`,
        `<div class="page-meta">${id}</div>`,
        `<div class="page-content">`,
        `<header class="page-header">`,
        `<span>解答 漢字練習 ${gradePart} (${modePart})　　　日付　　　　　　　　名前　　　　　　　</span>`,
        `</header>`,
        `<div class="answer-groups">${groupsHtml}</div>`,
        `</div>`,
        `</section>`
      ].join("");
    });

    return { html: htmls.join(""), sheetCount: pages.length };
  }

  // 「準備中です」ページ (中学範囲などデータが空のとき)
  function buildEmptyPage(grade, settings, message) {
    const header = buildPageHeader([grade], settings.mode);
    return [
      `<section class="page">`,
      header,
      `<div class="error-message">${escapeHtml(message)}</div>`,
      `</section>`
    ].join("");
  }

  function renderPages(problems, settings) {
    const container = document.getElementById("problems-container");
    if (!container) return;
    container.innerHTML = "";

    applyGradeBand(settings.grades);

    if (!problems || problems.length === 0) {
      // データ未整備 / プール空 — 選択学年のいずれかにデータがあるか確認
      const hasAnyData = settings.grades.some((g) => {
        const data = window[DATA_VAR[g]];
        return Array.isArray(data) && data.length > 0;
      });
      const msg = !hasAnyData
        ? "選択した学年のデータは準備中です。"
        : "出題できる単語がありません (printable な単語が不足しています)。";
      const firstGrade = settings.grades[0];
      container.insertAdjacentHTML("beforeend", buildEmptyPage(firstGrade, settings, msg));
      return;
    }

    // 20問単位でページに分割
    const pages = [];
    for (let i = 0; i < problems.length; i += PROBLEMS_PER_PAGE) {
      pages.push(problems.slice(i, i + PROBLEMS_PER_PAGE));
    }

    // 印刷バッチのタイムスタンプ + 通し番号
    const timestamp = state.timestamp || formatTimestamp(new Date());
    const problemSheetCount = pages.length;
    // 解答ページは 5 問題シートにつき 1 枚 (100 問/ページ)
    const answerSheetCount = settings.includeAnswerPage
      ? Math.ceil(problemSheetCount / 5)
      : 0;
    const totalSheets = problemSheetCount + answerSheetCount;

    pages.forEach((pageProblems, pageIndex) => {
      const sheetNumber = pageIndex + 1;
      const id = escapeHtml(sheetId(timestamp, sheetNumber, totalSheets));
      const cells = pageProblems
        .map((p, i) => buildProblemCell(p, i, settings))
        .join("");
      const html = [
        `<section class="page">`,
        `<div class="page-meta">${id}</div>`,
        `<div class="page-content">`,
        buildPageHeader(settings.grades, settings.mode),
        `<div class="problem-grid">`,
        cells,
        `</div>`,
        `</div>`,
        `</section>`
      ].join("");
      container.insertAdjacentHTML("beforeend", html);
    });

    // 解答ページ (オプション)
    if (settings.includeAnswerPage && problems.length > 0) {
      const { html } = buildAnswerPages(
        problems,
        settings,
        problemSheetCount + 1,
        totalSheets,
        timestamp
      );
      container.insertAdjacentHTML("beforeend", html);
    }
  }

  // === 6. イベントハンドリング ===

  // アプリ全体の状態 (settings + 直近の問題セット + 印刷バッチ ID)
  const state = {
    settings: { ...DEFAULT_SETTINGS },
    problems: [],
    timestamp: null
  };

  // 再生成 + 再描画
  function regenerateAndRender() {
    const { grades, cumulative, mode, sheetCount } = state.settings;
    const pool = buildPool(grades, cumulative);
    const learnedKanji = buildLearnedKanjiSet(grades);
    const count = Math.max(1, sheetCount) * PROBLEMS_PER_PAGE;
    const { problems, excludedCount } = generateProblems(pool, mode, count, learnedKanji);
    state.problems = problems;
    // 新規生成時に印刷バッチ ID を更新
    state.timestamp = formatTimestamp(new Date());

    // 除外件数の表示 (毎回クリアした上で必要時のみ出す)
    clearErrors();
    if (excludedCount > 0) {
      showError(`印刷に適さない単語を ${excludedCount} 件除外しました (printable=false / 正答長 / 表示長 / 未学習漢字を含む)。`);
    }

    renderPages(problems, state.settings);
  }

  // 設定だけ変えて再描画 (再生成なし)
  function rerenderOnly() {
    renderPages(state.problems, state.settings);
  }

  // UI を現在の設定に同期
  function syncUiFromSettings() {
    const s = state.settings;

    // 学年ボタン (複数選択対応)
    document.querySelectorAll(".grade-btn").forEach((btn) => {
      const g = btn.dataset.grade;
      btn.classList.toggle("active", s.grades.includes(g));
    });

    // 累積
    const cum = document.getElementById("cumulative-toggle");
    if (cum) cum.checked = !!s.cumulative;

    // モード
    document.querySelectorAll('input[name="mode"]').forEach((r) => {
      r.checked = (r.value === s.mode);
    });

    // 解答ページ
    const ap = document.getElementById("answer-page-toggle");
    if (ap) ap.checked = !!s.includeAnswerPage;

    // 出力枚数
    const sc = document.getElementById("sheet-count");
    if (sc) sc.value = String(s.sheetCount);

    // 目安所要時間
    const dg = document.getElementById("duration-goal");
    if (dg) dg.value = String(s.durationGoal);
  }

  function bindEvents() {
    // 学年ボタン (複数選択: クリックでトグル、ただし全解除は禁止)
    document.querySelectorAll(".grade-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const g = btn.dataset.grade;
        if (!GRADE_ORDER.includes(g)) return;
        const current = state.settings.grades.slice();
        const idx = current.indexOf(g);
        if (idx >= 0) {
          // 既に選択中: 解除 (ただし最低1つは残す)
          if (current.length > 1) current.splice(idx, 1);
        } else {
          current.push(g);
        }
        state.settings.grades = current;
        saveSettings(state.settings);
        syncUiFromSettings();
        regenerateAndRender();
      });
    });

    // 累積トグル
    const cum = document.getElementById("cumulative-toggle");
    if (cum) {
      cum.addEventListener("change", () => {
        state.settings.cumulative = !!cum.checked;
        saveSettings(state.settings);
        regenerateAndRender();
      });
    }

    // モード切替
    document.querySelectorAll('input[name="mode"]').forEach((r) => {
      r.addEventListener("change", () => {
        if (!r.checked) return;
        state.settings.mode = (r.value === "read" ? "read" : "write");
        saveSettings(state.settings);
        regenerateAndRender();
      });
    });

    // 解答ページ: 再描画のみ
    const ap = document.getElementById("answer-page-toggle");
    if (ap) {
      ap.addEventListener("change", () => {
        state.settings.includeAnswerPage = !!ap.checked;
        saveSettings(state.settings);
        rerenderOnly();
      });
    }

    // 出力枚数: 再生成
    const sc = document.getElementById("sheet-count");
    if (sc) {
      sc.addEventListener("change", () => {
        state.settings.sheetCount = clampInt(sc.value, 1, 20, state.settings.sheetCount);
        sc.value = String(state.settings.sheetCount);
        saveSettings(state.settings);
        regenerateAndRender();
      });
    }

    // 目安所要時間: ヘッダのみ更新 (再生成不要)
    const dg = document.getElementById("duration-goal");
    if (dg) {
      dg.addEventListener("change", () => {
        state.settings.durationGoal = clampInt(dg.value, 0, 120, state.settings.durationGoal);
        dg.value = String(state.settings.durationGoal);
        saveSettings(state.settings);
        rerenderOnly();
      });
    }

    // 「問題を新しく作る」
    const regen = document.getElementById("regenerate-btn");
    if (regen) regen.addEventListener("click", regenerateAndRender);

    // 「印刷する」
    const printBtn = document.getElementById("print-btn");
    if (printBtn) printBtn.addEventListener("click", () => window.print());
  }

  // === 7. 初期化 (DOMContentLoaded) ===

  function init() {
    // データ存在チェック
    const missing = detectMissingData();
    for (const g of missing) {
      // 中学範囲 (jhs*) も含めて、変数自体が無いケースはエラー (空配列は OK)
      showError(`データファイル data/kanji-${g}.js が読み込めません。`);
    }

    // 設定読込 → UI 反映
    state.settings = loadSettings();
    syncUiFromSettings();

    // イベント登録
    bindEvents();

    // 初回描画
    regenerateAndRender();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
