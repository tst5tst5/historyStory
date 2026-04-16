import type { HistoryEvent } from '../types'

export const events: HistoryEvent[] = [
  // ===== 中国历史 - 朝代兴衰 =====
  { id: 'cn_dynasty_1', year: -2070, summary: '大禹治水，夏朝建立', detail: '大禹因治水有功，被舜选为继承人，建立夏朝，定都阳城，开启了中国历史的新纪元。', countryId: 'china', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'xia' },
  { id: 'cn_dynasty_2', year: -1600, summary: '商汤灭夏，商朝建立', detail: '商汤起兵伐夏，鸣条之战夏桀大败，商朝建立，定都于毫，后迁都至殷。', countryId: 'china', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'xia' },
  { id: 'cn_dynasty_3', year: -1046, summary: '武王伐纣，周朝建立', detail: '周武王在牧野之战大败商纣王，建立周朝，定都镐京，推行分封制。', countryId: 'china', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'zhou' },
  // 战国时期
  { id: 'cn_war_z1', year: -256, summary: '秦灭周，战国末期开始', detail: '秦昭襄王灭西周，周赧王去世，名义上的周天子不复存在，七雄争霸进入最后阶段。', countryId: 'china', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'warring' },
  { id: 'cn_war_z2', year: -260, summary: '长平之战', detail: '秦将白起大败赵括，坑杀赵军四十万，是战国时期规模最大的歼灭战。', countryId: 'china', continentId: 'asia', categoryId: 'war', dynastyId: 'warring' },
  { id: 'cn_war_z3', year: -247, summary: '秦王政即位', detail: '嬴政即位为秦王，时年13岁，吕不韦摄政。后亲政铲除嫪毐、吕不韦势力，开启统一六国之路。', countryId: 'china', continentId: 'asia', categoryId: 'politics', dynastyId: 'warring' },
  { id: 'cn_dynasty_4', year: -221, summary: '秦灭六国，统一中国', detail: '秦始皇灭韩、赵、魏、楚、燕、齐六国，建立中国历史上第一个大一统王朝。', countryId: 'china', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'qin' },
  { id: 'cn_dynasty_5', year: -206, summary: '秦亡，楚汉相争开始', detail: '刘邦攻入咸阳，秦王子婴投降，秦朝灭亡。项羽入关，分封十八路诸侯，楚汉争霸拉开序幕。', countryId: 'china', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'chuhan' },
  // 楚汉时期
  { id: 'cn_ch1', year: -205, summary: '项羽杀义帝，刘邦还定三秦', detail: '项羽杀楚义帝熊心，自称西楚霸王。刘邦暗度陈仓，还定三秦之地。', countryId: 'china', continentId: 'asia', categoryId: 'war', dynastyId: 'chuhan' },
  { id: 'cn_ch2', year: -204, summary: '彭城之战，刘邦惨败', detail: '项羽以3万骑兵大败刘邦56万联军于彭城（今徐州），刘邦仅率数十骑逃脱。', countryId: 'china', continentId: 'asia', categoryId: 'war', dynastyId: 'chuhan' },
  { id: 'cn_ch3', year: -203, summary: '楚汉中分天下', detail: '双方议和，以鸿沟为界中分天下，以西归汉，以东属楚，但项羽东归后刘邦立即撕毁盟约追击。', countryId: 'china', continentId: 'asia', categoryId: 'politics', dynastyId: 'chuhan' },
  { id: 'cn_ch4', year: -202, summary: '垓下之战，汉朝建立', detail: '韩信布十面埋伏之阵围困楚军于垓下，项羽乌江自刎。同年刘邦称帝，建立汉朝，定都长安。', countryId: 'china', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'chuhan' },
  { id: 'cn_dynasty_6', year: 220, summary: '曹丕篡汉，三国开始', detail: '曹丕逼迫汉献帝禅让，建立魏国，刘备在成都建立蜀汉，孙权建立东吴，三国时代正式开启。', countryId: 'china', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'three_kingdoms' },
  { id: 'cn_dynasty_7', year: 618, summary: '李渊称帝，唐朝建立', detail: '李渊在长安称帝，建立唐朝。唐朝是中国历史上最辉煌的朝代之一。', countryId: 'china', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'tang' },
  // 五代十国
  { id: 'cn_five_1', year: 875, summary: '黄巢起义爆发', detail: '黄巢领导大规模农民起义，转战南北，攻入长安，沉重打击唐朝统治，加速了唐王朝灭亡。', countryId: 'china', continentId: 'asia', categoryId: 'rebellion', dynastyId: 'tang' },
  { id: 'cn_five_2', year: 881, summary: '黄巢攻占长安，建立大齐', detail: '黄巢起义军攻入长安，唐僖宗出逃，黄巢即位称帝，国号大齐。', countryId: 'china', continentId: 'asia', categoryId: 'rebellion', dynastyId: 'tang' },
  { id: 'cn_five_3', year: 885, summary: '朱温降唐', detail: '黄巢大将朱温投降唐朝，被赐名朱全忠，成为镇压起义的主力。', countryId: 'china', continentId: 'asia', categoryId: 'war' },
  { id: 'cn_five_4', year: 891, summary: '王建割据西川', detail: '王建占据四川地区，后来建立前蜀政权，是十国之一。', countryId: 'china', continentId: 'asia', categoryId: 'politics' },
  { id: 'cn_five_5', year: 900, summary: '杨行密据淮南', detail: '杨行密控制淮南地区，后其子杨隆演建立南吴政权，为十国之一。', countryId: 'china', continentId: 'asia', categoryId: 'politics' },
  { id: 'cn_five_6', year: 904, summary: '朱温杀昭宗，立哀帝', detail: '朱温弑唐昭宗，立李柷为帝，迁都洛阳，控制朝政。', countryId: 'china', continentId: 'asia', categoryId: 'war', dynastyId: 'five_dynasties' },
  { id: 'cn_five_7', year: 907, summary: '朱温篡唐，后梁建立', detail: '朱温逼迫唐哀帝禅让，建立后梁，定都开封，五代开始，唐朝正式灭亡。', countryId: 'china', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'five_dynasties' },
  { id: 'cn_five_8', year: 907, summary: '王建称帝建前蜀', detail: '王建于成都称帝，国号蜀，史称前蜀，占据今四川、重庆等地，为十国之一。', countryId: 'china', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'five_dynasties' },
  { id: 'cn_five_9', year: 909, summary: '王审知建立闽国', detail: '王审知受封为闽王，统治福建地区，后建立闽国，为十国之一。', countryId: 'china', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'five_dynasties' },
  { id: 'cn_five_10', year: 917, summary: '刘隐建立南汉', detail: '刘隐之弟刘龑在广州称帝，国号大越，后改称汉，史称南汉，为十国之一。', countryId: 'china', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'five_dynasties' },
  { id: 'cn_five_11', year: 919, summary: '杨隆演称吴国王', detail: '杨隆演在扬州称吴国王，南吴正式建国，为十国之一，占据江淮地区。', countryId: 'china', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'five_dynasties' },
  { id: 'cn_five_12', year: 923, yearEnd: 926, summary: '李存勖灭梁，后唐建立', detail: '沙陀族李存勖灭后梁，建立后唐，定都洛阳，为五代第二朝。', countryId: 'china', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'five_dynasties' },
  { id: 'cn_five_13', year: 925, summary: '后唐灭前蜀', detail: '后唐庄宗派郭崇韬率兵灭前蜀，俘获王衍，前蜀灭亡。', countryId: 'china', continentId: 'asia', categoryId: 'war', dynastyId: 'five_dynasties' },
  { id: 'cn_five_14', year: 927, summary: '赵匡胤诞生', detail: '赵匡胤出生于洛阳夹马营，后周将领，后发动陈桥兵变建立宋朝。', countryId: 'china', continentId: 'asia', categoryId: 'culture' },
  { id: 'cn_five_15', year: 934, summary: '孟知祥建立后蜀', detail: '孟知祥在成都称帝，建立后蜀，为十国之一，占据四川地区。', countryId: 'china', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'five_dynasties' },
  { id: 'cn_five_16', year: 936, summary: '石敬瑭割燕云十六州', detail: '石敬瑭联合契丹灭后唐，建立后晋，割燕云十六州予契丹，自称儿皇帝，遗祸四百年。', countryId: 'china', continentId: 'asia', categoryId: 'war', dynastyId: 'five_dynasties' },
  { id: 'cn_five_17', year: 937, summary: '徐知诰建立南唐', detail: '徐知诰（李昪）废南吴帝，在金陵称帝，国号唐，史称南唐，为十国中最强盛者。', countryId: 'china', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'five_dynasties' },
  { id: 'cn_five_18', year: 937, summary: '殷国建立', detail: '王延钧在福州称帝，国号大殷，后改闽，为十国之一。', countryId: 'china', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'five_dynasties' },
  { id: 'cn_five_19', year: 943, summary: '闽国内乱分裂', detail: '闽国内部发生叛乱，分裂为殷国和闽国，后被南唐所灭。', countryId: 'china', continentId: 'asia', categoryId: 'war', dynastyId: 'five_dynasties' },
  { id: 'cn_five_20', year: 945, summary: '南唐灭闽', detail: '南唐中主李璟派兵伐闽，灭闽国，势力扩展至福建。', countryId: 'china', continentId: 'asia', categoryId: 'war', dynastyId: 'five_dynasties' },
  { id: 'cn_five_21', year: 946, summary: '契丹灭后晋', detail: '辽太宗耶律德光率军南下，灭后晋，俘虏出帝石重贵，中原短暂被契丹占领。', countryId: 'china', continentId: 'asia', categoryId: 'war', dynastyId: 'five_dynasties' },
  { id: 'cn_five_22', year: 947, summary: '刘知远建立后汉', detail: '河东节度使刘知远在太原称帝，建立后汉，收复中原，为五代第四朝。', countryId: 'china', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'five_dynasties' },
  { id: 'cn_five_23', year: 951, summary: '郭威篡位，后周建立', detail: '郭威推翻后汉，建立后周，定都开封，为五代最后一朝，开始改革图强。', countryId: 'china', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'five_dynasties' },
  { id: 'cn_five_24', year: 951, summary: '刘晟建立南楚', detail: '刘晟在广州称帝，延续南汉统治。同年刘言据湖南，建立楚国（南楚），为十国之一。', countryId: 'china', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'five_dynasties' },
  { id: 'cn_five_25', year: 954, summary: '柴荣继位后周', detail: '郭威去世，养子柴荣继位，是为周世宗，开始雄才大略的北伐与改革。', countryId: 'china', continentId: 'asia', categoryId: 'politics', dynastyId: 'five_dynasties' },
  { id: 'cn_five_26', year: 955, summary: '柴荣毁佛铸钱', detail: '后周世宗柴荣推行毁佛像铸币政策，充实财政以支持统一战争。', countryId: 'china', continentId: 'asia', categoryId: 'economy', dynastyId: 'five_dynasties' },
  { id: 'cn_five_27', year: 956, summary: '后周南征南唐', detail: '柴荣亲率大军征讨南唐，历时三年，迫使南唐割让江北十四州，去帝号称臣。', countryId: 'china', continentId: 'asia', categoryId: 'war', dynastyId: 'five_dynasties' },
  { id: 'cn_five_28', year: 958, summary: '南唐向后周称臣', detail: '南唐元宗李璟被迫去帝号，向周称臣，割江北之地，南唐国力大衰。', countryId: 'china', continentId: 'asia', categoryId: 'politics', dynastyId: 'five_dynasties' },
  { id: 'cn_five_29', year: 959, summary: '柴荣病逝，恭帝继位', detail: '柴荣在北伐幽州途中病逝，年仅七岁的柴宗训继位，是为周恭帝。', countryId: 'china', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'five_dynasties' },
  { id: 'cn_five_30', year: 960, summary: '陈桥兵变，宋朝建立', detail: '赵匡胤在陈桥驿被部下黄袍加身，建立宋朝，定都开封，结束五代十国混乱局面。', countryId: 'china', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'song' },
  { id: 'cn_dynasty_8', year: 960, summary: '赵匡胤陈桥兵变，宋朝建立', detail: '赵匡胤在陈桥驿被部下黄袍加身，建立宋朝，定都开封，结束五代十国混乱局面。', countryId: 'china', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'song' },
  { id: 'cn_dynasty_9', year: 1271, summary: '忽必烈建国号元', detail: '忽必烈改国号为元，定都大都（今北京），元朝成为中国历史上第一个由少数民族建立的大一统王朝。', countryId: 'china', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'yuan' },
  { id: 'cn_dynasty_10', year: 1368, summary: '朱元璋称帝，明朝建立', detail: '朱元璋在应天府称帝，建立明朝，遣徐达北伐，元顺帝北逃，元朝结束。', countryId: 'china', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'ming' },
  { id: 'cn_dynasty_11', year: 1644, summary: '清军入关，定都北京', detail: '吴三桂引清兵入关，击败李自成，清朝定都北京，开始了对中国近三百年的统治。', countryId: 'china', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'qing' },

  // ===== 中国历史 - 战争军事 =====
  { id: 'cn_war_1', year: -260, summary: '长平之战', detail: '秦将白起大败赵括，坑杀赵军四十万，是战国时期规模最大的歼灭战。', countryId: 'china', continentId: 'asia', categoryId: 'war', dynastyId: 'qin' },
  { id: 'cn_war_2', year: -207, summary: '巨鹿之战', detail: '项羽率楚军在巨鹿大破秦军，歼灭王离军二十万，奠定反秦胜局。', countryId: 'china', continentId: 'asia', categoryId: 'war', dynastyId: 'qin' },
  { id: 'cn_war_3', year: -200, summary: '白登之围', detail: '刘邦轻敌冒进，被匈奴冒顿单于围困于白登山七日，后用陈平计策脱围。', countryId: 'china', continentId: 'asia', categoryId: 'war', dynastyId: 'han' },
  { id: 'cn_war_4', year: 184, summary: '黄巾起义爆发', detail: '张角以太平道组织黄巾军起义，虽被镇压但动摇了东汉统治基础。', countryId: 'china', continentId: 'asia', categoryId: 'rebellion', dynastyId: 'han' },
  { id: 'cn_war_5', year: 1206, summary: '成吉思汗统一蒙古', detail: '铁木真统一蒙古各部，被尊为成吉思汗，建立大蒙古国。', countryId: 'china', continentId: 'asia', categoryId: 'war' },
  { id: 'cn_war_6', year: 1449, summary: '土木堡之变', detail: '明英宗亲征瓦剌，在土木堡被俘，明军精锐尽失，是明朝由盛转衰的转折点。', countryId: 'china', continentId: 'asia', categoryId: 'war', dynastyId: 'ming' },
  { id: 'cn_war_7', year: 1840, summary: '鸦片战争爆发', detail: '英国以林则徐虎门销烟为借口发动战争，清政府被迫签订《南京条约》。', countryId: 'china', continentId: 'asia', categoryId: 'war' },
  { id: 'cn_war_8', year: 1894, summary: '甲午战争爆发', detail: '日本发动侵华战争，北洋水师全军覆没，清政府被迫签订《马关条约》。', countryId: 'china', continentId: 'asia', categoryId: 'war', dynastyId: 'qing' },
  { id: 'cn_war_9', year: 1937, summary: '七七事变，全面抗战', detail: '日军在卢沟桥发动进攻，中华民族全面抗日战争开始。', countryId: 'china', continentId: 'asia', categoryId: 'war' },
  { id: 'cn_war_10', year: 1949, summary: '渡江战役，解放南京', detail: '人民解放军发起渡江战役，解放南京，国民党政权覆灭。', countryId: 'china', continentId: 'asia', categoryId: 'war' },

  // ===== 中国历史 - 农民起义 =====
  { id: 'cn_reb_1', year: 17, summary: '绿林起义', detail: '王匡、王凤在荆州起义，因据守绿林山而得名，最终配合刘秀推翻新朝。', countryId: 'china', continentId: 'asia', categoryId: 'rebellion', dynastyId: 'han' },
  { id: 'cn_reb_2', year: 1351, summary: '红巾军起义', detail: '韩山童、刘福通以白莲教组织红巾军起义，元末农民大起义爆发。', countryId: 'china', continentId: 'asia', categoryId: 'rebellion', dynastyId: 'yuan' },
  { id: 'cn_reb_3', year: 1628, summary: '明末农民起义', detail: '高迎祥、李自成、张献忠相继起义，最终推翻明朝统治。', countryId: 'china', continentId: 'asia', categoryId: 'rebellion', dynastyId: 'ming' },
  { id: 'cn_reb_4', year: 1851, summary: '太平天国起义', detail: '洪秀全在广西金田村发动起义，建立太平天国，鼎盛时期据有半壁江山。', countryId: 'china', continentId: 'asia', categoryId: 'rebellion', dynastyId: 'qing' },

  // ===== 中国历史 - 政治变革 =====
  { id: 'cn_pol_1', year: -140, summary: '汉武帝独尊儒术', detail: '汉武帝采纳董仲舒建议，罢黜百家独尊儒术，确立儒家思想的正统地位。', countryId: 'china', continentId: 'asia', categoryId: 'politics', dynastyId: 'han' },
  { id: 'cn_pol_2', year: -136, summary: '设立五经博士', detail: '汉武帝设立五经博士官职，专门研究儒家经典，儒学成为官学。', countryId: 'china', continentId: 'asia', categoryId: 'culture', dynastyId: 'han' },
  { id: 'cn_pol_3', year: 605, summary: '隋炀帝开凿大运河', detail: '隋炀帝下令开凿大运河，沟通海河、黄河、淮河、长江、钱塘江五大水系。', countryId: 'china', continentId: 'asia', categoryId: 'economy', dynastyId: 'sui' },
  { id: 'cn_pol_4', year: 606, summary: '隋炀帝创立进士科', detail: '隋炀帝正式设置进士科，科举制度正式诞生，打破了世家大族的政治垄断。', countryId: 'china', continentId: 'asia', categoryId: 'politics', dynastyId: 'sui' },
  { id: 'cn_pol_5', year: 1421, summary: '永乐迁都北京', detail: '明成祖朱棣正式迁都北京，以"天子守国门"之势抵御北方威胁。', countryId: 'china', continentId: 'asia', categoryId: 'politics', dynastyId: 'ming' },
  { id: 'cn_pol_6', year: 1898, summary: '戊戌变法', detail: '康有为、梁启超发起戊戌变法，光绪帝颁布《定国是诏》，试图改革图强。', countryId: 'china', continentId: 'asia', categoryId: 'politics', dynastyId: 'qing' },
  { id: 'cn_pol_7', year: 1911, summary: '辛亥革命', detail: '武昌起义爆发，各省响应，清朝统治土崩瓦解，中华民国成立。', countryId: 'china', continentId: 'asia', categoryId: 'independence' },

  // ===== 中国历史 - 文化科技 =====
  { id: 'cn_cul_1', year: -1046, summary: '周公制礼作乐', detail: '周公姬旦制定礼乐制度，奠定中华礼仪文明的基础。', countryId: 'china', continentId: 'asia', categoryId: 'culture', dynastyId: 'zhou' },
  { id: 'cn_cul_2', year: -551, summary: '孔子诞生', detail: '孔子诞生于鲁国陬邑，后创立儒家学派，被尊为万世师表。', countryId: 'china', continentId: 'asia', categoryId: 'culture' },
  { id: 'cn_cul_3', year: -479, summary: '孔子去世', detail: '孔子去世，享年七十三岁，其思想影响中国两千余年。', countryId: 'china', continentId: 'asia', categoryId: 'culture' },
  { id: 'cn_cul_4', year: -221, summary: '统一文字', detail: '秦始皇推行"书同文"政策，以小篆为标准字体，统一全国文字。', countryId: 'china', continentId: 'asia', categoryId: 'culture', dynastyId: 'qin' },
  { id: 'cn_cul_5', year: -138, summary: '张骞出使西域', detail: '汉武帝派张骞出使西域，开辟丝绸之路，促进东西方文化交流。', countryId: 'china', continentId: 'asia', categoryId: 'exploration', dynastyId: 'han' },
  { id: 'cn_cul_6', year: 105, summary: '蔡伦改进造纸术', detail: '东汉蔡伦改进造纸工艺，以树皮、麻头、破布等为原料造纸。', countryId: 'china', continentId: 'asia', categoryId: 'culture', dynastyId: 'han' },
  { id: 'cn_cul_7', year: 132, summary: '张衡发明地动仪', detail: '东汉张衡发明候风地动仪，能测定地震方位，是世界最早的地震仪器。', countryId: 'china', continentId: 'asia', categoryId: 'culture', dynastyId: 'han' },
  { id: 'cn_cul_8', year: 67, summary: '佛教传入中国', detail: '汉明帝派使者赴西域请回佛经，在洛阳建白马寺，佛教正式传入中国。', countryId: 'china', continentId: 'asia', categoryId: 'religion', dynastyId: 'han' },
  { id: 'cn_cul_9', year: 220, summary: '《说文解字》成书', detail: '许慎编纂《说文解字》，是中国第一部系统分析字形和考究字源的字典。', countryId: 'china', continentId: 'asia', categoryId: 'culture', dynastyId: 'han' },
  { id: 'cn_cul_10', year: 486, summary: '云冈石窟开凿', detail: '北魏文成帝下令在云冈开凿石窟，佛像雕刻艺术传入中国。', countryId: 'china', continentId: 'asia', categoryId: 'culture' },
  { id: 'cn_cul_11', year: 605, summary: '隋炀帝建科举', detail: '隋炀帝正式创立进士科，科举制度打破门阀政治。', countryId: 'china', continentId: 'asia', categoryId: 'culture', dynastyId: 'sui' },
  { id: 'cn_cul_12', year: 629, summary: '玄奘西行取经', detail: '玄奘独自西行印度求法，历时十七年，带回佛经六百余部。', countryId: 'china', continentId: 'asia', categoryId: 'exploration', dynastyId: 'tang' },
  { id: 'cn_cul_13', year: 847, summary: '鉴真东渡日本', detail: '唐代高僧鉴真历经六次东渡，终于到达日本，传播佛教和文化。', countryId: 'china', continentId: 'asia', categoryId: 'exploration', dynastyId: 'tang' },
  { id: 'cn_cul_14', year: 1088, summary: '毕昇发明活字印刷', detail: '北宋毕昇发明泥活字印刷术，比古腾堡早约四百年。', countryId: 'china', continentId: 'asia', categoryId: 'culture', dynastyId: 'song' },
  { id: 'cn_cul_15', year: 1234, summary: '火药用于军事', detail: '蒙古军队使用火药武器攻城，宋末元初火药技术成熟应用。', countryId: 'china', continentId: 'asia', categoryId: 'culture', dynastyId: 'song' },
  { id: 'cn_cul_16', year: 1405, summary: '郑和下西洋', detail: '明成祖派郑和率船队出使西洋，最远到达非洲东海岸。', countryId: 'china', continentId: 'asia', categoryId: 'exploration', dynastyId: 'ming' },
  { id: 'cn_cul_17', year: 1596, summary: '李时珍《本草纲目》成书', detail: '李时珍历时二十七年编纂《本草纲目》，收录药物一千八百余种。', countryId: 'china', continentId: 'asia', categoryId: 'culture', dynastyId: 'ming' },
  { id: 'cn_cul_18', year: 1637, summary: '宋应星《天工开物》出版', detail: '宋应星著《天工开物》，是世界上第一部关于农业和手工业的综合性著作。', countryId: 'china', continentId: 'asia', categoryId: 'culture', dynastyId: 'ming' },
  { id: 'cn_cul_19', year: 1715, summary: '曹雪芹诞生', detail: '《红楼梦》作者曹雪芹诞生，其著作被誉为中国古典小说巅峰之作。', countryId: 'china', continentId: 'asia', categoryId: 'culture', dynastyId: 'qing' },

  // ===== 中国历史 - 灾荒 =====
  { id: 'cn_dis_1', year: 2, summary: '汉末大瘟疫', detail: '东汉末年发生大规模瘟疫，死亡人数众多，曹操《蒿里行》有"白骨露于野"之句。', countryId: 'china', continentId: 'asia', categoryId: 'disaster', dynastyId: 'han' },
  { id: 'cn_dis_2', year: 134, summary: '陇西大地震', detail: '东汉陇西发生大地震，压杀四百余人，是有记载的最早大地震之一。', countryId: 'china', continentId: 'asia', categoryId: 'disaster', dynastyId: 'han' },
  { id: 'cn_dis_3', year: 1876, summary: '丁戊奇荒', detail: '华北发生特大旱灾，死亡人数达一千余万，是十九世纪最大的灾难之一。', countryId: 'china', continentId: 'asia', categoryId: 'disaster', dynastyId: 'qing' },

  // ===== 中国历史 - 经济贸易 =====
  { id: 'cn_eco_1', year: -119, summary: '汉武帝推行盐铁官营', detail: '汉武帝实行盐铁酒官营，增加财政收入，支持对匈奴战争。', countryId: 'china', continentId: 'asia', categoryId: 'economy', dynastyId: 'han' },
  { id: 'cn_eco_2', year: 1086, summary: '王安石变法', detail: '宋神宗支持王安石变法，推行青苗法、募役法等新法，意在富国强兵。', countryId: 'china', continentId: 'asia', categoryId: 'economy', dynastyId: 'song' },
  { id: 'cn_eco_3', year: 1723, summary: '摊丁入亩', detail: '雍正帝推行摊丁入亩，废除人头税，减轻无地农民负担。', countryId: 'china', continentId: 'asia', categoryId: 'economy', dynastyId: 'qing' },
  { id: 'cn_eco_4', year: 1842, summary: '《南京条约》签订', detail: '鸦片战争后签订《南京条约》，开放五口通商，割让香港。', countryId: 'china', continentId: 'asia', categoryId: 'economy' },
  { id: 'cn_eco_5', year: 1978, summary: '改革开放政策', detail: '中共十一届三中全会确定改革开放方针，中国经济开始腾飞。', countryId: 'china', continentId: 'asia', categoryId: 'economy' },

  // ===== 日本历史 =====
  { id: 'jp_1', year: 593, summary: '圣德太子摄政', detail: '圣德太子推行改革，制定十七条宪法，派遣遣隋使学习中国制度。', countryId: 'japan', continentId: 'asia', categoryId: 'politics', dynastyId: 'asuka' },
  { id: 'jp_2', year: 645, summary: '大化改新', detail: '孝德天皇推行大化改新，模仿唐朝制度建立中央集权体制。', countryId: 'japan', continentId: 'asia', categoryId: 'politics', dynastyId: 'asuka' },
  { id: 'jp_3', year: 710, summary: '平城京迁都', detail: '元明天皇迁都平城京（奈良），奈良时代开始，全面学习唐朝文化。', countryId: 'japan', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'nara' },
  { id: 'jp_4', year: 794, summary: '平安京迁都', detail: '桓武天皇迁都平安京（京都），平安时代开始。', countryId: 'japan', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'heian' },
  { id: 'jp_5', year: 1185, summary: '源平合战结束', detail: '坛之浦之战，平氏灭亡，源赖朝建立镰仓幕府，日本进入武家时代。', countryId: 'japan', continentId: 'asia', categoryId: 'war', dynastyId: 'heian' },
  { id: 'jp_6', year: 1192, summary: '镰仓幕府建立', detail: '源赖朝被封为征夷大将军，幕府体制正式确立，天皇大权旁落。', countryId: 'japan', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'kamakura' },
  { id: 'jp_7', year: 1274, summary: '文永之役', detail: '元世祖派军入侵日本，在九州博多湾登陆，遭台风袭击而败。', countryId: 'japan', continentId: 'asia', categoryId: 'war', dynastyId: 'kamakura' },
  { id: 'jp_8', year: 1336, summary: '室町幕府建立', detail: '足利尊氏在京都建立室町幕府，日本进入室町时代。', countryId: 'japan', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'muromachi' },
  { id: 'jp_9', year: 1467, summary: '应仁之乱', detail: '细川胜元与山名持丰之间的战争引发应仁之乱，日本进入战国时代。', countryId: 'japan', continentId: 'asia', categoryId: 'war', dynastyId: 'muromachi' },
  { id: 'jp_10', year: 1543, summary: '铁炮传入日本', detail: '葡萄牙人将火绳枪传入种子岛，日本开始发展火器技术。', countryId: 'japan', continentId: 'asia', categoryId: 'culture', dynastyId: 'muromachi' },
  { id: 'jp_11', year: 1603, summary: '江户幕府建立', detail: '德川家康被封为征夷大将军，在江户建立幕府，开启两百六十余年和平统治。', countryId: 'japan', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'edo' },
  { id: 'jp_12', year: 1639, summary: '锁国令颁布', detail: '德川幕府颁布锁国令，禁止外国人入境，日本进入长达两百余年的锁国时代。', countryId: 'japan', continentId: 'asia', categoryId: 'politics', dynastyId: 'edo' },
  { id: 'jp_13', year: 1853, summary: '黑船来航', detail: '美国东印度舰队司令佩里率舰队驶入浦贺港，强迫日本开国。', countryId: 'japan', continentId: 'asia', categoryId: 'war', dynastyId: 'edo' },
  { id: 'jp_14', year: 1868, summary: '明治维新开始', detail: '倒幕派在戊辰战争中获胜，天皇重新掌权，开始全面西化改革。', countryId: 'japan', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'meiji' },
  { id: 'jp_15', year: 1894, summary: '甲午战争爆发', detail: '日本发动侵华战争，清朝北洋水师在黄海海战中惨败。', countryId: 'japan', continentId: 'asia', categoryId: 'war', dynastyId: 'meiji' },
  { id: 'jp_16', year: 1905, summary: '日俄战争结束', detail: '日本在旅顺海战和对马海峡海战中击败俄国，成为亚洲第一个打败欧洲列强的国家。', countryId: 'japan', continentId: 'asia', categoryId: 'war', dynastyId: 'meiji' },
  { id: 'jp_17', year: 1945, summary: '日本投降，二战结束', detail: '美国在广岛和长崎投下原子弹，日本宣布无条件投降，二战结束。', countryId: 'japan', continentId: 'asia', categoryId: 'war' },

  // ===== 印度历史 =====
  { id: 'in_1', year: -1500, summary: '吠陀时代开始', detail: '雅利安人入侵印度次大陆，创造了吠陀文化和梵语。', countryId: 'india', continentId: 'asia', categoryId: 'culture' },
  { id: 'in_2', year: -563, summary: '释迦牟尼诞生', detail: '乔达摩·悉达多诞生于蓝毗尼，后创立佛教，成为世界三大宗教之一。', countryId: 'india', continentId: 'asia', categoryId: 'religion' },
  { id: 'in_3', year: -322, summary: '孔雀王朝建立', detail: '旃陀罗笈多建立孔雀王朝，统一印度大部分地区。', countryId: 'india', continentId: 'asia', categoryId: 'dynasty' },
  { id: 'in_4', year: -268, summary: '阿育王统治时期', detail: '孔雀王朝达到鼎盛，阿育王皈依佛教，推广佛法，建造众多佛塔。', countryId: 'india', continentId: 'asia', categoryId: 'dynasty' },
  { id: 'in_5', year: 320, summary: '笈多王朝兴起', detail: '旃陀罗笈多一世建立笈多王朝，印度进入古典黄金时代。', countryId: 'india', continentId: 'asia', categoryId: 'dynasty' },
  { id: 'in_6', year: 1206, summary: '德里苏丹国建立', detail: '库特布丁·艾伊拜克在德里建立伊斯兰苏丹国，统治北印度三百余年。', countryId: 'india', continentId: 'asia', categoryId: 'dynasty' },
  { id: 'in_7', year: 1398, summary: '帖木儿入侵印度', detail: '帖木儿率军入侵，攻克德里，屠杀十万居民，掠夺大量财富。', countryId: 'india', continentId: 'asia', categoryId: 'war' },
  { id: 'in_8', year: 1526, summary: '莫卧儿帝国建立', detail: '巴布尔在帕尼帕特战役中击败洛迪苏丹，建立莫卧儿帝国。', countryId: 'india', continentId: 'asia', categoryId: 'dynasty' },
  { id: 'in_9', year: 1600, summary: '英国东印度公司成立', detail: '英国女王伊丽莎白一世特许成立东印度公司，开始对印度的殖民扩张。', countryId: 'india', continentId: 'asia', categoryId: 'economy' },
  { id: 'in_10', year: 1757, summary: '普拉西战役', detail: '英国东印度公司在普拉西击败孟加拉纳瓦布，开始实际控制印度。', countryId: 'india', continentId: 'asia', categoryId: 'war' },
  { id: 'in_11', year: 1857, summary: '印度民族起义', detail: '印度士兵起义爆发，虽被镇压但动摇了英国殖民统治根基。', countryId: 'india', continentId: 'asia', categoryId: 'rebellion' },
  { id: 'in_12', year: 1947, summary: '印度独立', detail: '英国被迫同意印度独立，但同时实行印巴分治，造成大规模人口迁移。', countryId: 'india', continentId: 'asia', categoryId: 'independence' },

  // ===== 欧洲历史 =====
  // 古罗马
  { id: 'rm_1', year: -753, summary: '罗马建城', detail: '传说罗慕路斯在帕拉蒂尼山建城，罗马纪年开始。', countryId: 'rome', continentId: 'europe', categoryId: 'dynasty' },
  { id: 'rm_2', year: -509, summary: '罗马共和国建立', detail: '罗马推翻王政，建立共和国，设立两名执政官。', countryId: 'rome', continentId: 'europe', categoryId: 'politics', dynastyId: 'rome' },
  { id: 'rm_3', year: -264, summary: '第一次布匿战争', detail: '罗马与迦太基为争夺西西里爆发战争，持续二十三年。', countryId: 'rome', continentId: 'europe', categoryId: 'war', dynastyId: 'rome' },
  { id: 'rm_4', year: -218, summary: '汉尼拔翻越阿尔卑斯', detail: '迦太基名将汉尼拔率军翻越阿尔卑斯山，奇袭意大利。', countryId: 'rome', continentId: 'europe', categoryId: 'war', dynastyId: 'rome' },
  { id: 'rm_5', year: -73, summary: '斯巴达克起义', detail: '斯巴达克领导奴隶起义，转战意大利各地，给罗马统治沉重打击。', countryId: 'rome', continentId: 'europe', categoryId: 'rebellion', dynastyId: 'rome' },
  { id: 'rm_6', year: -44, summary: '凯撒遇刺', detail: '尤利乌斯·凯撒在元老院被布鲁图斯等人刺杀。', countryId: 'rome', continentId: 'europe', categoryId: 'politics', dynastyId: 'rome' },
  { id: 'rm_7', year: -27, summary: '屋大维建立罗马帝国', detail: '屋大维获奥古斯都称号，罗马从共和国转变为帝国。', countryId: 'rome', continentId: 'europe', categoryId: 'dynasty', dynastyId: 'rome' },
  { id: 'rm_8', year: 80, summary: '罗马斗兽场建成', detail: '罗马斗兽场（弗拉维奥剧场）建成，可容纳五万观众。', countryId: 'rome', continentId: 'europe', categoryId: 'culture', dynastyId: 'rome' },
  { id: 'rm_9', year: 395, summary: '罗马分裂为东西两部', detail: '狄奥多西一世死后，罗马帝国正式分裂为东、西两部分。', countryId: 'rome', continentId: 'europe', categoryId: 'politics', dynastyId: 'rome' },
  { id: 'rm_10', year: 476, summary: '西罗马帝国灭亡', detail: '日耳曼雇佣军废黜末代西罗马皇帝，标志着西罗马的终结。', countryId: 'rome', continentId: 'europe', categoryId: 'dynasty', dynastyId: 'rome' },

  // 希腊
  { id: 'gr_1', year: -776, summary: '第一届奥林匹克运动会', detail: '古希腊第一届奥林匹克运动会在奥林匹亚举行。', countryId: 'greece', continentId: 'europe', categoryId: 'culture' },
  { id: 'gr_2', year: -508, summary: '雅典民主制改革', detail: '克利斯提尼推行改革，确立雅典民主制度，划分十个选区。', countryId: 'greece', continentId: 'europe', categoryId: 'politics' },
  { id: 'gr_3', year: -490, summary: '马拉松战役', detail: '雅典军队在马拉松以少胜多大败波斯军队，希腊联军获胜。', countryId: 'greece', continentId: 'europe', categoryId: 'war' },
  { id: 'gr_4', year: -480, summary: '温泉关战役', detail: '斯巴达国王列奥尼达率三百勇士在温泉关阻击波斯大军。', countryId: 'greece', continentId: 'europe', categoryId: 'war' },
  { id: 'gr_5', year: -479, summary: '萨拉米斯海战', detail: '希腊海军在萨拉米斯海峡大败波斯海军，奠定希腊胜利基础。', countryId: 'greece', continentId: 'europe', categoryId: 'war' },
  { id: 'gr_6', year: -431, summary: '伯罗奔尼撒战争爆发', detail: '雅典与斯巴达两大城邦集团爆发战争，持续二十七年。', countryId: 'greece', continentId: 'europe', categoryId: 'war' },
  { id: 'gr_7', year: -338, summary: '马其顿征服希腊', detail: '腓力二世在喀罗尼亚战役击败希腊联军，确立马其顿对希腊的统治。', countryId: 'greece', continentId: 'europe', categoryId: 'war' },
  { id: 'gr_8', year: -336, summary: '亚历山大大帝继位', detail: '腓力二世遇刺身亡，亚历山大继位，开始征服世界之旅。', countryId: 'greece', continentId: 'europe', categoryId: 'dynasty' },
  { id: 'gr_9', year: -323, summary: '亚历山大大帝去世', detail: '亚历山大大帝在巴比伦病逝，年仅三十二岁，帝国随即分裂。', countryId: 'greece', continentId: 'europe', categoryId: 'dynasty' },

  // 英国
  { id: 'uk_1', year: 43, summary: '罗马征服不列颠', detail: '罗马皇帝克劳狄乌斯下令入侵不列颠，开始长达四百年的罗马统治。', countryId: 'uk', continentId: 'europe', categoryId: 'war' },
  { id: 'uk_2', year: 1066, summary: '诺曼征服英格兰', detail: '威廉公爵在黑斯廷斯战役击败哈罗德，建立诺曼王朝。', countryId: 'uk', continentId: 'europe', categoryId: 'war' },
  { id: 'uk_3', year: 1215, summary: '大宪章签署', detail: '约翰王被迫签署大宪章，确立王权受法律约束的原则。', countryId: 'uk', continentId: 'europe', categoryId: 'politics' },
  { id: 'uk_4', year: 1348, summary: '黑死病蔓延英国', detail: '黑死病（鼠疫）传入英国，在两年内夺去近半数人口。', countryId: 'uk', continentId: 'europe', categoryId: 'disaster' },
  { id: 'uk_5', year: 1455, summary: '玫瑰战争爆发', detail: '兰开斯特家族与约克家族为争夺王位爆发内战。', countryId: 'uk', continentId: 'europe', categoryId: 'war' },
  { id: 'uk_6', year: 1534, summary: '英国宗教改革', detail: '亨利八世通过《至尊法案》，英国国教脱离罗马教廷。', countryId: 'uk', continentId: 'europe', categoryId: 'religion' },
  { id: 'uk_7', year: 1588, summary: '击败西班牙无敌舰队', detail: '英国海军在英吉利海峡击败西班牙无敌舰队，开始海上霸权。', countryId: 'uk', continentId: 'europe', categoryId: 'war' },
  { id: 'uk_8', year: 1649, summary: '查理一世被处决', detail: '英国内战期间，议会处决查理一世，成立共和国。', countryId: 'uk', continentId: 'europe', categoryId: 'politics' },
  { id: 'uk_9', year: 1688, summary: '光荣革命', detail: '议会邀请威廉三世入主英国，确立君主立宪制。', countryId: 'uk', continentId: 'europe', categoryId: 'politics' },
  { id: 'uk_10', year: 1760, summary: '工业革命开始', detail: '瓦特改良蒸汽机，工业革命在英国蓬勃兴起。', countryId: 'uk', continentId: 'europe', categoryId: 'economy' },
  { id: 'uk_11', year: 1800, summary: '英国吞并爱尔兰', detail: '《联合法案》生效，大不列颠及爱尔兰联合王国成立。', countryId: 'uk', continentId: 'europe', categoryId: 'politics' },

  // 法国
  { id: 'fr_1', year: 800, summary: '查理曼加冕为帝', detail: '教皇利奥三世为查理曼加冕，神圣罗马帝国诞生。', countryId: 'france', continentId: 'europe', categoryId: 'dynasty' },
  { id: 'fr_2', year: 987, summary: '卡佩王朝建立', detail: '雨果·卡佩被推举为法兰西国王，开创卡佩王朝。', countryId: 'france', continentId: 'europe', categoryId: 'dynasty' },
  { id: 'fr_3', year: 1337, summary: '英法百年战争爆发', detail: '爱德华三世宣称拥有法国王位，英法百年战争开始。', countryId: 'france', continentId: 'europe', categoryId: 'war' },
  { id: 'fr_4', year: 1453, summary: '百年战争结束', detail: '法国收复除加莱外的所有失地，百年战争结束。', countryId: 'france', continentId: 'europe', categoryId: 'war' },
  { id: 'fr_5', year: 1789, summary: '法国大革命爆发', detail: '巴黎人民攻占巴士底狱，法国大革命开始。', countryId: 'france', continentId: 'europe', categoryId: 'independence' },
  { id: 'fr_6', year: 1793, summary: '路易十六被处决', detail: '法国革命法庭判处路易十六死刑，送上断头台。', countryId: 'france', continentId: 'europe', categoryId: 'politics' },
  { id: 'fr_7', year: 1804, summary: '拿破仑称帝', detail: '拿破仑加冕为法兰西皇帝，建立法兰西第一帝国。', countryId: 'france', continentId: 'europe', categoryId: 'dynasty' },
  { id: 'fr_8', year: 1815, summary: '拿破仑滑铁卢战败', detail: '拿破仑在滑铁卢被英普联军击败，百日王朝结束。', countryId: 'france', continentId: 'europe', categoryId: 'war' },
  { id: 'fr_9', year: 1870, summary: '普法战争爆发', detail: '普鲁士与法国爆发战争，法国在色当战役惨败。', countryId: 'france', continentId: 'europe', categoryId: 'war' },
  { id: 'fr_10', year: 1871, summary: '巴黎公社成立', detail: '普法战争后巴黎无产阶级建立巴黎公社，仅存七十二天。', countryId: 'france', continentId: 'europe', categoryId: 'rebellion' },

  // 德国
  { id: 'de_1', year: 843, summary: '凡尔登条约', detail: '查理曼三个孙子签订凡尔登条约，分割查理曼帝国，德意志王国诞生。', countryId: 'germany', continentId: 'europe', categoryId: 'politics' },
  { id: 'de_2', year: 962, summary: '奥托一世加冕', detail: '奥托一世被教皇加冕为皇帝，神圣罗马帝国建立。', countryId: 'germany', continentId: 'europe', categoryId: 'dynasty' },
  { id: 'de_3', year: 1517, summary: '马丁·路德宗教改革', detail: '路德发表《九十五条论纲》，反对赎罪券，引发宗教改革运动。', countryId: 'germany', continentId: 'europe', categoryId: 'religion' },
  { id: 'de_4', year: 1648, summary: '三十年战争结束', detail: '威斯特伐利亚和约签订，确立主权国家体系，现代国际关系诞生。', countryId: 'germany', continentId: 'europe', categoryId: 'war' },
  { id: 'de_5', year: 1806, summary: '神圣罗马帝国解散', detail: '拿破仑击败普鲁士后，神圣罗马帝国正式解散。', countryId: 'germany', continentId: 'europe', categoryId: 'politics' },
  { id: 'de_6', year: 1871, summary: '德意志统一', detail: '普法战争后普鲁士完成统一，德意志帝国在凡尔赛宫宣布成立。', countryId: 'germany', continentId: 'europe', categoryId: 'dynasty' },
  { id: 'de_7', year: 1914, summary: '第一次世界大战爆发', detail: '萨拉热窝事件后，欧洲列强陷入第一次世界大战。', countryId: 'germany', continentId: 'europe', categoryId: 'war' },
  { id: 'de_8', year: 1933, summary: '希特勒上台', detail: '希特勒被任命为德国总理，纳粹党开始统治德国。', countryId: 'germany', continentId: 'europe', categoryId: 'politics' },
  { id: 'de_9', year: 1939, summary: '第二次世界大战爆发', detail: '德国入侵波兰，英法对德宣战，第二次世界大战爆发。', countryId: 'germany', continentId: 'europe', categoryId: 'war' },
  { id: 'de_10', year: 1989, summary: '柏林墙倒塌', detail: '民主德国宣布开放柏林墙，东德人涌入西德，两德统一进程开始。', countryId: 'germany', continentId: 'europe', categoryId: 'politics' },

  // 俄罗斯
  { id: 'ru_1', year: 862, summary: '诺夫哥罗德建立', detail: '留里克被邀请到诺夫哥罗德统治，罗斯国家起源。', countryId: 'russia', continentId: 'europe', categoryId: 'dynasty' },
  { id: 'ru_2', year: 988, summary: '基辅罗斯皈依基督教', detail: '弗拉基米尔大公接受基督教，罗斯接受拜占庭文化。', countryId: 'russia', continentId: 'europe', categoryId: 'religion' },
  { id: 'ru_3', year: 1547, summary: '伊凡四世称沙皇', detail: '伊凡四世加冕为俄罗斯第一位沙皇，建立沙皇专制制度。', countryId: 'russia', continentId: 'europe', categoryId: 'dynasty' },
  { id: 'ru_4', year: 1613, summary: '罗曼诺夫王朝建立', detail: '米哈伊尔被推举为沙皇，罗曼诺夫王朝开始统治俄罗斯。', countryId: 'russia', continentId: 'europe', categoryId: 'dynasty' },
  { id: 'ru_5', year: 1700, summary: '彼得大帝改革', detail: '彼得一世开始全面西化改革，使俄罗斯走向现代化。', countryId: 'russia', continentId: 'europe', categoryId: 'politics' },
  { id: 'ru_6', year: 1812, summary: '拿破仑入侵俄国', detail: '拿破仑率六十万大军入侵俄国，在莫斯科遭遇严寒和游击战而惨败。', countryId: 'russia', continentId: 'europe', categoryId: 'war' },
  { id: 'ru_7', year: 1917, summary: '二月革命', detail: '俄国二月革命爆发，沙皇退位，罗曼诺夫王朝覆灭。', countryId: 'russia', continentId: 'europe', categoryId: 'independence' },
  { id: 'ru_8', year: 1917, summary: '十月革命', detail: '布尔什维克在列宁领导下发动起义，建立苏维埃政权。', countryId: 'russia', continentId: 'europe', categoryId: 'independence' },
  { id: 'ru_9', year: 1941, summary: '苏德战争爆发', detail: '德国发动巴巴罗萨行动，入侵苏联，卫国战争开始。', countryId: 'russia', continentId: 'europe', categoryId: 'war' },
  { id: 'ru_10', year: 1991, summary: '苏联解体', detail: '苏联正式解体，俄罗斯联邦成立，冷战结束。', countryId: 'russia', continentId: 'europe', categoryId: 'politics' },

  // ===== 非洲历史 =====
  { id: 'eg_1', year: -3100, summary: '上下埃及统一', detail: '美尼斯统一上下埃及，建立第一王朝，古埃及文明开始。', countryId: 'egypt', continentId: 'africa', categoryId: 'dynasty' },
  { id: 'eg_2', year: -2560, summary: '胡夫金字塔建成', detail: '古埃及最大金字塔胡夫金字塔建成，高约146米。', countryId: 'egypt', continentId: 'africa', categoryId: 'culture', dynastyId: 'egypt' },
  { id: 'eg_3', year: -1350, summary: '埃赫那吞宗教改革', detail: '法老埃赫那吞推行一神教改革，崇拜太阳神阿吞。', countryId: 'egypt', continentId: 'africa', categoryId: 'religion' },
  { id: 'eg_4', year: -332, summary: '亚历山大征服埃及', detail: '马其顿亚历山大大帝征服埃及，建立亚历山大城。', countryId: 'egypt', continentId: 'africa', categoryId: 'war' },
  { id: 'eg_5', year: 969, summary: '法蒂玛王朝建立开罗', detail: '法蒂玛王朝在埃及建立，营建新首都开罗。', countryId: 'egypt', continentId: 'africa', categoryId: 'dynasty' },
  { id: 'eg_6', year: 1517, summary: '奥斯曼帝国统治埃及', detail: '奥斯曼苏丹塞利姆一世征服埃及，埃及成为奥斯曼行省。', countryId: 'egypt', continentId: 'africa', categoryId: 'war' },
  { id: 'eg_7', year: 1798, summary: '拿破仑远征埃及', detail: '拿破仑率军入侵埃及，在金字塔战役击败马穆鲁克。', countryId: 'egypt', continentId: 'africa', categoryId: 'war' },
  { id: 'eg_8', year: 1869, summary: '苏伊士运河开通', detail: '苏伊士运河正式开通，连接地中海和红海，大大缩短欧亚航程。', countryId: 'egypt', continentId: 'africa', categoryId: 'economy' },
  { id: 'eg_9', year: 1922, summary: '埃及独立', detail: '英国承认埃及为独立国家，但保留苏伊士运河区的军事存在。', countryId: 'egypt', continentId: 'africa', categoryId: 'independence' },

  // ===== 美洲历史 =====
  { id: 'us_1', year: 1776, summary: '美国独立宣言', detail: '大陆会议通过《独立宣言》，宣布十三州独立。', countryId: 'usa', continentId: 'north-america', categoryId: 'independence' },
  { id: 'us_2', year: 1787, summary: '美国宪法制定', detail: '费城制宪会议制定美国宪法，确立三权分立制度。', countryId: 'usa', continentId: 'north-america', categoryId: 'politics' },
  { id: 'us_3', year: 1861, summary: '美国内战爆发', detail: '南方邦联与北方联邦之间爆发内战，战争持续四年。', countryId: 'usa', continentId: 'north-america', categoryId: 'war' },
  { id: 'us_4', year: 1865, summary: '林肯遇刺', detail: '亚伯拉罕·林肯在福特剧院被刺杀，美国内战刚刚结束。', countryId: 'usa', continentId: 'north-america', categoryId: 'politics' },
  { id: 'us_5', year: 1929, summary: '经济大萧条开始', detail: '华尔街股市崩盘，引发全球经济大萧条。', countryId: 'usa', continentId: 'north-america', categoryId: 'economy' },
  { id: 'us_6', year: 1941, summary: '珍珠港事件', detail: '日本偷袭珍珠港，美国对日宣战，卷入第二次世界大战。', countryId: 'usa', continentId: 'north-america', categoryId: 'war' },
  { id: 'us_7', year: 1969, summary: '阿波罗11号登月', detail: '阿姆斯特朗成为第一个踏上月球的人类，实现登月壮举。', countryId: 'usa', continentId: 'north-america', categoryId: 'exploration' },
  { id: 'us_8', year: 1991, summary: '海湾战争', detail: '以美国为首的多国部队发动沙漠风暴行动，解放科威特。', countryId: 'usa', continentId: 'north-america', categoryId: 'war' },

  // ===== 大洋洲历史 =====
  { id: 'au_1', year: 1770, summary: '库克船长发现澳大利亚', detail: '英国航海家詹姆斯·库克到达澳大利亚东海岸，宣布为英国领地。', countryId: 'australia', continentId: 'oceania', categoryId: 'exploration' },
  { id: 'au_2', year: 1788, summary: '英国建立澳大利亚殖民地', detail: '英国在澳大利亚杰克逊港建立流放地，后发展为悉尼。', countryId: 'australia', continentId: 'oceania', categoryId: 'economy' },
  { id: 'au_3', year: 1850, summary: '澳大利亚淘金热', detail: '金矿发现后大量移民涌入，推动澳大利亚经济快速发展。', countryId: 'australia', continentId: 'oceania', categoryId: 'economy' },
  { id: 'au_4', year: 1901, summary: '澳大利亚联邦成立', detail: '六个殖民地合并为澳大利亚联邦，成为英帝国的自治领。', countryId: 'australia', continentId: 'oceania', categoryId: 'politics' },
  { id: 'au_5', year: 1967, summary: '原住民权利公投', detail: '澳大利亚通过公投，承认原住民为澳大利亚公民。', countryId: 'australia', continentId: 'oceania', categoryId: 'politics' },

  // ===== 中东历史 =====
  { id: 'ar_1', year: 622, summary: '伊斯兰教历元年', detail: '穆罕默德从麦加迁徙麦地那，伊斯兰纪年开始。', countryId: 'arab', continentId: 'asia', categoryId: 'religion' },
  { id: 'ar_2', year: 632, summary: '穆罕默德去世', detail: '先知穆罕默德在麦地那去世，伊斯兰世界开始哈里发时代。', countryId: 'arab', continentId: 'asia', categoryId: 'religion' },
  { id: 'ar_3', year: 1453, summary: '奥斯曼攻陷君士坦丁堡', detail: '苏丹穆罕默德二世攻克拜占庭首都君士坦丁堡，东罗马帝国灭亡。', countryId: 'ottoman', continentId: 'asia', categoryId: 'war' },
  { id: 'ar_4', year: 1517, summary: '奥斯曼帝国统治阿拉伯', detail: '奥斯曼苏丹塞利姆一世征服阿拉伯半岛和埃及。', countryId: 'ottoman', continentId: 'asia', categoryId: 'war' },
  { id: 'ar_5', year: 1916, summary: '阿拉伯大起义', detail: '在劳伦斯领导下，阿拉伯部落起义反抗奥斯曼统治。', countryId: 'arab', continentId: 'asia', categoryId: 'rebellion' },
  { id: 'ar_6', year: 1948, summary: '以色列建国', detail: '以色列宣布独立，第一次中东战争爆发。', countryId: 'arab', continentId: 'asia', categoryId: 'war' },

  // ===== 东南亚历史 =====
  { id: 'vn_1', year: -111, summary: '南越国被汉朝征服', detail: '汉武帝灭南越国，越南北部并入中国版图。', countryId: 'vietnam', continentId: 'asia', categoryId: 'war' },
  { id: 'vn_2', year: 939, summary: '越南独立', detail: '吴权在白藤江击败南汉军队，越南获得独立。', countryId: 'vietnam', continentId: 'asia', categoryId: 'independence' },
  { id: 'vn_3', year: 1010, summary: '李朝建立，定都升龙', detail: '李公蕴建立李朝，越南进入封建独立时期。', countryId: 'vietnam', continentId: 'asia', categoryId: 'dynasty' },
  { id: 'th_1', year: 1238, summary: '素可泰王国建立', detail: '泰族人建立素可泰王国，是泰国历史上第一个统一王朝。', countryId: 'thailand', continentId: 'asia', categoryId: 'dynasty' },
  { id: 'th_2', year: 1350, summary: '阿瑜陀耶王国建立', detail: '乌通王建立阿瑜陀耶王国，统治泰国长达四百余年。', countryId: 'thailand', continentId: 'asia', categoryId: 'dynasty' },
  { id: 'kr_1', year: 918, summary: '高丽建国', detail: '王建建立高丽王朝，统一朝鲜半岛。', countryId: 'korea', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'goryeo' },
  { id: 'kr_2', year: 1392, summary: '朝鲜王朝建立', detail: '李成桂建立朝鲜王朝，定都汉城，延续五百余年。', countryId: 'korea', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'joseon' },
  { id: 'kr_3', year: 1443, summary: '世宗创制韩文', detail: '朝鲜世宗大王颁布《训民正音》，创制韩文字母。', countryId: 'korea', continentId: 'asia', categoryId: 'culture', dynastyId: 'joseon' },
  { id: 'kr_4', year: 1592, summary: '壬辰倭乱', detail: '丰臣秀吉入侵朝鲜，中朝联军击退日军。', countryId: 'korea', continentId: 'asia', categoryId: 'war', dynastyId: 'joseon' },
  { id: 'kr_5', year: 1950, summary: '朝鲜战争爆发', detail: '北朝鲜越过三八线南下，朝鲜战争爆发。', countryId: 'korea', continentId: 'asia', categoryId: 'war' },

  // ===== 波斯/伊朗历史事件 =====
  { id: 'ir_1', year: -550, summary: '居鲁士大帝建立波斯帝国', detail: '居鲁士二世推翻米底王国，建立阿契美尼德王朝（第一波斯帝国），开创世界历史上首个横跨亚欧非的大帝国。', countryId: 'iran', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'ir_achaemenid' },
  { id: 'ir_2', year: -525, summary: '波斯征服埃及', detail: '冈比西斯二世率军征服埃及第二十六王朝，波斯帝国版图扩展至北非。', countryId: 'iran', continentId: 'asia', categoryId: 'war', dynastyId: 'ir_achaemenid' },
  { id: 'ir_3', year: -490, summary: '马拉松战役', detail: '波斯远征军在马拉松平原被雅典击败，希波战争第一阶段结束。', countryId: 'iran', continentId: 'asia', categoryId: 'war', dynastyId: 'ir_achaemenid' },
  { id: 'ir_4', year: -480, summary: '温泉关战役与萨拉米斯海战', detail: '薛西斯一世亲征希腊，斯巴达三百勇士战死温泉关，但萨拉米斯海战中波斯海军被希腊击败。', countryId: 'iran', continentId: 'asia', categoryId: 'war', dynastyId: 'ir_achaemenid' },
  { id: 'ir_5', year: -330, summary: '亚历山大灭亡波斯', detail: '亚历山大大帝在高加米拉战役击败大流士三世，阿契美尼德王朝灭亡。', countryId: 'iran', continentId: 'asia', categoryId: 'war', dynastyId: 'ir_achaemenid' },
  { id: 'ir_6', year: 224, summary: '阿尔达希尔建立萨珊王朝', detail: '阿尔达希尔一世推翻帕提亚帝国，建立萨珊波斯，祆教成为国教。', countryId: 'iran', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'ir_sassanid' },
  { id: 'ir_7', year: 260, summary: '埃德萨战役俘获罗马皇帝', detail: '沙普尔一世在埃德萨战役中击败罗马军，俘虏皇帝瓦勒良，是罗马帝国的奇耻大辱。', countryId: 'iran', continentId: 'asia', categoryId: 'war', dynastyId: 'ir_sassanid' },
  { id: 'ir_8', year: 651, summary: '阿拉伯征服萨珊波斯', detail: '阿拉伯穆斯林军队攻陷尼哈旺德，末代伊嗣俟三世被杀，萨珊王朝灭亡，波斯伊斯兰化开始。', countryId: 'iran', continentId: 'asia', categoryId: 'war', dynastyId: 'ir_sassanid' },
  { id: 'ir_9', year: 819, summary: '萨曼王朝兴起', detail: '萨曼·胡达特建立萨曼王朝，波斯文化进入复兴时期，《列王纪》在此时期创作。', countryId: 'iran', continentId: 'asia', categoryId: 'culture', dynastyId: 'ir_samanid' },
  { id: 'ir_10', year: 1258, summary: '蒙古攻陷巴格达', detail: '旭烈兀率蒙古大军攻陷巴格达，阿拔斯哈里发被杀，伊斯兰黄金时代终结。', countryId: 'iran', continentId: 'asia', categoryId: 'war', dynastyId: 'ir_safavid' },
  { id: 'ir_11', year: 1501, summary: '伊斯玛仪一世建立萨法维王朝', detail: '伊斯玛仪一世统一波斯，建立萨法维王朝，什叶派伊斯兰教成为国教。', countryId: 'iran', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'ir_safavid' },
  { id: 'ir_12', year: 1587, summary: '阿拔斯大帝迁都伊斯法罕', detail: '阿拔斯大帝迁都伊斯法罕，波斯进入第二个黄金时代。', countryId: 'iran', continentId: 'asia', categoryId: 'politics', dynastyId: 'ir_safavid' },
  { id: 'ir_13', year: 1722, summary: '阿富汗人入侵波斯', detail: '马哈茂德·霍塔克领导的阿富汗吉尔扎伊部落攻陷伊斯法罕，萨法维王朝衰落。', countryId: 'iran', continentId: 'asia', categoryId: 'war', dynastyId: 'ir_safavid' },
  { id: 'ir_14', year: 1925, summary: '礼萨汗建立巴列维王朝', detail: '礼萨汗通过政变推翻卡扎尔王朝，建立巴列维王朝，推行全面世俗化改革。', countryId: 'iran', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'ir_pahlavi' },
  { id: 'ir_15', year: 1953, summary: '摩萨台政变（阿贾克斯行动）', detail: '英美情报机构策划政变推翻民选总理摩萨台，恢复国王穆罕默德·礼萨权力。', countryId: 'iran', continentId: 'asia', categoryId: 'politics', dynastyId: 'ir_pahlavi' },
  { id: 'ir_16', year: 1979, summary: '伊朗伊斯兰革命', detail: '霍梅尼领导革命推翻巴列维国王，建立伊斯兰共和国，美国驻德黑兰大使馆人质危机爆发。', countryId: 'iran', continentId: 'asia', categoryId: 'independence' },

  // ===== 阿拉伯/阿拉伯帝国历史事件 =====
  { id: 'arab_1', year: 570, summary: '先知穆罕默德诞生', detail: '穆罕默德诞生于麦加，后创立伊斯兰教，成为最后一位先知。', countryId: 'arab-caliphate', continentId: 'asia', categoryId: 'religion' },
  { id: 'arab_2', year: 610, summary: '先知首次接受启示', detail: '穆罕默德在希拉山洞接受天使伽百列首次启示，伊斯兰教传播开始。', countryId: 'arab-caliphate', continentId: 'asia', categoryId: 'religion' },
  { id: 'arab_3', year: 622, summary: '迁徙麦地那（希吉拉）', detail: '穆罕默德从麦加迁徙至麦地那，此年成为伊斯兰历元年。', countryId: 'arab-caliphate', continentId: 'asia', categoryId: 'religion' },
  { id: 'arab_4', year: 632, summary: '穆罕默德去世', detail: '先知穆罕默德在麦地那去世，伊斯兰世界进入四大哈里发时代。', countryId: 'arab-caliphate', continentId: 'asia', categoryId: 'religion' },
  { id: 'arab_5', year: 636, yearEnd: 640, summary: '阿拉伯-拜占庭战争', detail: '雅穆克河之战阿拉伯击败拜占庭，随后占领叙利亚、耶路撒冷和埃及。', countryId: 'arab-caliphate', continentId: 'asia', categoryId: 'war', dynastyId: 'ar_rashidun' },
  { id: 'arab_6', year: 637, summary: '卡迪西亚战役', detail: '阿拉伯军队在卡迪西亚彻底击败波斯萨珊主力，为征服波斯奠定基础。', countryId: 'arab-caliphate', continentId: 'asia', categoryId: 'war', dynastyId: 'ar_rashidun' },
  { id: 'arab_7', year: 656, summary: '第一次伊斯兰内战（菲特纳）', detail: '第三任哈里发奥斯曼遇刺，阿里继位后与泰勒海、祖白耳爆发内战。', countryId: 'arab-caliphate', continentId: 'asia', categoryId: 'rebellion', dynastyId: 'ar_rashidun' },
  { id: 'arab_8', year: 661, summary: '倭马亚王朝建立', detail: '穆阿维叶一世建立倭马亚王朝，定都大马士革，哈里发由选举制改为世袭制。', countryId: 'arab-caliphate', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'ar_ummayyad' },
  { id: 'arab_9', year: 711, yearEnd: 732, summary: '阿拉伯征服西班牙', detail: '塔里克·伊本·齐亚德渡过直布罗陀海峡征服西哥特王国，阿拉伯势力最远推进至图尔。', countryId: 'arab-caliphate', continentId: 'europe', categoryId: 'exploration', dynastyId: 'ar_ummayyad' },
  { id: 'arab_10', year: 750, summary: '阿拔斯革命', detail: '阿布·阿巴斯推翻倭马亚王朝，建立阿拔斯王朝，定都巴格达。', countryId: 'arab-caliphate', continentId: 'asia', categoryId: 'independence', dynastyId: 'ar_abbasid' },
  { id: 'arab_11', year: 762, summary: '巴格达建城', detail: '哈里发曼苏尔下令营建巴格达城，作为阿拔斯王朝首都。', countryId: 'arab-caliphate', continentId: 'asia', categoryId: 'culture', dynastyId: 'ar_abbasid' },
  { id: 'arab_12', year: 809, yearEnd: 813, summary: '第四次内战（马蒙内战）', detail: '哈里发哈伦·赖世德去世后，其子阿明与马蒙争夺王位引发大规模内战。', countryId: 'arab-caliphate', continentId: 'asia', categoryId: 'rebellion', dynastyId: 'ar_abbasid' },
  { id: 'arab_13', year: 813, summary: '智慧宫达到巅峰', detail: '哈里发马蒙大力资助翻译运动，古希腊典籍被译成阿拉伯语，智慧宫成为世界学术中心。', countryId: 'arab-caliphate', continentId: 'asia', categoryId: 'culture', dynastyId: 'ar_abbasid' },
  { id: 'arab_14', year: 909, summary: '法蒂玛王朝在北非建国', detail: '奥贝德拉在突尼斯附近建立法蒂玛王朝，宣称是先知女儿法蒂玛的后裔，属什叶派分支。', countryId: 'arab-caliphate', continentId: 'africa', categoryId: 'dynasty', dynastyId: 'ar_fatimid' },
  { id: 'arab_15', year: 969, summary: '法蒂玛王朝占领埃及并建开罗', detail: '法蒂玛将领焦海尔攻占埃及，建造新城开罗作为首都，爱资哈尔清真寺同期建成。', countryId: 'arab-caliphate', continentId: 'africa', categoryId: 'dynasty', dynastyId: 'ar_fatimid' },
  { id: 'arab_16', year: 1055, summary: '塞尔柱突厥入主巴格达', detail: '图格鲁尔·贝格率塞尔柱大军进入巴格达，阿拔斯哈里发授予其苏丹称号，实权落入突厥人之手。', countryId: 'arab-caliphate', continentId: 'asia', categoryId: 'politics', dynastyId: 'ar_abbasid' },
  { id: 'arab_17', year: 1099, summary: '十字军攻克耶路撒冷', detail: '第一次十字军东征攻陷耶路撒冷，屠杀大量穆斯林和犹太居民，建立耶路撒冷王国。', countryId: 'arab-caliphate', continentId: 'asia', categoryId: 'war' },
  { id: 'arab_18', year: 1187, summary: '萨拉丁收复耶路撒冷', detail: '库尔德将领萨拉丁在赫丁战役击败十字军，收复耶路撒冷。', countryId: 'arab-caliphate', continentId: 'asia', categoryId: 'war' },
  { id: 'arab_19', year: 1206, summary: '花剌子模崛起', detail: '摩诃末统一中亚和波斯东部，建立庞大的花剌子模帝国，后被成吉思汗所灭。', countryId: 'arab-caliphate', continentId: 'asia', categoryId: 'dynasty' },
  { id: 'arab_20', year: 1250, summary: '马穆鲁克王朝建立', detail: '马穆鲁克（奴隶军人）推翻阿尤布王朝统治埃及，建立马穆鲁克王朝。', countryId: 'arab-caliphate', continentId: 'africa', categoryId: 'dynasty', dynastyId: 'ar_mamluk' },
  { id: 'arab_21', year: 1260, yearEnd: 1300, summary: '马穆鲁克击退蒙古', detail: '马穆鲁克军队在艾因贾鲁特战役击败蒙古先锋，阻止了蒙古对非洲的进一步扩张。', countryId: 'arab-caliphate', continentId: 'africa', categoryId: 'war', dynastyId: 'ar_mamluk' },
  { id: 'arab_22', year: 1258, summary: '巴格达陷落，阿拔斯王朝名存实亡', detail: '旭烈兀率蒙古军攻陷巴格达，末代哈里发穆斯塔尔绥德被杀，阿拔斯王朝实际终结。', countryId: 'arab-caliphate', continentId: 'asia', categoryId: 'war', dynastyId: 'ar_abbasid' },
  { id: 'arab_23', year: 1517, summary: '奥斯曼征服马穆鲁克', detail: '塞利姆一世击败马穆鲁克，吞并埃及、叙利亚和汉志地区，哈里发头衔转入奥斯曼手中。', countryId: 'ottoman', continentId: 'asia', categoryId: 'war', dynastyId: 'ot_ottoman' },

  // ===== 奥斯曼帝国历史事件 =====
  { id: 'ot_1', year: 1299, summary: '奥斯曼国家成立', detail: '奥斯曼一世宣布独立于罗姆苏丹国，奥斯曼国家在小亚细亚西北部诞生。', countryId: 'ottoman', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'ot_ottoman' },
  { id: 'ot_2', year: 1326, summary: '布尔萨陷落', detail: '奥斯曼一世攻占布尔萨并定为首都，这是奥斯曼人在欧洲之外的第一座大城市。', countryId: 'ottoman', continentId: 'asia', categoryId: 'war', dynastyId: 'ot_ottoman' },
  { id: 'ot_3', year: 1354, summary: '奥斯曼人跨海峡进入欧洲', detail: '苏丹奥尔汗之子苏莱曼帕夏趁地震之机占据加利波利半岛，奥斯曼人首次在欧洲立足。', countryId: 'ottoman', continentId: 'europe', categoryId: 'exploration', dynastyId: 'ot_ottoman' },
  { id: 'ot_4', year: 1389, yearEnd: 1402, summary: '科索沃战役与安卡拉战役', detail: '科索沃战役奥斯曼击败塞尔维亚联军；1402年帖木儿在安卡拉俘虏巴耶塞特一世。', countryId: 'ottoman', continentId: 'asia', categoryId: 'war', dynastyId: 'ot_ottoman' },
  { id: 'ot_5', year: 1453, summary: '君士坦丁堡陷落', detail: '穆罕默德二世率军攻克君士坦丁堡，拜占庭帝国灭亡，年仅二十一岁的苏丹被称为"征服者"。', countryId: 'ottoman', continentId: 'europe', categoryId: 'war', dynastyId: 'ot_ottoman' },
  { id: 'ot_6', year: 1514, yearEnd: 1517, summary: '查尔迪兰战役与征服马穆鲁克', detail: '1514年塞利姆一世在查尔迪兰击败萨法维波斯；1517年征服埃及和汉志。', countryId: 'ottoman', continentId: 'asia', categoryId: 'war', dynastyId: 'ot_ottoman' },
  { id: 'ot_7', year: 1526, summary: '莫哈赤战役——匈牙利覆灭', detail: '苏莱曼大帝在莫哈赤战役歼灭匈牙利-克罗地亚联军，匈牙利三分之二领土并入奥斯曼。', countryId: 'ottoman', continentId: 'europe', categoryId: 'war', dynastyId: 'ot_ottoman' },
  { id: 'ot_8', year: 1529, summary: '第一次维也纳之围', detail: '苏莱曼大帝率大军围攻维也纳未果，标志着奥斯曼在欧洲扩张到达极限。', countryId: 'ottoman', continentId: 'europe', categoryId: 'war', dynastyId: 'ot_ottoman' },
  { id: 'ot_9', year: 1535, summary: '征服突尼斯', detail: '巴巴罗萨·海雷丁协助苏莱曼大帝从哈布斯堡手中夺取突尼斯，地中海霸权巩固。', countryId: 'ottoman', continentId: 'africa', categoryId: 'war', dynastyId: 'ot_ottoman' },
  { id: 'ot_10', year: 1571, summary: '勒班托海战', detail: '神圣同盟舰队在勒班托海战中击败奥斯曼海军，虽然损失惨重但遏制了奥斯曼在西地中海的扩张。', countryId: 'ottoman', continentId: 'europe', categoryId: 'war', dynastyId: 'ot_ottoman' },
  { id: 'ot_11', year: 1683, summary: '第二次维也纳之围失败', detail: '卡拉·穆斯塔法帕夏围攻维也纳，被波兰-奥地利-德国联军击败，奥斯曼从此转入防御。', countryId: 'ottoman', continentId: 'europe', categoryId: 'war', dynastyId: 'ot_ottoman' },
  { id: 'ot_12', year: 1699, summary: '《卡尔洛夫奇条约》', detail: '奥斯曼帝国首次割地求和，将匈牙利、特兰西瓦尼亚等让予奥地利，承认帝国衰落。', countryId: 'ottoman', continentId: 'europe', categoryId: 'politics', dynastyId: 'ot_ottoman' },
  { id: 'ot_13', year: 1821, yearEnd: 1829, summary: '希腊独立战争', detail: '希腊起义爆发，经过八年战争，1830年伦敦会议承认希腊独立。', countryId: 'ottoman', continentId: 'europe', categoryId: 'independence', dynastyId: 'ot_ottoman' },
  { id: 'ot_14', year: 1853, yearEnd: 1856, summary: '克里米亚战争', detail: '俄国与奥斯曼之间的战争，英法支持奥斯曼对抗俄国，战后巴黎条约签订。', countryId: 'ottoman', continentId: 'europe', categoryId: 'war', dynastyId: 'ot_ottoman' },
  { id: 'ot_15', year: 1908, summary: '青年土耳其党革命', detail: '青年土耳其党发动革命逼迫苏丹恢复1876年宪法，开启奥斯曼现代化改革。', countryId: 'ottoman', continentId: 'asia', categoryId: 'politics', dynastyId: 'ot_ottoman' },
  { id: 'ot_16', year: 1914, summary: '加入一战', detail: '奥斯曼帝国加入同盟国阵营参加第一次世界大战。', countryId: 'ottoman', continentId: 'asia', categoryId: 'war', dynastyId: 'ot_ottoman' },
  { id: 'ot_17', year: 1915, yearEnd: 1923, summary: '亚美尼亚大屠杀', detail: '一战期间及之后，奥斯曼当局系统性地驱逐和屠杀亚美尼亚人，死亡人数估计在一百万以上。', countryId: 'ottoman', continentId: 'asia', categoryId: 'disaster', dynastyId: 'ot_ottoman' },
  { id: 'ot_18', year: 1922, summary: '苏丹制度废除', detail: '最后一任苏丹穆罕默德六世流亡海外，奥斯曼帝国正式终结。', countryId: 'ottoman', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'ot_ottoman' },
  { id: 'ot_19', year: 1923, summary: '土耳其共和国成立', detail: '《洛桑条约》确立现代土耳其边界，凯末尔当选首任总统。', countryId: 'turkey', continentId: 'asia', categoryId: 'independence', dynastyId: 'tk_republic' },
  { id: 'ot_20', year: 1938, summary: '凯末尔逝世', detail: '土耳其国父穆斯塔法·凯末尔·阿塔图尔克在伊斯坦布尔逝世，享年五十七岁。', countryId: 'turkey', continentId: 'asia', categoryId: 'politics', dynastyId: 'tk_republic' },

  // ===== 蒙古帝国历史事件 =====
  { id: 'mn_1', year: -209, summary: '冒顿单于统一匈奴', detail: '冒顿单于鸣镝弑父夺位后统一匈奴各部，建立草原上第一个强大的游牧帝国。', countryId: 'mongol', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'mn_xiongnu' },
  { id: 'mn_2', year: -200, yearEnd: -198, summary: '白登之围', detail: '匈奴冒顿单于以四十万骑兵围困汉高祖刘邦于白登山七日，汉朝被迫和亲。', countryId: 'mongol', continentId: 'asia', categoryId: 'war', dynastyId: 'mn_xiongnu' },
  { id: 'mn_3', year: 552, summary: '突厥汗国建立', detail: '土门可汗建立突厥汗国，取代柔然成为草原霸主，控制区域从中国东北到中亚。', countryId: 'mongol', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'mn_turkic' },
  { id: 'mn_4', year: 907, yearEnd: 1125, summary: '辽朝建立与扩张', detail: '耶律阿保机建立契丹辽国，控制中国北方草原和中原部分地区，与宋朝长期对峙。', countryId: 'mongol', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'mn_liao' },
  { id: 'mn_5', year: 1125, yearEnd: 1234, summary: '金朝建立与灭辽灭北宋', detail: '完颜阿骨打建立金朝，先后灭辽和北宋，与南宋形成南北对峙局面。', countryId: 'mongol', continentId: 'asia', categoryId: 'dynasty' },
  { id: 'mn_6', year: 1162, summary: '铁木真（成吉思汗）诞生', detail: '孛儿只斤·铁木真出生于斡难河畔乞颜部，后成为统一蒙古草原的伟大征服者。', countryId: 'mongol', continentId: 'asia', categoryId: 'culture' },
  { id: 'mn_7', year: 1171, yearEnd: 1196, summary: '铁木真早年经历', detail: '父亲也速该被塔塔儿人毒死，铁木真历经磨难，逐步收服各部。', countryId: 'mongol', continentId: 'asia', categoryId: 'politics' },
  { id: 'mn_8', year: 1206, summary: '成吉思汗统一蒙古', detail: '忽里勒台大会推举铁木真为大汗，尊号"成吉思汗"，大蒙古国正式建立。', countryId: 'mongol', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'mn_mongol' },
  { id: 'mn_9', year: 1211, yearEnd: 1215, summary: '蒙古第一次侵金', detail: '成吉思汗率军南下攻打金朝，野狐岭之战歼灭金朝主力，中都（北京）沦陷。', countryId: 'mongol', continentId: 'asia', categoryId: 'war', dynastyId: 'mn_mongol' },
  { id: 'mn_10', year: 1218, yearEnd: 1221, summary: '西征花剌子模', detail: '成吉思汗率军西征，摧毁花剌子模帝国，哲别和速不台继续追击至欧洲。', countryId: 'mongol', continentId: 'asia', categoryId: 'war', dynastyId: 'mn_mongol' },
  { id: 'mn_11', year: 1227, summary: '成吉思汗去世', detail: '成吉思汗在征讨西夏途中病逝于六盘山，临终遗命联宋灭金。', countryId: 'mongol', continentId: 'asia', categoryId: 'culture', dynastyId: 'mn_mongol' },
  { id: 'mn_12', year: 1234, summary: '蔡州之战——金朝灭亡', detail: '蒙宋联军攻破蔡州，金哀宗自缢身亡，金朝灭亡。', countryId: 'mongol', continentId: 'asia', categoryId: 'war', dynastyId: 'mn_mongol' },
  { id: 'mn_13', year: 1235, yearEnd: 1241, summary: '拔都西征（长子西征）', detail: '拔都率诸王子西征，横扫俄罗斯、波兰、匈牙利，在列格尼茨战役大败欧洲联军。', countryId: 'mongol', continentId: 'europe', categoryId: 'exploration', dynastyId: 'mn_mongol' },
  { id: 'mn_14', year: 1251, summary: '蒙哥汗即位', detail: '蒙哥在忽里勒台被推举为大汗，开始整顿汗国体制并准备南征。', countryId: 'mongol', continentId: 'asia', categoryId: 'politics', dynastyId: 'mn_mongol' },
  { id: 'mn_15', year: 1253, yearEnd: 1259, summary: '旭烈兀西征', detail: '旭烈兀率军西征，灭阿拔斯王朝和刺客木剌夷国，建立伊利汗国。', countryId: 'mongol', continentId: 'asia', categoryId: 'war', dynastyId: 'mn_mongol' },
  { id: 'mn_16', year: 1258, summary: '巴格达陷落', detail: '旭烈兀攻陷巴格达，阿拔斯王朝末代哈里发穆斯塔尔绥德被杀，伊斯兰黄金时代终结。', countryId: 'mongol', continentId: 'asia', categoryId: 'war', dynastyId: 'mn_mongol' },
  { id: 'mn_17', year: 1259, summary: '蒙哥汗阵亡钓鱼城', detail: '蒙哥汗率军攻宋，在钓鱼城下中炮石重伤而亡，导致蒙古帝国走向分裂。', countryId: 'mongol', continentId: 'asia', categoryId: 'war', dynastyId: 'mn_mongol' },
  { id: 'mn_18', year: 1260, summary: '忽必烈即位与大汗之争', detail: '忽必烈在中都（北京）即位，与其弟阿里不哥爆发长达四年的汗位争夺战。', countryId: 'mongol', continentId: 'asia', categoryId: 'politics', dynastyId: 'mn_yuan' },
  { id: 'mn_19', year: 1271, summary: '忽必烈定国号元', detail: '忽必烈改国号为"大元"，取《易经》"大哉乾元"之意，正式建立元朝。', countryId: 'china', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'yuan' },
  { id: 'mn_20', year: 1279, summary: '崖山海战，南宋灭亡', detail: '元军在崖山海战全歼宋军残余力量，陆秀夫负帝投海，南宋彻底灭亡。', countryId: 'china', continentId: 'asia', categoryId: 'war', dynastyId: 'yuan' },
  { id: 'mn_21', year: 1370, summary: '帖木儿崛起', detail: '跛脚帖木儿在撒马尔罕称霸，建立帖木儿帝国，多次击败金帐汗国和奥斯曼。', countryId: 'mongol', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'mn_timurid' },
  { id: 'mn_22', year: 1398, summary: '帖木儿洗劫德里', detail: '帖木儿率军入侵印度，攻陷德里并大肆屠掠，杀死十万居民。', countryId: 'india', continentId: 'asia', categoryId: 'war', dynastyId: 'mn_timurid' },
  { id: 'mn_23', year: 1402, yearEnd: 1405, summary: '安卡拉战役与帖木儿之死', detail: '帖木儿在安卡拉战役生擒奥斯曼苏丹巴耶塞特一世；1405年帖木儿死于东征明朝途中。', countryId: 'mongol', continentId: 'asia', categoryId: 'war', dynastyId: 'mn_timurid' },

  // ===== 意大利历史事件 =====
  { id: 'it_1', year: -753, summary: '罗马建城传说', detail: '传说罗慕路斯和雷穆斯兄弟在帕拉蒂尼山建城，罗慕路斯成为第一位国王。', countryId: 'italy', continentId: 'europe', categoryId: 'culture', dynastyId: 'it_etruscan' },
  { id: 'it_2', year: -509, summary: '罗马共和国建立', detail: '罗马人驱逐末代国王塔克文·苏佩布斯，建立共和政体，设立执政官制度。', countryId: 'italy', continentId: 'europe', categoryId: 'politics', dynastyId: 'it_roman_republic' },
  { id: 'it_3', year: -264, yearEnd: -146, summary: '三次布匿战争', detail: '罗马与迦太基之间三次大战，最终迦太基毁灭，罗马成为地中海唯一霸主。', countryId: 'italy', continentId: 'europe', categoryId: 'war', dynastyId: 'it_roman_republic' },
  { id: 'it_4', year: -44, summary: '凯撒遇刺', detail: '尤利乌斯·凯撒在元老院被布鲁图斯等人刺杀，"你也吗，布鲁图？"传为千古名言。', countryId: 'italy', continentId: 'europe', categoryId: 'politics', dynastyId: 'it_roman_republic' },
  { id: 'it_5', year: -27, summary: '奥古斯都建立元首制', detail: '屋大维获"奥古斯都"称号，罗马从共和转变为帝制（元首制），进入和平繁荣期。', countryId: 'italy', continentId: 'europe', categoryId: 'dynasty', dynastyId: 'it_roman_empire' },
  { id: 'it_6', year: 64, summary: '罗马大火与尼禄迫害基督徒', detail: '罗马发生持续多日的大火，尼禄嫁祸基督徒并展开迫害。', countryId: 'italy', continentId: 'europe', categoryId: 'disaster', dynastyId: 'it_roman_empire' },
  { id: 'it_7', year: 313, summary: '米兰敕令', detail: '君士坦丁大帝颁布米兰敕令，基督教获得合法地位，此后逐渐成为国教。', countryId: 'italy', continentId: 'europe', categoryId: 'religion', dynastyId: 'it_roman_empire' },
  { id: 'it_8', year: 476, summary: '西罗马帝国灭亡', detail: '日耳曼雇佣军领袖奥多亚克废黜末代皇帝罗慕路斯·奥古斯都，西罗马帝国终结。', countryId: 'italy', continentId: 'europe', categoryId: 'dynasty', dynastyId: 'it_medieval' },
  { id: 'it_9', year: 800, summary: '查理曼加冕', detail: '教皇利奥三世在圣彼得大教堂为查理曼加冕为"罗马人的皇帝"。', countryId: 'italy', continentId: 'europe', categoryId: 'dynasty', dynastyId: 'it_medieval' },
  { id: 'it_10', year: 1088, summary: '博洛尼亚大学成立', detail: '博洛尼亚大学成立，被认为是西方世界最早的大学。', countryId: 'italy', continentId: 'europe', categoryId: 'culture', dynastyId: 'it_medieval' },
  { id: 'it_11', year: 1348, summary: '黑死病席卷意大利', detail: '鼠疫传入意大利，佛罗伦萨人口减少一半以上，薄伽丘《十日谈》以此为背景创作。', countryId: 'italy', continentId: 'europe', categoryId: 'disaster', dynastyId: 'it_renaissance' },
  { id: 'it_12', year: 1420, summary: '美第奇家族崛起', detail: '乔瓦尼·德·美第奇成为佛罗伦萨实际统治者，其家族此后赞助文艺复兴艺术三百年。', countryId: 'italy', continentId: 'europe', categoryId: 'politics', dynastyId: 'it_renaissance' },
  { id: 'it_13', year: 1494, summary: '法国入侵意大利', detail: '法国查理八世率军入侵意大利，拉开意大利战争的序幕，持续近六十年。', countryId: 'italy', continentId: 'europe', categoryId: 'war', dynastyId: 'it_renaissance' },
  { id: 'it_14', year: 1527, summary: '罗马之劫', detail: '神圣罗马帝国雇佣军洗劫罗马，教皇克莱芒七世困守圣天使城堡，文艺复兴遭受重创。', countryId: 'italy', continentId: 'europe', categoryId: 'war', dynastyId: 'it_renaissance' },
  { id: 'it_15', year: 1559, summary: '《卡托-康布雷西和约》', detail: '西班牙哈布斯堡家族取得对意大利的主导地位，意大利战争最终结束。', countryId: 'italy', continentId: 'europe', categoryId: 'politics', dynastyId: 'it_renaissance' },
  { id: 'it_16', year: 1796, yearEnd: 1814, summary: '拿破仑征服意大利', detail: '拿破仑率军翻越阿尔卑斯山征服意大利北部，建立意大利共和国和意大利王国。', countryId: 'italy', continentId: 'europe', categoryId: 'war', dynastyId: 'it_unification' },
  { id: 'it_17', year: 1861, summary: '意大利王国成立', detail: '维克托·伊曼纽尔二世在都灵宣布意大利王国成立，加里波第完成南意统一。', countryId: 'italy', continentId: 'europe', categoryId: 'independence', dynastyId: 'it_unification' },
  { id: 'it_18', year: 1922, summary: '墨索里尼进军罗马', detail: "墨索里尼发动“进军罗马”政变，被任命为首相，开始二十一年的法西斯独裁统治。", countryId: 'italy', continentId: 'europe', categoryId: 'politics', dynastyId: 'it_modern' },
  { id: 'it_19', year: 1943, summary: '意大利投降', detail: '墨索里尼政府倒台，巴多格里奥政府向盟军投降，意大利退出轴心国阵营。', countryId: 'italy', continentId: 'europe', categoryId: 'war', dynastyId: 'it_modern' },
  { id: 'it_20', year: 1946, summary: '意大利共和国成立', detail: '公投废除君主制，意大利共和国成立，女性首次获得投票权。', countryId: 'italy', continentId: 'europe', categoryId: 'independence', dynastyId: 'it_modern' },

  // ===== 西班牙历史事件 =====
  { id: 'sp_1', year: -218, yearEnd: -201, summary: '第二次布匿战争（汉尼拔战争）', detail: '汉尼拔率军翻越阿尔卑斯山入侵意大利，后在扎马被大西庇阿击败，西班牙归属罗马。', countryId: 'spain', continentId: 'europe', categoryId: 'war', dynastyId: 'sp_roman_spain' },
  { id: 'sp_2', year: 409, summary: '西哥特人入侵伊比利亚', detail: '西哥特人跨越比利牛斯山脉进入伊比利亚半岛，建立西哥特王国。', countryId: 'spain', continentId: 'europe', categoryId: 'exploration', dynastyId: 'sp_visigothic' },
  { id: 'sp_3', year: 711, yearEnd: 720, summary: '摩尔人征服伊比利亚', detail: '塔里克·伊本·齐亚德率阿拉伯人和柏柏尔人跨过直布罗陀海峡征服大部分伊比利亚。', countryId: 'spain', continentId: 'europe', categoryId: 'war', dynastyId: 'sp_al_andalus' },
  { id: 'sp_4', year: 722, yearEnd: 1492, summary: '收复失地运动', detail: '基督教王国从北部开始逐步向南收复失地，持续七百七十年，最终消灭格拉纳达的纳斯尔王朝。', countryId: 'spain', continentId: 'europe', categoryId: 'war', dynastyId: 'sp_al_andalus' },
  { id: 'sp_5', year: 1212, summary: '拉斯纳瓦斯·德·托洛萨战役', detail: '基督教联军在拉斯纳瓦斯·德·托洛萨击败穆瓦希德王朝军队，收复失地运动的关键转折点。', countryId: 'spain', continentId: 'europe', categoryId: 'war', dynastyId: 'sp_al_andalus' },
  { id: 'sp_6', year: 1469, summary: '阿拉贡与卡斯蒂利亚联姻', detail: '斐迪南二世与伊莎贝拉一世结婚，为西班牙统一奠定基础。', countryId: 'spain', continentId: 'europe', categoryId: 'politics', dynastyId: 'sp_united' },
  { id: 'sp_7', year: 1492, summary: '格拉纳达陷落与哥伦布启航', detail: '格拉纳达陷落标志收复失地运动结束；同一年哥伦布奉女王之命启航发现美洲大陆。', countryId: 'spain', continentId: 'europe', categoryId: 'dynasty', dynastyId: 'sp_united' },
  { id: 'sp_8', year: 1492, summary: '《阿尔罕布拉法令》颁布', detail: '费迪南和伊莎贝尔颁布法令，要求犹太人改信天主教或离开西班牙。', countryId: 'spain', continentId: 'europe', categoryId: 'religion', dynastyId: 'sp_united' },
  { id: 'sp_9', year: 1516, summary: '哈布斯堡查理五世继承西班牙', detail: '卡斯蒂利亚女王胡安娜之子查理继承西班牙王位，西班牙与哈布斯堡帝国合并。', countryId: 'spain', continentId: 'europe', categoryId: 'dynasty', dynastyId: 'sp_bourbon' },
  { id: 'sp_10', year: 1588, summary: '无敌舰队出征英国', detail: '腓力二世派出无敌舰队远征英国，遭暴风袭击惨败，西班牙海上霸权开始衰退。', countryId: 'spain', continentId: 'europe', categoryId: 'war', dynastyId: 'sp_peak' },
  { id: 'sp_11', year: 1640, yearEnd: 1659, summary: '加泰罗尼亚与葡萄牙叛乱', detail: '加泰罗尼亚和葡萄牙相继反叛西班牙，葡萄牙最终赢得独立（《里斯本条约》）。', countryId: 'spain', continentId: 'europe', categoryId: 'rebellion', dynastyId: 'sp_decline' },
  { id: 'sp_12', year: 1701, yearEnd: 1714, summary: '西班牙王位继承战争', detail: '路易十四之孙菲利普五世与哈布斯堡候选人争夺西班牙王位，乌得勒支和约结束战争。', countryId: 'spain', continentId: 'europe', categoryId: 'war', dynastyId: 'sp_bourbon_spain' },
  { id: 'sp_13', year: 1808, summary: '拿破仑入侵西班牙', detail: '拿破仑迫使西班牙王室退位，将其兄约瑟夫·波拿巴立为西班牙王，激起全民反抗。', countryId: 'spain', continentId: 'europe', categoryId: 'war', dynastyId: 'sp_bourbon_spain' },
  { id: 'sp_14', year: 1898, yearEnd: 1899, summary: '美西战争丧失殖民地', detail: '美西战争中西班牙失去古巴、菲律宾、波多黎各和关岛，殖民帝国彻底崩溃。', countryId: 'spain', continentId: 'europe', categoryId: 'war', dynastyId: 'sp_decline' },
  { id: 'sp_15', year: 1936, yearEnd: 1939, summary: '西班牙内战', detail: '佛朗哥将军领导的民族主义者与共和派之间爆发的血腥内战，约五十万人丧生。', countryId: 'spain', continentId: 'europe', categoryId: 'war', dynastyId: 'sp_civil_war' },
  { id: 'sp_16', year: 1975, summary: '佛朗哥逝世，民主转型开始', detail: '弗朗西斯科·佛朗哥逝世，胡安·卡洛斯一世复辟君主制，开始向民主转型。', countryId: 'spain', continentId: 'europe', categoryId: 'politics', dynastyId: 'sp_modern' },

  // ===== 葡萄牙历史事件 =====
  { id: 'pt_1', year: 1139, summary: '葡萄牙王国成立', detail: '阿方索·恩里克斯在奥里基战役击败摩尔人后自称葡萄牙国王，获教皇承认。', countryId: 'portugal', continentId: 'europe', categoryId: 'dynasty', dynastyId: 'pt_kingdom' },
  { id: 'pt_2', year: 1415, summary: '恩里克航海学校建立', detail: '亨利王子在萨格里什建立航海学校，培养葡萄牙探险家，开启大航海时代。', countryId: 'portugal', continentId: 'europe', categoryId: 'exploration', dynastyId: 'pt_age_discovery' },
  { id: 'pt_3', year: 1419, summary: '发现马德拉群岛', detail: '若昂·贡萨尔维斯·扎尔科和特里斯唐·瓦斯·特谢拉发现马德拉群岛并定居。', countryId: 'portugal', continentId: 'europe', categoryId: 'exploration', dynastyId: 'pt_age_discovery' },
  { id: 'pt_4', year: 1488, yearEnd: 1498, summary: '迪亚士绕行好望角与达·伽马抵达印度', detail: '1488年巴尔托洛梅乌·迪亚士绕行好望角；1498年瓦斯科·达·伽马开辟印度航线。', countryId: 'portugal', continentId: 'europe', categoryId: 'exploration', dynastyId: 'pt_age_discovery' },
  { id: 'pt_5', year: 1500, summary: '佩德罗·阿尔瓦雷斯·卡布拉尔发现巴西', detail: '卡布拉尔在驶往印度途中偏离航线，意外发现巴西海岸，宣布其为葡萄牙领地。', countryId: 'portugal', continentId: 'south-america', categoryId: 'exploration', dynastyId: 'pt_empire' },
  { id: 'pt_6', year: 1578, summary: '三王战役', detail: '年轻的葡萄牙国王塞巴斯蒂昂在摩洛哥三王战役中战败失踪，引发葡萄牙继承危机。', countryId: 'portugal', continentId: 'europe', categoryId: 'war', dynastyId: 'pt_empire' },
  { id: 'pt_7', year: 1580, yearEnd: 1640, summary: '伊比利亚联盟（葡萄牙被西班牙兼并）', detail: '西班牙哈布斯堡的菲利普二世兼并葡萄牙，两国维持六十年的共主联邦关系。', countryId: 'portugal', continentId: 'europe', categoryId: 'politics', dynastyId: 'pt_union' },
  { id: 'pt_8', year: 1755, summary: '里斯本大地震', detail: '里斯本发生约里氏八点七级的大地震并引发海啸和火灾，城市几乎完全被毁，数万人死亡。', countryId: 'portugal', continentId: 'europe', categoryId: 'disaster', dynastyId: 'pt_empire' },
  { id: 'pt_9', year: 1807, yearEnd: 1811, summary: '拿破仑入侵葡萄牙', detail: '朱诺将军率领法国军队入侵葡萄牙，王室逃亡至巴西。', countryId: 'portugal', continentId: 'europe', categoryId: 'war', dynastyId: 'pt_empire' },
  { id: 'pt_10', year: 1822, summary: '巴西独立', detail: '佩德罗王子宣布巴西独立，葡萄牙失去了最重要的美洲殖民地。', countryId: 'portugal', continentId: 'south-america', categoryId: 'independence', dynastyId: 'pt_empire' },
  { id: 'pt_11', year: 1910, summary: '葡萄牙第一共和国成立', detail: '革命推翻布拉干萨王朝，葡萄牙第一共和国成立。', countryId: 'portugal', continentId: 'europe', categoryId: 'independence', dynastyId: 'pt_modern' },
  { id: 'pt_12', year: 1974, summary: '康乃馨革命', detail: '武装部队运动发动几乎不流血的政变，推翻萨拉查的新国家政权，结束四十八年的独裁统治。', countryId: 'portugal', continentId: 'europe', categoryId: 'independence', dynastyId: 'pt_modern' },

  // ===== 荷兰历史事件 =====
  { id: 'nl_1', year: 1568, summary: '尼德兰革命爆发', detail: '威廉一世（沉默者威廉）领导尼德兰各省反抗西班牙腓力二世的统治。', countryId: 'netherlands', continentId: 'europe', categoryId: 'independence', dynastyId: 'nl_habsburg' },
  { id: 'nl_2', year: 1581, summary: '乌得勒支同盟', detail: '北方七省签署《断绝法案》，正式脱离西班牙哈布斯堡统治。', countryId: 'netherlands', continentId: 'europe', categoryId: 'independence', dynastyId: 'nl_habsburg' },
  { id: 'nl_3', year: 1602, summary: '荷兰东印度公司(VOC)成立', detail: '世界上第一家股份公司荷兰东印度公司成立，垄断亚洲贸易近两百年。', countryId: 'netherlands', continentId: 'europe', categoryId: 'economy', dynastyId: 'nl_dutch_golden' },
  { id: 'nl_4', year: 1609, yearEnd: 1621, summary: '十二年休战', detail: '西班牙与联省共和国达成十二年休战，荷兰事实上的独立获得国际认可。', countryId: 'netherlands', continentId: 'europe', categoryId: 'politics', dynastyId: 'nl_dutch_golden' },
  { id: 'nl_5', year: 1624, summary: '新阿姆斯特丹建立', detail: '荷兰西印度公司在北美建立新阿姆斯特丹殖民地，后发展为纽约市。', countryId: 'netherlands', continentId: 'north-america', categoryId: 'exploration', dynastyId: 'nl_dutch_golden' },
  { id: 'nl_6', year: 1632, summary: '伦勃朗创作《夜巡》', detail: '荷兰黄金时代画家伦勃朗·范·莱因创作其最著名作品《夜巡》。', countryId: 'netherlands', continentId: 'europe', categoryId: 'culture', dynastyId: 'nl_dutch_golden' },
  { id: 'nl_7', year: 1652, yearEnd: 1674, summary: '三次英荷战争', detail: '英国与荷兰之间为海上贸易主导权爆发三次战争，最终英国取得优势。', countryId: 'netherlands', continentId: 'europe', categoryId: 'war', dynastyId: 'nl_dutch_golden' },
  { id: 'nl_8', year: 1795, yearEnd: 1813, summary: '法国占领荷兰（巴达维亚共和国）', detail: '法国革命军占领荷兰，建立附庸国巴达维亚共和国。', countryId: 'netherlands', continentId: 'europe', categoryId: 'war', dynastyId: 'nl_patriot' },
  { id: 'nl_9', year: 1815, summary: '荷兰王国成立', detail: '维也纳会议决定建立荷兰联合王国（包括今比利时），奥兰治家族统治延续至今。', countryId: 'netherlands', continentId: 'europe', categoryId: 'dynasty', dynastyId: 'nl_kingdom' },
  { id: 'nl_10', year: 1830, summary: '比利时独立', detail: '比利时革命爆发，脱离荷兰联合王国独立，荷兰失去南方省份。', countryId: 'netherlands', continentId: 'europe', categoryId: 'politics', dynastyId: 'nl_kingdom' },

  // ===== 波兰历史事件 =====
  { id: 'pl_1', year: 966, summary: '波兰受洗', detail: '梅什科一世接受洗礼，波兰皈依基督教（天主教），成为欧洲基督教大家庭一员。', countryId: 'poland', continentId: 'europe', categoryId: 'religion', dynastyId: 'pl_piast' },
  { id: 'pl_2', year: 1226, yearEnd: 1283, summary: '条顿骑士团入侵普鲁士', detail: '条顿骑士团应波兰之邀前来镇压异教普鲁士人，后来反而成为波兰最大威胁。', countryId: 'poland', continentId: 'europe', categoryId: 'war', dynastyId: 'pl_piast' },
  { id: 'pl_3', year: 1386, summary: '波兰-立陶宛联合（克列沃联合）', detail: '波兰女王雅德维加嫁给立陶宛大公雅盖沃，波兰与立陶宛建立紧密联盟。', countryId: 'poland', continentId: 'europe', categoryId: 'politics', dynastyId: 'pl_jagiellonian' },
  { id: 'pl_4', year: 1410, summary: '格伦瓦尔德战役', detail: '波兰-立陶宛联军在格伦瓦尔德（坦能堡）战役中彻底击败条顿骑士团。', countryId: 'poland', continentId: 'europe', categoryId: 'war', dynastyId: 'pl_jagiellonian' },
  { id: 'pl_5', year: 1543, summary: '哥白尼《天体运行论》出版', detail: '尼古拉·哥白尼提出日心说，颠覆了人类对宇宙的认知，被誉为"科学革命的开端"。', countryId: 'poland', continentId: 'europe', categoryId: 'culture', dynastyId: 'pl_jagiellonian' },
  { id: 'pl_6', year: 1569, summary: '卢布林联盟', detail: '波兰与立陶宛正式合并为波兰-立陶宛联邦，成为当时欧洲最大的国家之一。', countryId: 'poland', continentId: 'europe', categoryId: 'politics', dynastyId: 'pl_commonwealth' },
  { id: 'pl_7', year: 1683, summary: '维也纳解围', detail: '波兰国王约翰三世·索别斯基率军在维也纳城外击败奥斯曼大军，拯救了欧洲。', countryId: 'poland', continentId: 'europe', categoryId: 'war', dynastyId: 'pl_commonwealth' },
  { id: 'pl_8', year: 1772, summary: '第一次瓜分波兰', detail: '俄罗斯、普鲁士和奥地利第一次瓜分波兰，波兰丧失约三分之一领土。', countryId: 'poland', continentId: 'europe', categoryId: 'politics', dynastyId: 'pl_commonwealth' },
  { id: 'pl_9', year: 1791, summary: '《五月宪法》通过', detail: '波兰议会通过欧洲第一部成文宪法，试图改革贵族民主制以挽救国家。', countryId: 'poland', continentId: 'europe', categoryId: 'politics', dynastyId: 'pl_commonwealth' },
  { id: 'pl_10', year: 1793, yearEnd: 1795, summary: '第二、第三次瓜分波兰', detail: '1793年和1795年两次瓜分后，波兰从欧洲地图上消失一百二十三年。', countryId: 'poland', continentId: 'europe', categoryId: 'politics', dynastyId: 'pl_partitioned' },
  { id: 'pl_11', year: 1830, yearEnd: 1831, summary: '十一月起义', detail: '波兰爱国者在华沙发动抗俄起义，被沙皇尼古拉一世镇压。', countryId: 'poland', continentId: 'europe', categoryId: 'rebellion', dynastyId: 'pl_partitioned' },
  { id: 'pl_12', year: 1863, yearEnd: 1864, summary: '一月起义', detail: '波兰再次爆发抗俄起义，被残酷镇压，数千人被处决或流放西伯利亚。', countryId: 'poland', continentId: 'europe', categoryId: 'rebellion', dynastyId: 'pl_partitioned' },
  { id: 'pl_13', year: 1918, summary: '波兰复国', detail: '一战结束后，毕苏茨基在华沙宣布波兰第二共和国成立，波兰重新出现在地图上。', countryId: 'poland', continentId: 'europe', categoryId: 'independence', dynastyId: 'pl_modern' },
  { id: 'pl_14', year: 1939, yearEnd: 1945, summary: '二战中的波兰', detail: '1939年德国入侵波兰引发二战，波兰承受巨大伤亡；战后波兰被划归苏联势力范围。', countryId: 'poland', continentId: 'europe', categoryId: 'war', dynastyId: 'pl_modern' },
  { id: 'pl_15', year: 1989, summary: '圆桌会议与民主转型', detail: '波兰团结工会与共产党举行圆桌会议谈判，实现和平过渡到民主制度。', countryId: 'poland', continentId: 'europe', categoryId: 'politics', dynastyId: 'pl_modern' },

  // ===== 奥匈帝国历史事件 =====
  { id: 'ah_1', year: 976, summary: '巴本堡家族统治开始', detail: '利奥波德一世被封为东方边疆区伯爵，巴本堡家族开始了对奥地利的统治。', countryId: 'austria', continentId: 'europe', categoryId: 'dynasty', dynastyId: 'ah_austria_rise' },
  { id: 'ah_2', year: 1246, summary: '巴本堡王朝绝嗣', detail: '腓特烈二世在莱塔河战役中阵亡，巴本堡男系绝嗣，奥地利进入空位期。', countryId: 'austria', continentId: 'europe', categoryId: 'dynasty', dynastyId: 'ah_austria_rise' },
  { id: 'ah_3', year: 1278, summary: '哈布斯堡家族获得奥地利', detail: '鲁道夫一世在马尔谢菲尔德战役击败普热米斯尔·奥特卡二世，哈布斯堡家族开始统治奥地利。', countryId: 'austria', continentId: 'europe', categoryId: 'dynasty', dynastyId: 'ah_austria_rise' },
  { id: 'ah_4', year: 1526, summary: '哈布斯堡继承匈牙利', detail: '莫哈奇战役后匈牙利国王路易二世阵死，斐迪南一世继承匈牙利和波希米亚王位。', countryId: 'austria', continentId: 'europe', categoryId: 'dynasty', dynastyId: 'ah_austria_rise' },
  { id: 'ah_5', year: 1683, summary: '维也纳解围', detail: '波兰-奥地利-德国联军在维也纳城外击败奥斯曼大军，标志着奥斯曼帝国在欧洲的扩张终结。', countryId: 'austria', continentId: 'europe', categoryId: 'war', dynastyId: 'ah_austria_rise' },
  { id: 'ah_6', year: 1772, yearEnd: 1795, summary: '参与瓜分波兰', detail: '奥地利参与三次瓜分波兰，获得加利西亚等大片领土。', countryId: 'austria', continentId: 'europe', categoryId: 'war', dynastyId: 'ah_austria_rise' },
  { id: 'ah_7', year: 1804, summary: '弗朗茨二世建立奥地利帝国', detail: '面对拿破仑威胁，弗朗茨二世宣布自己为奥地利皇帝，建立奥地利帝国。', countryId: 'austria', continentId: 'europe', categoryId: 'dynasty', dynastyId: 'ah_habsburg_empire' },
  { id: 'ah_8', year: 1805, yearEnd: 1809, summary: '奥斯特里茨战役与第五次反法同盟', detail: '1805年奥斯特里茨战役拿破仑大胜奥地利；1809年瓦格拉姆战役再次击败奥地利。', countryId: 'austria', continentId: 'europe', categoryId: 'war', dynastyId: 'ah_habsburg_empire' },
  { id: 'ah_9', year: 1848, summary: '1848年革命席卷奥地利', detail: '自由主义革命浪潮席卷维也纳，梅特涅首相逃亡，弗兰茨·约瑟夫一世继位。', countryId: 'austria', continentId: 'europe', categoryId: 'rebellion', dynastyId: 'ah_habsburg_empire' },
  { id: 'ah_10', year: 1859, summary: '奥地利在意大利战场失利', detail: '索尔费里诺战役中被法-撒联军击败，被迫放弃伦巴第。', countryId: 'austria', continentId: 'europe', categoryId: 'war', dynastyId: 'ah_habsburg_empire' },
  { id: 'ah_11', year: 1866, summary: '普奥战争（七周战争）', detail: '俾斯麦领导的普鲁士在柯尼希格雷茨战役中大败奥地利，奥地利被排除出德意志事务。', countryId: 'austria', continentId: 'europe', categoryId: 'war', dynastyId: 'ah_habsburg_empire' },
  { id: 'ah_12', year: 1867, summary: '奥匈妥协（二元帝国成立）', detail: '弗朗茨·约瑟夫一世与匈牙利贵族达成妥协，建立奥匈双元帝国，匈牙利获得高度自治权。', countryId: 'austria', continentId: 'europe', categoryId: 'dynasty', dynastyId: 'ah_dualempire' },
  { id: 'ah_13', year: 1914, summary: '萨拉热窝事件', detail: '奥匈帝国皇储弗朗茨·斐迪南大公在萨拉热窝被塞尔维亚青年刺杀，引发第一次世界大战。', countryId: 'austria', continentId: 'europe', categoryId: 'war', dynastyId: 'ah_dualempire' },
  { id: 'ah_14', year: 1918, summary: '奥匈帝国解体', detail: '一战结束后奥匈帝国分裂为奥地利、匈牙利、捷克斯洛伐克等国，哈布斯堡王朝终结。', countryId: 'austria', continentId: 'europe', categoryId: 'dynasty', dynastyId: 'ah_dualempire' },

  // ===== 加拿大历史事件 =====
  { id: 'ca_1', year: 1000, summary: '维京人登陆北美', detail: '莱夫·埃里克森率领的维宁探险队到达今天加拿大的纽芬兰地区，比哥伦布早约五百年。', countryId: 'canada', continentId: 'north-america', categoryId: 'exploration', dynastyId: 'ca_indigenous' },
  { id: 'ca_2', year: 1534, summary: '卡蒂埃探索圣劳伦斯河', detail: '法国探险家雅克·卡蒂埃探索圣劳伦斯河流域，为法国在北美的殖民活动奠定基础。', countryId: 'canada', continentId: 'north-america', categoryId: 'exploration', dynastyId: 'ca_new_france' },
  { id: 'ca_3', year: 1608, summary: '魁北克城建立', detail: '萨缪尔·德·尚普兰在圣劳伦斯河畔建立魁北克城，新法兰西殖民地核心建立。', countryId: 'canada', continentId: 'north-america', categoryId: 'economy', dynastyId: 'ca_new_france' },
  { id: 'ca_4', year: 1754, yearEnd: 1763, summary: '法印战争', detail: '英法在北美为殖民地霸权爆发战争，法国战败后将加拿大割让给英国（《巴黎条约》）。', countryId: 'canada', continentId: 'north-america', categoryId: 'war', dynastyId: 'ca_new_france' },
  { id: 'ca_5', year: 1763, yearEnd: 1783, summary: '《魁北克法案》与美国独立', detail: '1774年《魁北克法案》保护法语权利；美国独立期间大批保皇党难民北上涌入加拿大。', countryId: 'canada', continentId: 'north-america', categoryId: 'politics', dynastyId: 'ca_british_na' },
  { id: 'ca_6', year: 1789, yearEnd: 1796, summary: '西北公司竞争', detail: '蒙特利尔商人组建西北公司与哈德逊湾公司竞争毛皮贸易，双方激烈角逐。', countryId: 'canada', continentId: 'north-america', categoryId: 'economy', dynastyId: 'ca_british_na' },
  { id: 'ca_7', year: 1812, yearEnd: 1815, summary: '1812年战争', detail: '美国入侵加拿大，加拿大民兵和原住民盟友成功抵御美军进攻，华盛顿一度被焚毁。', countryId: 'canada', continentId: 'north-america', categoryId: 'war', dynastyId: 'ca_british_na' },
  { id: 'ca_8', year: 1867, summary: '《英属北美法案》与联邦成立', detail: '《英属北美法案》生效，安大略、魁北克、新斯科舍和新不伦瑞克合并组成自治领。', countryId: 'canada', continentId: 'north-america', categoryId: 'independence', dynastyId: 'ca_confederation' },
  { id: 'ca_9', year: 1885, yearEnd: 1886, summary: '太平洋铁路竣工与西北起义', detail: '加拿大太平洋铁路完工；同年路易·里埃尔领导的梅蒂人起义被镇压，里埃尔被处决。', countryId: 'canada', continentId: 'north-america', categoryId: 'war', dynastyId: 'ca_confederation' },
  { id: 'ca_10', year: 1914, yearEnd: 1918, summary: '一战中的加拿大', detail: '加拿大派遣超过六十万士兵参战，维米岭战役中加拿大军团表现出色，代价惨重（约六万七千阵亡）。', countryId: 'canada', continentId: 'north-america', categoryId: 'war', dynastyId: 'ca_world_wars' },
  { id: 'ca_11', year: 1982, summary: '《加拿大法案》', detail: '《加拿大法案》生效，英国议会放弃修改加拿大宪法的权力，加拿大获得完全主权。', countryId: 'canada', continentId: 'north-america', categoryId: 'independence', dynastyId: 'ca_world_wars' },

  // ===== 墨西哥历史事件 =====
  { id: 'mx_1', year: -200, yearEnd: 900, summary: '特奥蒂瓦坎文明鼎盛期', detail: '特奥蒂瓦坎城拥有太阳金字塔和月亮金字塔，是中美洲最大的城市之一，约公元六世纪神秘衰落。', countryId: 'mexico', continentId: 'north-america', categoryId: 'culture', dynastyId: 'mx_classic' },
  { id: 'mx_2', year: 250, yearEnd: 900, summary: '玛雅古典期', detail: '玛雅城邦如蒂卡尔、帕伦克、科潘等进入黄金时代，发展出复杂的文字系统和天文历法。', countryId: 'mexico', continentId: 'north-america', categoryId: 'culture', dynastyId: 'mx_classic' },
  { id: 'mx_3', year: 1325, yearEnd: 1521, summary: '阿兹特克帝国兴衰', detail: '特诺奇蒂特兰城（墨西哥城前身）建立，至十五世纪发展成为中美洲最强盛帝国。', countryId: 'mexico', continentId: 'north-america', categoryId: 'dynasty', dynastyId: 'mx_postclassic' },
  { id: 'mx_4', year: 1519, yearEnd: 1521, summary: '科尔特斯征服阿兹特克', detail: '埃尔南·科尔特斯率不到一千名西班牙士兵，利用内部矛盾和天花病毒，征服庞大的阿兹特克帝国。', countryId: 'mexico', continentId: 'north-america', categoryId: 'war', dynastyId: 'mx_colonial' },
  { id: 'mx_5', year: 1810, yearEnd: 1821, summary: '墨西哥独立战争', detail: '米格尔·伊达尔戈神父发起多洛雷斯号召，经过十一年斗争，墨西哥最终赢得独立。', countryId: 'mexico', continentId: 'north-america', categoryId: 'independence', dynastyId: 'mx_independent' },
  { id: 'mx_6', year: 1836, yearEnd: 1848, summary: '得克萨斯独立与美墨战争', detail: '得克萨斯脱离墨西哥加入美国；美墨战争中墨西哥失去一半以上的领土（包括加利福尼亚等地）。', countryId: 'mexico', continentId: 'north-america', categoryId: 'war', dynastyId: 'mx_independent' },
  { id: 'mx_7', year: 1858, yearEnd: 1861, summary: '改革战争', detail: '自由派贝尼托·华雷斯与保守派之间关于教会和国家权力的内战，以自由派胜利告终。', countryId: 'mexico', continentId: 'north-america', categoryId: 'war', dynastyId: 'mx_independent' },
  { id: 'mx_8', year: 1864, yearEnd: 1867, summary: '法国干涉与马西米连诺一世', detail: '拿破仑三世扶持奥地利大公马西米连诺为墨西哥皇帝；华雷斯领导抵抗运动，马西米连诺被处决。', countryId: 'mexico', continentId: 'north-america', categoryId: 'war', dynastyId: 'mx_independent' },
  { id: 'mx_9', year: 1910, yearEnd: 1920, summary: '墨西哥革命', detail: '反对迪亚斯独裁统治的革命爆发，涌现马德罗、萨帕塔、比利亚等众多革命领袖。', countryId: 'mexico', continentId: 'north-america', categoryId: 'rebellion', dynastyId: 'mx_independent' },

  // ===== 巴西历史事件 =====
  { id: 'br_1', year: 1500, summary: '佩德罗·阿尔瓦雷斯·卡布拉尔发现巴西', detail: '葡萄牙航海家卡布拉尔在前往印度的途中偏航，意外发现巴西东海岸。', countryId: 'brazil', continentId: 'south-america', categoryId: 'exploration', dynastyId: 'br_colonial' },
  { id: 'br_2', year: 1624, yearEnd: 1654, summary: '荷兰入侵巴西', detail: '荷兰西印度公司占领巴西东北部（伯南布哥），直到1654年被葡萄牙人驱逐。', countryId: 'brazil', continentId: 'south-america', categoryId: 'war', dynastyId: 'br_colonial' },
  { id: 'br_3', year: 1693, summary: '米纳斯吉拉斯淘金热', detail: '在米纳斯吉拉斯发现大量金矿，引发淘金热潮，大量奴隶被输入巴西。', countryId: 'brazil', continentId: 'south-america', categoryId: 'economy', dynastyId: 'br_colonial' },
  { id: 'br_4', year: 1808, summary: '葡萄牙王室迁至巴西', detail: '拿破仑入侵葡萄牙，摄政王若昂六世率王室和大批贵族逃亡至里约热内卢。', countryId: 'brazil', continentId: 'south-america', categoryId: 'politics', dynastyId: 'br_united_kingdom' },
  { id: 'br_5', year: 1815, summary: '巴西升格为王国', detail: '葡萄牙-巴西-阿尔加维联合王国成立，巴西与葡萄牙处于同等地位。', countryId: 'brazil', continentId: 'south-america', categoryId: 'dynasty', dynastyId: 'br_united_kingdom' },
  { id: 'br_6', year: 1822, summary: '巴西独立', detail: '佩德罗一世宣布"不独立，毋宁死！"巴西独立为帝国，佩德罗成为首位皇帝。', countryId: 'brazil', continentId: 'south-america', categoryId: 'independence', dynastyId: 'br_empire' },
  { id: 'br_7', year: 1888, summary: '巴西废除奴隶制', detail: '伊莎贝尔公主签署《黄金法案》，巴西成为最后一个废除奴隶制的西方大国。', countryId: 'brazil', continentId: 'south-america', categoryId: 'politics', dynastyId: 'br_empire' },
  { id: 'br_8', year: 1889, yearEnd: 1894, summary: '巴西共和国成立', detail: '德奥多罗·达·丰塞卡元帅发动军事政变，推翻帝制，建立巴西合众国。', countryId: 'brazil', continentId: 'south-america', categoryId: 'independence', dynastyId: 'br_republic' },

  // ===== 阿根廷历史事件 =====
  { id: 'ar_1', year: 1516, summary: '胡安·迪亚斯·德·索利斯抵达拉普拉塔河口', detail: '西班牙探险家索利斯成为第一个抵达拉普拉塔河口的欧洲人。', countryId: 'argentina', continentId: 'south-america', categoryId: 'exploration', dynastyId: 'ar_colonial' },
  { id: 'ar_2', year: 1776, summary: '拉普拉塔总督区设立', detail: '西班牙将拉普拉塔地区从秘鲁总督区分出，设立独立的拉普拉塔总督区。', countryId: 'argentina', continentId: 'south-america', categoryId: 'politics', dynastyId: 'ar_colonial' },
  { id: 'ar_3', year: 1806, yearEnd: 1807, summary: '英国入侵布宜诺斯艾利斯（未遂）', detail: '英国军队两次尝试占领布宜诺斯艾利斯，均被当地民兵击退。', countryId: 'argentina', continentId: 'south-america', categoryId: 'war', dynastyId: 'ar_colonial' },
  { id: 'ar_4', year: 1810, summary: '五月革命', detail: '布宜诺斯艾利斯市民集会推翻西班牙总督，建立临时军政府，阿根廷独立进程开始。', countryId: 'argentina', continentId: 'south-america', categoryId: 'independence', dynastyId: 'ar_independence' },
  { id: 'ar_5', year: 1816, yearEnd: 1824, summary: '图库曼国会宣布独立', detail: '图库曼国会正式宣布拉普拉塔联合省独立于西班牙。', countryId: 'argentina', continentId: 'south-america', categoryId: 'independence', dynastyId: 'ar_independence' },
  { id: 'ar_6', year: 1880, summary: '布宜诺斯艾利斯联邦化', detail: '布宜诺斯艾利斯市被设为联邦首都，结束了该市作为半独立邦的地位。', countryId: 'argentina', continentId: 'south-america', categoryId: 'politics', dynastyId: 'ar_conservative' },
  { id: 'ar_7', year: 1946, summary: '胡安·庇隆首次当选总统', detail: '前军官胡安·庇隆当选总统，其妻子埃娃·庇隆（贝隆夫人）成为阿根廷民众偶像。', countryId: 'argentina', continentId: 'south-america', categoryId: 'politics', dynastyId: 'ar_peronism' },
  { id: 'ar_8', year: 1955, summary: '庇隆被军事政变推翻', detail: '军方发动"解放革命"推翻庇隆，庇隆流亡海外十八年。', countryId: 'argentina', continentId: 'south-america', categoryId: 'rebellion', dynastyId: 'ar_peronism' },
  { id: 'ar_9', year: 1976, yearEnd: 1983, summary: '肮脏战争', detail: '军政府发动"国家重组进程"，约三万人在"肮脏战争"中被迫害致死或失踪。', countryId: 'argentina', continentId: 'south-america', categoryId: 'disaster', dynastyId: 'ar_peronism' },
  { id: 'ar_10', year: 1982, summary: '马尔维纳斯群岛战争', detail: '阿根廷军政府为转移国内矛盾出兵占领马尔维纳斯群岛，被英国远征军击败。', countryId: 'argentina', continentId: 'south-america', categoryId: 'war', dynastyId: 'ar_peronism' },

  // ===== 秘鲁历史事件 =====
  { id: 'pe_1', year: 200, yearEnd: 800, summary: '莫切文化兴盛', detail: '莫切文化以精美的陶器、金属工艺和巨型砖砌金字塔著称，在秘鲁北部沿海繁盛。', countryId: 'peru', continentId: 'south-america', categoryId: 'culture', dynastyId: 'pe_inca_pre' },
  { id: 'pe_2', year: 450, yearEnd: 1050, summary: '瓦里帝国扩张', detail: '瓦里帝国从南部高原扩张，控制安第斯山区大片区域，被认为是第一个安第斯帝国。', countryId: 'peru', continentId: 'south-america', categoryId: 'dynasty', dynastyId: 'pe_inca_pre' },
  { id: 'pe_3', year: 1438, summary: '帕查库特建立印加帝国', detail: '帕查库特大帝击败钦察苏尤，开始印加帝国的快速扩张，奠定了帝国的基础。', countryId: 'peru', continentId: 'south-america', categoryId: 'dynasty', dynastyId: 'pe_tawantinsuyu' },
  { id: 'pe_4', year: 1471, yearEnd: 1493, summary: '图帕克·印卡·尤潘基统治', detail: '印加帝国在尤潘基治下达到最大疆域，向北延伸至厄瓜多尔，向南至智利中部。', countryId: 'peru', continentId: 'south-america', categoryId: 'dynasty', dynastyId: 'pe_tawantinsuyu' },
  { id: 'pe_5', year: 1527, yearEnd: 1532, summary: '内战与天花瘟疫', detail: '瓦伊纳·卡帕克死后，瓦斯卡尔与阿塔瓦尔帕争夺皇位；同时天花瘟疫从北方传入，造成大量死亡。', countryId: 'peru', continentId: 'south-america', categoryId: 'disaster', dynastyId: 'pe_tawantinsuyu' },
  { id: 'pe_6', year: 1532, yearEnd: 1533, summary: '皮萨罗俘获并处决阿塔瓦尔帕', detail: '弗朗西斯科·皮萨罗仅用不到两百人就俘获了印加皇帝阿塔瓦尔帕，索取巨额赎金后将其绞死。', countryId: 'peru', continentId: 'south-america', categoryId: 'war', dynastyId: 'pe_tawantinsuyu' },
  { id: 'pe_7', year: 1536, yearEnd: 1572, summary: '曼科印卡抵抗与新印加国', detail: '曼科·印卡二世领导印加人进行长期游击抵抗；其子图帕克·阿马鲁在比尔卡班巴建立了"新印加国"。', countryId: 'peru', continentId: 'south-america', categoryId: 'rebellion', dynastyId: 'pe_tawantinsuyu' },
  { id: 'pe_8', year: 1780, yearEnd: 1783, summary: '图帕克·阿马鲁二世起义', detail: '何塞·加布里埃尔·孔多尔坎基（自称图帕克·阿马鲁二世）领导大规模印第安人反西起义。', countryId: 'peru', continentId: 'south-america', categoryId: 'rebellion', dynastyId: 'pe_viceroyalty' },
  { id: 'pe_9', year: 1821, yearEnd: 1824, summary: '秘鲁独立', detail: '何塞·德·圣马丁宣布秘鲁独立；西蒙·玻利瓦尔和阿亚库舒战役最终击败西班牙。', countryId: 'peru', continentId: 'south-america', categoryId: 'independence', dynastyId: 'pe_viceroyalty' },
  { id: 'pe_10', year: 1992, summary: '捕获光辉道路领导人', detail: '藤森总统指挥行动抓获光辉道路恐怖组织首领阿维马莱·古斯曼，结束多年暴力冲突。', countryId: 'peru', continentId: 'south-america', categoryId: 'politics', dynastyId: 'pe_modern' },

  // ===== 印加帝国事件 =====
  { id: 'ic_1', year: 1438, summary: '帕查库特改革与扩张', detail: '帕查库特大帝推行土地重分、语言统一和基础设施建设工程，奠定印加帝国基础。', countryId: 'inca', continentId: 'south-america', categoryId: 'dynasty', dynastyId: 'ic_expansion' },
  { id: 'ic_2', year: 1476, summary: '印加道路网基本建成', detail: '印加道路网全长约四万公里，连接整个帝国，被称为"安第斯的罗马大道"。', countryId: 'inca', continentId: 'south-america', categoryId: 'culture', dynastyId: 'ic_expansion' },
  { id: 'ic_3', year: 1532, summary: '皮萨罗到达卡哈马卡', detail: '弗朗西斯科·皮萨罗带领一百六十八人抵达卡哈马卡，准备与印加皇帝会面。', countryId: 'inca', continentId: 'south-america', categoryId: 'war', dynastyId: 'ic_expansion' },
  { id: 'ic_4', year: 1533, summary: '阿塔瓦尔帕被处决', detail: '皮萨罗在获得相当于当今数十亿美元的赎金后仍将阿塔瓦尔帕处决，印加帝国陷入混乱。', countryId: 'inca', continentId: 'south-america', categoryId: 'war', dynastyId: 'ic_expansion' },
  { id: 'ic_5', year: 1535, summary: '皮萨罗建立利马城', detail: '皮萨罗在海边建立利马城作为新殖民地的首都。', countryId: 'inca', continentId: 'south-america', categoryId: 'economy', dynastyId: 'ic_conquest' },

  // ===== 玛雅文明事件 =====
  { id: 'my_1', year: 250, yearEnd: 600, summary: '玛雅古典期城邦兴起', detail: '蒂卡尔、卡拉克穆尔、帕伦克、科潘等城邦纷纷兴起，修建大型金字塔和宫殿建筑。', countryId: 'maya', continentId: 'north-america', categoryId: 'dynasty', dynastyId: 'my_classic' },
  { id: 'my_2', year: 292, summary: '蒂卡尔铭文记载开始', detail: '蒂卡尔最早的铭文日期出现（292年），标志着玛雅文字系统的成熟运用。', countryId: 'maya', continentId: 'north-america', categoryId: 'culture', dynastyId: 'my_classic' },
  { id: 'my_3', year: 562, summary: '卡拉克穆尔击败蒂卡尔', detail: '卡拉克姆尔在"星战"中击败蒂卡尔，造成蒂卡尔一段时间的政治衰落。', countryId: 'maya', continentId: 'north-america', categoryId: 'war', dynastyId: 'my_classic' },
  { id: 'my_4', year: 682, yearEnd: 744, summary: '哈萨·昌·卡维尔二世统治', detail: '蒂卡尔伟大的国王哈萨·昌·卡维尔二世（682-744年在位）重建蒂卡尔辉煌。', countryId: 'maya', continentId: 'north-america', categoryId: 'dynasty', dynastyId: 'my_classic' },
  { id: 'my_5', year: 869, yearEnd: 909, summary: '古典期崩溃（大荒废）', detail: '九世纪末玛雅低地南部城邦普遍被废弃，原因众说纷纭（干旱、战争、环境退化）。', countryId: 'maya', continentId: 'north-america', categoryId: 'disaster', dynastyId: 'my_classic' },
  { id: 'my_6', year: 987, yearEnd: 1441, summary: '后古典期奇琴伊察与玛雅潘', detail: '奇琴伊察和玛雅潘成为后古典期的两大中心，后者统一尤卡坦半岛。', countryId: 'maya', continentId: 'north-america', categoryId: 'dynasty', dynastyId: 'my_postclassic' },
  { id: 'my_7', year: 1519, yearEnd: 1526, summary: '科尔特斯进入尤卡坦', detail: '科尔特斯率军进入玛雅地区，利用城邦间的矛盾逐步推进。', countryId: 'maya', continentId: 'north-america', categoryId: 'war', dynastyId: 'my_conquest' },
  { id: 'my_8', year: 1697, summary: '最后一个玛雅城邦被征服', detail: '西班牙军队攻陷最后的独立玛雅城邦提扎（Itzá），玛雅文明的独立存在终结。', countryId: 'maya', continentId: 'north-america', categoryId: 'war', dynastyId: 'my_conquest' },

  // ===== 阿兹特克帝国事件 =====
  { id: 'az_1', year: 1325, summary: '特诺奇蒂特兰建立', detail: '墨西加人在特斯科科湖中的小岛上建立特诺奇蒂特兰（今墨西哥城）。', countryId: 'aztec', continentId: 'north-america', categoryId: 'culture', dynastyId: 'az_rise' },
  { id: 'az_2', year: 1428, summary: '三方联盟（阿兹特克帝国）成立', detail: '特斯科科、特克斯可可（阿兹特克）和特拉科潘组成三方联盟，阿兹特克成为主导力量。', countryId: 'aztec', continentId: 'north-america', categoryId: 'dynasty', dynastyId: 'az_empire' },
  { id: 'az_3', year: 1440, yearEnd: 1469, summary: '蒙特祖玛一世改革', detail: '蒙特祖玛一世进行广泛的政治和社会改革，强化阿兹特克的军事力量和宗教仪式体系。', countryId: 'aztec', continentId: 'north-america', categoryId: 'politics', dynastyId: 'az_empire' },
  { id: 'az_4', year: 1487, yearEnd: 1502, summary: '大神庙扩建与人祭高峰', detail: '阿威索特尔在大神庙献祭仪式上一次就牺牲数万名战俘。', countryId: 'aztec', continentId: 'north-america', categoryId: 'religion', dynastyId: 'az_empire' },
  { id: 'az_5', year: 1502, summary: '蒙特祖玛二世即位', detail: '蒙特祖玛二世继位为阿兹特克皇帝，在其统治后期遭遇西班牙入侵。', countryId: 'aztec', continentId: 'north-america', categoryId: 'dynasty', dynastyId: 'az_empire' },
  { id: 'az_6', year: 1519, summary: '科尔特斯进入特诺奇蒂特兰', detail: '科尔特斯及其盟友托托纳克人和特拉斯卡拉人进入阿兹特克首都。', countryId: 'aztec', continentId: 'north-america', categoryId: 'war', dynastyId: 'az_empire' },
  { id: 'az_7', year: 1520, summary: '悲伤之夜', detail: '科尔特斯试图通过蒙特祖玛二世平息骚乱失败后撤离特诺奇蒂特兰，在"悲伤之夜"遭受重大伤亡。', countryId: 'aztec', continentId: 'north-america', categoryId: 'war', dynastyId: 'az_empire' },
  { id: 'az_8', year: 1521, yearEnd: 1525, summary: '特诺奇蒂特兰陷落与帝国灭亡', detail: '经过三个月的 siege，科尔特斯攻克并焚毁特诺奇蒂特兰，阿兹特克帝国灭亡。', countryId: 'aztec', continentId: 'north-america', categoryId: 'war', dynastyId: 'az_fall' },

  // ===== 非洲补充事件 =====
  // 埃塞俄比亚
  { id: 'et_1', year: 80, yearEnd: 825, summary: '阿克苏姆王国鼎盛期', detail: '阿克苏姆王国控制红海贸易，铸造自己的金币，与罗马帝国保持密切联系。', countryId: 'ethiopia', continentId: 'africa', categoryId: 'dynasty', dynastyId: 'et_aksum' },
  { id: 'et_2', year: 330, yearEnd: 360, summary: '阿克苏姆皈依基督教', detail: '埃扎纳皇帝接受基督教（科普特正教），阿克苏姆成为非洲最早信仰基督教的国家之一。', countryId: 'ethiopia', continentId: 'africa', categoryId: 'religion', dynastyId: 'et_aksum' },
  { id: 'et_3', year: 1270, summary: '所罗门王朝建立', detail: '耶库诺·阿姆拉克推翻扎格韦王朝，声称是示巴女王的儿子与所罗门王的后裔，建立所罗门王朝。', countryId: 'ethiopia', continentId: 'africa', categoryId: 'dynasty', dynastyId: 'et_solomonid' },
  { id: 'et_4', year: 1529, yearEnd: 1543, summary: '阿达尔战争', detail: '伊斯兰化的阿丹苏丹国在土耳其火器支持下入侵埃塞俄比亚，最终被葡萄牙援军帮助下的埃军击败。', countryId: 'ethiopia', continentId: 'africa', categoryId: 'war', dynastyId: 'et_solomonid' },
  { id: 'et_5', year: 1896, summary: '阿杜瓦战役', detail: '孟尼利克二世在阿杜瓦战役中击败意大利入侵军，维护了埃塞俄比亚的独立，是非洲国家击败欧洲殖民者的罕见案例。', countryId: 'ethiopia', continentId: 'africa', categoryId: 'war', dynastyId: 'et_solomonid' },
  { id: 'et_6', year: 1935, yearEnd: 1941, summary: '意大利二次入侵与占领', detail: '墨索里尼的法西斯意大利再次入侵埃塞俄比亚，短暂占领至二战中被盟军解放。', countryId: 'ethiopia', continentId: 'africa', categoryId: 'war', dynastyId: 'et_solomonid' },
  { id: 'et_7', year: 1974, summary: '海尔·塞拉西被推翻', detail: '德尔格军官团发动政变推翻海尔·塞拉西皇帝，结束了两千余年的君主制传统。', countryId: 'ethiopia', continentId: 'africa', categoryId: 'rebellion', dynastyId: 'et_solomonid' },

  // 南非
  { id: 'sa_1', year: 1652, summary: '好望角补给站建立', detail: '荷兰东印度公司的扬·范·里贝克在桌湾建立补给站，这是南非欧洲殖民的开端。', countryId: 'south-africa', continentId: 'africa', categoryId: 'economy', dynastyId: 'sa_dutch' },
  { id: 'sa_2', year: 1806, yearEnd: 1820, summary: '英国接管开普', detail: '英国接管荷兰的开普殖民地；英国移民开始大规模迁入。', countryId: 'south-africa', continentId: 'africa', categoryId: 'politics', dynastyId: 'sa_british' },
  { id: 'sa_3', year: 1836, yearEnd: 1840, summary: '大迁徙（大 Trek）', detail: '布尔人（荷兰裔后裔）为逃避英国统治，驾着牛车深入内陆大迁徙。', countryId: 'south-africa', continentId: 'africa', categoryId: 'exploration', dynastyId: 'sa_british' },
  { id: 'sa_4', year: 1867, yearEnd: 1886, summary: '钻石与黄金发现', detail: '1867年金伯利钻石矿被发现；1886年威特沃特斯兰德金矿被发现，引发了巨大的经济变革。', countryId: 'south-africa', continentId: 'africa', categoryId: 'economy', dynastyId: 'sa_apartheid' },
  { id: 'sa_5', year: 1899, yearEnd: 1902, summary: '第二次布尔战争', detail: '英国与布尔人（德兰士瓦和奥兰治自由邦）之间爆发战争，是世界上第一次现代意义上的"总体战"。', countryId: 'south-africa', continentId: 'africa', categoryId: 'war', dynastyId: 'sa_apartheid' },
  { id: 'sa_6', year: 1910, summary: '南非联邦成立', detail: '四个殖民地合并为南非联邦，成为英国自治领，但种族歧视已制度化。', countryId: 'south-africa', continentId: 'africa', categoryId: 'dynasty', dynastyId: 'sa_apartheid' },
  { id: 'sa_7', year: 1948, summary: '国民党上台，种族隔离制度化', detail: '国民党在大选中获胜，全面实施种族隔离制度（Apartheid），将南非社会按种族严格分层。', countryId: 'south-africa', continentId: 'africa', categoryId: 'politics', dynastyId: 'sa_apartheid' },
  { id: 'sa_8', year: 1960, summary: '沙佩维尔大屠杀', detail: '警察在沙佩维尔镇向反对通行证法的示威人群开火，打死六十九人，震动世界。', countryId: 'south-africa', continentId: 'africa', categoryId: 'disaster', dynastyId: 'sa_apartheid' },
  { id: 'sa_9', year: 1964, summary: '曼德拉被判终身监禁', detail: '纳尔逊·曼德拉在里沃尼亚审判中被判处终身监禁，在罗本岛监狱度过了十八年。', countryId: 'south-africa', continentId: 'africa', categoryId: 'politics', dynastyId: 'sa_apartheid' },
  { id: 'sa_10', year: 1990, summary: '曼德拉获释', detail: '德克勒克总统解除对非国大的禁令并释放曼德拉，种族隔离制度的终结开始。', countryId: 'south-africa', continentId: 'africa', categoryId: 'independence', dynastyId: 'sa_apartheid' },
  { id: 'sa_11', year: 1994, summary: '首次不分种族大选', detail: '曼德拉当选为南非第一位黑人总统，"彩虹之国"诞生。', countryId: 'south-africa', continentId: 'africa', categoryId: 'independence', dynastyId: 'sa_modern' },

  // 马里帝国
  { id: 'ml_1', year: 1230, summary: '松迪亚塔建立马里帝国', detail: '松迪亚塔·凯塔击败苏索国，建立马里帝国，后击败加纳残部成为西非霸主。', countryId: 'mali-empire', continentId: 'africa', categoryId: 'dynasty', dynastyId: 'ml_mali_early' },
  { id: 'ml_2', year: 1312, yearEnd: 1337, summary: '曼萨·穆萨时代', detail: '曼萨·穆萨一世统治时期是马里帝国的黄金时代，他因麦加朝圣时散发大量黄金而闻名。', countryId: 'mali-empire', continentId: 'africa', categoryId: 'dynasty', dynastyId: 'ml_mansa_musa' },
  { id: 'ml_3', year: 1324, yearEnd: 1325, summary: '曼萨·穆萨麦加朝圣', detail: '曼萨·穆萨携带大量黄金赴麦加朝圣，沿途施舍之慷慨导致沿途金价暴跌多年。', countryId: 'mali-empire', continentId: 'africa', categoryId: 'religion', dynastyId: 'ml_mansa_musa' },
  { id: 'ml_4', year: 1337, yearEnd: 1468, summary: '帝国衰落与桑海崛起', detail: '曼萨·穆萨死后马里帝国迅速衰落，图雷格人和桑海人趁机崛起取代其地位。', countryId: 'mali-empire', continentId: 'africa', categoryId: 'war', dynastyId: 'ml_decline' },

  // 桑海帝国
  { id: 'sg_1', year: 1010, yearEnd: 1468, summary: '桑海崛起', detail: '桑海人在加奥建立王国，逐步扩张成为西非重要力量。', countryId: 'songhai-empire', continentId: 'africa', categoryId: 'dynasty', dynastyId: 'sg_gao' },
  { id: 'sg_2', year: 1468, yearEnd: 1492, summary: '索尼·阿里征服扩张', detail: '索尼·阿里大帝通过一系列军事征服使桑海成为西非最大的帝国。', countryId: 'songhai-empire', continentId: 'africa', categoryId: 'war', dynastyId: 'sg_songhai' },
  { id: 'sg_3', year: 1493, yearEnd: 1528, summary: 'Askia Muhammad 改革时代', detail: 'Askia Muhammad 推动伊斯兰化改革，廷巴克图成为伊斯兰学术中心。', countryId: 'songhai-empire', continentId: 'africa', categoryId: 'culture', dynastyId: 'sg_songhai' },
  { id: 'sg_4', year: 1591, summary: '摩洛哥入侵，桑海帝国灭亡', detail: '摩洛哥苏丹使用火器击败桑海帝国，廷巴克图被劫掠，桑海帝国终结。', countryId: 'songhai-empire', continentId: 'africa', categoryId: 'war', dynastyId: 'sg_songhai' },

  // 摩洛哥
  { id: 'mo_1', year: 788, summary: '伊德里斯王朝建立', detail: '伊德里斯·伊本·阿卜杜拉在摩洛哥北部建立伊德里斯王朝，是摩洛哥第一个穆斯林王朝。', countryId: 'morocco', continentId: 'africa', categoryId: 'dynasty', dynastyId: 'mo_idrisid' },
  { id: 'mo_2', year: 1062, yearEnd: 1147, summary: '穆拉比特王朝（阿尔摩拉维德）', detail: '柏柏尔人穆拉比特王朝统一摩洛哥和西非部分地区，控制撒哈拉商路。', countryId: 'morocco', continentId: 'africa', categoryId: 'dynasty', dynastyId: 'mo_almoravid' },
  { id: 'mo_3', year: 1160, yearEnd: 1269, summary: '穆瓦希德王朝统一马格里布', detail: '伊本·图迈尔特建立的穆瓦希德王朝统一了从西班牙到利比亚的广阔地区。', countryId: 'morocco', continentId: 'africa', categoryId: 'dynasty', dynastyId: 'mo_marinid' },
  { id: 'mo_4', year: 1578, summary: '阿尔塞尔战役（三个国王之战）', detail: '葡萄牙国王塞巴斯蒂昂入侵摩洛哥，在阿尔塞尔战败被俘并死亡，三位国王同日阵亡。', countryId: 'morocco', continentId: 'africa', categoryId: 'war', dynastyId: 'mo_saadi' },
  { id: 'mo_5', year: 1666, yearEnd: 2020, summary: '阿拉维王朝至今', detail: '拉希德·伊本·谢里夫建立阿拉维王朝，至今仍在统治摩洛哥，是世界上最古老的现存皇室之一。', countryId: 'morocco', continentId: 'africa', categoryId: 'dynasty', dynastyId: 'mo_alaouite' },
  { id: 'mo_6', year: 1912, yearEnd: 1956, summary: '法国和西班牙保护国', detail: '摩洛哥沦为法国和西班牙的保护国，直至1956年获得独立。', countryId: 'morocco', continentId: 'africa', categoryId: 'independence', dynastyId: 'mo_alaouite' },

  // 迦太基
  { id: 'ct_1', year: -814, summary: '推罗公主艾莉莎建立迦太基', detail: '根据传说，腓尼基推罗公主狄多（艾莉莎）逃离其兄弟的追杀，在北非建立迦太基城。', countryId: 'carthage', continentId: 'africa', categoryId: 'dynasty', dynastyId: 'ct_phoenician' },
  { id: 'ct_2', year: -550, yearEnd: -500, summary: '迦太基成为西地中海霸主', detail: '迦太基控制西地中海沿岸广大地区和撒哈拉贸易路线，与新兴的罗马共和国产生利益冲突。', countryId: 'carthage', continentId: 'africa', categoryId: 'dynasty', dynastyId: 'ct_empire' },
  { id: 'ct_3', year: -264, yearEnd: -241, summary: '第一次布匿战争', detail: '罗马与迦太基争夺西西里控制权，历时二十三年，以迦太基撤出西西里告终。', countryId: 'carthage', continentId: 'africa', categoryId: 'war', dynastyId: 'ct_destruction' },
  { id: 'ct_4', year: -218, yearEnd: -201, summary: '第二次布匿战争（汉尼拔战争）', detail: '汉尼拔·巴尔卡率军翻越阿尔卑斯山入侵意大利，虽屡次获胜但最终在扎马被击败。', countryId: 'carthage', continentId: 'africa', categoryId: 'war', dynastyId: 'ct_destruction' },
  { id: 'ct_5', year: -149, yearEnd: -146, summary: '第三次布匿战争与迦太基毁灭', detail: '小西庇阿率军围攻迦太基城，经三年苦战攻陷后彻底摧毁城市，幸存的五万居民全部被卖为奴。', countryId: 'carthage', continentId: 'africa', categoryId: 'war', dynastyId: 'ct_destruction' },

  // 古埃及补充事件
  { id: 'ae_1', year: -3100, yearEnd: -2686, summary: '早王朝时期统一上下埃及', detail: '纳尔美尔石板描绘了他统一上下埃及的场景，第一王朝建立。', countryId: 'ancient-egypt', continentId: 'africa', categoryId: 'dynasty', dynastyId: 'ae_early_dynastic' },
  { id: 'ae_2', year: -2686, yearEnd: -2181, summary: '古王国时期——金字塔时代', detail: '左塞尔建造阶梯金字塔，胡夫建造大金字塔，吉萨三大金字塔矗立在吉萨高原。', countryId: 'ancient-egypt', continentId: 'africa', categoryId: 'culture', dynastyId: 'ae_old_kingdom' },
  { id: 'ae_3', year: -2055, yearEnd: -1650, summary: '中王国复兴', detail: '第十一、十二王朝时期，埃及文学和艺术迎来复兴，埃及向南扩张至努比亚。', countryId: 'ancient-egypt', continentId: 'africa', categoryId: 'dynasty', dynastyId: 'ae_middle_kingdom' },
  { id: 'ae_4', year: -1550, yearEnd: -1077, summary: '新王国时期帝国扩张', detail: '图特摩斯三世建立横跨努比亚到叙利亚的庞大帝国；阿蒙霍特普三世和拉美西斯二世是著名的伟大法老。', countryId: 'ancient-egypt', continentId: 'africa', categoryId: 'dynasty', dynastyId: 'ae_new_kingdom' },
  { id: 'ae_5', year: -1336, yearEnd: -1327, summary: '阿肯那顿宗教改革', detail: '阿蒙霍特普四世改名阿肯那顿，推行崇拜太阳神阿吞的一神教改革，可能影响了后来的犹太一神教。', countryId: 'ancient-egypt', continentId: 'africa', categoryId: 'religion', dynastyId: 'ae_new_kingdom' },
  { id: 'ae_6', year: -332, yearEnd: -30, summary: '托勒密王朝', detail: '亚历山大大将托勒密在亚历山大城建立托勒密王朝，统治埃及近三百年，克利奥帕特拉七世是其末代女王。', countryId: 'ancient-egypt', continentId: 'africa', categoryId: 'dynasty', dynastyId: 'ae_ptolemaic' },

  // ===== 东南亚事件 =====
  // 泰国
  { id: 'th_1', year: 1238, summary: '素可泰王国建立', detail: '泰国人摆脱高棉人统治，建立素可泰王国，兰甘亨大帝创造了泰国文字。', countryId: 'thailand', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'th_sukhothai' },
  { id: 'th_2', year: 1283, yearEnd: 1292, summary: '兰甘亨大帝创制泰文', detail: '素可泰国王兰甘亨大帝创制泰国文字（素可泰文），是现代泰文的前身。', countryId: 'thailand', continentId: 'asia', categoryId: 'culture', dynastyId: 'th_sukhothai' },
  { id: 'th_3', year: 1350, summary: '阿瑜陀耶王国建立', detail: '乌通王（拉玛铁菩提一世）在阿瑜陀耶（大城府）建立新的泰国王国，后成为东南亚强国。', countryId: 'thailand', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'th_ayutthaya' },
  { id: 'th_4', year: 1569, summary: '缅甸攻陷阿瑜陀耶', detail: '缅甸东吁王朝的莽应龙攻陷阿瑜陀耶，暹罗暂时臣属于缅甸。', countryId: 'thailand', continentId: 'asia', categoryId: 'war', dynastyId: 'th_ayutthaya' },
  { id: 'th_5', year: 1767, summary: '阿瑜陀耶被缅甸彻底摧毁', detail: '缅甸贡榜王朝辛标信率军彻底摧毁阿瑜陀耶，城市化为废墟，大量人口被掳走。', countryId: 'thailand', continentId: 'asia', categoryId: 'war', dynastyId: 'th_ayutthaya' },
  { id: 'th_6', year: 1767, yearEnd: 1782, summary: '郑信（达信）光复暹罗', detail: '华裔将军郑信（达信）驱逐缅军，统一暹罗，建立吞武里王朝，但后被其女婿却克里杀害。', countryId: 'thailand', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'th_ayutthaya' },
  { id: 'th_7', year: 1782, summary: '却克里建立曼谷王朝', detail: '却克里（拉玛一世）建立却克里王朝（曼谷王朝/拉达纳哥欣王朝），定都曼谷至今。', countryId: 'thailand', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'th_bangkok' },
  { id: 'th_8', year: 1855, summary: '《鲍林条约》', detail: '英国强迫暹罗签订不平等条约（鲍林条约），开放通商口岸并给予领事裁判权。', countryId: 'thailand', continentId: 'asia', categoryId: 'economy', dynastyId: 'th_bangkok' },
  { id: 'th_9', year: 1932, yearEnd: 1939, summary: '立宪革命', detail: "一批军官和学生发动不流血政变，推翻绝对君主制，建立君主立宪制；1939年改国名为泰国。", countryId: 'thailand', continentId: 'asia', categoryId: 'independence', dynastyId: 'th_bangkok' },
  { id: 'th_10', year: 1941, yearEnd: 1945, summary: '二战中的泰国', detail: '銮披汶·颂堪政府与日本结盟并向英法宣战，战后虽未被列为战败国但付出了领土代价。', countryId: 'thailand', continentId: 'asia', categoryId: 'war', dynastyId: 'th_bangkok' },

  // 越南
  { id: 'vn_1', year: -111, summary: '汉朝征服南越国', detail: '汉武帝灭南越国，越南北部（交趾、九真、日南）并入中国版图，开始了千年北属时期。', countryId: 'vietnam', continentId: 'asia', categoryId: 'war', dynastyId: 'vn_hongbang' },
  { id: 'vn_2', year: 39, yearEnd: 43, summary: '二征夫人起义', detail: '征侧和征贰姐妹领导越南人民反抗东汉统治的起义，虽最终失败但在越南历史上影响深远。', countryId: 'vietnam', continentId: 'asia', categoryId: 'rebellion', dynastyId: 'vn_hongbang' },
  { id: 'vn_3', year: 938, yearEnd: 967, summary: '吴权击败南汉，越南独立', detail: '吴权在白藤江击败南汉军队，建立吴朝，越南开始脱离中国独立。', countryId: 'vietnam', continentId: 'asia', categoryId: 'independence', dynastyId: 'vn_hongbang' },
  { id: 'vn_4', year: 1010, summary: '李朝建立', detail: '李公蕴建立李朝，定都升龙（今河内），李朝统治越南二百一十六年。', countryId: 'vietnam', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'vn_ly' },
  { id: 'vn_5', year: 1070, yearEnd: 1076, summary: '宋越熙宁战争', detail: '宋神宗派郭逵率军征讨越南，李朝在如月江战役中击败宋军。', countryId: 'vietnam', continentId: 'asia', categoryId: 'war', dynastyId: 'vn_ly' },
  { id: 'vn_6', year: 1225, yearEnd: 1400, summary: '陈朝与蒙古入侵', detail: '陈朝三次击退蒙古（元朝）入侵（1258年、1285年、1287-1288年），是东南亚少数成功抵御蒙古的国家。', countryId: 'vietnam', continentId: 'asia', categoryId: 'war', dynastyId: 'vn_ly' },
  { id: 'vn_7', year: 1407, yearEnd: 1428, summary: '明成祖征服越南（属明二十年）', detail: '明朝征服陈朝末期的越南，设立交趾承宣布政使司直接统治二十年。', countryId: 'vietnam', continentId: 'asia', categoryId: 'war' },
  { id: 'vn_8', year: 1428, summary: '黎利建立后黎朝', detail: '蓝山起义领袖黎利击败明军，建立后黎朝，恢复越南独立。', countryId: 'vietnam', continentId: 'asia', categoryId: 'independence', dynastyId: 'vn_le' },
  { id: 'vn_9', year: 1771, yearEnd: 1802, summary: '西山起义', detail: '阮文惠（阮文岳之三弟）领导西山起义推翻旧政权，统一全国，后被阮福映借助法国援助击败。', countryId: 'vietnam', continentId: 'asia', categoryId: 'rebellion', dynastyId: 'vn_le' },
  { id: 'vn_10', year: 1802, summary: '阮朝建立', detail: '阮福映（嘉隆帝）建立阮朝，定都顺化，请求清朝赐号"南越"，嘉隆帝取"南"字之"越"字定国号为"越南"。', countryId: 'vietnam', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'vn_nguyen' },
  { id: 'vn_11', year: 1884, yearEnd: 1885, summary: '《顺化条约》（沦为法国保护国）', detail: '法国迫使阮朝签订《顺化条约》，越南成为法国保护国，实际上丧失主权。', countryId: 'vietnam', continentId: 'asia', categoryId: 'war', dynastyId: 'vn_nguyen' },
  { id: 'vn_12', year: 1930, yearEnd: 1931, summary: '义安苏维埃运动', detail: '胡志明等在义安省领导反法起义，虽被镇压但播下了革命的种子。', countryId: 'vietnam', continentId: 'asia', categoryId: 'rebellion', dynastyId: 'vn_nguyen' },
  { id: 'vn_13', year: 1945, yearEnd: 1976, summary: '八月革命与越战', detail: '1945年胡志明宣布越南民主共和国成立；此后经历了抗法和抗美两场战争，1976年统一为越南社会主义共和国。', countryId: 'vietnam', continentId: 'asia', categoryId: 'independence', dynastyId: 'vn_modern' },

  // 印度尼西亚
  { id: 'id_1', year: 650, yearEnd: 1293, summary: '室利佛逝帝国', detail: '室利佛逝是一个强大的海洋贸易帝国，以苏门答腊为中心，控制马六甲海峡，佛教文化发达。', countryId: 'indonesia', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'id_srivijaya' },
  { id: 'id_2', year: 750, summary: '婆罗浮屠开始建造', detail: '夏连特拉王朝开始建造婆罗浮屠佛塔，是世界上最大的佛教寺庙群。', countryId: 'indonesia', continentId: 'asia', categoryId: 'culture', dynastyId: 'id_srivijaya' },
  { id: 'id_3', year: 1293, yearEnd: 1527, summary: '满者伯夷帝国', detail: '满者伯夷帝国以爪哇岛为中心，控制马来群岛大部，是东南亚历史上最强大的陆地帝国之一。', countryId: 'indonesia', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'id_majapahit' },
  { id: 'id_4', year: 1478, summary: '普兰巴南寺庙群建成', detail: '普兰巴南寺庙群是印度教湿婆派的宏伟建筑群，与婆罗浮屠同为印尼文化遗产瑰宝。', countryId: 'indonesia', continentId: 'asia', categoryId: 'culture', dynastyId: 'id_majapahit' },
  { id: 'id_5', year: 1596, summary: '荷兰人首次抵达爪哇', detail: '荷兰商人霍特曼率领首批船队抵达爪哇万丹，开启了荷兰在印尼三百多年的殖民统治。', countryId: 'indonesia', continentId: 'asia', categoryId: 'exploration', dynastyId: 'id_dutch_ei' },
  { id: 'id_6', year: 1602, summary: '荷兰东印度公司(VOC)进驻', detail: '荷兰东印度公司获得在印尼的贸易垄断权，开始在巴维亚建立据点。', countryId: 'indonesia', continentId: 'asia', categoryId: 'economy', dynastyId: 'id_dutch_ei' },
  { id: 'id_7', year: 1825, yearEnd: 1830, summary: '蒂博尼哥罗战争', detail: '日惹王子蒂博尼哥罗领导大规模反荷起义，虽最终失败但对印尼民族意识影响深远。', countryId: 'indonesia', continentId: 'asia', categoryId: 'rebellion', dynastyId: 'id_dutch_ei' },
  { id: 'id_8', year: 1928, summary: '《青年誓言》', detail: '印尼青年学生发表《青年誓言》，主张一个祖国、一个民族、一种语言——印尼语，成为独立运动的基石。', countryId: 'indonesia', continentId: 'asia', categoryId: 'independence', dynastyId: 'id_dutch_ei' },
  { id: 'id_9', year: 1942, yearEnd: 1945, summary: '日军占领印尼', detail: '日本占领印尼，削弱了荷兰殖民统治，但也带来了苦难和剥削。', countryId: 'indonesia', continentId: 'asia', categoryId: 'war', dynastyId: 'id_dutch_ei' },
  { id: 'id_10', year: 1945, yearEnd: 1949, summary: '印尼独立宣言与独立战争', detail: '苏加诺和哈达发表独立宣言；经过四年独立战争，荷兰最终承认印尼独立（1949年《海牙圆桌协议》）。', countryId: 'indonesia', continentId: 'asia', categoryId: 'independence', dynastyId: 'id_modern' },

  // 菲律宾
  { id: 'ph_1', year: 900, yearEnd: 1565, summary: '前殖民时期的拉贾国与苏丹国', detail: '菲律宾群岛上存在众多拉贾国（宿务、马尼拉等）和苏丹国（苏禄、马京达瑙等），与中国和东南亚有贸易往来。', countryId: 'philippines', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'ph_precolonial' },
  { id: 'ph_2', year: 1521, summary: '麦哲伦到达菲律宾并被杀', detail: '麦哲伦环球航行抵达菲律宾宿务岛，介入当地部落冲突后在马克坦岛被拉普拉普杀死。', countryId: 'philippines', continentId: 'asia', categoryId: 'exploration', dynastyId: 'ph_precolonial' },
  { id: 'ph_3', year: 1565, yearEnd: 1572, summary: '黎牙实比征服菲律宾', detail: '米格尔·洛佩斯·德·黎牙实比代表西班牙征服菲律宾群岛，建立马尼拉殖民政府。', countryId: 'philippines', continentId: 'asia', categoryId: 'war', dynastyId: 'ph_spanish' },
  { id: 'ph_4', year: 1571, summary: '马尼拉城建立', detail: '西班牙人在马尼拉建立城堡式殖民城市，马尼拉逐渐成为西班牙东亚殖民的中心。', countryId: 'philippines', continentId: 'asia', categoryId: 'economy', dynastyId: 'ph_spanish' },
  { id: 'ph_5', year: 1872, summary: '1872年起义', detail: '菲律宾民族主义者的起义（戈梅斯-布尔戈斯、萨莫拉、雷佐尔三人被处决），激发了后来的独立运动。', countryId: 'philippines', continentId: 'asia', categoryId: 'rebellion', dynastyId: 'ph_spanish' },
  { id: 'ph_6', year: 1896, yearEnd: 1898, summary: '菲律宾革命', detail: '安德烈·波尼斯奥和艾米利奥·阿奎纳多领导菲律宾革命，反抗西班牙殖民统治。', countryId: 'philippines', continentId: 'asia', categoryId: 'independence', dynastyId: 'ph_spanish' },
  { id: 'ph_7', year: 1898, yearEnd: 1901, summary: '美菲战争', detail: '美西战争后美国接管菲律宾，菲律宾人为争取真正独立进行了艰苦的美菲战争。', countryId: 'philippines', continentId: 'asia', categoryId: 'war', dynastyId: 'ph_american' },
  { id: 'ph_8', year: 1935, yearEnd: 1946, summary: '自治 Commonwealth 与二战', detail: '1935年菲律宾自治邦成立；1941-1945年日军占领菲律宾；1946年菲律宾最终独立。', countryId: 'philippines', continentId: 'asia', categoryId: 'independence', dynastyId: 'ph_modern' },

  // ===== 以色列事件 =====
  { id: 'is_1', year: -1040, yearEnd: -970, summary: '大卫王统治', detail: '大卫王从非利士人手中夺取耶路撒冷，统一以色列十二支派，建立强大王国。', countryId: 'israel', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'is_israelite' },
  { id: 'is_2', year: -957, yearEnd: -930, summary: '所罗门圣殿建造', detail: '所罗门王在耶路撒冷的摩利亚山上建造第一圣殿（所罗门圣殿），成为犹太教的圣地。', countryId: 'israel', continentId: 'asia', categoryId: 'religion', dynastyId: 'is_israelite' },
  { id: 'is_3', year: -586, yearEnd: -587, summary: '第一圣殿被毁', detail: '巴比伦王尼布甲尼撒二世攻陷耶路撒冷，摧毁第一圣殿，将犹太精英流放到巴比伦（"巴比伦之囚"）。', countryId: 'israel', continentId: 'asia', categoryId: 'war', dynastyId: 'is_israelite' },
  { id: 'is_4', year: -164, summary: '哈斯蒙尼王朝（马加比起义）', detail: '犹大·马加比领导犹太人起义，从塞琉古帝国手中赢得独立，净化第二圣殿（光明节由来）。', countryId: 'israel', continentId: 'asia', categoryId: 'independence', dynastyId: 'is_hasmonian' },
  { id: 'is_5', year: 66, yearEnd: 73, summary: '第一次犹太-罗马战争', detail: '犹太人大规模反抗罗马统治，耶路撒冷和第二圣殿被提图斯摧毁，犹太人被逐出家园（大离散开始）。', countryId: 'israel', continentId: 'asia', categoryId: 'war', dynastyId: 'is_hasmonian' },
  { id: 'is_6', year: 132, yearEnd: 136, summary: '巴尔·科赫巴起义', detail: '西门·巴尔·科赫巴领导最后一次大规模犹太起义，被罗马皇帝哈德良残酷镇压，犹太人被禁止进入耶路撒冷。', countryId: 'israel', continentId: 'asia', categoryId: 'rebellion', dynastyId: 'is_hasmonian' },
  { id: 'is_7', year: 1897, summary: '第一届世界犹太复国主义代表大会', detail: '西奥多·赫尔茨尔在瑞士巴塞尔召开第一届世界犹太复国主义代表大会，推动犹太人在巴勒斯坦重建家园。', countryId: 'israel', continentId: 'europe', categoryId: 'politics', dynastyId: 'is_hasmonian' },
  { id: 'is_8', year: 1917, summary: '《贝尔福宣言》', detail: '英国外交大臣贝尔福发表宣言，支持在巴勒斯坦建立一个"犹太民族之家"。', countryId: 'israel', continentId: 'asia', categoryId: 'politics' },
  { id: 'is_9', year: 1947, summary: '联合国分治方案', detail: '联合国大会通过第181(II)号决议，建议在巴勒斯坦分别建立犹太国家和阿拉伯国家。', countryId: 'israel', continentId: 'asia', categoryId: 'politics', dynastyId: 'is_modern' },
  { id: 'is_10', year: 1948, summary: '以色列宣布独立', detail: '戴维·本-古里安在特拉维夫宣布以色列独立建国，次日周边阿拉伯国家联合进攻，第一次中东战争爆发。', countryId: 'israel', continentId: 'asia', categoryId: 'independence', dynastyId: 'is_modern' },
  { id: 'is_11', year: 1967, yearEnd: 1967, summary: '六日战争', detail: '以色列在六天内击败埃及、约旦和叙利亚联军，占领加沙地带、西岸、东耶路撒冷、戈兰高地和西奈半岛。', countryId: 'israel', continentId: 'asia', categoryId: 'war', dynastyId: 'is_modern' },

  // ===== 巴基斯坦事件 =====
  { id: 'pk_1', year: -2500, yearEnd: -1900, summary: '印度河文明鼎盛', detail: '印度河文明（哈拉帕文明）在巴基斯坦境内发展出发达的城市文明，摩亨佐·达罗是其代表遗址。', countryId: 'pakistan', continentId: 'asia', categoryId: 'culture', dynastyId: 'pk_indus_valley' },
  { id: 'pk_2', year: -500, yearEnd: 300, summary: '犍陀罗文明兴起', detail: '犍陀罗文明融合了印度和希腊元素，产生了独特的犍陀罗艺术风格，佛教从这里传入中国。', countryId: 'pakistan', continentId: 'asia', categoryId: 'culture', dynastyId: 'pk_gandhara' },
  { id: 'pk_3', year: 711, summary: '穆罕默德·伊本·卡西姆征服信德', detail: '伍麦叶王朝将领卡西姆率军征服信德地区，伊斯兰教传入南亚次大陆。', countryId: 'pakistan', continentId: 'asia', categoryId: 'war', dynastyId: 'pk_gandhara' },
  { id: 'pk_4', year: 1526, yearEnd: 1757, summary: '莫卧儿时期的拉合尔', detail: '拉合尔作为莫卧儿帝国的重要城市，阿克巴大帝和贾汗吉尔曾在此居住。', countryId: 'pakistan', continentId: 'asia', categoryId: 'culture', dynastyId: 'pk_mughal_punjab' },
  { id: 'pk_5', year: 1747, yearEnd: 1818, summary: '锡克帝国控制巴基斯坦西部', detail: '锡克帝国的兰季德·辛格和 Maharaja Ranjit Singh 先后控制拉合尔和白沙瓦地区。', countryId: 'pakistan', continentId: 'asia', categoryId: 'war', dynastyId: 'pk_mughal_punjab' },
  { id: 'pk_6', year: 1857, yearEnd: 1858, summary: '印度民族大起义中的巴基斯坦', detail: '1857年印度民族大起义中，巴基斯坦地区的士兵也参与了反英起义。', countryId: 'pakistan', continentId: 'asia', categoryId: 'rebellion', dynastyId: 'pk_mughal_punjab' },
  { id: 'pk_7', year: 1940, summary: '《拉合尔决议》', detail: '全印穆斯林联盟通过《拉合尔决议》，要求在印度西北部和东部建立单独的穆斯林国家。', countryId: 'pakistan', continentId: 'asia', categoryId: 'politics', dynastyId: 'pk_modern' },
  { id: 'pk_8', year: 1947, summary: '巴基斯坦独立建国', detail: '英国《印度独立法案》生效，巴基斯坦（含东西两部分）独立，真纳出任首任总督。', countryId: 'pakistan', continentId: 'asia', categoryId: 'independence', dynastyId: 'pk_modern' },
  { id: 'pk_9', year: 1965, yearEnd: 1966, summary: '第二次印巴战争', detail: '印巴围绕克什米尔问题爆发战争，联合国调停停火。', countryId: 'pakistan', continentId: 'asia', categoryId: 'war', dynastyId: 'pk_modern' },
  { id: 'pk_10', year: 1971, summary: '第三次印巴战争与孟加拉独立', detail: '东巴基斯坦（今孟加拉国）独立战争，印度介入支持孟加拉独立，巴基斯坦战败。', countryId: 'pakistan', continentId: 'asia', categoryId: 'war', dynastyId: 'pk_modern' },

  // ===== 阿富汗事件 =====
  { id: 'af_1', year: -500, yearEnd: 300, summary: '大夏-巴克特里亚王国', detail: '希腊-巴克特里亚王国（大夏）在中亚阿富汗一带建立，是希腊文化与东方文化交融的重要枢纽。', countryId: 'afghanistan', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'af_bactria' },
  { id: 'af_2', year: 652, yearEnd: 700, summary: '伊斯兰教传入阿富汗', detail: '阿拉伯穆斯林征服锡斯坦和呼罗珊地区，伊斯兰教开始传入阿富汗。', countryId: 'afghanistan', continentId: 'asia', categoryId: 'religion', dynastyId: 'af_bactria' },
  { id: 'af_3', year: 962, yearEnd: 1186, summary: '加兹尼王朝', detail: '加兹尼王朝的马哈茂德多次入侵印度北部，掠夺大量财富，加兹尼成为繁华的都城。', countryId: 'afghanistan', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'af_ghaznavid' },
  { id: 'af_4', year: 1219, yearEnd: 1221, summary: '蒙古入侵阿富汗', detail: '成吉思汗及其子孙先后入侵并摧毁了花剌子模、赫拉特等重要城市。', countryId: 'afghanistan', continentId: 'asia', categoryId: 'war', dynastyId: 'af_bactria' },
  { id: 'af_5', year: 1747, summary: '艾哈迈德·沙·杜拉尼建立杜兰尼帝国', detail: '普什图族酋长杜拉尼统一阿富汗各部落，建立近代阿富汗国家的雏形，被视为"阿富汗国父"。', countryId: 'afghanistan', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'af_durran' },
  { id: 'af_6', year: 1839, yearEnd: 1842, summary: '第一次英阿战争', detail: '英国入侵阿富汗，虽然一度占领喀布尔但最终被迫撤退。', countryId: 'afghanistan', continentId: 'asia', categoryId: 'war', dynastyId: 'af_durran' },
  { id: 'af_7', year: 1878, yearEnd: 1880, summary: '第二次英阿战争', detail: '英国再次入侵阿富汗，迫使阿富汗接受部分外交控制权。', countryId: 'afghanistan', continentId: 'asia', categoryId: 'war', dynastyId: 'af_durran' },
  { id: 'af_8', year: 1919, yearEnd: 1921, summary: '第三次英阿战争与完全独立', detail: '阿马努拉汗在英国撤军后的权力真空中掌权，通过第三次英阿战争赢得阿富汗的完全外交独立。', countryId: 'afghanistan', continentId: 'asia', categoryId: 'independence', dynastyId: 'af_modern' },
  { id: 'af_9', year: 1979, yearEnd: 1989, summary: '苏联入侵阿富汗', detail: '苏联入侵阿富汗以支持亲苏政权，阿富汗各派抵抗组织（ Mujahideen ）展开游击战争。', countryId: 'afghanistan', continentId: 'asia', categoryId: 'war', dynastyId: 'af_modern' },
  { id: 'af_10', year: 1996, yearEnd: 2001, summary: '塔利班统治时期', detail: '塔利班占领喀布尔，建立伊斯兰酋长国，实行极端的原教旨主义统治。', countryId: 'afghanistan', continentId: 'asia', categoryId: 'politics', dynastyId: 'af_modern' },
  { id: 'af_11', year: 2001, yearEnd: 2021, summary: '反恐战争与塔利班重新掌权', detail: '9·11后美国推翻塔利班政权；2021年美军撤离后塔利班重新控制阿富汗。', countryId: 'afghanistan', continentId: 'asia', categoryId: 'war', dynastyId: 'af_modern' },

  // ===== 缅甸事件 =====
  { id: 'mm_1', year: 849, yearEnd: 1297, summary: '蒲甘王朝', detail: '阿奴律陀建立蒲甘王朝，统一缅甸，建造数千座佛塔，蒲甘成为佛教艺术的宝库。', countryId: 'myanmar', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'mm_pagan' },
  { id: 'mm_2', year: 1287, summary: '蒙古攻陷蒲甘', detail: '蒙古大军攻陷蒲甘，蒲甘王朝名存实亡，缅甸进入分裂时期。', countryId: 'myanmar', continentId: 'asia', categoryId: 'war', dynastyId: 'mm_pagan' },
  { id: 'mm_3', year: 1510, yearEnd: 1752, summary: '东吁王朝统一缅甸', detail: '东吁王朝的莽瑞体和莽应龙父子逐步统一缅甸，击败暹罗（阿瑜陀耶），建立缅甸第二大统一王朝。', countryId: 'myanmar', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'mm_taungoo' },
  { id: 'mm_4', year: 1752, yearEnd: 1885, summary: '贡榜王朝', detail: '雍籍牙建立贡榜王朝，是缅甸最后一个本土王朝；1885年被英国吞并，第三次英缅战争后缅甸完全沦为英国殖民地。', countryId: 'myanmar', continentId: 'asia', categoryId: 'dynasty', dynastyId: 'mm_konbaung' },
  { id: 'mm_5', year: 1942, yearEnd: 1945, summary: '日军占领缅甸', detail: '二战中日军占领缅甸，中国远征军入缅作战配合英军。', countryId: 'myanmar', continentId: 'asia', categoryId: 'war', dynastyId: 'mm_konbaung' },
  { id: 'mm_6', year: 1948, summary: '缅甸独立', detail: '缅甸从英国独立，最初为英联邦成员，后退出。', countryId: 'myanmar', continentId: 'asia', categoryId: 'independence', dynastyId: 'mm_modern' },

  // ===== 大洋洲事件 =====
  { id: 'au_1', year: -65000, yearEnd: -40000, summary: '澳大利亚原住民抵达', detail: '澳大利亚原住民的祖先大约在六万五千年至四万年前从东南亚通过陆桥抵达澳大利亚大陆。', countryId: 'australia', continentId: 'oceania', categoryId: 'culture', dynastyId: 'au_indigenous' },
  { id: 'au_2', year: 1606, summary: '欧洲人首次发现澳大利亚', detail: '荷兰人威廉·扬茨发现澳大利亚北海岸，称之为"新荷兰"。', countryId: 'australia', continentId: 'oceania', categoryId: 'exploration', dynastyId: 'au_indigenous' },
  { id: 'au_3', year: 1770, summary: '库克船长发现澳大利亚东海岸', detail: '詹姆斯·库克船长乘坐奋进号发现澳大利亚东海岸并宣布为英国领土。', countryId: 'australia', continentId: 'oceania', categoryId: 'exploration', dynastyId: 'au_indigenous' },
  { id: 'au_4', year: 1788, yearEnd: 1868, summary: '罪犯流放与开发', detail: '1788年第一批英国囚犯抵达悉尼港；此后八万多囚犯被流放到澳大利亚各地。', countryId: 'australia', continentId: 'oceania', categoryId: 'economy', dynastyId: 'au_colonial' },
  { id: 'au_5', year: 1851, summary: '澳大利亚淘金热', detail: '在新南威尔士州和维多利亚州发现金矿，引发大规模移民潮，人口激增。', countryId: 'australia', continentId: 'oceania', categoryId: 'economy', dynastyId: 'au_colonial' },
  { id: 'au_6', year: 1901, summary: '澳大利亚联邦成立', detail: '六个英国殖民地合并为澳大利亚联邦，成为英帝国的自治领。', countryId: 'australia', continentId: 'oceania', categoryId: 'independence', dynastyId: 'au_commonwealth' },
  { id: 'au_7', year: 1915, yearEnd: 1918, summary: '加利波利战役', detail: '澳大利亚和新西兰军团（ANZAC）参加第一次世界大战中的加利波利战役，伤亡惨重，成为澳新军团日（ANZAC Day）的来源。', countryId: 'australia', continentId: 'oceania', categoryId: 'war', dynastyId: 'au_commonwealth' },
  { id: 'au_8', year: 1967, yearEnd: 1975, summary: '原住民权利运动', detail: '1967年公投赋予原住民公民权；1975年废除"白澳政策"；1992年Mabo案确认原住民土地权。', countryId: 'australia', continentId: 'oceania', categoryId: 'politics', dynastyId: 'au_commonwealth' },

  // 新西兰
  { id: 'nz_1', year: 1280, yearEnd: 1450, summary: '毛利人大规模定居新西兰', detail: '毛利人大约在十三至十四世纪从东波利尼西亚乘独木舟抵达新西兰，分为不同部落。', countryId: 'new-zealand', continentId: 'oceania', categoryId: 'exploration', dynastyId: 'nz_maori' },
  { id: 'nz_2', year: 1642, summary: '阿贝尔·塔斯曼发现新西兰', detail: '荷兰探险家阿贝尔·塔斯曼成为第一个发现新西兰的欧洲人。', countryId: 'new-zealand', continentId: 'oceania', categoryId: 'exploration', dynastyId: 'nz_maori' },
  { id: 'nz_3', year: 1769, summary: '库克船长测绘新西兰', detail: '詹姆斯·库克船长环绕航行测绘了新西兰全境。', countryId: 'new-zealand', continentId: 'oceania', categoryId: 'exploration', dynastyId: 'nz_maori' },
  { id: 'nz_4', year: 1840, yearEnd: 1841, summary: '《怀唐伊条约》签订', detail: '英国王室与毛利族酋长签订《怀唐伊条约》，是新西兰的建国文件。', countryId: 'new-zealand', continentId: 'oceania', categoryId: 'politics', dynastyId: 'nz_colonial' },
  { id: 'nz_5', year: 1893, summary: '新西兰女性率先获得投票权', detail: '新西兰成为世界上第一个允许所有成年女性投票的国家。', countryId: 'new-zealand', continentId: 'oceania', categoryId: 'politics', dynastyId: 'nz_domination' },
  { id: 'nz_6', year: 1947, yearEnd: 1987, summary: '完全独立与无核政策', detail: '1947年新西兰采纳《威斯敏斯特法案》完全独立；1987年立法确立无核政策。', countryId: 'new-zealand', continentId: 'oceania', categoryId: 'independence', dynastyId: 'nz_domination' },

  // ===== 21世纪全球重大事件（2000-2026） =====

  // 中国
  { id: 'cn_m1', year: 2001, summary: '中国加入WTO', detail: '中国正式加入世界贸易组织，标志着全面融入全球经济体系。', countryId: 'china', continentId: 'asia', categoryId: 'economy' },
  { id: 'cn_m2', year: 2003, yearEnd: 2004, summary: '非典疫情', detail: '严重急性呼吸综合征（SARS）在中国爆发并蔓延全球，造成近800人死亡，推动公共卫生体系改革。', countryId: 'china', continentId: 'asia', categoryId: 'disaster' },
  { id: 'cn_m3', year: 2008, summary: '北京奥运会', detail: '第29届夏季奥林匹克运动会在北京举行，是中国首次举办奥运会，开幕式震撼世界。', countryId: 'china', continentId: 'asia', categoryId: 'culture' },
  { id: 'cn_m4', year: 2008, summary: '汶川大地震', detail: '5月12日四川汶川发生8.0级特大地震，造成近7万人遇难、1.8万人失踪。', countryId: 'china', continentId: 'asia', categoryId: 'disaster' },
  { id: 'cn_m5', year: 2010, summary: '上海世博会', detail: '第41届世界博览会在上海举办，主题"城市，让生活更美好"，参观人数超7300万创纪录。', countryId: 'china', continentId: 'asia', categoryId: 'culture' },
  { id: 'cn_m6', year: 2013, summary: '"一带一路"倡议提出', detail: '习近平主席在哈萨克斯坦首次提出共建丝绸之路经济带，后发展为"一带一路"国际合作倡议。', countryId: 'china', continentId: 'asia', categoryId: 'politics' },
  { id: 'cn_m7', year: 2019, yearEnd: 2022, summary: '新冠疫情', detail: '2019年底武汉发现新冠病毒，迅速演变为全球大流行病，深刻影响全球政治经济格局。', countryId: 'china', continentId: 'asia', categoryId: 'disaster' },
  { id: 'cn_m8', year: 2020, summary: '脱贫攻坚战胜利', detail: '中国宣布现行标准下9899万农村贫困人口全部脱贫，提前10年实现联合国减贫目标。', countryId: 'china', continentId: 'asia', categoryId: 'politics' },
  { id: 'cn_m9', year: 2021, summary: '全面建成小康社会', detail: '中国宣布第一个百年奋斗目标如期实现——全面建成小康社会。', countryId: 'china', continentId: 'asia', categoryId: 'politics' },
  { id: 'cn_m10', year: 2022, summary: '北京冬奥会成功举办', detail: '第24届冬季奥林匹克运动会和第13届冬季残奥会在北京举行，成为首个双奥之城。', countryId: 'china', continentId: 'asia', categoryId: 'culture' },

  // 美国
  { id: 'us_m1', year: 2001, summary: '9·11恐怖袭击', detail: '基地组织劫机袭击纽约世贸中心和五角大楼，造成约3000人死亡，美国随即发动反恐战争。', countryId: 'usa', continentId: 'north-america', categoryId: 'war' },
  { id: 'us_m2', year: 2003, yearEnd: 2011, summary: '伊拉克战争', detail: '以萨达姆拥有大规模杀伤性武器为由入侵伊拉克，推翻萨达姆政权，但未找到相关武器证据。', countryId: 'usa', continentId: 'north-america', categoryId: 'war' },
  { id: 'us_m3', year: 2008, yearEnd: 2009, summary: '次贷危机与金融海啸', detail: '雷曼兄弟破产引发全球金融海啸，美国政府推出7000亿美元救市计划。', countryId: 'usa', continentId: 'north-america', categoryId: 'economy' },
  { id: 'us_m4', year: 2008, summary: '奥巴马当选首位黑人总统', detail: '贝拉克·奥巴马击败麦凯恩，成为美国历史上第一位非裔总统。', countryId: 'usa', continentId: 'north-america', categoryId: 'politics' },
  { id: 'us_m5', year: 2011, summary: '本·拉登被击毙', detail: '美军特种部队在巴基斯坦阿伯塔巴德击毙基地组织头目奥萨马·本·拉登。', countryId: 'usa', continentId: 'north-america', categoryId: 'war' },
  { id: 'us_m6', year: 2014, yearEnd: 2017, summary: '页岩油气革命', detail: '水力压裂技术突破使美国从能源进口国变为最大石油生产国，重塑全球能源格局。', countryId: 'usa', continentId: 'north-america', categoryId: 'economy' },
  { id: 'us_m7', year: 2017, summary: '特朗普就任总统', detail: '唐纳德·特朗普宣誓就职第45任总统，推行"美国优先"政策，退出多个国际协议。', countryId: 'usa', continentId: 'north-america', categoryId: 'politics' },
  { id: 'us_m8', year: 2020, yearEnd: 2022, summary: '新冠大流行', detail: 'COVID-19在美国造成超100万人死亡，引发社会分裂和经济衰退，多轮财政刺激应对危机。', countryId: 'usa', continentId: 'north-america', categoryId: 'disaster' },
  { id: 'us_m9', year: 2020, summary: '国会山骚乱', detail: '特朗普支持者冲击国会大厦试图阻止拜登胜选确认，造成5人死亡，震惊世界。', countryId: 'usa', continentId: 'north-america', categoryId: 'rebellion' },
  { id: 'us_m10', year: 2021, summary: '美军撤离阿富汗', detail: '8月底最后一批美军撤离喀布尔，结束长达20年的阿富汗战争。', countryId: 'usa', continentId: 'north-america', categoryId: 'war' },
  { id: 'us_m11', year: 2022, yearEnd: 2024, summary: 'AI技术爆发', detail: 'ChatGPT发布引爆人工智能革命，OpenAI、Google、Meta等展开激烈AI军备竞赛。', countryId: 'usa', continentId: 'north-america', categoryId: 'culture' },
  { id: 'us_m12', year: 2024, summary: '特朗普再次当选', detail: '唐纳德·特朗普击败哈里斯，成为继格罗弗·克利夫兰之后第二位非连续任期总统。', countryId: 'usa', continentId: 'north-america', categoryId: 'politics' },

  // 俄罗斯
  { id: 'ru_m1', year: 1999, yearEnd: 2008, summary: '普京首次执政', detail: '普京出任俄罗斯总统，加强中央集权，稳定车臣局势，推动经济复苏。', countryId: 'russia', continentId: 'europe', categoryId: 'politics' },
  { id: 'ru_m2', year: 2008, yearEnd: 2009, summary: '俄格战争', detail: '俄罗斯与格鲁吉亚因南奥塞梯和阿布哈兹问题爆发短暂战争，俄承认两地独立。', countryId: 'russia', continentId: 'europe', categoryId: 'war' },
  { id: 'ru_m3', year: 2014, summary: '克里米亚并入俄罗斯', detail: '克里米亚公投后并入俄罗斯，西方对俄实施严厉制裁，俄乌关系急剧恶化。', countryId: 'russia', continentId: 'europe', categoryId: 'politics' },
  { id: 'ru_m4', year: 2014, summary: '卢布危机', detail: '油价暴跌叠加西方制裁导致卢布大幅贬值，央行紧急加息至17%稳定市场。', countryId: 'russia', continentId: 'europe', categoryId: 'economy' },
  { id: 'ru_m5', year: 2022, yearEnd: 2026, summary: '俄乌冲突持续', detail: '2月俄罗斯发动特别军事行动，俄乌冲突全面升级，引发二战以来欧洲最大规模军事冲突。', countryId: 'russia', continentId: 'europe', categoryId: 'war' },
  { id: 'ru_m6', year: 2022, yearEnd: 2026, summary: '西方全面制裁俄罗斯', detail: '美欧对俄实施前所未有的经济制裁：冻结外汇储备、禁运能源、排除SWIFT系统等。', countryId: 'russia', continentId: 'europe', categoryId: 'economy' },
  { id: 'ru_m7', year: 2023, yearEnd: 2024, summary: '瓦格纳兵变事件', detail: '普里戈任率瓦格纳集团向莫斯科进发，后经调停折返，普里戈任随后死于空难。', countryId: 'russia', continentId: 'europe', categoryId: 'rebellion' },

  // 日本
  { id: 'jp_m1', year: 2011, summary: '东日本大地震与福岛核事故', detail: '3月11日发生9.0级特大地震及海啸，福岛第一核电站发生严重核泄漏事故。', countryId: 'japan', continentId: 'asia', categoryId: 'disaster' },
  { id: 'jp_m2', year: 2019, yearEnd: 2021, summary: '令和时代开启', detail: '明仁天皇退位，德仁天皇即位，日本进入令和时代；东京奥运延期至2021年举行。', countryId: 'japan', continentId: 'asia', categoryId: 'dynasty' },
  { id: 'jp_m3', year: 2022, summary: '安倍晋三遇刺', detail: '前首相安倍晋三在奈良街头演讲时遭枪击身亡，震动日本社会。', countryId: 'japan', continentId: 'asia', categoryId: 'politics' },

  // 英国
  { id: 'uk_m1', year: 2016, summary: '脱欧公投', detail: '英国公投以51.89%支持率决定脱离欧盟，卡梅伦首相辞职，特蕾莎·梅接任。', countryId: 'uk', continentId: 'europe', categoryId: 'independence' },
  { id: 'uk_m2', year: 2020, summary: '英国正式脱欧', detail: '英国完成脱欧过渡期，正式退出欧盟单一市场和关税同盟，结束47年欧盟成员身份。', countryId: 'uk', continentId: 'europe', categoryId: 'politics' },
  { id: 'uk_m3', year: 2022, summary: '伊丽莎白二世逝世', detail: '9月8日在位70年的伊丽莎白二世女王去世，查尔斯三世继位，结束伊丽莎白时代。', countryId: 'uk', continentId: 'europe', categoryId: 'dynasty' },
  { id: 'uk_m4', year: 2022, yearEnd: 2024, summary: '英国政坛剧烈动荡', detail: '约翰逊辞职、特拉斯45天短命政府、苏纳克上台执政，两年内更换三位首相。', countryId: 'uk', continentId: 'europe', categoryId: 'politics' },

  // 法国
  { id: 'fr_m1', year: 2015, summary: '巴黎恐袭系列事件', detail: '1月查理周刊总部遇袭、11月巴塔克兰剧院恐袭共造成超过200人死亡，法国进入全国紧急状态。', countryId: 'france', continentId: 'europe', categoryId: 'war' },
  { id: 'fr_m2', year: 2017, summary: '马克龙当选最年轻总统', detail: '39岁的埃马纽埃尔·马克龙当选法国第五共和国最年轻总统，推行改革议程。', countryId: 'france', continentId: 'europe', categoryId: 'politics' },
  { id: 'fr_m3', year: 2018, yearEnd: 2019, summary: '"黄马甲"运动', detail: '燃油税上调引发大规模抗议示威运动，蔓延全法数周，马克龙被迫让步调整政策。', countryId: 'france', continentId: 'europe', categoryId: 'rebellion' },
  { id: 'fr_m4', year: 2024, summary: '巴黎奥运会', detail: '第33届夏季奥林匹克运动会在巴黎举行，塞纳河上举行开创性开幕式。', countryId: 'france', continentId: 'europe', categoryId: 'culture' },

  // 德国
  { id: 'de_m1', year: 2005, yearEnd: 2021, summary: '默克尔时代', detail: '默克尔担任德国总理16年，是德国任期最长总理之一，带领德国度过欧债危机和难民危机。', countryId: 'germany', continentId: 'europe', categoryId: 'dynasty' },
  { id: 'de_m2', year: 2015, yearEnd: 2016, summary: '欧洲难民危机', detail: '叙利亚内战引发难民潮，德国接收超百万难民，引发国内政治分歧和社会紧张。', countryId: 'germany', continentId: 'europe', categoryId: 'disaster' },
  { id: 'de_m3', year: 2022, yearEnd: 2024, summary: '德国转向国防扩张', detail: '俄乌冲突促使德国设立1000亿欧元特别基金重整军队，终结长期削减防务开支的政策。', countryId: 'germany', continentId: 'europe', categoryId: 'war' },

  // 韩国
  { id: 'kr_m1', year: 2013, summary: '朴槿惠就任首位女总统', detail: '朴槿惠就任韩国第18任总统，为韩国首位女性国家元首。', countryId: 'korea', continentId: 'asia', categoryId: 'politics' },
  { id: 'kr_m2', year: 2016, yearEnd: 2017, summary: '朴槿惠弹劾下台', detail: '崔顺实干政丑闻曝光，韩国国会通过弹劾案，宪法法院裁决弹劾生效，朴槿惠被罢免。', countryId: 'korea', continentId: 'asia', categoryId: 'rebellion' },
  { id: 'kr_m3', year: 2018, yearEnd: 2019, summary: '朝韩首脑会晤', detail: '文在寅与金正恩三次会晤，签署《板门店宣言》，朝韩关系一度缓和。', countryId: 'korea', continentId: 'asia', categoryId: 'politics' },
  { id: 'kr_m4', year: 2022, summary: '尹锡悦就任总统', detail: '尹锡悦当选韩国第20任总统，推动韩日关系改善和对美强化同盟。', countryId: 'korea', continentId: 'asia', categoryId: 'politics' },
  { id: 'kr_m5', year: 2024, yearEnd: 2025, summary: '尹锡悦遭弹劾', detail: '尹锡悦发布紧急戒严令引发宪政危机，国会通过弹劾案，韩国政局动荡。', countryId: 'korea', continentId: 'asia', categoryId: 'rebellion' },

  // 印度
  { id: 'in_m1', year: 2014, summary: '莫迪就任印度总理', detail: '纳伦德拉·莫迪领导的人民党在大选中获胜，开启莫迪时代，推动经济改革和民族主义议程。', countryId: 'india', continentId: 'asia', categoryId: 'politics' },
  { id: 'in_m2', year: 2016, summary: '废钞令（货币改革）', detail: '莫迪政府突然废除500和1000卢比纸币，打击黑钱但给民众带来巨大不便。', countryId: 'india', continentId: 'asia', categoryId: 'economy' },
  { id: 'in_m3', year: 2019, yearEnd: 2020, summary: '废除克什米尔特殊地位', detail: '印度废除宪法第370条，取消查谟和克什米尔自治地位，印巴局势紧张。', countryId: 'india', continentId: 'asia', categoryId: 'politics' },
  { id: 'in_m4', year: 2020, yearEnd: 2022, summary: '印度新冠疫情失控', detail: '第二波疫情中德尔塔毒株肆虐，医疗系统崩溃，日均死亡人数超4000人。', countryId: 'india', continentId: 'asia', categoryId: 'disaster' },
  { id: 'in_m5', year: 2023, summary: '印度登月成功', detail: '月船三号成功在月球南极附近软着陆，印度成为第四个实现月球软着陆的国家。', countryId: 'india', continentId: 'asia', categoryId: 'culture' },
  { id: 'in_m6', year: 2024, summary: '印度超越中国成人口第一大国', detail: '联合国确认印度人口已超越中国，成为世界上人口最多的国家。', countryId: 'india', continentId: 'asia', categoryId: 'economy' },

  // 意大利
  { id: 'it_m1', year: 2011, yearEnd: 2013, summary: '主权债务危机', detail: '意大利深陷欧洲主权债务危机，贝卢斯科尼下台，蒙蒂技术官僚政府上台推行紧缩政策。', countryId: 'italy', continentId: 'europe', categoryId: 'economy' },
  { id: 'it_m2', year: 2020, yearEnd: 2021, summary: '意大利疫情重灾区', detail: '意大利曾是欧洲疫情最严重的国家之一，北部地区医疗系统濒临崩溃，死亡率极高。', countryId: 'italy', continentId: 'europe', categoryId: 'disaster' },
  { id: 'it_m3', year: 2022, yearEnd: 2024, summary: '梅洛尼出任意大利首位女总理', detail: '乔治亚·梅洛尼领导的右翼联盟赢得大选，她就任意大利首位女性总理。', countryId: 'italy', continentId: 'europe', categoryId: 'politics' },

  // 西班牙
  { id: 'es_m1', year: 2004, summary: '马德里火车爆炸案', detail: '3月11日马德里通勤列车发生连环爆炸，造成191人死亡，系伊斯兰恐怖袭击。', countryId: 'spain', continentId: 'europe', categoryId: 'war' },
  { id: 'es_m2', year: 2014, yearEnd: 2017, summary: '加泰罗尼亚独立危机', detail: '加泰罗尼亚举行独立公投后被中央政府接管自治区，多名领导人流亡或入狱。', countryId: 'spain', continentId: 'europe', categoryId: 'rebellion' },
  { id: 'es_m3', year: 2017, yearEnd: 2018, summary: '加泰罗尼亚独立运动高潮', detail: '加泰罗尼亚单方面宣布独立，西班牙参议院启动宪法第155条收回自治权，普伊格德蒙特流亡比利时。', countryId: 'spain', continentId: 'europe', categoryId: 'independence' },

  // 葡萄牙
  { id: 'pt_m1', year: 2011, yearEnd: 2014, summary: '主权债务危机与紧缩', detail: '葡萄牙接受欧盟和国际货币基金组织780亿欧元救助，实施严厉财政紧缩措施。', countryId: 'portugal', continentId: 'europe', categoryId: 'economy' },

  // 荷兰
  { id: 'nl_m1', year: 2014, yearEnd: 2020, summary: 'MH17航班被击落', detail: '马来西亚航空MH17航班在乌克兰东部被导弹击落，机上包括193名荷兰人在内的298人全部遇难。', countryId: 'netherlands', continentId: 'europe', categoryId: 'disaster' },
  { id: 'nl_m2', year: 2023, yearEnd: 2024, summary: '荷兰极右翼崛起', detail: '自由党在大选中获胜，维尔德斯领导的新右翼联合政府上台，移民政策大幅收紧。', countryId: 'netherlands', continentId: 'europe', categoryId: 'politics' },

  // 波兰
  { id: 'pl_m1', year: 2010, summary: '波兰总统专机坠毁', detail: '波兰总统卡钦斯基乘坐的飞机在俄罗斯斯摩棱斯克坠毁，96人全部遇难，包括众多高官。', countryId: 'poland', continentId: 'europe', categoryId: 'disaster' },
  { id: 'pl_m2', year: 2022, yearEnd: 2024, summary: '波兰接纳乌克兰难民', detail: '波兰接纳超150万乌克兰难民，成为人均接收难民最多的欧盟国家。', countryId: 'poland', continentId: 'europe', categoryId: 'politics' },
  { id: 'pl_m3', year: 2023, yearEnd: 2024, summary: '图斯克重返政坛', detail: '唐纳德·图斯克的公民联盟赢得大选，结束法律与公正党八年执政。', countryId: 'poland', continentId: 'europe', categoryId: 'politics' },

  // 奥地利
  { id: 'at_m1', year: 2015, yearEnd: 2016, summary: '欧洲难民危机前沿', detail: '作为申根区重要过境国，奥地利承受巨大移民压力，引发国内政治右转趋势。', countryId: 'austria', continentId: 'europe', categoryId: 'disaster' },
  { id: 'at_m2', year: 2023, yearEnd: 2024, summary: '奥地利极右翼强势', detail: '自由党在民调中长期领跑，反移民情绪高涨，传统主流政党面临挑战。', countryId: 'austria', continentId: 'europe', categoryId: 'politics' },

  // 加拿大
  { id: 'ca_m1', year: 2008, yearEnd: 2009, summary: '加拿大应对金融危机', detail: '加拿大银行体系相对稳健，政府推出经济行动计划刺激经济，受冲击小于其他发达国家。', countryId: 'canada', continentId: 'north-america', categoryId: 'economy' },
  { id: 'ca_m2', year: 2015, summary: '特鲁多当选总理', detail: '贾斯汀·特鲁多率领自由党赢得大选，成为加拿大第23任总理。', countryId: 'canada', continentId: 'north-america', categoryId: 'politics' },
  { id: 'ca_m3', year: 2018, yearEnd: 2021, summary: '原住民寄宿学校遗址发现', detail: '在不列颠哥伦比亚省 Kamloops 前寄宿学校遗址发现215具原住民儿童遗骸，引发全国反思。', countryId: 'canada', continentId: 'north-america', categoryId: 'culture' },
  { id: 'ca_m4', year: 2022, yearEnd: 2024, summary: '自由车队抗议', detail: '卡车司机抗议新冠疫苗强制令，封锁首都渥太华数周，特鲁多启用紧急状态法平息抗议。', countryId: 'canada', continentId: 'north-america', categoryId: 'rebellion' },

  // 墨西哥
  { id: 'mx_m1', year: 2006, yearEnd: 2018, summary: '毒品战争升级', detail: '卡尔德龙总统发动大规模打击贩毒集团的军事行动，十余年间暴力冲突造成超20万人死亡。', countryId: 'mexico', continentId: 'north-america', categoryId: 'war' },
  { id: 'mx_m2', year: 2018, summary: '洛佩斯就任左翼总统', detail: '安德雷斯·曼努埃尔·洛佩斯·奥夫拉多尔当选墨西哥数十年来首位左翼总统。', countryId: 'mexico', continentId: 'north-america', categoryId: 'politics' },
  { id: 'mx_m3', year: 2020, yearEnd: 2021, summary: '新冠确诊超百万', detail: '墨西哥新冠死亡人数居全球前列，经济遭受严重打击，GDP大幅萎缩。', countryId: 'mexico', continentId: 'north-america', categoryId: 'disaster' },

  // 巴西
  { id: 'br_m1', year: 2013, yearEnd: 2014, summary: '大规模抗议浪潮', detail: '公交票价上涨引发全国性大规模抗议，矛头指向腐败、公共服务不足等问题。', countryId: 'brazil', continentId: 'south-america', categoryId: 'rebellion' },
  { id: 'br_m2', year: 2016, summary: '罗塞夫被弹劾', detail: '总统迪尔玛·罗塞夫因预算违规被国会弹劾罢免，副总统特梅尔接任。', countryId: 'brazil', continentId: 'south-america', categoryId: 'politics' },
  { id: 'br_m3', year: 2018, summary: '博索纳罗当选', detail: '雅伊尔·博索纳罗当选巴西总统，被称为"热带特朗普"，推行右翼民粹政策。', countryId: 'brazil', continentId: 'south-america', categoryId: 'politics' },
  { id: 'br_m4', year: 2019, yearEnd: 2020, summary: '亚马逊雨林大火频发', detail: '森林砍伐加剧导致亚马逊雨林火灾数量激增，国际社会强烈关注环境破坏问题。', countryId: 'brazil', continentId: 'south-america', categoryId: 'disaster' },
  { id: 'br_m5', year: 2023, yearEnd: 2024, summary: '卢拉第三任期', detail: '路易斯·伊纳西奥·卢拉·达席尔瓦第三次当选总统，致力于恢复环境保护和社会福利政策。', countryId: 'brazil', continentId: 'south-america', categoryId: 'politics' },

  // 阿根廷
  { id: 'ar_m1', year: 2015, summary: '马克里结束基什内尔时代', detail: '毛里西奥·马克里当选总统，结束12年的左翼庇隆主义执政，推行市场经济改革。', countryId: 'argentina', continentId: 'south-america', categoryId: 'politics' },
  { id: 'ar_m2', year: 2018, yearEnd: 2019, summary: '阿根廷货币危机', detail: '阿根廷比索暴跌，被迫向IMF寻求565亿美元史上最大规模救助贷款。', countryId: 'argentina', continentId: 'south-america', categoryId: 'economy' },
  { id: 'ar_m3', year: 2022, yearEnd: 2024, summary: '米莱当选"电锯式"总统', detail: '哈维尔·米莱以激进自由主义纲领当选，承诺关闭央行、废除本国货币、大幅裁撤政府部门。', countryId: 'argentina', continentId: 'south-america', categoryId: 'politics' },
  { id: 'ar_m4', year: 2024, summary: '阿根廷放弃比索使用美元', detail: '米莱政府推进去监管化和美元化政策，通胀率虽仍高位但开始回落。', countryId: 'argentina', continentId: 'south-america', categoryId: 'economy' },

  // 秘鲁
  { id: 'pe_m1', year: 2016, summary: '库琴斯基当选', detail: '库琴斯基当选秘鲁总统，前总统藤森之女藤森惠子以微弱劣势落选。', countryId: 'peru', continentId: 'south-america', categoryId: 'politics' },
  { id: 'pe_m2', year: 2020, yearEnd: 2022, summary: '政治动荡频繁', detail: '短短几年间经历五位总统更迭：比斯卡拉、梅里诺、萨加斯蒂、卡斯蒂略、博卢阿特。', countryId: 'peru', continentId: 'south-america', categoryId: 'rebellion' },
  { id: 'pe_m3', year: 2022, yearEnd: 2024, summary: '卡斯蒂略被弹劾逮捕', detail: '总统卡斯蒂略试图解散国会失败后被弹劾逮捕，副总统博卢阿特接任，全国爆发抗议骚乱。', countryId: 'peru', continentId: 'south-america', categoryId: 'politics' },

  // 南非
  { id: 'sa_m1', year: 2008, yearEnd: 2018, summary: '祖马执政时期', detail: '雅各布·祖马担任南非总统十年，期间腐败丑闻缠身，最终被迫辞职。', countryId: 'south-africa', continentId: 'africa', categoryId: 'politics' },
  { id: 'sa_m2', year: 2020, yearEnd: 2022, summary: '新冠疫情重创南非', detail: 'Omicron变种首先在南非被发现，经济陷入深度衰退，失业率飙升至35%以上。', countryId: 'south-africa', continentId: 'africa', categoryId: 'disaster' },
  { id: 'sa_m3', year: 2024, yearEnd: 2025, summary: '非国大失去绝对多数', detail: '非洲人国民大会在大选中首次失去议会绝对多数席位，需组建联合政府。', countryId: 'south-africa', continentId: 'africa', categoryId: 'politics' },

  // 埃及
  { id: 'eg_m1', year: 2011, yearEnd: 2012, summary: '阿拉伯之春与穆巴拉克倒台', detail: '埃及爆发大规模反政府示威，穆巴拉克总统被迫下台，结束30年统治。', countryId: 'egypt', continentId: 'africa', categoryId: 'rebellion' },
  { id: 'eg_m2', year: 2013, summary: '军方推翻穆尔西', detail: '埃及军方领导人塞西发动政变，推翻民选的穆斯林兄弟会总统穆尔西。', countryId: 'egypt', continentId: 'africa', categoryId: 'politics' },
  { id: 'eg_m3', year: 2015, summary: '新苏伊士运河通航', detail: '埃及完成新苏伊士运河扩建工程，运河通行能力翻倍。', countryId: 'egypt', continentId: 'africa', categoryId: 'economy' },

  // 以色列
  { id: 'il_m1', year: 2005, summary: '以色列撤离加沙地带', detail: '沙龙总理执行单边撤离计划，撤出所有犹太定居点和驻军，结束对加沙的直接控制。', countryId: 'israel', continentId: 'asia', categoryId: 'politics' },
  { id: 'il_m2', year: 2014, summary: '加沙战争', detail: '以色列与哈马斯爆发50天激烈冲突，造成超过2100名巴勒斯坦人和72名以色列人死亡。', countryId: 'israel', continentId: 'asia', categoryId: 'war' },
  { id: 'il_m3', year: 2020, yearEnd: 2021, summary: '阿联酋等阿拉伯国家建交', detail: '《亚伯拉罕协议》签署，以色列先后与阿联酋、巴林、摩洛哥、苏丹建立外交关系。', countryId: 'israel', continentId: 'asia', categoryId: 'politics' },
  { id: 'il_m4', year: 2023, yearEnd: 2026, summary: '巴以冲突全面升级', detail: '2023年10月7日哈马斯突袭以色列引发新一轮大规模冲突，加沙人道主义危机持续至今。', countryId: 'israel', continentId: 'asia', categoryId: 'war' },

  // 巴基斯坦
  { id: 'pk_m1', year: 2007, summary: '贝·布托遇刺身亡', detail: '前总理贝·布托在竞选集会上遭自杀式炸弹袭击身亡，震惊世界。', countryId: 'pakistan', continentId: 'asia', categoryId: 'war' },
  { id: 'pk_m2', year: 2018, yearEnd: 2022, summary: '伊姆兰·汗执政时期', detail: '伊姆兰·汗当选总理推动反腐改革，后于2022年被不信任投票罢免。', countryId: 'pakistan', continentId: 'asia', categoryId: 'politics' },
  { id: 'pk_m3', year: 2023, yearEnd: 2024, summary: '伊姆兰·汗被判监禁', detail: '前总理伊姆兰·汗因多项罪名被判监禁，其政党成员大量被捕。', countryId: 'pakistan', continentId: 'asia', categoryId: 'politics' },

  // 阿富汗（补充）
  { id: 'af_m1', year: 2021, summary: '喀布尔陷落与塔利班复辟', detail: '8月15日塔利班进入喀布尔，阿富汗伊斯兰酋长国重新成立，美国结束20年军事存在。', countryId: 'afghanistan', continentId: 'asia', categoryId: 'war' },
  { id: 'af_m2', year: 2022, yearEnd: 2024, summary: '塔利班治下的阿富汗', detail: '塔利班重新执政后限制女性教育和就业权利，国际社会普遍不予承认，人道主义危机严峻。', countryId: 'afghanistan', continentId: 'asia', categoryId: 'politics' },

  // 泰国
  { id: 'th_m1', year: 2006, summary: '军事政变推翻他信', detail: '泰国军方发动政变推翻总理他信·西那瓦，开启新一轮政治动荡周期。', countryId: 'thailand', continentId: 'asia', categoryId: 'rebellion' },
  { id: 'th_m2', year: 2014, summary: '巴育军事政变', detail: '陆军总司令巴育发动政变推翻英拉·西那瓦政府，泰国再次回到军人统治之下。', countryId: 'thailand', continentId: 'asia', categoryId: 'rebellion' },
  { id: 'th_m3', year: 2016, yearEnd: 2017, summary: '拉玛十世即位', detail: '普密蓬国王逝世后，玛哈·哇集拉隆功继位为拉玛十世，新宪法颁布巩固王室权力。', countryId: 'thailand', continentId: 'asia', categoryId: 'dynasty' },
  { id: 'th_m4', year: 2023, yearEnd: 2024, summary: '前进党崛起与政治变革', detail: '前进党在大选中获得最多席位，主张改革君主制和军方特权，引发政治格局变化。', countryId: 'thailand', continentId: 'asia', categoryId: 'politics' },

  // 越南
  { id: 'vn_m1', year: 2006, yearEnd: 2020, summary: '革新开放深化期', detail: '越南加入WTO(2007)，经济高速增长，逐步融入国际贸易体系，成为新兴制造业中心。', countryId: 'vietnam', continentId: 'asia', categoryId: 'economy' },
  { id: 'vn_m2', year: 2018, summary: '越共十二届六中全会', detail: '聚焦反腐败和经济结构调整，阮富仲继续推动党内整顿和经济发展。', countryId: 'vietnam', continentId: 'asia', categoryId: 'politics' },
  { id: 'vn_m3', year: 2023, yearEnd: 2024, summary: '越美关系全面提升', detail: '拜登访问越南，两国关系升级为"全面战略伙伴关系"；越南吸引外资创历史新高。', countryId: 'vietnam', continentId: 'asia', categoryId: 'politics' },

  // 印度尼西亚
  { id: 'id_m1', year: 2004, yearEnd: 2005, summary: '印度洋大海啸', detail: '12月26日苏门答腊岛海域发生9.1级地震引发海啸，印尼死亡超16万人。', countryId: 'indonesia', continentId: 'asia', categoryId: 'disaster' },
  { id: 'id_m2', year: 2014, yearEnd: 2024, summary: '佐科威佐科两届总统', detail: '佐科·维多多担任印尼总统十年(2014-2024)，大力投资基础设施建设，迁都计划启动。', countryId: 'indonesia', continentId: 'asia', categoryId: 'politics' },
  { id: 'id_m3', year: 2019, yearEnd: 2020, summary: '印尼迁都计划确定', detail: '佐科政府宣布将首都从雅加达迁往东加里曼丹省新城市努桑塔拉。', countryId: 'indonesia', continentId: 'asia', categoryId: 'politics' },
  { id: 'id_m4', year: 2024, summary: '普拉博沃当选新总统', detail: '普拉博沃·苏比安托当选印尼第八任总统，延续佐科时期的发展路线。', countryId: 'indonesia', continentId: 'asia', categoryId: 'politics' },

  // 菲律宾
  { id: 'ph_m1', year: 2010, yearEnd: 2016, summary: '阿基诺三世执政', detail: '阿基诺三世推动反腐和经济增长，与中国在南海问题上摩擦加剧。', countryId: 'philippines', continentId: 'asia', categoryId: 'politics' },
  { id: 'ph_m2', year: 2016, yearEnd: 2022, summary: '杜特尔特禁毒战争', detail: '杜特尔特总统发动大规模扫毒行动，据称致数千人死亡，引发人权争议。', countryId: 'philippines', continentId: 'asia', categoryId: 'war' },
  { id: 'ph_m3', year: 2022, yearEnd: 2024, summary: '小马科斯就任总统', detail: '费迪南德·马科斯之子当选菲律宾第17任总统，对华态度较杜特尔特时期有所转变。', countryId: 'philippines', continentId: 'asia', categoryId: 'politics' },

  // 缅甸
  { id: 'mm_m7', year: 2007, summary: '袈裟革命（番红花革命）', detail: '僧侣主导的大规模反军政府示威活动，遭到军方血腥镇压。', countryId: 'myanmar', continentId: 'asia', categoryId: 'rebellion' },
  { id: 'mm_m8', year: 2011, yearEnd: 2015, summary: '民主化进程开启', detail: '军政府逐步放松管制，释放昂山素季，开始向文官政府过渡。', countryId: 'myanmar', continentId: 'asia', categoryId: 'politics' },
  { id: 'mm_m9', year: 2021, yearEnd: 2026, summary: '军事政变与内战', detail: '2021年2月军方发动政变推翻昂山素季政府，各地爆发武装反抗，缅甸陷入全面内战状态。', countryId: 'myanmar', continentId: 'asia', categoryId: 'war' },

  // 澳大利亚
  { id: 'au_m1', year: 2008, yearEnd: 2009, summary: '澳大利亚应对金融危机', detail: '陆克文政府推出大规模经济刺激计划，澳大利亚躲过经济衰退。', countryId: 'australia', continentId: 'oceania', categoryId: 'economy' },
  { id: 'au_m2', year: 2019, yearEnd: 2020, summary: '黑色夏季丛林大火', detail: '2019-2020年澳洲遭遇史无前例的丛林大火季，烧毁面积超1800万公顷，数十亿动物丧生。', countryId: 'australia', continentId: 'oceania', categoryId: 'disaster' },
  { id: 'au_m3', year: 2020, yearEnd: 2021, summary: '新冠疫情封城', detail: '墨尔本等地实施全球最严格封城措施之一，累计封城超260天，边境关闭近两年。', countryId: 'australia', continentId: 'oceania', categoryId: 'disaster' },
  { id: 'au_m4', year: 2023, yearEnd: 2024, summary: '原住民之声公投失败', detail: '关于是否在宪法中设立原住民咨询机构的全民公投未能通过，原住民权益议题持续讨论。', countryId: 'australia', continentId: 'oceania', categoryId: 'politics' },

  // 新西兰
  { id: 'nz_m1', year: 2019, summary: '基督城清真寺枪击案', detail: '白人至上主义者袭击两座清真寺，造成51人死亡，新西兰随后修改枪支法。', countryId: 'new-zealand', continentId: 'oceania', categoryId: 'war' },
  { id: 'nz_m2', year: 2019, yearEnd: 2020, summary: '怀特岛火山喷发', detail: '新西兰北岛的怀特岛火山突然喷发，22名游客遇难，多数为澳大利亚游客。', countryId: 'new-zealand', continentId: 'oceania', categoryId: 'disaster' },
  { id: 'nz_m3', year: 2023, summary: '新西兰首位女原住民外长', detail: '娜奈亚·马胡塔担任外长，毛利族文化影响力在新西兰政坛持续上升。', countryId: 'new-zealand', continentId: 'oceania', categoryId: 'politics' },

  // 伊朗
  { id: 'ir_m1', year: 2002, yearEnd: 2003, summary: '伊朗核计划暴露', detail: '伊朗秘密铀浓缩设施被发现，引发国际社会对其核意图的担忧，开启漫长核谈判。', countryId: 'iran', continentId: 'asia', categoryId: 'politics' },
  { id: 'ir_m2', year: 2009, summary: '绿色运动', detail: '内贾德连任选举涉嫌舞弊引发大规模抗议示威，被当局强力镇压。', countryId: 'iran', continentId: 'asia', categoryId: 'rebellion' },
  { id: 'ir_m3', year: 2015, summary: '伊朗核协议签署', detail: '伊朗与P5+1达成JCPOA核协议，同意限制核活动换取解除部分制裁。', countryId: 'iran', continentId: 'asia', categoryId: 'politics' },
  { id: 'ir_m4', year: 2018, summary: '美国退出伊核协议', detail: '特朗普宣布退出伊朗核协议并重启全面制裁，伊朗逐步恢复铀浓缩活动。', countryId: 'iran', continentId: 'asia', categoryId: 'politics' },
  { id: 'ir_m5', year: 2020, summary: '苏莱曼尼被刺杀', detail: '美国无人机在伊拉克击杀伊朗圣城旅指挥官苏莱曼尼将军，中东局势高度紧张。', countryId: 'iran', continentId: 'asia', categoryId: 'war' },
  { id: 'ir_m6', year: 2022, summary: '"头巾革命"', detail: '阿米尼之死引发全国性反政府抗议，女性摘下头巾表达反抗，当局残酷镇压。', countryId: 'iran', continentId: 'asia', categoryId: 'rebellion' },
  { id: 'ir_m7', year: 2023, yearEnd: 2024, summary: '沙特伊朗恢复邦交', detail: '在中国斡旋下，沙特与伊朗达成协议恢复外交关系，中东地缘格局重大转变。', countryId: 'iran', continentId: 'asia', categoryId: 'politics' },
  { id: 'ir_m8', year: 2024, yearEnd: 2025, summary: '以色列-伊朗直接冲突', detail: '双方首次直接互相攻击本土目标，以色列轰炸伊朗核设施，伊朗发射导弹报复。', countryId: 'iran', continentId: 'asia', categoryId: 'war' },

  // 阿拉伯帝国 / 中东
  { id: 'ae_m1', year: 2017, yearEnd: 2021, summary: '卡塔尔断交危机', detail: '沙特等国与卡塔尔断交封锁三年有余，直至2021年科威特斡旋和解。', countryId: 'arab', continentId: 'asia', categoryId: 'politics' },
  { id: 'ae_m2', year: 2020, summary: '亚伯拉罕协议', detail: '阿联酋、巴林与以色列建交，打破阿拉伯国家对以色列的长期抵制共识。', countryId: 'arab', continentId: 'asia', categoryId: 'politics' },
  { id: 'ae_m3', year: 2022, yearEnd: 2024, summary: '卡塔尔世界杯', detail: '卡塔尔举办2022年足球世界杯，是首届在中东举办的足球世界杯。', countryId: 'arab', continentId: 'asia', categoryId: 'culture' },

  // 奥斯曼/土耳其
  { id: 'ot_m1', year: 2016, summary: '未遂军事政变', detail: '土耳其军方部分人员发动政变企图推翻埃尔多安政府，失败后引发大规模清洗。', countryId: 'ottoman', continentId: 'europe', categoryId: 'rebellion' },
  { id: 'ot_m2', year: 2020, yearEnd: 2024, summary: '埃尔多安强权执政', detail: '埃尔多安修宪扩大总统权力，控制司法媒体，经济政策争议不断，里拉大幅贬值。', countryId: 'ottoman', continentId: 'europe', categoryId: 'politics' },
  { id: 'ot_m3', year: 2023, yearEnd: 2024, summary: '土耳其大选与经济危机', detail: '埃尔多安艰难赢得大选连任，面对超高通胀率和里拉崩盘，经济政策逐步转向正统路线。', countryId: 'ottoman', continentId: 'europe', categoryId: 'economy' },

  // 蒙古帝国 / 蒙古
  { id: 'mg_m1', year: 2000, yearEnd: 2024, summary: '蒙古资源出口型经济', detail: '蒙古依托煤炭铜矿等矿产出口发展经济，但深受中国经济周期和大宗商品价格波动影响。', countryId: 'mongol', continentId: 'asia', categoryId: 'economy' },
  { id: 'mg_m2', year: 2023, yearEnd: 2024, summary: '蒙古第三邻国战略', detail: '蒙古积极发展与美日韩等"第三邻国"关系，平衡中俄影响力。', countryId: 'mongol', continentId: 'asia', categoryId: 'politics' },

  // 埃塞俄比亚
  { id: 'et_m1', year: 2018, yearEnd: 2020, summary: '阿比·艾哈迈德上台与诺贝尔和平奖', detail: '阿比·艾哈迈德推动与厄立特里亚和平协议获诺贝尔和平奖，但提格雷冲突随后爆发。', countryId: 'ethiopia', continentId: 'africa', categoryId: 'politics' },
  { id: 'et_m2', year: 2020, yearEnd: 2022, summary: '提格雷战争', detail: '联邦政府与提格雷地方武装爆发内战，估计造成数十万人死亡，非洲21世纪最致命冲突之一。', countryId: 'ethiopia', continentId: 'africa', categoryId: 'war' },

  // 马里
  { id: 'ml_m1', year: 2012, summary: '图阿雷格叛乱与军事政变', detail: '北方图阿雷格分离主义叛乱引发军事政变，马里北部一度被极端分子控制。', countryId: 'mali', continentId: 'africa', categoryId: 'war' },
  { id: 'ml_m2', year: 2020, yearEnd: 2024, summary: '反复军事政变', detail: '2020年和2021年两次军事政变，军政府掌权后要求法国维和部队撤离。', countryId: 'mali', continentId: 'africa', categoryId: 'rebellion' },

  // 摩洛哥
  { id: 'ma_m1', year: 2011, summary: '"2月20日运动"与宪政改革', detail: '阿拉伯之春波及摩洛哥，穆罕默德六世主动进行有限宪政改革回应诉求。', countryId: 'morocco', continentId: 'africa', categoryId: 'politics' },
  { id: 'ma_m2', year: 2023, yearEnd: 2024, summary: '摩洛哥大地震', detail: '马拉喀什南部发生6.8级强烈地震，造成近3000人死亡，是该国百年来最致命地震。', countryId: 'morocco', continentId: 'africa', categoryId: 'disaster' },

  // 全球性事件（标注在美国条目旁作为参照）
]
