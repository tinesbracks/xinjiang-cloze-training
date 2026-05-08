let lesson = {
  id: "colors-argued",
  title: "颜色们的争吵",
  englishTitle: "The Colors Argued",
  level: "初中",
  difficulty: "中等",
  source: "2026年乌鲁木齐第二次模考",
  tags: ["寓言故事", "逻辑推理", "上下文复现"],
  available: true,
  firstSentence: "A long time ago, the colors argued about who was the best, the most important, and the most beautiful one in the world.",
  lastSentence: "They appreciate and love one another, and show one of the most beautiful ____ to the world.",
  tone: "转折变化",
  toneReason: "文章从争吵、害怕的负面状态，转向和谐、欣赏、共同呈现美的积极状态。",
  passage: [
    'A long time ago, the colors argued about who was the best, the most important, and the most beautiful one in the world. Green said, "I am the color of grass, trees, and leaves. Just ',
    { blank: 21 },
    ' at the countryside, and you will see that I am everywhere. I am the sign of ',
    { blank: 22 },
    ' and hope." "You\'re wrong! You only think about the earth," Blue said ',
    { blank: 23 },
    '. "Look at the sky and the sea. Water is the basis of life. The sky gives the world peace. Without the peace, you would all be ',
    { blank: 24 },
    '." Red could not wait and shouted, "I am the ruler of you all! I am the color of life\'s blood and ',
    { blank: 25 },
    '. I bring fire into the blood and make people brave." Finally, Indigo (青色) spoke. Its voice was quieter than the others. "Think of me. I am the color of ',
    { blank: 26 },
    '. People hardly notice me, but I stand for ',
    { blank: 27 },
    ' and deep thinking." The colors went on ',
    { blank: 28 },
    '. They became louder and angrier. Each one took pride in its own ',
    { blank: 29 },
    '. Suddenly, there was a bright flash of lightning and a loud clap of thunder. ',
    { blank: 30 },
    ' started to pour down. The colors were afraid. They ',
    { blank: 31 },
    ' close to one another for comfort and warmth. After a while, the colors were surprised to see they had become a colorful ',
    { blank: 32 },
    '. The Rain spoke, "Each of you is really beautiful and important, but you are much ',
    { blank: 33 },
    ' when you are together." From then on, the colors have never argued among themselves. ',
    { blank: 34 },
    ', whenever it rains, they always appear together later. They appreciate and love one another, and show one of the most beautiful ',
    { blank: 35 },
    ' to the world.'
  ],
  questions: [
    q(21, ["look", "listen", "walk"], "look", "动词", "逻辑推理", ["and you will see"], "动作发生的因果逻辑，只有先发出“看”的动作，才能得到“看见”的结果。"),
    q(22, ["peace", "life", "luck"], "life", "名词", "上下文复现", ["grass", "trees", "leaves"], "Green代表草木，是生命的象征，且下文Blue和Red也在聊life，属于语义场复现。"),
    q(23, ["happily", "quietly", "angrily"], "angrily", "形容词副词", "情感态度", ["You're wrong!"], "“你错了！”带有攻击性和负面情绪，顺着态度褒贬法则锁定angrily。"),
    q(24, ["everything", "nothing", "something"], "nothing", "代词", "逻辑推理", ["Without the peace"], "没有了和平，你们什么都不是，逻辑指向nothing。"),
    q(25, ["courage", "beauty", "wisdom"], "courage", "名词", "上下文复现", ["make people brave"], "后文brave指向勇敢，名词形式呼应courage。"),
    q(26, ["fun", "silence", "joy"], "silence", "名词", "上下文复现", ["Its voice was quieter"], "声音更安静quieter，语义自然呼应silence。"),
    q(27, ["love", "power", "thought"], "thought", "名词", "上下文复现", ["and deep thinking"], "and连接并列内容，thinking与thought形成语义复现。"),
    q(28, ["arguing", "laughing", "playing"], "arguing", "动词", "上下文复现", ["the colors argued"], "首句已经出现argued，此处是原词复现，颜色们继续争吵。"),
    q(29, ["shape", "size", "importance"], "importance", "名词", "上下文复现", ["who was the most important"], "首句争论谁最重要，此处用importance形成同根复现。"),
    q(30, ["Snow", "Rain", "Wind"], "Rain", "名词", "上下文复现", ["The Rain spoke"], "答案在下一段开头，典型下文原词复现。"),
    q(31, ["shouted", "hid", "gathered"], "gathered", "动词", "逻辑推理", ["close to one another for comfort and warmth"], "为了取暖和安慰彼此靠近，连贯动作指向gathered。"),
    q(32, ["lighting", "rainbow", "thunder"], "rainbow", "名词", "常识", ["colors", "Rain"], "各种颜色聚在一起加上下雨，根据常识推断为rainbow。"),
    q(33, ["good", "better", "best"], "better", "形容词副词", "语法", ["much"], "much修饰形容词比较级，选better。"),
    q(34, ["Instead", "However", "Besides"], "Instead", "连词逻辑", "逻辑推理", ["never argued", "always appear together"], "前面是不再争吵，后面是一起出现，属于替代动作逻辑。"),
    q(35, ["stories", "sights", "colors"], "sights", "名词", "常识 / 词汇辨析", ["beautiful"], "彩虹向世界展示的是美丽的风景，sights更贴合搭配。")
  ],
  verifySentences: [
    {
      english: "A long time ago, the colors argued about who was the best, the most important, and the most beautiful one in the world.",
      chinese: "很久以前，颜色们争论谁是世界上最好、最重要、最美丽的颜色。"
    },
    {
      english: 'Green said, "I am the color of grass, trees, and leaves.',
      chinese: "绿色说：“我是草、树和叶子的颜色。”"
    },
    {
      english: "Just look at the countryside, and you will see that I am everywhere.",
      chinese: "只要看看乡村，你就会发现我无处不在。",
      answers: ["look"]
    },
    {
      english: 'I am the sign of life and hope."',
      chinese: "我是生命和希望的象征。”",
      answers: ["life"]
    },
    {
      english: '"You\'re wrong! You only think about the earth," Blue said angrily.',
      chinese: "“你错了！你只想着大地，”蓝色生气地说。",
      answers: ["angrily"]
    },
    {
      english: '"Look at the sky and the sea.',
      chinese: "“看看天空和大海。”"
    },
    {
      english: "Water is the basis of life.",
      chinese: "水是生命的基础。"
    },
    {
      english: "The sky gives the world peace.",
      chinese: "天空给世界带来和平。"
    },
    {
      english: 'Without the peace, you would all be nothing."',
      chinese: "没有和平，你们全都什么也不是。”",
      answers: ["nothing"]
    },
    {
      english: 'Red could not wait and shouted, "I am the ruler of you all!',
      chinese: "红色迫不及待地喊道：“我是你们所有颜色的统治者！”"
    },
    {
      english: "I am the color of life's blood and courage.",
      chinese: "我是生命之血和勇气的颜色。",
      answers: ["courage"]
    },
    {
      english: 'I bring fire into the blood and make people brave."',
      chinese: "我把火焰带进血液，使人们变得勇敢。”"
    },
    {
      english: 'Finally, Indigo spoke. Its voice was quieter than the others.',
      chinese: "最后，青色说话了。它的声音比其他颜色都更安静。"
    },
    {
      english: '"Think of me. I am the color of silence.',
      chinese: "“想想我吧。我是沉默的颜色。”",
      answers: ["silence"]
    },
    {
      english: 'People hardly notice me, but I stand for thought and deep thinking."',
      chinese: "人们几乎注意不到我，但我代表思想和深度思考。”",
      answers: ["thought"]
    },
    {
      english: "The colors went on arguing.",
      chinese: "颜色们继续争吵。",
      answers: ["arguing"]
    },
    {
      english: "They became louder and angrier.",
      chinese: "它们的声音越来越大，也越来越生气。"
    },
    {
      english: "Each one took pride in its own importance.",
      chinese: "每一种颜色都为自己的重要性感到骄傲。",
      answers: ["importance"]
    },
    {
      english: "Suddenly, there was a bright flash of lightning and a loud clap of thunder.",
      chinese: "突然，一道明亮的闪电划过，紧接着一声响亮的雷声。"
    },
    {
      english: "Rain started to pour down.",
      chinese: "大雨开始倾盆而下。",
      answers: ["Rain"]
    },
    {
      english: "The colors were afraid.",
      chinese: "颜色们害怕了。"
    },
    {
      english: "They gathered close to one another for comfort and warmth.",
      chinese: "它们聚在一起，互相安慰，也互相取暖。",
      answers: ["gathered"]
    },
    {
      english: "After a while, the colors were surprised to see they had become a colorful rainbow.",
      chinese: "过了一会儿，颜色们惊讶地发现自己变成了一道五彩缤纷的彩虹。",
      answers: ["rainbow"]
    },
    {
      english: 'The Rain spoke, "Each of you is really beautiful and important, but you are much better when you are together."',
      chinese: "雨说：“你们每一种颜色都真的很美、很重要，但当你们在一起时，你们会更好。”",
      answers: ["better"]
    },
    {
      english: "From then on, the colors have never argued among themselves.",
      chinese: "从那以后，颜色们再也没有彼此争吵过。"
    },
    {
      english: "Instead, whenever it rains, they always appear together later.",
      chinese: "相反，每当下雨之后，它们总是一起出现。",
      answers: ["Instead"]
    },
    {
      english: "They appreciate and love one another, and show one of the most beautiful sights to the world.",
      chinese: "它们彼此欣赏、彼此相爱，并向世界展示最美丽的景象之一。",
      answers: ["sights"]
    }
  ]
};

const nineColoredDeer = {
  id: "nine-colored-deer",
  title: "九色鹿的故事",
  englishTitle: "The Nine-colored Deer",
  level: "初中",
  difficulty: "中等",
  source: "2026乌鲁木齐天山区九年级适应测试",
  tags: ["寓言故事", "逻辑推理", "固定搭配", "情感态度"],
  available: true,
  firstSentence: "Deep in a forest, there lived ____ magical deer.",
  lastSentence: "Birds sang ____ it, and flowers grew brighter wherever it walked.",
  tone: "转折变化",
  toneReason: "文章从和平美好的森林生活，转向商人的背叛，最终回到正义与和平。",
  passage: [
    "Deep in a forest, there lived ",
    { blank: 21 },
    " magical deer. Its fur was as white as snow with nine-colored patterns, shining ",
    { blank: 22 },
    ". People called it “the Nine-colored Deer”. One sunny afternoon, while ",
    { blank: 23 },
    " water by a river, the deer heard a loud cry. A man had fallen into the water and he couldn’t swim. Without thinking, the deer ",
    { blank: 24 },
    " into the river and pulled the man to the ",
    { blank: 25 },
    ". The man, who was a trader, was ",
    { blank: 26 },
    " to the deer. “How can I repay you?” he asked. The deer shook its head. “Just promise never to tell anyone about me,” it said. The man ",
    { blank: 27 },
    " and left happily. Weeks later, the queen of the country had a ",
    { blank: 28 },
    " about a magical deer. She wanted its beautiful fur for herself. The emperor, who loved his wife deeply, offered a big reward, “Gold and silver to anyone who finds this deer!” When the ",
    { blank: 29 },
    " heard the news, he realized he must be the ",
    { blank: 30 },
    " one. He forgot his promise and hurried to the palace. The next morning, the trader ",
    { blank: 31 },
    " soldiers into the forest. When the deer saw them, it stood ",
    { blank: 32 },
    ". It turned to the emperor and said, “This man promised to keep the ",
    { blank: 33 },
    ", but he betrayed (背叛) me for money.” The emperor’s face turned red with shame. He ordered the soldiers to put the trader ",
    { blank: 34 },
    " prison (监狱) as punishment. Then, he said to the deer, “No one will hurt you here.” From that day on, the nine-colored deer lived peacefully in the forest. Birds sang ",
    { blank: 35 },
    " it, and flowers grew brighter wherever it walked."
  ],
  questions: [
    q(21, ["a", "an", "the"], "a", "代词", "语法", ["magical deer", "首次提到"], "第一次提到这只鹿，表泛指，且 magical 首字母是辅音音素，故使用不定冠词 a。"),
    q(22, ["slowly", "quietly", "brightly"], "brightly", "形容词副词", "逻辑推理 / 词汇辨析", ["shining", "as white as snow"], "顺着前文“像雪一样白”和 shining 的逻辑指向，光芒应该是 brightly。"),
    q(23, ["drink", "drinking", "drank"], "drinking", "固定搭配", "语法 / 固定搭配", ["while"], "while 后若主语一致可直接加 doing，表示“在做某事的时候”。", "while doing sth.", "固定句型", "连词(while) + 动名词(doing)"),
    q(24, ["jumped", "run", "swam"], "jumped", "动词", "固定搭配 / 逻辑推理", ["into the river"], "为了救落水者，鹿毫不犹豫地跳进河里。", "jump into", "动词短语", "动词(jump) + 介词(into)"),
    q(25, ["forest", "bank", "palace"], "bank", "名词", "常识", ["pulled the man to", "river"], "从河里把人救上来，必然是拉到岸边 bank。"),
    q(26, ["angry", "sadly", "thankful"], "thankful", "形容词副词", "情感态度 / 固定搭配", ["How can I repay you?"], "商人问“我该如何报答你？”，说明情绪为正向，选 thankful。", "be thankful to sb.", "形容词搭配", "系动词(be) + 形容词(thankful) + 介词(to) + 某人(sb.)"),
    q(27, ["agreed", "refused", "cried"], "agreed", "动词", "逻辑推理", ["and left happily"], "and 提示前后动作情感一致，开心离开说明他同意了请求。"),
    q(28, ["study", "dream", "date"], "dream", "固定搭配", "固定搭配", ["had a ___ about a magical deer"], "王后做了一个关于神奇九色鹿的梦。", "have a dream about", "动词短语", "动词(have) + 冠词(a) + 名词(dream) + 介词(about)"),
    q(29, ["trader", "queen", "deer"], "trader", "名词", "上下文复现", ["The man, who was a trader"], "上文明确交代被救男人是 trader，此处为原词复现。"),
    q(30, ["last", "unlucky", "only"], "only", "形容词副词", "逻辑推理", ["never to tell anyone"], "九色鹿让他不要告诉任何人，商人意识到自己是唯一知道下落的人。"),
    q(31, ["followed", "led", "fought"], "led", "动词", "逻辑推理", ["soldiers into the forest"], "只有商人知道位置，所以是带领士兵进入森林。"),
    q(32, ["proudly", "nervously", "calmly"], "calmly", "形容词副词", "情感态度 / 逻辑推理", ["turned to the emperor and said"], "九色鹿没有逃跑，而是转身陈述事实，说明它很镇定。"),
    q(33, ["idea", "secret", "plan"], "secret", "固定搭配", "固定搭配 / 上下文复现", ["promise never to tell anyone"], "keep the secret 与 never to tell anyone 完美呼应。", "keep a/the secret", "动词短语", "动词(keep) + 冠词(the) + 名词(secret)"),
    q(34, ["into", "on", "up"], "into", "介词搭配", "固定搭配", ["put the trader ___ prison"], "皇帝下令把商人投入监狱，固定短语为 put sb. into prison。", "put sb. into prison", "动词短语", "动词(put) + 某人(sb.) + 介词(into) + 名词(prison)"),
    q(35, ["under", "in", "around"], "around", "介词搭配", "逻辑推理", ["lived peacefully", "flowers grew brighter"], "鸟儿在九色鹿周围歌唱，符合结尾积极美好的童话意境。")
  ],
  verifySentences: [
    { english: "Deep in a forest, there lived a magical deer.", chinese: "在森林深处，住着一只神奇的鹿。", answers: ["a"] },
    { english: "Its fur was as white as snow with nine-colored patterns, shining brightly.", chinese: "它的皮毛像雪一样白，上面有九色花纹，明亮地闪耀着。", answers: ["brightly"] },
    { english: "People called it “the Nine-colored Deer”.", chinese: "人们称它为“九色鹿”。" },
    { english: "One sunny afternoon, while drinking water by a river, the deer heard a loud cry.", chinese: "一个阳光明媚的下午，九色鹿正在河边喝水时，听到了一声大喊。", answers: ["drinking"] },
    { english: "A man had fallen into the water and he couldn’t swim.", chinese: "一个男人掉进了水里，而且他不会游泳。" },
    { english: "Without thinking, the deer jumped into the river and pulled the man to the bank.", chinese: "九色鹿想都没想就跳进河里，把那个男人拉到了岸边。", answers: ["jumped", "bank"] },
    { english: "The man, who was a trader, was thankful to the deer.", chinese: "这个男人是一名商人，他对九色鹿十分感激。", answers: ["thankful"] },
    { english: "“How can I repay you?” he asked.", chinese: "他问：“我该怎样报答你呢？”" },
    { english: "The deer shook its head.", chinese: "九色鹿摇了摇头。" },
    { english: "“Just promise never to tell anyone about me,” it said.", chinese: "它说：“只要答应我，永远不要告诉任何人关于我的事。”" },
    { english: "The man agreed and left happily.", chinese: "商人同意了，并开心地离开了。", answers: ["agreed"] },
    { english: "Weeks later, the queen of the country had a dream about a magical deer.", chinese: "几周后，这个国家的王后梦见了一只神奇的鹿。", answers: ["dream"] },
    { english: "She wanted its beautiful fur for herself.", chinese: "她想把它美丽的皮毛据为己有。" },
    { english: "The emperor, who loved his wife deeply, offered a big reward.", chinese: "深爱妻子的皇帝给出了重赏。" },
    { english: "“Gold and silver to anyone who finds this deer!”", chinese: "“谁找到这只鹿，就赏赐金银！”" },
    { english: "When the trader heard the news, he realized he must be the only one.", chinese: "当商人听到这个消息时，他意识到自己一定是唯一知道九色鹿下落的人。", answers: ["trader", "only"] },
    { english: "He forgot his promise and hurried to the palace.", chinese: "他忘记了承诺，匆忙赶往皇宫。" },
    { english: "The next morning, the trader led soldiers into the forest.", chinese: "第二天早晨，商人带领士兵进入森林。", answers: ["led"] },
    { english: "When the deer saw them, it stood calmly.", chinese: "当九色鹿看到他们时，它平静地站着。", answers: ["calmly"] },
    { english: "It turned to the emperor and said, “This man promised to keep the secret, but he betrayed me for money.”", chinese: "它转向皇帝说：“这个人答应保守秘密，却为了钱背叛了我。”", answers: ["secret"] },
    { english: "The emperor’s face turned red with shame.", chinese: "皇帝羞愧得脸红了。" },
    { english: "He ordered the soldiers to put the trader into prison as punishment.", chinese: "他命令士兵把商人关进监狱作为惩罚。", answers: ["into"] },
    { english: "Then, he said to the deer, “No one will hurt you here.”", chinese: "然后，他对九色鹿说：“这里不会有人伤害你。”" },
    { english: "From that day on, the nine-colored deer lived peacefully in the forest.", chinese: "从那天起，九色鹿在森林里平静地生活。" },
    { english: "Birds sang around it, and flowers grew brighter wherever it walked.", chinese: "鸟儿在它周围歌唱，它走到哪里，花儿就在哪里开得更加明亮。", answers: ["around"] }
  ]
};

const supermarketWarmth = {
  id: "supermarket-warmth",
  title: "超市里的温情",
  englishTitle: "The Warmth in the Supermarket",
  level: "初三",
  difficulty: "中等",
  source: "2026年3月乌鲁木齐九年级学业质量检测",
  tags: ["生活哲理", "人际情感", "逻辑推理", "固定搭配", "上下文复现"],
  available: true,
  firstSentence: "Last Saturday, I went to the supermarket with my mom.",
  lastSentence: "It is in the smiles we share and the time we give to each ____.",
  tone: "积极",
  toneReason: "文章聚焦人与人之间的真实交流与爱意传递，整体呈现温暖积极的情感基调。",
  passage: [
    "Last Saturday, I went to the supermarket with my mom. We ",
    { blank: 21 },
    " almost an hour buying food for the coming week. I asked her, \"Mom, why not use your ",
    { blank: 22 },
    " to order food? It would be much faster.\" She learned ",
    { blank: 23 },
    " to do it a few weeks ago. \"Then we wouldn't need to walk around the supermarket,\" I ",
    { blank: 24 },
    ". \"Everything can come to our door. Life would be ",
    { blank: 25 },
    ".\" I tried to tell her all the good points of shopping online. But she smiled and said, \"If I do that, I won't see Mrs. Chen ",
    { blank: 26 },
    ".\" \"Who is Mrs. Chen?\" I asked. \"She works here. Her daughter is in your school,\" Mom said as we walked to the fruit area. There, an old lady ",
    { blank: 27 },
    " a kind face greeted us. Mom talked with her for a few ",
    { blank: 28 },
    ". She even helped the lady carry a ",
    { blank: 29 },
    " bag. On our way home, mom told me, \"Last winter, when you were ",
    { blank: 30 },
    ", Mrs. Chen sent us hot soup. ",
    { blank: 31 },
    " do you remember when I lost my wallet here? A young worker in the supermarket found it and ",
    { blank: 32 },
    " it to me.\" Mom said softly. \"That's why I like coming here. I meet people. I hear their stories. ",
    { blank: 33 },
    " a phone ever do that?\" I didn't know what to say. That day, I understood ",
    { blank: 34 },
    " important. Sometimes, love is not in faster things or easier ways. It is in the smiles we share and the time we give to each ",
    { blank: 35 },
    "."
  ],
  questions: [
    q(21, ["took", "cost", "spent"], "spent", "动词", "词汇辨析 / 固定搭配", ["We", "an hour buying food"], "主语是人 We，后面跟时间 an hour 和动名词 buying，花费时间做某事用 spend。", "spend time (in) doing sth.", "固定句型", "动词(spend) + 时间(an hour) + 动名词(buying)"),
    q(22, ["computer", "phone", "radio"], "phone", "名词", "上下文复现 / 常识", ["Can a phone ever do that?"], "下文母亲反问 Can a phone ever do that?，此处属于跨段落原词复现。"),
    q(23, ["how", "what", "when"], "how", "代词", "语法 / 固定搭配", ["learned ___ to do it"], "考查“疑问词+不定式”作宾语，妈妈学会了如何用手机点单。", "learn how to do sth.", "动词短语", "动词(learn) + 疑问副词(how) + 不定式(to do)"),
    q(24, ["laughed", "explained", "cried"], "explained", "动词", "逻辑推理 / 情感态度", ["tried to tell her all the good points"], "我在向母亲陈述网上购物的好处，这种沟通动作是 explained。"),
    q(25, ["easier", "harder", "busier"], "easier", "形容词副词", "逻辑推理 / 上下文复现", ["much faster", "easier ways"], "顺着 faster 和送到家门口的逻辑，生活会变得 easier；下文 easier ways 也是复现。"),
    q(26, ["sometimes", "often", "anymore"], "anymore", "形容词副词", "固定搭配 / 语法", ["won't"], "否定句中 not... anymore 表示“不再”。", "not... anymore", "固定句型", "否定词(not) + 副词(anymore)"),
    q(27, ["of", "to", "with"], "with", "介词搭配", "语法 / 介词辨析", ["an old lady", "a kind face"], "with 表示“带有”，修饰老奶奶的外貌特征。", "with a kind face", "介词短语", "介词(with) + 名词短语(a kind face)"),
    q(28, ["minutes", "hours", "days"], "minutes", "名词", "常识 / 逻辑推理", ["greeted us", "walked to the fruit area"], "在超市遇到熟人停下来打招呼，通常只聊几分钟。", "for a few minutes", "介词短语", "介词(for) + 数量词(a few) + 名词复数(minutes)"),
    q(29, ["light", "heavy", "small"], "heavy", "形容词副词", "逻辑推理", ["helped the lady carry"], "既然妈妈需要帮忙提袋子，反推袋子应该是 heavy。"),
    q(30, ["healthy", "unhappy", "ill"], "ill", "形容词副词", "逻辑推理", ["Mrs. Chen sent us hot soup"], "陈太太送热汤是照顾行为，说明当时“我”生病了。"),
    q(31, ["And", "But", "However"], "And", "连词逻辑", "逻辑推理", ["上一句送汤", "本句还钱包"], "妈妈讲了两件充满人情味的事情，属于并列递进关系。"),
    q(32, ["lent", "returned", "threw"], "returned", "动词", "固定搭配 / 逻辑推理", ["found it", "to me"], "员工捡到钱包后的动作应是归还。", "return sth. to sb.", "动词短语", "动词(return) + 代词(sth.) + 介词(to) + 代词(sb.)"),
    q(33, ["Must", "May", "Can"], "Can", "动词", "语法 / 情感态度", ["a phone ever do that?"], "母亲反问手机能否做到真实温暖的交流，表示能力或可能性用 Can。"),
    q(34, ["something", "anything", "nothing"], "something", "代词", "语法", ["understood", "important"], "肯定句中表示“某事”用 something，且形容词 important 后置。", "something important", "名词搭配", "不定代词(something) + 形容词(important)"),
    q(35, ["another", "other", "others"], "other", "代词", "固定搭配", ["each"], "each other 表示“彼此，互相”，呼应文章温暖积极的基调。", "each other", "固定句型", "代词(each) + 代词(other)")
  ],
  verifySentences: [
    { english: "Last Saturday, I went to the supermarket with my mom.", chinese: "上周六，我和妈妈去了超市。" },
    { english: "We spent almost an hour buying food for the coming week.", chinese: "我们花了将近一个小时为接下来的一周购买食物。", answers: ["spent"] },
    { english: "I asked her, \"Mom, why not use your phone to order food? It would be much faster.\"", chinese: "我问她：“妈妈，为什么不用手机订食物呢？那会快得多。”", answers: ["phone"] },
    { english: "She learned how to do it a few weeks ago.", chinese: "她几周前学会了如何操作。", answers: ["how"] },
    { english: "\"Then we wouldn't need to walk around the supermarket,\" I explained.", chinese: "我解释说：“那样我们就不需要在超市里走来走去了。”", answers: ["explained"] },
    { english: "\"Everything can come to our door. Life would be easier.\"", chinese: "“所有东西都能送到家门口，生活会更轻松。”", answers: ["easier"] },
    { english: "I tried to tell her all the good points of shopping online.", chinese: "我试图告诉她网上购物的所有好处。" },
    { english: "But she smiled and said, \"If I do that, I won't see Mrs. Chen anymore.\"", chinese: "但她笑着说：“如果我那样做，我就再也见不到陈太太了。”", answers: ["anymore"] },
    { english: "\"Who is Mrs. Chen?\" I asked.", chinese: "我问：“陈太太是谁？”" },
    { english: "\"She works here. Her daughter is in your school,\" Mom said as we walked to the fruit area.", chinese: "妈妈一边带我走向水果区一边说：“她在这里工作，她女儿在你们学校。”" },
    { english: "There, an old lady with a kind face greeted us.", chinese: "在那里，一位面容和善的老太太向我们打招呼。", answers: ["with"] },
    { english: "Mom talked with her for a few minutes.", chinese: "妈妈和她聊了几分钟。", answers: ["minutes"] },
    { english: "She even helped the lady carry a heavy bag.", chinese: "她甚至帮那位女士提了一个沉重的袋子。", answers: ["heavy"] },
    { english: "On our way home, mom told me, \"Last winter, when you were ill, Mrs. Chen sent us hot soup.\"", chinese: "回家的路上，妈妈告诉我：“去年冬天，你生病时，陈太太给我们送来了热汤。”", answers: ["ill"] },
    { english: "And do you remember when I lost my wallet here?", chinese: "而且你还记得我在这里丢钱包的那次吗？", answers: ["And"] },
    { english: "A young worker in the supermarket found it and returned it to me.", chinese: "超市里的一位年轻工作人员捡到了它，并把它还给了我。", answers: ["returned"] },
    { english: "Mom said softly, \"That's why I like coming here. I meet people. I hear their stories. Can a phone ever do that?\"", chinese: "妈妈轻声说：“这就是我喜欢来这里的原因。我能遇见人，听见他们的故事。手机能做到这些吗？”", answers: ["Can"] },
    { english: "I didn't know what to say.", chinese: "我不知道该说什么。" },
    { english: "That day, I understood something important.", chinese: "那天，我明白了一件重要的事。", answers: ["something"] },
    { english: "Sometimes, love is not in faster things or easier ways.", chinese: "有时候，爱不在更快的事物或更容易的方式里。" },
    { english: "It is in the smiles we share and the time we give to each other.", chinese: "它存在于我们分享的微笑里，也存在于我们给予彼此的时间里。", answers: ["other"] }
  ]
};

const oldBookWarmth = {
  id: "old-book-warmth",
  title: "传递温暖的旧书",
  englishTitle: "The Warmth of an Old Book",
  level: "初三",
  difficulty: "中等",
  source: "乌鲁木齐八一中学初中部九年级第一次模拟考试",
  tags: ["生活感悟", "人际情感", "逻辑推理", "情感态度", "语法考点"],
  available: true,
  firstSentence: "I found an old bookstore by accident.",
  lastSentence: "Love and stories are the ____ things in the world.",
  tone: "积极",
  toneReason: "文章围绕旧书、便签与两位 Clara 的故事，传递爱、温暖与传承。",
  passage: [
    "I found an old bookstore by accident. Inside, the smell of paper and ink ",
    { blank: 21 },
    " me like an old friend. A broken The Little Prince caught my eye, and a yellowed note ",
    { blank: 22 },
    " out: “To Clara, 10th birthday, 1952. Love, Grandma.” My grandma was also named Clara, so I wondered ",
    { blank: 23 },
    " this was her book. I found more notes in the pages—a supermarket list and three ticket stubs(票根). ",
    { blank: 24 },
    " of them were a window to help me know about her life. I posted the note online, and Emily replied with a ",
    { blank: 25 },
    ": “That’s my grandma.” When we met, Emily let me keep it. That night, I wrote a new note ",
    { blank: 26 },
    " and felt warm. Just like the notes inside, I saw a ",
    { blank: 27 },
    " of a rose on the cover. Rain beat ",
    { blank: 28 },
    " my umbrella. ",
    { blank: 29 },
    " it was just a book, it carried love. I realized ",
    { blank: 30 },
    " in life is short, but stories live on. They pass hand to hand, ",
    { blank: 31 },
    " warmth long after we’re gone. I kept the book to pass the warmth and promised to take good care of ",
    { blank: 32 },
    ". This story was ",
    { blank: 33 },
    " a new beginning, with a ",
    { blank: 34 },
    " memory of the two Claras. Love and stories are the ",
    { blank: 35 },
    " things in the world."
  ],
  questions: [
    q(21, ["missed", "hated", "hit"], "hit", "动词", "逻辑推理 / 固定搭配", ["the smell of paper and ink", "like an old friend"], "纸墨的气味像老朋友一样扑面而来，英文中感觉或气味突然袭来常用 hit。", "hit sb. like...", "动词短语", "动词(hit) + 代词(sb.) + 介词短语(like...)"),
    q(22, ["flew", "ran", "fell"], "fell", "动词", "常识 / 逻辑推理", ["a yellowed note", "out"], "从破旧的书里，一张泛黄的便签是掉出来的。", "fall out", "动词短语", "动词(fall) + 副词(out)"),
    q(23, ["what", "if", "why"], "if", "连词逻辑", "语法 / 固定搭配", ["wondered"], "我想知道这是否是祖母的书，wonder if... 表示“想知道是否”。", "wonder if...", "固定句型", "动词(wonder) + 引导词(if) + 宾语从句"),
    q(24, ["Both", "All", "None"], "All", "代词", "上下文复现 / 逻辑推理", ["a supermarket list", "three ticket stubs"], "一张清单加三张票根，一共四件物品，三者及以上用 All。"),
    q(25, ["letter", "gift", "message"], "message", "名词", "逻辑推理 / 常识", ["posted the note online", "replied"], "便签发到网上，Emily 的回复应是网络留言或信息。"),
    q(26, ["carefully", "loudly", "sadly"], "carefully", "形容词副词", "情感态度", ["wrote a new note", "felt warm"], "felt warm 是积极珍视的情绪，因此写便签应是 carefully。"),
    q(27, ["tradition", "picture", "program"], "picture", "名词", "常识", ["of a rose", "on the cover"], "书的封面上关于玫瑰的自然是图案或图片。"),
    q(28, ["under", "beside", "on"], "on", "介词搭配", "固定搭配", ["Rain beat", "my umbrella"], "雨点敲打在雨伞表面，介词用 on。", "beat on", "动词短语", "动词(beat) + 介词(on) + 名词(umbrella)"),
    q(29, ["Because", "Although", "Unless"], "Although", "连词逻辑", "逻辑推理", ["just a book", "it carried love"], "前半句只是一本书，后半句承载着爱，二者是让步转折关系。"),
    q(30, ["everything", "nothing", "something"], "everything", "代词", "逻辑推理", ["short", "but stories live on"], "but 提示对比：生活中的一切短暂，但故事会延续。"),
    q(31, ["carry", "carrying", "carried"], "carrying", "动词", "语法", ["They pass hand to hand"], "句子主干已完整，逗号后用 -ing 形式作伴随状语。"),
    q(32, ["them", "her", "it"], "it", "代词", "上下文复现", ["kept the book", "take good care of"], "it 指代前文的 the book，单数物品用 it。", "take good care of sth.", "动词短语", "动词(take) + 形容词(good) + 名词(care) + 介词(of) + 代词(it)"),
    q(33, ["just", "still", "never"], "just", "形容词副词", "逻辑推理", ["a new beginning"], "这仅仅是一个新的开始，契合爱意继续传递的意境。"),
    q(34, ["sad", "sweet", "boring"], "sweet", "形容词副词", "情感态度", ["a new beginning", "memory of the two Claras"], "文章基调积极温暖，回忆应是 sweet。"),
    q(35, ["valuable", "more valuable", "most valuable"], "most valuable", "形容词副词", "语法", ["the", "in the world"], "the 加 in the world 表明使用最高级 most valuable。")
  ],
  verifySentences: [
    { english: "I found an old bookstore by accident.", chinese: "我偶然发现了一家旧书店。" },
    { english: "Inside, the smell of paper and ink hit me like an old friend.", chinese: "走进去，纸张和油墨的味道像一位老朋友一样扑面而来。", answers: ["hit"] },
    { english: "A broken The Little Prince caught my eye, and a yellowed note fell out.", chinese: "一本破旧的《小王子》吸引了我的注意，一张泛黄的便签掉了出来。", answers: ["fell"] },
    { english: "“To Clara, 10th birthday, 1952. Love, Grandma.”", chinese: "“给 Clara，10岁生日，1952年。爱你的奶奶。”" },
    { english: "My grandma was also named Clara, so I wondered if this was her book.", chinese: "我的奶奶也叫 Clara，所以我想知道这是不是她的书。", answers: ["if"] },
    { english: "I found more notes in the pages—a supermarket list and three ticket stubs.", chinese: "我在书页里发现了更多便条：一张超市购物清单和三张票根。" },
    { english: "All of them were a window to help me know about her life.", chinese: "它们全都像一扇窗，帮助我了解她的生活。", answers: ["All"] },
    { english: "I posted the note online, and Emily replied with a message: “That’s my grandma.”", chinese: "我把便签发到网上，Emily 回复了一条信息：“那是我的奶奶。”", answers: ["message"] },
    { english: "When we met, Emily let me keep it.", chinese: "我们见面时，Emily 让我保留这本书。" },
    { english: "That night, I wrote a new note carefully and felt warm.", chinese: "那天晚上，我认真地写了一张新便签，心里感到温暖。", answers: ["carefully"] },
    { english: "Just like the notes inside, I saw a picture of a rose on the cover.", chinese: "就像书里的便签一样，我在封面上看到了一幅玫瑰图案。", answers: ["picture"] },
    { english: "Rain beat on my umbrella.", chinese: "雨点敲打在我的雨伞上。", answers: ["on"] },
    { english: "Although it was just a book, it carried love.", chinese: "尽管它只是一本书，但它承载着爱。", answers: ["Although"] },
    { english: "I realized everything in life is short, but stories live on.", chinese: "我意识到生命中的一切都是短暂的，但故事会继续流传。", answers: ["everything"] },
    { english: "They pass hand to hand, carrying warmth long after we’re gone.", chinese: "它们在人与人之间传递，即使我们离开很久以后，仍承载着温暖。", answers: ["carrying"] },
    { english: "I kept the book to pass the warmth and promised to take good care of it.", chinese: "我留下这本书来传递温暖，并承诺会好好照顾它。", answers: ["it"] },
    { english: "This story was just a new beginning, with a sweet memory of the two Claras.", chinese: "这个故事只是一个新的开始，带着两位 Clara 的甜蜜回忆。", answers: ["just", "sweet"] },
    { english: "Love and stories are the most valuable things in the world.", chinese: "爱和故事是世界上最宝贵的东西。", answers: ["most valuable"] }
  ]
};

const tinySeedGrowth = {
  id: "tiny-seed-growth",
  title: "种子布鲁斯的成长",
  englishTitle: "The Growth of a Tiny Seed",
  level: "初三",
  difficulty: "中等",
  source: "2026年乌鲁木齐第70中学九年级第一次模考（实战第7篇真题）",
  tags: ["寓言故事", "逻辑推理", "情感态度", "上下文复现"],
  available: true,
  firstSentence: "In the heart of a big forest, there lay a tiny seed named Bruce.",
  lastSentence: "They learned that the journey of growth is as ____ as the dream itself.",
  tone: "积极",
  toneReason: "文章讲述小种子在困难中坚持成长，整体充满希望、坚韧与成长力量。",
  passage: [
    "In the heart of a big forest, there lay a tiny seed (种子) named Bruce. Bruce was a small seed with ",
    { blank: 21 },
    " dreams. He lay under the fallen leaves and soft soil, hoping to grow into a tall oak tree that would touch the sky. Bruce believed that he would make it, ",
    { blank: 22 },
    " there were so many difficulties ahead. As the seasons changed, Bruce ",
    { blank: 23 },
    " strong winds, heavy rains, and the heating sun. Many times, he felt upset and doubted (怀疑) ",
    { blank: 24 },
    " he could become the tall oak tree or not. But he ",
    { blank: 25 },
    " want to give up. To make himself stand firmly (坚定地), Bruce's roots grew ",
    { blank: 26 },
    " into the earth. His body grew upwards, and his leaves opened widely to reach for the ",
    { blank: 27 },
    ". Over the years, Bruce's growth was slow but his ",
    { blank: 28 },
    " had never changed. One day, the forest animals ",
    { blank: 29 },
    " saw the big oak tree. They asked, \"",
    { blank: 30 },
    " did you become so strong?\" The oak tree's branches waved gently in the winds as it replied, \"I am the result of ",
    { blank: 31 },
    " challenges and difficulties. Every storm I went through, every struggle I faced, made ",
    { blank: 32 },
    " stronger and more resilient (坚韧的). Just like the strength that lies in every seed, all of us have the ",
    { blank: 33 },
    " to grow into big trees.\" The animals listened carefully, ",
    { blank: 34 },
    " by the oak's wisdom. They learned that the journey of growth is as ",
    { blank: 35 },
    " as the dream itself."
  ],
  questions: [
    q(21, ["proper", "big", "strange"], "big", "形容词副词", "逻辑推理", ["small seed", "grow into a tall oak tree"], "虽然布鲁斯是一颗小种子，但他想长成参天大树，说明他有远大的梦想。"),
    q(22, ["although", "but", "so"], "although", "连词逻辑", "逻辑推理", ["believed that he would make it", "there were so many difficulties"], "相信自己能成功与前方有许多困难之间构成让步转折关系。"),
    q(23, ["went through", "searched for", "turned down"], "went through", "动词", "词汇辨析 / 固定搭配", ["strong winds", "heavy rains", "heating sun"], "布鲁斯经历并熬过狂风暴雨和烈日。", "go through", "动词短语", "动词(go) + 介词(through)"),
    q(24, ["if", "before", "whether"], "whether", "连词逻辑", "固定搭配 / 语法", ["doubted", "or not"], "表示是否且句末跟 or not，引导词用 whether。", "whether... or not", "固定句型", "连词(whether) + 或者不(or not)"),
    q(25, ["doesn't", "didn't", "don't"], "didn't", "动词", "语法", ["felt", "doubted"], "文章叙述过去经历，felt 和 doubted 都是过去时，此处也用 didn't。"),
    q(26, ["deeper", "closer", "faster"], "deeper", "形容词副词", "常识 / 逻辑推理", ["stand firmly", "into the earth"], "为了站稳，树根必须向泥土里扎得更深。"),
    q(27, ["snow", "wind", "sunlight"], "sunlight", "名词", "常识", ["leaves opened widely to reach for"], "树叶张开向上伸展，是为了吸收阳光。"),
    q(28, ["order", "problem", "dream"], "dream", "名词", "上下文复现", ["with big dreams"], "前文出现 big dreams，此处是原词复现。"),
    q(29, ["surprisingly", "sadly", "happily"], "surprisingly", "形容词副词", "情感态度 / 逻辑推理", ["How did you become so strong?"], "动物看到巨大的成长变化并询问原因，说明感到惊讶。"),
    q(30, ["Why", "How", "Where"], "How", "代词", "逻辑推理", ["I am the result of"], "下文回答的是变强的过程和方式，因此问 How。"),
    q(31, ["regretting", "overcoming", "refusing"], "overcoming", "动词", "固定搭配 / 逻辑推理", ["challenges and difficulties"], "面对挑战和困难，积极动作是克服。", "overcome challenges", "动词短语", "动词(overcome) + 名词(challenges)"),
    q(32, ["me", "you", "it"], "me", "代词", "语法 / 上下文复现", ["Every storm I went through", "every struggle I faced"], "橡树在讲自己的经历，所以风雨让“我”更强。", "make sb. stronger", "固定句型", "动词(make) + 代词(sb.) + 形容词比较级(stronger)"),
    q(33, ["pride", "power", "pleasure"], "power", "名词", "上下文复现", ["strength"], "power 与 strength 形成同义词复现。"),
    q(34, ["praised", "advised", "inspired"], "inspired", "动词", "情感态度", ["by the oak's wisdom", "listened carefully"], "动物们被橡树的智慧启发和鼓舞。", "be inspired by", "动词短语", "动词被动(be inspired) + 介词(by)"),
    q(35, ["clear", "valuable", "funny"], "valuable", "形容词副词", "情感态度", ["as the dream itself", "oak's wisdom"], "成长旅程和梦想本身一样珍贵，升华积极主题。")
  ],
  verifySentences: [
    { english: "In the heart of a big forest, there lay a tiny seed named Bruce.", chinese: "在一片大森林的深处，躺着一颗名叫布鲁斯的小种子。" },
    { english: "Bruce was a small seed with big dreams.", chinese: "布鲁斯是一颗小小的种子，却有着远大的梦想。", answers: ["big"] },
    { english: "He lay under the fallen leaves and soft soil, hoping to grow into a tall oak tree that would touch the sky.", chinese: "他躺在落叶和柔软的泥土下，希望长成一棵能触碰天空的高大橡树。" },
    { english: "Bruce believed that he would make it, although there were so many difficulties ahead.", chinese: "尽管前方有许多困难，布鲁斯仍相信自己会成功。", answers: ["although"] },
    { english: "As the seasons changed, Bruce went through strong winds, heavy rains, and the heating sun.", chinese: "随着季节变化，布鲁斯经历了强风、暴雨和烈日。", answers: ["went through"] },
    { english: "Many times, he felt upset and doubted whether he could become the tall oak tree or not.", chinese: "许多时候，他感到沮丧，怀疑自己是否能变成那棵高大的橡树。", answers: ["whether"] },
    { english: "But he didn't want to give up.", chinese: "但他不想放弃。", answers: ["didn't"] },
    { english: "To make himself stand firmly, Bruce's roots grew deeper into the earth.", chinese: "为了让自己站得更稳，布鲁斯的根向泥土里扎得更深。", answers: ["deeper"] },
    { english: "His body grew upwards, and his leaves opened widely to reach for the sunlight.", chinese: "他的身体向上生长，叶子尽力张开去迎接阳光。", answers: ["sunlight"] },
    { english: "Over the years, Bruce's growth was slow but his dream had never changed.", chinese: "多年过去，布鲁斯生长得很慢，但他的梦想从未改变。", answers: ["dream"] },
    { english: "One day, the forest animals surprisingly saw the big oak tree.", chinese: "一天，森林里的动物们惊讶地看到了这棵大橡树。", answers: ["surprisingly"] },
    { english: "They asked, \"How did you become so strong?\"", chinese: "它们问：“你是怎么变得这么强壮的？”", answers: ["How"] },
    { english: "The oak tree's branches waved gently in the winds as it replied, \"I am the result of overcoming challenges and difficulties.\"", chinese: "橡树的枝条在风中轻轻摇动，它回答说：“我是克服挑战和困难的结果。”", answers: ["overcoming"] },
    { english: "Every storm I went through, every struggle I faced, made me stronger and more resilient.", chinese: "我经历的每一场风暴、面对的每一次挣扎，都让我更强大、更坚韧。", answers: ["me"] },
    { english: "Just like the strength that lies in every seed, all of us have the power to grow into big trees.", chinese: "就像每颗种子里都蕴藏着力量一样，我们每个人都有长成大树的力量。", answers: ["power"] },
    { english: "The animals listened carefully, inspired by the oak's wisdom.", chinese: "动物们认真听着，被橡树的智慧所启发。", answers: ["inspired"] },
    { english: "They learned that the journey of growth is as valuable as the dream itself.", chinese: "它们明白了，成长的旅程和梦想本身一样珍贵。", answers: ["valuable"] }
  ]
};

const filialSonTravels = {
  id: "filial-son-travels",
  title: "孝子背残疾母亲旅行",
  englishTitle: "A Filial Son Travels with His Mother",
  level: "初三",
  difficulty: "中等",
  source: "2026年初中学业测试第二次模考",
  tags: ["人物故事", "逻辑推理", "情感态度", "上下文复现"],
  available: true,
  firstSentence: "A 52-year-old man in China carried his 89-year-old disabled mother on his back while travelling.",
  lastSentence: "On her back, I grew up; on ____, she'll grow old.",
  tone: "积极",
  toneReason: "文章围绕儿子背母亲旅行展开，充满温情、感恩与孝道，整体基调积极温暖。",
  passage: [
    "A 52-year-old man in China carried his 89-year-old disabled mother on his back while travelling. This got ",
    { blank: 21 },
    " attention online. The man was regarded as a very filial (孝顺的) son ",
    { blank: 22 },
    " thousands of internet users. His ",
    { blank: 23 },
    " mother has been wheelchair-bound (与轮椅为伴) for five years after a fall. He wanted to take his mother out to travel. During the ",
    { blank: 24 },
    ", some roads were difficult to walk on. ",
    { blank: 25 },
    " the man prepared the sling (带子) for such trips. The sling always reminded him that it was the ",
    { blank: 26 },
    " one his mother used to carry her children and her grandchildren. The mother felt very ",
    { blank: 27 },
    " while admiring the beauty along the way. At the same time, she was filled with ",
    { blank: 28 },
    " when she saw her son carry her on his back. The sling was not only a tool but also a bridge. For them, it carried the ",
    { blank: 29 },
    ". The man has ",
    { blank: 30 },
    " his mother to visit many interesting places during the past five years. He had a sore back and he ",
    { blank: 31 },
    " felt tired. His mother always asked him to ",
    { blank: 32 },
    " and take a rest. But he still wanted to take his mother to ",
    { blank: 33 },
    " places and see more about the world. Whenever he hears people ",
    { blank: 34 },
    " him, he always says, “Carrying my mother is what a son should do and it is not a big deal. On her back, I grew up; on ",
    { blank: 35 },
    ", she’ll grow old.”"
  ],
  questions: [
    q(21, ["much", "no", "little"], "much", "形容词副词", "固定搭配 / 语境推理", ["got ___ attention online"], "孝子背母亲旅行的感人举动在网上引起了大量关注，get much attention 表示“获得很多关注”。", "get much attention", "动词短语", "动词(get) + 数量限定词(much) + 名词(attention)"),
    q(22, ["for", "by", "to"], "by", "介词搭配", "语法 / 固定搭配", ["was regarded as", "thousands of internet users"], "被动语态中引出动作执行者用 by，表示他被成千上万的网友认为是孝顺的儿子。", "be regarded as... by...", "固定句型", "被动语态(was regarded as) + 介词(by) + 动作发出者"),
    q(23, ["polite", "strict", "weak"], "weak", "形容词副词", "上下文复现 / 逻辑推理", ["disabled", "wheelchair-bound"], "前文 disabled 和后文 wheelchair-bound 都指向母亲身体虚弱、行动不便，weak 最符合语境。"),
    q(24, ["trips", "weeks", "performances"], "trips", "名词", "上下文复现", ["take his mother out to travel"], "前文提到 take his mother out to travel，此处 during the trips 是同一语义场的复现。"),
    q(25, ["Because", "Or", "So"], "So", "连词逻辑", "逻辑推理", ["some roads were difficult to walk on", "prepared the sling"], "路不好走是原因，准备背带是结果，前后构成因果关系，用 So 衔接。"),
    q(26, ["useless", "same", "expensive"], "same", "形容词副词", "逻辑推理", ["reminded him", "mother used to carry her children"], "这条带子让他想起母亲当年背孩子的带子，the same one 强调爱的传承。", "the same one", "名词搭配", "定冠词(the) + 形容词(same) + 代词(one)"),
    q(27, ["nervous", "worried", "glad"], "glad", "形容词副词", "情感态度", ["admiring the beauty"], "母亲一路欣赏美景，这是正向愉悦的场景，情感色彩应选择 glad。"),
    q(28, ["patience", "fear", "warmth"], "warmth", "名词", "情感态度", ["saw her son carry her on his back"], "母亲看到儿子背着自己，顺着全文温情积极的基调，心中充满 warmth。", "be filled with warmth", "动词短语", "动词被动(be filled with) + 情感名词(warmth)"),
    q(29, ["memories", "prizes", "decisions"], "memories", "名词", "逻辑推理", ["reminded him", "used to carry her children and her grandchildren"], "带子连接过去和现在，不只是工具，也承载着一家人的回忆。"),
    q(30, ["asked", "taken", "advised"], "taken", "动词", "固定搭配", ["his mother to visit many interesting places"], "take sb. to visit... 表示带某人去参观，has 后用过去分词 taken。", "take sb. to visit...", "动词短语", "动词(take) + 某人(sb.) + 不定式(to visit)"),
    q(31, ["never", "sometimes", "seldom"], "sometimes", "形容词副词", "逻辑推理", ["He had a sore back"], "背母亲旅行让他背部酸痛，因此有时会觉得累，sometimes 符合常理。"),
    q(32, ["stop", "continue", "travel"], "stop", "动词", "逻辑推理", ["and take a rest"], "and 连接并列动作，后面是休息，前面自然是先停下来。"),
    q(33, ["different", "boring", "private"], "different", "形容词副词", "逻辑推理", ["see more about the world"], "想让母亲多看看世界，就要带她去不同的地方，different 符合语境。"),
    q(34, ["help", "thank", "praise"], "praise", "动词", "语境推理", ["what a son should do", "not a big deal"], "他说这只是儿子应该做的、没什么大不了，说明别人是在夸赞他。"),
    q(35, ["mine", "hers", "his"], "mine", "代词", "逻辑推理 / 语法", ["On her back, I grew up", "on ___, she'll grow old"], "前半句 her back 对应我长大，后半句母亲老去对应“我的背上”，用名词性物主代词 mine。")
  ],
  verifySentences: [
    { english: "A 52-year-old man in China carried his 89-year-old disabled mother on his back while travelling.", chinese: "中国一名52岁的男子在旅行时背着他89岁的残疾母亲。" },
    { english: "This got much attention online.", chinese: "这件事在网上获得了很多关注。", answers: ["much"] },
    { english: "The man was regarded as a very filial son by thousands of internet users.", chinese: "成千上万的网友认为这名男子是一位非常孝顺的儿子。", answers: ["by"] },
    { english: "His weak mother has been wheelchair-bound for five years after a fall.", chinese: "他的母亲身体虚弱，自从五年前摔倒后就一直与轮椅为伴。", answers: ["weak"] },
    { english: "He wanted to take his mother out to travel.", chinese: "他想带母亲出去旅行。" },
    { english: "During the trips, some roads were difficult to walk on.", chinese: "在旅行途中，有些路很难走。", answers: ["trips"] },
    { english: "So the man prepared the sling for such trips.", chinese: "因此，这名男子为这样的旅行准备了背带。", answers: ["So"] },
    { english: "The sling always reminded him that it was the same one his mother used to carry her children and her grandchildren.", chinese: "这条背带总让他想起，它正是母亲曾经用来背孩子和孙辈的那一条。", answers: ["same"] },
    { english: "The mother felt very glad while admiring the beauty along the way.", chinese: "母亲一路欣赏美景时感到非常高兴。", answers: ["glad"] },
    { english: "At the same time, she was filled with warmth when she saw her son carry her on his back.", chinese: "同时，当她看到儿子背着自己时，心里充满了温暖。", answers: ["warmth"] },
    { english: "The sling was not only a tool but also a bridge.", chinese: "这条背带不仅是一个工具，也是一座桥。" },
    { english: "For them, it carried the memories.", chinese: "对他们来说，它承载着回忆。", answers: ["memories"] },
    { english: "The man has taken his mother to visit many interesting places during the past five years.", chinese: "在过去五年里，这名男子已经带母亲参观了许多有趣的地方。", answers: ["taken"] },
    { english: "He had a sore back and he sometimes felt tired.", chinese: "他背部酸痛，有时也会感到疲惫。", answers: ["sometimes"] },
    { english: "His mother always asked him to stop and take a rest.", chinese: "他的母亲总是让他停下来休息。", answers: ["stop"] },
    { english: "But he still wanted to take his mother to different places and see more about the world.", chinese: "但他仍然想带母亲去不同的地方，多看看这个世界。", answers: ["different"] },
    { english: "Whenever he hears people praise him, he always says, “Carrying my mother is what a son should do and it is not a big deal.”", chinese: "每当他听到人们称赞他时，他总是说：“背母亲是一个儿子应该做的事，这没什么大不了。”", answers: ["praise"] },
    { english: "On her back, I grew up; on mine, she'll grow old.", chinese: "在她的背上，我长大了；在我的背上，她会慢慢老去。", answers: ["mine"] }
  ]
};

const caringBabyExperience = {
  id: "caring-baby-experience",
  title: "照顾“婴儿”的体验",
  englishTitle: 'Caring for a "Baby"',
  level: "初三",
  difficulty: "中等",
  source: "2026年初新疆名校押题卷",
  tags: ["生活感悟", "逻辑推理", "情感态度", "语法考点"],
  available: true,
  firstSentence: "Emily was a young lady and she loved ____ very much.",
  lastSentence: "She understood that even if she tried to help them later on, she can never give back to them as much as they give her.",
  tone: "转折变化",
  toneReason: "文章从兴奋期待照顾“婴儿”，转到疲惫抓狂，最后升华为对父母辛苦付出的理解与感恩。",
  passage: [
    "Emily was a young lady and she loved ",
    { blank: 21 },
    " very much. She was very happy today ",
    { blank: 22 },
    " she had a chance to take care of a “baby” for the whole day. She joined a club and took part in a Real Care Baby Project so she could take home a “baby” to care for one day! ",
    { blank: 23 },
    " exciting news! Emily couldn’t wait to finish her work and looked forward to ",
    { blank: 24 },
    " her “baby”. After work, Emily went to the ",
    { blank: 25 },
    " and got her “baby”. The “baby” was a doll, but he had a ",
    { blank: 26 },
    " weight to a real baby and could cry at any time. Emily was so excited and she didn’t ",
    { blank: 27 },
    " this project to be so hard in the beginning. On her way home, the “baby” ",
    { blank: 28 },
    " cried. She was quite worried and tried to ",
    { blank: 29 },
    " him down. The crying made everyone look at her. This made Emily feel very shy. Finally, when she calmed down the “baby” ",
    { blank: 30 },
    " patting(拍) him for a long time. She felt her arms were about to break. Once she got home, she decided to get some housework ",
    { blank: 31 },
    ". She put the “baby” on the bed and started to clean the room. Emily thought the “baby” would give her a little time but she was ",
    { blank: 32 },
    ". Just about 10 minutes later, he started crying again. Emily had to stop cleaning and spend a lot of time patting and ",
    { blank: 33 },
    " him to make the “baby” sleep. She didn’t do anything until midnight! Emily felt very ",
    { blank: 34 },
    " the next day. She had a deeper understanding about her parents. They have been looking after her for years. She ",
    { blank: 35 },
    " had the “baby” for one day and she had been crazy, but her parents did this all the time. She understood that even if she tried to help them later on, she can never give back to them as much as they give her."
  ],
  questions: [
    q(21, ["kids", "games", "animals"], "kids", "名词", "上下文复现 / 逻辑推理", ["take care of a “baby”"], "下文一直围绕照顾 baby 展开，并且 Emily 对此很期待，说明她非常喜欢孩子。"),
    q(22, ["but", "because", "though"], "because", "连词逻辑", "逻辑推理", ["happy today", "had a chance to take care of a baby"], "前半句是高兴的结果，后半句说明原因，因果关系明确，用 because。"),
    q(23, ["What", "Why", "How"], "What", "代词", "语法 / 固定搭配", ["exciting news"], "news 是不可数名词，感叹句使用 What + adj. + 不可数名词。", "What + adj. + 不可数名词!", "固定句型", "感叹词(What) + 形容词(exciting) + 不可数名词(news)"),
    q(24, ["hug", "hugged", "hugging"], "hugging", "动词", "固定搭配 / 语法", ["looked forward to"], "look forward to 中的 to 是介词，后面接动名词 doing，所以选 hugging。", "look forward to doing sth.", "动词短语", "动词短语(look forward to) + 动名词(hugging)"),
    q(25, ["school", "club", "office"], "club", "名词", "上下文复现", ["joined a club"], "前文明确说她 joined a club，下班后自然是去 club 领取“婴儿”。"),
    q(26, ["strange", "strong", "similar"], "similar", "形容词副词", "固定搭配 / 词汇辨析", ["weight to a real baby"], "娃娃的重量与真实婴儿相似，similar to 是固定搭配。", "be similar to", "形容词搭配", "形容词(similar) + 介词(to)"),
    q(27, ["educate", "realize", "explain"], "realize", "动词", "逻辑推理 / 词汇辨析", ["didn't", "so hard in the beginning", "excited"], "起初她很兴奋，并没有意识到项目会这么难，realize 表示心理认知活动。"),
    q(28, ["slowly", "usually", "suddenly"], "suddenly", "形容词副词", "逻辑推理 / 常识", ["On her way home", "quite worried"], "回家路上娃娃突然哭起来，才导致 Emily 很担心，也符合婴儿哭闹突发的常识。"),
    q(29, ["calm", "lay", "put"], "calm", "动词", "固定搭配", ["down", "the crying"], "孩子哭了，要让他平静下来，calm sb. down 是固定搭配。", "calm sb. down", "动词短语", "动词(calm) + 代词(him) + 副词(down)"),
    q(30, ["by", "in", "with"], "by", "介词搭配", "语法 / 介词辨析", ["calmed down", "patting him"], "by doing sth. 表示通过某种方式，她通过长时间拍他让他平静下来。", "by doing sth.", "介词短语", "介词(by) + 动名词(patting)"),
    q(31, ["do", "did", "done"], "done", "动词", "语法 / 固定搭配", ["get some housework"], "get sth. done 表示让某事被完成，housework 与 do 之间是被动关系，用 done。", "get sth. done", "固定句型", "动词(get) + 宾语(housework) + 过去分词(done)"),
    q(32, ["wrong", "clever", "right"], "wrong", "形容词副词", "逻辑推理", ["but", "started crying again"], "but 提示反转，她以为有时间做家务，但十分钟后娃娃又哭了，说明她想错了。"),
    q(33, ["fed", "feed", "feeding"], "feeding", "动词", "语法", ["spend a lot of time patting and ___"], "and 前后结构并列，前面是 patting，后面也要用动名词 feeding。", "spend time (in) doing", "固定句型", "spend time + 动名词(patting and feeding)"),
    q(34, ["scared", "tired", "relaxed"], "tired", "形容词副词", "情感态度 / 逻辑推理", ["arms were about to break", "didn't do anything until midnight"], "手臂快断、忙到半夜，第二天必然很疲惫，tired 符合情感和逻辑。"),
    q(35, ["never", "only", "always"], "only", "形容词副词", "逻辑推理", ["for one day", "but her parents did this all the time"], "她仅仅照顾一天就快崩溃，而父母多年一直照顾她，only 强化对比。")
  ],
  verifySentences: [
    { english: "Emily was a young lady and she loved kids very much.", chinese: "Emily 是一位年轻女士，她非常喜欢孩子。", answers: ["kids"] },
    { english: "She was very happy today because she had a chance to take care of a baby for the whole day.", chinese: "她今天非常高兴，因为她有机会照顾一个“婴儿”一整天。", answers: ["because"] },
    { english: "She joined a club and took part in a Real Care Baby Project so she could take home a baby to care for one day!", chinese: "她加入了一个俱乐部，参加了真实照护婴儿项目，因此可以把一个“婴儿”带回家照顾一天。" },
    { english: "What exciting news!", chinese: "多么令人兴奋的消息啊！", answers: ["What"] },
    { english: "Emily couldn't wait to finish her work and looked forward to hugging her baby.", chinese: "Emily 迫不及待想完成工作，期待拥抱她的“婴儿”。", answers: ["hugging"] },
    { english: "After work, Emily went to the club and got her baby.", chinese: "下班后，Emily 去俱乐部领到了她的“婴儿”。", answers: ["club"] },
    { english: "The baby was a doll, but he had a similar weight to a real baby and could cry at any time.", chinese: "这个“婴儿”是个娃娃，但他的重量和真正的婴儿相似，并且随时会哭。", answers: ["similar"] },
    { english: "Emily was so excited and she didn't realize this project to be so hard in the beginning.", chinese: "Emily 非常兴奋，起初她没有意识到这个项目会这么难。", answers: ["realize"] },
    { english: "On her way home, the baby suddenly cried.", chinese: "在她回家的路上，这个“婴儿”突然哭了。", answers: ["suddenly"] },
    { english: "She was quite worried and tried to calm him down.", chinese: "她非常担心，并努力让他平静下来。", answers: ["calm"] },
    { english: "The crying made everyone look at her.", chinese: "哭声让每个人都看着她。" },
    { english: "This made Emily feel very shy.", chinese: "这让 Emily 感到非常害羞。" },
    { english: "Finally, when she calmed down the baby by patting him for a long time.", chinese: "最后，她通过长时间拍他让这个“婴儿”平静下来。", answers: ["by"] },
    { english: "She felt her arms were about to break.", chinese: "她觉得自己的手臂都快断了。" },
    { english: "Once she got home, she decided to get some housework done.", chinese: "她一到家，就决定先完成一些家务。", answers: ["done"] },
    { english: "She put the baby on the bed and started to clean the room.", chinese: "她把“婴儿”放在床上，开始打扫房间。" },
    { english: "Emily thought the baby would give her a little time but she was wrong.", chinese: "Emily 以为这个“婴儿”会给她一点时间，但她错了。", answers: ["wrong"] },
    { english: "Just about 10 minutes later, he started crying again.", chinese: "仅仅大约10分钟后，他又开始哭了。" },
    { english: "Emily had to stop cleaning and spend a lot of time patting and feeding him to make the baby sleep.", chinese: "Emily 不得不停下打扫，花很多时间拍他、喂他，让这个“婴儿”睡着。", answers: ["feeding"] },
    { english: "She didn't do anything until midnight!", chinese: "直到午夜，她什么也没做成！" },
    { english: "Emily felt very tired the next day.", chinese: "第二天，Emily 感到非常疲惫。", answers: ["tired"] },
    { english: "She had a deeper understanding about her parents.", chinese: "她对父母有了更深的理解。" },
    { english: "They have been looking after her for years.", chinese: "他们多年来一直照顾着她。" },
    { english: "She only had the baby for one day and she had been crazy, but her parents did this all the time.", chinese: "她仅仅照顾这个“婴儿”一天就快崩溃了，但她的父母一直都在这样照顾她。", answers: ["only"] },
    { english: "She understood that even if she tried to help them later on, she can never give back to them as much as they give her.", chinese: "她明白，即使以后努力帮助父母，她也永远无法回报他们给予她的那么多。" }
  ]
};

const overcomingShyness = {
  id: "overcoming-shyness",
  title: "克服害羞的女孩",
  englishTitle: "Overcoming Shyness",
  level: "初三",
  difficulty: "中等",
  source: "2026年新疆仿真押题卷",
  tags: ["校园生活", "情感态度", "逻辑推理", "词汇辨析"],
  available: true,
  firstSentence: "I was a really shy girl when I was in school.",
  lastSentence: "Since I'm older, I can say this ____ has made a big difference to my life.",
  tone: "转折变化",
  toneReason: "文章从害羞、失落开始，转向勇敢尝试，最后走向被接纳和改变人生的积极状态。",
  passage: [
    "I was a really shy girl when I was in school. In class, I always kept ",
    { blank: 21 },
    ". Whenever a teacher asked me a question, my voice would shake and I would talk as ",
    { blank: 22 },
    " as I could. Then I would shrink (萎缩) in my seat, feeling like I was getting ",
    { blank: 23 },
    ". I would just wait quietly ",
    { blank: 24 },
    " the class ended. As time went by, I felt more and more unhappy and ",
    { blank: 25 },
    ". I even thought that maybe I was just ",
    { blank: 26 },
    " to be shy and not noticed. Everyone else had fun, but I didn't. Right before Grade 9, I told my sister ",
    { blank: 27 },
    " I felt. She said, \"It's your own ",
    { blank: 28 },
    ". Do something!\" I always knew I wanted to be part of a group, and I knew I had to start somehow. ",
    { blank: 29 },
    " more in class seemed like the first thing I should do. One day, I collected all my ",
    { blank: 30 },
    " and shared my ideas with everyone in a small group discussion. ",
    { blank: 31 },
    ", it started to work. My classmates noticed me. Sometimes, they ",
    { blank: 32 },
    " answered what I asked. All ",
    { blank: 33 },
    " a sudden, I felt like I was part of the discussion. That's how I started making friends—friends who liked to listen to me. I finally felt like I was ",
    { blank: 34 },
    ". Since I'm older, I can say this ",
    { blank: 35 },
    " has made a big difference to my life."
  ],
  questions: [
    q(21, ["relaxed", "quiet", "excited"], "quiet", "形容词副词", "逻辑推理 / 上下文复现", ["shy girl", "wait quietly"], "因为“我”很害羞，且下文有 wait quietly 的复现，所以上课时总是保持安静。", "keep quiet", "形容词搭配", "系动词(keep) + 形容词(quiet)"),
    q(22, ["much", "more", "little"], "little", "形容词副词", "逻辑推理", ["shy", "voice would shake"], "害羞且声音发抖，说明被提问时会尽可能少说话。", "as little as I could", "固定句型", "as + 副词原级(little) + as + 主语 + could"),
    q(23, ["smaller", "bigger", "greater"], "smaller", "形容词副词", "词汇辨析 / 逻辑推理", ["shrink"], "shrink 表示萎缩、退缩，坐在座位上退缩时会感觉自己变得更小。"),
    q(24, ["for", "until", "after"], "until", "连词逻辑", "语法 / 固定搭配", ["wait quietly"], "wait until... 表示一直等到某个时间点，此处是等到下课。", "wait until...", "固定句型", "动词(wait) + 连词(until) + 从句"),
    q(25, ["lost", "cheered", "patient"], "lost", "形容词副词", "情感态度", ["unhappy and ___"], "and 提示前后情感一致，unhappy 是负面情绪，lost 也符合失落迷茫的状态。"),
    q(26, ["supported", "supposed", "communicated"], "supposed", "动词", "固定搭配", ["to be shy"], "be supposed to do 是核心句型，此处表示“好像注定/被设定就是害羞、不被注意”。", "be supposed to do sth.", "固定句型", "被动语态(be supposed) + 不定式(to do)"),
    q(27, ["what", "how", "why"], "how", "代词", "语法", ["I felt"], "向姐姐倾诉自己的感受，feel 是连系动词，询问感受用 how。"),
    q(28, ["job", "ability", "problem"], "problem", "名词", "逻辑推理", ["Do something!"], "姐姐让她主动做点什么，说明害羞和失落是她需要面对的问题。"),
    q(29, ["Talking", "Studying", "Writing"], "Talking", "动词", "上下文复现", ["talk as little as I could", "shared my ideas"], "前文不敢说话，后文分享想法，要改变的第一步自然是在课堂上多发言。"),
    q(30, ["course", "feeling", "courage"], "courage", "名词", "固定搭配 / 逻辑推理", ["shared my ideas"], "害羞的人要在小组讨论中分享想法，需要鼓起勇气。", "collect one's courage", "动词短语", "动词(collect) + 形容词性物主代词(my) + 名词(courage)"),
    q(31, ["Easily", "Slowly", "Normally"], "Slowly", "形容词副词", "逻辑推理", ["started to work"], "克服害羞是渐进变化，事情慢慢开始起作用更符合成长逻辑。"),
    q(32, ["ever", "never", "even"], "even", "形容词副词", "逻辑推理", ["noticed me", "answered what I asked"], "从同学注意到她，到甚至回答她的问题，是明显递进关系。"),
    q(33, ["of", "on", "out"], "of", "介词搭配", "固定搭配", ["All ___ a sudden"], "all of a sudden 是固定短语，表示突然地。", "all of a sudden", "介词短语", "代词(all) + 介词(of) + 冠词(a) + 名词(sudden)"),
    q(34, ["separated", "refused", "accepted"], "accepted", "动词", "情感态度 / 逻辑推理", ["making friends", "part of the discussion"], "她开始交朋友，成为讨论的一部分，最终感到自己被接纳。"),
    q(35, ["change", "chance", "advantage"], "change", "名词", "上下文概括", ["shy girl", "making friends"], "全文讲的是从害羞到敢于发言、交到朋友的改变，这个改变影响了她的人生。", "make a big difference", "固定搭配", "动词(make) + 名词短语(a big difference)")
  ],
  verifySentences: [
    { english: "I was a really shy girl when I was in school.", chinese: "我上学时是一个非常害羞的女孩。" },
    { english: "In class, I always kept quiet.", chinese: "在课堂上，我总是保持安静。", answers: ["quiet"] },
    { english: "Whenever a teacher asked me a question, my voice would shake and I would talk as little as I could.", chinese: "每当老师问我问题时，我的声音都会发抖，我会尽可能少说话。", answers: ["little"] },
    { english: "Then I would shrink in my seat, feeling like I was getting smaller.", chinese: "然后我会缩在座位里，感觉自己正在变得更小。", answers: ["smaller"] },
    { english: "I would just wait quietly until the class ended.", chinese: "我只会静静地等到下课。", answers: ["until"] },
    { english: "As time went by, I felt more and more unhappy and lost.", chinese: "随着时间流逝，我感到越来越不开心，也越来越迷茫失落。", answers: ["lost"] },
    { english: "I even thought that maybe I was just supposed to be shy and not noticed.", chinese: "我甚至以为，也许我就是注定要害羞、不被注意。", answers: ["supposed"] },
    { english: "Everyone else had fun, but I didn't.", chinese: "其他人都很开心，但我没有。" },
    { english: "Right before Grade 9, I told my sister how I felt.", chinese: "就在九年级前，我告诉了姐姐我的感受。", answers: ["how"] },
    { english: "She said, \"It's your own problem. Do something!\"", chinese: "她说：“这是你自己的问题。做点什么吧！”", answers: ["problem"] },
    { english: "I always knew I wanted to be part of a group, and I knew I had to start somehow.", chinese: "我一直知道自己想成为群体中的一员，也知道必须以某种方式开始改变。" },
    { english: "Talking more in class seemed like the first thing I should do.", chinese: "在课堂上多发言似乎是我应该做的第一件事。", answers: ["Talking"] },
    { english: "One day, I collected all my courage and shared my ideas with everyone in a small group discussion.", chinese: "一天，我鼓起全部勇气，在一次小组讨论中和大家分享了我的想法。", answers: ["courage"] },
    { english: "Slowly, it started to work.", chinese: "慢慢地，这开始起作用了。", answers: ["Slowly"] },
    { english: "My classmates noticed me.", chinese: "我的同学们注意到了我。" },
    { english: "Sometimes, they even answered what I asked.", chinese: "有时，他们甚至会回答我提出的问题。", answers: ["even"] },
    { english: "All of a sudden, I felt like I was part of the discussion.", chinese: "突然间，我觉得自己成了讨论的一部分。", answers: ["of"] },
    { english: "That's how I started making friends—friends who liked to listen to me.", chinese: "我就是这样开始交朋友的，那些朋友喜欢听我说话。" },
    { english: "I finally felt like I was accepted.", chinese: "我终于感觉自己被接纳了。", answers: ["accepted"] },
    { english: "Since I'm older, I can say this change has made a big difference to my life.", chinese: "如今我长大了，我可以说，这个改变对我的人生影响很大。", answers: ["change"] }
  ]
};

const chenWenjunXinjiang = {
  id: "chen-wenjun-xinjiang",
  title: "陈文军的留疆创业路",
  englishTitle: "Chen Wenjun's Entrepreneurship in Xinjiang",
  level: "初三",
  difficulty: "中等",
  source: "2026年新疆仿真押题卷",
  tags: ["人物故事", "情感态度", "上下文复现", "逻辑推理"],
  available: true,
  firstSentence: "Chen Wenjun came to Kashgar as a worker of Guangdong Construction Engineering Group to support Xinjiang's development.",
  lastSentence: "It also helped 3,500 people find ____ close to their home.",
  tone: "转折变化",
  toneReason: "文章从陈文军起初不想留下，到被当地人的善良打动，最终决定留下创业并回馈当地，走向积极感恩。",
  passage: [
    "Chen Wenjun came to Kashgar as a worker of Guangdong Construction Engineering Group to support Xinjiang's development. ",
    { blank: 21 },
    " first, he didn't plan to stay and start a business. At that time, he and his workmates often traveled around southern Xinjiang. They found the local people are very ",
    { blank: 22 },
    ". Every time they went to the countryside, the villagers ",
    { blank: 23 },
    " them with watermelons and hami melons. During meal time, the farmers would ",
    { blank: 24 },
    " inviting them to eat. \"What touched me the most was one midnight, our car broke down ",
    { blank: 25 },
    " in the Gobi Desert, more than 100 kilometers from our destination (目的地) Yarkant. When we felt ",
    { blank: 26 },
    " in the darkness, a small truck stopped. Two Uygur friends got out and ",
    { blank: 27 },
    " us.\" \"However, when we wanted to thank the two men, they ",
    { blank: 28 },
    " refused. They said something that deeply ",
    { blank: 29 },
    " my heart, 'Friend, I believe that when we face difficulties, you will help us ",
    { blank: 30 },
    ".'\" At that moment, they decided to ",
    { blank: 31 },
    ". And they want to do ",
    { blank: 32 },
    " meaningful and helpful for the local people. In November 2015, Chen set up Jiangguoguo to help local people sell the Xinjiang melons and fruits because there was no ",
    { blank: 33 },
    " market for them. Since its founding, Jiangguoguo has helped ",
    { blank: 34 },
    " improve the planting of fruit trees. It also helped 3,500 people find ",
    { blank: 35 },
    " close to their home."
  ],
  questions: [
    q(21, ["To", "On", "At"], "At", "介词搭配", "固定搭配", ["didn't plan to stay"], "at first 表示起初，一开始，与后文最终决定留下形成转折对比。", "at first", "介词短语", "介词(At) + 名词/副词(first)"),
    q(22, ["patient", "friendly", "rich"], "friendly", "形容词副词", "逻辑推理 / 情感态度", ["villagers welcomed them", "inviting them to eat"], "当地人送瓜果、邀请他们吃饭，这些行为直接指向 friendly。"),
    q(23, ["welcomed", "offered", "admired"], "welcomed", "动词", "固定搭配 / 词汇辨析", ["with watermelons and hami melons"], "welcome sb. with sth. 表示用某物欢迎某人，符合村民热情接待的语境。", "welcome sb. with sth.", "动词短语", "动词(welcome) + 代词(sb.) + 介词(with) + 名词(sth.)"),
    q(24, ["call on", "stick on", "depend on"], "stick on", "动词短语", "逻辑推理 / 语境辨析", ["inviting them to eat"], "结合语境，农民们吃饭时会不断/坚持邀请他们吃。此处根据选项排除 call on 和 depend on，锁定 stick on。", "stick on doing sth.", "动词短语", "动词(stick) + 介词(on) + 动名词(inviting)"),
    q(25, ["mostly", "suddenly", "quickly"], "suddenly", "形容词副词", "逻辑推理 / 常识", ["our car broke down", "in the Gobi Desert"], "汽车在午夜戈壁滩抛锚属于突发意外，用 suddenly。"),
    q(26, ["surprised", "sick", "hopeless"], "hopeless", "形容词副词", "情感态度 / 逻辑推理", ["broke down", "midnight", "darkness", "more than 100 kilometers"], "午夜、黑暗、戈壁滩、距离目的地很远，这种困境会让人感到绝望。"),
    q(27, ["helped", "told", "thanked"], "helped", "动词", "逻辑推理", ["got out and ___ us", "wanted to thank the two men"], "后文说他们想感谢两人，说明两位维吾尔族朋友下车后帮助了他们。"),
    q(28, ["happily", "sadly", "strongly"], "strongly", "形容词副词", "情感态度 / 词汇辨析", ["wanted to thank", "refused"], "面对感谢时坚决拒绝，说明他们不求回报，strongly 修饰 refused 最自然。", "strongly refuse", "副词修饰动词", "副词(strongly) + 动词(refuse)"),
    q(29, ["touched", "hurt", "lost"], "touched", "动词", "上下文复现", ["What touched me the most"], "上文已有 What touched me the most，此处是同词复现，表示话语深深触动了我的心。", "touch one's heart", "动词短语", "动词(touch) + 形容词性物主代词(my) + 名词(heart)"),
    q(30, ["too", "either", "also"], "too", "形容词副词", "语法", ["you will help us"], "肯定句句末表示“也”用 too；either 用于否定句末，also 通常放在句中。"),
    q(31, ["move", "fight", "stay"], "stay", "动词", "上下文复现 / 逻辑转折", ["didn't plan to stay", "At that moment"], "开篇说他 didn't plan to stay，被善意打动后决定留下，stay 是跨段落原词复现。"),
    q(32, ["everything", "nothing", "something"], "something", "代词", "语法 / 固定搭配", ["meaningful and helpful"], "肯定句中表示做一些有意义的事用 something，且形容词 meaningful and helpful 后置。", "do something meaningful", "名词搭配", "动词(do) + 不定代词(something) + 形容词(meaningful)"),
    q(33, ["good", "similar", "comfortable"], "good", "形容词副词", "逻辑推理", ["help local people sell", "because there was no ___ market"], "创办企业帮助销售瓜果，是因为当地没有好的市场。"),
    q(34, ["farmers", "teachers", "doctors"], "farmers", "名词", "上下文复现", ["the farmers would", "planting of fruit trees"], "上文出现 farmers，且改善果树种植的人群也应是农民。"),
    q(35, ["roads", "jobs", "shows"], "jobs", "名词", "逻辑推理 / 常识", ["helped 3,500 people find", "close to their home"], "企业帮助3500人在家附近找到工作，find jobs 是自然搭配。", "find jobs", "动词短语", "动词(find) + 名词(jobs)")
  ],
  verifySentences: [
    { english: "Chen Wenjun came to Kashgar as a worker of Guangdong Construction Engineering Group to support Xinjiang's development.", chinese: "陈文军作为广东建工集团的一名工作人员来到喀什，支援新疆发展。" },
    { english: "At first, he didn't plan to stay and start a business.", chinese: "起初，他并没有打算留下来创业。", answers: ["At"] },
    { english: "At that time, he and his workmates often traveled around southern Xinjiang.", chinese: "那时，他和同事们经常在南疆各地走访。" },
    { english: "They found the local people are very friendly.", chinese: "他们发现当地人非常友好。", answers: ["friendly"] },
    { english: "Every time they went to the countryside, the villagers welcomed them with watermelons and hami melons.", chinese: "每次他们去乡下，村民们都会用西瓜和哈密瓜欢迎他们。", answers: ["welcomed"] },
    { english: "During meal time, the farmers would stick on inviting them to eat.", chinese: "吃饭时，农民们会坚持邀请他们一起吃饭。", answers: ["stick on"] },
    { english: "What touched me the most was one midnight, our car broke down suddenly in the Gobi Desert, more than 100 kilometers from our destination Yarkant.", chinese: "最打动我的是，有一天午夜，我们的车在戈壁滩上突然抛锚，距离目的地叶尔羌还有100多公里。", answers: ["suddenly"] },
    { english: "When we felt hopeless in the darkness, a small truck stopped.", chinese: "当我们在黑暗中感到绝望时，一辆小卡车停了下来。", answers: ["hopeless"] },
    { english: "Two Uygur friends got out and helped us.", chinese: "两位维吾尔族朋友下车帮助了我们。", answers: ["helped"] },
    { english: "However, when we wanted to thank the two men, they strongly refused.", chinese: "然而，当我们想感谢这两位男子时，他们坚决拒绝了。", answers: ["strongly"] },
    { english: "They said something that deeply touched my heart, 'Friend, I believe that when we face difficulties, you will help us too.'", chinese: "他们说了一句话深深触动了我的心：“朋友，我相信当我们遇到困难时，你们也会帮助我们。”", answers: ["touched", "too"] },
    { english: "At that moment, they decided to stay.", chinese: "就在那一刻，他们决定留下来。", answers: ["stay"] },
    { english: "And they want to do something meaningful and helpful for the local people.", chinese: "他们想为当地人做一些有意义、有帮助的事情。", answers: ["something"] },
    { english: "In November 2015, Chen set up Jiangguoguo to help local people sell the Xinjiang melons and fruits because there was no good market for them.", chinese: "2015年11月，陈文军创办疆果果，帮助当地人销售新疆瓜果，因为这些农产品没有好的市场。", answers: ["good"] },
    { english: "Since its founding, Jiangguoguo has helped farmers improve the planting of fruit trees.", chinese: "自成立以来，疆果果帮助农民改进果树种植。", answers: ["farmers"] },
    { english: "It also helped 3,500 people find jobs close to their home.", chinese: "它还帮助3500人在家附近找到了工作。", answers: ["jobs"] }
  ]
};

const bakerInnovation = {
  id: "baker-innovation",
  title: "面包师的创新",
  englishTitle: "The Baker and His Bread / The Baker's Innovation",
  level: "初二至初三",
  difficulty: "中等",
  tags: ["寓言故事", "逻辑推理", "情感态度", "上下文复现"],
  available: true,
  firstSentence: "There once was a baker famous for his golden-brown bread.",
  lastSentence: "To keep up with the times, you are supposed to ____ your way of thinking and always keep learning new things.",
  tone: "转折变化",
  toneReason: "文章从面包师固守传统、失去顾客开始，转向接受新口味和创新做法，最终重获成功。",
  passage: [
    "There once was a baker famous for his golden-brown bread. He learned to make bread from his grandfather and did it the ",
    { blank: 21 },
    " way for years. People ",
    { blank: 22 },
    " the warm, familiar taste of his bread, and they lined up every day at his shop. Soon he opened a new shop, and he ",
    { blank: 23 },
    " baked his bread in a big oven. “I will never fail to use my way of baking!” he said. But over time, fewer ",
    { blank: 24 },
    " came. He kept using the same flour (面粉) and spent the same time baking, ",
    { blank: 25 },
    " people wanted new tastes. One morning, a neighbor brought him bread from another ",
    { blank: 26 },
    ". “Try this bread ",
    { blank: 27 },
    " honey and fruit,” she said. The baker didn’t like the idea but ",
    { blank: 28 },
    " took a bite. To his surprise, it was ",
    { blank: 29 },
    " —soft, sweet and full of new ideas. His own bread, though still good, seemed too ",
    { blank: 30 },
    " now. “You’re great at baking,” the neighbor said kindly, “but people love new things. Why not try adding ",
    { blank: 31 },
    " different?” That night, he tried adding nuts, spices and fruits while keeping using his own ",
    { blank: 32 },
    " of baking. Days later, customers came happily to buy his bread. Even people who didn’t love bread came to ",
    { blank: 33 },
    " his new kinds of bread. The baker ",
    { blank: 34 },
    " a new sign: Old and New, Both Great. This experience taught him: To keep up with the times, you are supposed to ",
    { blank: 35 },
    " your way of thinking and always keep learning new things."
  ],
  questions: [
    q(21, ["easy", "new", "same"], "same", "形容词副词", "上下文复现 / 逻辑推理", ["learned to make bread from his grandfather", "kept using the same flour"], "从爷爷那里学来的手艺，加上下文 same flour 的复现，说明他多年使用同样的方法。"),
    q(22, ["covered", "paid", "loved"], "loved", "动词", "情感态度 / 逻辑推理", ["lined up every day"], "人们每天排队购买，说明他们喜爱这种温暖熟悉的味道。"),
    q(23, ["proudly", "probably", "quickly"], "proudly", "形容词副词", "情感态度", ["I will never fail to use my way of baking!"], "他说永远不会放弃自己的烘焙方式，体现对手艺的自信和自豪。"),
    q(24, ["doctors", "customers", "teachers"], "customers", "名词", "上下文复现", ["baker", "shop", "buy his bread"], "面包店场景里来买面包的人是顾客，下文 customers 也有原词复现。"),
    q(25, ["if", "but", "so"], "but", "连词逻辑", "逻辑推理", ["kept using the same", "wanted new tastes"], "前面还在用相同方式，后面人们想要新口味，构成转折关系。"),
    q(26, ["hotel", "shop", "museum"], "shop", "名词", "上下文复现", ["at his shop"], "邻居带来的面包来自另一家店，shop 呼应前文 at his shop。"),
    q(27, ["in", "by", "with"], "with", "介词搭配", "语法 / 介词辨析", ["bread ___ honey and fruit"], "with 表示带有、添加了，bread with honey and fruit 是加了蜂蜜和水果的面包。", "with", "介词短语", "名词(bread) + 介词(with) + 附加成分(honey and fruit)"),
    q(28, ["again", "ever", "still"], "still", "形容词副词", "逻辑推理", ["didn't like the idea but"], "but 提示反差，虽然不喜欢这个想法，但他还是咬了一口。"),
    q(29, ["delicious", "terrible", "cheap"], "delicious", "形容词副词", "情感态度", ["To his surprise", "soft, sweet"], "破折号后 soft, sweet and full of new ideas 都是正向体验，指向 delicious。"),
    q(30, ["simple", "exciting", "special"], "simple", "形容词副词", "逻辑推理", ["full of new ideas", "his own bread"], "邻居的面包充满新意，对比之下他的传统面包显得太简单单调。"),
    q(31, ["anything", "everything", "something"], "something", "代词", "语法 / 固定搭配", ["adding ___ different", "Why not"], "Why not 提建议时常用 something，且形容词 different 后置修饰不定代词。", "something different", "名词搭配", "不定代词(something) + 形容词(different)"),
    q(32, ["space", "time", "way"], "way", "名词", "上下文复现", ["my way of baking"], "这里呼应前文 my way of baking，表示保留自己的烘焙方法。", "one's way of doing sth.", "名词搭配", "形容词性物主代词(own) + 名词(way) + 介词(of) + 动名词(baking)"),
    q(33, ["explain", "try", "show"], "try", "动词", "逻辑推理 / 上下文复现", ["Try this bread", "his new kinds of bread"], "不爱面包的人也来尝试他的新面包，try 与前文 Try this bread 呼应。"),
    q(34, ["took up", "put up", "cut up"], "put up", "动词短语", "固定搭配", ["a new sign"], "put up a sign 表示挂起或张贴招牌，符合语境。", "put up a sign", "动词短语", "动词短语(put up) + 冠词(a) + 名词(sign)"),
    q(35, ["develop", "teach", "refuse"], "develop", "动词", "逻辑推理 / 词汇辨析", ["keep up with the times", "always keep learning"], "为了与时俱进并持续学习，需要发展、拓展自己的思维方式。", "develop one's way of thinking", "动词短语", "动词(develop) + 名词短语(your way of thinking)")
  ],
  verifySentences: [
    { english: "There once was a baker famous for his golden-brown bread.", chinese: "从前有一位面包师，以他金棕色的面包而闻名。" },
    { english: "He learned to make bread from his grandfather and did it the same way for years.", chinese: "他从祖父那里学会做面包，并多年一直用同样的方法制作。", answers: ["same"] },
    { english: "People loved the warm, familiar taste of his bread, and they lined up every day at his shop.", chinese: "人们喜爱他面包温暖而熟悉的味道，每天都在他的店门口排队。", answers: ["loved"] },
    { english: "Soon he opened a new shop, and he proudly baked his bread in a big oven.", chinese: "很快他开了一家新店，并自豪地在大烤箱里烤面包。", answers: ["proudly"] },
    { english: "“I will never fail to use my way of baking!” he said.", chinese: "他说：“我永远不会放弃我的烘焙方法！”" },
    { english: "But over time, fewer customers came.", chinese: "但随着时间推移，来的顾客越来越少。", answers: ["customers"] },
    { english: "He kept using the same flour and spent the same time baking, but people wanted new tastes.", chinese: "他仍然使用同样的面粉，花同样的时间烘焙，但是人们想要新的口味。", answers: ["but"] },
    { english: "One morning, a neighbor brought him bread from another shop.", chinese: "一天早上，一位邻居从另一家店给他带来了面包。", answers: ["shop"] },
    { english: "“Try this bread with honey and fruit,” she said.", chinese: "她说：“尝尝这个加了蜂蜜和水果的面包。”", answers: ["with"] },
    { english: "The baker didn't like the idea but still took a bite.", chinese: "面包师不喜欢这个想法，但还是咬了一口。", answers: ["still"] },
    { english: "To his surprise, it was delicious—soft, sweet and full of new ideas.", chinese: "令他惊讶的是，它很好吃，柔软、香甜，而且充满新意。", answers: ["delicious"] },
    { english: "His own bread, though still good, seemed too simple now.", chinese: "他自己的面包虽然仍然不错，但现在看起来太单调了。", answers: ["simple"] },
    { english: "“You're great at baking,” the neighbor said kindly, “but people love new things. Why not try adding something different?”", chinese: "邻居温和地说：“你很擅长烘焙，但人们喜欢新东西。为什么不试着加点不同的东西呢？”", answers: ["something"] },
    { english: "That night, he tried adding nuts, spices and fruits while keeping using his own way of baking.", chinese: "那天晚上，他尝试加入坚果、香料和水果，同时保留自己的烘焙方法。", answers: ["way"] },
    { english: "Days later, customers came happily to buy his bread.", chinese: "几天后，顾客们开心地来买他的面包。" },
    { english: "Even people who didn't love bread came to try his new kinds of bread.", chinese: "甚至那些原本不爱面包的人也来尝试他的新面包。", answers: ["try"] },
    { english: "The baker put up a new sign: Old and New, Both Great.", chinese: "面包师挂起了一个新招牌：传统与创新，都很棒。", answers: ["put up"] },
    { english: "This experience taught him: To keep up with the times, you are supposed to develop your way of thinking and always keep learning new things.", chinese: "这段经历教会他：为了跟上时代，你应该发展自己的思维方式，并始终学习新事物。", answers: ["develop"] }
  ]
};

const vultureRevelation = {
  id: "vulture-revelation",
  title: "秃鹫的启示",
  englishTitle: "The Revelation of the Vulture",
  level: "初二/初三",
  difficulty: "中等",
  source: "2026新疆考前冲刺卷",
  tags: ["校园生活", "逻辑推理", "情感态度", "上下文复现", "寓言隐喻"],
  available: true,
  firstSentence: "It was the final science test.",
  lastSentence: "After hearing these words, Mark was so moved that he decided to study harder ____ become better.",
  tone: "转折变化",
  toneReason: "文章从 Mark 过度自信、不复习导致失败开始，经过老师用秃鹫助跑作隐喻点拨后，转向努力奋进的积极心态。",
  passage: [
    "It was the final science test. Mark felt very confident to be the first to ",
    { blank: 21 },
    " his paper. He had a natural talent for science. However, he never reviewed before exams. Everyone in the class was ",
    { blank: 22 },
    " that he could finish so quickly. However, the ",
    { blank: 23 },
    " was surprising. Mark's teacher asked him to go to his office the next day. The teacher looked at him ",
    { blank: 24 },
    ". He guessed that things had gone badly. When the teacher told him that he failed the exam, he felt ",
    { blank: 25 },
    " and couldn't believe it. \"During your school years, science was easy for you. And you ",
    { blank: 26 },
    " did a good job in the exams. But today, you've ",
    { blank: 27 },
    " your talent. Talent doesn't mean good grades. You should clearly ",
    { blank: 28 },
    " the truth,\" the teacher said. \"When I was young, I was ",
    { blank: 29 },
    " to you. I was good at writing. Do you see this picture? This is a vulture (秃鹫). It was a gift from my Chinese teacher ",
    { blank: 30 },
    " I failed an easy test,\" the teacher continued. \"Unlike other ",
    { blank: 31 },
    " that fly directly into the sky,\" the teacher explained, \"the vulture depends on a run-up (助跑) before flying. So, once ",
    { blank: 32 },
    " flies into the sky, it can glide (滑翔).\" \"You're the vulture. Remember, being ",
    { blank: 33 },
    " is like the run-up. It is an important part to realize your dreams. When it is connected with your ",
    { blank: 34 },
    ", it helps you fly higher!\" After hearing these words, Mark was so moved that he decided to study harder ",
    { blank: 35 },
    " become better."
  ],
  questions: [
    q(21, ["hand in", "turn down", "give up"], "hand in", "动词", "逻辑推理 / 词汇辨析", ["finish so quickly"], "下文说他完成得很快，做完试卷后的动作自然是交卷。", "hand in one's paper", "动词短语", "动词(hand) + 副词(in) + 名词(paper)"),
    q(22, ["moved", "cheerful", "surprised"], "surprised", "形容词副词", "情感态度 / 逻辑推理", ["finish so quickly"], "Mark 答题速度超出常规，同学们自然会感到惊讶。"),
    q(23, ["result", "promise", "problem"], "result", "名词", "逻辑推理", ["failed the exam"], "下文说他考试不及格，不及格就是这次考试令人意外的结果。"),
    q(24, ["luckily", "happily", "seriously"], "seriously", "形容词副词", "情感态度", ["things had gone badly"], "事情不妙，老师看他的神态应是严肃的，而不是开心或幸运。"),
    q(25, ["interested", "shocked", "tired"], "shocked", "形容词副词", "情感态度", ["couldn't believe it"], "一直自信又有天赋的 Mark 得知不及格时无法相信，说明他很震惊。"),
    q(26, ["never", "really", "only"], "really", "形容词副词", "逻辑推理", ["But today"], "老师承认他过去确实考得好，再用 But today 转折到今天的失败。"),
    q(27, ["practiced", "changed", "wasted"], "wasted", "动词", "逻辑推理 / 上下文复现", ["never reviewed", "failed the exam"], "有天赋却从不复习，最后失败，这就是浪费了自己的天赋。", "waste one's talent", "动词短语", "动词(waste) + 形容词性物主代词(your) + 名词(talent)"),
    q(28, ["know", "forget", "choose"], "know", "动词", "逻辑推理", ["the truth"], "老师希望他清楚认识到：天赋并不等于好成绩。", "know the truth", "动词短语", "动词(know) + 冠词(the) + 名词(truth)"),
    q(29, ["important", "similar", "friendly"], "similar", "形容词副词", "固定搭配 / 上下文复现", ["good at writing", "failed an easy test"], "老师年轻时也擅长某科却因轻敌失败，经历与 Mark 相似。", "be similar to...", "形容词搭配", "系动词(be) + 形容词(similar) + 介词(to)"),
    q(30, ["before", "after", "if"], "after", "连词逻辑", "逻辑推理", ["failed an easy test"], "秃鹫图片作为教训和鼓励，应是在老师考试失败之后收到的。"),
    q(31, ["trees", "gifts", "birds"], "birds", "名词", "上下文复现", ["vulture", "fly directly into the sky"], "vulture 属于鸟类，这里是上下义词复现。"),
    q(32, ["she", "it", "you"], "it", "代词", "上下文复现", ["the vulture"], "代词指代前文 the vulture，用 it。"),
    q(33, ["hard-working", "clever", "lazy"], "hard-working", "形容词副词", "逻辑推理 / 情感态度", ["like the run-up", "realize your dreams"], "秃鹫起飞前的助跑象征脚踏实地的努力，Mark 需要变得勤奋。"),
    q(34, ["experience", "talent", "story"], "talent", "名词", "上下文复现", ["natural talent", "wasted your talent"], "全文多次强调 talent，努力与天赋结合才能飞得更高。"),
    q(35, ["but", "or", "and"], "and", "连词逻辑", "逻辑推理", ["study harder", "become better"], "努力学习和变得更好是顺承并列的正向动作，用 and 连接。")
  ],
  verifySentences: [
    { english: "It was the final science test.", chinese: "那是最后一次科学考试。" },
    { english: "Mark felt very confident to be the first to hand in his paper.", chinese: "Mark 非常自信，第一个交了试卷。", answers: ["hand in"] },
    { english: "He had a natural talent for science.", chinese: "他在科学方面有天赋。" },
    { english: "However, he never reviewed before exams.", chinese: "然而，他考试前从不复习。" },
    { english: "Everyone in the class was surprised that he could finish so quickly.", chinese: "班里的每个人都很惊讶他能完成得这么快。", answers: ["surprised"] },
    { english: "However, the result was surprising.", chinese: "然而，结果令人吃惊。", answers: ["result"] },
    { english: "Mark's teacher asked him to go to his office the next day.", chinese: "第二天，Mark 的老师让他去办公室。" },
    { english: "The teacher looked at him seriously.", chinese: "老师严肃地看着他。", answers: ["seriously"] },
    { english: "He guessed that things had gone badly.", chinese: "他猜到事情不妙。" },
    { english: "When the teacher told him that he failed the exam, he felt shocked and couldn't believe it.", chinese: "当老师告诉他考试不及格时，他感到震惊，无法相信。", answers: ["shocked"] },
    { english: "During your school years, science was easy for you.", chinese: "在你的学生时代，科学对你来说很容易。" },
    { english: "And you really did a good job in the exams.", chinese: "而且你过去确实在考试中表现很好。", answers: ["really"] },
    { english: "But today, you've wasted your talent.", chinese: "但今天，你浪费了自己的天赋。", answers: ["wasted"] },
    { english: "Talent doesn't mean good grades.", chinese: "天赋并不意味着好成绩。" },
    { english: "You should clearly know the truth.", chinese: "你应该清楚地认识这个真相。", answers: ["know"] },
    { english: "When I was young, I was similar to you.", chinese: "我年轻时和你很相似。", answers: ["similar"] },
    { english: "I was good at writing.", chinese: "我擅长写作。" },
    { english: "Do you see this picture?", chinese: "你看到这张图片了吗？" },
    { english: "This is a vulture.", chinese: "这是一只秃鹫。" },
    { english: "It was a gift from my Chinese teacher after I failed an easy test.", chinese: "这是我一次简单考试失败后，语文老师送给我的礼物。", answers: ["after"] },
    { english: "Unlike other birds that fly directly into the sky, the vulture depends on a run-up before flying.", chinese: "不像其他直接飞向天空的鸟，秃鹫在飞行前依靠助跑。", answers: ["birds"] },
    { english: "So, once it flies into the sky, it can glide.", chinese: "所以，一旦它飞上天空，就可以滑翔。", answers: ["it"] },
    { english: "You're the vulture.", chinese: "你就是那只秃鹫。" },
    { english: "Remember, being hard-working is like the run-up.", chinese: "记住，勤奋就像助跑。", answers: ["hard-working"] },
    { english: "It is an important part to realize your dreams.", chinese: "它是实现梦想的重要部分。" },
    { english: "When it is connected with your talent, it helps you fly higher!", chinese: "当它与你的天赋结合时，它会帮助你飞得更高！", answers: ["talent"] },
    { english: "After hearing these words, Mark was so moved that he decided to study harder and become better.", chinese: "听到这些话后，Mark 非常感动，决定更加努力学习并变得更好。", answers: ["and"] }
  ]
};

const paperBridgeValue = {
  id: "paper-bridge-value",
  title: "发现自我价值的纸桥",
  englishTitle: "Mario's Paper Bridge / Finding My Own Value",
  level: "初二至初三",
  difficulty: "中等",
  source: "2026新疆考前冲刺卷",
  tags: ["校园生活", "情感态度", "逻辑推理", "上下文复现", "固定搭配"],
  available: true,
  firstSentence: "I’m Mario. In my class, some of my classmates are super smart and always top in tests, while ____ are great at sports or music.",
  lastSentence: "I may not be the most excellent student ____ every subject, but I have my own value.",
  tone: "转折变化",
  toneReason: "文章从 Mario 觉得自己普通、没有特长的自我怀疑开始，转向通过纸桥比赛获奖后发现自我价值的自信积极。",
  passage: [
    "I’m Mario. In my class, some of my classmates are super smart and always top in tests, while ",
    { blank: 21 },
    " are great at sports or music. I ",
    { blank: 22 },
    " felt that I had nothing special about me. One day, our school announced (宣布) a science competition. The ",
    { blank: 23 },
    " made everyone excited. But I felt a bit ",
    { blank: 24 },
    ". I wasn’t sure what I could do. I thought hard and decided to work on the things we ",
    { blank: 25 },
    " every day. I wanted to see how ",
    { blank: 26 },
    " kinds of paper worked for making bridges. I ",
    { blank: 27 },
    " thick cardboard, thin printer paper and different kinds of paper at home. I ",
    { blank: 28 },
    " built a perfect paper bridge. When the competition came, I got really ",
    { blank: 29 },
    ". My hands shook as I showed my paper bridge ",
    { blank: 30 },
    " it was my turn. To ",
    { blank: 31 },
    " surprise, they asked me a lot of questions. They couldn’t believe that the paper bridge could be so ",
    { blank: 32 },
    " to carry heavy stones. At last, I got a special ",
    { blank: 33 },
    "! The teacher said my creation was great because it was easy to understand. She said it could ",
    { blank: 34 },
    " us to make something great with simple things. This experience taught me that being ordinary (普通的) is okay. I may not be the most excellent student ",
    { blank: 35 },
    " every subject, but I have my own value."
  ],
  questions: [
    q(21, ["others", "one", "all"], "others", "代词", "语法 / 固定搭配", ["some of my classmates"], "some..., others... 表示“一些……，另一些……”，这里指另一些同学擅长体育或音乐。", "some..., others...", "固定句型", "代词(some) + 连词(while) + 代词(others)"),
    q(22, ["never", "often", "nearly"], "often", "形容词副词", "逻辑推理", ["nothing special about me", "classmates are super smart"], "在优秀同学的对比下，Mario 经常觉得自己没有特别之处。"),
    q(23, ["rule", "news", "result"], "news", "名词", "上下文复现", ["announced"], "学校宣布比赛，这个宣布的内容就是一条消息。"),
    q(24, ["sleepy", "unfair", "difficult"], "difficult", "形容词副词", "逻辑推理", ["But", "wasn't sure what I could do"], "大家兴奋，但他不知道自己能做什么，所以感到有点为难。"),
    q(25, ["want", "use", "play"], "use", "动词", "常识 / 逻辑推理", ["kinds of paper"], "纸是每天都会使用的物品，用日常材料做实验符合语境。"),
    q(26, ["different", "small", "common"], "different", "形容词副词", "上下文复现", ["different kinds of paper"], "下文直接出现 different kinds of paper，是原词复现。", "different kinds of", "形容词搭配", "形容词(different) + 名词词组(kinds of)"),
    q(27, ["prepared", "broke", "made"], "prepared", "动词", "逻辑推理", ["thick cardboard", "built a perfect paper bridge"], "建造纸桥前，需要先准备好硬纸板、打印纸等材料。"),
    q(28, ["slowly", "finally", "suddenly"], "finally", "形容词副词", "逻辑推理", ["thought hard", "prepared", "built a perfect paper bridge"], "经过思考和准备，最终建成纸桥，finally 符合结果呈现。"),
    q(29, ["nervous", "thankful", "silly"], "nervous", "形容词副词", "情感态度 / 上下文复现", ["My hands shook"], "手发抖是紧张的具体表现，指向 nervous。"),
    q(30, ["after", "when", "if"], "when", "连词逻辑", "语法", ["showed my paper bridge", "it was my turn"], "当轮到我展示纸桥时，动作发生在特定时间点，用 when。"),
    q(31, ["their", "our", "my"], "my", "代词", "固定搭配 / 逻辑推理", ["they asked me a lot of questions"], "没想到别人对作品如此感兴趣，所以是令“我”惊讶。", "to one's surprise", "介词短语", "介词(To) + 物主代词(my) + 名词(surprise)"),
    q(32, ["famous", "beautiful", "strong"], "strong", "形容词副词", "逻辑推理", ["to carry heavy stones"], "能承载重石头，说明纸桥很坚固。", "be strong to do", "形容词搭配", "系动词(be) + 形容词(strong) + 不定式(to carry)"),
    q(33, ["ability", "prize", "chance"], "prize", "名词", "上下文复现 / 常识", ["science competition", "At last"], "参加比赛并展示优秀作品，最后获得特殊奖项。", "get a prize", "动词短语", "动词(get) + 冠词(a) + 名词(prize)"),
    q(34, ["allow", "train", "encourage"], "encourage", "动词", "固定搭配 / 情感态度", ["my creation was great"], "老师夸奖作品，是为了鼓励大家用简单事物创造伟大作品。", "encourage sb. to do sth.", "动词短语", "动词(encourage) + 代词(us) + 不定式(to make)"),
    q(35, ["off", "in", "on"], "in", "介词搭配", "固定搭配", ["excellent student ___ every subject"], "表示在某门学科或领域内，介词用 in。", "excellent in a subject", "介词短语", "介词(in) + 名词短语(every subject)")
  ],
  verifySentences: [
    { english: "I’m Mario.", chinese: "我是 Mario。" },
    { english: "In my class, some of my classmates are super smart and always top in tests, while others are great at sports or music.", chinese: "在我的班里，有些同学非常聪明，考试总是名列前茅，而另一些同学擅长体育或音乐。", answers: ["others"] },
    { english: "I often felt that I had nothing special about me.", chinese: "我经常觉得自己没有什么特别之处。", answers: ["often"] },
    { english: "One day, our school announced a science competition.", chinese: "一天，我们学校宣布了一场科学竞赛。" },
    { english: "The news made everyone excited.", chinese: "这个消息让每个人都很兴奋。", answers: ["news"] },
    { english: "But I felt a bit difficult.", chinese: "但我感到有点为难。", answers: ["difficult"] },
    { english: "I wasn’t sure what I could do.", chinese: "我不确定自己能做什么。" },
    { english: "I thought hard and decided to work on the things we use every day.", chinese: "我认真思考后，决定研究我们每天使用的东西。", answers: ["use"] },
    { english: "I wanted to see how different kinds of paper worked for making bridges.", chinese: "我想看看不同种类的纸用来造桥效果如何。", answers: ["different"] },
    { english: "I prepared thick cardboard, thin printer paper and different kinds of paper at home.", chinese: "我在家准备了厚纸板、薄打印纸和不同种类的纸。", answers: ["prepared"] },
    { english: "I finally built a perfect paper bridge.", chinese: "我最终建成了一座完美的纸桥。", answers: ["finally"] },
    { english: "When the competition came, I got really nervous.", chinese: "比赛到来时，我真的很紧张。", answers: ["nervous"] },
    { english: "My hands shook as I showed my paper bridge when it was my turn.", chinese: "轮到我展示纸桥时，我的手在发抖。", answers: ["when"] },
    { english: "To my surprise, they asked me a lot of questions.", chinese: "令我惊讶的是，他们问了我很多问题。", answers: ["my"] },
    { english: "They couldn’t believe that the paper bridge could be so strong to carry heavy stones.", chinese: "他们无法相信这座纸桥竟然如此坚固，能承载沉重的石头。", answers: ["strong"] },
    { english: "At last, I got a special prize!", chinese: "最后，我获得了一个特别奖！", answers: ["prize"] },
    { english: "The teacher said my creation was great because it was easy to understand.", chinese: "老师说我的作品很棒，因为它容易理解。" },
    { english: "She said it could encourage us to make something great with simple things.", chinese: "她说它可以鼓励我们用简单的东西创造伟大的事物。", answers: ["encourage"] },
    { english: "This experience taught me that being ordinary is okay.", chinese: "这次经历教会我，普通也没关系。" },
    { english: "I may not be the most excellent student in every subject, but I have my own value.", chinese: "我也许不是每一门学科里最优秀的学生，但我有自己的价值。", answers: ["in"] }
  ]
};

const collettesCookieDream = {
  id: "collettes-cookie-dream",
  title: "唐氏女孩的烘焙梦",
  englishTitle: "Collette's Cookie Dream",
  level: "中考",
  difficulty: "中等",
  source: "2026新疆考前冲刺卷",
  tags: ["人物传记", "励志故事", "逻辑推理", "上下文复现", "固定搭配"],
  available: true,
  firstSentence: "It takes a lot of hard work and determination to achieve big goals. Collette Divitto is a talented baker who ____ to do just that.",
  lastSentence: "Divitto wants to ____ this.",
  tone: "转折变化",
  toneReason: "文章从 Collette 找工作屡遭拒绝的消极经历开始，转向她通过创业获得成功并帮助残疾人就业的积极向上。",
  passage: [
    "It takes a lot of hard work and determination (决心) to achieve big goals. Collette Divitto is a talented baker who ",
    { blank: 21 },
    " to do just that. After graduating from college, Divitto wanted to get a ",
    { blank: 22 },
    ". But she kept ",
    { blank: 23 },
    " at job interviews. Many employers (雇主) said she was “not the right fit”. Divitto believed she failed so often ",
    { blank: 24 },
    " she was born with Down syndrome (唐氏综合征). Divitto ",
    { blank: 25 },
    " to open her own business and be her own boss. She thought about her hobbies and ",
    { blank: 26 },
    " things. Divitto loved baking, so she began selling her cookies. Her business was called “Collettey’s Cookies”. She took her cookies ",
    { blank: 27 },
    " a local grocery store. Right after tasting ",
    { blank: 28 },
    ", the store decided to sell Divitto’s cookies. Golden Goose Market became Divitto’s first customer. Later, a television station shared Divitto’s story. People loved hearing about how she didn’t ",
    { blank: 29 },
    " when faced with rejection (拒绝). Soon, more news stations shared her story and Divitto’s cookies became very ",
    { blank: 30 },
    ". Divitto had to hire (雇用) more people to keep up with the need. Divitto doesn’t ",
    { blank: 31 },
    " want to sell cookies. She has a larger ",
    { blank: 32 },
    " to hire as many people with disabilities as possible. Divitto also wants business owners to see the strengths (优势) and ",
    { blank: 33 },
    " of people with disabilities. They can work but cannot find jobs. Even when they do get jobs, they are ",
    { blank: 34 },
    " paid less than the minimum wage (最低工资). Divitto wants to ",
    { blank: 35 },
    " this."
  ],
  questions: [
    q(21, ["offered", "managed", "promised"], "managed", "动词", "固定搭配 / 逻辑推理", ["achieve big goals", "to do just that"], "实现大目标需要努力和决心，Collette 正是经过努力成功做到了这一点。", "manage to do sth.", "动词短语", "动词(manage) + 不定式(to do)"),
    q(22, ["company", "car", "job"], "job", "名词", "上下文复现", ["job interviews"], "下一句出现 job interviews，说明大学毕业后她想找一份工作。", "get a job", "动词短语", "动词(get) + 冠词(a) + 名词(job)"),
    q(23, ["choosing", "studying", "failing"], "failing", "动词", "上下文复现 / 语法", ["failed so often"], "后文 failed so often 与此处 failing 构成同词根复现，同时 keep 后接 doing。", "keep doing sth.", "固定句型", "动词(keep) + 动名词(failing)"),
    q(24, ["because", "and", "although"], "because", "连词逻辑", "逻辑推理", ["failed so often", "born with Down syndrome"], "经常失败是结果，患有唐氏综合征是她认为的原因，用 because。"),
    q(25, ["agreed", "decided", "needed"], "decided", "动词", "逻辑推理 / 固定搭配", ["open her own business"], "找工作碰壁后，她决定自己创业当老板。", "decide to do sth.", "动词短语", "动词(decide) + 不定式(to do)"),
    q(26, ["wonderful", "difficult", "favorite"], "favorite", "形容词副词", "情感态度 / 逻辑推理", ["hobbies and ___"], "and 连接情感一致内容，hobbies 是喜欢的事物，后面应接 favorite。"),
    q(27, ["to", "in", "at"], "to", "介词搭配", "固定搭配", ["took her cookies ___ a local grocery store"], "take sth. to... 表示把某物带到某地。", "take sth. to...", "动词短语", "动词(take) + 名词(cookies) + 介词(to) + 目的地"),
    q(28, ["her", "it", "them"], "them", "代词", "逻辑推理 / 代词指代", ["her cookies"], "代词指代前面的复数 cookies，宾格用 them。"),
    q(29, ["get away", "give up", "stand out"], "give up", "动词短语", "逻辑推理 / 词汇辨析", ["when faced with rejection", "started her own business"], "面对拒绝时她没有放弃，而是自己创业。", "give up", "动词短语", "动词(give) + 副词(up)"),
    q(30, ["expensive", "popular", "delicious"], "popular", "形容词副词", "逻辑推理", ["more news stations shared her story", "hire more people", "keep up with the need"], "新闻报道后需求增加，她不得不雇更多人，说明饼干很受欢迎。"),
    q(31, ["never", "also", "just"], "just", "形容词副词", "逻辑推理", ["larger dream"], "她不只是想卖饼干，后面还有更大的梦想，doesn't just 构成递进。", "not just", "固定搭配", "否定词(not/doesn't) + 副词(just)"),
    q(32, ["decision", "influence", "dream"], "dream", "名词", "上下文复现", ["achieve big goals"], "雇佣尽可能多的残疾人是她更大的梦想，dream 与 big goals 属于同义场复现。"),
    q(33, ["talents", "feelings", "sadness"], "talents", "名词", "上下文复现 / 情感态度", ["strengths and ___", "talented baker"], "strengths 是正向词，and 后也应是正向的 talents，同时呼应 talented。"),
    q(34, ["seldom", "often", "hardly"], "often", "形容词副词", "逻辑推理", ["Even when they do get jobs", "paid less than the minimum wage"], "即使找到工作，残疾人也往往被支付低于最低工资的薪水，often 符合社会现状描述。"),
    q(35, ["add", "turn", "change"], "change", "动词", "逻辑推理 / 主旨升华", ["They can work but cannot find jobs", "paid less than the minimum wage"], "面对就业困难和薪资不公，Divitto 想改变这种现状。")
  ],
  verifySentences: [
    { english: "It takes a lot of hard work and determination to achieve big goals.", chinese: "实现大目标需要大量努力和决心。" },
    { english: "Collette Divitto is a talented baker who managed to do just that.", chinese: "Collette Divitto 是一位有天赋的面包师，她成功做到了这一点。", answers: ["managed"] },
    { english: "After graduating from college, Divitto wanted to get a job.", chinese: "大学毕业后，Divitto 想找一份工作。", answers: ["job"] },
    { english: "But she kept failing at job interviews.", chinese: "但她在工作面试中不断失败。", answers: ["failing"] },
    { english: "Many employers said she was not the right fit.", chinese: "许多雇主说她“不合适”。" },
    { english: "Divitto believed she failed so often because she was born with Down syndrome.", chinese: "Divitto 认为她经常失败，是因为她天生患有唐氏综合征。", answers: ["because"] },
    { english: "Divitto decided to open her own business and be her own boss.", chinese: "Divitto 决定开创自己的事业，自己当老板。", answers: ["decided"] },
    { english: "She thought about her hobbies and favorite things.", chinese: "她思考自己的爱好和最喜欢的事情。", answers: ["favorite"] },
    { english: "Divitto loved baking, so she began selling her cookies.", chinese: "Divitto 喜欢烘焙，所以她开始卖自己的饼干。" },
    { english: "Her business was called Collettey's Cookies.", chinese: "她的生意叫作 Collettey’s Cookies。" },
    { english: "She took her cookies to a local grocery store.", chinese: "她把饼干带到当地一家食品杂货店。", answers: ["to"] },
    { english: "Right after tasting them, the store decided to sell Divitto's cookies.", chinese: "品尝之后，这家店立刻决定出售 Divitto 的饼干。", answers: ["them"] },
    { english: "Golden Goose Market became Divitto's first customer.", chinese: "Golden Goose Market 成了 Divitto 的第一个客户。" },
    { english: "Later, a television station shared Divitto's story.", chinese: "后来，一家电视台分享了 Divitto 的故事。" },
    { english: "People loved hearing about how she didn't give up when faced with rejection.", chinese: "人们喜欢听她面对拒绝时没有放弃的故事。", answers: ["give up"] },
    { english: "Soon, more news stations shared her story and Divitto's cookies became very popular.", chinese: "很快，更多新闻台分享了她的故事，Divitto 的饼干变得非常受欢迎。", answers: ["popular"] },
    { english: "Divitto had to hire more people to keep up with the need.", chinese: "Divitto 不得不雇更多人来满足需求。" },
    { english: "Divitto doesn't just want to sell cookies.", chinese: "Divitto 不只是想卖饼干。", answers: ["just"] },
    { english: "She has a larger dream to hire as many people with disabilities as possible.", chinese: "她有一个更大的梦想：尽可能多地雇用残疾人。", answers: ["dream"] },
    { english: "Divitto also wants business owners to see the strengths and talents of people with disabilities.", chinese: "Divitto 还希望企业主看到残疾人的优势和才能。", answers: ["talents"] },
    { english: "They can work but cannot find jobs.", chinese: "他们能够工作，却找不到工作。" },
    { english: "Even when they do get jobs, they are often paid less than the minimum wage.", chinese: "即使他们确实找到了工作，也经常被支付低于最低工资的薪水。", answers: ["often"] },
    { english: "Divitto wants to change this.", chinese: "Divitto 想改变这一点。", answers: ["change"] }
  ]
};

const unexpectedSpringPicnic = {
  id: "unexpected-spring-picnic",
  title: "意外的春日野餐",
  englishTitle: "An Unexpected Spring Picnic",
  level: "初二/初三",
  difficulty: "中等",
  source: "2026中考考前前冲刺卷",
  tags: ["家庭生活", "情感态度", "逻辑推理", "上下文复现", "哲理故事"],
  available: true,
  firstSentence: "My family had never done anything different before.",
  lastSentence: "Keep your eyes open, and you might find joy right under your nose!",
  tone: "转折变化",
  toneReason: "文章从一家人遭遇连串意外的烦躁与失望开始，转向在自然中收获惊喜与哲理的积极心态。",
  passage: [
    "My family had never done anything different before. So when Aunt Jen invited us to her ",
    { blank: 1 },
    " spring farm party, I was really excited. I decided to make the day special, so I baked cupcakes for the party and decorated them to look like soft sheep by using some ",
    { blank: 2 },
    ". “Yummy!” My sister Indi said with a laugh, quickly stealing a candy. “That’s enough, Indi! I need those for my sheep!” “Do real sheep eat these?” “They’re just for making the cupcakes look ",
    { blank: 3 },
    "!” I laughed too. Soon, Indi and my brother Tex joined in. They ",
    { blank: 4 },
    " so many candies that their cupcakes looked more like strange animals than my sheep. “Time to go now,” Dad announced. But things didn’t go ",
    { blank: 5 },
    " as usual. First, Tex couldn’t find his shoes. Then Mom realized she’d ",
    { blank: 6 },
    " her wallet at home. Halfway to Aunt Jen’s, Indi suddenly needed a bathroom. We had to take a long way to find one. Dad then ",
    { blank: 7 },
    " a new back road, but it only led us farther away. As we were in the middle of nowhere, our car started making a strange noise and ",
    { blank: 8 },
    ". “Help won’t come for at least an hour,” Mom said, sounding ",
    { blank: 9 },
    ". “Now we’ll ",
    { blank: 10 },
    " the whole party!” Tex complained. Dad smiled and pointed to a field full of colorful flowers. “Why not have our own picnic here?” At first, we weren’t excited about it, but as we ",
    { blank: 11 },
    " the blanket and started eating, something amazing happened. A huge butterfly gently landed on Indi’s knee. Nearby, two small rabbits ",
    { blank: 12 },
    " across the grass, happily eating. Suddenly, we heard a loud rustling, and hundreds of birds shot up from the trees, flying into the sky in huge circles above us. “Wow!” I cried. “It’s like ",
    { blank: 13 },
    "!” “Migration (迁徙) season,” Dad said. “These birds travel through California every spring—millions of them!” We never made it to Aunt Jen’s farm, ",
    { blank: 14 },
    " that didn’t matter. Sitting in that field, enjoying my cupcakes under the open sky, I understood something important: when things don’t work out, disappointments (失望) may ",
    { blank: 15 },
    " unexpected wonders. Keep your eyes open, and you might find joy right under your nose!"
  ],
  questions: [
    q(1, ["daily", "weekly", "monthly", "yearly"], "yearly", "形容词副词", "逻辑推理 / 常识", ["spring farm party", "every spring"], "根据下文 every spring 和春季农场派对的语境，这类活动通常是一年一次。"),
    q(2, ["candies", "bananas", "tomatoes", "flowers"], "candies", "名词", "上下文复现", ["stealing a candy", "so many candies"], "下一句出现 candy，后文又有 so many candies，是明显原词复现。"),
    q(3, ["fresh", "cute", "clear", "sweet"], "cute", "形容词副词", "逻辑推理", ["look like soft sheep"], "把纸杯蛋糕装饰成毛茸茸的小羊，是为了让它们看起来可爱。"),
    q(4, ["bought", "made", "added", "ordered"], "added", "动词", "逻辑推理 / 动作连贯", ["joined in", "so many candies"], "弟弟妹妹加入制作，往蛋糕上添加了太多糖果。"),
    q(5, ["badly", "freely", "quietly", "smoothly"], "smoothly", "形容词副词", "固定搭配 / 逻辑推理", ["didn't go ___ as usual", "First", "Then"], "后文列举连串意外，说明事情没有顺利进行。", "go smoothly", "动词短语", "动词(go) + 副词(smoothly)"),
    q(6, ["found", "left", "brought", "checked"], "left", "动词", "固定搭配 / 词汇辨析", ["her wallet at home"], "表示把某物落在家里用 leave sth. at home，过去式为 left。", "leave sth. at home", "动词短语", "动词(leave) + 名词(wallet) + 介词短语(at home)"),
    q(7, ["tried", "marked", "mentioned", "repaired"], "tried", "动词", "逻辑推理", ["a new back road"], "为了赶路找近道，爸爸尝试走了一条新的小路。"),
    q(8, ["appeared", "arrived", "stopped", "dropped"], "stopped", "动词", "逻辑推理", ["making a strange noise", "Help won't come for at least an hour"], "车发出奇怪噪音，后面需要等救援，说明车停下或抛锚了。"),
    q(9, ["excited", "tired", "relaxed", "surprised"], "tired", "形容词副词", "情感态度", ["Help won't come for at least an hour", "complained"], "经历连串意外又要等救援，妈妈的声音应是疲惫的。"),
    q(10, ["change", "organize", "share", "miss"], "miss", "动词", "逻辑推理", ["complained", "won't come for at least an hour"], "车坏了要等很久，Tex 抱怨他们会错过整个派对。"),
    q(11, ["spread out", "handed out", "cut out", "carried out"], "spread out", "动词短语", "固定搭配", ["the blanket", "picnic"], "野餐时要铺开毯子，spread out the blanket 符合语境。", "spread out", "动宾搭配", "动词短语(spread out) + 名词(the blanket)"),
    q(12, ["rode", "flew", "jumped", "climbed"], "jumped", "动词", "常识", ["two small rabbits"], "兔子在草地上的典型动作是跳跃。"),
    q(13, ["wind", "magic", "music", "fog"], "magic", "名词", "情感态度 / 逻辑推理", ["Wow", "something amazing happened"], "蝴蝶、兔子和成群飞鸟构成奇妙景象，像魔法一样。"),
    q(14, ["and", "or", "but", "so"], "but", "连词逻辑", "逻辑推理", ["never made it", "that didn't matter"], "没去成农场是遗憾，后面说不重要了，是转折关系。"),
    q(15, ["hide", "lose", "forget"], "hide", "动词", "逻辑推理 / 主旨升华", ["when things don't work out", "unexpected wonders"], "全文表达失望中可能隐藏着意想不到的惊喜，hide 符合主旨。")
  ],
  verifySentences: [
    { english: "My family had never done anything different before.", chinese: "我的家人以前从未做过什么不同寻常的事情。" },
    { english: "So when Aunt Jen invited us to her yearly spring farm party, I was really excited.", chinese: "所以当 Jen 阿姨邀请我们参加她每年的春季农场派对时，我真的很兴奋。", answers: ["yearly"] },
    { english: "I decided to make the day special, so I baked cupcakes for the party and decorated them to look like soft sheep by using some candies.", chinese: "我决定让这一天特别一些，于是为派对烤了纸杯蛋糕，并用一些糖果把它们装饰成柔软的小羊。", answers: ["candies"] },
    { english: "They’re just for making the cupcakes look cute!", chinese: "它们只是为了让纸杯蛋糕看起来可爱！", answers: ["cute"] },
    { english: "Soon, Indi and my brother Tex joined in.", chinese: "很快，Indi 和我的弟弟 Tex 也加入进来。" },
    { english: "They added so many candies that their cupcakes looked more like strange animals than my sheep.", chinese: "他们加了太多糖果，以至于他们的纸杯蛋糕看起来更像奇怪的动物，而不是我的小羊。", answers: ["added"] },
    { english: "Time to go now, Dad announced.", chinese: "爸爸宣布：“现在该出发了。”" },
    { english: "But things didn’t go smoothly as usual.", chinese: "但事情并没有像往常一样顺利。", answers: ["smoothly"] },
    { english: "First, Tex couldn’t find his shoes.", chinese: "首先，Tex 找不到他的鞋子。" },
    { english: "Then Mom realized she’d left her wallet at home.", chinese: "然后妈妈意识到她把钱包落在家里了。", answers: ["left"] },
    { english: "Dad then tried a new back road, but it only led us farther away.", chinese: "接着爸爸尝试走一条新的后路，但它只把我们带得更远。", answers: ["tried"] },
    { english: "As we were in the middle of nowhere, our car started making a strange noise and stopped.", chinese: "当我们身处荒郊野外时，车开始发出奇怪的声音，然后停了下来。", answers: ["stopped"] },
    { english: "Help won’t come for at least an hour, Mom said, sounding tired.", chinese: "妈妈听起来很疲惫地说：“救援至少一个小时后才会来。”", answers: ["tired"] },
    { english: "Now we’ll miss the whole party!", chinese: "现在我们要错过整个派对了！", answers: ["miss"] },
    { english: "Dad smiled and pointed to a field full of colorful flowers.", chinese: "爸爸笑着指向一片开满彩色花朵的田野。" },
    { english: "Why not have our own picnic here?", chinese: "为什么不在这里举行我们自己的野餐呢？" },
    { english: "At first, we weren’t excited about it, but as we spread out the blanket and started eating, something amazing happened.", chinese: "起初我们对此并不兴奋，但当我们铺开毯子开始吃东西时，神奇的事情发生了。", answers: ["spread out"] },
    { english: "A huge butterfly gently landed on Indi’s knee.", chinese: "一只巨大的蝴蝶轻轻落在 Indi 的膝盖上。" },
    { english: "Nearby, two small rabbits jumped across the grass, happily eating.", chinese: "附近，两只小兔子跳过草地，开心地吃着东西。", answers: ["jumped"] },
    { english: "Suddenly, we heard a loud rustling, and hundreds of birds shot up from the trees, flying into the sky in huge circles above us.", chinese: "突然，我们听到一阵响亮的沙沙声，成百上千只鸟从树上飞起，在我们上方的天空中盘旋成巨大的圆圈。" },
    { english: "Wow! It’s like magic!", chinese: "哇！这就像魔法一样！", answers: ["magic"] },
    { english: "We never made it to Aunt Jen’s farm, but that didn’t matter.", chinese: "我们最终没能到 Jen 阿姨的农场，但那已经不重要了。", answers: ["but"] },
    { english: "Sitting in that field, enjoying my cupcakes under the open sky, I understood something important.", chinese: "坐在那片田野里，在开阔的天空下享用我的纸杯蛋糕时，我明白了一件重要的事。" },
    { english: "When things don’t work out, disappointments may hide unexpected wonders.", chinese: "当事情不如意时，失望中也可能隐藏着意想不到的奇迹。", answers: ["hide"] },
    { english: "Keep your eyes open, and you might find joy right under your nose!", chinese: "睁大眼睛，你也许会发现快乐就在眼前！" }
  ]
};

const refrigeratorMagnets = {
  id: "refrigerator-magnets",
  title: "收集冰箱贴的乐趣",
  englishTitle: "Collecting Refrigerator Magnets",
  level: "8年级",
  difficulty: "中等",
  tags: ["兴趣爱好", "逻辑推理", "上下文复现", "固定搭配"],
  available: true,
  firstSentence: "Do you like collecting refrigerator magnets? I do.",
  lastSentence: "They make my life much more interesting.",
  tone: "积极",
  toneReason: "文章围绕作者收集冰箱贴的爱好展开，充满热爱、乐趣、旅行回忆和朋友情谊。",
  passage: [
    "Do you like collecting refrigerator magnets (冰箱贴)? I do. I ",
    { blank: 1 },
    " the hobby a few years ago. I stick every single one of them on my refrigerator door, and they look so ",
    { blank: 2 },
    " together. Every time I open the refrigerator, the magnets ",
    { blank: 3 },
    " me of my trips around the world. I bought many of them during my ",
    { blank: 4 },
    ", and some are gifts from friends. They brought these magnets back from their holidays to ",
    { blank: 5 },
    " their exciting travels with me. Unlike local snacks—I eat them up quickly and ",
    { blank: 6 },
    " forget, these magnets stay with me for years. My magnet collection is really fun. The magnets are ",
    { blank: 7 },
    " and come in all shapes (形状) and sizes. Some of them show national ",
    { blank: 8 },
    ". For example, you can see a yellow Thai elephant, England’s red bus, and the Great Wall of China. Others are cute things like Mickey Mouse and sunflowers. Although these refrigerator magnets are small, they are special to me. I always feel a great sense of ",
    { blank: 9 },
    " as my collection grows. Most ",
    { blank: 10 },
    ", they hold the happy memories of my travels and my friends. They make my life much more interesting."
  ],
  questions: [
    q(1, ["gave up", "took up", "put up", "cleaned up"], "took up", "动词短语", "固定搭配 / 逻辑推理", ["I do"], "前文 I do 表明作者喜欢收集冰箱贴，所以几年前开始培养了这项爱好。", "take up a hobby", "动词短语", "动词(take) + 副词(up) + 名词(a hobby)"),
    q(2, ["awful", "strange", "lively", "common"], "lively", "形容词副词", "情感态度", ["like", "fun"], "全文基调积极，作者热爱收藏，冰箱贴贴在一起看起来应是生动活泼的。"),
    q(3, ["remind", "care", "break", "make"], "remind", "动词", "固定搭配", ["___ me of my trips"], "冰箱贴让作者想起世界各地的旅行，remind sb. of sth. 是固定搭配。", "remind sb. of sth.", "动词短语", "动词(remind) + 代词(sb.) + 介词(of) + 名词(sth.)"),
    q(4, ["breaks", "stay", "journeys", "training"], "journeys", "名词", "上下文复现", ["my trips around the world", "exciting travels"], "trips、travels、journeys 都指旅行，构成同义词复现。"),
    q(5, ["mix", "fill", "connect", "share"], "share", "动词", "固定搭配 / 逻辑推理", ["their exciting travels with me"], "朋友带回冰箱贴，是为了和作者分享他们精彩的旅行经历。", "share sth. with sb.", "动词短语", "动词(share) + 名词短语(their exciting travels) + 介词(with) + 代词(me)"),
    q(6, ["soon", "only", "either", "rather"], "soon", "形容词副词", "逻辑推理 / 并列关系", ["quickly"], "小吃很快被吃完，也会很快被忘记，soon 与 quickly 在节奏上呼应。"),
    q(7, ["boring", "soft", "scary", "colourful"], "colourful", "形容词副词", "上下文复现 / 常识", ["yellow Thai elephant", "England’s red bus"], "下文列举黄色大象、红色巴士等颜色线索，说明冰箱贴五颜六色。"),
    q(8, ["rules", "secrets", "symbols", "problems"], "symbols", "名词", "逻辑推理 / 常识", ["Thai elephant", "England’s red bus", "the Great Wall of China"], "泰国大象、英国红巴、中国长城都是国家象征。"),
    q(9, ["humour", "achievement", "direction", "fear"], "achievement", "名词", "情感态度 / 固定搭配", ["special to me", "collection grows"], "收藏不断增加会带来正向的成就感。", "a sense of achievement", "名词搭配", "名词(sense) + 介词(of) + 名词(achievement)"),
    q(10, ["quickly", "easily", "importantly", "seriously"], "importantly", "形容词副词", "固定搭配 / 主旨升华", ["they hold the happy memories"], "进入总结升华，最重要的是冰箱贴承载旅行和朋友的快乐回忆。", "most importantly", "副词搭配", "副词最高级(most) + 副词(importantly)")
  ],
  verifySentences: [
    { english: "Do you like collecting refrigerator magnets? I do.", chinese: "你喜欢收集冰箱贴吗？我喜欢。" },
    { english: "I took up the hobby a few years ago.", chinese: "几年前我开始培养这项爱好。", answers: ["took up"] },
    { english: "I stick every single one of them on my refrigerator door, and they look so lively together.", chinese: "我把每一个冰箱贴都贴在冰箱门上，它们放在一起看起来很生动。", answers: ["lively"] },
    { english: "Every time I open the refrigerator, the magnets remind me of my trips around the world.", chinese: "每次我打开冰箱，这些冰箱贴都会让我想起我的世界旅行。", answers: ["remind"] },
    { english: "I bought many of them during my journeys, and some are gifts from friends.", chinese: "很多冰箱贴是我在旅途中买的，还有一些是朋友送的礼物。", answers: ["journeys"] },
    { english: "They brought these magnets back from their holidays to share their exciting travels with me.", chinese: "他们从假期中带回这些冰箱贴，和我分享他们精彩的旅行。", answers: ["share"] },
    { english: "Unlike local snacks, I eat them up quickly and soon forget, these magnets stay with me for years.", chinese: "不像当地小吃，我很快吃完也很快忘记，这些冰箱贴会陪伴我多年。", answers: ["soon"] },
    { english: "My magnet collection is really fun.", chinese: "我的冰箱贴收藏真的很有趣。" },
    { english: "The magnets are colourful and come in all shapes and sizes.", chinese: "这些冰箱贴五颜六色，形状和大小各不相同。", answers: ["colourful"] },
    { english: "Some of them show national symbols.", chinese: "其中一些展示了国家象征。", answers: ["symbols"] },
    { english: "For example, you can see a yellow Thai elephant, England's red bus, and the Great Wall of China.", chinese: "例如，你可以看到黄色的泰国大象、英国红色巴士和中国长城。" },
    { english: "Others are cute things like Mickey Mouse and sunflowers.", chinese: "另一些是米老鼠和向日葵这样的可爱事物。" },
    { english: "Although these refrigerator magnets are small, they are special to me.", chinese: "虽然这些冰箱贴很小，但它们对我来说很特别。" },
    { english: "I always feel a great sense of achievement as my collection grows.", chinese: "随着收藏越来越多，我总会感到强烈的成就感。", answers: ["achievement"] },
    { english: "Most importantly, they hold the happy memories of my travels and my friends.", chinese: "最重要的是，它们承载着我旅行和朋友的快乐回忆。", answers: ["importantly"] },
    { english: "They make my life much more interesting.", chinese: "它们让我的生活更加有趣。" }
  ]
};

const braveBoyHouseFire = {
  id: "brave-boy-house-fire",
  title: "火海救妹的英勇少年",
  englishTitle: "The Brave Boy in a House Fire",
  level: "8年级",
  difficulty: "中等",
  tags: ["人物故事", "情感态度", "逻辑推理", "上下文复现"],
  available: true,
  firstSentence: "In Wisconsin, a teenager named Briar became famous for his quick actions in an accident.",
  lastSentence: "They still have each other. That’s the silver lining of the accident,” a man shared his opinion on the Internet.",
  tone: "转折变化",
  toneReason: "文章从火灾惊险和失去家园的困境开始，转向 Briar 英勇救人、全家平安以及社会互助的温暖积极。",
  passage: [
    "In Wisconsin, a teenager named Briar became famous for his quick actions in an accident. He saved his four sisters from a house ",
    { blank: 1 },
    ". On Labor Day, Briar’s parents Kelly and Jay Omar went outside working, leaving their five children at home. The youngest kid was just 6 months old. Before long, the ",
    { blank: 2 },
    " smelled smoke. Briar is the oldest kid. He told the reporter, “One of my sisters just said the house was really smoky. Then we looked around ",
    { blank: 3 },
    " surprise and found that the playpen (幼儿围栏) was on fire. My ",
    { blank: 4 },
    " thought was to get my four sisters out of the house. So I acted quickly and helped my four sisters leave the ",
    { blank: 5 },
    " house.” After making sure his sisters were all safe, the 13-year-old boy tried ",
    { blank: 6 },
    " the fire in the hope of saving their home. ",
    { blank: 7 },
    " the fire was burning strongly at that time. ",
    { blank: 8 },
    ", the family finally lost their home in the fire. “It was a ",
    { blank: 9 },
    " situation,” Kelly told the reporter. “If my son had not taken actions like that, I would have been the ",
    { blank: 10 },
    " person in the world.” The family ",
    { blank: 11 },
    " all the things in the fire. Some friends of the family created a Go-Fund Me account (账户). They ",
    { blank: 12 },
    " they could raise some money for the Omar family. Then the family could buy some clothes and food, and live in a new home together. There was ",
    { blank: 13 },
    " $7,000 in the account on a Tuesday afternoon. The family were really ",
    { blank: 14 },
    " for what those kind people did. “Everyone should know the brave boy Briar. Very little of the house remained after the fire, but ",
    { blank: 15 },
    " got hurt. They still have each other. That’s the silver lining of the accident,” a man shared his opinion on the Internet."
  ],
  questions: [
    q(1, ["date", "fire", "storm", "pool"], "fire", "名词", "上下文复现", ["smelled smoke", "was on fire"], "下文出现 smoke 和 on fire，说明这是房屋火灾。", "house fire", "名词搭配", "名词(house) + 名词(fire)"),
    q(2, ["children", "neighbours", "friends", "parents"], "children", "名词", "逻辑推理 / 上下文复现", ["leaving their five children at home"], "父母外出，把五个孩子留在家里，闻到烟味的自然是孩子们。"),
    q(3, ["about", "for", "in", "against"], "in", "介词搭配", "固定搭配", ["looked around ___ surprise"], "发现家里有烟时，孩子们惊讶地四处张望。", "in surprise", "介词短语", "介词(in) + 名词(surprise)"),
    q(4, ["last", "third", "second", "first"], "first", "形容词副词", "逻辑推理", ["acted quickly"], "突发火灾时，Briar 的第一念头就是把四个妹妹带出房子。", "one's first thought", "名词搭配", "物主代词(My) + 序数词(first) + 名词(thought)"),
    q(5, ["new", "comfortable", "dangerous", "clean"], "dangerous", "形容词副词", "情感态度 / 逻辑推理", ["was on fire"], "房子正在着火，处境危及生命，因此是危险的。"),
    q(6, ["working out", "taking out", "putting out", "blowing out"], "putting out", "动词短语", "固定搭配 / 词汇辨析", ["the fire", "saving their home"], "确保妹妹安全后，他想扑灭大火来挽救家园。", "put out a fire", "动词短语", "动词(put) + 副词(out) + 名词(the fire)"),
    q(7, ["But", "So", "Or", "And"], "But", "连词逻辑", "逻辑推理", ["tried putting out", "burning strongly"], "男孩试图灭火，但火势很猛，前后构成转折。"),
    q(8, ["Loudly", "Unluckily", "Early", "Hardly"], "Unluckily", "形容词副词", "情感态度", ["lost their home in the fire"], "最终失去家园是负面结果，用 Unluckily。"),
    q(9, ["funny", "lively", "scary", "standard"], "scary", "形容词副词", "情感态度", ["lost their home", "fire"], "火灾威胁孩子生命并烧毁家园，这种情况很可怕。"),
    q(10, ["strongest", "happiest", "cleverest", "saddest"], "saddest", "形容词副词", "情感态度 / 逻辑推理", ["If my son had not taken actions"], "如果儿子没有救出妹妹，母亲会成为世界上最悲伤的人。"),
    q(11, ["caused", "lost", "checked", "failed"], "lost", "动词", "上下文复现", ["lost their home"], "前文说家人在火灾中失去家园，此处表示失去所有东西。"),
    q(12, ["asked", "wanted", "let", "hoped"], "hoped", "动词", "逻辑推理", ["created a Go-Fund Me account", "raise some money"], "朋友创建众筹账户，是希望为这个家庭筹钱。"),
    q(13, ["almost", "usually", "especially", "always"], "almost", "形容词副词", "语境辨析", ["$7,000 in the account"], "描述金额数量，表示账户里差不多有 7000 美元。"),
    q(14, ["ready", "curious", "thankful", "harmful"], "thankful", "形容词副词", "情感态度 / 固定搭配", ["for what those kind people did"], "家人得到善良人士帮助，自然非常感激。", "be thankful for...", "形容词搭配", "系动词(be) + 副词(really) + 形容词(thankful) + 介词(for)"),
    q(15, ["somebody", "everybody", "anybody", "nobody"], "nobody", "代词", "逻辑推理", ["Very little of the house remained", "but"], "房子几乎烧光，但幸运的是没人受伤，but 提示反转。")
  ],
  verifySentences: [
    { english: "In Wisconsin, a teenager named Briar became famous for his quick actions in an accident.", chinese: "在威斯康星州，一名叫 Briar 的少年因在事故中的迅速行动而出名。" },
    { english: "He saved his four sisters from a house fire.", chinese: "他从一场房屋火灾中救出了四个妹妹。", answers: ["fire"] },
    { english: "On Labor Day, Briar’s parents Kelly and Jay Omar went outside working, leaving their five children at home.", chinese: "劳动节那天，Briar 的父母 Kelly 和 Jay Omar 出去工作，把五个孩子留在家里。" },
    { english: "Before long, the children smelled smoke.", chinese: "不久，孩子们闻到了烟味。", answers: ["children"] },
    { english: "Then we looked around in surprise and found that the playpen was on fire.", chinese: "然后我们惊讶地四处看，发现幼儿围栏着火了。", answers: ["in"] },
    { english: "My first thought was to get my four sisters out of the house.", chinese: "我的第一想法就是把四个妹妹带出房子。", answers: ["first"] },
    { english: "So I acted quickly and helped my four sisters leave the dangerous house.", chinese: "所以我迅速行动，帮助四个妹妹离开危险的房子。", answers: ["dangerous"] },
    { english: "After making sure his sisters were all safe, the 13-year-old boy tried putting out the fire in the hope of saving their home.", chinese: "确认妹妹们都安全后，这个13岁的男孩试图扑灭大火，希望保住他们的家。", answers: ["putting out"] },
    { english: "But the fire was burning strongly at that time.", chinese: "但当时火势很猛。", answers: ["But"] },
    { english: "Unluckily, the family finally lost their home in the fire.", chinese: "不幸的是，这家人最终在火灾中失去了家园。", answers: ["Unluckily"] },
    { english: "It was a scary situation.", chinese: "那是一个可怕的情况。", answers: ["scary"] },
    { english: "If my son had not taken actions like that, I would have been the saddest person in the world.", chinese: "如果我的儿子没有那样采取行动，我会成为世界上最悲伤的人。", answers: ["saddest"] },
    { english: "The family lost all the things in the fire.", chinese: "这家人在火灾中失去了所有东西。", answers: ["lost"] },
    { english: "Some friends of the family created a Go-Fund Me account.", chinese: "这个家庭的一些朋友创建了一个众筹账户。" },
    { english: "They hoped they could raise some money for the Omar family.", chinese: "他们希望能为 Omar 一家筹集一些钱。", answers: ["hoped"] },
    { english: "There was almost $7,000 in the account on a Tuesday afternoon.", chinese: "到一个周二下午，账户里差不多有7000美元。", answers: ["almost"] },
    { english: "The family were really thankful for what those kind people did.", chinese: "这家人非常感激那些善良的人所做的一切。", answers: ["thankful"] },
    { english: "Very little of the house remained after the fire, but nobody got hurt.", chinese: "火灾后房子几乎所剩无几，但没有人受伤。", answers: ["nobody"] },
    { english: "They still have each other.", chinese: "他们仍然拥有彼此。" },
    { english: "That’s the silver lining of the accident.", chinese: "那就是这场事故中的一线希望。" }
  ]
};

const saltyJuiceLife = {
  id: "salty-juice-life",
  title: "咸果汁与生活的糖",
  englishTitle: "Salty Juice and the Sugar of Life",
  level: "8年级",
  difficulty: "中等",
  tags: ["校园生活", "人物情感", "哲理故事", "逻辑推理", "上下文复现"],
  available: true,
  firstSentence: "Jeff was quiet in class lately and always sat ____ without saying much.",
  lastSentence: "He liked this gift and thanked him.",
  tone: "转折变化",
  toneReason: "文章从 Jeff 因爷爷去世而悲伤沉默开始，转向在老师用咸果汁巧妙开导后理解生活真谛、积极释怀。",
  passage: [
    "Jeff was quiet in class lately and always sat ",
    { blank: 1 },
    " without saying much. Mr. Lee noticed this and asked him to come to his office, “I see you hardly talk to ",
    { blank: 2 },
    " these days. Why?” Jeff said, “My grandpa ",
    { blank: 3 },
    " three days ago. He taught me a lot and always cared about me. His death (死亡) makes me so upset.” After hearing that, Mr. Lee invited him to his house. After Jeff ",
    { blank: 4 },
    " the house, Mr. Lee gave him the gift he prepared-a glass of juice. But when Jeff drank it, the juice tasted too salty. Mr. Lee said he would pour it out. Jeff ",
    { blank: 5 },
    " him, “We can add a little more sugar so that it’ll be ",
    { blank: 6 },
    ".” Mr. Lee smiled, “This is the ",
    { blank: 7 },
    " for you. Compare the juice to your life. The salt in the juice is like the ",
    { blank: 8 },
    " experiences in our life. To make the juice taste better, we just need to add some sugar. Similarly, when we are facing something sad, we can ",
    { blank: 9 },
    " our life by adding some good experiences.” Jeff ",
    { blank: 10 },
    " what his teacher said. He liked this gift and thanked him."
  ],
  questions: [
    q(1, ["loudly", "finally", "easily", "alone"], "alone", "形容词副词", "逻辑推理 / 情感态度", ["quiet in class", "without saying much"], "Jeff 最近安静且不怎么说话，说明他常常独自坐着。"),
    q(2, ["anything", "somebody", "anybody", "everybody"], "anybody", "代词", "语法", ["hardly talk to"], "hardly 是否定意义副词，否定语境中表示任何人用 anybody。"),
    q(3, ["passed by", "got across", "went up", "passed away"], "passed away", "动词短语", "上下文复现 / 固定搭配", ["His death"], "下一句 His death 直接提示爷爷去世，pass away 表示去世。", "pass away", "动词短语", "动词(pass) + 副词(away)"),
    q(4, ["entered", "posed", "followed", "caught"], "entered", "动词", "逻辑推理 / 动作连贯", ["invited him to his house", "gave him the gift"], "老师邀请他到家里，Jeff 进入房子后老师才给礼物。"),
    q(5, ["stopped", "believed", "covered", "guided"], "stopped", "动词", "逻辑推理", ["would pour it out", "We can add a little more sugar"], "老师要倒掉果汁，Jeff 提出加糖解决，说明他阻止了老师。"),
    q(6, ["rich", "slow", "sweet", "warm"], "sweet", "形容词副词", "常识 / 逻辑推理", ["add a little more sugar"], "加糖的目的自然是让果汁变甜。"),
    q(7, ["difference", "present", "pressure", "decision"], "present", "名词", "上下文复现", ["gave him the gift", "liked this gift"], "上文和尾句都出现 gift，present 是 gift 的同义词复现。"),
    q(8, ["painful", "difficult", "surprising", "serious"], "painful", "形容词副词", "情感态度 / 上下文复现", ["death", "upset", "something sad"], "盐象征生活中痛苦的经历，对应爷爷去世带来的 upset 和 sad。"),
    q(9, ["compare", "organize", "improve", "promise"], "improve", "动词", "逻辑推理", ["make the juice taste better", "adding some good experiences"], "加糖能让果汁更好，加入美好经历也能改善生活。"),
    q(10, ["discussed", "understood", "advised", "hated"], "understood", "动词", "情感态度 / 逻辑推理", ["liked this gift and thanked him"], "Jeff 喜欢礼物并感谢老师，说明他理解了老师的话。")
  ],
  verifySentences: [
    { english: "Jeff was quiet in class lately and always sat alone without saying much.", chinese: "Jeff 最近在课堂上很安静，总是独自坐着，不怎么说话。", answers: ["alone"] },
    { english: "Mr. Lee noticed this and asked him to come to his office.", chinese: "Lee 老师注意到了这一点，让他到办公室来。" },
    { english: "I see you hardly talk to anybody these days.", chinese: "我发现你这些天几乎不和任何人说话。", answers: ["anybody"] },
    { english: "My grandpa passed away three days ago.", chinese: "我的爷爷三天前去世了。", answers: ["passed away"] },
    { english: "He taught me a lot and always cared about me.", chinese: "他教会我很多，也总是关心我。" },
    { english: "His death makes me so upset.", chinese: "他的去世让我非常难过。" },
    { english: "After hearing that, Mr. Lee invited him to his house.", chinese: "听到这些后，Lee 老师邀请他去自己家。" },
    { english: "After Jeff entered the house, Mr. Lee gave him the gift he prepared-a glass of juice.", chinese: "Jeff 进屋后，Lee 老师给了他准备好的礼物，一杯果汁。", answers: ["entered"] },
    { english: "But when Jeff drank it, the juice tasted too salty.", chinese: "但当 Jeff 喝它时，果汁尝起来太咸了。" },
    { english: "Mr. Lee said he would pour it out.", chinese: "Lee 老师说他要把它倒掉。" },
    { english: "Jeff stopped him.", chinese: "Jeff 阻止了他。", answers: ["stopped"] },
    { english: "We can add a little more sugar so that it’ll be sweet.", chinese: "我们可以再加一点糖，这样它就会变甜。", answers: ["sweet"] },
    { english: "Mr. Lee smiled, “This is the present for you.”", chinese: "Lee 老师笑着说：“这就是给你的礼物。”", answers: ["present"] },
    { english: "Compare the juice to your life.", chinese: "把这杯果汁和你的生活作比较。" },
    { english: "The salt in the juice is like the painful experiences in our life.", chinese: "果汁中的盐就像我们生活中痛苦的经历。", answers: ["painful"] },
    { english: "To make the juice taste better, we just need to add some sugar.", chinese: "为了让果汁味道更好，我们只需要加一些糖。" },
    { english: "Similarly, when we are facing something sad, we can improve our life by adding some good experiences.", chinese: "同样，当我们面对悲伤的事情时，可以通过增加一些美好经历来改善生活。", answers: ["improve"] },
    { english: "Jeff understood what his teacher said.", chinese: "Jeff 理解了老师说的话。", answers: ["understood"] },
    { english: "He liked this gift and thanked him.", chinese: "他喜欢这个礼物，并感谢了老师。" }
  ]
};

const climbingQomolangma = {
  id: "climbing-qomolangma",
  title: "攀登珠穆朗玛峰",
  englishTitle: "Climbing Qomolangma",
  level: "8年级",
  difficulty: "中等",
  tags: ["自然地理", "探索挑战", "语法考点", "固定搭配"],
  available: true,
  firstSentence: "Do you like climbing mountains? Have you ever ____ Qomolangma?",
  lastSentence: "It also shows that humans can sometimes be ____ than the forces of nature.",
  tone: "积极",
  toneReason: "文章先客观描述珠穆朗玛峰环境的恶劣，再升华为人类面对困难不屈不挠、永不放弃的积极精神。",
  passage: [
    "Do you like climbing mountains? Have you ever ",
    { blank: 1 },
    " Qomolangma? It is the ",
    { blank: 2 },
    " mountain in the world. The Himalayas are one of the most popular places for mountain climbing. The Himalayas run along ",
    { blank: 3 },
    " southwestern part of China. Of all the mountains, Qomolangma rises the highest and is the most famous. It is 8,844.43 meters high. So it is dangerous. It ",
    { blank: 4 },
    " with thick clouds and snow. Even more serious ",
    { blank: 5 },
    " include freezing weather conditions and heavy storms. It is very difficult to ",
    { blank: 6 },
    " air as you get near the top. The first people to reach the top were Tenzing Norgay and Edmund Hillary ",
    { blank: 7 },
    " May 29, 1953. Why do so many climbers risk their lives? One of the main reasons is that people want ",
    { blank: 8 },
    " themselves in the face of difficulties. The spirit of these climbers shows us that we should never give up ",
    { blank: 9 },
    " to achieve our dreams. It also shows that humans can sometimes be ",
    { blank: 10 },
    " than the forces of nature."
  ],
  questions: [
    q(1, ["hear of", "hearing of", "heard of", "heard from"], "heard of", "动词短语", "语法 / 固定搭配", ["Have you ever"], "Have you ever 后接过去分词，hear 的过去分词是 heard；hear of 表示听说。", "hear of", "动词短语", "动词(hear) + 介词(of)"),
    q(2, ["dangerousest", "danger", "more dangerous", "most dangerous"], "most dangerous", "形容词副词", "语法", ["the", "in the world"], "the 和 in the world 提示最高级，dangerous 是多音节形容词，最高级用 most dangerous。"),
    q(3, ["/", "the", "an", "a"], "the", "冠词", "语法", ["southwestern part of China"], "表示中国西南部这一特定地理部分，方位词前用 the。", "the + 方位词 + part of", "冠词用法", "定冠词(the) + 方位形容词(southwestern) + 名词(part)"),
    q(4, ["is covered", "covers", "covered", "to cover"], "is covered", "动词短语", "语法 / 固定搭配", ["It", "with thick clouds and snow"], "主语 Qomolangma 与 cover 是被动关系，be covered with 表示被覆盖。", "be covered with", "动词短语", "系动词(is) + 过去分词(covered) + 介词(with)"),
    q(5, ["difficulties", "difficult", "difficulty", "difficultys"], "difficulties", "名词", "语法 / 逻辑推理", ["include", "weather conditions and heavy storms"], "include 和后面多个困难提示这里用可数名词复数 difficulties。"),
    q(6, ["take up", "take in", "take out", "take off"], "take in", "动词短语", "固定搭配 / 常识", ["air", "get near the top"], "接近山顶时空气稀薄，呼吸空气就是 take in air。", "take in", "动词短语", "动词(take) + 副词(in)"),
    q(7, ["in", "at", "of", "on"], "on", "介词搭配", "语法", ["May 29, 1953"], "具体到某年某月某日时用介词 on。", "on + 具体某一天", "介词用法", "介词(on) + 具体日期"),
    q(8, ["challenge", "to challenge", "challenging", "challenged"], "to challenge", "动词", "语法 / 固定搭配", ["want ___"], "want 后接不定式，want to do sth. 表示想做某事。", "want to do sth.", "固定句型", "动词(want) + 不定式(to challenge)"),
    q(9, ["trying", "try", "to try", "tries"], "trying", "动词", "语法 / 固定搭配", ["give up ___"], "give up 后接动名词 doing，表示放弃做某事。", "give up doing sth.", "固定句型", "动词短语(give up) + 动名词(trying)"),
    q(10, ["strong", "more strong", "strongest", "stronger"], "stronger", "形容词副词", "语法", ["than"], "than 提示比较级，strong 的比较级是 stronger。")
  ],
  verifySentences: [
    { english: "Do you like climbing mountains?", chinese: "你喜欢爬山吗？" },
    { english: "Have you ever heard of Qomolangma?", chinese: "你曾经听说过珠穆朗玛峰吗？", answers: ["heard of"] },
    { english: "It is the most dangerous mountain in the world.", chinese: "它是世界上最危险的山。", answers: ["most dangerous"] },
    { english: "The Himalayas are one of the most popular places for mountain climbing.", chinese: "喜马拉雅山脉是最受欢迎的登山地点之一。" },
    { english: "The Himalayas run along the southwestern part of China.", chinese: "喜马拉雅山脉沿着中国西南部延伸。", answers: ["the"] },
    { english: "Of all the mountains, Qomolangma rises the highest and is the most famous.", chinese: "在所有山峰中，珠穆朗玛峰最高，也最著名。" },
    { english: "It is 8,844.43 meters high.", chinese: "它高8844.43米。" },
    { english: "So it is dangerous.", chinese: "所以它很危险。" },
    { english: "It is covered with thick clouds and snow.", chinese: "它被厚厚的云层和积雪覆盖。", answers: ["is covered"] },
    { english: "Even more serious difficulties include freezing weather conditions and heavy storms.", chinese: "更严重的困难包括严寒天气和暴风雪。", answers: ["difficulties"] },
    { english: "It is very difficult to take in air as you get near the top.", chinese: "当你接近山顶时，吸入空气会非常困难。", answers: ["take in"] },
    { english: "The first people to reach the top were Tenzing Norgay and Edmund Hillary on May 29, 1953.", chinese: "最早登顶的人是 Tenzing Norgay 和 Edmund Hillary，时间是1953年5月29日。", answers: ["on"] },
    { english: "Why do so many climbers risk their lives?", chinese: "为什么这么多登山者冒着生命危险？" },
    { english: "One of the main reasons is that people want to challenge themselves in the face of difficulties.", chinese: "主要原因之一是人们想在困难面前挑战自己。", answers: ["to challenge"] },
    { english: "The spirit of these climbers shows us that we should never give up trying to achieve our dreams.", chinese: "这些登山者的精神告诉我们，为了实现梦想，我们永远不应该放弃尝试。", answers: ["trying"] },
    { english: "It also shows that humans can sometimes be stronger than the forces of nature.", chinese: "它也表明，人类有时可以比自然的力量更强大。", answers: ["stronger"] }
  ]
};

const markelaBeekeepingDream = {
  id: "markela-beekeeping-dream",
  title: "气候灾害下的养蜂梦",
  englishTitle: "Markela's Beekeeping Dream",
  level: "8年级",
  difficulty: "中等",
  tags: ["自然环境", "逻辑推理", "上下文复现", "因果关系", "词汇辨析"],
  available: true,
  firstSentence: "As a member of a family of beekeepers, 11-year-old Markela is also good at keeping bees.",
  lastSentence: "Her dream may not come true, and she needs to find another way out.",
  tone: "消极",
  toneReason: "文章揭示极端气候灾害给人类生活和个人梦想带来的沉重打击，整体基调担忧、无奈而沉重。",
  passage: [
    "As a member of a family of beekeepers, 11-year-old Markela is also good at keeping bees. She helps her grandfather ",
    { blank: 1 },
    " the bees every weekend. She dreams of becoming a beekeeper, but the terrible weather makes her ",
    { blank: 2 },
    " that her dream is hard to come true. In her country, terrible weather happens much more often than before. Long-lasting ",
    { blank: 3 },
    " means there are fewer rainy days in summer. Together with the dry weather, the temperatures there ",
    { blank: 4 },
    " to a high level. Last June and July were the ",
    { blank: 5 },
    " in history. The hot and dry weather made plants in the forests catch fire easily. With strong winds, wildfires spread (蔓延) quickly. Few flowers survived after the fires, ",
    { blank: 6 },
    " the amount (数量) of honey fell a lot. Wildfires also ",
    { blank: 7 },
    " many other problems. Because of the fires, a large number of people lost their houses and even their lives. Thousands of them had to leave their homes for ",
    { blank: 8 },
    " places. Markela and her family don’t move away. However, they are worried that a fire could ",
    { blank: 9 },
    " happen to them because they live close to the forest. Sadly, a ",
    { blank: 10 },
    " says that children like Markela will experience three times more climate disasters than their grandparents. Markela has to face this fact. Her dream may not come true, and she needs to find another way out."
  ],
  questions: [
    q(1, ["wake up", "look after", "deal with", "search for"], "look after", "动词短语", "逻辑推理 / 常识", ["family of beekeepers", "good at keeping bees"], "作为养蜂家庭的一员，她周末帮助爷爷照顾蜜蜂。", "look after", "动词短语", "动词(look) + 介词(after)"),
    q(2, ["interview", "explain", "realize", "develop"], "realize", "动词", "逻辑推理 / 词汇辨析", ["terrible weather makes her"], "恶劣天气让她意识到自己的梦想很难实现。"),
    q(3, ["typhoon", "snowstorm", "earthquake", "drought"], "drought", "名词", "因果推理 / 上下文复现", ["fewer rainy days in summer", "dry weather"], "雨天减少和干燥天气直接指向干旱。"),
    q(4, ["rise", "fall", "raise", "add"], "rise", "动词", "逻辑推理 / 词汇辨析", ["dry weather", "high level"], "干旱伴随气温上升，rise 是不及物动词，表示温度自己升高。"),
    q(5, ["coolest", "shortest", "longest", "hottest"], "hottest", "形容词副词", "上下文复现", ["hot and dry weather"], "下句直接出现 hot and dry weather，反推六七月是历史上最热的。"),
    q(6, ["so", "but", "if", "though"], "so", "连词逻辑", "逻辑推理", ["Few flowers survived", "the amount of honey fell a lot"], "花少是原因，蜂蜜数量下降是结果，用 so。"),
    q(7, ["accepted", "caused", "rescued", "answered"], "caused", "动词", "固定搭配 / 逻辑推理", ["many other problems"], "野火还造成许多其他问题，cause problems 是自然搭配。", "cause problems", "动宾搭配", "动词(cause) + 名词(problems)"),
    q(8, ["darker", "safer", "quieter", "cleaner"], "safer", "形容词副词", "逻辑推理 / 常识", ["lost their houses", "leave their homes"], "房屋被毁、生命受威胁，人们离开家是去更安全的地方。"),
    q(9, ["hardly", "actually", "slowly", "possibly"], "possibly", "形容词副词", "逻辑推理 / 情感态度", ["worried", "could", "close to the forest"], "住得靠近森林，所以担心火灾可能发生在他们身上。"),
    q(10, ["postcard", "rule", "report", "standard"], "report", "名词", "常识 / 语境推理", ["says that children like Markela will experience three times more climate disasters"], "关于未来气候灾难的正式数据和预测通常来自报告。", "A report says...", "名词搭配", "冠词(A) + 名词(report) + 动词(says)")
  ],
  verifySentences: [
    { english: "As a member of a family of beekeepers, 11-year-old Markela is also good at keeping bees.", chinese: "作为养蜂家庭的一员，11岁的 Markela 也擅长养蜂。" },
    { english: "She helps her grandfather look after the bees every weekend.", chinese: "她每个周末帮助爷爷照顾蜜蜂。", answers: ["look after"] },
    { english: "She dreams of becoming a beekeeper, but the terrible weather makes her realize that her dream is hard to come true.", chinese: "她梦想成为一名养蜂人，但恶劣天气让她意识到自己的梦想很难实现。", answers: ["realize"] },
    { english: "In her country, terrible weather happens much more often than before.", chinese: "在她的国家，恶劣天气比以前更频繁地发生。" },
    { english: "Long-lasting drought means there are fewer rainy days in summer.", chinese: "长期干旱意味着夏天的雨天更少。", answers: ["drought"] },
    { english: "Together with the dry weather, the temperatures there rise to a high level.", chinese: "伴随着干燥的天气，那里的气温升到了很高的水平。", answers: ["rise"] },
    { english: "Last June and July were the hottest in history.", chinese: "去年六月和七月是历史上最热的月份。", answers: ["hottest"] },
    { english: "The hot and dry weather made plants in the forests catch fire easily.", chinese: "炎热干燥的天气使森林中的植物容易着火。" },
    { english: "With strong winds, wildfires spread quickly.", chinese: "在强风作用下，野火迅速蔓延。" },
    { english: "Few flowers survived after the fires, so the amount of honey fell a lot.", chinese: "火灾后很少有花存活下来，所以蜂蜜的数量大幅下降。", answers: ["so"] },
    { english: "Wildfires also caused many other problems.", chinese: "野火还造成了许多其他问题。", answers: ["caused"] },
    { english: "Because of the fires, a large number of people lost their houses and even their lives.", chinese: "由于火灾，许多人失去了房屋，甚至失去了生命。" },
    { english: "Thousands of them had to leave their homes for safer places.", chinese: "成千上万人不得不离开家去更安全的地方。", answers: ["safer"] },
    { english: "Markela and her family don’t move away.", chinese: "Markela 和她的家人没有搬走。" },
    { english: "However, they are worried that a fire could possibly happen to them because they live close to the forest.", chinese: "然而，他们担心火灾也可能发生在他们身上，因为他们住得离森林很近。", answers: ["possibly"] },
    { english: "Sadly, a report says that children like Markela will experience three times more climate disasters than their grandparents.", chinese: "令人难过的是，一份报告称，像 Markela 这样的孩子将经历比祖辈多三倍的气候灾害。", answers: ["report"] },
    { english: "Markela has to face this fact.", chinese: "Markela 不得不面对这个事实。" },
    { english: "Her dream may not come true, and she needs to find another way out.", chinese: "她的梦想可能无法实现，她需要寻找另一条出路。" }
  ]
};

const cinemaRules = {
  id: "cinema-rules",
  title: "电影院的规则",
  englishTitle: "Rules in the Cinema",
  level: "初阶",
  difficulty: "简单",
  tags: ["校园生活", "逻辑推理", "常识推断", "上下文复现", "固定搭配"],
  available: true,
  firstSentence: "Hello, everyone! I’m Molly, a middle school student.",
  lastSentence: "Does the cinema you go to have any ____? What are they?",
  tone: "转折变化",
  toneReason: "文章先写 Molly 觉得电影院规则无聊、不喜欢这些规则，随后转向理解规则能让大家共同享受生活、创造更好的环境，情感走向由消极转为积极。",
  passage: [
    "Hello, everyone! I’m Molly, a middle school student. I don’t know whether (是否) you like watching movies, ",
    { blank: 1 },
    " I do. I love watching movies because it helps me ",
    { blank: 2 },
    ". There is a cinema near ",
    { blank: 3 },
    " home and I often go there. It is big and there are a lot of movies to ",
    { blank: 4 },
    " every day. But I ",
    { blank: 5 },
    " follow lots of rules. Let me ",
    { blank: 6 },
    " you some of them. When I go into the cinema, I have to ",
    { blank: 7 },
    " my ticket. I can’t bring any food or drinks to the cinema, so I ",
    { blank: 8 },
    " buy anything outside the cinema. I can’t take ",
    { blank: 9 },
    " in the cinema. I can’t ",
    { blank: 10 },
    " my phone either. If I see a 3D movie, I should get 3D glasses. And if I break the ",
    { blank: 11 },
    ", I should pay for them. I don’t like these rules because I think they are ",
    { blank: 12 },
    ". But I know without rules, we can’t enjoy ",
    { blank: 13 },
    " together. By following rules, we help create a better ",
    { blank: 14 },
    " for everyone to live in. Does the cinema you go to have any ",
    { blank: 15 },
    "? What are they?"
  ],
  questions: [
    q(1, ["but", "and", "or", "so"], "but", "连词逻辑", "逻辑推理", ["don't know whether", "I do"], "前半句说不知道你是否喜欢，后半句明确说我喜欢，前后形成转折关系，用 but。"),
    q(2, ["play", "sleep", "relax", "dream"], "relax", "动词", "常识 / 逻辑推理", ["love watching movies"], "看电影是一种娱乐活动，通常能帮助人放松，所以选 relax。"),
    q(3, ["your", "her", "my", "his"], "my", "代词", "逻辑推理 / 语法", ["I often go there"], "全文是 Molly 的第一人称自述，电影院在我的家附近，用 my。"),
    q(4, ["see", "look", "take", "taste"], "see", "动词", "固定搭配 / 词汇辨析", ["movies"], "表示看电影可以用 see movies / watch movies，不能直接用 look movies。", "see movies", "动宾搭配", "动词(see) + 名词(movies)"),
    q(5, ["can", "can’t", "mustn’t", "must"], "must", "动词", "逻辑推理 / 语境辨析", ["lots of rules", "have to"], "面对电影院的很多规则，下文也多次出现 have to 和 can't，说明必须遵守规则。"),
    q(6, ["speak", "tell", "say", "talk"], "tell", "动词", "固定搭配 / 词汇辨析", ["___ you some of them"], "表示告诉某人某事，用 tell sb. sth.，其他三个说法不能直接接双宾语。", "tell sb. sth.", "动词短语", "动词(tell) + 间接宾语(you) + 直接宾语(some of them)"),
    q(7, ["write", "draw", "show", "make"], "show", "动词", "常识 / 逻辑推理", ["go into the cinema", "my ticket"], "进入电影院时需要向工作人员出示电影票，所以选 show。"),
    q(8, ["never", "usually", "always", "sometimes"], "never", "形容词副词", "逻辑推理", ["can't bring any food or drinks"], "既然不能把食物和饮料带进电影院，所以我从不在电影院外面买这些东西。"),
    q(9, ["books", "photos", "showers", "exercises"], "photos", "名词", "固定搭配 / 常识", ["take", "in the cinema"], "电影院常见规则是不能拍照，take photos 是固定搭配。", "take photos", "动宾搭配", "动词(take) + 名词(photos)"),
    q(10, ["buy", "love", "get", "use"], "use", "动词", "常识 / 逻辑推理", ["my phone either"], "观影时也不能使用手机，use one's phone 符合语境。", "use one's phone", "动宾搭配", "动词(use) + 名词(phone)"),
    q(11, ["guitars", "glasses", "bikes", "phones"], "glasses", "名词", "上下文复现", ["3D glasses"], "前一句已经出现 3D glasses，后文说弄坏了要赔偿，直接复现 glasses。"),
    q(12, ["fun", "boring", "relaxing", "difficult"], "boring", "形容词副词", "情感态度 / 逻辑推理", ["don't like these rules"], "作者说不喜欢这些规则，情感为负面，所以认为规则 boring。"),
    q(13, ["life", "food", "sport", "health"], "life", "名词", "逻辑推理", ["without rules", "create a better place", "to live in"], "作者在主旨升华：没有规则，大家就不能共同享受生活，life 与后文 live in 呼应。", "enjoy life", "动宾搭配", "动词(enjoy) + 名词(life)"),
    q(14, ["school", "cinema", "place", "room"], "place", "名词", "上下文复现 / 逻辑推理", ["for everyone to live in"], "这里从电影院规则升华到为每个人创造更好的生活环境，place 比 cinema 范围更合适。", "a place to live in", "名词搭配", "名词(place) + 不定式定语(to live in)"),
    q(15, ["prices", "rules", "numbers", "stories"], "rules", "名词", "上下文复现", ["lots of rules"], "全文都围绕电影院规则展开，结尾提问你去的电影院有没有规则，直接复现 rules。")
  ],
  verifySentences: [
    { english: "Hello, everyone!", chinese: "大家好！" },
    { english: "I’m Molly, a middle school student.", chinese: "我是 Molly，一名中学生。" },
    { english: "I don’t know whether you like watching movies, but I do.", chinese: "我不知道你是否喜欢看电影，但我喜欢。", answers: ["but"] },
    { english: "I love watching movies because it helps me relax.", chinese: "我喜欢看电影，因为它能帮助我放松。", answers: ["relax"] },
    { english: "There is a cinema near my home and I often go there.", chinese: "我家附近有一家电影院，我经常去那里。", answers: ["my"] },
    { english: "It is big and there are a lot of movies to see every day.", chinese: "它很大，每天都有很多电影可以看。", answers: ["see"] },
    { english: "But I must follow lots of rules.", chinese: "但是我必须遵守很多规则。", answers: ["must"] },
    { english: "Let me tell you some of them.", chinese: "让我告诉你其中一些规则。", answers: ["tell"] },
    { english: "When I go into the cinema, I have to show my ticket.", chinese: "当我进入电影院时，我必须出示我的票。", answers: ["show"] },
    { english: "I can’t bring any food or drinks to the cinema, so I never buy anything outside the cinema.", chinese: "我不能把任何食物或饮料带进电影院，所以我从不在电影院外面买东西。", answers: ["never"] },
    { english: "I can’t take photos in the cinema.", chinese: "我不能在电影院里拍照。", answers: ["photos"] },
    { english: "I can’t use my phone either.", chinese: "我也不能使用手机。", answers: ["use"] },
    { english: "If I see a 3D movie, I should get 3D glasses.", chinese: "如果我看 3D 电影，我应该领取 3D 眼镜。" },
    { english: "And if I break the glasses, I should pay for them.", chinese: "如果我弄坏了眼镜，我应该赔偿。", answers: ["glasses"] },
    { english: "I don’t like these rules because I think they are boring.", chinese: "我不喜欢这些规则，因为我认为它们很无聊。", answers: ["boring"] },
    { english: "But I know without rules, we can’t enjoy life together.", chinese: "但我知道，没有规则，我们就不能一起享受生活。", answers: ["life"] },
    { english: "By following rules, we help create a better place for everyone to live in.", chinese: "通过遵守规则，我们帮助创造一个更适合每个人生活的地方。", answers: ["place"] },
    { english: "Does the cinema you go to have any rules?", chinese: "你去的电影院有什么规则吗？", answers: ["rules"] },
    { english: "What are they?", chinese: "它们是什么？" }
  ]
};

const momsRules = {
  id: "moms-rules",
  title: "妈妈的家规",
  englishTitle: "Mom's Rules",
  level: "初阶",
  difficulty: "简单",
  tags: ["家庭生活", "逻辑推理", "上下文复现", "常识推断", "固定搭配"],
  available: true,
  firstSentence: "I live in a great family.",
  lastSentence: "Every day, we try to follow her rules because we love her, too.",
  tone: "转折变化",
  toneReason: "文章开头写孩子们有时不喜欢妈妈制定的规则，随后说明这些规则源于妈妈的爱与期待，最终转向孩子们理解并愿意遵守规则的积极认知。",
  passage: [
    "I live in a great family. Mom ",
    { blank: 1 },
    " some rules for me, my brother and sister because she thinks they are important for our growth. Sometimes we aren’t happy with them, ",
    { blank: 2 },
    " we still try to follow all of them. We must clean our rooms every other day and brush our teeth after ",
    { blank: 3 },
    " meals. If Mom has a meeting in the house, we mustn’t talk loudly, and we have to be ",
    { blank: 4 },
    ". We have to ",
    { blank: 5 },
    " the phones and the TV. We have to get up ",
    { blank: 6 },
    ", because Mom doesn’t want us to hurry to school. After school, we must do our homework first, and we can’t hang out with friends on schooldays. We can only relax after finishing our homework. Before we go to bed at 9:00 p.m., we have to read books for half an hour to know more about the ",
    { blank: 7 },
    ". Mom makes these rules because she ",
    { blank: 8 },
    " us a lot. She wants us to learn ",
    { blank: 9 },
    " to be a self-disciplined (自律的) person. And she also wants us to be clean and ",
    { blank: 10 },
    " everyone with respect. Every day, we try to follow her rules because we love her, too."
  ],
  questions: [
    q(1, ["takes", "follows", "makes", "picks"], "makes", "动词", "上下文复现 / 固定搭配", ["Mom makes these rules"], "下文直接出现 Mom makes these rules，说明制定规则用 make rules。", "make rules", "动宾搭配", "动词(make) + 名词(rules)"),
    q(2, ["but", "and", "so", "or"], "but", "连词逻辑", "逻辑推理", ["aren’t happy with them", "still try to follow"], "前半句说有时不高兴，后半句说仍然努力遵守，前后形成转折关系。"),
    q(3, ["swimming", "eating", "sleeping", "studying"], "eating", "动词", "常识 / 固定搭配", ["brush our teeth after", "meals"], "刷牙通常发生在吃饭之后，after eating meals 符合生活常识。", "eat meals", "动宾搭配", "动词(eat) + 名词(meals)"),
    q(4, ["happy", "noisy", "quiet", "kind"], "quiet", "形容词副词", "逻辑推理 / 词汇辨析", ["mustn't talk loudly", "and"], "妈妈开会时不能大声说话，所以要保持安静，and 提示前后逻辑一致。"),
    q(5, ["look at", "work out", "turn off", "pick up"], "turn off", "动词短语", "逻辑推理 / 固定搭配", ["meeting in the house", "mustn't talk loudly"], "为了保持安静，需要关掉手机和电视，turn off 表示关闭。", "turn off", "动词短语", "动词(turn) + 副词(off)"),
    q(6, ["easily", "exactly", "early", "especially"], "early", "形容词副词", "逻辑推理", ["because Mom doesn't want us to hurry"], "妈妈不希望孩子们匆忙去学校，所以要求早起。", "get up early", "副词搭配", "动词短语(get up) + 副词(early)"),
    q(7, ["room", "world", "rule", "school"], "world", "名词", "常识 / 逻辑推理", ["read books", "know more about"], "读书能帮助我们了解更广阔的世界，world 比 room 和 school 范围更合适。"),
    q(8, ["loves", "hates", "remembers", "listens"], "loves", "动词", "情感态度 / 上下文复现", ["we love her, too"], "最后一句的 too 暗示妈妈先爱我们，所以我们也爱她。"),
    q(9, ["what", "how", "when", "why"], "how", "代词", "语法 / 固定搭配", ["learn ___ to be"], "learn how to do sth. 表示学习如何做某事，这里是学习如何成为自律的人。", "learn how to do sth.", "固定句型", "动词(learn) + 疑问词(how) + 不定式(to do)"),
    q(10, ["look", "treat", "surprise", "change"], "treat", "动词", "固定搭配 / 词汇辨析", ["everyone with respect"], "treat sb. with respect 表示尊重地对待某人，符合妈妈对孩子的期待。", "treat sb. with respect", "动宾搭配", "动词(treat) + 代词(everyone) + 介词短语(with respect)")
  ],
  verifySentences: [
    { english: "I live in a great family.", chinese: "我生活在一个很棒的家庭里。" },
    { english: "Mom makes some rules for me, my brother and sister because she thinks they are important for our growth.", chinese: "妈妈为我、我的哥哥和姐姐制定了一些规则，因为她认为这些规则对我们的成长很重要。", answers: ["makes"] },
    { english: "Sometimes we aren’t happy with them, but we still try to follow all of them.", chinese: "有时我们对这些规则不太高兴，但我们仍然努力遵守所有规则。", answers: ["but"] },
    { english: "We must clean our rooms every other day and brush our teeth after eating meals.", chinese: "我们必须每隔一天打扫房间，并且饭后刷牙。", answers: ["eating"] },
    { english: "If Mom has a meeting in the house, we mustn’t talk loudly, and we have to be quiet.", chinese: "如果妈妈在家里开会，我们不能大声说话，而且必须保持安静。", answers: ["quiet"] },
    { english: "We have to turn off the phones and the TV.", chinese: "我们必须关掉手机和电视。", answers: ["turn off"] },
    { english: "We have to get up early, because Mom doesn’t want us to hurry to school.", chinese: "我们必须早起，因为妈妈不想让我们匆忙去学校。", answers: ["early"] },
    { english: "After school, we must do our homework first, and we can’t hang out with friends on schooldays.", chinese: "放学后，我们必须先做作业，上学日不能和朋友出去玩。" },
    { english: "We can only relax after finishing our homework.", chinese: "我们只能在完成作业后放松。" },
    { english: "Before we go to bed at 9:00 p.m., we have to read books for half an hour to know more about the world.", chinese: "晚上九点睡觉前，我们必须读半小时书，以便更多地了解世界。", answers: ["world"] },
    { english: "Mom makes these rules because she loves us a lot.", chinese: "妈妈制定这些规则是因为她非常爱我们。", answers: ["loves"] },
    { english: "She wants us to learn how to be a self-disciplined person.", chinese: "她希望我们学会如何成为一个自律的人。", answers: ["how"] },
    { english: "And she also wants us to be clean and treat everyone with respect.", chinese: "她也希望我们干净整洁，并且尊重地对待每一个人。", answers: ["treat"] },
    { english: "Every day, we try to follow her rules because we love her, too.", chinese: "每天，我们都努力遵守她的规则，因为我们也爱她。" }
  ]
};

const favoriteBasketball = {
  id: "favorite-basketball",
  title: "我最喜欢的运动——篮球",
  englishTitle: "My Favorite Sport — Basketball",
  level: "初阶",
  difficulty: "简单",
  tags: ["校园生活", "兴趣爱好", "逻辑推理", "上下文复现", "固定搭配"],
  available: true,
  firstSentence: "Basketball is my favorite sport.",
  lastSentence: "Do you want to do so with me?",
  tone: "积极",
  toneReason: "文章开篇直接点明作者最喜欢篮球，全文围绕练习、团队合作、互相鼓励和不断进步展开，整体充满拼搏和积极向上的态度。",
  passage: [
    "Basketball is my favorite sport. On school days, I use a few hours after school to practice with my group. We learn new ",
    { blank: 1 },
    " and try to make them perfect. Our coach says teamwork is the key to success. ",
    { blank: 2 },
    " we can pass the ball well, it’s easy for us to score. This sport gives me ",
    { blank: 3 },
    " benefits (好处). It keeps me fit and strong. It also teaches me not to give up, even when we lose ",
    { blank: 4 },
    ". In our first game, we lose by 20 points! But after that, we practise hard, and our team makes great ",
    { blank: 5 },
    ". Of all the basketball teams in school, ",
    { blank: 6 },
    " is the best one. The best part is the friendship (友谊). My teammates and I ",
    { blank: 7 },
    " one another to do better. Their help gives me confidence (信心). When we win, we celebrate together. When we ",
    { blank: 8 },
    ", we talk about our mistakes and practise more. Basketball isn’t just a(n) ",
    { blank: 9 },
    " for me. It builds my body and makes my life full of joy. I’ll keep practising to ",
    { blank: 10 },
    " a better basketball player. Do you want to do so with me?"
  ],
  questions: [
    q(1, ["marks", "goals", "tricks", "rules"], "tricks", "名词", "语境推理 / 词汇辨析", ["learn new", "try to make them perfect", "practice"], "放学后练习并努力让它们更完美，在篮球语境中指学习新的技巧。"),
    q(2, ["If", "And", "But", "Because"], "If", "连词逻辑", "逻辑推理", ["can pass the ball well", "it's easy for us to score"], "传球好是容易得分的前提条件，所以用 If 引导条件状语从句。"),
    q(3, ["few", "funny", "sweet", "double"], "double", "形容词副词", "逻辑推理 / 下文暗示", ["keeps me fit and strong", "also teaches me not to give up"], "下文列出两重好处：强身健体和学会不放弃，因此是 double benefits。", "double benefits", "形容词搭配", "形容词(double) + 名词(benefits)"),
    q(4, ["wishes", "matches", "reasons", "numbers"], "matches", "名词", "上下文复现 / 语义场", ["sport", "game"], "在篮球运动和比赛语境中，输掉的自然是 matches。", "lose matches", "动宾搭配", "动词(lose) + 名词(matches)"),
    q(5, ["noise", "spirit", "advice", "progress"], "progress", "名词", "固定搭配 / 逻辑推理", ["practise hard", "makes great"], "努力练习之后，团队取得巨大进步，make progress 是固定搭配。", "make progress", "动宾搭配", "动词(make) + 形容词(great) + 名词(progress)"),
    q(6, ["his", "hers", "ours", "theirs"], "ours", "代词", "语法 / 上下文复现", ["Our coach", "our team"], "前文一直用 we / our 指代作者所在的队伍，所以此处用 ours 表示 our team。"),
    q(7, ["stop", "notice", "hang", "encourage"], "encourage", "动词", "情感态度 / 逻辑推理", ["friendship", "do better", "gives me confidence"], "本段讲友谊和团队互助，队友之间彼此鼓励做得更好。", "encourage sb. to do sth.", "动词短语", "动词(encourage) + 代词(one another) + 不定式(to do)"),
    q(8, ["lose", "succeed", "hope", "relax"], "lose", "动词", "逻辑推理", ["When we win", "talk about our mistakes"], "前一句是赢了就庆祝，后一句谈错误并继续练习，对应的是输了的时候。"),
    q(9, ["skill", "exercise", "flag", "duty"], "exercise", "名词", "常识推断 / 主旨升华", ["Basketball", "builds my body"], "篮球不仅是锻炼身体的 exercise，也让生活充满快乐。"),
    q(10, ["make", "care", "discover", "become"], "become", "动词", "动作连贯 / 词汇辨析", ["keep practising"], "坚持练习的目标是成为更好的篮球运动员。", "become a player", "动宾搭配", "动词(become) + 冠词(a) + 名词词组(better basketball player)")
  ],
  verifySentences: [
    { english: "Basketball is my favorite sport.", chinese: "篮球是我最喜欢的运动。" },
    { english: "On school days, I use a few hours after school to practice with my group.", chinese: "上学日，我放学后会花几个小时和我的小组一起练习。" },
    { english: "We learn new tricks and try to make them perfect.", chinese: "我们学习新的技巧，并努力把它们练到完美。", answers: ["tricks"] },
    { english: "Our coach says teamwork is the key to success.", chinese: "我们的教练说团队合作是成功的关键。" },
    { english: "If we can pass the ball well, it’s easy for us to score.", chinese: "如果我们能把球传好，得分对我们来说就很容易。", answers: ["If"] },
    { english: "This sport gives me double benefits.", chinese: "这项运动给了我双重好处。", answers: ["double"] },
    { english: "It keeps me fit and strong.", chinese: "它让我保持健康和强壮。" },
    { english: "It also teaches me not to give up, even when we lose matches.", chinese: "它也教会我不要放弃，即使我们输掉比赛。", answers: ["matches"] },
    { english: "In our first game, we lose by 20 points!", chinese: "在我们的第一场比赛中，我们输了20分！" },
    { english: "But after that, we practise hard, and our team makes great progress.", chinese: "但在那之后，我们努力训练，我们的队伍取得了巨大进步。", answers: ["progress"] },
    { english: "Of all the basketball teams in school, ours is the best one.", chinese: "在学校所有篮球队中，我们的是最好的。", answers: ["ours"] },
    { english: "The best part is the friendship.", chinese: "最好的部分是友谊。" },
    { english: "My teammates and I encourage one another to do better.", chinese: "我和队友们互相鼓励，努力做得更好。", answers: ["encourage"] },
    { english: "Their help gives me confidence.", chinese: "他们的帮助给了我信心。" },
    { english: "When we win, we celebrate together.", chinese: "当我们赢的时候，我们一起庆祝。" },
    { english: "When we lose, we talk about our mistakes and practise more.", chinese: "当我们输的时候，我们讨论错误并练习更多。", answers: ["lose"] },
    { english: "Basketball isn’t just an exercise for me.", chinese: "篮球对我来说不仅仅是一项锻炼。", answers: ["exercise"] },
    { english: "It builds my body and makes my life full of joy.", chinese: "它强健我的身体，也让我的生活充满快乐。" },
    { english: "I’ll keep practising to become a better basketball player.", chinese: "我会继续练习，成为一名更好的篮球运动员。", answers: ["become"] },
    { english: "Do you want to do so with me?", chinese: "你想和我一起这样做吗？" }
  ]
};

const peterChineseFood = {
  id: "peter-chinese-food",
  title: "彼得的中国面条情结",
  englishTitle: "Peter's Favorite Chinese Food",
  level: "初阶",
  difficulty: "简单",
  tags: ["饮食文化", "逻辑推理", "上下文复现", "常识推断"],
  available: true,
  firstSentence: "Peter is from Australia. When he works in Zhengzhou, he falls in love with Chinese food.",
  lastSentence: "I hope I can eat more Chinese food in Australia.",
  tone: "积极",
  toneReason: "文章围绕 Peter 对中国美食的喜爱展开，写他在澳洲意外找到中餐厅并吃到河南焖面的惊喜，整体充满喜爱和满足的积极情绪。",
  passage: [
    "Peter is from Australia. When he works in Zhengzhou, he falls in love with Chinese food. Henan braised noodles (焖面) are his favourite. Now, Peter comes back to Australia. He keeps the ",
    { blank: 1 },
    " of eating Chinese food. But he can ",
    { blank: 2 },
    " find a Chinese restaurant near his home. One day, he sees a Chinese restaurant on the street. He is very ",
    { blank: 3 },
    " and can’t wait to get into it. “Excuse me, do you have Henan braised noodles?” Peter asks the ",
    { blank: 4 },
    ". “Of course.” Then he ",
    { blank: 5 },
    " a big bowl of Henan braised noodles. The waitress ",
    { blank: 6 },
    " the noodles very soon. He has a feeling of coming back to China when he eats them. “It’s really a ",
    { blank: 7 },
    ",” Peter says. But the price (价格) of the dish is quite ",
    { blank: 8 },
    ". Henan braised noodles in the restaurant are 28 yuan, but they are only 14 yuan in Zhengzhou. The price in Australia is ",
    { blank: 9 },
    ". “Even so (尽管如此), this is quite good. ",
    { blank: 10 },
    ", it’s not easy to get Chinese noodles in Australia. I hope I can eat more Chinese food in Australia.”"
  ],
  questions: [
    q(1, ["menu", "energy", "habit", "weight"], "habit", "名词", "固定搭配 / 上下文复现", ["falls in love with Chinese food"], "Peter 在郑州爱上中国食物，回澳洲后仍保持吃中餐的习惯。", "keep the habit of doing sth.", "名词搭配", "动词(keep) + 冠词(the) + 名词(habit) + 介词(of)"),
    q(2, ["often", "hardly", "always", "usually"], "hardly", "形容词副词", "逻辑推理", ["But"], "But 提示转折：虽然他保持吃中餐的习惯，但家附近几乎找不到中餐厅。"),
    q(3, ["sad", "friendly", "unlucky", "happy"], "happy", "形容词副词", "情感态度", ["can't wait"], "看到中餐厅后迫不及待想进去，说明他的心情是 happy。"),
    q(4, ["singer", "waitress", "teacher", "teenager"], "waitress", "名词", "上下文复现 / 常识", ["The waitress"], "下一句直接出现 The waitress，是下文原词复现。"),
    q(5, ["rises", "loses", "blows", "orders"], "orders", "动词", "动作连贯 / 常识", ["asks the waitress", "Of course"], "服务员回答有河南焖面后，Peter 自然会点一大碗面。"),
    q(6, ["builds", "causes", "serves", "draws"], "serves", "动词", "常识 / 动宾搭配", ["The waitress", "the noodles"], "餐厅场景中，服务员把面端上来或供应给顾客，用 serves。", "serve food", "动宾搭配", "动词(serve) + 名词(food/noodles)"),
    q(7, ["surprise", "rule", "spirit", "result"], "surprise", "名词", "情感态度 / 语境推理", ["a feeling of coming back to China"], "在澳洲吃到让他感觉回到中国的面条，超出预期，是一个惊喜。"),
    q(8, ["free", "blind", "same", "different"], "different", "形容词副词", "逻辑推理 / 下文暗示", ["But", "28 yuan", "14 yuan"], "下文用 28 元和 14 元作价格对比，说明价格不同。"),
    q(9, ["double", "perfect", "special", "friendly"], "double", "形容词副词", "常识推断 / 逻辑推理", ["28 yuan", "14 yuan"], "28 元正好是 14 元的两倍，所以澳洲价格是 double。"),
    q(10, ["Excuse me", "On time", "After all", "For example"], "After all", "连词逻辑", "逻辑推理", ["Even so", "it's not easy to"], "这里是在解释为什么虽然贵也可以接受，After all 用来引出理由：毕竟在澳洲吃中国面不容易。")
  ],
  verifySentences: [
    { english: "Peter is from Australia.", chinese: "Peter 来自澳大利亚。" },
    { english: "When he works in Zhengzhou, he falls in love with Chinese food.", chinese: "当他在郑州工作时，他爱上了中国食物。" },
    { english: "Henan braised noodles are his favourite.", chinese: "河南焖面是他的最爱。" },
    { english: "Now, Peter comes back to Australia.", chinese: "现在，Peter 回到了澳大利亚。" },
    { english: "He keeps the habit of eating Chinese food.", chinese: "他保持着吃中国食物的习惯。", answers: ["habit"] },
    { english: "But he can hardly find a Chinese restaurant near his home.", chinese: "但是他几乎不能在家附近找到一家中餐厅。", answers: ["hardly"] },
    { english: "One day, he sees a Chinese restaurant on the street.", chinese: "一天，他在街上看到了一家中餐厅。" },
    { english: "He is very happy and can’t wait to get into it.", chinese: "他非常开心，迫不及待地想进去。", answers: ["happy"] },
    { english: "Excuse me, do you have Henan braised noodles?", chinese: "打扰一下，你们有河南焖面吗？" },
    { english: "Peter asks the waitress.", chinese: "Peter 问女服务员。", answers: ["waitress"] },
    { english: "Of course.", chinese: "当然有。" },
    { english: "Then he orders a big bowl of Henan braised noodles.", chinese: "然后他点了一大碗河南焖面。", answers: ["orders"] },
    { english: "The waitress serves the noodles very soon.", chinese: "女服务员很快端上了面条。", answers: ["serves"] },
    { english: "He has a feeling of coming back to China when he eats them.", chinese: "当他吃这些面条时，他有一种回到中国的感觉。" },
    { english: "It’s really a surprise.", chinese: "这真是一个惊喜。", answers: ["surprise"] },
    { english: "But the price of the dish is quite different.", chinese: "但是这道菜的价格很不一样。", answers: ["different"] },
    { english: "Henan braised noodles in the restaurant are 28 yuan, but they are only 14 yuan in Zhengzhou.", chinese: "这家餐厅的河南焖面是28元，但在郑州只要14元。" },
    { english: "The price in Australia is double.", chinese: "澳大利亚的价格是两倍。", answers: ["double"] },
    { english: "Even so, this is quite good.", chinese: "尽管如此，这已经相当好了。" },
    { english: "After all, it’s not easy to get Chinese noodles in Australia.", chinese: "毕竟，在澳大利亚吃到中国面条并不容易。", answers: ["After all"] },
    { english: "I hope I can eat more Chinese food in Australia.", chinese: "我希望我能在澳大利亚吃到更多中国食物。" }
  ]
};

const silkRoadTrip = {
  id: "silk-road-trip",
  title: "丝绸之路之旅",
  englishTitle: "A Trip along the Silk Road",
  level: "初阶",
  difficulty: "简单",
  tags: ["历史文化", "逻辑推理", "常识推断", "固定搭配", "情感态度"],
  available: true,
  firstSentence: "The Silk Road (丝绸之路) is a very important part of China’s history.",
  lastSentence: "They will learn a lot about the history and culture of China from this trip.",
  tone: "积极",
  toneReason: "文章介绍丝绸之路、西安、兰州、黄河和敦煌莫高窟，充满对中国历史文化的赞美，也写出同学们旅行的兴奋与收获，整体基调积极。",
  passage: [
    "The Silk Road (丝绸之路) is a very important part of China’s history. It builds a ",
    { blank: 1 },
    " between East and West. People ",
    { blank: 2 },
    " different countries meet and trade (贸易) along it. Jenny and her classmates are going on a trip along the Silk Road. They are very ",
    { blank: 3 },
    ". They will start in Xi’an. Xi’an is a modern city ",
    { blank: 4 },
    " a long history. There they will visit the Terra Cotta Warriors (兵马俑). These warriors are so ",
    { blank: 5 },
    " that many people come to see them every year. Then they will take a train to Lanzhou. In Lanzhou, they can ",
    { blank: 6 },
    " the Zhongshan Bridge and walk along the Yellow River. The Yellow River is the ",
    { blank: 7 },
    " of China. It has a special meaning to Chinese people. Their last stop along the Silk Road is Dunhuang. Dunhuang is famous for the Mogao Caves. There are many ancient ",
    { blank: 8 },
    " and sculptures (雕塑) in the caves. They are not only very beautiful but also a ",
    { blank: 9 },
    " of Chinese traditional culture. It’s the most meaningful trip for them and they will ",
    { blank: 10 },
    " forget what they see along the road. They will learn a lot about the history and culture of China from this trip."
  ],
  questions: [
    q(1, ["spirit", "result", "progress", "bridge"], "bridge", "名词", "逻辑推理 / 固定搭配", ["between East and West"], "丝绸之路连接东西方，起到沟通交流的桥梁作用。", "build a bridge", "动宾搭配", "动词(builds) + 冠词(a) + 名词(bridge) + 介词短语(between...)"),
    q(2, ["from", "in", "at", "to"], "from", "介词搭配", "语法 / 介词辨析", ["different countries", "meet and trade"], "表示来自不同国家的人，用 people from different countries。", "people from...", "介词短语", "名词(People) + 介词(from) + 名词短语(different countries)"),
    q(3, ["poor", "excited", "absent", "lucky"], "excited", "形容词副词", "情感态度 / 逻辑推理", ["going on a trip"], "同学们即将去丝绸之路旅行，心情自然是兴奋的。"),
    q(4, ["of", "with", "without", "in"], "with", "介词搭配", "语法 / 介词搭配", ["modern city", "a long history"], "with 表示带有、拥有，a city with a long history 表示一座拥有悠久历史的城市。", "with a long history", "介词短语", "名词(city) + 介词(with) + 名词短语(a long history)"),
    q(5, ["friendly", "untidy", "interesting", "unhappy"], "interesting", "形容词副词", "逻辑推理 / 情感态度", ["so... that many people come to see them"], "兵马俑如此有趣和吸引人，以至于每年很多人来看。", "so... that...", "固定句型", "副词(so) + 形容词(interesting) + 连词(that) + 从句"),
    q(6, ["visit", "save", "carry", "arrive"], "visit", "动词", "词汇辨析 / 逻辑推理", ["the Zhongshan Bridge"], "中山桥是景点，游客的动作是参观游览。", "visit a place", "动宾搭配", "动词(visit) + 名词短语(the Zhongshan Bridge)"),
    q(7, ["mother river", "longest river", "shortest river", "cleanest river"], "mother river", "名词", "常识推断 / 文化常识", ["The Yellow River", "special meaning"], "结合中国文化常识，黄河被称为中国的母亲河。", "mother river", "名词搭配", "名词(mother) + 名词(river)"),
    q(8, ["articles", "paintings", "stories", "buildings"], "paintings", "名词", "常识推断 / 语义场复现", ["Mogao Caves", "and sculptures"], "莫高窟以壁画和雕塑闻名，paintings 与 sculptures 构成艺术品语义场。"),
    q(9, ["choice", "trick", "habit", "symbol"], "symbol", "名词", "固定搭配 / 逻辑推理", ["Chinese traditional culture"], "莫高窟不仅美丽，也是中国传统文化的象征，a symbol of 是固定搭配。", "a symbol of", "名词搭配", "冠词(a) + 名词(symbol) + 介词(of)"),
    q(10, ["seldom", "usually", "never", "always"], "never", "形容词副词", "情感态度 / 逻辑推理", ["the most meaningful trip"], "既然这是最有意义的旅行，他们自然永远不会忘记沿途所见。")
  ],
  verifySentences: [
    { english: "The Silk Road is a very important part of China’s history.", chinese: "丝绸之路是中国历史中非常重要的一部分。" },
    { english: "It builds a bridge between East and West.", chinese: "它在东方和西方之间架起了一座桥梁。", answers: ["bridge"] },
    { english: "People from different countries meet and trade along it.", chinese: "来自不同国家的人们沿着它相遇并进行贸易。", answers: ["from"] },
    { english: "Jenny and her classmates are going on a trip along the Silk Road.", chinese: "Jenny 和她的同学们将沿着丝绸之路旅行。" },
    { english: "They are very excited.", chinese: "他们非常兴奋。", answers: ["excited"] },
    { english: "They will start in Xi’an.", chinese: "他们将从西安开始。" },
    { english: "Xi’an is a modern city with a long history.", chinese: "西安是一座拥有悠久历史的现代城市。", answers: ["with"] },
    { english: "There they will visit the Terra Cotta Warriors.", chinese: "在那里，他们将参观兵马俑。" },
    { english: "These warriors are so interesting that many people come to see them every year.", chinese: "这些兵马俑如此有趣，以至于每年都有很多人来看它们。", answers: ["interesting"] },
    { english: "Then they will take a train to Lanzhou.", chinese: "然后他们将乘火车去兰州。" },
    { english: "In Lanzhou, they can visit the Zhongshan Bridge and walk along the Yellow River.", chinese: "在兰州，他们可以参观中山桥，并沿着黄河散步。", answers: ["visit"] },
    { english: "The Yellow River is the mother river of China.", chinese: "黄河是中国的母亲河。", answers: ["mother river"] },
    { english: "It has a special meaning to Chinese people.", chinese: "它对中国人有特殊的意义。" },
    { english: "Their last stop along the Silk Road is Dunhuang.", chinese: "他们沿丝绸之路的最后一站是敦煌。" },
    { english: "Dunhuang is famous for the Mogao Caves.", chinese: "敦煌以莫高窟而闻名。" },
    { english: "There are many ancient paintings and sculptures in the caves.", chinese: "洞窟里有许多古代绘画和雕塑。", answers: ["paintings"] },
    { english: "They are not only very beautiful but also a symbol of Chinese traditional culture.", chinese: "它们不仅非常美丽，也是中国传统文化的象征。", answers: ["symbol"] },
    { english: "It’s the most meaningful trip for them and they will never forget what they see along the road.", chinese: "这对他们来说是最有意义的旅行，他们永远不会忘记沿途看到的一切。", answers: ["never"] },
    { english: "They will learn a lot about the history and culture of China from this trip.", chinese: "他们将从这次旅行中学到很多关于中国历史和文化的知识。" }
  ]
};

const firstFishingTrip = {
  id: "first-fishing-trip",
  title: "难忘的第一次钓鱼",
  englishTitle: "The First Fishing Trip",
  level: "中考",
  difficulty: "中等",
  source: "2025·新疆乌鲁木齐市·中考一模",
  tags: ["人物故事", "逻辑推理", "上下文复现", "情感态度"],
  available: true,
  firstSentence: "My uncle was a quiet gentleman. His patience (耐心) made him a great man.",
  lastSentence: "Thanks to my uncle, I got something more ____ —patience and courage.",
  tone: "转折变化",
  toneReason: "文章先写作者第一次钓鱼时不断失败、沮丧落泪，随后在叔叔鼓励下继续尝试并钓到大鱼，最终收获耐心和勇气，情绪由失落转向成长与喜悦。",
  passage: [
    "My uncle was a quiet gentleman. His patience (耐心) made him a great man. When I was young, he often took me to go ",
    { blank: 1 },
    " in the afternoons. Those afternoons were a part of my happiest childhood ",
    { blank: 2 },
    ". I will never forget the ",
    { blank: 3 },
    " fishing trip with him. On that day, I followed him to his favorite fishing place, a beautiful lake, and I was ",
    { blank: 4 },
    ". I watched him carefully ",
    { blank: 5 },
    " he taught me how to throw the hook (鱼钩). I tried a few times but got ",
    { blank: 6 },
    ". “Come on, boy! Be brave. Try again. We fishermen must be ",
    { blank: 7 },
    ",” he said. His gentle ",
    { blank: 8 },
    " helped me to try more times. I kept throwing the hook again and again, but I still got nothing. When I was very ",
    { blank: 9 },
    ", I felt a fish biting (上钩)! My heart beat ",
    { blank: 10 },
    ". “I got one!” I shouted. Unluckily, the fish disappeared ",
    { blank: 11 },
    ". I cried in silence ",
    { blank: 12 },
    " I failed too many times. Just at that time, my uncle ",
    { blank: 13 },
    " me to keep on trying. Finally, I caught a big fish. Looking back to those times, I realize the first fishing trip ",
    { blank: 14 },
    " me more than fishing. Thanks to my uncle, I got something more ",
    { blank: 15 },
    " —patience and courage."
  ],
  questions: [
    q(1, ["fishing", "camping", "boating"], "fishing", "动名词", "上下文复现", ["fishing trip", "favorite fishing place"], "下文连续出现 fishing trip 和 fishing place，直接指向 go fishing。", "go fishing", "动词短语", "动词(go) + 动名词(fishing)"),
    q(2, ["games", "habits", "memories"], "memories", "名词", "逻辑推理 / 常识", ["When I was young", "childhood"], "童年时期那些快乐的下午，自然成为童年记忆。"),
    q(3, ["first", "second", "third"], "first", "序数词", "上下文复现", ["the first fishing trip"], "结尾处出现 the first fishing trip，首尾呼应，直接复现 first。"),
    q(4, ["sad", "excited", "angry"], "excited", "形容词副词", "情感态度", ["happiest childhood", "favorite fishing place"], "去最喜欢的钓鱼地点，是快乐童年记忆的一部分，心情应为 excited。"),
    q(5, ["where", "when", "why"], "when", "连词逻辑", "语法", ["watched him carefully", "he taught me"], "当叔叔教我抛鱼钩时，我仔细看着他，when 引导时间状语从句。"),
    q(6, ["something", "anything", "nothing"], "nothing", "代词", "逻辑推理 / 上下文复现", ["but", "still got nothing"], "but 提示结果不如意，下文又复现 still got nothing。"),
    q(7, ["patient", "excellent", "important"], "patient", "形容词副词", "上下文复现", ["His patience"], "第一段写叔叔的 patience，这里转为形容词 patient，属于同词根复现。"),
    q(8, ["hug", "voice", "laughter"], "voice", "名词", "动作连贯 / 逻辑推理", ["he said", "gentle"], "叔叔刚说了鼓励的话，所以是他温柔的声音帮助我继续尝试。"),
    q(9, ["surprised", "proud", "upset"], "upset", "形容词副词", "情感态度 / 因果关系", ["kept throwing", "still got nothing"], "一直抛钩却仍然没有收获，自然会感到沮丧。"),
    q(10, ["fast", "well", "normally"], "fast", "形容词副词", "常识推断 / 情感态度", ["felt a fish biting", "I got one"], "感觉鱼上钩时紧张兴奋，心跳会很快。", "beat fast", "动副搭配", "动词(beat) + 副词(fast)"),
    q(11, ["just now", "right away", "at times"], "right away", "副词短语", "逻辑推理", ["Unluckily", "disappeared"], "刚喊钓到了，鱼就立刻消失跑掉，right away 符合遗憾语境。"),
    q(12, ["so", "because", "before"], "because", "连词逻辑", "逻辑推理", ["cried in silence", "failed too many times"], "哭泣是结果，失败太多次是原因，所以用 because。"),
    q(13, ["encouraged", "invited", "warned"], "encouraged", "动词", "固定搭配 / 情感态度", ["to keep on trying"], "叔叔在作者受挫时鼓励他继续尝试，encourage sb. to do sth. 是固定搭配。", "encourage sb. to do sth.", "动宾搭配", "动词(encourage) + 代词(me) + 不定式(to keep on trying)"),
    q(14, ["protected", "supported", "taught"], "taught", "动词", "上下文复现", ["he taught me how to throw the hook"], "前文叔叔教我抛鱼钩，结尾升华为这次钓鱼之旅教给我更多。"),
    q(15, ["meaningless", "amazing", "valuable"], "valuable", "形容词副词", "情感态度 / 主旨升华", ["patience and courage"], "耐心和勇气是非常宝贵的品质，valuable 符合全文积极升华。")
  ],
  verifySentences: [
    { english: "My uncle was a quiet gentleman.", chinese: "我的叔叔是一位安静的绅士。" },
    { english: "His patience made him a great man.", chinese: "他的耐心使他成为一个了不起的人。" },
    { english: "When I was young, he often took me to go fishing in the afternoons.", chinese: "当我小时候，他经常在下午带我去钓鱼。", answers: ["fishing"] },
    { english: "Those afternoons were a part of my happiest childhood memories.", chinese: "那些下午是我最快乐的童年记忆的一部分。", answers: ["memories"] },
    { english: "I will never forget the first fishing trip with him.", chinese: "我永远不会忘记和他一起的第一次钓鱼之旅。", answers: ["first"] },
    { english: "On that day, I followed him to his favorite fishing place, a beautiful lake, and I was excited.", chinese: "那天，我跟着他去了他最喜欢的钓鱼地点，一个美丽的湖边，我很兴奋。", answers: ["excited"] },
    { english: "I watched him carefully when he taught me how to throw the hook.", chinese: "当他教我如何抛鱼钩时，我仔细地看着他。", answers: ["when"] },
    { english: "I tried a few times but got nothing.", chinese: "我试了几次，但什么也没有钓到。", answers: ["nothing"] },
    { english: "Come on, boy! Be brave. Try again.", chinese: "加油，孩子！勇敢点。再试一次。" },
    { english: "We fishermen must be patient.", chinese: "我们钓鱼的人必须有耐心。", answers: ["patient"] },
    { english: "His gentle voice helped me to try more times.", chinese: "他温柔的声音帮助我又尝试了更多次。", answers: ["voice"] },
    { english: "I kept throwing the hook again and again, but I still got nothing.", chinese: "我一次又一次地抛鱼钩，但仍然什么也没有钓到。" },
    { english: "When I was very upset, I felt a fish biting!", chinese: "当我非常沮丧时，我感觉到有鱼上钩了！", answers: ["upset"] },
    { english: "My heart beat fast.", chinese: "我的心跳得很快。", answers: ["fast"] },
    { english: "I got one!", chinese: "我钓到一条了！" },
    { english: "Unluckily, the fish disappeared right away.", chinese: "不幸的是，那条鱼立刻消失了。", answers: ["right away"] },
    { english: "I cried in silence because I failed too many times.", chinese: "我默默地哭了，因为我失败了太多次。", answers: ["because"] },
    { english: "Just at that time, my uncle encouraged me to keep on trying.", chinese: "就在那时，叔叔鼓励我继续尝试。", answers: ["encouraged"] },
    { english: "Finally, I caught a big fish.", chinese: "最后，我钓到了一条大鱼。" },
    { english: "Looking back to those times, I realize the first fishing trip taught me more than fishing.", chinese: "回顾那些时光，我意识到第一次钓鱼之旅教给我的不只是钓鱼。", answers: ["taught"] },
    { english: "Thanks to my uncle, I got something more valuable —patience and courage.", chinese: "多亏了我的叔叔，我得到了更宝贵的东西：耐心和勇气。", answers: ["valuable"] }
  ]
};

const twoPlantsGreat = {
  id: "two-plants-great",
  title: "温室植物与参天大树的启示",
  englishTitle: "The Two Plants",
  level: "中考",
  difficulty: "中等",
  source: "2025·新疆维吾尔自治区·中考一模",
  tags: ["寓言故事", "哲理故事", "逻辑推理", "上下文复现", "常识推断"],
  available: true,
  firstSentence: "One day, a little boy asked his father, “What does the word ‘great’ mean?",
  lastSentence: "Only in this way can he or she become great.",
  tone: "转折变化",
  toneReason: "文章先通过室内外两株植物的生长对比制造反差，再升华到人要经历失败、困难并解决困难才能走向伟大，整体落点积极。",
  passage: [
    "One day, a little boy asked his father, “What does the word ‘great’ mean? Who are great people and ",
    { blank: 1 },
    " do they become great?” The father asked his son to bring two plants. And then he asked his son to plant one of them ",
    { blank: 2 },
    " the house and the other one outside the house. The boy did as his father said. The father asked his son, “Which one of the two plants do you think will be ",
    { blank: 3 },
    "?” The boy answered, “The plant inside the house will grow bigger ",
    { blank: 4 },
    " it is safer, while the plant outside the house is not safe at all. No one will be there to ",
    { blank: 5 },
    " it. Animals may eat it.” The father smiled and said, “Let’s wait ",
    { blank: 6 },
    ". We will know the answer.” Then the boy left for another city and he came back to his house four ",
    { blank: 7 },
    " later. He said to his father, “Look! ",
    { blank: 8 },
    " happens to this plant inside the house and it is safe.” When the boy went outside, he was ",
    { blank: 9 },
    " to see a big tree. The boy couldn’t believe his eyes. He couldn’t ",
    { blank: 10 },
    " why the plant outside was able to grow much bigger than the one inside. “The plant outside the house experiences (经历) every ",
    { blank: 11 },
    " and many difficulties,” the father explained. “But the plant inside is safe. It doesn’t ",
    { blank: 12 },
    " weather changes. And it doesn’t get enough ",
    { blank: 13 },
    ", so it doesn’t grow big.” How can a person be great? Here’s the ",
    { blank: 14 },
    ": to become a great person, one must have failed many times, faced many difficulties and ",
    { blank: 15 },
    " those difficulties. Only in this way can he or she become great."
  ],
  questions: [
    q(1, ["how", "what", "when"], "how", "代词", "逻辑推理 / 疑问词辨析", ["Who are great people", "do they become great"], "前半句问谁是伟人，后半句问成为伟人的方式，用 how。"),
    q(2, ["opposite", "inside", "beside"], "inside", "介词搭配", "上下文复现", ["the other one outside the house"], "另一株种在房子外面，这一株自然种在房子里面，inside 与 outside 构成反义复现。"),
    q(3, ["prettier", "bigger", "longer"], "bigger", "形容词副词", "上下文复现", ["will grow bigger"], "下一句男孩回答 inside plant will grow bigger，直接原词复现 bigger。"),
    q(4, ["if", "though", "because"], "because", "连词逻辑", "逻辑推理", ["will grow bigger", "it is safer"], "男孩认为室内植物会长得更大，因为它更安全，前果后因用 because。"),
    q(5, ["care for", "take away", "cut down"], "care for", "动词短语", "逻辑推理 / 固定搭配", ["not safe at all", "Animals may eat it"], "室外植物不安全，没人照顾，可能被动物吃掉，所以选 care for。", "care for", "动词短语", "动词短语(care for) + 代词(it)"),
    q(6, ["quickly", "patiently", "happily"], "patiently", "形容词副词", "逻辑推理 / 常识", ["wait", "We will know the answer"], "植物生长需要时间，因此要耐心等待。", "wait patiently", "动副搭配", "动词(wait) + 副词(patiently)"),
    q(7, ["days", "years", "months"], "years", "名词", "常识推断 / 下文暗示", ["see a big tree"], "植物长成一棵大树需要较长时间，通常是数年。"),
    q(8, ["Anything", "Something", "Nothing"], "Nothing", "代词", "逻辑推理 / 代词辨析", ["and it is safe"], "室内植物很安全，所以没有坏事发生，用 Nothing。"),
    q(9, ["surprised", "upset", "relaxed"], "surprised", "形容词副词", "情感态度 / 逻辑对比", ["see a big tree", "couldn’t believe his eyes"], "男孩本以为室外植物不安全，结果看到大树，因此很惊讶。", "be surprised to do sth.", "形容词搭配", "系动词(was) + 形容词(surprised) + 不定式(to see)"),
    q(10, ["decide", "understand", "remember"], "understand", "动词", "动作连贯 / 逻辑推理", ["couldn't believe his eyes", "why"], "结果出乎意料，男孩无法理解为什么室外植物长得更大。"),
    q(11, ["wall", "season", "corner"], "season", "名词", "常识推断 / 语义场复现", ["weather changes"], "室外植物经历四季和困难，season 与 weather changes 属于自然气候语义场。"),
    q(12, ["stop", "break", "feel"], "feel", "动词", "逻辑推理", ["inside is safe", "weather changes"], "室内植物被保护起来，感受不到外界天气变化。"),
    q(13, ["food", "water", "sunlight"], "sunlight", "名词", "常识推断", ["doesn't grow big", "inside"], "室内植物长不大，一个核心原因是得不到足够阳光。"),
    q(14, ["answer", "result", "meaning"], "answer", "名词", "上下文复现", ["How can a person be great", "Here's the"], "前一句提出问题，后面给出答案，选 answer。"),
    q(15, ["solved", "found", "protected"], "solved", "动词", "逻辑递进 / 动宾搭配", ["failed", "faced", "those difficulties"], "成为伟大的人不仅要面对困难，还要解决困难，动作层层递进。", "solve difficulties", "动宾搭配", "动词(solve) + 名词(difficulties)")
  ],
  verifySentences: [
    { english: "One day, a little boy asked his father, “What does the word ‘great’ mean?", chinese: "一天，一个小男孩问他的父亲：“‘伟大’这个词是什么意思？”" },
    { english: "Who are great people and how do they become great?", chinese: "谁是伟大的人？他们是如何变得伟大的？", answers: ["how"] },
    { english: "The father asked his son to bring two plants.", chinese: "父亲让儿子拿来两株植物。" },
    { english: "And then he asked his son to plant one of them inside the house and the other one outside the house.", chinese: "然后他让儿子把其中一株种在房子里面，另一株种在房子外面。", answers: ["inside"] },
    { english: "The boy did as his father said.", chinese: "男孩照父亲说的做了。" },
    { english: "Which one of the two plants do you think will be bigger?", chinese: "你认为这两株植物哪一株会更大？", answers: ["bigger"] },
    { english: "The plant inside the house will grow bigger because it is safer, while the plant outside the house is not safe at all.", chinese: "房子里面的植物会长得更大，因为它更安全，而房子外面的植物一点也不安全。", answers: ["because"] },
    { english: "No one will be there to care for it.", chinese: "没有人会在那里照顾它。", answers: ["care for"] },
    { english: "Animals may eat it.", chinese: "动物可能会吃掉它。" },
    { english: "The father smiled and said, “Let’s wait patiently. We will know the answer.”", chinese: "父亲笑着说：“让我们耐心等待吧。我们会知道答案的。”", answers: ["patiently"] },
    { english: "Then the boy left for another city and he came back to his house four years later.", chinese: "后来男孩去了另一个城市，四年后他回到了家。", answers: ["years"] },
    { english: "Look! Nothing happens to this plant inside the house and it is safe.", chinese: "看！房子里面的这株植物什么事也没发生，它很安全。", answers: ["Nothing"] },
    { english: "When the boy went outside, he was surprised to see a big tree.", chinese: "当男孩走到外面时，他惊讶地看到了一棵大树。", answers: ["surprised"] },
    { english: "The boy couldn’t believe his eyes.", chinese: "男孩不敢相信自己的眼睛。" },
    { english: "He couldn’t understand why the plant outside was able to grow much bigger than the one inside.", chinese: "他无法理解为什么外面的植物能比里面的那株长得大得多。", answers: ["understand"] },
    { english: "The plant outside the house experiences every season and many difficulties.", chinese: "房子外面的植物经历了每一个季节和许多困难。", answers: ["season"] },
    { english: "But the plant inside is safe.", chinese: "但是房子里面的植物很安全。" },
    { english: "It doesn’t feel weather changes.", chinese: "它感受不到天气变化。", answers: ["feel"] },
    { english: "And it doesn’t get enough sunlight, so it doesn’t grow big.", chinese: "而且它得不到足够的阳光，所以长不大。", answers: ["sunlight"] },
    { english: "How can a person be great?", chinese: "一个人怎样才能变得伟大？" },
    { english: "Here’s the answer: to become a great person, one must have failed many times, faced many difficulties and solved those difficulties.", chinese: "答案是：要成为一个伟大的人，一个人必须失败过很多次，面对过许多困难，并解决那些困难。", answers: ["answer", "solved"] },
    { english: "Only in this way can he or she become great.", chinese: "只有这样，他或她才能变得伟大。" }
  ]
};

const actOfKindness = {
  id: "act-of-kindness",
  title: "跨越语言的善意",
  englishTitle: "A Small Act of Kindness",
  level: "中考",
  difficulty: "中等",
  tags: ["人物故事", "逻辑推理", "情感态度", "上下文复现", "语法考点"],
  available: true,
  firstSentence: "One evening, I was walking in the street when I came across an old man.",
  lastSentence: "We said our goodbyes and he gave me a heartwarming message that made me believe in the goodness of human nature.",
  tone: "积极",
  toneReason: "文章从语言不通、老人迷路的无助场景开始，转向通过翻译软件顺利沟通、一路欢笑，最终落在善意与人性美好的温暖感悟上，整体积极。",
  passage: [
    "One evening, I was walking in the street when I came across an old man. He was waving his ",
    { blank: 1 },
    " at me and speaking ",
    { blank: 2 },
    " a language I couldn’t understand. It seemed that he was in a hurry to get somewhere. I realized that he was ",
    { blank: 3 },
    " and couldn’t speak English. He showed me some map screenshots (屏幕截图), ",
    { blank: 4 },
    ", I didn’t know how to read them. ",
    { blank: 5 },
    " I downloaded a translation app to communicate with him. He spoke into the microphone (麦克风) in his language and it ",
    { blank: 6 },
    " his words into English so that I could understand. I finally ",
    { blank: 7 },
    " that he wanted to go home, which was a long walk away. He didn’t want to use any transportation (交通工具), so I walked with him to a bus stop ",
    { blank: 8 },
    " he could call his son for a ride. As we walked, we laughed and joked ",
    { blank: 9 },
    " we couldn’t understand each other’s language. It was a pretty ",
    { blank: 10 },
    " experience! The old man was very ",
    { blank: 11 },
    " for my help and kept thanking me for my time. I had to keep ",
    { blank: 12 },
    " him that I was happy to help. ",
    { blank: 13 },
    " was amazing how just a small act of ",
    { blank: 14 },
    " made such a big difference to him. ",
    { blank: 15 },
    ", we reached the bus stop and he made his call. We said our goodbyes and he gave me a heartwarming message that made me believe in the goodness of human nature."
  ],
  questions: [
    q(1, ["phone", "watch", "book"], "phone", "名词", "上下文复现 / 常识", ["map screenshots", "translation app", "microphone"], "地图截图、翻译软件和麦克风都指向手机这一物品。"),
    q(2, ["on", "in", "for"], "in", "介词搭配", "语法 / 介词搭配", ["speaking ___ a language"], "表示用某种语言讲话，用 speak in a language。", "in a language", "介词短语", "介词(in) + 名词词组(a language)"),
    q(3, ["won", "got", "lost"], "lost", "动词", "逻辑推理", ["in a hurry to get somewhere", "map screenshots"], "老人急着去某处，又拿地图截图求助，说明他迷路了。"),
    q(4, ["or", "however", "but"], "however", "连词逻辑", "语法 / 逻辑推理", ["showed me some map screenshots", "I didn't know how to read them"], "前后构成转折，且 however 常被逗号隔开作插入语。"),
    q(5, ["So", "Because", "If"], "So", "连词逻辑", "逻辑推理", ["didn't know how to read them", "downloaded a translation app"], "看不懂地图是原因，下载翻译软件是结果，用 So。"),
    q(6, ["translated", "finished", "divided"], "translated", "动词", "上下文复现 / 固定搭配", ["translation app", "into English"], "翻译软件把他的话翻译成英语，translation 与 translated 同词根复现。", "translate... into...", "动宾搭配", "动词(translated) + 名词(his words) + 介词短语(into English)"),
    q(7, ["took out", "got out", "found out"], "found out", "动词短语", "动作连贯 / 逻辑推理", ["communicate with him", "that he wanted to go home"], "通过沟通，我最终弄清楚他想回家。", "find out", "动词短语", "动词(found) + 副词(out) + 宾语从句(that...)"),
    q(8, ["which", "what", "where"], "where", "代词", "语法", ["a bus stop"], "先行词是地点 a bus stop，从句中表示在那里给儿子打电话，用 where。"),
    q(9, ["although", "because", "and"], "although", "连词逻辑", "逻辑推理", ["laughed and joked", "couldn't understand each other's language"], "虽然语言不通，但一路欢笑，前后构成让步关系。"),
    q(10, ["fun", "sad", "safe"], "fun", "形容词副词", "情感态度", ["laughed and joked", "heartwarming"], "一路笑着开玩笑，后文又说暖心，说明这是一次愉快有趣的经历。"),
    q(11, ["useful", "careful", "thankful"], "thankful", "形容词副词", "上下文复现 / 情感态度", ["kept thanking me"], "后文说老人一直感谢我，thankful 与 thanking 构成同词根复现。", "be thankful for", "形容词搭配", "系动词(was) + 副词(very) + 形容词(thankful) + 介词短语(for my help)"),
    q(12, ["asking", "reminding", "giving"], "reminding", "动词", "逻辑推理 / 语境辨析", ["kept thanking me", "I was happy to help"], "老人不断感谢我，我不断提醒他我很乐意帮忙。", "remind sb. that...", "动宾搭配", "动词(reminding) + 代词(him) + 宾语从句(that...)"),
    q(13, ["It", "That", "This"], "It", "代词", "语法", ["was amazing how"], "It 作形式主语，真正主语是 how 引导的从句。", "It is amazing how...", "固定句型", "形式主语(It) + 系动词(was) + 表语(amazing) + 真正主语从句(how...)"),
    q(14, ["kindness", "happiness", "sadness"], "kindness", "名词", "主旨升华 / 逻辑推理", ["my help", "happy to help"], "陪伴并帮助迷路老人，是一个小小的善举。", "an act of kindness", "名词搭配", "名词(act) + 介词(of) + 名词(kindness)"),
    q(15, ["Suddenly", "Sadly", "Finally"], "Finally", "形容词副词", "逻辑推理", ["a long walk away", "reached the bus stop"], "走了很长一段路之后，最终到达公交站。")
  ],
  verifySentences: [
    { english: "One evening, I was walking in the street when I came across an old man.", chinese: "一天晚上，我正在街上走路，这时遇到了一位老人。" },
    { english: "He was waving his phone at me and speaking in a language I couldn’t understand.", chinese: "他正朝我挥着手机，并用一种我听不懂的语言说话。", answers: ["phone", "in"] },
    { english: "It seemed that he was in a hurry to get somewhere.", chinese: "他似乎急着要去某个地方。" },
    { english: "I realized that he was lost and couldn’t speak English.", chinese: "我意识到他迷路了，而且不会说英语。", answers: ["lost"] },
    { english: "He showed me some map screenshots, however, I didn’t know how to read them.", chinese: "他给我看了一些地图截图，然而我不知道如何看懂它们。", answers: ["however"] },
    { english: "So I downloaded a translation app to communicate with him.", chinese: "所以我下载了一个翻译软件来和他沟通。", answers: ["So"] },
    { english: "He spoke into the microphone in his language and it translated his words into English so that I could understand.", chinese: "他用自己的语言对着麦克风说话，软件把他的话翻译成英语，这样我就能理解了。", answers: ["translated"] },
    { english: "I finally found out that he wanted to go home, which was a long walk away.", chinese: "我终于弄清楚他想回家，而那是一段很长的路。", answers: ["found out"] },
    { english: "He didn’t want to use any transportation, so I walked with him to a bus stop where he could call his son for a ride.", chinese: "他不想使用任何交通工具，所以我陪他走到一个公交站，在那里他可以打电话让儿子来接他。", answers: ["where"] },
    { english: "As we walked, we laughed and joked although we couldn’t understand each other’s language.", chinese: "我们一边走一边笑着开玩笑，尽管我们听不懂彼此的语言。", answers: ["although"] },
    { english: "It was a pretty fun experience!", chinese: "这是一次非常有趣的经历！", answers: ["fun"] },
    { english: "The old man was very thankful for my help and kept thanking me for my time.", chinese: "老人非常感谢我的帮助，并一直感谢我花时间陪他。", answers: ["thankful"] },
    { english: "I had to keep reminding him that I was happy to help.", chinese: "我不得不一直提醒他，我很乐意帮忙。", answers: ["reminding"] },
    { english: "It was amazing how just a small act of kindness made such a big difference to him.", chinese: "一个小小的善举竟然对他产生了如此大的影响，这真令人惊讶。", answers: ["It", "kindness"] },
    { english: "Finally, we reached the bus stop and he made his call.", chinese: "最后，我们到达了公交站，他打了电话。", answers: ["Finally"] },
    { english: "We said our goodbyes and he gave me a heartwarming message that made me believe in the goodness of human nature.", chinese: "我们互相道别，他给了我一条暖心的信息，让我相信人性的善良。" }
  ]
};

const sharingJuiceFairly = {
  id: "sharing-juice-fairly",
  title: "巧分果汁",
  englishTitle: "Sharing Juice Fairly",
  level: "中考",
  difficulty: "简单",
  tags: ["日常生活", "逻辑推理", "常识推断", "上下文复现", "动手实践"],
  available: true,
  firstSentence: "Ella, Tiva and their little brother, Jim, want to share a bottle of juice fairly.",
  lastSentence: "You made good use of your knowledge. I’ve learned a lot today.",
  tone: "积极",
  toneReason: "文章写孩子们遇到果汁公平分配的问题后，没有争吵，而是通过观察和动手测量解决问题，体现积极探索与实践的基调。",
  passage: [
    "Ella, Tiva and their little brother, Jim, want to share a bottle of juice fairly. But the problem is that they have ",
    { blank: 1 },
    " cups. Jim said, “My cup is short and wide. Ella’s cup is tall and thin. Tiva’s is in between. How can we get the same amount? How can we know whose cup can hold the most?” Tiva smiled at Jim kindly. She said, “We cannot ",
    { blank: 2 },
    " whose cup can hold the most just by looking. It might look like Ella’s cup holds the most because it’s the tallest, but this may not be the ",
    { blank: 3 },
    ". We will have to measure it.” Ella ",
    { blank: 4 },
    " inside the cups. She said, “I think Jim’s cup has the least juice.” Tiva didn’t say anything with a ",
    { blank: 5 },
    " still on her face. She filled her cup with juice. She didn’t drink it. ",
    { blank: 6 },
    ", she poured it into Jim’s short cup. It was just full! Next, she ",
    { blank: 7 },
    " her cup again. This time she poured the juice into Ella’s tall cup. It was ",
    { blank: 8 },
    ", too! “See?” said Tiva. “It looks like it isn’t fair because our cups are different in ",
    { blank: 9 },
    ". But now we each have the same amount of juice, right?” “You’re right, Tiva! You ",
    { blank: 10 },
    " the problem,” Jim said happily. “You made good use of your knowledge. I’ve learned a lot today.”"
  ],
  questions: [
    q(1, ["similar", "same", "expensive", "different"], "different", "形容词副词", "下文暗示 / 逻辑推理", ["short and wide", "tall and thin"], "下文写三个杯子的形状各不相同，所以他们有不同的杯子。"),
    q(2, ["turn down", "find out", "put off", "hand in"], "find out", "动词短语", "固定搭配 / 逻辑推理", ["just by looking", "measure it"], "光靠看不能弄清楚谁的杯子能装最多，必须测量。", "find out", "动词短语", "动词(find) + 副词(out) + 宾语从句"),
    q(3, ["truth", "plan", "value", "problem"], "truth", "名词", "逻辑推理", ["might look like", "but"], "看起来像 Ella 的杯子装得最多，但这可能不是真相。"),
    q(4, ["listened", "looked", "wrote", "turned"], "looked", "动词", "动作连贯 / 常识推断", ["inside the cups", "I think Jim's cup has the least"], "Ella 判断 Jim 的杯子最少之前，先往杯子里面看了看。", "look inside", "动副搭配", "动词(looked) + 介词短语(inside the cups)"),
    q(5, ["anger", "happiness", "smile", "sadness"], "smile", "名词", "上下文复现", ["Tiva smiled at Jim kindly", "still"], "前文写 Tiva smiled，still 提示她脸上仍带着微笑。", "with a smile on one's face", "名词搭配", "介词(with) + 冠词(a) + 名词(smile) + 介词短语(on her face)"),
    q(6, ["Instead", "Also", "Hardly", "Still"], "Instead", "连词逻辑", "逻辑推理", ["didn't drink it", "poured it into Jim's short cup"], "她没有喝果汁，而是倒进 Jim 的短杯子里，构成替代逻辑。"),
    q(7, ["added", "made", "filled", "held"], "filled", "动词", "上下文复现", ["She filled her cup with juice", "again"], "again 提示重复前文 filled her cup 的动作。"),
    q(8, ["empty", "full", "beautiful", "heavy"], "full", "形容词副词", "上下文复现", ["It was just full", "too"], "too 提示这次倒进 Ella 的杯子也和前文一样是满的。"),
    q(9, ["price", "shape", "color", "weight"], "shape", "名词", "上文总结 / 语义场复现", ["short and wide", "tall and thin"], "短宽、高瘦都在描述杯子的形状，所以是 different in shape。", "different in shape", "介词短语", "形容词(different) + 介词(in) + 名词(shape)"),
    q(10, ["created", "changed", "avoided", "solved"], "solved", "动词", "固定搭配 / 逻辑推理", ["the problem", "made good use of your knowledge"], "Tiva 用知识解决了公平分果汁的问题，solve the problem 是固定搭配。", "solve the problem", "动宾搭配", "动词(solved) + 名词(the problem)")
  ],
  verifySentences: [
    { english: "Ella, Tiva and their little brother, Jim, want to share a bottle of juice fairly.", chinese: "Ella、Tiva 和她们的小弟弟 Jim 想公平地分享一瓶果汁。" },
    { english: "But the problem is that they have different cups.", chinese: "但问题是他们有不同的杯子。", answers: ["different"] },
    { english: "Jim said, “My cup is short and wide. Ella’s cup is tall and thin. Tiva’s is in between.”", chinese: "Jim 说：“我的杯子又矮又宽。Ella 的杯子又高又细。Tiva 的杯子介于两者之间。”" },
    { english: "How can we get the same amount?", chinese: "我们怎样才能得到同样的量呢？" },
    { english: "How can we know whose cup can hold the most?", chinese: "我们怎么知道谁的杯子能装得最多呢？" },
    { english: "Tiva smiled at Jim kindly.", chinese: "Tiva 友善地朝 Jim 笑了笑。" },
    { english: "We cannot find out whose cup can hold the most just by looking.", chinese: "我们不能只靠看就弄清楚谁的杯子能装得最多。", answers: ["find out"] },
    { english: "It might look like Ella’s cup holds the most because it’s the tallest, but this may not be the truth.", chinese: "Ella 的杯子可能看起来装得最多，因为它最高，但这可能不是真相。", answers: ["truth"] },
    { english: "We will have to measure it.", chinese: "我们必须测量一下。" },
    { english: "Ella looked inside the cups.", chinese: "Ella 往杯子里面看了看。", answers: ["looked"] },
    { english: "She said, “I think Jim’s cup has the least juice.”", chinese: "她说：“我认为 Jim 的杯子里的果汁最少。”" },
    { english: "Tiva didn’t say anything with a smile still on her face.", chinese: "Tiva 什么也没说，脸上仍带着微笑。", answers: ["smile"] },
    { english: "She filled her cup with juice.", chinese: "她把自己的杯子装满果汁。" },
    { english: "She didn’t drink it.", chinese: "她没有喝它。" },
    { english: "Instead, she poured it into Jim’s short cup.", chinese: "相反，她把它倒进 Jim 的短杯子里。", answers: ["Instead"] },
    { english: "It was just full!", chinese: "它刚好满了！" },
    { english: "Next, she filled her cup again.", chinese: "接着，她又把自己的杯子装满。", answers: ["filled"] },
    { english: "This time she poured the juice into Ella’s tall cup.", chinese: "这一次她把果汁倒进 Ella 的高杯子里。" },
    { english: "It was full, too!", chinese: "它也满了！", answers: ["full"] },
    { english: "It looks like it isn’t fair because our cups are different in shape.", chinese: "看起来似乎不公平，因为我们的杯子形状不同。", answers: ["shape"] },
    { english: "But now we each have the same amount of juice, right?", chinese: "但现在我们每个人都有同样多的果汁，对吧？" },
    { english: "You’re right, Tiva! You solved the problem.", chinese: "你说得对，Tiva！你解决了这个问题。", answers: ["solved"] },
    { english: "You made good use of your knowledge.", chinese: "你很好地运用了你的知识。" },
    { english: "I’ve learned a lot today.", chinese: "我今天学到了很多。" }
  ]
};

const jacksBirthdayPicnic = {
  id: "jacks-birthday-picnic",
  title: "杰克一波三折的生日野餐",
  englishTitle: "Jack's Unforgettable Birthday",
  level: "中考",
  difficulty: "简单",
  tags: ["家庭生活", "寓言故事", "逻辑推理", "常识推断", "上下文复现"],
  available: true,
  firstSentence: "It was a lovely morning, a perfect start for Jack’s birthday.",
  lastSentence: "Well, OK, maybe it wasn't quite 100% perfect. But it was never boring!",
  tone: "转折变化",
  toneReason: "文章先写 Jack 对生日野餐充满期待，中间遭遇食物篮丢失、蛋糕掉沙、下雨、餐厅关门等意外，最后一家人乐观面对并意外找回篮子，情绪由期待转向无奈再转为温暖积极。",
  passage: [
    "It was a lovely morning, a perfect start for Jack’s birthday. Mum and Dad prepared a birthday cake and a basket of food. Jack carried the cake himself. The whole family got into the car and headed for the ",
    { blank: 1 },
    ". After arriving there, Mum and Dad found a nice place for a picnic. They put up the tent and spread out the beach blanket (毯子). Jack ",
    { blank: 2 },
    " the cake and played the game, Treasure Hunt, with his parents on the beach. When it was time for lunch, Dad went back to the car to ",
    { blank: 3 },
    " the basket of food. But it wasn’t there. Dad said Mum put it in the car. Mum said Dad did it. They became ",
    { blank: 4 },
    ". “No worry, Mum and Dad,” Jack broke the silence. “We can still ",
    { blank: 5 },
    " the cake.” Mum picked the cake up, but tripped (绊) over the blanket. The cake fell onto the sand. “No way can we eat the cake now,” Mum sighed (叹气). “Mum, I’m not hungry yet,” Jack said. A moment later, dark clouds came and it began to rain. The family ",
    { blank: 6 },
    " packed up everything and decided to leave. Dad made a(n) ",
    { blank: 7 },
    ", “We’ll have a big meal on the way home.” But later they found the only restaurant on the way back was closed. Mum and Dad were a little sad. Luckily, Jack ",
    { blank: 8 },
    " many jokes that could cheer them up. When they got home, they saw the ",
    { blank: 9 },
    ", right there inside the front door. “We can have a picnic now!” Jack said with joy. “A perfect end for my ",
    { blank: 10 },
    ",” Jack thought to himself. “Well, OK, maybe it wasn't quite 100% perfect. But it was never boring!”"
  ],
  questions: [
    q(1, ["beach", "hill", "farm", "forest"], "beach", "名词", "上下文复现", ["beach blanket", "on the beach"], "下文出现 beach blanket 和 on the beach，直接复现目的地 beach。"),
    q(2, ["threw away", "put down", "gave back", "held up"], "put down", "动词短语", "动作连贯 / 常识推断", ["carried the cake himself", "played the game"], "Jack 原本拿着蛋糕，要玩游戏就需要先把蛋糕放下。", "put down", "动词短语", "动词(put) + 副词(down) + 名词(the cake)"),
    q(3, ["fill", "repair", "choose", "get"], "get", "动词", "动作连贯 / 常识推断", ["went back to the car", "the basket of food"], "午饭时间爸爸回车里，是为了取食物篮。"),
    q(4, ["silent", "strict", "busy", "glad"], "silent", "形容词副词", "上下文复现 / 逻辑推理", ["broke the silence"], "下一句 Jack 打破沉默，倒推爸妈变得沉默。"),
    q(5, ["share", "buy", "show", "cover"], "share", "动词", "逻辑推理", ["No worry", "the cake"], "食物篮没了，Jack 安慰父母还可以分享蛋糕。"),
    q(6, ["lazily", "secretly", "quickly", "strangely"], "quickly", "形容词副词", "常识推断 / 逻辑推理", ["began to rain", "packed up"], "开始下雨时，一家人会迅速收拾东西离开。"),
    q(7, ["noise", "mistake", "answer", "promise"], "promise", "名词", "固定搭配 / 逻辑推理", ["We'll have a big meal on the way home"], "爸爸说回家路上吃大餐，是安慰大家的承诺。", "make a promise", "动宾搭配", "动词(made) + 冠词(a) + 名词(promise)"),
    q(8, ["needed", "guessed", "forgot", "knew"], "knew", "动词", "逻辑推理 / 词汇辨析", ["jokes that could cheer them up"], "Jack 知道很多能让父母开心的笑话，才能讲出来逗他们。"),
    q(9, ["tent", "basket", "treasure", "cake"], "basket", "名词", "上下文复现", ["the basket of food", "inside the front door"], "全文悬念是食物篮没找到，回家后发现篮子就在前门里面。"),
    q(10, ["game", "morning", "birthday"], "birthday", "名词", "上下文复现 / 主旨升华", ["start for Jack's birthday"], "首句写 Jack 的生日有完美开始，结尾呼应为生日的完美结束。")
  ],
  verifySentences: [
    { english: "It was a lovely morning, a perfect start for Jack’s birthday.", chinese: "那是一个美好的早晨，是 Jack 生日的完美开始。" },
    { english: "Mum and Dad prepared a birthday cake and a basket of food.", chinese: "妈妈和爸爸准备了一个生日蛋糕和一篮食物。" },
    { english: "Jack carried the cake himself.", chinese: "Jack 自己拿着蛋糕。" },
    { english: "The whole family got into the car and headed for the beach.", chinese: "全家人上了车，朝海滩出发。", answers: ["beach"] },
    { english: "After arriving there, Mum and Dad found a nice place for a picnic.", chinese: "到达那里后，妈妈和爸爸找到了一个适合野餐的好地方。" },
    { english: "They put up the tent and spread out the beach blanket.", chinese: "他们搭起帐篷，铺开沙滩毯。" },
    { english: "Jack put down the cake and played the game, Treasure Hunt, with his parents on the beach.", chinese: "Jack 放下蛋糕，和父母在沙滩上玩寻宝游戏。", answers: ["put down"] },
    { english: "When it was time for lunch, Dad went back to the car to get the basket of food.", chinese: "午饭时间到了，爸爸回到车里去取食物篮。", answers: ["get"] },
    { english: "But it wasn’t there.", chinese: "但是它不在那里。" },
    { english: "Dad said Mum put it in the car.", chinese: "爸爸说是妈妈把它放进车里的。" },
    { english: "Mum said Dad did it.", chinese: "妈妈说是爸爸放的。" },
    { english: "They became silent.", chinese: "他们沉默了。", answers: ["silent"] },
    { english: "No worry, Mum and Dad.", chinese: "别担心，妈妈爸爸。" },
    { english: "Jack broke the silence.", chinese: "Jack 打破了沉默。" },
    { english: "We can still share the cake.", chinese: "我们仍然可以分享蛋糕。", answers: ["share"] },
    { english: "Mum picked the cake up, but tripped over the blanket.", chinese: "妈妈拿起蛋糕，却被毯子绊倒了。" },
    { english: "The cake fell onto the sand.", chinese: "蛋糕掉到了沙子上。" },
    { english: "No way can we eat the cake now.", chinese: "现在我们没法吃蛋糕了。" },
    { english: "Mum, I’m not hungry yet.", chinese: "妈妈，我还不饿。" },
    { english: "A moment later, dark clouds came and it began to rain.", chinese: "过了一会儿，乌云来了，开始下雨。" },
    { english: "The family quickly packed up everything and decided to leave.", chinese: "一家人迅速收拾好所有东西，决定离开。", answers: ["quickly"] },
    { english: "Dad made a promise: We’ll have a big meal on the way home.", chinese: "爸爸许下承诺：我们会在回家路上吃顿大餐。", answers: ["promise"] },
    { english: "But later they found the only restaurant on the way back was closed.", chinese: "但后来他们发现回家路上唯一的餐厅关门了。" },
    { english: "Mum and Dad were a little sad.", chinese: "妈妈和爸爸有点难过。" },
    { english: "Luckily, Jack knew many jokes that could cheer them up.", chinese: "幸运的是，Jack 知道很多能让他们开心的笑话。", answers: ["knew"] },
    { english: "When they got home, they saw the basket, right there inside the front door.", chinese: "当他们回到家时，他们看到了篮子，就在前门里面。", answers: ["basket"] },
    { english: "We can have a picnic now!", chinese: "我们现在可以野餐了！" },
    { english: "Jack said with joy.", chinese: "Jack 高兴地说。" },
    { english: "A perfect end for my birthday.", chinese: "这是我生日的完美结尾。", answers: ["birthday"] },
    { english: "Well, OK, maybe it wasn't quite 100% perfect.", chinese: "好吧，也许它并不是百分之百完美。" },
    { english: "But it was never boring!", chinese: "但它一点也不无聊！" }
  ]
};

const seedSecretPatience = {
  id: "seed-secret-patience",
  title: "种子的秘密与耐心",
  englishTitle: "The Secret of the Seed",
  level: "中考",
  difficulty: "中等",
  tags: ["寓言故事", "人物成长", "逻辑推理", "上下文复现", "情感态度"],
  available: true,
  firstSentence: "One spring morning, 8-year-old Amy received a small box from her grandma.",
  lastSentence: "No matter what we do, we need patience as well as love.",
  tone: "转折变化",
  toneReason: "文章先写 Amy 对种子充满好奇却急于求成，因迟迟不发芽而焦虑失望，随后在邻居建议下学会耐心等待，最终收获向日葵，也明白耐心与爱的意义。",
  passage: [
    "One spring morning, 8-year-old Amy received a small box from her grandma. Inside was only a seed (种子). “Plant it ",
    { blank: 1 },
    ", and you’ll understand its secret.” Grandma said with a smile. Amy was very curious about what would happen to the seed. She thought planting it must be ",
    { blank: 2 },
    ". She decided to plant it in the soil carefully at once. Every day she ",
    { blank: 3 },
    " it three times, singing to it like Grandma taught her. But after four days, only bare (光秃秃的) soil greeted her. She felt a little ",
    { blank: 4 },
    ". “Maybe something is wrong with the seed.” Amy complained to Mr. Green, her elderly neighbour. Mr. Green was good at growing plants. Hearing her ",
    { blank: 5 },
    ", he said, “Nature works on its own clock. I have spent a long time growing these plants. And you have just spent several days on the seed. ",
    { blank: 6 },
    " you need to be patient.” Amy didn’t believe ",
    { blank: 7 },
    " he said. She still watered the soil three times a day. She even used plant food which she bought from the shop. Another three days passed, the soil turned into a muddy mess (泥泞不堪). ",
    { blank: 8 },
    ", a heavy rain poured down that weekend. Amy rushed out of the house and saw Mr. Green covering the soil with a piece of cloth. “I’ve killed the seed, haven’t I?” she said unhappily, pointing at the flooded soil. Mr. Green ",
    { blank: 9 },
    " the soil carefully and said, “You’ve paid too much attention. Be patient! Plants need ",
    { blank: 10 },
    " to grow.” This time, Amy took his ",
    { blank: 11 },
    ". She didn’t check the seed again and again any longer. She simply made sure that it got enough sunlight. Five days passed quietly. Then one morning, a green shoot (嫩芽) pushed through the soil. Amy was too excited. She ran quickly to ",
    { blank: 12 },
    " Mr. Green about it. He said to her, “Let it grow! Still be patient!” Through summer, Amy watched and waited ",
    { blank: 13 },
    " patience (耐心). The plant grew taller and taller day by day. Finally golden petals (花瓣) came out and ",
    { blank: 14 },
    " a bright sunflower. It turned its face to follow the sun. When Grandma visited Amy in August, she smiled at the tall sunflower and said, “Aha, Amy! You’ve known the ",
    { blank: 15 },
    " at last.” Amy nodded her head. No matter what we do, we need patience as well as love."
  ],
  questions: [
    q(1, ["carefully", "happily", "carelessly", "quietly"], "carefully", "形容词副词", "上下文复现", ["plant it in the soil carefully"], "下一段写 Amy decided to plant it in the soil carefully，直接复现 carefully。"),
    q(2, ["boring", "clear", "terrible", "interesting"], "interesting", "形容词副词", "情感态度 / 逻辑推理", ["very curious"], "Amy 对种子很好奇，所以认为种下它一定很有趣。"),
    q(3, ["touched", "watered", "smelt", "sent"], "watered", "动词", "上下文复现 / 常识", ["watered the soil three times a day"], "下文明确出现 She still watered the soil three times a day，直接复现 watered。"),
    q(4, ["warm", "lazy", "glad", "sad"], "sad", "形容词副词", "情感态度 / 逻辑推理", ["But", "only bare soil"], "期待发芽却只看到光秃秃的土壤，Amy 感到难过。"),
    q(5, ["words", "wish", "story", "lie"], "words", "名词", "动作连贯 / 逻辑推理", ["Amy complained to"], "Amy 向 Mr. Green 抱怨，他听到的是她说的话。"),
    q(6, ["Or", "But", "So", "Yet"], "So", "连词逻辑", "逻辑推理", ["just spent several days", "need to be patient"], "植物生长需要时间，而 Amy 只等了几天，所以她需要耐心。"),
    q(7, ["how", "when", "what", "where"], "what", "代词", "语法", ["didn't believe", "he said"], "believe 后接宾语从句，said 缺宾语，表示他说的话，用 what。"),
    q(8, ["Unluckily", "Patiently", "Luckily", "Impolitely"], "Unluckily", "形容词副词", "情感态度 / 逻辑推理", ["muddy mess", "heavy rain", "flooded soil"], "土壤已泥泞，周末又下大雨，是不幸的情况。"),
    q(9, ["bought", "checked", "painted", "collected"], "checked", "动词", "动作连贯 / 逻辑推理", ["carefully and said"], "Mr. Green 在判断前仔细检查了土壤。"),
    q(10, ["time", "water", "food", "heat"], "time", "名词", "上下文复现 / 语义呼应", ["Nature works on its own clock", "spent a long time"], "前文反复强调自然有自己的时间和需要长时间，因此植物需要 time。"),
    q(11, ["test", "advice", "present", "box"], "advice", "名词", "固定搭配 / 逻辑推理", ["didn't check the seed again and again"], "Amy 改变做法，说明她听取了 Mr. Green 的建议。", "take one's advice", "动宾搭配", "动词(took) + 物主代词(his) + 名词(advice)"),
    q(12, ["teach", "help", "treat", "tell"], "tell", "动词", "固定搭配 / 词汇辨析", ["___ Mr. Green about it"], "嫩芽出现后，Amy 跑去把这件事告诉 Mr. Green。", "tell sb. about sth.", "动词短语", "动词(tell) + 名词(Mr. Green) + 介词短语(about it)"),
    q(13, ["at", "with", "from", "without"], "with", "介词搭配", "语法 / 介词搭配", ["waited ___ patience"], "with patience 表示耐心地，是 with 加抽象名词构成状态。", "with patience", "介词短语", "介词(with) + 名词(patience)"),
    q(14, ["offered", "received", "became", "protected"], "became", "动词", "动作连贯 / 逻辑推理", ["golden petals came out", "a bright sunflower"], "花瓣长出来后，植物最终变成了一朵明亮的向日葵。"),
    q(15, ["road", "rose", "secret"], "secret", "名词", "上下文复现", ["understand its secret"], "首段奶奶说会明白它的 secret，结尾呼应为知道了这个 secret。")
  ],
  verifySentences: [
    { english: "One spring morning, 8-year-old Amy received a small box from her grandma.", chinese: "一个春天的早晨，8岁的 Amy 收到了奶奶给她的一个小盒子。" },
    { english: "Inside was only a seed.", chinese: "里面只有一颗种子。" },
    { english: "Plant it carefully, and you’ll understand its secret.", chinese: "小心地种下它，你就会明白它的秘密。", answers: ["carefully"] },
    { english: "Grandma said with a smile.", chinese: "奶奶笑着说。" },
    { english: "Amy was very curious about what would happen to the seed.", chinese: "Amy 非常好奇这颗种子会发生什么。" },
    { english: "She thought planting it must be interesting.", chinese: "她认为种下它一定很有趣。", answers: ["interesting"] },
    { english: "She decided to plant it in the soil carefully at once.", chinese: "她决定立刻把它小心地种进土里。" },
    { english: "Every day she watered it three times, singing to it like Grandma taught her.", chinese: "每天她给它浇三次水，像奶奶教她的那样给它唱歌。", answers: ["watered"] },
    { english: "But after four days, only bare soil greeted her.", chinese: "但四天后，迎接她的只有光秃秃的土壤。" },
    { english: "She felt a little sad.", chinese: "她感到有点难过。", answers: ["sad"] },
    { english: "Maybe something is wrong with the seed.", chinese: "也许这颗种子有问题。" },
    { english: "Amy complained to Mr. Green, her elderly neighbour.", chinese: "Amy 向她年长的邻居 Green 先生抱怨。" },
    { english: "Mr. Green was good at growing plants.", chinese: "Green 先生擅长种植物。" },
    { english: "Hearing her words, he said, “Nature works on its own clock.”", chinese: "听到她的话，他说：“自然有自己的时钟。”", answers: ["words"] },
    { english: "I have spent a long time growing these plants.", chinese: "我花了很长时间种这些植物。" },
    { english: "And you have just spent several days on the seed.", chinese: "而你只在这颗种子上花了几天时间。" },
    { english: "So you need to be patient.", chinese: "所以你需要有耐心。", answers: ["So"] },
    { english: "Amy didn’t believe what he said.", chinese: "Amy 不相信他说的话。", answers: ["what"] },
    { english: "She still watered the soil three times a day.", chinese: "她仍然每天给土壤浇三次水。" },
    { english: "She even used plant food which she bought from the shop.", chinese: "她甚至用了从商店买来的植物营养剂。" },
    { english: "Another three days passed, the soil turned into a muddy mess.", chinese: "又过了三天，土壤变得泥泞不堪。" },
    { english: "Unluckily, a heavy rain poured down that weekend.", chinese: "不幸的是，那个周末下起了大雨。", answers: ["Unluckily"] },
    { english: "Amy rushed out of the house and saw Mr. Green covering the soil with a piece of cloth.", chinese: "Amy 冲出房子，看见 Green 先生正用一块布盖住土壤。" },
    { english: "I’ve killed the seed, haven’t I?", chinese: "我把种子害死了，是吗？" },
    { english: "Mr. Green checked the soil carefully and said, “You’ve paid too much attention.”", chinese: "Green 先生仔细检查了土壤，说：“你关注得太多了。”", answers: ["checked"] },
    { english: "Be patient! Plants need time to grow.", chinese: "耐心点！植物需要时间生长。", answers: ["time"] },
    { english: "This time, Amy took his advice.", chinese: "这一次，Amy 听取了他的建议。", answers: ["advice"] },
    { english: "She didn’t check the seed again and again any longer.", chinese: "她不再一遍又一遍地查看种子。" },
    { english: "She simply made sure that it got enough sunlight.", chinese: "她只是确保它得到足够的阳光。" },
    { english: "Five days passed quietly.", chinese: "五天静静地过去了。" },
    { english: "Then one morning, a green shoot pushed through the soil.", chinese: "然后一天早晨，一株绿色嫩芽破土而出。" },
    { english: "Amy was too excited.", chinese: "Amy 非常兴奋。" },
    { english: "She ran quickly to tell Mr. Green about it.", chinese: "她快速跑去告诉 Green 先生这件事。", answers: ["tell"] },
    { english: "Let it grow! Still be patient!", chinese: "让它生长吧！仍然要有耐心！" },
    { english: "Through summer, Amy watched and waited with patience.", chinese: "整个夏天，Amy 耐心地观察和等待。", answers: ["with"] },
    { english: "The plant grew taller and taller day by day.", chinese: "这株植物一天天长得越来越高。" },
    { english: "Finally golden petals came out and became a bright sunflower.", chinese: "最后金色的花瓣长了出来，变成了一朵明亮的向日葵。", answers: ["became"] },
    { english: "It turned its face to follow the sun.", chinese: "它转动花盘追随太阳。" },
    { english: "When Grandma visited Amy in August, she smiled at the tall sunflower.", chinese: "八月奶奶来看 Amy 时，她看着高高的向日葵笑了。" },
    { english: "Aha, Amy! You’ve known the secret at last.", chinese: "啊哈，Amy！你终于知道这个秘密了。", answers: ["secret"] },
    { english: "Amy nodded her head.", chinese: "Amy 点了点头。" },
    { english: "No matter what we do, we need patience as well as love.", chinese: "无论我们做什么，都需要耐心和爱。" }
  ]
};

const lessonBanks = [
  {
    id: "basic",
    title: "初阶",
    lessons: [
      refrigeratorMagnets,
      braveBoyHouseFire,
      saltyJuiceLife,
      climbingQomolangma,
      markelaBeekeepingDream,
      cinemaRules,
      momsRules,
      favoriteBasketball,
      peterChineseFood,
      silkRoadTrip
    ]
  },
  {
    id: "exam",
    title: "中考",
    lessons: [
      lesson,
      nineColoredDeer,
      supermarketWarmth,
      oldBookWarmth,
      tinySeedGrowth,
      filialSonTravels,
      caringBabyExperience,
      overcomingShyness,
      chenWenjunXinjiang,
      bakerInnovation,
      vultureRevelation,
      paperBridgeValue,
      collettesCookieDream,
      unexpectedSpringPicnic,
      firstFishingTrip,
      twoPlantsGreat,
      actOfKindness,
      sharingJuiceFairly,
      jacksBirthdayPicnic,
      seedSecretPatience
    ]
  }
];

const lessonSlots = lessonBanks.flatMap((bank) => bank.lessons);

const storageKeys = {
  done: "clozeCoach.doneLessons",
  mistakes: "clozeCoach.mistakeNotebook",
  login: "clozeCoach.loginOk",
  loginExpiresAt: "clozeCoach.loginExpiresAt",
  trialCodes: "clozeCoach.trialCodes"
};

const trialDurationMs = 24 * 60 * 60 * 1000;

const validLoginCodes = [
  "A7K2M9",
  "Q4T8Z1",
  "B6N3X5",
  "R9C2L7",
  "D1V8P4",
  "H5W3S9",
  "M8F2Q6",
  "Z3J7A1",
  "K9P4D2",
  "T6L1X8",
  "C2R9V5",
  "N7A4H3",
  "W1Q8M6",
  "F5Z2K9",
  "P3D7T1",
  "X8H4C6",
  "L2M9R5",
  "S7V1Q3",
  "J4K8N2",
  "Y9F3P6",
  "G6T2W8",
  "E1X7L4",
  "U5C9A2",
  "V8N1D7",
  "Q2H6Z4",
  "A9R5M3",
  "K1W8F6",
  "D7P2X9",
  "M4C6T1",
  "Z8L3Q5",
  "B2F9H7",
  "R6N4V1",
  "T3A8K6",
  "X5Q1D9",
  "L7Z2P4",
  "C9M6W3",
  "H1V8R2",
  "N5K3X7",
  "F8D1A6",
  "P4T9L2",
  "W6Q3C8",
  "J2R7M1",
  "Y5H9V4",
  "G8X2N6",
  "E3L1Z9",
  "U7P5F2",
  "V4C8Q1",
  "S9M2K7",
  "O6D4T8",
  "I3W7A5"
];

const trialLoginCodes = [
  "TY24A8",
  "RXFFK3",
  "BFXQM7",
  "5Y2TZR",
  "J6Q9F8",
  "VDQVRB",
  "XRWJQR",
  "7NPB2G",
  "RWDW93",
  "77YZF3",
  "RUG67N"
];

const categoryTips = {
  "逻辑推理": "先判断前后句关系，再看选项是否符合因果、转折、替代、并列等逻辑。",
  "上下文复现": "优先回到原文找原词、同词根、同义词或同一语义场，不要只靠中文直觉。",
  "情感态度": "抓住褒贬方向和转折词，先排除情绪不一致的选项。",
  "语法": "先看空格前后的结构信号，如比较级、固定句式、词性搭配。",
  "常识": "常识题也要先找文中触发条件，再用常识收口。",
  "常识 / 词汇辨析": "先看搭配对象和语义范围，再区分近义词的使用场景。"
};

const posChoices = ["名词", "动词", "形容词副词", "连词逻辑", "代词", "介词搭配", "固定搭配"];
const toneChoices = [
  { label: "积极 / 喜爱", value: "积极" },
  { label: "消极 / 困难", value: "消极" },
  { label: "转折变化", value: "转折变化" }
];
const state = {
  unlocked: true,
  lessonId: lesson.id,
  selectedId: null,
  posPassed: {},
  answers: {},
  readIndex: 0,
  readSentences: [],
  meaningIndex: null,
  savedAttemptSignature: null
};
const clueColors = ["blue", "green", "yellow", "red", "violet"];
const answerColors = ["blue", "green", "yellow", "red", "violet"];

function q(id, options, answer, pos, category, clues, explanation, collocation = "无", collocationType = "无", collocationBreakdown = "无") {
  return { id, options, answer, pos, category, clues, explanation, collocation, collocationType, collocationBreakdown };
}

const els = {
  appShell: document.querySelector("#appShell"),
  loginScreen: document.querySelector("#loginScreen"),
  loginCode: document.querySelector("#loginCode"),
  loginBtn: document.querySelector("#loginBtn"),
  loginFeedback: document.querySelector("#loginFeedback"),
  currentLevel: document.querySelector("#currentLevel"),
  currentDifficulty: document.querySelector("#currentDifficulty"),
  currentCount: document.querySelector("#currentCount"),
  currentSource: document.querySelector("#currentSource"),
  currentTitle: document.querySelector("#currentTitle"),
  currentEnglishTitle: document.querySelector("#currentEnglishTitle"),
  topTitle: document.querySelector("#topTitle"),
  topEnglishTitle: document.querySelector("#topEnglishTitle"),
  firstSentence: document.querySelector("#firstSentence"),
  lastSentence: document.querySelector("#lastSentence"),
  homeProgress: document.querySelector("#homeProgress"),
  homeGrid: document.querySelector("#homeGrid"),
  lessonGrid: document.querySelector("#lessonGrid"),
  toneOptions: document.querySelector("#toneOptions"),
  gateFeedback: document.querySelector("#gateFeedback"),
  passage: document.querySelector("#passage"),
  questionBox: document.querySelector("#questionBox"),
  emptyState: document.querySelector("#emptyState"),
  questionNumber: document.querySelector("#questionNumber"),
  questionCategory: document.querySelector("#questionCategory"),
  optionPreview: document.querySelector("#optionPreview"),
  posOptions: document.querySelector("#posOptions"),
  posFeedback: document.querySelector("#posFeedback"),
  toolStep: document.querySelector("#toolStep"),
  toolTitle: document.querySelector("#toolTitle"),
  toolGuide: document.querySelector("#toolGuide"),
  clueWords: document.querySelector("#clueWords"),
  answerStep: document.querySelector("#answerStep"),
  answerOptions: document.querySelector("#answerOptions"),
  answerFeedback: document.querySelector("#answerFeedback"),
  sentenceCheckStep: document.querySelector("#sentenceCheckStep"),
  sentenceCheck: document.querySelector("#sentenceCheck"),
  training: document.querySelector("#training"),
  verify: document.querySelector("#verify"),
  result: document.querySelector("#result"),
  collocationReview: document.querySelector("#collocationReview"),
  filledPassage: document.querySelector("#filledPassage"),
  readStatus: document.querySelector("#readStatus"),
  sentenceMeaning: document.querySelector("#sentenceMeaning"),
  scoreBox: document.querySelector("#scoreBox"),
  mistakeTable: document.querySelector("#mistakeTable"),
  progressText: document.querySelector("#progressText"),
  progressBar: document.querySelector("#progressBar"),
  resetBtn: document.querySelector("#resetBtn"),
  backHomeBtn: document.querySelector("#backHomeBtn"),
  resultHomeBtn: document.querySelector("#resultHomeBtn"),
  notebookSummary: document.querySelector("#notebookSummary"),
  notebookGroups: document.querySelector("#notebookGroups")
};

function init() {
  initLogin();
  enterHome();
  renderHomeLibrary();
  renderLessonLibrary();
  renderLessonHeader();
  renderToneGate();
  renderPassage();
  renderFilledPassage();
  renderCollocationReview();
  resetSentenceAudio();
  bindStaticEvents();
  updateProgress();
  renderNotebook();
}

function enterHome() {
  els.appShell.classList.add("home-mode");
  els.appShell.classList.remove("study-mode");
  resetSentenceAudio();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function enterStudy() {
  els.appShell.classList.remove("home-mode");
  els.appShell.classList.add("study-mode");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function initLogin() {
  if (hasValidLogin()) {
    els.loginScreen.classList.add("hidden");
  } else {
    els.loginScreen.classList.remove("hidden");
  }

  els.loginBtn.addEventListener("click", handleLogin);
  els.loginCode.addEventListener("keydown", (event) => {
    if (event.key === "Enter") handleLogin();
  });
}

function hasValidLogin() {
  if (localStorage.getItem(storageKeys.login) !== "true") return false;
  const expiresAt = Number(localStorage.getItem(storageKeys.loginExpiresAt) || 0);
  if (!expiresAt) return true;
  if (Date.now() < expiresAt) return true;
  localStorage.removeItem(storageKeys.login);
  localStorage.removeItem(storageKeys.loginExpiresAt);
  return false;
}

function handleLogin() {
  const code = els.loginCode.value.trim().toUpperCase();
  if (validLoginCodes.includes(code)) {
    localStorage.setItem(storageKeys.login, "true");
    localStorage.removeItem(storageKeys.loginExpiresAt);
    els.loginScreen.classList.add("hidden");
    els.loginFeedback.textContent = "";
    return;
  }

  if (trialLoginCodes.includes(code)) {
    const trialCodes = readJson(storageKeys.trialCodes, {});
    const now = Date.now();
    const expiresAt = trialCodes[code] && trialCodes[code] > now ? trialCodes[code] : now + trialDurationMs;
    trialCodes[code] = expiresAt;
    writeJson(storageKeys.trialCodes, trialCodes);
    localStorage.setItem(storageKeys.login, "true");
    localStorage.setItem(storageKeys.loginExpiresAt, String(expiresAt));
    els.loginScreen.classList.add("hidden");
    els.loginFeedback.textContent = "";
    return;
  }

  els.loginFeedback.className = "feedback bad";
  els.loginFeedback.textContent = "登录码不正确，请检查后再试。";
}

function getAvailableLessons() {
  return lessonBanks.flatMap((bank) => bank.lessons.filter((item) => item.available));
}

function renderHomeProgress(doneLessons = getDoneLessons()) {
  if (!els.homeProgress) return;
  const lessons = getAvailableLessons();
  const total = lessons.length;
  const doneCount = lessons.filter((item) => doneLessons[item.id]).length;
  const percent = total ? Math.round((doneCount / total) * 100) : 0;

  els.homeProgress.innerHTML = `
    <div class="home-progress-card">
      <div>
        <span>学习进度</span>
        <strong>${doneCount} / ${total} 篇</strong>
        <p>已做完的文章会显示为灰色，未做完的文章保持彩色，可随时重复练习。</p>
      </div>
      <div class="home-progress-meter" aria-label="学习进度 ${percent}%">
        <div style="width: ${percent}%"></div>
      </div>
    </div>
  `;
}

function renderHomeLibrary() {
  const doneLessons = getDoneLessons();
  renderHomeProgress(doneLessons);
  els.homeGrid.innerHTML = "";
  lessonBanks.forEach((bank) => {
    const availableLessons = bank.lessons.filter((item) => item.available);
    if (!availableLessons.length) return;

    const section = document.createElement("section");
    section.className = "home-bank";
    section.innerHTML = `
      <div class="home-bank-heading">
        <h3>${bank.title}</h3>
        <span>${availableLessons.length}篇</span>
      </div>
    `;

    const list = document.createElement("div");
    list.className = "home-card-grid";
    availableLessons.forEach((item, index) => {
      const isDone = Boolean(doneLessons[item.id]);
      const card = document.createElement("button");
      card.type = "button";
      card.className = `home-lesson-card ${isDone ? "done" : "ready"}`;
      card.innerHTML = `
        <div class="home-card-topline">
          <span>第${index + 1}篇</span>
          <span class="status-pill ${isDone ? "done" : "ready"}">${isDone ? "已做，可重复" : "开始训练"}</span>
        </div>
        <strong>${item.title}</strong>
        <p>${item.englishTitle}</p>
        ${item.source ? `<p class="source-line">来源：${item.source}</p>` : ""}
        <div class="tag-row">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      `;
      card.addEventListener("click", () => selectLesson(item.id));
      list.appendChild(card);
    });

    section.appendChild(list);
    els.homeGrid.appendChild(section);
  });
}

function renderLessonLibrary() {
  const doneLessons = getDoneLessons();
  els.lessonGrid.innerHTML = "";
  lessonBanks.forEach((bank) => {
    const group = document.createElement("details");
    group.className = "library-group";
    group.open = bank.lessons.some((item) => item.id === lesson.id) || bank.id === "exam";
    group.innerHTML = `<summary>${bank.title}<span>${bank.lessons.length}篇</span></summary>`;
    const list = document.createElement("div");
    list.className = "library-group-list";

    bank.lessons.forEach((item, index) => {
      const isDone = Boolean(doneLessons[item.id]);
      const isActive = item.id === lesson.id;
      const card = document.createElement("button");
      card.type = "button";
      card.className = `library-card${isActive ? " active" : ""}${!item.available ? " disabled" : ""}`;
      card.disabled = !item.available;
      card.innerHTML = `
        <div class="library-topline">
          <span class="pick-label">
            <span class="fake-check">${isActive ? "✓" : ""}</span>
            第 ${index + 1} 篇
          </span>
          <span class="status-pill ${isDone ? "done" : item.available ? "ready" : "pending"}">${isDone ? "已做，可重做" : item.available ? "可练习" : "待导入"}</span>
        </div>
        <strong>${item.title}</strong>
        <p>${item.englishTitle}</p>
        ${item.source ? `<p class="source-line">来源：${item.source}</p>` : ""}
        <div class="tag-row">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      `;
      card.addEventListener("click", () => selectLesson(item.id));
      list.appendChild(card);
    });

    group.appendChild(list);
    els.lessonGrid.appendChild(group);
  });
}

function selectLesson(lessonId) {
  const selected = lessonSlots.find((item) => item.id === lessonId);
  if (!selected || !selected.available) return;
  lesson = selected;
  state.lessonId = lesson.id;
  resetPracticeState();
  renderLessonHeader();
  renderLessonLibrary();
  renderToneGate();
  renderPassage();
  renderFilledPassage();
  renderCollocationReview();
  resetSentenceAudio();
  updateProgress();
  enterStudy();
}

function renderLessonHeader() {
  els.currentLevel.textContent = lesson.level || "待定";
  els.currentDifficulty.textContent = lesson.difficulty || "待定";
  els.currentCount.textContent = `${lesson.questions.length}题`;
  els.currentSource.textContent = lesson.source || "";
  els.currentSource.classList.toggle("hidden", !lesson.source);
  els.currentTitle.textContent = lesson.title;
  els.currentEnglishTitle.textContent = lesson.englishTitle;
  els.topTitle.textContent = lesson.title;
  els.topEnglishTitle.textContent = lesson.englishTitle;
  els.firstSentence.textContent = lesson.firstSentence || "";
  els.lastSentence.textContent = lesson.lastSentence || "";
}

function resetPracticeState() {
  state.selectedId = null;
  state.posPassed = {};
  state.answers = {};
  state.readIndex = 0;
  state.readSentences = [];
  state.meaningIndex = null;
  state.savedAttemptSignature = null;
  stopSpeech();
  els.questionBox.classList.add("hidden");
  els.emptyState.classList.remove("hidden");
  els.result.classList.add("hidden");
  els.result.classList.add("locked");
  setStepEnabled("result", false);
  els.gateFeedback.textContent = "";
  els.gateFeedback.className = "feedback";
}

function getDoneLessons() {
  return readJson(storageKeys.done, {});
}

function markLessonDone(score) {
  const doneLessons = getDoneLessons();
  doneLessons[lesson.id] = {
    title: lesson.title,
    englishTitle: lesson.englishTitle,
    lastScore: score,
    total: lesson.questions.length,
    completedAt: new Date().toISOString()
  };
  writeJson(storageKeys.done, doneLessons);
}

function getNotebookRecords() {
  return readJson(storageKeys.mistakes, []);
}

function addMistakesToNotebook(wrongQuestions) {
  const signature = `${lesson.id}:${lesson.questions.map((question) => state.answers[question.id] || "_").join("|")}`;
  if (state.savedAttemptSignature === signature) return;
  state.savedAttemptSignature = signature;

  const records = getNotebookRecords();
  wrongQuestions.forEach((question) => {
    records.push({
      id: `${lesson.id}-${question.id}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      questionId: question.id,
      category: question.category,
      selected: state.answers[question.id] || "未作答",
      answer: question.answer,
      clues: question.clues,
      explanation: question.explanation,
      createdAt: new Date().toISOString()
    });
  });
  writeJson(storageKeys.mistakes, records);
  renderNotebook();
}

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function renderToneGate() {
  els.toneOptions.innerHTML = "";
  toneChoices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.textContent = choice.label;
    button.addEventListener("click", () => chooseTone(choice, button));
    els.toneOptions.appendChild(button);
  });
}

function chooseTone(choice, button) {
  document.querySelectorAll("#toneOptions .choice-button").forEach((item) => {
    item.classList.remove("correct", "wrong");
  });
  if (choice.value === lesson.tone) {
    button.classList.add("correct");
    state.unlocked = true;
    els.gateFeedback.className = "feedback good";
    els.gateFeedback.textContent = `闯关成功：${lesson.toneReason}`;
    document.querySelector('[data-jump="training"]').click();
  } else {
    button.classList.add("wrong");
    els.gateFeedback.className = "feedback bad";
    els.gateFeedback.textContent = `这篇不是「${choice.label}」。再看首尾句：${lesson.toneReason}`;
  }
}

function renderPassage() {
  els.passage.innerHTML = "";
  const activeQuestion = state.selectedId && state.posPassed[state.selectedId] ? findQuestion(state.selectedId) : null;
  lesson.passage.forEach((part) => {
    if (typeof part === "string") {
      renderTextWithClues(els.passage, part, activeQuestion);
      return;
    }
    const question = findQuestion(part.blank);
    const button = document.createElement("button");
    button.className = "blank-btn";
    button.dataset.id = String(part.blank);
    button.textContent = state.answers[part.blank] || `(${part.blank}) ____`;
    button.title = `第${part.blank}题`;
    button.addEventListener("click", () => selectQuestion(question.id));
    if (state.selectedId === question.id) button.classList.add("active");
    if (state.answers[question.id]) button.classList.add("answered");
    els.passage.appendChild(button);
  });
}

function renderTextWithClues(container, text, question) {
  if (!question) {
    container.append(text);
    return;
  }

  const matches = [];
  question.clues.forEach((clue, clueIndex) => {
    const lowerText = text.toLowerCase();
    const lowerClue = clue.toLowerCase();
    let start = lowerText.indexOf(lowerClue);
    while (start !== -1) {
      matches.push({
        start,
        end: start + clue.length,
        clueIndex
      });
      start = lowerText.indexOf(lowerClue, start + clue.length);
    }
  });

  if (!matches.length) {
    container.append(text);
    return;
  }

  matches.sort((a, b) => a.start - b.start || b.end - a.end);
  const cleanMatches = [];
  let lastEnd = -1;
  matches.forEach((match) => {
    if (match.start >= lastEnd) {
      cleanMatches.push(match);
      lastEnd = match.end;
    }
  });

  let cursor = 0;
  cleanMatches.forEach((match) => {
    if (match.start > cursor) {
      container.append(text.slice(cursor, match.start));
    }
    const mark = document.createElement("span");
    mark.className = `clue-mark clue-${clueColors[match.clueIndex % clueColors.length]}`;
    mark.textContent = text.slice(match.start, match.end);
    container.appendChild(mark);
    cursor = match.end;
  });

  if (cursor < text.length) {
    container.append(text.slice(cursor));
  }
}

function selectQuestion(id) {
  state.selectedId = id;
  const question = findQuestion(id);
  renderPassage();
  els.emptyState.classList.add("hidden");
  els.questionBox.classList.remove("hidden");
  els.questionNumber.textContent = `第 ${id} 题`;
  els.questionCategory.textContent = question.category;
  renderPosStep(question);
  renderOptionPreview(question);
  renderToolStep(question);
  renderAnswerStep(question);
  renderSentenceCheck(question);
}

function renderOptionPreview(question) {
  els.optionPreview.innerHTML = "";
  question.options.forEach((option, index) => {
    const item = document.createElement("span");
    item.className = "option-preview-pill";
    item.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
    els.optionPreview.appendChild(item);
  });
}

function renderPosStep(question) {
  els.posOptions.innerHTML = "";
  els.posFeedback.className = "feedback";

  document.querySelector("#posStep").classList.remove("hidden");
  const hasCollocation = question.collocation && question.collocation !== "无";
  const choices = [
    { label: "固定搭配", value: true },
    { label: "没有固定搭配", value: false }
  ];

  choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.textContent = choice.label;
    if (state.posPassed[question.id] && choice.value === hasCollocation) {
      button.classList.add("correct");
    }
    button.addEventListener("click", () => chooseCollocationStep(question, choice.value, button));
    els.posOptions.appendChild(button);
  });

  if (state.posPassed[question.id]) {
    showCollocationStepResult(question);
  } else {
    els.posFeedback.textContent = "";
  }
  toggleAnswerVisibility(question);
}

function chooseCollocationStep(question, answer, button) {
  document.querySelectorAll("#posOptions .choice-button").forEach((item) => {
    item.classList.remove("correct", "wrong");
  });
  const hasCollocation = question.collocation && question.collocation !== "无";
  if (answer === hasCollocation) {
    state.posPassed[question.id] = true;
    button.classList.add("correct");
    showCollocationStepResult(question);
  } else {
    state.posPassed[question.id] = false;
    button.classList.add("wrong");
    els.posFeedback.className = "feedback bad";
    els.posFeedback.textContent = "再看看空格前后的结构信号，判断这里是否有固定搭配。";
  }
  renderPassage();
  toggleAnswerVisibility(question);
}

function showCollocationStepResult(question) {
  const hasCollocation = question.collocation && question.collocation !== "无";
  els.posFeedback.className = "feedback good";
  if (hasCollocation) {
    els.posFeedback.innerHTML = `
      <div class="collocation-box">
        <strong>${question.collocation}</strong>
        <span>${question.collocationType || "固定搭配"}</span>
        <p>${question.collocationBreakdown || ""}</p>
      </div>
    `;
  } else {
    els.posFeedback.textContent = "判断正确：本题没有固定搭配，继续寻找上下文线索。";
  }
}

function renderToolStep(question) {
  const tool = getTool(question);
  els.toolTitle.textContent = tool.title;
  els.toolGuide.innerHTML = buildToolGuide(question, tool);
  els.clueWords.innerHTML = "";
  question.clues.forEach((clue, clueIndex) => {
    const pill = document.createElement("button");
    pill.className = `clue-pill clue-${clueColors[clueIndex % clueColors.length]}`;
    pill.textContent = clue;
    pill.addEventListener("click", () => {
      pill.classList.toggle("choice-button");
      pill.classList.toggle("correct");
    });
    els.clueWords.appendChild(pill);
  });
}

function buildToolGuide(question, tool) {
  const base = `<p>${tool.guide}</p>`;
  if (!question.collocation || question.collocation === "无") return base;
  return `
    ${base}
    <div class="collocation-box">
      <strong>固定搭配：${question.collocation}</strong>
      <span>${question.collocationType}</span>
      <p>${question.collocationBreakdown}</p>
    </div>
  `;
}

function getTool(question) {
  if (question.pos === "固定搭配" || question.category.includes("固定搭配")) {
    return {
      title: "搭配放大镜",
      guide: "先识别固定搭配的结构，再检查空格前后的动词、介词、宾语或句型是否匹配。"
    };
  }
  if (["名词", "动词", "代词"].includes(question.pos)) {
    return {
      title: "柯南画线笔",
      guide: "先点亮线索词，再选择答案。名词、动词题重点找原词复现、同义复现或上下文语义场。"
    };
  }
  if (question.pos === "形容词副词") {
    return {
      title: "正负号印章",
      guide: "先判断局部情绪是正向、负向还是比较关系，再排除不合态度的选项。"
    };
  }
  if (question.pos === "连词逻辑") {
    return {
      title: "逻辑探测器",
      guide: "先看前后句是转折、因果、并列还是替代关系，再选择逻辑词。"
    };
  }
  return {
    title: "结构放大镜",
    guide: "观察空格前后的固定搭配、语法结构和语义关系。"
  };
}

function renderAnswerStep(question) {
  els.answerOptions.innerHTML = "";
  els.answerFeedback.className = "feedback";
  els.answerFeedback.textContent = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
    if (state.answers[question.id] === option) {
      button.classList.add(option === question.answer ? "correct" : "wrong");
    }
    button.addEventListener("click", () => chooseAnswer(question, option, button));
    els.answerOptions.appendChild(button);
  });
}

function chooseAnswer(question, option, button) {
  state.answers[question.id] = option;
  document.querySelectorAll("#answerOptions .choice-button").forEach((item) => {
    item.classList.remove("correct", "wrong");
  });
  button.classList.add(option === question.answer ? "correct" : "wrong");
  els.answerFeedback.className = option === question.answer ? "feedback good" : "feedback bad";
  els.answerFeedback.textContent = option === question.answer ? `答对了：${question.explanation}` : "先保留你的选择，提交后会进入错题复盘。";
  renderPassage();
  renderSentenceCheck(question);
  updateProgress();
  if (allAnswered()) showResult();
}

function toggleAnswerVisibility(question) {
  const passed = Boolean(state.posPassed[question.id]);
  els.toolStep.classList.toggle("hidden", !passed);
  els.answerStep.classList.toggle("hidden", !passed);
  els.sentenceCheckStep.classList.toggle("hidden", !passed || !state.answers[question.id]);
}

function renderSentenceCheck(question) {
  const selectedAnswer = state.answers[question.id];
  if (!selectedAnswer) {
    els.sentenceCheckStep.classList.add("hidden");
    els.sentenceCheck.textContent = "";
    return;
  }

  els.sentenceCheckStep.classList.remove("hidden");
  els.sentenceCheck.innerHTML = "";
  getSentencePartsForBlank(question.id).forEach((part) => {
    if (part.type === "text") {
      els.sentenceCheck.append(part.value);
      return;
    }
    const token = document.createElement("span");
    token.className = "chosen-answer-token";
    token.textContent = selectedAnswer;
    els.sentenceCheck.appendChild(token);
  });
}

function getSentencePartsForBlank(blankId) {
  const flatParts = lesson.passage.map((part) => {
    if (typeof part === "string") return { type: "text", value: part };
    return { type: "blank", id: part.blank };
  });
  const blankIndex = flatParts.findIndex((part) => part.type === "blank" && part.id === blankId);
  if (blankIndex === -1) return [];

  let startIndex = blankIndex;
  let startOffset = 0;
  for (let i = blankIndex; i >= 0; i -= 1) {
    const part = flatParts[i];
    if (part.type !== "text") continue;
    const offset = findSentenceStartOffset(part.value);
    if (offset !== -1) {
      startIndex = i;
      startOffset = offset;
      break;
    }
  }

  let endIndex = blankIndex;
  let endOffset = null;
  for (let i = blankIndex; i < flatParts.length; i += 1) {
    const part = flatParts[i];
    if (part.type !== "text") continue;
    const offset = findSentenceEndOffset(part.value);
    if (offset !== -1) {
      endIndex = i;
      endOffset = offset;
      break;
    }
  }

  const sentenceParts = [];
  for (let i = startIndex; i <= endIndex; i += 1) {
    const part = flatParts[i];
    if (part.type === "blank") {
      if (part.id === blankId) {
        sentenceParts.push({ type: "blank" });
      } else {
        const otherAnswer = state.answers[part.id] || "____";
        sentenceParts.push({ type: "text", value: otherAnswer });
      }
      continue;
    }

    let value = part.value;
    if (i === startIndex) value = value.slice(startOffset);
    if (i === endIndex && endOffset !== null) value = value.slice(0, endOffset);
    sentenceParts.push({ type: "text", value });
  }

  return sentenceParts;
}

function findSentenceStartOffset(text) {
  const punctuation = [".", "!", "?"];
  let offset = -1;
  punctuation.forEach((mark) => {
    const markIndex = text.lastIndexOf(mark);
    if (markIndex > offset) offset = markIndex;
  });
  if (offset === -1) return 0;
  let start = offset + 1;
  while (start < text.length && /\s|"/.test(text[start])) start += 1;
  return start;
}

function findSentenceEndOffset(text) {
  const match = text.match(/[.!?]["]?/);
  return match ? match.index + match[0].length : -1;
}

function getLessonCollocations() {
  const seen = new Set();
  return lesson.questions
    .filter((question) => question.collocation && question.collocation !== "无")
    .map((question) => ({
      id: question.id,
      collocation: question.collocation,
      type: question.collocationType && question.collocationType !== "无" ? question.collocationType : "固定搭配",
      breakdown: question.collocationBreakdown && question.collocationBreakdown !== "无" ? question.collocationBreakdown : "",
      explanation: question.explanation || ""
    }))
    .filter((item) => {
      const key = `${item.collocation}|${item.breakdown}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function getCollocationMeaning(item) {
  const text = (item.explanation || "").trim();
  if (!text) return "根据本题语境理解这个固定搭配的中文含义。";
  const sentence = text.split(/[。！？]/)[0];
  return sentence ? `${sentence}。` : text;
}

function renderCollocationReview() {
  if (!els.collocationReview) return;
  const items = getLessonCollocations();

  if (!items.length) {
    els.collocationReview.innerHTML = `
      <div class="collocation-review-heading">
        <span>固定搭配整理</span>
        <strong>本篇无重点固定搭配</strong>
      </div>
      <p class="collocation-empty">这一篇更适合把注意力放在上下文线索、逻辑关系和情感走向上。</p>
    `;
    return;
  }

  els.collocationReview.innerHTML = `
    <div class="collocation-review-heading">
      <span>固定搭配整理</span>
      <strong>本篇 ${items.length} 个重点搭配</strong>
    </div>
    <div class="collocation-review-list">
      ${items.map((item) => `
        <article class="collocation-review-card">
          <div>
            <span>第 ${item.id} 题 · ${item.type}</span>
            <strong>${item.collocation}</strong>
          </div>
          ${item.breakdown ? `<p>${item.breakdown}</p>` : ""}
        </article>
      `).join("")}
    </div>
  `;
}

renderCollocationReview = function() {
  if (!els.collocationReview) return;
  const items = getLessonCollocations();

  if (!items.length) {
    els.collocationReview.innerHTML = `
      <div class="collocation-review-heading">
        <span>固定搭配整理</span>
        <strong>本篇无重点固定搭配</strong>
      </div>
      <p class="collocation-empty">这一篇更适合把注意力放在上下文线索、逻辑关系和情感走向上。</p>
    `;
    return;
  }

  els.collocationReview.innerHTML = `
    <div class="collocation-review-heading">
      <span>固定搭配整理</span>
      <strong>本篇 ${items.length} 个重点搭配</strong>
    </div>
    <div class="collocation-review-list">
      ${items.map((item) => `
        <button class="collocation-review-card" type="button" aria-pressed="false">
          <span class="collocation-card-inner">
            <span class="collocation-card-face collocation-card-front">
              <span>第 ${item.id} 题 · 中文提示</span>
              <strong>${getCollocationMeaning(item)}</strong>
              <small>点击翻看英文固定搭配</small>
            </span>
            <span class="collocation-card-face collocation-card-back">
              <span>${item.type}</span>
              <strong>${item.collocation}</strong>
              ${item.breakdown ? `<small>${item.breakdown}</small>` : ""}
            </span>
          </span>
        </button>
      `).join("")}
    </div>
  `;

  els.collocationReview.querySelectorAll(".collocation-review-card").forEach((card) => {
    card.addEventListener("click", () => {
      const isFlipped = card.classList.toggle("flipped");
      card.setAttribute("aria-pressed", String(isFlipped));
    });
  });
};

function showVerify() {
  unlockPanel("verify");
  els.verify.classList.remove("hidden");
  renderCollocationReview();
  renderFilledPassage();
  resetSentenceAudio();
}

function showResult() {
  unlockPanel("result");
  els.result.classList.remove("hidden");
  setStepEnabled("result", true);
  renderResult();
  document.querySelector('[data-jump="result"]').click();
}

function renderFilledPassage() {
  els.filledPassage.innerHTML = "";
  state.readSentences = lesson.verifySentences;
  state.readSentences.forEach((sentenceItem, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "read-sentence";
    button.dataset.index = String(index);
    renderSentenceWithAnswers(button, sentenceItem);
    button.addEventListener("click", () => playSentence(index));
    els.filledPassage.appendChild(button);
    els.filledPassage.append(" ");
  });
  showSentenceMeaning(null);
}

function renderSentenceWithAnswers(container, sentenceItem) {
  const answers = sentenceItem.answers || [];
  if (!answers.length) {
    container.textContent = sentenceItem.english;
    return;
  }

  const matches = [];
  answers.forEach((answer, answerIndex) => {
    const start = sentenceItem.english.toLowerCase().indexOf(answer.toLowerCase());
    if (start !== -1) {
      matches.push({
        start,
        end: start + answer.length,
        answerIndex
      });
    }
  });
  matches.sort((a, b) => a.start - b.start);

  let cursor = 0;
  matches.forEach((match) => {
    if (match.start > cursor) {
      container.append(sentenceItem.english.slice(cursor, match.start));
    }
    const token = document.createElement("span");
    token.className = `filled-answer answer-${answerColors[match.answerIndex % answerColors.length]}`;
    token.textContent = sentenceItem.english.slice(match.start, match.end);
    container.appendChild(token);
    cursor = match.end;
  });
  if (cursor < sentenceItem.english.length) {
    container.append(sentenceItem.english.slice(cursor));
  }
}

function bindStaticEvents() {
  document.querySelectorAll(".step-item").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.disabled) return;
      document.querySelectorAll(".step-item").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      document.querySelector(`#${button.dataset.jump}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  els.resetBtn.addEventListener("click", () => {
    resetPracticeState();
    resetSentenceAudio();
    renderPassage();
    updateProgress();
    renderLessonLibrary();
    renderHomeLibrary();
  });

  els.backHomeBtn.addEventListener("click", enterHome);
  els.resultHomeBtn.addEventListener("click", enterHome);
}

function playSentence(index) {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    els.readStatus.textContent = "当前浏览器不支持朗读功能";
    return;
  }

  state.readIndex = index;
  const sentenceItem = state.readSentences[index];
  if (!sentenceItem) return;

  stopSpeech();
  highlightReadSentence(index);
  showSentenceMeaning(index);
  els.readStatus.textContent = `准备朗读第 ${index + 1} 句`;

  const utterance = new SpeechSynthesisUtterance(sentenceItem.english);
  utterance.lang = "en-US";
  utterance.rate = 0.86;
  utterance.pitch = 1;
  const englishVoice = getEnglishVoice();
  if (englishVoice) {
    utterance.voice = englishVoice;
  }
  utterance.onstart = () => {
    els.readStatus.textContent = `正在朗读第 ${index + 1} 句`;
  };
  utterance.onend = () => {
    els.readStatus.textContent = `已朗读第 ${index + 1} 句`;
  };
  utterance.onerror = () => {
    els.readStatus.textContent = "朗读被浏览器中断：请确认设备音量已打开，或换手机/平板浏览器测试";
  };

  window.speechSynthesis.resume();
  window.setTimeout(() => {
    window.speechSynthesis.speak(utterance);
  }, 80);
}

function getEnglishVoice() {
  const voices = window.speechSynthesis.getVoices();
  return voices.find((voice) => voice.lang === "en-US") || voices.find((voice) => voice.lang.startsWith("en")) || null;
}

function highlightReadSentence(index) {
  document.querySelectorAll(".read-sentence").forEach((sentence) => {
    sentence.classList.toggle("reading", Number(sentence.dataset.index) === index);
    sentence.classList.toggle("read-done", Number(sentence.dataset.index) < index);
  });
}

function showSentenceMeaning(index) {
  state.meaningIndex = index;
  document.querySelectorAll(".read-sentence").forEach((sentence) => {
    sentence.classList.toggle("meaning-active", Number(sentence.dataset.index) === index);
  });

  if (index === null || index === undefined) {
    state.meaningIndex = null;
    els.sentenceMeaning.innerHTML = "<strong>句意</strong><p>点击上方任意一句，查看中文意思。</p>";
    return;
  }

  const sentenceItem = state.readSentences[index];
  els.sentenceMeaning.innerHTML = `
    <strong>第 ${index + 1} 句中文意思</strong>
    <p>${sentenceItem.chinese}</p>
  `;
}

function resetSentenceAudio() {
  stopSpeech();
  state.readIndex = 0;
  els.readStatus.textContent = "点击任意英文句子即可朗读";
  highlightReadSentence(-1);
  showSentenceMeaning(null);
}

function stopSpeech() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function renderResult() {
  const wrong = lesson.questions.filter((question) => state.answers[question.id] !== question.answer);
  const score = lesson.questions.length - wrong.length;
  markLessonDone(score);
  addMistakesToNotebook(wrong);
  renderLessonLibrary();
  renderHomeLibrary();
  els.scoreBox.innerHTML = `<strong>本次得分：${score} / ${lesson.questions.length}</strong><p>错题数：${wrong.length}</p>`;
  els.mistakeTable.innerHTML = "";
  if (wrong.length === 0) {
    els.mistakeTable.innerHTML = '<div class="mistake-card"><h4>全部正确</h4><p>这次流程执行得很完整，可以继续挑战下一篇。</p></div>';
    return;
  }
  wrong.forEach((question) => {
    const card = document.createElement("article");
    card.className = "mistake-card";
    card.innerHTML = `
      <h4>第 ${question.id} 题 · ${question.category}</h4>
      <p>你的答案：${state.answers[question.id] || "未作答"}；正确答案：${question.answer}</p>
      <p>线索词：${question.clues.join(" / ")}</p>
      <p>解析：${question.explanation}</p>
    `;
    els.mistakeTable.appendChild(card);
  });
}

function renderNotebook() {
  const records = getNotebookRecords();
  if (!records.length) {
    els.notebookSummary.innerHTML = `
      <div class="notebook-empty">
        <strong>暂时还没有错题</strong>
        <p>完成练习后，错题会自动进入这里，并按考点类型整理。</p>
      </div>
    `;
    els.notebookGroups.innerHTML = "";
    return;
  }

  const groups = records.reduce((bucket, record) => {
    const key = record.category || "未分类";
    if (!bucket[key]) bucket[key] = [];
    bucket[key].push(record);
    return bucket;
  }, {});

  els.notebookSummary.innerHTML = `
    <div class="notebook-stat"><strong>${records.length}</strong><span>累计错题</span></div>
    <div class="notebook-stat"><strong>${Object.keys(groups).length}</strong><span>涉及类型</span></div>
    <div class="notebook-stat"><strong>${new Set(records.map((record) => record.lessonId)).size}</strong><span>来源文章</span></div>
  `;

  els.notebookGroups.innerHTML = "";
  Object.entries(groups)
    .sort((a, b) => b[1].length - a[1].length)
    .forEach(([category, items]) => {
      const group = document.createElement("article");
      group.className = "notebook-group";
      group.innerHTML = `
        <div class="notebook-group-head">
          <h4>${category}</h4>
          <span>${items.length} 题</span>
        </div>
        <p class="rule-tip">${categoryTips[category] || "回看原文线索，整理自己当时的判断路径，形成固定检查动作。"}</p>
        <div class="notebook-items">
          ${items
            .slice(-6)
            .reverse()
            .map(
              (item) => `
                <div class="notebook-item">
                  <strong>${item.lessonTitle} · 第 ${item.questionId} 题</strong>
                  <p>你的答案：${item.selected}；正确答案：${item.answer}</p>
                  <p>线索：${item.clues.join(" / ")}</p>
                  <p>${item.explanation}</p>
                </div>
              `
            )
            .join("")}
        </div>
      `;
      els.notebookGroups.appendChild(group);
    });
}

function updateProgress() {
  const answered = Object.keys(state.answers).length;
  const total = lesson.questions.length;
  els.progressText.textContent = `${answered} / ${total} 已完成`;
  els.progressBar.style.width = `${Math.round((answered / total) * 100)}%`;
}

function unlockPanel(id) {
  document.querySelector(`#${id}`).classList.remove("locked");
}

function setStepEnabled(id, enabled) {
  const button = document.querySelector(`[data-jump="${id}"]`);
  if (button) button.disabled = !enabled;
}

function allAnswered() {
  return lesson.questions.every((question) => state.answers[question.id]);
}

function findQuestion(id) {
  return lesson.questions.find((question) => question.id === id);
}

init();
