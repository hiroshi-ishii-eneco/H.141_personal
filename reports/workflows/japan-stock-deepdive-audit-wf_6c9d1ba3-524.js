export const meta = {
  name: 'japan-stock-deepdive-audit',
  description: 'ショートリスト38銘柄の個別深掘り(Sonnet)と敵対的監査(Fable)',
  phases: [
    { title: 'Deep Dive', detail: '1銘柄1エージェントで構造化データ収集 (Sonnet)', model: 'sonnet' },
    { title: 'Audit', detail: 'スコア5以上の銘柄を敵対的に事実検証 (Fable)' },
  ],
}

const SHORTLIST_FILE = '/tmp/claude-0/-home-user-H-141-personal/f0e7ba4a-29ec-54ec-9306-be99abd7c0a2/scratchpad/shortlist.json'

const DEEP_SCHEMA = {
  type: 'object',
  properties: {
    code: { type: 'string' },
    name: { type: 'string' },
    market_cap: { type: 'string', description: '時価総額 (例: 約3.2兆円)' },
    current_price: { type: 'string', description: '直近株価と日付 (例: 4,120円 (2026-07-15終値))' },
    trend_3m: { type: 'string', description: '直近3ヶ月の株価トレンド要約 (騰落率含む)' },
    pct_from_high: { type: 'string', description: '年初来高値からの位置 (例: 高値から-3%)' },
    earnings: { type: 'string', description: '直近決算の実績要約 (増収増益率など具体数値)' },
    guidance_progress: { type: 'string', description: '会社計画と進捗率、上方修正の有無' },
    catalysts: { type: 'array', items: { type: 'object', properties: { date: { type: 'string' }, event: { type: 'string' } }, required: ['date', 'event'] }, description: '2026-09-15までの具体的カタリスト' },
    valuation: { type: 'string', description: 'PER/PBR と同業比較コメント' },
    dividend_yield: { type: 'string', description: '予想配当利回り' },
    risks: { type: 'array', items: { type: 'string' }, description: '下落リスク要因 (2-4個)' },
    ai_theme_check: { type: 'string', enum: ['none', 'low', 'gray', 'high'], description: 'AIテーマで買われている度合いの再判定' },
    ai_theme_note: { type: 'string', description: 'AIテーマ判定の根拠' },
    preliminary_score: { type: 'number', minimum: 0, maximum: 10, description: '今後2ヶ月の上昇期待の暫定スコア' },
    score_rationale: { type: 'string', description: 'スコアの根拠 (2-3文)' },
    sources: { type: 'array', items: { type: 'string' }, description: '出典URL (重要データごと)' },
    data_quality_note: { type: 'string', description: 'データ鮮度・信頼性の注意点' },
  },
  required: ['code', 'name', 'current_price', 'trend_3m', 'earnings', 'catalysts', 'valuation', 'risks', 'ai_theme_check', 'preliminary_score', 'score_rationale', 'sources'],
}

const AUDIT_SCHEMA = {
  type: 'object',
  properties: {
    code: { type: 'string' },
    verdict: { type: 'string', enum: ['pass', 'caution', 'fail'], description: 'pass=主張が概ね裏付けられた, caution=一部不確実, fail=主要な主張が反証された/AIテーマ株だった' },
    confirmed_claims: { type: 'array', items: { type: 'string' }, description: '独立検証で確認できた主要な事実' },
    refuted_claims: { type: 'array', items: { type: 'object', properties: { claim: { type: 'string' }, finding: { type: 'string' }, source: { type: 'string' } }, required: ['claim', 'finding'] }, description: '反証された・確認できなかった主張' },
    ai_theme_verdict: { type: 'string', enum: ['ok', 'exclude'], description: 'exclude=実はAIテーマで買われている銘柄' },
    corrections: { type: 'string', description: '数値の訂正事項 (あれば)' },
    adjusted_score: { type: 'number', minimum: 0, maximum: 10, description: '監査後の調整スコア' },
    note: { type: 'string', description: '総評 (2-3文)' },
  },
  required: ['code', 'verdict', 'ai_theme_verdict', 'adjusted_score', 'note'],
}

const codes = typeof args === 'string' ? JSON.parse(args) : args
const results = await pipeline(
  codes,
  (code) => agent(
    `あなたは日本株の個別銘柄アナリストです。本日は2026年7月16日。投資期間は本日〜2026年9月上旬(約2ヶ月)。

まず Read ツールで ${SHORTLIST_FILE} を読み、証券コード ${code} のエントリ(候補理由・カタリスト・出典)を確認してください。

その上で WebSearch / WebFetch で最新情報を独自に収集し、証券コード ${code} について以下を調査してください:
1. 直近株価(できるだけ2026年7月中旬の値)と直近3ヶ月のトレンド、年初来高値からの位置
2. 直近決算(2026年1-3月期または3月期通期など最新のもの)の実績と会社計画・進捗
3. 2026年9月15日までの具体的カタリスト(決算発表日は日付まで特定を試みる)
4. バリュエーション(PER/PBR/配当利回り)と同業比較
5. 下落リスク(関税・為替・材料出尽くし・過熱感)
6. AIテーマ関与度の再判定(AI・データセンター関連が主な買い材料なら high)
7. 今後2ヶ月の上昇期待スコア(0-10)を付ける。モメンタム・業績・カタリスト・バリュエーション・リスクの5軸で総合判断。

情報源はYahoo!ファイナンス、株探、みんかぶ、日経、企業IRページ等。各データに出典URLと日付を付けること。データが取得できない項目は正直に「確認できず」と記載。`,
    { label: `dive:${code}`, phase: 'Deep Dive', model: 'sonnet', schema: DEEP_SCHEMA }
  ),
  (deep, code) => {
    if (!deep) return null
    if (deep.preliminary_score < 5 || deep.ai_theme_check === 'high') {
      return { deep, audit: null, audit_skipped: true }
    }
    return agent(
      `あなたは投資リサーチの敵対的監査人です。本日は2026年7月16日。以下は証券コード ${code} に関するアナリストの調査結果です。あなたの任務はこの内容を「反証」することです。鵜呑みにせず、WebSearch / WebFetch で独立に検証してください。

調査結果:
${JSON.stringify(deep, null, 1)}

検証項目:
1. 株価水準・騰落率は実際の直近データと整合するか(Yahoo!ファイナンス・株探で独立確認)
2. 決算数値(増益率・進捗率・上方修正)は一次情報(企業IR・適時開示)と一致するか
3. カタリストの実在性: 決算発表日等は本当に2026年9月15日までにあるか(企業IRカレンダーで確認を試みる)
4. この銘柄は実はAIテーマ(AI半導体・データセンター・AI設備投資)で買われていないか。直近の株価上昇の主因を報道で確認
5. 重大な悪材料(不祥事・下方修正・規制)を見落としていないか
不確かな点は refuted_claims に含め、検証で確認できた点のみ confirmed_claims に載せること。数値が誤っていた場合は corrections に正しい値を記載。総合して adjusted_score を付けること(根拠のない楽観は減点)。`,
      { label: `audit:${code}`, phase: 'Audit', schema: AUDIT_SCHEMA }
    ).then(audit => ({ deep, audit, audit_skipped: false }))
  }
)

const done = results.filter(Boolean)
const audited = done.filter(r => r.audit)
log(`深掘り完了 ${done.length}/${codes.length} 件、うち監査実施 ${audited.length} 件`)
return { results: done }