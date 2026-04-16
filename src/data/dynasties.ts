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
  { id: 'in_modern', name: '现代印度', countryId: 'india', startYear: 1947, endYear: 2020, color: '#FF9933', summary: '独立建国后的共和国发展历程' },
]

// 泰国（暹罗）历史
export const thailandPeriods = [
  { id: 'th_sukhothai', name: '素可泰王国', countryId: 'thailand', startYear: 1238, endYear: 1438, color: '#795548', summary: '泰国第一个统一王国，泰国文字诞生' },
  { id: 'th_ayutthaya', name: '阿瑜陀耶王国', countryId: 'thailand', startYear: 1351, endYear: 1767, color: '#A1887F', summary: '东南亚最强盛的王国之一，被缅甸攻陷' },
  { id: 'th_bangkok', name: '曼谷王朝（拉达纳哥欣）', countryId: 'thailand', startYear: 1782, endYear: 2020, color: '#8D6E63', summary: '却克里王朝至今仍在统治的泰国现代王朝' },
]

// 越南历史
export const vietnamPeriods = [
  { id: 'vn_hongbang', name: '鸿庞氏', countryId: 'vietnam', startYear: -2879, endYear: -258, color: '#D32F2F', summary: '传说中的越南第一个王朝' },
  { id: 'vn_dinh', name: '丁朝', countryId: 'vietnam', startYear: 968, endYear: 980, color: '#E64A19', summary: '丁部领建立，越南首次独立建国' },
  { id: 'vn_ly', name: '李朝', countryId: 'vietnam', startYear: 1009, endYear: 1225, color: '#F57C00', summary: '李公蕴建立的越南强盛时期' },
  { id: 'vn_le', name: '后黎朝', countryId: 'vietnam', startYear: 1428, endYear: 1789, color: '#EF6C00', summary: '黎利建立的后黎朝长期统治' },
  { id: 'vn_nguyen', name: '阮朝', countryId: 'vietnam', startYear: 1802, endYear: 1945, color: '#FF8F00', summary: '越南最后一个封建王朝，法国殖民开始' },
  { id: 'vn_modern', name: '近现代越南', countryId: 'vietnam', startYear: 1945, endYear: 2020, color: '#FFB300', summary: '从独立到越战再到改革开放的现代历程' },
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
  { id: 'ir_modern', name: '伊斯兰共和国', countryId: 'iran', startYear: 1979, endYear: 2020, color: '#E0F2F1', summary: '霍梅尼革命后的伊朗现代史' },
]

// 奥斯曼帝国/土耳其历史
export const ottomanPeriods = [
  { id: 'ot_seljuk', name: '塞尔柱突厥', countryId: 'ottoman', startYear: 1037, endYear: 1194, color: '#5D4037', summary: '突厥人进入小亚细亚' },
  { id: 'ot_rum', name: '罗姆苏丹国', countryId: 'ottoman', startYear: 1077, endYear: 1308, color: '#6D4C41', summary: '塞尔柱在小亚细亚的继承国' },
  { id: 'ot_ottoman', name: '奥斯曼帝国', countryId: 'ottoman', startYear: 1299, endYear: 1922, color: '#795548', summary: '横跨欧亚非六百年的庞大帝国' },
  { id: 'ot_turkey', name: '土耳其共和国', countryId: 'ottoman', startYear: 1923, endYear: 2020, color: '#8D6E63', summary: '凯末尔革命后的现代土耳其' },
]

// 阿拉伯/阿拉伯帝国历史
export const arabPeriods = [
  { id: 'ar_preislamic', name: '前伊斯兰时代', countryId: 'arab', startYear: -1000, endYear: 610, color: '#1A237E', summary: '阿拉伯半岛的部落时代' },
  { id: 'ar_rashidun', name: '正统哈里发时期', countryId: 'arab', startYear: 632, endYear: 661, color: '#283593', summary: '四大哈里发领导下的阿拉伯扩张初期' },
  { id: 'ar_ummayyad', name: '倭马亚王朝', countryId: 'arab', startYear: 661, endYear: 750, color: '#303F9F', summary: '定都大马士革，扩张至伊比利亚和中亚' },
  { id: 'ar_abbasid', name: '阿拔斯王朝', countryId: 'arab', startYear: 750, endYear: 1258, color: '#3949AB', summary: '巴格达黄金时代，伊斯兰文明的巅峰' },
  { id: 'ar_fatimid', name: '法蒂玛王朝', countryId: 'arab', startYear: 909, endYear: 1171, color: '#3F51B5', summary: '什叶派在北非建立的强大王朝' },
  { id: 'ar_mamluk', name: '马穆鲁克王朝', countryId: 'arab', startYear: 1250, endYear: 1517, color: '#5C6BC0', summary: '统治埃及和叙利亚的军事奴隶王朝' },
  { id: 'ar_modern', name: '现代阿拉伯世界', countryId: 'arab', startYear: 1900, endYear: 2020, color: '#7986CB', summary: '石油时代与现代阿拉伯国家体系' },
]

// 蒙古帝国历史
export const mongolPeriods = [
  { id: 'mn_xiongnu', name: '匈奴帝国', countryId: 'mongol', startYear: -209, endYear: 93, color: '#4E342E', summary: '草原上第一个强大的游牧帝国' },
  { id: 'mn_turkic', name: '突厥汗国', countryId: 'mongol', startYear: 552, endYear: 744, color: '#5D4037', summary: '突厥人统治蒙古草原时期' },
  { id: 'mn_liao', name: '辽/契丹', countryId: 'mongol', startYear: 907, endYear: 1125, color: '#6D4C41', summary: '契丹族建立的大辽帝国' },
  { id: 'mn_mongol', name: '大蒙古帝国', countryId: 'mongol', startYear: 1206, endYear: 1368, color: '#8D6E63', summary: '成吉思汗及其后裔建立的人类史上最大陆上帝国' },
  { id: 'mn_yuan', name: '元朝统治期', countryId: 'mongol', startYear: 1260, endYear: 1368, color: '#A1887F', summary: '忽必烈建立元朝统治中国' },
  { id: 'mn_timurid', name: '帖木儿帝国', countryId: 'mongol', startYear: 1370, endYear: 1507, color: '#BCAAA4', summary: '帖木儿重建的中亚蒙古帝国' },
  { id: 'mn_modern', name: '现代蒙古', countryId: 'mongol', startYear: 1921, endYear: 2020, color: '#D7CCC8', summary: '外蒙古独立后的现代国家' },
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
  { id: 'uk_windsor', name: '温莎王朝至今', countryId: 'uk', startYear: 1917, endYear: 2020, color: '#9FA8DA', summary: '从一战到当代的英国王室' },
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
  { id: 'fr_modern', name: '近现代法国', countryId: 'france', startYear: 1815, endYear: 2020, color: '#1976D2', summary: '从复辟到第五共和国' },
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
  { id: 'de_modern', name: '现代德国', countryId: 'germany', startYear: 1990, endYear: 2020, color: '#CFD8DC', summary: '统一后的德国及欧盟核心' },
]

// 意大利历史
export const italyPeriods = [
  { id: 'it_etruscan', name: '伊特鲁里亚', countryId: 'italy', startYear: -800, endYear: -300, color: '#880E4F', summary: '意大利半岛上的伊特鲁里亚文明' },
  { id: 'it_roman_republic', name: '罗马共和国', countryId: 'italy', startYear: -509, endYear: -27, color: '#AD1457', summary: '从王政到共和，征服地中海' },
  { id: 'it_roman_empire', name: '罗马帝国', countryId: 'italy', startYear: -27, endYear: 476, color: '#C2185B', summary: '地中海世界的霸主' },
  { id: 'it_medieval', name: '中世纪城邦', countryId: 'italy', startYear: 476, endYear: 1400, color: '#D81B60', summary: '威尼斯、热那亚、佛罗伦萨等城邦竞争时期' },
  { id: 'it_renaissance', name: '文艺复兴', countryId: 'italy', startYear: 1400, endYear: 1600, color: '#EC407A', summary: '佛罗伦萨为中心的艺术与文化复兴' },
  { id: 'it_unification', name: '统一运动', countryId: 'italy', startYear: 1848, endYear: 1871, color: '#F06292', summary: '加里波第和加富尔推动意大利统一' },
  { id: 'it_modern', name: '现代意大利', countryId: 'italy', startYear: 1871, endYear: 2020, color: '#F48FB1', summary: '从王国到法西斯再到共和国' },
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
  { id: 'sp_modern', name: '现代西班牙', countryId: 'spain', startYear: 1975, endYear: 2020, color: '#FFE0B2', summary: '民主转型后的君主立宪制' },
]

// 俄罗斯历史
export const russiaPeriods = [
  { id: 'ru_kievan', name: '基辅罗斯', countryId: 'russia', startYear: 862, endYear: 1240, color: '#1B5E20', summary: '东斯拉夫人的第一个国家' },
  { id: 'ru_mongol_yoke', name: '蒙古统治时期', countryId: 'russia', startYear: 1240, endYear: 1480, color: '#2E7D32', summary: '金帐汗国对罗斯各公国的统治' },
  { id: 'ru_muscovy', name: '莫斯科大公国', countryId: 'russia', startYear: 1283, endYear: 1547, color: '#388E3C', summary: '莫斯科逐步崛起并统一罗斯' },
  { id: 'ru_tsardom', name: '俄罗斯沙皇国', countryId: 'russia', startYear: 1547, endYear: 1721, color: '#43A047', summary: '伊凡四世称沙皇至彼得大帝改革前' },
  { id: 'ru_empire', name: '俄罗斯帝国', countryId: 'russia', startYear: 1721, endYear: 1917, color: '#4CAF50', summary: '彼得大帝至尼古拉二世的帝国时期' },
  { id: 'ru_soviet', name: '苏联', countryId: 'russia', startYear: 1922, endYear: 1991, color: '#C62828', summary: '苏维埃社会主义共和国联盟' },
  { id: 'ru_modern', name: '俄罗斯联邦', countryId: 'russia', startYear: 1991, endYear: 2020, color: '#81C784', summary: '苏联解体后的现代俄罗斯' },
]

// 希腊历史
export const greecePeriods = [
  { id: 'gr_mycenaean', name: '迈锡尼文明', countryId: 'greece', startYear: -1600, endYear: -1100, color: '#6A1B9A', summary: '青铜时代的希腊文明，特洛伊战争背景' },
  { id: 'gr_archaic', name: '古风时期', countryId: 'greece', startYear: -800, endYear: -480, color: '#7B1FA2', summary: '城邦兴起，希腊字母形成，海外殖民' },
  { id: 'gr_classical', name: '古典时期', countryId: 'greece', startYear: -480, endYear: -323, color: '#8E24AA', summary: '雅典民主巅峰，伯罗奔尼撒战争，亚历山大' },
  { id: 'gr_hellenistic', name: '希腊化时期', countryId: 'greece', startYear: -323, endYear: -31, color: '#9C27B0', summary: '亚历山大帝国的遗产传播' },
  { id: 'gr_byzantine', name: '拜占庭帝国', countryId: 'greece', startYear: 330, endYear: 1453, color: '#AB47BC', summary: '东罗马帝国，希腊正教文化中心' },
  { id: 'gr_ottoman', name: '奥斯曼统治', countryId: 'greece', startYear: 1453, endYear: 1821, color: '#BA68C8', summary: '奥斯曼帝国统治希腊四百年' },
  { id: 'gr_independent', name: '独立后的希腊', countryId: 'greece', startYear: 1832, endYear: 2020, color: '#CE93D8', summary: '从王国到现代共和国' },
]

// 葡萄牙历史
export const portugalPeriods = [
  { id: 'pt_county', name: '葡萄牙伯爵国', countryId: 'portugal', startYear: 868, endYear: 1139, color: '#E65100', summary: '阿斯图里亚斯王国的附庸国' },
  { id: 'pt_kingdom', name: '葡萄牙王国', countryId: 'portugal', startYear: 1139, endYear: 1910, color: '#EF6C00', summary: '欧洲最古老的单一民族国家之一' },
  { id: 'pt_age_discovery', name: '大航海时代', countryId: 'portugal', startYear: 1415, endYear: 1580, color: '#F57C00', summary: '恩里克王子航海学校，达伽马开辟印度航线' },
  { id: 'pt_union', name: '伊比利亚联盟', countryId: 'portugal', startYear: 1580, endYear: 1640, color: '#FB8C00', summary: '被西班牙哈布斯堡王朝合并统治' },
  { id: 'pt_empire', name: '葡萄牙帝国鼎盛', countryId: 'portugal', startYear: 1640, endYear: 1822, color: '#FFA726', summary: '恢复独立后巴西黄金时代' },
  { id: 'pt_modern', name: '现代葡萄牙', countryId: 'portugal', startYear: 1910, endYear: 2020, color: '#FFB74D', summary: '从共和国到欧盟成员国' },
]

// 荷兰历史
export const netherlandsPeriods = [
  { id: 'nl_burgundian', name: '勃艮第尼德兰', countryId: 'netherlands', startYear: 1384, endYear: 1482, color: '#01579B', summary: '勃艮第公爵统治低地地区' },
  { id: 'nl_habsburg', name: '哈布斯堡尼德兰', countryId: 'netherlands', startYear: 1482, endYear: 1581, color: '#0277BD', summary: '神圣罗马帝国皇帝统治的低地十七省' },
  { id: 'nl_dutch_golden', name: '荷兰黄金时代', countryId: 'netherlands', startYear: 1581, endYear: 1702, color: '#0288D1', summary: '荷兰东印度公司，伦勃朗，全球海上贸易霸权' },
  { id: 'nl_patriot', name: '爱国者运动', countryId: 'netherlands', startYear: 1780, endYear: 1795, color: '#039BE5', summary: '反对奥兰治亲王的民主运动' },
  { id: 'nl_kingdom', name: '荷兰王国', countryId: 'netherlands', startYear: 1815, endYear: 2020, color: '#03A9F4', summary: '维也纳会议确立的君主立宪国' },
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
  { id: 'eg_modern', name: '现代埃及', countryId: 'egypt', startYear: 1882, endYear: 2020, color: '#F9A825', summary: '英国保护国到共和国' },
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
  { id: 'us_modern', name: '当代美国', countryId: 'usa', startYear: 1991, endYear: 2020, color: '#9FA8DA', summary: '单极时刻到反恐战争' },
]

// 加拿大历史
export const canadaPeriods = [
  { id: 'ca_indigenous', name: '原住民时期', countryId: 'canada', startYear: -10000, endYear: 1534, color: '#D84315', summary: '因纽特人、第一民族的漫长历史' },
  { id: 'ca_new_france', name: '新法兰西', countryId: 'canada', startYear: 1534, endYear: 1763, color: '#E64A19', summary: '法国殖民时期的加拿大' },
  { id: 'ca_british_na', name: '英属北美', countryId: 'canada', startYear: 1763, endYear: 1867, color: '#F4511E', summary: '英国接管后的殖民地时期' },
  { id: 'ca_confederation', name: '联邦成立', countryId: 'canada', startYear: 1867, endYear: 1914, color: '#FF5722', summary: '加拿大自治领成立与西部开发' },
  { id: 'ca_world_wars', name: '世界大战与自治', countryId: 'canada', startYear: 1914, endYear: 1982, color: '#FF7043', summary: '两战贡献与《加拿大法案》完全独立' },
  { id: 'ca_modern', name: '现代加拿大', countryId: 'canada', startYear: 1982, endYear: 2020, color: '#FF8A65', summary: '多元文化主义与当代发展' },
]

// 墨西哥历史
export const mexicoPeriods = [
  { id: 'mx_preclassic', name: '前古典时期', countryId: 'mexico', startYear: -1800, endYear: 200, color: '#00695C', summary: '奥尔梅克等早期文明' },
  { id: 'mx_classic', name: '古典时期', countryId: 'mexico', startYear: 200, endYear: 900, color: '#00796B', summary: '特奥蒂瓦坎与玛雅文明高峰' },
  { id: 'mx_postclassic', name: '后古典时期', countryId: 'mexico', startYear: 900, endYear: 1521, color: '#00897B', summary: '托尔特克与阿兹特克帝国' },
  { id: 'mx_colonial', name: '新西班牙总督区', countryId: 'mexico', startYear: 1521, endYear: 1821, color: '#009688', summary: '西班牙殖民统治三百年' },
  { id: 'mx_independent', name: '墨西哥独立后', countryId: 'mexico', startYear: 1821, endYear: 2020, color: '#26A69A', summary: '独立、大革命到现代共和国' },
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
  { id: 'br_republic', name: '巴西共和国', countryId: 'brazil', startYear: 1889, endYear: 2020, color: '#43A047', summary: '从军政府到民主共和国' },
]

// 阿根廷历史
export const argentinaPeriods = [
  { id: 'ar_colonial', name: '殖民时期', countryId: 'argentina', startYear: 1516, endYear: 1810, color: '#0277BD', summary: '西班牙殖民统治南美南部' },
  { id: 'ar_independence', name: '独立战争', countryId: 'argentina', startYear: 1810, endYear: 1861, color: '#0288D1', summary: '五月革命到国家统一' },
  { id: 'ar_conservative', name: '保守秩序', countryId: 'argentina', startYear: 1861, endYear: 1916, color: '#039BE5', summary: '农业出口繁荣与欧洲移民' },
  { id: 'ar_peronism', name: '庇隆主义时代', countryId: 'argentina', startYear: 1946, endYear: 1983, color: '#03A9F4', summary: '庇隆夫妇、军政府与马岛战争' },
  { id: 'ar_modern', name: '现代阿根廷', countryId: 'argentina', startYear: 1983, endYear: 2020, color: '#29B6F6', summary: '民主重建到当代危机' },
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
  { id: 'au_commonwealth', name: '联邦时期', countryId: 'australia', startYear: 1901, endYear: 2020, color: '#E53935', summary: '澳大利亚联邦成立至今' },
]

// 新西兰历史
export const newZealandPeriods = [
  { id: 'nz_maori', name: '毛利人时期', countryId: 'new-zealand', startYear: 1280, endYear: 1769, color: '#004D40', summary: '毛利人大约在13世纪抵达新西兰' },
  { id: 'nz_colonial', name: '殖民地时期', countryId: 'new-zealand', startYear: 1769, endYear: 1907, color: '#00695C', summary: '库克航行至自治领' },
  { id: 'nz_domination', name: '自治领至现代', countryId: 'new-zealand', startYear: 1907, endYear: 2020, color: '#00796B', summary: '从自治领到独立主权国家' },
]

// 埃塞俄比亚历史
export const ethiopiaPeriods = [
  { id: 'et_aksum', name: '阿克苏姆王国', countryId: 'ethiopia', startYear: 80, endYear: 825, color: '#4A148C', summary: '红海贸易强国，早期接受基督教' },
  { id: 'et_solomonid', name: '所罗门王朝', countryId: 'ethiopia', startYear: 1270, endYear: 1974, color: '#6A1B9A', summary: '非洲最悠久的王朝传统' },
  { id: 'et_modern', name: '现代埃塞俄比亚', countryId: 'ethiopia', startYear: 1974, endYear: 2020, color: '#7B1FA2', summary: '从门格斯图政权到联邦民主共和国' },
]

// 南非历史
export const southAfricaPeriods = [
  { id: 'sa_san khoisan', name: '桑人与科伊桑人', countryId: 'south-africa', startYear: -20000, endYear: 300, color: '#33691E', summary: '南非最早的居民' },
  { id: 'sa_bantu', name: '班图迁徙', countryId: 'south-africa', startYear: 300, endYear: 1487, color: '#558B2F', summary: '班图语族人群向南扩散' },
  { id: 'sa_dutch', name: '荷兰殖民', countryId: 'south-africa', startYear: 1652, endYear: 1795, color: '#689F38', summary: '荷属东印度公司在好望角设立补给站' },
  { id: 'sa_british', name: '英国殖民', countryId: 'south-africa', startYear: 1795, endYear: 1910, color: '#7CB342', summary: '英国夺取控制权，布尔战争' },
  { id: 'sa_apartheid', name: '种族隔离时期', countryId: 'south-africa', startYear: 1910, endYear: 1994, color: '#8BC34A', summary: '种族隔离制度与废除' },
  { id: 'sa_modern', name: '彩虹之国', countryId: 'south-africa', startYear: 1994, endYear: 2020, color: '#9CCC65', summary: '曼德拉之后的民主南非' },
]

// 摩洛哥历史
export const moroccoPeriods = [
  { id: 'mo_phoenician', name: '腓尼基/柏柏尔', countryId: 'morocco', startYear: -1100, endYear: 40, color: '#BF360C', summary: '腓尼基沿海贸易站与柏柏尔内陆王国' },
  { id: 'mo_roman', name: '罗马毛里塔尼亚', countryId: 'morocco', startYear: 40, endYear: 429, color: '#D32F2F', summary: '罗马帝国行省时期' },
  { id: 'mo_idrisid', name: '伊德里斯王朝', countryId: 'morocco', startYear: 788, endYear: 974, color: '#E64A19', summary: '摩洛哥的第一个穆斯林王朝' },
  { id: 'mo_almoravid', name: '穆拉比特王朝', countryId: 'morocco', startYear: 1056, endYear: 1147, color: '#E53935', summary: '柏柏尔人的跨撒哈拉帝国' },
  { id: 'mo_marinid', name: '马里尼德王朝', countryId: 'morocco', startYear: 1244, endYear: 1465, color: '#F44336', summary: '取代穆拉比特的新柏柏尔王朝' },
  { id: 'mo_saadi', name: '萨阿德王朝', countryId: 'morocco', startYear: 1554, endYear: 1659, color: '#EF5350', summary: '击败葡萄牙入侵，控制黄金贸易' },
  { id: 'mo_alaouite', name: '阿拉维王朝至今', countryId: 'morocco', startYear: 1666, endYear: 2020, color: '#E57373', summary: '现存最古老的皇室家族之一' },
]

// 迦太基历史
export const carthagePeriods = [
  { id: 'ct_phoenician', name: '腓尼基殖民地', countryId: 'carthage', startYear: -814, endYear: -600, color: '#01579B', summary: '推罗公主艾莉莎建立迦太基城' },
  { id: 'ct_empire', name: '迦太基帝国', countryId: 'carthage', startYear: -600, endYear: -201, color: '#0277BD', summary: '地中海商业霸主，与罗马争夺西西里' },
  { id: 'ct_destruction', name: '布匿战争与毁灭', countryId: 'carthage', startYear: -264, endYear: -146, color: '#0288D1', summary: '三次布匿战争最终导致迦太基彻底毁灭' },
]

// 合并所有朝代——覆盖全部30+个国家
export const allDynasties = [
  ...dynasties,
  ...japanEras,
  ...koreaDynasties,
  ...indiaPeriods,
  ...thailandPeriods,
  ...vietnamPeriods,
  ...iranPeriods,
  ...ottomanPeriods,
  ...arabPeriods,
  ...mongolPeriods,
  ...ukPeriods,
  ...francePeriods,
  ...germanyPeriods,
  ...italyPeriods,
  ...spainPeriods,
  ...russiaPeriods,
  ...greecePeriods,
  ...portugalPeriods,
  ...netherlandsPeriods,
  ...romePeriods,
  ...egyptPeriods,
  ...usaPeriods,
  ...canadaPeriods,
  ...mexicoPeriods,
  ...aztecPeriods,
  ...brazilPeriods,
  ...argentinaPeriods,
  ...incaPeriods,
  ...mayaPeriods,
  ...australiaPeriods,
  ...newZealandPeriods,
  ...ethiopiaPeriods,
  ...southAfricaPeriods,
  ...moroccoPeriods,
  ...carthagePeriods,
]
