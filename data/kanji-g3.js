// data/kanji-g3.js
// 小学3年生配当漢字 200字 × 6単語 = 1200問
// 例文中の漢字は小1〜小3配当440字のみ、それ以外はひらがな。
// 正答(word)は4文字以下。sentence は12〜20文字程度、○○は2個固定。

window.KANJI_DATA_G3 = [
  {
    kanji: "悪",
    readings: { on: ["アク", "オ"], kun: ["わる(い)"] },
    words: [
      { word: "悪い",   reading: "わるい",     sentence: "きょうは天気が○○なってきた。",      printable: true },
      { word: "悪人",   reading: "あくにん",   sentence: "むかしの話に○○がでてくる。",        printable: true },
      { word: "悪手",   reading: "あくしゅ",   sentence: "しょうぎで○○をうってまけた。",      printable: true },
      { word: "悪気",   reading: "わるぎ",     sentence: "○○はなかったとあやまる。",          printable: true },
      { word: "悪口",   reading: "わるくち",   sentence: "ひとの○○を言ってはいけない。",      printable: true },
      { word: "最悪",   reading: "さいあく",   sentence: "雨にぬれて○○な気分だ。",            printable: true }
    ]
  },
  {
    kanji: "安",
    readings: { on: ["アン"], kun: ["やす(い)"] },
    words: [
      { word: "安い",   reading: "やすい",     sentence: "この本は思ったより○○。",            printable: true },
      { word: "安全",   reading: "あんぜん",   sentence: "横だん歩道は○○にわたる。",          printable: true },
      { word: "安心",   reading: "あんしん",   sentence: "母の声をきいて○○した。",            printable: true },
      { word: "目安",   reading: "めやす",     sentence: "三十分を○○に走る。",                printable: true },
      { word: "不安",   reading: "ふあん",     sentence: "明日のテストが○○だ。",              printable: true },
      { word: "安売り", reading: "やすうり",   sentence: "店で野さいの○○がある。",            printable: true }
    ]
  },
  {
    kanji: "暗",
    readings: { on: ["アン"], kun: ["くら(い)"] },
    words: [
      { word: "暗い",   reading: "くらい",     sentence: "夜の道は○○ので気をつける。",        printable: true },
      { word: "暗算",   reading: "あんざん",   sentence: "二けたの○○ができる。",              printable: true },
      { word: "暗記",   reading: "あんき",     sentence: "九九を○○してとなえる。",            printable: true },
      { word: "暗号",   reading: "あんごう",   sentence: "ともだちと○○であそぶ。",            printable: true },
      { word: "明暗",   reading: "めいあん",   sentence: "絵の○○をはっきりかく。",            printable: true },
      { word: "暗室",   reading: "あんしつ",   sentence: "しゃしんを○○で作る。",              printable: true }
    ]
  },
  {
    kanji: "医",
    readings: { on: ["イ"], kun: [] },
    words: [
      { word: "医者",   reading: "いしゃ",     sentence: "ねつが出たので○○に行く。",          printable: true },
      { word: "医学",   reading: "いがく",     sentence: "大学で○○を学ぶ。",                  printable: true },
      { word: "医院",   reading: "いいん",     sentence: "近くの○○でくすりをもらう。",        printable: true },
      { word: "名医",   reading: "めいい",     sentence: "村に○○がやって来た。",              printable: true },
      { word: "校医",   reading: "こうい",     sentence: "学校に○○の先生が来る。",            printable: true },
      { word: "医室",   reading: "いしつ",     sentence: "学校の○○で休む。",                  printable: true }
    ]
  },
  {
    kanji: "委",
    readings: { on: ["イ"], kun: ["ゆだ(ねる)"] },
    words: [
      { word: "委員",   reading: "いいん",     sentence: "クラスの○○にえらばれた。",          printable: true },
      { word: "委任",   reading: "いにん",     sentence: "兄に手つづきを○○する。",            printable: true },
      { word: "学級委員", reading: "がっきゅういいん", sentence: "今日の○○として話し合う。", printable: true },
      { word: "委ねる", reading: "ゆだねる",   sentence: "とう番を友だちに○○。",              printable: true },
      { word: "図書委員", reading: "としょいいん", sentence: "○○で本をならべる。",          printable: true },
      { word: "委員長", reading: "いいんちょう", sentence: "明るい○○がえらばれた。",          printable: true }
    ]
  },
  {
    kanji: "意",
    readings: { on: ["イ"], kun: [] },
    words: [
      { word: "意見",   reading: "いけん",     sentence: "じゅぎょうで○○を言う。",            printable: true },
      { word: "用意",   reading: "ようい",     sentence: "明日の○○をしておく。",              printable: true },
      { word: "意思",   reading: "いし",       sentence: "強い○○でやりとげる。",              printable: true },
      { word: "注意",   reading: "ちゅうい",   sentence: "車に○○して歩く。",                  printable: true },
      { word: "決意",   reading: "けつい",     sentence: "毎日走ろうと○○した。",              printable: true },
      { word: "意外",   reading: "いがい",     sentence: "○○なけっかにおどろく。",            printable: true }
    ]
  },
  {
    kanji: "育",
    readings: { on: ["イク"], kun: ["そだ(つ)", "そだ(てる)"] },
    words: [
      { word: "育つ",   reading: "そだつ",     sentence: "あさがおが大きく○○。",              printable: true },
      { word: "育てる", reading: "そだてる",   sentence: "畑で野さいを○○。",                  printable: true },
      { word: "教育",   reading: "きょういく", sentence: "学校で○○をうける。",                printable: true },
      { word: "体育",   reading: "たいいく",   sentence: "三時間目は○○だ。",                  printable: true },
      { word: "発育",   reading: "はついく",   sentence: "子犬の○○がはやい。",                printable: true },
      { word: "育児",   reading: "いくじ",     sentence: "母は○○でいそがしい。",              printable: true }
    ]
  },
  {
    kanji: "員",
    readings: { on: ["イン"], kun: [] },
    words: [
      { word: "店員",   reading: "てんいん",   sentence: "店の○○にたずねる。",                printable: true },
      { word: "全員",   reading: "ぜんいん",   sentence: "クラスの○○があつまる。",            printable: true },
      { word: "会員",   reading: "かいいん",   sentence: "図書クラブの○○になる。",            printable: true },
      { word: "係員",   reading: "かかりいん", sentence: "受付の○○にきく。",                  printable: true },
      { word: "役員",   reading: "やくいん",   sentence: "新しい○○がきまる。",                printable: true },
      { word: "人員",   reading: "じんいん",   sentence: "○○がたりずに中止する。",            printable: true }
    ]
  },
  {
    kanji: "院",
    readings: { on: ["イン"], kun: [] },
    words: [
      { word: "病院",   reading: "びょういん", sentence: "風じゃで○○に行く。",                printable: true },
      { word: "入院",   reading: "にゅういん", sentence: "おじが一週間○○した。",              printable: true },
      { word: "通院",   reading: "つういん",   sentence: "毎週○○して薬をもらう。",            printable: true },
      { word: "院長",   reading: "いんちょう", sentence: "○○がていねいに話す。",              printable: true },
      { word: "美容院", reading: "びよういん", sentence: "母が○○に行った。",                  printable: true },
      { word: "退院",   reading: "たいいん",   sentence: "兄が元気に○○した。",                printable: true }
    ]
  },
  {
    kanji: "飲",
    readings: { on: ["イン"], kun: ["の(む)"] },
    words: [
      { word: "飲む",   reading: "のむ",       sentence: "つめたい水を○○。",                  printable: true },
      { word: "飲み物", reading: "のみもの",   sentence: "○○を買って帰る。",                  printable: true },
      { word: "飲食",   reading: "いんしょく", sentence: "車内での○○はえんりょする。",        printable: true },
      { word: "飲水",   reading: "のみみず",   sentence: "山の○○がつめたい。",                printable: true },
      { word: "飲料",   reading: "いんりょう", sentence: "夏は○○が多くうれる。",              printable: true },
      { word: "立ち飲み", reading: "たちのみ", sentence: "店先で○○のお茶を買う。",            printable: true }
    ]
  },
  {
    kanji: "運",
    readings: { on: ["ウン"], kun: ["はこ(ぶ)"] },
    words: [
      { word: "運ぶ",   reading: "はこぶ",     sentence: "つくえを教室まで○○。",              printable: true },
      { word: "運動",   reading: "うんどう",   sentence: "朝に公園で○○をする。",              printable: true },
      { word: "運転",   reading: "うんてん",   sentence: "父が車を○○する。",                  printable: true },
      { word: "運送",   reading: "うんそう",   sentence: "○○の車が荷物をとどける。",          printable: true },
      { word: "幸運",   reading: "こううん",   sentence: "○○にも一とうがあたる。",            printable: true },
      { word: "運命",   reading: "うんめい",   sentence: "ふしぎな○○を感じる。",              printable: true }
    ]
  },
  {
    kanji: "泳",
    readings: { on: ["エイ"], kun: ["およ(ぐ)"] },
    words: [
      { word: "泳ぐ",   reading: "およぐ",     sentence: "プールでゆっくり○○。",              printable: true },
      { word: "水泳",   reading: "すいえい",   sentence: "夏休みに○○を習う。",                printable: true },
      { word: "泳ぎ",   reading: "およぎ",     sentence: "兄は○○がじょうずだ。",              printable: true },
      { word: "平泳ぎ", reading: "ひらおよぎ", sentence: "○○の練習をする。",                  printable: true },
      { word: "遊泳",   reading: "ゆうえい",   sentence: "ここは○○きん止だ。",                printable: true },
      { word: "背泳ぎ", reading: "せおよぎ",   sentence: "○○は空が見えて気もちよい。",        printable: true }
    ]
  },
  {
    kanji: "駅",
    readings: { on: ["エキ"], kun: [] },
    words: [
      { word: "駅",     reading: "えき",       sentence: "となりの○○まで歩く。",              printable: true },
      { word: "駅前",   reading: "えきまえ",   sentence: "○○の店で待ち合わせる。",            printable: true },
      { word: "駅長",   reading: "えきちょう", sentence: "○○がしんごうをふる。",              printable: true },
      { word: "駅員",   reading: "えきいん",   sentence: "○○に道をたずねる。",                printable: true },
      { word: "終着駅", reading: "しゅうちゃくえき", sentence: "電車が○○に着いた。",        printable: true },
      { word: "駅名",   reading: "えきめい",   sentence: "次の○○をたしかめる。",              printable: true }
    ]
  },
  {
    kanji: "央",
    readings: { on: ["オウ"], kun: [] },
    words: [
      { word: "中央",   reading: "ちゅうおう", sentence: "町の○○に大きな池がある。",          printable: true },
      { word: "中央口", reading: "ちゅうおうぐち", sentence: "駅の○○で待つ。",              printable: true },
      { word: "中央線", reading: "ちゅうおうせん", sentence: "○○に乗りかえる。",            printable: true },
      { word: "中央部", reading: "ちゅうおうぶ", sentence: "島の○○に山がある。",              printable: true },
      { word: "震央",   reading: "しんおう",   sentence: "じしんの○○を調べる。",              printable: true },
      { word: "央",     reading: "おう",       sentence: "ひろばの○○に集まる。",              printable: true }
    ]
  },
  {
    kanji: "横",
    readings: { on: ["オウ"], kun: ["よこ"] },
    words: [
      { word: "横",     reading: "よこ",       sentence: "ねこが○○になって寝る。",            printable: true },
      { word: "横道",   reading: "よこみち",   sentence: "○○にそれてしまった。",              printable: true },
      { word: "横顔",   reading: "よこがお",   sentence: "妹の○○を絵にかく。",                printable: true },
      { word: "横線",   reading: "よこせん",   sentence: "ノートに○○を引く。",                printable: true },
      { word: "横手",   reading: "よこて",     sentence: "店の○○に入り口がある。",            printable: true },
      { word: "横歩き", reading: "よこあるき", sentence: "かにが○○をする。",                  printable: true }
    ]
  },
  {
    kanji: "屋",
    readings: { on: ["オク"], kun: ["や"] },
    words: [
      { word: "本屋",   reading: "ほんや",     sentence: "○○で図かんを買う。",                printable: true },
      { word: "屋上",   reading: "おくじょう", sentence: "学校の○○で遊ぶ。",                  printable: true },
      { word: "花屋",   reading: "はなや",     sentence: "母に○○でばらを買う。",              printable: true },
      { word: "屋外",   reading: "おくがい",   sentence: "○○で体そうをする。",                printable: true },
      { word: "魚屋",   reading: "さかなや",   sentence: "○○で大きな魚を見る。",              printable: true },
      { word: "肉屋",   reading: "にくや",     sentence: "○○でとり肉を買う。",                printable: true }
    ]
  },
  {
    kanji: "温",
    readings: { on: ["オン"], kun: ["あたた(かい)", "あたた(まる)", "あたた(める)"] },
    words: [
      { word: "温かい", reading: "あたたかい", sentence: "○○お茶を一口飲む。",                printable: true },
      { word: "温める", reading: "あたためる", sentence: "牛にゅうを○○。",                    printable: true },
      { word: "気温",   reading: "きおん",     sentence: "今日の○○は高い。",                  printable: true },
      { word: "温度",   reading: "おんど",     sentence: "へやの○○を下げる。",                printable: true },
      { word: "体温",   reading: "たいおん",   sentence: "毎朝○○をはかる。",                  printable: true },
      { word: "温水",   reading: "おんすい",   sentence: "○○プールで泳ぐ。",                  printable: true }
    ]
  },
  {
    kanji: "化",
    readings: { on: ["カ", "ケ"], kun: ["ば(ける)", "ば(かす)"] },
    words: [
      { word: "化ける", reading: "ばける",     sentence: "きつねが人に○○話。",                printable: true },
      { word: "化学",   reading: "かがく",     sentence: "兄は○○を勉強している。",            printable: true },
      { word: "変化",   reading: "へんか",     sentence: "天気の○○がはげしい。",              printable: true },
      { word: "化石",   reading: "かせき",     sentence: "大むかしの貝の○○。",                printable: true },
      { word: "強化",   reading: "きょうか",   sentence: "走る練習を○○する。",                printable: true },
      { word: "化身",   reading: "けしん",     sentence: "神の○○とつたわる。",                printable: true }
    ]
  },
  {
    kanji: "荷",
    readings: { on: ["カ"], kun: ["に"] },
    words: [
      { word: "荷物",   reading: "にもつ",     sentence: "重い○○を運ぶ。",                    printable: true },
      { word: "重荷",   reading: "おもに",     sentence: "やくわりが○○に感じる。",            printable: true },
      { word: "出荷",   reading: "しゅっか",   sentence: "畑のトマトを○○する。",              printable: true },
      { word: "入荷",   reading: "にゅうか",   sentence: "新しい本が○○した。",                printable: true },
      { word: "荷台",   reading: "にだい",     sentence: "車の○○に箱をのせる。",              printable: true },
      { word: "手荷物", reading: "てにもつ",   sentence: "駅で○○をあずける。",                printable: true }
    ]
  },
  {
    kanji: "開",
    readings: { on: ["カイ"], kun: ["ひら(く)", "あ(く)", "あ(ける)"] },
    words: [
      { word: "開く",   reading: "ひらく",     sentence: "本を二ページ○○。",                  printable: true },
      { word: "開ける", reading: "あける",     sentence: "まどを○○とすずしい。",              printable: true },
      { word: "開店",   reading: "かいてん",   sentence: "新しい店が○○した。",                printable: true },
      { word: "開会",   reading: "かいかい",   sentence: "うん動会の○○式が始まる。",          printable: true },
      { word: "公開",   reading: "こうかい",   sentence: "新作映が○○される。",                printable: true },
      { word: "開発",   reading: "かいはつ",   sentence: "新しい商品の○○。",                  printable: true }
    ]
  },
  {
    kanji: "階",
    readings: { on: ["カイ"], kun: [] },
    words: [
      { word: "三階",   reading: "さんがい",   sentence: "教室は○○にある。",                  printable: true },
      { word: "階だん", reading: "かいだん",   sentence: "○○を一気に上る。",                  printable: true },
      { word: "二階",   reading: "にかい",     sentence: "○○のへやで本を読む。",              printable: true },
      { word: "階上",   reading: "かいじょう", sentence: "○○からこえがした。",                printable: true },
      { word: "階下",   reading: "かいか",     sentence: "○○のへやでねる。",                  printable: true },
      { word: "音階",   reading: "おんかい",   sentence: "ピアノの○○を弾く。",                printable: true }
    ]
  },
  {
    kanji: "寒",
    readings: { on: ["カン"], kun: ["さむ(い)"] },
    words: [
      { word: "寒い",   reading: "さむい",     sentence: "今日は朝から○○。",                  printable: true },
      { word: "寒気",   reading: "さむけ",     sentence: "ねつで○○がする。",                  printable: true },
      { word: "寒空",   reading: "さむぞら",   sentence: "○○の下を歩いた。",                  printable: true },
      { word: "寒中",   reading: "かんちゅう", sentence: "○○の水あびはきびしい。",            printable: true },
      { word: "防寒",   reading: "ぼうかん",   sentence: "○○の上着を着る。",                  printable: true },
      { word: "寒色",   reading: "かんしょく", sentence: "青は○○の代表だ。",                  printable: true }
    ]
  },
  {
    kanji: "感",
    readings: { on: ["カン"], kun: [] },
    words: [
      { word: "感じる", reading: "かんじる",   sentence: "春の風を○○。",                      printable: true },
      { word: "感想",   reading: "かんそう",   sentence: "本の○○を書く。",                    printable: true },
      { word: "感心",   reading: "かんしん",   sentence: "弟の絵に○○する。",                  printable: true },
      { word: "感動",   reading: "かんどう",   sentence: "音楽会で○○した。",                  printable: true },
      { word: "予感",   reading: "よかん",     sentence: "雨の○○がする。",                    printable: true },
      { word: "実感",   reading: "じっかん",   sentence: "夏休みを○○する。",                  printable: true }
    ]
  },
  {
    kanji: "漢",
    readings: { on: ["カン"], kun: [] },
    words: [
      { word: "漢字",   reading: "かんじ",     sentence: "新しい○○を書いて覚える。",          printable: true },
      { word: "漢文",   reading: "かんぶん",   sentence: "兄が古い○○を読む。",                printable: true },
      { word: "漢方",   reading: "かんぽう",   sentence: "○○のくすりを飲む。",                printable: true },
      { word: "漢語",   reading: "かんご",     sentence: "○○と和語をくらべる。",              printable: true },
      { word: "漢音",   reading: "かんおん",   sentence: "字典で○○をしらべる。",              printable: true },
      { word: "漢数字", reading: "かんすうじ", sentence: "○○で年れいを書く。",                printable: true }
    ]
  },
  {
    kanji: "館",
    readings: { on: ["カン"], kun: ["やかた"] },
    words: [
      { word: "図書館", reading: "としょかん", sentence: "○○で本を借りる。",                  printable: true },
      { word: "体育館", reading: "たいいくかん", sentence: "○○で大会がある。",              printable: true },
      { word: "館内",   reading: "かんない",   sentence: "○○ではしずかにする。",              printable: true },
      { word: "本館",   reading: "ほんかん",   sentence: "学校の○○に集まる。",                printable: true },
      { word: "新館",   reading: "しんかん",   sentence: "○○に教室がふえた。",                printable: true },
      { word: "会館",   reading: "かいかん",   sentence: "町の○○でお話を聞く。",              printable: true }
    ]
  },
  {
    kanji: "岸",
    readings: { on: ["ガン"], kun: ["きし"] },
    words: [
      { word: "岸",     reading: "きし",       sentence: "川の○○に立つ。",                    printable: true },
      { word: "海岸",   reading: "かいがん",   sentence: "○○で貝をひろう。",                  printable: true },
      { word: "川岸",   reading: "かわぎし",   sentence: "○○で魚をつる。",                    printable: true },
      { word: "右岸",   reading: "うがん",     sentence: "川の○○を歩く。",                    printable: true },
      { word: "両岸",   reading: "りょうがん", sentence: "川の○○に花がさく。",                printable: true },
      { word: "対岸",   reading: "たいがん",   sentence: "○○に小さな船が見える。",            printable: true }
    ]
  },
  {
    kanji: "起",
    readings: { on: ["キ"], kun: ["お(きる)", "お(こす)", "お(こる)"] },
    words: [
      { word: "起きる", reading: "おきる",     sentence: "毎朝六時に○○。",                    printable: true },
      { word: "起こす", reading: "おこす",     sentence: "弟をやさしく○○。",                  printable: true },
      { word: "早起き", reading: "はやおき",   sentence: "○○して走りに行く。",                printable: true },
      { word: "起立",   reading: "きりつ",     sentence: "号れいで○○する。",                  printable: true },
      { word: "起点",   reading: "きてん",     sentence: "ここを○○として歩く。",              printable: true },
      { word: "起用",   reading: "きよう",     sentence: "新人を○○する。",                    printable: true }
    ]
  },
  {
    kanji: "期",
    readings: { on: ["キ", "ゴ"], kun: [] },
    words: [
      { word: "学期",   reading: "がっき",     sentence: "新しい○○が始まる。",                printable: true },
      { word: "時期",   reading: "じき",       sentence: "花の○○がやってきた。",              printable: true },
      { word: "期間",   reading: "きかん",     sentence: "夏休みの○○は長い。",                printable: true },
      { word: "期待",   reading: "きたい",     sentence: "新しい本に○○する。",                printable: true },
      { word: "今期",   reading: "こんき",     sentence: "○○の目ひょうを立てる。",            printable: true },
      { word: "前期",   reading: "ぜんき",     sentence: "○○のテストがおわる。",              printable: true }
    ]
  },
  {
    kanji: "客",
    readings: { on: ["キャク", "カク"], kun: [] },
    words: [
      { word: "客",     reading: "きゃく",     sentence: "店に○○がたくさん来る。",            printable: true },
      { word: "来客",   reading: "らいきゃく", sentence: "今日は○○の予定がある。",            printable: true },
      { word: "客間",   reading: "きゃくま",   sentence: "○○でお茶を出す。",                  printable: true },
      { word: "客車",   reading: "きゃくしゃ", sentence: "○○に乗りこむ。",                    printable: true },
      { word: "お客様", reading: "おきゃくさま", sentence: "○○をていねいに案内する。",        printable: true },
      { word: "観客",   reading: "かんきゃく", sentence: "○○がはく手をする。",                printable: true }
    ]
  },
  {
    kanji: "究",
    readings: { on: ["キュウ"], kun: ["きわ(める)"] },
    words: [
      { word: "研究",   reading: "けんきゅう", sentence: "夏休みに○○をする。",                printable: true },
      { word: "究明",   reading: "きゅうめい", sentence: "原いんを○○する。",                  printable: true },
      { word: "学究",   reading: "がっきゅう", sentence: "○○として有名な先生。",              printable: true },
      { word: "究極",   reading: "きゅうきょく", sentence: "○○の味だとほめられる。",          printable: true },
      { word: "追究",   reading: "ついきゅう", sentence: "答えを○○する。",                    printable: true },
      { word: "探究",   reading: "たんきゅう", sentence: "ふしぎを○○する。",                  printable: true }
    ]
  },
  {
    kanji: "急",
    readings: { on: ["キュウ"], kun: ["いそ(ぐ)"] },
    words: [
      { word: "急ぐ",   reading: "いそぐ",     sentence: "ちこくしそうで○○。",                printable: true },
      { word: "急行",   reading: "きゅうこう", sentence: "○○電車に乗る。",                    printable: true },
      { word: "急用",   reading: "きゅうよう", sentence: "母が○○で出かけた。",                printable: true },
      { word: "急に",   reading: "きゅうに",   sentence: "○○雨がふってきた。",                printable: true },
      { word: "大急ぎ", reading: "おおいそぎ", sentence: "○○で家にもどる。",                  printable: true },
      { word: "急流",   reading: "きゅうりゅう", sentence: "山の川は○○だ。",                  printable: true }
    ]
  },
  {
    kanji: "級",
    readings: { on: ["キュウ"], kun: [] },
    words: [
      { word: "学級",   reading: "がっきゅう", sentence: "○○会で話し合う。",                  printable: true },
      { word: "上級",   reading: "じょうきゅう", sentence: "○○生といっしょに遊ぶ。",          printable: true },
      { word: "下級",   reading: "かきゅう",   sentence: "○○生をやさしく案内する。",          printable: true },
      { word: "級長",   reading: "きゅうちょう", sentence: "クラスの○○にえらばれた。",        printable: true },
      { word: "同級",   reading: "どうきゅう", sentence: "○○生と仲よくする。",                printable: true },
      { word: "高級",   reading: "こうきゅう", sentence: "○○なお茶をいただく。",              printable: true }
    ]
  },
  {
    kanji: "宮",
    readings: { on: ["キュウ", "グウ"], kun: ["みや"] },
    words: [
      { word: "宮",     reading: "みや",       sentence: "古い○○にお参りする。",              printable: true },
      { word: "王宮",   reading: "おうきゅう", sentence: "むかし話の○○が出てくる。",          printable: true },
      { word: "宮中",   reading: "きゅうちゅう", sentence: "○○の行事を学ぶ。",                printable: true },
      { word: "竜宮",   reading: "りゅうぐう", sentence: "○○のお話を読む。",                  printable: true },
      { word: "宮大工", reading: "みやだいく", sentence: "○○が神社を直す。",                  printable: true },
      { word: "宮さま", reading: "みやさま",   sentence: "テレビで○○の話を見る。",            printable: true }
    ]
  },
  {
    kanji: "球",
    readings: { on: ["キュウ"], kun: ["たま"] },
    words: [
      { word: "野球",   reading: "やきゅう",   sentence: "公園で○○をする。",                  printable: true },
      { word: "気球",   reading: "ききゅう",   sentence: "空に○○がうかぶ。",                  printable: true },
      { word: "電球",   reading: "でんきゅう", sentence: "へやの○○をかえる。",                printable: true },
      { word: "球場",   reading: "きゅうじょう", sentence: "○○で大会が行われる。",            printable: true },
      { word: "地球",   reading: "ちきゅう",   sentence: "○○は青くきれいだ。",                printable: true },
      { word: "球場前", reading: "きゅうじょうまえ", sentence: "○○の駅でおりる。",          printable: true }
    ]
  },
  {
    kanji: "去",
    readings: { on: ["キョ", "コ"], kun: ["さ(る)"] },
    words: [
      { word: "去る",   reading: "さる",       sentence: "鳥がにわから○○。",                  printable: true },
      { word: "去年",   reading: "きょねん",   sentence: "○○の写真を見る。",                  printable: true },
      { word: "過去",   reading: "かこ",       sentence: "○○の記ろくを調べる。",              printable: true },
      { word: "消去",   reading: "しょうきょ", sentence: "まちがいを○○する。",                printable: true },
      { word: "去来",   reading: "きょらい",   sentence: "思い出が○○する。",                  printable: true },
      { word: "立ち去る", reading: "たちさる", sentence: "だまって○○。",                      printable: true }
    ]
  },
  {
    kanji: "橋",
    readings: { on: ["キョウ"], kun: ["はし"] },
    words: [
      { word: "橋",     reading: "はし",       sentence: "川の○○をわたる。",                  printable: true },
      { word: "鉄橋",   reading: "てっきょう", sentence: "電車が○○を通る。",                  printable: true },
      { word: "石橋",   reading: "いしばし",   sentence: "古い○○をわたる。",                  printable: true },
      { word: "歩道橋", reading: "ほどうきょう", sentence: "○○で道路をわたる。",              printable: true },
      { word: "橋上",   reading: "きょうじょう", sentence: "○○からながめる。",                printable: true },
      { word: "橋本",   reading: "はしもと",   sentence: "○○さんは友だちだ。",                printable: true }
    ]
  },
  {
    kanji: "業",
    readings: { on: ["ギョウ", "ゴウ"], kun: ["わざ"] },
    words: [
      { word: "業",     reading: "わざ",       sentence: "見事な○○を見せる。",                printable: true },
      { word: "工業",   reading: "こうぎょう", sentence: "町に○○がさかえる。",                printable: true },
      { word: "農業",   reading: "のうぎょう", sentence: "村の人は○○をしている。",            printable: true },
      { word: "じゅ業", reading: "じゅぎょう", sentence: "三時間目の○○が始まる。",         printable: true },
      { word: "作業",   reading: "さぎょう",   sentence: "外で○○を手つだう。",                printable: true },
      { word: "産業",   reading: "さんぎょう", sentence: "○○について学ぶ。",                  printable: true }
    ]
  },
  {
    kanji: "曲",
    readings: { on: ["キョク"], kun: ["ま(がる)", "ま(げる)"] },
    words: [
      { word: "曲がる", reading: "まがる",     sentence: "角を右へ○○。",                      printable: true },
      { word: "曲げる", reading: "まげる",     sentence: "ひざを○○ストレッチ。",              printable: true },
      { word: "歌曲",   reading: "かきょく",   sentence: "○○を歌う発表会。",                  printable: true },
      { word: "名曲",   reading: "めいきょく", sentence: "ピアノで○○をひく。",                printable: true },
      { word: "曲線",   reading: "きょくせん", sentence: "ノートに○○を書く。",                printable: true },
      { word: "作曲",   reading: "さっきょく", sentence: "兄が○○を学ぶ。",                    printable: true }
    ]
  },
  {
    kanji: "局",
    readings: { on: ["キョク"], kun: [] },
    words: [
      { word: "局",     reading: "きょく",     sentence: "テレビの○○を変える。",              printable: true },
      { word: "電話局", reading: "でんわきょく", sentence: "○○ではたらく。",                  printable: true },
      { word: "薬局",   reading: "やっきょく", sentence: "○○でかぜぐすりを買う。",            printable: true },
      { word: "局面",   reading: "きょくめん", sentence: "しょうぎの○○を考える。",            printable: true },
      { word: "結局",   reading: "けっきょく", sentence: "○○、雨はやんだ。",                  printable: true },
      { word: "本局",   reading: "ほんきょく", sentence: "○○から放送される。",                printable: true }
    ]
  },
  {
    kanji: "銀",
    readings: { on: ["ギン"], kun: [] },
    words: [
      { word: "銀色",   reading: "ぎんいろ",   sentence: "車が○○にかがやく。",                printable: true },
      { word: "銀行",   reading: "ぎんこう",   sentence: "お金を○○にあずける。",              printable: true },
      { word: "水銀",   reading: "すいぎん",   sentence: "○○は重い金ぞくだ。",                printable: true },
      { word: "銀紙",   reading: "ぎんがみ",   sentence: "おかしの○○をひらく。",              printable: true },
      { word: "銀世界", reading: "ぎんせかい", sentence: "雪で○○になる。",                    printable: true },
      { word: "銀ばん", reading: "ぎんばん",   sentence: "スケートの○○をすべる。",            printable: true }
    ]
  },
  {
    kanji: "区",
    readings: { on: ["ク"], kun: [] },
    words: [
      { word: "区",     reading: "く",         sentence: "わたしの住む○○は広い。",            printable: true },
      { word: "地区",   reading: "ちく",       sentence: "町を三つの○○に分ける。",            printable: true },
      { word: "区切り", reading: "くぎり",     sentence: "話の○○で休む。",                    printable: true },
      { word: "学区",   reading: "がっく",     sentence: "わが家は同じ○○だ。",                printable: true },
      { word: "区分",   reading: "くぶん",     sentence: "本だなを○○する。",                  printable: true },
      { word: "区長",   reading: "くちょう",   sentence: "区の話し合いで○○が決まる。",        printable: true }
    ]
  },
  {
    kanji: "苦",
    readings: { on: ["ク"], kun: ["くる(しい)", "くる(しむ)", "にが(い)"] },
    words: [
      { word: "苦い",   reading: "にがい",     sentence: "このお茶は○○。",                    printable: true },
      { word: "苦しい", reading: "くるしい",   sentence: "走った後、いきが○○。",              printable: true },
      { word: "苦手",   reading: "にがて",     sentence: "わたしは算数が○○だ。",              printable: true },
      { word: "苦心",   reading: "くしん",     sentence: "○○して作品を仕上げる。",            printable: true },
      { word: "苦楽",   reading: "くらく",     sentence: "兄と○○を分ける。",                  printable: true },
      { word: "苦笑",   reading: "くしょう",   sentence: "うまく行かず○○する。",              printable: true }
    ]
  },
  {
    kanji: "具",
    readings: { on: ["グ"], kun: [] },
    words: [
      { word: "道具",   reading: "どうぐ",     sentence: "工作の○○を出す。",                  printable: true },
      { word: "家具",   reading: "かぐ",       sentence: "へやに○○を入れる。",                printable: true },
      { word: "雨具",   reading: "あまぐ",     sentence: "出かける前に○○を持つ。",            printable: true },
      { word: "具体",   reading: "ぐたい",     sentence: "○○てきに話す。",                    printable: true },
      { word: "用具",   reading: "ようぐ",     sentence: "体育の○○をかたづける。",            printable: true },
      { word: "具合",   reading: "ぐあい",     sentence: "今日は体の○○がいい。",              printable: true }
    ]
  },
  {
    kanji: "君",
    readings: { on: ["クン"], kun: ["きみ"] },
    words: [
      { word: "君",     reading: "きみ",       sentence: "○○の話を聞かせて。",                printable: true },
      { word: "君主",   reading: "くんしゅ",   sentence: "むかしの○○の話を読む。",            printable: true },
      { word: "君が代", reading: "きみがよ",   sentence: "式で○○を歌う。",                    printable: true },
      { word: "山田君", reading: "やまだくん", sentence: "○○といっしょに帰る。",              printable: true },
      { word: "田中君", reading: "たなかくん", sentence: "○○は走るのが早い。",                printable: true },
      { word: "君たち", reading: "きみたち",   sentence: "○○の作品はすばらしい。",            printable: true }
    ]
  },
  {
    kanji: "係",
    readings: { on: ["ケイ"], kun: ["かか(る)", "かかり"] },
    words: [
      { word: "係",     reading: "かかり",     sentence: "今日のそうじ○○になる。",            printable: true },
      { word: "係員",   reading: "かかりいん", sentence: "会場の○○にきく。",                  printable: true },
      { word: "関係",   reading: "かんけい",   sentence: "二つの話の○○を考える。",            printable: true },
      { word: "係長",   reading: "かかりちょう", sentence: "店の○○に話す。",                  printable: true },
      { word: "図書係", reading: "としょがかり", sentence: "わたしは○○だ。",                  printable: true },
      { word: "係る",   reading: "かかる",     sentence: "この問題に○○人を集める。",          printable: true }
    ]
  },
  {
    kanji: "軽",
    readings: { on: ["ケイ"], kun: ["かる(い)", "かろ(やか)"] },
    words: [
      { word: "軽い",   reading: "かるい",     sentence: "この箱は思ったより○○。",            printable: true },
      { word: "軽食",   reading: "けいしょく", sentence: "昼に○○をとる。",                    printable: true },
      { word: "気軽",   reading: "きがる",     sentence: "○○に話しかけてね。",                printable: true },
      { word: "手軽",   reading: "てがる",     sentence: "○○な料理を作る。",                  printable: true },
      { word: "軽音楽", reading: "けいおんがく", sentence: "へやで○○を聞く。",                printable: true },
      { word: "軽石",   reading: "かるいし",   sentence: "○○は水にうかぶ。",                  printable: true }
    ]
  },
  {
    kanji: "血",
    readings: { on: ["ケツ"], kun: ["ち"] },
    words: [
      { word: "血",     reading: "ち",         sentence: "ゆびを切って○○が出た。",            printable: true },
      { word: "血色",   reading: "けっしょく", sentence: "顔の○○がよい。",                    printable: true },
      { word: "出血",   reading: "しゅっけつ", sentence: "ころんで○○した。",                  printable: true },
      { word: "鼻血",   reading: "はなぢ",     sentence: "走った後○○が出た。",                printable: true },
      { word: "血管",   reading: "けっかん",   sentence: "○○の絵をかく。",                    printable: true },
      { word: "血液",   reading: "けつえき",   sentence: "○○の話を聞く。",                    printable: true }
    ]
  },
  {
    kanji: "決",
    readings: { on: ["ケツ"], kun: ["き(める)", "き(まる)"] },
    words: [
      { word: "決める", reading: "きめる",     sentence: "目ひょうを○○。",                    printable: true },
      { word: "決まる", reading: "きまる",     sentence: "学校の行事が○○。",                  printable: true },
      { word: "決心",   reading: "けっしん",   sentence: "毎朝走ろうと○○する。",              printable: true },
      { word: "決勝",   reading: "けっしょう", sentence: "○○戦に進む。",                      printable: true },
      { word: "決定",   reading: "けってい",   sentence: "代表が○○した。",                    printable: true },
      { word: "決行",   reading: "けっこう",   sentence: "雨でも遠足は○○。",                  printable: true }
    ]
  },
  {
    kanji: "研",
    readings: { on: ["ケン"], kun: ["と(ぐ)"] },
    words: [
      { word: "研究",   reading: "けんきゅう", sentence: "夏休みの○○を始める。",              printable: true },
      { word: "研ぐ",   reading: "とぐ",       sentence: "母が米を○○。",                      printable: true },
      { word: "研修",   reading: "けんしゅう", sentence: "父が○○に出かける。",                printable: true },
      { word: "研究所", reading: "けんきゅうじょ", sentence: "村の○○を見学する。",          printable: true },
      { word: "研究室", reading: "けんきゅうしつ", sentence: "大学の○○をたずねる。",        printable: true },
      { word: "研学",   reading: "けんがく",   sentence: "ひるまも○○にはげむ。",              printable: true }
    ]
  },
  {
    kanji: "県",
    readings: { on: ["ケン"], kun: [] },
    words: [
      { word: "県",     reading: "けん",       sentence: "となりの○○まで車で行く。",          printable: true },
      { word: "県内",   reading: "けんない",   sentence: "○○の名所をめぐる。",                printable: true },
      { word: "県外",   reading: "けんがい",   sentence: "○○へ家族で行く。",                  printable: true },
      { word: "県立",   reading: "けんりつ",   sentence: "兄は○○の高校に通う。",              printable: true },
      { word: "県道",   reading: "けんどう",   sentence: "○○ぞいに店がならぶ。",              printable: true },
      { word: "県長",   reading: "けんちょう", sentence: "県の話し合いで○○が語る。",          printable: true }
    ]
  },
  {
    kanji: "庫",
    readings: { on: ["コ", "ク"], kun: [] },
    words: [
      { word: "車庫",   reading: "しゃこ",     sentence: "車を○○に入れる。",                  printable: true },
      { word: "金庫",   reading: "きんこ",     sentence: "大事な物を○○に入れる。",            printable: true },
      { word: "倉庫",   reading: "そうこ",     sentence: "古い○○を直す。",                    printable: true },
      { word: "書庫",   reading: "しょこ",     sentence: "本を○○にしまう。",                  printable: true },
      { word: "冷ぞう庫", reading: "れいぞうこ", sentence: "牛にゅうを○○に入れる。",          printable: true },
      { word: "庫内",   reading: "こない",     sentence: "○○の温度を下げる。",                printable: true }
    ]
  },
  {
    kanji: "湖",
    readings: { on: ["コ"], kun: ["みずうみ"] },
    words: [
      { word: "湖",     reading: "みずうみ",   sentence: "山おくに大きな○○がある。",          printable: true },
      { word: "湖水",   reading: "こすい",     sentence: "○○がきらきら光る。",                printable: true },
      { word: "湖面",   reading: "こめん",     sentence: "○○に空がうつる。",                  printable: true },
      { word: "湖上",   reading: "こじょう",   sentence: "○○を船で行く。",                    printable: true },
      { word: "湖岸",   reading: "こがん",     sentence: "○○で写真をとる。",                  printable: true },
      { word: "山中湖", reading: "やまなかこ", sentence: "○○へ家族で出かけた。",              printable: true }
    ]
  },
  {
    kanji: "向",
    readings: { on: ["コウ"], kun: ["む(く)", "む(ける)", "む(かう)", "む(こう)"] },
    words: [
      { word: "向く",   reading: "むく",       sentence: "前を○○とごうれいする。",            printable: true },
      { word: "向ける", reading: "むける",     sentence: "カメラを花に○○。",                  printable: true },
      { word: "向かう", reading: "むかう",     sentence: "学校へ○○。",                        printable: true },
      { word: "向こう", reading: "むこう",     sentence: "道の○○に店がある。",                printable: true },
      { word: "方向",   reading: "ほうこう",   sentence: "風の○○を調べる。",                  printable: true },
      { word: "上向き", reading: "うわむき",   sentence: "矢じるしが○○になる。",              printable: true }
    ]
  },
  {
    kanji: "幸",
    readings: { on: ["コウ"], kun: ["さいわ(い)", "しあわ(せ)", "さち"] },
    words: [
      { word: "幸せ",   reading: "しあわせ",   sentence: "家族と○○にくらす。",                printable: true },
      { word: "幸運",   reading: "こううん",   sentence: "○○なことが続く。",                  printable: true },
      { word: "幸福",   reading: "こうふく",   sentence: "○○な気持ちになる。",                printable: true },
      { word: "幸い",   reading: "さいわい",   sentence: "雨がやんで○○だ。",                  printable: true },
      { word: "不幸",   reading: "ふこう",     sentence: "おさななじみの○○を聞く。",          printable: true },
      { word: "海の幸", reading: "うみのさち", sentence: "今日の食たくは○○だ。",              printable: true }
    ]
  },
  {
    kanji: "港",
    readings: { on: ["コウ"], kun: ["みなと"] },
    words: [
      { word: "港",     reading: "みなと",     sentence: "船が○○に入ってきた。",              printable: true },
      { word: "港町",   reading: "みなとまち", sentence: "古い○○をおとずれる。",              printable: true },
      { word: "空港",   reading: "くうこう",   sentence: "○○まで電車で行く。",                printable: true },
      { word: "出港",   reading: "しゅっこう", sentence: "船は朝に○○した。",                  printable: true },
      { word: "入港",   reading: "にゅうこう", sentence: "大きな船が○○する。",                printable: true },
      { word: "漁港",   reading: "ぎょこう",   sentence: "朝の○○はにぎやかだ。",              printable: true }
    ]
  },
  {
    kanji: "号",
    readings: { on: ["ゴウ"], kun: [] },
    words: [
      { word: "番号",   reading: "ばんごう",   sentence: "○○じゅんにならぶ。",                printable: true },
      { word: "号令",   reading: "ごうれい",   sentence: "先生の○○で立つ。",                  printable: true },
      { word: "信号",   reading: "しんごう",   sentence: "○○が青になる。",                    printable: true },
      { word: "号外",   reading: "ごうがい",   sentence: "駅で○○がくばられる。",              printable: true },
      { word: "記号",   reading: "きごう",     sentence: "地図の○○を覚える。",                printable: true },
      { word: "年号",   reading: "ねんごう",   sentence: "新しい○○が決まる。",                printable: true }
    ]
  },
  {
    kanji: "根",
    readings: { on: ["コン"], kun: ["ね"] },
    words: [
      { word: "根",     reading: "ね",         sentence: "草の○○を引きぬく。",                printable: true },
      { word: "屋根",   reading: "やね",       sentence: "家の○○に雪がつもる。",              printable: true },
      { word: "大根",   reading: "だいこん",   sentence: "畑で○○を引きぬく。",                printable: true },
      { word: "根気",   reading: "こんき",     sentence: "○○強く取り組む。",                  printable: true },
      { word: "根本",   reading: "こんぽん",   sentence: "問だいの○○を考える。",              printable: true },
      { word: "根もと", reading: "ねもと",     sentence: "木の○○に花がさく。",                printable: true }
    ]
  },
  {
    kanji: "祭",
    readings: { on: ["サイ"], kun: ["まつ(る)", "まつ(り)"] },
    words: [
      { word: "祭り",   reading: "まつり",     sentence: "夏の○○に出かける。",                printable: true },
      { word: "祭日",   reading: "さいじつ",   sentence: "明日は○○で休みだ。",                printable: true },
      { word: "学園祭", reading: "がくえんさい", sentence: "高校の○○を見に行く。",            printable: true },
      { word: "祭る",   reading: "まつる",     sentence: "古い神を○○行事。",                  printable: true },
      { word: "前夜祭", reading: "ぜんやさい", sentence: "町の○○に出る。",                    printable: true },
      { word: "後夜祭", reading: "こうやさい", sentence: "学校の○○を楽しむ。",                printable: true }
    ]
  },
  {
    kanji: "皿",
    readings: { on: [], kun: ["さら"] },
    words: [
      { word: "皿",     reading: "さら",       sentence: "ごはんを○○にもる。",                printable: true },
      { word: "大皿",   reading: "おおざら",   sentence: "○○に魚をならべる。",                printable: true },
      { word: "小皿",   reading: "こざら",     sentence: "おかしを○○に分ける。",              printable: true },
      { word: "灰皿",   reading: "はいざら",   sentence: "○○をきれいにあらう。",              printable: true },
      { word: "皿あらい", reading: "さらあらい", sentence: "ゆう食後に○○をする。",            printable: true },
      { word: "絵皿",   reading: "えざら",     sentence: "古い○○をかざる。",                  printable: true }
    ]
  },
  {
    kanji: "仕",
    readings: { on: ["シ", "ジ"], kun: ["つか(える)"] },
    words: [
      { word: "仕事",   reading: "しごと",     sentence: "父は朝から○○に出る。",              printable: true },
      { word: "仕方",   reading: "しかた",     sentence: "計算の○○を教わる。",                printable: true },
      { word: "仕上げ", reading: "しあげ",     sentence: "作品の○○をていねいにする。",        printable: true },
      { word: "仕える", reading: "つかえる",   sentence: "王に○○家来の話。",                  printable: true },
      { word: "仕入れ", reading: "しいれ",     sentence: "店の○○を手つだう。",                printable: true },
      { word: "出仕",   reading: "しゅっし",   sentence: "朝早く○○する。",                    printable: true }
    ]
  },
  {
    kanji: "死",
    readings: { on: ["シ"], kun: ["し(ぬ)"] },
    words: [
      { word: "死ぬ",   reading: "しぬ",       sentence: "花が水ぶそくで○○。",                printable: true },
      { word: "死期",   reading: "しき",       sentence: "○○がせまった生き物。",              printable: true },
      { word: "死力",   reading: "しりょく",   sentence: "○○をつくして走る。",                printable: true },
      { word: "生死",   reading: "せいし",     sentence: "○○にかかわる話。",                  printable: true },
      { word: "死活",   reading: "しかつ",     sentence: "町の○○問だい。",                    printable: true },
      { word: "死後",   reading: "しご",       sentence: "○○の世のお話を聞く。",              printable: true }
    ]
  },
  {
    kanji: "使",
    readings: { on: ["シ"], kun: ["つか(う)"] },
    words: [
      { word: "使う",   reading: "つかう",     sentence: "新しいえん筆を○○。",                printable: true },
      { word: "使い",   reading: "つかい",     sentence: "母の○○に行く。",                    printable: true },
      { word: "使用",   reading: "しよう",     sentence: "公きょう物を○○する。",              printable: true },
      { word: "天使",   reading: "てんし",     sentence: "絵本に○○が出てくる。",              printable: true },
      { word: "大使",   reading: "たいし",     sentence: "外国の○○が来る。",                  printable: true },
      { word: "使い方", reading: "つかいかた", sentence: "道具の○○を学ぶ。",                  printable: true }
    ]
  },
  {
    kanji: "始",
    readings: { on: ["シ"], kun: ["はじ(まる)", "はじ(める)"] },
    words: [
      { word: "始める", reading: "はじめる",   sentence: "新しい本を○○。",                    printable: true },
      { word: "始まる", reading: "はじまる",   sentence: "じゅぎょうが○○。",                  printable: true },
      { word: "始発",   reading: "しはつ",     sentence: "朝早い○○の電車に乗る。",            printable: true },
      { word: "開始",   reading: "かいし",     sentence: "試合○○の合図がなる。",              printable: true },
      { word: "始末",   reading: "しまつ",     sentence: "自分の○○は自分でする。",            printable: true },
      { word: "始業",   reading: "しぎょう",   sentence: "○○の式が行われる。",                printable: true }
    ]
  },
  {
    kanji: "指",
    readings: { on: ["シ"], kun: ["ゆび", "さ(す)"] },
    words: [
      { word: "指",     reading: "ゆび",       sentence: "○○を切らないように気をつける。",    printable: true },
      { word: "指す",   reading: "さす",       sentence: "時計の長いはりが三を○○。",          printable: true },
      { word: "指先",   reading: "ゆびさき",   sentence: "○○がつめたい。",                    printable: true },
      { word: "指名",   reading: "しめい",     sentence: "先生に○○される。",                  printable: true },
      { word: "指じ",   reading: "しじ",       sentence: "先生の○○にしたがう。",              printable: true },
      { word: "親指",   reading: "おやゆび",   sentence: "○○を立ててほめる。",                printable: true }
    ]
  },
  {
    kanji: "歯",
    readings: { on: ["シ"], kun: ["は"] },
    words: [
      { word: "歯",     reading: "は",         sentence: "朝と夜に○○をみがく。",              printable: true },
      { word: "歯医者", reading: "はいしゃ",   sentence: "むし歯で○○へ行く。",                printable: true },
      { word: "前歯",   reading: "まえば",     sentence: "○○がぐらぐらする。",                printable: true },
      { word: "歯車",   reading: "はぐるま",   sentence: "時計の○○を見る。",                  printable: true },
      { word: "歯科",   reading: "しか",       sentence: "となりの町の○○に通う。",            printable: true },
      { word: "歯みがき", reading: "はみがき", sentence: "毎日の○○を大切にする。",            printable: true }
    ]
  },
  {
    kanji: "詩",
    readings: { on: ["シ"], kun: [] },
    words: [
      { word: "詩",     reading: "し",         sentence: "国語で○○を書く。",                  printable: true },
      { word: "詩人",   reading: "しじん",     sentence: "ゆう名な○○の言葉。",                printable: true },
      { word: "詩集",   reading: "ししゅう",   sentence: "図書館で○○を借りる。",              printable: true },
      { word: "漢詩",   reading: "かんし",     sentence: "兄が○○を読む。",                    printable: true },
      { word: "童詩",   reading: "どうし",     sentence: "子どもの作った○○を読む。",          printable: true },
      { word: "作詩",   reading: "さくし",     sentence: "クラスで○○をする。",                printable: true }
    ]
  },
  {
    kanji: "次",
    readings: { on: ["ジ", "シ"], kun: ["つぎ", "つ(ぐ)"] },
    words: [
      { word: "次",     reading: "つぎ",       sentence: "○○のえきでおりる。",                printable: true },
      { word: "次男",   reading: "じなん",     sentence: "○○が生まれる。",                    printable: true },
      { word: "次女",   reading: "じじょ",     sentence: "母は三人きょうだいの○○だ。",        printable: true },
      { word: "目次",   reading: "もくじ",     sentence: "本の○○を見る。",                    printable: true },
      { word: "次回",   reading: "じかい",     sentence: "○○の会合は来週だ。",                printable: true },
      { word: "次第",   reading: "しだい",     sentence: "明日の予定○○を見る。",              printable: true }
    ]
  },
  {
    kanji: "事",
    readings: { on: ["ジ"], kun: ["こと"] },
    words: [
      { word: "事",     reading: "こと",       sentence: "うれしい○○があった。",              printable: true },
      { word: "用事",   reading: "ようじ",     sentence: "○○があって早く帰る。",              printable: true },
      { word: "食事",   reading: "しょくじ",   sentence: "家族で○○をする。",                  printable: true },
      { word: "行事",   reading: "ぎょうじ",   sentence: "学校の○○に元気に出る。",            printable: true },
      { word: "返事",   reading: "へんじ",     sentence: "大きな声で○○する。",                printable: true },
      { word: "大事",   reading: "だいじ",     sentence: "本を○○に使う。",                    printable: true }
    ]
  },
  {
    kanji: "持",
    readings: { on: ["ジ"], kun: ["も(つ)"] },
    words: [
      { word: "持つ",   reading: "もつ",       sentence: "重いかばんを○○。",                  printable: true },
      { word: "気持ち", reading: "きもち",     sentence: "うれしい○○を伝える。",              printable: true },
      { word: "持ち主", reading: "もちぬし",   sentence: "ぼうしの○○をさがす。",              printable: true },
      { word: "持参",   reading: "じさん",     sentence: "おべんとう○○のこと。",              printable: true },
      { word: "所持",   reading: "しょじ",     sentence: "切ぷの○○をたしかめる。",            printable: true },
      { word: "持ち物", reading: "もちもの",   sentence: "明日の○○を用意する。",              printable: true }
    ]
  },
  {
    kanji: "式",
    readings: { on: ["シキ"], kun: [] },
    words: [
      { word: "式",     reading: "しき",       sentence: "学校の○○に出る。",                  printable: true },
      { word: "入学式", reading: "にゅうがくしき", sentence: "○○に出席する。",                printable: true },
      { word: "卒業式", reading: "そつぎょうしき", sentence: "兄の○○に行く。",                printable: true },
      { word: "和式",   reading: "わしき",     sentence: "○○のへやでくつろぐ。",              printable: true },
      { word: "正式",   reading: "せいしき",   sentence: "○○な書る作る。",                    printable: true },
      { word: "式場",   reading: "しきじょう", sentence: "おじの○○に向かう。",                printable: true }
    ]
  },
  {
    kanji: "実",
    readings: { on: ["ジツ"], kun: ["み", "みの(る)"] },
    words: [
      { word: "実",     reading: "み",         sentence: "木に赤い○○がなる。",                printable: true },
      { word: "実る",   reading: "みのる",     sentence: "畑の麦が○○。",                      printable: true },
      { word: "実話",   reading: "じつわ",     sentence: "今の話は○○だ。",                    printable: true },
      { word: "実行",   reading: "じっこう",   sentence: "計画を○○する。",                    printable: true },
      { word: "事実",   reading: "じじつ",     sentence: "○○をはっきり話す。",                printable: true },
      { word: "実力",   reading: "じつりょく", sentence: "本当の○○を見せる。",                printable: true }
    ]
  },
  {
    kanji: "写",
    readings: { on: ["シャ"], kun: ["うつ(す)", "うつ(る)"] },
    words: [
      { word: "写す",   reading: "うつす",     sentence: "黒板の字をノートに○○。",            printable: true },
      { word: "写る",   reading: "うつる",     sentence: "鏡に顔が○○。",                      printable: true },
      { word: "写真",   reading: "しゃしん",   sentence: "家族の○○をとる。",                  printable: true },
      { word: "写生",   reading: "しゃせい",   sentence: "公園で花を○○する。",                printable: true },
      { word: "書き写し", reading: "かきうつし", sentence: "詩の○○をする。",                  printable: true },
      { word: "実写",   reading: "じっしゃ",   sentence: "○○の番組を見る。",                  printable: true }
    ]
  },
  {
    kanji: "者",
    readings: { on: ["シャ"], kun: ["もの"] },
    words: [
      { word: "者",     reading: "もの",       sentence: "強い○○があらわれる。",              printable: true },
      { word: "医者",   reading: "いしゃ",     sentence: "ねつが下がらず○○に行く。",          printable: true },
      { word: "歯医者", reading: "はいしゃ",   sentence: "むし歯になり○○へ行く。",            printable: true },
      { word: "学者",   reading: "がくしゃ",   sentence: "○○が新しい発見をする。",            printable: true },
      { word: "作者",   reading: "さくしゃ",   sentence: "この本の○○を調べる。",              printable: true },
      { word: "前者",   reading: "ぜんしゃ",   sentence: "○○の意見にさん成する。",            printable: true }
    ]
  },
  {
    kanji: "主",
    readings: { on: ["シュ", "ス"], kun: ["ぬし", "おも"] },
    words: [
      { word: "主",     reading: "ぬし",       sentence: "村の○○に話を聞く。",                printable: true },
      { word: "持ち主", reading: "もちぬし",   sentence: "うで時計の○○をさがす。",            printable: true },
      { word: "主人",   reading: "しゅじん",   sentence: "店の○○があいさつする。",            printable: true },
      { word: "主食",   reading: "しゅしょく", sentence: "ごはんが○○だ。",                    printable: true },
      { word: "主役",   reading: "しゅやく",   sentence: "げきの○○をやる。",                  printable: true },
      { word: "主に",   reading: "おもに",     sentence: "今日は○○算数をした。",              printable: true }
    ]
  },
  {
    kanji: "守",
    readings: { on: ["シュ", "ス"], kun: ["まも(る)", "もり"] },
    words: [
      { word: "守る",   reading: "まもる",     sentence: "やくそくを○○。",                    printable: true },
      { word: "子守",   reading: "こもり",     sentence: "○○うたを歌う。",                    printable: true },
      { word: "留守",   reading: "るす",       sentence: "母は○○で家にいない。",              printable: true },
      { word: "守備",   reading: "しゅび",     sentence: "野球の○○につく。",                  printable: true },
      { word: "見守る", reading: "みまもる",   sentence: "弟の様子を○○。",                    printable: true },
      { word: "守る人", reading: "まもるひと", sentence: "森を○○の話を読む。",                printable: true }
    ]
  },
  {
    kanji: "取",
    readings: { on: ["シュ"], kun: ["と(る)"] },
    words: [
      { word: "取る",   reading: "とる",       sentence: "ぼうしを手に○○。",                  printable: true },
      { word: "受け取る", reading: "うけとる", sentence: "手紙を○○。",                        printable: true },
      { word: "取り組み", reading: "とりくみ", sentence: "○○の様子を発表する。",              printable: true },
      { word: "書き取り", reading: "かきとり", sentence: "毎日○○の練習をする。",              printable: true },
      { word: "取引",   reading: "とりひき",   sentence: "店の○○について学ぶ。",              printable: true },
      { word: "取材",   reading: "しゅざい",   sentence: "新聞の○○を受ける。",                printable: true }
    ]
  },
  {
    kanji: "酒",
    readings: { on: ["シュ"], kun: ["さけ", "さか"] },
    words: [
      { word: "酒",     reading: "さけ",       sentence: "父は○○を飲まない。",                printable: true },
      { word: "酒屋",   reading: "さかや",     sentence: "町かどの○○を通る。",                printable: true },
      { word: "酒場",   reading: "さかば",     sentence: "古い○○が町にある。",                printable: true },
      { word: "日本酒", reading: "にほんしゅ", sentence: "おじいさんが○○を作る。",            printable: true },
      { word: "酒気",   reading: "しゅき",     sentence: "○○のにおいがする。",                printable: true },
      { word: "酒屋さん", reading: "さかやさん", sentence: "近くの○○で買う。",                printable: true }
    ]
  },
  {
    kanji: "受",
    readings: { on: ["ジュ"], kun: ["う(ける)", "う(かる)"] },
    words: [
      { word: "受ける", reading: "うける",     sentence: "テストを○○。",                      printable: true },
      { word: "受け取る", reading: "うけとる", sentence: "ボールを○○。",                      printable: true },
      { word: "受付",   reading: "うけつけ",   sentence: "○○で名前を書く。",                  printable: true },
      { word: "受験",   reading: "じゅけん",   sentence: "兄が高校を○○する。",                printable: true },
      { word: "受話器", reading: "じゅわき",   sentence: "電話の○○を取る。",                  printable: true },
      { word: "受け身", reading: "うけみ",     sentence: "じゅう道で○○を習う。",              printable: true }
    ]
  },
  {
    kanji: "州",
    readings: { on: ["シュウ"], kun: ["す"] },
    words: [
      { word: "九州",   reading: "きゅうしゅう", sentence: "夏休みに○○へ行く。",              printable: true },
      { word: "本州",   reading: "ほんしゅう", sentence: "○○の地図を書く。",                  printable: true },
      { word: "州",     reading: "しゅう",     sentence: "アメリカの○○名を覚える。",          printable: true },
      { word: "中州",   reading: "なかす",     sentence: "川の○○に鳥がいる。",                printable: true },
      { word: "三角州", reading: "さんかくす", sentence: "川口の○○を見る。",                  printable: true },
      { word: "州都",   reading: "しゅうと",   sentence: "○○の名前を調べる。",                printable: true }
    ]
  },
  {
    kanji: "拾",
    readings: { on: ["シュウ", "ジュウ"], kun: ["ひろ(う)"] },
    words: [
      { word: "拾う",   reading: "ひろう",     sentence: "公園でどんぐりを○○。",              printable: true },
      { word: "拾い物", reading: "ひろいもの", sentence: "○○をこう番にとどける。",            printable: true },
      { word: "拾得",   reading: "しゅうとく", sentence: "○○物の知らせがある。",              printable: true },
      { word: "命拾い", reading: "いのちびろい", sentence: "あぶないところで○○した。",        printable: true },
      { word: "ごみ拾い", reading: "ごみひろい", sentence: "朝の公園で○○をする。",            printable: true },
      { word: "拾い読み", reading: "ひろいよみ", sentence: "本を○○する。",                    printable: true }
    ]
  },
  {
    kanji: "終",
    readings: { on: ["シュウ"], kun: ["お(わる)", "お(える)"] },
    words: [
      { word: "終わる", reading: "おわる",     sentence: "今のじゅぎょうが○○。",              printable: true },
      { word: "終える", reading: "おえる",     sentence: "しゅくだいを○○。",                  printable: true },
      { word: "終点",   reading: "しゅうてん", sentence: "電車の○○でおりる。",                printable: true },
      { word: "終止",   reading: "しゅうし",   sentence: "話が○○ふになる。",                  printable: true },
      { word: "終日",   reading: "しゅうじつ", sentence: "○○雨がふり続いた。",                printable: true },
      { word: "終業",   reading: "しゅうぎょう", sentence: "○○の式に出る。",                  printable: true }
    ]
  },
  {
    kanji: "習",
    readings: { on: ["シュウ"], kun: ["なら(う)"] },
    words: [
      { word: "習う",   reading: "ならう",     sentence: "毎週ピアノを○○。",                  printable: true },
      { word: "学習",   reading: "がくしゅう", sentence: "新しい○○の時間が始まる。",          printable: true },
      { word: "練習",   reading: "れんしゅう", sentence: "毎日漢字の○○をする。",              printable: true },
      { word: "習字",   reading: "しゅうじ",   sentence: "○○の時間が好きだ。",                printable: true },
      { word: "予習",   reading: "よしゅう",   sentence: "明日の○○をする。",                  printable: true },
      { word: "ふく習", reading: "ふくしゅう", sentence: "ノートで○○する。",                  printable: true }
    ]
  },
  {
    kanji: "集",
    readings: { on: ["シュウ"], kun: ["あつ(まる)", "あつ(める)"] },
    words: [
      { word: "集まる", reading: "あつまる",   sentence: "校庭に○○。",                        printable: true },
      { word: "集める", reading: "あつめる",   sentence: "切手を○○のがしゅみだ。",            printable: true },
      { word: "集合",   reading: "しゅうごう", sentence: "八時に○○する。",                    printable: true },
      { word: "詩集",   reading: "ししゅう",   sentence: "○○を声に出して読む。",              printable: true },
      { word: "集中",   reading: "しゅうちゅう", sentence: "勉強に○○する。",                  printable: true },
      { word: "全集",   reading: "ぜんしゅう", sentence: "作家の○○を見つける。",              printable: true }
    ]
  },
  {
    kanji: "住",
    readings: { on: ["ジュウ"], kun: ["す(む)"] },
    words: [
      { word: "住む",   reading: "すむ",       sentence: "うみの近くに○○。",                  printable: true },
      { word: "住所",   reading: "じゅうしょ", sentence: "ノートに○○を書く。",                printable: true },
      { word: "住人",   reading: "じゅうにん", sentence: "町の○○とあいさつする。",            printable: true },
      { word: "住み家", reading: "すみか",     sentence: "ねこの○○を作る。",                  printable: true },
      { word: "住民",   reading: "じゅうみん", sentence: "町の○○が集まる。",                  printable: true },
      { word: "住宅",   reading: "じゅうたく", sentence: "新しい○○がたつ。",                  printable: true }
    ]
  },
  {
    kanji: "重",
    readings: { on: ["ジュウ", "チョウ"], kun: ["おも(い)", "かさ(ねる)", "かさ(なる)", "え"] },
    words: [
      { word: "重い",   reading: "おもい",     sentence: "この箱は思ったより○○。",            printable: true },
      { word: "重ねる", reading: "かさねる",   sentence: "紙を二まい○○。",                    printable: true },
      { word: "体重",   reading: "たいじゅう", sentence: "毎月○○をはかる。",                  printable: true },
      { word: "重力",   reading: "じゅうりょく", sentence: "物が落ちるのは○○のせい。",        printable: true },
      { word: "重大",   reading: "じゅうだい", sentence: "とても○○な話を聞く。",              printable: true },
      { word: "二重",   reading: "にじゅう",   sentence: "ふくろを○○にする。",                printable: true }
    ]
  },
  {
    kanji: "宿",
    readings: { on: ["シュク"], kun: ["やど", "やど(る)"] },
    words: [
      { word: "宿",     reading: "やど",       sentence: "山の○○に一日とまる。",              printable: true },
      { word: "宿題",   reading: "しゅくだい", sentence: "今日の○○を早めに終わらせる。",      printable: true },
      { word: "下宿",   reading: "げしゅく",   sentence: "兄は○○して大学に通う。",            printable: true },
      { word: "宿る",   reading: "やどる",     sentence: "葉に水てきが○○。",                  printable: true },
      { word: "合宿",   reading: "がっしゅく", sentence: "夏休みの○○に行く。",                printable: true },
      { word: "宿屋",   reading: "やどや",     sentence: "古い○○にとまる。",                  printable: true }
    ]
  },
  {
    kanji: "所",
    readings: { on: ["ショ"], kun: ["ところ"] },
    words: [
      { word: "所",     reading: "ところ",     sentence: "高い○○からながめる。",              printable: true },
      { word: "場所",   reading: "ばしょ",     sentence: "集合○○を決める。",                  printable: true },
      { word: "近所",   reading: "きんじょ",   sentence: "○○の人にあいさつする。",            printable: true },
      { word: "台所",   reading: "だいどころ", sentence: "母は○○で料理する。",                printable: true },
      { word: "住所",   reading: "じゅうしょ", sentence: "新しい○○を書く。",                  printable: true },
      { word: "名所",   reading: "めいしょ",   sentence: "京都の○○をめぐる。",                printable: true }
    ]
  },
  {
    kanji: "暑",
    readings: { on: ["ショ"], kun: ["あつ(い)"] },
    words: [
      { word: "暑い",   reading: "あつい",     sentence: "今日はとても○○。",                  printable: true },
      { word: "暑さ",   reading: "あつさ",     sentence: "夏の○○がきびしい。",                printable: true },
      { word: "暑中",   reading: "しょちゅう", sentence: "○○お見まいを書く。",                printable: true },
      { word: "暑気",   reading: "しょき",     sentence: "○○をはらう食事をとる。",            printable: true },
      { word: "残暑",   reading: "ざんしょ",   sentence: "○○がきびしい年だ。",                printable: true },
      { word: "蒸し暑い", reading: "むしあつい", sentence: "今日は○○一日だ。",                printable: true }
    ]
  },
  {
    kanji: "助",
    readings: { on: ["ジョ"], kun: ["たす(ける)", "たす(かる)", "すけ"] },
    words: [
      { word: "助ける", reading: "たすける",   sentence: "こまった人を○○。",                  printable: true },
      { word: "助かる", reading: "たすかる",   sentence: "教えてもらって○○。",                printable: true },
      { word: "助手",   reading: "じょしゅ",   sentence: "先生の○○をする。",                  printable: true },
      { word: "助け合い", reading: "たすけあい", sentence: "教室でみんなで○○をする。",        printable: true },
      { word: "助言",   reading: "じょげん",   sentence: "ともだちに○○する。",                printable: true },
      { word: "人助け", reading: "ひとだすけ", sentence: "○○になることをする。",              printable: true }
    ]
  },
  {
    kanji: "昭",
    readings: { on: ["ショウ"], kun: [] },
    words: [
      { word: "昭和",   reading: "しょうわ",   sentence: "祖父は○○生まれだ。",                printable: true },
      { word: "昭和時代", reading: "しょうわじだい", sentence: "○○の話を聞く。",            printable: true },
      { word: "昭代",   reading: "しょうだい", sentence: "明るい○○の話を本で読む。",          printable: true },
      { word: "昭和生", reading: "しょうわうまれ", sentence: "父は○○まれだ。",                printable: true },
      { word: "昭明",   reading: "しょうめい", sentence: "○○な答えを返す。",                  printable: true },
      { word: "昭和記念", reading: "しょうわきねん", sentence: "○○公園を歩く。",            printable: true }
    ]
  },
  {
    kanji: "消",
    readings: { on: ["ショウ"], kun: ["き(える)", "け(す)"] },
    words: [
      { word: "消える", reading: "きえる",     sentence: "電気が○○。",                        printable: true },
      { word: "消す",   reading: "けす",       sentence: "黒板の字を○○。",                    printable: true },
      { word: "消火",   reading: "しょうか",   sentence: "○○のくんれんをする。",              printable: true },
      { word: "消ぼう車", reading: "しょうぼうしゃ", sentence: "○○がかけつける。",          printable: true },
      { word: "消化",   reading: "しょうか",   sentence: "食べ物の○○を学ぶ。",                printable: true },
      { word: "取り消し", reading: "とりけし", sentence: "予やくの○○をする。",                printable: true }
    ]
  },
  {
    kanji: "商",
    readings: { on: ["ショウ"], kun: ["あきな(う)"] },
    words: [
      { word: "商人",   reading: "しょうにん", sentence: "むかし話の○○が出てくる。",          printable: true },
      { word: "商店",   reading: "しょうてん", sentence: "町の○○がいで買い物する。",          printable: true },
      { word: "商品",   reading: "しょうひん", sentence: "新しい○○が店にならぶ。",            printable: true },
      { word: "商売",   reading: "しょうばい", sentence: "父は○○をしている。",                printable: true },
      { word: "商業",   reading: "しょうぎょう", sentence: "町に新しい○○がさかえる。",        printable: true },
      { word: "商う",   reading: "あきなう",   sentence: "野さいを○○店。",                    printable: true }
    ]
  },
  {
    kanji: "章",
    readings: { on: ["ショウ"], kun: [] },
    words: [
      { word: "章",     reading: "しょう",     sentence: "本の三○○を読む。",                  printable: true },
      { word: "文章",   reading: "ぶんしょう", sentence: "短い○○を書く。",                    printable: true },
      { word: "記章",   reading: "きしょう",   sentence: "むねに○○をつける。",                printable: true },
      { word: "校章",   reading: "こうしょう", sentence: "ぼうしに○○をつける。",              printable: true },
      { word: "印章",   reading: "いんしょう", sentence: "古い○○をおす。",                    printable: true },
      { word: "楽章",   reading: "がくしょう", sentence: "曲の二○○が始まる。",                printable: true }
    ]
  },
  {
    kanji: "勝",
    readings: { on: ["ショウ"], kun: ["か(つ)", "まさ(る)"] },
    words: [
      { word: "勝つ",   reading: "かつ",       sentence: "じゃんけんで○○。",                  printable: true },
      { word: "勝ち",   reading: "かち",       sentence: "今日の試合は○○だ。",                printable: true },
      { word: "勝負",   reading: "しょうぶ",   sentence: "公平に○○する。",                    printable: true },
      { word: "決勝",   reading: "けっしょう", sentence: "○○戦に出る。",                      printable: true },
      { word: "名勝",   reading: "めいしょう", sentence: "古い町の○○をめぐる。",              printable: true },
      { word: "勝者",   reading: "しょうしゃ", sentence: "今日の試合の○○。",                  printable: true }
    ]
  },
  {
    kanji: "乗",
    readings: { on: ["ジョウ"], kun: ["の(る)", "の(せる)"] },
    words: [
      { word: "乗る",   reading: "のる",       sentence: "じてん車に○○。",                    printable: true },
      { word: "乗せる", reading: "のせる",     sentence: "車に荷物を○○。",                    printable: true },
      { word: "乗車",   reading: "じょうしゃ", sentence: "電車に○○する。",                    printable: true },
      { word: "乗船",   reading: "じょうせん", sentence: "○○の時間をたしかめる。",            printable: true },
      { word: "乗客",   reading: "じょうきゃく", sentence: "船に○○が大ぜいいる。",            printable: true },
      { word: "乗り場", reading: "のりば",     sentence: "バスの○○へ向かう。",                printable: true }
    ]
  },
  {
    kanji: "植",
    readings: { on: ["ショク"], kun: ["う(える)", "う(わる)"] },
    words: [
      { word: "植える", reading: "うえる",     sentence: "庭に花を○○。",                      printable: true },
      { word: "植わる", reading: "うわる",     sentence: "公園に木が○○。",                    printable: true },
      { word: "植物",   reading: "しょくぶつ", sentence: "○○の本を読む。",                    printable: true },
      { word: "植林",   reading: "しょくりん", sentence: "山で○○の行事に出る。",              printable: true },
      { word: "田植え", reading: "たうえ",     sentence: "祖父の家で○○を手つだう。",          printable: true },
      { word: "植木",   reading: "うえき",     sentence: "庭の○○に水をやる。",                printable: true }
    ]
  },
  {
    kanji: "申",
    readings: { on: ["シン"], kun: ["もう(す)"] },
    words: [
      { word: "申す",   reading: "もうす",     sentence: "ぼくが田中と○○。",                  printable: true },
      { word: "申しこむ", reading: "もうしこむ", sentence: "大会に○○。",                      printable: true },
      { word: "申しわけ", reading: "もうしわけ", sentence: "○○ない気もちになる。",            printable: true },
      { word: "申しでる", reading: "もうしでる", sentence: "考えを先生に○○。",                printable: true },
      { word: "申しこみ", reading: "もうしこみ", sentence: "○○の用紙を書く。",                printable: true },
      { word: "申年",   reading: "さるどし",   sentence: "今年は○○だと聞く。",                printable: true }
    ]
  },
  {
    kanji: "身",
    readings: { on: ["シン"], kun: ["み"] },
    words: [
      { word: "身",     reading: "み",         sentence: "○○のまわりをかたづける。",          printable: true },
      { word: "中身",   reading: "なかみ",     sentence: "はこの○○を出す。",                  printable: true },
      { word: "身長",   reading: "しんちょう", sentence: "毎年○○をはかる。",                  printable: true },
      { word: "全身",   reading: "ぜんしん",   sentence: "○○のうん動をする。",                printable: true },
      { word: "自身",   reading: "じしん",     sentence: "自分○○のことを話す。",              printable: true },
      { word: "身近",   reading: "みぢか",     sentence: "○○な話だいを選ぶ。",                printable: true }
    ]
  },
  {
    kanji: "神",
    readings: { on: ["シン", "ジン"], kun: ["かみ", "かん", "こう"] },
    words: [
      { word: "神",     reading: "かみ",       sentence: "山の○○にいのる。",                  printable: true },
      { word: "神社",   reading: "じんじゃ",   sentence: "正月に○○へお参りする。",            printable: true },
      { word: "神話",   reading: "しんわ",     sentence: "古い○○を読む。",                    printable: true },
      { word: "神様",   reading: "かみさま",   sentence: "○○にお礼を言う。",                  printable: true },
      { word: "神主",   reading: "かんぬし",   sentence: "○○がいのりをする。",                printable: true },
      { word: "風神",   reading: "ふうじん",   sentence: "古い絵の○○を見る。",                printable: true }
    ]
  },
  {
    kanji: "真",
    readings: { on: ["シン"], kun: ["ま"] },
    words: [
      { word: "真",     reading: "ま",         sentence: "○○ん中に立つ。",                    printable: true },
      { word: "真実",   reading: "しんじつ",   sentence: "ありのままの○○を話す。",            printable: true },
      { word: "写真",   reading: "しゃしん",   sentence: "ねこの○○をとる。",                  printable: true },
      { word: "真夜中", reading: "まよなか",   sentence: "○○に目がさめる。",                  printable: true },
      { word: "真冬",   reading: "まふゆ",     sentence: "○○の朝はとても寒い。",              printable: true },
      { word: "真上",   reading: "まうえ",     sentence: "太ようが○○に来る。",                printable: true }
    ]
  },
  {
    kanji: "深",
    readings: { on: ["シン"], kun: ["ふか(い)", "ふか(まる)", "ふか(める)"] },
    words: [
      { word: "深い",   reading: "ふかい",     sentence: "この池は思ったより○○。",            printable: true },
      { word: "深さ",   reading: "ふかさ",     sentence: "プールの○○をはかる。",              printable: true },
      { word: "深夜",   reading: "しんや",     sentence: "○○まで外は雨だった。",              printable: true },
      { word: "深海",   reading: "しんかい",   sentence: "○○の魚を本で見る。",                printable: true },
      { word: "深まる", reading: "ふかまる",   sentence: "話し合いで考えが○○。",              printable: true },
      { word: "水深",   reading: "すいしん",   sentence: "川の○○をはかる。",                  printable: true }
    ]
  },
  {
    kanji: "進",
    readings: { on: ["シン"], kun: ["すす(む)", "すす(める)"] },
    words: [
      { word: "進む",   reading: "すすむ",     sentence: "前に向かって○○。",                  printable: true },
      { word: "進める", reading: "すすめる",   sentence: "計画を○○。",                        printable: true },
      { word: "前進",   reading: "ぜんしん",   sentence: "号令で○○する。",                    printable: true },
      { word: "行進",   reading: "こうしん",   sentence: "音楽に合わせて○○。",                printable: true },
      { word: "進級",   reading: "しんきゅう", sentence: "新学期に○○する。",                  printable: true },
      { word: "進路",   reading: "しんろ",     sentence: "兄が○○を考える。",                  printable: true }
    ]
  },
  {
    kanji: "世",
    readings: { on: ["セイ", "セ"], kun: ["よ"] },
    words: [
      { word: "世",     reading: "よ",         sentence: "古い○○の話を聞く。",                printable: true },
      { word: "世話",   reading: "せわ",       sentence: "金魚の○○をする。",                  printable: true },
      { word: "世界",   reading: "せかい",     sentence: "○○の国を地図で見る。",              printable: true },
      { word: "世代",   reading: "せだい",     sentence: "新しい○○の話を聞く。",              printable: true },
      { word: "出世",   reading: "しゅっせ",   sentence: "むかし話の○○のお話。",              printable: true },
      { word: "世間",   reading: "せけん",     sentence: "○○のうわさが広がる。",              printable: true }
    ]
  },
  {
    kanji: "整",
    readings: { on: ["セイ"], kun: ["ととの(える)", "ととの(う)"] },
    words: [
      { word: "整える", reading: "ととのえる", sentence: "つくえの上を○○。",                  printable: true },
      { word: "整う",   reading: "ととのう",   sentence: "じゅんびが○○。",                    printable: true },
      { word: "整理",   reading: "せいり",     sentence: "教室の本だなを○○する。",            printable: true },
      { word: "整列",   reading: "せいれつ",   sentence: "校庭に○○する。",                    printable: true },
      { word: "調整",   reading: "ちょうせい", sentence: "音の大きさを○○する。",              printable: true },
      { word: "整数",   reading: "せいすう",   sentence: "算数で○○を学ぶ。",                  printable: true }
    ]
  },
  {
    kanji: "昔",
    readings: { on: ["セキ"], kun: ["むかし"] },
    words: [
      { word: "昔",     reading: "むかし",     sentence: "○○の話を聞く。",                    printable: true },
      { word: "昔話",   reading: "むかしばなし", sentence: "祖母から古い○○を聞く。",          printable: true },
      { word: "大昔",   reading: "おおむかし", sentence: "○○の生き物を学ぶ。",                printable: true },
      { word: "今昔",   reading: "こんじゃく", sentence: "○○の町をくらべる。",                printable: true },
      { word: "昔風",   reading: "むかしふう", sentence: "○○の家が町にある。",                printable: true },
      { word: "ひと昔", reading: "ひとむかし", sentence: "○○前のしゃしんを見る。",            printable: true }
    ]
  },
  {
    kanji: "全",
    readings: { on: ["ゼン"], kun: ["まった(く)", "すべ(て)"] },
    words: [
      { word: "全く",   reading: "まったく",   sentence: "○○知らない話だった。",              printable: true },
      { word: "全部",   reading: "ぜんぶ",     sentence: "おかずを○○食べる。",                printable: true },
      { word: "全員",   reading: "ぜんいん",   sentence: "クラスの○○が来た。",                printable: true },
      { word: "全力",   reading: "ぜんりょく", sentence: "○○で走る。",                        printable: true },
      { word: "全国",   reading: "ぜんこく",   sentence: "○○大会に出る。",                    printable: true },
      { word: "安全",   reading: "あんぜん",   sentence: "○○に道をわたる。",                  printable: true }
    ]
  },
  {
    kanji: "相",
    readings: { on: ["ソウ", "ショウ"], kun: ["あい"] },
    words: [
      { word: "相手",   reading: "あいて",     sentence: "話し○○を見つける。",                printable: true },
      { word: "相談",   reading: "そうだん",   sentence: "先生に○○する。",                    printable: true },
      { word: "相づち", reading: "あいづち",   sentence: "話に○○を打つ。",                    printable: true },
      { word: "相当",   reading: "そうとう",   sentence: "○○な時間がかかる。",                printable: true },
      { word: "相方",   reading: "あいかた",   sentence: "発表の○○を決める。",                printable: true },
      { word: "首相",   reading: "しゅしょう", sentence: "○○がテレビに出る。",                printable: true }
    ]
  },
  {
    kanji: "送",
    readings: { on: ["ソウ"], kun: ["おく(る)"] },
    words: [
      { word: "送る",   reading: "おくる",     sentence: "友だちに手紙を○○。",                printable: true },
      { word: "見送る", reading: "みおくる",   sentence: "駅で兄を○○。",                      printable: true },
      { word: "送電",   reading: "そうでん",   sentence: "○○のしくみを学ぶ。",                printable: true },
      { word: "送り",   reading: "おくり",     sentence: "○○の言葉を考える。",                printable: true },
      { word: "発送",   reading: "はっそう",   sentence: "本の○○の知らせがくる。",            printable: true },
      { word: "放送",   reading: "ほうそう",   sentence: "校内で○○が始まる。",                printable: true }
    ]
  },
  {
    kanji: "想",
    readings: { on: ["ソウ", "ソ"], kun: [] },
    words: [
      { word: "想",     reading: "そう",       sentence: "新しい○○がうかぶ。",                printable: true },
      { word: "感想",   reading: "かんそう",   sentence: "本の○○をまとめる。",                printable: true },
      { word: "予想",   reading: "よそう",     sentence: "明日の天気を○○する。",              printable: true },
      { word: "理想",   reading: "りそう",     sentence: "○○の学校を考える。",                printable: true },
      { word: "回想",   reading: "かいそう",   sentence: "古い写真で○○する。",                printable: true },
      { word: "発想",   reading: "はっそう",   sentence: "ゆたかな○○を持つ。",                printable: true }
    ]
  },
  {
    kanji: "息",
    readings: { on: ["ソク"], kun: ["いき"] },
    words: [
      { word: "息",     reading: "いき",       sentence: "深く○○をすう。",                    printable: true },
      { word: "息子",   reading: "むすこ",     sentence: "近所の○○がうまれた。",              printable: true },
      { word: "ため息", reading: "ためいき",   sentence: "つかれて○○をつく。",                printable: true },
      { word: "休息",   reading: "きゅうそく", sentence: "公園で少し○○する。",                printable: true },
      { word: "息切れ", reading: "いきぎれ",   sentence: "走って○○する。",                    printable: true },
      { word: "鼻息",   reading: "はないき",   sentence: "犬の○○があらい。",                  printable: true }
    ]
  },
  {
    kanji: "速",
    readings: { on: ["ソク"], kun: ["はや(い)", "はや(める)", "すみ(やか)"] },
    words: [
      { word: "速い",   reading: "はやい",     sentence: "兄は走るのが○○。",                  printable: true },
      { word: "速める", reading: "はやめる",   sentence: "歩く足を○○。",                      printable: true },
      { word: "速度",   reading: "そくど",     sentence: "電車の○○が上がる。",                printable: true },
      { word: "高速",   reading: "こうそく",   sentence: "○○道路を走る。",                    printable: true },
      { word: "風速",   reading: "ふうそく",   sentence: "今日の○○を調べる。",                printable: true },
      { word: "早速",   reading: "さっそく",   sentence: "○○、本を読み始める。",              printable: true }
    ]
  },
  {
    kanji: "族",
    readings: { on: ["ゾク"], kun: [] },
    words: [
      { word: "家族",   reading: "かぞく",     sentence: "○○で食事をする。",                  printable: true },
      { word: "民族",   reading: "みんぞく",   sentence: "世界の○○を学ぶ。",                  printable: true },
      { word: "水族館", reading: "すいぞくかん", sentence: "町の○○で大きな魚を見る。",        printable: true },
      { word: "親族",   reading: "しんぞく",   sentence: "正月に○○が集まる。",                printable: true },
      { word: "貴族",   reading: "きぞく",     sentence: "西洋の○○の話を読む。",              printable: true },
      { word: "同族",   reading: "どうぞく",   sentence: "鳥の○○を調べる。",                  printable: true }
    ]
  },
  {
    kanji: "他",
    readings: { on: ["タ"], kun: ["ほか"] },
    words: [
      { word: "他",     reading: "ほか",       sentence: "○○の方ほうも考える。",              printable: true },
      { word: "他人",   reading: "たにん",     sentence: "○○にやさしくする。",                printable: true },
      { word: "他校",   reading: "たこう",     sentence: "○○の生徒と話す。",                  printable: true },
      { word: "他県",   reading: "たけん",     sentence: "○○から人が来る。",                  printable: true },
      { word: "他国",   reading: "たこく",     sentence: "○○の食ぶん化を学ぶ。",              printable: true },
      { word: "他方",   reading: "たほう",     sentence: "○○の意見も聞く。",                  printable: true }
    ]
  },
  {
    kanji: "打",
    readings: { on: ["ダ"], kun: ["う(つ)"] },
    words: [
      { word: "打つ",   reading: "うつ",       sentence: "ボールをバットで○○。",              printable: true },
      { word: "打ち上げ", reading: "うちあげ", sentence: "ロケットの○○を見る。",              printable: true },
      { word: "打開",   reading: "だかい",     sentence: "問だいを○○する。",                  printable: true },
      { word: "打者",   reading: "だしゃ",     sentence: "次の○○がバットを持つ。",            printable: true },
      { word: "ねうち", reading: "ねうち",     sentence: "古い本の○○がわかる。",              printable: true },
      { word: "打ち水", reading: "うちみず",   sentence: "夏の朝、外に○○をする。",            printable: true }
    ]
  },
  {
    kanji: "対",
    readings: { on: ["タイ", "ツイ"], kun: [] },
    words: [
      { word: "対",     reading: "つい",       sentence: "○○になっている茶わん。",            printable: true },
      { word: "対する", reading: "たいする",   sentence: "新しい話に○○考え。",                printable: true },
      { word: "対面",   reading: "たいめん",   sentence: "ひさしぶりの○○。",                  printable: true },
      { word: "反対",   reading: "はんたい",   sentence: "○○の方こうに進む。",                printable: true },
      { word: "対決",   reading: "たいけつ",   sentence: "強い○○がある。",                    printable: true },
      { word: "対話",   reading: "たいわ",     sentence: "親子で○○する。",                    printable: true }
    ]
  },
  {
    kanji: "待",
    readings: { on: ["タイ"], kun: ["ま(つ)"] },
    words: [
      { word: "待つ",   reading: "まつ",       sentence: "駅でバスを○○。",                    printable: true },
      { word: "待ち合", reading: "まちあわせ", sentence: "公園で○○わせをする。",              printable: true },
      { word: "期待",   reading: "きたい",     sentence: "明日の遠足に○○する。",              printable: true },
      { word: "招待",   reading: "しょうたい", sentence: "友だちを家に○○する。",              printable: true },
      { word: "待合室", reading: "まちあいしつ", sentence: "病院の○○に入る。",                printable: true },
      { word: "お待たせ", reading: "おまたせ", sentence: "○○してすみません。",                printable: true }
    ]
  },
  {
    kanji: "代",
    readings: { on: ["ダイ", "タイ"], kun: ["か(わる)", "か(える)", "よ", "しろ"] },
    words: [
      { word: "代わる", reading: "かわる",     sentence: "そう番が○○。",                      printable: true },
      { word: "時代",   reading: "じだい",     sentence: "新しい○○がやって来る。",            printable: true },
      { word: "電車代", reading: "でんしゃだい", sentence: "○○をはらう。",                    printable: true },
      { word: "代表",   reading: "だいひょう", sentence: "クラスの○○になる。",                printable: true },
      { word: "代金",   reading: "だいきん",   sentence: "本の○○をはらう。",                  printable: true },
      { word: "千代",   reading: "ちよ",       sentence: "古い歌に○○が出る。",                printable: true }
    ]
  },
  {
    kanji: "第",
    readings: { on: ["ダイ"], kun: [] },
    words: [
      { word: "第一",   reading: "だいいち",   sentence: "○○に体ちょうが大事だ。",            printable: true },
      { word: "第二",   reading: "だいに",     sentence: "○○の方法を試す。",                  printable: true },
      { word: "第三",   reading: "だいさん",   sentence: "話の○○の点に進む。",                printable: true },
      { word: "次第",   reading: "しだい",     sentence: "明日の行事の○○を見る。",            printable: true },
      { word: "落第",   reading: "らくだい",   sentence: "○○しないようがんばる。",            printable: true },
      { word: "第一回", reading: "だいいっかい", sentence: "○○の大会に出る。",                printable: true }
    ]
  },
  {
    kanji: "題",
    readings: { on: ["ダイ"], kun: [] },
    words: [
      { word: "題",     reading: "だい",       sentence: "作文の○○を決める。",                printable: true },
      { word: "宿題",   reading: "しゅくだい", sentence: "今日の○○を早めにする。",            printable: true },
      { word: "問題",   reading: "もんだい",   sentence: "算数の○○をとく。",                  printable: true },
      { word: "話題",   reading: "わだい",     sentence: "新しい○○で話す。",                  printable: true },
      { word: "出題",   reading: "しゅつだい", sentence: "先生が○○する。",                    printable: true },
      { word: "題名",   reading: "だいめい",   sentence: "本の○○を覚える。",                  printable: true }
    ]
  },
  {
    kanji: "炭",
    readings: { on: ["タン"], kun: ["すみ"] },
    words: [
      { word: "炭",     reading: "すみ",       sentence: "ふろの火に○○を入れる。",            printable: true },
      { word: "石炭",   reading: "せきたん",   sentence: "むかしは○○を使った。",              printable: true },
      { word: "木炭",   reading: "もくたん",   sentence: "絵を○○でかく。",                    printable: true },
      { word: "炭火",   reading: "すみび",     sentence: "○○で魚をやく。",                    printable: true },
      { word: "炭酸",   reading: "たんさん",   sentence: "○○入りの飲み物。",                  printable: true },
      { word: "炭こう", reading: "たんこう",   sentence: "古い○○を見学する。",                printable: true }
    ]
  },
  {
    kanji: "短",
    readings: { on: ["タン"], kun: ["みじか(い)"] },
    words: [
      { word: "短い",   reading: "みじかい",   sentence: "ひもが○○。",                        printable: true },
      { word: "短歌",   reading: "たんか",     sentence: "国語の時間に○○を学ぶ。",            printable: true },
      { word: "短文",   reading: "たんぶん",   sentence: "国語のノートに○○を書く。",          printable: true },
      { word: "短気",   reading: "たんき",     sentence: "○○をおこさない。",                  printable: true },
      { word: "最短",   reading: "さいたん",   sentence: "○○の道を行く。",                    printable: true },
      { word: "短期",   reading: "たんき",     sentence: "○○の練習を行う。",                  printable: true }
    ]
  },
  {
    kanji: "談",
    readings: { on: ["ダン"], kun: [] },
    words: [
      { word: "談話",   reading: "だんわ",     sentence: "校長先生の○○を聞く。",              printable: true },
      { word: "相談",   reading: "そうだん",   sentence: "なやみを○○する。",                  printable: true },
      { word: "対談",   reading: "たいだん",   sentence: "作家どうしの○○を読む。",            printable: true },
      { word: "面談",   reading: "めんだん",   sentence: "先生と○○する。",                    printable: true },
      { word: "美談",   reading: "びだん",     sentence: "本でむかしの○○を読む。",            printable: true },
      { word: "会談",   reading: "かいだん",   sentence: "国の○○の話を聞く。",                printable: true }
    ]
  },
  {
    kanji: "着",
    readings: { on: ["チャク", "ジャク"], kun: ["き(る)", "き(せる)", "つ(く)", "つ(ける)"] },
    words: [
      { word: "着る",   reading: "きる",       sentence: "新しいふくを○○。",                  printable: true },
      { word: "着く",   reading: "つく",       sentence: "目てき地に○○。",                    printable: true },
      { word: "上着",   reading: "うわぎ",     sentence: "○○をハンガーにかける。",            printable: true },
      { word: "着地",   reading: "ちゃくち",   sentence: "とび箱で○○を決める。",              printable: true },
      { word: "発着",   reading: "はっちゃく", sentence: "バスの○○時こく表。",                printable: true },
      { word: "下着",   reading: "したぎ",     sentence: "新しい○○を買う。",                  printable: true }
    ]
  },
  {
    kanji: "注",
    readings: { on: ["チュウ"], kun: ["そそ(ぐ)"] },
    words: [
      { word: "注ぐ",   reading: "そそぐ",     sentence: "コップに水を○○。",                  printable: true },
      { word: "注意",   reading: "ちゅうい",   sentence: "通る車に○○して歩く。",              printable: true },
      { word: "注目",   reading: "ちゅうもく", sentence: "前のえん台に○○する。",              printable: true },
      { word: "注文",   reading: "ちゅうもん", sentence: "食どうで料理を○○する。",            printable: true },
      { word: "注しゃ", reading: "ちゅうしゃ", sentence: "○○がにが手だ。",                    printable: true },
      { word: "注水",   reading: "ちゅうすい", sentence: "水そうに○○する。",                  printable: true }
    ]
  },
  {
    kanji: "柱",
    readings: { on: ["チュウ"], kun: ["はしら"] },
    words: [
      { word: "柱",     reading: "はしら",     sentence: "古い家の○○は太い。",                printable: true },
      { word: "電柱",   reading: "でんちゅう", sentence: "○○に鳥がとまる。",                  printable: true },
      { word: "大黒柱", reading: "だいこくばしら", sentence: "古い家の○○を見る。",          printable: true },
      { word: "石柱",   reading: "せきちゅう", sentence: "庭に○○が立つ。",                    printable: true },
      { word: "支柱",   reading: "しちゅう",   sentence: "畑に○○を立てる。",                  printable: true },
      { word: "氷柱",   reading: "つらら",     sentence: "屋根から○○が下がる。",              printable: true }
    ]
  },
  {
    kanji: "丁",
    readings: { on: ["チョウ", "テイ"], kun: [] },
    words: [
      { word: "丁字路", reading: "ていじろ",   sentence: "○○で右に曲がる。",                  printable: true },
      { word: "二丁目", reading: "にちょうめ", sentence: "○○の店に行く。",                    printable: true },
      { word: "包丁",   reading: "ほうちょう", sentence: "母が○○で野さいを切る。",            printable: true },
      { word: "丁ねい", reading: "ていねい",   sentence: "字を○○に書く。",                    printable: true },
      { word: "丁度",   reading: "ちょうど",   sentence: "○○一時に着いた。",                  printable: true },
      { word: "三丁目", reading: "さんちょうめ", sentence: "町の○○に住む。",                  printable: true }
    ]
  },
  {
    kanji: "帳",
    readings: { on: ["チョウ"], kun: [] },
    words: [
      { word: "帳面",   reading: "ちょうめん", sentence: "新しい○○を店で買う。",              printable: true },
      { word: "手帳",   reading: "てちょう",   sentence: "○○に予定を書く。",                  printable: true },
      { word: "通帳",   reading: "つうちょう", sentence: "銀行の○○を作る。",                  printable: true },
      { word: "日記帳", reading: "にっきちょう", sentence: "毎晩○○に書く。",                  printable: true },
      { word: "電話帳", reading: "でんわちょう", sentence: "古い○○を見つける。",              printable: true },
      { word: "雑記帳", reading: "ざっきちょう", sentence: "メモを○○に書く。",                printable: true }
    ]
  },
  {
    kanji: "調",
    readings: { on: ["チョウ"], kun: ["しら(べる)", "ととの(える)"] },
    words: [
      { word: "調べる", reading: "しらべる",   sentence: "図書館で本を○○。",                  printable: true },
      { word: "調える", reading: "ととのえる", sentence: "ふくそうを○○。",                    printable: true },
      { word: "調子",   reading: "ちょうし",   sentence: "朝から体の○○がよい。",              printable: true },
      { word: "口調",   reading: "くちょう",   sentence: "やさしい○○で話す。",                printable: true },
      { word: "調味",   reading: "ちょうみ",   sentence: "母が○○料を入れる。",                printable: true },
      { word: "調和",   reading: "ちょうわ",   sentence: "色の○○を考える。",                  printable: true }
    ]
  },
  {
    kanji: "追",
    readings: { on: ["ツイ"], kun: ["お(う)"] },
    words: [
      { word: "追う",   reading: "おう",       sentence: "犬がボールを○○。",                  printable: true },
      { word: "追いかけ", reading: "おいかける", sentence: "公園でねこを○○る。",              printable: true },
      { word: "追加",   reading: "ついか",     sentence: "おかわりの○○をたのむ。",            printable: true },
      { word: "追究",   reading: "ついきゅう", sentence: "正しい答えを○○する。",              printable: true },
      { word: "追放",   reading: "ついほう",   sentence: "古い話の○○のばめん。",              printable: true },
      { word: "追記",   reading: "ついき",     sentence: "本に○○がのる。",                    printable: true }
    ]
  },
  {
    kanji: "定",
    readings: { on: ["テイ", "ジョウ"], kun: ["さだ(める)", "さだ(まる)"] },
    words: [
      { word: "定める", reading: "さだめる",   sentence: "話し合いでルールを○○。",            printable: true },
      { word: "定まる", reading: "さだまる",   sentence: "目ひょうが○○。",                    printable: true },
      { word: "予定",   reading: "よてい",     sentence: "明日の○○を書く。",                  printable: true },
      { word: "決定",   reading: "けってい",   sentence: "クラスの代表が○○した。",            printable: true },
      { word: "定休",   reading: "ていきゅう", sentence: "今日は店の○○日だ。",                printable: true },
      { word: "定食",   reading: "ていしょく", sentence: "店で安い○○を食べる。",              printable: true }
    ]
  },
  {
    kanji: "庭",
    readings: { on: ["テイ"], kun: ["にわ"] },
    words: [
      { word: "庭",     reading: "にわ",       sentence: "家の○○に花がさく。",                printable: true },
      { word: "校庭",   reading: "こうてい",   sentence: "広い○○で体そうをする。",            printable: true },
      { word: "家庭",   reading: "かてい",     sentence: "○○科で料理を作る。",                printable: true },
      { word: "庭園",   reading: "ていえん",   sentence: "古い○○をめぐる。",                  printable: true },
      { word: "中庭",   reading: "なかにわ",   sentence: "○○に池がある。",                    printable: true },
      { word: "庭木",   reading: "にわき",     sentence: "○○の手入れをする。",                printable: true }
    ]
  },
  {
    kanji: "笛",
    readings: { on: ["テキ"], kun: ["ふえ"] },
    words: [
      { word: "笛",     reading: "ふえ",       sentence: "音楽の時間に○○をふく。",            printable: true },
      { word: "口笛",   reading: "くちぶえ",   sentence: "兄が○○をふく。",                    printable: true },
      { word: "草笛",   reading: "くさぶえ",   sentence: "公園で○○を作る。",                  printable: true },
      { word: "汽笛",   reading: "きてき",     sentence: "船の○○が鳴る。",                    printable: true },
      { word: "笛の音", reading: "ふえのね",   sentence: "山に○○がひびく。",                  printable: true },
      { word: "横笛",   reading: "よこぶえ",   sentence: "祭りで○○がきこえる。",              printable: true }
    ]
  },
  {
    kanji: "鉄",
    readings: { on: ["テツ"], kun: [] },
    words: [
      { word: "鉄",     reading: "てつ",       sentence: "強い○○のはこ。",                    printable: true },
      { word: "鉄道",   reading: "てつどう",   sentence: "新しい○○ができる。",                printable: true },
      { word: "地下鉄", reading: "ちかてつ",   sentence: "町で○○に乗る。",                    printable: true },
      { word: "鉄ぼう", reading: "てつぼう",   sentence: "校庭の○○で遊ぶ。",                  printable: true },
      { word: "鉄板",   reading: "てっぱん",   sentence: "○○で肉をやく。",                    printable: true },
      { word: "私鉄",   reading: "してつ",     sentence: "学校まで○○で行く。",                printable: true }
    ]
  },
  {
    kanji: "転",
    readings: { on: ["テン"], kun: ["ころ(がる)", "ころ(ぶ)", "ころ(げる)", "ころ(がす)"] },
    words: [
      { word: "転ぶ",   reading: "ころぶ",     sentence: "雪道で○○。",                        printable: true },
      { word: "転がる", reading: "ころがる",   sentence: "ボールが○○。",                      printable: true },
      { word: "回転",   reading: "かいてん",   sentence: "コマが○○する。",                    printable: true },
      { word: "運転",   reading: "うんてん",   sentence: "父が小さな車を○○する。",            printable: true },
      { word: "転校",   reading: "てんこう",   sentence: "なかよしの友だちが○○する。",        printable: true },
      { word: "転入",   reading: "てんにゅう", sentence: "○○生をかんげいする。",              printable: true }
    ]
  },
  {
    kanji: "都",
    readings: { on: ["ト", "ツ"], kun: ["みやこ"] },
    words: [
      { word: "都",     reading: "みやこ",     sentence: "京の○○へ行く。",                    printable: true },
      { word: "都会",   reading: "とかい",     sentence: "○○に住むおじさん。",                printable: true },
      { word: "都市",   reading: "とし",       sentence: "大きな○○の地図。",                  printable: true },
      { word: "都心",   reading: "としん",     sentence: "電車で○○まで出かける。",            printable: true },
      { word: "都合",   reading: "つごう",     sentence: "明日の○○を聞く。",                  printable: true },
      { word: "首都",   reading: "しゅと",     sentence: "国の○○を覚える。",                  printable: true }
    ]
  },
  {
    kanji: "度",
    readings: { on: ["ド", "ト", "タク"], kun: ["たび"] },
    words: [
      { word: "度",     reading: "たび",       sentence: "○○かさなる失ぱい。",                printable: true },
      { word: "今度",   reading: "こんど",     sentence: "○○の日曜に行く。",                  printable: true },
      { word: "温度",   reading: "おんど",     sentence: "今のへやの○○を下げる。",            printable: true },
      { word: "速度",   reading: "そくど",     sentence: "車の走る○○が上がる。",              printable: true },
      { word: "一度",   reading: "いちど",     sentence: "もう○○読んでみる。",                printable: true },
      { word: "三度",   reading: "さんど",     sentence: "一日○○ごはんを食べる。",            printable: true }
    ]
  },
  {
    kanji: "投",
    readings: { on: ["トウ"], kun: ["な(げる)"] },
    words: [
      { word: "投げる", reading: "なげる",     sentence: "ボールを遠くに○○。",                printable: true },
      { word: "投手",   reading: "とうしゅ",   sentence: "野球の○○がボールを持つ。",          printable: true },
      { word: "投書",   reading: "とうしょ",   sentence: "新聞に○○する。",                    printable: true },
      { word: "投入",   reading: "とうにゅう", sentence: "ボールを箱に○○する。",              printable: true },
      { word: "投票",   reading: "とうひょう", sentence: "クラスで○○する。",                  printable: true },
      { word: "投げ手", reading: "なげて",     sentence: "じゅう道の○○を習う。",              printable: true }
    ]
  },
  {
    kanji: "豆",
    readings: { on: ["トウ", "ズ"], kun: ["まめ"] },
    words: [
      { word: "豆",     reading: "まめ",       sentence: "お正月に○○を食べる。",              printable: true },
      { word: "大豆",   reading: "だいず",     sentence: "○○で豆ふを作る。",                  printable: true },
      { word: "小豆",   reading: "あずき",     sentence: "○○のあんを作る。",                  printable: true },
      { word: "豆まき", reading: "まめまき",   sentence: "節分に○○をする。",                  printable: true },
      { word: "豆ふ",   reading: "とうふ",     sentence: "夕食に○○を食べる。",                printable: true },
      { word: "豆電球", reading: "まめでんきゅう", sentence: "工作で○○を使う。",              printable: true }
    ]
  },
  {
    kanji: "島",
    readings: { on: ["トウ"], kun: ["しま"] },
    words: [
      { word: "島",     reading: "しま",       sentence: "遠くに小さな○○が見える。",          printable: true },
      { word: "島国",   reading: "しまぐに",   sentence: "日本は○○だ。",                      printable: true },
      { word: "半島",   reading: "はんとう",   sentence: "地図で○○をさがす。",                printable: true },
      { word: "島民",   reading: "とうみん",   sentence: "○○の生活を学ぶ。",                  printable: true },
      { word: "無人島", reading: "むじんとう", sentence: "物語の○○の話。",                    printable: true },
      { word: "列島",   reading: "れっとう",   sentence: "日本○○の地図。",                    printable: true }
    ]
  },
  {
    kanji: "湯",
    readings: { on: ["トウ"], kun: ["ゆ"] },
    words: [
      { word: "湯",     reading: "ゆ",         sentence: "やかんで○○をわかす。",              printable: true },
      { word: "湯気",   reading: "ゆげ",       sentence: "なべから○○が立つ。",                printable: true },
      { word: "茶の湯", reading: "ちゃのゆ",   sentence: "母が○○を習う。",                    printable: true },
      { word: "熱湯",   reading: "ねっとう",   sentence: "○○に気をつける。",                  printable: true },
      { word: "湯水",   reading: "ゆみず",     sentence: "お金を○○のように使う。",            printable: true },
      { word: "湯のみ", reading: "ゆのみ",     sentence: "○○でお茶を飲む。",                  printable: true }
    ]
  },
  {
    kanji: "登",
    readings: { on: ["トウ", "ト"], kun: ["のぼ(る)"] },
    words: [
      { word: "登る",   reading: "のぼる",     sentence: "近くの山に○○。",                    printable: true },
      { word: "登山",   reading: "とざん",     sentence: "夏休みに○○する。",                  printable: true },
      { word: "登校",   reading: "とうこう",   sentence: "毎朝歩いて○○する。",                printable: true },
      { word: "登場",   reading: "とうじょう", sentence: "新しい人ぶつの○○。",                printable: true },
      { word: "木登り", reading: "きのぼり",   sentence: "大きな木で○○をする。",              printable: true },
      { word: "登り口", reading: "のぼりぐち", sentence: "山の○○に立つ。",                    printable: true }
    ]
  },
  {
    kanji: "等",
    readings: { on: ["トウ"], kun: ["ひと(しい)", "など"] },
    words: [
      { word: "等しい", reading: "ひとしい",   sentence: "二つの長さは○○。",                  printable: true },
      { word: "等",     reading: "など",       sentence: "本やノート○○を買う。",              printable: true },
      { word: "平等",   reading: "びょうどう", sentence: "クラスでは○○に分ける。",            printable: true },
      { word: "上等",   reading: "じょうとう", sentence: "○○な布を使う。",                    printable: true },
      { word: "下等",   reading: "かとう",     sentence: "○○な物にも価ちはある。",            printable: true },
      { word: "等分",   reading: "とうぶん",   sentence: "ケーキを六○○にする。",              printable: true }
    ]
  },
  {
    kanji: "動",
    readings: { on: ["ドウ"], kun: ["うご(く)", "うご(かす)"] },
    words: [
      { word: "動く",   reading: "うごく",     sentence: "重い箱が○○。",                      printable: true },
      { word: "動かす", reading: "うごかす",   sentence: "つくえを○○。",                      printable: true },
      { word: "動物",   reading: "どうぶつ",   sentence: "○○園に行く。",                      printable: true },
      { word: "運動",   reading: "うんどう",   sentence: "朝から○○をする。",                  printable: true },
      { word: "活動",   reading: "かつどう",   sentence: "クラブの○○に出る。",                printable: true },
      { word: "感動",   reading: "かんどう",   sentence: "音楽会に○○する。",                  printable: true }
    ]
  },
  {
    kanji: "童",
    readings: { on: ["ドウ"], kun: ["わらべ"] },
    words: [
      { word: "童話",   reading: "どうわ",     sentence: "図書室で○○の本を借りる。",          printable: true },
      { word: "童詩",   reading: "どうし",     sentence: "国語のノートに○○を書く。",          printable: true },
      { word: "児童",   reading: "じどう",     sentence: "○○館で本を読む。",                  printable: true },
      { word: "童子",   reading: "どうじ",     sentence: "古い絵に○○がいる。",                printable: true },
      { word: "童心",   reading: "どうしん",   sentence: "○○にかえって遊ぶ。",                printable: true },
      { word: "学童",   reading: "がくどう",   sentence: "兄は○○ほいくに通う。",              printable: true }
    ]
  },
  {
    kanji: "農",
    readings: { on: ["ノウ"], kun: [] },
    words: [
      { word: "農業",   reading: "のうぎょう", sentence: "村の○○がさかんだ。",                printable: true },
      { word: "農家",   reading: "のうか",     sentence: "近くの○○で野さいを買う。",          printable: true },
      { word: "農地",   reading: "のうち",     sentence: "広い○○を歩く。",                    printable: true },
      { word: "農村",   reading: "のうそん",   sentence: "夏休みに祖父の○○を訪ねる。",        printable: true },
      { word: "農作物", reading: "のうさくぶつ", sentence: "畑の○○がそだつ。",                printable: true },
      { word: "農夫",   reading: "のうふ",     sentence: "○○が畑をたがやす。",                printable: true }
    ]
  },
  {
    kanji: "波",
    readings: { on: ["ハ"], kun: ["なみ"] },
    words: [
      { word: "波",     reading: "なみ",       sentence: "海の○○がきらきら光る。",            printable: true },
      { word: "大波",   reading: "おおなみ",   sentence: "夕方○○が立つ。",                    printable: true },
      { word: "小波",   reading: "さざなみ",   sentence: "池の○○が広がる。",                  printable: true },
      { word: "波長",   reading: "はちょう",   sentence: "音の○○を学ぶ。",                    printable: true },
      { word: "電波",   reading: "でんぱ",     sentence: "山では○○が弱い。",                  printable: true },
      { word: "波音",   reading: "なみおと",   sentence: "○○を聞きながら歩く。",              printable: true }
    ]
  },
  {
    kanji: "配",
    readings: { on: ["ハイ"], kun: ["くば(る)"] },
    words: [
      { word: "配る",   reading: "くばる",     sentence: "プリントをクラスに○○。",            printable: true },
      { word: "配たつ", reading: "はいたつ",   sentence: "新聞の○○を手つだう。",              printable: true },
      { word: "配電",   reading: "はいでん",   sentence: "○○の話を聞く。",                    printable: true },
      { word: "心配",   reading: "しんぱい",   sentence: "病気の弟のことが○○だ。",            printable: true },
      { word: "気配",   reading: "けはい",     sentence: "人の○○がする。",                    printable: true },
      { word: "配水",   reading: "はいすい",   sentence: "町の○○の話を聞く。",                printable: true }
    ]
  },
  {
    kanji: "倍",
    readings: { on: ["バイ"], kun: [] },
    words: [
      { word: "倍",     reading: "ばい",       sentence: "兄は弟の○○の年れいだ。",            printable: true },
      { word: "二倍",   reading: "にばい",     sentence: "数を○○にする。",                    printable: true },
      { word: "三倍",   reading: "さんばい",   sentence: "ご飯を○○食べる。",                  printable: true },
      { word: "倍数",   reading: "ばいすう",   sentence: "三の○○を答える。",                  printable: true },
      { word: "人一倍", reading: "ひといちばい", sentence: "○○ねっ心に練習する。",            printable: true },
      { word: "倍音",   reading: "ばいおん",   sentence: "音楽の時間に○○を学ぶ。",            printable: true }
    ]
  },
  {
    kanji: "箱",
    readings: { on: [], kun: ["はこ"] },
    words: [
      { word: "箱",     reading: "はこ",       sentence: "大きな○○をひらく。",                printable: true },
      { word: "本箱",   reading: "ほんばこ",   sentence: "○○に本をならべる。",                printable: true },
      { word: "重箱",   reading: "じゅうばこ", sentence: "正月に○○を出す。",                  printable: true },
      { word: "ごみ箱", reading: "ごみばこ",   sentence: "教室の○○をかたづける。",            printable: true },
      { word: "筆箱",   reading: "ふでばこ",   sentence: "○○にえん筆を入れる。",              printable: true },
      { word: "箱根",   reading: "はこね",     sentence: "○○へ旅行に行く。",                  printable: true }
    ]
  },
  {
    kanji: "畑",
    readings: { on: [], kun: ["はた", "はたけ"] },
    words: [
      { word: "畑",     reading: "はたけ",     sentence: "野さいの○○を耕す。",                printable: true },
      { word: "麦畑",   reading: "むぎばたけ", sentence: "風が○○をゆらす。",                  printable: true },
      { word: "畑仕事", reading: "はたしごと", sentence: "祖父は○○をしている。",              printable: true },
      { word: "花畑",   reading: "はなばたけ", sentence: "公園の○○がきれいだ。",              printable: true },
      { word: "茶畑",   reading: "ちゃばたけ", sentence: "山に広い○○がある。",                printable: true },
      { word: "田畑",   reading: "たはた",     sentence: "村の○○を歩く。",                    printable: true }
    ]
  },
  {
    kanji: "発",
    readings: { on: ["ハツ", "ホツ"], kun: [] },
    words: [
      { word: "発見",   reading: "はっけん",   sentence: "新しい星を○○する。",                printable: true },
      { word: "発表",   reading: "はっぴょう", sentence: "クラスで研究を○○する。",            printable: true },
      { word: "出発",   reading: "しゅっぱつ", sentence: "朝早く家を○○する。",                printable: true },
      { word: "発電",   reading: "はつでん",   sentence: "風の力で○○する。",                  printable: true },
      { word: "発音",   reading: "はつおん",   sentence: "新しい言葉の○○。",                  printable: true },
      { word: "発車",   reading: "はっしゃ",   sentence: "電車が○○する。",                    printable: true }
    ]
  },
  {
    kanji: "反",
    readings: { on: ["ハン", "ホン", "タン"], kun: ["そ(る)", "そ(らす)"] },
    words: [
      { word: "反る",   reading: "そる",       sentence: "木の板が○○。",                      printable: true },
      { word: "反対",   reading: "はんたい",   sentence: "○○の意見を聞く。",                  printable: true },
      { word: "反発",   reading: "はんぱつ",   sentence: "強い○○が起こる。",                  printable: true },
      { word: "反面",   reading: "はんめん",   sentence: "○○、よい点もある。",                printable: true },
      { word: "反省",   reading: "はんせい",   sentence: "今日の行いを○○する。",              printable: true },
      { word: "反転",   reading: "はんてん",   sentence: "車を○○させる。",                    printable: true }
    ]
  },
  {
    kanji: "坂",
    readings: { on: ["ハン"], kun: ["さか"] },
    words: [
      { word: "坂",     reading: "さか",       sentence: "学校の前は○○が多い。",              printable: true },
      { word: "下り坂", reading: "くだりざか", sentence: "○○を歩くのは楽だ。",                printable: true },
      { word: "上り坂", reading: "のぼりざか", sentence: "○○で息が切れる。",                  printable: true },
      { word: "急坂",   reading: "きゅうはん", sentence: "○○を自てん車で下る。",              printable: true },
      { word: "坂道",   reading: "さかみち",   sentence: "長い○○をのぼる。",                  printable: true },
      { word: "坂下",   reading: "さかした",   sentence: "○○の店で買い物する。",              printable: true }
    ]
  },
  {
    kanji: "板",
    readings: { on: ["ハン", "バン"], kun: ["いた"] },
    words: [
      { word: "板",     reading: "いた",       sentence: "工作で○○を切る。",                  printable: true },
      { word: "黒板",   reading: "こくばん",   sentence: "○○に答えを書く。",                  printable: true },
      { word: "板書",   reading: "ばんしょ",   sentence: "先生の○○を写す。",                  printable: true },
      { word: "鉄板",   reading: "てっぱん",   sentence: "○○で肉を焼く。",                    printable: true },
      { word: "まな板", reading: "まないた",   sentence: "○○で野さいを切る。",                printable: true },
      { word: "板の間", reading: "いたのま",   sentence: "○○ですもう取り。",                  printable: true }
    ]
  },
  {
    kanji: "皮",
    readings: { on: ["ヒ"], kun: ["かわ"] },
    words: [
      { word: "皮",     reading: "かわ",       sentence: "りんごの○○をむく。",                printable: true },
      { word: "毛皮",   reading: "けがわ",     sentence: "古い○○のぼうし。",                  printable: true },
      { word: "皮ふ",   reading: "ひふ",       sentence: "夏の日ざしで○○が赤くなる。",        printable: true },
      { word: "皮ひも", reading: "かわひも",   sentence: "○○のかばんを買う。",                printable: true },
      { word: "木の皮", reading: "きのかわ",   sentence: "○○がはがれている。",                printable: true },
      { word: "皮算用", reading: "かわざんよう", sentence: "とらぬ○○とおぼえる。",            printable: true }
    ]
  },
  {
    kanji: "悲",
    readings: { on: ["ヒ"], kun: ["かな(しい)", "かな(しむ)"] },
    words: [
      { word: "悲しい", reading: "かなしい",   sentence: "話の終わりが○○。",                  printable: true },
      { word: "悲しむ", reading: "かなしむ",   sentence: "犬の死を○○。",                      printable: true },
      { word: "悲鳴",   reading: "ひめい",     sentence: "暗やみで○○を上げる。",              printable: true },
      { word: "悲運",   reading: "ひうん",     sentence: "○○の物語を読む。",                  printable: true },
      { word: "悲しみ", reading: "かなしみ",   sentence: "心の○○をのり越える。",              printable: true },
      { word: "悲ふん", reading: "ひふん",     sentence: "話を聞いて○○する。",                printable: true }
    ]
  },
  {
    kanji: "美",
    readings: { on: ["ビ"], kun: ["うつく(しい)"] },
    words: [
      { word: "美しい", reading: "うつくしい", sentence: "夕やけが○○。",                      printable: true },
      { word: "美人",   reading: "びじん",     sentence: "母は○○だと言われる。",              printable: true },
      { word: "美術",   reading: "びじゅつ",   sentence: "○○館で絵を見る。",                  printable: true },
      { word: "美化",   reading: "びか",       sentence: "町の○○に協力する。",                printable: true },
      { word: "美声",   reading: "びせい",     sentence: "鳥の○○がきこえる。",                printable: true },
      { word: "美味",   reading: "びみ",       sentence: "○○な料理を食べる。",                printable: true }
    ]
  },
  {
    kanji: "鼻",
    readings: { on: ["ビ"], kun: ["はな"] },
    words: [
      { word: "鼻",     reading: "はな",       sentence: "風じゃで○○が出る。",                printable: true },
      { word: "鼻血",   reading: "はなぢ",     sentence: "急に走った後○○が出た。",            printable: true },
      { word: "鼻歌",   reading: "はなうた",   sentence: "兄が楽しく○○を歌う。",              printable: true },
      { word: "鼻先",   reading: "はなさき",   sentence: "犬の○○がぬれている。",              printable: true },
      { word: "目と鼻", reading: "めとはな",   sentence: "学校はうちと○○の先だ。",            printable: true },
      { word: "耳鼻科", reading: "じびか",     sentence: "○○の医院に行く。",                  printable: true }
    ]
  },
  {
    kanji: "筆",
    readings: { on: ["ヒツ"], kun: ["ふで"] },
    words: [
      { word: "筆",     reading: "ふで",       sentence: "習字で○○を持つ。",                  printable: true },
      { word: "毛筆",   reading: "もうひつ",   sentence: "○○で自分の名前を書く。",            printable: true },
      { word: "筆者",   reading: "ひっしゃ",   sentence: "本の○○の話を読む。",                printable: true },
      { word: "筆記",   reading: "ひっき",     sentence: "○○用ぐを持つ。",                    printable: true },
      { word: "万年筆", reading: "まんねんひつ", sentence: "○○で手紙を書く。",                printable: true },
      { word: "鉛筆",   reading: "えんぴつ",   sentence: "新しい○○をけずる。",                printable: true }
    ]
  },
  {
    kanji: "氷",
    readings: { on: ["ヒョウ"], kun: ["こおり", "ひ"] },
    words: [
      { word: "氷",     reading: "こおり",     sentence: "コップに○○を入れる。",              printable: true },
      { word: "かき氷", reading: "かきごおり", sentence: "夏に○○を食べる。",                  printable: true },
      { word: "氷水",   reading: "こおりみず", sentence: "つめたい○○を飲む。",                printable: true },
      { word: "氷山",   reading: "ひょうざん", sentence: "本で○○を見る。",                    printable: true },
      { word: "流氷",   reading: "りゅうひょう", sentence: "北の海に○○が来る。",              printable: true },
      { word: "氷点",   reading: "ひょうてん", sentence: "気温が○○下になる。",                printable: true }
    ]
  },
  {
    kanji: "表",
    readings: { on: ["ヒョウ"], kun: ["おもて", "あらわ(す)", "あらわ(れる)"] },
    words: [
      { word: "表",     reading: "おもて",     sentence: "ノートの○○に名前を書く。",          printable: true },
      { word: "表す",   reading: "あらわす",   sentence: "気もちを言葉に○○。",                printable: true },
      { word: "発表",   reading: "はっぴょう", sentence: "学んだことを○○する。",              printable: true },
      { word: "表面",   reading: "ひょうめん", sentence: "池の○○がきらめき光る。",            printable: true },
      { word: "代表",   reading: "だいひょう", sentence: "クラスの○○にえらばれる。",          printable: true },
      { word: "時こく表", reading: "じこくひょう", sentence: "駅の○○を見る。",              printable: true }
    ]
  },
  {
    kanji: "秒",
    readings: { on: ["ビョウ"], kun: [] },
    words: [
      { word: "秒",     reading: "びょう",     sentence: "あと十○○で始まる。",                printable: true },
      { word: "秒読み", reading: "びょうよみ", sentence: "○○を始める。",                      printable: true },
      { word: "秒数",   reading: "びょうすう", sentence: "走った○○をはかる。",                printable: true },
      { word: "秒速",   reading: "びょうそく", sentence: "今日の風の○○を調べる。",            printable: true },
      { word: "秒針",   reading: "びょうしん", sentence: "うで時計の○○を見つめる。",          printable: true },
      { word: "数秒",   reading: "すうびょう", sentence: "○○のずれが出る。",                  printable: true }
    ]
  },
  {
    kanji: "病",
    readings: { on: ["ビョウ", "ヘイ"], kun: ["や(む)", "やまい"] },
    words: [
      { word: "病気",   reading: "びょうき",   sentence: "母が○○で休む。",                    printable: true },
      { word: "病院",   reading: "びょういん", sentence: "近くの○○へ行く。",                  printable: true },
      { word: "病室",   reading: "びょうしつ", sentence: "○○で本を読む。",                    printable: true },
      { word: "病人",   reading: "びょうにん", sentence: "○○を見まう。",                      printable: true },
      { word: "持病",   reading: "じびょう",   sentence: "祖父の○○を心配する。",              printable: true },
      { word: "看病",   reading: "かんびょう", sentence: "弟を○○する。",                      printable: true }
    ]
  },
  {
    kanji: "品",
    readings: { on: ["ヒン", "ホン"], kun: ["しな"] },
    words: [
      { word: "品",     reading: "しな",       sentence: "新しい○○が店先にならぶ。",          printable: true },
      { word: "品物",   reading: "しなもの",   sentence: "店先の○○をたしかめる。",            printable: true },
      { word: "作品",   reading: "さくひん",   sentence: "図工の○○を見せる。",                printable: true },
      { word: "食品",   reading: "しょくひん", sentence: "○○売り場で買う。",                  printable: true },
      { word: "上品",   reading: "じょうひん", sentence: "○○な話し方をする。",                printable: true },
      { word: "品名",   reading: "ひんめい",   sentence: "○○をたしかめる。",                  printable: true }
    ]
  },
  {
    kanji: "負",
    readings: { on: ["フ"], kun: ["ま(ける)", "ま(かす)", "お(う)"] },
    words: [
      { word: "負ける", reading: "まける",     sentence: "試合に○○。",                        printable: true },
      { word: "負う",   reading: "おう",       sentence: "せ中に荷を○○。",                    printable: true },
      { word: "勝負",   reading: "しょうぶ",   sentence: "公平な○○をする。",                  printable: true },
      { word: "負担",   reading: "ふたん",     sentence: "○○がかからないように。",            printable: true },
      { word: "負け犬", reading: "まけいぬ",   sentence: "ここで○○にはならない。",            printable: true },
      { word: "負数",   reading: "ふすう",     sentence: "○○の意味を学ぶ。",                  printable: true }
    ]
  },
  {
    kanji: "部",
    readings: { on: ["ブ"], kun: [] },
    words: [
      { word: "部",     reading: "ぶ",         sentence: "新聞○○で活動する。",                printable: true },
      { word: "部屋",   reading: "へや",       sentence: "○○をかたづける。",                  printable: true },
      { word: "全部",   reading: "ぜんぶ",     sentence: "今日のおかずを○○食べる。",          printable: true },
      { word: "一部",   reading: "いちぶ",     sentence: "図かんの○○を読む。",                printable: true },
      { word: "部分",   reading: "ぶぶん",     sentence: "問だいの一○○をとく。",              printable: true },
      { word: "部品",   reading: "ぶひん",     sentence: "車の○○をかえる。",                  printable: true }
    ]
  },
  {
    kanji: "服",
    readings: { on: ["フク"], kun: [] },
    words: [
      { word: "服",     reading: "ふく",       sentence: "新しい○○を着る。",                  printable: true },
      { word: "和服",   reading: "わふく",     sentence: "正月に○○を着る。",                  printable: true },
      { word: "洋服",   reading: "ようふく",   sentence: "店で○○を選ぶ。",                    printable: true },
      { word: "制服",   reading: "せいふく",   sentence: "兄は○○で通学する。",                printable: true },
      { word: "服そう", reading: "ふくそう",   sentence: "明日の○○を考える。",                printable: true },
      { word: "私服",   reading: "しふく",     sentence: "今日は○○で出かける。",              printable: true }
    ]
  },
  {
    kanji: "福",
    readings: { on: ["フク"], kun: [] },
    words: [
      { word: "幸福",   reading: "こうふく",   sentence: "家族みんなで○○にくらす。",          printable: true },
      { word: "福引",   reading: "ふくびき",   sentence: "商店がいの○○に出る。",              printable: true },
      { word: "福島",   reading: "ふくしま",   sentence: "夏休みに○○まで旅行する。",          printable: true },
      { word: "祝福",   reading: "しゅくふく", sentence: "兄を○○する。",                      printable: true },
      { word: "福音",   reading: "ふくいん",   sentence: "古い○○の話を聞く。",                printable: true },
      { word: "大福",   reading: "だいふく",   sentence: "三時のおやつに○○を食べる。",        printable: true }
    ]
  },
  {
    kanji: "物",
    readings: { on: ["ブツ", "モツ"], kun: ["もの"] },
    words: [
      { word: "物",     reading: "もの",       sentence: "大きな○○を二人で運ぶ。",            printable: true },
      { word: "動物",   reading: "どうぶつ",   sentence: "○○園で遊ぶ。",                      printable: true },
      { word: "食べ物", reading: "たべもの",   sentence: "好きな○○は何ですか。",              printable: true },
      { word: "品物",   reading: "しなもの",   sentence: "店の○○を見る。",                    printable: true },
      { word: "見物",   reading: "けんぶつ",   sentence: "祭りを○○する。",                    printable: true },
      { word: "荷物",   reading: "にもつ",     sentence: "重い○○を運ぶ。",                    printable: true }
    ]
  },
  {
    kanji: "平",
    readings: { on: ["ヘイ", "ビョウ"], kun: ["たい(ら)", "ひら"] },
    words: [
      { word: "平ら",   reading: "たいら",     sentence: "○○な地面に立つ。",                  printable: true },
      { word: "平和",   reading: "へいわ",     sentence: "○○の大切さを学ぶ。",                printable: true },
      { word: "平日",   reading: "へいじつ",   sentence: "○○は学校がある。",                  printable: true },
      { word: "平等",   reading: "びょうどう", sentence: "○○に物を分ける。",                  printable: true },
      { word: "平気",   reading: "へいき",     sentence: "走っても○○な顔だ。",                printable: true },
      { word: "平行",   reading: "へいこう",   sentence: "二本の線を○○にひく。",              printable: true }
    ]
  },
  {
    kanji: "返",
    readings: { on: ["ヘン"], kun: ["かえ(す)", "かえ(る)"] },
    words: [
      { word: "返す",   reading: "かえす",     sentence: "図書館に本を○○。",                  printable: true },
      { word: "返る",   reading: "かえる",     sentence: "なくした物が○○。",                  printable: true },
      { word: "返事",   reading: "へんじ",     sentence: "大きな声で○○する。",                printable: true },
      { word: "返金",   reading: "へんきん",   sentence: "店の○○を受ける。",                  printable: true },
      { word: "見返り", reading: "みかえり",   sentence: "ふり○○る。",                        printable: true },
      { word: "返品",   reading: "へんぴん",   sentence: "店に○○する。",                      printable: true }
    ]
  },
  {
    kanji: "勉",
    readings: { on: ["ベン"], kun: [] },
    words: [
      { word: "勉強",   reading: "べんきょう", sentence: "家で漢字の○○を毎日する。",          printable: true },
      { word: "勉学",   reading: "べんがく",   sentence: "兄は○○にはげむ。",                  printable: true },
      { word: "勤勉",   reading: "きんべん",   sentence: "○○な人だとほめられる。",            printable: true },
      { word: "自勉",   reading: "じべん",     sentence: "家で○○する時間。",                  printable: true },
      { word: "勉強会", reading: "べんきょうかい", sentence: "クラスで○○をひらく。",          printable: true },
      { word: "勉強家", reading: "べんきょうか", sentence: "兄は○○だと言われる。",            printable: true }
    ]
  },
  {
    kanji: "放",
    readings: { on: ["ホウ"], kun: ["はな(す)", "はな(つ)", "はな(れる)", "ほう(る)"] },
    words: [
      { word: "放す",   reading: "はなす",     sentence: "つかまえた虫を○○。",                printable: true },
      { word: "放つ",   reading: "はなつ",     sentence: "鳥を空に○○。",                      printable: true },
      { word: "放送",   reading: "ほうそう",   sentence: "校内で○○する。",                    printable: true },
      { word: "放課後", reading: "ほうかご",   sentence: "○○に友だちと遊ぶ。",                printable: true },
      { word: "開放",   reading: "かいほう",   sentence: "校庭を○○する。",                    printable: true },
      { word: "放出",   reading: "ほうしゅつ", sentence: "古い物を○○する。",                  printable: true }
    ]
  },
  {
    kanji: "味",
    readings: { on: ["ミ"], kun: ["あじ", "あじ(わう)"] },
    words: [
      { word: "味",     reading: "あじ",       sentence: "この料理の○○がよい。",              printable: true },
      { word: "味わう", reading: "あじわう",   sentence: "ゆっくり○○。",                      printable: true },
      { word: "意味",   reading: "いみ",       sentence: "言葉の○○を調べる。",                printable: true },
      { word: "味方",   reading: "みかた",     sentence: "弟は強い○○だ。",                    printable: true },
      { word: "味見",   reading: "あじみ",     sentence: "母が料理を○○する。",                printable: true },
      { word: "趣味",   reading: "しゅみ",     sentence: "ぼくの○○は読書だ。",                printable: true }
    ]
  },
  {
    kanji: "命",
    readings: { on: ["メイ", "ミョウ"], kun: ["いのち"] },
    words: [
      { word: "命",     reading: "いのち",     sentence: "○○を大切にする。",                  printable: true },
      { word: "命令",   reading: "めいれい",   sentence: "犬に○○する。",                      printable: true },
      { word: "生命",   reading: "せいめい",   sentence: "海の○○を学ぶ。",                    printable: true },
      { word: "運命",   reading: "うんめい",   sentence: "古い物語の○○を読む。",              printable: true },
      { word: "命中",   reading: "めいちゅう", sentence: "矢が的に○○。",                      printable: true },
      { word: "人命",   reading: "じんめい",   sentence: "○○きゅう助の話を聞く。",            printable: true }
    ]
  },
  {
    kanji: "面",
    readings: { on: ["メン", "ベン"], kun: ["おも", "おもて", "つら"] },
    words: [
      { word: "面",     reading: "めん",       sentence: "問だいのこの○○を考える。",          printable: true },
      { word: "顔面",   reading: "がんめん",   sentence: "ボールが○○に当たる。",              printable: true },
      { word: "場面",   reading: "ばめん",     sentence: "物語の○○を絵にする。",              printable: true },
      { word: "海面",   reading: "かいめん",   sentence: "朝の○○がきらきら光る。",            printable: true },
      { word: "面会",   reading: "めんかい",   sentence: "病院で○○する。",                    printable: true },
      { word: "面じ",   reading: "めんじ",     sentence: "話の○○を聞く。",                    printable: true }
    ]
  },
  {
    kanji: "問",
    readings: { on: ["モン"], kun: ["と(う)", "と(い)", "とん"] },
    words: [
      { word: "問う",   reading: "とう",       sentence: "やくわりを○○。",                    printable: true },
      { word: "問い",   reading: "とい",       sentence: "先生の○○に答える。",                printable: true },
      { word: "問題",   reading: "もんだい",   sentence: "算数の○○を一つとく。",              printable: true },
      { word: "問答",   reading: "もんどう",   sentence: "教室でみんなで○○する。",            printable: true },
      { word: "学問",   reading: "がくもん",   sentence: "新しい○○にふれる。",                printable: true },
      { word: "質問",   reading: "しつもん",   sentence: "先生にひとつ○○する。",              printable: true }
    ]
  },
  {
    kanji: "役",
    readings: { on: ["ヤク", "エキ"], kun: [] },
    words: [
      { word: "役",     reading: "やく",       sentence: "げきの○○を決める。",                printable: true },
      { word: "役目",   reading: "やくめ",     sentence: "自分の○○をはたす。",                printable: true },
      { word: "役所",   reading: "やくしょ",   sentence: "町の○○に行く。",                    printable: true },
      { word: "役立つ", reading: "やくだつ",   sentence: "本で学んだ事が○○。",                printable: true },
      { word: "主役",   reading: "しゅやく",   sentence: "げきの○○をする。",                  printable: true },
      { word: "現役",   reading: "げんえき",   sentence: "○○の選手の話を聞く。",              printable: true }
    ]
  },
  {
    kanji: "薬",
    readings: { on: ["ヤク"], kun: ["くすり"] },
    words: [
      { word: "薬",     reading: "くすり",     sentence: "ねつで○○を飲む。",                  printable: true },
      { word: "薬局",   reading: "やっきょく", sentence: "○○でかぜぐすりを買う。",            printable: true },
      { word: "薬草",   reading: "やくそう",   sentence: "山で○○をとる。",                    printable: true },
      { word: "薬指",   reading: "くすりゆび", sentence: "○○にゆびわをつける。",              printable: true },
      { word: "薬学",   reading: "やくがく",   sentence: "兄が大学で○○を学ぶ。",              printable: true },
      { word: "新薬",   reading: "しんやく",   sentence: "○○の話が新聞にのる。",              printable: true }
    ]
  },
  {
    kanji: "由",
    readings: { on: ["ユ", "ユウ", "ユイ"], kun: ["よし"] },
    words: [
      { word: "由",     reading: "よし",       sentence: "今日来られない○○を聞く。",          printable: true },
      { word: "理由",   reading: "りゆう",     sentence: "おくれた○○を話す。",                printable: true },
      { word: "自由",   reading: "じゆう",     sentence: "休み時間は○○だ。",                  printable: true },
      { word: "経由",   reading: "けいゆ",     sentence: "東京○○で行く。",                    printable: true },
      { word: "由来",   reading: "ゆらい",     sentence: "町名の○○を調べる。",                printable: true },
      { word: "由ちょ", reading: "ゆいしょ",   sentence: "古い○○のある寺。",                  printable: true }
    ]
  },
  {
    kanji: "油",
    readings: { on: ["ユ"], kun: ["あぶら"] },
    words: [
      { word: "油",     reading: "あぶら",     sentence: "なべに○○を入れる。",                printable: true },
      { word: "石油",   reading: "せきゆ",     sentence: "古い○○ストーブ。",                  printable: true },
      { word: "灯油",   reading: "とうゆ",     sentence: "○○をかいに行く。",                  printable: true },
      { word: "油絵",   reading: "あぶらえ",   sentence: "兄が○○をかく。",                    printable: true },
      { word: "原油",   reading: "げんゆ",     sentence: "○○のねだんが上がる。",              printable: true },
      { word: "油田",   reading: "ゆでん",     sentence: "○○の話をテレビで見る。",            printable: true }
    ]
  },
  {
    kanji: "有",
    readings: { on: ["ユウ", "ウ"], kun: ["あ(る)"] },
    words: [
      { word: "有る",   reading: "ある",       sentence: "本だなに本が○○。",                  printable: true },
      { word: "有名",   reading: "ゆうめい",   sentence: "○○な町を見学する。",                printable: true },
      { word: "有力",   reading: "ゆうりょく", sentence: "○○な意見が出る。",                  printable: true },
      { word: "所有",   reading: "しょゆう",   sentence: "畑の○○者を調べる。",                printable: true },
      { word: "有用",   reading: "ゆうよう",   sentence: "○○な道具を見つける。",              printable: true },
      { word: "有意義", reading: "ゆういぎ",   sentence: "○○な一日になる。",                  printable: true }
    ]
  },
  {
    kanji: "遊",
    readings: { on: ["ユウ", "ユ"], kun: ["あそ(ぶ)"] },
    words: [
      { word: "遊ぶ",   reading: "あそぶ",     sentence: "公園で○○。",                        printable: true },
      { word: "遊び",   reading: "あそび",     sentence: "新しい○○を考える。",                printable: true },
      { word: "外遊び", reading: "そとあそび", sentence: "休み時間は○○がよい。",              printable: true },
      { word: "遊園地", reading: "ゆうえんち", sentence: "家族で○○に行く。",                  printable: true },
      { word: "回遊",   reading: "かいゆう",   sentence: "魚が○○する。",                      printable: true },
      { word: "夢遊",   reading: "むゆう",     sentence: "○○病の話を聞く。",                  printable: true }
    ]
  },
  {
    kanji: "予",
    readings: { on: ["ヨ"], kun: [] },
    words: [
      { word: "予定",   reading: "よてい",     sentence: "明日の○○を手帳に書く。",            printable: true },
      { word: "予習",   reading: "よしゅう",   sentence: "明日のじゅ業の○○をする。",          printable: true },
      { word: "予感",   reading: "よかん",     sentence: "夕方に雨の○○がする。",              printable: true },
      { word: "予報",   reading: "よほう",     sentence: "朝の天気○○を見る。",                printable: true },
      { word: "予想",   reading: "よそう",     sentence: "週末の天気を○○する。",              printable: true },
      { word: "予言",   reading: "よげん",     sentence: "古い○○の話を読む。",                printable: true }
    ]
  },
  {
    kanji: "羊",
    readings: { on: ["ヨウ"], kun: ["ひつじ"] },
    words: [
      { word: "羊",     reading: "ひつじ",     sentence: "野原で○○が遊ぶ。",                  printable: true },
      { word: "羊毛",   reading: "ようもう",   sentence: "○○のセーターを着る。",              printable: true },
      { word: "子羊",   reading: "こひつじ",   sentence: "○○がぴょんとはねる。",              printable: true },
      { word: "羊かん", reading: "ようかん",   sentence: "お茶の時間に○○を食べる。",          printable: true },
      { word: "山羊",   reading: "やぎ",       sentence: "牧場で○○を見る。",                  printable: true },
      { word: "羊年",   reading: "ひつじどし", sentence: "今年は○○だ。",                      printable: true }
    ]
  },
  {
    kanji: "洋",
    readings: { on: ["ヨウ"], kun: [] },
    words: [
      { word: "洋服",   reading: "ようふく",   sentence: "店で○○を買う。",                    printable: true },
      { word: "洋食",   reading: "ようしょく", sentence: "今日のお昼は○○だ。",                printable: true },
      { word: "太平洋", reading: "たいへいよう", sentence: "地図で○○を見る。",                printable: true },
      { word: "西洋",   reading: "せいよう",   sentence: "○○の話を読む。",                    printable: true },
      { word: "東洋",   reading: "とうよう",   sentence: "○○の文化を学ぶ。",                  printable: true },
      { word: "洋風",   reading: "ようふう",   sentence: "○○のへやでくつろぐ。",              printable: true }
    ]
  },
  {
    kanji: "葉",
    readings: { on: ["ヨウ"], kun: ["は"] },
    words: [
      { word: "葉",     reading: "は",         sentence: "秋の○○が赤くなる。",                printable: true },
      { word: "葉っぱ", reading: "はっぱ",     sentence: "大きな○○を集める。",                printable: true },
      { word: "言葉",   reading: "ことば",     sentence: "やさしい○○で語りかける。",          printable: true },
      { word: "落ち葉", reading: "おちば",     sentence: "公園の○○をはく。",                  printable: true },
      { word: "葉書",   reading: "はがき",     sentence: "祖母に○○を出す。",                  printable: true },
      { word: "木の葉", reading: "このは",     sentence: "風で○○がゆれる。",                  printable: true }
    ]
  },
  {
    kanji: "陽",
    readings: { on: ["ヨウ"], kun: [] },
    words: [
      { word: "太陽",   reading: "たいよう",   sentence: "朝の○○がまぶしい。",                printable: true },
      { word: "陽気",   reading: "ようき",     sentence: "弟は○○な子だ。",                    printable: true },
      { word: "陽光",   reading: "ようこう",   sentence: "○○がへやに入る。",                  printable: true },
      { word: "夕陽",   reading: "ゆうひ",     sentence: "山に○○がしずむ。",                  printable: true },
      { word: "陰陽",   reading: "いんよう",   sentence: "古い話の○○。",                      printable: true },
      { word: "陽子",   reading: "ようこ",     sentence: "○○さんは元気な人だ。",              printable: true }
    ]
  },
  {
    kanji: "様",
    readings: { on: ["ヨウ"], kun: ["さま"] },
    words: [
      { word: "様",     reading: "さま",       sentence: "王○○のお話を読む。",                printable: true },
      { word: "様子",   reading: "ようす",     sentence: "弟の○○を見る。",                    printable: true },
      { word: "神様",   reading: "かみさま",   sentence: "○○にお礼をいう。",                  printable: true },
      { word: "王様",   reading: "おうさま",   sentence: "○○がしろにすむ。",                  printable: true },
      { word: "お客様", reading: "おきゃくさま", sentence: "○○を出むかえる。",                printable: true },
      { word: "同様",   reading: "どうよう",   sentence: "兄と○○の高さだ。",                  printable: true }
    ]
  },
  {
    kanji: "落",
    readings: { on: ["ラク"], kun: ["お(ちる)", "お(とす)"] },
    words: [
      { word: "落ちる", reading: "おちる",     sentence: "木から葉が○○。",                    printable: true },
      { word: "落とす", reading: "おとす",     sentence: "ハンカチを○○。",                    printable: true },
      { word: "落ち葉", reading: "おちば",     sentence: "公園で○○をたくさんはく。",          printable: true },
      { word: "落書き", reading: "らくがき",   sentence: "新しいノートに○○をしない。",        printable: true },
      { word: "下落",   reading: "げらく",     sentence: "ねだんの○○が起こる。",              printable: true },
      { word: "落第",   reading: "らくだい",   sentence: "○○しないようにする。",              printable: true }
    ]
  },
  {
    kanji: "流",
    readings: { on: ["リュウ", "ル"], kun: ["なが(れる)", "なが(す)"] },
    words: [
      { word: "流れる", reading: "ながれる",   sentence: "川の水が○○。",                      printable: true },
      { word: "流す",   reading: "ながす",     sentence: "せ中をていねいに○○。",              printable: true },
      { word: "電流",   reading: "でんりゅう", sentence: "りかで○○のしくみを学ぶ。",          printable: true },
      { word: "上流",   reading: "じょうりゅう", sentence: "川の○○へ行く。",                  printable: true },
      { word: "下流",   reading: "かりゅう",   sentence: "○○に大きな町がある。",              printable: true },
      { word: "流行",   reading: "りゅうこう", sentence: "新しい○○が広がる。",                printable: true }
    ]
  },
  {
    kanji: "旅",
    readings: { on: ["リョ"], kun: ["たび"] },
    words: [
      { word: "旅",     reading: "たび",       sentence: "夏休みに○○に出る。",                printable: true },
      { word: "旅行",   reading: "りょこう",   sentence: "家族で○○する。",                    printable: true },
      { word: "旅人",   reading: "たびびと",   sentence: "古い話に○○が出る。",                printable: true },
      { word: "旅館",   reading: "りょかん",   sentence: "温せんの○○にとまる。",              printable: true },
      { word: "船旅",   reading: "ふなたび",   sentence: "ゆっくりした○○を楽しむ。",          printable: true },
      { word: "一人旅", reading: "ひとりたび", sentence: "兄が○○に出る。",                    printable: true }
    ]
  },
  {
    kanji: "両",
    readings: { on: ["リョウ"], kun: [] },
    words: [
      { word: "両親",   reading: "りょうしん", sentence: "○○と公園に行く。",                  printable: true },
      { word: "両手",   reading: "りょうて",   sentence: "○○でボールを持つ。",                printable: true },
      { word: "両足",   reading: "りょうあし", sentence: "○○でジャンプする。",                printable: true },
      { word: "両方",   reading: "りょうほう", sentence: "右と左の○○を見る。",                printable: true },
      { word: "両面",   reading: "りょうめん", sentence: "紙の○○に書く。",                    printable: true },
      { word: "両側",   reading: "りょうがわ", sentence: "道の○○に木がある。",                printable: true }
    ]
  },
  {
    kanji: "緑",
    readings: { on: ["リョク", "ロク"], kun: ["みどり"] },
    words: [
      { word: "緑",     reading: "みどり",     sentence: "春の山は○○がきれいだ。",            printable: true },
      { word: "緑色",   reading: "みどりいろ", sentence: "新しい○○のぼうし。",                printable: true },
      { word: "緑茶",   reading: "りょくちゃ", sentence: "あつい○○を飲む。",                  printable: true },
      { word: "新緑",   reading: "しんりょく", sentence: "○○のきせつになる。",                printable: true },
      { word: "深緑",   reading: "ふかみどり", sentence: "森の○○が美しい。",                  printable: true },
      { word: "緑地",   reading: "りょくち",   sentence: "町の○○で遊ぶ。",                    printable: true }
    ]
  },
  {
    kanji: "礼",
    readings: { on: ["レイ", "ライ"], kun: [] },
    words: [
      { word: "礼",     reading: "れい",       sentence: "先生に○○をする。",                  printable: true },
      { word: "お礼",   reading: "おれい",     sentence: "おばに○○を言う。",                  printable: true },
      { word: "礼ぎ",   reading: "れいぎ",     sentence: "正しい○○を学ぶ。",                  printable: true },
      { word: "失礼",   reading: "しつれい",   sentence: "○○な言葉づかいに気をつける。",      printable: true },
      { word: "礼状",   reading: "れいじょう", sentence: "ていねいに祖母へ○○を出す。",        printable: true },
      { word: "答礼",   reading: "とうれい",   sentence: "校長先生が○○する。",                printable: true }
    ]
  },
  {
    kanji: "列",
    readings: { on: ["レツ"], kun: [] },
    words: [
      { word: "列",     reading: "れつ",       sentence: "校庭に○○を作る。",                  printable: true },
      { word: "行列",   reading: "ぎょうれつ", sentence: "店に○○ができる。",                  printable: true },
      { word: "列車",   reading: "れっしゃ",   sentence: "長い○○に乗る。",                    printable: true },
      { word: "整列",   reading: "せいれつ",   sentence: "音楽室で○○する。",                  printable: true },
      { word: "列島",   reading: "れっとう",   sentence: "日本○○の地図を見る。",              printable: true },
      { word: "前列",   reading: "ぜんれつ",   sentence: "写真の○○にならぶ。",                printable: true }
    ]
  },
  {
    kanji: "練",
    readings: { on: ["レン"], kun: ["ね(る)"] },
    words: [
      { word: "練る",   reading: "ねる",       sentence: "ねん土を○○。",                      printable: true },
      { word: "練習",   reading: "れんしゅう", sentence: "毎日漢字の○○をする。",              printable: true },
      { word: "練り物", reading: "ねりもの",   sentence: "おでんの○○を買う。",                printable: true },
      { word: "練成",   reading: "れんせい",   sentence: "○○に取り組む。",                    printable: true },
      { word: "練り歩く", reading: "ねりあるく", sentence: "祭りで町を○○。",                  printable: true },
      { word: "練度",   reading: "れんど",     sentence: "練習で○○を上げる。",                printable: true }
    ]
  },
  {
    kanji: "路",
    readings: { on: ["ロ"], kun: ["じ"] },
    words: [
      { word: "道路",   reading: "どうろ",     sentence: "町に新しい○○ができる。",            printable: true },
      { word: "通路",   reading: "つうろ",     sentence: "電車の○○を歩く。",                  printable: true },
      { word: "線路",   reading: "せんろ",     sentence: "○○ぞいに歩く。",                    printable: true },
      { word: "道のり", reading: "みちのり",   sentence: "長い○○を歩く。",                    printable: true },
      { word: "家路",   reading: "いえじ",     sentence: "夕方に○○につく。",                  printable: true },
      { word: "山路",   reading: "やまじ",     sentence: "ほそい○○を行く。",                  printable: true }
    ]
  },
  {
    kanji: "和",
    readings: { on: ["ワ", "オ"], kun: ["やわ(らぐ)", "なご(む)"] },
    words: [
      { word: "和",     reading: "わ",         sentence: "クラスの○○を大切にする。",          printable: true },
      { word: "平和",   reading: "へいわ",     sentence: "○○の大切さを学ぶ。",                printable: true },
      { word: "和食",   reading: "わしょく",   sentence: "今日の昼は○○だ。",                  printable: true },
      { word: "和室",   reading: "わしつ",     sentence: "畳の○○でゆっくりくつろぐ。",        printable: true },
      { word: "調和",   reading: "ちょうわ",   sentence: "絵の色の○○を考える。",              printable: true },
      { word: "和らぐ", reading: "やわらぐ",   sentence: "風が○○。",                          printable: true }
    ]
  }
];

window.KANJI_DATA_G3_META = {
  version: "1.0.0",
  generatedAt: "2026-05-27",
  generator: "claude-opus-4-7 (initial seed)",
  reviewedBy: null,
  schemaVersion: 1,
  status: "draft"
};
