export const meta = {
  name: 'refresh-and-final-rank',
  description: '上位候補の8月3日時点データ更新(Sonnet)と最終ランキング判断(Opus)',
  phases: [
    { title: 'Refresh', detail: '各銘柄を8/3時点に更新: Q1決算・円高影響・残存カタリスト (Sonnet)', model: 'sonnet' },
    { title: 'Final Rank', detail: 'トップ20の確定とポートフォリオ構成判断 (Opus)', model: 'opus' },
  ],
}

const SC = '/tmp/claude-0/-home-user-H-141-personal/f0e7ba4a-29ec-54ec-9306-be99abd7c0a2/scratchpad'

const MACRO = `【2026年8月3日時点の相場環境 — 必ず前提とすること】
・7/31 日米協調協調介入(円買いとしては28年ぶり)。ドル円は164円接近から157円台へ約7円の急速な円高。8/3に日米共同声明。
・7/31 日銀金融政策決定会合は政策金利1.0%据え置き(6月会合で0.75%→1.00%に利上げ済み)。成長率見通しは上方修正、植田総裁は「利上げペース加速もありうる」とタカ派。
・7/29 米半導体株安で日経平均が大幅安、AI・半導体株から内需・ディフェンシブ株への大規模ローテーションが発生。7/31は日経平均2,494円高と急反発。
・8/3 日経平均は607円安の63,754.90円(前場一時1,121円安)。
・7月下旬〜8月上旬は2027年3月期第1四半期(4-6月期)決算の発表ピーク。`

const REFRESH_SCHEMA = {
  type: 'object',
  properties: {
    code: { type: 'string' },
    name: { type: 'string' },
    price_aug: { type: 'string', description: '2026年8月3日前後の株価と日付。取得できなければ「確認できず」' },
    move_since_july: { type: 'string', description: '7月中旬(約2.5週間前)からの株価変化と、その理由' },
    q1_result: { type: 'string', description: '7月下旬〜8月上旬に発表された2027年3月期1Q決算の内容。未発表なら発表予定日。確認できなければ「確認できず」' },
    q1_reaction: { type: 'string', description: '決算発表後の株価反応。未発表・不明なら「該当なし」' },
    fx_impact: { type: 'string', description: '7/31の急速な円高(164→157円)がこの銘柄に与える影響。追い風/逆風/中立を明記し理由を述べる' },
    remaining_catalysts: { type: 'array', items: { type: 'object', properties: { date: { type: 'string' }, event: { type: 'string' } }, required: ['date', 'event'] }, description: '2026年9月15日までに「まだ残っている」カタリストのみ。消化済みは除く' },
    consumed_catalysts: { type: 'string', description: '7月中旬時点で期待されていたが既に消化されたカタリスト' },
    valuation_now: { type: 'string', description: '直近のPER/PBR/配当利回り' },
    new_risks: { type: 'array', items: { type: 'string' }, description: '8月時点で新たに顕在化したリスク' },
    updated_score: { type: 'number', minimum: 0, maximum: 10, description: '8/3から9月上旬までの上昇期待スコア(0-10)' },
    score_rationale: { type: 'string', description: 'スコアの根拠(3-4文)' },
    sources: { type: 'array', items: { type: 'string' } },
  },
  required: ['code', 'name', 'price_aug', 'fx_impact', 'remaining_catalysts', 'updated_score', 'score_rationale', 'sources'],
}

const codes = ['8306', '8766', '8630', '7014', '8316', '8411', '7186', '8354', '7011', '7721', '3099', '7453', '9201', '8725', '8058', '8136', '7012', '8002', '8001', '7532']

phase('Refresh')
const refreshed = (await parallel(codes.map(code => () => agent(
  `あなたは日本株アナリストです。本日は2026年8月3日。投資期間は本日〜2026年9月上旬(約1ヶ月半)。

${MACRO}

Read ツールで ${SC}/deepdive_results.json を読み、証券コード ${code} のエントリ(deep と audit)を確認してください。これは2026年7月中旬時点の調査であり、上記の相場変化が反映されていません。

WebSearch / WebFetch で最新情報を収集し、証券コード ${code} を8月3日時点に更新してください:
1. 直近株価(8月3日前後)と、7月中旬からの変化率・変化の理由
2. 2027年3月期第1四半期(4-6月期)決算が既に発表されているか。発表済みならその内容(増収増益率・通期進捗率・修正の有無)と発表後の株価反応。未発表なら発表予定日
3. 7/31の急速な円高(164円→157円台)がこの銘柄に与える影響を具体的に評価
4. 2026年9月15日までに「まだ残っている」カタリスト(消化済みのものは除外して整理)
5. 8月時点で新たに顕在化したリスク
6. 8月3日から9月上旬までの上昇期待スコア(0-10)を付け直す

古い7月中旬の情報をそのまま流用しないこと。取得できない項目は正直に「確認できず」と記載。出典URLと日付を必ず付けること。`,
  { label: `refresh:${code}`, phase: 'Refresh', model: 'sonnet', schema: REFRESH_SCHEMA }
)))).filter(Boolean)

log(`更新完了 ${refreshed.length}/${codes.length} 件`)

phase('Final Rank')
const RANK_SCHEMA = {
  type: 'object',
  properties: {
    top20: {
      type: 'array', maxItems: 20,
      items: {
        type: 'object',
        properties: {
          rank: { type: 'number' },
          code: { type: 'string' },
          name: { type: 'string' },
          sector_bucket: { type: 'string', description: '金融/防衛・造船/商社/内需・インバウンド/その他 等' },
          cap_bucket: { type: 'string', enum: ['大型', '中型', '小型'] },
          score: { type: 'number' },
          thesis: { type: 'string', description: '推奨根拠(3-5文)。具体的な数値・日付を含めること' },
          key_catalyst: { type: 'string', description: '9/15までの最重要カタリストと日付' },
          key_risk: { type: 'string', description: '最大のリスク' },
        },
        required: ['rank', 'code', 'name', 'sector_bucket', 'cap_bucket', 'score', 'thesis', 'key_catalyst', 'key_risk'],
      },
    },
    excluded: { type: 'array', items: { type: 'object', properties: { code: { type: 'string' }, name: { type: 'string' }, reason: { type: 'string' } }, required: ['code', 'name', 'reason'] }, description: '検討したが除外した主な銘柄と理由' },
    portfolio_note: { type: 'string', description: 'ポートフォリオ全体の構成コメント(セクター分散・大型中型バランス・相場前提)' },
    caveats: { type: 'string', description: 'この選定の限界・注意点' },
  },
  required: ['top20', 'portfolio_note', 'caveats'],
}

const rank = await agent(
  `あなたは日本株のポートフォリオ・ストラテジストです。本日は2026年8月3日。投資期間は本日〜2026年9月上旬(約1ヶ月半)。

${MACRO}

【タスク】以下のデータから、今後1ヶ月半で上昇が期待できる非AI銘柄のトップ20を確定してください。

【データソース】
1. 以下は主要20銘柄を8月3日時点に更新した最新データです(これを最優先で使うこと):
${JSON.stringify(refreshed, null, 1)}

2. Read ツールで ${SC}/deepdive_results.json を読むと全38銘柄の詳細調査と監査結果があります。ただし7銘柄(9735 セコム/9983 ファーストリテイリング/8801 三井不動産/8591 オリックス/1605 INPEX/7269 スズキ/9104 商船三井)の audit フィールドは8月3日時点の最新監査です。それ以外の audit は7月中旬時点なので、上記1の更新データがある銘柄はそちらを優先してください。

3. Read ツールで ${SC}/market_summary.md を読むと市場環境サマリーがあります(7月中旬時点)。

【選定基準】
- リスク許容度は「バランス型」: 大型株(時価総額1兆円以上)を6〜10銘柄、中型株(1,000億〜1兆円)を8〜12銘柄、小型は流動性が十分なもののみ少数
- セクター分散を確保すること(単一セクターに偏らない。金融は最大6銘柄程度まで)
- AIテーマで買われている銘柄は除外
- 8月3日時点で残存カタリストがある銘柄を優先(材料消化済みで上値が重い銘柄は減点)
- 7/31の円高(164→157円)を踏まえ、円高が逆風の銘柄は慎重に評価すること
- 既に高値圏でコンセンサス目標株価に到達している銘柄は、上値余地の観点で減点

【重要】データにない事実を創作しないこと。各銘柄の thesis には調査データにある具体的な数値・日付のみを使うこと。`,
  { label: 'final-rank', phase: 'Final Rank', model: 'opus', effort: 'high', schema: RANK_SCHEMA }
)

return { refreshed, rank }