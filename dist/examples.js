// Learning examples authored for this app; not quotations.
const WORD_EXAMPLES = {
  "core:1": {
    "fr": "Je parle français.",
    "ja": "私はフランス語を話します。"
  },
  "core:2": {
    "fr": "Tu viens demain ?",
    "ja": "君は明日来ますか。"
  },
  "core:3": {
    "fr": "Il habite ici.",
    "ja": "彼はここに住んでいます。"
  },
  "core:4": {
    "fr": "Elle aime lire.",
    "ja": "彼女は読書が好きです。"
  },
  "core:5": {
    "fr": "Nous allons au parc.",
    "ja": "私たちは公園へ行きます。"
  },
  "core:6": {
    "fr": "Vous avez le temps ?",
    "ja": "お時間はありますか。"
  },
  "core:7": {
    "fr": "Ils jouent ensemble.",
    "ja": "彼らは一緒に遊んでいます。"
  },
  "core:8": {
    "fr": "Elles travaillent ici.",
    "ja": "彼女たちはここで働いています。"
  },
  "core:9": {
    "fr": "On mange à midi.",
    "ja": "私たちは正午に食事をします。"
  },
  "core:10": {
    "fr": "Le train arrive.",
    "ja": "その列車が到着します。"
  },
  "core:11": {
    "fr": "La porte est ouverte.",
    "ja": "ドアは開いています。"
  },
  "core:12": {
    "fr": "Les enfants dorment.",
    "ja": "子どもたちは眠っています。"
  },
  "core:13": {
    "fr": "J’ai un livre.",
    "ja": "私は本を1冊持っています。"
  },
  "core:14": {
    "fr": "Voici une pomme.",
    "ja": "ここにリンゴが1個あります。"
  },
  "core:15": {
    "fr": "C’est le sac de Marie.",
    "ja": "これはマリーのかばんです。"
  },
  "core:16": {
    "fr": "Je vais à Paris.",
    "ja": "私はパリへ行きます。"
  },
  "core:17": {
    "fr": "Paul et Marie arrivent.",
    "ja": "ポールとマリーが到着します。"
  },
  "core:18": {
    "fr": "Tu veux du thé ou du café ?",
    "ja": "紅茶とコーヒーのどちらが欲しいですか。"
  },
  "core:19": {
    "fr": "Il fait froid, mais il fait beau.",
    "ja": "寒いですが、天気は良いです。"
  },
  "core:20": {
    "fr": "Je pense que tu as raison.",
    "ja": "君が正しいと思います。"
  },
  "core:21": {
    "fr": "La personne qui parle est mon père.",
    "ja": "話している人は私の父です。"
  },
  "core:22": {
    "fr": "Ce cadeau est pour toi.",
    "ja": "この贈り物は君のためのものです。"
  },
  "core:23": {
    "fr": "Je viens avec ma sœur.",
    "ja": "私は姉と一緒に来ます。"
  },
  "core:24": {
    "fr": "Je bois mon café sans sucre.",
    "ja": "私はコーヒーを砂糖なしで飲みます。"
  },
  "core:25": {
    "fr": "Le livre est dans le sac.",
    "ja": "本はかばんの中にあります。"
  },
  "core:26": {
    "fr": "Je veux être médecin.",
    "ja": "私は医師になりたいです。"
  },
  "core:27": {
    "fr": "Elle a deux frères.",
    "ja": "彼女には兄弟が2人います。"
  },
  "core:28": {
    "fr": "Nous allons faire un gâteau.",
    "ja": "私たちはケーキを作る予定です。"
  },
  "core:29": {
    "fr": "Je vais au marché.",
    "ja": "私は市場へ行きます。"
  },
  "core:30": {
    "fr": "Tu peux venir chez moi.",
    "ja": "私の家に来てもいいですよ。"
  },
  "core:31": {
    "fr": "Je peux vous aider.",
    "ja": "私はあなたを手伝えます。"
  },
  "core:32": {
    "fr": "Je veux apprendre le français.",
    "ja": "私はフランス語を学びたいです。"
  },
  "core:33": {
    "fr": "Je dois partir maintenant.",
    "ja": "私は今出発しなければなりません。"
  },
  "core:34": {
    "fr": "Elle sait nager.",
    "ja": "彼女は泳げます。"
  },
  "core:35": {
    "fr": "Il dit bonjour.",
    "ja": "彼はこんにちはと言います。"
  },
  "core:36": {
    "fr": "Je vois la mer.",
    "ja": "私には海が見えます。"
  },
  "core:37": {
    "fr": "Je prends le train.",
    "ja": "私は列車に乗ります。"
  },
  "core:38": {
    "fr": "Je mets mon manteau.",
    "ja": "私はコートを着ます。"
  },
  "core:39": {
    "fr": "Elle donne un livre à Paul.",
    "ja": "彼女はポールに本を1冊あげます。"
  },
  "core:40": {
    "fr": "Nous parlons français.",
    "ja": "私たちはフランス語を話します。"
  },
  "core:41": {
    "fr": "J’aime la musique.",
    "ja": "私は音楽が好きです。"
  },
  "core:42": {
    "fr": "Je pense à toi.",
    "ja": "私は君のことを考えています。"
  },
  "core:43": {
    "fr": "Je trouve mes clés.",
    "ja": "私は自分の鍵を見つけます。"
  },
  "core:44": {
    "fr": "Je connais cette ville.",
    "ja": "私はこの町を知っています。"
  },
  "core:45": {
    "fr": "Je comprends la question.",
    "ja": "私はその質問を理解しています。"
  },
  "core:46": {
    "fr": "Je crois cette histoire.",
    "ja": "私はこの話を信じます。"
  },
  "core:47": {
    "fr": "Nous passons la soirée ensemble.",
    "ja": "私たちは夜を一緒に過ごします。"
  },
  "core:48": {
    "fr": "Elle demande de l’aide.",
    "ja": "彼女は助けを求めます。"
  },
  "core:49": {
    "fr": "Il répond à ma question.",
    "ja": "彼は私の質問に答えます。"
  },
  "core:50": {
    "fr": "Je regarde un film.",
    "ja": "私は映画を見ています。"
  },
  "core:51": {
    "fr": "J’écoute la radio.",
    "ja": "私はラジオを聞いています。"
  },
  "core:52": {
    "fr": "Elle lit un roman.",
    "ja": "彼女は小説を読んでいます。"
  },
  "core:53": {
    "fr": "J’écris une lettre.",
    "ja": "私は手紙を書いています。"
  },
  "core:54": {
    "fr": "Nous apprenons le français.",
    "ja": "私たちはフランス語を学んでいます。"
  },
  "core:55": {
    "fr": "Il travaille à la maison.",
    "ja": "彼は家で働いています。"
  },
  "core:56": {
    "fr": "Je mange une pomme.",
    "ja": "私はリンゴを食べます。"
  },
  "core:57": {
    "fr": "Elle boit de l’eau.",
    "ja": "彼女は水を飲みます。"
  },
  "core:58": {
    "fr": "Le bébé dort.",
    "ja": "赤ちゃんは眠っています。"
  },
  "core:59": {
    "fr": "Nous vivons à Lyon.",
    "ja": "私たちはリヨンで暮らしています。"
  },
  "core:60": {
    "fr": "Le train part à huit heures.",
    "ja": "列車は8時に出発します。"
  },
  "core:61": {
    "fr": "Elle arrive demain.",
    "ja": "彼女は明日到着します。"
  },
  "core:62": {
    "fr": "Je reste ici.",
    "ja": "私はここに残ります。"
  },
  "core:63": {
    "fr": "Nous sortons ce soir.",
    "ja": "私たちは今夜出かけます。"
  },
  "core:64": {
    "fr": "Il entre dans la chambre.",
    "ja": "彼は部屋に入ります。"
  },
  "core:65": {
    "fr": "Je retourne à Paris.",
    "ja": "私はパリに戻ります。"
  },
  "core:66": {
    "fr": "J’attends le bus.",
    "ja": "私はバスを待っています。"
  },
  "core:67": {
    "fr": "Je cherche mes lunettes.",
    "ja": "私は眼鏡を探しています。"
  },
  "core:68": {
    "fr": "Elle achète du pain.",
    "ja": "彼女はパンを買います。"
  },
  "core:69": {
    "fr": "Il vend sa voiture.",
    "ja": "彼は自分の車を売ります。"
  },
  "core:70": {
    "fr": "Je paie par carte.",
    "ja": "私はカードで支払います。"
  },
  "core:71": {
    "fr": "J’ouvre la fenêtre.",
    "ja": "私は窓を開けます。"
  },
  "core:72": {
    "fr": "Elle ferme la porte.",
    "ja": "彼女はドアを閉めます。"
  },
  "core:73": {
    "fr": "Le cours commence à neuf heures.",
    "ja": "授業は9時に始まります。"
  },
  "core:74": {
    "fr": "Je finis mon travail.",
    "ja": "私は自分の仕事を終えます。"
  },
  "core:75": {
    "fr": "Nous continuons la lecture.",
    "ja": "私たちは読書を続けます。"
  },
  "core:76": {
    "fr": "Cette personne est gentille.",
    "ja": "この人は親切です。"
  },
  "core:77": {
    "fr": "Un homme attend dehors.",
    "ja": "男性が1人、外で待っています。"
  },
  "core:78": {
    "fr": "Cette femme est médecin.",
    "ja": "この女性は医師です。"
  },
  "core:79": {
    "fr": "L’enfant joue dans le jardin.",
    "ja": "子どもは庭で遊んでいます。"
  },
  "core:80": {
    "fr": "Mon ami habite à Paris.",
    "ja": "私の友人はパリに住んでいます。"
  },
  "core:81": {
    "fr": "Ma famille est ici.",
    "ja": "私の家族はここにいます。"
  },
  "core:82": {
    "fr": "Mon père aime cuisiner.",
    "ja": "私の父は料理が好きです。"
  },
  "core:83": {
    "fr": "Ma mère lit le journal.",
    "ja": "私の母は新聞を読んでいます。"
  },
  "core:84": {
    "fr": "Mon frère travaille à Lyon.",
    "ja": "私の兄はリヨンで働いています。"
  },
  "core:85": {
    "fr": "Ma sœur arrive demain.",
    "ja": "私の姉は明日到着します。"
  },
  "core:86": {
    "fr": "Notre maison est petite.",
    "ja": "私たちの家は小さいです。"
  },
  "core:87": {
    "fr": "Cet appartement est lumineux.",
    "ja": "このアパートは明るいです。"
  },
  "core:88": {
    "fr": "Ma chambre est calme.",
    "ja": "私の部屋は静かです。"
  },
  "core:89": {
    "fr": "Cette ville est belle.",
    "ja": "この町は美しいです。"
  },
  "core:90": {
    "fr": "Je visite un nouveau pays.",
    "ja": "私は初めての国を訪れます。"
  },
  "core:91": {
    "fr": "Elle voyage dans le monde entier.",
    "ja": "彼女は世界中を旅します。"
  },
  "core:92": {
    "fr": "La vie change vite.",
    "ja": "人生はすぐに変わります。"
  },
  "core:93": {
    "fr": "Je lis chaque jour.",
    "ja": "私は毎日読書をします。"
  },
  "core:94": {
    "fr": "La nuit est calme.",
    "ja": "夜は静かです。"
  },
  "core:95": {
    "fr": "Je cours le matin.",
    "ja": "私は朝に走ります。"
  },
  "core:96": {
    "fr": "Nous sortons ce soir.",
    "ja": "私たちは今夜出かけます。"
  },
  "core:97": {
    "fr": "Je reste une semaine.",
    "ja": "私は1週間滞在します。"
  },
  "core:98": {
    "fr": "Il revient le mois prochain.",
    "ja": "彼は来月戻ってきます。"
  },
  "core:99": {
    "fr": "Cette année, je voyage.",
    "ja": "今年、私は旅行します。"
  },
  "core:100": {
    "fr": "Quelle heure est-il ?",
    "ja": "今何時ですか。"
  },
  "core:101": {
    "fr": "Attends une minute.",
    "ja": "1分待ってください。"
  },
  "core:102": {
    "fr": "C’est un bon moment.",
    "ja": "今は良いタイミングです。"
  },
  "core:103": {
    "fr": "Je n’ai pas le temps.",
    "ja": "私には時間がありません。"
  },
  "core:104": {
    "fr": "Je lis ce texte deux fois.",
    "ja": "私はこの文章を2回読みます。"
  },
  "core:105": {
    "fr": "Aujourd’hui, il fait beau.",
    "ja": "今日は天気が良いです。"
  },
  "core:106": {
    "fr": "Je pars demain.",
    "ja": "私は明日出発します。"
  },
  "core:107": {
    "fr": "Hier, il a plu.",
    "ja": "昨日は雨が降りました。"
  },
  "core:108": {
    "fr": "Mon travail commence tôt.",
    "ja": "私の仕事は早く始まります。"
  },
  "core:109": {
    "fr": "L’école est près d’ici.",
    "ja": "学校はこの近くにあります。"
  },
  "core:110": {
    "fr": "Ce livre est intéressant.",
    "ja": "この本は面白いです。"
  },
  "core:111": {
    "fr": "Je cherche un mot.",
    "ja": "私はある単語を探しています。"
  },
  "core:112": {
    "fr": "Elle parle trois langues.",
    "ja": "彼女は3つの言語を話します。"
  },
  "core:113": {
    "fr": "J’ai une question.",
    "ja": "私は質問があります。"
  },
  "core:114": {
    "fr": "Je connais la réponse.",
    "ja": "私は答えを知っています。"
  },
  "core:115": {
    "fr": "C’est une bonne idée.",
    "ja": "それは良い考えです。"
  },
  "core:116": {
    "fr": "J’ai une chose à dire.",
    "ja": "私は1つ言うことがあります。"
  },
  "core:117": {
    "fr": "Nous avons un problème.",
    "ja": "私たちは問題を抱えています。"
  },
  "core:118": {
    "fr": "Je comprends la raison.",
    "ja": "私はその理由を理解しています。"
  },
  "core:119": {
    "fr": "J’ai besoin de repos.",
    "ja": "私には休息が必要です。"
  },
  "core:120": {
    "fr": "Il économise de l’argent.",
    "ja": "彼はお金を節約しています。"
  },
  "core:121": {
    "fr": "Quel est le prix ?",
    "ja": "値段はいくらですか。"
  },
  "core:122": {
    "fr": "Quel est votre nom ?",
    "ja": "お名前は何ですか。"
  },
  "core:123": {
    "fr": "Le nombre de visiteurs augmente.",
    "ja": "訪問者の数が増えています。"
  },
  "core:124": {
    "fr": "Je lis la première partie.",
    "ja": "私は最初の部分を読みます。"
  },
  "core:125": {
    "fr": "C’est la fin du film.",
    "ja": "映画はこれで終わりです。"
  },
  "core:126": {
    "fr": "Elle lève la main.",
    "ja": "彼女は手を上げます。"
  },
  "core:127": {
    "fr": "J’ai mal à la tête.",
    "ja": "私は頭が痛いです。"
  },
  "core:128": {
    "fr": "Il ferme un œil.",
    "ja": "彼は片目を閉じます。"
  },
  "core:129": {
    "fr": "Le corps a besoin de repos.",
    "ja": "身体には休息が必要です。"
  },
  "core:130": {
    "fr": "Je bois de l’eau.",
    "ja": "私は水を飲みます。"
  },
  "core:131": {
    "fr": "Le pain est frais.",
    "ja": "パンは焼きたてです。"
  },
  "core:132": {
    "fr": "Je prends un café.",
    "ja": "私はコーヒーを1杯飲みます。"
  },
  "core:133": {
    "fr": "Le repas est prêt.",
    "ja": "食事の準備ができています。"
  },
  "core:134": {
    "fr": "Cette rue est calme.",
    "ja": "この通りは静かです。"
  },
  "core:135": {
    "fr": "Ma voiture est rouge.",
    "ja": "私の車は赤いです。"
  },
  "core:136": {
    "fr": "Le train est en retard.",
    "ja": "列車は遅れています。"
  },
  "core:137": {
    "fr": "Ce chemin mène au village.",
    "ja": "この道は村に通じています。"
  },
  "core:138": {
    "fr": "Nous traversons la place.",
    "ja": "私たちは広場を横切ります。"
  },
  "core:139": {
    "fr": "La porte est fermée.",
    "ja": "ドアは閉まっています。"
  },
  "core:140": {
    "fr": "Le livre est sur la table.",
    "ja": "本はテーブルの上にあります。"
  },
  "core:141": {
    "fr": "C’est un bon repas.",
    "ja": "これはおいしい食事です。"
  },
  "core:142": {
    "fr": "C’est un mauvais exemple.",
    "ja": "これは悪い例です。"
  },
  "core:143": {
    "fr": "Ce jardin est grand.",
    "ja": "この庭は広いです。"
  },
  "core:144": {
    "fr": "Mon sac est petit.",
    "ja": "私のかばんは小さいです。"
  },
  "core:145": {
    "fr": "J’ai un nouveau vélo.",
    "ja": "私は新しい自転車を持っています。"
  },
  "core:146": {
    "fr": "C’est un vieux livre.",
    "ja": "これは古い本です。"
  },
  "core:147": {
    "fr": "Mon frère est jeune.",
    "ja": "私の弟は若いです。"
  },
  "core:148": {
    "fr": "Le paysage est beau.",
    "ja": "景色は美しいです。"
  },
  "core:149": {
    "fr": "Ce dessin est joli.",
    "ja": "この絵はきれいです。"
  },
  "core:150": {
    "fr": "Ce message est important.",
    "ja": "このメッセージは重要です。"
  },
  "core:151": {
    "fr": "Un changement est possible.",
    "ja": "変更は可能です。"
  },
  "core:152": {
    "fr": "Ce voyage est impossible.",
    "ja": "この旅行は不可能です。"
  },
  "core:153": {
    "fr": "Cet exercice est facile.",
    "ja": "この練習問題は簡単です。"
  },
  "core:154": {
    "fr": "Cette question est difficile.",
    "ja": "この質問は難しいです。"
  },
  "core:155": {
    "fr": "Ce récit est vrai.",
    "ja": "この話は本当です。"
  },
  "core:156": {
    "fr": "Ce résultat est faux.",
    "ja": "この結果は間違っています。"
  },
  "core:157": {
    "fr": "Nous avons le même livre.",
    "ja": "私たちは同じ本を持っています。"
  },
  "core:158": {
    "fr": "Il voyage seul.",
    "ja": "彼は1人で旅をします。"
  },
  "core:159": {
    "fr": "Je cherche un autre chemin.",
    "ja": "私は別の道を探しています。"
  },
  "core:160": {
    "fr": "C’est mon premier voyage.",
    "ja": "これは私の初めての旅行です。"
  },
  "core:161": {
    "fr": "C’est le dernier train.",
    "ja": "これは最終列車です。"
  },
  "core:162": {
    "fr": "Le trajet est long.",
    "ja": "道のりは長いです。"
  },
  "core:163": {
    "fr": "Ce texte est court.",
    "ja": "この文章は短いです。"
  },
  "core:164": {
    "fr": "Ce mur est haut.",
    "ja": "この壁は高いです。"
  },
  "core:165": {
    "fr": "Le plafond est bas.",
    "ja": "天井は低いです。"
  },
  "core:166": {
    "fr": "Le vent est fort.",
    "ja": "風は強いです。"
  },
  "core:167": {
    "fr": "Le signal est faible.",
    "ja": "信号は弱いです。"
  },
  "core:168": {
    "fr": "Le café est chaud.",
    "ja": "コーヒーは熱いです。"
  },
  "core:169": {
    "fr": "Le repas est froid.",
    "ja": "食事は冷たいです。"
  },
  "core:170": {
    "fr": "Il est heureux ici.",
    "ja": "彼はここで幸せに暮らしています。"
  },
  "core:171": {
    "fr": "Ce film est triste.",
    "ja": "この映画は悲しいです。"
  },
  "core:172": {
    "fr": "Je suis libre demain.",
    "ja": "私は明日、時間が空いています。"
  },
  "core:173": {
    "fr": "Le bus est plein.",
    "ja": "バスは満員です。"
  },
  "core:174": {
    "fr": "Le verre est vide.",
    "ja": "グラスは空です。"
  },
  "core:175": {
    "fr": "Ce manteau est cher.",
    "ja": "このコートは高価です。"
  },
  "core:176": {
    "fr": "Cette famille est pauvre.",
    "ja": "この家族は貧しいです。"
  },
  "core:177": {
    "fr": "Ce pays est riche.",
    "ja": "この国は豊かです。"
  },
  "core:178": {
    "fr": "La réponse est simple.",
    "ja": "答えは簡単です。"
  },
  "core:179": {
    "fr": "Je ne comprends pas.",
    "ja": "私は理解できません。"
  },
  "core:180": {
    "fr": "Il ne vient pas.",
    "ja": "彼は来ません。"
  },
  "core:181": {
    "fr": "Où habitez-vous ?",
    "ja": "どこにお住まいですか。"
  },
  "core:182": {
    "fr": "Quand partez-vous ?",
    "ja": "いつ出発しますか。"
  },
  "core:183": {
    "fr": "Comment allez-vous ?",
    "ja": "お元気ですか。"
  },
  "core:184": {
    "fr": "Pourquoi pars-tu ?",
    "ja": "なぜ君は出発するのですか。"
  },
  "core:185": {
    "fr": "Tu penses à quoi ?",
    "ja": "君は何を考えていますか。"
  },
  "core:186": {
    "fr": "Quel livre veux-tu ?",
    "ja": "君はどの本が欲しいですか。"
  },
  "core:187": {
    "fr": "Tout le monde est là.",
    "ja": "みんなそこにいます。"
  },
  "core:188": {
    "fr": "Je ne vois rien.",
    "ja": "私には何も見えません。"
  },
  "core:189": {
    "fr": "Je marche chaque matin.",
    "ja": "私は毎朝歩きます。"
  },
  "core:190": {
    "fr": "Il reste quelque espoir.",
    "ja": "まだいくらか希望があります。"
  },
  "core:191": {
    "fr": "Voici le livre dont je parle.",
    "ja": "これが私の話している本です。"
  },
  "core:192": {
    "fr": "Nous passons par Lyon.",
    "ja": "私たちはリヨンを通ります。"
  },
  "core:193": {
    "fr": "Cela me plaît.",
    "ja": "私はそれが気に入っています。"
  },
  "core:194": {
    "fr": "Ça va bien.",
    "ja": "調子は良いです。"
  },
  "core:195": {
    "fr": "Je prends celui de gauche.",
    "ja": "私は左のものを取ります。"
  },
  "core:196": {
    "fr": "Je préfère celle de droite.",
    "ja": "私は右のもののほうが好きです。"
  },
  "core:197": {
    "fr": "Je n’ai aucun doute.",
    "ja": "私はまったく疑っていません。"
  },
  "core:198": {
    "fr": "J’ai plusieurs idées.",
    "ja": "私はいくつか考えがあります。"
  },
  "core:199": {
    "fr": "Ils sont tous ici.",
    "ja": "彼らは全員ここにいます。"
  },
  "core:200": {
    "fr": "Il viendra peut-être demain.",
    "ja": "彼はたぶん明日来るでしょう。"
  },
  "core:201": {
    "fr": "J’utilise un dictionnaire.",
    "ja": "私は辞書を使います。"
  },
  "core:202": {
    "fr": "Je veux essayer cette méthode.",
    "ja": "私はこの方法を試したいです。"
  },
  "core:203": {
    "fr": "Elle choisit un livre.",
    "ja": "彼女は本を1冊選びます。"
  },
  "core:204": {
    "fr": "Nous décidons de partir.",
    "ja": "私たちは出発することを決めます。"
  },
  "core:205": {
    "fr": "Je change de travail.",
    "ja": "私は仕事を変えます。"
  },
  "core:206": {
    "fr": "Il porte une chemise blanche.",
    "ja": "彼は白いシャツを着ています。"
  },
  "core:207": {
    "fr": "Je laisse la clé ici.",
    "ja": "私は鍵をここに置いていきます。"
  },
  "core:208": {
    "fr": "Tu peux garder ce livre.",
    "ja": "この本は持っていていいですよ。"
  },
  "core:209": {
    "fr": "Elle montre une photo.",
    "ja": "彼女は写真を見せます。"
  },
  "core:210": {
    "fr": "Il explique la règle.",
    "ja": "彼は規則を説明します。"
  },
  "core:211": {
    "fr": "Elle raconte une histoire.",
    "ja": "彼女は物語を話して聞かせます。"
  },
  "core:212": {
    "fr": "J’appelle mon frère.",
    "ja": "私は兄に電話をします。"
  },
  "core:213": {
    "fr": "Je téléphone à ma mère.",
    "ja": "私は母に電話をします。"
  },
  "core:214": {
    "fr": "Il envoie un message.",
    "ja": "彼はメッセージを送ります。"
  },
  "core:215": {
    "fr": "Je reçois une lettre.",
    "ja": "私は手紙を受け取ります。"
  },
  "core:216": {
    "fr": "Elle apporte du pain.",
    "ja": "彼女はパンを持ってきます。"
  },
  "core:217": {
    "fr": "Il emmène son fils au parc.",
    "ja": "彼は息子を公園に連れていきます。"
  },
  "core:218": {
    "fr": "Je suis le guide.",
    "ja": "私はガイドの後についていきます。"
  },
  "core:219": {
    "fr": "Elle conduit une voiture.",
    "ja": "彼女は車を運転します。"
  },
  "core:220": {
    "fr": "Nous marchons ensemble.",
    "ja": "私たちは一緒に歩きます。"
  },
  "core:221": {
    "fr": "Il court chaque matin.",
    "ja": "彼は毎朝走ります。"
  },
  "core:222": {
    "fr": "Elle joue du piano.",
    "ja": "彼女はピアノを弾きます。"
  },
  "core:223": {
    "fr": "Je rencontre un ami.",
    "ja": "私は友人に会います。"
  },
  "core:224": {
    "fr": "Nous visitons un musée.",
    "ja": "私たちは美術館を訪れます。"
  },
  "core:225": {
    "fr": "J’invite mes voisins.",
    "ja": "私は隣人たちを招待します。"
  },
  "core:226": {
    "fr": "Il aide sa sœur.",
    "ja": "彼は妹を手伝います。"
  },
  "core:227": {
    "fr": "Je prépare le repas.",
    "ja": "私は食事を準備します。"
  },
  "core:228": {
    "fr": "Nous aimons cuisiner.",
    "ja": "私たちは料理をするのが好きです。"
  },
  "core:229": {
    "fr": "Elle nettoie la cuisine.",
    "ja": "彼女は台所を掃除します。"
  },
  "core:230": {
    "fr": "Je lave les légumes.",
    "ja": "私は野菜を洗います。"
  },
  "core:231": {
    "fr": "Il coupe le pain.",
    "ja": "彼はパンを切ります。"
  },
  "core:232": {
    "fr": "Elle remplit son verre.",
    "ja": "彼女は自分のグラスを満たします。"
  },
  "core:233": {
    "fr": "J’ajoute du sel.",
    "ja": "私は塩を加えます。"
  },
  "core:234": {
    "fr": "Il enlève ses chaussures.",
    "ja": "彼は靴を脱ぎます。"
  },
  "core:235": {
    "fr": "Je perds souvent mes clés.",
    "ja": "私はよく鍵をなくします。"
  },
  "core:236": {
    "fr": "Notre équipe gagne le match.",
    "ja": "私たちのチームは試合に勝ちます。"
  },
  "core:237": {
    "fr": "J’oublie son nom.",
    "ja": "私は彼の名前を忘れてしまいます。"
  },
  "core:238": {
    "fr": "Je te rappelle demain.",
    "ja": "私は明日、君に折り返し電話します。"
  },
  "core:239": {
    "fr": "Je me souviens de ce jour.",
    "ja": "私はその日を覚えています。"
  },
  "core:240": {
    "fr": "J’espère te revoir.",
    "ja": "私は君にまた会えることを願っています。"
  },
  "core:241": {
    "fr": "Je préfère le thé.",
    "ja": "私は紅茶のほうが好きです。"
  },
  "core:242": {
    "fr": "Elle déteste le bruit.",
    "ja": "彼女は騒音が大嫌いです。"
  },
  "core:243": {
    "fr": "Cette fleur sent bon.",
    "ja": "この花は良い香りがします。"
  },
  "core:244": {
    "fr": "J’entends la pluie.",
    "ja": "私には雨の音が聞こえます。"
  },
  "core:245": {
    "fr": "Ne touche pas ce verre.",
    "ja": "このグラスに触らないでください。"
  },
  "core:246": {
    "fr": "Il tient la main de son fils.",
    "ja": "彼は息子の手を握っています。"
  },
  "core:247": {
    "fr": "Elle obtient un visa.",
    "ja": "彼女はビザを取得します。"
  },
  "core:248": {
    "fr": "Il offre des fleurs à sa mère.",
    "ja": "彼は母に花を贈ります。"
  },
  "core:249": {
    "fr": "J’accepte votre invitation.",
    "ja": "私はあなたの招待を受け入れます。"
  },
  "core:250": {
    "fr": "Elle refuse cette offre.",
    "ja": "彼女はこの申し出を断ります。"
  },
  "core:251": {
    "fr": "Je propose une promenade.",
    "ja": "私は散歩を提案します。"
  },
  "core:252": {
    "fr": "Ce billet permet d’entrer.",
    "ja": "この切符で入場できます。"
  },
  "core:253": {
    "fr": "La règle interdit de fumer.",
    "ja": "規則は喫煙を禁止しています。"
  },
  "core:254": {
    "fr": "Il faut attendre.",
    "ja": "待つ必要があります。"
  },
  "core:255": {
    "fr": "Il semble fatigué.",
    "ja": "彼は疲れているようです。"
  },
  "core:256": {
    "fr": "Elle devient médecin.",
    "ja": "彼女は医師になります。"
  },
  "core:257": {
    "fr": "Je reviens ce soir.",
    "ja": "私は今夜戻ってきます。"
  },
  "core:258": {
    "fr": "Nous rentrons à la maison.",
    "ja": "私たちは家に帰ります。"
  },
  "core:259": {
    "fr": "Elle monte dans le bus.",
    "ja": "彼女はバスに乗ります。"
  },
  "core:260": {
    "fr": "Je descends à la prochaine station.",
    "ja": "私は次の駅で降ります。"
  },
  "core:261": {
    "fr": "La neige tombe.",
    "ja": "雪が降っています。"
  },
  "core:262": {
    "fr": "Il est né à Paris.",
    "ja": "彼はパリで生まれました。"
  },
  "core:263": {
    "fr": "Cette plante risque de mourir.",
    "ja": "この植物は枯れるおそれがあります。"
  },
  "core:264": {
    "fr": "Une autre solution existe.",
    "ja": "別の解決策があります。"
  },
  "core:265": {
    "fr": "L’enfant compte jusqu’à dix.",
    "ja": "子どもは10まで数えます。"
  },
  "core:266": {
    "fr": "J’ai besoin de repos.",
    "ja": "私には休息が必要です。"
  },
  "core:267": {
    "fr": "Les vacances commencent demain.",
    "ja": "休暇は明日始まります。"
  },
  "core:268": {
    "fr": "Je travaille ce week-end.",
    "ja": "私は今週末に働きます。"
  },
  "core:269": {
    "fr": "Quelle est ta saison préférée ?",
    "ja": "君の好きな季節は何ですか。"
  },
  "core:270": {
    "fr": "Les fleurs reviennent au printemps.",
    "ja": "春になると再び花が咲きます。"
  },
  "core:271": {
    "fr": "Nous voyageons en été.",
    "ja": "私たちは夏に旅行します。"
  },
  "core:272": {
    "fr": "Les feuilles tombent en automne.",
    "ja": "秋に葉が落ちます。"
  },
  "core:273": {
    "fr": "Il neige en hiver.",
    "ja": "冬には雪が降ります。"
  },
  "core:274": {
    "fr": "Écris la date ici.",
    "ja": "ここに日付を書いてください。"
  },
  "core:275": {
    "fr": "Quel âge as-tu ?",
    "ja": "君は何歳ですか。"
  },
  "core:276": {
    "fr": "C’est mon anniversaire.",
    "ja": "今日は私の誕生日です。"
  },
  "core:277": {
    "fr": "Je connais le début de l’histoire.",
    "ja": "私は物語の始まりを知っています。"
  },
  "core:278": {
    "fr": "La table est au milieu de la pièce.",
    "ja": "テーブルは部屋の真ん中にあります。"
  },
  "core:279": {
    "fr": "C’est une bonne occasion.",
    "ja": "これは良い機会です。"
  },
  "core:280": {
    "fr": "Le bus a du retard.",
    "ja": "バスは遅れています。"
  },
  "core:281": {
    "fr": "Nous arrivons en avance.",
    "ja": "私たちは予定より早く到着します。"
  },
  "core:282": {
    "fr": "Je travaille toute la matinée.",
    "ja": "私は午前中ずっと働きます。"
  },
  "core:283": {
    "fr": "Nous passons une bonne soirée.",
    "ja": "私たちは楽しい夜を過ごしています。"
  },
  "core:284": {
    "fr": "Chaque parent reçoit une lettre.",
    "ja": "それぞれの保護者が手紙を受け取ります。"
  },
  "core:285": {
    "fr": "Son mari est professeur.",
    "ja": "彼女の夫は教師です。"
  },
  "core:286": {
    "fr": "Son épouse travaille ici.",
    "ja": "彼の妻はここで働いています。"
  },
  "core:287": {
    "fr": "Mon fils aime lire.",
    "ja": "私の息子は読書が好きです。"
  },
  "core:288": {
    "fr": "Ma fille apprend le français.",
    "ja": "私の娘はフランス語を学んでいます。"
  },
  "core:289": {
    "fr": "Le bébé sourit.",
    "ja": "赤ちゃんがほほ笑んでいます。"
  },
  "core:290": {
    "fr": "Mon voisin est gentil.",
    "ja": "私の隣人は親切です。"
  },
  "core:291": {
    "fr": "Ma collègue arrive bientôt.",
    "ja": "私の女性の同僚はもうすぐ到着します。"
  },
  "core:292": {
    "fr": "Cet étudiant pose une question.",
    "ja": "この学生は質問をします。"
  },
  "core:293": {
    "fr": "Le professeur explique la leçon.",
    "ja": "先生は授業の内容を説明します。"
  },
  "core:294": {
    "fr": "Je consulte un médecin.",
    "ja": "私は医師の診察を受けます。"
  },
  "core:295": {
    "fr": "Le client attend sa commande.",
    "ja": "客は注文したものを待っています。"
  },
  "core:296": {
    "fr": "Les gens attendent dehors.",
    "ja": "人々は外で待っています。"
  },
  "core:297": {
    "fr": "Notre groupe visite le musée.",
    "ja": "私たちのグループは美術館を訪れます。"
  },
  "core:298": {
    "fr": "L’équipe travaille ensemble.",
    "ja": "チームは一緒に働きます。"
  },
  "core:299": {
    "fr": "Elle raconte une histoire.",
    "ja": "彼女は物語を話します。"
  },
  "core:300": {
    "fr": "Cette information est utile.",
    "ja": "この情報は役に立ちます。"
  },
  "core:301": {
    "fr": "J’ai une bonne nouvelle.",
    "ja": "私は良い知らせがあります。"
  },
  "core:302": {
    "fr": "Je lis ton message.",
    "ja": "私は君のメッセージを読みます。"
  },
  "core:303": {
    "fr": "Elle écrit une lettre.",
    "ja": "彼女は手紙を書きます。"
  },
  "core:304": {
    "fr": "J’envoie un courriel.",
    "ja": "私はメールを送ります。"
  },
  "core:305": {
    "fr": "Mon téléphone sonne.",
    "ja": "私の電話が鳴っています。"
  },
  "core:306": {
    "fr": "L’ordinateur est sur le bureau.",
    "ja": "コンピューターは机の上にあります。"
  },
  "core:307": {
    "fr": "Je cherche sur internet.",
    "ja": "私はインターネットで調べます。"
  },
  "core:308": {
    "fr": "Je prends une photo.",
    "ja": "私は写真を撮ります。"
  },
  "core:309": {
    "fr": "Cette image est claire.",
    "ja": "この画像は鮮明です。"
  },
  "core:310": {
    "fr": "J’écoute de la musique.",
    "ja": "私は音楽を聞きます。"
  },
  "core:311": {
    "fr": "Ce film est drôle.",
    "ja": "この映画は面白いです。"
  },
  "core:312": {
    "fr": "Les enfants inventent un jeu.",
    "ja": "子どもたちは遊びを考え出します。"
  },
  "core:313": {
    "fr": "Je fais du sport.",
    "ja": "私はスポーツをします。"
  },
  "core:314": {
    "fr": "Elle gagne la course.",
    "ja": "彼女は競走で勝ちます。"
  },
  "core:315": {
    "fr": "Le magasin ouvre à neuf heures.",
    "ja": "店は9時に開きます。"
  },
  "core:316": {
    "fr": "Je vais au marché.",
    "ja": "私は市場へ行きます。"
  },
  "core:317": {
    "fr": "Ce restaurant est ouvert.",
    "ja": "このレストランは営業しています。"
  },
  "core:318": {
    "fr": "L’hôtel est près de la gare.",
    "ja": "ホテルは駅の近くにあります。"
  },
  "core:319": {
    "fr": "Nous attendons à la gare.",
    "ja": "私たちは駅で待っています。"
  },
  "core:320": {
    "fr": "Le bus va à l’aéroport.",
    "ja": "バスは空港へ行きます。"
  },
  "core:321": {
    "fr": "Je prends le bus.",
    "ja": "私はバスに乗ります。"
  },
  "core:322": {
    "fr": "Le métro est rapide.",
    "ja": "地下鉄は速いです。"
  },
  "core:323": {
    "fr": "Mon vélo est bleu.",
    "ja": "私の自転車は青いです。"
  },
  "core:324": {
    "fr": "L’avion décolle bientôt.",
    "ja": "飛行機はもうすぐ離陸します。"
  },
  "core:325": {
    "fr": "Je prépare mon voyage.",
    "ja": "私は旅行の準備をします。"
  },
  "core:326": {
    "fr": "J’achète un billet de train.",
    "ja": "私は列車の切符を買います。"
  },
  "core:327": {
    "fr": "Gardez votre ticket.",
    "ja": "チケットを保管してください。"
  },
  "core:328": {
    "fr": "Quelle est votre adresse ?",
    "ja": "ご住所はどこですか。"
  },
  "core:329": {
    "fr": "Je note ton numéro.",
    "ja": "私は君の番号を書き留めます。"
  },
  "core:330": {
    "fr": "Cette région est belle.",
    "ja": "この地域は美しいです。"
  },
  "core:331": {
    "fr": "Le village est petit.",
    "ja": "村は小さいです。"
  },
  "core:332": {
    "fr": "J’aime mon quartier.",
    "ja": "私は自分の住む地区が好きです。"
  },
  "core:333": {
    "fr": "Les enfants jouent dans le jardin.",
    "ja": "子どもたちは庭で遊んでいます。"
  },
  "core:334": {
    "fr": "Nous marchons dans le parc.",
    "ja": "私たちは公園を歩きます。"
  },
  "core:335": {
    "fr": "Il prépare le repas dans la cuisine.",
    "ja": "彼は台所で食事を準備します。"
  },
  "core:336": {
    "fr": "La salle est pleine.",
    "ja": "ホールは満員です。"
  },
  "core:337": {
    "fr": "J’ouvre la fenêtre.",
    "ja": "私は窓を開けます。"
  },
  "core:338": {
    "fr": "Le mur est blanc.",
    "ja": "壁は白いです。"
  },
  "core:339": {
    "fr": "Le chat dort sur le lit.",
    "ja": "猫はベッドの上で寝ています。"
  },
  "core:340": {
    "fr": "Cette chaise est libre.",
    "ja": "この椅子は空いています。"
  },
  "core:341": {
    "fr": "Mon livre est sur le bureau.",
    "ja": "私の本は机の上にあります。"
  },
  "core:342": {
    "fr": "Je cherche ma clé.",
    "ja": "私は鍵を探しています。"
  },
  "core:343": {
    "fr": "Ce sac est lourd.",
    "ja": "このかばんは重いです。"
  },
  "core:344": {
    "fr": "Ce vêtement est chaud.",
    "ja": "この衣服は暖かいです。"
  },
  "core:345": {
    "fr": "Cette chaussure est trop petite.",
    "ja": "この靴は小さすぎます。"
  },
  "core:346": {
    "fr": "Il porte une chemise.",
    "ja": "彼はシャツを着ています。"
  },
  "core:347": {
    "fr": "Ce pantalon est noir.",
    "ja": "このズボンは黒いです。"
  },
  "core:348": {
    "fr": "Elle choisit une robe.",
    "ja": "彼女はワンピースを選びます。"
  },
  "core:349": {
    "fr": "J’aime cette couleur.",
    "ja": "私はこの色が好きです。"
  },
  "core:350": {
    "fr": "Quelle taille faites-vous ?",
    "ja": "サイズはいくつですか。"
  },
  "core:351": {
    "fr": "Le chat est blanc.",
    "ja": "猫は白いです。"
  },
  "core:352": {
    "fr": "Mon sac est noir.",
    "ja": "私のかばんは黒いです。"
  },
  "core:353": {
    "fr": "Le vélo est rouge.",
    "ja": "自転車は赤いです。"
  },
  "core:354": {
    "fr": "Le ciel est bleu.",
    "ja": "空は青いです。"
  },
  "core:355": {
    "fr": "Ce pull est vert.",
    "ja": "このセーターは緑色です。"
  },
  "core:356": {
    "fr": "Le mur est jaune.",
    "ja": "壁は黄色いです。"
  },
  "core:357": {
    "fr": "Le ciel est gris.",
    "ja": "空は灰色です。"
  },
  "core:358": {
    "fr": "Ce cheval est brun.",
    "ja": "この馬は茶色です。"
  },
  "core:359": {
    "fr": "Il est fatigué.",
    "ja": "彼は疲れています。"
  },
  "core:360": {
    "fr": "Mon frère est malade.",
    "ja": "私の兄は病気です。"
  },
  "core:361": {
    "fr": "Le médecin est occupé.",
    "ja": "医師は忙しいです。"
  },
  "core:362": {
    "fr": "Ce livre est disponible.",
    "ja": "この本は入手できます。"
  },
  "core:363": {
    "fr": "Le repas est prêt.",
    "ja": "食事の準備ができています。"
  },
  "core:364": {
    "fr": "Un passeport est nécessaire.",
    "ja": "パスポートが必要です。"
  },
  "core:365": {
    "fr": "Ce conseil est utile.",
    "ja": "この助言は役に立ちます。"
  },
  "core:366": {
    "fr": "Ce voyage est inutile.",
    "ja": "この旅行は無駄です。"
  },
  "core:367": {
    "fr": "Ce livre est intéressant.",
    "ja": "この本は面白いです。"
  },
  "core:368": {
    "fr": "Ce film est ennuyeux.",
    "ja": "この映画は退屈です。"
  },
  "core:369": {
    "fr": "Ce dessin est drôle.",
    "ja": "この絵は面白いです。"
  },
  "core:370": {
    "fr": "C’est un problème sérieux.",
    "ja": "これは重大な問題です。"
  },
  "core:371": {
    "fr": "Mon voisin est gentil.",
    "ja": "私の隣人は親切です。"
  },
  "core:372": {
    "fr": "Cet enfant est poli.",
    "ja": "この子は礼儀正しいです。"
  },
  "core:373": {
    "fr": "Le quartier est calme.",
    "ja": "この地区は静かです。"
  },
  "core:374": {
    "fr": "Ce restaurant est bruyant.",
    "ja": "このレストランは騒がしいです。"
  },
  "core:375": {
    "fr": "Ce train est rapide.",
    "ja": "この列車は速いです。"
  },
  "core:376": {
    "fr": "Cet ordinateur est lent.",
    "ja": "このコンピューターは動作が遅いです。"
  },
  "core:377": {
    "fr": "Le sac est lourd.",
    "ja": "かばんは重いです。"
  },
  "core:378": {
    "fr": "Ce vélo est léger.",
    "ja": "この自転車は軽いです。"
  },
  "core:379": {
    "fr": "Le pain est sec.",
    "ja": "パンは乾燥しています。"
  },
  "core:380": {
    "fr": "Le sol est humide.",
    "ja": "地面は湿っています。"
  },
  "core:381": {
    "fr": "Le magasin est ouvert.",
    "ja": "店は開いています。"
  },
  "core:382": {
    "fr": "Le musée est fermé.",
    "ja": "美術館は閉まっています。"
  },
  "core:383": {
    "fr": "Il mange un gâteau entier.",
    "ja": "彼はケーキを丸ごと1個食べます。"
  },
  "core:384": {
    "fr": "Le résultat est certain.",
    "ja": "結果は確実です。"
  },
  "core:385": {
    "fr": "Nous avons des goûts différents.",
    "ja": "私たちは好みが異なります。"
  },
  "core:386": {
    "fr": "Ce livre est à moi.",
    "ja": "この本は私のものです。"
  },
  "core:387": {
    "fr": "Cet arbre est grand.",
    "ja": "この木は大きいです。"
  },
  "core:388": {
    "fr": "Cette maison est belle.",
    "ja": "この家は美しいです。"
  },
  "core:389": {
    "fr": "Ces fleurs sont pour toi.",
    "ja": "この花々は君への贈り物です。"
  },
  "core:390": {
    "fr": "Mon père arrive.",
    "ja": "私の父が到着します。"
  },
  "core:391": {
    "fr": "Ma mère travaille.",
    "ja": "私の母は働いています。"
  },
  "core:392": {
    "fr": "Mes amis sont ici.",
    "ja": "私の友人たちはここにいます。"
  },
  "core:393": {
    "fr": "Ton sac est lourd.",
    "ja": "君のかばんは重いです。"
  },
  "core:394": {
    "fr": "Ta chambre est grande.",
    "ja": "君の部屋は広いです。"
  },
  "core:395": {
    "fr": "Paul cherche son livre.",
    "ja": "ポールは自分の本を探しています。"
  },
  "core:396": {
    "fr": "Marie ferme sa porte.",
    "ja": "マリーは自分のドアを閉めます。"
  },
  "core:397": {
    "fr": "Notre train arrive.",
    "ja": "私たちの列車が到着します。"
  },
  "core:398": {
    "fr": "Votre chambre est prête.",
    "ja": "お部屋の準備ができています。"
  },
  "core:399": {
    "fr": "Ils aiment leur maison.",
    "ja": "彼らは自分たちの家が好きです。"
  },
  "core:400": {
    "fr": "J’y vais demain.",
    "ja": "私は明日そこへ行きます。"
  },
  "core:401": {
    "fr": "J’habite près de la gare.",
    "ja": "私は駅の近くに住んでいます。"
  },
  "core:402": {
    "fr": "Elle étudie le français.",
    "ja": "彼女はフランス語を勉強しています。"
  },
  "core:403": {
    "fr": "Il enseigne la musique.",
    "ja": "彼は音楽を教えています。"
  },
  "core:404": {
    "fr": "Je révise ma leçon.",
    "ja": "私は授業の内容を復習します。"
  },
  "core:405": {
    "fr": "Elle réussit son examen.",
    "ja": "彼女は試験に合格します。"
  },
  "core:406": {
    "fr": "Il échoue à l’examen.",
    "ja": "彼は試験に落ちます。"
  },
  "core:407": {
    "fr": "Nous observons les oiseaux.",
    "ja": "私たちは鳥を観察します。"
  },
  "core:408": {
    "fr": "Je découvre une nouvelle ville.",
    "ja": "私は新しい町を知ります。"
  },
  "core:409": {
    "fr": "Elle décrit sa maison.",
    "ja": "彼女は自分の家を描写します。"
  },
  "core:410": {
    "fr": "L’enfant dessine un chat.",
    "ja": "子どもは猫の絵を描きます。"
  },
  "core:411": {
    "fr": "Ils construisent une maison.",
    "ja": "彼らは家を建てています。"
  },
  "core:412": {
    "fr": "Je répare mon vélo.",
    "ja": "私は自転車を修理します。"
  },
  "core:413": {
    "fr": "Nous organisons une fête.",
    "ja": "私たちはパーティーを企画します。"
  },
  "core:414": {
    "fr": "Elle participe à la réunion.",
    "ja": "彼女は会議に参加します。"
  },
  "core:415": {
    "fr": "Nous partageons le repas.",
    "ja": "私たちは食事を分け合います。"
  },
  "core:416": {
    "fr": "Ce manteau protège du froid.",
    "ja": "このコートは寒さから身を守ります。"
  },
  "core:417": {
    "fr": "J’évite cette rue.",
    "ja": "私はこの通りを避けます。"
  },
  "core:418": {
    "fr": "Le voyage dépend du temps.",
    "ja": "旅行は天候次第です。"
  },
  "core:419": {
    "fr": "Ce livre appartient à Marie.",
    "ja": "この本はマリーのものです。"
  },
  "core:420": {
    "fr": "Cette boîte contient des photos.",
    "ja": "この箱には写真が入っています。"
  },
  "core:421": {
    "fr": "Que signifie ce mot ?",
    "ja": "この単語は何を意味しますか。"
  },
  "core:422": {
    "fr": "Ce dessin représente un arbre.",
    "ja": "この絵は木を表しています。"
  },
  "core:423": {
    "fr": "Je compare les prix.",
    "ja": "私は値段を比較します。"
  },
  "core:424": {
    "fr": "Il mesure la table.",
    "ja": "彼はテーブルの寸法を測ります。"
  },
  "core:425": {
    "fr": "Elle pèse les pommes.",
    "ja": "彼女はリンゴの重さを量ります。"
  },
  "core:426": {
    "fr": "Les prix augmentent.",
    "ja": "物価が上がっています。"
  },
  "core:427": {
    "fr": "Le bruit diminue.",
    "ja": "騒音が小さくなります。"
  },
  "core:428": {
    "fr": "Je veux améliorer mon français.",
    "ja": "私はフランス語を上達させたいです。"
  },
  "core:429": {
    "fr": "Nous développons un nouveau projet.",
    "ja": "私たちは新しい計画を発展させています。"
  },
  "core:430": {
    "fr": "Elle crée un jeu.",
    "ja": "彼女はゲームを作ります。"
  },
  "core:431": {
    "fr": "Il invente une machine.",
    "ja": "彼は機械を発明します。"
  },
  "core:432": {
    "fr": "Je vous conseille ce livre.",
    "ja": "私はあなたにこの本をおすすめします。"
  },
  "core:433": {
    "fr": "Il promet de revenir.",
    "ja": "彼は戻ると約束します。"
  },
  "core:434": {
    "fr": "Elle annonce une bonne nouvelle.",
    "ja": "彼女は良い知らせを伝えます。"
  },
  "core:435": {
    "fr": "Je préviens mes collègues.",
    "ja": "私は同僚に事前に知らせます。"
  },
  "core:436": {
    "fr": "Nous discutons du projet.",
    "ja": "私たちは計画について話し合います。"
  },
  "core:437": {
    "fr": "Elle exprime son opinion.",
    "ja": "彼女は意見を述べます。"
  },
  "core:438": {
    "fr": "Comment prononcez-vous ce mot ?",
    "ja": "この単語はどう発音しますか。"
  },
  "core:439": {
    "fr": "Je traduis cette phrase.",
    "ja": "私はこの文を翻訳します。"
  },
  "core:440": {
    "fr": "Pouvez-vous répéter la question ?",
    "ja": "質問を繰り返していただけますか。"
  },
  "core:441": {
    "fr": "J’installe un logiciel.",
    "ja": "私はソフトウェアをインストールします。"
  },
  "core:442": {
    "fr": "Il manque une page.",
    "ja": "1ページ欠けています。"
  },
  "core:443": {
    "fr": "Cet outil sert à couper le bois.",
    "ja": "この道具は木を切るために使います。"
  },
  "core:444": {
    "fr": "Une minute suffit.",
    "ja": "1分で十分です。"
  },
  "core:445": {
    "fr": "Le film dure deux heures.",
    "ja": "映画は2時間続きます。"
  },
  "core:446": {
    "fr": "Je remplace la batterie.",
    "ja": "私は電池を交換します。"
  },
  "core:447": {
    "fr": "Nous déplaçons la table.",
    "ja": "私たちはテーブルを移動します。"
  },
  "core:448": {
    "fr": "Elle traverse la rue.",
    "ja": "彼女は通りを渡ります。"
  },
  "core:449": {
    "fr": "Nous atteignons le sommet.",
    "ja": "私たちは頂上に到達します。"
  },
  "core:450": {
    "fr": "Je quitte la ville.",
    "ja": "私は町を離れます。"
  },
  "core:451": {
    "fr": "Je rejoins mes amis.",
    "ja": "私は友人たちに合流します。"
  },
  "core:452": {
    "fr": "Elle retire son manteau.",
    "ja": "彼女はコートを脱ぎます。"
  },
  "core:453": {
    "fr": "Il ramasse une feuille.",
    "ja": "彼は葉を1枚拾います。"
  },
  "core:454": {
    "fr": "Je pose une question.",
    "ja": "私は質問をします。"
  },
  "core:455": {
    "fr": "Elle lève la main.",
    "ja": "彼女は手を上げます。"
  },
  "core:456": {
    "fr": "Le soleil brille.",
    "ja": "太陽が輝いています。"
  },
  "core:457": {
    "fr": "La lune est pleine.",
    "ja": "月は満月です。"
  },
  "core:458": {
    "fr": "Je vois une étoile.",
    "ja": "私には星が1つ見えます。"
  },
  "core:459": {
    "fr": "Le ciel est clair.",
    "ja": "空は澄んでいます。"
  },
  "core:460": {
    "fr": "La terre est humide.",
    "ja": "地面は湿っています。"
  },
  "core:461": {
    "fr": "La mer est calme.",
    "ja": "海は穏やかです。"
  },
  "core:462": {
    "fr": "Nous traversons l’océan.",
    "ja": "私たちは大洋を渡ります。"
  },
  "core:463": {
    "fr": "Cette montagne est haute.",
    "ja": "この山は高いです。"
  },
  "core:464": {
    "fr": "La rivière traverse le village.",
    "ja": "川は村を横切って流れています。"
  },
  "core:465": {
    "fr": "Le lac est profond.",
    "ja": "湖は深いです。"
  },
  "core:466": {
    "fr": "Nous marchons dans la forêt.",
    "ja": "私たちは森の中を歩きます。"
  },
  "core:467": {
    "fr": "Cet arbre est vieux.",
    "ja": "この木は古いです。"
  },
  "core:468": {
    "fr": "Cette fleur est rouge.",
    "ja": "この花は赤いです。"
  },
  "core:469": {
    "fr": "L’herbe est verte.",
    "ja": "草は緑色です。"
  },
  "core:470": {
    "fr": "Cet animal dort le jour.",
    "ja": "この動物は昼間に眠ります。"
  },
  "core:471": {
    "fr": "Le chien court.",
    "ja": "犬が走っています。"
  },
  "core:472": {
    "fr": "Le chat dort.",
    "ja": "猫が眠っています。"
  },
  "core:473": {
    "fr": "Un oiseau chante.",
    "ja": "鳥が1羽さえずっています。"
  },
  "core:474": {
    "fr": "Le cheval marche lentement.",
    "ja": "馬はゆっくり歩きます。"
  },
  "core:475": {
    "fr": "Le poisson nage.",
    "ja": "魚は泳いでいます。"
  },
  "core:476": {
    "fr": "Je ne mange pas de viande.",
    "ja": "私は肉を食べません。"
  },
  "core:477": {
    "fr": "La pomme est un fruit.",
    "ja": "リンゴは果物です。"
  },
  "core:478": {
    "fr": "Ce légume est frais.",
    "ja": "この野菜は新鮮です。"
  },
  "core:479": {
    "fr": "Je mange une pomme.",
    "ja": "私はリンゴを1個食べます。"
  },
  "core:480": {
    "fr": "Cette banane est mûre.",
    "ja": "このバナナは熟しています。"
  },
  "core:481": {
    "fr": "Je bois du lait.",
    "ja": "私は牛乳を飲みます。"
  },
  "core:482": {
    "fr": "Ce fromage est délicieux.",
    "ja": "このチーズはおいしいです。"
  },
  "core:483": {
    "fr": "Je fais cuire un œuf.",
    "ja": "私は卵を1個調理します。"
  },
  "core:484": {
    "fr": "Tu veux du sucre ?",
    "ja": "砂糖はいりますか。"
  },
  "core:485": {
    "fr": "Il manque du sel.",
    "ja": "塩が足りません。"
  },
  "core:486": {
    "fr": "Je mets du beurre sur le pain.",
    "ja": "私はパンにバターを塗ります。"
  },
  "core:487": {
    "fr": "Le riz est prêt.",
    "ja": "ご飯ができています。"
  },
  "core:488": {
    "fr": "Elle prépare un gâteau.",
    "ja": "彼女はケーキを作ります。"
  },
  "core:489": {
    "fr": "Le déjeuner est à midi.",
    "ja": "昼食は正午です。"
  },
  "core:490": {
    "fr": "Nous préparons le dîner.",
    "ja": "私たちは夕食を準備します。"
  },
  "core:491": {
    "fr": "Je prends le petit-déjeuner tôt.",
    "ja": "私は朝食を早く食べます。"
  },
  "core:492": {
    "fr": "J’ai faim.",
    "ja": "私はお腹がすいています。"
  },
  "core:493": {
    "fr": "Elle a soif.",
    "ja": "彼女は喉が渇いています。"
  },
  "core:494": {
    "fr": "Il est en bonne santé.",
    "ja": "彼は健康です。"
  },
  "core:495": {
    "fr": "La douleur diminue.",
    "ja": "痛みが和らいでいます。"
  },
  "core:496": {
    "fr": "Cette maladie est rare.",
    "ja": "この病気は珍しいです。"
  },
  "core:497": {
    "fr": "Elle travaille à l’hôpital.",
    "ja": "彼女は病院で働いています。"
  },
  "core:498": {
    "fr": "La pharmacie est ouverte.",
    "ja": "薬局は開いています。"
  },
  "core:499": {
    "fr": "J’ai mal à une dent.",
    "ja": "私は歯が1本痛みます。"
  },
  "core:500": {
    "fr": "Il y a un cheveu sur la table.",
    "ja": "テーブルの上に髪の毛が1本あります。"
  },
  "core:501": {
    "fr": "Elle lave son visage.",
    "ja": "彼女は顔を洗います。"
  },
  "core:502": {
    "fr": "Il lève le bras.",
    "ja": "彼は腕を上げます。"
  },
  "core:503": {
    "fr": "J’ai mal à la jambe.",
    "ja": "私は脚が痛いです。"
  },
  "core:504": {
    "fr": "Il pose le pied par terre.",
    "ja": "彼は足を地面につけます。"
  },
  "core:505": {
    "fr": "Elle montre le chemin du doigt.",
    "ja": "彼女は指で道を示します。"
  },
  "core:506": {
    "fr": "J’ai mal au dos.",
    "ja": "私は背中が痛いです。"
  },
  "core:507": {
    "fr": "J’ai mal au ventre.",
    "ja": "私はお腹が痛いです。"
  },
  "core:508": {
    "fr": "Mon cœur bat vite.",
    "ja": "私の心臓は速く打っています。"
  },
  "core:509": {
    "fr": "J’ai l’esprit tranquille.",
    "ja": "私は心が落ち着いています。"
  },
  "core:510": {
    "fr": "Elle a une bonne mémoire.",
    "ja": "彼女は記憶力が良いです。"
  },
  "core:511": {
    "fr": "J’ai fait un beau rêve.",
    "ja": "私は良い夢を見ました。"
  },
  "core:512": {
    "fr": "L’enfant a peur du noir.",
    "ja": "子どもは暗闇を怖がります。"
  },
  "core:513": {
    "fr": "Elle sourit de joie.",
    "ja": "彼女は喜びでほほ笑みます。"
  },
  "core:514": {
    "fr": "Il est en colère.",
    "ja": "彼は怒っています。"
  },
  "core:515": {
    "fr": "Ce geste exprime son amour.",
    "ja": "このしぐさは彼の愛情を表しています。"
  },
  "core:516": {
    "fr": "Je comprends ce sentiment.",
    "ja": "私はその気持ちが分かります。"
  },
  "core:517": {
    "fr": "Quelle est votre opinion ?",
    "ja": "あなたの意見は何ですか。"
  },
  "core:518": {
    "fr": "Merci pour ce conseil.",
    "ja": "この助言をありがとうございます。"
  },
  "core:519": {
    "fr": "C’est un bon choix.",
    "ja": "それは良い選択です。"
  },
  "core:520": {
    "fr": "Je respecte ta décision.",
    "ja": "私は君の決定を尊重します。"
  },
  "core:521": {
    "fr": "J’ai fait une erreur.",
    "ja": "私は間違いをしました。"
  },
  "core:522": {
    "fr": "Nous cherchons une solution.",
    "ja": "私たちは解決策を探しています。"
  },
  "core:523": {
    "fr": "Le résultat est positif.",
    "ja": "結果は良好です。"
  },
  "core:524": {
    "fr": "Ce médicament fait effet.",
    "ja": "この薬は効いています。"
  },
  "core:525": {
    "fr": "Nous cherchons la cause du problème.",
    "ja": "私たちは問題の原因を探しています。"
  },
  "core:526": {
    "fr": "Donnez-moi un exemple.",
    "ja": "例を1つ挙げてください。"
  },
  "core:527": {
    "fr": "Je vois la différence.",
    "ja": "私は違いが分かります。"
  },
  "core:528": {
    "fr": "Je lis le rapport.",
    "ja": "私は報告書を読みます。"
  },
  "core:529": {
    "fr": "Leur relation est bonne.",
    "ja": "彼らの関係は良好です。"
  },
  "core:530": {
    "fr": "La réunion commence bientôt.",
    "ja": "会議はもうすぐ始まります。"
  },
  "core:531": {
    "fr": "Ce projet avance bien.",
    "ja": "この計画は順調に進んでいます。"
  },
  "core:532": {
    "fr": "Cette activité plaît aux enfants.",
    "ja": "この活動は子どもたちに人気です。"
  },
  "core:533": {
    "fr": "Elle a beaucoup d’expérience.",
    "ja": "彼女は経験が豊富です。"
  },
  "core:534": {
    "fr": "Le service est gratuit.",
    "ja": "このサービスは無料です。"
  },
  "core:535": {
    "fr": "Cette entreprise recrute.",
    "ja": "この企業は人を募集しています。"
  },
  "core:536": {
    "fr": "Je cherche un emploi.",
    "ja": "私は仕事を探しています。"
  },
  "core:537": {
    "fr": "Son salaire a augmenté.",
    "ja": "彼の給料は上がりました。"
  },
  "core:538": {
    "fr": "Je paie la facture.",
    "ja": "私は請求書の代金を払います。"
  },
  "core:539": {
    "fr": "Cet impôt augmente.",
    "ja": "この税金は上がっています。"
  },
  "core:540": {
    "fr": "La banque ferme à cinq heures.",
    "ja": "銀行は5時に閉まります。"
  },
  "core:541": {
    "fr": "Le paysage est magnifique.",
    "ja": "景色は見事です。"
  },
  "core:542": {
    "fr": "Ce repas est excellent.",
    "ja": "この食事はとてもおいしいです。"
  },
  "core:543": {
    "fr": "Le jardin est agréable.",
    "ja": "庭は心地よいです。"
  },
  "core:544": {
    "fr": "Ce bruit est désagréable.",
    "ja": "この音は不快です。"
  },
  "core:545": {
    "fr": "Il est content du résultat.",
    "ja": "彼は結果に満足しています。"
  },
  "core:546": {
    "fr": "Mon père est inquiet.",
    "ja": "私の父は心配しています。"
  },
  "core:547": {
    "fr": "Il est surpris par la nouvelle.",
    "ja": "彼は知らせに驚いています。"
  },
  "core:548": {
    "fr": "Il est fier de sa fille.",
    "ja": "彼は娘を誇りに思っています。"
  },
  "core:549": {
    "fr": "Cet enfant est timide.",
    "ja": "この子は内気です。"
  },
  "core:550": {
    "fr": "Ce garçon est courageux.",
    "ja": "この少年は勇敢です。"
  },
  "core:551": {
    "fr": "Elle est honnête avec nous.",
    "ja": "彼女は私たちに正直です。"
  },
  "core:552": {
    "fr": "Mon oncle est généreux.",
    "ja": "私の叔父は気前が良いです。"
  },
  "core:553": {
    "fr": "Ce comportement est égoïste.",
    "ja": "この振る舞いは利己的です。"
  },
  "core:554": {
    "fr": "Le professeur est patient.",
    "ja": "先生は忍耐強いです。"
  },
  "core:555": {
    "fr": "Il est impatient de partir.",
    "ja": "彼は出発が待ちきれません。"
  },
  "core:556": {
    "fr": "Cet enfant est curieux.",
    "ja": "この子は好奇心旺盛です。"
  },
  "core:557": {
    "fr": "C’est un choix intelligent.",
    "ja": "これは賢い選択です。"
  },
  "core:558": {
    "fr": "C’est une erreur bête.",
    "ja": "これはばかな間違いです。"
  },
  "core:559": {
    "fr": "Ce bruit est normal.",
    "ja": "この音は正常です。"
  },
  "core:560": {
    "fr": "C’est un jour spécial.",
    "ja": "今日は特別な日です。"
  },
  "core:561": {
    "fr": "Je donne un conseil général.",
    "ja": "私は一般的な助言をします。"
  },
  "core:562": {
    "fr": "Ce cas est particulier.",
    "ja": "この事例は特殊です。"
  },
  "core:563": {
    "fr": "Quel est le problème principal ?",
    "ja": "主な問題は何ですか。"
  },
  "core:564": {
    "fr": "Nous avons un ami commun.",
    "ja": "私たちには共通の友人がいます。"
  },
  "core:565": {
    "fr": "Ce jardin est public.",
    "ja": "この庭園は公共のものです。"
  },
  "core:566": {
    "fr": "Ce parking est privé.",
    "ja": "この駐車場は私有です。"
  },
  "core:567": {
    "fr": "J’achète du fromage local.",
    "ja": "私は地元のチーズを買います。"
  },
  "core:568": {
    "fr": "C’est un musée national.",
    "ja": "これは国立の美術館です。"
  },
  "core:569": {
    "fr": "Elle participe à un projet international.",
    "ja": "彼女は国際的な計画に参加します。"
  },
  "core:570": {
    "fr": "Il lit un journal étranger.",
    "ja": "彼は外国の新聞を読みます。"
  },
  "core:571": {
    "fr": "J’aime le cinéma français.",
    "ja": "私はフランス映画が好きです。"
  },
  "core:572": {
    "fr": "Il visite un pays européen.",
    "ja": "彼はヨーロッパの国を訪れます。"
  },
  "core:573": {
    "fr": "Ce bâtiment est moderne.",
    "ja": "この建物は現代的です。"
  },
  "core:574": {
    "fr": "C’est un ancien collègue.",
    "ja": "彼は以前の同僚です。"
  },
  "core:575": {
    "fr": "Mon travail actuel me plaît.",
    "ja": "私は今の仕事が気に入っています。"
  },
  "core:576": {
    "fr": "Voici mon futur bureau.",
    "ja": "ここが将来の私のオフィスです。"
  },
  "core:577": {
    "fr": "Ce film est récent.",
    "ja": "この映画は最近の作品です。"
  },
  "core:578": {
    "fr": "La lecture est mon plaisir quotidien.",
    "ja": "読書は私の日々の楽しみです。"
  },
  "core:579": {
    "fr": "Ce concert est gratuit.",
    "ja": "このコンサートは無料です。"
  },
  "core:580": {
    "fr": "Ce voyage est coûteux.",
    "ja": "この旅行は費用がかかります。"
  },
  "core:581": {
    "fr": "Je voyage en train.",
    "ja": "私は列車で旅行します。"
  },
  "core:582": {
    "fr": "Le livre est sur la table.",
    "ja": "本はテーブルの上にあります。"
  },
  "core:583": {
    "fr": "Le chat est sous le lit.",
    "ja": "猫はベッドの下にいます。"
  },
  "core:584": {
    "fr": "Je dîne chez Paul.",
    "ja": "私はポールの家で夕食を食べます。"
  },
  "core:585": {
    "fr": "La gare est entre les deux hôtels.",
    "ja": "駅は2つのホテルの間にあります。"
  },
  "core:586": {
    "fr": "Je t’attends devant la gare.",
    "ja": "私は駅の前で君を待っています。"
  },
  "core:587": {
    "fr": "Le jardin est derrière la maison.",
    "ja": "庭は家の後ろにあります。"
  },
  "core:588": {
    "fr": "Le vélo est contre le mur.",
    "ja": "自転車は壁に立てかけてあります。"
  },
  "core:589": {
    "fr": "Nous marchons vers la mer.",
    "ja": "私たちは海の方へ歩きます。"
  },
  "core:590": {
    "fr": "J’habite ici depuis un an.",
    "ja": "私は1年前からここに住んでいます。"
  },
  "core:591": {
    "fr": "Je lis pendant le voyage.",
    "ja": "私は旅行中に読書をします。"
  },
  "core:592": {
    "fr": "Je rentre avant midi.",
    "ja": "私は正午より前に帰ります。"
  },
  "core:593": {
    "fr": "Nous sortons après le repas.",
    "ja": "私たちは食事の後に出かけます。"
  },
  "core:594": {
    "fr": "Il travaille comme médecin.",
    "ja": "彼は医師として働いています。"
  },
  "core:595": {
    "fr": "Si tu veux, je viens.",
    "ja": "君が望むなら、私は行きます。"
  },
  "core:596": {
    "fr": "Je reste, car il pleut.",
    "ja": "雨が降っているので、私はここにいます。"
  },
  "core:597": {
    "fr": "Il pleut, donc je reste ici.",
    "ja": "雨が降っています、だから私はここにいます。"
  },
  "core:598": {
    "fr": "Alors, on part ?",
    "ja": "それでは、出発しますか。"
  },
  "core:599": {
    "fr": "J’ai presque fini.",
    "ja": "私はほとんど終えました。"
  },
  "core:600": {
    "fr": "J’ai seulement dix euros.",
    "ja": "私は10ユーロしか持っていません。"
  },
  "core:601": {
    "fr": "Il faut agir maintenant.",
    "ja": "今、行動する必要があります。"
  },
  "core:602": {
    "fr": "J’ajuste la hauteur de la chaise.",
    "ja": "私は椅子の高さを調整します。"
  },
  "core:603": {
    "fr": "Il admet son erreur.",
    "ja": "彼は自分の間違いを認めます。"
  },
  "core:604": {
    "fr": "Nous admirons le paysage.",
    "ja": "私たちは景色に見とれています。"
  },
  "core:605": {
    "fr": "L’équipe adopte une nouvelle méthode.",
    "ja": "チームは新しい方法を採用します。"
  },
  "core:606": {
    "fr": "Elle affirme que tout va bien.",
    "ja": "彼女はすべて順調だと断言します。"
  },
  "core:607": {
    "fr": "L’écran affiche un message.",
    "ja": "画面にメッセージが表示されています。"
  },
  "core:608": {
    "fr": "Nous affrontons le problème.",
    "ja": "私たちは問題に立ち向かいます。"
  },
  "core:609": {
    "fr": "J’allume la lumière.",
    "ja": "私は明かりをつけます。"
  },
  "core:610": {
    "fr": "Il éteint la télévision.",
    "ja": "彼はテレビを消します。"
  },
  "core:611": {
    "fr": "Elle amène son frère.",
    "ja": "彼女は弟を連れてきます。"
  },
  "core:612": {
    "fr": "Nous analysons les résultats.",
    "ja": "私たちは結果を分析します。"
  },
  "core:613": {
    "fr": "Il applique la règle.",
    "ja": "彼は規則を適用します。"
  },
  "core:614": {
    "fr": "J’apprécie votre aide.",
    "ja": "私はあなたの助けに感謝しています。"
  },
  "core:615": {
    "fr": "Le train approche de la gare.",
    "ja": "列車は駅に近づいています。"
  },
  "core:616": {
    "fr": "Elle arrête la voiture.",
    "ja": "彼女は車を止めます。"
  },
  "core:617": {
    "fr": "J’assiste à une réunion.",
    "ja": "私は会議に出席します。"
  },
  "core:618": {
    "fr": "Ce système assure la sécurité.",
    "ja": "このシステムは安全を保証します。"
  },
  "core:619": {
    "fr": "Ce musée attire les visiteurs.",
    "ja": "この美術館は訪問者を引きつけます。"
  },
  "core:620": {
    "fr": "Nous avançons lentement.",
    "ja": "私たちはゆっくり進みます。"
  },
  "core:621": {
    "fr": "Le panneau avertit les conducteurs du danger.",
    "ja": "標識は運転者に危険を警告します。"
  },
  "core:622": {
    "fr": "Notre équipe bat ses adversaires.",
    "ja": "私たちのチームは相手チームを負かします。"
  },
  "core:623": {
    "fr": "Ne bouge pas.",
    "ja": "動かないでください。"
  },
  "core:624": {
    "fr": "Les étoiles brillent.",
    "ja": "星々が輝いています。"
  },
  "core:625": {
    "fr": "Le bois brûle.",
    "ja": "木が燃えています。"
  },
  "core:626": {
    "fr": "Elle cache le cadeau.",
    "ja": "彼女は贈り物を隠します。"
  },
  "core:627": {
    "fr": "Je calcule le prix total.",
    "ja": "私は合計金額を計算します。"
  },
  "core:628": {
    "fr": "Il casse un verre.",
    "ja": "彼はグラスを割ります。"
  },
  "core:629": {
    "fr": "Nous célébrons son anniversaire.",
    "ja": "私たちは彼の誕生日を祝います。"
  },
  "core:630": {
    "fr": "La pluie cesse enfin.",
    "ja": "雨がようやくやみます。"
  },
  "core:631": {
    "fr": "Le chat chasse une souris.",
    "ja": "猫はネズミを追いかけます。"
  },
  "core:632": {
    "fr": "Les bus circulent la nuit.",
    "ja": "バスは夜も運行しています。"
  },
  "core:633": {
    "fr": "Je colle une photo dans mon cahier.",
    "ja": "私はノートに写真を貼ります。"
  },
  "core:634": {
    "fr": "Elle commande un café.",
    "ja": "彼女はコーヒーを注文します。"
  },
  "core:635": {
    "fr": "Complétez cette phrase.",
    "ja": "この文を完成させてください。"
  },
  "core:636": {
    "fr": "Il conclut que le projet est possible.",
    "ja": "彼は計画が実現可能だと結論づけます。"
  },
  "core:637": {
    "fr": "Je confirme ma réservation.",
    "ja": "私は予約を確認します。"
  },
  "core:638": {
    "fr": "Je confonds ces deux mots.",
    "ja": "私はこの2つの単語を混同します。"
  },
  "core:639": {
    "fr": "Nous conservons les documents.",
    "ja": "私たちは書類を保管します。"
  },
  "core:640": {
    "fr": "Il considère toutes les possibilités.",
    "ja": "彼はあらゆる可能性を考慮します。"
  },
  "core:641": {
    "fr": "Elle consulte un médecin.",
    "ja": "彼女は医師に相談します。"
  },
  "core:642": {
    "fr": "Cette voiture consomme peu.",
    "ja": "この車は燃料の消費が少ないです。"
  },
  "core:643": {
    "fr": "Je veux convaincre mon équipe.",
    "ja": "私はチームを納得させたいです。"
  },
  "core:644": {
    "fr": "Elle corrige les erreurs.",
    "ja": "彼女は間違いを訂正します。"
  },
  "core:645": {
    "fr": "Il craint le froid.",
    "ja": "彼は寒さを恐れています。"
  },
  "core:646": {
    "fr": "Elle critique cette décision.",
    "ja": "彼女はこの決定を批判します。"
  },
  "core:647": {
    "fr": "Nous dansons ensemble.",
    "ja": "私たちは一緒に踊ります。"
  },
  "core:648": {
    "fr": "Il défend ses amis.",
    "ja": "彼は友人たちを守ります。"
  },
  "core:649": {
    "fr": "Comment définir ce mot ?",
    "ja": "この単語をどう定義すればよいでしょうか。"
  },
  "core:650": {
    "fr": "Je dépense dix euros.",
    "ja": "私は10ユーロ使います。"
  },
  "core:651": {
    "fr": "L’air est frais.",
    "ja": "空気はひんやりしています。"
  },
  "core:652": {
    "fr": "Le vent souffle fort.",
    "ja": "風が強く吹いています。"
  },
  "core:653": {
    "fr": "La pluie commence.",
    "ja": "雨が降り始めます。"
  },
  "core:654": {
    "fr": "La neige couvre le jardin.",
    "ja": "雪が庭を覆っています。"
  },
  "core:655": {
    "fr": "Un orage approche.",
    "ja": "雷雨が近づいています。"
  },
  "core:656": {
    "fr": "Un nuage cache le soleil.",
    "ja": "雲が太陽を隠しています。"
  },
  "core:657": {
    "fr": "La température baisse.",
    "ja": "気温が下がっています。"
  },
  "core:658": {
    "fr": "Le climat est doux.",
    "ja": "気候は穏やかです。"
  },
  "core:659": {
    "fr": "Je supporte mal la chaleur.",
    "ja": "私は暑さが苦手です。"
  },
  "core:660": {
    "fr": "Le feu réchauffe la pièce.",
    "ja": "火が部屋を暖めます。"
  },
  "core:661": {
    "fr": "La glace fond.",
    "ja": "氷が溶けます。"
  },
  "core:662": {
    "fr": "Le sable est chaud.",
    "ja": "砂は熱いです。"
  },
  "core:663": {
    "fr": "Il ramasse une pierre.",
    "ja": "彼は石を1つ拾います。"
  },
  "core:664": {
    "fr": "Cette plante a besoin d’eau.",
    "ja": "この植物には水が必要です。"
  },
  "core:665": {
    "fr": "Une feuille tombe.",
    "ja": "葉が1枚落ちます。"
  },
  "core:666": {
    "fr": "L’oiseau est sur une branche.",
    "ja": "鳥は枝にとまっています。"
  },
  "core:667": {
    "fr": "Cette racine est profonde.",
    "ja": "この根は深く伸びています。"
  },
  "core:668": {
    "fr": "Le champ est immense.",
    "ja": "畑はとても広いです。"
  },
  "core:669": {
    "fr": "Elle habite à la campagne.",
    "ja": "彼女は田舎に住んでいます。"
  },
  "core:670": {
    "fr": "Nous visitons une île.",
    "ja": "私たちは島を訪れます。"
  },
  "core:671": {
    "fr": "Les enfants jouent sur la plage.",
    "ja": "子どもたちは浜辺で遊んでいます。"
  },
  "core:672": {
    "fr": "Le bateau longe la côte.",
    "ja": "船は海岸沿いを進みます。"
  },
  "core:673": {
    "fr": "La vallée est verte.",
    "ja": "谷は緑に覆われています。"
  },
  "core:674": {
    "fr": "Il traverse le désert.",
    "ja": "彼は砂漠を横断します。"
  },
  "core:675": {
    "fr": "Nous aimons la nature.",
    "ja": "私たちは自然が好きです。"
  },
  "core:676": {
    "fr": "Il faut protéger l’environnement.",
    "ja": "環境を守る必要があります。"
  },
  "core:677": {
    "fr": "La pollution diminue.",
    "ja": "汚染が減っています。"
  },
  "core:678": {
    "fr": "Le soleil fournit de l’énergie.",
    "ja": "太陽はエネルギーを供給します。"
  },
  "core:679": {
    "fr": "Nous économisons l’électricité.",
    "ja": "私たちは電気を節約します。"
  },
  "core:680": {
    "fr": "Cette maison utilise le gaz.",
    "ja": "この家はガスを使っています。"
  },
  "core:681": {
    "fr": "Cet outil est en métal.",
    "ja": "この道具は金属製です。"
  },
  "core:682": {
    "fr": "La table est en bois.",
    "ja": "テーブルは木製です。"
  },
  "core:683": {
    "fr": "J’écris sur du papier.",
    "ja": "私は紙に書きます。"
  },
  "core:684": {
    "fr": "Ce sac est en plastique.",
    "ja": "この袋はプラスチック製です。"
  },
  "core:685": {
    "fr": "Cet outil est utile.",
    "ja": "この道具は役立ちます。"
  },
  "core:686": {
    "fr": "La machine fonctionne bien.",
    "ja": "機械は正常に動いています。"
  },
  "core:687": {
    "fr": "Cet appareil est neuf.",
    "ja": "この機器は新品です。"
  },
  "core:688": {
    "fr": "La batterie est vide.",
    "ja": "電池は空です。"
  },
  "core:689": {
    "fr": "L’écran est grand.",
    "ja": "画面は大きいです。"
  },
  "core:690": {
    "fr": "Ce clavier est pratique.",
    "ja": "このキーボードは使いやすいです。"
  },
  "core:691": {
    "fr": "Je clique avec la souris.",
    "ja": "私はマウスでクリックします。"
  },
  "core:692": {
    "fr": "Le réseau fonctionne.",
    "ja": "ネットワークは動作しています。"
  },
  "core:693": {
    "fr": "Ce site propose des exercices.",
    "ja": "このサイトは練習問題を提供しています。"
  },
  "core:694": {
    "fr": "J’installe ce logiciel.",
    "ja": "私はこのソフトウェアをインストールします。"
  },
  "core:695": {
    "fr": "J’ouvre le fichier.",
    "ja": "私はファイルを開きます。"
  },
  "core:696": {
    "fr": "Cette donnée est importante.",
    "ja": "このデータは重要です。"
  },
  "core:697": {
    "fr": "Je signe le document.",
    "ja": "私は書類に署名します。"
  },
  "core:698": {
    "fr": "Le dossier contient trois lettres.",
    "ja": "フォルダーには手紙が3通入っています。"
  },
  "core:699": {
    "fr": "Tournez la page.",
    "ja": "ページをめくってください。"
  },
  "core:700": {
    "fr": "Ce chapitre est court.",
    "ja": "この章は短いです。"
  },
  "core:701": {
    "fr": "Je relis la première ligne.",
    "ja": "私は最初の行を読み直します。"
  },
  "core:702": {
    "fr": "Cette phrase est simple.",
    "ja": "この文は簡単です。"
  },
  "core:703": {
    "fr": "Je comprends ce texte.",
    "ja": "私はこの文章を理解しています。"
  },
  "core:704": {
    "fr": "Lisez le dernier paragraphe.",
    "ja": "最後の段落を読んでください。"
  },
  "core:705": {
    "fr": "Cet article est intéressant.",
    "ja": "この記事は興味深いです。"
  },
  "core:706": {
    "fr": "Mon père lit le journal.",
    "ja": "私の父は新聞を読みます。"
  },
  "core:707": {
    "fr": "Cette revue parle d’art.",
    "ja": "この雑誌は芸術を扱っています。"
  },
  "core:708": {
    "fr": "Elle écrit un roman.",
    "ja": "彼女は小説を書いています。"
  },
  "core:709": {
    "fr": "L’auteur présente son livre.",
    "ja": "著者は自分の本を紹介します。"
  },
  "core:710": {
    "fr": "Le lecteur tourne la page.",
    "ja": "読者はページをめくります。"
  },
  "core:711": {
    "fr": "J’aime la lecture.",
    "ja": "私は読書が好きです。"
  },
  "core:712": {
    "fr": "Son écriture est claire.",
    "ja": "彼の筆跡は読みやすいです。"
  },
  "core:713": {
    "fr": "Nous étudions la grammaire.",
    "ja": "私たちは文法を勉強しています。"
  },
  "core:714": {
    "fr": "Je révise le vocabulaire.",
    "ja": "私は語彙を復習します。"
  },
  "core:715": {
    "fr": "Je consulte un dictionnaire.",
    "ja": "私は辞書を引きます。"
  },
  "core:716": {
    "fr": "Il parle avec un accent français.",
    "ja": "彼はフランス語なまりで話します。"
  },
  "core:717": {
    "fr": "Je travaille ma prononciation.",
    "ja": "私は発音を練習しています。"
  },
  "core:718": {
    "fr": "Cette traduction est fidèle.",
    "ja": "この翻訳は原文に忠実です。"
  },
  "core:719": {
    "fr": "Je fais un exercice.",
    "ja": "私は練習問題を1つ解きます。"
  },
  "core:720": {
    "fr": "La leçon commence.",
    "ja": "授業が始まります。"
  },
  "core:721": {
    "fr": "Le cours dure une heure.",
    "ja": "授業は1時間続きます。"
  },
  "core:722": {
    "fr": "L’examen est demain.",
    "ja": "試験は明日です。"
  },
  "core:723": {
    "fr": "Elle obtient une bonne note.",
    "ja": "彼女は良い点数を取ります。"
  },
  "core:724": {
    "fr": "Notre classe compte vingt élèves.",
    "ja": "私たちのクラスには生徒が20人います。"
  },
  "core:725": {
    "fr": "Il étudie à l’université.",
    "ja": "彼は大学で学んでいます。"
  },
  "core:726": {
    "fr": "Cette formation dure trois jours.",
    "ja": "この研修は3日間続きます。"
  },
  "core:727": {
    "fr": "Cette étude porte sur le sommeil.",
    "ja": "この研究は睡眠に関するものです。"
  },
  "core:728": {
    "fr": "Elle fait de la recherche.",
    "ja": "彼女は研究をしています。"
  },
  "core:729": {
    "fr": "La science évolue.",
    "ja": "科学は進歩しています。"
  },
  "core:730": {
    "fr": "J’étudie la géographie.",
    "ja": "私は地理を勉強しています。"
  },
  "core:731": {
    "fr": "Elle aime les mathématiques.",
    "ja": "彼女は数学が好きです。"
  },
  "core:732": {
    "fr": "Nous découvrons une autre culture.",
    "ja": "私たちは別の文化を知ります。"
  },
  "core:733": {
    "fr": "Ce musée présente de l’art moderne.",
    "ja": "この美術館は現代美術を展示しています。"
  },
  "core:734": {
    "fr": "Nous allons au théâtre.",
    "ja": "私たちは劇場へ行きます。"
  },
  "core:735": {
    "fr": "Le cinéma est fermé.",
    "ja": "映画館は閉まっています。"
  },
  "core:736": {
    "fr": "Le concert commence à huit heures.",
    "ja": "コンサートは8時に始まります。"
  },
  "core:737": {
    "fr": "Je connais cette chanson.",
    "ja": "私はこの歌を知っています。"
  },
  "core:738": {
    "fr": "Elle apprend la danse.",
    "ja": "彼女はダンスを習っています。"
  },
  "core:739": {
    "fr": "Cette peinture représente la mer.",
    "ja": "この絵画は海を描いています。"
  },
  "core:740": {
    "fr": "L’enfant montre son dessin.",
    "ja": "子どもは自分の絵を見せます。"
  },
  "core:741": {
    "fr": "J’aime cette photographie.",
    "ja": "私はこの写真が好きです。"
  },
  "core:742": {
    "fr": "La caméra enregistre la scène.",
    "ja": "カメラはその場面を録画しています。"
  },
  "core:743": {
    "fr": "Il regarde la télévision.",
    "ja": "彼はテレビを見ています。"
  },
  "core:744": {
    "fr": "J’écoute la radio.",
    "ja": "私はラジオを聞いています。"
  },
  "core:745": {
    "fr": "Cette émission parle de cuisine.",
    "ja": "この番組は料理を扱っています。"
  },
  "core:746": {
    "fr": "Je vois une publicité.",
    "ja": "私は広告を目にします。"
  },
  "core:747": {
    "fr": "Elle suit l’actualité.",
    "ja": "彼女は時事の動向を追っています。"
  },
  "core:748": {
    "fr": "C’est un événement important.",
    "ja": "これは重要な出来事です。"
  },
  "core:749": {
    "fr": "Nous préparons une fête.",
    "ja": "私たちはパーティーを準備します。"
  },
  "core:750": {
    "fr": "J’ai un cadeau pour toi.",
    "ja": "私は君への贈り物を持っています。"
  },
  "core:751": {
    "fr": "Paul est absent aujourd’hui.",
    "ja": "ポールは今日欠席です。"
  },
  "core:752": {
    "fr": "Mon grand-père est très actif.",
    "ja": "私の祖父はとても活動的です。"
  },
  "core:753": {
    "fr": "Un chat adulte dort beaucoup.",
    "ja": "成猫はよく眠ります。"
  },
  "core:754": {
    "fr": "Il fait un geste amical.",
    "ja": "彼は友好的なしぐさをします。"
  },
  "core:755": {
    "fr": "Il est amoureux de Marie.",
    "ja": "彼はマリーに恋をしています。"
  },
  "core:756": {
    "fr": "Le festival est annuel.",
    "ja": "祭りは毎年行われます。"
  },
  "core:757": {
    "fr": "Ce bruit est anormal.",
    "ja": "この音は異常です。"
  },
  "core:758": {
    "fr": "Je consulte un document antérieur.",
    "ja": "私は以前の文書を参照します。"
  },
  "core:759": {
    "fr": "Ce prix est approximatif.",
    "ja": "この価格はおおよそのものです。"
  },
  "core:760": {
    "fr": "Le lac est artificiel.",
    "ja": "湖は人工のものです。"
  },
  "core:761": {
    "fr": "Le paiement est automatique.",
    "ja": "支払いは自動です。"
  },
  "core:762": {
    "fr": "C’est un exercice basique.",
    "ja": "これは基本的な練習問題です。"
  },
  "core:763": {
    "fr": "Le joueur est blessé.",
    "ja": "選手はけがをしています。"
  },
  "core:764": {
    "fr": "Il est capable de réussir.",
    "ja": "彼には成功する能力があります。"
  },
  "core:765": {
    "fr": "Cet auteur est célèbre.",
    "ja": "この著者は有名です。"
  },
  "core:766": {
    "fr": "C’est le point central du débat.",
    "ja": "これは議論の中心となる点です。"
  },
  "core:767": {
    "fr": "J’écoute de la musique classique.",
    "ja": "私はクラシック音楽を聞きます。"
  },
  "core:768": {
    "fr": "Ce problème est complexe.",
    "ja": "この問題は複雑です。"
  },
  "core:769": {
    "fr": "Le dossier est complet.",
    "ja": "書類はすべてそろっています。"
  },
  "core:770": {
    "fr": "Donnez un exemple concret.",
    "ja": "具体的な例を挙げてください。"
  },
  "core:771": {
    "fr": "Ce lit est confortable.",
    "ja": "このベッドは快適です。"
  },
  "core:772": {
    "fr": "Ce lieu est bien connu.",
    "ja": "この場所はよく知られています。"
  },
  "core:773": {
    "fr": "Il exprime un avis contraire.",
    "ja": "彼は反対意見を述べます。"
  },
  "core:774": {
    "fr": "Le résultat est correct.",
    "ja": "結果は正しいです。"
  },
  "core:775": {
    "fr": "Ce travail est créatif.",
    "ja": "この仕事は創造的です。"
  },
  "core:776": {
    "fr": "Ce chemin est dangereux.",
    "ja": "この道は危険です。"
  },
  "core:777": {
    "fr": "Le gâteau est délicieux.",
    "ja": "ケーキはおいしいです。"
  },
  "core:778": {
    "fr": "Le vote est démocratique.",
    "ja": "投票は民主的です。"
  },
  "core:779": {
    "fr": "Le brouillard est dense.",
    "ja": "霧は濃いです。"
  },
  "core:780": {
    "fr": "Le tissu est doux.",
    "ja": "布は柔らかいです。"
  },
  "core:781": {
    "fr": "Le pain est dur.",
    "ja": "パンは硬いです。"
  },
  "core:782": {
    "fr": "Nous cherchons une solution durable.",
    "ja": "私たちは長続きする解決策を探しています。"
  },
  "core:783": {
    "fr": "Ce mode de transport est économique.",
    "ja": "この交通手段は経済的です。"
  },
  "core:784": {
    "fr": "Cette méthode est efficace.",
    "ja": "この方法は効果的です。"
  },
  "core:785": {
    "fr": "Deux plus deux est égal à quatre.",
    "ja": "2足す2は4です。"
  },
  "core:786": {
    "fr": "Je veux absolument venir.",
    "ja": "私は絶対に来たいです。"
  },
  "core:787": {
    "fr": "Elle travaille actuellement à Paris.",
    "ja": "彼女は現在パリで働いています。"
  },
  "core:788": {
    "fr": "Auparavant, il habitait ici.",
    "ja": "以前、彼はここに住んでいました。"
  },
  "core:789": {
    "fr": "Je lis autant que toi.",
    "ja": "私は君と同じくらい読書をします。"
  },
  "core:790": {
    "fr": "Nous pouvons faire autrement.",
    "ja": "私たちは別のやり方でできます。"
  },
  "core:791": {
    "fr": "Certes, c’est difficile, mais c’est possible.",
    "ja": "確かに難しいですが、可能です。"
  },
  "core:792": {
    "fr": "Il viendra certainement.",
    "ja": "彼はきっと来るでしょう。"
  },
  "core:793": {
    "fr": "Je veux en savoir davantage.",
    "ja": "私はもっと知りたいです。"
  },
  "core:794": {
    "fr": "Désormais, je viens à pied.",
    "ja": "今後、私は歩いて来ます。"
  },
  "core:795": {
    "fr": "Je rentre directement chez moi.",
    "ja": "私はまっすぐ家に帰ります。"
  },
  "core:796": {
    "fr": "Elle parle également anglais.",
    "ja": "彼女は英語も話します。"
  },
  "core:797": {
    "fr": "Le train arrive enfin.",
    "ja": "列車がようやく到着します。"
  },
  "core:798": {
    "fr": "Nous mangeons ensemble.",
    "ja": "私たちは一緒に食事をします。"
  },
  "core:799": {
    "fr": "Je suis entièrement d’accord.",
    "ja": "私は全面的に賛成です。"
  },
  "core:800": {
    "fr": "Il y a environ vingt personnes.",
    "ja": "約20人います。"
  },
  "core:801": {
    "fr": "Le feu détruit la maison.",
    "ja": "火が家を焼き尽くします。"
  },
  "core:802": {
    "fr": "Elle dirige une équipe.",
    "ja": "彼女はチームを指揮します。"
  },
  "core:803": {
    "fr": "Le soleil disparaît derrière les nuages.",
    "ja": "太陽が雲の後ろに隠れます。"
  },
  "core:804": {
    "fr": "Il distribue les livres.",
    "ja": "彼は本を配ります。"
  },
  "core:805": {
    "fr": "Je divise le gâteau en quatre.",
    "ja": "私はケーキを4つに分けます。"
  },
  "core:806": {
    "fr": "Je doute de cette information.",
    "ja": "私はこの情報を疑っています。"
  },
  "core:807": {
    "fr": "Le chat échappe au chien.",
    "ja": "猫は犬から逃れます。"
  },
  "core:808": {
    "fr": "La lampe éclaire la pièce.",
    "ja": "ランプが部屋を照らします。"
  },
  "core:809": {
    "fr": "Nous économisons de l’eau.",
    "ja": "私たちは水を節約します。"
  },
  "core:810": {
    "fr": "J’efface ce message.",
    "ja": "私はこのメッセージを消します。"
  },
  "core:811": {
    "fr": "Cette entreprise emploie dix personnes.",
    "ja": "この会社は10人を雇っています。"
  },
  "core:812": {
    "fr": "J’emprunte un livre à la bibliothèque.",
    "ja": "私は図書館で本を借ります。"
  },
  "core:813": {
    "fr": "Elle encourage son fils.",
    "ja": "彼女は息子を励まします。"
  },
  "core:814": {
    "fr": "Nous engageons un nouveau collègue.",
    "ja": "私たちは新しい同僚を雇います。"
  },
  "core:815": {
    "fr": "J’enregistre le fichier.",
    "ja": "私はファイルを保存します。"
  },
  "core:816": {
    "fr": "La lecture enrichit le vocabulaire.",
    "ja": "読書は語彙を豊かにします。"
  },
  "core:817": {
    "fr": "Des arbres entourent la maison.",
    "ja": "木々が家を囲んでいます。"
  },
  "core:818": {
    "fr": "Nous équipons la salle d’ordinateurs.",
    "ja": "私たちは部屋にコンピューターを備え付けます。"
  },
  "core:819": {
    "fr": "Elle établit un contact avec l’équipe.",
    "ja": "彼女はチームと連絡を取ります。"
  },
  "core:820": {
    "fr": "Nous évaluons les résultats.",
    "ja": "私たちは結果を評価します。"
  },
  "core:821": {
    "fr": "Le médecin examine le patient.",
    "ja": "医師は患者を診察します。"
  },
  "core:822": {
    "fr": "Ce travail exige de la patience.",
    "ja": "この仕事には忍耐が必要です。"
  },
  "core:823": {
    "fr": "Nous explorons l’île.",
    "ja": "私たちは島を探検します。"
  },
  "core:824": {
    "fr": "Cette entreprise exporte du fromage.",
    "ja": "この会社はチーズを輸出します。"
  },
  "core:825": {
    "fr": "Ils fabriquent des meubles.",
    "ja": "彼らは家具を製造します。"
  },
  "core:826": {
    "fr": "Ce plan facilite le voyage.",
    "ja": "この地図は旅行をしやすくします。"
  },
  "core:827": {
    "fr": "Je te félicite pour ta réussite.",
    "ja": "君の成功をお祝いします。"
  },
  "core:828": {
    "fr": "Nous fixons une date.",
    "ja": "私たちは日付を決めます。"
  },
  "core:829": {
    "fr": "Elle forme les nouveaux employés.",
    "ja": "彼女は新入社員を教育します。"
  },
  "core:830": {
    "fr": "Il frappe à la porte.",
    "ja": "彼はドアをノックします。"
  },
  "core:831": {
    "fr": "Il est interdit de fumer ici.",
    "ja": "ここでは喫煙は禁止です。"
  },
  "core:832": {
    "fr": "L’animal fuit le danger.",
    "ja": "動物は危険から逃げます。"
  },
  "core:833": {
    "fr": "Elle gère un magasin.",
    "ja": "彼女は店を経営しています。"
  },
  "core:834": {
    "fr": "Il glisse sur la glace.",
    "ja": "彼は氷の上で滑ります。"
  },
  "core:835": {
    "fr": "Je goûte la soupe.",
    "ja": "私はスープを味見します。"
  },
  "core:836": {
    "fr": "Les enfants grandissent vite.",
    "ja": "子どもたちはすぐに成長します。"
  },
  "core:837": {
    "fr": "Cette blessure guérit lentement.",
    "ja": "この傷はゆっくり治ります。"
  },
  "core:838": {
    "fr": "J’ignore son adresse.",
    "ja": "私は彼の住所を知りません。"
  },
  "core:839": {
    "fr": "Imagine une maison au bord de la mer.",
    "ja": "海辺の家を想像してください。"
  },
  "core:840": {
    "fr": "Ce pays importe du gaz.",
    "ja": "この国はガスを輸入しています。"
  },
  "core:841": {
    "fr": "Le panneau indique la gare.",
    "ja": "標識は駅を示しています。"
  },
  "core:842": {
    "fr": "La météo influence notre décision.",
    "ja": "天候は私たちの決定に影響します。"
  },
  "core:843": {
    "fr": "Elle insiste sur ce point.",
    "ja": "彼女はこの点を強調します。"
  },
  "core:844": {
    "fr": "Le professeur interroge les élèves.",
    "ja": "先生は生徒たちに質問します。"
  },
  "core:845": {
    "fr": "Nous introduisons une nouvelle méthode.",
    "ja": "私たちは新しい方法を導入します。"
  },
  "core:846": {
    "fr": "Il juge le résultat satisfaisant.",
    "ja": "彼は結果を満足できるものと判断します。"
  },
  "core:847": {
    "fr": "L’enfant lance la balle.",
    "ja": "子どもはボールを投げます。"
  },
  "core:848": {
    "fr": "Elle libère l’oiseau.",
    "ja": "彼女は鳥を放します。"
  },
  "core:849": {
    "fr": "Ce pont lie les deux villages.",
    "ja": "この橋は2つの村を結んでいます。"
  },
  "core:850": {
    "fr": "Nous limitons les dépenses.",
    "ja": "私たちは出費を抑えます。"
  },
  "core:851": {
    "fr": "Merci pour votre invitation.",
    "ja": "ご招待ありがとうございます。"
  },
  "core:852": {
    "fr": "La visite dure une heure.",
    "ja": "見学には1時間かかります。"
  },
  "core:853": {
    "fr": "Notre conversation continue.",
    "ja": "私たちの会話は続きます。"
  },
  "core:854": {
    "fr": "La discussion est intéressante.",
    "ja": "議論は興味深いです。"
  },
  "core:855": {
    "fr": "J’ai un entretien demain.",
    "ja": "私は明日面接があります。"
  },
  "core:856": {
    "fr": "Le président prononce un discours.",
    "ja": "大統領が演説をします。"
  },
  "core:857": {
    "fr": "Sa voix est douce.",
    "ja": "彼女の声は優しいです。"
  },
  "core:858": {
    "fr": "J’entends un bruit.",
    "ja": "私は物音を耳にします。"
  },
  "core:859": {
    "fr": "Le silence me calme.",
    "ja": "静けさは私の心を落ち着かせます。"
  },
  "core:860": {
    "fr": "Son langage est simple.",
    "ja": "彼の言葉遣いは平易です。"
  },
  "core:861": {
    "fr": "Je connais cette expression.",
    "ja": "私はこの表現を知っています。"
  },
  "core:862": {
    "fr": "La communication est importante.",
    "ja": "コミュニケーションは重要です。"
  },
  "core:863": {
    "fr": "Nous restons en contact.",
    "ja": "私たちは連絡を取り合い続けます。"
  },
  "core:864": {
    "fr": "Nous trouvons un accord.",
    "ja": "私たちは合意に達します。"
  },
  "core:865": {
    "fr": "Il exprime son désaccord.",
    "ja": "彼は反対の意を表明します。"
  },
  "core:866": {
    "fr": "Elle tient sa promesse.",
    "ja": "彼女は約束を守ります。"
  },
  "core:867": {
    "fr": "Je garde ton secret.",
    "ja": "私は君の秘密を守ります。"
  },
  "core:868": {
    "fr": "Il dit la vérité.",
    "ja": "彼は真実を話します。"
  },
  "core:869": {
    "fr": "Ce récit est un mensonge.",
    "ja": "この話は嘘です。"
  },
  "core:870": {
    "fr": "J’ai confiance en toi.",
    "ja": "私は君を信頼しています。"
  },
  "core:871": {
    "fr": "Elle montre du respect.",
    "ja": "彼女は敬意を示します。"
  },
  "core:872": {
    "fr": "La liberté est précieuse.",
    "ja": "自由は大切です。"
  },
  "core:873": {
    "fr": "Ils défendent l’égalité.",
    "ja": "彼らは平等を擁護します。"
  },
  "core:874": {
    "fr": "Elle demande justice.",
    "ja": "彼女は公正な扱いを求めます。"
  },
  "core:875": {
    "fr": "Cette loi protège les enfants.",
    "ja": "この法律は子どもたちを守ります。"
  },
  "core:876": {
    "fr": "Chacun a le droit de parler.",
    "ja": "誰にも発言する権利があります。"
  },
  "core:877": {
    "fr": "Je respecte cette règle.",
    "ja": "私はこの規則を守ります。"
  },
  "core:878": {
    "fr": "Lisez les phrases dans l’ordre.",
    "ja": "文を順番に読んでください。"
  },
  "core:879": {
    "fr": "La sécurité est notre priorité.",
    "ja": "安全が私たちの最優先事項です。"
  },
  "core:880": {
    "fr": "Il n’y a aucun danger.",
    "ja": "危険はまったくありません。"
  },
  "core:881": {
    "fr": "Ce choix comporte un risque.",
    "ja": "この選択にはリスクが伴います。"
  },
  "core:882": {
    "fr": "La guerre détruit des villes.",
    "ja": "戦争は町々を破壊します。"
  },
  "core:883": {
    "fr": "Nous voulons la paix.",
    "ja": "私たちは平和を望みます。"
  },
  "core:884": {
    "fr": "L’armée quitte la région.",
    "ja": "軍隊はこの地域から撤退します。"
  },
  "core:885": {
    "fr": "Elle appelle la police.",
    "ja": "彼女は警察に電話します。"
  },
  "core:886": {
    "fr": "Le gouvernement annonce une réforme.",
    "ja": "政府は改革を発表します。"
  },
  "core:887": {
    "fr": "Le président ouvre la réunion.",
    "ja": "会長は会議を開会します。"
  },
  "core:888": {
    "fr": "Le ministre répond aux questions.",
    "ja": "大臣は質問に答えます。"
  },
  "core:889": {
    "fr": "L’élection aura lieu demain.",
    "ja": "選挙は明日行われます。"
  },
  "core:890": {
    "fr": "Le vote commence à huit heures.",
    "ja": "投票は8時に始まります。"
  },
  "core:891": {
    "fr": "Nous parlons de politique.",
    "ja": "私たちは政治について話します。"
  },
  "core:892": {
    "fr": "La société change.",
    "ja": "社会は変化します。"
  },
  "core:893": {
    "fr": "La population augmente.",
    "ja": "人口が増えています。"
  },
  "core:894": {
    "fr": "Chaque citoyen peut participer.",
    "ja": "すべての市民が参加できます。"
  },
  "core:895": {
    "fr": "Cette communauté est accueillante.",
    "ja": "この共同体は温かく人を迎え入れます。"
  },
  "core:896": {
    "fr": "Je rejoins une association.",
    "ja": "私は団体に加入します。"
  },
  "core:897": {
    "fr": "Cette organisation aide les familles.",
    "ja": "この組織は家族を支援します。"
  },
  "core:898": {
    "fr": "Cette institution existe depuis longtemps.",
    "ja": "この機関は長く存在しています。"
  },
  "core:899": {
    "fr": "L’administration examine la demande.",
    "ja": "行政機関は申請を審査します。"
  },
  "core:900": {
    "fr": "L’économie du pays se développe.",
    "ja": "その国の経済は発展しています。"
  },
  "core:901": {
    "fr": "Le commerce crée des emplois.",
    "ja": "商業は雇用を生み出します。"
  },
  "core:902": {
    "fr": "Cette industrie utilise beaucoup d’eau.",
    "ja": "この産業は大量の水を使います。"
  },
  "core:903": {
    "fr": "La production augmente.",
    "ja": "生産が増えています。"
  },
  "core:904": {
    "fr": "Nous réduisons notre consommation d’eau.",
    "ja": "私たちは水の消費量を減らします。"
  },
  "core:905": {
    "fr": "La vente commence demain.",
    "ja": "販売は明日始まります。"
  },
  "core:906": {
    "fr": "Cet achat est nécessaire.",
    "ja": "この購入は必要です。"
  },
  "core:907": {
    "fr": "Je signe le contrat.",
    "ja": "私は契約書に署名します。"
  },
  "core:908": {
    "fr": "Votre commande est prête.",
    "ja": "ご注文の品が用意できました。"
  },
  "core:909": {
    "fr": "Ce produit est nouveau.",
    "ja": "この製品は新製品です。"
  },
  "core:910": {
    "fr": "La qualité est excellente.",
    "ja": "品質は非常に良いです。"
  },
  "core:911": {
    "fr": "Il faut une petite quantité de sel.",
    "ja": "少量の塩が必要です。"
  },
  "core:912": {
    "fr": "Cet objet a beaucoup de valeur.",
    "ja": "この品は大きな価値があります。"
  },
  "core:913": {
    "fr": "Le coût du voyage est élevé.",
    "ja": "旅行の費用は高いです。"
  },
  "core:914": {
    "fr": "L’entreprise réalise un bénéfice.",
    "ja": "会社は利益を上げています。"
  },
  "core:915": {
    "fr": "Cette perte est importante.",
    "ja": "この損失は大きいです。"
  },
  "core:916": {
    "fr": "Notre budget est limité.",
    "ja": "私たちの予算は限られています。"
  },
  "core:917": {
    "fr": "Il rembourse sa dette.",
    "ja": "彼は借金を返済します。"
  },
  "core:918": {
    "fr": "La banque accorde un crédit.",
    "ja": "銀行は融資を認めます。"
  },
  "core:919": {
    "fr": "J’ouvre un compte à la banque.",
    "ja": "私は銀行で口座を開きます。"
  },
  "core:920": {
    "fr": "Je paie par carte.",
    "ja": "私はカードで支払います。"
  },
  "core:921": {
    "fr": "Vous pouvez payer en espèces.",
    "ja": "現金で支払えます。"
  },
  "core:922": {
    "fr": "Je n’ai pas de monnaie.",
    "ja": "私は小銭を持っていません。"
  },
  "core:923": {
    "fr": "Cet échange est utile.",
    "ja": "この交換は役に立ちます。"
  },
  "core:924": {
    "fr": "J’accepte votre offre.",
    "ja": "私はあなたの申し出を受け入れます。"
  },
  "core:925": {
    "fr": "La demande augmente.",
    "ja": "需要が増えています。"
  },
  "core:926": {
    "fr": "Notre objectif est clair.",
    "ja": "私たちの目標は明確です。"
  },
  "core:927": {
    "fr": "Quel est le but du voyage ?",
    "ja": "旅行の目的は何ですか。"
  },
  "core:928": {
    "fr": "Nous préparons un plan.",
    "ja": "私たちは計画を立てます。"
  },
  "core:929": {
    "fr": "Cette stratégie fonctionne.",
    "ja": "この戦略はうまくいっています。"
  },
  "core:930": {
    "fr": "Je préfère cette méthode.",
    "ja": "私はこの方法のほうが好きです。"
  },
  "core:931": {
    "fr": "Le processus prend du temps.",
    "ja": "その過程には時間がかかります。"
  },
  "core:932": {
    "fr": "Le système fonctionne bien.",
    "ja": "システムは正常に動いています。"
  },
  "core:933": {
    "fr": "La structure du texte est claire.",
    "ja": "文章の構造は明確です。"
  },
  "core:934": {
    "fr": "Cette fonction est utile.",
    "ja": "この機能は便利です。"
  },
  "core:935": {
    "fr": "La table a une forme ronde.",
    "ja": "テーブルは丸い形をしています。"
  },
  "core:936": {
    "fr": "Je cherche ce type de livre.",
    "ja": "私はこの種類の本を探しています。"
  },
  "core:937": {
    "fr": "J’aime ce genre de musique.",
    "ja": "私はこの種類の音楽が好きです。"
  },
  "core:938": {
    "fr": "Ce mot appartient à cette catégorie.",
    "ja": "この単語はこの分類に属します。"
  },
  "core:939": {
    "fr": "Son niveau de français progresse.",
    "ja": "彼女のフランス語の水準は向上しています。"
  },
  "core:940": {
    "fr": "C’est la première étape.",
    "ja": "これは最初の段階です。"
  },
  "core:941": {
    "fr": "Le projet entre dans une nouvelle phase.",
    "ja": "計画は新しい段階に入ります。"
  },
  "core:942": {
    "fr": "Cette période est difficile.",
    "ja": "この時期は大変です。"
  },
  "core:943": {
    "fr": "Quelle est la durée du trajet ?",
    "ja": "移動時間はどのくらいですか。"
  },
  "core:944": {
    "fr": "Nous connaissons la limite.",
    "ja": "私たちは限界を知っています。"
  },
  "core:945": {
    "fr": "Il accepte cette condition.",
    "ja": "彼はこの条件を受け入れます。"
  },
  "core:946": {
    "fr": "La situation s’améliore.",
    "ja": "状況は改善しています。"
  },
  "core:947": {
    "fr": "Le contexte aide à comprendre le mot.",
    "ja": "文脈は単語の理解を助けます。"
  },
  "core:948": {
    "fr": "C’est une circonstance exceptionnelle.",
    "ja": "これは例外的な事情です。"
  },
  "core:949": {
    "fr": "Il existe une autre possibilité.",
    "ja": "別の可能性があります。"
  },
  "core:950": {
    "fr": "Cette salle a une capacité de cent personnes.",
    "ja": "この部屋の収容人数は100人です。"
  },
  "core:951": {
    "fr": "Son message est clair.",
    "ja": "彼のメッセージは明確です。"
  },
  "core:952": {
    "fr": "Ce bâtiment est énorme.",
    "ja": "この建物は巨大です。"
  },
  "core:953": {
    "fr": "Le repos est essentiel.",
    "ja": "休息は不可欠です。"
  },
  "core:954": {
    "fr": "Le prix exact est dix euros.",
    "ja": "正確な値段は10ユーロです。"
  },
  "core:955": {
    "fr": "Mon bureau est propre.",
    "ja": "私の机は清潔です。"
  },
  "core:956": {
    "fr": "Elle chante bien.",
    "ja": "彼女は歌が上手です。"
  },
  "core:957": {
    "fr": "J’ai mal dormi.",
    "ja": "私はよく眠れませんでした。"
  },
  "core:958": {
    "fr": "Il fait très froid.",
    "ja": "とても寒いです。"
  },
  "core:959": {
    "fr": "Je voudrais plus de temps.",
    "ja": "私はもっと時間が欲しいです。"
  },
  "core:960": {
    "fr": "Je travaille moins le dimanche.",
    "ja": "私は日曜日には働く時間が少ないです。"
  },
  "core:961": {
    "fr": "Le prix est fixe.",
    "ja": "価格は固定されています。"
  },
  "core:962": {
    "fr": "C’est un droit fondamental.",
    "ja": "これは基本的な権利です。"
  },
  "core:963": {
    "fr": "Elle lit beaucoup.",
    "ja": "彼女はたくさん読書をします。"
  },
  "core:964": {
    "fr": "Ce problème est fréquent.",
    "ja": "この問題はよく起こります。"
  },
  "core:965": {
    "fr": "Le pain est frais.",
    "ja": "パンは焼きたてです。"
  },
  "core:966": {
    "fr": "Il parle peu.",
    "ja": "彼はあまり話しません。"
  },
  "core:967": {
    "fr": "C’est une erreur grave.",
    "ja": "これは重大な間違いです。"
  },
  "core:968": {
    "fr": "J’ai assez de temps.",
    "ja": "私には十分な時間があります。"
  },
  "core:969": {
    "fr": "Ce sac est trop lourd.",
    "ja": "このかばんは重すぎます。"
  },
  "core:970": {
    "fr": "Le corps humain est complexe.",
    "ja": "人体は複雑です。"
  },
  "core:971": {
    "fr": "Ce lieu est idéal pour lire.",
    "ja": "この場所は読書に最適です。"
  },
  "core:972": {
    "fr": "Nous partons maintenant.",
    "ja": "私たちは今出発します。"
  },
  "core:973": {
    "fr": "Je travaille ici.",
    "ja": "私はここで働いています。"
  },
  "core:974": {
    "fr": "Pose le livre là.",
    "ja": "そこに本を置いてください。"
  },
  "core:975": {
    "fr": "Nous irons ailleurs.",
    "ja": "私たちは別の場所へ行きます。"
  },
  "core:976": {
    "fr": "Cette décision est juste.",
    "ja": "この決定は公正です。"
  },
  "core:977": {
    "fr": "Ce pont est large.",
    "ja": "この橋は幅が広いです。"
  },
  "core:978": {
    "fr": "Elle arrive toujours à l’heure.",
    "ja": "彼女はいつも時間どおりに到着します。"
  },
  "core:979": {
    "fr": "Je viens souvent ici.",
    "ja": "私はよくここに来ます。"
  },
  "core:980": {
    "fr": "Il travaille parfois le dimanche.",
    "ja": "彼はときどき日曜日に働きます。"
  },
  "core:981": {
    "fr": "Je ne fume jamais.",
    "ja": "私は決してたばこを吸いません。"
  },
  "core:982": {
    "fr": "Elle dort encore.",
    "ja": "彼女はまだ眠っています。"
  },
  "core:983": {
    "fr": "J’ai déjà mangé.",
    "ja": "私はすでに食事をしました。"
  },
  "core:984": {
    "fr": "Ce résultat est meilleur.",
    "ja": "この結果のほうが良いです。"
  },
  "core:985": {
    "fr": "Le train arrive bientôt.",
    "ja": "列車はもうすぐ到着します。"
  },
  "core:986": {
    "fr": "C’est exactement ce que je cherche.",
    "ja": "それはまさに私が探しているものです。"
  },
  "core:987": {
    "fr": "Finalement, nous restons ici.",
    "ja": "結局、私たちはここに残ります。"
  },
  "core:988": {
    "fr": "Parlez franchement.",
    "ja": "率直に話してください。"
  },
  "core:989": {
    "fr": "Je rentre généralement à six heures.",
    "ja": "私はたいてい6時に帰ります。"
  },
  "core:990": {
    "fr": "Heureusement, personne n’est blessé.",
    "ja": "幸い、けが人はいません。"
  },
  "core:991": {
    "fr": "Il répond immédiatement.",
    "ja": "彼はすぐに答えます。"
  },
  "core:992": {
    "fr": "Parlez lentement, s’il vous plaît.",
    "ja": "ゆっくり話してください。"
  },
  "core:993": {
    "fr": "Je lis lorsque j’ai le temps.",
    "ja": "私は時間があるときに読書をします。"
  },
  "core:994": {
    "fr": "Je viens même si je suis fatigué.",
    "ja": "私は疲れていても来ます。"
  },
  "core:995": {
    "fr": "Nous sortons malgré la pluie.",
    "ja": "私たちは雨にもかかわらず出かけます。"
  },
  "core:996": {
    "fr": "Malheureusement, le magasin est fermé.",
    "ja": "残念ながら店は閉まっています。"
  },
  "core:997": {
    "fr": "Je comprends mieux maintenant.",
    "ja": "私は今、前よりよく理解しています。"
  },
  "core:998": {
    "fr": "Il pleut ; néanmoins, nous partons.",
    "ja": "雨が降っていますが、それでも私たちは出発します。"
  },
  "core:999": {
    "fr": "J’aime les fruits, notamment les pommes.",
    "ja": "私は果物、特にリンゴが好きです。"
  },
  "core:1000": {
    "fr": "Il y a des fleurs partout.",
    "ja": "至る所に花があります。"
  },
  "lac-001": {
    "fr": "Ce chapitre examine le rôle de l’imaginaire dans la formation du moi.",
    "ja": "この章は自我の形成における想像界の役割を検討します。"
  },
  "lac-002": {
    "fr": "Nous étudions les rapports entre le symbolique et le langage.",
    "ja": "私たちは象徴界と言語の関係を研究します。"
  },
  "lac-003": {
    "fr": "Le texte distingue le réel de la réalité quotidienne.",
    "ja": "この文章は現実界を日常の現実と区別します。"
  },
  "lac-004": {
    "fr": "Ce signifiant prend sens dans une chaîne.",
    "ja": "このシニフィアンは連鎖の中で意味を帯びます。"
  },
  "lac-005": {
    "fr": "L’analyse distingue le signifiant et le signifié.",
    "ja": "この分析はシニフィアンとシニフィエを区別します。"
  },
  "lac-006": {
    "fr": "Le sujet ne se confond pas avec le moi.",
    "ja": "主体は自我と同一ではありません。"
  },
  "lac-007": {
    "fr": "Cette image contribue à la formation du moi.",
    "ja": "この像は自我の形成に関わります。"
  },
  "lac-008": {
    "fr": "L’Autre occupe une place centrale dans cette lecture.",
    "ja": "大他者はこの読解で中心的な位置を占めます。"
  },
  "lac-009": {
    "fr": "Le texte distingue le petit autre du grand Autre.",
    "ja": "この文章は小他者を大他者と区別します。"
  },
  "lac-010": {
    "fr": "La faim exprime un besoin du corps.",
    "ja": "空腹は身体の欲求を表します。"
  },
  "lac-011": {
    "fr": "Cette demande s’adresse à l’Autre.",
    "ja": "この要求は大他者に向けられています。"
  },
  "lac-012": {
    "fr": "Le désir ne se réduit pas au besoin.",
    "ja": "欲望は欲求には還元されません。"
  },
  "lac-013": {
    "fr": "Nous étudions le trajet de la pulsion.",
    "ja": "私たちは欲動の経路を研究します。"
  },
  "lac-014": {
    "fr": "La jouissance ne se confond pas avec le plaisir.",
    "ja": "享楽は快楽と同一ではありません。"
  },
  "lac-015": {
    "fr": "Ce passage présente l’objet a comme cause du désir.",
    "ja": "この一節は対象aを欲望の原因として提示します。"
  },
  "lac-016": {
    "fr": "Le fantasme organise le rapport du sujet à son désir.",
    "ja": "幻想は主体とその欲望との関係を構成します。"
  },
  "lac-017": {
    "fr": "Ce rêve ouvre une question sur l’inconscient.",
    "ja": "この夢は無意識についての問いを開きます。"
  },
  "lac-018": {
    "fr": "La répétition apparaît dans le récit du patient.",
    "ja": "患者の語りに反復が現れます。"
  },
  "lac-019": {
    "fr": "Le transfert intervient dans la relation analytique.",
    "ja": "転移は分析の関係に関わります。"
  },
  "lac-020": {
    "fr": "Le stade du miroir éclaire la formation du moi.",
    "ja": "鏡像段階は自我の形成を理解する手がかりになります。"
  },
  "fou-021": {
    "fr": "Ce discours définit ce qui peut être dit.",
    "ja": "この言説は何が語られうるかを定めます。"
  },
  "fou-022": {
    "fr": "Cette pratique produit un savoir sur les individus.",
    "ja": "この実践は個人についての知を生み出します。"
  },
  "fou-023": {
    "fr": "La connaissance de ce domaine reste limitée.",
    "ja": "この分野の知識はまだ限られています。"
  },
  "fou-024": {
    "fr": "Le pouvoir s’exerce dans des relations concrètes.",
    "ja": "権力は具体的な関係の中で行使されます。"
  },
  "fou-025": {
    "fr": "Le texte interroge les conditions de production de la vérité.",
    "ja": "この文章は真理が生み出される条件を問います。"
  },
  "fou-026": {
    "fr": "Ce chapitre examine les limites de la raison.",
    "ja": "この章は理性の限界を検討します。"
  },
  "fou-027": {
    "fr": "La folie devient ici un objet de savoir.",
    "ja": "狂気はここで知の対象になります。"
  },
  "fou-028": {
    "fr": "La maladie reçoit une nouvelle classification.",
    "ja": "病気は新たに分類されます。"
  },
  "fou-029": {
    "fr": "Le regard clinique transforme la description du corps.",
    "ja": "臨床のまなざしは身体の記述を変えます。"
  },
  "fou-030": {
    "fr": "Ce regard organise ce qui devient visible.",
    "ja": "このまなざしは何が見えるようになるかを構成します。"
  },
  "fou-031": {
    "fr": "Cette expérience modifie notre manière de penser.",
    "ja": "この経験は私たちの考え方を変えます。"
  },
  "fou-032": {
    "fr": "Le texte interroge les formes de l’existence.",
    "ja": "この文章は存在の諸形態を問います。"
  },
  "fou-033": {
    "fr": "Le langage ne sert pas seulement à nommer les choses.",
    "ja": "言語は物事に名前をつけるためだけに働くのではありません。"
  },
  "fou-034": {
    "fr": "Cette représentation du monde change avec le temps.",
    "ja": "この世界の表象は時とともに変わります。"
  },
  "fou-035": {
    "fr": "Le signe renvoie à autre chose que lui-même.",
    "ja": "記号はそれ自体とは別のものを指し示します。"
  },
  "fou-036": {
    "fr": "Cet énoncé appartient à un champ de savoir précis.",
    "ja": "この言表は特定の知の領域に属します。"
  },
  "fou-037": {
    "fr": "L’énonciation dépend de la situation de parole.",
    "ja": "発話行為は発言の状況に左右されます。"
  },
  "fou-038": {
    "fr": "L’archive ne se réduit pas à une collection de documents.",
    "ja": "アルシーヴは文書の集積には還元されません。"
  },
  "fou-039": {
    "fr": "Cette archéologie décrit les conditions du discours.",
    "ja": "この考古学は言説の条件を記述します。"
  },
  "fou-040": {
    "fr": "La généalogie examine la formation historique des pratiques.",
    "ja": "系譜学は実践の歴史的な形成を検討します。"
  },
  "fou-041": {
    "fr": "L’histoire de cette institution est complexe.",
    "ja": "この制度の歴史は複雑です。"
  },
  "fou-042": {
    "fr": "Cet événement transforme les pratiques existantes.",
    "ja": "この出来事は既存の実践を変えます。"
  },
  "fou-043": {
    "fr": "L’analyse souligne une discontinuité entre les périodes.",
    "ja": "この分析は時代の間の非連続性を強調します。"
  },
  "fou-044": {
    "fr": "Cette rupture modifie les règles du savoir.",
    "ja": "この断絶は知の規則を変えます。"
  },
  "fou-045": {
    "fr": "La recherche d’une origine unique pose problème.",
    "ja": "単一の起源を探すことには問題があります。"
  },
  "fou-046": {
    "fr": "Nous étudions l’émergence de cette pratique.",
    "ja": "私たちはこの実践の出現を研究します。"
  },
  "fou-047": {
    "fr": "La formation de ce savoir prend plusieurs siècles.",
    "ja": "この知の形成には数世紀かかります。"
  },
  "fou-048": {
    "fr": "Cette pratique transforme les rapports sociaux.",
    "ja": "この実践は社会関係を変えます。"
  },
  "fou-049": {
    "fr": "La problématisation rend une conduite discutable.",
    "ja": "問題化はある行為を議論の対象にします。"
  },
  "fou-050": {
    "fr": "Cette critique interroge nos habitudes de pensée.",
    "ja": "この批判は私たちの思考習慣を問い直します。"
  },
  "fou-051": {
    "fr": "Ce dispositif associe des discours et des institutions.",
    "ja": "この装置は言説と制度を結びつけます。"
  },
  "fou-052": {
    "fr": "Cette institution organise la vie quotidienne.",
    "ja": "この制度は日常生活を組織します。"
  },
  "fou-053": {
    "fr": "La discipline règle les gestes et les horaires.",
    "ja": "規律は動作と時間割を規定します。"
  },
  "fou-054": {
    "fr": "La surveillance modifie les comportements.",
    "ja": "監視は行動を変えます。"
  },
  "fou-055": {
    "fr": "La punition vise à corriger la conduite.",
    "ja": "処罰は行状の矯正を目指します。"
  },
  "fou-056": {
    "fr": "La prison devient un objet d’enquête.",
    "ja": "監獄が調査の対象になります。"
  },
  "fou-057": {
    "fr": "Le corps est soumis à des exercices répétés.",
    "ja": "身体は繰り返される訓練に従わせられます。"
  },
  "fou-058": {
    "fr": "Cette norme permet de comparer les individus.",
    "ja": "この規範によって個人同士を比較できます。"
  },
  "fou-059": {
    "fr": "La normalisation impose des critères communs.",
    "ja": "規格化は共通の基準を課します。"
  },
  "fou-060": {
    "fr": "L’examen combine observation et classement.",
    "ja": "試験は観察と序列化を組み合わせます。"
  },
  "fou-061": {
    "fr": "L’aveu produit un discours sur soi.",
    "ja": "告白は自己についての言説を生み出します。"
  },
  "fou-062": {
    "fr": "Cette enquête rassemble des témoignages.",
    "ja": "この調査は証言を集めます。"
  },
  "fou-063": {
    "fr": "La justice examine les faits.",
    "ja": "司法は事実を検討します。"
  },
  "fou-064": {
    "fr": "Le droit définit les conditions de cette pratique.",
    "ja": "法はこの実践の条件を定めます。"
  },
  "fou-065": {
    "fr": "Cette loi modifie les règles de la détention.",
    "ja": "この法律は拘禁の規則を変えます。"
  },
  "fou-066": {
    "fr": "Le texte analyse les limites de la souveraineté.",
    "ja": "この文章は主権の限界を分析します。"
  },
  "fou-067": {
    "fr": "Cette relation de domination dure longtemps.",
    "ja": "この支配関係は長く続きます。"
  },
  "fou-068": {
    "fr": "L’assujettissement lie la formation du sujet à des rapports de pouvoir.",
    "ja": "従属化・主体化は主体の形成を権力関係に結びつけます。"
  },
  "fou-069": {
    "fr": "Une résistance apparaît au sein de cette relation.",
    "ja": "この関係の内部に抵抗が現れます。"
  },
  "fou-070": {
    "fr": "Cette lutte transforme les rapports de force.",
    "ja": "この闘争は力関係を変えます。"
  },
  "fou-071": {
    "fr": "La stratégie change selon la situation.",
    "ja": "戦略は状況に応じて変わります。"
  },
  "fou-072": {
    "fr": "Ce rapport de pouvoir n’est pas immuable.",
    "ja": "この権力関係は不変ではありません。"
  },
  "fou-073": {
    "fr": "La force de cette règle tient à sa répétition.",
    "ja": "この規則の力はその反復にあります。"
  },
  "fou-074": {
    "fr": "Le gouvernement des conduites prend plusieurs formes.",
    "ja": "行為の統治は複数の形態を取ります。"
  },
  "fou-075": {
    "fr": "La gouvernementalité permet d’étudier les manières de gouverner.",
    "ja": "統治性は統治の諸様式を研究する手がかりになります。"
  },
  "fou-076": {
    "fr": "Cette règle oriente la conduite des individus.",
    "ja": "この規則は個人の行為を方向づけます。"
  },
  "fou-077": {
    "fr": "La population devient un objet de calcul.",
    "ja": "人口は計算の対象になります。"
  },
  "fou-078": {
    "fr": "La sécurité repose ici sur la gestion des risques.",
    "ja": "安全はここではリスクの管理に基づいています。"
  },
  "fou-079": {
    "fr": "Le territoire fait l’objet de nouvelles mesures.",
    "ja": "領土は新たな測量の対象になります。"
  },
  "fou-080": {
    "fr": "L’État organise la collecte des données.",
    "ja": "国家はデータの収集を組織します。"
  },
  "fou-081": {
    "fr": "Cette société connaît de profonds changements.",
    "ja": "この社会は大きな変化を経験しています。"
  },
  "fou-082": {
    "fr": "L’individu reçoit un dossier personnel.",
    "ja": "個人には個別の記録簿が作られます。"
  },
  "fou-083": {
    "fr": "Ces pratiques façonnent la subjectivité.",
    "ja": "これらの実践は主体性を形づくります。"
  },
  "fou-084": {
    "fr": "La subjectivation désigne ici un processus de formation du sujet.",
    "ja": "主体化はここでは主体が形成される過程を指します。"
  },
  "fou-085": {
    "fr": "L’objectivation transforme une personne en objet de connaissance.",
    "ja": "対象化は人を認識の対象にします。"
  },
  "fou-086": {
    "fr": "Cette identité se construit dans des relations sociales.",
    "ja": "このアイデンティティは社会関係の中で構築されます。"
  },
  "fou-087": {
    "fr": "La liberté ouvre la possibilité d’agir autrement.",
    "ja": "自由は別の仕方で行動する可能性を開きます。"
  },
  "fou-088": {
    "fr": "L’éthique interroge notre rapport à nous-mêmes.",
    "ja": "倫理は私たち自身との関係を問います。"
  },
  "fou-089": {
    "fr": "Cette morale prescrit des règles de conduite.",
    "ja": "この道徳は行為の規則を定めます。"
  },
  "fou-090": {
    "fr": "Il faut apprendre à prendre soin de soi.",
    "ja": "自己を大切にすることを学ぶ必要があります。"
  },
  "fou-091": {
    "fr": "Le souci de soi implique des exercices réguliers.",
    "ja": "自己への配慮は定期的な修練を伴います。"
  },
  "fou-092": {
    "fr": "Cette technique transforme la manière de vivre.",
    "ja": "この技法は生き方を変えます。"
  },
  "fou-093": {
    "fr": "L’ascèse suppose un travail sur soi.",
    "ja": "修練は自己に対する働きかけを前提とします。"
  },
  "fou-094": {
    "fr": "Ce chapitre examine les rapports entre spiritualité et vérité.",
    "ja": "この章は霊性と真理の関係を検討します。"
  },
  "fou-095": {
    "fr": "La sexualité devient un objet de discours médical.",
    "ja": "セクシュアリティは医学的言説の対象になります。"
  },
  "fou-096": {
    "fr": "Le plaisir occupe une place dans cette réflexion éthique.",
    "ja": "快楽はこの倫理的考察の中に位置を占めます。"
  },
  "fou-097": {
    "fr": "L’usage de ce mot varie selon le contexte.",
    "ja": "この単語の用法は文脈によって異なります。"
  },
  "fou-098": {
    "fr": "La vie devient un enjeu politique.",
    "ja": "生は政治的な争点になります。"
  },
  "fou-099": {
    "fr": "Ce texte examine notre rapport à la mort.",
    "ja": "この文章は私たちと死との関係を検討します。"
  },
  "fou-100": {
    "fr": "La pensée peut transformer notre manière de vivre.",
    "ja": "思考は私たちの生き方を変えることができます。"
  }
};
