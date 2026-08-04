export const meta = {
  name: 'final-audit-and-prep',
  description: '残り7銘柄の敵対的監査(Opus)とレポート素材整形(Haiku)',
  phases: [
    { title: 'Final Audit', detail: '未監査7銘柄を敵対的に検証 (Opus)', model: 'opus' },
    { title: 'Report Prep', detail: '市場環境サマリーの圧縮 (Haiku)', model: 'haiku' },
  ],
}

const SC = '/tmp/claude-0/-home-user-H-141-personal/f0e7ba4a-29ec-54ec-9306-be99abd7c0a2/scratchpad'

const AUDIT_SCHEMA = {
  type: 'object',
  properties: {
    code: { type: 'string' },
    verdict: { type: 'string', enum: ['pass', 'caution', 'fail'] },
    confirmed_claims: { type: 'array', items: { type: 'string' } },
    refuted_claims: { type: 'array', items: { type: 'object', properties: { claim: { type: 'string' }, finding: { type: 'string' }, source: { type: 'string' } }, required: ['claim', 'finding'] } },
    ai_theme_verdict: { type: 'string', enum: ['ok', 'exclude'] },
    corrections: { type: 'string' },
    adjusted_score: { type: 'number', minimum: 0, maximum: 10 },
    note: { type: 'string' },
  },
  required: ['code', 'verdict', 'ai_theme_verdict', 'adjusted_score', 'note'],
}

const codes = ['9735', '9983', '8801', '8591', '1605', '7269', '9104']

const [audits, prep] = await parallel([
  () => parallel(codes.map(code => () => agent(
    `あなたは投資リサーチの敵対的監査人です。本日は2026年8月3日。投資期間は本日〜2026年9月上旬。

Read ツールで ${SC}/pending_audit.json を読み、キー "${code}" のオブジェクト(アナリストの調査結果)を確認してください。あなたの任務はその内容を「反証」することです。鵜呑みにせず WebSearch / WebFetch で独立に検証してください。

重要: 元の調査は2026年7月中旬時点で行われました。現在は8月3日で約2.5週間経過しています。したがって以下を必ず確認すること:
- 7月下旬〜8月上旬に発表された第1四半期(4-6月期)決算の内容(多くの企業が7月末〜8月上旬に発表)
- 7月30-31日の日銀金融政策決定会合の結果と株価への影響
- 直近の株価水準(7月中旬から変化しているはず)
- 元の調査が挙げたカタリストのうち、既に消化されたもの・残っているもの

検証項目:
1. 株価水準・騰落率は実際の直近データ(8月上旬)と整合するか
2. 決算数値は一次情報(企業IR・適時開示)と一致するか。Q1決算が既に出ていればその内容
3. 2026年9月上旬までに残っているカタリストは何か(消化済みのものは除く)
4. この銘柄は実はAIテーマ(AI半導体・データセンター・AI設備投資)で買われていないか
5. 重大な悪材料(不祥事・下方修正・規制)はないか

不確かな点は refuted_claims に、検証できた点のみ confirmed_claims に。数値が誤っていた・古くなっていた場合は corrections に最新値を記載。総合して adjusted_score(0-10、今後約1ヶ月強の上昇期待)を付けること。根拠のない楽観は減点。`,
    { label: `audit:${code}`, phase: 'Final Audit', model: 'opus', effort: 'high', schema: AUDIT_SCHEMA }
  ))),
  () => agent(
    `Read ツールで以下3ファイルを読み、日本株レポート用の「市場環境サマリー」を日本語Markdownで作成してください。
- ${SC}/scan_macro.md
- ${SC}/scan_events.md
- ${SC}/scan_sectors.md

要件:
- 全体で1200〜1800字程度に圧縮
- 構成: (1)相場環境の現状 (2)2026年8月〜9月上旬のイベントカレンダー(表形式) (3)強い非AIセクターと弱いセクター (4)銘柄選定への含意
- 元ファイルの具体的な数値・日付・出典URLは保持すること(捏造・推測での補完は禁止)
- 元ファイルは2026年7月中旬時点の情報。「2026年7月中旬時点」と明記し、既に過ぎたイベント(7/30-31日銀会合など)はその旨わかるように書くこと
- 出力はMarkdown本文のみ(前置き・後書き不要)`,
    { label: 'prep:market-summary', phase: 'Report Prep', model: 'haiku', effort: 'low' }
  ),
])

const ok = audits.filter(Boolean)
log(`監査完了 ${ok.length}/${codes.length} 件`)
return { audits: ok, marketSummary: prep }