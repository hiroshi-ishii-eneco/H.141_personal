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
    grade: "g1",
    cumulative: true,
    mode: "write",
    sheetCount: 1,
    durationGoal: 15,
    includeAnswerPage: false
  };

  function loadSettings() {
    try {
      const raw = localStorage.getItem(SETTINGS_KEY);
      if (!raw) return { ...DEFAULT_SETTINGS };
      const parsed = JSON.parse(raw);
      // 既知キーのみマージ (未知値は無視)
      const merged = { ...DEFAULT_SETTINGS };
      for (const k of Object.keys(DEFAULT_SETTINGS)) {
        if (parsed[k] !== undefined) merged[k] = parsed[k];
      }
      // 値の正規化
      if (!GRADE_ORDER.includes(merged.grade)) merged.grade = DEFAULT_SETTINGS.grade;
      if (merged.mode !== "read" && merged.mode !== "write") merged.mode = DEFAULT_SETTINGS.mode;
      merged.cumulative = !!merged.cumulative;
      merged.includeAnswerPage = !!merged.includeAnswerPage;
      merged.sheetCount = clampInt(merged.sheetCount, 1, 20, DEFAULT_SETTINGS.sheetCount);
      merged.durationGoal = clampInt(merged.durationGoal, 0, 120, DEFAULT_SETTINGS.durationGoal);
      return merged;
    } catch (e) {
      // パース失敗時はデフォルトに戻す
      return { ...DEFAULT_SETTINGS };
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

  function buildPool(grade, cumulative) {
    const targets = [];
    if (cumulative) {
      for (const g of GRADE_ORDER) {
        targets.push(g);
        if (g === grade) break;
      }
    } else {
      targets.push(grade);
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

  // 選択学年までに「学習済み」の配当漢字集合を構築。
  // cumulative トグルに関わらず常に累積で計算する
  // (該当学年の児童はそれまでに習った全漢字を知っているため)。
  function buildLearnedKanjiSet(grade) {
    const set = new Set();
    for (const g of GRADE_ORDER) {
      const list = window[DATA_VAR[g]];
      if (Array.isArray(list)) {
        for (const entry of list) {
          if (entry && typeof entry.kanji === "string") set.add(entry.kanji);
        }
      }
      if (g === grade) break;
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

    // 4. 先頭 count 件
    const picked = filtered.slice(0, Math.max(0, count | 0));

    // 5. 各問題: 文を before/after に分解し、blank に入る表示テキストを決定
    const problems = picked.map((w) => {
      const answer = mode === "read" ? w.reading : w.word;
      const parts = splitSentence(w.sentence);
      // 書きモード: blank に reading (ひらがな) を表示 → 解答下線に漢字を書く
      // 読みモード: blank に word (漢字) を表示 → 解答下線にひらがなを書く
      const blankDisplay = mode === "read" ? w.word : w.reading;

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

  // body に学年バンド (low/mid/high) を付与
  function applyGradeBand(grade) {
    document.body.classList.remove("grade-low", "grade-mid", "grade-high");
    if (grade === "g1" || grade === "g2") document.body.classList.add("grade-low");
    else if (grade === "g3" || grade === "g4") document.body.classList.add("grade-mid");
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

  function modeLabel(mode) {
    return mode === "read" ? "読み" : "書き";
  }

  // ページごとのヘッダ HTML
  function buildPageHeader(grade, mode, settings, pageIndex, totalPages) {
    const gradePart = gradeHeaderHtml(grade);
    const modePart = escapeHtml(modeLabel(mode));
    const duration = clampInt(settings.durationGoal, 0, 120, DEFAULT_SETTINGS.durationGoal);
    return [
      `<header class="page-header">`,
      `<span>漢字練習 ${gradePart} (${modePart})</span>`,
      `<span>名前: ____________</span>`,
      `<span>日付: ____________</span>`,
      `<span>目安: ${duration}分</span>`,
      `<span>実績: ____ 分</span>`,
      totalPages > 1 ? `<span>${pageIndex + 1} / ${totalPages}</span>` : "",
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
  function buildProblemCell(problem, indexInPage, settings) {
    const num = indexInPage + 1;
    const isRead = settings.mode === "read";
    const blankText = escapeHtml(problem.blankDisplay || "");
    // read: 漢字表示 → blank-kanji / write: ひらがな表示 → blank-kana
    const blankClass = isRead ? "blank blank-kanji" : "blank blank-kana";
    return [
      `<div class="problem-cell">`,
      `<div class="self-check"></div>`,
      `<div class="problem-line">`,
      `<span class="problem-number">${num}.</span>`,
      `<span class="problem-sentence">`,
      escapeHtml(problem.sentenceBefore),
      `<span class="${blankClass}">${blankText}</span>`,
      escapeHtml(problem.sentenceAfter),
      `</span>`,
      `</div>`,
      `<div class="answer-area"></div>`,
      `</div>`
    ].join("");
  }

  // 解答ページ HTML を組み立てる
  // - 出題と同じ A4 縦・1 ページ 40 問 (2 列 × 20 行)
  // - 複数ページ出題時は「ページ番号-問題番号」形式で連番化
  function buildAnswerPage(problems, settings) {
    const totalProblemPages = Math.max(1, Math.ceil(problems.length / PROBLEMS_PER_PAGE));
    const useCompoundNumber = totalProblemPages > 1;

    // 「番号. 答え」文字列を全問分組み立て
    const items = problems.map((p, idx) => {
      const pageNo = Math.floor(idx / PROBLEMS_PER_PAGE) + 1;
      const localNo = (idx % PROBLEMS_PER_PAGE) + 1;
      const label = useCompoundNumber ? `${pageNo}-${localNo}` : `${localNo}`;
      return `<li>${escapeHtml(label)}. ${escapeHtml(p.answer)}</li>`;
    });

    // 1 ページ 40 問 (1 列 20 問 × 2 列) でグルーピング
    const ITEMS_PER_ANSWER_PAGE = PROBLEMS_PER_PAGE * 2;
    const pages = [];
    for (let i = 0; i < items.length; i += ITEMS_PER_ANSWER_PAGE) {
      pages.push(items.slice(i, i + ITEMS_PER_ANSWER_PAGE));
    }
    if (pages.length === 0) pages.push([]);

    const gradePart = gradeHeaderHtml(settings.grade);
    const modePart = escapeHtml(modeLabel(settings.mode));

    return pages
      .map((pageItems) => {
        // 左列 (前半 20) と 右列 (後半 20)
        const leftItems = pageItems.slice(0, PROBLEMS_PER_PAGE).join("");
        const rightItems = pageItems.slice(PROBLEMS_PER_PAGE).join("");
        return [
          `<section class="page answer-page">`,
          `<header class="page-header">`,
          `<span>解答 漢字練習 ${gradePart} (${modePart})</span>`,
          `<span>名前: ____________</span>`,
          `<span>日付: ____________</span>`,
          `</header>`,
          `<div class="answer-list">`,
          `<ol class="answer-column">${leftItems}</ol>`,
          `<ol class="answer-column">${rightItems}</ol>`,
          `</div>`,
          `</section>`
        ].join("");
      })
      .join("");
  }

  // 「準備中です」ページ (中学範囲などデータが空のとき)
  function buildEmptyPage(grade, settings, message) {
    const header = buildPageHeader(grade, settings.mode, settings, 0, 1);
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

    applyGradeBand(settings.grade);

    if (!problems || problems.length === 0) {
      // データ未整備 / プール空
      const data = window[DATA_VAR[settings.grade]];
      const isPlaceholder = !Array.isArray(data) || data.length === 0;
      const msg = isPlaceholder
        ? "この学年のデータは準備中です。"
        : "出題できる単語がありません (printable な単語が不足しています)。";
      container.insertAdjacentHTML("beforeend", buildEmptyPage(settings.grade, settings, msg));
      return;
    }

    // 20問単位でページに分割
    const pages = [];
    for (let i = 0; i < problems.length; i += PROBLEMS_PER_PAGE) {
      pages.push(problems.slice(i, i + PROBLEMS_PER_PAGE));
    }

    pages.forEach((pageProblems, pageIndex) => {
      const cells = pageProblems
        .map((p, i) => buildProblemCell(p, i, settings))
        .join("");
      const html = [
        `<section class="page">`,
        buildPageHeader(settings.grade, settings.mode, settings, pageIndex, pages.length),
        `<div class="problem-grid">`,
        cells,
        `</div>`,
        `</section>`
      ].join("");
      container.insertAdjacentHTML("beforeend", html);
    });

    // 解答ページ (オプション)
    if (settings.includeAnswerPage && problems.length > 0) {
      container.insertAdjacentHTML("beforeend", buildAnswerPage(problems, settings));
    }
  }

  // === 6. イベントハンドリング ===

  // アプリ全体の状態 (settings + 直近の問題セット)
  const state = {
    settings: { ...DEFAULT_SETTINGS },
    problems: []
  };

  // 再生成 + 再描画
  function regenerateAndRender() {
    const { grade, cumulative, mode, sheetCount } = state.settings;
    const pool = buildPool(grade, cumulative);
    const learnedKanji = buildLearnedKanjiSet(grade);
    const count = Math.max(1, sheetCount) * PROBLEMS_PER_PAGE;
    const { problems, excludedCount } = generateProblems(pool, mode, count, learnedKanji);
    state.problems = problems;

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

    // 学年ボタン
    document.querySelectorAll(".grade-btn").forEach((btn) => {
      const g = btn.dataset.grade;
      btn.classList.toggle("active", g === s.grade);
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
    // 学年ボタン
    document.querySelectorAll(".grade-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const g = btn.dataset.grade;
        if (!GRADE_ORDER.includes(g)) return;
        state.settings.grade = g;
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
