import { Chapter, Character } from './types';

export const characters: Character[] = [
  {
    name: "徐锡麟 (Xu Xilin)",
    role: "革命先烈 / Revolutionist",
    description: "绍兴人，光复会核心成员。为了掌握兵权推翻清廷，不惜'以身许国'，潜伏由于清廷内部。最后在安庆起义中牺牲。"
  },
  {
    name: "秋瑾 (Qiu Jin)",
    role: "鉴湖女侠 / Revolutionist",
    description: "徐锡麟的同乡与战友，负责在浙江联络会党，与徐锡麟在安徽的行动遥相呼应。"
  },
  {
    name: "恩铭 (En Ming)",
    role: "安徽巡抚 / Qing Governor",
    description: "清廷大员，对徐锡麟有知遇之恩，但这成为了徐锡麟内心'私恩可舍，大义难违'的痛苦抉择点。"
  },
  {
    name: "“我” (The Narrator)",
    role: "当代大学生 / Student",
    description: "迷茫的当代青年，通过一场跨越百年的梦境，见证了徐锡麟的牺牲，从而找到了人生的方向。"
  },
  {
    name: "陈伯平 & 马宗汉",
    role: "学生 / Comrades",
    description: "徐锡麟的学生与追随者，在安庆起义中英勇战斗，直至生命最后一刻。"
  }
];

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "阅兵入梦",
    year: "现代 (Modern Day)",
    location: "大学寝室",
    summary: "迷茫的大学生在观看抗战胜利阅兵直播时，伴着窗外的桂花香陷入梦境。",
    content: "九月的绍兴，秋阳温吞。我正看着电脑屏幕上的阅兵直播，室友阿杰感叹着坦克的威武。我心中涌起一阵热乎劲，那是对国家的自豪，但随即被对未来的迷茫压了下去。恍惚间，屏幕里的红旗变成了老家河埠头的红布巾，我跌入了一个百年前的梦。",
    quote: "英雄从未远去，他们的精神，正等着我们以平凡的坚守、坚定的担当，续写新的篇章。",
    themeColor: 'modern',
    icon: 'Monitor'
  },
  {
    id: 2,
    title: "梦寻绍兴",
    year: "清末 (Late Qing)",
    location: "绍兴东河沿",
    summary: "梦回清末绍兴，在茶馆偶遇徐锡麟，见证他为了百姓疾苦与人争辩。",
    content: "醒来时，身穿蓝布长衫，置身于清末的绍兴水乡。在春和茶馆，我遇见了一个清瘦却目光坚定的书生——徐锡麟。他斥责那些安分守己的言论，认为若无人敢做'疯事'，国家将永无宁日。",
    quote: "若无人敢担风险，无人敢站出来，后来者又凭什么能有安宁日子过？",
    themeColor: 'historical-calm',
    icon: 'Coffee'
  },
  {
    id: 3,
    title: "热诚之火",
    year: "光绪年间",
    location: "热诚学堂 & 特别书局",
    summary: "徐锡麟创办学堂与书局，传播革命火种。",
    content: "徐先生办起了'热诚学堂'，教穷苦孩子读书明理；又盘下书铺改为'特别书局'，秘密印制《醒世录》等革命刊物。尽管父亲徐凤鸣反对，认为这是惹祸上身，但徐先生坚持'教育是火，思想是薪'。",
    quote: "教育是火，思想是薪。咱们现在做的，就是添薪，让火别灭。",
    themeColor: 'historical-calm',
    icon: 'BookOpen'
  },
  {
    id: 4,
    title: "大通学堂",
    year: "光绪三十一年",
    location: "绍兴大通学堂",
    summary: "学堂变成练兵场，秋瑾加盟，训练青年军。",
    content: "徐先生将废弃的关帝庙改为'大通学堂'，明为教学，暗为练兵。秋瑾女士也从日本归来，教女学生习武。这里成为了埋藏在绍兴城郊的兵工厂，培养着要掀翻旧世道的人。",
    quote: "咱们读书，不只是为了识几个字，是为了知道自己的根在哪里，知道该为谁拼命。",
    themeColor: 'historical-tense',
    icon: 'Sword'
  },
  {
    id: 5,
    title: "潜入清廷",
    year: "光绪三十二年",
    location: "安徽安庆",
    summary: "为掌兵权，徐锡麟捐官潜伏，博取恩铭信任。",
    content: "徐先生意识到光靠嘴说没用，必须掌握兵权。他利用表叔的关系，捐官进入安庆，博得了安徽巡抚恩铭的赏识，先后掌管陆军小学堂和巡警学堂。这是一步险棋，他成为了'卧底'。",
    quote: "当官不是目的，是手段。咱们要的是清廷的兵权，等把枪杆子拿到手，才能让这些学生，让天下的百姓，真的站起来。",
    themeColor: 'historical-tense',
    icon: 'Building'
  },
  {
    id: 6,
    title: "利剑出鞘",
    year: "光绪三十三年七月六日",
    location: "安徽巡警学堂",
    summary: "计划泄露，起义被迫提前。徐锡麟借毕业典礼刺杀恩铭。",
    content: "上海党羽被捕，名册泄露。徐锡麟决定提前起义。在巡警学堂毕业典礼上，徐锡麟掏出炸弹扔向恩铭，随即双枪连发。恩铭中弹，起义爆发。面对对自己有知遇之恩的恩铭，徐锡麟选择了大义。",
    quote: "私恩可舍，大义难违！",
    themeColor: 'historical-tragic',
    icon: 'Flame'
  },
  {
    id: 7,
    title: "血火困局",
    year: "光绪三十三年七月六日午后",
    location: "安庆军械所",
    summary: "寡不敌众，退守军械所，殊死搏斗。",
    content: "起义军冲向军械所，但清军重兵包围。陈伯平为护徐锡麟牺牲，马宗汉被俘。徐锡麟率领学生们在军械所与清军展开了最后的巷战。弹尽粮绝之际，徐锡麟仍不愿离去，最终被捕。",
    quote: "革命不死，火种不灭！",
    themeColor: 'historical-tragic',
    icon: 'ShieldAlert'
  },
  {
    id: 8,
    title: "大义赴死",
    year: "光绪三十三年七月七日",
    location: "安庆抚院门前",
    summary: "徐锡麟慷慨就义，剖心明志。",
    content: "公堂之上，徐锡麟毫无惧色，直言'只恨杀得太少'。行刑台上，他惨遭剖心，但他的鲜血化作了唤醒国人的千万道利刃。随后，秋瑾在绍兴轩亭口就义。浙皖起义虽败，却敲响了清廷的丧钟。",
    quote: "我本是革命党大首领... 我杀他，是为民族大义！",
    themeColor: 'historical-tragic',
    icon: 'Skull'
  },
  {
    id: 9,
    title: "薪火相传",
    year: "现代",
    location: "社区活动中心",
    summary: "梦醒之后，大学生投身志愿服务，传承精神。",
    content: "梦醒了，我不再迷茫。我整理了起义的史料，去社区给老人孩子讲徐锡麟和陈伯平的故事。我明白了，传承不是对着书本发呆，而是活成他们期待的样子。我手中的红笔，仿佛百年前的火种，正在延续。",
    quote: "不做看着雾的人，要做拨雾的人。",
    themeColor: 'modern',
    icon: 'Sun'
  }
];