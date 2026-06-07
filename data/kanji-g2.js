// data/kanji-g2.js
// 小学2年生配当漢字 160字 × 6単語 = 960問
// 例文中の漢字は小1配当80字+小2配当160字=240字のみ、それ以外はひらがな。
// 正答(word)は4文字以下。sentence は10〜18文字程度、○○は2個固定。

window.KANJI_DATA_G2 = [
  {
    kanji: "引",
    readings: { on: ["イン"], kun: ["ひ(く)", "ひ(ける)"] },
    words: [
      { word: "引く",   reading: "ひく",       sentence: "つなを○○きょうそう。",         printable: true },
      { word: "引力",   reading: "いんりょく", sentence: "ちきゅうの○○がはたらく。",     printable: true },
      { word: "引用",   reading: "いんよう",   sentence: "本の文を○○する。",             printable: true },
      { word: "引き戸", reading: "ひきど",     sentence: "○○をしずかにあける。",         printable: true },
      { word: "引き算", reading: "ひきざん",   sentence: "○○のもんだいをとく。",         printable: true },
      { word: "手引き", reading: "てびき",     sentence: "新しい○○を読む。",             printable: true }
    ]
  },
  {
    kanji: "羽",
    readings: { on: ["ウ"], kun: ["は", "はね"] },
    words: [
      { word: "羽",     reading: "はね",       sentence: "とりの○○がおちる。",           printable: true },
      { word: "羽音",   reading: "はおと",     sentence: "はちの○○がきこえる。",         printable: true },
      { word: "白羽",   reading: "しらは",     sentence: "○○のやがあたる。",             printable: true },
      { word: "羽毛",   reading: "うもう",     sentence: "○○のふとんはあたたかい。",     printable: true },
      { word: "三羽",   reading: "さんば",     sentence: "とりが○○とんでいる。",         printable: true },
      { word: "羽根",   reading: "はね",       sentence: "おしょうがつに○○つきをする。", printable: true }
    ]
  },
  {
    kanji: "雲",
    readings: { on: ["ウン"], kun: ["くも"] },
    words: [
      { word: "雲",     reading: "くも",       sentence: "そらに○○がうかぶ。",           printable: true },
      { word: "雨雲",   reading: "あまぐも",   sentence: "○○がひろがってきた。",         printable: true },
      { word: "黒雲",   reading: "くろくも",   sentence: "○○がそらをおおう。",           printable: true },
      { word: "白雲",   reading: "しらくも",   sentence: "山に○○がかかる。",             printable: true },
      { word: "雲海",   reading: "うんかい",   sentence: "山の上から○○を見る。",         printable: true },
      { word: "わた雲", reading: "わたぐも",   sentence: "空にふわふわの○○がうかぶ。",   printable: true }
    ]
  },
  {
    kanji: "園",
    readings: { on: ["エン"], kun: ["その"] },
    words: [
      { word: "公園",   reading: "こうえん",   sentence: "朝○○をさんぽする。",           printable: true },
      { word: "園長",   reading: "えんちょう", sentence: "○○先生があいさつする。",       printable: true },
      { word: "学園",   reading: "がくえん",   sentence: "新しい○○ができた。",           printable: true },
      { word: "花園",   reading: "はなぞの",   sentence: "きれいな○○を見つけた。",       printable: true },
      { word: "入園",   reading: "にゅうえん", sentence: "妹が○○する。",                 printable: true },
      { word: "田園",   reading: "でんえん",   sentence: "○○のけしきがひろがる。",       printable: true }
    ]
  },
  {
    kanji: "遠",
    readings: { on: ["エン", "オン"], kun: ["とお(い)"] },
    words: [
      { word: "遠い",   reading: "とおい",     sentence: "学校までは○○道だ。",           printable: true },
      { word: "遠足",   reading: "えんそく",   sentence: "あすは○○の日だ。",             printable: true },
      { word: "遠回り", reading: "とおまわり", sentence: "わざと○○をする。",             printable: true },
      { word: "遠目",   reading: "とおめ",     sentence: "○○できくをかんさつする。",     printable: true },
      { word: "遠近",   reading: "えんきん",   sentence: "○○をくらべる。",               printable: true },
      { word: "遠出",   reading: "とおで",     sentence: "休みに○○をする。",             printable: true }
    ]
  },
  {
    kanji: "何",
    readings: { on: ["カ"], kun: ["なに", "なん"] },
    words: [
      { word: "何",     reading: "なに",       sentence: "ふくろの中に○○があるか。",     printable: true },
      { word: "何人",   reading: "なんにん",   sentence: "へやに○○いますか。",           printable: true },
      { word: "何本",   reading: "なんぼん",   sentence: "えんぴつが○○ありますか。",     printable: true },
      { word: "何時",   reading: "なんじ",     sentence: "今○○ですか。",                 printable: true },
      { word: "何日",   reading: "なんにち",   sentence: "あと○○で休みか。",             printable: true },
      { word: "何回",   reading: "なんかい",   sentence: "なわとびを○○とんだか。",       printable: true }
    ]
  },
  {
    kanji: "科",
    readings: { on: ["カ"], kun: [] },
    words: [
      { word: "科学",   reading: "かがく",     sentence: "○○の本を読む。",               printable: true },
      { word: "教科",   reading: "きょうか",   sentence: "○○書をひらいて学ぶ。",         printable: true },
      { word: "学科",   reading: "がっか",     sentence: "あには大学の○○をえらぶ。",     printable: true },
      { word: "科目",   reading: "かもく",     sentence: "テストの○○がふえる。",         printable: true },
      { word: "教科書", reading: "きょうかしょ", sentence: "朝○○をひらく。",             printable: true },
      { word: "外科",   reading: "げか",       sentence: "○○のびょういんへ行く。",       printable: true }
    ]
  },
  {
    kanji: "夏",
    readings: { on: ["カ", "ゲ"], kun: ["なつ"] },
    words: [
      { word: "夏",     reading: "なつ",       sentence: "あつい○○がきた。",             printable: true },
      { word: "夏休み", reading: "なつやすみ", sentence: "○○に海へ行く。",               printable: true },
      { word: "夏日",   reading: "なつび",     sentence: "今日は○○になった。",           printable: true },
      { word: "真夏",   reading: "まなつ",     sentence: "○○の日ざしがまぶしい。",       printable: true },
      { word: "初夏",   reading: "しょか",     sentence: "○○の風がここちよい。",         printable: true },
      { word: "夏空",   reading: "なつぞら",   sentence: "青い○○がひろがる。",           printable: true }
    ]
  },
  {
    kanji: "家",
    readings: { on: ["カ", "ケ"], kun: ["いえ", "や"] },
    words: [
      { word: "家",     reading: "いえ",       sentence: "夕方に○○へ帰る。",             printable: true },
      { word: "家来",   reading: "けらい",     sentence: "ものがたりに○○が出る。",       printable: true },
      { word: "家ぞく", reading: "かぞく",     sentence: "○○とごはんを食べる。",         printable: true },
      { word: "家じ",   reading: "かじ",       sentence: "母を手つだって○○をする。",     printable: true },
      { word: "本家",   reading: "ほんけ",     sentence: "正月に○○へ行く。",             printable: true },
      { word: "作家",   reading: "さっか",     sentence: "ゆうめいな○○の本を読む。",     printable: true }
    ]
  },
  {
    kanji: "歌",
    readings: { on: ["カ"], kun: ["うた", "うた(う)"] },
    words: [
      { word: "歌",     reading: "うた",       sentence: "みんなで○○を歌う。",           printable: true },
      { word: "歌う",   reading: "うたう",     sentence: "大きな声で○○。",               printable: true },
      { word: "歌手",   reading: "かしゅ",     sentence: "ゆうめいな○○が出る。",         printable: true },
      { word: "校歌",   reading: "こうか",     sentence: "学校の○○を歌う。",             printable: true },
      { word: "歌声",   reading: "うたごえ",   sentence: "となりから○○が聞こえる。",     printable: true },
      { word: "国歌",   reading: "こっか",     sentence: "しあいの前に○○を歌う。",       printable: true }
    ]
  },
  {
    kanji: "画",
    readings: { on: ["ガ", "カク"], kun: [] },
    words: [
      { word: "画家",   reading: "がか",       sentence: "ゆうめいな○○の本だ。",         printable: true },
      { word: "画用紙", reading: "がようし",   sentence: "○○に絵をかく。",               printable: true },
      { word: "図画",   reading: "ずが",       sentence: "○○の時間が楽しい。",           printable: true },
      { word: "名画",   reading: "めいが",     sentence: "ゆうめいな○○を見る。",         printable: true },
      { word: "計画",   reading: "けいかく",   sentence: "りょこうの○○を立てる。",       printable: true },
      { word: "画面",   reading: "がめん",     sentence: "テレビの○○を見る。",           printable: true }
    ]
  },
  {
    kanji: "回",
    readings: { on: ["カイ", "エ"], kun: ["まわ(る)", "まわ(す)"] },
    words: [
      { word: "回る",   reading: "まわる",     sentence: "コマがくるくる○○。",           printable: true },
      { word: "回す",   reading: "まわす",     sentence: "バトンを○○れんしゅう。",       printable: true },
      { word: "回数",   reading: "かいすう",   sentence: "なわとびの○○を数える。",       printable: true },
      { word: "今回",   reading: "こんかい",   sentence: "○○はうまくいった。",           printable: true },
      { word: "回答",   reading: "かいとう",   sentence: "あいてに○○を出す。",           printable: true },
      { word: "回り道", reading: "まわりみち", sentence: "工じ中で○○をする。",           printable: true }
    ]
  },
  {
    kanji: "会",
    readings: { on: ["カイ", "エ"], kun: ["あ(う)"] },
    words: [
      { word: "会う",   reading: "あう",       sentence: "えきで友だちと○○。",           printable: true },
      { word: "会話",   reading: "かいわ",     sentence: "二人の○○がはずむ。",           printable: true },
      { word: "会社",   reading: "かいしゃ",   sentence: "父は○○へ行く。",               printable: true },
      { word: "大会",   reading: "たいかい",   sentence: "夏の○○に出る。",               printable: true },
      { word: "会場",   reading: "かいじょう", sentence: "○○に人があつまる。",           printable: true },
      { word: "会長",   reading: "かいちょう", sentence: "クラブの○○をえらぶ。",         printable: true }
    ]
  },
  {
    kanji: "海",
    readings: { on: ["カイ"], kun: ["うみ"] },
    words: [
      { word: "海",     reading: "うみ",       sentence: "夏に○○へ行く。",               printable: true },
      { word: "海水",   reading: "かいすい",   sentence: "○○はしおからい。",             printable: true },
      { word: "海外",   reading: "かいがい",   sentence: "○○のニュースを見る。",         printable: true },
      { word: "海風",   reading: "うみかぜ",   sentence: "○○がここちよい。",             printable: true },
      { word: "海中",   reading: "かいちゅう", sentence: "○○の魚をかんさつする。",       printable: true },
      { word: "海上",   reading: "かいじょう", sentence: "○○を大きな船が通る。",         printable: true }
    ]
  },
  {
    kanji: "絵",
    readings: { on: ["カイ", "エ"], kun: [] },
    words: [
      { word: "絵",     reading: "え",         sentence: "白い紙に○○をかく。",           printable: true },
      { word: "絵本",   reading: "えほん",     sentence: "妹に○○を読む。",               printable: true },
      { word: "絵画",   reading: "かいが",     sentence: "○○てんに足をはこぶ。",         printable: true },
      { word: "絵筆",   reading: "えふで",     sentence: "○○で色をぬる。",               printable: true },
      { word: "絵の具", reading: "えのぐ",     sentence: "○○を水でとく。",               printable: true },
      { word: "絵地図", reading: "えちず",     sentence: "町の○○を作る。",               printable: true }
    ]
  },
  {
    kanji: "外",
    readings: { on: ["ガイ", "ゲ"], kun: ["そと", "ほか", "はず(す)"] },
    words: [
      { word: "外",     reading: "そと",       sentence: "○○であそぶのが楽しい。",       printable: true },
      { word: "外出",   reading: "がいしゅつ", sentence: "雨でも○○する。",               printable: true },
      { word: "外国",   reading: "がいこく",   sentence: "○○ごの歌を歌う。",             printable: true },
      { word: "外見",   reading: "がいけん",   sentence: "○○だけでははんだんしない。",   printable: true },
      { word: "外す",   reading: "はずす",     sentence: "うわぎのボタンを○○。",         printable: true },
      { word: "海外",   reading: "かいがい",   sentence: "○○のたびに出る。",             printable: true }
    ]
  },
  {
    kanji: "角",
    readings: { on: ["カク"], kun: ["かど", "つの"] },
    words: [
      { word: "角",     reading: "かど",       sentence: "つくえの○○にぶつかる。",       printable: true },
      { word: "三角",   reading: "さんかく",   sentence: "○○の形をかく。",               printable: true },
      { word: "四角",   reading: "しかく",     sentence: "○○のはこをもつ。",             printable: true },
      { word: "角度",   reading: "かくど",     sentence: "○○をはかる。",                 printable: true },
      { word: "角笛",   reading: "つのぶえ",   sentence: "遠くで○○が鳴る。",             printable: true },
      { word: "方角",   reading: "ほうがく",   sentence: "学校の○○をさす。",             printable: true }
    ]
  },
  {
    kanji: "楽",
    readings: { on: ["ガク", "ラク"], kun: ["たの(しい)", "たの(しむ)"] },
    words: [
      { word: "楽しい", reading: "たのしい",   sentence: "○○いえんそくの日。",           printable: true },
      { word: "楽しむ", reading: "たのしむ",   sentence: "ピクニックを○○。",             printable: true },
      { word: "音楽",   reading: "おんがく",   sentence: "朝に○○を聞く。",               printable: true },
      { word: "楽園",   reading: "らくえん",   sentence: "ここは子どもの○○だ。",         printable: true },
      { word: "気楽",   reading: "きらく",     sentence: "○○な気もちですごす。",         printable: true },
      { word: "楽天",   reading: "らくてん",   sentence: "○○てきな子だ。",               printable: true }
    ]
  },
  {
    kanji: "活",
    readings: { on: ["カツ"], kun: [] },
    words: [
      { word: "活字",   reading: "かつじ",     sentence: "本の○○を読む。",               printable: true },
      { word: "活力",   reading: "かつりょく", sentence: "朝ごはんで○○が出る。",         printable: true },
      { word: "活気",   reading: "かっき",     sentence: "○○のあるお店だ。",             printable: true },
      { word: "活用",   reading: "かつよう",   sentence: "時間を○○する。",               printable: true },
      { word: "生活",   reading: "せいかつ",   sentence: "学校での○○が楽しい。",         printable: true },
      { word: "活発",   reading: "かっぱつ",   sentence: "○○なクラスだ。",               printable: true }
    ]
  },
  {
    kanji: "間",
    readings: { on: ["カン", "ケン"], kun: ["あいだ", "ま"] },
    words: [
      { word: "間",     reading: "あいだ",     sentence: "本と本の○○にしおりを入れる。", printable: true },
      { word: "時間",   reading: "じかん",     sentence: "○○を大切にする。",             printable: true },
      { word: "中間",   reading: "ちゅうかん", sentence: "クラスの○○で会う。",           printable: true },
      { word: "間近",   reading: "まぢか",     sentence: "本ばんが○○にせまる。",         printable: true },
      { word: "人間",   reading: "にんげん",   sentence: "やさしい○○になる。",           printable: true },
      { word: "夜間",   reading: "やかん",     sentence: "○○のあんぜんに気をつける。",   printable: true }
    ]
  },
  {
    kanji: "丸",
    readings: { on: ["ガン"], kun: ["まる", "まる(い)", "まる(める)"] },
    words: [
      { word: "丸",     reading: "まる",       sentence: "ノートに○○をかく。",           printable: true },
      { word: "丸い",   reading: "まるい",     sentence: "○○い月が出た。",               printable: true },
      { word: "丸める", reading: "まるめる",   sentence: "紙くずを○○。",                 printable: true },
      { word: "丸太",   reading: "まるた",     sentence: "○○の上にすわる。",             printable: true },
      { word: "丸顔",   reading: "まるがお",   sentence: "妹は○○だ。",                   printable: true },
      { word: "日の丸", reading: "ひのまる",   sentence: "○○のはたをふる。",             printable: true }
    ]
  },
  {
    kanji: "岩",
    readings: { on: ["ガン"], kun: ["いわ"] },
    words: [
      { word: "岩",     reading: "いわ",       sentence: "大きな○○の上にのぼる。",       printable: true },
      { word: "岩石",   reading: "がんせき",   sentence: "○○をかんさつする。",           printable: true },
      { word: "岩山",   reading: "いわやま",   sentence: "遠くの○○を見る。",             printable: true },
      { word: "岩場",   reading: "いわば",     sentence: "○○でかにを見つけた。",         printable: true },
      { word: "大岩",   reading: "おおいわ",   sentence: "船が○○にぶつかる。",           printable: true },
      { word: "岩かげ", reading: "いわかげ",   sentence: "○○に魚が入る。",               printable: true }
    ]
  },
  {
    kanji: "顔",
    readings: { on: ["ガン"], kun: ["かお"] },
    words: [
      { word: "顔",     reading: "かお",       sentence: "朝に○○をあらう。",             printable: true },
      { word: "顔色",   reading: "かおいろ",   sentence: "母の○○がよくなる。",           printable: true },
      { word: "丸顔",   reading: "まるがお",   sentence: "あの子は○○だ。",               printable: true },
      { word: "顔つき", reading: "かおつき",   sentence: "やさしい○○の人。",             printable: true },
      { word: "横顔",   reading: "よこがお",   sentence: "妹の○○をスケッチする。",       printable: true },
      { word: "新顔",   reading: "しんがお",   sentence: "クラブに○○が入る。",           printable: true }
    ]
  },
  {
    kanji: "汽",
    readings: { on: ["キ"], kun: [] },
    words: [
      { word: "汽車",   reading: "きしゃ",     sentence: "むかしの○○のしゃしん。",       printable: true },
      { word: "汽船",   reading: "きせん",     sentence: "○○がみなとを出る。",           printable: true },
      { word: "汽笛",   reading: "きてき",     sentence: "みなとで○○の音がひびく。",     printable: true },
      { word: "夜汽車", reading: "よぎしゃ",   sentence: "○○にのって遠くへ行く。",       printable: true },
      { word: "汽水",   reading: "きすい",     sentence: "川と海の間が○○です。",         printable: true },
      { word: "汽力",   reading: "きりょく",   sentence: "○○で走るきかい。",             printable: true }
    ]
  },
  {
    kanji: "記",
    readings: { on: ["キ"], kun: ["しる(す)"] },
    words: [
      { word: "記す",   reading: "しるす",     sentence: "日づけをノートに○○。",         printable: true },
      { word: "日記",   reading: "にっき",     sentence: "ねる前に○○を書く。",           printable: true },
      { word: "記名",   reading: "きめい",     sentence: "プリントに○○する。",           printable: true },
      { word: "記入",   reading: "きにゅう",   sentence: "用紙に名前を○○。",             printable: true },
      { word: "記者",   reading: "きしゃ",     sentence: "新聞○○の話を聞く。",           printable: true },
      { word: "記ねん", reading: "きねん",     sentence: "そつぎょうの○○しゃしん。",     printable: true }
    ]
  },
  {
    kanji: "帰",
    readings: { on: ["キ"], kun: ["かえ(る)", "かえ(す)"] },
    words: [
      { word: "帰る",   reading: "かえる",     sentence: "夕方家に○○。",                 printable: true },
      { word: "帰す",   reading: "かえす",     sentence: "とりかごの鳥を○○。",           printable: true },
      { word: "帰国",   reading: "きこく",     sentence: "おじが○○する。",               printable: true },
      { word: "帰宅",   reading: "きたく",     sentence: "○○の時間が来た。",             printable: true },
      { word: "日帰り", reading: "ひがえり",   sentence: "○○のりょこうに行く。",         printable: true },
      { word: "帰り道", reading: "かえりみち", sentence: "学校の○○で空を見る。",         printable: true }
    ]
  },
  {
    kanji: "弓",
    readings: { on: ["キュウ"], kun: ["ゆみ"] },
    words: [
      { word: "弓",     reading: "ゆみ",       sentence: "むかしの人が○○を引く。",       printable: true },
      { word: "弓矢",   reading: "ゆみや",     sentence: "○○のれんしゅうをする。",       printable: true },
      { word: "弓道",   reading: "きゅうどう", sentence: "兄が○○をならう。",             printable: true },
      { word: "石弓",   reading: "いしゆみ",   sentence: "むかしの○○を見る。",           printable: true },
      { word: "弓形",   reading: "ゆみがた",   sentence: "○○のにじが出た。",             printable: true },
      { word: "大弓",   reading: "おおゆみ",   sentence: "○○で矢をいる。",               printable: true }
    ]
  },
  {
    kanji: "牛",
    readings: { on: ["ギュウ"], kun: ["うし"] },
    words: [
      { word: "牛",     reading: "うし",       sentence: "ぼくじょうに○○がいる。",       printable: true },
      { word: "牛肉",   reading: "ぎゅうにく", sentence: "○○のステーキを食べる。",       printable: true },
      { word: "牛にゅう", reading: "ぎゅうにゅう", sentence: "朝に○○をのむ。",           printable: true },
      { word: "子牛",   reading: "こうし",     sentence: "○○がうまれた。",               printable: true },
      { word: "牛小屋", reading: "うしごや",   sentence: "○○で牛が休む。",               printable: true },
      { word: "野牛",   reading: "やぎゅう",   sentence: "ひろい草原を○○が走る。",       printable: true }
    ]
  },
  {
    kanji: "魚",
    readings: { on: ["ギョ"], kun: ["うお", "さかな"] },
    words: [
      { word: "魚",     reading: "さかな",     sentence: "川で○○をつる。",               printable: true },
      { word: "金魚",   reading: "きんぎょ",   sentence: "おまつりで○○をとった。",       printable: true },
      { word: "魚市場", reading: "うおいちば", sentence: "朝の○○ははやい。",             printable: true },
      { word: "小魚",   reading: "こざかな",   sentence: "○○がむれをつくる。",           printable: true },
      { word: "魚つり", reading: "さかなつり", sentence: "父と川へ○○に行く。",           printable: true },
      { word: "魚屋",   reading: "さかなや",   sentence: "近くの○○へ行く。",             printable: true }
    ]
  },
  {
    kanji: "京",
    readings: { on: ["キョウ", "ケイ"], kun: [] },
    words: [
      { word: "京",     reading: "きょう",     sentence: "むかしの○○の町をしのぶ。",     printable: true },
      { word: "東京",   reading: "とうきょう", sentence: "兄は○○にすむ。",               printable: true },
      { word: "京風",   reading: "きょうふう", sentence: "○○のおりょうりを食べる。",     printable: true },
      { word: "上京",   reading: "じょうきょう", sentence: "兄は大学のため○○した。",     printable: true },
      { word: "京都",   reading: "きょうと",   sentence: "○○のお寺をたずねる。",         printable: true },
      { word: "帰京",   reading: "ききょう",   sentence: "りょこうから○○する。",         printable: true }
    ]
  },
  {
    kanji: "強",
    readings: { on: ["キョウ", "ゴウ"], kun: ["つよ(い)", "つよ(まる)", "し(いる)"] },
    words: [
      { word: "強い",   reading: "つよい",     sentence: "風が○○くふいてきた。",         printable: true },
      { word: "強力",   reading: "きょうりょく", sentence: "○○なせんざいをつかう。",     printable: true },
      { word: "強気",   reading: "つよき",     sentence: "○○なたいどでのぞむ。",         printable: true },
      { word: "強行",   reading: "きょうこう", sentence: "雨でも遠足を○○。",             printable: true },
      { word: "強引",   reading: "ごういん",   sentence: "○○なやり方はしない。",         printable: true },
      { word: "強弱",   reading: "きょうじゃく", sentence: "音の○○を考える。",           printable: true }
    ]
  },
  {
    kanji: "教",
    readings: { on: ["キョウ"], kun: ["おし(える)", "おそ(わる)"] },
    words: [
      { word: "教える", reading: "おしえる",   sentence: "弟にやり方を○○。",             printable: true },
      { word: "教わる", reading: "おそわる",   sentence: "先生に書き方を○○。",           printable: true },
      { word: "教室",   reading: "きょうしつ", sentence: "朝○○に入る。",                 printable: true },
      { word: "教科",   reading: "きょうか",   sentence: "すきな○○は理科だ。",           printable: true },
      { word: "教会",   reading: "きょうかい", sentence: "おかの上に○○がある。",         printable: true },
      { word: "教え子", reading: "おしえご",   sentence: "先生の○○があつまる。",         printable: true }
    ]
  },
  {
    kanji: "近",
    readings: { on: ["キン"], kun: ["ちか(い)"] },
    words: [
      { word: "近い",   reading: "ちかい",     sentence: "学校が家から○○。",             printable: true },
      { word: "近所",   reading: "きんじょ",   sentence: "○○の人にあいさつする。",       printable: true },
      { word: "近道",   reading: "ちかみち",   sentence: "○○でえきへ行く。",             printable: true },
      { word: "近年",   reading: "きんねん",   sentence: "○○あつい日がふえた。",         printable: true },
      { word: "間近",   reading: "まぢか",     sentence: "しけんが○○にせまる。",         printable: true },
      { word: "近づく", reading: "ちかづく",   sentence: "船がみなとに○○。",             printable: true }
    ]
  },
  {
    kanji: "兄",
    readings: { on: ["ケイ", "キョウ"], kun: ["あに"] },
    words: [
      { word: "兄",     reading: "あに",       sentence: "○○は中学生だ。",               printable: true },
      { word: "兄弟",   reading: "きょうだい", sentence: "○○なかよくあそぶ。",           printable: true },
      { word: "兄さん", reading: "にいさん",   sentence: "お○○とこうえんへ行く。",       printable: true },
      { word: "実兄",   reading: "じっけい",   sentence: "おじは父の○○だ。",             printable: true },
      { word: "父兄",   reading: "ふけい",     sentence: "学校の○○かいに行く。",         printable: true },
      { word: "兄上",   reading: "あにうえ",   sentence: "ものがたりで○○とよぶ。",       printable: true }
    ]
  },
  {
    kanji: "形",
    readings: { on: ["ケイ", "ギョウ"], kun: ["かた", "かたち"] },
    words: [
      { word: "形",     reading: "かたち",     sentence: "ねん土で○○を作る。",           printable: true },
      { word: "三角形", reading: "さんかくけい", sentence: "○○を紙に書く。",             printable: true },
      { word: "人形",   reading: "にんぎょう", sentence: "妹に○○をかってあげる。",       printable: true },
      { word: "図形",   reading: "ずけい",     sentence: "じょうぎで○○をかく。",         printable: true },
      { word: "形見",   reading: "かたみ",     sentence: "そふの○○の時計。",             printable: true },
      { word: "弓形",   reading: "ゆみがた",   sentence: "空に○○のにじ。",               printable: true }
    ]
  },
  {
    kanji: "計",
    readings: { on: ["ケイ"], kun: ["はか(る)", "はか(らう)"] },
    words: [
      { word: "計る",   reading: "はかる",     sentence: "ストップウォッチで時を○○。",   printable: true },
      { word: "計算",   reading: "けいさん",   sentence: "○○ドリルを毎日とく。",         printable: true },
      { word: "時計",   reading: "とけい",     sentence: "へやの○○を見る。",             printable: true },
      { word: "計画",   reading: "けいかく",   sentence: "夏休みの○○を立てる。",         printable: true },
      { word: "合計",   reading: "ごうけい",   sentence: "お金の○○を出す。",             printable: true },
      { word: "体温計", reading: "たいおんけい", sentence: "○○ではかる。",               printable: true }
    ]
  },
  {
    kanji: "元",
    readings: { on: ["ゲン", "ガン"], kun: ["もと"] },
    words: [
      { word: "元",     reading: "もと",       sentence: "ねこを○○の場しょにもどす。",   printable: true },
      { word: "元気",   reading: "げんき",     sentence: "妹は○○いっぱいだ。",           printable: true },
      { word: "元日",   reading: "がんじつ",   sentence: "○○に親せきがあつまる。",       printable: true },
      { word: "地元",   reading: "じもと",     sentence: "○○のおまつりに出る。",         printable: true },
      { word: "足元",   reading: "あしもと",   sentence: "くらいので○○に気をつける。",   printable: true },
      { word: "手元",   reading: "てもと",     sentence: "本を○○におく。",               printable: true }
    ]
  },
  {
    kanji: "言",
    readings: { on: ["ゲン", "ゴン"], kun: ["い(う)", "こと"] },
    words: [
      { word: "言う",   reading: "いう",       sentence: "本当のことを○○。",             printable: true },
      { word: "言葉",   reading: "ことば",     sentence: "やさしい○○をつかう。",         printable: true },
      { word: "方言",   reading: "ほうげん",   sentence: "おばあちゃんの○○がやさしい。", printable: true },
      { word: "一言",   reading: "ひとこと",   sentence: "先生に○○あいさつする。",       printable: true },
      { word: "助言",   reading: "じょげん",   sentence: "先生に○○をもらう。",           printable: true },
      { word: "言い分", reading: "いいぶん",   sentence: "おたがいの○○を聞く。",         printable: true }
    ]
  },
  {
    kanji: "原",
    readings: { on: ["ゲン"], kun: ["はら"] },
    words: [
      { word: "原",     reading: "はら",       sentence: "草○○でかけ回る。",             printable: true },
      { word: "原っぱ", reading: "はらっぱ",   sentence: "○○でボールであそぶ。",         printable: true },
      { word: "草原",   reading: "そうげん",   sentence: "広い○○がつづく。",             printable: true },
      { word: "高原",   reading: "こうげん",   sentence: "夏は○○ですずしくすごす。",     printable: true },
      { word: "野原",   reading: "のはら",     sentence: "○○で虫をさがす。",             printable: true },
      { word: "原作",   reading: "げんさく",   sentence: "アニメの○○を学ぶ。",           printable: true }
    ]
  },
  {
    kanji: "戸",
    readings: { on: ["コ"], kun: ["と"] },
    words: [
      { word: "戸",     reading: "と",         sentence: "へやの○○をあける。",           printable: true },
      { word: "戸口",   reading: "とぐち",     sentence: "○○で先生をむかえる。",         printable: true },
      { word: "雨戸",   reading: "あまど",     sentence: "夕方に○○をしめる。",           printable: true },
      { word: "戸だな", reading: "とだな",     sentence: "○○からおさらを出す。",         printable: true },
      { word: "木戸",   reading: "きど",       sentence: "○○から外に出る。",             printable: true },
      { word: "引き戸", reading: "ひきど",     sentence: "○○をすっとあける。",           printable: true }
    ]
  },
  {
    kanji: "古",
    readings: { on: ["コ"], kun: ["ふる(い)"] },
    words: [
      { word: "古い",   reading: "ふるい",     sentence: "○○い本を大切にする。",         printable: true },
      { word: "古本",   reading: "ふるほん",   sentence: "○○やさんへ行く。",             printable: true },
      { word: "古今",   reading: "ここん",     sentence: "○○のものがたりを読む。",       printable: true },
      { word: "古着",   reading: "ふるぎ",     sentence: "○○を兄からもらう。",           printable: true },
      { word: "中古",   reading: "ちゅうこ",   sentence: "○○のじてん車を買う。",         printable: true },
      { word: "古紙",   reading: "こし",       sentence: "○○をリサイクルする。",         printable: true }
    ]
  },
  {
    kanji: "午",
    readings: { on: ["ゴ"], kun: [] },
    words: [
      { word: "午前",   reading: "ごぜん",     sentence: "○○九時に学校に行く。",         printable: true },
      { word: "午後",   reading: "ごご",       sentence: "○○から雨がふる。",             printable: true },
      { word: "正午",   reading: "しょうご",   sentence: "○○にきゅうしょくだ。",         printable: true },
      { word: "午前中", reading: "ごぜんちゅう", sentence: "○○にしゅくだいをする。",     printable: true },
      { word: "午後三時", reading: "ごごさんじ", sentence: "○○におやつを食べる。",       printable: true },
      { word: "午後一時", reading: "ごごいちじ", sentence: "○○からそうじをする。",       printable: true }
    ]
  },
  {
    kanji: "後",
    readings: { on: ["ゴ", "コウ"], kun: ["うし(ろ)", "あと", "のち"] },
    words: [
      { word: "後ろ",   reading: "うしろ",     sentence: "ぼくの○○に妹がいる。",         printable: true },
      { word: "後",     reading: "あと",       sentence: "ごはんの○○にはみがき。",       printable: true },
      { word: "午後",   reading: "ごご",       sentence: "○○からくもり空だ。",           printable: true },
      { word: "後半",   reading: "こうはん",   sentence: "しあいの○○がはじまる。",       printable: true },
      { word: "後日",   reading: "ごじつ",     sentence: "○○へんじをします。",           printable: true },
      { word: "後ろ手", reading: "うしろで",   sentence: "○○にプレゼントをかくす。",     printable: true }
    ]
  },
  {
    kanji: "語",
    readings: { on: ["ゴ"], kun: ["かた(る)", "かた(らう)"] },
    words: [
      { word: "語る",   reading: "かたる",     sentence: "ゆめを○○ことができる。",       printable: true },
      { word: "国語",   reading: "こくご",     sentence: "○○のじゅぎょうが楽しい。",     printable: true },
      { word: "外国語", reading: "がいこくご", sentence: "○○の歌を聞く。",               printable: true },
      { word: "語学",   reading: "ごがく",     sentence: "兄は○○がとくいだ。",           printable: true },
      { word: "もの語", reading: "ものがたり", sentence: "むかしの○○を読む。",           printable: true },
      { word: "日本語", reading: "にほんご",   sentence: "○○のべんきょうをする。",       printable: true }
    ]
  },
  {
    kanji: "工",
    readings: { on: ["コウ", "ク"], kun: [] },
    words: [
      { word: "工作",   reading: "こうさく",   sentence: "図画○○の時間だ。",             printable: true },
      { word: "工場",   reading: "こうじょう", sentence: "おかしの○○を見学する。",       printable: true },
      { word: "工夫",   reading: "くふう",     sentence: "やり方を○○する。",             printable: true },
      { word: "大工",   reading: "だいく",     sentence: "おじは○○だ。",                 printable: true },
      { word: "人工",   reading: "じんこう",   sentence: "○○の池を作る。",               printable: true },
      { word: "工じ",   reading: "こうじ",     sentence: "道ろの○○がはじまる。",         printable: true }
    ]
  },
  {
    kanji: "公",
    readings: { on: ["コウ"], kun: ["おおやけ"] },
    words: [
      { word: "公園",   reading: "こうえん",   sentence: "朝○○を走る。",                 printable: true },
      { word: "公立",   reading: "こうりつ",   sentence: "兄は○○の中学だ。",             printable: true },
      { word: "主人公", reading: "しゅじんこう", sentence: "本の○○のお話を聞く。",       printable: true },
      { word: "公平",   reading: "こうへい",   sentence: "○○にお米を分ける。",           printable: true },
      { word: "公正",   reading: "こうせい",   sentence: "しんさを○○に行う。",           printable: true },
      { word: "公開",   reading: "こうかい",   sentence: "じっけんを○○する。",           printable: true }
    ]
  },
  {
    kanji: "広",
    readings: { on: ["コウ"], kun: ["ひろ(い)", "ひろ(がる)", "ひろ(める)"] },
    words: [
      { word: "広い",   reading: "ひろい",     sentence: "○○い校ていであそぶ。",         printable: true },
      { word: "広場",   reading: "ひろば",     sentence: "○○にお店がならぶ。",           printable: true },
      { word: "広大",   reading: "こうだい",   sentence: "○○な土地が広がる。",           printable: true },
      { word: "広告",   reading: "こうこく",   sentence: "新聞に○○がのる。",             printable: true },
      { word: "広間",   reading: "ひろま",     sentence: "大きな○○でつどいをひらく。",   printable: true },
      { word: "広がる", reading: "ひろがる",   sentence: "風船が空に○○。",               printable: true }
    ]
  },
  {
    kanji: "交",
    readings: { on: ["コウ"], kun: ["まじ(わる)", "ま(ぜる)", "か(う)", "か(わす)"] },
    words: [
      { word: "交じる", reading: "まじる",     sentence: "クラスに新しい子が○○。",       printable: true },
      { word: "交通",   reading: "こうつう",   sentence: "○○ルールをしっかりまもる。",   printable: true },
      { word: "交番",   reading: "こうばん",   sentence: "近くの○○で聞く。",             printable: true },
      { word: "外交",   reading: "がいこう",   sentence: "国どうしの○○の話。",           printable: true },
      { word: "交かん", reading: "こうかん",   sentence: "シールを○○する。",             printable: true },
      { word: "交点",   reading: "こうてん",   sentence: "線と線の○○を見つける。",       printable: true }
    ]
  },
  {
    kanji: "光",
    readings: { on: ["コウ"], kun: ["ひか(る)", "ひかり"] },
    words: [
      { word: "光",     reading: "ひかり",     sentence: "まどから○○が入る。",           printable: true },
      { word: "光る",   reading: "ひかる",     sentence: "星が夜空で○○。",               printable: true },
      { word: "日光",   reading: "にっこう",   sentence: "あたたかい○○をあびる。",       printable: true },
      { word: "月光",   reading: "げっこう",   sentence: "○○がにわをてらす。",           printable: true },
      { word: "光線",   reading: "こうせん",   sentence: "○○がまっすぐにのびる。",       printable: true },
      { word: "光景",   reading: "こうけい",   sentence: "うつくしい○○を見る。",         printable: true }
    ]
  },
  {
    kanji: "考",
    readings: { on: ["コウ"], kun: ["かんが(える)"] },
    words: [
      { word: "考える", reading: "かんがえる", sentence: "自分で○○ことが大切。",         printable: true },
      { word: "考え",   reading: "かんがえ",   sentence: "よい○○がうかぶ。",             printable: true },
      { word: "考古学", reading: "こうこがく", sentence: "兄は○○にきょうみがある。",     printable: true },
      { word: "思考",   reading: "しこう",     sentence: "○○をふかめる。",               printable: true },
      { word: "考案",   reading: "こうあん",   sentence: "新しいルールを○○する。",       printable: true },
      { word: "再考",   reading: "さいこう",   sentence: "もう一どけいかくを○○。",       printable: true }
    ]
  },
  {
    kanji: "行",
    readings: { on: ["コウ", "ギョウ", "アン"], kun: ["い(く)", "ゆ(く)", "おこな(う)"] },
    words: [
      { word: "行く",   reading: "いく",       sentence: "朝学校へ○○。",                 printable: true },
      { word: "行う",   reading: "おこなう",   sentence: "学校でしきを○○。",             printable: true },
      { word: "行動",   reading: "こうどう",   sentence: "早めの○○をとる。",             printable: true },
      { word: "行進",   reading: "こうしん",   sentence: "うんどう会で○○する。",         printable: true },
      { word: "急行",   reading: "きゅうこう", sentence: "○○のれっ車にのる。",           printable: true },
      { word: "行ぎ",   reading: "ぎょうぎ",   sentence: "○○よく食じをする。",           printable: true }
    ]
  },
  {
    kanji: "高",
    readings: { on: ["コウ"], kun: ["たか(い)", "たか(まる)"] },
    words: [
      { word: "高い",   reading: "たかい",     sentence: "○○い山にのぼる。",             printable: true },
      { word: "高校",   reading: "こうこう",   sentence: "兄は○○生だ。",                 printable: true },
      { word: "高音",   reading: "こうおん",   sentence: "鳥が○○で鳴く。",               printable: true },
      { word: "高原",   reading: "こうげん",   sentence: "夏休みに○○でキャンプ。",       printable: true },
      { word: "高台",   reading: "たかだい",   sentence: "○○から海を見る。",             printable: true },
      { word: "高まる", reading: "たかまる",   sentence: "本ばんに気もちが○○。",         printable: true }
    ]
  },
  {
    kanji: "黄",
    readings: { on: ["コウ", "オウ"], kun: ["き", "こ"] },
    words: [
      { word: "黄",     reading: "き",         sentence: "○○いろのちょうちょ。",         printable: true },
      { word: "黄色",   reading: "きいろ",     sentence: "○○い花を見つけた。",           printable: true },
      { word: "黄金",   reading: "おうごん",   sentence: "○○のかんむりがかがやく。",     printable: true },
      { word: "黄ばむ", reading: "きばむ",     sentence: "古い本が○○。",                 printable: true },
      { word: "黄身",   reading: "きみ",       sentence: "玉子の○○を見せる。",           printable: true },
      { word: "黄葉",   reading: "こうよう",   sentence: "秋に木が○○する。",             printable: true }
    ]
  },
  {
    kanji: "合",
    readings: { on: ["ゴウ", "ガッ", "カッ"], kun: ["あ(う)", "あ(わす)"] },
    words: [
      { word: "合う",   reading: "あう",       sentence: "目と目が○○。",                 printable: true },
      { word: "合計",   reading: "ごうけい",   sentence: "おかいものの○○を見る。",       printable: true },
      { word: "合同",   reading: "ごうどう",   sentence: "となりのクラスと○○する。",     printable: true },
      { word: "気合い", reading: "きあい",     sentence: "○○を入れて本ばんにのぞむ。",   printable: true },
      { word: "合図",   reading: "あいず",     sentence: "ピーで○○をする。",             printable: true },
      { word: "合体",   reading: "がったい",   sentence: "ブロックを○○する。",           printable: true }
    ]
  },
  {
    kanji: "谷",
    readings: { on: ["コク"], kun: ["たに"] },
    words: [
      { word: "谷",     reading: "たに",       sentence: "ふかい○○を見おろす。",         printable: true },
      { word: "谷川",   reading: "たにがわ",   sentence: "○○の水はつめたい。",           printable: true },
      { word: "谷間",   reading: "たにま",     sentence: "○○に村がある。",               printable: true },
      { word: "谷ぞこ", reading: "たにぞこ",   sentence: "○○に小さな川が見える。",       printable: true },
      { word: "谷風",   reading: "たにかぜ",   sentence: "つめたい○○がふいてくる。",     printable: true },
      { word: "谷おく", reading: "たにおく",   sentence: "○○にひっそりと家がある。",     printable: true }
    ]
  },
  {
    kanji: "国",
    readings: { on: ["コク"], kun: ["くに"] },
    words: [
      { word: "国",     reading: "くに",       sentence: "わたしの○○は日本だ。",         printable: true },
      { word: "国語",   reading: "こくご",     sentence: "○○のじゅぎょうがある。",       printable: true },
      { word: "外国",   reading: "がいこく",   sentence: "○○のおかしを食べる。",         printable: true },
      { word: "国王",   reading: "こくおう",   sentence: "○○のお話を読む。",             printable: true },
      { word: "国家",   reading: "こっか",     sentence: "○○のしるしを見る。",           printable: true },
      { word: "中国",   reading: "ちゅうごく", sentence: "○○のおりょうりを食べる。",     printable: true }
    ]
  },
  {
    kanji: "黒",
    readings: { on: ["コク"], kun: ["くろ", "くろ(い)"] },
    words: [
      { word: "黒",     reading: "くろ",       sentence: "ふでで○○の線を引く。",         printable: true },
      { word: "黒い",   reading: "くろい",     sentence: "○○いくつをはく。",             printable: true },
      { word: "黒板",   reading: "こくばん",   sentence: "先生が○○に書く。",             printable: true },
      { word: "黒目",   reading: "くろめ",     sentence: "妹の○○が丸い。",               printable: true },
      { word: "黒雲",   reading: "くろくも",   sentence: "夕立前に○○が出る。",           printable: true },
      { word: "黒字",   reading: "くろじ",     sentence: "お店の家けいが○○だ。",         printable: true }
    ]
  },
  {
    kanji: "今",
    readings: { on: ["コン", "キン"], kun: ["いま"] },
    words: [
      { word: "今",     reading: "いま",       sentence: "○○すぐに行きます。",           printable: true },
      { word: "今日",   reading: "きょう",     sentence: "○○はよい天気だ。",             printable: true },
      { word: "今年",   reading: "ことし",     sentence: "○○の夏はあつい。",             printable: true },
      { word: "今月",   reading: "こんげつ",   sentence: "○○は雨が多い。",               printable: true },
      { word: "今回",   reading: "こんかい",   sentence: "○○のたびはたのしかった。",     printable: true },
      { word: "今夜",   reading: "こんや",     sentence: "○○は星がきれいだ。",           printable: true }
    ]
  },
  {
    kanji: "才",
    readings: { on: ["サイ"], kun: [] },
    words: [
      { word: "天才",   reading: "てんさい",   sentence: "○○とよばれる人がいる。",       printable: true },
      { word: "才のう", reading: "さいのう",   sentence: "○○をのばすれんしゅう。",       printable: true },
      { word: "八才",   reading: "はっさい",   sentence: "弟は○○になった。",             printable: true },
      { word: "才気",   reading: "さいき",     sentence: "○○のある姉だ。",               printable: true },
      { word: "七才",   reading: "ななさい",   sentence: "妹は○○のたんじょう日だ。",     printable: true },
      { word: "六才",   reading: "ろくさい",   sentence: "いとこは○○になった。",         printable: true }
    ]
  },
  {
    kanji: "細",
    readings: { on: ["サイ"], kun: ["ほそ(い)", "こま(かい)"] },
    words: [
      { word: "細い",   reading: "ほそい",     sentence: "○○い道を歩く。",               printable: true },
      { word: "細かい", reading: "こまかい",   sentence: "○○い字で書く。",               printable: true },
      { word: "細工",   reading: "さいく",     sentence: "竹で○○を作る。",               printable: true },
      { word: "心細い", reading: "こころぼそい", sentence: "一人で行くのは○○。",         printable: true },
      { word: "細長い", reading: "ほそながい", sentence: "○○い紙を切る。",               printable: true },
      { word: "細心",   reading: "さいしん",   sentence: "○○のちゅうい力で見る。",       printable: true }
    ]
  },
  {
    kanji: "作",
    readings: { on: ["サク", "サ"], kun: ["つく(る)"] },
    words: [
      { word: "作る",   reading: "つくる",     sentence: "ねん土で人形を○○。",           printable: true },
      { word: "作文",   reading: "さくぶん",   sentence: "夏休みの○○を書く。",           printable: true },
      { word: "工作",   reading: "こうさく",   sentence: "図画の○○をする。",             printable: true },
      { word: "作者",   reading: "さくしゃ",   sentence: "本の○○の名前。",               printable: true },
      { word: "作家",   reading: "さっか",     sentence: "ゆうめいな○○の話。",           printable: true },
      { word: "作用",   reading: "さよう",     sentence: "じしゃくの○○を見る。",         printable: true }
    ]
  },
  {
    kanji: "算",
    readings: { on: ["サン"], kun: [] },
    words: [
      { word: "算数",   reading: "さんすう",   sentence: "○○のテストがある。",           printable: true },
      { word: "計算",   reading: "けいさん",   sentence: "ノートに○○をする。",           printable: true },
      { word: "引き算", reading: "ひきざん",   sentence: "○○がとくいになる。",           printable: true },
      { word: "足し算", reading: "たしざん",   sentence: "○○のもんだいを出す。",         printable: true },
      { word: "予算",   reading: "よさん",     sentence: "おかいものの○○をきめる。",     printable: true },
      { word: "暗算",   reading: "あんざん",   sentence: "頭の中で○○をする。",           printable: true }
    ]
  },
  {
    kanji: "止",
    readings: { on: ["シ"], kun: ["と(まる)", "と(める)"] },
    words: [
      { word: "止まる", reading: "とまる",     sentence: "車が赤しんごうで○○。",         printable: true },
      { word: "止める", reading: "とめる",     sentence: "水道のじゃ口を○○。",           printable: true },
      { word: "中止",   reading: "ちゅうし",   sentence: "雨で遠足が○○になる。",         printable: true },
      { word: "休止",   reading: "きゅうし",   sentence: "うんてんを○○する。",           printable: true },
      { word: "止まれ", reading: "とまれ",     sentence: "道に○○の文字がある。",         printable: true },
      { word: "通行止", reading: "つうこうどめ", sentence: "工じで○○になる。",           printable: true }
    ]
  },
  {
    kanji: "市",
    readings: { on: ["シ"], kun: ["いち"] },
    words: [
      { word: "市",     reading: "いち",       sentence: "朝○○でやさいを買う。",         printable: true },
      { word: "市立",   reading: "しりつ",     sentence: "○○の図書かんで本をかりる。",   printable: true },
      { word: "市長",   reading: "しちょう",   sentence: "○○があいさつをする。",         printable: true },
      { word: "市場",   reading: "いちば",     sentence: "朝の○○はにぎやかだ。",         printable: true },
      { word: "市外",   reading: "しがい",     sentence: "○○へ電車で行く。",             printable: true },
      { word: "市内",   reading: "しない",     sentence: "○○のお店を回る。",             printable: true }
    ]
  },
  {
    kanji: "矢",
    readings: { on: ["シ"], kun: ["や"] },
    words: [
      { word: "矢",     reading: "や",         sentence: "弓と○○のれんしゅう。",         printable: true },
      { word: "弓矢",   reading: "ゆみや",     sentence: "むかしの○○の絵を見る。",       printable: true },
      { word: "矢じるし", reading: "やじるし", sentence: "地図に○○が書いてある。",       printable: true },
      { word: "白羽の矢", reading: "しらはのや", sentence: "○○がぼくに立つ。",           printable: true },
      { word: "一の矢", reading: "いちのや",   sentence: "○○をはなつ。",                 printable: true },
      { word: "矢車",   reading: "やぐるま",   sentence: "風で○○が回る。",               printable: true }
    ]
  },
  {
    kanji: "姉",
    readings: { on: ["シ"], kun: ["あね"] },
    words: [
      { word: "姉",     reading: "あね",       sentence: "○○はピアノが上手だ。",         printable: true },
      { word: "姉妹",   reading: "しまい",     sentence: "○○二人で歌を歌う。",           printable: true },
      { word: "姉弟",   reading: "してい",     sentence: "なかよし○○のお話。",           printable: true },
      { word: "実姉",   reading: "じっし",     sentence: "母の○○がたずねてくる。",       printable: true },
      { word: "姉上",   reading: "あねうえ",   sentence: "ものがたりで○○とよぶ。",       printable: true },
      { word: "お姉さん", reading: "おねえさん", sentence: "○○が歌を教えてくれる。",     printable: true }
    ]
  },
  {
    kanji: "思",
    readings: { on: ["シ"], kun: ["おも(う)"] },
    words: [
      { word: "思う",   reading: "おもう",     sentence: "本当によかったと○○。",         printable: true },
      { word: "思い出", reading: "おもいで",   sentence: "夏の○○を話す。",               printable: true },
      { word: "思考",   reading: "しこう",     sentence: "○○力をきたえる。",             printable: true },
      { word: "思案",   reading: "しあん",     sentence: "○○に時間がかかる。",           printable: true },
      { word: "思い",   reading: "おもい",     sentence: "強い○○がつたわる。",           printable: true },
      { word: "意思",   reading: "いし",       sentence: "○○をしっかりつたえる。",       printable: true }
    ]
  },
  {
    kanji: "紙",
    readings: { on: ["シ"], kun: ["かみ"] },
    words: [
      { word: "紙",     reading: "かみ",       sentence: "白い○○に絵をかく。",           printable: true },
      { word: "色紙",   reading: "いろがみ",   sentence: "○○でつるをおる。",             printable: true },
      { word: "新聞紙", reading: "しんぶんし", sentence: "○○で花たばをつつむ。",         printable: true },
      { word: "画用紙", reading: "がようし",   sentence: "○○にかさをかく。",             printable: true },
      { word: "手紙",   reading: "てがみ",     sentence: "母に○○を書く。",               printable: true },
      { word: "白紙",   reading: "はくし",     sentence: "○○にもどして考える。",         printable: true }
    ]
  },
  {
    kanji: "寺",
    readings: { on: ["ジ"], kun: ["てら"] },
    words: [
      { word: "寺",     reading: "てら",       sentence: "古いお○○をたずねる。",         printable: true },
      { word: "寺町",   reading: "てらまち",   sentence: "○○のけしきを楽しむ。",         printable: true },
      { word: "古寺",   reading: "こじ",       sentence: "山中の○○へ行く。",             printable: true },
      { word: "山寺",   reading: "やまでら",   sentence: "高い○○にのぼる。",             printable: true },
      { word: "寺院",   reading: "じいん",     sentence: "りっぱな○○を見る。",           printable: true },
      { word: "東大寺", reading: "とうだいじ", sentence: "○○の大ぶつを見る。",           printable: true }
    ]
  },
  {
    kanji: "自",
    readings: { on: ["ジ", "シ"], kun: ["みずか(ら)"] },
    words: [
      { word: "自分",   reading: "じぶん",     sentence: "○○のことを話す。",             printable: true },
      { word: "自どう", reading: "じどう",     sentence: "ドアが○○てきにひらく。",       printable: true },
      { word: "自力",   reading: "じりき",     sentence: "○○でとくのが大切だ。",         printable: true },
      { word: "自由",   reading: "じゆう",     sentence: "○○な時間を楽しむ。",           printable: true },
      { word: "自然",   reading: "しぜん",     sentence: "山の○○をかんさつする。",       printable: true },
      { word: "自立",   reading: "じりつ",     sentence: "○○の心をもって生活する。",     printable: true }
    ]
  },
  {
    kanji: "時",
    readings: { on: ["ジ"], kun: ["とき"] },
    words: [
      { word: "時",     reading: "とき",       sentence: "むかしの○○の話を聞く。",       printable: true },
      { word: "時間",   reading: "じかん",     sentence: "朝の○○がはやい。",             printable: true },
      { word: "時計",   reading: "とけい",     sentence: "学校の○○の音が聞こえる。",     printable: true },
      { word: "時こく", reading: "じこく",     sentence: "出ぱつの○○を聞く。",           printable: true },
      { word: "同時",   reading: "どうじ",     sentence: "○○にスタートをきる。",         printable: true },
      { word: "一時",   reading: "いちじ",     sentence: "午後○○にあそぶ。",             printable: true }
    ]
  },
  {
    kanji: "室",
    readings: { on: ["シツ"], kun: ["むろ"] },
    words: [
      { word: "室内",   reading: "しつない",   sentence: "○○であそぶ。",                 printable: true },
      { word: "教室",   reading: "きょうしつ", sentence: "ピアノの○○へ通う。",           printable: true },
      { word: "図書室", reading: "としょしつ", sentence: "休みに○○へ行く。",             printable: true },
      { word: "音楽室", reading: "おんがくしつ", sentence: "○○でピアノをひく。",         printable: true },
      { word: "室外",   reading: "しつがい",   sentence: "○○の気おんが下がる。",         printable: true },
      { word: "和室",   reading: "わしつ",     sentence: "おばあちゃんの家の○○。",       printable: true }
    ]
  },
  {
    kanji: "社",
    readings: { on: ["シャ"], kun: ["やしろ"] },
    words: [
      { word: "社",     reading: "やしろ",     sentence: "村の○○におまいりする。",       printable: true },
      { word: "会社",   reading: "かいしゃ",   sentence: "父は○○へ毎朝はたらきに行く。", printable: true },
      { word: "社長",   reading: "しゃちょう", sentence: "○○のあいさつを聞く。",         printable: true },
      { word: "社会",   reading: "しゃかい",   sentence: "○○科で地図をひらく。",         printable: true },
      { word: "本社",   reading: "ほんしゃ",   sentence: "○○は東京にある。",             printable: true },
      { word: "新聞社", reading: "しんぶんしゃ", sentence: "○○を見学する。",             printable: true }
    ]
  },
  {
    kanji: "弱",
    readings: { on: ["ジャク"], kun: ["よわ(い)", "よわ(る)", "よわ(まる)"] },
    words: [
      { word: "弱い",   reading: "よわい",     sentence: "風が○○くなる。",               printable: true },
      { word: "弱気",   reading: "よわき",     sentence: "本ばんで○○にならない。",       printable: true },
      { word: "弱る",   reading: "よわる",     sentence: "あつさで体が○○。",             printable: true },
      { word: "弱火",   reading: "よわび",     sentence: "なべを○○でにる。",             printable: true },
      { word: "弱点",   reading: "じゃくてん", sentence: "○○をしっかりこくふくする。",   printable: true },
      { word: "強弱",   reading: "きょうじゃく", sentence: "音の○○をつける。",           printable: true }
    ]
  },
  {
    kanji: "首",
    readings: { on: ["シュ"], kun: ["くび"] },
    words: [
      { word: "首",     reading: "くび",       sentence: "○○をゆっくり回す。",           printable: true },
      { word: "首かざり", reading: "くびかざり", sentence: "きれいな○○をつける。",       printable: true },
      { word: "手首",   reading: "てくび",     sentence: "○○に時計をつける。",           printable: true },
      { word: "足首",   reading: "あしくび",   sentence: "○○のうんどうをする。",         printable: true },
      { word: "首わ",   reading: "くびわ",     sentence: "犬に○○をつける。",             printable: true },
      { word: "首都",   reading: "しゅと",     sentence: "日本の○○は東京だ。",           printable: true }
    ]
  },
  {
    kanji: "秋",
    readings: { on: ["シュウ"], kun: ["あき"] },
    words: [
      { word: "秋",     reading: "あき",       sentence: "○○の風がここちよい。",         printable: true },
      { word: "秋風",   reading: "あきかぜ",   sentence: "○○がここちよくふく。",         printable: true },
      { word: "秋分",   reading: "しゅうぶん", sentence: "○○の日のお話。",               printable: true },
      { word: "秋ぐち", reading: "あきぐち",   sentence: "○○に雨がふえる。",             printable: true },
      { word: "初秋",   reading: "しょしゅう", sentence: "○○のすずしさを楽しむ。",       printable: true },
      { word: "秋空",   reading: "あきぞら",   sentence: "高い○○がひろがる。",           printable: true }
    ]
  },
  {
    kanji: "週",
    readings: { on: ["シュウ"], kun: [] },
    words: [
      { word: "週",     reading: "しゅう",     sentence: "今○○はテストがある。",         printable: true },
      { word: "今週",   reading: "こんしゅう", sentence: "○○はいそがしい。",             printable: true },
      { word: "来週",   reading: "らいしゅう", sentence: "○○は遠足だ。",                 printable: true },
      { word: "先週",   reading: "せんしゅう", sentence: "○○は休みだった。",             printable: true },
      { word: "週末",   reading: "しゅうまつ", sentence: "○○に家ぞくであそぶ。",         printable: true },
      { word: "毎週",   reading: "まいしゅう", sentence: "○○本を一さつ読む。",           printable: true }
    ]
  },
  {
    kanji: "春",
    readings: { on: ["シュン"], kun: ["はる"] },
    words: [
      { word: "春",     reading: "はる",       sentence: "あたたかい○○がきた。",         printable: true },
      { word: "春休み", reading: "はるやすみ", sentence: "○○に家ぞくで出かける。",       printable: true },
      { word: "春風",   reading: "はるかぜ",   sentence: "○○がほおをやさしくなでる。",   printable: true },
      { word: "立春",   reading: "りっしゅん", sentence: "○○はまだ少しさむい。",         printable: true },
      { word: "早春",   reading: "そうしゅん", sentence: "○○の花を見つける。",           printable: true },
      { word: "青春",   reading: "せいしゅん", sentence: "○○じだいを大切にする。",       printable: true }
    ]
  },
  {
    kanji: "書",
    readings: { on: ["ショ"], kun: ["か(く)"] },
    words: [
      { word: "書く",   reading: "かく",       sentence: "ノートに名前を○○。",           printable: true },
      { word: "書道",   reading: "しょどう",   sentence: "おじいさんが○○を教える。",     printable: true },
      { word: "図書",   reading: "としょ",     sentence: "学校の○○しつでしらべる。",     printable: true },
      { word: "葉書",   reading: "はがき",     sentence: "おばあちゃんに○○を出す。",     printable: true },
      { word: "書名",   reading: "しょめい",   sentence: "○○をメモする。",               printable: true },
      { word: "書きとり", reading: "かきとり", sentence: "○○のしゅくだいをする。",       printable: true }
    ]
  },
  {
    kanji: "少",
    readings: { on: ["ショウ"], kun: ["すく(ない)", "すこ(し)"] },
    words: [
      { word: "少ない", reading: "すくない",   sentence: "人が○○お店だ。",               printable: true },
      { word: "少し",   reading: "すこし",     sentence: "○○まってください。",           printable: true },
      { word: "少年",   reading: "しょうねん", sentence: "元気な○○が走る。",             printable: true },
      { word: "少女",   reading: "しょうじょ", sentence: "やさしい○○のお話。",           printable: true },
      { word: "多少",   reading: "たしょう",   sentence: "○○のえいきょうはある。",       printable: true },
      { word: "少々",   reading: "しょうしょう", sentence: "○○おまちください。",         printable: true }
    ]
  },
  {
    kanji: "場",
    readings: { on: ["ジョウ"], kun: ["ば"] },
    words: [
      { word: "場",     reading: "ば",         sentence: "あつまる○○しょをきめる。",     printable: true },
      { word: "工場",   reading: "こうじょう", sentence: "おかしの○○ではたらく。",       printable: true },
      { word: "会場",   reading: "かいじょう", sentence: "大会の○○へ行く。",             printable: true },
      { word: "市場",   reading: "いちば",     sentence: "朝の○○は元気だ。",             printable: true },
      { word: "場面",   reading: "ばめん",     sentence: "本の○○を思い出す。",           printable: true },
      { word: "広場",   reading: "ひろば",     sentence: "○○で人があつまる。",           printable: true }
    ]
  },
  {
    kanji: "色",
    readings: { on: ["ショク", "シキ"], kun: ["いろ"] },
    words: [
      { word: "色",     reading: "いろ",       sentence: "○○とりどりの花。",             printable: true },
      { word: "色紙",   reading: "いろがみ",   sentence: "○○でたのしいかざりを作る。",   printable: true },
      { word: "黄色",   reading: "きいろ",     sentence: "○○い花びらがちる。",           printable: true },
      { word: "色画用紙", reading: "いろがようし", sentence: "○○を切ってはる。",         printable: true },
      { word: "原色",   reading: "げんしょく", sentence: "○○ではっきりかく。",           printable: true },
      { word: "顔色",   reading: "かおいろ",   sentence: "○○がよくなった。",             printable: true }
    ]
  },
  {
    kanji: "食",
    readings: { on: ["ショク", "ジキ"], kun: ["た(べる)", "く(う)"] },
    words: [
      { word: "食べる", reading: "たべる",     sentence: "おにぎりを○○。",               printable: true },
      { word: "食事",   reading: "しょくじ",   sentence: "家ぞくで○○をする。",           printable: true },
      { word: "食パン", reading: "しょくぱん", sentence: "朝に○○を食べる。",             printable: true },
      { word: "夕食",   reading: "ゆうしょく", sentence: "○○の時間になる。",             printable: true },
      { word: "食どう", reading: "しょくどう", sentence: "学校の○○で食べる。",           printable: true },
      { word: "食生活", reading: "しょくせいかつ", sentence: "○○を見直す。",             printable: true }
    ]
  },
  {
    kanji: "心",
    readings: { on: ["シン"], kun: ["こころ"] },
    words: [
      { word: "心",     reading: "こころ",     sentence: "やさしい○○をもつ。",           printable: true },
      { word: "中心",   reading: "ちゅうしん", sentence: "町の○○にあつまる。",           printable: true },
      { word: "心ぞう", reading: "しんぞう",   sentence: "○○がどきどきする。",           printable: true },
      { word: "心配",   reading: "しんぱい",   sentence: "雨が○○だ。",                   printable: true },
      { word: "本心",   reading: "ほんしん",   sentence: "○○を友だちに話す。",           printable: true },
      { word: "用心",   reading: "ようじん",   sentence: "冬は火に○○する。",             printable: true }
    ]
  },
  {
    kanji: "新",
    readings: { on: ["シン"], kun: ["あたら(しい)", "あら(た)", "にい"] },
    words: [
      { word: "新しい", reading: "あたらしい", sentence: "○○いノートをひらく。",         printable: true },
      { word: "新聞",   reading: "しんぶん",   sentence: "朝に○○を読む。",               printable: true },
      { word: "新人",   reading: "しんじん",   sentence: "今年も○○がたくさん来た。",     printable: true },
      { word: "新年",   reading: "しんねん",   sentence: "○○のあいさつをする。",         printable: true },
      { word: "新春",   reading: "しんしゅん", sentence: "○○の風がさわやかだ。",         printable: true },
      { word: "新書",   reading: "しんしょ",   sentence: "本やで○○をえらぶ。",           printable: true }
    ]
  },
  {
    kanji: "親",
    readings: { on: ["シン"], kun: ["おや", "した(しい)"] },
    words: [
      { word: "親",     reading: "おや",       sentence: "○○子でハイキングへ行く。",     printable: true },
      { word: "親しい", reading: "したしい",   sentence: "○○い友だちに会う。",           printable: true },
      { word: "親友",   reading: "しんゆう",   sentence: "○○とおしゃべりする。",         printable: true },
      { word: "親切",   reading: "しんせつ",   sentence: "近くにすむ人は○○だ。",         printable: true },
      { word: "親心",   reading: "おやごころ", sentence: "○○がよくつたわる。",           printable: true },
      { word: "両親",   reading: "りょうしん", sentence: "○○とあそびに行く。",           printable: true }
    ]
  },
  {
    kanji: "図",
    readings: { on: ["ズ", "ト"], kun: ["はか(る)"] },
    words: [
      { word: "図",     reading: "ず",         sentence: "正かいの○○を見せる。",         printable: true },
      { word: "図画",   reading: "ずが",       sentence: "○○の時間がある。",             printable: true },
      { word: "図書",   reading: "としょ",     sentence: "○○室で本をかりる。",           printable: true },
      { word: "地図",   reading: "ちず",       sentence: "新しい○○を見る。",             printable: true },
      { word: "図形",   reading: "ずけい",     sentence: "○○のテストにとりくむ。",       printable: true },
      { word: "合図",   reading: "あいず",     sentence: "ピーで○○を出す。",             printable: true }
    ]
  },
  {
    kanji: "数",
    readings: { on: ["スウ"], kun: ["かず", "かぞ(える)"] },
    words: [
      { word: "数",     reading: "かず",       sentence: "りんごの○○を聞く。",           printable: true },
      { word: "数える", reading: "かぞえる",   sentence: "おはじきを○○。",               printable: true },
      { word: "算数",   reading: "さんすう",   sentence: "○○のしゅくだいがある。",       printable: true },
      { word: "数字",   reading: "すうじ",     sentence: "白い紙に○○を書く。",           printable: true },
      { word: "数学",   reading: "すうがく",   sentence: "兄は○○がすきだ。",             printable: true },
      { word: "回数",   reading: "かいすう",   sentence: "なわとびの○○を見る。",         printable: true }
    ]
  },
  {
    kanji: "西",
    readings: { on: ["セイ", "サイ"], kun: ["にし"] },
    words: [
      { word: "西",     reading: "にし",       sentence: "夕日が○○にしずむ。",           printable: true },
      { word: "西日",   reading: "にしび",     sentence: "○○がへやに入る。",             printable: true },
      { word: "西口",   reading: "にしぐち",   sentence: "えきの○○で会う。",             printable: true },
      { word: "西方",   reading: "せいほう",   sentence: "○○の空がくらくなる。",         printable: true },
      { word: "東西",   reading: "とうざい",   sentence: "○○南北をならう。",             printable: true },
      { word: "西風",   reading: "にしかぜ",   sentence: "強い○○がふく。",               printable: true }
    ]
  },
  {
    kanji: "声",
    readings: { on: ["セイ", "ショウ"], kun: ["こえ", "こわ"] },
    words: [
      { word: "声",     reading: "こえ",       sentence: "大きな○○で歌う。",             printable: true },
      { word: "歌声",   reading: "うたごえ",   sentence: "となりから○○が聞こえる。",     printable: true },
      { word: "音声",   reading: "おんせい",   sentence: "○○がよく聞こえる。",           printable: true },
      { word: "声楽",   reading: "せいがく",   sentence: "○○のれっすんに通う。",         printable: true },
      { word: "話し声", reading: "はなしごえ", sentence: "となりから○○がする。",         printable: true },
      { word: "大声",   reading: "おおごえ",   sentence: "○○でわらってしまう。",         printable: true }
    ]
  },
  {
    kanji: "星",
    readings: { on: ["セイ", "ショウ"], kun: ["ほし"] },
    words: [
      { word: "星",     reading: "ほし",       sentence: "夜空に○○がきらめく。",         printable: true },
      { word: "星空",   reading: "ほしぞら",   sentence: "山の上で○○をながめる。",       printable: true },
      { word: "明星",   reading: "みょうじょう", sentence: "夜明け前に○○がかがやく。",   printable: true },
      { word: "星形",   reading: "ほしがた",   sentence: "○○のもようをかく。",           printable: true },
      { word: "白星",   reading: "しろぼし",   sentence: "しあいで○○をあげる。",         printable: true },
      { word: "流れ星", reading: "ながれぼし", sentence: "夜空に○○を見た。",             printable: true }
    ]
  },
  {
    kanji: "晴",
    readings: { on: ["セイ"], kun: ["は(れる)", "は(らす)"] },
    words: [
      { word: "晴れる", reading: "はれる",     sentence: "あすは空が○○。",               printable: true },
      { word: "晴天",   reading: "せいてん",   sentence: "うんどう会は○○だ。",           printable: true },
      { word: "快晴",   reading: "かいせい",   sentence: "○○の空が広がる。",             printable: true },
      { word: "晴れ間", reading: "はれま",     sentence: "雨の○○に外に出る。",           printable: true },
      { word: "見晴し", reading: "みはらし",   sentence: "○○のよい場しょ。",             printable: true },
      { word: "晴れ姿", reading: "はれすがた", sentence: "新一年生の○○を見る。",         printable: true }
    ]
  },
  {
    kanji: "切",
    readings: { on: ["セツ", "サイ"], kun: ["き(る)", "き(れる)"] },
    words: [
      { word: "切る",   reading: "きる",       sentence: "はさみで紙を○○。",             printable: true },
      { word: "切手",   reading: "きって",     sentence: "ふうとうに○○をはる。",         printable: true },
      { word: "親切",   reading: "しんせつ",   sentence: "○○な人に出会う。",             printable: true },
      { word: "切ぷ",   reading: "きっぷ",     sentence: "電車の○○を買う。",             printable: true },
      { word: "大切",   reading: "たいせつ",   sentence: "本を○○にあつかう。",           printable: true },
      { word: "切り紙", reading: "きりがみ",   sentence: "色紙で○○をつくる。",           printable: true }
    ]
  },
  {
    kanji: "雪",
    readings: { on: ["セツ"], kun: ["ゆき"] },
    words: [
      { word: "雪",     reading: "ゆき",       sentence: "冬の○○がふる。",               printable: true },
      { word: "大雪",   reading: "おおゆき",   sentence: "夜から○○になる。",             printable: true },
      { word: "雪山",   reading: "ゆきやま",   sentence: "○○のけしきを見る。",           printable: true },
      { word: "雪原",   reading: "せつげん",   sentence: "○○を犬が走りまわる。",         printable: true },
      { word: "白雪",   reading: "しらゆき",   sentence: "山が○○につつまれる。",         printable: true },
      { word: "雪国",   reading: "ゆきぐに",   sentence: "○○のせいかつを学ぶ。",         printable: true }
    ]
  },
  {
    kanji: "船",
    readings: { on: ["セン"], kun: ["ふね", "ふな"] },
    words: [
      { word: "船",     reading: "ふね",       sentence: "みなとに○○がつく。",           printable: true },
      { word: "汽船",   reading: "きせん",     sentence: "○○がしゅっぱつする。",         printable: true },
      { word: "船長",   reading: "せんちょう", sentence: "○○の話を聞く。",               printable: true },
      { word: "風船",   reading: "ふうせん",   sentence: "○○が空高くとぶ。",             printable: true },
      { word: "船出",   reading: "ふなで",     sentence: "新しい○○のとき。",             printable: true },
      { word: "小船",   reading: "こぶね",     sentence: "みずうみで○○にのる。",         printable: true }
    ]
  },
  {
    kanji: "線",
    readings: { on: ["セン"], kun: [] },
    words: [
      { word: "線",     reading: "せん",       sentence: "ノートに○○を引く。",           printable: true },
      { word: "直線",   reading: "ちょくせん", sentence: "○○をまっすぐにかく。",         printable: true },
      { word: "光線",   reading: "こうせん",   sentence: "朝の○○がまぶしい。",           printable: true },
      { word: "電線",   reading: "でんせん",   sentence: "鳥が○○にとまる。",             printable: true },
      { word: "海岸線", reading: "かいがんせん", sentence: "長い○○を見る。",             printable: true },
      { word: "点線",   reading: "てんせん",   sentence: "○○にそって紙を切る。",         printable: true }
    ]
  },
  {
    kanji: "前",
    readings: { on: ["ゼン"], kun: ["まえ"] },
    words: [
      { word: "前",     reading: "まえ",       sentence: "校門の○○であつまる。",         printable: true },
      { word: "前後",   reading: "ぜんご",     sentence: "○○を見てから歩く。",           printable: true },
      { word: "午前",   reading: "ごぜん",     sentence: "○○十時にあそぶ。",             printable: true },
      { word: "名前",   reading: "なまえ",     sentence: "プリントに○○を書く。",         printable: true },
      { word: "前回",   reading: "ぜんかい",   sentence: "○○のテストはよかった。",       printable: true },
      { word: "目の前", reading: "めのまえ",   sentence: "○○にきれいなにじが出た。",     printable: true }
    ]
  },
  {
    kanji: "組",
    readings: { on: ["ソ"], kun: ["く(む)", "くみ"] },
    words: [
      { word: "組",     reading: "くみ",       sentence: "となりの○○とあそぶ。",         printable: true },
      { word: "組む",   reading: "くむ",       sentence: "二人でグループを○○。",         printable: true },
      { word: "番組",   reading: "ばんぐみ",   sentence: "夕ごはんの後でテレビ○○を見る。", printable: true },
      { word: "組曲",   reading: "くみきょく", sentence: "ピアノの○○を聞く。",           printable: true },
      { word: "二人組", reading: "ふたりぐみ", sentence: "○○で町をしらべる。",           printable: true },
      { word: "赤組",   reading: "あかぐみ",   sentence: "○○が点を入れた。",             printable: true }
    ]
  },
  {
    kanji: "走",
    readings: { on: ["ソウ"], kun: ["はし(る)"] },
    words: [
      { word: "走る",   reading: "はしる",     sentence: "公園を一しゅう○○。",           printable: true },
      { word: "走行",   reading: "そうこう",   sentence: "車の○○きょりを見る。",         printable: true },
      { word: "走者",   reading: "そうしゃ",   sentence: "リレーの○○をきめる。",         printable: true },
      { word: "走り出す", reading: "はしりだす", sentence: "合図で○○。",                 printable: true },
      { word: "走り回る", reading: "はしりまわる", sentence: "犬が広場を○○。",           printable: true },
      { word: "力走",   reading: "りきそう",   sentence: "○○でゴールに入る。",           printable: true }
    ]
  },
  {
    kanji: "多",
    readings: { on: ["タ"], kun: ["おお(い)"] },
    words: [
      { word: "多い",   reading: "おおい",     sentence: "人が○○町を歩く。",             printable: true },
      { word: "多数",   reading: "たすう",     sentence: "○○のいけんを聞く。",           printable: true },
      { word: "多少",   reading: "たしょう",   sentence: "○○きずがある。",               printable: true },
      { word: "多分",   reading: "たぶん",     sentence: "○○あした晴れる。",             printable: true },
      { word: "多大",   reading: "ただい",     sentence: "○○なえいきょうが出る。",       printable: true },
      { word: "多角形", reading: "たかくけい", sentence: "○○を紙に書く。",               printable: true }
    ]
  },
  {
    kanji: "太",
    readings: { on: ["タイ", "タ"], kun: ["ふと(い)", "ふと(る)"] },
    words: [
      { word: "太い",   reading: "ふとい",     sentence: "○○い木に手をあてる。",         printable: true },
      { word: "太る",   reading: "ふとる",     sentence: "ねこが少し○○。",               printable: true },
      { word: "太陽",   reading: "たいよう",   sentence: "○○の光をあびる。",             printable: true },
      { word: "太鼓",   reading: "たいこ",     sentence: "おまつりで○○をたたく。",       printable: true },
      { word: "丸太",   reading: "まるた",     sentence: "○○の上を歩く。",               printable: true },
      { word: "太字",   reading: "ふとじ",     sentence: "ノートに○○で書く。",           printable: true }
    ]
  },
  {
    kanji: "体",
    readings: { on: ["タイ", "テイ"], kun: ["からだ"] },
    words: [
      { word: "体",     reading: "からだ",     sentence: "朝に○○をうごかす。",           printable: true },
      { word: "体力",   reading: "たいりょく", sentence: "うんどうで○○をつける。",       printable: true },
      { word: "体育",   reading: "たいいく",   sentence: "○○の時間が楽しい。",           printable: true },
      { word: "本体",   reading: "ほんたい",   sentence: "きかいの○○を見る。",           printable: true },
      { word: "体重",   reading: "たいじゅう", sentence: "○○をはかる。",                 printable: true },
      { word: "体ちょう", reading: "たいちょう", sentence: "○○がわるくて休む。",         printable: true }
    ]
  },
  {
    kanji: "台",
    readings: { on: ["ダイ", "タイ"], kun: [] },
    words: [
      { word: "台",     reading: "だい",       sentence: "ふみ○○に上がる。",             printable: true },
      { word: "台所",   reading: "だいどころ", sentence: "母が○○にいる。",               printable: true },
      { word: "台風",   reading: "たいふう",   sentence: "○○が近づく。",                 printable: true },
      { word: "高台",   reading: "たかだい",   sentence: "○○から海が見える。",           printable: true },
      { word: "台本",   reading: "だいほん",   sentence: "げきの○○を読む。",             printable: true },
      { word: "土台",   reading: "どだい",     sentence: "家の○○を作る。",               printable: true }
    ]
  },
  {
    kanji: "地",
    readings: { on: ["チ", "ジ"], kun: [] },
    words: [
      { word: "地図",   reading: "ちず",       sentence: "町の○○をひろげて見る。",       printable: true },
      { word: "地下",   reading: "ちか",       sentence: "○○のへやはしずかだ。",         printable: true },
      { word: "土地",   reading: "とち",       sentence: "広い○○がある。",               printable: true },
      { word: "地元",   reading: "じもと",     sentence: "兄は○○の中学校に通う。",       printable: true },
      { word: "地名",   reading: "ちめい",     sentence: "古い○○のゆらいを知る。",       printable: true },
      { word: "地球",   reading: "ちきゅう",   sentence: "○○ぎを回してあそぶ。",         printable: true }
    ]
  },
  {
    kanji: "池",
    readings: { on: ["チ"], kun: ["いけ"] },
    words: [
      { word: "池",     reading: "いけ",       sentence: "公園の○○にこいがいる。",       printable: true },
      { word: "古池",   reading: "ふるいけ",   sentence: "○○のはいくを読む。",           printable: true },
      { word: "電池",   reading: "でんち",     sentence: "リモコンの○○をかえる。",       printable: true },
      { word: "ため池", reading: "ためいけ",   sentence: "水田の近くに○○がある。",       printable: true },
      { word: "池の魚", reading: "いけのさかな", sentence: "○○がはねた。",               printable: true },
      { word: "池ぞこ", reading: "いけぞこ",   sentence: "○○に石がしずむ。",             printable: true }
    ]
  },
  {
    kanji: "知",
    readings: { on: ["チ"], kun: ["し(る)"] },
    words: [
      { word: "知る",   reading: "しる",       sentence: "本でうちゅうのことを○○。",     printable: true },
      { word: "知人",   reading: "ちじん",     sentence: "町で○○に出会う。",             printable: true },
      { word: "知ち",   reading: "ちえ",       sentence: "むかしの人の○○。",             printable: true },
      { word: "顔見知り", reading: "かおみしり", sentence: "○○のおじさんに会う。",       printable: true },
      { word: "知り合い", reading: "しりあい", sentence: "○○とあいさつする。",           printable: true },
      { word: "知らせ", reading: "しらせ",     sentence: "うれしい○○がとどく。",         printable: true }
    ]
  },
  {
    kanji: "茶",
    readings: { on: ["チャ", "サ"], kun: [] },
    words: [
      { word: "茶",     reading: "ちゃ",       sentence: "お○○をいっぱいのむ。",         printable: true },
      { word: "茶色",   reading: "ちゃいろ",   sentence: "○○のくつをえらぶ。",           printable: true },
      { word: "茶会",   reading: "ちゃかい",   sentence: "○○にしょうたいされる。",       printable: true },
      { word: "茶わん", reading: "ちゃわん",   sentence: "○○にごはんをよそう。",         printable: true },
      { word: "茶の間", reading: "ちゃのま",   sentence: "○○で家ぞくがあつまる。",       printable: true },
      { word: "番茶",   reading: "ばんちゃ",   sentence: "夕食の後に○○をのむ。",         printable: true }
    ]
  },
  {
    kanji: "昼",
    readings: { on: ["チュウ"], kun: ["ひる"] },
    words: [
      { word: "昼",     reading: "ひる",       sentence: "○○ごはんを食べる。",           printable: true },
      { word: "昼食",   reading: "ちゅうしょく", sentence: "公園で○○をとる。",           printable: true },
      { word: "昼ま",   reading: "ひるま",     sentence: "○○はあたたかい。",             printable: true },
      { word: "昼休み", reading: "ひるやすみ", sentence: "○○に外であそぶ。",             printable: true },
      { word: "昼夜",   reading: "ちゅうや",   sentence: "○○のおんさが大きい。",         printable: true },
      { word: "白昼",   reading: "はくちゅう", sentence: "○○の町はにぎやかだ。",         printable: true }
    ]
  },
  {
    kanji: "長",
    readings: { on: ["チョウ"], kun: ["なが(い)"] },
    words: [
      { word: "長い",   reading: "ながい",     sentence: "○○い時間まつ。",               printable: true },
      { word: "校長",   reading: "こうちょう", sentence: "○○先生のお話を聞く。",         printable: true },
      { word: "店長",   reading: "てんちょう", sentence: "やさしい○○がむかえてくれた。", printable: true },
      { word: "長女",   reading: "ちょうじょ", sentence: "姉は家の○○だ。",               printable: true },
      { word: "長雨",   reading: "ながあめ",   sentence: "○○がつづいてこまる。",         printable: true },
      { word: "長年",   reading: "ながねん",   sentence: "○○ねがいがかなう日。",         printable: true }
    ]
  },
  {
    kanji: "鳥",
    readings: { on: ["チョウ"], kun: ["とり"] },
    words: [
      { word: "鳥",     reading: "とり",       sentence: "木の上に○○がいる。",           printable: true },
      { word: "小鳥",   reading: "ことり",     sentence: "○○がさえずる。",               printable: true },
      { word: "白鳥",   reading: "はくちょう", sentence: "みずうみに○○がいる。",         printable: true },
      { word: "鳥かご", reading: "とりかご",   sentence: "○○のそうじをする。",           printable: true },
      { word: "野鳥",   reading: "やちょう",   sentence: "森で○○のすがたを見る。",       printable: true },
      { word: "鳥肉",   reading: "とりにく",   sentence: "○○のからあげを食べる。",       printable: true }
    ]
  },
  {
    kanji: "朝",
    readings: { on: ["チョウ"], kun: ["あさ"] },
    words: [
      { word: "朝",     reading: "あさ",       sentence: "○○早くおきる。",               printable: true },
      { word: "朝食",   reading: "ちょうしょく", sentence: "○○をしっかり食べる。",       printable: true },
      { word: "朝顔",   reading: "あさがお",   sentence: "○○がにわにさく。",             printable: true },
      { word: "今朝",   reading: "けさ",       sentence: "○○は雨だった。",               printable: true },
      { word: "早朝",   reading: "そうちょう", sentence: "○○からさんぽする。",           printable: true },
      { word: "朝日",   reading: "あさひ",     sentence: "うつくしい○○が出る。",         printable: true }
    ]
  },
  {
    kanji: "直",
    readings: { on: ["チョク", "ジキ"], kun: ["なお(る)", "なお(す)", "ただ(ちに)"] },
    words: [
      { word: "直す",   reading: "なおす",     sentence: "おもちゃを○○。",               printable: true },
      { word: "直る",   reading: "なおる",     sentence: "こわれた時計が○○。",           printable: true },
      { word: "直線",   reading: "ちょくせん", sentence: "じょうぎで○○を引く。",         printable: true },
      { word: "正直",   reading: "しょうじき", sentence: "○○な気もちで話す。",           printable: true },
      { word: "直前",   reading: "ちょくぜん", sentence: "本ばんの○○まで休む。",         printable: true },
      { word: "直後",   reading: "ちょくご",   sentence: "じゅぎょうの○○にあそぶ。",     printable: true }
    ]
  },
  {
    kanji: "通",
    readings: { on: ["ツウ", "ツ"], kun: ["とお(る)", "かよ(う)"] },
    words: [
      { word: "通る",   reading: "とおる",     sentence: "校門を○○。",                   printable: true },
      { word: "通う",   reading: "かよう",     sentence: "学校に○○。",                   printable: true },
      { word: "通学",   reading: "つうがく",   sentence: "朝○○の時間だ。",               printable: true },
      { word: "交通",   reading: "こうつう",   sentence: "○○ルールを学校で学ぶ。",       printable: true },
      { word: "通り",   reading: "とおり",     sentence: "大きな○○に出る。",             printable: true },
      { word: "通行",   reading: "つうこう",   sentence: "○○止めの道に出る。",           printable: true }
    ]
  },
  {
    kanji: "弟",
    readings: { on: ["テイ", "ダイ"], kun: ["おとうと"] },
    words: [
      { word: "弟",     reading: "おとうと",   sentence: "○○といっしょにあそぶ。",       printable: true },
      { word: "兄弟",   reading: "きょうだい", sentence: "○○なかよくする。",             printable: true },
      { word: "弟子",   reading: "でし",       sentence: "先生に○○入りをする。",         printable: true },
      { word: "実弟",   reading: "じってい",   sentence: "父の○○がたずねてくる。",       printable: true },
      { word: "弟分",   reading: "おとうとぶん", sentence: "クラブで○○のような子。",     printable: true },
      { word: "弟さん", reading: "おとうとさん", sentence: "○○が元気にあいさつする。",   printable: true }
    ]
  },
  {
    kanji: "店",
    readings: { on: ["テン"], kun: ["みせ"] },
    words: [
      { word: "店",     reading: "みせ",       sentence: "○○の前にならぶ。",             printable: true },
      { word: "本店",   reading: "ほんてん",   sentence: "○○のばしょをたずねる。",       printable: true },
      { word: "店長",   reading: "てんちょう", sentence: "○○がおれいを言う。",           printable: true },
      { word: "売店",   reading: "ばいてん",   sentence: "えきの○○で買う。",             printable: true },
      { word: "店ない", reading: "てんない",   sentence: "○○をきれいにそうじする。",     printable: true },
      { word: "夜店",   reading: "よみせ",     sentence: "おまつりの○○がならぶ。",       printable: true }
    ]
  },
  {
    kanji: "点",
    readings: { on: ["テン"], kun: [] },
    words: [
      { word: "点",     reading: "てん",       sentence: "ノートに小さな○○をかく。",     printable: true },
      { word: "点数",   reading: "てんすう",   sentence: "テストの○○を見る。",           printable: true },
      { word: "百点",   reading: "ひゃくてん", sentence: "算数で○○をとる。",             printable: true },
      { word: "弱点",   reading: "じゃくてん", sentence: "○○をのりこえる力がつく。",     printable: true },
      { word: "交点",   reading: "こうてん",   sentence: "線と線の○○を見る。",           printable: true },
      { word: "点字",   reading: "てんじ",     sentence: "ゆびで○○を読みとる。",         printable: true }
    ]
  },
  {
    kanji: "電",
    readings: { on: ["デン"], kun: [] },
    words: [
      { word: "電気",   reading: "でんき",     sentence: "へやの○○をつける。",           printable: true },
      { word: "電車",   reading: "でんしゃ",   sentence: "朝○○にのる。",                 printable: true },
      { word: "電池",   reading: "でんち",     sentence: "時計の○○をかえる。",           printable: true },
      { word: "電話",   reading: "でんわ",     sentence: "友だちに○○する。",             printable: true },
      { word: "電線",   reading: "でんせん",   sentence: "鳥が○○にとまる。",             printable: true },
      { word: "電力",   reading: "でんりょく", sentence: "○○のせつやくをする。",         printable: true }
    ]
  },
  {
    kanji: "刀",
    readings: { on: ["トウ"], kun: ["かたな"] },
    words: [
      { word: "刀",     reading: "かたな",     sentence: "はくぶつかんで○○を見る。",     printable: true },
      { word: "小刀",   reading: "こがたな",   sentence: "○○でえんぴつをけずる。",       printable: true },
      { word: "木刀",   reading: "ぼくとう",   sentence: "○○でけいこする。",             printable: true },
      { word: "短刀",   reading: "たんとう",   sentence: "ものがたりの○○の話。",         printable: true },
      { word: "竹刀",   reading: "しない",     sentence: "けんどうの○○をもつ。",         printable: true },
      { word: "太刀",   reading: "たち",       sentence: "ぶしの○○がかざってある。",     printable: true }
    ]
  },
  {
    kanji: "冬",
    readings: { on: ["トウ"], kun: ["ふゆ"] },
    words: [
      { word: "冬",     reading: "ふゆ",       sentence: "○○の朝はさむい。",             printable: true },
      { word: "冬休み", reading: "ふゆやすみ", sentence: "○○にスキーへ行く。",           printable: true },
      { word: "立冬",   reading: "りっとう",   sentence: "○○のころが来る。",             printable: true },
      { word: "冬山",   reading: "ふゆやま",   sentence: "○○のけしきはきれいだ。",       printable: true },
      { word: "冬空",   reading: "ふゆぞら",   sentence: "つめたい○○を見上げる。",       printable: true },
      { word: "真冬",   reading: "まふゆ",     sentence: "○○のしばれる夜。",             printable: true }
    ]
  },
  {
    kanji: "当",
    readings: { on: ["トウ"], kun: ["あ(たる)", "あ(てる)"] },
    words: [
      { word: "当たる", reading: "あたる",     sentence: "ボールが木に○○。",             printable: true },
      { word: "当てる", reading: "あてる",     sentence: "目を○○てとくいわざ。",         printable: true },
      { word: "本当",   reading: "ほんとう",   sentence: "○○の話を聞いてほっとする。",   printable: true },
      { word: "当日",   reading: "とうじつ",   sentence: "うんどう会の○○。",             printable: true },
      { word: "当番",   reading: "とうばん",   sentence: "そうじの○○になる。",           printable: true },
      { word: "見当",   reading: "けんとう",   sentence: "答えの○○をつける。",           printable: true }
    ]
  },
  {
    kanji: "東",
    readings: { on: ["トウ"], kun: ["ひがし"] },
    words: [
      { word: "東",     reading: "ひがし",     sentence: "○○から朝日がのぼる。",         printable: true },
      { word: "東口",   reading: "ひがしぐち", sentence: "○○からホームに上がる。",       printable: true },
      { word: "東京",   reading: "とうきょう", sentence: "あすは○○へしゅっぱつする。",   printable: true },
      { word: "東西",   reading: "とうざい",   sentence: "地図で○○の方角を見る。",       printable: true },
      { word: "東がわ", reading: "ひがしがわ", sentence: "町の○○に小学校がある。",       printable: true },
      { word: "東日本", reading: "ひがしにほん", sentence: "○○のおまつりを見る。",       printable: true }
    ]
  },
  {
    kanji: "答",
    readings: { on: ["トウ"], kun: ["こた(える)", "こた(え)"] },
    words: [
      { word: "答える", reading: "こたえる",   sentence: "先生の話にしっかり○○。",       printable: true },
      { word: "答え",   reading: "こたえ",     sentence: "正しい○○を書く。",             printable: true },
      { word: "答案",   reading: "とうあん",   sentence: "○○を出す。",                   printable: true },
      { word: "回答",   reading: "かいとう",   sentence: "アンケートの○○。",             printable: true },
      { word: "答え方", reading: "こたえかた", sentence: "○○をていねいに考える。",       printable: true },
      { word: "問答",   reading: "もんどう",   sentence: "先生と○○をする。",             printable: true }
    ]
  },
  {
    kanji: "頭",
    readings: { on: ["トウ", "ズ"], kun: ["あたま", "かしら"] },
    words: [
      { word: "頭",     reading: "あたま",     sentence: "○○をやさしくなでる。",         printable: true },
      { word: "先頭",   reading: "せんとう",   sentence: "○○を歩く。",                   printable: true },
      { word: "頭上",   reading: "ずじょう",   sentence: "○○に気をつける。",             printable: true },
      { word: "頭文字", reading: "かしらもじ", sentence: "名前の○○を書く。",             printable: true },
      { word: "口頭",   reading: "こうとう",   sentence: "○○でつたえる。",               printable: true },
      { word: "頭のう", reading: "ずのう",     sentence: "○○がするどい人だ。",           printable: true }
    ]
  },
  {
    kanji: "同",
    readings: { on: ["ドウ"], kun: ["おな(じ)"] },
    words: [
      { word: "同じ",   reading: "おなじ",     sentence: "兄と○○本を読む。",             printable: true },
      { word: "同時",   reading: "どうじ",     sentence: "二人が○○にゴールした。",       printable: true },
      { word: "同年",   reading: "どうねん",   sentence: "○○の友だちに会う。",           printable: true },
      { word: "同点",   reading: "どうてん",   sentence: "しあいは○○でおわった。",       printable: true },
      { word: "合同",   reading: "ごうどう",   sentence: "となりとうらで○○のれんしゅう。", printable: true },
      { word: "同行",   reading: "どうこう",   sentence: "先生に○○する。",               printable: true }
    ]
  },
  {
    kanji: "道",
    readings: { on: ["ドウ", "トウ"], kun: ["みち"] },
    words: [
      { word: "道",     reading: "みち",       sentence: "○○のはしを歩く。",             printable: true },
      { word: "道ぐ",   reading: "どうぐ",     sentence: "○○ばこをかたづける。",         printable: true },
      { word: "車道",   reading: "しゃどう",   sentence: "○○を車が通る。",               printable: true },
      { word: "近道",   reading: "ちかみち",   sentence: "○○を通って学校へ行く。",       printable: true },
      { word: "水道",   reading: "すいどう",   sentence: "○○の水をのむ。",               printable: true },
      { word: "書道",   reading: "しょどう",   sentence: "○○のけいこに通う。",           printable: true }
    ]
  },
  {
    kanji: "読",
    readings: { on: ["ドク", "トク"], kun: ["よ(む)"] },
    words: [
      { word: "読む",   reading: "よむ",       sentence: "毎日本を○○。",                 printable: true },
      { word: "読書",   reading: "どくしょ",   sentence: "○○のしゅうかんがある。",       printable: true },
      { word: "音読",   reading: "おんどく",   sentence: "教科書を○○する。",             printable: true },
      { word: "読み方", reading: "よみかた",   sentence: "字の○○をならう。",             printable: true },
      { word: "読点",   reading: "とうてん",   sentence: "文に○○を入れる。",             printable: true },
      { word: "読本",   reading: "とくほん",   sentence: "国語の○○を読む。",             printable: true }
    ]
  },
  {
    kanji: "内",
    readings: { on: ["ナイ", "ダイ"], kun: ["うち"] },
    words: [
      { word: "内",     reading: "うち",       sentence: "へやの○○で本を読む。",         printable: true },
      { word: "校内",   reading: "こうない",   sentence: "○○ほうそうがながれる。",       printable: true },
      { word: "国内",   reading: "こくない",   sentence: "○○のあちこちをめぐる。",       printable: true },
      { word: "車内",   reading: "しゃない",   sentence: "○○ではしずかにする。",         printable: true },
      { word: "内よう", reading: "ないよう",   sentence: "本の○○を友だちに話す。",       printable: true },
      { word: "内気",   reading: "うちき",     sentence: "○○な子に話しかける。",         printable: true }
    ]
  },
  {
    kanji: "南",
    readings: { on: ["ナン", "ナ"], kun: ["みなみ"] },
    words: [
      { word: "南",     reading: "みなみ",     sentence: "○○の風がふく。",               printable: true },
      { word: "南国",   reading: "なんごく",   sentence: "○○の花はあざやかだ。",         printable: true },
      { word: "南口",   reading: "みなみぐち", sentence: "えきの○○の前にバスがとまる。", printable: true },
      { word: "東南",   reading: "とうなん",   sentence: "○○アジアの本を読む。",         printable: true },
      { word: "西南",   reading: "せいなん",   sentence: "○○の方角をさす。",             printable: true },
      { word: "南北",   reading: "なんぼく",   sentence: "○○に細ながい国土。",           printable: true }
    ]
  },
  {
    kanji: "肉",
    readings: { on: ["ニク"], kun: [] },
    words: [
      { word: "肉",     reading: "にく",       sentence: "○○のおかずを食べる。",         printable: true },
      { word: "牛肉",   reading: "ぎゅうにく", sentence: "○○のシチューがすきだ。",       printable: true },
      { word: "鳥肉",   reading: "とりにく",   sentence: "○○のからあげ。",               printable: true },
      { word: "肉食",   reading: "にくしょく", sentence: "○○のきょうりゅう。",           printable: true },
      { word: "肉体",   reading: "にくたい",   sentence: "○○をきたえる。",               printable: true },
      { word: "魚肉",   reading: "ぎょにく",   sentence: "○○のソーセージを食べる。",     printable: true }
    ]
  },
  {
    kanji: "馬",
    readings: { on: ["バ"], kun: ["うま", "ま"] },
    words: [
      { word: "馬",     reading: "うま",       sentence: "ぼくじょうの○○を見る。",       printable: true },
      { word: "子馬",   reading: "こうま",     sentence: "ぼくじょうで○○が走る。",       printable: true },
      { word: "馬車",   reading: "ばしゃ",     sentence: "ヨーロッパの○○の話。",         printable: true },
      { word: "竹馬",   reading: "たけうま",   sentence: "○○にのってあそぶ。",           printable: true },
      { word: "馬力",   reading: "ばりき",     sentence: "○○のあるきかい。",             printable: true },
      { word: "馬小屋", reading: "うまごや",   sentence: "ぼくじょうの○○を見る。",       printable: true }
    ]
  },
  {
    kanji: "売",
    readings: { on: ["バイ"], kun: ["う(る)", "う(れる)"] },
    words: [
      { word: "売る",   reading: "うる",       sentence: "お店でやさいを○○。",           printable: true },
      { word: "売れる", reading: "うれる",     sentence: "新しい本が○○。",               printable: true },
      { word: "売店",   reading: "ばいてん",   sentence: "プールの○○でジュースを買う。", printable: true },
      { word: "売買",   reading: "ばいばい",   sentence: "土地の○○がはじまる。",         printable: true },
      { word: "売り上げ", reading: "うりあげ", sentence: "お店の○○がふえた。",           printable: true },
      { word: "売り場", reading: "うりば",     sentence: "おもちゃの○○へ行く。",         printable: true }
    ]
  },
  {
    kanji: "買",
    readings: { on: ["バイ"], kun: ["か(う)"] },
    words: [
      { word: "買う",   reading: "かう",       sentence: "お店でパンを○○。",             printable: true },
      { word: "買い物", reading: "かいもの",   sentence: "母と○○に行く。",               printable: true },
      { word: "売買",   reading: "ばいばい",   sentence: "おうちの○○がはじまる。",       printable: true },
      { word: "買い手", reading: "かいて",     sentence: "りんごの○○がきまる。",         printable: true },
      { word: "買い食い", reading: "かいぐい", sentence: "○○はやめましょう。",           printable: true },
      { word: "買いね", reading: "かいね",     sentence: "やさいの○○を見る。",           printable: true }
    ]
  },
  {
    kanji: "麦",
    readings: { on: ["バク"], kun: ["むぎ"] },
    words: [
      { word: "麦",     reading: "むぎ",       sentence: "○○ばたけが広がる。",           printable: true },
      { word: "麦茶",   reading: "むぎちゃ",   sentence: "夏に○○をのむ。",               printable: true },
      { word: "小麦",   reading: "こむぎ",     sentence: "○○こでパンを作る。",           printable: true },
      { word: "麦畑",   reading: "むぎばたけ", sentence: "○○がどこまでも広がる。",       printable: true },
      { word: "大麦",   reading: "おおむぎ",   sentence: "○○のかゆを食べる。",           printable: true },
      { word: "麦わら", reading: "むぎわら",   sentence: "○○ぼうしをかぶる。",           printable: true }
    ]
  },
  {
    kanji: "半",
    readings: { on: ["ハン"], kun: ["なか(ば)"] },
    words: [
      { word: "半分",   reading: "はんぶん",   sentence: "りんごを○○に切る。",           printable: true },
      { word: "半ば",   reading: "なかば",     sentence: "月の○○にあそびに行く。",       printable: true },
      { word: "前半",   reading: "ぜんはん",   sentence: "しあいの○○がおわった。",       printable: true },
      { word: "後半",   reading: "こうはん",   sentence: "○○から点が入る。",             printable: true },
      { word: "半年",   reading: "はんとし",   sentence: "○○前に学校に入った。",         printable: true },
      { word: "半日",   reading: "はんにち",   sentence: "○○本を読んですごす。",         printable: true }
    ]
  },
  {
    kanji: "番",
    readings: { on: ["バン"], kun: [] },
    words: [
      { word: "番",     reading: "ばん",       sentence: "じゅん○○にならぶ。",           printable: true },
      { word: "番組",   reading: "ばんぐみ",   sentence: "おもしろいテレビの○○を見る。", printable: true },
      { word: "交番",   reading: "こうばん",   sentence: "近くの○○で聞く。",             printable: true },
      { word: "番号",   reading: "ばんごう",   sentence: "○○じゅんによばれる。",         printable: true },
      { word: "本番",   reading: "ほんばん",   sentence: "あすが○○だ。",                 printable: true },
      { word: "当番",   reading: "とうばん",   sentence: "そうじの○○をする。",           printable: true }
    ]
  },
  {
    kanji: "父",
    readings: { on: ["フ"], kun: ["ちち"] },
    words: [
      { word: "父",     reading: "ちち",       sentence: "○○といっしょに走る。",         printable: true },
      { word: "父母",   reading: "ふぼ",       sentence: "○○のあいを思う。",             printable: true },
      { word: "父親",   reading: "ちちおや",   sentence: "○○のせなかが大きい。",         printable: true },
      { word: "父さん", reading: "とうさん",   sentence: "お○○とつりに行く。",           printable: true },
      { word: "祖父",   reading: "そふ",       sentence: "○○とさんぽする。",             printable: true },
      { word: "父の日", reading: "ちちのひ",   sentence: "○○にプレゼントをする。",       printable: true }
    ]
  },
  {
    kanji: "風",
    readings: { on: ["フウ", "フ"], kun: ["かぜ", "かざ"] },
    words: [
      { word: "風",     reading: "かぜ",       sentence: "○○がやさしくふく。",           printable: true },
      { word: "風車",   reading: "ふうしゃ",   sentence: "○○が回るのを見る。",           printable: true },
      { word: "風船",   reading: "ふうせん",   sentence: "赤い○○が空にとぶ。",           printable: true },
      { word: "南風",   reading: "みなみかぜ", sentence: "あたたかい○○がふく。",         printable: true },
      { word: "風土",   reading: "ふうど",     sentence: "○○のちがいを学ぶ。",           printable: true },
      { word: "風雪",   reading: "ふうせつ",   sentence: "強い○○の中を歩く。",           printable: true }
    ]
  },
  {
    kanji: "分",
    readings: { on: ["ブン", "フン", "ブ"], kun: ["わ(かる)", "わ(ける)"] },
    words: [
      { word: "分かる", reading: "わかる",     sentence: "答えが○○。",                   printable: true },
      { word: "分ける", reading: "わける",     sentence: "おかしを二つに○○。",           printable: true },
      { word: "半分",   reading: "はんぶん",   sentence: "ケーキを○○食べる。",           printable: true },
      { word: "自分",   reading: "じぶん",     sentence: "○○の名前を書く。",             printable: true },
      { word: "気分",   reading: "きぶん",     sentence: "今日はよい○○だ。",             printable: true },
      { word: "十分",   reading: "じゅっぷん", sentence: "あと○○で休みだ。",             printable: true }
    ]
  },
  {
    kanji: "聞",
    readings: { on: ["ブン", "モン"], kun: ["き(く)", "き(こえる)"] },
    words: [
      { word: "聞く",   reading: "きく",       sentence: "先生の話を○○。",               printable: true },
      { word: "聞こえる", reading: "きこえる", sentence: "鳥の声が○○。",                 printable: true },
      { word: "新聞",   reading: "しんぶん",   sentence: "朝の○○を読む。",               printable: true },
      { word: "見聞",   reading: "けんぶん",   sentence: "りょこうで○○をひろめる。",     printable: true },
      { word: "聞き手", reading: "ききて",     sentence: "よい○○になる。",               printable: true },
      { word: "聞き分け", reading: "ききわけ", sentence: "○○のよい子ですね。",           printable: true }
    ]
  },
  {
    kanji: "米",
    readings: { on: ["ベイ", "マイ"], kun: ["こめ"] },
    words: [
      { word: "米",     reading: "こめ",       sentence: "新しい○○をたく。",             printable: true },
      { word: "白米",   reading: "はくまい",   sentence: "ふっくらたいた○○。",           printable: true },
      { word: "新米",   reading: "しんまい",   sentence: "○○のおにぎりがおいしい。",     printable: true },
      { word: "玄米",   reading: "げんまい",   sentence: "○○のごはんを食べる。",         printable: true },
      { word: "米屋",   reading: "こめや",     sentence: "近くの○○でお米を買う。",       printable: true },
      { word: "米作り", reading: "こめづくり", sentence: "村の○○を学ぶ。",               printable: true }
    ]
  },
  {
    kanji: "歩",
    readings: { on: ["ホ", "ブ"], kun: ["ある(く)", "あゆ(む)"] },
    words: [
      { word: "歩く",   reading: "あるく",     sentence: "学校までゆっくり○○。",         printable: true },
      { word: "歩道",   reading: "ほどう",     sentence: "白い線がある○○を歩く。",       printable: true },
      { word: "歩行",   reading: "ほこう",     sentence: "○○ちゅうに気をつける。",       printable: true },
      { word: "一歩",   reading: "いっぽ",     sentence: "前に○○ふみだす。",             printable: true },
      { word: "散歩",   reading: "さんぽ",     sentence: "犬と○○する。",                 printable: true },
      { word: "歩み",   reading: "あゆみ",     sentence: "ゆっくりとした○○。",           printable: true }
    ]
  },
  {
    kanji: "母",
    readings: { on: ["ボ"], kun: ["はは"] },
    words: [
      { word: "母",     reading: "はは",       sentence: "○○といっしょに買い出しに行く。", printable: true },
      { word: "父母",   reading: "ふぼ",       sentence: "○○にかんしゃする。",           printable: true },
      { word: "母親",   reading: "ははおや",   sentence: "やさしい○○だ。",               printable: true },
      { word: "母さん", reading: "かあさん",   sentence: "お○○とおりょうりをする。",     printable: true },
      { word: "母の日", reading: "ははのひ",   sentence: "○○にカードをわたす。",         printable: true },
      { word: "母国",   reading: "ぼこく",     sentence: "○○の歌を心で歌う。",           printable: true }
    ]
  },
  {
    kanji: "方",
    readings: { on: ["ホウ"], kun: ["かた"] },
    words: [
      { word: "方",     reading: "かた",       sentence: "あちらの○○から声がする。",     printable: true },
      { word: "方角",   reading: "ほうがく",   sentence: "東の○○をさす。",               printable: true },
      { word: "夕方",   reading: "ゆうがた",   sentence: "○○から雨だ。",                 printable: true },
      { word: "方位",   reading: "ほうい",     sentence: "○○じしゃくをつかう。",         printable: true },
      { word: "見方",   reading: "みかた",     sentence: "図の○○をならう。",             printable: true },
      { word: "方言",   reading: "ほうげん",   sentence: "ふるさとの○○を聞く。",         printable: true }
    ]
  },
  {
    kanji: "北",
    readings: { on: ["ホク"], kun: ["きた"] },
    words: [
      { word: "北",     reading: "きた",       sentence: "○○の空に星が出る。",           printable: true },
      { word: "北口",   reading: "きたぐち",   sentence: "デパートの○○から入る。",       printable: true },
      { word: "北風",   reading: "きたかぜ",   sentence: "つめたい○○がふく。",           printable: true },
      { word: "東北",   reading: "とうほく",   sentence: "○○のお米はおいしい。",         printable: true },
      { word: "南北",   reading: "なんぼく",   sentence: "国土は○○に長い。",             printable: true },
      { word: "北上",   reading: "ほくじょう", sentence: "車で○○する。",                 printable: true }
    ]
  },
  {
    kanji: "毎",
    readings: { on: ["マイ"], kun: [] },
    words: [
      { word: "毎日",   reading: "まいにち",   sentence: "○○絵にっきを書く。",           printable: true },
      { word: "毎週",   reading: "まいしゅう", sentence: "○○月よう日にこいぬとあそぶ。", printable: true },
      { word: "毎月",   reading: "まいつき",   sentence: "○○新しい本を買う。",           printable: true },
      { word: "毎年",   reading: "まいとし",   sentence: "○○夏におまつりがある。",       printable: true },
      { word: "毎回",   reading: "まいかい",   sentence: "○○いい点数をとる。",           printable: true },
      { word: "毎朝",   reading: "まいあさ",   sentence: "○○ラジオたいそうをする。",     printable: true }
    ]
  },
  {
    kanji: "妹",
    readings: { on: ["マイ"], kun: ["いもうと"] },
    words: [
      { word: "妹",     reading: "いもうと",   sentence: "○○がブランコにのる。",         printable: true },
      { word: "姉妹",   reading: "しまい",     sentence: "○○できょうりょくする。",       printable: true },
      { word: "実妹",   reading: "じつまい",   sentence: "母の○○がたずねてくる。",       printable: true },
      { word: "妹分",   reading: "いもうとぶん", sentence: "クラブで○○のような子。",     printable: true },
      { word: "妹さん", reading: "いもうとさん", sentence: "○○が歌を歌う。",             printable: true },
      { word: "三姉妹", reading: "さんしまい", sentence: "○○のものがたりを読む。",       printable: true }
    ]
  },
  {
    kanji: "万",
    readings: { on: ["マン", "バン"], kun: [] },
    words: [
      { word: "万",     reading: "まん",       sentence: "○○えんさつをもらう。",         printable: true },
      { word: "万年",   reading: "まんねん",   sentence: "○○ひつをためす。",             printable: true },
      { word: "百万",   reading: "ひゃくまん", sentence: "町に○○の人がすむ。",           printable: true },
      { word: "万一",   reading: "まんいち",   sentence: "○○にそなえる。",               printable: true },
      { word: "千万",   reading: "せんまん",   sentence: "○○えんあったらいいな。",       printable: true },
      { word: "万国",   reading: "ばんこく",   sentence: "○○きょうつうのことば。",       printable: true }
    ]
  },
  {
    kanji: "明",
    readings: { on: ["メイ", "ミョウ"], kun: ["あか(るい)", "あ(ける)", "あき(らか)"] },
    words: [
      { word: "明るい", reading: "あかるい",   sentence: "○○いへやで本を読む。",         printable: true },
      { word: "明ける", reading: "あける",     sentence: "夜が○○。",                     printable: true },
      { word: "明日",   reading: "あした",     sentence: "○○のじゅんびを早めにする。",   printable: true },
      { word: "明星",   reading: "みょうじょう", sentence: "朝の○○が見える。",           printable: true },
      { word: "発明",   reading: "はつめい",   sentence: "新しい○○をする。",             printable: true },
      { word: "明らか", reading: "あきらか",   sentence: "答えが○○になる。",             printable: true }
    ]
  },
  {
    kanji: "鳴",
    readings: { on: ["メイ"], kun: ["な(く)", "な(る)", "な(らす)"] },
    words: [
      { word: "鳴く",   reading: "なく",       sentence: "鳥が朝早く○○。",               printable: true },
      { word: "鳴る",   reading: "なる",       sentence: "チャイムが○○。",               printable: true },
      { word: "鳴らす", reading: "ならす",     sentence: "ベルをりんりんと○○。",         printable: true },
      { word: "鳴き声", reading: "なきごえ",   sentence: "犬の○○がする。",               printable: true },
      { word: "鳴り物", reading: "なりもの",   sentence: "おまつりで○○がきこえる。",     printable: true },
      { word: "雷鳴",   reading: "らいめい",   sentence: "遠くで○○が聞こえる。",         printable: true }
    ]
  },
  {
    kanji: "毛",
    readings: { on: ["モウ"], kun: ["け"] },
    words: [
      { word: "毛",     reading: "け",         sentence: "ねこの○○がふかい。",           printable: true },
      { word: "毛糸",   reading: "けいと",     sentence: "○○でマフラーをあむ。",         printable: true },
      { word: "毛虫",   reading: "けむし",     sentence: "はっぱに○○がいる。",           printable: true },
      { word: "羽毛",   reading: "うもう",     sentence: "あたたかい○○のふとん。",       printable: true },
      { word: "毛筆",   reading: "もうひつ",   sentence: "○○で名前を書く。",             printable: true },
      { word: "毛皮",   reading: "けがわ",     sentence: "うさぎの○○はやわらかい。",     printable: true }
    ]
  },
  {
    kanji: "門",
    readings: { on: ["モン"], kun: ["かど"] },
    words: [
      { word: "門",     reading: "もん",       sentence: "校○○の前に立つ。",             printable: true },
      { word: "校門",   reading: "こうもん",   sentence: "朝○○をくぐる。",               printable: true },
      { word: "正門",   reading: "せいもん",   sentence: "○○からみんなで出る。",         printable: true },
      { word: "門出",   reading: "かどで",     sentence: "新しい○○をいわう。",           printable: true },
      { word: "入門",   reading: "にゅうもん", sentence: "ピアノの○○書を読む。",         printable: true },
      { word: "門前",   reading: "もんぜん",   sentence: "○○に車をとめる。",             printable: true }
    ]
  },
  {
    kanji: "夜",
    readings: { on: ["ヤ"], kun: ["よ", "よる"] },
    words: [
      { word: "夜",     reading: "よる",       sentence: "○○の空に星がきれいだ。",       printable: true },
      { word: "今夜",   reading: "こんや",     sentence: "○○はおまつりだ。",             printable: true },
      { word: "夜空",   reading: "よぞら",     sentence: "○○に月が出る。",               printable: true },
      { word: "夜風",   reading: "よかぜ",     sentence: "夏の○○にあたる。",             printable: true },
      { word: "白夜",   reading: "びゃくや",   sentence: "○○の国の話を聞く。",           printable: true },
      { word: "夜中",   reading: "よなか",     sentence: "○○に目がさめる。",             printable: true }
    ]
  },
  {
    kanji: "野",
    readings: { on: ["ヤ"], kun: ["の"] },
    words: [
      { word: "野",     reading: "の",         sentence: "○○山であそぶ。",               printable: true },
      { word: "野原",   reading: "のはら",     sentence: "広い○○をかけまわる。",         printable: true },
      { word: "野鳥",   reading: "やちょう",   sentence: "○○のかんさつをする。",         printable: true },
      { word: "野外",   reading: "やがい",     sentence: "○○のじゅぎょうに出る。",       printable: true },
      { word: "野生",   reading: "やせい",     sentence: "○○のうさぎを見る。",           printable: true },
      { word: "野草",   reading: "やそう",     sentence: "山道に○○がさく。",             printable: true }
    ]
  },
  {
    kanji: "友",
    readings: { on: ["ユウ"], kun: ["とも"] },
    words: [
      { word: "友",     reading: "とも",       sentence: "○○とランチを食べる。",         printable: true },
      { word: "友人",   reading: "ゆうじん",   sentence: "おさななじみの○○。",           printable: true },
      { word: "親友",   reading: "しんゆう",   sentence: "教室で○○と話す。",             printable: true },
      { word: "友だち", reading: "ともだち",   sentence: "新しい○○ができた。",           printable: true },
      { word: "友じょう", reading: "ゆうじょう", sentence: "ふかい○○がうまれる。",       printable: true },
      { word: "学友",   reading: "がくゆう",   sentence: "○○とむかしの話をする。",       printable: true }
    ]
  },
  {
    kanji: "用",
    readings: { on: ["ヨウ"], kun: ["もち(いる)"] },
    words: [
      { word: "用",     reading: "よう",       sentence: "あすは○○がある。",             printable: true },
      { word: "用心",   reading: "ようじん",   sentence: "車に○○して歩く。",             printable: true },
      { word: "用事",   reading: "ようじ",     sentence: "○○をすませる。",               printable: true },
      { word: "用紙",   reading: "ようし",     sentence: "○○に名前を書く。",             printable: true },
      { word: "活用",   reading: "かつよう",   sentence: "時間を○○する。",               printable: true },
      { word: "用い方", reading: "もちいかた", sentence: "正しい○○をならう。",           printable: true }
    ]
  },
  {
    kanji: "曜",
    readings: { on: ["ヨウ"], kun: [] },
    words: [
      { word: "曜日",   reading: "ようび",     sentence: "○○のじゅんばんを言う。",       printable: true },
      { word: "月曜",   reading: "げつよう",   sentence: "○○日から学校だ。",             printable: true },
      { word: "火曜",   reading: "かよう",     sentence: "○○日に音楽がある。",           printable: true },
      { word: "水曜",   reading: "すいよう",   sentence: "○○日にプールがある。",         printable: true },
      { word: "金曜",   reading: "きんよう",   sentence: "○○日にあそびに行く。",         printable: true },
      { word: "日曜",   reading: "にちよう",   sentence: "○○日は休みだ。",               printable: true }
    ]
  },
  {
    kanji: "来",
    readings: { on: ["ライ"], kun: ["く(る)", "き(たる)"] },
    words: [
      { word: "来る",   reading: "くる",       sentence: "友だちが家に○○。",             printable: true },
      { word: "来年",   reading: "らいねん",   sentence: "○○は三年生だ。",               printable: true },
      { word: "来月",   reading: "らいげつ",   sentence: "○○うんどう会がある。",         printable: true },
      { word: "来週",   reading: "らいしゅう", sentence: "○○には新しい本を読む。",       printable: true },
      { word: "出来る", reading: "できる",     sentence: "一人で○○ようになる。",         printable: true },
      { word: "来日",   reading: "らいにち",   sentence: "○○した友人をむかえる。",       printable: true }
    ]
  },
  {
    kanji: "里",
    readings: { on: ["リ"], kun: ["さと"] },
    words: [
      { word: "里",     reading: "さと",       sentence: "ふるさとの○○へ帰る。",         printable: true },
      { word: "里山",   reading: "さとやま",   sentence: "○○をさんぽする。",             printable: true },
      { word: "古里",   reading: "ふるさと",   sentence: "夏休みに○○へ帰る。",           printable: true },
      { word: "千里",   reading: "せんり",     sentence: "○○の道も一歩から。",           printable: true },
      { word: "山里",   reading: "やまざと",   sentence: "○○のけしきがきれいだ。",       printable: true },
      { word: "里親",   reading: "さとおや",   sentence: "犬の○○になる。",               printable: true }
    ]
  },
  {
    kanji: "理",
    readings: { on: ["リ"], kun: [] },
    words: [
      { word: "理科",   reading: "りか",       sentence: "○○のじっけんが楽しい。",       printable: true },
      { word: "理由",   reading: "りゆう",     sentence: "正しい○○を考える。",           printable: true },
      { word: "道理",   reading: "どうり",     sentence: "○○に合った話だ。",             printable: true },
      { word: "心理",   reading: "しんり",     sentence: "あいての○○を考える。",         printable: true },
      { word: "りょう理", reading: "りょうり", sentence: "母と○○を作る。",               printable: true },
      { word: "地理",   reading: "ちり",       sentence: "○○の本でちきゅうを学ぶ。",     printable: true }
    ]
  },
  {
    kanji: "話",
    readings: { on: ["ワ"], kun: ["はな(す)", "はなし"] },
    words: [
      { word: "話す",   reading: "はなす",     sentence: "友だちと電話で○○。",           printable: true },
      { word: "話",     reading: "はなし",     sentence: "むかしの○○を聞く。",           printable: true },
      { word: "会話",   reading: "かいわ",     sentence: "明るく○○をする。",             printable: true },
      { word: "電話",   reading: "でんわ",     sentence: "家に○○をかける。",             printable: true },
      { word: "話題",   reading: "わだい",     sentence: "新しい○○がふえる。",           printable: true },
      { word: "話し声", reading: "はなしごえ", sentence: "教室で楽しそうな○○がする。",   printable: true }
    ]
  }
];

window.KANJI_DATA_G2_META = {
  version: "1.0.0",
  generatedAt: "2026-05-27",
  generator: "claude-opus-4-7 (initial seed)",
  reviewedBy: null,
  schemaVersion: 1,
  status: "draft"
};
