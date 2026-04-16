import type { Dynasty } from '../types'

// 中国朝代数据
export const dynasties: Dynasty[] = [
  { id: 'xia', name: '夏朝', countryId: 'china', startYear: -2070, endYear: -1600, color: '#8B7355', summary: '中国历史上第一个王朝，传说由大禹建立' },
  { id: 'shang', name: '商朝', countryId: 'china', startYear: -1600, endYear: -1046, color: '#696969', summary: '青铜器时代，甲骨文成熟' },
  { id: 'zhou', name: '周朝', countryId: 'china', startYear: -1046, endYear: -256, color: '#4169E1', summary: '分封制，周礼奠定中华文化基础' },
  { id: 'warring', name: '战国', countryId: 'china', startYear: -256, endYear: -221, color: '#778899', summary: '七雄争霸，秦国逐步兼并六国' },
  { id: 'qin', name: '秦朝', countryId: 'china', startYear: -221, endYear: -206, color: '#2F4F4F', summary: '统一六国，书同文车同轨' },
  { id: 'chuhan', name: '楚汉', countryId: 'china', startYear: -206, endYear: -202, color: '#8B4513', summary: '楚汉相争，项羽与刘邦争夺天下' },
  { id: 'han', name: '汉朝', countryId: 'china', startYear: -202, endYear: 220, color: '#B22222', summary: '丝绸之路，儒学定于一尊' },
  { id: 'three_kingdoms', name: '三国', countryId: 'china', startYear: 220, endYear: 280, color: '#9370DB', summary: '魏蜀吴三国鼎立' },
  { id: 'jin', name: '晋朝', countryId: 'china', startYear: 265, endYear: 420, color: '#6B8E23', summary: '八王之乱，五胡乱华' },
  { id: 'sui', name: '隋朝', countryId: 'china', startYear: 581, endYear: 618, color: '#CD853F', summary: '科举制度，大运河开凿' },
  { id: 'tang', name: '唐朝', countryId: 'china', startYear: 618, endYear: 907, color: '#DAA520', summary: '盛世华章，万国来朝' },
  { id: 'five_dynasties', name: '五代十国', countryId: 'china', startYear: 907, endYear: 960, color: '#708090', summary: '藩镇割据，战乱频仍' },
  { id: 'song', name: '宋朝', countryId: 'china', startYear: 960, endYear: 1279, color: '#4682B4', summary: '经济繁荣，文化昌盛' },
  { id: 'yuan', name: '元朝', countryId: 'china', startYear: 1271, endYear: 1368, color: '#556B2F', summary: '蒙古统治，版图最大' },
  { id: 'ming', name: '明朝', countryId: 'china', startYear: 1368, endYear: 1644, color: '#8B0000', summary: '郑和下西洋，修长城定都北京' },
  { id: 'qing', name: '清朝', countryId: 'china', startYear: 1644, endYear: 1912, color: '#FFD700', summary: '康乾盛世，近代变革' },
  { id: 'cn_modern', name: '中华人民共和国', countryId: 'china', startYear: 1949, endYear: 2026, color: '#DC143C', summary: '新中国成立至今' },
]

// 日本朝代/时期
export const japanEras = [
  { id: 'asuka', name: '飞鸟时代', countryId: 'japan', startYear: 593, endYear: 710, color: '#FF69B4', summary: '佛教传入，律令制萌芽' },
  { id: 'nara', name: '奈良时代', countryId: 'japan', startYear: 710, endYear: 794, color: '#FF6347', summary: '平城京建设，唐风文化' },
  { id: 'heian', name: '平安时代', countryId: 'japan', startYear: 794, endYear: 1185, color: '#FFB6C1', summary: '武士兴起，物语文学' },
  { id: 'kamakura', name: '镰仓时代', countryId: 'japan', startYear: 1185, endYear: 1333, color: '#9370DB', summary: '幕府统治，元寇来袭' },
  { id: 'muromachi', name: '室町时代', countryId: 'japan', startYear: 1336, endYear: 1573, color: '#8FBC8F', summary: '足利幕府，战国纷争' },
  { id: 'edo', name: '江户时代', countryId: 'japan', startYear: 1603, endYear: 1868, color: '#4169E1', summary: '锁国政策，町人文化' },
  { id: 'meiji', name: '明治时代', countryId: 'japan', startYear: 1868, endYear: 1912, color: '#DC143C', summary: '明治维新，走向近代' },
]

// 韩国朝代/时期
export const koreaDynasties = [
  { id: 'goryeo', name: '高丽王朝', countryId: 'korea', startYear: 918, endYear: 1392, color: '#2E8B57', summary: '王建建立高丽王朝，统一朝鲜半岛' },
  { id: 'joseon', name: '朝鲜王朝', countryId: 'korea', startYear: 1392, endYear: 1897, color: '#006400', summary: '李成桂建立朝鲜王朝，延续五百余年' },
]

// 印度历史时期
export const indiaPeriods = [
  { id: 'in_vedic', name: '吠陀时期', countryId: 'india', startYear: -1500, endYear: -500, color: '#FFB300', summary: '雅利安人入侵，吠陀文化与梵语形成' },
  { id: 'in_maurya', name: '孔雀王朝', countryId: 'india', startYear: -322, endYear: -185, color: '#F9A825', summary: '阿育王统治下的印度大一统帝国' },
  { id: 'in_gupta', name: '笈多王朝', countryId: 'india', startYear: 320, endYear: 550, color: '#E65100', summary: '印度古典文明的黄金时代' },
  { id: 'in_delhi', name: '德里苏丹国', countryId: 'india', startYear: 1206, endYear: 1526, color: '#BF360C', summary: '伊斯兰政权统治北印度的三百多年' },
  { id: 'in_mughal', name: '莫卧儿帝国', countryId: 'india', startYear: 1526, endYear: 1857, color: '#C62828', summary: '泰姬陵的建造者，印度最后一个大帝国' },
  { id: 'in_british', name: '英属印度', countryId: 'india', startYear: 1757, endYear: 1947, color: '#546E7A', summary: '东印度公司及英国直接殖民统治时期' },
  { id: 'in_modern', name: '现代印度', countryId: 'india', startYear: 1947, endYear: 2026, color: '#FF9933', summary: '独立建国后的共和国发展历程' },
]

// 泰国（暹罗）历史
export const thailandPeriods = [
  { id: 'th_sukhothai', name: '素可泰王国', countryId: 'thailand', startYear: 1238, endYear: 1438, color: '#795548', summary: '泰国第一个统一王国，泰国文字诞生' },
  { id: 'th_ayutthaya', name: '阿瑜陀耶王国', countryId: 'thailand', startYear: 1351, endYear: 1767, color: '#A1887F', summary: '东南亚最强盛的王国之一，被缅甸攻陷' },
  { id: 'th_bangkok', name: '曼谷王朝（拉达纳哥欣）', countryId: 'thailand', startYear: 1782, endYear: 2026, color: '#8D6E63', summary: '却克里王朝至今仍在统治的泰国现代王朝' },
]

// 越南历史
export const vietnamPeriods = [
  { id: 'vn_hongbang', name: '鸿庞氏', countryId: 'vietnam', startYear: -2879, endYear: -258, color: '#D32F2F', summary: '传说中的越南第一个王朝' },
  { id: 'vn_dinh', name: '丁朝', countryId: 'vietnam', startYear: 968, endYear: 980, color: '#E64A19', summary: '丁部领建立，越南首次独立建国' },
  { id: 'vn_ly', name: '李朝', countryId: 'vietnam', startYear: 1009, endYear: 1225, color: '#F57C00', summary: '李公蕴建立的越南强盛时期' },
  { id: 'vn_le', name: '后黎朝', countryId: 'vietnam', startYear: 1428, endYear: 1789, color: '#EF6C00', summary: '黎利建立的后黎朝长期统治' },
  { id: 'vn_nguyen', name: '阮朝', countryId: 'vietnam', startYear: 1802, endYear: 1945, color: '#FF8F00', summary: '越南最后一个封建王朝，法国殖民开始' },
  { id: 'vn_modern', name: '近现代越南', countryId: 'vietnam', startYear: 1945, endYear: 2026, color: '#FFB300', summary: '从独立到越战再到改革开放的现代历程' },
]

// 波斯/伊朗历史
export const iranPeriods = [
  { id: 'ir_elamite', name: '埃兰文明', countryId: 'iran', startYear: -2700, endYear: -600, color: '#00897B', summary: '伊朗高原上的古老文明' },
  { id: 'ir_achaemenid', name: '阿契美尼德王朝', countryId: 'iran', startYear: -550, endYear: -330, color: '#00796B', summary: '居鲁士大帝建立的世界历史上首个横跨亚欧非的大帝国' },
  { id: 'ir_parthian', name: '帕提亚帝国', countryId: 'iran', startYear: -247, endYear: 224, color: '#009688', summary: '与罗马帝国长期对峙的波斯第二帝国' },
  { id: 'ir_sassanid', name: '萨珊王朝', countryId: 'iran', startYear: 224, endYear: 651, color: '#26A69A', summary: '波斯最后的前伊斯兰帝国' },
  { id: 'ir_samanid', name: '萨曼王朝', countryId: 'iran', startYear: 819, endYear: 999, color: '#4DB6AC', summary: '波斯文化复兴时期' },
  { id: 'ir_safavid', name: '萨法维王朝', countryId: 'iran', startYear: 1501, endYear: 1736, color: '#80CBC4', summary: '什叶派成为国教，现代伊朗版图奠定' },
  { id: 'ir_pahlavi', name: '巴列维王朝', countryId: 'iran', startYear: 1925, endYear: 1979, color: '#B2DFDB', summary: '现代化改革与伊斯兰革命' },
  { id: 'ir_modern', name: '伊斯兰共和国', countryId: 'iran', startYear: 1979, endYear: 2026, color: '#E0F2F1', summary: '霍梅尼革命后的伊朗现代史' },
]

// 奥斯曼帝国/土耳其历史
export const ottomanPeriods = [
  { id: 'ot_seljuk', name: '塞尔柱突厥', countryId: 'ottoman', startYear: 1037, endYear: 1194, color: '#5D4037', summary: '突厥人进入小亚细亚' },
  { id: 'ot_rum', name: '罗姆苏丹国', countryId: 'ottoman', startYear: 1077, endYear: 1308, color: '#6D4C41', summary: '塞尔柱在小亚细亚的继承国' },
  { id: 'ot_ottoman', name: '奥斯曼帝国', countryId: 'ottoman', startYear: 1299, endYear: 1922, color: '#795548', summary: '横跨欧亚非六百年的庞大帝国' },
  { id: 'ot_turkey', name: '土耳其共和国', countryId: 'ottoman', startYear: 1923, endYear: 2026, color: '#8D6E63', summary: '凯末尔革命后的现代土耳其' },
]

// 阿拉伯/阿拉伯帝国历史
export const arabCaliphatePeriods = [
  { id: 'ar_preislamic', name: '前伊斯兰时代', countryId: 'arab-caliphate', startYear: -1000, endYear: 610, color: '#1A237E', summary: '阿拉伯半岛的部落时代' },
  { id: 'ar_rashidun', name: '正统哈里发时期', countryId: 'arab-caliphate', startYear: 632, endYear: 661, color: '#283593', summary: '四大哈里发领导下的阿拉伯扩张初期' },
  { id: 'ar_ummayyad', name: '倭马亚王朝', countryId: 'arab-caliphate', startYear: 661, endYear: 750, color: '#303F9F', summary: '定都大马士革，扩张至伊比利亚和中亚' },
  { id: 'ar_abbasid', name: '阿拔斯王朝', countryId: 'arab-caliphate', startYear: 750, endYear: 1258, color: '#3949AB', summary: '巴格达黄金时代，伊斯兰文明的巅峰' },
  { id: 'ar_fatimid', name: '法蒂玛王朝', countryId: 'arab-caliphate', startYear: 909, endYear: 1171, color: '#3F51B5', summary: '什叶派在北非建立的强大王朝' },
  { id: 'ar_mamluk', name: '马穆鲁克王朝', countryId: 'arab-caliphate', startYear: 1250, endYear: 1517, color: '#5C6BC0', summary: '统治埃及和叙利亚的军事奴隶王朝' },
]

// 蒙古帝国历史
export const mongolPeriods = [
  { id: 'mn_xiongnu', name: '匈奴帝国', countryId: 'mongol', startYear: -209, endYear: 93, color: '#4E342E', summary: '草原上第一个强大的游牧帝国' },
  { id: 'mn_turkic', name: '突厥汗国', countryId: 'mongol', startYear: 552, endYear: 744, color: '#5D4037', summary: '突厥人统治蒙古草原时期' },
  { id: 'mn_liao', name: '辽/契丹', countryId: 'mongol', startYear: 907, endYear: 1125, color: '#6D4C41', summary: '契丹族建立的大辽帝国' },
  { id: 'mn_mongol', name: '大蒙古帝国', countryId: 'mongol', startYear: 1206, endYear: 1368, color: '#8D6E63', summary: '成吉思汗及其后裔建立的人类史上最大陆上帝国' },
  { id: 'mn_yuan', name: '元朝统治期', countryId: 'mongol', startYear: 1260, endYear: 1368, color: '#A1887F', summary: '忽必烈建立元朝统治中国' },
  { id: 'mn_timurid', name: '帖木儿帝国', countryId: 'mongol', startYear: 1370, endYear: 1507, color: '#BCAAA4', summary: '帖木儿重建的中亚蒙古帝国' },
  { id: 'mn_modern', name: '现代蒙古', countryId: 'mongol', startYear: 1921, endYear: 2026, color: '#D7CCC8', summary: '外蒙古独立后的现代国家' },
]

// 英国历史
export const ukPeriods = [
  { id: 'uk_roman_britain', name: '罗马不列颠', countryId: 'uk', startYear: 43, endYear: 410, color: '#1A237E', summary: '罗马帝国统治不列颠岛四百年' },
  { id: 'uk_anglo_saxon', name: '盎格鲁-撒克逊时期', countryId: 'uk', startYear: 450, endYear: 1066, color: '#283593', summary: '日耳曼诸王国割据时期' },
  { id: 'uk_norman', name: '诺曼王朝', countryId: 'uk', startYear: 1066, endYear: 1154, color: '#303F9F', summary: '诺曼征服后的诺曼底公爵统治' },
  { id: 'uk_plantagenet', name: '金雀花王朝', countryId: 'uk', startYear: 1154, endYear: 1485, color: '#3949AB', summary: '包括兰开斯特和约克两大分支，百年战争时期' },
  { id: 'uk_tudor', name: '都铎王朝', countryId: 'uk', startYear: 1485, endYear: 1603, color: '#3F51B5', summary: '亨利八世宗教改革，伊丽莎白一世黄金时代' },
  { id: 'uk_stuart', name: '斯图亚特王朝', countryId: 'uk', startYear: 1603, endYear: 1714, color: '#5C6BC0', summary: '英国内战、光荣革命时期' },
  { id: 'uk_hannover', name: '汉诺威王朝', countryId: 'uk', startYear: 1714, endYear: 1901, color: '#7986CB', summary: '乔治三世至维多利亚女王，工业革命与大英帝国' },
  { id: 'uk_windsor', name: '温莎王朝至今', countryId: 'uk', startYear: 1917, endYear: 2026, color: '#9FA8DA', summary: '从一战到当代的英国王室' },
]

// 法国历史
export const francePeriods = [
  { id: 'fr_gaul', name: '高卢时期', countryId: 'france', startYear: -500, endYear: 486, color: '#4A6741', summary: '凯尔特人统治的高卢地区' },
  { id: 'fr_frankish', name: '法兰克王国', countryId: 'france', startYear: 486, endYear: 843, color: '#5B8C3D', summary: '克洛维建立的日耳曼法兰克人国家' },
  { id: 'fr_capetian', name: '卡佩王朝', countryId: 'france', startYear: 987, endYear: 1328, color: '#1E5631', summary: '法国王室卡佩家族的长期统治' },
  { id: 'fr_valois', name: '瓦卢瓦王朝', countryId: 'france', startYear: 1328, endYear: 1589, color: '#2E7D32', summary: '百年战争与文艺复兴时期的法国' },
  { id: 'fr_bourbon', name: '波旁王朝', countryId: 'france', startYear: 1589, endYear: 1792, color: '#388E3C', summary: '路易十四绝对君主制的黄金时代' },
  { id: 'fr_revolution', name: '大革命时代', countryId: 'france', startYear: 1789, endYear: 1799, color: '#C62828', summary: '攻占巴士底狱，推翻君主制' },
  { id: 'fr_napoleon', name: '拿破仑时代', countryId: 'france', startYear: 1799, endYear: 1815, color: '#1565C0', summary: '第一帝国，横扫欧洲大陆' },
  { id: 'fr_modern', name: '近现代法国', countryId: 'france', startYear: 1815, endYear: 2026, color: '#1976D2', summary: '从复辟到第五共和国' },
]

// 德国历史
export const germanyPeriods = [
  { id: 'de_tribes', name: '日耳曼部落', countryId: 'germany', startYear: -200, endYear: 400, color: '#37474F', summary: '日耳曼人在中欧的活动时期' },
  { id: 'de_carolingian', name: '加洛林时期', countryId: 'germany', startYear: 751, endYear: 843, color: '#455A64', summary: '查理曼大帝的法兰克帝国东部' },
  { id: 'de_holy_roman', name: '神圣罗马帝国', countryId: 'germany', startYear: 962, endYear: 1806, color: '#546E7A', summary: '既不神圣也不罗马更非帝国的松散联邦' },
  { id: 'de_prussia', name: '普鲁士崛起', countryId: 'germany', startYear: 1525, endYear: 1871, color: '#607D8B', summary: '普鲁士逐步主导德意志事务' },
  { id: 'de_empire', name: '德意志帝国', countryId: 'germany', startYear: 1871, endYear: 1918, color: '#78909C', summary: '俾斯麦完成德国统一' },
  { id: 'de_weimar', name: '魏玛共和国', countryId: 'germany', startYear: 1918, endYear: 1933, color: '#90A4AE', summary: '一战后短暂的民主时期' },
  { id: 'de_nazi', name: '第三帝国', countryId: 'germany', startYear: 1933, endYear: 1945, color: '#B71C1C', summary: '希特勒纳粹德国与二战' },
  { id: 'de_divided', name: '分裂与统一', countryId: 'germany', startYear: 1945, endYear: 1990, color: '#B0BEC5', summary: '东西德分裂至柏林墙倒塌统一' },
  { id: 'de_modern', name: '现代德国', countryId: 'germany', startYear: 1990, endYear: 2026, color: '#CFD8DC', summary: '统一后的德国及欧盟核心' },
]

// 意大利历史
export const italyPeriods = [
  { id: 'it_etruscan', name: '伊特鲁里亚', countryId: 'italy', startYear: -800, endYear: -300, color: '#880E4F', summary: '意大利半岛上的伊特鲁里亚文明' },
  { id: 'it_roman_republic', name: '罗马共和国', countryId: 'italy', startYear: -509, endYear: -27, color: '#AD1457', summary: '从王政到共和，征服地中海' },
  { id: 'it_roman_empire', name: '罗马帝国', countryId: 'italy', startYear: -27, endYear: 476, color: '#C2185B', summary: '地中海世界的霸主' },
  { id: 'it_medieval', name: '中世纪城邦', countryId: 'italy', startYear: 476, endYear: 1400, color: '#D81B60', summary: '威尼斯、热那亚、佛罗伦萨等城邦竞争时期' },
  { id: 'it_renaissance', name: '文艺复兴', countryId: 'italy', startYear: 1400, endYear: 1600, color: '#EC407A', summary: '佛罗伦萨为中心的艺术与文化复兴' },
  { id: 'it_unification', name: '统一运动', countryId: 'italy', startYear: 1848, endYear: 1871, color: '#F06292', summary: '加里波第和加富尔推动意大利统一' },
  { id: 'it_modern', name: '现代意大利', countryId: 'italy', startYear: 1871, endYear: 2026, color: '#F48FB1', summary: '从王国到法西斯再到共和国' },
]

// 西班牙历史
export const spainPeriods = [
  { id: 'sp_ibero', name: '伊比利亚原住民', countryId: 'spain', startYear: -1200, endYear: -200, color: '#E65100', summary: '伊比利亚人和凯尔特伊比利亚人时期' },
  { id: 'sp_roman_spain', name: '罗马西班牙行省', countryId: 'spain', startYear: -218, endYear: 476, color: '#EF6C00', summary: '迦太基战争后被罗马征服' },
  { id: 'sp_visigothic', name: '西哥特王国', countryId: 'spain', startYear: 418, endYear: 711, color: '#F57C00', summary: '日耳曼西哥特人统治伊比利亚' },
  { id: 'sp_al_andalus', name: '安达卢斯（摩尔人）', countryId: 'spain', startYear: 711, endYear: 1492, color: '#FB8C00', summary: '穆斯林统治下的伊比利亚南部' },
  { id: 'sp_united', name: '统一西班牙', countryId: 'spain', startYear: 1469, endYear: 1700, color: '#FFA726', summary: '阿拉贡和卡斯蒂利亚联姻后的统一' },
  { id: 'sp_bourbon', name: '波旁王朝', countryId: 'spain', startYear: 1700, endYear: 1931, color: '#FFB74D', summary: '西班牙王位继承战争后的波旁统治' },
  { id: 'sp_civil_war', name: '内战与佛朗哥', countryId: 'spain', startYear: 1931, endYear: 1975, color: '#FFCC80', summary: '第二共和国、内战与独裁' },
  { id: 'sp_modern', name: '现代西班牙', countryId: 'spain', startYear: 1975, endYear: 2026, color: '#FFE0B2', summary: '民主转型后的君主立宪制' },
]

// 俄罗斯历史
export const russiaPeriods = [
  { id: 'ru_kievan', name: '基辅罗斯', countryId: 'russia', startYear: 862, endYear: 1240, color: '#1B5E20', summary: '东斯拉夫人的第一个国家' },
  { id: 'ru_mongol_yoke', name: '蒙古统治时期', countryId: 'russia', startYear: 1240, endYear: 1480, color: '#2E7D32', summary: '金帐汗国对罗斯各公国的统治' },
  { id: 'ru_muscovy', name: '莫斯科大公国', countryId: 'russia', startYear: 1283, endYear: 1547, color: '#388E3C', summary: '莫斯科逐步崛起并统一罗斯' },
  { id: 'ru_tsardom', name: '俄罗斯沙皇国', countryId: 'russia', startYear: 1547, endYear: 1721, color: '#43A047', summary: '伊凡四世称沙皇至彼得大帝改革前' },
  { id: 'ru_empire', name: '俄罗斯帝国', countryId: 'russia', startYear: 1721, endYear: 1917, color: '#4CAF50', summary: '彼得大帝至尼古拉二世的帝国时期' },
  { id: 'ru_soviet', name: '苏联', countryId: 'russia', startYear: 1922, endYear: 1991, color: '#C62828', summary: '苏维埃社会主义共和国联盟' },
  { id: 'ru_modern', name: '俄罗斯联邦', countryId: 'russia', startYear: 1991, endYear: 2026, color: '#81C784', summary: '苏联解体后的现代俄罗斯' },
]

// 希腊历史
export const greecePeriods = [
  { id: 'gr_mycenaean', name: '迈锡尼文明', countryId: 'greece', startYear: -1600, endYear: -1100, color: '#6A1B9A', summary: '青铜时代的希腊文明，特洛伊战争背景' },
  { id: 'gr_archaic', name: '古风时期', countryId: 'greece', startYear: -800, endYear: -480, color: '#7B1FA2', summary: '城邦兴起，希腊字母形成，海外殖民' },
  { id: 'gr_classical', name: '古典时期', countryId: 'greece', startYear: -480, endYear: -323, color: '#8E24AA', summary: '雅典民主巅峰，伯罗奔尼撒战争，亚历山大' },
  { id: 'gr_hellenistic', name: '希腊化时期', countryId: 'greece', startYear: -323, endYear: -31, color: '#9C27B0', summary: '亚历山大帝国的遗产传播' },
  { id: 'gr_byzantine', name: '拜占庭帝国', countryId: 'greece', startYear: 330, endYear: 1453, color: '#AB47BC', summary: '东罗马帝国，希腊正教文化中心' },
  { id: 'gr_ottoman', name: '奥斯曼统治', countryId: 'greece', startYear: 1453, endYear: 1821, color: '#BA68C8', summary: '奥斯曼帝国统治希腊四百年' },
  { id: 'gr_independent', name: '独立后的希腊', countryId: 'greece', startYear: 1832, endYear: 2026, color: '#CE93D8', summary: '从王国到现代共和国' },
]

// 葡萄牙历史
export const portugalPeriods = [
  { id: 'pt_county', name: '葡萄牙伯爵国', countryId: 'portugal', startYear: 868, endYear: 1139, color: '#E65100', summary: '阿斯图里亚斯王国的附庸国' },
  { id: 'pt_kingdom', name: '葡萄牙王国', countryId: 'portugal', startYear: 1139, endYear: 1910, color: '#EF6C00', summary: '欧洲最古老的单一民族国家之一' },
  { id: 'pt_age_discovery', name: '大航海时代', countryId: 'portugal', startYear: 1415, endYear: 1580, color: '#F57C00', summary: '恩里克王子航海学校，达伽马开辟印度航线' },
  { id: 'pt_union', name: '伊比利亚联盟', countryId: 'portugal', startYear: 1580, endYear: 1640, color: '#FB8C00', summary: '被西班牙哈布斯堡王朝合并统治' },
  { id: 'pt_empire', name: '葡萄牙帝国鼎盛', countryId: 'portugal', startYear: 1640, endYear: 1822, color: '#FFA726', summary: '恢复独立后巴西黄金时代' },
  { id: 'pt_modern', name: '现代葡萄牙', countryId: 'portugal', startYear: 1910, endYear: 2026, color: '#FFB74D', summary: '从共和国到欧盟成员国' },
]

// 荷兰历史
export const netherlandsPeriods = [
  { id: 'nl_burgundian', name: '勃艮第尼德兰', countryId: 'netherlands', startYear: 1384, endYear: 1482, color: '#01579B', summary: '勃艮第公爵统治低地地区' },
  { id: 'nl_habsburg', name: '哈布斯堡尼德兰', countryId: 'netherlands', startYear: 1482, endYear: 1581, color: '#0277BD', summary: '神圣罗马帝国皇帝统治的低地十七省' },
  { id: 'nl_dutch_golden', name: '荷兰黄金时代', countryId: 'netherlands', startYear: 1581, endYear: 1702, color: '#0288D1', summary: '荷兰东印度公司，伦勃朗，全球海上贸易霸权' },
  { id: 'nl_patriot', name: '爱国者运动', countryId: 'netherlands', startYear: 1780, endYear: 1795, color: '#039BE5', summary: '反对奥兰治亲王的民主运动' },
  { id: 'nl_kingdom', name: '荷兰王国', countryId: 'netherlands', startYear: 1815, endYear: 2026, color: '#03A9F4', summary: '维也纳会议确立的君主立宪国' },
]

// 古罗马历史
export const romePeriods = [
  { id: 'rm_kings', name: '王政时期', countryId: 'rome', startYear: -753, endYear: -509, color: '#BF360C', summary: '罗慕路斯建城的七王时期' },
  { id: 'rm_republic', name: '罗马共和国', countryId: 'rome', startYear: -509, endYear: -27, color: '#D32F2F', summary: '执政官制度，布匿战争，征服地中海' },
  { id: 'rm_empire', name: '罗马帝国', countryId: 'rome', startYear: -27, endYear: 395, color: '#E53935', summary: '奥古斯都至狄奥多西，帝国全盛与分裂' },
  { id: 'rm_western', name: '西罗马帝国', countryId: 'rome', startYear: 395, endYear: 476, color: '#EF5350', summary: '西半部的衰亡与蛮族入侵' },
  { id: 'rm_eastern', name: '东罗马/拜占庭', countryId: 'rome', startYear: 395, endYear: 1453, color: '#E57373', summary: '延续千年的东罗马帝国' },
]

// 埃及历史
export const egyptPeriods = [
  { id: 'eg_old_kingdom', name: '古王国', countryId: 'egypt', startYear: -2686, endYear: -2181, color: '#FFD54F', summary: '金字塔建造时期，法老集权' },
  { id: 'eg_middle_kingdom', name: '中王国', countryId: 'egypt', startYear: -2055, endYear: -1650, color: '#FFCA28', summary: '埃及古典文学与艺术的复兴' },
  { id: 'eg_new_kingdom', name: '新王国', countryId: 'egypt', startYear: -1550, endYear: -1077, color: '#FFB300', summary: '帝国扩张时期，图坦卡蒙、拉美西斯二世' },
  { id: 'eg_ptolemaic', name: '托勒密王朝', countryId: 'egypt', startYear: -305, endYear: -30, color: '#FFA000', summary: '亚历山大大将托勒密建立的希腊化埃及' },
  { id: 'eg_roman_egypt', name: '罗马/拜占庭埃及', countryId: 'egypt', startYear: -30, endYear: 641, color: '#FF8F00', summary: '作为罗马行省的埃及' },
  { id: 'eg_islamic', name: '伊斯兰时期', countryId: 'egypt', startYear: 641, endYear: 1517, color: '#FF6F00', summary: '阿拉伯征服后的法蒂玛与马穆鲁克' },
  { id: 'eg_ottoman', name: '奥斯曼埃及', countryId: 'egypt', startYear: 1517, endYear: 1882, color: '#F57C00', summary: '奥斯曼帝国治下的埃及' },
  { id: 'eg_modern', name: '现代埃及', countryId: 'egypt', startYear: 1882, endYear: 2026, color: '#F9A825', summary: '英国保护国到共和国' },
]

// 美国历史
export const usaPeriods = [
  { id: 'us_colonial', name: '殖民地时期', countryId: 'usa', startYear: 1607, endYear: 1776, color: '#1A237E', summary: '十三州殖民地的发展' },
  { id: 'us_revolution', name: '独立战争与建国', countryId: 'usa', startYear: 1776, endYear: 1789, color: '#283593', summary: '独立宣言、宪法与华盛顿总统' },
  { id: 'us_antebellum', name: '西扩与南北分裂', countryId: 'usa', startYear: 1789, endYear: 1861, color: '#303F9F', summary: '西进运动、杰克逊式民主、奴隶制争议' },
  { id: 'us_civil_war', name: '内战与重建', countryId: 'usa', startYear: 1861, endYear: 1877, color: '#3949AB', summary: '南北战争与战后重建' },
  { id: 'us_gilded_age', name: '镀金时代', countryId: 'usa', startYear: 1877, endYear: 1900, color: '#3F51B5', summary: '工业化、垄断资本与移民潮' },
  { id: 'us_progressive', name: '进步时代与大战', countryId: 'usa', startYear: 1900, endYear: 1945, color: '#5C6BC0', summary: '新政、两次世界大战与超级大国崛起' },
  { id: 'us_cold_war', name: '冷战时期', countryId: 'usa', startYear: 1945, endYear: 1991, color: '#7986CB', summary: '与苏联对抗，太空竞赛，越南战争' },
  { id: 'us_modern', name: '当代美国', countryId: 'usa', startYear: 1991, endYear: 2026, color: '#9FA8DA', summary: '单极时刻到反恐战争' },
]

// 加拿大历史
export const canadaPeriods = [
  { id: 'ca_indigenous', name: '原住民时期', countryId: 'canada', startYear: -10000, endYear: 1534, color: '#D84315', summary: '因纽特人、第一民族的漫长历史' },
  { id: 'ca_new_france', name: '新法兰西', countryId: 'canada', startYear: 1534, endYear: 1763, color: '#E64A19', summary: '法国殖民时期的加拿大' },
  { id: 'ca_british_na', name: '英属北美', countryId: 'canada', startYear: 1763, endYear: 1867, color: '#F4511E', summary: '英国接管后的殖民地时期' },
  { id: 'ca_confederation', name: '联邦成立', countryId: 'canada', startYear: 1867, endYear: 1914, color: '#FF5722', summary: '加拿大自治领成立与西部开发' },
  { id: 'ca_world_wars', name: '世界大战与自治', countryId: 'canada', startYear: 1914, endYear: 1982, color: '#FF7043', summary: '两战贡献与《加拿大法案》完全独立' },
  { id: 'ca_modern', name: '现代加拿大', countryId: 'canada', startYear: 1982, endYear: 2026, color: '#FF8A65', summary: '多元文化主义与当代发展' },
]

// 墨西哥历史
export const mexicoPeriods = [
  { id: 'mx_preclassic', name: '前古典时期', countryId: 'mexico', startYear: -1800, endYear: 200, color: '#00695C', summary: '奥尔梅克等早期文明' },
  { id: 'mx_classic', name: '古典时期', countryId: 'mexico', startYear: 200, endYear: 900, color: '#00796B', summary: '特奥蒂瓦坎与玛雅文明高峰' },
  { id: 'mx_postclassic', name: '后古典时期', countryId: 'mexico', startYear: 900, endYear: 1521, color: '#00897B', summary: '托尔特克与阿兹特克帝国' },
  { id: 'mx_colonial', name: '新西班牙总督区', countryId: 'mexico', startYear: 1521, endYear: 1821, color: '#009688', summary: '西班牙殖民统治三百年' },
  { id: 'mx_independent', name: '墨西哥独立后', countryId: 'mexico', startYear: 1821, endYear: 2026, color: '#26A69A', summary: '独立、大革命到现代共和国' },
]

// 阿兹特克历史
export const aztecPeriods = [
  { id: 'az_rise', name: '阿兹特克崛起', countryId: 'aztec', startYear: 1325, endYear: 1428, color: '#880E4F', summary: '从特诺奇蒂特兰建城到三方同盟形成' },
  { id: 'az_empire', name: '阿兹特克帝国', countryId: 'aztec', startYear: 1428, endYear: 1521, color: '#AD1457', summary: '蒙特祖玛二世时期的帝国巅峰' },
  { id: 'az_fall', name: '帝国灭亡', countryId: 'aztec', startYear: 1521, endYear: 1525, color: '#C2185B', summary: '科尔特斯征服与特诺奇蒂特兰陷落' },
]

// 巴西历史
export const brazilPeriods = [
  { id: 'br_colonial', name: '殖民时期', countryId: 'brazil', startYear: 1500, endYear: 1815, color: '#1B5E20', summary: '葡萄牙发现与殖民统治' },
  { id: 'br_united_kingdom', name: '葡-巴-阿尔加维联合王国', countryId: 'brazil', startYear: 1815, endYear: 1822, color: '#2E7D32', summary: '葡萄牙王室逃往巴西期间' },
  { id: 'br_empire', name: '巴西帝国', countryId: 'brazil', startYear: 1822, endYear: 1889, color: '#388E3C', summary: '佩德罗一世至佩德罗二世' },
  { id: 'br_republic', name: '巴西共和国', countryId: 'brazil', startYear: 1889, endYear: 2026, color: '#43A047', summary: '从军政府到民主共和国' },
]

// 阿根廷历史
export const argentinaPeriods = [
  { id: 'ar_colonial', name: '殖民时期', countryId: 'argentina', startYear: 1516, endYear: 1810, color: '#0277BD', summary: '西班牙殖民统治南美南部' },
  { id: 'ar_independence', name: '独立战争', countryId: 'argentina', startYear: 1810, endYear: 1861, color: '#0288D1', summary: '五月革命到国家统一' },
  { id: 'ar_conservative', name: '保守秩序', countryId: 'argentina', startYear: 1861, endYear: 1916, color: '#039BE5', summary: '农业出口繁荣与欧洲移民' },
  { id: 'ar_peronism', name: '庇隆主义时代', countryId: 'argentina', startYear: 1946, endYear: 1983, color: '#03A9F4', summary: '庇隆夫妇、军政府与马岛战争' },
  { id: 'ar_modern', name: '现代阿根廷', countryId: 'argentina', startYear: 1983, endYear: 2026, color: '#29B6F6', summary: '民主重建到当代危机' },
]

// 印加帝国历史
export const incaPeriods = [
  { id: 'ic_origin', name: '印加起源', countryId: 'inca', startYear: 1200, endYear: 1438, color: '#E65100', summary: '库斯科地区的印加部落' },
  { id: 'ic_expansion', name: '帝国扩张', countryId: 'inca', startYear: 1438, endYear: 1533, color: '#EF6C00', summary: '帕查库特至瓦伊纳·卡帕克的快速扩张' },
  { id: 'ic_conquest', name: '西班牙征服', countryId: 'inca', startYear: 1533, endYear: 1572, color: '#F57C00', summary: '皮萨罗入侵至最后的抵抗' },
]

// 玛雅文明历史
export const mayaPeriods = [
  { id: 'my_preclassic', name: '前古典期', countryId: 'maya', startYear: -2000, endYear: 250, color: '#6D4C41', summary: '奥尔梅克影响下的早期村落与城市' },
  { id: 'my_classic', name: '古典期', countryId: 'maya', startYear: 250, endYear: 900, color: '#795548', summary: '蒂卡尔、帕伦克等城邦的全盛与衰落' },
  { id: 'my_postclassic', name: '后古典期', countryId: 'maya', startYear: 900, endYear: 1519, color: '#8D6E63', summary: '奇琴伊察与玛雅潘联盟' },
  { id: 'my_conquest', name: '西班牙征服', countryId: 'maya', startYear: 1519, endYear: 1697, color: '#A1887F', summary: '长达两个世纪的渐进征服过程' },
]

// 澳大利亚历史
export const australiaPeriods = [
  { id: 'au_indigenous', name: '原住民时期', countryId: 'australia', startYear: -65000, endYear: 1770, color: '#C62828', summary: '澳大利亚原住民的六万年历史' },
  { id: 'au_colonial', name: '殖民地时期', countryId: 'australia', startYear: 1770, endYear: 1901, color: '#D32F2F', summary: '库克船长登陆至各殖民地联合' },
  { id: 'au_commonwealth', name: '联邦时期', countryId: 'australia', startYear: 1901, endYear: 2026, color: '#E53935', summary: '澳大利亚联邦成立至今' },
]

// 新西兰历史
export const newZealandPeriods = [
  { id: 'nz_maori', name: '毛利人时期', countryId: 'new-zealand', startYear: 1280, endYear: 1769, color: '#004D40', summary: '毛利人大约在13世纪抵达新西兰' },
  { id: 'nz_colonial', name: '殖民地时期', countryId: 'new-zealand', startYear: 1769, endYear: 1907, color: '#00695C', summary: '库克航行至自治领' },
  { id: 'nz_domination', name: '自治领至现代', countryId: 'new-zealand', startYear: 1907, endYear: 2026, color: '#00796B', summary: '从自治领到独立主权国家' },
]

// 埃塞俄比亚历史
export const ethiopiaPeriods = [
  { id: 'et_aksum', name: '阿克苏姆王国', countryId: 'ethiopia', startYear: 80, endYear: 825, color: '#4A148C', summary: '红海贸易强国，早期接受基督教' },
  { id: 'et_solomonid', name: '所罗门王朝', countryId: 'ethiopia', startYear: 1270, endYear: 1974, color: '#6A1B9A', summary: '非洲最悠久的王朝传统' },
  { id: 'et_modern', name: '现代埃塞俄比亚', countryId: 'ethiopia', startYear: 1974, endYear: 2026, color: '#7B1FA2', summary: '从门格斯图政权到联邦民主共和国' },
]

// 南非历史
export const southAfricaPeriods = [
  { id: 'sa_san khoisan', name: '桑人与科伊桑人', countryId: 'south-africa', startYear: -20000, endYear: 300, color: '#33691E', summary: '南非最早的居民' },
  { id: 'sa_bantu', name: '班图迁徙', countryId: 'south-africa', startYear: 300, endYear: 1487, color: '#558B2F', summary: '班图语族人群向南扩散' },
  { id: 'sa_dutch', name: '荷兰殖民', countryId: 'south-africa', startYear: 1652, endYear: 1795, color: '#689F38', summary: '荷属东印度公司在好望角设立补给站' },
  { id: 'sa_british', name: '英国殖民', countryId: 'south-africa', startYear: 1795, endYear: 1910, color: '#7CB342', summary: '英国夺取控制权，布尔战争' },
  { id: 'sa_apartheid', name: '种族隔离时期', countryId: 'south-africa', startYear: 1910, endYear: 1994, color: '#8BC34A', summary: '种族隔离制度与废除' },
  { id: 'sa_modern', name: '彩虹之国', countryId: 'south-africa', startYear: 1994, endYear: 2026, color: '#9CCC65', summary: '曼德拉之后的民主南非' },
]

// 摩洛哥历史
export const moroccoPeriods = [
  { id: 'mo_phoenician', name: '腓尼基/柏柏尔', countryId: 'morocco', startYear: -1100, endYear: 40, color: '#BF360C', summary: '腓尼基沿海贸易站与柏柏尔内陆王国' },
  { id: 'mo_roman', name: '罗马毛里塔尼亚', countryId: 'morocco', startYear: 40, endYear: 429, color: '#D32F2F', summary: '罗马帝国行省时期' },
  { id: 'mo_idrisid', name: '伊德里斯王朝', countryId: 'morocco', startYear: 788, endYear: 974, color: '#E64A19', summary: '摩洛哥的第一个穆斯林王朝' },
  { id: 'mo_almoravid', name: '穆拉比特王朝', countryId: 'morocco', startYear: 1056, endYear: 1147, color: '#E53935', summary: '柏柏尔人的跨撒哈拉帝国' },
  { id: 'mo_marinid', name: '马里尼德王朝', countryId: 'morocco', startYear: 1244, endYear: 1465, color: '#F44336', summary: '取代穆拉比特的新柏柏尔王朝' },
  { id: 'mo_saadi', name: '萨阿德王朝', countryId: 'morocco', startYear: 1554, endYear: 1659, color: '#EF5350', summary: '击败葡萄牙入侵，控制黄金贸易' },
  { id: 'mo_alaouite', name: '阿拉维王朝至今', countryId: 'morocco', startYear: 1666, endYear: 2026, color: '#E57373', summary: '现存最古老的皇室家族之一' },
]

// 迦太基历史
export const carthagePeriods = [
  { id: 'ct_phoenician', name: '腓尼基殖民地', countryId: 'carthage', startYear: -814, endYear: -600, color: '#01579B', summary: '推罗公主艾莉莎建立迦太基城' },
  { id: 'ct_empire', name: '迦太基帝国', countryId: 'carthage', startYear: -600, endYear: -201, color: '#0277BD', summary: '地中海商业霸主，与罗马争夺西西里' },
  { id: 'ct_destruction', name: '布匿战争与毁灭', countryId: 'carthage', startYear: -264, endYear: -146, color: '#0288D1', summary: '三次布匿战争最终导致迦太基彻底毁灭' },
]

// 合并所有朝代——覆盖全部国家
export const allDynasties = [
  // === 独立数组导出的朝代数据 ===
  ...dynasties,
  ...japanEras,
  ...koreaDynasties,
  ...indiaPeriods,
  ...thailandPeriods,
  ...vietnamPeriods,
  ...iranPeriods,
  ...ottomanPeriods,
  ...arabCaliphatePeriods,
  ...mongolPeriods,
  // 欧洲
  ...ukPeriods,
  ...francePeriods,
  ...germanyPeriods,
  ...italyPeriods,
  ...spainPeriods,
  ...russiaPeriods,
  ...greecePeriods,
  ...portugalPeriods,
  ...netherlandsPeriods,
  // 地中海/北非
  ...romePeriods,
  ...egyptPeriods,
  ...carthagePeriods,
  ...moroccoPeriods,
  ...ethiopiaPeriods,
  ...southAfricaPeriods,
  // 北美
  ...usaPeriods,
  ...canadaPeriods,
  ...mexicoPeriods,
  ...aztecPeriods,
  // 南美
  ...brazilPeriods,
  ...argentinaPeriods,
  ...incaPeriods,
  ...mayaPeriods,
  // 大洋洲
  ...australiaPeriods,
  ...newZealandPeriods,
  // 波斯帝国（已灭亡）
  { id: 'pe_achaemenid', name: '阿契美尼德王朝', countryId: 'persian-empire', startYear: -550, endYear: -330, color: '#FF6F00', summary: '居鲁士大帝建立的世界历史上首个横跨亚欧非的大帝国' },
  { id: 'pe_sassanid', name: '萨珊波斯', countryId: 'persian-empire', startYear: 224, endYear: 651, color: '#F57C00', summary: '波斯最后的前伊斯兰帝国，与罗马帝国长期对峙' },
  { id: 'pe_samanid', name: '萨曼王朝', countryId: 'persian-empire', startYear: 819, endYear: 999, color: '#FF9800', summary: '波斯文化复兴时期' },
  { id: 'pe_safavid', name: '萨法维帝国', countryId: 'persian-empire', startYear: 1501, endYear: 1736, color: '#FFB74D', summary: '什叶派成为国教，现代伊朗版图奠定' },
  { id: 'pe_qajar', name: '卡扎尔王朝', countryId: 'persian-empire', startYear: 1789, endYear: 1925, color: '#FFE082', summary: '近代波斯的最后王朝，后被巴列维取代' },
  // 孔雀王朝（已灭亡）
  { id: 'ma_nanda', name: '难陀王朝', countryId: 'mauryan-empire', startYear: -345, endYear: -322, color: '#E65100', summary: '孔雀王朝的前身' },
  { id: 'ma_maurya', name: '孔雀帝国全盛期', countryId: 'mauryan-empire', startYear: -322, endYear: -185, color: '#FF8F00', summary: '阿育王统治下的印度大一统帝国' },
  { id: 'ma_shunga', name: '巽伽王朝', countryId: 'mauryan-empire', startYear: -185, endYear: -73, color: '#FFB300', summary: '孔雀帝国灭亡后的北印度王朝' },
  // 匈奴帝国（已灭亡）
  { id: 'hn_xiongnu_early', name: '匈奴早期联盟', countryId: 'hunnic-empire', startYear: -209, endYear: -174, color: '#3E2723', summary: '冒顿单于统一匈奴各部' },
  { id: 'hn_xiongnu_peak', name: '匈奴帝国巅峰', countryId: 'hunnic-empire', startYear: -174, endYear: 60, color: '#4E342E', summary: '与汉朝长期对抗的草原霸主' },
  { id: 'hn_huns', name: '匈人入侵欧洲', countryId: 'hunnic-empire', startYear: 370, endYear: 469, color: '#5D4037', summary: '阿提拉领导的匈人对罗马帝国的冲击' },
  // 拜占庭帝国（已灭亡）
  { id: 'by_constantine_founded', name: '君士坦丁堡建立', countryId: 'byzantine', startYear: 330, endYear: 527, color: '#800020', summary: '君士坦丁大帝迁都拜占庭' },
  { id: 'by_justinian', name: '查士丁尼时代', countryId: 'byzantine', startYear: 527, endYear: 565, color: '#A00030', summary: '《查士丁尼法典》与圣索菲亚大教堂' },
  { id: 'by_iconoclasm', name: '圣像破坏时期', countryId: 'byzantine', startYear: 726, endYear: 843, color: '#C00040', summary: '宗教争议与社会动荡' },
  { id: 'by_macedonian', name: '马其顿王朝复兴', countryId: 'byzantine', startYear: 867, endYear: 1057, color: '#D00050', summary: '拜占庭的第二个黄金时代' },
  { id: 'by_komnenos', name: '科穆宁中兴', countryId: 'byzantine', startYear: 1081, endYear: 1185, color: '#E00060', summary: '阿历克塞一世短暂恢复帝国实力' },
  { id: 'by_fall', name: '帝国衰亡至陷落', countryId: 'byzantine', startYear: 1185, endYear: 1453, color: '#F08080', summary: '十字军洗劫君堡至奥斯曼征服' },
  // 神圣罗马帝国（已灭亡）
  { id: 'hre_ottonians', name: '奥托王朝', countryId: 'holy-roman-empire', startYear: 962, endYear: 1024, color: '#1A237E', summary: '奥托一世加冕为神圣罗马皇帝' },
  { id: 'hre_salians', name: '萨利安王朝', countryId: 'holy-roman-empire', startYear: 1024, endYear: 1125, color: '#283593', summary: '主教叙任权之争' },
  { id: 'hre_hohenstaufen', name: '霍亨斯陶芬', countryId: 'holy-roman-empire', startYear: 1138, endYear: 1254, color: '#303F9F', summary: '腓特烈一世的意大利远征' },
  { id: 'hre_luxembourg', name: '卢森堡王朝', countryId: 'holy-roman-empire', startYear: 1308, endYear: 1437, color: '#3949AB', summary: '查理四世黄金诏书' },
  { id: 'hre_habsburg', name: '哈布斯堡统治', countryId: 'holy-roman-empire', startYear: 1438, endYear: 1806, color: '#3F51B5', summary: '哈布斯堡家族主导直至拿破仑解散帝国' },
  // 奥匈帝国（已灭亡）
  { id: 'ah_austria_rise', name: '奥地利崛起', countryId: 'austro-hungarian', startYear: 976, endYear: 1526, color: '#BF360C', summary: '从边区伯爵到哈布斯堡继承匈牙利' },
  { id: 'ah_habsburg_empire', name: '奥地利帝国', countryId: 'austro-hungarian', startYear: 1804, endYear: 1867, color: '#D32F2F', summary: '弗朗茨二世称帝至奥匈妥协' },
  { id: 'ah_dualempire', name: '奥匈双元帝国', countryId: 'austro-hungarian', startYear: 1867, endYear: 1918, color: '#E64A19', summary: '二元君主制，一战解体' },
  // 普鲁士王国（已灭亡）
  { id: 'pr_brandenburg', name: '勃兰登堡选侯国', countryId: 'prussia', startYear: 1417, endYear: 1618, color: '#263238', summary: '霍亨索伦家族统治勃兰登堡' },
  { id: 'pr_branderburg_prussia', name: '勃兰登堡-普鲁士', countryId: 'prussia', startYear: 1618, endYear: 1701, summary: '大选侯弗里德里希·威廉的扩张', color: '#37474F' },
  { id: 'pr_kingdom', name: '普鲁士王国', countryId: 'prussia', startYear: 1701, endYear: 1871, color: '#455A64', summary: '腓特烈大帝到铁血宰相俾斯麦统一德国' },
  // 法兰西第一帝国（已灭亡）
  { id: 'nf_revolution', name: '大革命', countryId: 'napoleonic-france', startYear: 1789, endYear: 1799, color: '#1565C0', summary: '攻占巴士底狱，推翻君主制' },
  { id: 'nf_consulate', name: '执政府', countryId: 'napoleonic-france', startYear: 1799, endYear: 1804, color: '#1976D2', summary: '拿破仑第一执政' },
  { id: 'nf_empire', name: '法兰西第一帝国', countryId: 'napoleonic-france', startYear: 1804, endYear: 1815, color: '#1E88E5', summary: '拿破仑加冕至滑铁卢战败' },
  // 西班牙帝国（已灭亡）
  { id: 'se_unification', name: '西班牙统一', countryId: 'spain-empire', startYear: 1469, endYear: 1492, color: '#C62828', summary: '卡斯蒂利亚和阿拉贡联姻，收复失地运动结束' },
  { id: 'se_peak', name: '帝国鼎盛期', countryId: 'spain-empire', startYear: 1492, endYear: 1700, color: '#D32F2F', summary: '美洲殖民、无敌舰队、日不落帝国初现' },
  { id: 'se_bourbon_spain', name: '波旁西班牙', countryId: 'spain-empire', startYear: 1700, endYear: 1808, color: '#E53935', summary: '波旁王朝统治至拿破仑入侵' },
  { id: 'se_decline', name: '帝国衰落', countryId: 'spain-empire', startYear: 1808, endYear: 1898, color: '#EF5350', summary: '独立战争、美西战争丧失最后殖民地' },
  // 马里帝国（已灭亡）
  { id: 'ml_mali_early', name: '马里早期', countryId: 'mali-empire', startYear: 1230, endYear: 1312, color: '#FF8F00', summary: '松迪亚塔建立马里帝国' },
  { id: 'ml_mansa_musa', name: '曼萨·穆萨时代', countryId: 'mali-empire', startYear: 1312, endYear: 1337, color: '#FFA000', summary: '曼萨·穆萨朝圣，黄金铺路传说' },
  { id: 'ml_decline', name: '帝国衰落', countryId: 'mali-empire', startYear: 1337, endYear: 1600, color: '#FFB300', summary: '图雷格人与桑海崛起取代' },
  // 古埃及（已灭亡）
  { id: 'ae_early_dynastic', name: '早王朝时期', countryId: 'ancient-egypt', startYear: -3100, endYear: -2686, color: '#D4AF37', summary: '上下埃及统一，金字塔建造前' },
  { id: 'ae_old_kingdom', name: '古王国时期', countryId: 'ancient-egypt', startYear: -2686, endYear: -2181, color: '#CFB53B', summary: '吉萨三大金字塔建造时期' },
  { id: 'ae_middle_kingdom', name: '中王国时期', countryId: 'ancient-egypt', startYear: -2055, endYear: -1650, color: '#C9A227', summary: '埃及古典文学与艺术的复兴' },
  { id: 'ae_new_kingdom', name: '新王国时期', countryId: 'ancient-egypt', startYear: -1550, endYear: -1077, color: '#C49818', summary: '图特摩斯三世扩张、拉美西斯二世' },
  { id: 'ae_late_period', name: '后期埃及', countryId: 'ancient-egypt', startYear: -1077, endYear: -332, color: '#BF8E13', summary: '亚述、波斯先后入侵' },
  { id: 'ae_ptolemaic', name: '托勒密埃及', countryId: 'ancient-egypt', startYear: -332, endYear: -30, color: '#B4840E', summary: '亚历山大大将建立的希腊化王朝' },
  // 桑海帝国（已灭亡）
  { id: 'sg_gao', name: '加奥王国', countryId: 'songhai-empire', startYear: 500, endYear: 1010, color: '#795548', summary: '桑海人的前身王国' },
  { id: 'sg_songhai', name: '桑海帝国', countryId: 'songhai-empire', startYear: 1010, endYear: 1591, color: '#8D6E63', summary: '廷巴克图成为学术中心，摩洛哥入侵后衰落' },
  // 祖鲁王国（已灭亡）
  { id: 'zu_rise', name: '祖鲁王国兴起', countryId: 'zulu-kingdom', startYear: 1816, endYear: 1879, color: '#388E3C', summary: '沙卡大王统一祖鲁部落' },
  { id: 'zu_anglo_zulu', name: '英祖战争', countryId: 'zulu-kingdom', startYear: 1879, endYear: 1897, color: '#43A047', summary: '伊散德尔瓦纳战役后最终被吞并' },
  // 因纽特文明
  { id: 'in_thule', name: '图勒人迁徙', countryId: 'inuit-civilization', startYear: 1000, endYear: 1500, color: '#78909C', summary: '因纽特人祖先跨越白令海峡进入北极地区' },
  { id: 'in_contact', name: '欧洲接触时期', countryId: 'inuit-civilization', startYear: 1576, endYear: 1900, color: '#90A4AE', summary: '欧洲探险家与因纽特人的首次接触' },
  { id: 'in_modern', name: '现代因纽特社会', countryId: 'inuit-civilization', startYear: 1900, endYear: 2026, color: '#B0BEC5', summary: '努纳武特区建立与现代自治' },
  // 莫切/纳斯卡文明
  { id: 'mo_moche', name: '莫切文明', countryId: 'moche', startYear: 100, endYear: 700, color: '#C62828', summary: '秘鲁北部的精美陶器和神庙建筑' },
  { id: 'nz_nazca_lines', name: '纳斯卡地画时期', countryId: 'nazca', startYear: 200, endYear: 650, color: '#AD1457', summary: '神秘的纳斯卡线条与地下引水系统' },
  // 新增现代国家数据
  // 沙特阿拉伯
  { id: 'sa_nejd', name: '内志酋长国', countryId: 'saudi-arabia', startYear: 1727, endYear: 1824, color: '#006400', summary: '沙特家族在阿拉伯半岛中部的早期统治' },
  { id: 'sa_second_state', name: '沙特第二王国', countryId: 'saudi-arabia', startYear: 1824, endYear: 1891, color: '#228B22', summary: '利雅得为中心的区域性王国' },
  { id: 'sa_modern', name: '沙特阿拉伯王国', countryId: 'saudi-arabia', startYear: 1932, endYear: 2026, color: '#00AA00', summary: '阿卜杜勒-阿齐兹建国至今的现代王国' },
  // 土耳其共和国
  { id: 'tk_war_independence', name: '独立战争', countryId: 'turkey', startYear: 1919, endYear: 1923, color: '#E03C31', summary: '凯末尔领导抵抗希腊入侵' },
  { id: 'tk_republic', name: '土耳其共和国', countryId: 'turkey', startYear: 1923, endYear: 2026, color: '#DC143C', summary: '凯末尔改革后的现代化进程' },
  // 伊拉克
  { id: 'iq_mesopotamia', name: '美索不达米亚古文明', countryId: 'iraq', startYear: -3500, endYear: -539, color: '#8B4513', summary: '苏美尔、阿卡德、巴比伦、亚述等文明的摇篮' },
  { id: 'iq_abbasid_baghdad', name: '阿拔斯时期的伊拉克', countryId: 'iraq', startYear: 750, endYear: 1258, color: '#A0522D', summary: '巴格达作为阿拔斯首都的辉煌' },
  { id: 'iq_ottoman_iraq', name: '奥斯曼伊拉克', countryId: 'iraq', startYear: 1534, endYear: 1918, color: '#CD853F', summary: '奥斯曼帝国的三个伊拉克行省' },
  { id: 'iq_modern', name: '现代伊拉克', countryId: 'iraq', startYear: 1920, endYear: 2026, color: '#DEB887', summary: '从委任统治到共和国' },
  // 以色列
  { id: 'is_israelite', name: '以色列王国时期', countryId: 'israel', startYear: -1050, endYear: -586, color: '#003893', summary: '大卫王和所罗门王的统一王国' },
  { id: 'is_hasmonean', name: '哈斯蒙尼王朝', countryId: 'israel', startYear: -140, endYear: -37, color: '#0047AB', summary: '马加比起义后独立的犹太王国' },
  { id: 'is_modern', name: '以色列国', countryId: 'israel', startYear: 1948, endYear: 2026, color: '#0066CC', summary: '独立建国至今' },
  // 巴基斯坦
  { id: 'pk_indus_valley', name: '印度河文明', countryId: 'pakistan', startYear: -3300, endYear: -1300, color: '#01411C', summary: '世界上最早的文明之一' },
  { id: 'pk_gandhara', name: '犍陀罗文明', countryId: 'pakistan', startYear: -180, endYear: 600, color: '#006400', summary: '希腊化佛教艺术的发源地' },
  { id: 'pk_mughal_punjab', name: '莫卧儿时期的巴基斯坦', countryId: 'pakistan', startYear: 1526, endYear: 1757, color: '#008000', summary: '拉合尔作为莫卧儿的副都' },
  { id: 'pk_modern', name: '巴基斯坦伊斯兰共和国', countryId: 'pakistan', startYear: 1947, endYear: 2026, color: '#00AA00', summary: '分治后独立建国' },
  // 阿富汗
  { id: 'af_bactria', name: '巴克特里亚王国', countryId: 'afghanistan', startYear: -250, endYear: 125, color: '#000000', summary: '希腊-巴克特里亚在中亚的王国' },
  { id: 'af_ghaznavid', name: '伽色尼王朝', countryId: 'afghanistan', startYear: 963, endYear: 1186, color: '#1C1C1C', summary: '马哈茂德征服印度北部' },
  { id: 'af_durran', name: '杜兰尼帝国', countryId: 'afghanistan', startYear: 1747, endYear: 1823, color: '#333333', summary: '阿富汗的第一个现代国家' },
  { id: 'af_modern', name: '现代阿富汗', countryId: 'afghanistan', startYear: 1919, endYear: 2026, color: '#4D4D4D', summary: '从独立到塔利班政权' },
  // 缅甸
  { id: 'mm_pagan', name: '蒲甘王朝', countryId: 'myanmar', startYear: 849, endYear: 1297, color: '#FDD835', summary: '缅甸第一个统一王国，万塔之城' },
  { id: 'mm_taungoo', name: '东吁王朝', countryId: 'myanmar', startYear: 1510, endYear: 1752, color: '#FBC02D', summary: '第二次缅甸统一' },
  { id: 'mm_konbaung', name: '贡榜王朝', countryId: 'myanmar', startYear: 1752, endYear: 1885, color: '#F9A825', summary: '最后一个缅甸王朝，三次英缅战争后被英国吞并' },
  { id: 'mm_modern', name: '现代缅甸', countryId: 'myanmar', startYear: 1948, endYear: 2026, color: '#FFF176', summary: '独立后至今' },
  // 印度尼西亚
  { id: 'id_srivijaya', name: '室利佛逝帝国', countryId: 'indonesia', startYear: 650, endYear: 1377, color: '#C62828', summary: '海上贸易帝国，控制马六甲海峡' },
  { id: 'id_majapahit', name: '满者伯夷帝国', countryId: 'indonesia', startYear: 1293, endYear: 1527, color: '#D32F2F', summary: '东南亚历史上最强大的陆地帝国' },
  { id: 'id_dutch_ei', name: '荷属东印度', countryId: 'indonesia', startYear: 1800, endYear: 1945, color: '#E53935', summary: '荷兰殖民统治时期' },
  { id: 'id_modern', name: '印度尼西亚共和国', countryId: 'indonesia', startYear: 1945, endYear: 2026, color: '#EF5350', summary: '独立至今' },
  // 菲律宾
  { id: 'ph_precolonial', name: '前殖民时期诸国', countryId: 'philippines', startYear: 900, endYear: 1565, color: '#0038A8', summary: '拉贾国、苏丹国的群岛割据' },
  { id: 'ph_spanish', name: '西班牙殖民地', countryId: 'philippines', startYear: 1565, endYear: 1898, color: '#0046AD', summary: '长达333年的西班牙殖民' },
  { id: 'ph_american', name: '美国统治时期', countryId: 'philippines', startYear: 1898, endYear: 1946, color: '#0055B3', summary: '美西战争后美国接管' },
  { id: 'ph_modern', name: '菲律宾共和国', countryId: 'philippines', startYear: 1946, endYear: 2026, color: '#0064B9', summary: '独立至今' },
  // 比利时
  { id: 'be_burgundian', name: '勃艮第尼德兰', countryId: 'belgium', startYear: 1384, endYear: 1482, color: '#FFD700', summary: '勃艮第公爵统治低地地区南部' },
  { id: 'be_spanish_austrian', name: '西属及奥属南尼德兰', countryId: 'belgium', startYear: 1482, endYear: 1794, color: '#FFC107', summary: '哈布斯堡统治下的南尼德兰' },
  { id: 'be_independent', name: '比利时王国', countryId: 'belgium', startYear: 1830, endYear: 2026, color: '#FFCA28', summary: '独立至今' },
  // 瑞士
  { id: 'ch_old_confederacy', name: '旧瑞士邦联', countryId: 'switzerland', startYear: 1291, endYear: 1798, color: '#D52B1E', summary: '三州结盟开始的中立传统起源' },
  { id: 'ch_mediation_act', name: '调停法案时期', countryId: 'switzerland', startYear: 1803, endYear: 1848, color: '#E53935', summary: '拿破仑调停下的重建' },
  { id: 'ch_federal', name: '瑞士联邦', countryId: 'switzerland', startYear: 1848, endYear: 2026, color: '#EF5350', summary: '现代联邦制中立国' },
  // 奥地利
  { id: 'at_babenberg', name: '巴本堡王朝', countryId: 'austria', startYear: 976, endYear: 1246, color: '#ED2939', summary: '奥地利边疆区的第一个王朝' },
  { id: 'at_habsburg_monarchy', name: '哈布斯堡君主国', countryId: 'austria', startYear: 1278, endYear: 1918, color: '#E31D1A', summary: '哈布斯堡家族统治奥地利六百余年' },
  { id: 'at_republic', name: '奥地利共和国', countryId: 'austria', startYear: 1918, endYear: 2026, color: '#EF4444', summary: '从第一共和国到第二共和国' },
  // 波兰
  { id: 'pl_piast', name: '皮雅斯特王朝', countryId: 'poland', startYear: 966, endYear: 1370, color: '#DC143C', summary: '波兰国家的开端，接受基督教' },
  { id: 'pl_jagiellonian', name: '雅盖隆王朝', countryId: 'poland', startYear: 1386, endYear: 1572, color: '#E34234', summary: '波兰立陶宛联合王国的黄金时代' },
  { id: 'pl_commonwealth', name: '波-立联邦', countryId: 'poland', startYear: 1569, endYear: 1795, color: '#ED4C5C', summary: '贵族民主制的独特政治实验' },
  { id: 'pl_partitioned', name: '被瓜分期', countryId: 'poland', startYear: 1795, endYear: 1918, color: '#F08080', summary: '三国瓜分波兰至复国' },
  { id: 'pl_modern', name: '现代波兰', countryId: 'poland', startYear: 1918, endYear: 2026, color: '#FF6B6B', summary: '复国至今' },
  // 瑞典
  { id: 'se_viking_age', name: '维京时期', countryId: 'sweden', startYear: 793, endYear: 1066, color: '#005293', summary: '维京人从瑞典出发的探险和劫掠' },
  { id: 'se_kalmar_union', name: '卡尔玛联盟', countryId: 'sweden', startYear: 1397, endYear: 1523, color: '#006AA8', summary: '丹麦、挪威、瑞典三国联盟' },
  { id: 'se_swedish_empire', name: '瑞典帝国', countryId: 'sweden', startYear: 1611, endYear: 1718, color: '#0075C9', summary: '古斯塔夫二世的大国时代' },
  { id: 'se_modern', name: '现代瑞典', countryId: 'sweden', startYear: 1814, endYear: 2026, color: '#0088CC', summary: '中立政策至今' },
  // 挪威
  { id: 'no_viking', name: '维京王国', countryId: 'norway', startYear: 872, endYear: 1397, color: '#BA0C2F', summary: '哈拉尔德统一挪威' },
  { id: 'no_denmark_norway', name: '丹麦-挪威', countryId: 'norway', startYear: 1397, endYear: 1814, color: '#C41E3A', summary: '卡尔玛联盟至基尔条约' },
  { id: 'no_swedish_union', name: '瑞挪联盟', countryId: 'norway', startYear: 1814, endYear: 1905, color: '#DF2837', summary: '与瑞典共主至完全独立' },
  { id: 'no_modern', name: '现代挪威', countryId: 'norway', startYear: 1905, endYear: 2026, color: '#EB4D50', summary: '石油发现后的富裕国家' },
  // 丹麦
  { id: 'dk_viking', name: '维京时代', countryId: 'denmark', startYear: 793, endYear: 1047, color: '#C8102E', summary: '克努特大帝的北海帝国' },
  { id: 'dk_kalmar', name: '卡尔玛联盟领袖', countryId: 'denmark', startYear: 1397, endYear: 1523, color: '#D42036', summary: '丹麦主导的北欧联盟' },
  { id: 'dk_absolutism', name: '绝对君主制', countryId: 'denmark', startYear: 1660, endYear: 1849, color: '#E02B40', summary: '弗雷德里克三世的改革' },
  { id: 'dk_modern', name: '现代丹麦', countryId: 'denmark', startYear: 1849, endYear: 2026, color: '#EE3548', summary: '宪政至今' },
  // 芬兰
  { id: 'fi_sweden_rule', name: '瑞典统治期', countryId: 'finland', startYear: 1200, endYear: 1809, color: '#003580', summary: '芬兰作为瑞典东部领土' },
  { id: 'fi_grand_duchy', name: '芬兰大公国', countryId: 'finland', startYear: 1809, endYear: 1917, color: '#0047AB', summary: '俄罗斯治下的自治大公国' },
  { id: 'fi_modern', name: '芬兰共和国', countryId: 'finland', startYear: 1917, endYear: 2026, color: '#0060CD', summary: '独立至今' },
  // 捷克
  { id: 'cz_premysl', name: '普热米斯尔王朝', countryId: 'czech-republic', startYear: 1085, endYear: 1306, color: '#11457E', summary: '波希米亚王国的起源' },
  { id: 'cz_luxembourg_bohemia', name: '卢森堡波希米亚', countryId: 'czech-republic', startYear: 1310, endYear: 1437, color: '#1A5596', summary: '查理四世的黄金时代' },
  { id: 'cz_habsburg', name: '哈布斯堡波希米亚', countryId: 'czech-republic', startYear: 1526, endYear: 1918, color: '#2464AE', summary: '作为哈布斯堡领地的一部分' },
  { id: 'cz_czechoslovakia', name: '捷克斯洛伐克', countryId: 'czech-republic', startYear: 1918, endYear: 1993, color: '#2E73C6', summary: '天鹅绒革命与和平分离' },
  { id: 'cz_czech', name: '捷克共和国', countryId: 'czech-republic', startYear: 1993, endYear: 2026, color: '#3882DE', summary: '独立至今' },
  // 匈牙利
  { id: 'hu_arpad', name: '阿尔帕德王朝', countryId: 'hungary', startYear: 895, endYear: 1301, color: '#CE2939', summary: '马扎尔人征服喀尔巴阡盆地' },
  { id: 'hu_anjou', name: '安茹王朝', countryId: 'hungary', startYear: 1308, endYear: 1386, summary: '查理一世的中兴', color: '#D43F4F' },
  { id: 'hu_habsburg_hu', name: '哈布斯堡匈牙利', countryId: 'hungary', startYear: 1526, endYear: 1918, color: '#E05565', summary: '作为哈布斯堡领地的一部分' },
  { id: 'hu_modern', name: '现代匈牙利', countryId: 'hungary', startYear: 1918, endYear: 2026, color: '#EC6B7B', summary: '独立至今' },
  // 罗马尼亚
  { id: 'ro_dacian', name: '达契亚王国', countryId: 'romania', startYear: -82, endYear: 106, color: '#002B7F', summary: '德凯巴尔国王的达契亚王国' },
  { id: 'ro_principalities', name: '瓦拉chia和摩尔达维亚', countryId: 'romania', startYear: 1330, endYear: 1859, color: '#003DA5', summary: '两个公国的独立发展' },
  { id: 'ro_romania', name: '罗马尼亚王国', countryId: 'romania', startYear: 1881, endYear: 1947, color: '#004FC4', summary: '统一后的王国至人民共和国' },
  { id: 'ro_modern', name: '现代罗马尼亚', countryId: 'romania', startYear: 1989, endYear: 2026, color: '#0062E3', summary: '革命后至今' },
  // 乌克兰
  { id: 'ua_kievan_rus', name: '基辅罗斯', countryId: 'ukraine', startYear: 862, endYear: 1240, color: '#005BBB', summary: '东斯拉夫人的第一个国家' },
  { id: 'ua_cossack', name: '哥萨克酋长国', countryId: 'ukraine', startYear: 1649, endYear: 1764, color: '#006DD0', summary: '哥萨克人在第聂伯河畔的自治' },
  { id: 'ua_ussr', name: '乌克兰SSR', countryId: 'ukraine', startYear: 1922, endYear: 1991, color: '#0080E5', summary: '苏联加盟共和国' },
  { id: 'ua_modern', name: '乌克兰', countryId: 'ukraine', startYear: 1991, endYear: 2026, color: '#0093FA', summary: '独立至今' },
  // 阿尔及利亚
  { id: 'dz_numidian', name: '努米底亚王国', countryId: 'algeria', startYear: -200, endYear: -25, color: '#006233', summary: '与迦太基和罗马竞争的柏柏尔王国' },
  { id: 'dz_ottoman_regency', name: '阿尔及利亚摄政', countryId: 'algeria', startYear: 1516, endYear: 1830, color: '#007A3D', summary: '奥斯曼帝国的海盗基地' },
  { id: 'dz_colonial', name: '法属阿尔及利亚', countryId: 'algeria', startYear: 1830, endYear: 1962, color: '#009247', summary: '法国132年殖民统治' },
  { id: 'dz_modern', name: '阿尔及利亚民主人民共和国', countryId: 'algeria', startYear: 1962, endYear: 2026, color: '#00AB51', summary: '独立至今' },
  // 突尼斯
  { id: 'tn_carthage', name: '迦太基城邦', countryId: 'tunisia', startYear: -814, endYear: -146, color: '#E70013', summary: '地中海商业强权的故乡' },
  { id: 'tn_ifriqiya', name: '伊弗里基亚', countryId: 'tunisia', startYear: 698, endYear: 1574, color: '#F02421', summary: '阿拉伯统治下的突尼斯地区' },
  { id: 'tn_french_protectorate', name: '法国保护国', countryId: 'tunisia', startYear: 1881, endYear: 1956, color: '#F53D3D', summary: '法国殖民时期' },
  { id: 'tn_modern', name: '突尼斯共和国', countryId: 'tunisia', startYear: 1956, endYear: 2026, color: '#FA5656', summary: '独立至今' },
  // 利比亚
  { id: 'ly_phoenician', name: '腓尼基殖民地', countryId: 'libya', startYear: -800, endYear: -200, color: '#000000', summary: '迦太基在北非的贸易站' },
  { id: 'ly_ottoman', name: '奥斯曼的黎波里', countryId: 'libya', startYear: 1551, endYear: 1911, color: '#1C1C1C', summary: '巴巴罗萨兄弟建立的奥斯曼省份' },
  { id: 'ly_italian', name: '意属利比亚', countryId: 'libya', startYear: 1911, endYear: 1943, color: '#333333', summary: '意大利殖民统治' },
  { id: 'ly_modern', name: '利比亚', countryId: 'libya', startYear: 1951, endYear: 2026, color: '#4D4D4D', summary: '独立至今' },
  // 苏丹
  { id: 'sd_nubia', name: '库施王国', countryId: 'sudan', startYear: -800, endYear: 350, color: '#FFFFFF', summary: '纳帕塔和麦罗埃的黑人文明' },
  { id: 'sd_funj', name: '芬吉苏丹国', countryId: 'sudan', startYear: 1504, endYear: 1821, color: '#E0E0E0', summary: '伊斯兰化的努比亚王国' },
  { id: 'sd_anglo_egyptian', name: '英埃共管苏丹', countryId: 'sudan', startYear: 1899, endYear: 1956, color: '#CCCCCC', summary: '英埃双重统治' },
  { id: 'sd_modern', name: '苏丹共和国', countryId: 'sudan', startYear: 1956, endYear: 2026, color: '#BBBBBB', summary: '独立至今' },
  // 肯尼亚
  { id: 'ke_swahili', name: '斯瓦希里城邦', countryId: 'kenya', startYear: 900, endYear: 1500, color: '#000000', summary: '东非海岸的贸易网络中心' },
  { id: 'ke_british_ea', name: '英属东非', countryId: 'kenya', startYear: 1895, endYear: 1963, color: '#1C1C1C', summary: '英国殖民保护国' },
  { id: 'ke_modern', name: '肯尼亚共和国', countryId: 'kenya', startYear: 1963, endYear: 2026, color: '#4D4D4D', summary: '独立至今' },
  // 尼日利亚
  { id: 'ng_benin', name: '贝宁帝国', countryId: 'nigeria', startYear: 1180, endYear: 1897, color: '#008751', summary: '西非著名的青铜艺术王国' },
  { id: 'ng_sokoto_caliphate', name: '索科托哈里发国', countryId: 'nigeria', startYear: 1804, endYear: 1903, color: '#00A066', summary: '富拉尼圣战的产物' },
  { id: 'ng_colonial', name: '英属尼日利亚', countryId: 'nigeria', startYear: 1914, endYear: 1960, color: '#00B97B', summary: '南北保护国合并' },
  { id: 'ng_modern', name: '尼日利亚联邦共和国', countryId: 'nigeria', startYear: 1960, endYear: 2026, color: '#00CE90', summary: '独立至今' },
  // 加纳（现代）
  { id: 'gh_ashanti', name: '阿散蒂王国', countryId: 'ghana-modern', startYear: 1670, endYear: 1957, color: '#CE1126', summary: '强大的阿坎族王国' },
  { id: 'gh_gold_coast', name: '黄金海岸', countryId: 'ghana-modern', startYear: 1482, endYear: 1957, color: '#FCD116', summary: '欧洲殖民者的贸易据点' },
  { id: 'gh_modern', name: '加纳共和国', countryId: 'ghana-modern', startYear: 1957, endYear: 2026, color: '#006B3F', summary: '撒哈拉以南非洲第一个独立国家' },
  // 古巴
  { id: 'cu_precolombian', name: '哥伦布前时期', countryId: 'cuba', startYear: -5000, endYear: 1492, color: '#002A8F', summary: '泰诺人和西沃内人的原始部落' },
  { id: 'cu_spanish', name: '西班牙殖民地', countryId: 'cuba', startYear: 1492, endYear: 1898, color: '#0039A6', summary: '糖业经济与奴隶贸易' },
  { id: 'cu_revolution', name: '革命后', countryId: 'cuba', startYear: 1959, endYear: 2026, color: '#004DBF', summary: '卡斯特罗革命至今' },
  // 危地马拉
  { id: 'gt_maya_classic', name: '玛雅古典期', countryId: 'guatemala', startYear: 250, endYear: 900, color: '#4997D0', summary: '蒂卡尔等玛雅城邦的全盛' },
  { id: 'gt_spanish_cap', name: '危地马拉都督辖区', countryId: 'guatemala', startYear: 1540, endYear: 1821, color: '#68AAD9', summary: '新西班牙总督区的一部分' },
  { id: 'gt_modern', name: '危地马拉共和国', countryId: 'guatemala', startYear: 1821, endYear: 2026, color: '#87BDE2', summary: '独立至今' },
  // 海地
  { id: 'ht_taino', name: '泰诺人时期', countryId: 'haiti', startYear: 1200, endYear: 1492, color: '#00209F', summary: '哥伦布到来前的原住民' },
  { id: 'ht_saint_domingue', name: '圣多明各殖民地', countryId: 'haiti', startYear: 1625, endYear: 1804, color: '#002DBF', summary: '法属圣多明各——世界上最富庶的殖民地' },
  { id: 'ht_revolution', name: '海地革命后', countryId: 'haiti', startYear: 1804, endYear: 2026, color: '#003BD0', summary: '世界第一个黑人共和国' },
  // 多米尼加
  { id: 'do_taino', name: '泰诺人时期', countryId: 'dominican-republic', startYear: 1200, endYear: 1492, color: '#CE1126', summary: '哥伦布到来前的原住民' },
  { id: 'do_spanish', name: '西属伊斯帕尼奥拉', countryId: 'dominican-republic', startYear: 1492, endYear: 1821, color: '#D42034', summary: '欧洲在新大陆的第一块殖民地' },
  { id: 'do_modern', name: '多米尼加共和国', countryId: 'dominican-republic', startYear: 1844, endYear: 2026, color: '#E03C4C', summary: '独立至今' },
  // 智利
  { id: 'cl_mapuche', name: '马普切文明', countryId: 'chile', startYear: -500, endYear: 1541, color: '#D52B1E', summary: '智利中南部原住民' },
  { id: 'cl_colonial', name: '西属智利', countryId: 'chile', startYear: 1541, endYear: 1818, color: '#E03C3C', summary: '佩德罗·德·瓦尔迪维亚征服' },
  { id: 'cl_modern', name: '智利共和国', countryId: 'chile', startYear: 1818, endYear: 2026, color: '#ED4D4D', summary: '独立至今' },
  // 秘鲁
  { id: 'pe_inca_pre', name: '印加之前', countryId: 'peru', startYear: -1000, endYear: 1438, color: '#D91023', summary: '奇穆、瓦里等前印加文明' },
  { id: 'pe_tawantinsuyu', name: '塔万廷苏尤', countryId: 'peru', startYear: 1438, endYear: 1533, color: '#E01E34', summary: '印加帝国本土核心区域' },
  { id: 'pe_viceroyalty', name: '秘鲁总督区', countryId: 'peru', startYear: 1542, endYear: 1824, color: '#E72C42', summary: '南美最重要的西班牙殖民地' },
  { id: 'pe_modern', name: '秘鲁共和国', countryId: 'peru', startYear: 1824, endYear: 2026, color: '#EF4A50', summary: '独立至今' },
  // 哥伦比亚
  { id: 'co_precolombian', name: '哥伦布前文明', countryId: 'colombia', startYear: -1200, endYear: 1500, color: '#FCD116', summary: '穆伊斯卡、泰罗纳等文明' },
  { id: 'co_granada', name: '新格拉纳达总督区', countryId: 'colombia', startYear: 1739, endYear: 1819, color: '#FDCE0E', summary: '西蒙·玻利瓦尔解放' },
  { id: 'co_modern', name: '哥伦比亚共和国', countryId: 'colombia', startYear: 1819, endYear: 2026, color: '#FDE926', summary: '独立至今' },
  // 委内瑞拉
  { id: 've_precolombian', name: '哥伦布前时期', countryId: 'venezuela', startYear: -1000, endYear: 1500, color: '#CF142B', summary: '加勒比沿海的原住民文化' },
  { id: 've_general_captaincy', name: '委内瑞拉都督府', countryId: 'venezuela', startYear: 1777, endYear: 1811, color: '#DF2438', summary: '新格拉纳达总督区的一部分' },
  { id: 've_modern', name: '委内瑞拉玻利瓦尔共和国', countryId: 'venezuela', startYear: 1811, endYear: 2026, color: '#EF3646', summary: '独立至今' },
  // 厄瓜多尔
  { id: 'ec_inca_north', name: '印加北部疆域', countryId: 'ecuador', startYear: 1460, endYear: 1533, color: '#FFD900', summary: '印加帝国向北延伸至厄瓜多尔' },
  { id: 'ec_quito_audiencia', name: '基多检审法院', countryId: 'ecuador', startYear: 1563, endYear: 1822, color: '#FFE133', summary: '新格拉纳达的一部分' },
  { id: 'ec_modern', name: '厄瓜多尔共和国', countryId: 'ecuador', startYear: 1822, endYear: 2026, color: '#FFEA66', summary: '独立至今' },
  // 玻利维亚
  { id: 'bo_tiwanaku', name: '蒂瓦纳库文明', countryId: 'bolivia', startYear: 535, endYear: 1100, color: '#D52B1E', summary: '的的喀喀湖畔的古文明' },
  { id: 'bo_upper_peru', name: '上秘鲁', countryId: 'bolivia', startYear: 1545, endYear: 1825, color: '#E03C3C', summary: '波托西银矿支撑的西班牙殖民地' },
  { id: 'bo_modern', name: '多民族玻利维亚国', countryId: 'bolivia', startYear: 1825, endYear: 2026, color: '#ED4D4D', summary: '以玻利瓦尔命名' },
  // 巴布亚新几内亚
  { id: 'pg_precontact', name: '前接触时期', countryId: 'papua-new-guinea', startYear: -45000, endYear: 1526, color: '#000000', summary: '世界上最古老的连续文化之一' },
  { id: 'pg_australian', name: '澳属领地', countryId: 'papua-new-guinea', startYear: 1884, endYear: 1975, color: '#1C1C1C', summary: '澳大利亚托管' },
  { id: 'pg_modern', name: '巴布亚新几内亚', countryId: 'papua-new-guinea', startYear: 1975, endYear: 2026, color: '#4D4D4D', summary: '独立至今' },
  // 斐济
  { id: 'fj_lapita', name: '拉皮塔文化', countryId: 'fiji', startYear: -1350, endYear: 500, color: '#009E60', summary: '波利尼西亚先民抵达斐济群岛' },
  { id: 'fj_british_colony', name: '英属斐济', countryId: 'fiji', startYear: 1874, endYear: 1970, color: '#00AC6D', summary: '英国殖民时期' },
  { id: 'fj_modern', name: '斐济共和国', countryId: 'fiji', startYear: 1970, endYear: 2026, color: '#00BB7A', summary: '独立至今' },
  // 萨摩亚
  { id: 'ws_lapita', name: '拉皮塔时期', countryId: 'samoa', startYear: -850, endYear: 1250, color: '#CE1126', summary: '最早定居波利尼西亚的人群' },
  { id: 'ws_german_rule', name: '德属萨摩亚', countryId: 'samoa', startYear: 1900, endYear: 1914, color: '#D8203A', summary: '德国短暂的殖民统治' },
  { id: 'ws_modern', name: '萨摩亚独立国', countryId: 'samoa', startYear: 1962, endYear: 2026, color: '#E2304E', summary: '太平洋岛国中第一个独立' },
  // 汤加
  { id: 'to_lapita', name: '拉皮塔时期', countryId: 'tonga', startYear: -850, endYear: 950, color: '#C8102E', summary: '汤加塔布岛的早期定居者' },
  { id: 'to_tu_i_tonga', name: '图伊汤加帝国', countryId: 'tonga', startYear: 950, endYear: 1865, color: '#D42036', summary: '大洋洲上唯一的本土海洋帝国' },
  { id: 'to_british_protect', name: '英国保护国', countryId: 'tonga', startYear: 1900, endYear: 1970, color: '#E03042', summary: '从未失去独立地位的英国保护国' },
  { id: 'to_modern', name: '汤加王国', countryId: 'tonga', startYear: 1970, endYear: 2026, color: '#EE4050', summary: '唯一保留君主制的太平洋岛国' },
]
