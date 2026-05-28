// data/kanji-g1.js
// 小学1年生配当漢字 80字 × 6単語 = 480問
// 例文中の漢字は小1配当80字のみ、それ以外はひらがな。
// 正答(word)は4文字以下。sentence は10〜15文字程度、○○は2個固定。

window.KANJI_DATA_G1 = [
  {
    kanji: "一",
    readings: { on: ["イチ", "イツ"], kun: ["ひと", "ひと(つ)"] },
    words: [
      { word: "一つ",   reading: "ひとつ",     sentence: "りんごを○○ください。",        printable: true },
      { word: "一年",   reading: "いちねん",   sentence: "おとうとは○○生になる。",      printable: true },
      { word: "一日",   reading: "いちにち",   sentence: "○○のべんきょうがおわる。",    printable: true },
      { word: "一人",   reading: "ひとり",     sentence: "○○でしずかによむ。",          printable: true },
      { word: "一月",   reading: "いちがつ",   sentence: "○○はさむい月だ。",            printable: true },
      { word: "一回",   reading: "いっかい",   sentence: "○○だけためしてみる。",        printable: true }
    ]
  },
  {
    kanji: "右",
    readings: { on: ["ウ", "ユウ"], kun: ["みぎ"] },
    words: [
      { word: "右",     reading: "みぎ",       sentence: "○○の手をあげる。",            printable: true },
      { word: "右手",   reading: "みぎて",     sentence: "○○でペンをもつ。",            printable: true },
      { word: "右目",   reading: "みぎめ",     sentence: "○○がかゆい。",                printable: true },
      { word: "右足",   reading: "みぎあし",   sentence: "○○でボールをけった。",        printable: true },
      { word: "右上",   reading: "みぎうえ",   sentence: "本の○○にしるしをつけた。",    printable: true },
      { word: "左右",   reading: "さゆう",     sentence: "みちの○○をたしかめる。",      printable: true }
    ]
  },
  {
    kanji: "雨",
    readings: { on: ["ウ"], kun: ["あめ", "あま"] },
    words: [
      { word: "雨",     reading: "あめ",       sentence: "あさから○○がふる。",          printable: true },
      { word: "大雨",   reading: "おおあめ",   sentence: "夕がた○○になった。",          printable: true },
      { word: "小雨",   reading: "こさめ",     sentence: "まどそとで○○がふる。",        printable: true },
      { word: "雨水",   reading: "あまみず",   sentence: "はちに○○がたまる。",          printable: true },
      { word: "雨上り", reading: "あめあがり", sentence: "○○の空はきれいだ。",          printable: true },
      { word: "雨足",   reading: "あまあし",   sentence: "○○がだんだんはやくなる。",    printable: true }
    ]
  },
  {
    kanji: "円",
    readings: { on: ["エン"], kun: ["まる(い)"] },
    words: [
      { word: "円",     reading: "えん",       sentence: "おかしを百○○でかった。",      printable: true },
      { word: "百円",   reading: "ひゃくえん", sentence: "○○のおつりをもらう。",        printable: true },
      { word: "千円",   reading: "せんえん",   sentence: "おさいふに○○ある。",          printable: true },
      { word: "円い",   reading: "まるい",     sentence: "月が○○よるだ。",              printable: true },
      { word: "円本",   reading: "まるぼん",   sentence: "○○のかたちの本だ。",          printable: true },
      { word: "十円",   reading: "じゅうえん", sentence: "○○のおかしをえらぶ。",        printable: true }
    ]
  },
  {
    kanji: "王",
    readings: { on: ["オウ"], kun: [] },
    words: [
      { word: "王",     reading: "おう",       sentence: "むかしむかしの○○のはなし。",  printable: true },
      { word: "王子",   reading: "おうじ",     sentence: "ものがたりに○○が出てくる。",  printable: true },
      { word: "王女",   reading: "おうじょ",   sentence: "○○がドレスをきている。",      printable: true },
      { word: "女王",   reading: "じょおう",   sentence: "ちょうちょの○○がとぶ。",      printable: true },
      { word: "王様",   reading: "おうさま",   sentence: "○○がしろにすんでいる。",      printable: true },
      { word: "王手",   reading: "おうて",     sentence: "しょうぎで○○をかけた。",      printable: true }
    ]
  },
  {
    kanji: "音",
    readings: { on: ["オン", "イン"], kun: ["おと", "ね"] },
    words: [
      { word: "音",     reading: "おと",       sentence: "そとから○○がきこえる。",      printable: true },
      { word: "足音",   reading: "あしおと",   sentence: "ろうかで○○がする。",          printable: true },
      { word: "本音",   reading: "ほんね",     sentence: "ともだちに○○をはなす。",      printable: true },
      { word: "音色",   reading: "ねいろ",     sentence: "ピアノの○○がきれいだ。",      printable: true },
      { word: "音読",   reading: "おんどく",   sentence: "きょうかしょを○○する。",      printable: true },
      { word: "高音",   reading: "こうおん",   sentence: "とりが○○でなく。",            printable: true }
    ]
  },
  {
    kanji: "下",
    readings: { on: ["カ", "ゲ"], kun: ["した", "しも", "もと", "さ(げる)", "さ(がる)", "くだ(る)", "お(りる)"] },
    words: [
      { word: "下",     reading: "した",       sentence: "つくえの○○にねこがいる。",    printable: true },
      { word: "地下",   reading: "ちか",       sentence: "○○のへやはくらい。",          printable: true },
      { word: "下手",   reading: "へた",       sentence: "わたしはえが○○だ。",          printable: true },
      { word: "下校",   reading: "げこう",     sentence: "三じに○○する。",              printable: true },
      { word: "下車",   reading: "げしゃ",     sentence: "つぎのえきで○○。",            printable: true },
      { word: "下りる", reading: "おりる",     sentence: "かいだんを○○ときちゅういする。", printable: true }
    ]
  },
  {
    kanji: "火",
    readings: { on: ["カ"], kun: ["ひ", "ほ"] },
    words: [
      { word: "火",     reading: "ひ",         sentence: "コンロに○○をつける。",        printable: true },
      { word: "火山",   reading: "かざん",     sentence: "とおくに○○が見える。",        printable: true },
      { word: "花火",   reading: "はなび",     sentence: "なつに○○を見にいく。",        printable: true },
      { word: "火事",   reading: "かじ",       sentence: "○○にきをつける。",            printable: true },
      { word: "火力",   reading: "かりょく",   sentence: "なべの○○をつよくする。",      printable: true },
      { word: "火曜",   reading: "かよう",     sentence: "○○日にプールがある。",        printable: true }
    ]
  },
  {
    kanji: "花",
    readings: { on: ["カ"], kun: ["はな"] },
    words: [
      { word: "花",     reading: "はな",       sentence: "にわに○○がさいた。",          printable: true },
      { word: "花火",   reading: "はなび",     sentence: "空に○○があがる。",            printable: true },
      { word: "花見",   reading: "はなみ",     sentence: "はるに○○にいった。",          printable: true },
      { word: "草花",   reading: "くさばな",   sentence: "のはらに○○がさく。",          printable: true },
      { word: "生花",   reading: "せいか",     sentence: "おばさんが○○をならう。",      printable: true },
      { word: "花びら", reading: "はなびら",   sentence: "ちった○○をひろう。",          printable: true }
    ]
  },
  {
    kanji: "貝",
    readings: { on: [], kun: ["かい"] },
    words: [
      { word: "貝",     reading: "かい",       sentence: "うみで○○をひろう。",          printable: true },
      { word: "貝がら", reading: "かいがら",   sentence: "すなはまで○○をあつめる。",    printable: true },
      { word: "二枚貝", reading: "にまいがい", sentence: "あさりは○○のなかまだ。",      printable: true },
      { word: "貝塚",   reading: "かいづか",   sentence: "○○はむかしのあとだ。",        printable: true },
      { word: "貝ぶえ", reading: "かいぶえ",   sentence: "うみで○○をならす。",          printable: true },
      { word: "桜貝",   reading: "さくらがい", sentence: "ちいさな○○をみつけた。",      printable: true }
    ]
  },
  {
    kanji: "学",
    readings: { on: ["ガク"], kun: ["まな(ぶ)"] },
    words: [
      { word: "学校",   reading: "がっこう",   sentence: "あさ○○へむかう。",            printable: true },
      { word: "学ぶ",   reading: "まなぶ",     sentence: "あたらしいことを○○。",        printable: true },
      { word: "学年",   reading: "がくねん",   sentence: "○○ごとにあつまる。",          printable: true },
      { word: "見学",   reading: "けんがく",   sentence: "こうじょうを○○した。",        printable: true },
      { word: "入学",   reading: "にゅうがく", sentence: "らいねん○○のしきだ。",        printable: true },
      { word: "学生",   reading: "がくせい",   sentence: "あには大○○である。",          printable: true }
    ]
  },
  {
    kanji: "気",
    readings: { on: ["キ", "ケ"], kun: [] },
    words: [
      { word: "気",     reading: "き",         sentence: "そとは○○もちのよい日だ。",    printable: true },
      { word: "天気",   reading: "てんき",     sentence: "きょうはよい○○だ。",          printable: true },
      { word: "元気",   reading: "げんき",     sentence: "いもうとは○○いっぱいだ。",    printable: true },
      { word: "本気",   reading: "ほんき",     sentence: "わたしは○○でがんばる。",      printable: true },
      { word: "人気",   reading: "にんき",     sentence: "このゲームは○○がある。",      printable: true },
      { word: "気力",   reading: "きりょく",   sentence: "さいごまで○○をだす。",        printable: true }
    ]
  },
  {
    kanji: "九",
    readings: { on: ["キュウ", "ク"], kun: ["ここの", "ここの(つ)"] },
    words: [
      { word: "九つ",   reading: "ここのつ",   sentence: "おまんじゅうが○○ある。",      printable: true },
      { word: "九本",   reading: "きゅうほん", sentence: "えんぴつが○○ある。",          printable: true },
      { word: "九時",   reading: "くじ",       sentence: "よる○○にねる。",              printable: true },
      { word: "九月",   reading: "くがつ",     sentence: "○○のあきはすずしい。",        printable: true },
      { word: "九日",   reading: "ここのか",   sentence: "○○にりょこうへいく。",        printable: true },
      { word: "九回",   reading: "きゅうかい", sentence: "なわとびを○○とんだ。",        printable: true }
    ]
  },
  {
    kanji: "休",
    readings: { on: ["キュウ"], kun: ["やす(む)", "やす(まる)", "やす(める)"] },
    words: [
      { word: "休む",   reading: "やすむ",     sentence: "かぜで一日○○。",              printable: true },
      { word: "休み",   reading: "やすみ",     sentence: "なつ○○がきた。",              printable: true },
      { word: "休日",   reading: "きゅうじつ", sentence: "あしたは○○だ。",              printable: true },
      { word: "休校",   reading: "きゅうこう", sentence: "ゆきで○○になった。",          printable: true },
      { word: "休止",   reading: "きゅうし",   sentence: "うんてんを○○する。",          printable: true },
      { word: "休力",   reading: "きゅうりょく", sentence: "○○のためにねむる。",         printable: true }
    ]
  },
  {
    kanji: "玉",
    readings: { on: ["ギョク"], kun: ["たま"] },
    words: [
      { word: "玉",     reading: "たま",       sentence: "ねこが○○であそぶ。",          printable: true },
      { word: "玉入れ", reading: "たまいれ",   sentence: "うんどうかいの○○。",          printable: true },
      { word: "目玉",   reading: "めだま",     sentence: "○○やきがすきだ。",            printable: true },
      { word: "玉手",   reading: "たまて",     sentence: "むかしばなしの○○ばこ。",      printable: true },
      { word: "水玉",   reading: "みずたま",   sentence: "○○もようのふくをきる。",      printable: true },
      { word: "玉子",   reading: "たまご",     sentence: "○○を一つわる。",              printable: true }
    ]
  },
  {
    kanji: "金",
    readings: { on: ["キン", "コン"], kun: ["かね", "かな"] },
    words: [
      { word: "金",     reading: "かね",       sentence: "お○○をたいせつにつかう。",    printable: true },
      { word: "金色",   reading: "きんいろ",   sentence: "○○のリボンをつける。",        printable: true },
      { word: "金魚",   reading: "きんぎょ",   sentence: "おまつりで○○をかった。",      printable: true },
      { word: "金曜",   reading: "きんよう",   sentence: "○○日にあそぼう。",            printable: true },
      { word: "千金",   reading: "せんきん",   sentence: "一こく○○のときだ。",          printable: true },
      { word: "金物",   reading: "かなもの",   sentence: "○○やさんへいく。",            printable: true }
    ]
  },
  {
    kanji: "空",
    readings: { on: ["クウ"], kun: ["そら", "あ(く)", "あ(ける)", "から"] },
    words: [
      { word: "空",     reading: "そら",       sentence: "青い○○がひろがる。",          printable: true },
      { word: "青空",   reading: "あおぞら",   sentence: "雨上がりの○○。",              printable: true },
      { word: "空気",   reading: "くうき",     sentence: "あさの○○はつめたい。",        printable: true },
      { word: "空中",   reading: "くうちゅう", sentence: "とりが○○をとぶ。",            printable: true },
      { word: "空く",   reading: "あく",       sentence: "せきが一つ○○。",              printable: true },
      { word: "空手",   reading: "からて",     sentence: "ちちは○○をならう。",          printable: true }
    ]
  },
  {
    kanji: "月",
    readings: { on: ["ゲツ", "ガツ"], kun: ["つき"] },
    words: [
      { word: "月",     reading: "つき",       sentence: "よるに○○が見える。",          printable: true },
      { word: "月見",   reading: "つきみ",     sentence: "あきの○○をたのしむ。",        printable: true },
      { word: "正月",   reading: "しょうがつ", sentence: "○○におとしだまをもらう。",    printable: true },
      { word: "月日",   reading: "つきひ",     sentence: "○○がはやくすぎる。",          printable: true },
      { word: "月曜",   reading: "げつよう",   sentence: "○○日に学校へいく。",          printable: true },
      { word: "今月",   reading: "こんげつ",   sentence: "○○は雨がおおい。",            printable: true }
    ]
  },
  {
    kanji: "犬",
    readings: { on: ["ケン"], kun: ["いぬ"] },
    words: [
      { word: "犬",     reading: "いぬ",       sentence: "うちの○○はちゃいろだ。",      printable: true },
      { word: "子犬",   reading: "こいぬ",     sentence: "○○がはしりまわる。",          printable: true },
      { word: "大犬",   reading: "おおいぬ",   sentence: "○○がほえている。",            printable: true },
      { word: "犬小屋", reading: "いぬごや",   sentence: "にわに○○がある。",            printable: true },
      { word: "番犬",   reading: "ばんけん",   sentence: "りっぱな○○がいる。",          printable: true },
      { word: "犬足",   reading: "いぬあし",   sentence: "○○のあとがゆきにのこる。",    printable: true }
    ]
  },
  {
    kanji: "見",
    readings: { on: ["ケン"], kun: ["み(る)", "み(える)", "み(せる)"] },
    words: [
      { word: "見る",   reading: "みる",       sentence: "テレビを○○。",                printable: true },
      { word: "見学",   reading: "けんがく",   sentence: "こうじょうを○○する。",        printable: true },
      { word: "花見",   reading: "はなみ",     sentence: "はるに○○へでかける。",        printable: true },
      { word: "見本",   reading: "みほん",     sentence: "○○のかたちにつくる。",        printable: true },
      { word: "月見",   reading: "つきみ",     sentence: "あきに○○をする。",            printable: true },
      { word: "発見",   reading: "はっけん",   sentence: "あたらしい○○をする。",        printable: true }
    ]
  },
  {
    kanji: "五",
    readings: { on: ["ゴ"], kun: ["いつ", "いつ(つ)"] },
    words: [
      { word: "五つ",   reading: "いつつ",     sentence: "りんごが○○ある。",            printable: true },
      { word: "五月",   reading: "ごがつ",     sentence: "○○はあたたかい。",            printable: true },
      { word: "五本",   reading: "ごほん",     sentence: "バナナを○○もらう。",          printable: true },
      { word: "五人",   reading: "ごにん",     sentence: "○○でいっしょにあそぶ。",      printable: true },
      { word: "五十",   reading: "ごじゅう",   sentence: "おりがみを○○まいもつ。",      printable: true },
      { word: "五日",   reading: "いつか",     sentence: "○○まえに雨がふった。",        printable: true }
    ]
  },
  {
    kanji: "口",
    readings: { on: ["コウ", "ク"], kun: ["くち"] },
    words: [
      { word: "口",     reading: "くち",       sentence: "○○をおおきくあける。",        printable: true },
      { word: "入口",   reading: "いりぐち",   sentence: "おみせの○○にたつ。",          printable: true },
      { word: "出口",   reading: "でぐち",     sentence: "えきの○○でまつ。",            printable: true },
      { word: "口火",   reading: "くちび",     sentence: "○○をきってはなす。",          printable: true },
      { word: "人口",   reading: "じんこう",   sentence: "この村は○○がすくない。",      printable: true },
      { word: "早口",   reading: "はやくち",   sentence: "○○ことばをいう。",            printable: true }
    ]
  },
  {
    kanji: "校",
    readings: { on: ["コウ"], kun: [] },
    words: [
      { word: "学校",   reading: "がっこう",   sentence: "あさ○○へいく。",              printable: true },
      { word: "校長",   reading: "こうちょう", sentence: "○○先生のおはなし。",          printable: true },
      { word: "下校",   reading: "げこう",     sentence: "○○のあとは林であそぶ。",      printable: true },
      { word: "校門",   reading: "こうもん",   sentence: "あさ○○をとおる。",            printable: true },
      { word: "校内",   reading: "こうない",   sentence: "○○をしずかにあるく。",        printable: true },
      { word: "本校",   reading: "ほんこう",   sentence: "あには○○の生とだ。",          printable: true }
    ]
  },
  {
    kanji: "左",
    readings: { on: ["サ"], kun: ["ひだり"] },
    words: [
      { word: "左",     reading: "ひだり",     sentence: "○○がわのドアをあける。",      printable: true },
      { word: "左手",   reading: "ひだりて",   sentence: "○○でおはしをもつ。",          printable: true },
      { word: "左目",   reading: "ひだりめ",   sentence: "○○をとじる。",                printable: true },
      { word: "左足",   reading: "ひだりあし", sentence: "○○でステップする。",          printable: true },
      { word: "左右",   reading: "さゆう",     sentence: "○○をよく見てあるく。",        printable: true },
      { word: "左上",   reading: "ひだりうえ", sentence: "がようしの○○にかく。",        printable: true }
    ]
  },
  {
    kanji: "三",
    readings: { on: ["サン"], kun: ["み", "み(つ)", "みっ(つ)"] },
    words: [
      { word: "三つ",   reading: "みっつ",     sentence: "あめだまが○○ある。",          printable: true },
      { word: "三日",   reading: "みっか",     sentence: "○○まえに本をかった。",        printable: true },
      { word: "三月",   reading: "さんがつ",   sentence: "○○ははるだ。",                printable: true },
      { word: "三人",   reading: "さんにん",   sentence: "○○でこうえんへいく。",        printable: true },
      { word: "三本",   reading: "さんぼん",   sentence: "花を○○かう。",                printable: true },
      { word: "三角",   reading: "さんかく",   sentence: "○○のかたちをかく。",          printable: true }
    ]
  },
  {
    kanji: "山",
    readings: { on: ["サン"], kun: ["やま"] },
    words: [
      { word: "山",     reading: "やま",       sentence: "ふじ○○がきれいだ。",          printable: true },
      { word: "火山",   reading: "かざん",     sentence: "○○がふんかする。",            printable: true },
      { word: "山口",   reading: "やまぐち",   sentence: "○○けんのうみをみた。",        printable: true },
      { word: "高山",   reading: "こうざん",   sentence: "○○にゆきがつもる。",          printable: true },
      { word: "山道",   reading: "やまみち",   sentence: "ながい○○をあるく。",          printable: true },
      { word: "本山",   reading: "ほんざん",   sentence: "○○のおてらをたずねる。",      printable: true }
    ]
  },
  {
    kanji: "子",
    readings: { on: ["シ", "ス"], kun: ["こ"] },
    words: [
      { word: "子",     reading: "こ",         sentence: "ねこの○○がうまれた。",        printable: true },
      { word: "子犬",   reading: "こいぬ",     sentence: "○○がかけまわる。",            printable: true },
      { word: "子ども", reading: "こども",     sentence: "○○がこうえんであそぶ。",      printable: true },
      { word: "女子",   reading: "じょし",     sentence: "○○のチームがかった。",        printable: true },
      { word: "男子",   reading: "だんし",     sentence: "○○と女子でわかれる。",        printable: true },
      { word: "王子",   reading: "おうじ",     sentence: "やさしい○○のおはなし。",      printable: true }
    ]
  },
  {
    kanji: "四",
    readings: { on: ["シ"], kun: ["よ", "よ(つ)", "よっ(つ)", "よん"] },
    words: [
      { word: "四つ",   reading: "よっつ",     sentence: "おだんごを○○たべる。",        printable: true },
      { word: "四月",   reading: "しがつ",     sentence: "○○に学校がはじまる。",        printable: true },
      { word: "四日",   reading: "よっか",     sentence: "あと○○でしけんがある。",      printable: true },
      { word: "四人",   reading: "よにん",     sentence: "○○でかぞくしゃしんをとる。",  printable: true },
      { word: "四本",   reading: "よんほん",   sentence: "花を○○かざる。",              printable: true },
      { word: "四角",   reading: "しかく",     sentence: "○○いはこをもつ。",            printable: true }
    ]
  },
  {
    kanji: "糸",
    readings: { on: ["シ"], kun: ["いと"] },
    words: [
      { word: "糸",     reading: "いと",       sentence: "赤い○○でぬう。",              printable: true },
      { word: "糸口",   reading: "いとぐち",   sentence: "なぞの○○をみつける。",        printable: true },
      { word: "毛糸",   reading: "けいと",     sentence: "○○でマフラーをあむ。",        printable: true },
      { word: "白糸",   reading: "しろいと",   sentence: "ぬいものに○○をつかう。",      printable: true },
      { word: "糸目",   reading: "いとめ",     sentence: "ぬのの○○にきをつける。",      printable: true },
      { word: "生糸",   reading: "きいと",     sentence: "むかしは○○をつくった。",      printable: true }
    ]
  },
  {
    kanji: "字",
    readings: { on: ["ジ"], kun: ["あざ"] },
    words: [
      { word: "字",     reading: "じ",         sentence: "ノートに○○をかく。",          printable: true },
      { word: "文字",   reading: "もじ",       sentence: "ちいさな○○をよむ。",          printable: true },
      { word: "数字",   reading: "すうじ",     sentence: "プリントに○○を入れる。",      printable: true },
      { word: "名字",   reading: "みょうじ",   sentence: "○○をかみにかく。",            printable: true },
      { word: "字音",   reading: "じおん",     sentence: "かんじの○○をならう。",        printable: true },
      { word: "字体",   reading: "じたい",     sentence: "きれいな○○でかく。",          printable: true }
    ]
  },
  {
    kanji: "耳",
    readings: { on: ["ジ"], kun: ["みみ"] },
    words: [
      { word: "耳",     reading: "みみ",       sentence: "うさぎの○○はながい。",        printable: true },
      { word: "中耳",   reading: "ちゅうじ",   sentence: "○○えんでびょういんへいく。",  printable: true },
      { word: "右耳",   reading: "みぎみみ",   sentence: "○○がかゆくなる。",            printable: true },
      { word: "左耳",   reading: "ひだりみみ", sentence: "○○に手をあてる。",            printable: true },
      { word: "耳目",   reading: "じもく",     sentence: "みんなの○○をあつめる。",      printable: true },
      { word: "耳もと", reading: "みみもと",   sentence: "○○でそっとはなす。",          printable: true }
    ]
  },
  {
    kanji: "七",
    readings: { on: ["シチ"], kun: ["なな", "なな(つ)", "なの"] },
    words: [
      { word: "七つ",   reading: "ななつ",     sentence: "おはじきが○○ある。",          printable: true },
      { word: "七月",   reading: "しちがつ",   sentence: "○○はあつい。",                printable: true },
      { word: "七日",   reading: "なのか",     sentence: "あと○○でなつやすみだ。",      printable: true },
      { word: "七人",   reading: "しちにん",   sentence: "○○できょうりょくする。",      printable: true },
      { word: "七本",   reading: "ななほん",   sentence: "ふでばこに○○のペン。",        printable: true },
      { word: "七夕",   reading: "たなばた",   sentence: "○○にねがいごとをかく。",      printable: true }
    ]
  },
  {
    kanji: "車",
    readings: { on: ["シャ"], kun: ["くるま"] },
    words: [
      { word: "車",     reading: "くるま",     sentence: "あたらしい○○にのる。",        printable: true },
      { word: "電車",   reading: "でんしゃ",   sentence: "あさ○○にのる。",              printable: true },
      { word: "下車",   reading: "げしゃ",     sentence: "えきのホームで○○する。",      printable: true },
      { word: "火車",   reading: "かしゃ",     sentence: "○○のようにはやい。",          printable: true },
      { word: "車内",   reading: "しゃない",   sentence: "○○はしずかだった。",          printable: true },
      { word: "水車",   reading: "すいしゃ",   sentence: "川に○○がまわる。",            printable: true }
    ]
  },
  {
    kanji: "手",
    readings: { on: ["シュ"], kun: ["て", "た"] },
    words: [
      { word: "手",     reading: "て",         sentence: "○○をきれいにあらう。",        printable: true },
      { word: "右手",   reading: "みぎて",     sentence: "○○でぼうしをもつ。",          printable: true },
      { word: "左手",   reading: "ひだりて",   sentence: "○○でドアをあける。",          printable: true },
      { word: "上手",   reading: "じょうず",   sentence: "うたが○○だ。",                printable: true },
      { word: "下手",   reading: "へた",       sentence: "えが○○だがたのしい。",        printable: true },
      { word: "手本",   reading: "てほん",     sentence: "○○をよく見てかく。",          printable: true }
    ]
  },
  {
    kanji: "十",
    readings: { on: ["ジュウ", "ジッ"], kun: ["とお", "と"] },
    words: [
      { word: "十",     reading: "じゅう",     sentence: "ふくろの中に○○こある。",      printable: true },
      { word: "十円",   reading: "じゅうえん", sentence: "○○のあめをかう。",            printable: true },
      { word: "十日",   reading: "とおか",     sentence: "あと○○でたんじょう日だ。",    printable: true },
      { word: "十月",   reading: "じゅうがつ", sentence: "○○はあきだ。",                printable: true },
      { word: "十人",   reading: "じゅうにん", sentence: "○○でグループをつくる。",      printable: true },
      { word: "十本",   reading: "じっぽん",   sentence: "ばらを○○かう。",              printable: true }
    ]
  },
  {
    kanji: "出",
    readings: { on: ["シュツ", "スイ"], kun: ["で(る)", "だ(す)"] },
    words: [
      { word: "出る",   reading: "でる",       sentence: "いえを○○じかんだ。",          printable: true },
      { word: "出口",   reading: "でぐち",     sentence: "○○からそとへでる。",          printable: true },
      { word: "出会い", reading: "であい",     sentence: "あたらしい○○がある。",        printable: true },
      { word: "外出",   reading: "がいしゅつ", sentence: "あめでも○○する。",            printable: true },
      { word: "出す",   reading: "だす",       sentence: "しゅくだいを○○。",            printable: true },
      { word: "出入口", reading: "でいりぐち", sentence: "○○でくつをぬぐ。",            printable: true }
    ]
  },
  {
    kanji: "女",
    readings: { on: ["ジョ", "ニョ"], kun: ["おんな", "め"] },
    words: [
      { word: "女",     reading: "おんな",     sentence: "○○のひとがあるく。",          printable: true },
      { word: "女子",   reading: "じょし",     sentence: "○○がうたをうたう。",          printable: true },
      { word: "女王",   reading: "じょおう",   sentence: "ものがたりの○○。",            printable: true },
      { word: "少女",   reading: "しょうじょ", sentence: "小さな○○がわらう。",          printable: true },
      { word: "女の子", reading: "おんなのこ", sentence: "○○がスキップする。",          printable: true },
      { word: "王女",   reading: "おうじょ",   sentence: "やさしい○○がいた。",          printable: true }
    ]
  },
  {
    kanji: "小",
    readings: { on: ["ショウ"], kun: ["ちい(さい)", "こ", "お"] },
    words: [
      { word: "小さい", reading: "ちいさい",   sentence: "○○い花を見つけた。",          printable: true },
      { word: "小川",   reading: "おがわ",     sentence: "○○のながれがきれいだ。",      printable: true },
      { word: "小石",   reading: "こいし",     sentence: "○○をひろいあつめる。",        printable: true },
      { word: "小山",   reading: "こやま",     sentence: "○○にのぼってあそぶ。",        printable: true },
      { word: "小雨",   reading: "こさめ",     sentence: "そとは○○がふっている。",      printable: true },
      { word: "小学",   reading: "しょうがく", sentence: "わたしは○○一年生だ。",        printable: true }
    ]
  },
  {
    kanji: "上",
    readings: { on: ["ジョウ", "ショウ"], kun: ["うえ", "かみ", "あ(げる)", "あ(がる)", "のぼ(る)"] },
    words: [
      { word: "上",     reading: "うえ",       sentence: "つくえの○○に本をおく。",      printable: true },
      { word: "上手",   reading: "じょうず",   sentence: "ピアノが○○だ。",              printable: true },
      { word: "上る",   reading: "のぼる",     sentence: "かいだんを○○。",              printable: true },
      { word: "上下",   reading: "じょうげ",   sentence: "ふくの○○をそろえる。",        printable: true },
      { word: "上がる", reading: "あがる",     sentence: "ボールが空に○○。",            printable: true },
      { word: "年上",   reading: "としうえ",   sentence: "あには○○のいとこだ。",        printable: true }
    ]
  },
  {
    kanji: "森",
    readings: { on: ["シン"], kun: ["もり"] },
    words: [
      { word: "森",     reading: "もり",       sentence: "ふかい○○をあるく。",          printable: true },
      { word: "森林",   reading: "しんりん",   sentence: "○○のなかをさんぽする。",      printable: true },
      { word: "青森",   reading: "あおもり",   sentence: "○○けんのりんご。",            printable: true },
      { word: "森の中", reading: "もりのなか", sentence: "○○でとりがなく。",            printable: true },
      { word: "小森",   reading: "こもり",     sentence: "山の○○であそぶ。",            printable: true },
      { word: "大森林", reading: "だいしんりん", sentence: "ひろい○○がひろがる。",       printable: true }
    ]
  },
  {
    kanji: "人",
    readings: { on: ["ジン", "ニン"], kun: ["ひと"] },
    words: [
      { word: "人",     reading: "ひと",       sentence: "○○がたくさんあつまる。",      printable: true },
      { word: "大人",   reading: "おとな",     sentence: "○○といっしょにあるく。",      printable: true },
      { word: "一人",   reading: "ひとり",     sentence: "○○で本をよむ。",              printable: true },
      { word: "二人",   reading: "ふたり",     sentence: "ともだちと○○であそぶ。",      printable: true },
      { word: "人気",   reading: "にんき",     sentence: "あのみせは○○がある。",        printable: true },
      { word: "人口",   reading: "じんこう",   sentence: "町の○○がふえる。",            printable: true }
    ]
  },
  {
    kanji: "水",
    readings: { on: ["スイ"], kun: ["みず"] },
    words: [
      { word: "水",     reading: "みず",       sentence: "つめたい○○をのむ。",          printable: true },
      { word: "水玉",   reading: "みずたま",   sentence: "○○もようのスカート。",        printable: true },
      { word: "水力",   reading: "すいりょく", sentence: "○○でデンキをつくる。",        printable: true },
      { word: "水車",   reading: "すいしゃ",   sentence: "川で○○がまわる。",            printable: true },
      { word: "水曜",   reading: "すいよう",   sentence: "○○日にプールへいく。",        printable: true },
      { word: "水中",   reading: "すいちゅう", sentence: "さかなが○○をおよぐ。",        printable: true }
    ]
  },
  {
    kanji: "正",
    readings: { on: ["セイ", "ショウ"], kun: ["ただ(しい)", "まさ"] },
    words: [
      { word: "正しい", reading: "ただしい",   sentence: "○○いこたえをかく。",          printable: true },
      { word: "正月",   reading: "しょうがつ", sentence: "○○におぞうにをたべる。",      printable: true },
      { word: "正午",   reading: "しょうご",   sentence: "○○にきゅうしょくだ。",        printable: true },
      { word: "正門",   reading: "せいもん",   sentence: "○○のまえであつまる。",        printable: true },
      { word: "正面",   reading: "しょうめん", sentence: "たてものの○○にたつ。",        printable: true },
      { word: "正直",   reading: "しょうじき", sentence: "○○なきもちではなす。",        printable: true }
    ]
  },
  {
    kanji: "生",
    readings: { on: ["セイ", "ショウ"], kun: ["い(きる)", "う(まれる)", "は(える)", "き", "なま"] },
    words: [
      { word: "生まれ", reading: "うまれ",     sentence: "あさに○○たねこ。",            printable: true },
      { word: "生き物", reading: "いきもの",   sentence: "うみの○○をしらべる。",        printable: true },
      { word: "学生",   reading: "がくせい",   sentence: "あには大○○だ。",              printable: true },
      { word: "先生",   reading: "せんせい",   sentence: "○○のはなしをきく。",          printable: true },
      { word: "生年",   reading: "せいねん",   sentence: "○○月日をかく。",              printable: true },
      { word: "生花",   reading: "せいか",     sentence: "おばが○○をならう。",          printable: true }
    ]
  },
  {
    kanji: "青",
    readings: { on: ["セイ", "ショウ"], kun: ["あお", "あお(い)"] },
    words: [
      { word: "青",     reading: "あお",       sentence: "空は○○くきれいだ。",          printable: true },
      { word: "青い",   reading: "あおい",     sentence: "○○いうみがひろがる。",        printable: true },
      { word: "青空",   reading: "あおぞら",   sentence: "きょうは○○だ。",              printable: true },
      { word: "青年",   reading: "せいねん",   sentence: "りっぱな○○になる。",          printable: true },
      { word: "青森",   reading: "あおもり",   sentence: "○○のりんごはおいしい。",      printable: true },
      { word: "青草",   reading: "あおくさ",   sentence: "○○のうえにすわる。",          printable: true }
    ]
  },
  {
    kanji: "夕",
    readings: { on: [], kun: ["ゆう"] },
    words: [
      { word: "夕",     reading: "ゆう",       sentence: "○○がたに空が赤くなる。",      printable: true },
      { word: "夕日",   reading: "ゆうひ",     sentence: "赤い○○がきれいだ。",          printable: true },
      { word: "夕方",   reading: "ゆうがた",   sentence: "○○から雨がふる。",            printable: true },
      { word: "夕食",   reading: "ゆうしょく", sentence: "○○のじかんだよ。",            printable: true },
      { word: "夕立",   reading: "ゆうだち",   sentence: "なつの○○がきた。",            printable: true },
      { word: "七夕",   reading: "たなばた",   sentence: "○○にたんざくをかざる。",      printable: true }
    ]
  },
  {
    kanji: "石",
    readings: { on: ["セキ", "シャク", "コク"], kun: ["いし"] },
    words: [
      { word: "石",     reading: "いし",       sentence: "かわらで○○をひろう。",        printable: true },
      { word: "小石",   reading: "こいし",     sentence: "ポケットに○○を入れる。",      printable: true },
      { word: "石川",   reading: "いしかわ",   sentence: "○○けんのおまつり。",          printable: true },
      { word: "石山",   reading: "いしやま",   sentence: "○○にのぼった。",              printable: true },
      { word: "白石",   reading: "しらいし",   sentence: "○○でみちをかざる。",          printable: true },
      { word: "石ころ", reading: "いしころ",   sentence: "小さな○○をけった。",          printable: true }
    ]
  },
  {
    kanji: "赤",
    readings: { on: ["セキ", "シャク"], kun: ["あか", "あか(い)"] },
    words: [
      { word: "赤",     reading: "あか",       sentence: "○○のクレヨンでぬる。",        printable: true },
      { word: "赤い",   reading: "あかい",     sentence: "○○いりんごをたべる。",        printable: true },
      { word: "赤目",   reading: "あかめ",     sentence: "なみだで○○になる。",          printable: true },
      { word: "赤土",   reading: "あかつち",   sentence: "はたけは○○だ。",              printable: true },
      { word: "赤字",   reading: "あかじ",     sentence: "ノートに○○でしるしをつける。", printable: true },
      { word: "赤花",   reading: "あかばな",   sentence: "○○がにわにさく。",            printable: true }
    ]
  },
  {
    kanji: "千",
    readings: { on: ["セン"], kun: ["ち"] },
    words: [
      { word: "千",     reading: "せん",       sentence: "○○まいのおりがみがある。",    printable: true },
      { word: "千円",   reading: "せんえん",   sentence: "○○のおつかいをする。",        printable: true },
      { word: "三千",   reading: "さんぜん",   sentence: "○○えんでくつをかう。",        printable: true },
      { word: "千年",   reading: "せんねん",   sentence: "○○まえのおはなし。",          printable: true },
      { word: "千本",   reading: "せんぼん",   sentence: "○○のさくらがさく。",          printable: true },
      { word: "千人",   reading: "せんにん",   sentence: "○○がスタジアムにいる。",      printable: true }
    ]
  },
  {
    kanji: "川",
    readings: { on: ["セン"], kun: ["かわ"] },
    words: [
      { word: "川",     reading: "かわ",       sentence: "ちかくに○○がながれる。",      printable: true },
      { word: "小川",   reading: "おがわ",     sentence: "山の○○はすずしい。",          printable: true },
      { word: "川上",   reading: "かわかみ",   sentence: "○○へさかなをみにいく。",      printable: true },
      { word: "川下",   reading: "かわしも",   sentence: "○○へボートでくだる。",        printable: true },
      { word: "山川",   reading: "やまかわ",   sentence: "○○のけしきがきれいだ。",      printable: true },
      { word: "石川",   reading: "いしかわ",   sentence: "○○けんのかにをたべる。",      printable: true }
    ]
  },
  {
    kanji: "先",
    readings: { on: ["セン"], kun: ["さき"] },
    words: [
      { word: "先生",   reading: "せんせい",   sentence: "○○がほめてくれた。",          printable: true },
      { word: "先",     reading: "さき",       sentence: "あなたが○○にいってね。",      printable: true },
      { word: "先月",   reading: "せんげつ",   sentence: "○○は雨がおおかった。",        printable: true },
      { word: "先日",   reading: "せんじつ",   sentence: "○○のニュースを見た。",        printable: true },
      { word: "先手",   reading: "せんて",     sentence: "ゲームで○○をとる。",          printable: true },
      { word: "先頭",   reading: "せんとう",   sentence: "ぎょうれつの○○にたつ。",      printable: true }
    ]
  },
  {
    kanji: "早",
    readings: { on: ["ソウ", "サッ"], kun: ["はや(い)", "はや(まる)"] },
    words: [
      { word: "早い",   reading: "はやい",     sentence: "あさは○○じかんだ。",          printable: true },
      { word: "早口",   reading: "はやくち",   sentence: "○○ことばがおもしろい。",      printable: true },
      { word: "早足",   reading: "はやあし",   sentence: "○○であるく。",                printable: true },
      { word: "早ね",   reading: "はやね",     sentence: "○○早おきをする。",            printable: true },
      { word: "早朝",   reading: "そうちょう", sentence: "○○からさんぽする。",          printable: true },
      { word: "早春",   reading: "そうしゅん", sentence: "○○のかぜはすずしい。",        printable: true }
    ]
  },
  {
    kanji: "草",
    readings: { on: ["ソウ"], kun: ["くさ"] },
    words: [
      { word: "草",     reading: "くさ",       sentence: "のはらの○○をふむ。",          printable: true },
      { word: "草花",   reading: "くさばな",   sentence: "○○をかんさつする。",          printable: true },
      { word: "草原",   reading: "そうげん",   sentence: "ひろい○○をはしる。",          printable: true },
      { word: "青草",   reading: "あおくさ",   sentence: "○○のかおりがする。",          printable: true },
      { word: "草木",   reading: "くさき",     sentence: "○○がそだつ。",                printable: true },
      { word: "草分け", reading: "くさわけ",   sentence: "○○てきなそんざいだ。",        printable: true }
    ]
  },
  {
    kanji: "足",
    readings: { on: ["ソク"], kun: ["あし", "た(りる)", "た(す)"] },
    words: [
      { word: "足",     reading: "あし",       sentence: "○○がすこしいたい。",          printable: true },
      { word: "右足",   reading: "みぎあし",   sentence: "○○でいっぽふみだす。",        printable: true },
      { word: "左足",   reading: "ひだりあし", sentence: "○○でけがをした。",            printable: true },
      { word: "足音",   reading: "あしおと",   sentence: "ろうかに○○がひびく。",        printable: true },
      { word: "足りる", reading: "たりる",     sentence: "お金が○○かかぞえる。",        printable: true },
      { word: "土足",   reading: "どそく",     sentence: "○○げんきんのへや。",          printable: true }
    ]
  },
  {
    kanji: "村",
    readings: { on: ["ソン"], kun: ["むら"] },
    words: [
      { word: "村",     reading: "むら",       sentence: "小さな○○にすむ。",            printable: true },
      { word: "村人",   reading: "むらびと",   sentence: "○○とあいさつする。",          printable: true },
      { word: "山村",   reading: "さんそん",   sentence: "○○のけしきがしずかだ。",      printable: true },
      { word: "村長",   reading: "そんちょう", sentence: "○○がみんなにあいさつする。",  printable: true },
      { word: "村中",   reading: "むらじゅう", sentence: "○○のおまつりがある。",        printable: true },
      { word: "農村",   reading: "のうそん",   sentence: "○○でやさいをつくる。",        printable: true }
    ]
  },
  {
    kanji: "大",
    readings: { on: ["ダイ", "タイ"], kun: ["おお", "おお(きい)"] },
    words: [
      { word: "大きい", reading: "おおきい",   sentence: "○○い月が出た。",              printable: true },
      { word: "大人",   reading: "おとな",     sentence: "○○といっしょに出かける。",    printable: true },
      { word: "大空",   reading: "おおぞら",   sentence: "ひろい○○を見上げる。",        printable: true },
      { word: "大雨",   reading: "おおあめ",   sentence: "○○のためそとに出ない。",      printable: true },
      { word: "大木",   reading: "たいぼく",   sentence: "○○のもとでやすむ。",          printable: true },
      { word: "大手",   reading: "おおて",     sentence: "○○のおみせがならぶ。",        printable: true }
    ]
  },
  {
    kanji: "男",
    readings: { on: ["ダン", "ナン"], kun: ["おとこ"] },
    words: [
      { word: "男",     reading: "おとこ",     sentence: "せのたかい○○のひと。",        printable: true },
      { word: "男子",   reading: "だんし",     sentence: "○○のチームがそろう。",        printable: true },
      { word: "男の子", reading: "おとこのこ", sentence: "○○がたいこをたたく。",        printable: true },
      { word: "長男",   reading: "ちょうなん", sentence: "ちちは○○だった。",            printable: true },
      { word: "男女",   reading: "だんじょ",   sentence: "○○ともになかよくする。",      printable: true },
      { word: "次男",   reading: "じなん",     sentence: "あには○○だ。",                printable: true }
    ]
  },
  {
    kanji: "竹",
    readings: { on: ["チク"], kun: ["たけ"] },
    words: [
      { word: "竹",     reading: "たけ",       sentence: "○○のはやしをぬける。",        printable: true },
      { word: "竹林",   reading: "ちくりん",   sentence: "○○にかぜがふく。",            printable: true },
      { word: "竹馬",   reading: "たけうま",   sentence: "○○にのってあそぶ。",          printable: true },
      { word: "青竹",   reading: "あおだけ",   sentence: "○○できれいなかごをあむ。",    printable: true },
      { word: "竹ざお", reading: "たけざお",   sentence: "○○でせんたくものをほす。",    printable: true },
      { word: "竹やぶ", reading: "たけやぶ",   sentence: "ちかくに○○がある。",          printable: true }
    ]
  },
  {
    kanji: "中",
    readings: { on: ["チュウ"], kun: ["なか"] },
    words: [
      { word: "中",     reading: "なか",       sentence: "はこの○○をのぞく。",          printable: true },
      { word: "中学",   reading: "ちゅうがく", sentence: "あには○○生だ。",              printable: true },
      { word: "中心",   reading: "ちゅうしん", sentence: "町の○○にあつまる。",          printable: true },
      { word: "空中",   reading: "くうちゅう", sentence: "ちょうが○○をまう。",          printable: true },
      { word: "水中",   reading: "すいちゅう", sentence: "○○で目をあける。",            printable: true },
      { word: "中年",   reading: "ちゅうねん", sentence: "○○のおじさんがあるく。",      printable: true }
    ]
  },
  {
    kanji: "虫",
    readings: { on: ["チュウ"], kun: ["むし"] },
    words: [
      { word: "虫",     reading: "むし",       sentence: "草むらで○○をさがす。",        printable: true },
      { word: "虫かご", reading: "むしかご",   sentence: "○○にバッタを入れる。",        printable: true },
      { word: "虫歯",   reading: "むしば",     sentence: "○○をはいしゃでなおす。",      printable: true },
      { word: "毛虫",   reading: "けむし",     sentence: "はっぱに○○がいる。",          printable: true },
      { word: "水虫",   reading: "みずむし",   sentence: "足に○○ができる。",            printable: true },
      { word: "虫の音", reading: "むしのね",   sentence: "あきは○○がきれいだ。",        printable: true }
    ]
  },
  {
    kanji: "町",
    readings: { on: ["チョウ"], kun: ["まち"] },
    words: [
      { word: "町",     reading: "まち",       sentence: "○○には人がたくさんいる。",    printable: true },
      { word: "町中",   reading: "まちじゅう", sentence: "○○がおまつりだ。",            printable: true },
      { word: "下町",   reading: "したまち",   sentence: "○○のおまつりへいく。",        printable: true },
      { word: "町人",   reading: "ちょうにん", sentence: "むかしの○○のくらし。",        printable: true },
      { word: "町長",   reading: "ちょうちょう", sentence: "○○がスピーチをする。",       printable: true },
      { word: "町名",   reading: "ちょうめい", sentence: "ふだに○○がかいてある。",      printable: true }
    ]
  },
  {
    kanji: "天",
    readings: { on: ["テン"], kun: ["あめ", "あま"] },
    words: [
      { word: "天",     reading: "てん",       sentence: "○○からほしがふってくる。",    printable: true },
      { word: "天気",   reading: "てんき",     sentence: "あしたは○○がよい。",          printable: true },
      { word: "天日",   reading: "てんぴ",     sentence: "○○でふとんをほす。",          printable: true },
      { word: "天才",   reading: "てんさい",   sentence: "○○のような子だ。",            printable: true },
      { word: "天上",   reading: "てんじょう", sentence: "○○にほしがかがやく。",        printable: true },
      { word: "雨天",   reading: "うてん",     sentence: "○○のためえんきになる。",      printable: true }
    ]
  },
  {
    kanji: "田",
    readings: { on: ["デン"], kun: ["た"] },
    words: [
      { word: "田",     reading: "た",         sentence: "○○んぼでカエルがなく。",      printable: true },
      { word: "田んぼ", reading: "たんぼ",     sentence: "○○がきれいにみどりだ。",      printable: true },
      { word: "水田",   reading: "すいでん",   sentence: "ひろい○○がつづく。",          printable: true },
      { word: "田中",   reading: "たなか",     sentence: "○○さんがあいさつする。",      printable: true },
      { word: "田畑",   reading: "たはた",     sentence: "○○のしごとをする。",          printable: true },
      { word: "山田",   reading: "やまだ",     sentence: "となりの○○さん。",            printable: true }
    ]
  },
  {
    kanji: "土",
    readings: { on: ["ド", "ト"], kun: ["つち"] },
    words: [
      { word: "土",     reading: "つち",       sentence: "○○にたねをまいた。",          printable: true },
      { word: "土曜",   reading: "どよう",     sentence: "○○日はやすみだ。",            printable: true },
      { word: "土地",   reading: "とち",       sentence: "ひろい○○をかう。",            printable: true },
      { word: "赤土",   reading: "あかつち",   sentence: "○○のはたけがある。",          printable: true },
      { word: "土足",   reading: "どそく",     sentence: "○○ではあがれない。",          printable: true },
      { word: "土山",   reading: "つちやま",   sentence: "○○をのぼっておりる。",        printable: true }
    ]
  },
  {
    kanji: "二",
    readings: { on: ["ニ"], kun: ["ふた", "ふた(つ)"] },
    words: [
      { word: "二つ",   reading: "ふたつ",     sentence: "おにぎりが○○ある。",          printable: true },
      { word: "二人",   reading: "ふたり",     sentence: "○○でブランコにのる。",        printable: true },
      { word: "二月",   reading: "にがつ",     sentence: "○○はとてもさむい。",          printable: true },
      { word: "二日",   reading: "ふつか",     sentence: "あと○○でやすみだ。",          printable: true },
      { word: "二本",   reading: "にほん",     sentence: "リボンを○○むすぶ。",          printable: true },
      { word: "二回",   reading: "にかい",     sentence: "○○手を上げる。",              printable: true }
    ]
  },
  {
    kanji: "日",
    readings: { on: ["ニチ", "ジツ"], kun: ["ひ", "か"] },
    words: [
      { word: "日",     reading: "ひ",         sentence: "あさ○○が上る。",              printable: true },
      { word: "日曜",   reading: "にちよう",   sentence: "○○日はあそぼう。",            printable: true },
      { word: "夕日",   reading: "ゆうひ",     sentence: "うみに○○がしずむ。",          printable: true },
      { word: "日記",   reading: "にっき",     sentence: "まい日○○をかく。",            printable: true },
      { word: "毎日",   reading: "まいにち",   sentence: "○○本をよむ。",                printable: true },
      { word: "三日",   reading: "みっか",     sentence: "あと○○で出かける。",          printable: true }
    ]
  },
  {
    kanji: "入",
    readings: { on: ["ニュウ"], kun: ["い(る)", "い(れる)", "はい(る)"] },
    words: [
      { word: "入る",   reading: "はいる",     sentence: "おふろに○○じかんだ。",        printable: true },
      { word: "入口",   reading: "いりぐち",   sentence: "おみせの○○でまつ。",          printable: true },
      { word: "入学",   reading: "にゅうがく", sentence: "らいねん○○する。",            printable: true },
      { word: "入金",   reading: "にゅうきん", sentence: "ぎんこうに○○する。",          printable: true },
      { word: "出入り", reading: "でいり",     sentence: "○○のおおいおみせ。",          printable: true },
      { word: "入れる", reading: "いれる",     sentence: "ふくろに本を○○。",            printable: true }
    ]
  },
  {
    kanji: "年",
    readings: { on: ["ネン"], kun: ["とし"] },
    words: [
      { word: "年",     reading: "とし",       sentence: "あたらしい○○がはじまる。",    printable: true },
      { word: "今年",   reading: "ことし",     sentence: "○○のなつはあつい。",          printable: true },
      { word: "学年",   reading: "がくねん",   sentence: "わたしは一○○生だ。",          printable: true },
      { word: "年月",   reading: "ねんげつ",   sentence: "ながい○○がたつ。",            printable: true },
      { word: "少年",   reading: "しょうねん", sentence: "げんきな○○がはしる。",        printable: true },
      { word: "年上",   reading: "としうえ",   sentence: "○○のいとこがあそびにきた。",  printable: true }
    ]
  },
  {
    kanji: "白",
    readings: { on: ["ハク", "ビャク"], kun: ["しろ", "しろ(い)", "しら"] },
    words: [
      { word: "白",     reading: "しろ",       sentence: "ゆきは○○くてきれいだ。",      printable: true },
      { word: "白い",   reading: "しろい",     sentence: "○○い花をかう。",              printable: true },
      { word: "白雪",   reading: "しらゆき",   sentence: "○○が山をつつむ。",            printable: true },
      { word: "白紙",   reading: "はくし",     sentence: "○○にえをかく。",              printable: true },
      { word: "白目",   reading: "しろめ",     sentence: "○○がきれいだ。",              printable: true },
      { word: "白鳥",   reading: "はくちょう", sentence: "みずうみに○○がいる。",        printable: true }
    ]
  },
  {
    kanji: "八",
    readings: { on: ["ハチ"], kun: ["や", "や(つ)", "やっ(つ)", "よう"] },
    words: [
      { word: "八つ",   reading: "やっつ",     sentence: "クッキーが○○ある。",          printable: true },
      { word: "八月",   reading: "はちがつ",   sentence: "○○はとてもあつい。",          printable: true },
      { word: "八日",   reading: "ようか",     sentence: "あと○○でなつまつりだ。",      printable: true },
      { word: "八人",   reading: "はちにん",   sentence: "○○でリレーをする。",          printable: true },
      { word: "八本",   reading: "はっぽん",   sentence: "リボンを○○かう。",            printable: true },
      { word: "八方",   reading: "はっぽう",   sentence: "○○からふうがふく。",          printable: true }
    ]
  },
  {
    kanji: "百",
    readings: { on: ["ヒャク"], kun: [] },
    words: [
      { word: "百",     reading: "ひゃく",     sentence: "おりがみを○○まいかった。",    printable: true },
      { word: "百円",   reading: "ひゃくえん", sentence: "○○のおかしをかう。",          printable: true },
      { word: "二百",   reading: "にひゃく",   sentence: "○○えんのジュース。",          printable: true },
      { word: "百年",   reading: "ひゃくねん", sentence: "○○まえのしゃしんだ。",        printable: true },
      { word: "百人",   reading: "ひゃくにん", sentence: "ホールに○○あつまる。",        printable: true },
      { word: "百日",   reading: "ひゃくにち", sentence: "あと○○でなつだ。",            printable: true }
    ]
  },
  {
    kanji: "文",
    readings: { on: ["ブン", "モン"], kun: ["ふみ"] },
    words: [
      { word: "文",     reading: "ぶん",       sentence: "みじかい○○をかく。",          printable: true },
      { word: "文字",   reading: "もじ",       sentence: "本の○○をならう。",            printable: true },
      { word: "文学",   reading: "ぶんがく",   sentence: "○○の本をよむ。",              printable: true },
      { word: "本文",   reading: "ほんぶん",   sentence: "○○をしっかりよむ。",          printable: true },
      { word: "文集",   reading: "ぶんしゅう", sentence: "クラスの○○ができた。",        printable: true },
      { word: "作文",   reading: "さくぶん",   sentence: "なつ休みの○○をかく。",        printable: true }
    ]
  },
  {
    kanji: "木",
    readings: { on: ["ボク", "モク"], kun: ["き", "こ"] },
    words: [
      { word: "木",     reading: "き",         sentence: "大きな○○の下で休む。",        printable: true },
      { word: "木の葉", reading: "このは",     sentence: "あきの○○が赤い。",            printable: true },
      { word: "大木",   reading: "たいぼく",   sentence: "山に○○がそびえる。",          printable: true },
      { word: "木曜",   reading: "もくよう",   sentence: "○○日にうんどうする。",        printable: true },
      { word: "草木",   reading: "くさき",     sentence: "○○がそだつ村だ。",            printable: true },
      { word: "木目",   reading: "もくめ",     sentence: "ゆかの○○がきれいだ。",        printable: true }
    ]
  },
  {
    kanji: "本",
    readings: { on: ["ホン"], kun: ["もと"] },
    words: [
      { word: "本",     reading: "ほん",       sentence: "あたらしい○○をかった。",      printable: true },
      { word: "本気",   reading: "ほんき",     sentence: "○○でれんしゅうする。",        printable: true },
      { word: "日本",   reading: "にほん",     sentence: "わたしは○○にすむ。",          printable: true },
      { word: "本人",   reading: "ほんにん",   sentence: "○○にたずねる。",              printable: true },
      { word: "本音",   reading: "ほんね",     sentence: "ともだちに○○ではなす。",      printable: true },
      { word: "見本",   reading: "みほん",     sentence: "おてほんの○○を見せる。",      printable: true }
    ]
  },
  {
    kanji: "名",
    readings: { on: ["メイ", "ミョウ"], kun: ["な"] },
    words: [
      { word: "名前",   reading: "なまえ",     sentence: "プリントに○○をかく。",        printable: true },
      { word: "名人",   reading: "めいじん",   sentence: "おじいさんは○○だ。",          printable: true },
      { word: "名字",   reading: "みょうじ",   sentence: "○○をボードにはる。",          printable: true },
      { word: "名月",   reading: "めいげつ",   sentence: "あきの○○をみる。",            printable: true },
      { word: "本名",   reading: "ほんみょう", sentence: "○○をおしえる。",              printable: true },
      { word: "地名",   reading: "ちめい",     sentence: "○○をおぼえる。",              printable: true }
    ]
  },
  {
    kanji: "目",
    readings: { on: ["モク", "ボク"], kun: ["め", "ま"] },
    words: [
      { word: "目",     reading: "め",         sentence: "○○をしっかりあける。",        printable: true },
      { word: "目玉",   reading: "めだま",     sentence: "○○やきをあさにつくる。",      printable: true },
      { word: "目印",   reading: "めじるし",   sentence: "ふくに○○をつける。",          printable: true },
      { word: "目下",   reading: "もっか",     sentence: "○○れんしゅう中だ。",          printable: true },
      { word: "目上",   reading: "めうえ",     sentence: "○○の人にあいさつする。",      printable: true },
      { word: "見た目", reading: "みため",     sentence: "○○もたいせつだ。",            printable: true }
    ]
  },
  {
    kanji: "立",
    readings: { on: ["リツ", "リュウ"], kun: ["た(つ)", "た(てる)"] },
    words: [
      { word: "立つ",   reading: "たつ",       sentence: "まどのまえに○○。",            printable: true },
      { word: "立てる", reading: "たてる",     sentence: "もくひょうを○○。",            printable: true },
      { word: "夕立",   reading: "ゆうだち",   sentence: "なつの○○がふる。",            printable: true },
      { word: "国立",   reading: "こくりつ",   sentence: "○○のはくぶつかんへいく。",    printable: true },
      { word: "立て札", reading: "たてふだ",   sentence: "○○に名まえがかいてある。",    printable: true },
      { word: "起立",   reading: "きりつ",     sentence: "クラスで○○する。",            printable: true }
    ]
  },
  {
    kanji: "力",
    readings: { on: ["リョク", "リキ"], kun: ["ちから"] },
    words: [
      { word: "力",     reading: "ちから",     sentence: "おもいに○○をだす。",          printable: true },
      { word: "気力",   reading: "きりょく",   sentence: "○○いっぱいがんばる。",        printable: true },
      { word: "火力",   reading: "かりょく",   sentence: "なべの○○をよわめる。",        printable: true },
      { word: "水力",   reading: "すいりょく", sentence: "○○ではっでんする。",          printable: true },
      { word: "力学",   reading: "りきがく",   sentence: "○○のじっけんを見る。",        printable: true },
      { word: "全力",   reading: "ぜんりょく", sentence: "○○ではしる。",                printable: true }
    ]
  },
  {
    kanji: "林",
    readings: { on: ["リン"], kun: ["はやし"] },
    words: [
      { word: "林",     reading: "はやし",     sentence: "○○の中をあるく。",            printable: true },
      { word: "森林",   reading: "しんりん",   sentence: "ふかい○○をぬける。",          printable: true },
      { word: "竹林",   reading: "ちくりん",   sentence: "○○でかぜがそよぐ。",          printable: true },
      { word: "山林",   reading: "さんりん",   sentence: "○○をたいせつにする。",        printable: true },
      { word: "林道",   reading: "りんどう",   sentence: "○○をハイキングする。",        printable: true },
      { word: "小林",   reading: "こばやし",   sentence: "○○さんとあそぶ。",            printable: true }
    ]
  },
  {
    kanji: "六",
    readings: { on: ["ロク"], kun: ["む", "む(つ)", "むっ(つ)", "むい"] },
    words: [
      { word: "六つ",   reading: "むっつ",     sentence: "ボタンが○○ある。",            printable: true },
      { word: "六月",   reading: "ろくがつ",   sentence: "○○はつゆのきせつだ。",        printable: true },
      { word: "六日",   reading: "むいか",     sentence: "あと○○でしけんだ。",          printable: true },
      { word: "六人",   reading: "ろくにん",   sentence: "○○でゲームをする。",          printable: true },
      { word: "六本",   reading: "ろっぽん",   sentence: "テープを○○きる。",            printable: true },
      { word: "六時",   reading: "ろくじ",     sentence: "あさ○○におきる。",            printable: true }
    ]
  }
];

window.KANJI_DATA_G1_META = {
  version: "1.0.0",
  generatedAt: "2026-05-27",
  generator: "claude-opus-4-7 (initial seed)",
  reviewedBy: null,
  schemaVersion: 1,
  status: "draft"
};
