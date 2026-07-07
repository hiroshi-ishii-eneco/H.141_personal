// app.js
// 新高値投資 銘柄チェックリスト - アプリケーションロジック
// バニラJS / ビルドステップなし / ブラウザ直開きで動作
// 手法出典: 林則行『株の公式』(新高値投資)。個人学習用であり投資助言ではない。

(function () {
  "use strict";

  // === 1. 判定基準の定数（出典: 林則行『株の公式』。値は精査レポート invest/docs/ を参照）===

  const CRITERIA = {
    KEIJO_GROWTH_MIN: 20,        // 経常利益成長率の最低ライン(%)
    KEIJO_QUARTERS_REQUIRED: 2,  // 上記を満たすべき直近四半期数
    SALES_GROWTH_MIN: 10,        // 売上高成長率の最低ライン(%)
    VOLUME_SURGE_RATIO: 2,       // ブレイク時出来高の目安(平均比) ※書籍での定量基準は未確認、一般的な目安
    STOP_LOSS_PCT: 8,            // 買値からの損切りライン(%) ※参考表示用
    SMALL_CAP_MAX_OKU: 1000,     // 「小型株」とみなす時価総額の上限(億円)
    HIGH_ROE_MIN: 10,            // 「ROEが高い」とみなす最低ライン(%)
    PER_MAX: 60                  // PER の上限(倍)
  };

  // 加点条件の配点テーブル (合計 100 点。値を変えるだけで配点調整可能)
  const SCORE_WEIGHTS = {
    baseBreakout: 15,     // もみ合い後のブレイク
    volumeSurge: 15,      // ブレイク時の出来高急増
    salesGrowth: 15,      // 売上高が成長している
    ownerManagement: 15,  // オーナー経営
    themeTailwind: 10,    // 時代の追い風となるテーマ
    smallCap: 10,         // 時価総額が小さい
    highRoe: 10,          // ROE が高い
    perOk: 10             // PER が基準以下
  };

  // === 2. 保存管理 (localStorage) ===

  const STORAGE_KEY = "invest_stock_checklist_v1";

  // 保存レコード: { id, input, result, savedAt }
  function isValidEntry(e) {
    return (
      e && typeof e === "object" &&
      typeof e.id === "string" &&
      e.input && typeof e.input === "object" &&
      e.result && typeof e.result === "object" &&
      typeof e.savedAt === "string"
    );
  }

  function loadEntries() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      // 壊れたレコードは黙って除外し、有効なもののみ返す
      return parsed.filter(isValidEntry);
    } catch (e) {
      // パース失敗時は空にフォールバック
      return [];
    }
  }

  function saveEntries(entries) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
      return true;
    } catch (e) {
      // 容量超過など
      showNotice("保存に失敗しました (ブラウザの保存領域を確認してください)。", "error");
      return false;
    }
  }

  function generateId() {
    return "e" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 8);
  }

  // === 3. 通知表示 ===

  function showNotice(message, type) {
    const container = document.getElementById("notice-container");
    if (!container) return;
    const div = document.createElement("div");
    div.className = type === "error" ? "notice-message notice-error" : "notice-message notice-info";
    div.textContent = message;
    container.appendChild(div);
    // 通知は 5 秒で自動消去
    setTimeout(() => {
      if (div.parentNode) div.parentNode.removeChild(div);
    }, 5000);
  }

  function clearNotices() {
    const container = document.getElementById("notice-container");
    if (container) container.innerHTML = "";
  }

  // === 4. 入力値の取得・正規化 ===

  // number input の値を number|null に正規化 (未入力・非数は null)
  function parseNumOrNull(v) {
    if (v === "" || v == null) return null;
    const n = parseFloat(v);
    return Number.isFinite(n) ? n : null;
  }

  function el(id) {
    return document.getElementById(id);
  }

  function readFormInput() {
    return {
      stockCode: (el("stock-code")?.value || "").trim(),
      stockName: (el("stock-name")?.value || "").trim(),
      newHigh: !!el("new-high")?.checked,
      baseBreakout: !!el("base-breakout")?.checked,
      volumeSurge: !!el("volume-surge")?.checked,
      volumeRatio: parseNumOrNull(el("volume-ratio")?.value),
      keijoGrowthLatest: parseNumOrNull(el("keijo-growth-latest")?.value),
      keijoGrowthPrev: parseNumOrNull(el("keijo-growth-prev")?.value),
      salesGrowth: parseNumOrNull(el("sales-growth")?.value),
      profitForecastUp: !!el("profit-forecast-up")?.checked,
      per: parseNumOrNull(el("per")?.value),
      marketCap: parseNumOrNull(el("market-cap")?.value),
      ownerManagement: !!el("owner-management")?.checked,
      roe: parseNumOrNull(el("roe")?.value),
      themeTailwind: !!el("theme-tailwind")?.checked,
      themeMemo: (el("theme-memo")?.value || "").trim()
    };
  }

  function populateForm(input) {
    if (el("stock-code")) el("stock-code").value = input.stockCode || "";
    if (el("stock-name")) el("stock-name").value = input.stockName || "";
    if (el("new-high")) el("new-high").checked = !!input.newHigh;
    if (el("base-breakout")) el("base-breakout").checked = !!input.baseBreakout;
    if (el("volume-surge")) el("volume-surge").checked = !!input.volumeSurge;
    if (el("volume-ratio")) el("volume-ratio").value = input.volumeRatio == null ? "" : String(input.volumeRatio);
    if (el("keijo-growth-latest")) el("keijo-growth-latest").value = input.keijoGrowthLatest == null ? "" : String(input.keijoGrowthLatest);
    if (el("keijo-growth-prev")) el("keijo-growth-prev").value = input.keijoGrowthPrev == null ? "" : String(input.keijoGrowthPrev);
    if (el("sales-growth")) el("sales-growth").value = input.salesGrowth == null ? "" : String(input.salesGrowth);
    if (el("profit-forecast-up")) el("profit-forecast-up").checked = !!input.profitForecastUp;
    if (el("per")) el("per").value = input.per == null ? "" : String(input.per);
    if (el("market-cap")) el("market-cap").value = input.marketCap == null ? "" : String(input.marketCap);
    if (el("owner-management")) el("owner-management").checked = !!input.ownerManagement;
    if (el("roe")) el("roe").value = input.roe == null ? "" : String(input.roe);
    if (el("theme-tailwind")) el("theme-tailwind").checked = !!input.themeTailwind;
    if (el("theme-memo")) el("theme-memo").value = input.themeMemo || "";
  }

  // === 5. 判定ロジック (純粋関数、DOM 非依存) ===

  // 数値表示用フォーマット (末尾の不要な 0 を落とす)
  function fmtNum(n) {
    if (n == null || !Number.isFinite(n)) return "—";
    return String(Math.round(n * 10) / 10);
  }

  // judge(input) -> {
  //   verdict: 'pass' | 'fail' | 'insufficient',
  //   score: 0-100,
  //   ruleResults: [{ id, label, status: 'ok'|'ng'|'na', comment }]
  // }
  //
  // 必須条件 (1 つでも欠けたら不合格):
  //   must-new-high      新高値更新 (過去2年以内の高値を上回った)
  //   must-keijo-growth  直近2四半期の経常利益成長率が両方 KEIJO_GROWTH_MIN(20)% 以上
  //   must-profit-up     今期予想は増益
  // 必須の数値項目が未入力 -> verdict='insufficient'
  //
  // 加点条件 (SCORE_WEIGHTS でスコア化、任意項目の未入力は na で減点なし):
  //   bonus-base-breakout / bonus-volume-surge / bonus-sales-growth /
  //   bonus-owner / bonus-theme / bonus-small-cap / bonus-high-roe
  function judge(input) {
    const ruleResults = [];
    let mustFail = false;
    let mustMissing = false;

    // --- 必須 1: 新高値更新 ---
    if (input.newHigh) {
      ruleResults.push({
        id: "must-new-high",
        label: "【必須】新高値更新 (過去2年以内の高値超え)",
        status: "ok",
        comment: "新高値を更新している。"
      });
    } else {
      mustFail = true;
      ruleResults.push({
        id: "must-new-high",
        label: "【必須】新高値更新 (過去2年以内の高値超え)",
        status: "ng",
        comment: "新高値を更新していない。新高値銘柄のみが投資対象。"
      });
    }

    // --- 必須 2: 直近2四半期の経常利益成長率 ---
    const latest = input.keijoGrowthLatest;
    const prev = input.keijoGrowthPrev;
    const growthLabel =
      `【必須】直近${CRITERIA.KEIJO_QUARTERS_REQUIRED}四半期の経常利益成長率 ${CRITERIA.KEIJO_GROWTH_MIN}%以上`;
    if (latest == null || prev == null) {
      mustMissing = true;
      ruleResults.push({
        id: "must-keijo-growth",
        label: growthLabel,
        status: "na",
        comment: "経常利益成長率が未入力のため判定できない (決算短信から転記)。"
      });
    } else if (latest >= CRITERIA.KEIJO_GROWTH_MIN && prev >= CRITERIA.KEIJO_GROWTH_MIN) {
      ruleResults.push({
        id: "must-keijo-growth",
        label: growthLabel,
        status: "ok",
        comment: `直近 ${fmtNum(latest)}% / 前回 ${fmtNum(prev)}% で両方 ${CRITERIA.KEIJO_GROWTH_MIN}% 以上。`
      });
    } else {
      mustFail = true;
      ruleResults.push({
        id: "must-keijo-growth",
        label: growthLabel,
        status: "ng",
        comment: `直近 ${fmtNum(latest)}% / 前回 ${fmtNum(prev)}% → 基準 ${CRITERIA.KEIJO_GROWTH_MIN}% に未達の四半期がある。`
      });
    }

    // --- 必須 3: 今期増益予想 ---
    if (input.profitForecastUp) {
      ruleResults.push({
        id: "must-profit-up",
        label: "【必須】今期予想は増益",
        status: "ok",
        comment: "会社予想が増益である。"
      });
    } else {
      mustFail = true;
      ruleResults.push({
        id: "must-profit-up",
        label: "【必須】今期予想は増益",
        status: "ng",
        comment: "今期増益予想が確認できない。減益予想の銘柄は対象外。"
      });
    }

    // --- 加点条件 (スコア化) ---
    let score = 0;

    // もみ合い後のブレイク
    if (input.baseBreakout) {
      score += SCORE_WEIGHTS.baseBreakout;
      ruleResults.push({
        id: "bonus-base-breakout",
        label: `もみ合い (ベース) 期間を経てのブレイク (+${SCORE_WEIGHTS.baseBreakout})`,
        status: "ok",
        comment: "十分なベース形成後の新高値は信頼度が高い。"
      });
    } else {
      ruleResults.push({
        id: "bonus-base-breakout",
        label: `もみ合い (ベース) 期間を経てのブレイク (+${SCORE_WEIGHTS.baseBreakout})`,
        status: "ng",
        comment: "ベース形成が確認できない。だましブレイクに注意。"
      });
    }

    // 出来高急増
    if (input.volumeSurge) {
      score += SCORE_WEIGHTS.volumeSurge;
      const ratioNote =
        input.volumeRatio != null
          ? `平均比 ${fmtNum(input.volumeRatio)} 倍` +
            (input.volumeRatio >= CRITERIA.VOLUME_SURGE_RATIO
              ? ` (目安 ${CRITERIA.VOLUME_SURGE_RATIO} 倍以上を満たす)。`
              : ` (目安 ${CRITERIA.VOLUME_SURGE_RATIO} 倍にはやや届かない)。`)
          : `目安は平均出来高の ${CRITERIA.VOLUME_SURGE_RATIO} 倍以上。`;
      ruleResults.push({
        id: "bonus-volume-surge",
        label: `ブレイク時の出来高急増 (+${SCORE_WEIGHTS.volumeSurge})`,
        status: "ok",
        comment: `出来高を伴うブレイク。${ratioNote}`
      });
    } else {
      ruleResults.push({
        id: "bonus-volume-surge",
        label: `ブレイク時の出来高急増 (+${SCORE_WEIGHTS.volumeSurge})`,
        status: "ng",
        comment: `出来高の裏付けがない (目安: 平均の ${CRITERIA.VOLUME_SURGE_RATIO} 倍以上)。`
      });
    }

    // 売上高成長 (任意数値)
    if (input.salesGrowth == null) {
      ruleResults.push({
        id: "bonus-sales-growth",
        label: `売上高成長率 ${CRITERIA.SALES_GROWTH_MIN}%以上 (+${SCORE_WEIGHTS.salesGrowth})`,
        status: "na",
        comment: "売上高成長率は未入力 (減点なし)。"
      });
    } else if (input.salesGrowth >= CRITERIA.SALES_GROWTH_MIN) {
      score += SCORE_WEIGHTS.salesGrowth;
      ruleResults.push({
        id: "bonus-sales-growth",
        label: `売上高成長率 ${CRITERIA.SALES_GROWTH_MIN}%以上 (+${SCORE_WEIGHTS.salesGrowth})`,
        status: "ok",
        comment: `売上高成長率 ${fmtNum(input.salesGrowth)}%。利益成長に売上の裏付けがある。`
      });
    } else {
      ruleResults.push({
        id: "bonus-sales-growth",
        label: `売上高成長率 ${CRITERIA.SALES_GROWTH_MIN}%以上 (+${SCORE_WEIGHTS.salesGrowth})`,
        status: "ng",
        comment: `売上高成長率 ${fmtNum(input.salesGrowth)}%。基準${CRITERIA.SALES_GROWTH_MIN}%未満で売上の裏付けが弱い。`
      });
    }

    // オーナー経営
    if (input.ownerManagement) {
      score += SCORE_WEIGHTS.ownerManagement;
      ruleResults.push({
        id: "bonus-owner",
        label: `オーナー経営 (大株主に経営者) (+${SCORE_WEIGHTS.ownerManagement})`,
        status: "ok",
        comment: "経営者が大株主。大化け株に多い特徴。"
      });
    } else {
      ruleResults.push({
        id: "bonus-owner",
        label: `オーナー経営 (大株主に経営者) (+${SCORE_WEIGHTS.ownerManagement})`,
        status: "ng",
        comment: "オーナー経営は確認できない。"
      });
    }

    // テーマの追い風
    if (input.themeTailwind) {
      score += SCORE_WEIGHTS.themeTailwind;
      const memoNote = input.themeMemo ? ` メモ: ${input.themeMemo}` : "";
      ruleResults.push({
        id: "bonus-theme",
        label: `時代の追い風となるテーマ (+${SCORE_WEIGHTS.themeTailwind})`,
        status: "ok",
        comment: `追い風テーマあり。${memoNote}`
      });
    } else {
      ruleResults.push({
        id: "bonus-theme",
        label: `時代の追い風となるテーマ (+${SCORE_WEIGHTS.themeTailwind})`,
        status: "ng",
        comment: "追い風となるテーマが確認できない。"
      });
    }

    // 時価総額が小さい (任意数値)
    if (input.marketCap == null) {
      ruleResults.push({
        id: "bonus-small-cap",
        label: `時価総額が小さい (${CRITERIA.SMALL_CAP_MAX_OKU}億円未満) (+${SCORE_WEIGHTS.smallCap})`,
        status: "na",
        comment: "時価総額は未入力 (減点なし)。"
      });
    } else if (input.marketCap < CRITERIA.SMALL_CAP_MAX_OKU) {
      score += SCORE_WEIGHTS.smallCap;
      ruleResults.push({
        id: "bonus-small-cap",
        label: `時価総額が小さい (${CRITERIA.SMALL_CAP_MAX_OKU}億円未満) (+${SCORE_WEIGHTS.smallCap})`,
        status: "ok",
        comment: `時価総額 ${fmtNum(input.marketCap)} 億円。小型株ほど値幅が期待できる。`
      });
    } else {
      ruleResults.push({
        id: "bonus-small-cap",
        label: `時価総額が小さい (${CRITERIA.SMALL_CAP_MAX_OKU}億円未満) (+${SCORE_WEIGHTS.smallCap})`,
        status: "ng",
        comment: `時価総額 ${fmtNum(input.marketCap)} 億円で基準以上。大型株は値動きが重くなりがち。`
      });
    }

    // ROE が高い (任意数値)
    if (input.roe == null) {
      ruleResults.push({
        id: "bonus-high-roe",
        label: `ROE が高い (${CRITERIA.HIGH_ROE_MIN}%以上) (+${SCORE_WEIGHTS.highRoe})`,
        status: "na",
        comment: "ROE は未入力 (減点なし)。"
      });
    } else if (input.roe >= CRITERIA.HIGH_ROE_MIN) {
      score += SCORE_WEIGHTS.highRoe;
      ruleResults.push({
        id: "bonus-high-roe",
        label: `ROE が高い (${CRITERIA.HIGH_ROE_MIN}%以上) (+${SCORE_WEIGHTS.highRoe})`,
        status: "ok",
        comment: `ROE ${fmtNum(input.roe)}% で資本効率が高い。`
      });
    } else {
      ruleResults.push({
        id: "bonus-high-roe",
        label: `ROE が高い (${CRITERIA.HIGH_ROE_MIN}%以上) (+${SCORE_WEIGHTS.highRoe})`,
        status: "ng",
        comment: `ROE ${fmtNum(input.roe)}% で基準 ${CRITERIA.HIGH_ROE_MIN}% 未満。`
      });
    }

    // PER (任意数値)
    if (input.per == null) {
      ruleResults.push({
        id: "bonus-per",
        label: `PER ${CRITERIA.PER_MAX}倍以下 (+${SCORE_WEIGHTS.perOk})`,
        status: "na",
        comment: "PER は未入力 (減点なし)。"
      });
    } else if (input.per <= CRITERIA.PER_MAX) {
      score += SCORE_WEIGHTS.perOk;
      ruleResults.push({
        id: "bonus-per",
        label: `PER ${CRITERIA.PER_MAX}倍以下 (+${SCORE_WEIGHTS.perOk})`,
        status: "ok",
        comment: `PER ${fmtNum(input.per)}倍で基準 ${CRITERIA.PER_MAX}倍以下。`
      });
    } else {
      ruleResults.push({
        id: "bonus-per",
        label: `PER ${CRITERIA.PER_MAX}倍以下 (+${SCORE_WEIGHTS.perOk})`,
        status: "ng",
        comment: `PER ${fmtNum(input.per)}倍で基準 ${CRITERIA.PER_MAX}倍超は過熱圏。`
      });
    }

    // スコアを 0-100 にクランプ
    score = Math.max(0, Math.min(100, score));

    // verdict: 必須の未入力 > 必須の未達 > 合格 の優先順で決定
    // (未入力と未達が併存する場合、条件を満たさない事実が確定しているため fail を優先)
    let verdict;
    if (mustFail) verdict = "fail";
    else if (mustMissing) verdict = "insufficient";
    else verdict = "pass";

    return { verdict, score, ruleResults };
  }

  // === 6. 判定結果の描画 ===

  const VERDICT_LABEL = {
    pass: "合格",
    fail: "不合格",
    insufficient: "判定不可 (入力不足)"
  };

  const STATUS_MARK = { ok: "○", ng: "×", na: "−" };

  function escapeHtml(s) {
    if (s == null) return "";
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function renderResult(result, input) {
    const container = document.getElementById("result-container");
    if (!container) return;

    const verdictClass = `verdict-${result.verdict}`;
    const title = [input.stockCode, input.stockName].filter(Boolean).join(" ");

    const rulesHtml = result.ruleResults
      .map((r) => {
        return [
          `<li class="rule-item rule-${r.status}">`,
          `<span class="rule-mark" aria-hidden="true">${STATUS_MARK[r.status] || "−"}</span>`,
          `<span class="rule-body">`,
          `<span class="rule-label">${escapeHtml(r.label)}</span>`,
          `<span class="rule-comment">${escapeHtml(r.comment)}</span>`,
          `</span>`,
          `</li>`
        ].join("");
      })
      .join("");

    container.innerHTML = [
      title ? `<p class="result-stock">${escapeHtml(title)}</p>` : "",
      `<div class="verdict-row">`,
      `<span class="verdict-badge ${verdictClass}">${VERDICT_LABEL[result.verdict] || result.verdict}</span>`,
      `<span class="score-text">加点スコア ${result.score} / 100</span>`,
      `</div>`,
      `<div class="score-bar" role="img" aria-label="スコア ${result.score} / 100">`,
      `<div class="score-bar-fill ${verdictClass}" style="width: ${result.score}%;"></div>`,
      `</div>`,
      `<ul class="rule-list">${rulesHtml}</ul>`,
      `<div class="reference-note">`,
      `<p>参考情報 (手法のルール):</p>`,
      `<ul>`,
      `<li>損切り目安: 買値から −${CRITERIA.STOP_LOSS_PCT}% (書籍レビュー等の複数ソースに基づく目安)。</li>`,
      `<li>必須3条件 (新高値・経常増益率${CRITERIA.KEIJO_GROWTH_MIN}%×直近${CRITERIA.KEIJO_QUARTERS_REQUIRED}四半期・今期増益予想) を欠く銘柄は見送り。</li>`,
      `<li>加点スコアは補助指標であり、高スコアでも投資成果を保証しない。</li>`,
      `</ul>`,
      `</div>`
    ].join("");
  }

  function clearResult() {
    const container = document.getElementById("result-container");
    if (container) {
      container.innerHTML = `<p class="placeholder">左のフォームに入力し「判定する」を押してください。</p>`;
    }
  }

  // === 7. 保存済み一覧の描画 ===

  function formatSavedAt(iso) {
    const d = new Date(iso);
    if (isNaN(d.getTime())) return iso;
    const pad2 = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}/${pad2(d.getMonth() + 1)}/${pad2(d.getDate())} ${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
  }

  function renderHistory() {
    const tbody = document.getElementById("history-tbody");
    const emptyNote = document.getElementById("history-empty");
    const table = document.getElementById("history-table");
    if (!tbody) return;

    const entries = loadEntries().slice().sort((a, b) => (a.savedAt < b.savedAt ? 1 : -1));
    tbody.innerHTML = "";

    const hasEntries = entries.length > 0;
    if (emptyNote) emptyNote.style.display = hasEntries ? "none" : "";
    if (table) table.style.display = hasEntries ? "" : "none";
    if (!hasEntries) return;

    for (const entry of entries) {
      const tr = document.createElement("tr");
      tr.className = "history-row";
      tr.dataset.id = entry.id;

      const verdict = entry.result.verdict;
      tr.innerHTML = [
        `<td>${escapeHtml(entry.input.stockCode || "—")}</td>`,
        `<td>${escapeHtml(entry.input.stockName || "—")}</td>`,
        `<td><span class="verdict-badge badge-small verdict-${escapeHtml(verdict)}">${VERDICT_LABEL[verdict] || escapeHtml(verdict)}</span></td>`,
        `<td class="cell-num">${Number.isFinite(entry.result.score) ? entry.result.score : "—"}</td>`,
        `<td>${escapeHtml(formatSavedAt(entry.savedAt))}</td>`,
        `<td><button type="button" class="delete-btn" data-id="${escapeHtml(entry.id)}">削除</button></td>`
      ].join("");

      // 行クリック: フォームへ再読込 (削除ボタンは除外)
      tr.addEventListener("click", (ev) => {
        if (ev.target.closest(".delete-btn")) return;
        populateForm(entry.input);
        renderResult(entry.result, entry.input);
        showNotice(`保存済み銘柄「${entry.input.stockCode || entry.input.stockName || "無名"}」をフォームに読み込みました。`, "info");
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      // 削除ボタン
      const delBtn = tr.querySelector(".delete-btn");
      if (delBtn) {
        delBtn.addEventListener("click", () => {
          const name = [entry.input.stockCode, entry.input.stockName].filter(Boolean).join(" ") || "この銘柄";
          if (!window.confirm(`${name} の保存データを削除しますか？`)) return;
          const remaining = loadEntries().filter((e) => e.id !== entry.id);
          if (saveEntries(remaining)) {
            renderHistory();
            showNotice("削除しました。", "info");
          }
        });
      }

      tbody.appendChild(tr);
    }
  }

  // === 8. イベントハンドリング ===

  function validateStockCode(code) {
    return /^[0-9A-Za-z]{4}$/.test(code);
  }

  function runJudge() {
    clearNotices();
    const input = readFormInput();
    if (input.stockCode && !validateStockCode(input.stockCode)) {
      showNotice("銘柄コードは4桁の英数字で入力してください (例: 7203, 285A)。", "error");
    }
    const result = judge(input);
    renderResult(result, input);
    return { input, result };
  }

  function bindEvents() {
    const judgeBtn = document.getElementById("judge-btn");
    if (judgeBtn) judgeBtn.addEventListener("click", runJudge);

    const saveBtn = document.getElementById("save-btn");
    if (saveBtn) {
      saveBtn.addEventListener("click", () => {
        const { input, result } = runJudge();
        if (!input.stockCode && !input.stockName) {
          showNotice("保存するには銘柄コードまたは銘柄名を入力してください。", "error");
          return;
        }
        const entries = loadEntries();
        entries.push({
          id: generateId(),
          input: input,
          result: result,
          savedAt: new Date().toISOString()
        });
        if (saveEntries(entries)) {
          renderHistory();
          showNotice(`「${input.stockCode || input.stockName}」を保存しました (判定: ${VERDICT_LABEL[result.verdict]})。`, "info");
        }
      });
    }

    const resetBtn = document.getElementById("reset-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        const form = document.getElementById("checklist-form");
        if (form) form.reset();
        clearNotices();
        clearResult();
      });
    }
  }

  // === 9. 初期化 ===

  function init() {
    bindEvents();
    renderHistory();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
