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

  // 1ページあたりの問題数
  const PROBLEMS_PER_PAGE = 20;

  // 解答欄 1 文字あたりの幅 (mm) と余白
  const ANSWER_CHAR_WIDTH_MM = 20;
  const ANSWER_PADDING_CHARS = 2;

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
    grade: "g3",
    cumulative: true,
    mode: "write",
    answerStyle: "boxed",
    sheetCount: 1,
    durationGoal: 15,
    crossGuide: false
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
      if (merged.answerStyle !== "boxed" && merged.answerStyle !== "underline") merged.answerStyle = DEFAULT_SETTINGS.answerStyle;
      merged.cumulative = !!merged.cumulative;
      merged.crossGuide = !!merged.crossGuide;
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

  // sentence 内の ○+ を、与えられた文字数分の ○ に置換
  function replacePlaceholder(sentence, replacementChar, charCount) {
    if (typeof sentence !== "string" || sentence.length === 0) return "";
    const replacement = replacementChar.repeat(Math.max(1, charCount));
    // 「○○」やそれ以上の連続を 1 度だけ置換 (最初の出現のみ)
    return sentence.replace(/○+/, replacement);
  }

  function generateProblems(pool, mode, count) {
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

    // 2. printable === false と、正答が長すぎるもの・必須フィールド欠落を除外
    const filtered = flat.filter((w) => {
      if (w.printable === false) return false;
      if (!w.word || !w.reading) return false;
      // 正答長チェック (read=reading, write=word)
      const ansLen = (mode === "read" ? w.reading : w.word).length;
      if (ansLen === 0 || ansLen > MAX_ANSWER_LEN) return false;
      return true;
    });

    const excludedCount = totalCandidates - filtered.length;

    // 3. シャッフル
    shuffle(filtered);

    // 4. 先頭 count 件
    const picked = filtered.slice(0, Math.max(0, count | 0));

    // 5. 各問題に表示文と正答を組み立てる
    const problems = picked.map((w) => {
      const answer = mode === "read" ? w.reading : w.word;
      // sentence の ○ 置換
      // read モード: word(漢字) に置換 (○ の数は word 文字数に合わせる)
      // write モード: ○ の数を reading 文字数に合わせる (空欄として残す)
      let displaySentence;
      if (mode === "read") {
        // 読みモード: ○+ を漢字表記 (word) でそのまま置換
        displaySentence = (w.sentence || "").replace(/○+/, w.word);
      } else {
        // 書きモード: ○+ を「正答 (reading) 文字数ぶんの ○」に置換
        displaySentence = replacePlaceholder(w.sentence, "○", w.reading.length);
      }

      return {
        kanji: w.kanji,
        word: w.word,
        reading: w.reading,
        okurigana: w.okurigana,
        sentence: displaySentence,
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
    if (grade === "g1" || grade === "g2") {
      document.body.classList.add("grade-low");
    } else if (grade === "g3" || grade === "g4") {
      document.body.classList.add("grade-mid");
    } else {
      document.body.classList.add("grade-high");
    }
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
      `<span>${pageIndex + 1} / ${totalPages}</span>`,
      `</header>`
    ].join("");
  }

  // 1 問のセル HTML
  function buildProblemCell(problem, indexInPage, settings) {
    const num = indexInPage + 1;
    const widthMm = (problem.answerLength + ANSWER_PADDING_CHARS) * ANSWER_CHAR_WIDTH_MM;
    const classes = ["answer-area", settings.answerStyle];
    if (settings.crossGuide) classes.push("cross-guide");
    return [
      `<div class="problem-cell">`,
      `<div class="self-check"></div>`,
      `<div class="problem-number">${num}.</div>`,
      `<div class="problem-sentence">${escapeHtml(problem.sentence)}</div>`,
      `<div class="${classes.join(" ")}" style="width: ${widthMm}mm;"></div>`,
      `</div>`
    ].join("");
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
    const count = Math.max(1, sheetCount) * PROBLEMS_PER_PAGE;
    const { problems, excludedCount } = generateProblems(pool, mode, count);
    state.problems = problems;

    // 除外件数の表示 (毎回クリアした上で必要時のみ出す)
    clearErrors();
    if (excludedCount > 0) {
      showError(`印刷に適さない単語を ${excludedCount} 件除外しました (printable=false または正答が ${MAX_ANSWER_LEN} 文字超)。`);
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

    // 解答欄スタイル
    document.querySelectorAll('input[name="answer-style"]').forEach((r) => {
      r.checked = (r.value === s.answerStyle);
    });

    // 十字リーダー
    const cg = document.getElementById("cross-guide");
    if (cg) cg.checked = !!s.crossGuide;

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

    // 解答欄スタイル: 再生成不要 (設定だけ)
    document.querySelectorAll('input[name="answer-style"]').forEach((r) => {
      r.addEventListener("change", () => {
        if (!r.checked) return;
        state.settings.answerStyle = (r.value === "underline" ? "underline" : "boxed");
        saveSettings(state.settings);
        rerenderOnly();
      });
    });

    // 十字リーダー: 再描画のみ
    const cg = document.getElementById("cross-guide");
    if (cg) {
      cg.addEventListener("change", () => {
        state.settings.crossGuide = !!cg.checked;
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
