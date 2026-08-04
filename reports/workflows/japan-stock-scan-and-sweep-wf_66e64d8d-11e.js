export const meta = {
  name: 'japan-stock-scan-and-sweep',
  description: '日本株の市場環境スキャンと非AI候補銘柄の多角スイープ',
  phases: [
    { title: 'Market Scan', detail: 'マクロ・イベント・セクター動向 (Sonnet x3)', model: 'sonnet' },
    { title: 'Candidate Sweep', detail: '6つの切り口で候補銘柄を収集 (Sonnet x6)', model: 'sonnet' },
  ],
}

const COMMON = `あなたは日本株のリサーチアシスタントです。本日は2026年7月8日。投資期間は本日から約2ヶ月(2026年9月上旬まで)。
WebSearch と WebFetch を使って最新情報を収集してください(Yahoo!ファイナンス、株探(kabutan)、みんかぶ、日経、Bloomberg、ロイター、企業IR等)。
必ず出典URLと情報の日付を記録すること。古い情報(2026年5月以前)しか見つからない場合はその旨を明記。
重要な除外条件: AIテーマで買われている銘柄(AI半導体、データセンター、AIソフトウェア、AI関連設備投資が主な買い材料の銘柄)は対象外。ただしAI文脈でない半導体・電子部品・機械は対象に含めてよい。`

const CANDIDATE_SCHEMA = {
  type: 'object',
  properties: {
    candidates: {
      type: 'array',
      maxItems: 30,
      items: {
        type: 'object',
        properties: {
          code: { type: 'string', description: '証券コード (例: 7203)' },
          name: { type: 'string', description: '企業名' },
          sector: { type: 'string', description: '業種' },
          market_cap: { type: 'string', description: '時価総額の概算 (例: 約3兆円、約2500億円)。不明なら "不明"' },
          reason: { type: 'string', description: 'この銘柄が今後2ヶ月で上昇が見込める根拠 (2-4文)' },
          catalyst: { type: 'string', description: '2ヶ月以内の具体的カタリスト。なければ空文字' },
          ai_theme_risk: { type: 'string', enum: ['none', 'low', 'gray', 'high'], description: 'AIテーマで買われている度合い。high=AIテーマ株(除外対象)' },
          sources: { type: 'array', items: { type: 'string' }, description: '出典URL' },
          data_date: { type: 'string', description: '主要情報の日付 (例: 2026-07-04)' },
        },
        required: ['code', 'name', 'sector', 'reason', 'ai_theme_risk', 'sources'],
      },
    },
    notes: { type: 'string', description: '調査上の注意点・データ鮮度の限界など' },
  },
  required: ['candidates'],
}

const scanPrompts = [
  {
    key: 'macro',
    prompt: `${COMMON}

タスク: 日本株のマクロ環境と指数動向を調査し、レポートしてください。
1. 日経平均株価とTOPIXの現在水準と直近1〜3ヶ月のトレンド(具体的な数値と日付)
2. 日銀の金融政策の現状と今後2ヶ月の会合予定(2026年7月・9月)、利上げ観測の状況
3. ドル円の水準とトレンド、輸出株/内需株への含意
4. 米国の対日関税の状況と影響を受けるセクター
5. 海外投資家の日本株売買動向
最後に「今後2ヶ月で追い風を受けやすい銘柄特性」を3-5点にまとめてください。出典URL必須。`,
  },
  {
    key: 'events',
    prompt: `${COMMON}

タスク: 2026年7月8日〜9月上旬の日本株市場のイベントカレンダーを作成してください。
1. 4-6月期(第1四半期)決算発表シーズンの日程感(7月下旬〜8月中旬のピーク)
2. 日銀金融政策決定会合の日程
3. 8月末・9月末の配当・株主優待の権利確定日
4. 政治イベント(選挙、政策発表等)、経済指標の重要日程
5. 米国のFOMC日程と日本株への含意
各イベントについて「どのようなセクター・銘柄に影響するか」を付記してください。出典URL必須。`,
  },
  {
    key: 'sectors',
    prompt: `${COMMON}

タスク: 直近1〜3ヶ月で資金流入している日本株の非AIセクター・テーマを調査してください。
1. 東証33業種の直近パフォーマンスランキング(どの業種が強いか、具体的な騰落率と期間)
2. 強いテーマの背景(例: 防衛費増額、日銀利上げと銀行株、造船・重工、インバウンド回復、賃上げと内需、株主還元強化、防災・国土強靭化など — 実際に何が強いかをデータで確認)
3. 各テーマの持続性(今後2ヶ月続きそうか、材料出尽くしリスクはないか)
4. 逆に避けるべき弱いセクター
AIテーマ(AI半導体・データセンター等)は分析対象から除外。出典URL必須。`,
  },
]

const sweepPrompts = [
  { key: 'momentum', prompt: `タスク: 年初来高値を更新中、または直近1〜3ヶ月で強い上昇モメンタムを持つ日本株(非AI)を最大30銘柄収集してください。株探の年初来高値更新銘柄リスト、値上がり率ランキング等を活用。単なる仕手株・低流動性株は除外し、出来高が十分な銘柄に絞ること。` },
  { key: 'earnings', prompt: `タスク: 直近(2026年4月〜7月)に業績の上方修正、好決算、強気ガイダンスを発表した日本株(非AI)を最大30銘柄収集してください。株探の「上方修正」「決算速報」記事、適時開示情報を活用。修正の規模(営業利益+何%等)を reason に含めること。` },
  { key: 'themes', prompt: `タスク: 現在の強いセクターテーマに乗る日本株(非AI)を最大30銘柄収集してください。候補テーマ: 防衛、造船・重工、銀行・保険(日銀利上げ)、商社、建設・不動産、電力、資源・エネルギー。各テーマで代表格と出遅れ株の両方を含めること。テーマが実際に強いかをまず確認してから銘柄を選ぶこと。` },
  { key: 'returns', prompt: `タスク: 2026年4月以降に大規模な自社株買い、増配、株主還元方針の強化を発表した日本株(非AI)を最大30銘柄収集してください。自社株買いの規模(発行済株式数に対する%)、増配率を reason に含めること。アクティビスト(物言う株主)が関与している銘柄も含めてよい。` },
  { key: 'analysts', prompt: `タスク: 直近1〜2ヶ月でアナリストの格上げ・目標株価引き上げが相次いでいる日本株(非AI)を最大30銘柄収集してください。株探・みんかぶ・トレーダーズウェブのレーティング情報を活用。どの証券会社が格上げしたか、目標株価と現在値の乖離を reason に含めること。` },
  { key: 'domestic', prompt: `タスク: インバウンド・内需・消費関連で業績モメンタムのある日本株を最大30銘柄収集してください。対象: 小売、外食、鉄道・空運、ホテル・レジャー、食品、化粧品、ドラッグストア等。訪日客数の最新動向と各社の月次売上動向を確認してから選ぶこと。` },
]

phase('Market Scan')
const [scans, sweeps] = await parallel([
  () => parallel(scanPrompts.map(s => () =>
    agent(s.prompt, { label: `scan:${s.key}`, phase: 'Market Scan', model: 'sonnet' })
  )),
  () => parallel(sweepPrompts.map(s => () =>
    agent(`${COMMON}\n\n${s.prompt}\n\n各銘柄について ai_theme_risk を正直に判定すること(AIテーマ株が紛れ込むと後工程で除外され調査が無駄になる)。出典URLと情報日付を必ず含めること。`, {
      label: `sweep:${s.key}`, phase: 'Candidate Sweep', model: 'sonnet', schema: CANDIDATE_SCHEMA,
    })
  )),
])

const scanReport = {}
scanPrompts.forEach((s, i) => { scanReport[s.key] = scans[i] || '(failed)' })

const allCandidates = []
sweepPrompts.forEach((s, i) => {
  const r = sweeps[i]
  if (r && r.candidates) {
    r.candidates.forEach(c => allCandidates.push({ ...c, source_sweep: s.key }))
  }
})
log(`候補銘柄 ${allCandidates.length} 件を収集`)

return { scanReport, allCandidates, sweepNotes: sweeps.filter(Boolean).map(s => s.notes).filter(Boolean) }