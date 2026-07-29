const allData = Array.isArray(window.JOB_OPPORTUNITIES) ? window.JOB_OPPORTUNITIES : [];
const meta = window.JOB_META || {};

// The homepage is deliberately Chinese-first. English-first roles remain in the
// searchable database, but they must not crowd out opportunities the user can
// actually contact today.
const PRIORITY_IDS = [917, 759, 758, 813, 702, 778];

const IDENTITY_ALIASES = Object.freeze({
  95: "qustodio-digital-designer-marketing",
  20: "infiled-emea-graphic-designer",
  23: "top-doctors-marketing-designer",
  184: "ogilvy-liquid-designer-video",
  186: "dm-toys-packaging",
  180: "dragons-senior-graphic-designer-pharma",
  240: "dragons-art-director-wellness-lifestyle",
  320: "intracon-hp-content",
  337: "dragons-mid-graphic-designer-food-beverage",
  35: "steneg-industrial-brand-packaging",
  108: "infiled-emea-graphic-designer",
  167: "top-doctors-marketing-designer",
  169: "wall-street-english-design-lead",
  430: "top-doctors-marketing-designer",
  559: "infiled-emea-graphic-designer",
  852: "steneg-industrial-brand-packaging",
  853: "eladiet-brand-communication-designer",
  889: "dragons-mid-graphic-designer-food-beverage",
  890: "dragons-art-director-wellness-lifestyle",
  891: "dragons-senior-graphic-designer-pharma",
  892: "qustodio-digital-designer-marketing",
  894: "ogilvy-liquid-designer-video",
  897: "dm-toys-packaging",
  898: "intracon-hp-content",
  904: "wall-street-english-design-lead",
  905: "steneg-industrial-brand-packaging",
  906: "infiled-emea-graphic-designer",
  907: "eladiet-brand-communication-designer",
  908: "top-doctors-marketing-designer",
  882: "jobgether-marketing-visual-designer",
  912: "jobgether-marketing-visual-designer",
  111: "alohas-asia-marketing-pr-manager",
  497: "alohas-asia-marketing-pr-manager",
  913: "alohas-asia-marketing-pr-manager",
  77: "trivelta-graphic-designer",
  399: "trivelta-graphic-designer",
  914: "trivelta-graphic-designer",
  469: "onekey-brand-visual-designer",
  917: "onekey-brand-visual-designer",
  126: "huqiao-bilingual-graphic-artist",
  468: "huqiao-bilingual-graphic-artist",
  504: "huqiao-bilingual-graphic-artist",
  918: "huqiao-bilingual-graphic-artist",
});

const CURATED = {
  35: {
    direction: "brand",
    company: "Steneg / 鏈叕寮€宸ヤ笟瀹㈡埛",
    locationKey: "barcelona",
    locationLabel: "Granollers / Barcelona 鍛ㄨ竟",
    statusKey: "live",
    titleZh: "骞抽潰璁捐甯堬紙鍝佺墝娌荤悊銆佸寘瑁呬笌娴佺▼锛?,
    titleEs: "Dise帽ador/a gr谩fico/a 鈥?marca, packaging y procesos",
    reason: "姝ｅ紡鍏ㄨ亴銆佽亴涓氳嫳璇€佹湭鍒楄タ璇姹傦紝鑱岃矗姣斾竴鑸墿鏂欏矖鏇村畬鏁达細鍝佺墝璧勪骇銆佸寘瑁呫€佸睍浼氥€佺洰褰曘€佸嵃鍒枫€佸奖鍍忔敮鎸併€佺礌鏉愬簱銆佺増鏈帶鍒跺拰璁捐娴佺▼鏁板瓧鍖栥€?,
    next: "鐢ㄨ嫳鏂囩畝鍘嗗拰浣滃搧闆嗙敵璇凤紱绐佸嚭 B2B/宸ヤ笟鍝佺墝绯荤粺銆佸寘瑁呫€佸睍浼氬欢灞曘€佸嵃鍓嶄笌鏂囦欢娌荤悊銆傜敱浜庡鎴峰尶鍚嶏紝鍏堥棶闆囦富鍏ㄧО銆佸湴鍧€銆佽柂璧勩€佸悎鍚屽拰娣峰悎鍔炲叕锛屽啀鎻愪緵鏁忔劅璧勬枡銆?,
    language: "楂樻按骞宠亴涓氳嫳璇繀闇€锛涘叕寮€璇存槑鏈垪瑗跨彮鐗欒瑕佹眰",
  },
  559: {
    direction: "brand",
    company: "INFiLED / 瑙嗙埖鍏夋棴",
    chineseFit: true,
    statusKey: "live",
    titleZh: "骞抽潰璁捐甯堬紙鍝佺墝涓庡競鍦鸿瑙夛級",
    titleEs: "Dise帽ador/a gr谩fico/a 鈥?marca y marketing",
    reason: "鐩墠鏈€鍖归厤鐨勫反濉炵綏閭ｆ寮忚璁″矖涔嬩竴銆備腑鍥芥繁鍦冲搧鐗屻€佸反濉炲姙鍏锛屽伐浣滆鐩栧搧鐗屼竴鑷存€с€佹暟瀛椾笌鍗板埛鐗╂枡銆佺綉绔欍€佸睍浼氬拰澶氬競鍦鸿瑙夊欢灞曘€?,
    next: "鐢ㄨ嫳鏂囩畝鍘嗗拰鍝佺墝浣滃搧闆嗘姇棰嗚嫳锛涘啀缁欐娲插尯鎷涜仒浜哄憳琛ヤ竴鏉℃秷鎭紝涓诲姩璇存槑涓枃娌熼€氫笌涓浗鎬婚儴鍗忎綔鑳藉姏銆?,
    language: "鑻辫鍙姇锛涘叕寮€鎻忚堪鏈樉绀鸿タ璇‖闂ㄦ",
    applicationMode: "english",
  },
  759: {
    direction: "brand",
    company: "Insbrand",
    statusKey: "verify",
    titleZh: "鍏艰亴鍝佺墝璁捐甯?,
    titleEs: "Dise帽ador/a de marca a tiempo parcial",
    reason: "鏂瑰悜鏈€璐磋繎浣犵殑鐩爣锛歀ogo銆乂I銆佺綉绔欍€佷骇鍝佽瑙変笌涓浗浼佷笟鍥介檯鍝佺墝鏈嶅姟锛涘叕鍙稿悓鏃跺湪鍖椾含鍜屽反濉炵綏閭ｈ鐐癸紝涓枃娌熼€氫环鍊煎緢楂樸€?,
    next: "鍏堢敤涓枃閭欢鎴?WhatsApp 纭鍏艰亴/鑷敱鑱屼笟鍚堜綔鏄惁浠嶅紑鏀撅紝鍐嶅彂閫?3鈥? 涓渶寮虹殑 VI 涓庢暟瀛楀搧鐗屽欢灞曟渚嬨€?,
    language: "涓枃鐜鍙嬪ソ锛涘厛纭褰撳墠璇█瑕佹眰",
    applicationMode: "chinese",
  },
  758: {
    direction: "social",
    company: "BOHEME 鍜栧暋闈㈠寘杩為攣",
    statusKey: "verify",
    titleZh: "瀹ｄ紶绛栧垝 / 鏂板獟浣撹繍钀?,
    titleEs: "Planificaci贸n promocional y redes sociales",
    reason: "涓嶆槸绾?VI锛屼絾闈炲父鎺ヨ繎鏈湴鍗庝汉鍝佺墝鐨勬暟瀛楀欢灞曪細鎽勫奖銆佺煭瑙嗛銆佸搧鐗屽浼犵墖銆佸皬绾功銆佹姈闊冲拰 Instagram 閮藉湪鑱岃矗涓€?,
    next: "鐩存帴鑱旂郴 Jennifer锛岄檮绀惧獟瑙嗚銆佺煭瑙嗛灏侀潰銆佹椿鍔ㄦ捣鎶ュ拰鍓緫鏍风墖锛涚涓€鍙ヨ瘽璇存槑涓枃鐔熺粌銆佽タ璇鍦ㄥ涔犮€?,
    language: "涓枃娓犻亾锛涘師甯栨湭鏄剧ず楂樿タ璇棬妲?,
    applicationMode: "chinese",
  },
  761: {
    direction: "ecommerce",
    company: "Oasis Roots",
    titleZh: "鐙珛绔欎笌绀句氦濯掍綋杩愯惀",
    titleEs: "Operaciones de web propia y redes sociales",
    reason: "涓枃鍐呭銆佺數鍟嗚瑙夊拰绀惧獟鍝佺墝寤跺睍缁撳悎搴﹂珮锛屾秹鍙?Shopify銆乄ordPress銆佷骇鍝侀〉銆佸皬绾功娆ф床鍖恒€佸浘鐗囪棰戝唴瀹瑰拰 KOL/KOC銆?,
    next: "鍏堥偖浠剁‘璁ゅ矖浣嶄粛寮€鏀撅紝鍐嶅彂閫佺數鍟?Banner銆佷骇鍝佹晠浜嬮〉銆佺ぞ濯掓ā鏉垮拰鐭棰戝皝闈㈡渚嬨€?,
    language: "涓枃鏂囨锛涜タ璇?B1/B2 鎴栬嫳璇彲浣滀负宸ヤ綔璇█",
  },
  704: {
    direction: "ecommerce",
    company: "Yioucloud 鏄撴浜?,
    titleZh: "璁捐 / 缃戠珯 / 鐢靛晢 / 鐭棰戝疄涔?,
    titleEs: "Pr谩cticas de dise帽o, web, e-commerce y v铆deo",
    reason: "瑕嗙洊缇庡伐銆佹捣鎶ャ€佺煭瑙嗛銆佺綉绔欍€佺數鍟嗗拰鍝佺墝鎺ㄥ箍锛屼腑鏂囨矡閫氬弸濂斤紱閫傚悎鐢ㄥ疄涔犲垏鍏ュ反濉炵綏閭ｆ湰鍦版暟瀛楀搧鐗屽伐浣溿€?,
    next: "鍙湁鑳芥彁渚涘鏍″疄涔犲崗璁椂浼樺厛鎶曪紱鍏堝彂涓枃閭欢纭 2026 骞存槸鍚︿粛鎺ユ敹瀹炰範鐢熴€?,
    language: "涓枃鍙嬪ソ锛涢渶瀛︽牎瀹炰範鍗忚",
    applicationMode: "chinese",
  },
  702: {
    direction: "social",
    company: "SALSAWOK / 鍗庡璋冨懗鍝?,
    titleZh: "鐭棰戝唴瀹瑰埗浣?/ 鏂板獟浣?,
    titleEs: "Creaci贸n de v铆deo corto y nuevos medios",
    reason: "鍗庝汉椋熷搧鍝佺墝鐨勫唴瀹硅瑙夊矖浣嶏紝閫傚悎浠庣煭瑙嗛銆佺ぞ濯掕繍钀ヤ笌鍝佺墝鍐呭鍒囧叆锛涚鍒╀俊鎭浉瀵瑰畬鏁达紝涓斿啓鏄庨暱鏈熸嫑鑱樸€?,
    next: "閫氳繃閭欢鎴栧井淇¤闂綋鍓嶇┖缂猴紝浣滃搧闆嗙獊鍑洪鍝佹媿鎽勩€佸壀杈戙€佺ぞ濯掓爮鐩拰鍝佺墝鍐呭绯诲垪銆?,
    language: "涓枃鐜锛涢渶纭鍚堟硶宸ヤ綔韬唤涓庤タ璇姹?,
    applicationMode: "chineseCheck",
  },
  309: {
    direction: "social",
    company: "Absolute Internship",
    statusKey: "live",
    titleZh: "鍒涙剰钀ラ攢瀹炰範锛堟暟瀛楀搧鐗岃瑙?/ 鐭棰戯級",
    titleEs: "Pr谩cticas de marketing creativo 鈥?visual y v铆deo",
    reason: "宸村缃楅偅褰撳墠鍙洿鎺ユ彁浜ょ殑鏁板瓧鍝佺墝宀椾綅锛氳礋璐?LinkedIn銆両nstagram銆乀ikTok銆乊ouTube 鐨勮瑙夎祫浜с€佸皝闈笌鐭棰戯紝瀹樻柟鐢宠琛ㄥ凡瀹炴祴鍙敤銆?,
    next: "鐢ㄨ嫳鏂囩畝鍘?+ 浣滃搧闆嗛摼鎺ユ姇瀹樻柟琛ㄥ崟锛涗綔鍝侀泦棣栭〉鍏堟斁绀惧獟瑙嗚绯荤粺銆佺珫灞忕煭瑙嗛鍜岃法骞冲彴鍝佺墝寤跺睍锛屼笉瑕佸彧鏀?Logo銆?,
    language: "鏈啓瑗胯纭棬妲涳紱鍥介檯鍥㈤槦锛屽缓璁敤鑻辨枃鎶曢€?,
  },
  807: {
    direction: "social",
    company: "TERTIO锛堜富浣撳緟鏍稿疄锛?,
    titleZh: "鍐呭鍒涗綔 / 骞抽潰璁捐涓撳憳",
    titleEs: "Especialista de contenido y dise帽o gr谩fico",
    reason: "鍗庝汉娓犻亾閲屽皯瑙佺殑瀹屾暣瑙嗚鍐呭宀椾綅锛氫骇鍝佹媿鎽勩€佷慨鍥俱€丅anner銆佺ぞ濯掔礌鏉愩€佺煭瑙嗛鍜屽搧鐗岃瑙夌粺涓€閮藉湪鑱岃矗涓紝涓斿師甯栨湭鍐欒タ璇棬妲涖€?,
    next: "鍏堜腑鏂囩數璇濇垨寰俊纭浠嶅湪鎷涖€佸叕鍙稿叏绉板拰鏃ュ父宸ヤ綔璇█锛涚‘璁ゅ悗鍐嶅彂鐢靛晢瑙嗚銆佺ぞ濯掔郴鍒楀拰鐭棰戜綔鍝侀泦锛屼笉鍏堝彂閫佽瘉浠躲€?,
    language: "涓枃鍙厛娌熼€氾紱鍘熷笘鏈啓瑗胯瑕佹眰锛涢渶宸ヤ綔灞呯暀",
    applicationMode: "chineseCheck",
  },
  812: {
    direction: "social",
    company: "FunPlus",
    titleZh: "绀惧尯鍐呭杩愯惀瀹炰範",
    titleEs: "Pr谩cticas de gesti贸n de comunidad y contenido",
    reason: "宸村缃楅偅瀹樻柟褰撳墠宀椾綅锛屼腑鏂囨槑纭槸鍔犲垎椤癸紝鐢宠琛ㄥ彲鎻愪氦銆傚畠涓嶆槸绾璁★紝浣嗚兘杩涘叆涓浗鑳屾櫙娓告垙鍏徃鐨勫垱鎰忋€佺ぞ鍖哄唴瀹瑰拰鍒涗綔鑰呭崗浣滈摼璺€?,
    next: "鐢ㄨ嫳鏂囨姇閫掞紝绐佸嚭涓枃銆佽嫳鏂囥€佹父鎴?绉戞妧鍐呭銆佺ぞ濯掕瑙夊拰鐭棰戞渚嬶紱鍙湁鑳芥弧瓒冲湪璇绘垨涓磋繎姣曚笟鏉′欢鏃朵紭鍏堛€?,
    language: "鑻辫蹇呴渶锛涗腑鏂囧姞鍒嗭紱瑗胯涓嶆槸纭棬妲?,
    applicationMode: "english",
  },
  813: {
    direction: "social",
    company: "涓枃鏁欒偛 / 鍗庝汉绀剧兢椤圭洰锛堜富浣撳緟鏍稿疄锛?,
    statusKey: "verify",
    titleZh: "鍏艰亴鏂板獟浣撳姪鐞嗭紙杩滅▼ / 鐏垫椿锛?,
    titleEs: "Asistente de redes sociales a tiempo parcial",
    reason: "浣庤瑷€闂ㄦ鍜屾暟瀛楀搧鐗屽唴瀹瑰尮閰嶅害寰堥珮锛氭瘡鏈堢害 4 绡囧叕浼楀彿涓?8鈥?2 鏉＄煭瑙嗛锛屽寘鍚帓鐗堛€佸皝闈€佸瓧骞曘€佸彂甯冩枃妗堝強灏忕孩涔︺€乀ikTok銆両nstagram锛涜タ璇粎涓哄姞鍒嗛」銆?,
    next: "鍏堢敤涓枃鐢佃瘽纭鏈烘瀯鍏ㄧО銆佽柂璧勩€佸悎鍚屾垨椤圭洰鍒躲€佹槸鍚︿粛寮€鏀惧拰璇曞仛鏄惁鏈夎柂锛涚‘璁ゅ悗鍙戝叕浼楀彿鎺掔増銆佺ぞ濯掑皝闈綋绯讳笌绔栧睆鐭棰戞渚嬨€?,
    language: "涓枃鍙矡閫氾紱瑗胯浠呭姞鍒嗭紱涓嶅潗鐝€佹椂闂寸伒娲?,
    applicationMode: "chinese",
  },
  778: {
    direction: "production",
    company: "宸村缃楅偅鍗庝汉骞垮憡鍏徃",
    statusKey: "live",
    titleZh: "鍏ㄨ亴骞抽潰璁捐甯?,
    titleEs: "Dise帽ador/a gr谩fico/a a jornada completa",
    reason: "7 鏈?25 鏃ュ湪鍗庝汉閫?ES02 鏄庣‘閲嶅彂锛岃タ鍗庤鍧涘悓鏈熼《甯栵紝娆ф氮/鍗庝俊涔熶簬 7 鏈?22 鏃ラ噸鍙戯紝鏄洰鍓嶇姸鎬佹渶鏄庣‘鐨勫反濉炲崕浜鸿璁″矖銆傚伐浣滃亸鎷涚墝銆佽彍鍗曘€佷紶鍗曘€佸悕鐗囧拰鍗板埛钀藉湴锛涗笉鏄珮绔?VI锛屼絾杩涘叆闂ㄦ鐜板疄銆?,
    next: "浠婂ぉ鍏堝姞寰俊 A644055418锛岀‘璁ゅ叕鍙稿叏绉般€佸湴鍧€銆佸悎鍚屻€佸叏淇濄€佸伐鏃跺拰璇曠敤鏈燂紱纭鍚庡啀鍙戦€?Illustrator銆佽彍鍗曘€佹嫑鐗屻€佹捣鎶ヤ笌鍗板埛钀藉湴浣滃搧銆?,
    language: "闇€瑕佸熀纭€瑗胯涓庡伐浣滃眳鐣?,
    applicationMode: "basicSpanish",
  },
  787: {
    direction: "social",
    company: "EXTRATOOLS",
    titleZh: "鐢靛晢绀惧獟杩愯惀 / 鐭棰戝壀杈?,
    titleEs: "Operaciones de redes y edici贸n de v铆deo",
    reason: "7 鏈?22 鏃ュ彂甯冪殑鍗庝汉鏁板瓧鍝佺墝宀楋紝鑱岃矗浠庨€夐銆佺煭瑙嗛鍓緫涓€鐩村埌 TikTok / Instagram 鍙戝竷鍜屾暟鎹鐩橈紱鍘熷笘娌℃湁鍐欒タ璇‖闂ㄦ銆?,
    next: "閭欢闄?3鈥? 涓珫灞忕煭瑙嗛銆佸皝闈㈡垨璐﹀彿妗堜緥锛涘厛闂槸鍚︽帴鍙楀反濉炶繙绋嬨€佹贩鍚堟垨椤圭洰鍚堜綔锛屽苟纭钖祫鍖洪棿鍜屽伐浣滃眳鐣欒姹傘€?,
    language: "涓枃娓犻亾锛涘師甯栨湭鍐欒タ璇姹?,
    applicationMode: "chinese",
  },
  788: {
    direction: "social",
    company: "宸ㄤ竴鍏徃 / Getafe",
    titleZh: "浜у搧涓庡搧鐗岃棰戞媿鎽?/ 鍓緫",
    titleEs: "Grabaci贸n y edici贸n de v铆deo de marca",
    reason: "7 鏈?22 鏃ュ彂甯冿紝鏄庣‘鍒朵綔浜у搧銆佸搧鐗屻€佽惀閿€涓庡鎴锋渚嬭棰戯紝瑕嗙洊灏忕孩涔︺€佹姈闊炽€佽棰戝彿銆乀ikTok銆乊ouTube锛屽苟涓庡搧鐗岃璁″洟闃熷崗浣溿€?,
    next: "鎶曢€掕棰戜綔鍝侀泦鎴?Reel锛岄偖浠舵爣棰樻寜鍘熷笘鍐欌€滃悕瀛?搴旇仒瑙嗛鍓緫鈥濓紱鍚屾椂纭鏃ュ父璇█銆侀┗鍦轰笌鍑哄樊棰戠巼銆?,
    language: "涓枃娓犻亾锛涘師甯栧啓瑗胯鑹ソ",
  },
  470: {
    direction: "digital",
    company: "Go Getop / Bygetop",
    titleZh: "骞抽潰璁捐 / 涓浗甯傚満鏁板瓧钀ラ攢",
    titleEs: "Dise帽o gr谩fico y marketing digital para China",
    reason: "杩滅▼銆佷腑鏂囧競鍦哄拰鏁板瓧鍝佺墝寤跺睍鍖归厤搴﹂珮锛屾兜鐩栫ぞ濯掋€佸箍鍛娿€侀偖浠躲€佺綉绔欍€佸睍浼氬浘褰㈠強灏忕孩涔︺€佸井淇°€佸井鍗氱瓑骞冲彴銆?,
    next: "鎶曢€掑墠鍏堢‘璁ゆ槸甯﹁柂瀹炰範銆佸吋鑱岄泧浣ｈ繕鏄」鐩埗鑷敱鑱屼笟锛屽啀鍐冲畾鎶曞叆澶氬皯鏃堕棿鍑嗗鐢宠銆?,
    language: "鏅€氳瘽涓庤嫳璇紱杩滅▼",
  },
  1019: {
    direction: "brand",
    company: "Kings League / Kosmos",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona, Spain",
    titleZh: "骞抽潰璁捐甯堬紙Photoshop 鍚堟垚 / 浣撹偛濞变箰瑙嗚锛?,
    titleEs: "Graphic Designer 鈥?Photoshop y fotomontaje",
    reason: "瀹樻柟 Teamtailor 璇︽儏椤典粛鏄剧ず Apply锛岃亴璐ｈ鐩栦綋鑲插ū涔愮ぞ濯掍笌鏁板瓧 campaign銆丳hoto Montage銆丗igma銆両llustrator銆佸搧鐗屼竴鑷存€у拰澶у瀷鐗╂枡锛涗絾褰撳墠 Kings League 鎷涜仒鏉挎病鏈夎繖鏉?requisition锛屽繀椤诲厛纭鏂伴矞搴︺€?,
    next: "鍏堟墦寮€瀹樻柟鐢宠琛ㄧ‘璁ゆ槸鍚︿粛鏀朵欢锛屽啀纭鍚堝悓銆佽柂璧勩€佸姙鍏妭濂忋€佽瑷€鍜岃禌浜嬪懆鏈畨鎺掞紱鑻ユ湁鏁堬紝鐢ㄨ嫳鏂囨潗鏂欑獊鍑洪珮绾?Photoshop 鍚堟垚/淇浘銆佺ぞ濯?campaign銆佹捣鎶?澶у瀷鐗╂枡鍜屽搧鐗岃祫浜ф不鐞嗐€?,
    language: "瀹樻柟椤垫湭鏄庣‘璇█锛涘厛鐢ㄨ嫳鏂囧苟纭瑗胯/璧涗簨娌熼€氳姹?,
    applicationMode: "english",
    changeType: "round50",
  },
  1020: {
    direction: "motion",
    company: "COCUNAT",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / Sant Gervasi",
    titleZh: "Senior Video Ads Designer锛堝搧鐗?脳 Performance 瑙嗛锛?,
    titleEs: "Senior Video Ads Designer / Video Editor (Ads)",
    reason: "瀹樻柟 Personio 褰撳墠 requisition 2210442 鏄剧ず Apply銆丅arcelona銆佸叏鑱屾案涔咃紱鑱岃矗鎶婂搧鐗岃鑼冦€丄I 瑙嗛銆丳remiere/After Effects銆乁GC銆丮eta/TikTok/YouTube 骞垮憡鍜屽鐗堟湰鎬ц兘杩唬杩炲湪涓€璧凤紝浣嗚嫳鏂?瑗胯鏍囬涓嶅悓锛岄渶鍏堢‘璁ゅ伐浣滆瑷€涓庡姙鍏鏉′欢銆?,
    next: "鍏堢‘璁よタ璇€佸姙鍏鍑哄嫟銆佽柂璧勫拰娴嬭瘯锛涙姇閫掓椂鐢?Reel 灞曠ず鍓嶄笁绉?hook銆乁GC/浜у搧鐗囥€佸骞冲彴鐗堟湰銆佸瓧骞?澹伴煶銆丄I 杈呭姪涓庡搧鐗屼竴鑷存€э紝涓嶈鍙彂闈欐€?VI銆?,
    language: "瀹樻柟鑻辨枃椤垫湭鏄庣‘瑗胯锛涘厛纭瀹為檯宸ヤ綔璇█",
    applicationMode: "english",
    changeType: "round51",
  },
  1021: {
    direction: "brand",
    company: "ZOE",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "UK & EU remote",
    titleZh: "鍝佺墝鎬ц兘璁捐甯堬紙Brand Performance锛?,
    titleEs: "Brand Performance Designer",
    reason: "瀹樻柟 Ashby 鏄庣‘ UK & EU銆佸叏鑱屻€佽繙绋嬨€丄pply锛涜亴璐ｈ鐩?Meta/TikTok/YouTube/Pinterest銆佺礌鏉愭湰鍦板寲銆丗igma/Adobe 妯℃澘绯荤粺銆佸搧鐗?DNA 鍜岀害 10% motion銆係pain payroll銆佹椂鍖哄拰楂樹骇 performance 瑕佹眰浠嶉渶纭銆?,
    next: "鍏堥棶 Spain 鏄惁鍦ㄥ疄闄呭彲闆囧浗瀹躲€佸悎鍚?钖祫銆佷骇鍝佸瘎閫佷笌 performance test锛涙潗鏂欐斁闈欐€佸箍鍛婄郴缁熴€乶ative social 鍙樹綋銆乭ook/杩唬銆佹ā鏉垮拰鏁版嵁鍙嶉銆?,
    language: "鑻辫杩滅▼锛涘厛纭鍥㈤槦鏃跺尯鍜岃タ鐝墮闆囦剑鏉′欢",
    applicationMode: "english",
    changeType: "round51",
  },
  1022: {
    direction: "brand",
    company: "Kota",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote / Europe eligibility to confirm",
    titleZh: "鍝佺墝璁捐甯堬紙鍝佺墝璇█涓庢暟瀛楄Е鐐癸級",
    titleEs: "Brand Designer",
    reason: "瀹樻柟 Ashby 鏄剧ず Remote銆佸叏鑱屻€丄pply锛涘矖浣嶆槸 Brand team 棣栦釜鍏ㄨ亴璁捐甯堬紝瑕嗙洊 visual identity銆亀eb銆乴aunch銆乧ampaign銆乻ocial銆乻ales銆乬uidelines銆乼emplates銆乵otion 涓?product-brand alignment銆傚彲闆囧浗瀹舵湭鍏紑銆?,
    next: "鍏堣闂?Spain/EU 鍚堝悓瀹炰綋銆佸彲闆囧浗瀹躲€佹椂鍖恒€佽柂璧勫拰 offsite锛涜嫢鍙姇锛岀敤 identity rationale銆亀eb/landing銆乧ampaign rollout銆佹ā鏉?guidelines銆乵otion 鍜?shipped page 璇佹槑绯荤粺钀藉湴鑳藉姏銆?,
    language: "鑻辫杩滅▼锛涘浗瀹朵笌鏃跺尯闇€鍏堢‘璁?,
    applicationMode: "english",
    changeType: "round51",
  },

  1023: {
    direction: "brand",
    company: "Adsmurai",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid",
    titleZh: "鏁板瓧鑹烘湳鎸囧锛圡iddle锛?,
    titleEs: "Digital Art Director Middle",
    reason: "瀹樻柟 Teamtailor 璇︽儏椤垫樉绀?Barcelona銆丠铆brido銆乮ndefinite 鍜?ENV脥A TU CV锛涜亴璐ｈ鐩?360潞 digital campaigns銆並ey Visual銆乴ook & feel銆乸aid/organic assets銆丄I 涓庤法娓犻亾瑙嗚璐ㄩ噺锛屼絾 Spanish + English 鍜岄〉闈㈢浉鍏宠亴浣嶅垪琛ㄥ啿绐侀渶鍏堢‘璁ゃ€?,
    next: "鍏堢‘璁よ亴浣嶄粛鏀朵欢銆佽瑷€銆佽柂璧勫拰姣忓懆涓ゅぉ杩滅▼锛涜嫢鏈夋晥锛岀敤瑗胯/鑻辫鍙岃鏉愭枡绐佸嚭 campaign concept銆並V銆佽瑙夊彊浜嬨€乻ocial ads銆丄I銆乧opy/design collaboration 鍜屽鎴锋彁妗堛€?,
    language: "Spanish + English锛涘厛纭娴佸埄绋嬪害",
    applicationMode: "spanish",
    changeType: "round52",
  },
  1024: {
    direction: "motion",
    company: "DualEntry",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote EMEA / EU / LATAM / UK",
    titleZh: "楂樼骇鍔ㄦ晥璁捐甯堬紙鍝佺墝 / 浜у搧 / Marketing锛?,
    titleEs: "Senior Motion Designer (Remote)",
    reason: "瀹樻柟 Ashby 鏂?requisition 鏄剧ず Remote (EMEA, NAMER, EU, LATAM, UK)銆佸叏鑱屻€丄pply 鍜?USD45k鈥?5k + equity锛涜鐩?marketing film銆乻ocial ads銆乸roduct demo銆乁I motion 鍜?motion style system锛孍ST overlap 涓?7+ 骞存槸涓昏闂ㄦ銆?,
    next: "鍏堢‘璁?Spain 鍚堝悓銆佸疄闄?EST 閲嶅彔銆佽柂璧勯€傜敤鍖洪棿銆佽偂鏉冨拰璇曞仛锛涚敤 motion-first Reel 灞曠ず brand motion system銆乴ogo/title/transition銆乵arketing film銆乁I/product demo銆丩ottie/Rive 鍜?AI workflow銆?,
    language: "鑻辫锛涢渶瑕嗙洊 New York HQ 鐨?EST 閲嶅彔",
    applicationMode: "english",
    changeType: "round52",
  },
  1025: {
    direction: "motion",
    company: "Siena AI",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote - Europe / contractor",
    titleZh: "鍔ㄦ晥璁捐甯堜笌瑙嗛鍒朵綔浜猴紙鍝佺墝 / 浜у搧鍙戝竷锛?,
    titleEs: "Motion Designer & Video Producer (Contractor)",
    reason: "瀹樻柟 Ashby 绱㈠紩鏄剧ず Remote - Europe銆丆ontract 鍜?Apply锛涜亴璐ｈ鐩栦骇鍝佸彂甯冭棰戙€乥rand motion銆乁I animation銆乻toryboard銆乻ound/music direction 涓?AI-native workflow锛屼絾鐩存帴 ATS 椤甸潰鏈疆鍙繑鍥?JavaScript 搴旂敤澹炽€?,
    next: "鍏堢‘璁?Spain resident 鏄惁鍙 contractor銆佹姤浠?浠樻甯佺銆佺◣鍔′笌鏃跺尯锛涜嫢鍙姇锛岀敤鑻辨枃 motion-first Reel 灞曠ず launch film銆佸搧鐗屽姩鏁堢郴缁熴€乁I motion銆乻toryboard 鍒?final export 鍜?AI workflow銆?,
    language: "鑻辫锛汼pain 鍚堝悓涓庝粯娆捐祫鏍奸渶鍏堢‘璁?,
    applicationMode: "english",
    changeType: "round53",
  },
  1026: {
    direction: "motion",
    company: "Labhouse",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / Spain remote; hybrid rhythm",
    titleZh: "钀ラ攢瑙嗛鍓緫甯堬紙鎬ц兘骞垮憡 / AI 瑙嗛锛?,
    titleEs: "Marketing Video Editor",
    reason: "瀹樻柟 Ashby 鏄剧ず Barcelona銆丼pain (Remote)銆丗ull-time銆丄pply锛涜亴璐ｈ鐩?TikTok/Instagram/Facebook app ads銆乭ooks銆乺etention銆乵otion graphics銆丳remiere/After Effects 鍜?AI creative tools锛岄〉闈㈠悓鏃跺啓鏄庤タ璇笌鑻辫浠ュ強 Barcelona 姣忓懆鑷冲皯涓ゅぉ鍒?Tech City 鐨勬贩鍚堣妭濂忋€?,
    next: "鍏堢‘璁よタ璇伐浣滃己搴︺€佹瘡鍛ㄥ埌宀椼€佽柂璧勫拰 technical case锛涜嫢鍙姇锛岀敤 performance-video Reel 灞曠ず 15鈥?0 绉掑箍鍛娿€乥rand consistency銆乵otion graphics銆丄I-assisted production銆丄/B variants 鍜岀粨鏋滄暟鎹紝涓嶈鍙彂闈欐€佸搧鐗岄〉銆?,
    language: "鑻辫 + 瑗胯锛汢arcelona hybrid 涓?technical case 闇€纭",
    applicationMode: "spanish",
    changeType: "round54",
  },
  1027: {
    direction: "brand",
    company: "Deel",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote / Spain listed; senior web-brand scope",
    titleZh: "鑹烘湳鎸囧锛堢綉绔欒璁?/ 鍝佺墝鏁板瓧绯荤粺锛?,
    titleEs: "Art Director / Web Design",
    reason: "瀹樻柟 Ashby 绱㈠紩鏄庣‘ Remote銆丼pain銆丗ull-time銆丄pply锛涜亴璐ｈ繛鎺ュ搧鐗岃〃杈句笌缃戠珯 performance锛岃鐩栫綉绔欏垱鎰忔柟鍚戙€乄ebsite Design System銆乺esponsive UX/UI銆丆RO/SEO銆佹祴璇曞拰鍙墿灞?web operations锛屼絾 9+ 骞翠笌楂樼骇 portfolio 鏄‖闂ㄦ銆?,
    next: "鍏堢‘璁?Spain 闆囦剑瀹炰綋銆丅arcelona resident 璧勬牸銆佺骇鍒?钖祫銆佸洟闃熸椂鍖哄拰 web portfolio 鏈熸湜锛涜嫢鍖归厤锛岀敤鑻辨枃楂樼骇鏉愭枡灞曠ず浠?VI/brand expression 鍒扮綉绔欒惤鍦般€乼okens/components銆乴anding/CRO銆丄/B 杩唬銆佸彲璁块棶鎬у拰鎬ц兘锛屼笉瑕佸彧灞曠ず logo銆?,
    language: "鑻辫鍥介檯杩滅▼锛汼pain payroll 涓?9+ 骞撮渶纭",
    applicationMode: "english",
    changeType: "round56",
  },};

Object.assign(CURATED, {
  832: {
    direction: "digital",
    company: "Mind the Bridge",
    statusKey: "live",
    titleZh: "鍒濈骇瑙嗚璁捐甯堬紙钀ラ攢 / 绀句氦濯掍綋瀹炰範锛?,
    titleEs: "Dise帽ador/a visual junior (pr谩cticas de marketing y redes)",
    reason: "鏂瑰悜闈炲父璐磋繎鍝佺墝瑙嗚涓庢暟瀛楀欢灞曪細浼佷笟瑙嗚銆佹紨绀烘枃绋裤€佹暟瀛楁椿鍔ㄧ墿鏂欍€佷俊鎭浘鍜岃法骞冲彴绀句氦璧勪骇閮藉湪鑱岃矗鍐咃紱娴佸埄鑻辫鏄繀闇€椤癸紝瑗跨彮鐗欒鎴栨剰澶у埄璇粎涓哄姞鍒嗛」銆?,
    next: "鐢ㄨ嫳鏂囩畝鍘嗗拰浣滃搧闆嗙洿鎺ョ敵璇凤紱棣栭〉鍏堟斁瀹屾暣鍝佺墝绯荤粺銆佹暟瀛楁椿鍔ㄥ欢灞曘€佺ぞ浜ゆā鏉垮拰淇℃伅鍥撅紝骞跺湪姹傝亴淇′腑璇㈤棶瀹炰範鍗忚銆佽柂璧勩€佸悎鍚屾湡闄愪笌灞呯暀瑕佹眰銆?,
    language: "鑻辫蹇呴渶锛涜タ鐝墮璇垨鎰忓ぇ鍒╄浠呬负鍔犲垎椤?,
  },
  833: {
    direction: "brand",
    company: "Proexpo",
    titleZh: "绀句氦濯掍綋涓庡搧鐗屽唴瀹硅礋璐ｄ汉",
    titleEs: "Responsable de redes sociales y contenido de marca",
    reason: "鑱岃矗浠庣ぞ浜ゅ唴瀹规棩鍘嗐€丷eels 鍜屾渚嬪欢浼稿埌瀹樼綉銆佸浼犲唽銆佹紨绀烘枃绋裤€佽壓鏈寚瀵间笌 AI 瑙嗚锛屽拰鏁板瓧鍝佺墝寤跺睍楂樺害鍚诲悎锛涗絾浼樼瑗跨彮鐗欒涓庤嫳璇枃妗堟槸鏄庣‘纭棬妲涖€?,
    next: "浣滀负鎸戞垬宀楁姇閫掋€備綔鍝侀泦绐佸嚭楂樼 B2B 鍝佺墝銆佺ぞ浜ゆ爮鐩€佹渚嬪彊浜嬨€佸浼犲唽鍜屾紨绀烘枃绋匡紱鐢宠鏃跺瀹炶鏄庤タ璇按骞筹紝骞惰鏄庢枃妗堟牎瀵规柟妗堛€?,
    language: "鑻辫涓庤タ鐝墮璇紭绉€鏂囨鑳藉姏鍧囦负纭姹?,
  },
  834: {
    direction: "social",
    company: "SNUZIA SL / Twine",
    titleZh: "鐭棰戝唴瀹瑰垱浣滆€?/ 瑙嗛鍓緫锛堣嚜鐢辫亴涓氾級",
    titleEs: "Creador/a de contenido y editor/a de v铆deo freelance",
    reason: "Barcelona 鐜板満鎷嶆憚骞跺壀杈?Instagram Reels銆乀ikTok 涓?Meta 骞垮憡锛屾鏂囦负鑻辨枃涓旀湭鍐欒タ璇姹傦紱瀹冩洿鍋忕ぞ浜ょ煭瑙嗛锛屼笉鏄?VI锛屼笖灞炰簬鑷敱鑱屼笟鍜屽凹鍙や竵浜у搧琛屼笟銆?,
    next: "浼樺厛浠?Twine 鎶曢€掞紱鑻ュ厤璐硅处鍙峰彈闄愶紝鍏堢敤鍏徃瀹樼綉閭璇㈤棶鏄惁鎺ュ彈鐩存帴浣滃搧闆嗐€傛矡閫氬墠纭棰勭畻銆佷氦浠橀噺銆佽澶囥€佺礌鏉愮増鏉冦€佷粯娆捐妭鐐广€佸悎鍚屼富浣撳拰鐜板満鍦板潃銆?,
    language: "鑻辨枃鑱屼綅璇存槑锛涙湭鍐欒タ鐝墮璇姹?,
  },
  835: {
    direction: "brand",
    company: "Revolut",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "瑗跨彮鐗欒繙绋?,
    titleZh: "鍝佺墝骞抽潰璁捐甯堬紙鍝佺墝绯荤粺 / 鍔ㄦ€佽瑙夛級",
    titleEs: "Dise帽ador/a gr谩fico/a de marca 鈥?sistemas y motion",
    reason: "绾搧鐗屾柟鍚戦珮搴﹀尮閰嶏細璐熻矗鍝佺墝鏂囨。銆佽璁＄郴缁熴€佹寚鍗椼€佽瑙夎祫浜у拰鍔ㄦ€佽璁★紱瀹樻柟鑱屼綅浠嶅彲鐢宠锛屽苟鏄庣‘鎺ュ彈瑗跨彮鐗欒繙绋嬶紝鍏紑鎻忚堪娌℃湁瑗胯纭棬妲涖€?,
    next: "鍙粠 Revolut 瀹樻柟鑱屼綅椤垫姇閫掋€傝嫳鏂囦綔鍝侀泦棣栭〉鏀惧畬鏁?VI銆佸搧鐗屾寚鍗椼€佹暟瀛楁笭閬撳欢灞曞拰 motion / storyboard 妗堜緥锛屽苟纭瑗跨彮鐗欏悎鍚屼富浣撲笌钖祫銆?,
    language: "鑻辨枃宀椾綅锛涙湭鍐欒タ鐝墮璇姹?,
  },
  836: {
    direction: "digital",
    company: "Adsmurai",
    titleZh: "鏁板瓧骞抽潰璁捐甯堬紙骞垮憡娲诲姩 / 绀句氦濯掍綋锛?,
    titleEs: "Dise帽ador/a gr谩fico/a digital 鈥?campa帽as y redes",
    reason: "宸ヤ綔瑕嗙洊鍝佺墝瑙勮寖閫傞厤銆佺ぞ浜ゅ箍鍛娿€乀ikTok 瑙嗛銆佹紨绀烘枃绋垮拰瀹ｄ紶鍐岋紝鏁板瓧鍝佺墝寤跺睍寰堝畬鏁达紱浣嗗鎴锋矡閫氶渶瑕佹祦鍒╄タ鐝墮璇拰鑻辫銆?,
    next: "浣滀负鎸戞垬宀楁姇閫掋€備綔鍝侀泦绐佸嚭鏁村鏁板瓧娲诲姩銆佸灏哄閫傞厤銆佺ぞ浜ゅ箍鍛婂拰鐭棰戯紝涓嶈鍙斁 Logo锛涙棤娉曡繘琛岃タ璇細璁椂鍏堥檷浣庝紭鍏堢骇銆?,
    language: "娴佸埄瑗跨彮鐗欒涓庤嫳璇负纭姹?,
  },
  837: {
    direction: "social",
    company: "All Yours",
    titleZh: "绀句氦濯掍綋瑙嗛鍐呭鍒涗綔鑰?,
    titleEs: "Creador/a de contenido de v铆deo para redes",
    reason: "棣欐按鍜?clean beauty 鍝佺墝鐨勫畬鏁磋棰戝唴瀹瑰矖锛氭蹇点€佹媿鎽勩€丆apCut 鍓緫銆佽处鍙峰闀裤€佽揪浜轰笌 UGC 閮藉湪鑱岃矗涓紱椤甸潰浠嶅彲鎵撳紑涓旀爣鏄庡勾钖€?,
    next: "鍙湁鑳界敤瑗胯鍐欐枃妗堛€佺鐞嗚瘎璁哄苟鍑洪暅鏃跺啀鎶曪紱浣滃搧闆嗚仛鐒︾編瀹逛骇鍝佽棰戙€両nstagram / TikTok 绯诲垪鍜屽搧鐗岃姘斾竴鑷存€с€?,
    language: "Castellano 蹇呴渶锛涜嫳璇?C2",
  },
  838: {
    direction: "brand",
    company: "eMascar贸",
    locationKey: "remote",
    locationLabel: "杩滅▼ / Barcelona 鍥㈤槦",
    titleZh: "璧勬繁鍝佺墝璁捐甯堬紙杩滅▼鑷敱鑱屼笟锛?,
    titleEs: "Dise帽ador/a senior de marca freelance",
    reason: "鑱岃矗鍑犱箮灏辨槸瀹屾暣 VI 涓庢暟瀛楀欢灞曪細Logo銆佸瓧浣撱€佽壊褰┿€佺綉鏍笺€佸浘褰€佸搧鐗屾墜鍐屻€佹暟瀛楃郴缁熷拰 motion锛涗絾瑕佹眰 7 骞翠互涓婄粡楠岋紝涓斿畼缃戝綋鍓嶆竻鍗曟湭鍗曞垪璇ヨ亴浣嶃€?,
    next: "鍏堥€氳繃瀹樻柟浜烘墠琛ㄥ崟纭宀椾綅褰撳墠鏄惁寮€鏀惧拰椤圭洰宸ヤ綔璇█锛涜幏寰楄偗瀹氱瓟澶嶅悗鍐嶅彂楂樼鍝佺墝銆佸畬鏁存寚鍗椾笌鏁板瓧绯荤粺浣滃搧闆嗐€?,
    language: "鏈叕寮€璇█瑕佹眰锛涢渶鍏堢‘璁よタ璇娇鐢ㄥ満鏅?,
  },
  839: {
    direction: "ecommerce",
    company: "Masderm / KERVLAN LAB SL",
    locationKey: "remote",
    locationLabel: "100% 杩滅▼",
    titleZh: "鑷敱鑱屼笟骞抽潰璁捐甯堬紙鐢靛晢 / 绀惧獟 / 鍖呰锛?,
    titleEs: "Dise帽ador/a gr谩fico/a freelance 鈥?e-commerce, redes y packaging",
    reason: "鏂瑰悜寰堣创缇庡鐢靛晢銆丄mazon銆丆RM 閭欢銆佺ぞ濯掑拰鍖呰锛屼絾鍘?Domestika 鑱屼綅宸茶烦鍥炲垪琛紝涓嶈兘鎸夊綋鍓嶇┖缂哄睍绀恒€?,
    next: "浠呬綔鍐疯闂細浠庡搧鐗屽畼鏂硅仈绯婚〉绀艰矊璇㈤棶鏈潵鏄惁杩橀渶瑕侀暱鏈熻嚜鐢辫亴涓氳璁″笀锛涗笉瑕佹妸瀹㈡湇閭鍐欐垚鎷涜仒閭锛屼篃涓嶈澹扮О鑱屼綅浠嶅紑鏀俱€?,
    language: "鍘熻亴浣嶆湭鍐欒瑷€瑕佹眰锛涘綋鍓嶅凡涓嬬嚎",
  },
});

Object.assign(CURATED, {
  840: {
    direction: "brand",
    company: "Randstad Professional",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "瑗跨彮鐗?100% 杩滅▼",
    titleZh: "鍒濈骇骞抽潰璁捐甯堬紙鍖昏嵂鍝佺墝锛?,
    titleEs: "Dise帽ador/a gr谩fico/a junior 鈥?sector farmac茅utico",
    reason: "寰堥€傚悎褰撳墠璇█鏉′欢鐨勫垵绾у叆鍙ｏ細瑗跨彮鐗欏叏杩滅▼銆佸彧鏄庣‘瑕佹眰鑱屼笟鑻辫锛屽伐浣滃洿缁曞尰鑽紒涓氱殑钀ラ攢涓庝紶鎾瑙夛紱1鈥? 骞寸粡楠屽嵆鍙紝骞磋柂 鈧?0,000鈥?5,000銆?,
    next: "浠?Randstad 瀹樻柟椤垫彁浜よ嫳鏂囩畝鍘嗗拰浣滃搧闆嗭紱棣栭〉鍏堟斁鍝佺墝瑙勮寖鎵ц銆佽法娓犻亾钀ラ攢鐗╂枡銆佹紨绀烘枃绋夸笌澶嶆潅淇℃伅鍙鍖栵紝骞剁‘璁よタ鐝墮鍚堝悓銆佸伐浣滆鍙拰涓存椂鍚堝悓涓讳綋銆?,
    language: "鑱屼笟鑻辫蹇呴渶锛涘叕寮€鑱屼綅鏈垪瑗跨彮鐗欒瑕佹眰",
  },
  841: {
    direction: "digital",
    company: "European Blockchain Convention",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "杩滅▼鑷敱鑱屼笟 / Barcelona 闆囦富",
    titleZh: "鑷敱鑱屼笟骞抽潰璁捐甯堬紙鏁板瓧鍝佺墝涓庢椿鍔ㄨ瑙夛級",
    titleEs: "Dise帽ador/a gr谩fico/a freelance 鈥?marca digital y eventos",
    reason: "鏂瑰悜鍜屾姇閫掗兘寰堢洿鎺ワ細鍝佺墝姒傚康銆乻tyle guide銆佹暟瀛?鍗板埛/绀惧獟涓庣嚎涓?campaign锛涜嫳鏂囪亴浣嶈鏄庢湭鍒楄タ璇姹傦紝骞跺叕寮€浜嗘敹浣滃搧闆嗙殑璐熻矗浜洪偖绠便€?,
    next: "浠婂ぉ鍙戦€佷竴灏佺煭鑻辨枃閭欢鍒?daniel@eblockchainconvention.com锛屾鏂囧彧鏀?3 涓渶鐩稿叧妗堜緥閾炬帴锛涘厛闂绠椼€佸伐鏃躲€佸悎鍚屻€佷粯娆惧懆鏈熶笌鏄惁闇€瑕佸伓灏斿埌鍦猴紝涓嶅仛鏃犺柂璇曠銆?,
    language: "鑻辨枃鍙姇锛涘叕寮€璇存槑鏈垪瑗跨彮鐗欒瑕佹眰",
  },
  842: {
    direction: "brand",
    company: "Bassols 1790",
    titleZh: "鍒濈骇骞抽潰璁捐涓庝紶鎾敮鎸?,
    titleEs: "Dise帽ador/a gr谩fico/a junior y apoyo de comunicaci贸n",
    reason: "鍝佺墝銆佸寘瑁呫€乻hooting銆佺ぞ濯掋€佺綉绔欎笌浼佷笟鐗╂枡閮藉湪鑱岃矗鍐咃紝骞舵湁鍏紑 HR 閭鍜?鈧?8,000鈥?0,000 钖祫锛涗絾鏂囨宸ヤ綔鍜岀敵璇烽棶棰樺潎涓鸿タ璇紝璇█椋庨櫓鐪熷疄瀛樺湪銆?,
    next: "鍙綔涓烘寫鎴樻姇閫掞細鐢ㄥ伐鍏疯緟鍔╁噯澶囪タ璇偖浠跺苟濡傚疄璇存槑姘村钩锛岄檮鍝佺墝/鍖呰/绀惧獟妗堜緥锛屾寜鍘熷笘鍥炵瓟鍖归厤鍘熷洜銆佹渶鑷豹椤圭洰鍜岃柂璧勯鏈燂紱鍏堢‘璁?pr谩cticas 鍚堝悓璧勬牸涓庡洟闃熷伐浣滆瑷€銆?,
    language: "鏈垪绛夌骇锛屼絾瑗胯鏂囨涓庢矡閫氭槸瀹為檯宸ヤ綔闂ㄦ",
  },
  843: {
    direction: "digital",
    company: "FIRMAMENT Sports",
    titleZh: "鍒濈骇骞抽潰璁捐甯堬紙浣撹偛鍝佺墝涓庡姩鎬佸浘褰級",
    titleEs: "Dise帽ador/a gr谩fico/a junior 鈥?deporte y motion",
    reason: "鍐呭寰堣创锛氬搧鐗岃瘑鍒€乧ampaign銆亀eb/landing銆佺ぞ濯掕棰戙€佹椿鍔ㄤ笌淇变箰閮ㄨ瑙夛紱浣嗙洰鍓嶅彧鏈夌涓夋柟鍙姇椤碉紝涓?Castellano 涓?English 鍧囦负鏄庣‘蹇呴渶銆?,
    next: "鍏堜粠鑱氬悎椤电‘璁ゅ師濮嬬敵璇峰叆鍙ｅ拰鍙戝竷鏃堕棿锛涜嫢鍙兘浣跨敤瀹樼綉閫氱敤閭锛屽彧璇㈤棶宀椾綅鏄惁浠嶅紑鏀俱€傛病鏈夊彲鐢ㄨタ璇矡閫氬拰 motion/video reel 鏃讹紝涓嶆妸瀹冩帓鍦ㄨ嫳璇矖涔嬪墠銆?,
    language: "瑗跨彮鐗欒涓庤嫳璇潎涓虹‖瑕佹眰",
  },
});

Object.assign(CURATED, {
  160: {
    direction: "brand",
    company: "Stanley Black & Decker",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "瑗跨彮鐗欒繙绋?,
    titleZh: "鍝佺墝宸ヤ綔瀹ゅ钩闈㈣璁″笀",
    titleEs: "Dise帽ador/a gr谩fico/a 鈥?Brand Studio",
    reason: "杩欎竴宀椾綅姝ゅ墠琚綆浼帮細瀹冩槸瑗跨彮鐗欒繙绋嬪叏鑱屽悎鍚岋紝璐熻矗鍝佺墝瑙勮寖銆佹ā鏉裤€佺綉绔欍€乪mail銆佺ぞ濯掑拰灞曠ず骞垮憡锛涙槑纭姹傝嫳鏂囩畝鍘嗐€佽嫳鏂囦綔鍝侀泦涓庢祦鍒╄嫳璇紝鍏紑璇存槑鏈垪瑗胯瑕佹眰銆?,
    next: "浠?LinkedIn 褰撳墠鑱屼綅椤垫彁浜よ嫳鏂囩畝鍘嗗拰浣滃搧闆嗭紱棣栭〉鏀惧畬鏁?VI銆佸搧鐗岃鑼冦€佽法娓犻亾妯℃澘銆亀eb/email/social 寤跺睍鍜屽熀纭€ motion锛屽苟纭瑗跨彮鐗欏悎鍚屼富浣撱€佽柂璧勪笌杩滅▼鍔炲叕鑼冨洿銆?,
    language: "娴佸埄鑻辫蹇呴渶锛涘叕寮€璇存槑鏈垪瑗跨彮鐗欒瑕佹眰",
  },
  845: {
    direction: "brand",
    company: "Fox Racing / Revelyst",
    statusKey: "live",
    titleZh: "骞抽潰璁捐瀹炰範鐢燂紙鍝佺墝銆佹暟瀛椾笌娲诲姩瑙嗚锛?,
    titleEs: "Pr谩cticas de dise帽o gr谩fico 鈥?marca, digital y eventos",
    reason: "寰堥€傚悎鑻辫浼樺厛鐢宠锛氱ぞ濯掋€乪mail銆佺綉绔?banner銆佹椿鍔ㄣ€佸嵃鍒枫€佷骇鍝佷慨鍥惧拰鍝佺墝涓€鑷存€ч兘鍦ㄨ亴璐ｅ唴锛涢珮姘村钩鑻辫鏄槑纭姹傦紝鏈垪瑗胯闂ㄦ锛屽苟鍏紑浜嗕綔鍝侀泦閭銆?,
    next: "鍏堢偣 LinkedIn 鐢宠锛屽啀鍙戜竴灏佸緢鐭殑鑻辨枃閭欢鍒?adelinamanea@foxracing.com锛涗綔鍝侀泦棣栭〉鏀惧搧鐗屽欢灞曘€佺ぞ濯掔郴鍒椼€亀eb/email銆佹椿鍔ㄨ瑙夊拰浜у搧淇浘锛屽苟璇㈤棶钖祫銆佸疄涔犲崗璁笌鍒板矖棰戠巼銆?,
    language: "楂樻按骞宠嫳璇繀闇€锛涘叕寮€璇存槑鏈垪瑗跨彮鐗欒瑕佹眰",
  },
  846: {
    direction: "digital",
    company: "MS Media",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "瑗跨彮鐗欏叏杩滅▼ / Barcelona 鍒嗘敮",
    titleZh: "璧涜溅杩愬姩骞抽潰璁捐瀹炰範",
    titleEs: "Pr谩cticas de dise帽o gr谩fico para motorsport",
    reason: "甯﹁柂銆佸彲鍏ㄨ繙绋嬩笖鏄庣‘瑕佹眰鐢ㄨ嫳璇敵璇枫€傚伐浣滃寘鎷禌浜嬬ぞ濯掋€佹椿鍔ㄦ垨杞︽墜瑙嗚璇嗗埆銆佽禐鍔╂彁妗堝拰鏁板瓧/鍗板埛璧勪骇锛屽拰鏁板瓧鍝佺墝寤跺睍楂樺害鍚诲悎銆?,
    next: "鐢ㄨ嫳鏂囧畬鎴愮敵璇峰拰鐭棶鍗凤紝浣滃搧闆嗕紭鍏堝睍绀洪珮鑺傚绀惧獟銆佽瑙夎瘑鍒€佹椿鍔ㄨ瑙夈€佽禐鍔?deck 涓庡皯閲?motion锛涘厛纭钖祫銆佸疄涔犲崗璁€佸悎鍚屼富浣撳拰璧涗簨鍑哄樊璐圭敤銆?,
    language: "鑻辫鐢宠锛涘叕寮€璇存槑鏈垪瑗跨彮鐗欒瑕佹眰",
  },
  847: {
    direction: "digital",
    company: "Revelyst",
    titleZh: "缃戦〉涓庡钩闈㈣璁″疄涔狅紙鍋?UX/UI锛?,
    titleEs: "Pr谩cticas de dise帽o web y gr谩fico 鈥?enfoque UX/UI",
    reason: "杩欐槸娓呮櫚鐨勬暟瀛楀搧鐗屽欢灞曞叆鍙ｏ細IAB banner銆乶ewsletter銆侀椤点€乴anding page銆丳DP銆佸搧鐗岃鑼冨拰绉诲姩绔綋楠岄兘鍦ㄨ亴璐ｅ唴锛岀敵璇蜂汉鏁扮浉瀵硅緝灏戙€?,
    next: "鐢ㄨ嫳鏂囩畝鍘嗗拰浣滃搧闆嗘姇閫掞紱绐佸嚭鐢靛晢椤甸潰銆乥anner/newsletter 绯诲垪銆佺Щ鍔ㄩ€傞厤銆佽璁＄郴缁熷拰 Figma 鍒?HTML/CSS 鐨勬渚嬶紝骞惰闂伐浣滆瑷€銆佽柂璧勫拰娣峰悎鍔炲叕棰戠巼銆?,
    language: "鑻辨枃鑱屼綅璇存槑锛涙湭鍏紑鍏蜂綋瑗胯绛夌骇",
  },
  848: {
    direction: "ecommerce",
    company: "Atomite",
    titleZh: "骞抽潰璁捐瀹炰範鐢燂紙鍋ュ悍娑堣垂鍝佺墝锛?,
    titleEs: "Pr谩cticas de dise帽o gr谩fico 鈥?marcas de salud",
    reason: "鍐呭闈炲父璐磋繎鍝佺墝绯荤粺涓庢棩甯歌瑙夌敓浜э細绀惧獟銆乧ampaign銆丳OS銆佸熀纭€鍖呰銆佷骇鍝佷慨鍥俱€丄I 鍥惧儚銆佸搧鐗岃鑼冨拰 Canva 妯℃澘锛涗絾鑱屼綅鍏ㄦ枃涓庨潰璇曟祦绋嬪潎涓鸿タ璇紝璇█椋庨櫓鐪熷疄瀛樺湪銆?,
    next: "鍙綔涓烘寫鎴樻姇閫掞紝骞跺瀹炶鏄庡綋鍓嶈タ璇按骞筹紱浣滃搧闆嗘斁澶氬搧鐗岀郴缁熴€佺ぞ濯掓ā鏉裤€佸寘瑁?POS銆佷骇鍝佷慨鍥惧拰 AI 杈呭姪娴佺▼锛屽厛纭鑳藉惁鐢ㄨ嫳璇伐浣溿€佸疄涔犲崗璁拰娴嬭瘯鏄惁浠樿垂銆?,
    language: "鏈垪绛夌骇锛屼絾瀹為檯宸ヤ綔璇鏄庢樉鍋忚タ鐝墮璇?,
  },
  849: {
    direction: "social",
    company: "GoodNews",
    titleZh: "璁捐涓庡垱鎰忓唴瀹瑰疄涔?,
    titleEs: "Pr谩cticas de dise帽o y contenido creativo",
    reason: "娴锋姤銆佺ぞ濯掋€乥anner銆佹媿鎽勩€佽法娓犻亾閫傞厤鍜屽搧鐗屼竴鑷存€ч兘寰堣创鍚堬紝鑰屼笖鏄甫钖吋鑱屽疄涔狅紱浣嗚仛鍚堥〉鏄剧ず杩戞湡鍙戝竷鏃讹紝GoodNews 瀹樻柟鑱屼綅鏉垮苟娌℃湁璇ヨ亴浣嶃€?,
    next: "鍏堟煡瀹樻柟鑱屼綅鏉挎垨閫氳繃瀹樻柟浜烘墠搴撶‘璁ゆ槸鍚﹂噸鏂板紑鏀撅紱寰楀埌鑲畾绛斿鍚庡啀鎻愪氦绠€鍘嗗拰浣滃搧闆嗭紝涓嶈鍙洜鑱氬悎椤靛啓鈥? 澶╁墠鈥濆氨鍦ㄧ涓夋柟椤甸潰涓婁紶鏁忔劅璧勬枡銆?,
    language: "鍏紑鏂囨鏈垪璇█瑕佹眰锛涜亴浣嶇姸鎬侀渶鍏堟牳瀹?,
  },
});

Object.assign(CURATED, {
  859: {
    direction: "digital",
    company: "Stripe / Brand Studio",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona 娣峰悎鍔炲叕 / 瑗跨彮鐗欒繙绋?,
    titleZh: "鍝佺墝鍔ㄦ€佽璁″笀锛圛dentity 鍔ㄦ€佺郴缁燂級",
    titleEs: "Dise帽ador/a de motion para identidad de marca",
    reason: "鏈疆鏈€寮虹殑鏂版満浼氾細涓嶆槸鏅€氳棰戝壀杈戯紝鑰屾槸涓?Stripe 鍝佺墝寤虹珛 motion principles銆乼iming tokens銆佸姩鐢昏鑼冨拰鍙鐢ㄧ粍浠讹紱瀹樻柟鍚屾椂鍒楀嚭 Barcelona 涓?Spain remote锛屽叕寮€骞磋柂 鈧?4,800鈥?12,200锛屾鏂囨湭鍒楄タ璇姹傘€?,
    next: "鐢ㄨ嫳鏂囦粠 Stripe 瀹樻柟椤电敵璇凤紱浣滃搧闆嗛椤垫斁涓€濂楀畬鏁村姩鎬?VI锛屽睍绀虹郴缁熷師鍒欍€佺粍浠躲€佸搧鐗屾€ф牸銆佷骇鍝佸唴鍔ㄧ敾鍜?campaign 寤跺睍銆傚厛纭 Barcelona 鍔炲叕姣斾緥銆丼pain remote 鍚堝悓銆佽柂璧勯€傜敤鍖洪棿涓庡伐浣滆鍙€?,
    language: "鑻辨枃鍥介檯鍥㈤槦锛涘畼鏂规鏂囨湭鍒楄タ鐝墮璇姹?,
  },
  850: {
    direction: "digital",
    company: "DashBook",
    locationKey: "barcelona",
    locationLabel: "宸村缃楅偅 / 鍋跺皵杩滅▼",
    statusKey: "live",
    titleZh: "鍒濈骇鑹烘湳鎸囧锛堝嚭鐗堜笌绀惧獟瑙嗚锛?,
    titleEs: "Director/a de arte junior 鈥?editorial y redes",
    reason: "灏戣鐨?Barcelona 鍒濈骇姘镐箙鍚堝悓鍒涙剰宀楋紝鍏紑璧疯柂 鈧?4,000+锛涘皝闈€佺増寮忋€佺ぞ濯?campaign銆乀ikTok / Instagram 鍜岀珫灞忓唴瀹归兘鍦ㄨ亴璐ｅ唴銆傛爣棰樹腑鐨?SP/UK/FR 鏄惁浠ｈ〃璇█闂ㄦ浠嶉渶纭銆?,
    next: "鐢ㄨ嫳鏂囩畝鍘嗐€佹眰鑱屼俊鍜屼綔鍝侀泦鐩存帴鐢宠锛涢椤垫斁缂栬緫璁捐銆佸皝闈€佺ぞ濯?campaign 涓庣珫灞忕煭瑙嗛锛屽苟鍦ㄦ眰鑱屼俊绗竴娈佃闂?SP/UK/FR 鏄换閫夊競鍦鸿繕鏄姹備笁璇€?,
    language: "姝ｆ枃鏈垪璇█绛夌骇锛汼P/UK/FR 鐨勫惈涔夐渶鍏堢‘璁?,
  },
  851: {
    direction: "digital",
    company: "Centro (Ortnec)",
    locationKey: "remote",
    locationLabel: "杩滅▼ / Barcelona 鍙戝竷鍦扮偣",
    statusKey: "live",
    titleZh: "骞抽潰璁捐甯堚€擜I 瑙嗛鐢熸垚",
    titleEs: "Dise帽ador/a gr谩fico/a 鈥?generaci贸n de v铆deo con IA",
    reason: "鍏ㄨ亴杩滅▼銆乪ntry level銆佹祦鍒╄嫳璇紝鏂瑰悜瑕嗙洊鍝佺墝娓犻亾銆佽瑙夌郴缁熴€丗igma 妯℃澘銆丄I 瑙嗛銆佺煭瑙嗛銆乵oodboard 涓?storyboard锛涙湭鍒楄タ璇姹傘€?,
    next: "鐢ㄨ嫳鏂囨潗鏂欑敵璇凤紝浣滃搧闆嗗悓鏃跺睍绀轰紶缁熷搧鐗岃瑙夈€丗igma 绯荤粺鍜?AI 瑙嗛绮句慨娴佺▼锛涘厛纭鏄惁鎺ュ彈 Spain resident銆佸悎鍚屾垨 contractor 涓讳綋銆佽柂璧勩€佹椂鍖轰笌绋庡姟銆?,
    language: "娴佸埄鑻辫蹇呴渶锛涘叕寮€璇存槑鏈垪瑗跨彮鐗欒瑕佹眰",
  },
});

Object.assign(CURATED, {
  863: {
    direction: "digital",
    company: "Grup Ametller Origen",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Ol猫rdola / 姣忓懆 2 澶╄繙绋?,
    titleZh: "鏁板瓧骞抽潰璁捐涓撳憳锛堝搧鐗屾暟瀛楀欢灞曪級",
    titleEs: "T茅cnico/a de dise帽o gr谩fico digital",
    reason: "鑱岃矗涓庢暟瀛楀搧鐗屽欢灞曢珮搴﹁创鍚堬細PAID campaign銆佺ぞ濯掋€乶ewsletter銆佺煭瑙嗛銆乵otion graphics 鍜岃法鏁板瓧瑙︾偣鐨勫搧鐗屼竴鑷存€э紱浣嗗叏鏂囦负鍔犳嘲璇紝涓旈渶鑷┚鍒?Ol猫rdola銆傚悎鍚屼负 6 涓湀锛屽彲鑳藉欢鑷?1 骞淬€?,
    next: "鍏堣闂洟闃熸棩甯歌兘鍚︾敤鑻辫銆佹槸鍚︽帴鍙?Barcelona 閫氬嫟鍊欓€変汉銆佽繙绋嬩袱澶╁浣曞畨鎺掑拰钖祫锛涘緱鍒拌偗瀹氱瓟澶嶅悗鍐嶅彂鏁板瓧 campaign銆佺ぞ濯掔郴缁熴€乶ewsletter銆佺煭瑙嗛涓?motion 浣滃搧闆嗐€?,
    language: "鍔犳嘲璇嫑鑱樹笌鏈湴鍥㈤槦璇锛涜嫳璇兘鍚︿綔涓哄伐浣滆瑷€闇€鍏堢‘璁?,
  },
  864: {
    direction: "brand",
    company: "Grup Ametller Origen",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Ol猫rdola / Num脿ncia锛屾贩鍚堝姙鍏?,
    titleZh: "鍖呰鑹烘湳璐熻矗浜猴紙鍝佺墝娌荤悊涓庣敓浜ц惤鍦帮級",
    titleEs: "L铆der de arte en packaging",
    reason: "闈炲父鏍囧噯鐨勫搧鐗屾不鐞嗕笌鍖呰绯荤粺宀椾綅锛氬洟闃熷崗璋冦€佽瑙夋墜鍐屻€佸寘瑁呰璁°€佸畬绋裤€佸垁妯°€佽壊鏍枫€佸嵃鍘傚拰渚涘簲鍟嗙鐞嗭紱鏃犻檺鏈熷悎鍚岋紝浣嗚姹?5 骞翠互涓婄粡楠屻€佸叏鏂囧姞娉拌骞堕渶鑷┚銆?,
    next: "鍙湁浣滃搧闆嗗叿澶囨垚鐔熷寘瑁呯郴缁熴€佸搧鐗屾墜鍐屻€佸嵃鍓嶅畬绋裤€佹墦鏍峰拰渚涘簲鍟嗙鐞嗘渚嬫椂鍐嶆姇锛涘厛纭宸ヤ綔璇█銆佽柂璧勩€佹贩鍚堝姙鍏瘮渚嬪拰閫氬嫟瑕佹眰銆?,
    language: "鍔犳嘲璇嫑鑱樹笌鏈湴渚涘簲鍟嗚澧冿紱瑗胯 / 鍔犳嘲璇棬妲涜緝楂?,
  },
  865: {
    direction: "production",
    company: "FIRMAMENT / 鍙戝竷涓讳綋寰呮牳瀹?,
    statusKey: "closed",
    locationKey: "other",
    locationLabel: "鍦扮偣鍐茬獊锛歀inkedIn 鍐?Barcelona锛屾棫姝ｆ枃鍐?And煤jar",
    titleZh: "鍥惧舰鍒朵綔鍗忚皟鍛橈紙鍦扮偣寮傚父锛屾殏涓嶆姇锛?,
    titleEs: "Coordinador/a de producci贸n gr谩fica 鈥?ubicaci贸n no verificada",
    reason: "LinkedIn 鎶婂畠鍒楀湪 Barcelona锛屼絾鑳芥仮澶嶇殑鍚屽悕姝ｆ枃瀹為檯鏄?And煤jar 鐨勮鍗曘€佷緵搴斿晢鍜岃繍杈撳崗璋冿紝骞堕潪瑙嗚璁捐锛涢泧涓讳笌鍦扮偣鏄犲皠鍐茬獊锛屼笉鑳芥寜宸村璁捐宀楀鐞嗐€?,
    next: "鏆備笉鎶曢€掋€傚彧鏈夊彂甯冭€呰ˉ鍏?Barcelona 闆囦富鍏ㄧО銆佸姙鍏湴鍧€銆佺湡瀹炶璁¤亴璐ｅ拰鐙珛鐢宠鍏ュ彛鍚庡啀閲嶆柊璇勪及銆?,
    language: "璇█涓嶆槑锛涜亴浣嶅湴鐐逛笌涓讳綋灏氭湭鏍稿疄",
  },
  866: {
    direction: "digital",
    company: "devicenow",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "宸村缃楅偅 / 娣峰悎鍔炲叕",
    titleZh: "鍝佺墝瑙嗛涓庡姩鎬佽瑙変笓鍛?,
    titleEs: "Especialista de v铆deo y motion graphics",
    reason: "鏈疆鏈€鍊煎緱浼樺厛鎶曠殑鏂版満浼氾細鑻辫鏄槑纭姹傦紝鏈垪瑗胯闂ㄦ锛涘伐浣滄妸鍝佺墝寤跺睍鍒颁骇鍝佽В璇淬€佸鎴锋晠浜嬨€佺ぞ浜ょ煭鐗囥€佹椿鍔ㄣ€佹暟瀛?campaign銆佹紨绀恒€佹ā鏉垮拰绱犳潗绯荤粺锛屾棦鏈夊姩鎬佷篃鏈夐潤鎬佸搧鐗岃祫浜с€?,
    next: "鐢ㄨ嫳鏂囩畝鍘嗐€佷綔鍝侀泦鍜?showreel 鐩存帴鎶曘€傞椤靛厛鏀?45鈥?5 绉掔簿閫?reel锛屽啀鏀惧搧鐗屽姩鎬佺郴缁熴€佷骇鍝佽В閲婅棰戙€佺ぞ濯?campaign 涓庨潤鎬佽瑙夛紱鐢宠鏃剁‘璁ゅ悎鍚屾湡闄愩€佽柂璧勩€佸埌宀楅鐜囧拰宸ヤ綔璁稿彲銆?,
    language: "浼樼鑻辫蹇呴渶锛涘叕寮€鑱屼綅鏈啓瑗跨彮鐗欒瑕佹眰",
  },
  867: {
    direction: "digital",
    company: "Space Go",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Sant Cugat del Vall猫s / 娣峰悎鍔炲叕",
    titleZh: "鍒涙剰鍔ㄦ€佽璁″笀锛堝搧鐗?campaign / 绀句氦骞垮憡锛?,
    titleEs: "Creative Motion Grapher 鈥?campa帽as y social",
    reason: "鍝佺墝鍔ㄦ€併€?D / 3D銆佽幏瀹笌鐣欏瓨鍐呭銆佺煭瑙嗛銆佸鐗堟湰妯℃澘鍜岀敓浜х郴缁熼兘寰堣创鏁板瓧鍝佺墝寤跺睍锛涗絾瑕佹眰 5 骞翠互涓婄粡楠岋紝鑱屼綅鍏ㄦ枃涓庢湰鍦板洟闃熻澧冨潎涓鸿タ璇€?,
    next: "鍙湪璧勫巻瓒冲鏃舵寫鎴樸€傚厛鐢ㄨ嫳鏂囪闂棩甯稿伐浣滆瑷€銆佷复鏃跺悎鍚屾湡闄愪笌钖祫锛屽啀鎻愪氦鍝佺墝 motion system銆?D / 3D campaign銆佹ā鏉跨郴缁熷拰杞寲杩唬妗堜緥銆?,
    language: "瑗胯瑕佹眰鏈槑绀猴紝浣嗚亴浣嶅叏鏂囧拰鏈湴鍥㈤槦宸ヤ綔娴佷负瑗胯",
  },
  868: {
    direction: "digital",
    company: "Omnicom Health",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "宸村缃楅偅",
    titleZh: "鍖荤枟鍝佺墝瑙嗛鍒朵綔涓庡姩鎬佽瑙?,
    titleEs: "Video Maker 鈥?comunicaci贸n sanitaria y motion",
    reason: "姝ｅ紡鍏ㄨ亴锛岃鐩栦紒涓氥€佺瀛︺€佸煿璁€佹帹骞胯棰戙€佹椿鍔ㄣ€佺綉绔欍€佹暟瀛?campaign銆乵otion 涓?AI锛涗絾鏄庣‘瑕佹眰娴佸埄瑗胯鍜岃嫳璇紝涓斿叕寮€椤甸潰宸叉湁 200 浜轰互涓婄敵璇枫€?,
    next: "褰撳墠涓嶄紭鍏堛€傚彧鏈夎兘鐢ㄨタ璇鐞嗗鎴蜂細璁€佺瀛︽枃妗堜笌鍙嶉鏃跺啀鎶曪紱鏉愭枡闇€瑕?CV銆佺畝鐭姩鏈鸿鏄庡拰鏈€鏂?reel銆?,
    language: "瑗胯瑕佹眰锛氭祦鍒╄タ鐝墮璇笌鑻辫鍧囦负纭棬妲?,
  },
  869: {
    direction: "social",
    company: "BLAINE",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Vilassar de Mar / 娣峰悎鎴栫幇鍦?,
    titleZh: "鏁堟灉钀ラ攢鍔ㄦ€佽璁′笌瑙嗛鍓緫",
    titleEs: "Motion Designer & Video Editor 鈥?performance marketing",
    reason: "鏃犻檺鏈熷叏鑱岋紝鍐呭瑕嗙洊绀句氦骞垮憡銆佸鐗堟湰娴嬭瘯銆乵otion銆佽壓鏈寚瀵煎拰鎸夎浆鍖栨暟鎹凯浠ｏ紱浣嗚タ璇瘝璇笌灞呬綇鍦?Maresme 閮芥槸鏄庣‘纭棬妲涖€?,
    next: "涓嶈繘鍏ュ綋鍓嶄綆璇█浼樺厛闃熷垪銆傛湭鏉ユ弧瓒虫瘝璇骇瑗胯涓?Maresme 灞呬綇鏉′欢鏃讹紝鍐嶇敤绀句氦骞垮憡銆丄/B testing銆佸揩閫熷彉浣撳拰鏁版嵁杩唬妗堜緥鐢宠銆?,
    language: "瑗胯瑕佹眰锛氭瘝璇骇瑗跨彮鐗欒锛涘繀椤诲眳浣忓湪 Maresme",
  },
  870: {
    direction: "ecommerce",
    company: "Flummox / Online Brand House",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "瑗跨彮鐗欒繙绋嬩紭鍏?/ 姣忓懆鑷冲皯 20 灏忔椂",
    titleZh: "杩滅▼鍏艰亴鐢靛晢鍝佺墝骞抽潰璁捐甯?,
    titleEs: "Dise帽ador/a gr谩fico/a de e-commerce 鈥?remoto y parcial",
    reason: "鏂扮殑鐙珛鑱屼綅缂栧彿璇佹槑姝ゅ墠鍏抽棴鐨勫矖浣嶅凡缁忛噸鍙戙€傛祦鍒╄嫳璇嵆鍙紝宸ヤ綔妯法鍝佺墝璇嗗埆銆丄mazon 鍐呭銆佷骇鍝佸浘銆?D銆佺綉椤点€佸箍鍛娿€佸寘瑁呬笌鎷嶆憚锛屽拰鐢靛晢瑙嗚鍙婃暟瀛楀搧鐗屽欢灞曢珮搴﹀尮閰嶃€?,
    next: "鐢ㄨ嫳鏂?CV 鍜岀數鍟嗚瑙変綔鍝侀泦鎶曢€掞紱浼樺厛鏀?Amazon A+ / listing銆佸寘瑁呫€佷骇鍝佸浘銆佺綉椤典笌骞垮憡绯诲垪銆傞潰璇曞墠纭鏃惰柂鎴栨湀钖€佷繚搴曞伐鏃躲€侀泧浣ｈ繕鏄?aut贸nomo銆佷粯娆惧懆鏈熷拰璇曠鏄惁鏈夎柂銆?,
    language: "娴佸埄鑻辫蹇呴渶锛涘叾浠栨娲茶瑷€浠呬负鍔犲垎锛屾湭鍐欒タ鐝墮璇姹?,
  },
  871: {
    direction: "brand",
    company: "Codeway",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "鍒濅腑绾?/ 1鈥? 骞?,
    locationKey: "barcelona",
    locationLabel: "宸村缃楅偅 / 娣峰悎鍔炲叕",
    titleZh: "鍝佺墝骞抽潰璁捐甯堬紙VI 涓庡叏瑙︾偣寤跺睍锛?,
    titleEs: "Brand Graphic Designer 鈥?identidad y extensi贸n multicanal",
    reason: "褰撳墠鏈€寮虹殑鑻辫鍝佺墝宀椾綅涔嬩竴锛?鈥? 骞寸粡楠屽嵆鍙紝璐熻矗鍝佺墝韬唤銆佺ぞ濯掋€佹椿鍔ㄣ€佺綉绔欍€佸懆杈广€佹紨绀轰笌鍗板埛锛涘畼鏂圭敵璇疯〃寮€鏀撅紝骞舵槑纭彁渚涚璇佸拰鎼縼鏀寔銆?,
    next: "鐢ㄨ嫳鏂囨潗鏂欑洿鎺ユ姇瀹樻柟 Ashby銆備綔鍝侀泦浠ヤ竴濂楀畬鏁?VI 绯荤粺寮€鍦猴紝鍐嶅睍绀虹ぞ濯掋€佺綉绔欍€佹椿鍔ㄣ€佸懆杈广€佹紨绀哄拰鍗板埛寤跺睍锛涙眰鑱屼俊鐩存帴鍥炲簲璺ㄨЕ鐐逛竴鑷存€с€佽瑙夌郴缁熷拰 AI 宸ヤ綔娴併€?,
    language: "鑻辫鐔熺粌蹇呴渶锛涘叕寮€鑱屼綅鏈啓瑗跨彮鐗欒瑕佹眰",
  },
  872: {
    direction: "brand",
    company: "AQIPA Gear Guru",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Hospitalet / Barcelona 鏍囨敞锛屽畼鏂瑰湴鐐归渶纭",
    titleZh: "璧勬繁骞抽潰璁捐 / 鍒涙剰璐熻矗浜?,
    titleEs: "Senior Graphic Designer / Head of Creation & Design",
    reason: "绉戞妧鍝佺墝銆佸寘瑁呫€丳OS銆佺數鍟嗐€佸睍浼氥€佺綉绔欎笌褰卞儚鑱岃矗闈炲父瀹屾暣锛岃嫳璇潯浠朵篃鍙嬪ソ锛涗絾 LinkedIn 鍐?Barcelona锛屽畼鏂?Personio 涓昏鍒?Kundl锛屽湴鐐瑰瓨鍦ㄥ啿绐併€?,
    next: "鍏堥偖浠堕棶 HR 鏄惁鑳戒互 Barcelona/Hospitalet 涓虹湡瀹炲伐浣滃湴鐐癸紝骞剁‘璁ゅ悎鍚屻€佽柂璧勫拰鍒板矖棰戠巼銆傚彧鏈夊叿澶?6鈥?0 骞磋祫娣卞搧鐗屻€佸寘瑁呫€佹暟瀛椾笌鎽勫奖浣滃搧鏃跺啀鍑嗗瀹屾暣鐢宠銆?,
    language: "鑻辫鑹ソ蹇呴渶锛涘痉璇负鏄庢樉鍔犲垎锛涙湭鍐欒タ鐝墮璇姹?,
  },
  873: {
    direction: "digital",
    company: "Talent-R / 瀹㈡埛鏈姭闇?,
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "宸村缃楅偅 / 娣峰悎鍔炲叕",
    titleZh: "骞抽潰璁捐甯堬紙鍝佺墝銆佸箍鍛娿€佺綉椤典笌瑙嗛锛?,
    titleEs: "Graphic Designer 鈥?marca, campa帽as, web y v铆deo",
    reason: "宸ヤ綔瑕嗙洊鏁板瓧骞垮憡銆佺ぞ濯掋€佺綉椤点€佸搧鐗岃韩浠姐€丷eels 鍜?motion锛屽唴瀹瑰尮閰嶄笉閿欙紱浣嗘硶璇祦鍒╂垨姣嶈鏄‖闂ㄦ锛岀湡瀹炲鎴峰拰钖祫涔熸病鏈夋姭闇层€?,
    next: "娌℃湁宸ヤ綔娉曡鏃朵笉浼樺厛銆傝嫢娉曡鍙敤锛屽厛鍚戞嫑鑱樻柟纭瀹㈡埛鍚嶇О銆佽柂璧勩€佸悎鍚屽拰鍔炲叕姣斾緥锛屽啀鎻愪氦鏁板瓧 campaign銆佸搧鐗岃韩浠姐€乴anding 涓庤棰戞渚嬨€?,
    language: "娉曡娴佸埄鎴栨瘝璇负纭姹傦紱鍚屾椂闇€瑕佽壇濂借嫳璇?,
  },
  874: {
    direction: "digital",
    company: "IKIGAI Talent Group / 绉诲姩搴旂敤瀹㈡埛",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "宸村缃楅偅 / 娣峰悎鍔炲叕",
    titleZh: "瑙嗛鍓緫涓庡姩鎬佽璁″笀锛堣幏瀹㈠箍鍛?/ 鍝佺墝鍔ㄦ€侊級",
    titleEs: "Editor/a de v铆deo y Motion Designer",
    reason: "鏈疆鏈€鍊煎緱鎶曠殑鏂板叆鍙ｏ細瀹樻柟鐧昏琛ㄤ粛寮€鏀撅紝椤甸潰浣跨敤鑻辫涓旀湭鍐欒タ璇姹傦紱宸ヤ綔瑕嗙洊瑙嗚韬唤寤跺睍鍜?TikTok銆丮eta銆丄pple Search Ads銆丟oogle 鐨勫姩鎬佽幏瀹㈢礌鏉愩€?,
    next: "鐢ㄨ嫳鏂囩敵璇凤紝棣栭〉鏀?30鈥?0 绉掑箍鍛婂壀杈?reel锛屽啀鏀惧搧鐗?motion system 鍜屽甫缁撴灉鎸囨爣鐨勫鐗堟湰绱犳潗銆傚厛纭鐪熷疄瀹㈡埛銆佽柂璧勩€佸悎鍚屼富浣撱€佹瘡鍛ㄤ骇閲忋€佸埌宀楅鐜囧拰璇曠鏄惁浠樿垂銆?,
    languageKey: "light",
    language: "鑻辫椤甸潰锛涘叕寮€鑱屼綅鏈啓瑗跨彮鐗欒瑕佹眰",
  },
  875: {
    direction: "digital",
    company: "CoverManager / Hospitality Tech Group",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "宸村缃楅偅 / 鍔炲叕姣斾緥寰呯‘璁?,
    titleZh: "鍔ㄦ€佽璁″笀锛堝弻鍝佺墝瑙嗛涓庣ぞ浜ゅ箍鍛婏級",
    titleEs: "Motion Designer 鈥?v铆deo de marca y anuncios sociales",
    reason: "CoverManager 涓?Zenchef 鍙屽搧鐗岀殑鍔ㄦ€併€佽棰戝拰 Instagram / LinkedIn 骞垮憡鑱岃矗鏄庣‘锛屽伐鍏锋爤涔熸柊锛涗絾娴佸埄鑻辫涔嬪锛岃繕蹇呴』鍏峰娴佸埄瑗胯鎴栨硶璇€?,
    next: "娌℃湁宸ヤ綔瑗胯鎴栨硶璇椂涓嶄紭鍏堛€傝嫢娉曡鍙敤锛屼綔鍝侀泦绐佸嚭鍙屽搧鐗屽尯鍒嗐€佺ぞ浜ゅ箍鍛娿€佺紪杈戣棰戝拰 AI 鍚庢湡锛涘厛闂柂璧勩€佸悎鍚屻€佽瑷€缁勫悎鍜屽埌宀楀ぉ鏁般€?,
    languageKey: "spanish",
    language: "鑻辫娴佸埄锛屽苟瑕佹眰瑗跨彮鐗欒鎴栨硶璇嚦灏戜竴绉嶆祦鍒?,
  },
  876: {
    direction: "digital",
    company: "Buzz Marketing Networks",
    statusKey: "live",
    experienceKey: "senior",
    experienceLabel: "璧勬繁 / 4鈥? 骞?,
    locationKey: "barcelona",
    locationLabel: "宸村缃楅偅 / 姣忓懆 2 澶╁姙鍏銆? 澶╄繙绋?,
    titleZh: "AI 鏂瑰悜鍔ㄦ€佽璁′笌瑙嗛鍓緫",
    titleEs: "Motion Designer & Video Editor con foco en IA",
    reason: "鐙珛浜?Buzz 鑹烘湳鎸囧宀楋紝瑕嗙洊 campaign銆佺ぞ濯掋€乵otion銆佸壀杈戝拰 AI 瑙嗛锛涙贩鍚堝姙鍏畨鎺掓竻妤氾紝浣嗚姹傜害 4鈥? 骞寸粡楠岋紝鑱屼綅澶勫湪瑗胯宸ヤ綔璇銆?,
    next: "璧勫巻瓒冲鏃跺厛鐢ㄨ嫳鏂囪闂洟闃熻兘鍚︽帴鍙楄嫳璇伐浣滐紝鍐嶆彁浜?campaign銆佺ぞ濯?motion 鍜?AI 鐢熸垚鍒扮簿淇殑娴佺▼妗堜緥锛涚‘璁よ柂璧勩€佸悎鍚屽拰娴嬭瘯鑼冨洿銆?,
    languageKey: "unknown",
    language: "鑱屼綅鍏ㄦ枃涓鸿タ璇紝浣嗘病鏈夊叕寮€鍏蜂綋璇█绛夌骇",
  },
  877: {
    direction: "production",
    company: "Eurofirms / 鏈叕寮€鍖呰瀹㈡埛",
    statusKey: "live",
    experienceKey: "junior",
    experienceLabel: "鍒濈骇 / 1 骞翠互涓?,
    locationKey: "barcelona",
    locationLabel: "Cerdanyola del Vall猫s / 鐜板満鏃╃彮",
    titleZh: "骞抽潰璁捐涓庡寘瑁呭畬绋夸笓鍛?,
    titleEs: "Dise帽ador/a gr谩fico/a 鈥?artes finales y packaging",
    reason: "鏃惰柂銆佸伐鏃朵笌涓存椂鍚堝悓閮藉叕寮€锛屽苟鏈夎浆闀挎湡鍙兘锛涜亴璐ｆ槸鐪熷疄鐨勫寘瑁呭畬绋裤€佹硶瑙勩€佺洸鏂囥€佹潯鐮併€佹墦鏍峰拰璐ㄦ帶锛屼絾鍋忕敓浜ц€岄潪楂樻蹇?VI銆?,
    next: "鍏峰鍖呰瀹岀銆佸垁妯°€佹潯鐮?/ 娉曡鍜屽嵃鍓嶇粡楠屾椂鍐嶆姇锛涘厛纭鐪熷疄闆囦富銆佸悎鍚屾湡闄愩€佽浆闀挎湡鏉′欢銆佹棩甯歌瑷€鍜屾槸鍚﹁疆鐝€?,
    languageKey: "unknown",
    language: "瑗胯鑱屼綅涓庣敓浜ц澧冿紱娌℃湁鍏紑鍏蜂綋璇█绛夌骇",
  },
  878: {
    direction: "social",
    company: "Hosco",
    statusKey: "live",
    experienceKey: "junior",
    experienceLabel: "瀹炰範 / 鏈姹傜粡楠?,
    locationKey: "barcelona",
    locationLabel: "Barcelona Eixample / 鍏ㄨ亴瀹炰範",
    titleZh: "绀句氦濯掍綋鍐呭璁捐涓庡垱浣滃疄涔?,
    titleEs: "Pr谩cticas de dise帽o y creaci贸n de contenido social",
    reason: "绀惧獟鍥惧舰銆丷eels銆佸唴瀹规帓绋嬪拰 campaign 閮界浉鍏筹紝闆囦富鍦ㄥ钩鍙板凡楠岃瘉锛涗絾鍏ㄨ亴瀹炰範娌℃湁鍏紑钖祫銆佽ˉ璐淬€佸鏍″崗璁垨鍚堝悓鏈熼檺锛屽洖鎶ラ闄╄緝楂樸€?,
    next: "鍏堥棶鏄惁甯﹁柂銆佺◣鍓嶆湀钖€佹槸鍚﹀繀椤?convenio銆佸悎鍚屾湡闄愬拰宸ヤ綔璇█锛涘彧鏈夋潯浠跺悎鐞嗗啀鎻愪氦绀惧獟妯℃澘銆佺煭瑙嗛鍜屽唴瀹规棩鍘嗘渚嬨€?,
    languageKey: "unknown",
    language: "鍏紑鑱屼綅娌℃湁璇存槑璇█瑕佹眰",
  },
  879: {
    direction: "social",
    company: "Bisubi",
    statusKey: "live",
    experienceKey: "junior",
    experienceLabel: "鍒濈骇 / 鏈姹傜粡楠?,
    locationKey: "remote",
    locationLabel: "瑗跨彮鐗欒繙绋?/ 鍏艰亴鐏垫椿",
    titleZh: "鐭棰戝唴瀹瑰垱浣滆€咃紙TikTok / Reels / Shorts锛?,
    titleEs: "Creador/a de v铆deo corto",
    reason: "楂樼骇鑻辫銆佸叏杩滅▼銆佹棤缁忛獙闂ㄦ涓旀寜鍛ㄤ粯娆撅紝閫傚悎鐭湡琛ュ厖鏀跺叆锛涗絾鍏紑璐圭巼鍙湁 EUR10/灏忔椂锛岃亴璐ｄ篃涓嶅睘浜?VI 涓绘柟鍚戙€?,
    next: "鍙綔浣庤柂澶囩敤銆傚厛纭淇濆簳宸ユ椂銆佸悎鍚?/ 鍙戠エ涓讳綋銆佷慨璁㈡鏁般€佺礌鏉愮増鏉冦€佷粯娆句繚闅滃拰璁惧瑕佹眰锛涗笉瑕佸仛鏃犺柂鏍风墖銆?,
    languageKey: "light",
    language: "瑕佹眰楂樼骇鑻辫锛涙湭鍐欒タ鐝墮璇姹?,
  },
  880: {
    direction: "social",
    company: "Axo Longevity",
    statusKey: "verify",
    experienceKey: "junior",
    experienceLabel: "鍒濅腑绾?/ 2 骞翠互涓?,
    locationKey: "remote",
    locationLabel: "Barcelona 鏍囨敞 / 杩滅▼浼樺厛",
    titleZh: "鍙岃鐭棰戝壀杈戜笌骞抽潰璁捐",
    titleEs: "Editor/a de v铆deo corto y dise帽ador/a gr谩fico/a biling眉e",
    reason: "浠樿垂涓庤嚜鐒剁ぞ濯掋€侀潤鎬佸箍鍛婂拰鎸囨爣澶嶇洏鏈夌湡瀹炲唴瀹癸紝浣嗚嫳璇?/ 瑗胯鍙岃鏄‖闂ㄦ锛涜仛鍚堥〉瀵逛复鏃躲€佸叏鑱屽拰 contract-to-hire 鐨勬爣绛句簰鐩稿啿绐併€?,
    next: "鍏堢储鍙栭泧涓绘硶瀹氬悕绉般€佸師濮嬭亴浣嶉〉銆佽タ鐝墮鍚堝悓鎴?aut贸nomo 鏂瑰紡銆佸噯纭柂璧勫竵绉?/ 绋庡埗鍜屼粯璐规祴璇曡鏄庯紱涓嶈鍏堜笂浼犺瘉浠躲€?,
    languageKey: "spanish",
    language: "鑻辫涓庤タ鐝墮璇弻璇负鏄庣‘纭棬妲?,
  },
  881: {
    direction: "digital",
    company: "Avidalia",
    statusKey: "live",
    experienceKey: "junior",
    experienceLabel: "鍒濅腑绾?/ 2 骞村乏鍙?,
    locationKey: "barcelona",
    locationLabel: "宸村缃楅偅 / 娣峰悎鍔炲叕锛屽懆浜旇繙绋嬶紱20 灏忔椂/鍛?,
    titleZh: "鏁板瓧鍐呭璁捐甯堬紙鍝佺墝銆佺ぞ濯掍笌鍩虹鍔ㄦ€侊級",
    titleEs: "Digital Content Designer",
    reason: "瀹樻柟鐢宠浠嶅紑鏀撅紝鍏艰亴鏃犲浐瀹氭湡闄愬悎鍚岋紝瑕嗙洊鍝佺墝涓€鑷存€с€佸嵃鍒?/ 鏁板瓧 / 绀惧獟 / email 鍜屽熀纭€ motion锛涗絾瑗胯宸ヤ綔璇鍙婂吋鑱屽勾鏀跺叆閮介渶鍏堢‘璁ゃ€?,
    next: "鍏堥棶绋庡墠骞磋柂鎴栨椂钖€?0 灏忔椂濡備綍鍒嗗竷銆佽浆鍏ㄨ亴鏉′欢鍜屾棩甯歌瑷€锛涗綔鍝侀泦鏀炬暟瀛?campaign銆佸搧鐗屾ā鏉裤€佺ぞ濯?/ email 绯诲垪鍜屽熀纭€ motion銆?,
    languageKey: "unknown",
    language: "鑱屼綅鍏ㄦ枃涓鸿タ璇紝浣嗘病鏈夊叕寮€鍏蜂綋璇█绛夌骇",
  },
  882: {
    direction: "brand",
    company: "Jobgether / 瀹㈡埛鏈姭闇?,
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "瑗跨彮鐗欒繙绋?/ 鍚堝悓鍒?,
    titleZh: "B2B 骞抽潰璁捐甯堬紙鎶ュ憡銆佺數瀛愪功涓庡搧鐗屾ā鏉匡級",
    titleEs: "Dise帽ador/a gr谩fico/a B2B",
    reason: "LinkedIn 鏂扮姸鎬佷笌 Lever 鍏ュ彛鍧囧彲鐢宠锛岃嫳璇拰 Spain remote 鍙嬪ソ锛涗絾鐪熷疄瀹㈡埛銆佽柂璧勩€佸伐鏃跺拰鍚堝悓鍦板尯娌℃湁鍏紑锛屼笖绔炰簤宸茬粡杈冮珮銆?,
    next: "鍙敤鍏紑浣滃搧闆嗗厛鐢宠锛岀獊鍑烘姤鍛婁俊鎭眰绾с€佺數瀛愪功銆佺ぞ濯掔郴缁熷拰鍗板埛锛涢潰璇曞墠纭瀹㈡埛鍚嶇О銆侀绠椼€佹瘡鍛ㄥ伐鏃躲€佸悎鍚?/ 鍙戠エ涓讳綋鍜屼粯娆惧懆鏈熴€?,
    languageKey: "light",
    language: "鑻辫鑱屼綅锛涘叕寮€淇℃伅鏈啓瑗跨彮鐗欒瑕佹眰",
  },
  883: {
    direction: "digital",
    company: "Preply",
    statusKey: "closed",
    locationKey: "barcelona",
    locationLabel: "宸村缃楅偅 / 宸插叧闂?,
    titleZh: "鏈湴鍖栧姩鎬佽璁″笀锛堝凡鍋滄鐢宠锛?,
    titleEs: "Motion Designer 鈥?Localization (cerrado)",
    reason: "鎼滅储鍒楄〃鐨勮繎鏈熸椿璺冨睘浜庣紦瀛樺埛鏂帮紱褰撳墠璇︽儏鏄庣‘鍐欐槑涓嶅啀鎺ュ彈鐢宠锛屼笉鑳芥仮澶嶆垚鏂板矖浣嶃€?,
    next: "鍙繚鐣欏叕鍙歌瀵熴€傜瓑 Preply 瀹樻柟鎷涜仒椤靛嚭鐜扮嫭绔嬫柊鑱屼綅缂栧彿鍜屽彲鎻愪氦琛ㄥ崟鍚庡啀鎭㈠锛屼笉閫氳繃鏃х紦瀛樻垨閫氱敤浜烘墠搴撴姇閫掋€?,
    languageKey: "light",
    language: "鍘嗗彶鑱屼綅锛涘綋鍓嶅凡鍏抽棴",
  },
  884: {
    direction: "digital",
    company: "Dragons Group",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "涓骇 / 鍖昏嵂缁忛獙鏈変紭鍔?,
    locationKey: "barcelona",
    locationLabel: "宸村缃楅偅 / 娣峰悎鍔炲叕",
    titleZh: "鍖昏嵂琛屼笟涓骇骞抽潰璁捐甯?,
    titleEs: "Dise帽ador/a gr谩fico/a mid para pharma",
    reason: "鏈疆鏈€鍊煎緱浼樺厛鎶曠殑鏂板矖浣嶏細鑻辫娴佸埄鍗冲彲锛屾湭鍒楄タ璇‖闂ㄦ锛涘伐浣滆鐩栧尰鑽?campaign銆佺ぞ濯掋€佺綉绔欍€佹紨绀哄拰钀ラ攢璧勪骇锛屾牳蹇冩槸鎶婂鏉備俊鎭浆鎴愭竻鏅颁笖绗﹀悎鍝佺墝瑙勮寖鐨勫瑙︾偣瑙嗚銆?,
    next: "鐢ㄨ嫳鏂囩畝鍘嗗拰浣滃搧闆嗙洿鎺ユ姇銆傚厛鏀句俊鎭眰绾ф竻妤氥€佸搧鐗屼竴鑷存€у己鐨勯」鐩紝鍐嶆斁 campaign銆佺ぞ濯掋€佺綉椤靛拰婕旂ず绯荤粺锛涙眰鑱屼俊鍥炲簲鍖荤枟鍚堣銆佸彲璁块棶鎬у拰 AI 杈呭姪宸ヤ綔娴併€?,
    languageKey: "light",
    language: "娴佸埄鑻辫蹇呴渶锛涘叾浠栬瑷€浠呬负鍔犲垎锛屾湭鍐欒タ鐝墮璇姹?,
    changeType: "new",
  },
  885: {
    direction: "ecommerce",
    company: "Social Scout",
    statusKey: "live",
    experienceKey: "junior",
    experienceLabel: "鍒濅腑绾?/ 2 骞翠互涓?,
    locationKey: "remote",
    locationLabel: "瑗跨彮鐗欒繙绋?/ contractor锛涚害 15:00鈥?3:00",
    titleZh: "鐢靛晢浜у搧璇︽儏椤佃璁″笀锛圥DP / 杞寲璁捐锛?,
    titleEs: "PDP Designer 鈥?e-commerce y conversi贸n",
    reason: "娴佸埄鑻辫銆佸叏杩滅▼锛孭DP銆乴anding銆佺Щ鍔ㄧ銆丄/B 娴嬭瘯銆丗igma 涓?Shopify 閮藉緢璐寸數鍟嗚瑙夊欢灞曪紱浣嗗繀椤绘寜缇庡浗涓滈儴鏃堕棿宸ヤ綔锛屼笖鍚堝悓鍒朵笌钖祫閲戦閮芥湭鏄庣‘銆?,
    next: "鍙湁鑳芥帴鍙楃害 15:00鈥?3:00 鐨勮タ鐝墮鏃堕棿鍐嶆姇銆傚厛纭鏃惰柂鎴栨湀钖€佷繚搴曞伐鏃躲€乤ut贸nomo銆佷粯娆惧懆鏈熴€佸姞鐝笌淇敼杈圭晫锛涗綔鍝侀泦鐢?PDP銆佺Щ鍔ㄧ璇︽儏椤点€丄/B 鍙樹綋鍜岃浆鍖栫粨鏋滃紑鍦恒€?,
    languageKey: "light",
    language: "娴佸埄鑻辫蹇呴渶锛涙湭鍐欒タ鐝墮璇姹?,
    changeType: "new",
  },
  886: {
    direction: "social",
    company: "JUNGLE / MeMe",
    statusKey: "live",
    experienceKey: "junior",
    experienceLabel: "鍒濈骇鎴栬祫娣卞潎鍙?,
    locationKey: "barcelona",
    locationLabel: "宸村缃楅偅 / Calle 脕lava 111",
    titleZh: "绀句氦濯掍綋鍓緫涓庤瑙夎璁?,
    titleEs: "Social Editor 鈥?dise帽o y edici贸n de v铆deo",
    reason: "闀挎湡鍏ㄨ亴锛屾贩鍚堣壓鏈寚瀵笺€佸钩闈㈣璁°€佽棰戝壀杈戙€乵eme銆乀ikTok銆佸瓧骞曠郴缁熷拰鎻愭鏉匡紱浣嗚亴浣嶅叏鏂囦笌鏈湴 agency workflow 鍧囦负瑗胯璇锛屼笉鑳藉綋鎴愯嫳璇弸濂藉矖銆?,
    next: "鍏堢敤鑻辨枃鎴栫畝鍗曡タ璇闂洟闃熷伐浣滆瑷€銆傚緱鍒拌偗瀹氱瓟澶嶅悗锛屽啀鍙?social-first 瑙嗚銆佸揩閫熷壀杈戙€佸瓧骞曠郴缁熴€乵eme / TikTok 鍜?presentation board 妗堜緥銆?,
    languageKey: "unknown",
    language: "鏈叕寮€璇█绛夌骇锛涜タ璇亴浣嶄笌鏈湴浠ｇ悊鍟嗗伐浣滆澧?,
    changeType: "new",
  },
  887: {
    direction: "digital",
    company: "Kave Home",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "缁忛獙瑕佹眰寰呯‘璁?,
    locationKey: "other",
    locationLabel: "Sils, Girona / 鐜板満鍔炲叕",
    titleZh: "瑙嗛鍓緫涓庡姩鎬佽璁″笀锛堝搧鐗?/ 鐢靛晢 / 闆跺敭锛?,
    titleEs: "Video Editor & Motion Designer",
    reason: "瀹跺叿鐢熸椿鏂瑰紡鍝佺墝鐨勫悗鏈熴€乵otion銆佽皟鑹蹭笌闊抽宀椾綅锛屽唴瀹硅鐩?branding銆佺數鍟嗐€佺ぞ濯掋€乸aid media 鍜岄浂鍞紱浣嗚姹傚湪 Sils 鐜板満鍔炲叕锛屼笖澶勪簬瑗胯宸ヤ綔璇銆?,
    next: "鍏堢‘璁ゆ瘡鍛ㄧ幇鍦哄ぉ鏁般€丅arcelona 閫氬嫟鍙鎬с€佹棩甯歌瑷€鍜岃柂璧勩€傚彧鏈夊湴鐐瑰彲鎺ュ彈鍐嶆姇锛屼綔鍝侀泦鏀惧搧鐗屽奖鐗囥€佷骇鍝?/ 绌洪棿鍓緫銆佺數鍟嗗彉浣撱€乵otion銆佽皟鑹插拰澹伴煶璁捐銆?,
    languageKey: "unknown",
    language: "鑱屼綅鍏ㄦ枃涓鸿タ璇紝浣嗘病鏈夊叕寮€鍏蜂綋璇█绛夌骇",
    changeType: "new",
  },
  888: {
    direction: "brand",
    company: "Mindrift",
    statusKey: "live",
    experienceKey: "junior",
    experienceLabel: "绾?2 骞寸粡楠屼紭鍏?,
    locationKey: "remote",
    locationLabel: "瑗跨彮鐗欒繙绋?/ freelance锛涙椿璺冩湡绾?10鈥?0 灏忔椂",
    titleZh: "鑷敱鑱屼笟婕旂ず璁捐甯堬紙淇℃伅璁捐锛?,
    titleEs: "Presentation Designer freelance",
    reason: "鑻辫 B2銆佽繙绋嬨€佹紨绀哄拰 one-pager 淇℃伅璁捐闂ㄦ鐩稿鍙嬪ソ锛屽彲浣滀负鍝佺墝鍙欎簨鐨勮ˉ鍏呮敹鍏ワ紱浣嗛」鐩噺涓嶄繚璇侊紝涓嶆槸瀹屾暣 VI 姝ｈ亴銆?,
    next: "鍏堢‘璁よタ鐝墮 contractor / aut贸nomo 鏉′欢銆佸疄闄呰垂鐜囥€佹渶浣庨」鐩噺銆佷粯娆惧懆鏈熴€佹暟鎹娇鐢ㄥ拰娴嬭瘯鏄惁鏈夎柂锛涗綔鍝侀泦绐佸嚭鍝佺墝婕旂ず绯荤粺銆佷俊鎭眰绾у拰澶嶆潅鍐呭鍙鍖栥€?,
    languageKey: "light",
    language: "鑻辫 B2锛涙湭鍐欒タ鐝墮璇姹?,
    changeType: "new",
  },
  889: {
    direction: "ecommerce",
    company: "Dragons Group",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "涓骇 / 3鈥? 骞?,
    locationKey: "barcelona",
    locationLabel: "宸村缃楅偅 / 娣峰悎鍔炲叕",
    titleZh: "椋熷搧楗枡琛屼笟涓骇骞抽潰璁捐甯?,
    titleEs: "Dise帽ador/a gr谩fico/a mid 鈥?alimentaci贸n y bebidas",
    reason: "鏃㈡湁 Danone / FMCG 宀椾綅浠ユ柊缂栧彿閲嶆柊鍙戝竷锛屽綋鍓嶅叆鍙ｆ洿鍙潬锛涘伐浣滆仛鐒︾數鍟嗐€佺ぞ濯掋€佹暟瀛?campaign銆佸甯傚満 adaptation 鍜岄珮浜ч噺涓嬬殑鍝佺墝涓€鑷存€с€?,
    next: "缁х画浼樺厛鎶曞綋鍓嶉摼鎺ワ紝浣滃搧闆嗘斁 FMCG銆佺數鍟嗐€佺ぞ濯掓ā鏉裤€佸灏哄 adaptation 鍜屽彲鎵╁睍鐢熶骇绯荤粺銆傜綉绔欏凡鎶婃柊鏃х紪鍙峰悎骞讹紝鏈湴鎶曢€掕繘搴︿笉浼氫涪澶便€?,
    languageKey: "light",
    language: "鑻辫鑹ソ / 楂樼骇涓虹悊鎯筹紱鍏朵粬璇█鍔犲垎锛屾湭鍐欒タ鐝墮璇‖闂ㄦ",
    changeType: "refresh",
  },
  890: {
    direction: "brand",
    company: "Dragons Group",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "涓骇 / 3鈥? 骞?,
    locationKey: "barcelona",
    locationLabel: "宸村缃楅偅 / 娣峰悎鍔炲叕",
    titleZh: "鍋ュ悍涓庣敓娲绘柟寮忚壓鏈寚瀵?,
    titleEs: "Art Director 鈥?wellness y lifestyle",
    reason: "鏃㈡湁宀椾綅浠ユ柊缂栧彿閲嶆柊鍙戝竷锛屽綋鍓嶅叆鍙ｅ彲鎶曪紱瑕嗙洊 social-first銆乨igital銆乧reator 鍜?integrated campaign锛岃嫳璇姹傛槑纭€?,
    next: "宸叉湁姒傚康鍒涙剰銆佺ぞ濯?campaign銆乧reator 鍐呭鍜岃法娓犻亾瑙嗚鏃跺啀鎶曪紱鑻ヨ祫鍘嗗亸鎵ц锛屼紭鍏堝悓鍏徃鐨?Mid Graphic Designer銆傛柊鏃х紪鍙峰凡鍚堝苟銆?,
    languageKey: "light",
    language: "娴佸埄鑻辫蹇呴渶锛涘叾浠栬瑷€浠呬负鍔犲垎",
    changeType: "refresh",
  },
  891: {
    direction: "digital",
    company: "Dragons Group",
    statusKey: "live",
    experienceKey: "senior",
    experienceLabel: "璧勬繁 / 闇€鍖荤枟琛屼笟涓庡甫鏁欑粡楠?,
    locationKey: "barcelona",
    locationLabel: "宸村缃楅偅 / 娣峰悎鍔炲叕",
    titleZh: "鍖昏嵂琛屼笟璧勬繁骞抽潰璁捐甯?,
    titleEs: "Senior Graphic Designer para pharma",
    reason: "鏃㈡湁鍖昏嵂璧勬繁宀椾互鏂扮紪鍙烽噸鏂板彂甯冿紱鑻辫鍙嬪ソ锛岃亴璐ｈ鐩?campaign銆佹暟瀛楄祫浜с€佹紨绀哄拰鍥㈤槦甯︽暀锛屼絾鍖荤枟鍚堣缁忛獙鏄湡瀹為棬妲涖€?,
    next: "鍙湁鍏峰鍖荤枟 / 鍖昏嵂妗堜緥鍜屽甫鏁欑粡楠屽啀鎶曘€傚惁鍒欐妸鏃堕棿缁欐湰杞柊鍑虹幇鐨?Mid Pharma锛涙柊鏃х紪鍙峰凡鍚堝苟骞朵繚鐣欏綋鍓嶇敵璇峰叆鍙ｃ€?,
    languageKey: "light",
    language: "娴佸埄鑻辫蹇呴渶锛涙湭鍐欒タ鐝墮璇姹?,
    changeType: "refresh",
  },
  892: {
    direction: "digital",
    company: "Qoria / Qustodio",
    statusKey: "live",
    experienceKey: "senior",
    experienceLabel: "璧勬繁 / 5 骞翠互涓?,
    locationKey: "barcelona",
    locationLabel: "宸村缃楅偅甯備腑蹇?/ 娣峰悎鍔炲叕",
    titleZh: "鏁板瓧璁捐甯堬紙钀ラ攢涓庡搧鐗岀郴缁燂級",
    titleEs: "Digital Designer 鈥?marketing y sistemas de marca",
    reason: "鏃㈡湁寮哄尮閰嶅矖浣嶄互鏂扮紪鍙烽噸鏂板彂甯冿紱鑱岃矗瑕嗙洊缃戠珯銆乴anding銆丆RM / email銆佺ぞ濯掋€佷粯璐?campaign銆佹紨绀哄拰鍝佺墝绯荤粺锛屽苟鍏紑 EUR30,000鈥?0,000 钖祫銆?,
    next: "鐢ㄨ嫳鏂囦綔鍝侀泦鎶曞綋鍓嶅叆鍙ｏ紝绐佸嚭澶氭笭閬撴暟瀛楃郴缁熴€丗igma銆乧ampaign銆丆RM / landing 鍜屽彲鎵╁睍鍝佺墝缁勪欢銆傛柊鏃х紪鍙峰凡鍚堝苟锛屾湰鍦拌繘搴︿細娌跨敤銆?,
    languageKey: "light",
    language: "娴佸埄鑻辫蹇呴渶锛涜タ鐝墮璇珮搴﹂噸瑙嗕絾鏈啓涓虹‖闂ㄦ",
    changeType: "refresh",
  },
  893: {
    direction: "digital",
    company: "CrowdStrike",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "鍒濅腑绾?/ 2 骞翠互涓?,
    locationKey: "remote",
    locationLabel: "Barcelona / 瑗跨彮鐗欒繙绋?,
    titleZh: "鍒涙剰鍐呭璁捐甯堬紙鍝佺墝鍐呭涓庤璁＄郴缁燂級",
    titleEs: "Dise帽ador/a de contenido creativo 鈥?remoto",
    reason: "鏈疆鏈€寮虹殑鏂版満浼氾細瀹樻柟 Workday 褰撳墠鍙姇锛岃嫳璇伐浣溿€佹湭鍒楄タ璇紱鑱岃矗鎶婂搧鐗屽欢灞曞埌婕旂ず銆乷ne-pager銆佷俊鎭浘銆乶ewsletter銆佽棰戙€佸姩鐢汇€佹ā鏉垮拰鏃犻殰纰嶈璁＄郴缁燂紝瑕佹眰 2 骞翠互涓婄粡楠屻€?,
    next: "浼樺厛浠庡畼鏂?Workday 鐢ㄨ嫳鏂囩敵璇枫€備綔鍝侀泦鍏堟斁鍝佺墝绯荤粺鍜屽娓犻亾 adaptation锛屽啀鏀惧鏉備俊鎭彲瑙嗗寲銆佹紨绀恒€佺ぞ濯?/ 瑙嗛涓庢ā鏉夸綋绯伙紱纭杩滅▼鑼冨洿銆佸姙鍏鐜囥€佽柂璧勩€佸悎鍚屼富浣撳拰宸ヤ綔璁稿彲銆?,
    languageKey: "light",
    language: "鑻辫宸ヤ綔锛涘叕寮€姝ｆ枃鏈垪瑗跨彮鐗欒瑕佹眰",
    changeType: "new",
  },
  894: {
    direction: "digital",
    company: "Ogilvy Spain",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "涓骇 / 2鈥? 骞?,
    locationKey: "barcelona",
    locationLabel: "宸村缃楅偅 / 娣峰悎鍔炲叕",
    titleZh: "Liquid 璁捐甯堬紙瑙嗛鍓緫涓庣ぞ浜ゅ姩鎬侊級",
    titleEs: "Liquid Designer 鈥?edici贸n de v铆deo y motion social",
    reason: "褰撳墠鑱屼綅鍐嶆寮€鏀撅細鏁板瓧 campaign銆丷eels銆乀ikTok銆丼horts銆乵otion銆佹湰鍦板寲鍜屽搧鐗屼竴鑷存€ч兘寰堣创鏁板瓧寤跺睍锛涙贩鍚堝姙鍏斂绛栬緝鐏垫椿锛屼絾浠ｇ悊鍏徃鏃ュ父璇█涓庤柂璧勬湭鍏紑銆?,
    next: "鍏堢敤鑻辨枃璇㈤棶鍥㈤槦宸ヤ綔璇█鍜岃柂璧勶紝鍐嶆彁浜?45鈥?0 绉?reel銆佺ぞ浜?campaign銆佸灏哄鏈湴鍖栧拰鍝佺墝妯℃澘妗堜緥銆傜綉绔欏凡涓庢棫璁板綍鍚堝苟骞朵繚鐣欏綋鍓嶅叆鍙ｃ€?,
    language: "鏈槑绀鸿瑷€瑕佹眰锛汢arcelona 浠ｇ悊鍏徃宸ヤ綔娴佸彲鑳戒緷璧栬タ璇?,
    changeType: "refresh",
  },
  895: {
    direction: "digital",
    company: "KOROSHI GROUP",
    statusKey: "live",
    experienceKey: "unknown",
    experienceLabel: "缁忛獙骞撮檺鏈槑纭?,
    locationKey: "barcelona",
    locationLabel: "Barber脿 del Vall猫s / Barcelona 鍛ㄨ竟",
    titleZh: "褰卞儚鍒涗綔鑰咃紙AI 瑙嗛涓庡搧鐗屽彊浜嬶級",
    titleEs: "Film Maker 鈥?v铆deo y storytelling con IA",
    reason: "鏃跺皻銆佺數鍟嗗拰鍝佺墝鍐呭鐨勫鍚堝矖浣嶏紝瑕嗙洊绛栧垝銆佹媿鎽勩€佸壀杈戙€佸晢鍝佸浘銆丼hopify銆乥anner銆乶ewsletter銆丆RM銆佺ぞ濯掋€乸aid ads 涓?AI 宸ュ叿锛涗絾鏈湴闆跺敭鍥㈤槦璇鍋忚タ璇€?,
    next: "鍏堢敤鑻辨枃闂伐浣滆瑷€銆佽柂璧勩€佸悎鍚屽拰鍔炲叕棰戠巼锛涗綔鍝侀泦鏀炬椂灏?/ 鍟嗗搧鎷嶆憚銆佺煭瑙嗛绯诲垪銆丼hopify 瑙嗚銆乶ewsletter銆乸aid social 鍜屼汉宸ョ簿淇悗鐨?AI 娴佺▼銆?,
    language: "鑻辫涓珮姘村钩涓哄姞鍒嗭紱瑗胯鏈啓绛夌骇锛屼絾鏈湴鍥㈤槦瀛樺湪璇█椋庨櫓",
    changeType: "new",
  },
  896: {
    direction: "production",
    company: "RB Rotulaci贸n Barcelona",
    statusKey: "verify",
    experienceKey: "unknown",
    experienceLabel: "缁忛獙瑕佹眰鏈畬鏁村叕寮€",
    locationKey: "barcelona",
    locationLabel: "Badalona / Barcelona 鍛ㄨ竟",
    titleZh: "骞垮憡鏍囪瘑鎺掔増涓庤溅闂村埗浣?,
    titleEs: "Maquetista 鈥?producci贸n de taller",
    reason: "褰撳墠鍙鐨勬湰鍦板埗浣滅嚎绱紝娑夊強鏂囦欢妫€鏌ャ€両llustrator / Corel / Photoshop銆佹墦鍗拌鑶滃拰鏍囪瘑瀹夎锛涙洿鍋忓箍鍛婂埗浣滆惤鍦帮紝涓嶆槸鍝佺墝 VI锛屼笖娌℃湁鎭㈠鍑虹ǔ瀹氱殑鑱屼綅鐩磋揪椤点€?,
    next: "鍏堜粠鍏徃椤电‘璁ゆ槸鍚︿粛鎷涳紝骞堕棶鍚堝悓銆佽柂璧勩€佸叏淇濄€佽瑷€銆佽璁′笌杞﹂棿鍗犳瘮鍙婇┚鐓?/ 杞﹁締瑕佹眰锛涘彧鏈夋効鎰忓仛鏍囪瘑鍒朵綔鏃跺啀鎶曘€?,
    language: "璇█鏈叕寮€锛涙湰鍦拌溅闂存矡閫氬彲鑳戒緷璧栬タ璇?,
    changeType: "new",
  },
  897: {
    direction: "brand",
    company: "D&M asesores / 鐜╁叿涓庡効绔ヤ績閿€瀹㈡埛",
    statusKey: "live",
    experienceKey: "senior",
    experienceLabel: "璧勬繁 / 5 骞翠互涓?,
    locationKey: "barcelona",
    locationLabel: "宸村缃楅偅 / 姣忓懆 3 澶╄繙绋?,
    titleZh: "鐜╁叿涓庡効绔ヤ績閿€骞抽潰璁捐甯?,
    titleEs: "Dise帽ador/a gr谩fico/a 鈥?juguetes y promociones infantiles",
    reason: "褰撳墠鍙姇銆佹棤闄愭湡鍚堝悓銆佹瘡鍛?3 澶╄繙绋嬶紱鍖呰銆佷骇鍝佹紨绀恒€佹覆鏌撱€佺煝閲忔彃鐢诲拰鍗板埛瀹岀楂樺害鍖归厤锛屽苟瑕佹眰楂樻按骞宠嫳璇€佹湭鍐欒タ璇‖闂ㄦ锛屼絾 5 骞翠互涓婄粡楠屾槸闂ㄦ銆?,
    next: "鐢ㄨ嫳鏂囨潗鏂欑敵璇凤紝浣滃搧闆嗙獊鍑哄寘瑁呯郴鍒椼€佺粨鏋?/ 鍒€妯°€佷骇鍝佹覆鏌撱€佹彃鐢讳笌鍗板墠锛涢潰璇曟椂纭瀹㈡埛涓讳綋銆佽柂璧勩€佽瘯鐢ㄦ湡鍜岃繙绋嬫斂绛栥€傜綉绔欏凡涓庢棫璁板綍鍚堝苟銆?,
    languageKey: "light",
    language: "楂樻按骞宠嫳璇紱鍏紑姝ｆ枃鏈垪瑗跨彮鐗欒纭棬妲?,
    changeType: "refresh",
  },
  898: {
    direction: "digital",
    company: "Intracon Consulting / HP Site Print",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "鍒濅腑绾?/ 2 骞翠互涓?,
    locationKey: "barcelona",
    locationLabel: "Sant Cugat del Vall猫s / 娣峰悎鍔炲叕",
    titleZh: "璁捐涓庤惀閿€鍐呭鏀寔锛圚P 鍝佺墝鍐呭锛?,
    titleEs: "Dise帽o y soporte de contenido de marketing",
    reason: "鑻辫鍙嬪ソ銆佹湭鍒楄タ璇紝褰撳墠鍙敵璇凤紱12 涓湀鍏ㄨ亴鍚堝悓鍙画锛岃亴璐ｈ鐩?HP 鍝佺墝璧勪骇銆佷骇鍝佸唴瀹广€佸彂甯?playbook銆佹紨绀恒€佹ā鏉夸笌 Workfront銆傛鍓嶅洜鈥滆柂璧勬湭鍏紑鈥濊璇垽涓哄叧闂紝鐜板凡绾犳銆?,
    next: "鐢ㄨ嫳鏂囦綔鍝侀泦绐佸嚭 B2B / 绉戞妧鍝佺墝銆佷骇鍝佸彂甯冦€佹紨绀恒€佹ā鏉跨郴缁熴€佽法鍥㈤槦鍗忎綔鍜岄珮浜ч噺涓嬬殑涓€鑷存€э紱纭宸ヨ祫銆佺画绾︽鐜囥€佸姙鍏ぉ鏁板拰闆囦剑涓讳綋銆?,
    languageKey: "light",
    language: "楂樻按骞宠嫳璇繀闇€锛涙湭鍒楄タ鐝墮璇姹?,
    changeType: "refresh",
  },
  899: {
    direction: "brand",
    company: "Jobgether / 鍖垮悕鍚堜綔鍏徃",
    statusKey: "live",
    experienceKey: "senior",
    experienceLabel: "涓祫娣?/ 4 骞翠互涓?,
    locationKey: "remote",
    locationLabel: "瑗跨彮鐗欒繙绋?,
    titleZh: "鍝佺墝涓庤瑙夎璁″笀",
    titleEs: "Brand & Visual Designer",
    reason: "鍝佺墝璇嗗埆銆佺綉椤?/ landing銆乧ampaign銆佺ぞ濯掋€佸嵃鍒枫€佹椿鍔ㄣ€佺郴缁熶笌妯℃澘閮藉緢璐寸洰鏍囷紱浣嗗疄闄呴泧涓诲尶鍚嶏紝钖祫鍜岃瑷€鏈叕寮€锛岀敵璇峰彲淇″害浣庝簬鐩存嫑銆?,
    next: "鍙姇鍏紑绠€鍘嗕笌浣滃搧闆嗭紝浣嗗湪鏀跺埌鍙牳楠屽叕鍙稿叏绉般€佸叕鍙稿煙鍚嶉偖绠便€佷功闈㈣亴浣嶈鏄庡拰钖祫鑼冨洿鍓嶏紝涓嶆彁渚涜瘉浠躲€侀摱琛岃祫鏂欐垨鍏嶈垂瀹屾暣璇曠銆?,
    opaqueEmployer: true,
    language: "璇█鏈叕寮€锛涢渶鍏堢‘璁よ嫳璇兘鍚︿綔涓哄伐浣滆瑷€",
    changeType: "new",
  },
  900: {
    direction: "digital",
    company: "Experis Espa帽a / 瀹㈡埛鏈叕寮€",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "涓骇 / 2鈥? 骞?,
    locationKey: "remote",
    locationLabel: "瑗跨彮鐗欒繙绋?,
    titleZh: "鍒涙剰璁捐甯堬紙鏁板瓧 campaign锛?,
    titleEs: "Creative Designer 鈥?campa帽as digitales",
    reason: "Spain remote锛岃亴璐ｈ鐩?key visual銆佹暟瀛?campaign銆佺ぞ濯掋€乵oodboard 涓?storyboard锛涗絾鑱屼綅姝ｆ枃涓鸿タ璇紝瀹㈡埛銆佽柂璧勩€佸悎鍚屽拰宸ヤ綔璇█閮芥病鏈夊叕寮€銆?,
    next: "鍏堢敤鑻辨枃璇㈤棶椤圭洰瀹㈡埛銆佸洟闃熻瑷€銆佸悎鍚屾湡闄愩€佽柂璧勫拰杩滅▼闆囦剑鏂瑰紡锛涚‘璁ゅ悗鍐嶆彁浜?campaign銆乲ey visual銆佺ぞ濯掑拰 storyboard 妗堜緥銆?,
    opaqueEmployer: true,
    language: "鏈垪璇█绛夌骇锛涜タ璇亴浣嶆鏂囦笌鏈湴鎷涜仒鏂瑰甫鏉ユ矡閫氶闄?,
    changeType: "new",
  },
  901: {
    direction: "brand",
    company: "BYD Europe / DENZA",
    statusKey: "live",
    experienceKey: "senior",
    experienceLabel: "璧勬繁 / 5 骞翠互涓?,
    locationKey: "other",
    locationLabel: "Madrid",
    titleZh: "DENZA 鍒涙剰涓庤璁′笓鍛?,
    titleEs: "Creative & Design Specialist 鈥?DENZA",
    reason: "涓浗姹借溅鍝佺墝銆佽亴璐ｆ兜鐩栧嵃鍒枫€佹暟瀛椼€佺ぞ濯掋€乧ampaign銆佹ā鏉垮拰鍝佺墝瑙勮寖锛涗笉瑕佹眰瑗胯锛屼絾寰疯姣嶈鎴栭珮绾ф按骞虫槸鏄庣‘纭棬妲涳紝鍦扮偣涔熷湪 Madrid銆?,
    next: "鍙湁寰疯杈惧埌宸ヤ綔姘村钩涓旇兘鎺ュ彈 Madrid 鏃跺啀鎶曪紱鍚﹀垯淇濈暀瑙傚療锛屼笉鍥犫€滀腑鍥藉搧鐗屸€濇爣绛捐繘鍏ラ珮浼樺厛绾с€?,
    languageHard: true,
    language: "鑻辫娴佸埄锛屽苟瑕佹眰寰疯姣嶈鎴栭珮绾э紱瑗跨彮鐗欒涓嶆槸闂ㄦ",
    changeType: "new",
  },
  902: {
    direction: "digital",
    company: "GRUP MEDIAPRO / 3Cat",
    statusKey: "live",
    experienceKey: "junior",
    experienceLabel: "鍒濈骇 / 鏁板瓧鍐呭缁忛獙",
    locationKey: "barcelona",
    locationLabel: "宸村缃楅偅",
    titleZh: "鍒濈骇骞抽潰璁捐甯堬紙3Cat 鏁板瓧鍐呭锛?,
    titleEs: "Dise帽ador/a gr谩fico junior 鈥?contenidos digitales 3Cat",
    reason: "鏂版敹褰曠殑鏁板瓧瑙嗚宀楋紝瑕嗙洊鏁板瓧鍒涙剰銆佽鍚唴瀹广€丮otion Graphics銆佸鏍煎紡閫傞厤銆佽瑙夌郴缁熷拰鍙墿灞曟ā鏉匡紱浣嗙啛缁冨姞娉拌鏄槑纭繀闇€鏉′欢銆?,
    next: "褰撳墠鍔犳嘲璇笉瓒虫椂涓嶆姇銆傝嫢浠ュ悗璇█杈惧埌宸ヤ綔姘村钩锛屼綔鍝侀泦搴旂獊鍑哄獟浣撴暟瀛楄瑙夈€佺ぞ濯掓ā鏉裤€丮otion銆佹椂鏁堝唴瀹瑰揩閫熼€傞厤鍜屽彲鎵╁睍鐢熶骇绯荤粺銆?,
    languageKey: "spanish",
    languageHard: true,
    language: "鐔熺粌鍔犳嘲璇繀闇€锛涘睘浜庢槑纭湰鍦拌瑷€纭棬妲?,
    changeType: "new",
  },
  903: {
    direction: "digital",
    company: "fhios / 鏈€缁堝鎴锋湭鍏紑",
    statusKey: "live",
    experienceKey: "unknown",
    experienceLabel: "缁忛獙骞撮檺鏈槑纭?,
    locationKey: "barcelona",
    locationLabel: "宸村缃楅偅",
    titleZh: "澶氭笭閬撹瑙夎璁″笀锛圓I 鍒涙剰娴佺▼锛?,
    titleEs: "Dise帽ador/a 鈥?producci贸n multicanal e IA",
    reason: "澶氭笭閬撹瑙夈€佽棰戙€佹紨绀恒€佷綔鍝佸鏍稿拰 AI 鍒涙剰娴佺▼閮戒笌鐩爣鐩稿叧锛沠hios 涓讳綋鐪熷疄锛屼絾鑱屼綅鏈嶅姟鐨勬渶缁堝鎴枫€佽柂璧勩€侀」鐩湡闄愬拰宸ヤ綔璇█娌℃湁鍏紑銆?,
    next: "鍏堢敤鑻辨枃璇㈤棶瀹為檯瀹㈡埛銆佹棩甯歌瑷€銆佸悎鍚屾湡闄愩€佽柂璧勩€佸姙鍏瘮渚嬨€佷綔鍝佷繚瀵嗗拰娴嬭瘯鏄惁浠樿垂锛涘緱鍒颁功闈㈢瓟澶嶅悗鍐嶆彁浜ゅ搧鐗屽娓犻亾銆佽棰戙€佹紨绀轰笌 AI 绮句慨妗堜緥銆?,
    opaqueEmployer: true,
    language: "楂樿嫳璇彧鍐欏姞鍒嗭紱瑗胯瑕佹眰鍜屽疄闄呭鎴疯瑷€鍧囨湭鍏紑",
    changeType: "new",
  },
  904: {
    direction: "brand",
    company: "Wall Street English",
    statusKey: "live",
    experienceKey: "senior",
    experienceLabel: "璧勬繁 / 6 骞翠互涓婁笌甯︽暀缁忛獙",
    locationKey: "barcelona",
    locationLabel: "Barcelona 甯備腑蹇?/ 姣忓懆 3 澶╄繙绋?,
    titleZh: "璁捐璐熻矗浜猴紙鍏ㄧ悆鍝佺墝绯荤粺锛岀害 6 涓湀鏇垮矖锛?,
    titleEs: "Design Lead 鈥?cobertura de maternidad",
    reason: "褰撳墠鍙姇鐨勮嫳璇搧鐗岀郴缁熻礋璐ｄ汉宀楋細鍏ㄧ悆鍝佺墝琛ㄨ揪銆佽璁＄郴缁熴€佹ā鏉裤€乧ampaign銆佹暟瀛楀钩鍙般€乸erformance creative 鍜屽甫棰?2 鍚嶅垵绾ц璁″笀锛涗絾鍚堝悓绾?6 涓湀涓旇姹?6 骞翠互涓婄粡楠屻€?,
    next: "鍙湁鍏峰鍏ㄧ悆鍝佺墝娌荤悊鍜屽甫鏁欑粡楠屾椂鍐嶆姇銆備綔鍝侀泦灞曠ず璁捐绯荤粺銆乧ampaign銆佸洟闃?review 涓庢暟鎹┍鍔ㄥ垱鎰忥紱纭钖祫銆佽瘯鐢ㄦ湡銆佺画鏈熷彲鑳藉強鏇垮矖缁撴潫鍚庣殑瀹夋帓銆?,
    languageKey: "light",
    language: "鑹ソ鑻辫蹇呴渶锛涙湭鍒楄タ鐝墮璇姹?,
    changeType: "refresh",
  },
  905: {
    direction: "brand",
    company: "Steneg / 鏈叕寮€宸ヤ笟瀹㈡埛",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "涓骇 / 3 骞翠互涓?,
    locationKey: "barcelona",
    locationLabel: "Granollers / Barcelona 鍛ㄨ竟",
    titleZh: "骞抽潰璁捐甯堬紙鍝佺墝娌荤悊銆佸寘瑁呬笌娴佺▼鏁板瓧鍖栵級",
    titleEs: "Dise帽ador/a gr谩fico/a 鈥?marca, packaging y procesos",
    reason: "褰撳墠鍙姇鐨勫叏鑱岃嫳璇矖锛屽搧鐗屻€佸寘瑁呫€佸睍浼氥€佺洰褰曘€佸奖鍍忋€佸嵃鍓嶃€佺礌鏉愬簱銆佸鎵瑰拰璁捐娴佺▼鏁板瓧鍖栭兘寰堝畬鏁达紱浣嗗疄闄呭伐涓氬鎴枫€佽柂璧勫拰鍔炲叕鏂瑰紡鏈叕寮€銆?,
    next: "鐢ㄨ嫳鏂囨潗鏂欑敵璇凤紝浣嗗厛闂鎴峰叏绉般€丟ranollers 鍦板潃銆佽柂璧勩€佸悎鍚屻€佸姙鍏柟寮忓拰鏁版嵁澶勭悊涓讳綋锛涘彧鍏堟彁浜ゅ叕寮€ CV 涓庝綔鍝侀泦銆?,
    opaqueEmployer: true,
    languageKey: "light",
    language: "楂樻按骞宠亴涓氳嫳璇繀闇€锛涙湭鍒楄タ鐝墮璇姹?,
    changeType: "refresh",
  },
  906: {
    direction: "brand",
    company: "INFiLED / 瑙嗙埖鍏夋棴",
    chineseFit: true,
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "涓珮绾?/ 闇€鐙珛璐熻矗涓庤壓鏈寚瀵?,
    locationKey: "barcelona",
    locationLabel: "宸村缃楅偅",
    titleZh: "骞抽潰璁捐甯堬紙EMEA 鍝佺墝涓庡娓犻亾浼犳挱锛?,
    titleEs: "Dise帽ador/a gr谩fico/a 鈥?marca EMEA y comunicaci贸n multicanal",
    reason: "褰撳墠浠嶅彲鎶曠殑涓浗鍝佺墝鑻辫宀楋紝璐熻矗鑹烘湳鏂瑰悜銆佹暟瀛椾笌鍗板埛銆佺綉椤点€佹椿鍔ㄥ睍鍙般€佸甯傚満 adaptation銆佸唴閮ㄤ紶鎾拰鍝佺墝涓€鑷存€э紱鏈垪瑗胯瑕佹眰銆?,
    next: "浼樺厛鐢ㄨ嫳鏂囩敵璇凤紝浣滃搧闆嗙獊鍑哄搧鐗岀郴缁熴€丅2B 绉戞妧銆佺綉椤点€佸睍浼氱┖闂淬€佸甯傚満 adaptation 鍜?art direction锛屽苟鑷劧璇存槑涓枃鑳藉姏锛涚‘璁よ柂璧勩€佸悎鍚屼富浣撱€佸姙鍏鐜囧拰宸ヤ綔璁稿彲銆?,
    languageKey: "light",
    language: "娴佸埄鑻辫蹇呴渶锛涙湭鍒楄タ鐝墮璇姹?,
    changeType: "refresh",
  },
  907: {
    direction: "brand",
    company: "ELADIET S.A.",
    statusKey: "live",
    experienceKey: "senior",
    experienceLabel: "涓祫娣?/ 4 骞翠互涓?,
    locationKey: "barcelona",
    locationLabel: "El Papiol / Barcelona 鍛ㄨ竟",
    titleZh: "鍝佺墝涓庝紶鎾钩闈㈣璁″笀",
    titleEs: "Dise帽ador/a gr谩fico/a 鈥?marca y comunicaci贸n",
    reason: "鍖呰銆佷紒涓氬舰璞°€乧ampaign銆佺ぞ濯掋€佺綉绔欍€?D銆丩ogo銆乶aming 鍜屽嵃鍓嶉兘闈炲父璐村悎锛涗絾鎷涜仒鍏ㄦ枃銆佹枃妗堝崗浣滃拰鏈湴鍥㈤槦宸ヤ綔娴佷负瑗胯锛屼笖钖祫鏈叕寮€銆?,
    next: "褰撳墠涓嶈繘鍏ヤ綆璇█浼樺厛銆傝嫢瑕佹寫鎴橈紝鍏堢敤鑻辨枃璇㈤棶鍥㈤槦宸ヤ綔璇█銆佽柂璧勫拰鍔炲叕鏂瑰紡锛屽啀鎻愪氦鍋ュ悍 / 椋熷搧鍖呰銆佸搧鐗岀郴缁熴€乧ampaign銆?D mockup 涓庡嵃鍓嶆渚嬨€?,
    languageKey: "spanish",
    language: "鑻辫 B2锛涙湭鍐欒タ璇瓑绾э紝浣嗘湰鍦板搧鐗屼笌鏂囨宸ヤ綔娴佹瀯鎴愯緝楂樿タ璇闄?,
    changeType: "refresh",
  },
  908: {
    direction: "digital",
    company: "Top Doctors Group",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "涓骇 / 3 骞翠互涓?,
    locationKey: "barcelona",
    locationLabel: "宸村缃楅偅 / 娣峰悎鍔炲叕",
    titleZh: "钀ラ攢璁捐甯堬紙澶氬搧鐗岃瑙夛級",
    titleEs: "Marketing Designer 鈥?identidad visual multimarca",
    reason: "姝ｅ紡鍏ㄨ亴銆佸叕寮€骞磋柂 EUR22,000鈥?4,000锛岃鐩栧鍝佺墝 identity銆乧ampaign銆佺ぞ濯掋€乪mail銆乴anding銆佹紨绀恒€佹椿鍔ㄥ拰杞婚噺瑙嗛锛涗絾钖祫瀵?3 骞翠互涓婄粡楠屽亸淇濆畧锛屽洟闃熷伐浣滄祦涓鸿タ璇€?,
    next: "鑻ヨ兘鎺ュ彈钖祫鍐嶆姇锛涘厛纭鏃ュ父璇█銆佽瘯鐢ㄦ湡銆佹贩鍚堝姙鍏ぉ鏁颁笌璋冭柂鏈哄埗銆備綔鍝侀泦鏀惧鍝佺墝绯荤粺銆佹暟瀛?campaign銆乴anding銆佹紨绀哄拰杞婚噺 motion銆?,
    languageKey: "spanish",
    language: "鏈垪绛夌骇锛涙嫑鑱樺叏鏂囦笌 Barcelona 璺ㄩ儴闂ㄥ伐浣滄祦涓鸿タ璇?,
    changeType: "refresh",
  },
  909: {
    direction: "brand",
    company: "Revolt / Anthesis",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "涓骇 / 2鈥? 骞翠互涓?,
    locationKey: "barcelona",
    locationLabel: "宸村缃楅偅",
    titleZh: "涓骇鍝佺墝璁捐甯?,
    titleEs: "Mid-weight Designer 鈥?branding y comunicaci贸n",
    reason: "branding銆乨igital銆乻ocial銆乸rint銆佹蹇点€佹紨绀轰笌鏈€缁堜氦浠橀兘寰堝噯纭紝绂忓埄涔熻緝姝ｅ紡锛涗絾鏄庣‘瑕佹眰鑻辫鍜岃タ鐝墮璇兘杈惧埌涓撲笟宸ヤ綔姘村钩銆?,
    next: "褰撳墠瑗胯涓嶈冻鏃朵笉鎶曘€傛湭鏉ヨ瑷€鎻愰珮鍚庯紝浣滃搧闆嗗簲灞曠ず鍝佺墝绛栫暐杞寲銆佹蹇点€佹暟瀛?/ 绀惧獟 / 鍗板埛銆佹紨绀哄拰瀹屾暣浜や粯銆?,
    languageKey: "spanish",
    languageHard: true,
    language: "涓撲笟鑻辫鍜岃タ鐝墮璇潎涓烘槑纭姹?,
    changeType: "refresh",
  },
  910: {
    direction: "digital",
    company: "LABHOUSE",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "涓骇 / 2 骞翠互涓?,
    locationKey: "remote",
    locationLabel: "瑗跨彮鐗欒繙绋?/ Barcelona 鍙瘡鍛ㄥ埌宀楃害 2 澶?,
    titleZh: "ASO 瑙嗚璁捐甯堬紙App 鍝佺墝涓庡闀匡級",
    titleEs: "ASO Artist 鈥?Graphic Designer",
    reason: "闀挎湡鍚堝悓銆佸湴鐐规竻妤氾紝宸ヤ綔瑕嗙洊 App 鍥炬爣銆佸晢搴楁埅鍥俱€佹帹骞胯瑙夈€佽棰戙€丩ogo銆佸搧鐗屽厓绱犮€乻tyle guide 鍜?App 鍐呰祫浜э紝姝ｅソ杩炴帴鍝佺墝绯荤粺銆佹暟瀛椾骇鍝佷笌澧為暱璁捐銆?,
    next: "杩欐潯鍙斁鍦ㄨ嫳璇閫夈€傝嫢鑳藉€熷姪缈昏瘧宸ュ叿瀹屾垚鑻辨枃鐢宠锛屼綔鍝侀泦棣栭〉鏀?App 鍥炬爣 / 鎴浘绯荤粺銆佸搧鐗岃鑼冦€乸erformance creative銆佸姩鏁堝拰鏁版嵁杩唬妗堜緥锛涘厛纭钖祫銆佽瘯鐢ㄦ湡銆佸姙鍏鐜囦笌鎶€鏈祴璇曟槸鍚︿粯璐广€?,
    languageKey: "light",
    language: "娴佸埄鑻辫蹇呴渶锛涜タ鐝墮璇彧绠楀姞鍒?,
    applicationMode: "english",
    changeType: "new",
  },
  911: {
    direction: "social",
    company: "inBeat Agency / Creative Milkshake",
    statusKey: "live",
    experienceKey: "unknown",
    experienceLabel: "缁忛獙骞撮檺鏈叕寮€",
    locationKey: "remote",
    locationLabel: "瑗跨彮鐗欒繙绋?,
    titleZh: "瑙嗛缂栬緫涓庤瑙夎璁″笀锛圖TC 绀惧獟骞垮憡锛?,
    titleEs: "Video Editor & Designer",
    reason: "瑗跨彮鐗欏彲杩滅▼鍏ㄨ亴锛岃礋璐?Reels銆乀ikTok銆乊ouTube銆丮eta 鐨勭煭 / 闀胯棰戯紝骞跺埗浣滅缉鐣ュ浘銆乷verlay銆乪nd card 涓庡瓧骞曡祫浜э紱鏇村亸绀惧獟骞垮憡鍜岃浆鍖栧垱鎰忥紝涓嶆槸绾?VI銆?,
    next: "杩欐潯鍙斁鍦ㄨ嫳璇閫夈€傚厛纭瀹為檯鍚堝悓涓讳綋銆佸伐浣滄椂鍖恒€佽柂璧勩€佷紤鍋囥€佽澶囥€佺増鏉冨拰娴嬭瘯鏄惁浠樿垂锛涗綔鍝侀泦绮鹃€?4鈥? 涓?storyboard 鍒版垚鐗囥€佸瓧骞?/ 鍥惧舰绯荤粺銆佸灏哄閫傞厤涓庢暟鎹凯浠ｆ渚嬨€?,
    languageKey: "light",
    language: "鑱屼綅椤甸潰涓庡崗浣滄祦绋嬩负鑻辨枃锛涙湭鍒楄タ鐝墮璇姹?,
    applicationMode: "english",
    changeType: "new",
  },
  912: {
    direction: "digital",
    company: "Jobgether / 鍖垮悕鍚堜綔鏂?,
    statusKey: "live",
    experienceKey: "senior",
    experienceLabel: "涓祫娣?/ 4 骞翠互涓?,
    locationKey: "remote",
    locationLabel: "瑗跨彮鐗欒繙绋?,
    titleZh: "钀ラ攢瑙嗚璁捐甯堬紙澶氬搧鐗屾暟瀛楀唴瀹癸級",
    titleEs: "Marketing Visual Designer",
    reason: "鑱岃矗寰堣创鏁板瓧鍝佺墝寤跺睍锛屼絾鏈€缁堥泧涓绘湭鍏紑锛岄〉闈㈠張鍚屾椂鍐?full-time 鍜岀害 20 灏忔椂 / 鍛紱瀹冩槸鐪熷疄鍙墦寮€鐨勮仛鍚堢敵璇峰叆鍙ｏ紝涓嶆槸淇℃伅閫忔槑鐨勯泧涓荤洿鎷涖€?,
    next: "鍏堥棶鏈€缁堥泧涓汇€佸叏鑱岃繕鏄害 20 灏忔椂銆佽柂璧勩€佸悎鍚屼富浣撱€佹椂鍖恒€佽瑷€鍜屼釜浜烘暟鎹帴鏀舵柟锛涘緱鍒颁功闈㈢瓟澶嶅悗锛屽啀鍐冲畾鏄惁鎻愪氦瀹屾暣鏉愭枡銆?,
    opaqueEmployer: true,
    languageKey: "light",
    language: "椤甸潰涓庣敵璇蜂负鑻辨枃锛涘疄闄呭洟闃熻瑷€鏈叕寮€",
    applicationMode: "english",
    changeType: "refresh",
  },
  913: {
    direction: "social",
    company: "ALOHAS",
    chineseFit: true,
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "涓珮绾?/ 3鈥? 骞翠簹娲插競鍦虹粡楠?,
    locationKey: "barcelona",
    locationLabel: "宸村缃楅偅 / 娣峰悎鍔炲叕",
    titleZh: "浜氭床甯傚満钀ラ攢涓庡叕鍏崇粡鐞嗭紙涓浗 / 闊╁浗锛?,
    titleEs: "Asia Marketing & PR Manager",
    reason: "瀹樻柟鐙珛鑱屼綅椤甸噸鏂板嚭鐜板畬鏁寸敵璇疯〃銆傛櫘閫氳瘽鎴栭煩璇瘝璇槸鏍稿績鏉′欢锛屽伐浣滆鐩栧皬绾功銆佹姈闊炽€佸井淇°€佸井鍗氥€佷簹娲插唴瀹规湰鍦板寲銆並OL/KOC銆佸叕鍏冲拰鍒涙剰鍥㈤槦 brief锛涗笉鏄函 VI锛屼絾涓枃甯傚満涓庤瑙夊唴瀹瑰欢灞曢珮搴︾浉鍏炽€?,
    next: "鍙斁鍦ㄤ腑鏂囩浉鍏崇殑鑻辫澶囬€夛紝涓嶈繘鍏モ€滀腑鏂囧嵆鍙姇鈥濋椤点€傚厛鍑嗗鑻辨枃绠€鍘嗗拰 5鈥? 鍙ラ潰璇曡嚜鎴戜粙缁嶏紱鐢宠鍓嶇‘璁よ柂璧勩€佸伐浣滆鍙€佷細璁瑷€銆佹瘡鍛ㄥ姙鍏澶╂暟鍜屼簹娲插嚭宸鐜囥€?,
    languageKey: "light",
    language: "鏅€氳瘽鎴栭煩璇瘝璇紱涓撲笟鑻辫蹇呴渶锛涙湭鍒楄タ鐝墮璇姹?,
    applicationMode: "english",
    changeType: "refresh",
  },
  914: {
    direction: "brand",
    company: "Trivelta",
    statusKey: "live",
    experienceKey: "junior",
    experienceLabel: "鍒濅腑绾?/ 1鈥? 骞?,
    locationKey: "barcelona",
    locationLabel: "宸村缃楅偅 / 娣峰悎鍔炲叕",
    titleZh: "骞抽潰璁捐甯堬紙涓夊搧鐗岃瑙変笌鏁板瓧寤跺睍锛?,
    titleEs: "Graphic Designer",
    reason: "瀹樻柟 Greenhouse 宸叉仮澶嶅畬鏁?Apply銆傚矖浣嶅悓鏃剁淮鎶や笁濂楀搧鐗岀郴缁燂紝骞惰礋璐?social銆佸箍鍛娿€乴anding銆乪mail銆侀攢鍞祫鏂欍€乸itch deck 鍜屽睍浼氳祫浜э紝鏂瑰悜寰堣创鍝佺墝瑙嗚涓庢暟瀛楀欢灞曘€?,
    next: "鍙斁鍦ㄨ嫳璇閫夈€備綔鍝侀泦绐佸嚭瀹屾暣鍝佺墝绯荤粺銆佸悓涓€ campaign 鐨勫娓犻亾寤跺睍銆佸鍝佺墝涓€鑷存€у拰杞婚噺 motion锛涙姇鍓嶇‘璁よ柂璧勩€佸悎鍚屼富浣撱€佸姙鍏鐜囥€佸伐浣滆鍙拰娴嬭瘯鏀跨瓥銆?,
    languageKey: "light",
    language: "寮哄伐浣滆嫳璇繀闇€锛涘叾浠栬瑷€浠呭姞鍒嗭紱鏈垪瑗跨彮鐗欒瑕佹眰",
    applicationMode: "english",
    changeType: "refresh",
  },
  915: {
    direction: "ecommerce",
    company: "娆ф氮涓枃闆囦富锛堜富浣撳緟鏍搁獙锛?,
    chineseFit: true,
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "瑗跨彮鐗欒繙绋嬶紙甯栧瓙鍦板尯鏍囬┈寰烽噷锛?,
    titleZh: "灞呭鐢靛晢杩愯惀鍐呭嫟锛堝晢鍝佸浘鏂囦笌璇︽儏椤碉級",
    titleEs: "Operaciones e-commerce remotas 鈥?fichas e im谩genes",
    reason: "褰撳墠娆ф氮鍏紑璁板綍鏄剧ず鍙珯鍐呯敵璇枫€丒UR2,000/鏈堬紝宸ヤ綔鍖呭惈鍟嗗搧鍥炬枃銆佽鎯呴〉鍜屽浘鐗囩淮鎶わ紱姝ｆ枃娌℃湁鍐欒タ璇垨鑻辫瑕佹眰锛岄€傚悎鍏堢敤涓枃纭銆?,
    next: "鍙厛鍙戠畝鍘嗗拰浣滃搧闆嗛摼鎺ワ紝瑕佹眰涔﹂潰纭鍏徃鍏ㄧО銆佺◣鍓?绋庡悗銆佸悎鍚屾垨 aut贸nomo銆佺ぞ淇濄€佸伐鏃躲€佽瘯鐢ㄦ湡銆佸钩鍙板拰瑙嗚宸ヤ綔鍗犳瘮锛涗笉瑕佸厛鍙戣瘉浠跺師浠舵垨杞处銆?,
    opaqueEmployer: true,
    languageKey: "unknown",
    language: "涓枃骞冲彴鍙厛娌熼€氾紱姝ｆ枃鏈啓瑗胯鎴栬嫳璇姹?,
    applicationMode: "chineseCheck",
    changeType: "new",
  },
  916: {
    direction: "brand",
    company: "鏉窞娴佸厜婧㈠僵鍝佺墝绠＄悊鏈夐檺鍏徃",
    chineseFit: true,
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "涓珮绾?/ 3 骞翠互涓?,
    locationKey: "remote",
    locationLabel: "涓枃杩滅▼ Freelancer锛堥渶纭鍙惁甯搁┗瑗跨彮鐗欙級",
    titleZh: "鍝佺墝瑙嗚璁捐甯?/ AIGC锛堟捣澶栧搧鐗岋級",
    titleEs: "Dise帽ador/a visual de marca y AIGC",
    reason: "鏂瑰悜鍑犱箮瀹屽叏鍛戒腑锛歏I銆佸寘瑁呫€乁I 缁勪欢銆佺數鍟嗚瑙夈€佺嫭绔嬬珯銆佸箍鍛娿€丄IGC 鍥剧墖涓庣煭瑙嗛锛涜嫳璇彧鏄姞鍒嗛」锛屽彲涓枃鐢宠銆?,
    next: "钖祫 RMB7,000鈥?0,000/鏈堟寜瑗跨彮鐗欐垚鏈亸浣庛€傚厛纭鏄惁鎺ュ彈甯搁┗瑗跨彮鐗欍€佸伐浣滄椂鍖恒€佸噣鍒版墜銆佸伐鏃躲€佸悎鍚屻€佷粯娆惧竵绉嶃€佸彂绁ㄤ笌绀句繚锛屽啀鍐冲畾鏄惁鎶曘€?,
    languageKey: "unknown",
    language: "涓枃鐢宠锛涜嫳璇粎涓哄姞鍒嗛」",
    applicationMode: "chinese",
    changeType: "new",
  },
  917: {
    direction: "brand",
    company: "OneKey",
    chineseFit: true,
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "涓珮绾?/ 3 骞翠互涓?,
    locationKey: "remote",
    locationLabel: "鍏ㄧ悆杩滅▼锛堥渶纭瑗跨彮鐗欑绾︼級",
    titleZh: "鍝佺墝瑙嗚璁捐甯堬紙VI 涓庢暟瀛楀搧鐗屽欢灞曪級",
    titleEs: "Dise帽ador/a visual de marca",
    reason: "鏈疆鏈€寮轰腑鏂囨満浼氾細瀹樻柟涓枃宀椾綅椤典粛鍦ㄥ綋鍓嶆嫑鑱樼洰褰曪紝鑱岃矗绮剧‘瑕嗙洊鍝佺墝瑙嗚绯荤粺銆佺‖浠躲€丄pp銆佺綉绔欏拰绾夸笂绾夸笅寤跺睍锛涜嫳璇槄璇诲彧鍒椾负鍔犲垎椤癸紝鍒濈瓫鍚庣殑瀹炴搷娴嬭瘯鏄庣‘浠樿垂銆?,
    next: "鍏堢敤涓枃鐢宠骞堕檮浣滃搧闆嗭紱棣栭〉鏀惧畬鏁?VI / 鍝佺墝鎵嬪唽锛屽啀鏀?3C 鎴栫‖浠舵覆鏌撱€丄pp / 缃戠珯鍜?Campaign 寤跺睍銆傛彁浜ゅ墠纭鏄惁鎺ュ彈瑗跨彮鐗欏眳姘戙€佸悎鍚屼富浣撱€佽柂璧勫竵绉嶃€佹牳蹇冩椂鍖恒€佺◣鍔′笌绀句繚銆?,
    languageKey: "unknown",
    language: "涓枃宀椾綅椤靛拰鐢宠娴佺▼锛涜嫳璇槄璇讳粎涓哄姞鍒嗛」",
    applicationMode: "chinese",
    changeType: "refresh",
  },
  918: {
    direction: "social",
    company: "Huqiao Games",
    chineseFit: true,
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "涓珮绾?/ 3 骞翠互涓?,
    locationKey: "remote",
    locationLabel: "鍏ㄧ悆杩滅▼ / 娆ф床鏃跺尯锛堣タ鐝墮璧勬牸寰呯‘璁わ級",
    titleZh: "涓嫳鍙岃骞抽潰璁捐涓庤棰戝壀杈?,
    titleEs: "Dise帽ador/a gr谩fico/a y editor/a de v铆deo biling眉e",
    reason: "鏂拌亴浣嶇紪鍙峰綋鍓嶆樉绀虹害 21 灏忔椂鍓嶅彂甯冿紝璐熻矗涓浗涓庢捣澶栫ぞ濯掋€丆ampaign銆佸搧鐗屼竴鑷存€у拰瑙嗛锛涗絾涓嫳鏂囨祦鍒╂槸纭棬妲涳紝USD1,500/鏈堟寜瑗跨彮鐗欐垚鏈亸浣庛€?,
    next: "鍙斁澶栬浣庤柂澶囬€夈€傚厛纭鏄惁鎺ュ彈 Spain resident銆佸悎鍚屼笌浠樻涓讳綋銆佺◣鍔＄ぞ淇濄€佸閲戣鍒欏拰骞村亣锛涙棤娉曞畬鎴愯嫳鏂囬潰璇曟垨涓嶆帴鍙楄钖祫鏃剁洿鎺ヨ烦杩囥€?,
    languageKey: "light",
    language: "涓枃鍜岃嫳璇彛璇€佷功闈㈠潎椤绘祦鍒╋紱涓嶈姹傝タ鐝墮璇?,
    applicationMode: "english",
    changeType: "refresh",
  },
  919: {
    direction: "brand",
    company: "Brightest Star锛堟硶瀹氫富浣撴湭鎶湶锛?,
    chineseFit: true,
    opaqueEmployer: true,
    statusKey: "verify",
    experienceKey: "mid",
    experienceLabel: "涓骇 / 2鈥? 骞?,
    locationKey: "remote",
    locationLabel: "鍏ㄧ悆杩滅▼锛堣タ鐝墮璧勬牸寰呯‘璁わ級",
    titleZh: "鍝佺墝瑙嗚璁捐甯堬紙浜ゆ槗鎵€ VI 涓庢暟瀛楀欢灞曪級",
    titleEs: "Dise帽ador/a visual de marca 鈥?VI y canales digitales",
    reason: "涓枃鑱屼綅銆乁SD5,000鈥?,000/鏈堬紝鑱岃矗绮剧‘瑕嗙洊 Logo銆乂I銆佸搧鐗屾墜鍐屻€佸畼缃戙€丄pp銆並V銆丠5 鍜?Campaign锛涗絾闆囦富鍙啓 Brightest Star锛屾硶瀹氫富浣撲笌浜у搧鏈姭闇诧紝Web3 椋庨櫓楂樸€?,
    next: "鍙厛鎶曞叕寮€绠€鍘嗗拰浣滃搧闆嗛摼鎺ャ€傚繀椤绘牳瀹炲叕鍙稿叏绉般€佷骇鍝佸煙鍚嶃€佸叕鍙搁偖绠便€佸悎鍚屼笌浠樻涓讳綋锛涘嚒瑕佹眰鍏ラ噾銆佷拱甯併€佺即璐广€侀挶鍖呭姪璁拌瘝鎴栧厤璐瑰畬鏁存柟妗堬紝绔嬪嵆鍋滄銆?,
    languageKey: "unknown",
    language: "涓枃鑱屼綅锛涘熀纭€鑻辨枃璁捐鏈浠呬负鍔犲垎椤?,
    applicationMode: "chineseCheck",
    changeType: "new",
  },
  920: {
    direction: "brand",
    company: "瑷€鐏垫棤鐣屼俊鎭挩璇紙鍖椾含锛夋湁闄愬叕鍙?,
    chineseFit: true,
    statusKey: "verify",
    experienceKey: "unknown",
    experienceLabel: "缁忛獙鏈叕寮€",
    locationKey: "remote",
    locationLabel: "涓枃杩滅▼鍏艰亴锛堥渶纭瑗跨彮鐗欒祫鏍硷級",
    titleZh: "鍏艰亴鍝佺墝瑙嗚璁捐甯堬紙璺ㄥ鍝佺墝鍜ㄨ锛?,
    titleEs: "Dise帽ador/a visual de marca a tiempo parcial",
    reason: "涓枃鍏艰亴銆丷MB10,000鈥?5,000/鏈堬紝宸ヤ綔瑕嗙洊绀惧獟銆佺綉绔欍€佺墿鏂欍€佽棰戝拰鍝佺墝涓€鑷存€э紱浣嗗彂甯冧簬 2026-02-24锛屽師濮嬫櫤鑱旇鎯呭凡涓嶇ǔ瀹氾紝涓嶈兘褰撲綔褰撳墠纭畾鍦ㄦ嫑銆?,
    next: "鍏堜腑鏂囧喎璇㈤棶鏄惁浠嶆嫑銆佹槸鍚︽帴鍙?Spain resident銆佹瘡鍛ㄥ伐鏃躲€佹椂鍖恒€佸悎鍚?/ 鍙戠エ / 绀句繚鍜屾祴璇曟槸鍚︿粯璐癸紱鏈彇寰楀彲鏍搁獙鍏徃鐨勪功闈㈠洖澶嶅墠涓嶅仛瀹氬埗璇曠銆?,
    languageKey: "unknown",
    language: "涓枃宀椾綅鎽樿锛涙湭鏄剧ず瑗胯鎴栬嫳璇姹?,
    applicationMode: "chineseCheck",
    changeType: "new",
  },
});

Object.assign(CURATED, {
  979: {
    direction: "digital",
    company: "Storyblok",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Europe 杩滅▼锛圫pain 璧勬牸寰呯‘璁わ級",
    titleZh: "2D 鍔ㄦ€佽璁″笀锛堜骇鍝?/ 鍝佺墝鍔ㄦ晥锛?,
    titleEs: "2D Motion Designer 鈥?Europe",
    reason: "杩欎笉鏄櫘閫氬壀杈戝矖锛氳礋璐ｄ骇鍝佹紨绀恒€乫eature explainer銆乁I animation銆佸彂甯?娲诲姩/绀惧獟鍐呭锛屽苟寤虹珛鍙鐢ㄧ殑瑙嗛璁捐绯荤粺銆乵otion principles 鍜屾ā鏉裤€?,
    next: "鐢ㄨ嫳鏂?motion-first 浣滃搧闆嗙敵璇凤紱棣栭〉鏀?product demo銆佸搧鐗屽姩鏁堢郴缁熴€佹ā鏉垮寲璧勪骇鍜屽鏉傛妧鏈蹇电殑瑙嗚瑙ｉ噴銆傚厛纭 Spain 鍚堝悓瀹炰綋銆佹椂鍖轰笌绂忓埄銆?,
    language: "鑻辨枃鍥介檯鍥㈤槦锛涘畼鏂规湭鍒楄タ璇姹傦紝浣?Spain payroll 闇€纭",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "涓骇 / 3鈥? 骞?,
    changeType: "new",
  },
  980: {
    direction: "brand",
    company: "VML",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid 鎴?onsite",
    titleZh: "鑹烘湳鎸囧锛堝搧鐗?campaign / AI / motion锛?,
    titleEs: "Art Director",
    reason: "璐熻矗楂樿姹?campaign銆佸搧鐗岃韩浠藉拰璺ㄦ笭閬撹瑙夋柟鍚戯紱Adobe銆丄I銆丗igma銆乵otion/video 閮芥湁浠峰€硷紝鏂瑰悜绮剧‘璐磋繎鍝佺墝瑙嗚涓庤壓鏈寚瀵笺€?,
    next: "鍙湁鑳藉鐞?Catalan/Spanish agency brief 鍜屽鎴锋矡閫氭椂鍐嶆姇銆備綔鍝侀泦鍐欐竻涓汉 art-direction 璐＄尞銆乧ampaign 姒傚康銆乻toryboard銆佸埗浣滃拰鏈€缁堝娓犻亾钀藉湴銆?,
    language: "鑻辨枃涓?Catalan 涓珮瑕佹眰锛涙湰鍦板洟闃熻瑷€闇€纭",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "璧勬繁 / 5鈥? 骞?agency",
    changeType: "new",
  },
  981: {
    direction: "brand",
    company: "VML",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid 鎴?onsite",
    titleZh: "璧勬繁鑹烘湳鎸囧锛?60 campaign / brand storytelling锛?,
    titleEs: "Senior Art Director",
    reason: "璐熻矗 360 campaign銆佸搧鐗屾晠浜嬨€佸鎴锋彁妗堝拰瑙嗛/鍔ㄦ晥寤跺睍锛涜嫳鏂囬珮姘村钩鏄庣‘锛孉I 鍜?motion 鏄姞鍒嗛」銆?,
    next: "鍙湪 senior agency 缁忛獙鐪熷疄鍖归厤鏃舵姇銆傚噯澶?campaign concept 鈫?art direction 鈫?production 鈫?final rollout 鐨勫畬鏁存渚嬶紝鑰屼笉鏄彧鍙戦潤鎬?VI銆?,
    language: "鑻辨枃楂樻按骞冲繀闇€锛涜タ璇?鍔犳嘲璇伐浣滃満鏅渶纭",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "璧勬繁 / 5鈥? 骞?,
    changeType: "new",
  },
  982: {
    direction: "digital",
    company: "VML The Cocktail",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid锛屽钩鍧囩害 4 澶╁姙鍏",
    titleZh: "浜у搧璁捐甯堬紙瑙嗚绯荤粺 / 鏁板瓧鍝佺墝妗ユ帴锛?,
    titleEs: "Product Designer",
    reason: "閭昏繎鏁板瓧鍝佺墝璺嚎锛氫粠 0 鍒?1 浜у搧銆佽瑙変竴鑷存€с€乤ccessibility銆丗igma 鍜?design system锛涜嫳鏂囪姹傛槑纭紝閫傚悎璇佹槑鍝佺墝濡備綍钀藉埌鏁板瓧浜у搧绯荤粺鐨勪汉銆?,
    next: "浠呭湪 portfolio 鏈夌晫闈㈢郴缁熴€佺粍浠躲€佺敤鎴锋祦绋嬪拰浜у搧鍐崇瓥鏃舵姇锛涗笉瑕佸彧鎻愪氦 VI 椤圭洰銆傚厛纭骞冲潎鍔炲叕瀹ゅぉ鏁般€佽柂璧勫拰 work permit銆?,
    language: "鑻辨枃瑕佹眰鏄庣‘锛涘叕寮€姝ｆ枃鏈垪瑗胯纭棬妲?,
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "涓珮绾?/ 4+ 骞?,
    changeType: "new",
  },
  983: {
    direction: "brand",
    company: "InfoHuaxin / 鍗庢柊鍒嗙被涓枃娓犻亾",
    chineseFit: true,
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 鍏ㄨ亴锛涙潯浠跺緟鏍搁獙",
    titleZh: "骞垮憡鍏徃鍏ㄨ亴骞抽潰璁捐甯堬紙涓枃绾跨储锛?,
    titleEs: "Dise帽ador/a gr谩fico/a 鈥?pista de canal chino",
    reason: "涓枃鍒嗙被椤?7 鏈?22 鏃ュ嚭鐜扮殑鍏ㄨ亴骞抽潰璁捐甯堢嚎绱紝瑕佹眰缁忛獙銆丄I銆佸伐浣滃眳鐣欏拰鍏ㄤ繚锛涗絾娌℃湁鍏徃涓讳綋銆佽柂璧勩€佸湴鍧€鎴栨寮忕敵璇峰叆鍙ｃ€?,
    next: "鍙厛鐢ㄤ腑鏂囬棶鍏徃鍏ㄧО銆佸湴鍧€銆佽柂璧勩€佸悎鍚?绀句繚銆佽蒋浠躲€佸伐浣滃唴瀹规瘮渚嬪拰宸ヤ綔璇█锛涚‘璁や富浣撳悗鍐嶅彂 CV/portfolio銆?,
    language: "涓枃娓犻亾锛涘伐浣滆瑷€鏈叕寮€",
    applicationMode: "chineseCheck",
    changeType: "new",
  },
  984: {
    direction: "digital",
    company: "Waiis",
    statusKey: "verify",
    locationKey: "other",
    locationLabel: "Manresa / 4 澶╁姙鍏 + 1 澶╄繙绋?,
    titleZh: "骞抽潰璁捐涓庢枃妗堬紙Manresa 鐗堬級",
    titleEs: "Graphic Designer and Copywriter 鈥?Manresa",
    reason: "鏂扮増鏈亴璐ｄ粛瑕嗙洊 web銆乴anding銆乻ocial銆乸aid銆乨eck銆乵otion 鍜?AI锛屽苟鍏紑 鈧?5,000鈥?0,000锛涗絾鍦扮偣浠庢棫 Barcelona 鐗堟湰鍙樹负 Manresa銆?,
    next: "鍏堢‘璁ゆ槸鍚︿粛鏀剁敵璇枫€佸疄闄呭姙鍏湴鍧€銆佸伐浣滆瑷€銆乪mployment/freelance 褰㈠紡鍜?Barcelona 閫氬嫟鍙鎬э紱涓嶈娌跨敤鏃?Barcelona 甯栦綔涓哄湴鐐硅瘉鎹€?,
    language: "瑗胯鑱屼綅锛涜瑷€涓庡悎鍚岄渶纭",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "涓骇 / 2鈥? 骞?,
    changeType: "refresh",
  },
  985: {
    direction: "digital",
    company: "The Builder Studios",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote EU timezones / freelance锛圫pain 鍚堝悓寰呯‘璁わ級",
    titleZh: "瑙嗚璁捐甯堬紙鍝佺墝瑙嗚 + motion锛?,
    titleEs: "Visual Designer 鈥?Remote EU / Freelance",
    reason: "瀹樻柟宀椾綅鍚屾椂瑕佹眰楂樿川閲忓搧鐗岃瑙夈€乵otion graphics銆丟IF/Lottie銆乸itch deck銆佸搧鐗屼竴鑷存€у拰 visual standards/guidelines锛屽伐鍏峰寘鎷?Figma銆丄dobe 鍜?After Effects锛涗笌鏁板瓧鍝佺墝寤跺睍鍜屽姩鎬佺爺绌剁洿鎺ョ浉杩炪€?,
    next: "鐢ㄨ嫳鏂?CV + portfolio 鐢宠锛涢椤垫斁 brand systems銆乵otion studies銆佹暟瀛楄祫浜у拰鍙鐢?guidelines銆傚厛纭 Spain contractor銆佽垂鐜囥€侀」鐩噺銆佸悎鍚屾湡闄愬拰绋庡姟鏂瑰紡銆?,
    language: "鑻辨枃浼樺厛锛涘矖浣嶆湭璇存槑瑗胯锛孲pain 鍚堝悓璧勬牸寰呯‘璁?,
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "涓骇 / 3+ 骞达紱freelance",
    changeType: "new",
  },
  986: {
    direction: "brand",
    company: "COROS",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote UK / EU锛圫pain EOR 涓庡嚭宸緟纭锛?,
    titleZh: "鍝佺墝鍒涙剰鍒朵綔浜猴紙浜у搧鍙戝竷 / 褰卞儚 / motion锛?,
    titleEs: "Brand Creative Producer 鈥?Remote UK / EU",
    reason: "瀹樻柟宀椾綅瑕嗙洊浜у搧鍙戝竷銆佽繍鍔ㄥ憳鏁呬簨銆佸搧鐗屽奖鐗囥€佺ぞ濯掑唴瀹广€佽禌浜嬫縺娲汇€佺‖浠?杞欢鏁欒偛锛屼互鍙婁粠 brief銆佹媿鎽勫埌鍓緫浜や粯鐨勫畬鏁村搧鐗屽唴瀹归摼璺紱鏄庣‘鍐?UK/EU 鍜?compliant EOR銆?,
    next: "鐢ㄨ嫳鏂囨潗鏂欏厛璇㈤棶 Spain EOR銆佹娲插嚭宸鐜囥€佺編鍥藉洟闃熷崗浣滄椂娈点€佽柂璧勫拰鍒朵綔/璁捐姣斾緥锛涗綔鍝侀泦鏀惧搧鐗屽彂甯冦€乻toryboard銆佸壀杈戝拰瑙嗚涓€鑷存€ф渚嬨€?,
    language: "鑻辨枃浼樺厛锛涙湭鍒楄タ璇紝Spain 鍚堝悓璧勬牸寰呯‘璁?,
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "涓骇 / 3+ 骞达紱full-time",
    changeType: "new",
  },
  987: {
    direction: "brand",
    company: "Casa Asia / HKU Europe",
    chineseFit: true,
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona锛堜腑鑻辫タ涓夎涓庤惀閿€/杩愯惀闂ㄦ锛?,
    titleZh: "Marketing & Branding Officer锛圚KU Europe锛?,
    titleEs: "Marketing & Branding Officer 鈥?HKU Europe",
    reason: "杩欐槸 Barcelona 涓枃鐢熸€侀噷灏戣鐨勬竻鏅板搧鐗屽矖浣嶏細璐熻矗鍝佺墝鎸囧崡涓€鑷存€с€佺綉绔?绀惧獟/閭欢銆乧ampaign銆佹椿鍔ㄣ€佷緵搴斿晢涓庢暟鎹垎鏋愶紱JD 鏄庣‘瑕佹眰涓枃銆佽嫳鏂囧拰瑗胯銆?,
    next: "鍙湁瑗胯鑳藉疄闄呭伐浣滀笖鎺ュ彈钀ラ攢/杩愯惀姣斾緥杈冮珮鏃跺啀鎶曪紱鍏堥棶鍚堝悓銆佽柂璧勩€佸埌宀椼€佸惎鍔ㄦ椂闂淬€佽瑙夊埗浣滄槸鍚﹀唴鍖咃紝浠ュ強 WeChat/Xiaohongshu/Weibo 鐨勫伐浣滄瘮渚嬨€?,
    language: "涓枃銆佽嫳鏂囥€佽タ璇潎涓?essential锛涜タ璇槸纭棬妲?,
    applicationMode: "chineseCheck",
    experienceKey: "mid",
    experienceLabel: "涓骇锛沵arketing / branding",
    changeType: "new",
  },  988: {
    direction: "digital",
    company: "PVcase",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Spain remote / Barcelona office option",
    titleZh: "鍝佺墝鍔ㄦ€佽璁″笀锛圫pain remote / 鈧?2k鈥?2k锛?,
    titleEs: "Motion Designer 鈥?Remote Spain",
    reason: "鐩墠鏈€瀹屾暣鐨?Spain-remote Brand + Motion 鍏ュ彛涔嬩竴锛氬搧鐗?campaign銆佺ぞ濯?骞垮憡/缃戠珯/瑙嗛銆佷骇鍝?UI key visual銆乻toryboard銆佸搧鐗屾寚鍗椼€佸彲澶嶇敤妯℃澘鍜?AI workflow 閮藉湪瀹樻柟鑱岃矗閲岋紝鐢宠琛ㄧ洿鎺ョ‘璁?Spain/Catalunya銆?,
    next: "鐢ㄨ嫳鏂囨潗鏂欑洿鎺ョ敵璇凤紱棣栧睆鏀?identity 鈫?motion銆佷骇鍝佽В閲婅瑙夈€乻toryboard銆佹ā鏉跨郴缁熷拰 AI 杈呭姪娴佺▼銆傜‘璁ゅ悎鍚屽疄浣撱€丅arcelona office 棰戠巼銆佺鍒╁拰钖祫鏄惁鎸?Spain band銆?,
    language: "鑻辨枃蹇呴渶锛涙湭鍒楄タ璇‖闂ㄦ",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "涓骇 / 3鈥?+ 骞?,
    changeType: "new",
  },
  989: {
    direction: "digital",
    company: "Storisell",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Spain remote / Barcelona hybrid 鎴?onsite",
    titleZh: "鍔ㄦ€佽璁″笀锛圫pain / Barcelona 鍥㈤槦锛?,
    titleEs: "Motion Designer 鈥?Spain",
    reason: "瀹樻柟 careers 鏄庣‘鍐?Spain remote銆丅arcelona/Valencia in-house 鍥㈤槦锛屽伐浣滆鐩?storyboard銆乮llustration銆乤nimation銆乻ound design 鍜?final proofing锛屽苟鍙洿鎺ュ彂 CV/portfolio 鍒?hr@storisell.com銆?,
    next: "鍏堥偖浠剁‘璁ゅ綋鍓嶆槸鍚︿粛鎷涖€佽柂璧?鍚堝悓銆佽瑷€鍜屽姙鍏棰戠巼锛屼互鍙婂矖浣嶆槸 explainer/video production 杩樻槸鍖呭惈 brand-system design锛涙潗鏂欑獊鍑哄畬鏁村埗浣滈摼璺€?,
    language: "鍏紑椤甸潰鏈垪纭瑷€闂ㄦ锛涢渶纭",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "涓骇锛沵otion production",
    changeType: "new",
  },
  990: {
    direction: "digital",
    company: "Revolut",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Spain remote锛堝畼鏂硅鎯呭緟閲嶆柊鎵撳紑锛?,
    titleZh: "鍔ㄦ€佽璁″笀锛圔rand Studio / Spain remote锛?,
    titleEs: "Motion Designer 鈥?Remote Spain",
    reason: "瀹樻柟鎼滅储缁撴灉鏄庣‘鏄剧ず Brand Studio銆丼pain remote 涓?Apply锛屼絾鏈疆鐩存帴鎵撳紑璇︽儏椤甸亣鍒?cache miss锛涜瘉鎹瓑绾т綆浜庡凡鎵撳紑 ATS锛屼笉鎶婂畠褰撳凡瀹屽叏纭鐨勫彲鎶曞矖浣嶃€?,
    next: "鍏堥噸鏂版墦寮€ revolut.com 瀹樻柟璇︽儏锛岀‘璁よ柂璧勩€乻eniority銆丼pain payroll 鍜?portfolio 瑕佹眰锛涢〉闈㈢ǔ瀹氬悗鍐嶇敤 motion-first CV 鎶曢€掞紝涓嶄娇鐢ㄧ涓夋柟鍏ュ彛銆?,
    language: "鑻辨枃鍥介檯鍥㈤槦锛涘叿浣撹姹傚緟瀹樻柟璇︽儏鎭㈠",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "寰呯‘璁?,
    changeType: "new",
  },  991: {
    direction: "digital",
    company: "Santander Espa帽a",
    statusKey: "live",
    locationKey: "madrid",
    locationLabel: "Madrid / Spain锛沨ybrid 寰呯‘璁?,
    titleZh: "Creative Tech & Digital Designer锛圕RM / email / AI锛?,
    titleEs: "Creative Tech & Digital Designer 鈥?Madrid",
    reason: "瀹樻柟 Workday 鏄庣‘瑕嗙洊 CRM銆乪mail銆乶ewsletter 涓?lifecycle campaign 鍒涙剰锛岃姹?art direction銆丗igma components/variants/templates銆乵odular systems銆乤ccessibility銆乪mail QA锛屽苟鍏佽 AI-assisted ideation/versioning/personalization锛涙槸鍝佺墝绯荤粺涓庢暟瀛楀搧鐗屽欢灞曠殑寮洪偦鎺ユ満浼氥€?,
    next: "鍏堟墦寮€ ATS 纭褰撳墠 Apply銆乭ybrid/office pattern銆丼panish working-language expectations 涓庤柂璧勶紱鎶曢€掓椂浣跨敤 brand-system + digital lifecycle + AI workflow 璇佹嵁锛岃€屼笉鏄硾骞抽潰浣滃搧銆?,
    language: "professional English preferred锛涜タ璇伐浣滅幆澧冨緟纭",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "涓珮绾?/ CRM & digital systems",
    changeType: "new",
  },
  995: {
    direction: "brand",
    company: "Amenitiz",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / Spain锛涢渶鎼縼鎴栧湪鍦?,
    titleZh: "Senior Brand & Content Manager锛堝搧鐗屽唴瀹?/ 6涓湀锛?,
    titleEs: "Senior Brand & Content Manager 鈥?Barcelona",
    reason: "瀹樻柟 Greenhouse 鍙洿鎺?Apply锛岃礋璐ｅ洓甯傚満鍝佺墝鍐呭銆佸叏娓犻亾鏂囨銆乪ditorial calendar銆乧reative briefing 涓?brand positioning锛涗絾鏍稿績鏄?copywriting/content strategy锛屼笉鏄函瑙嗚宀椾綅銆?,
    next: "鍙湁鍦ㄨ嫳鏂囨枃妗堣兘鍔涘拰瑗胯/娉曡/鎰忓ぇ鍒╄鑷冲皯涓€绉嶆瘝璇骇鏉′欢鐪熷疄鍖归厤鏃跺啀鎶曪紱鍑嗗鐪熶汉鍐欎綔 cover letter锛屼笉鐢?AI 浠ｅ啓锛屽苟鎶婁綔鍝侀泦褰撲綔鍝佺墝鎬濊€冧綈璇併€?,
    language: "鑻辫宸ヤ綔璇█锛涜タ璇?娉曡/鎰忓ぇ鍒╄鑷冲皯涓€绉?native-level",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "涓珮绾?/ brand content",
    changeType: "new",
  },
  996: {
    direction: "ecommerce",
    company: "PriorityChef",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote锛汼pain 璧勬牸寰呯‘璁?,
    titleZh: "Amazon Creative Designer / 3D锛堢數鍟嗚瑙夛級",
    titleEs: "Amazon Creative Designer / 3D 鈥?Remote",
    reason: "瀹樻柟 Workable 鐢宠椤电湡瀹炲彲鐢紝琛ㄥ崟鐩存帴鏍搁獙 Amazon image stacks銆丄+銆佷綔鍝侀摼鎺ュ拰 Blender/绛夋晥 3D锛涘叕寮€鑱岃矗瑕嗙洊 hero images銆佺煭瑙嗛銆乥rand store 鍜岀ぞ濯掕瑙夛紝鏄數鍟嗗搧鐗屽欢灞曡矾绾裤€?,
    next: "鍏堢‘璁?Spain resident銆佸悎鍚?payroll銆佽柂璧勩€佹椂鍖恒€?D浜ц兘鍜屾祴璇曟槸鍚︿粯璐癸紱鏉′欢鍙帴鍙楁椂鐢?e-commerce/product storytelling 鍏ュ彛鎶曢€掞紝涓嶈鍙彂娉?VI銆?,
    language: "鏈叕寮€锛涚敵璇峰墠纭宸ヤ綔璇█",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "涓骇 / e-commerce visual",
    changeType: "new",
  },
  997: {
    direction: "brand",
    company: "Restate",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Europe remote锛汼pain 鏈垪",
    titleZh: "Founding Brand Designer锛圓I infrastructure锛?,
    titleEs: "Founding Brand Designer 鈥?Europe Remote",
    reason: "瀹樻柟 Ashby 绱㈠紩鏄剧ず浠?visual language銆乮dentity銆亀ebsite 鍒?motion銆乨esign system銆丠TML/CSS/JS prototype 鐨勫畬鏁村搧鐗岀郴缁熻亴璐ｏ紱浣?50% contractor 璧锋涓斿畼鏂瑰垪鍑虹殑鍥藉涓嶅惈 Spain銆?,
    next: "鍏堥棶 Spain contract銆乺ate/鍛ㄦ湡銆佽浆姝ｆ潯浠跺拰鎶€鏈崗浣滄繁搴︼紱鏉愭枡鐢?identity 鈫?website 鈫?motion/system 鐨勫畬鏁存渚嬶紝涓嶈鍙睍绀洪潤鎬?logo銆?,
    language: "鑻辫宸ヤ綔鐜寰呭畼鏂圭‘璁わ紱瑗胯鏈垪",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "楂樼骇 / founding brand systems",
    changeType: "new",
  },
  998: {
    direction: "digital",
    company: "Joko",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Barcelona / remote锛涙ā寮忓緟纭",
    titleZh: "Product Designer锛圔rand 脳 Product Systems锛?,
    titleEs: "Product Designer 鈥?Barcelona / Remote",
    reason: "瀹樻柟 Ashby 绱㈠紩鏄剧ず Barcelona 鍙€夈€丷emote銆佲偓52K鈥?7K + equity锛屽苟涓?Brand Design 鐩存帴鍗忎綔锛涜亴璐ｈ鐩?mobile/web/extension銆佹垚鐔?design system 鍜屽搧鐗屼竴鑷存€э紝鏄暟瀛楀搧鐗屽欢灞曢偦鎺ヨ€岄潪绾搧鐗屽矖銆?,
    next: "鍙湪鎰挎剰鎶曚骇鍝佽瑙?绯荤粺鏂瑰悜鏃惰€冭檻锛涘厛纭 Barcelona 瀹為檯杩滅▼銆丼pain 鍚堝悓銆佽亴绾у拰 UX/鐮旂┒姣旈噸锛屾潗鏂欒ˉ鍝佺墝杩涘叆缁勪欢鍜?shipped product 鐨勮瘉鎹€?,
    language: "鏈瑗胯纭棬妲涳紱瀹樻柟璇︽儏鎭㈠鍚庡啀纭",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "涓珮绾?/ product systems",
    changeType: "new",
  },
  999: {
    direction: "production",
    company: "Gameloft",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid",
    titleZh: "Studio Art Director锛堟父鎴忚瑙?/ cross-platform锛?,
    titleEs: "Studio Art Director 鈥?Barcelona",
    reason: "瀹樻柟 Gameloft 鑱屼綅椤垫槑纭垪鍑?Barcelona銆丠ybrid銆丳ermanent contract銆丮anager Role: Yes銆丆ross-Platform 鍜?Director-level锛汼martRecruiters ATS 鏈疆杩斿洖 cache miss锛屽畬鏁磋亴璐ｄ粛闇€鐜板満澶嶆牳銆?,
    next: "鍏堢‘璁ゅ叿浣撴父鎴忛」鐩€佽瑙夋柟鍚戣亴璐ｃ€佺鐞嗘瘮渚嬨€佸伐鍏枫€佽瑷€銆佸姙鍏棰戠巼銆佽柂璧勫拰娴嬭瘯锛涘彧鏈夋父鎴?璺ㄥ钩鍙拌瑙夋柟鍚戝尮閰嶆椂鍐嶆姇銆?,
    language: "鏈叕寮€锛涘厛纭",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "楂樼骇 / game visual direction",
    changeType: "new",
  },
  1000: {
    direction: "motion",
    company: "Designity",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote EMEA / LATAM锛汼pain contract寰呯‘璁?,
    titleZh: "Motion Designer锛圓I-Driven锛?,
    titleEs: "Motion Designer (AI-Driven) 鈥?Remote EMEA",
    reason: "瀹樻柟 Designity careers 椤垫樉绀?Full-time銆丷emote銆丒MEA/LATAM锛岃亴璐ｈ鐩栧搧鐗?绀惧獟/鏁板瓧 campaign銆乻toryboard銆丄E/Premiere銆丩ottie 鍜?AI锛涢渶瑕佽嚦灏?5 灏忔椂涓庣編鍥戒笢閮ㄦ椂闂撮噸鍙狅紝鐢宠琛ㄦ湰杞湭鍔犺浇銆?,
    next: "鍏堢‘璁?Spain EOR/contract銆佸浐瀹氳柂璧勩€佸疄闄呴噸鍙犳椂娈点€佸鎴疯涓氬拰娴嬭瘯锛涙姇閫掓椂浣跨敤 motion-first 鑻辨枃鏉愭枡锛屽睍绀哄搧鐗屼竴鑷存€с€佸姩鎬佺郴缁熷拰 AI 宸ヤ綔娴併€?,
    language: "鑻辫锛涢渶 EST overlap",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "楂樼骇 / AI-driven motion",
    changeType: "new",
  },
  1001: {
    direction: "brand",
    company: "Pocket Worlds / Highrise",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote International锛汦U/LATAM鍚個",
    titleZh: "Senior Graphic Designer锛圚ighrise 鏁板瓧鏃跺皻鍝佺墝锛?,
    titleEs: "Senior Graphic Designer 鈥?Highrise / Remote International",
    reason: "瀹樻柟 Ashby 绱㈠紩鏄剧ず Remote USA/EU/LATAM銆丗ull-time 鍜岀害 USD100,000锛涜礋璐?Highrise visual output銆乧ampaign銆乸romotional assets銆佽瑙夎韩浠藉拰鍥㈤槦鍒涙剰鏍囧噯锛屼絾鐩撮〉鏄?JavaScript shell锛屼笖娓告垙/鏁板瓧鏃跺皻浣滃搧瑕佹眰鏋侀珮銆?,
    next: "鍏堢‘璁?Spain/EU 鍚堝悓涓庤柂璧勯€傜敤鎬с€乧haracter/illustrative 涓庡搧鐗?campaign 姣斾緥銆佹祴璇曞拰绠＄悊鑱岃矗锛涘彧鏈変綔鍝侀泦鑳借瘉鏄庢暟瀛楁椂灏?娓告垙瑙嗚 craft 鏃跺啀鎶曘€?,
    language: "鑻辫锛汼pain contract寰呯‘璁?,
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "楂樼骇 / game-fashion visual",
    changeType: "new",
  },
  1002: {
    direction: "motion",
    company: "Pocket Worlds / Highrise",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote International锛汦uropean time zone preferred",
    titleZh: "Motion Designer锛圡arketing / Highrise锛?,
    titleEs: "Motion Designer (Marketing) 鈥?Highrise",
    reason: "瀹樻柟 Ashby 绱㈠紩鏄剧ず鍥介檯杩滅▼銆佹娲叉椂鍖轰紭鍏堬紝璐熻矗 Meta/TikTok/Google/App Store 鐨勯潤鎬佷笌鍔ㄦ晥 performance creatives锛屼粠 concept 鍒?animation/editing/sound 鍏ㄦ祦绋嬶紱鐩撮〉鏈疆鏄?JavaScript shell銆?,
    next: "鍏堢‘璁?Spain payroll銆佸洟闃熸椂鍖恒€佽柂璧勩€佹父鎴忕粡楠屽拰 KPI锛涙姇閫掓椂鐢?performance-motion 鐗堟湰锛屽睍绀?hook銆佸墠 3 绉掋€侀潤鎬?鍔ㄦ€佸彉浣撳拰 A/B 杩唬銆?,
    language: "鑻辫锛涙娲叉椂鍖轰紭鍏?,
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "涓珮绾?/ performance motion",
    changeType: "new",
  1003: {
    direction: "brand",
    company: "Meridian Agency",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Fully remote / Barcelona-born",
    titleZh: "Graphic Designer锛堝吋鑱岋級",
    titleEs: "Graphic Designer (Part-time) 鈥?Remote",
    reason: "瀹樻柟鎷涜仒椤典粛鍒楀嚭 Graphic Designer锛汢arcelona-born agency銆佸叏杩滅▼銆佷笓涓氳嫳璇紝浣嗕粎鍏艰亴銆佹棤钖祫涓斿彧鑳介偖浠剁敵璇枫€?,
    next: "鍏堢敤鑻辨枃閭欢纭 Spain contractor銆佹瘡鍛ㄦ椂闀裤€佹椂钖€佺増鏉冨拰宸ヤ綔璇█锛涢€氳繃鍚庡啀鍙戦€佺ぞ濯掑搧鐗岀郴缁熷拰澶氬昂瀵歌瑙夋渚嬨€?,
    language: "涓撲笟鑻辫蹇呴渶锛涜タ璇湭璇存槑",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "涓骇 / part-time visual",
    changeType: "new",
  },
  1004: {
    direction: "motion",
    company: "Meridian Agency",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Fully remote / Barcelona-born",
    titleZh: "Motion Designer锛堝吋鑱岋級",
    titleEs: "Motion Designer (Part-time) 鈥?Remote",
    reason: "瀹樻柟鎷涜仒椤靛綋鍓嶅垪鍑?Motion Designer锛涘叏杩滅▼銆佽嫳璇伐浣滐紝浣嗗吋鑱屻€佹椂鍖恒€佽柂璧勪笌鍚堝悓鍧囨湭鍏紑銆?,
    next: "鍏堢‘璁ゆ瘡鍛ㄦ椂闀裤€佸浐瀹氭椂娈点€佽棰戠増鏉冨拰浜や粯娴佺▼锛涚敤 4鈥? 涓?storyboard 鍒?final 鐨勭煭 Reel 浣滀负棣栬疆鏉愭枡銆?,
    language: "涓撲笟鑻辫蹇呴渶锛涜タ璇湭璇存槑",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "涓骇 / social motion",
    changeType: "new",
  },
  1005: {
    direction: "brand",
    company: "Free Practice",
    statusKey: "verify",
    locationKey: "other",
    locationLabel: "M谩laga / onsite + Friday WFH",
    titleZh: "Senior Graphic Designer锛圡谩laga锛?,
    titleEs: "Senior Graphic Designer 鈥?M谩laga",
    reason: "鍘熷璇︽儏椤垫槑纭搧鐗?identity銆乧ampaign銆乵otion銆乻patial/experiential design銆?+ years 鍜?2026-08-19 鎴鏃ワ紱浣嗗繀椤诲湪 M谩laga 宸ヤ綔銆?,
    next: "鍙湁鎰挎剰鎼縼涓旇祫鍘嗗尮閰嶆椂鐢宠锛涘厛纭钖祫銆佸悎鍚屻€佹惉杩佹垚鏈拰琛ㄥ崟鐘舵€侊紝浣滃搧闆嗙獊鍑?identity銆乧ampaign銆乵otion 涓庣┖闂村搧鐗屻€?,
    language: "鑻辫鏄庣‘锛涙湰鍦板伐浣滆瑷€闇€纭",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "楂樼骇 / identity + experience",
    changeType: "new",
  },
  1006: {
    direction: "digital",
    company: "Social Scout Email Marketing",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Worldwide remote / EST hours",
    titleZh: "PDP Designer / Landing Page Designer",
    titleEs: "PDP Designer 鈥?Remote Contractor",
    reason: "闆囦富璇︽儏椤电粰鍑哄叏杩滅▼銆佽嫳鏂囥€丏TC PDP銆乴anding銆丗igma system 鍜?CRO锛涗絾 contractor 涓?9:00鈥?7:00 EST 鏄富瑕佹姇閫掗樆鍔涳紝鏈毚闇?ATS銆?,
    next: "鍏堢‘璁?Spain contractor銆佺◣鍔′粯娆俱€佸疄闄呴噸鍙犳椂娈靛拰娴嬭瘯鏄惁浠樿垂锛涙潗鏂欐斁 responsive e-commerce brand system銆丄/B 杩唬涓庤浆鍖栬瑙夈€?,
    language: "娴佸埄鑻辫蹇呴渶锛汦ST 宸ヤ綔鏃舵",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "涓骇 / e-commerce conversion",
    changeType: "new",
  },  1007: {
    direction: "brand",
    company: "ORBIDI",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / Sant Cugat / hybrid",
    titleZh: "Senior Graphic Designer / Brand Visual Lead",
    titleEs: "Senior Graphic Designer 鈥?Brand Visual Lead",
    reason: "瀹樻柟 Teamtailor 椤甸潰鏄剧ず Barcelona銆丠铆brido銆丗ull-time 鍜?Enviar solicitud锛涜亴璐ｇ洿鎸?Key Visual銆乥rand book銆乬uidelines銆乧ampaign銆丳R銆乸aid media 涓庡叏瑙︾偣涓€鑷存€э紝浣嗚姹傛祦鍒╄タ璇€?,
    next: "鍙湁鑳藉鐞嗚タ璇?brief銆佷細璁拰鍙嶉鏃跺啀鎶曪紱浣滃搧闆嗙獊鍑?identity system銆乥rand governance銆乧ampaign rollout銆乵otion microinteractions 鍜屽洟闃熸寚瀵笺€?,
    language: "娴佸埄瑗胯纭棬妲涳紱鑻辫涓?functional",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "楂樼骇 / brand visual lead",
    changeType: "new",
  },
  1008: {
    direction: "motion",
    company: "1000heads",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote Spain-eligible / freelance",
    titleZh: "Motion Designer锛團reelance Remote锛?,
    titleEs: "Motion Designer, Freelance 鈥?Remote Spain",
    reason: "瀹樻柟 Careers 椤靛垪鍑?Madrid Motion Designer锛屽苟閾炬帴 Workable锛汼pain 鍙敵璇枫€?+ 骞淬€丗igma/After Effects銆乻toryboard銆乧ampaign look & feel 鍜屽鍦板尯妯℃澘鍧囨槑纭€?,
    next: "鍏堢‘璁?freelance 璐圭巼銆侀」鐩繛缁€с€佺増鏉冨拰 UK/CET 閲嶅彔锛涙姇閫?motion-first Reel锛屽睍绀?storyboard銆乴ook & feel銆?D/3D 鍜屽鍦板尯鍙樹綋銆?,
    language: "鑻辫鑹ソ鑷充紭绉€锛涜タ璇湭鍒椾负纭棬妲?,
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "涓骇 / social motion",
    changeType: "new",
  },
  1009: {
    direction: "motion",
    company: "Fever",
    statusKey: "verify",
    locationKey: "madrid",
    locationLabel: "Madrid / hybrid",
    titleZh: "Senior AI Creative Designer",
    titleEs: "Senior AI Creative Designer 鈥?Madrid",
    reason: "瀹樻柟 Fever Careers 鏄剧ず Indefinite銆丗ull-time銆丄pply锛涜亴璐ｈ鐩?AI creative workflow銆乲ey visual銆乵otion銆乿ideo銆乸aid/organic銆乴anding assets 涓?performance iteration锛屼絾瑕佹眰 6+ 骞村拰瑗胯嫳鍙岃銆?,
    next: "鑻ヨタ璇湭杈炬祦鍒╋紝涓嶈繘鍏ラ鎶曪紱鑻ユ弧瓒筹紝灞曠ず AI 杈呭姪浣嗙敱浜哄伐鎶婃帶 craft 鐨?campaign system銆佹ā鏉裤€乴ocalisation 鍜屾暟鎹凯浠ｃ€?,
    language: "瑗胯 + 鑻辫娴佸埄纭棬妲?,
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "楂樼骇 / AI creative systems",
    changeType: "new",
  },
  1010: {
    direction: "digital",
    company: "Fever",
    statusKey: "verify",
    locationKey: "madrid",
    locationLabel: "Madrid / hybrid / temporary",
    titleZh: "Creative Graduate 鈥?AI Video & Design",
    titleEs: "Graduate Program 鈥?Creative Next Gen AI Video & Design",
    reason: "瀹樻柟鑱屼綅椤垫樉绀?Temporary銆丗ull-time銆丮adrid銆丄pply锛涚害 1 骞寸粡楠屽嵆鍙紝瑕嗙洊鐭棰戙€乲ey visual銆乼humbnail銆丄/B 鍙樹綋鍜?GenAI锛屼絾瑕佹眰瑗胯+鑻辫鍙岃銆?,
    next: "鍙湪绗﹀悎鏃╂湡缁忓巻/瀹炰範鏉′欢骞惰兘鍦?Madrid 宸ヤ綔鏃惰€冭檻锛涙潗鏂欐斁鍓嶄笁绉?hook銆佺煭瑙嗛鍙樹綋銆丄I workflow 鍜?performance creative锛屼笉涓庨珮绾у矖娣锋姇銆?,
    language: "瑗胯 + 鍙岃鑻辫纭棬妲?,
    applicationMode: "spanish",
    experienceKey: "junior",
    experienceLabel: "鍒濈骇 / graduate creative",
    changeType: "new",
  },
  1011: {
    direction: "brand",
    company: "JustMarkets",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Europe remote / Spain contract to confirm",
    titleZh: "Head of Design",
    titleEs: "Head of Design 鈥?Europe Remote",
    reason: "瀹樻柟 Greenhouse 鏄剧ず Europe銆丄pply 鍜?remote work锛涜亴璐ｆ妸 visual identity銆乥rand-level art direction銆乁X/UI銆乥rand guidelines銆丏esignOps銆丄I transformation 涓?Product/Graphic/Web/Motion 鍥㈤槦棰嗗鍚堝苟鍦ㄤ竴宀椼€?,
    next: "鍏堢‘璁?Spain payroll/contract銆佹槸鍚︽帴鍙?Barcelona銆佸嚭宸拰绠＄悊鑼冨洿锛涜嫢鍖归厤锛屼綔鍝侀泦棣栧睆鏀?VI governance銆佽法瑙︾偣鍝佺墝绯荤粺銆丄I workflow銆佸洟闃?critique 涓庝骇鍝佽瑙夌郴缁熴€?,
    language: "鑻辫涓轰富锛涘叾浠栬瑷€涓?Spain 浜や粯鏉′欢闇€纭",
    applicationMode: "english",
    experienceKey: "lead",
    experienceLabel: "璁捐璐熻矗浜?/ brand + product",
    changeType: "new",
  },
  1016: {
    direction: "brand",
    company: "Paradox",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Spain / Barcelona remote list",
    titleZh: "Creative Director 鈥?EdTech",
    titleEs: "Creative Director 鈥?EdTech",
    reason: "瀹樻柟 Ashby 灏?Barcelona Remote銆丷emote Spain 鍜屽涓娲插湴鐐瑰垪涓哄彲閫夛紱鑱岃矗瑕嗙洊鍙屽搧鐗屾灦鏋勩€佸唴瀹规牸寮忋€佽剼鏈?鍒嗛暅銆佽瑙夎川閲?gate銆佸唴瀹瑰洟闃熼瀵煎拰 performance creative锛屼絾娉曡 Native/Bilingual 鏄‖闂ㄦ銆?,
    next: "鍙湁鍏峰娉曡銆佺櫨涓囩骇鍐呭/濯掍綋鍝佺墝缁忛獙銆佽剼鏈笌鍥㈤槦绠＄悊鏃跺啀鎶曪紱鏉愭枡棣栧睆鏀?brand architecture銆乧ontent format system銆佽瑙夊彊浜嬨€佽法骞冲彴 rollout 涓庢暟鎹凯浠ｃ€?,
    language: "娉曡姣嶈/鍙岃纭棬妲涳紱鑻辫娴佸埄",
    applicationMode: "english",
    experienceKey: "lead",
    experienceLabel: "鍒涙剰璐熻矗浜?/ brand + content",
    changeType: "new",
  },
  1017: {
    direction: "motion",
    company: "The Flex / Base360",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Spain remote / global location list",
    titleZh: "AI Video Creator",
    titleEs: "AI Video Creator 鈥?Remote Spain",
    reason: "瀹樻柟 Ashby 鏄剧ず Spain銆丗ull time銆丷emote锛涘伐浣滆鐩栦骇鍝佸彂甯冭棰戙€佸箍鍛娿€佺ぞ濯掔煭鐗囥€乥rand film銆乲inetic typography銆乸roduct demo 涓?AI 瑙嗛/鍥惧儚/澹伴煶宸ヤ綔娴併€?,
    next: "鍏堟牳瀹?Spain 鍚堝悓瀹炰綋銆佷富浣撱€佹椂鍖哄拰椤圭洰锛汻eel 绐佸嚭鍓嶄笁绉?hook銆佺煭瑙嗛鍙樹綋銆丄I workflow銆乵otion system 鍜屽搧鐗屼竴鑷存€с€?,
    language: "鑻辫宸ヤ綔娌熼€氾紱瑗胯鏈垪涓虹‖闂ㄦ",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "涓骇 / AI video + motion",
    changeType: "new",
  },
  1028: {
    direction: "brand",
    company: "Zak Group",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "鍏ㄧ悆 Remote freelance锛汼pain contractor 鏉′欢闇€纭",
    titleZh: "楂樼骇鍝佺墝璁捐甯堬紙鑷敱鑱屼笟 / 鍝佺墝韬唤锛?,
    titleEs: "Senior Brand Designer (Freelance)",
    reason: "瀹樻柟宸ヤ綔椤垫槑纭?Remote銆丗reelance銆丷olling锛屽苟鎺ュ彈鍏ㄧ悆鐢宠锛涜亴璐ｇ洿鎺ヨ鐩?symbols銆乴ogos銆乴ogotypes銆乴ettering銆乼ype design銆乮llustration 涓庡搧鐗岃韩浠介」鐩紝2D motion/3D 涓哄姞鍒嗐€?,
    next: "鍏堢‘璁ら」鐩埗銆佹棩璐?浠樻甯佺銆侀」鐩噺銆丼pain contractor 绋庡姟鍜屼綔鍝侀泦 PDF 瑕佹眰锛涙姇閫掍互鍝佺墝韬唤绯荤粺銆佸瓧浣?鏍囧織鎺ㄥ銆佸簲鐢ㄥ欢灞曞拰灏戦噺 motion 涓轰富銆?,
    language: "鑻辫鐢宠锛涘叏鐞?remote 璧勬牸娓呮锛孲pain contractor 鏉′欢闇€纭",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "楂樼骇 / brand identity",
    changeType: "round57",
  },
  1029: {
    direction: "brand",
    company: "Together",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote UK & Europe锛汼pain payroll 寰呯‘璁?,
    titleZh: "楂樼骇鍝佺墝璁捐甯堬紙B2B 绉戞妧 / 鍝佺墝绯荤粺锛?,
    titleEs: "Senior Brand Designer",
    reason: "瀹樻柟 careers 椤垫槑纭?Remote, UK & Europe銆伮?0,000鈥撀?5,000 鍜岀敵璇疯〃锛涜亴璐ｈ繛鎺ュ搧鐗岃韩浠姐€佸彲鎵╁睍绯荤粺銆亀eb/product experience锛岃姹?8+ 骞淬€丗igma銆丄dobe CC 涓?creative AI銆?,
    next: "浼樺厛纭 Spain 鍚堝悓涓讳綋銆佸洟闃熼泦鍚?鍑哄樊銆佺骇鍒拰 portfolio 鏈熸湜锛涜嫢鍖归厤锛岀敤鑻辨枃 case study 灞曠ず strategy鈫抜dentity鈫抔uidelines鈫抴eb/product rollout銆丗igma tokens/components 涓庡鎴峰憟鐜般€?,
    language: "鑻辫鍥介檯鍥㈤槦锛汼pain payroll 涓庡嚭宸畨鎺掗渶纭",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "楂樼骇 / 8+ 骞村搧鐗岄」鐩?,
    changeType: "round57",
  },
  1030: {
    direction: "brand",
    company: "HelloKindred",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote-first锛沀K shift锛汼pain 鍚堟硶宸ヤ綔璧勬牸鏈叕甯?,
    titleZh: "楂樼骇骞抽潰璁捐甯堬紙B2B 鍝佺墝 / 钀ラ攢锛?,
    titleEs: "Senior Graphic Designer (fixed-term 1 year)",
    reason: "瀹樻柟 SmartRecruiters 璇︽儏鏄剧ず Remote銆丗ull-time銆?0 灏忔椂鍜?UK shift锛涜亴璐ｈ鐩栧搧鐗?campaign銆乻ales deck銆乪vent materials銆乮nfographics 涓庡鎴蜂氦浠橈紝瑕佹眰 6鈥?+ 骞?B2B銆丄dobe銆丳owerPoint銆丗igma/AI銆?,
    next: "鍏堢‘璁?Spain 鏄惁鍙泧銆乫ixed-term 鏈熼檺銆丅arcelona 鏃跺尯瀵瑰簲鐨?16:00鈥?1:00 宸ヤ綔娈点€佽柂璧勫拰 assessment 鏄惁浠樿垂锛涙潗鏂欎紭鍏堟斁 B2B deck銆佸搧鐗?campaign銆乪vent/white-paper 绯荤粺銆?,
    language: "鑻辫锛沀K shift锛汼pain 鍚堟硶宸ヤ綔璧勬牸闇€纭",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "楂樼骇 / 6鈥?+ 骞?B2B",
    changeType: "round57",
  },
  1031: {
    direction: "digital",
    company: "Voodoo",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / remote; Spain employment to confirm",
    titleZh: "UI/UX Designer - Hole.io",
    titleEs: "UI/UX Designer - Hole.io",
    reason: "Official Ashby content shows Barcelona, Remote, Full-time and Apply. The role supports the Art Director and owns scalable game UI, a UI Style Bible, reusable components and 2D visual assets in Figma. This is a game-visual adjacency rather than commercial VI, and the direct ATS is JavaScript-only in this pass.",
    next: "Confirm Spain employment, current freshness and the expected game/UI portfolio. Apply only with shipped-game UI or a strong digital visual-system case showing hierarchy, components, visual language documentation and asset consistency.",
    language: "English; Spain employment to confirm",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "4+ years / shipped mobile games",
    changeType: "round59",
  },
  1032: {
    direction: "motion",
    company: "Ultralytics",
    statusKey: "verify",
    locationKey: "madrid",
    locationLabel: "Madrid / hybrid 3 days onsite + 2 remote",
    titleZh: "Video Editor - AI product and motion",
    titleEs: "Video Editor",
    reason: "Official Ashby content states Madrid, Spain, full-time hybrid 3/2, EU work authorization and no visa sponsorship. The scope covers editorial, light After Effects motion, AI/product visualisation, interviews, events, case studies, YOLO overlays and multi-platform packaging; it is not a static brand-designer role.",
    next: "Confirm salary, working language, office cadence and test-task terms. If acceptable, submit a motion reel with product explanation, clean overlay/title systems, social cutdowns and brand-consistent technical storytelling.",
    language: "English or Spanish working language to confirm; EU work authorization required",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "Video editing + light motion / AI visualization",
    changeType: "round59",
  },
  1033: {
    direction: "digital",
    company: "Ashby",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Barcelona / Spain / EU remote",
    titleZh: "楂樼骇璁捐宸ョ▼甯堬紙EU / 璁捐绯荤粺锛?,
    titleEs: "Staff Design Engineer - EU",
    reason: "Official Ashby content lists Barcelona and Spain, Remote, Full-time and 鈧?54k鈥撯偓188k L4 / 鈧?08k鈥撯偓250k L5 plus equity. The role combines visual quality, design-system expansion, UI/UX, wireframing and production TypeScript/React/CSS implementation; it is a design-engineering adjacency rather than a commercial VI role.",
    next: "鍏堢‘璁?staff-level engineering depth, Spain payroll/entity, current live application and remote policy. Only use a portfolio that pairs shipped UI with design-system specs, tokens/components and design-to-code decisions; static brand identity work alone is insufficient.",
    language: "English; no Spanish requirement shown",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "Staff / design engineering",
    changeType: "round61",
  },
  1034: {
    direction: "digital",
    company: "SearchApi",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote / Spain explicitly listed",
    titleZh: "鍓嶇宸ョ▼涓?UI 璁捐甯堬紙寮€鍙戣€呭伐鍏凤級",
    titleEs: "Frontend Engineer & UI Designer (Developer Tooling)",
    reason: "Official Ashby content lists Remote - Spain and Full-time. The hybrid role owns the dashboard, API playground, docs, marketing site, data visualisation and component system from Figma through production; it is a technical digital-product adjacency, not a pure graphic-design role.",
    next: "鍏堢‘璁?Spain hiring entity, compensation and take-home task. Apply only with two live UI cases that were designed and built by the candidate, showing responsive states, data-dense dashboards, component discipline and a real marketing or docs surface; application asks for the phrase 鈥極ctopus Tentacle鈥?",
    language: "Fluent English; no Spanish requirement shown",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "Design + production frontend",
    changeType: "round61",
  },
  1035: {
    direction: "digital",
    company: "Kyndryl Vital",
    statusKey: "verify",
    locationKey: "madrid",
    locationLabel: "Madrid / partially remote",
    titleZh: "瑙嗚璁捐甯堬紙AI 浜у搧浣撻獙 / 璁捐绯荤粺锛?,
    titleEs: "Lead, Visual Designer",
    reason: "Official Kyndryl Workday content shows Madrid, Partially Remote, Full-time, Apply and requisition R-57022. The Kyndryl Vital role combines AI/agentic experience design, visual/UI design, branding, key visuals, interactive prototypes and scalable design systems; fluent English and Spanish are explicit.",
    next: "鍏堢‘璁よタ璇疄闄呭伐浣滃己搴︺€佽柂璧勩€佸姙鍏鑺傚鍜屽垱鏂板疄楠屽/浜у搧鍥㈤槦褰掑睘銆傝嫢鍙姇锛岀敤瑗胯鎴栧弻璇潗鏂欏睍绀烘妸 AI 澶嶆潅搴﹁浆鎴愭竻鏅拌瑙夎瑷€銆丗igma components, prototypes, design-system rules and brand/motion/presentation extensions; 涓嶈鍙彂闈欐€?logo case.",
    language: "Fluent English + Spanish required",
    applicationMode: "spanish",
    experienceKey: "mid",
    experienceLabel: "2鈥? years visual/UI/digital product",
    changeType: "round62",
  },
  1036: {
    direction: "brand",
    company: "Algofy",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Spain / hybrid; remote-first policy to confirm",
    titleZh: "Brand & Web Designer锛堟暟瀛楄惀閿€ / 鍖呰寤跺睍锛?,
    titleEs: "Graphic & Web Designer",
    reason: "The official Algofy careers page lists a full-time Graphic & Web Designer for Spain with graphic/video content for digital marketing, websites, traditional branding, print and packaging. It is relevant brand extension work but broader and more performance-creative-heavy than pure VI; the official Apply Here route currently points to LinkedIn.",
    next: "Use the official careers page and employer-linked application to confirm current receipt, Spain payroll/entity, exact hybrid or remote cadence, salary and whether this is the same vacancy advertised as We Are Stellar/Algofy. If confirmed, apply in English with a brand system plus paid-social static/motion, web/email and packaging cases.",
    language: "English-first; high-level English/C2 shown in the employer listing; Spanish not stated",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "Graphic/web production + branding versatility",
    changeType: "round63",
  },
  1018: {
    direction: "motion",
    company: "EverAI",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Spain remote / B2B or freelance to confirm",
    titleZh: "Senior AI Vertical Mini-Series Director",
    titleEs: "Senior AI Vertical Mini-Series Director 鈥?Spain",
    reason: "瀹樻柟 Ashby 鏄剧ず Spain銆丗ull time銆丷emote 鍜?Europe EUR47k鈥?07k锛涜亴璐ｈ鐩?9:16 鐭墽銆佽剼鏈€佸婕斻€佸壀杈戙€丄I 瑙掕壊涓€鑷存€у拰 trailer锛屼絾鏍囬 Freelance 涓?full-time listing 瀛樺湪鍚堝悓鐭涚浘銆?,
    next: "鍙湪鍏峰鐭棰戝婕?鍓緫鍜?AI video 瀹炰綔鏃惰€冭檻锛涘厛纭 B2B/闆囦剑銆佺◣鍔°€佷骇閲忋€佸唴瀹硅竟鐣屽拰娴嬭瘯鏄惁浠樿垂锛屼笉鍏堝仛瀹屾暣鏃犲伩鍓ч泦銆?,
    language: "鑻辫娴佸埄",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "楂樼骇 / AI narrative video",
    changeType: "new",
  },  },});
const els = {
  totalCount: document.querySelector("#totalCount"),
  priorityCount: document.querySelector("#priorityCount"),
  chineseTotal: document.querySelector("#chineseTotal"),
  recentChineseTotal: document.querySelector("#recentChineseTotal"),
  liveCount: document.querySelector("#liveCount"),
  verifyCount: document.querySelector("#verifyCount"),
  closedCount: document.querySelector("#closedCount"),

  updatedAt: document.querySelector("#updatedAt"),
  priorityGrid: document.querySelector("#priorityGrid"),
  languageCautionGrid: document.querySelector("#languageCautionGrid"),
  priorityTemplate: document.querySelector("#priorityTemplate"),
  resultTemplate: document.querySelector("#resultTemplate"),
  resultsList: document.querySelector("#resultsList"),
  visibleCount: document.querySelector("#visibleCount"),
  allSourceCount: document.querySelector("#allSourceCount"),
  chineseCount: document.querySelector("#chineseCount"),
  linkedinCount: document.querySelector("#linkedinCount"),
  otherCount: document.querySelector("#otherCount"),
  searchInput: document.querySelector("#searchInput"),
  directionFilter: document.querySelector("#directionFilter"),
  locationFilter: document.querySelector("#locationFilter"),
  languageFilter: document.querySelector("#languageFilter"),
  statusFilter: document.querySelector("#statusFilter"),
  freshnessFilter: document.querySelector("#freshnessFilter"),
  sortFilter: document.querySelector("#sortFilter"),
  laborFilter: document.querySelector("#laborFilter"),
  experienceFilter: document.querySelector("#experienceFilter"),
  riskFilter: document.querySelector("#riskFilter"),
  resetFilters: document.querySelector("#resetFilters"),
  validRouteOnly: document.querySelector("#validRouteOnly"),
  excludeLowPay: document.querySelector("#excludeLowPay"),
  excludeInternships: document.querySelector("#excludeInternships"),
  presetNote: document.querySelector("#presetNote"),
  loadMore: document.querySelector("#loadMore"),
  scopeButtons: [...document.querySelectorAll(".scope-button")],
  presetButtons: [...document.querySelectorAll(".preset-button")],
  sourceTabs: [...document.querySelectorAll(".source-tab")],
  progressFilterButtons: [...document.querySelectorAll(".progress-filter-button")],
  statusSummaryButtons: [...document.querySelectorAll(".status-summary__item")],

};

const state = {
  scope: "all",
  source: "all",
  preset: "profile",
  progressFilter: "all",
  limit: 18,
};

const PROGRESS_STORAGE_KEY = "barcelona-opportunity-progress-v1";
const PROGRESS_LABELS = {
  untracked: "鏈爣璁?,
  shortlist: "寰呮姇",
  applied: "宸叉姇閫?,
  skipped: "璺宠繃",
};

function loadProgressState() {
  try {
    const stored = window.localStorage?.getItem(PROGRESS_STORAGE_KEY);
    const parsed = stored ? JSON.parse(stored) : {};
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

const savedProgress = loadProgressState();

const SOURCE_LABELS = {
  chinese: "鍗庝汉缃?/ 涓枃绀惧尯",
  linkedin: "棰嗚嫳",
  other: "鍏徃瀹樼綉 / 鍏朵粬",
};

const PRESET_NOTES = {
  profile: "榛樿鍙樉绀哄彲浠ュ厛鐢ㄤ腑鏂囪仈绯荤殑 Barcelona / 瑗跨彮鐗欒繙绋嬫満浼氾紱闇€瑕佸畬鏁磋嫳鏂囨潗鏂欐垨瑗胯宸ヤ綔鐨勫矖浣嶄笉浼氭贩杩涙潵銆?,
  actionable: "鍙湅鐜板湪鍊煎緱椹笂澶勭悊鐨勬満浼氾細Barcelona / 瑗跨彮鐗欒繙绋嬨€佷腑鏂囧彲鍏堣仈绯汇€佹湁鍏蜂綋鍏ュ彛銆佽繎鏈熷彂甯冩垨椤甸潰鏄庣‘寮€鏀撅紝骞舵帓闄や綆钖闄╀笌瀹炰範銆?,
  chinese: "鎵╁睍鏌ョ湅 Barcelona銆丮adrid 涓庤タ鐝墮杩滅▼鐨勫叏閮ㄤ腑鏂囩浉鍏虫満浼氾紱杩欎竴妗ｅ彲鑳藉寘鍚€滈渶瑕佸熀纭€瑗胯鈥濇垨鈥滆瑷€闇€纭鈥濈殑宀椾綅锛岃鐪嬪崱鐗囩孩榛勬爣璁般€?,
  english: "鑻辫宀椾綅鍙綔涓哄閫夊崟鐙斁鍦ㄨ繖閲岋紱瀹冧滑涓嶄細鍑虹幇鍦ㄩ粯璁ら椤点€傞渶瑕佽嫳鏂囩畝鍘嗐€佷綔鍝侀泦璇存槑鎴栬嫳鏂囬潰璇曟椂锛屽崱鐗囦細鏄庣‘鎻愮ず銆?,
  brand: "鑱氱劍鍝佺墝瑙嗚銆乂I銆佽璁＄郴缁熴€佹暟瀛?campaign銆佺綉椤典笌璺ㄦ笭閬撳搧鐗屽欢灞曘€?,
  stable: "浼樺厛鍏ㄨ亴銆佹寮忓悎鍚屾垨鏄庣‘闀挎湡宀椾綅锛涙帓闄ゅ疄涔犮€佸吋鑱屻€佽嚜鐢辫亴涓氥€佸尶鍚嶅鎴峰叆鍙ｏ紝浠ュ強宸茶瘑鍒殑浣庤柂鎴栨棤钖闄┿€?,
  core: "鍙湅鍝佺墝绯荤粺銆乂I銆佹暟瀛楀搧鐗屽拰 motion 浜ゅ弶鐨勭‖鏍稿矖浣嶏紱鎺掗櫎瀹炰範銆佷綆钖€佸尶鍚嶅鎴枫€佺爺绌剁嚎绱笌宸插叧闂褰曪紝涓嶅彈璇█绛涢€夐檺鍒躲€?,
  none: "涓嶅鐢ㄤ釜浜虹敾鍍忥紱浠呮寜涓嬫柟鑼冨洿銆佹潵婧愬拰鎵嬪姩鏉′欢绛涢€夈€?,
};

const DIRECTION_LABELS = {
  brand: {
    zh: "鍝佺墝瑙嗚 / VI",
    es: "Identidad visual / branding",
  },
  digital: {
    zh: "鏁板瓧鍝佺墝寤跺睍",
    es: "Extensi贸n digital de marca",
  },
  social: {
    zh: "鏂板獟浣?/ 鐭棰?,
    es: "Redes sociales / v铆deo corto",
  },
  ecommerce: {
    zh: "鐢靛晢瑙嗚",
    es: "Dise帽o visual para e-commerce",
  },
  production: {
    zh: "骞垮憡鍗板埛 / 骞抽潰鍒朵綔",
    es: "Imprenta / producci贸n gr谩fica",
  },
  other: {
    zh: "鍏朵粬璁捐鐩稿叧",
    es: "Otras funciones relacionadas",
  },
};

const ROLE_RULES = [
  [/鏂囧憳 with Photoshop\/Adobe Illustrator|浜у搧鎷嶆憚涓庝慨鍥炬枃鍛?i, ["浜у搧鎷嶆憚涓庝慨鍥炬枃鍛橈紙鏃у矖鏍搁獙锛?, "Auxiliar de fotograf铆a y retoque de producto (vacante antigua)"]],
  [/骞垮憡骞抽潰璁捐甯?*瑙嗛鍓緫.*鎽勫奖甯?i, ["骞垮憡骞抽潰璁捐 / 瑙嗛鍓緫 / 鎽勫奖锛堟棫宀楁牳楠岋級", "Dise帽o gr谩fico publicitario, v铆deo y fotograf铆a (vacante antigua)"]],
  [/鐢佃剳淇浘宸ヤ綔浜哄憳|鍟嗗搧鍥剧墖澶勭悊/i, ["鐢佃剳淇浘 / 鍟嗗搧鍥剧墖澶勭悊锛堟棫宀楃‘璁わ級", "Retoque digital y tratamiento de im谩genes (vacante antigua)"]],
  [/绾夸笂钀ラ攢.*鎷嶇収.*淇浘|鎷嶇収銆佷慨鍥句笌缃戦〉鍩虹/i, ["绾夸笂钀ラ攢 / 鎷嶇収涓庝慨鍥撅紙鏃у矖纭锛?, "Marketing digital, fotograf铆a y retoque (vacante antigua)"]],
  [/闉嬩笟鐢靛晢杩愯惀|浜у搧鍥俱€佽鎯呴〉涓庡箍鍛婃姇鏀?i, ["闉嬩笟鐢靛晢杩愯惀 / 浜у搧瑙嗚锛堟棫宀楃‘璁わ級", "Operaciones de e-commerce y dise帽o visual de producto (vacante antigua)"]],
  [/瑙嗛鎷嶆憚鍜屽壀杈戝笀|宸村缃楅偅瑙嗛鎷嶆憚鍜屽壀杈戝笀/i, ["瑙嗛鎷嶆憚涓庡壀杈戯紙鏃у矖纭锛?, "Grabaci贸n y edici贸n de v铆deo (vacante antigua)"]],
  [/鐭棰戝唴瀹硅繍钀s*\/\s*鍑洪暅鍗氫富/i, ["鐭棰戝唴瀹硅繍钀?/ 鍑洪暅鍗氫富锛堟棫宀楃‘璁わ級", "Presentadora y creadora de contenido para v铆deo corto"]],
  [/甯傚満钀ラ攢.*鍑洪暅鎷嶆憚.*鍚庢湡鍓緫/i, ["甯傚満钀ラ攢 / 鍑洪暅鎷嶆憚涓庡悗鏈熷壀杈戯紙鏃у矖纭锛?, "Marketing, grabaci贸n en c谩mara y edici贸n de v铆deo"]],
  [/缃戦攢杩愯惀.*鍝佺墝瑙嗚.*Amazon/i, ["缃戦攢杩愯惀 / 鍝佺墝涓庣數鍟嗚瑙夛紙鏃у矖纭锛?, "Operaciones digitales y dise帽o visual para e-commerce"]],
  [/鍏艰亴鏂板獟浣撳姪鐞?*鍏紬鍙锋帓鐗?i, ["鍏艰亴鏂板獟浣撳姪鐞嗭紙杩滅▼ / 鐏垫椿锛?, "Asistente de redes sociales a tiempo parcial"]],
  [/鏂囧寲鑹烘湳绌洪棿.*杩愯惀鍔╃悊|杩愯惀鍔╃悊.*Canva 娴锋姤/i, ["鏂囧寲鑹烘湳绌洪棿杩愯惀鍔╃悊 / 瀛﹀垎瀹炰範", "Asistente de operaciones culturales / pr谩cticas"]],
  [/鍒濈骇鐭棰戝壀杈?*TikTok|Junior Video Clip Editor/i, ["鍒濈骇鐭棰戝壀杈戯紙TikTok / Reels锛?, "Editor/a j煤nior de v铆deo para TikTok / Reels"]],
  [/娆ф柉杩?*鏂板獟浣撹繍钀鏂板獟浣撹繍钀?*浜у搧鎽勫奖.*灏忕孩涔?i, ["鏂板獟浣撹繍钀ワ紙浜у搧瑙嗚 / 鐭棰戯級", "Operaciones de nuevos medios 鈥?producto y v铆deo"]],
  [/A1骞垮憡.*骞抽潰璁捐甯坾骞抽潰璁捐甯?*娴锋姤.*灞曟灦.*鍖呰/i, ["骞抽潰璁捐甯堬紙骞垮憡鍗板埛 / 鍖呰锛?, "Dise帽ador/a gr谩fico/a 鈥?publicidad y packaging"]],
  [/VIA.*鍝佺墝鎷撳睍|鍝佺墝鎷撳睍.*褰辫鍓緫/i, ["鍝佺墝鎷撳睍 / 璁捐涓庡奖瑙嗗壀杈?, "Desarrollo de marca, dise帽o y edici贸n audiovisual"]],
  [/Pepa Deal.*璺ㄥ鐢靛晢|璺ㄥ鐢靛晢.*TikTok.*MCN/i, ["璺ㄥ鐢靛晢 / TikTok 涓?MCN 杩愯惀", "Operaciones de e-commerce, TikTok y MCN"]],
  [/Community Manager Intern/i, ["绀惧尯鍐呭杩愯惀瀹炰範", "Pr谩cticas de gesti贸n de comunidad y contenido"]],
  [/鍐呭鍒涗綔\s*\/\s*骞抽潰璁捐涓撳憳/i, ["鍐呭鍒涗綔 / 骞抽潰璁捐涓撳憳", "Especialista de contenido y dise帽o gr谩fico"]],
  [/绀句氦濯掍綋杩愯惀\s*&\s*瑙嗛鍓緫/i, ["绀句氦濯掍綋杩愯惀 / 瑙嗛鍓緫", "Operaciones de redes sociales y edici贸n de v铆deo"]],
  [/鏂板獟浣撹繍钀ワ細瑙嗛鍓緫/i, ["鏂板獟浣撹繍钀ワ紙瑙嗛 / 鍥惧儚 / 骞垮憡锛?, "Operaciones de nuevos medios 鈥?v铆deo, imagen y publicidad"]],
  [/骞抽潰璁捐\s*\+\s*瑙嗛鍓緫/i, ["骞抽潰璁捐 + 瑙嗛鍓緫", "Dise帽o gr谩fico y edici贸n de v铆deo"]],
  [/^鏂板獟浣撹繍钀?/i, ["鏂板獟浣撹繍钀?, "Operaciones de nuevos medios"]],
  [/琛屾斂鍔╃悊.*绠€鍗曡棰戝壀杈憒EXTRA SOLUCION 2077/i, ["琛屾斂鍔╃悊 / 绠€鍗曡棰戝壀杈?, "Asistente administrativo/a con edici贸n b谩sica de v铆deo"]],
  [/绌洪棿璁捐甯坾椁愰ギ绌洪棿.*瀹ゅ唴璁捐甯?i, ["椁愰ギ绌洪棿 / 瀹ゅ唴璁捐甯?, "Dise帽ador/a de interiores para espacios de restauraci贸n"]],
  [/99876.*骞垮憡鍏徃|骞垮憡鍏徃.*CDR.*AI.*鎺掔増|瀹㈡湇.*鍩虹鎺掔増璁捐/i, ["骞垮憡鍏徃瀹㈡湇 / 鍩虹鎺掔増璁捐", "Atenci贸n al cliente y maquetaci贸n b谩sica en agencia de publicidad"]],
  [/濂宠瀵艰喘.*绾夸笂閿€鍞媿鎽剕绾夸笂閿€鍞?*鎷嶆憚/i, ["濂宠瀵艰喘 / 鐢靛晢鎷嶆憚", "Dependienta de moda y fotograf铆a para e-commerce"]],
  [/鐢靛晢璁㈠崟澶勭悊.*绾夸笂浠ｇ悊|绾夸笂浠ｇ悊.*楂橀闄╂帓闄?i, ["鐢靛晢璁㈠崟澶勭悊 / 绾夸笂浠ｇ悊锛堥闄╂帓闄わ級", "Gesti贸n de pedidos / agente online (descartado por riesgo)"]],
  [/Badalona warehouse office clerk requiring simple PS/i, ["浠撳簱鍔炲叕瀹ゆ枃鍛?/ 绠€鍗?PS", "Auxiliar de oficina de almac茅n con Photoshop b谩sico"]],
  [/SMILE JOYAS.*鏃跺皻杩愯惀甯坾鏃跺皻杩愯惀甯?*浜у搧鎼厤/i, ["鏃跺皻杩愯惀甯堬紙闄堝垪 / 绀惧獟瑙嗚锛?, "Especialista de operaciones de moda (visual / social)"]],
  [/SMILE JOYAS.*绀句氦濯掍綋骞冲彴杩愯惀涓撳憳|绀句氦濯掍綋骞冲彴杩愯惀涓撳憳.*鍥炬枃/i, ["绀句氦濯掍綋杩愯惀涓撳憳锛堝浘鏂?/ 鐭棰戯級", "Especialista de redes sociales (gr谩fica / v铆deo)"]],
  [/SMILE JOYAS.*鑷缓缃戠珯杩愯惀涓撳憳|鑷缓缃戠珯杩愯惀涓撳憳.*缃戠珯缁存姢/i, ["缃戠珯杩愯惀涓撳憳锛堟帹骞?/ 鍝佺墝鍐呭锛?, "Especialista de operaciones web (promoci贸n / marca)"]],
  [/Global Community Intern/i, ["鍏ㄧ悆绀惧尯瀹炰範鐢燂紙鍒涗綔鑰?/ 绀惧尯娲诲姩锛?, "Pr谩cticas de comunidad global (creadores / activaciones)"]],
  [/Humanes.*鐢靛晢杩愯惀鍔╃悊|浜у搧涓婃灦涓庣淮鎶?i, ["鐢靛晢杩愯惀鍔╃悊 / 浜у搧涓婃灦缁存姢", "Asistente de e-commerce y gesti贸n de cat谩logo"]],
  [/Fuenlabrada.*鐢靛晢杩愯惀|鐢靛晢杩愯惀.*缇庡伐鍩虹浼樺厛/i, ["鐢靛晢杩愯惀 / 杩愯惀鍔╃悊", "Operaciones y asistencia de e-commerce"]],
  [/鍟嗕笟绌洪棿璁捐甯堝姪鐞唡瀹ゅ唴.*璁捐甯堝姪鐞?i, ["鍟嗕笟绌洪棿璁捐甯堝姪鐞?, "Asistente de dise帽o de espacios comerciales"]],
  [/绀煎搧鎵瑰彂浠?*骞抽潰璁捐|鐢佃剳涓庡钩闈㈣璁′汉鍛?i, ["鐢佃剳涓庡钩闈㈣璁′汉鍛?, "Dise帽ador/a gr谩fico/a para mayorista de regalos"]],
  [/鐢靛晢瑙嗛鎷嶆憚鍓緫.*鑴氭湰鏂囨|TK.*Instagram.*杩愯惀鍚堜綔鑰?i, ["鐢靛晢瑙嗛涓庣ぞ濯掑唴瀹瑰悎浣滆€?, "Colaborador/a de v铆deo y contenido para e-commerce"]],
  [/骞抽潰缇庡伐璁捐/i, ["骞抽潰缇庡伐璁捐", "Dise帽ador/a gr谩fico/a"]],
  [/Ciempozuelos.*鐢靛晢瑙嗚|鐢靛晢瑙嗚涓庣ぞ濯掕繍钀?i, ["鐢靛晢瑙嗚涓庣ぞ濯掕繍钀?, "Operaciones visuales de e-commerce y redes sociales"]],
  [/鐢佃剳浜у搧鐭棰戝唴瀹圭瓥鍒抾鎶栭煶璐﹀彿杩愯惀/i, ["3C 鐭棰戝唴瀹逛笌璐﹀彿杩愯惀", "Contenido de v铆deo y gesti贸n de redes para productos 3C"]],
  [/鐜╁叿鐢靛晢杩愯惀/i, ["鐜╁叿鐢靛晢杩愯惀", "Operaciones de e-commerce de juguetes"]],
  [/浜у搧鏂囨.*鍥剧墖.*澶氬钩鍙拌繍钀?i, ["鐢靛晢鍐呭涓庡骞冲彴杩愯惀", "Contenido y operaciones de e-commerce multicanal"]],
  [/甯傚満瀹ｄ紶绛栧垝|鏂板獟浣撳競鍦轰笓鍛榺甯傚満瀹ｄ紶.*鏂板獟浣?i, ["甯傚満瀹ｄ紶 / 鏂板獟浣撲笓鍛?, "Especialista de comunicaci贸n y redes sociales"]],
  [/D2C.*鐙珛绔檤鐙珛绔?*鐢靛晢杩愯惀鍔╃悊|鐙珛绔欒繍钀?i, ["鐙珛绔?/ 鐢靛晢杩愯惀鍔╃悊", "Asistente de operaciones de e-commerce"]],
  [/浜у搧涓婃灦.*鍥剧墖澶勭悊|鍥剧墖澶勭悊.*缃戠珯缁存姢|3C.*浜у搧涓婃灦/i, ["鐢靛晢鍐呭涓庣綉绔欑淮鎶?, "Contenido de e-commerce y mantenimiento web"]],
  [/marketing\s*&\s*branding officer|marketing and branding officer/i, ["甯傚満涓庡搧鐗屼笓鍛?, "Especialista de marketing y marca"]],
  [/digital e-?commerce designer/i, ["鐢靛晢鏁板瓧瑙嗚璁捐甯?, "Dise帽ador/a digital de e-commerce"]],
  [/senior motion designer/i, ["楂樼骇鍔ㄦ€佽璁″笀", "Dise帽ador/a s茅nior de motion graphics"]],
  [/motion designer/i, ["鍔ㄦ€佽璁″笀", "Dise帽ador/a de motion graphics"]],
  [/senior graphic designer/i, ["楂樼骇骞抽潰璁捐甯?, "Dise帽ador/a gr谩fico/a s茅nior"]],
  [/lead graphic designer/i, ["骞抽潰璁捐璐熻矗浜?, "Responsable de dise帽o gr谩fico"]],
  [/brand graphic designer/i, ["鍝佺墝骞抽潰璁捐甯?, "Dise帽ador/a gr谩fico/a de marca"]],
  [/graphic designer/i, ["骞抽潰璁捐甯?, "Dise帽ador/a gr谩fico/a"]],
  [/senior brand designer/i, ["楂樼骇鍝佺墝璁捐甯?, "Dise帽ador/a s茅nior de marca"]],
  [/brand designer/i, ["鍝佺墝璁捐甯?, "Dise帽ador/a de marca"]],
  [/visual designer/i, ["瑙嗚璁捐甯?, "Dise帽ador/a visual"]],
  [/creative designer/i, ["鍒涙剰璁捐甯?, "Dise帽ador/a creativo/a"]],
  [/art director/i, ["鑹烘湳鎸囧", "Director/a de arte"]],
  [/web graphic designer/i, ["缃戦〉瑙嗚璁捐甯?, "Dise帽ador/a gr谩fico/a web"]],
  [/web designer/i, ["缃戦〉璁捐甯?, "Dise帽ador/a web"]],
  [/digital designer/i, ["鏁板瓧瑙嗚璁捐甯?, "Dise帽ador/a digital"]],
  [/ui\/ux designer|ux\/ui designer/i, ["UI / UX 璁捐甯?, "Dise帽ador/a UI / UX"]],
  [/product designer/i, ["浜у搧璁捐甯?, "Dise帽ador/a de producto"]],
  [/content creator/i, ["鍐呭鍒涗綔鑰?, "Creador/a de contenido"]],
  [/social media/i, ["绀句氦濯掍綋宀椾綅", "Puesto de redes sociales"]],
  [/new media/i, ["鏂板獟浣撳矖浣?, "Puesto de nuevos medios"]],
  [/marketing specialist/i, ["甯傚満钀ラ攢涓撳憳", "Especialista de marketing"]],
  [/marketing manager/i, ["甯傚満缁忕悊", "Responsable de marketing"]],
  [/operations assistant/i, ["杩愯惀鍔╃悊", "Asistente de operaciones"]],
  [/e-?commerce operations/i, ["鐢靛晢杩愯惀", "Operaciones de e-commerce"]],
  [/intern|internship|trainee/i, ["璁捐鐩稿叧瀹炰範", "Pr谩cticas relacionadas con dise帽o"]],
  [/part[\s-]?time designer/i, ["鍏艰亴璁捐甯?, "Dise帽ador/a a tiempo parcial"]],
];

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isActionableLink(value) {
  if (/^mailto:/i.test(value)) return true;
  if (!/^https?:\/\//i.test(value)) return false;

  let url;
  try {
    url = new URL(value);
  } catch {
    return false;
  }

  const host = url.hostname.toLowerCase();
  const path = url.pathname.toLowerCase();
  const query = url.search.toLowerCase();

  // Research/listing pages are useful as evidence, but they are not direct
  // vacancy or application routes and must not be shown as action buttons.
  if (host === "infohuaxin.com" || host === "www.infohuaxin.com") return false;
  if (host === "eulam.infohuaxin.com") return /^\/info\/\d+\/?$/.test(path);
  if (/xihua\.es$/.test(host)) {
    return /mod=viewthread/.test(query) && /(?:^|&)tid=\d+/.test(query.slice(1));
  }
  if (/spaincn\.com$/.test(host)) {
    return /mod=viewthread/.test(query) || /\/thread-\d+-\d+-\d+\.html$/.test(path);
  }
  if (/huarenjiewang\.com$/.test(host)) {
    return /\/info-\d+\.html$/.test(path) || /\/information-id-\d+\.html$/.test(path);
  }
  if (/es02\.com$/.test(host)) return /\/jobs\/recruitment\/.*\/i\d+\.html$/.test(path);
  if (/bbs\.eus$/.test(host)) {
    return /mod=viewthread/.test(query) && /(?:^|&)tid=\d+/.test(query.slice(1));
  }
  return true;
}

function toLinks(item) {
  const raw = Array.isArray(item.links) ? item.links : item.links ? [item.links] : [];
  const contact = String(item.contact || "");
  const emails = [...contact.matchAll(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi)].map(
    (match) => `mailto:${match[0]}`,
  );
  return [...new Set([...raw, ...emails])].filter(isActionableLink);
}

function isInternshipRole(item) {
  return /internship|intern\b|trainee|pr谩cticas|practicas|beca\b|working student|瀹炰範|瀛︾敓鍗忚|瀛︽牎鍗忚/i.test(
    String(item.searchText || ""),
  );
}

function hasLowPayRisk(item) {
  const text = String(item.searchText || "")
    .replace(/涓??:鎺ュ彈|鍋殀鎻愪緵).{0,12}鏃犺柂.{0,16}(?:娴嬭瘯|璇曠|浣滀笟|鏍风墖)/gi, "")
    .replace(/(?:do not|don't|avoid|refuse).{0,20}unpaid.{0,16}(?:test|trial|assignment|sample)/gi, "");
  if (/unpaid|鏃犺柂|椤圭洰鍒嗘垚|project share|鏄庣‘浣庤柂|浣庤柂椋庨櫓|low[-\s]?pay risk/i.test(text)) {
    return true;
  }

  const hourly = text.match(/(?:鈧瑋EUR)\s?(\d+(?:[.,]\d+)?)\s*(?:\/|per\s*)?(?:hour|hora|灏忔椂)/i);
  if (hourly && Number(hourly[1].replace(",", ".")) < 12) return true;

  const monthly = text.match(/(?:鈧瑋EUR)\s?([\d,.]+)\s*(?:\/|per\s*)?(?:month|mes|鏈?/i);
  if (monthly && Number(monthly[1].replace(/[.,](?=\d{3}\b)/g, "").replace(",", ".")) < 900) {
    return true;
  }

  const annual = text.match(/(?:鈧瑋EUR)\s?([\d,.]+)\s*(?:\/|per\s*)?(?:year|a帽o|骞?/i);
  if (annual && Number(annual[1].replace(/[.,](?=\d{3}\b)/g, "").replace(",", ".")) < 18000) {
    return true;
  }
  return false;
}

function riskFlags(item) {
  const flags = [];
  const applicationLanguage = applicationLanguagePath(item).key;
  if (applicationLanguage === "spanish") flags.push("spanish");
  if (applicationLanguage === "english") flags.push("english");
  if (hasLowPayRisk(item)) flags.push("lowpay");
  if (isInternshipRole(item)) flags.push("internship");
  if (applicationStatus(item).key === "verify") flags.push("verify");
  if (hasOpaqueEmployerRisk(item)) flags.push("opaque");
  return flags;
}

function hasOpaqueEmployerRisk(item) {
  if (CURATED[item.id]?.opaqueEmployer) return true;
  const text = `${item.source || ""} ${item.opportunity || ""} ${item.status || ""} ${item.analysis || ""}`;
  return /anonymous employer|employer hidden|client (?:is )?(?:anonymous|undisclosed|hidden)|actual (?:client|employer).{0,12}(?:not disclosed|unknown)|鍖垮悕(?:瀹㈡埛|闆囦富|鍚堜綔鍏徃)|瀹㈡埛鏈叕寮€|闆囦富鏈叕寮€|瀹為檯(?:瀹㈡埛|闆囦富|鍚堜綔鍏徃)鏈叕寮€|鎷涜仒鏂规湭鍏紑瀹為檯/i.test(
    text,
  );
}

function isFreelanceRole(item) {
  return /freelance|freelancer|aut贸nom|autonom|contractor|project[-\s]?based|daily rate|day rate|鑷敱鑱屼笟|椤圭洰鍒秥椤圭洰鍚堜綔|鎸夐」鐩畖鏃ヨ柂/i.test(
    String(item.searchText || ""),
  );
}

function hasKnownCompensation(item) {
  const text = String(item.searchText || "");
  const currencyAmount =
    /(?:鈧瑋EUR|USD|\$|GBP|拢)\s?[\d,.]+(?:\s?[-鈥揮\s?(?:鈧瑋EUR|USD|\$|GBP|拢)?\s?[\d,.]+)?|[\d,.]+\s?(?:鈧瑋EUR|euros?|USD|GBP)(?:\s?[-鈥揮\s?[\d,.]+\s?(?:鈧瑋EUR|euros?|USD|GBP)?)?/i;
  const labeledAmount =
    /(?:绋庡墠|绋庡悗)?(?:鏈堣柂|骞磋柂|鏃ヨ柂|鏃惰柂|宸ヨ祫|钖祫|salary|pay|rate)\D{0,16}[\d,.]+/i;
  return currencyAmount.test(text) || labeledAmount.test(text);
}

function laborConditionInfo(item) {
  if (isInternshipRole(item)) return { key: "internship", label: "瀹炰範 / 鍗忚" };
  if (isFreelanceRole(item)) return { key: "freelance", label: "鑷敱鑱屼笟 / 椤圭洰鍒? };
  if (isFormalRole(item)) return { key: "formal", label: "姝ｅ紡 / 鍏ㄨ亴" };
  return { key: "unknown", label: "鍚堝悓寰呯‘璁? };
}

function experienceInfo(item) {
  const curated = CURATED[item.id];
  if (curated?.experienceKey) {
    return {
      key: curated.experienceKey,
      label: curated.experienceLabel || "缁忛獙瑕佹眰宸蹭汉宸ユ牳楠?,
    };
  }

  const title = `${item.opportunity || ""} ${CURATED[item.id]?.titleZh || ""} ${CURATED[item.id]?.titleEs || ""}`;
  const text = `${title} ${item.searchText || ""}`;

  if (
    /internship|intern\b|trainee|pr谩cticas|practicas|working student|graduate program|junior|j煤nior|鍒濈骇|瀹炰範|搴斿眾/i.test(
      title,
    ) ||
    isInternshipRole(item)
  ) {
    return { key: "junior", label: "鍒濈骇 / 瀹炰範" };
  }
  if (
    /senior|s茅nior|lead\b|leader|l铆der|head of|director|responsable|璧勬繁|楂樼骇|璐熻矗浜簗鎬荤洃|涓荤/i.test(
      title,
    )
  ) {
    return { key: "senior", label: "璧勬繁 / 5 骞翠互涓? };
  }

  const range = text.match(
    /(?<!\d)(\d{1,2})\s*(?:[-鈥揮|to|a)\s*(\d{1,2})\s*(?:years?|yrs?|a帽os?|anys?|骞?/i,
  );
  if (range) {
    const minimum = Number(range[1]);
    const maximum = Number(range[2]);
    if (minimum >= 5) return { key: "senior", label: `璧勬繁 / ${minimum}鈥?{maximum} 骞碻 };
    if (maximum <= 2) return { key: "junior", label: `鍒濈骇 / ${minimum}鈥?{maximum} 骞碻 };
    return { key: "mid", label: `涓骇 / ${minimum}鈥?{maximum} 骞碻 };
  }

  const minimum = text.match(
    /(?:more than|over|at least|minimum(?: of)?|m谩s de|m茅s de|m铆nimo|al menos|鑷冲皯|瓒呰繃)?\s*(?<!\d)(\d{1,2})\s*(?:\+)?\s*(?:years?|yrs?|a帽os?|anys?|骞?/i,
  );
  if (minimum) {
    const years = Number(minimum[1]);
    if (years >= 5) return { key: "senior", label: `璧勬繁 / ${years} 骞翠互涓奰 };
    if (years >= 3) return { key: "mid", label: `涓骇 / ${years} 骞翠互涓奰 };
    return { key: "junior", label: `鍒濈骇 / ${years} 骞村乏鍙砢 };
  }

  return { key: "unknown", label: "缁忛獙瑕佹眰鏈鏄? };
}

function isChineseRelevant(item) {
  if (sourceGroup(item) === "chinese") return true;
  if (CURATED[item.id]?.chineseFit) return true;

  const requirementText = `${item.opportunity || ""} ${item.fit || ""} ${item.status || ""} ${item.analysis || ""}`;
  const companyText = `${item.source || ""} ${item.opportunity || ""}`;
  const explicitLanguageOrMarket =
    /mandarin|chinese speaker|chinese[-\s](?:market|digital|communication|writing|required|preferred|beneficial)|requires? chinese|涓枃|鏅€氳瘽|鍗庤|涓浗鎬婚儴|涓浗鍝佺墝|涓浗甯傚満|寰俊|wechat|weixin|灏忕孩涔xiaohongshu|rednote/i.test(
      requirementText,
    );
  const knownChineseBrand =
    /\b(?:infiled|tineco|byd|huawei|honor|xiaomi|alibaba|aliexpress|trip\.com|ctrip|pop mart|shein|tcl|oppo|vivo|anker|ecovacs|haier|hisense|lenovo|jd\.com)\b/i.test(
      companyText,
    );
  return explicitLanguageOrMarket || knownChineseBrand;
}

function isResearchOnly(item) {
  const opportunity = String(item.opportunity || "");
  const text = `${item.source || ""} ${opportunity} ${item.fit || ""} ${item.status || ""} ${item.analysis || ""}`;
  const opportunityIsRoute =
    /(?:job[- ]?board|jobs?) (?:channel|route|recheck)|channel (?:recheck|status|monitor)|(?:monitor|watchlist|watch route|research route)|no (?:new|current).{0,35}(?:job|vacancy|opening)|no confirmed|not (?:a |an )?(?:current |confirmed )?(?:job|vacancy|opening)|speculative (?:creative\/brand\/packaging )?application|self[- ]application|status correction|historical lead|current .{0,35}(?:employer|ecosystem)$|(?:company|platform|classifieds) (?:target|route|monitor)|institutional.{0,35}route|service category|鎷涜仒棰戦亾|鎷涜仒娓犻亾|鐩戞帶|瑙傚療鍏ュ彛|鐮旂┒绾跨储|褰撳墠鏃?{0,20}(?:宀椾綅|鑱屼綅)/i.test(
      opportunity,
    );
  const detailsOnlyResearch =
    /0 confirmed|0 current|not a confirmed (?:job|vacancy|opening)|not a (?:job|vacancy)|no confirmed|watchlist|monitor(?:ing)? (?:only|route|entry)|channel update|cold outreach channel|generic cv submission|talent application|talent pool only|research route|public search (?:route|surface)|benchmark only|historical lead|china-based openings|only (?:china|shanghai|beijing)[-\s]based|浠??:涓浗|涓婃捣|鍖椾含).{0,12}(?:宀椾綅|鑱屼綅)|鐩戞帶鍏ュ彛|瑙傚療鍏ュ彛|鐮旂┒绾跨储/i.test(
      text,
    );
  return opportunityIsRoute || detailsOnlyResearch;
}

function isTargetOpportunity(item) {
  const title = String(item.opportunity || "");
  if (
    /design|designer|creative|art director|brand|visual|graphic|content|social|community|marketing|e-?commerce|website|web\b|video|photo|motion|editor|retouch|璁捐|鍒涙剰|鍝佺墝|瑙嗚|骞抽潰|缇庡伐|鍐呭|绀惧獟|鏂板獟浣搢杩愯惀|鐢靛晢|缃戠珯|缃戦〉|瑙嗛|鎷嶆憚|鍓緫|淇浘|娴锋姤|瀹ｄ紶/i.test(
      title,
    )
  ) {
    return true;
  }
  if (
    /sales advisor|fashion advisor|store manager|dependient|retail assistant|merchandiser|business developer|account manager|customer service|shop assistant|cashier|warehouse|瀵艰喘|搴楅暱|钀ヤ笟鍛榺搴楀憳|閿€鍞畖瀹㈡湇|浠撳簱|鏀堕摱|璐㈠姟|琛屾斂|閲囪喘|鍙告満/i.test(
      title,
    )
  ) {
    return false;
  }
  return directionKey(item) !== "other";
}

function isFormalRole(item) {
  const text = String(item.searchText || "");
  return (
    /full[\s-]?time|jornada completa|permanent contract|contrato (?:indefinido|laboral|temporal)|payroll|姝ｅ紡鍚堝悓|鍏ㄨ亴|姘镐箙鍚堝悓|鏃犲浐瀹氭湡闄恷鍔冲姩鍚堝悓/i.test(
      text,
    ) &&
    !/part[\s-]?time|media jornada|freelance|aut贸nom|鍏艰亴|鑷敱鑱屼笟|椤圭洰鍒?i.test(text)
  );
}

function personalMatchScore(item) {
  const tierPoints = { A: 20, B: 15, C: 8, D: 2, X: 0 };
  const locationPoints = { barcelona: 20, remote: 18, madrid: 4, other: 1 };
  const applicationLanguagePoints = {
    chinese: 25,
    chineseCheck: 18,
    basicSpanish: 5,
    unknown: 0,
    english: -18,
    spanish: -30,
  };
  const directionPoints = { brand: 20, digital: 17, ecommerce: 13, social: 11, production: 8, other: 0 };
  const freshnessPoints = { week: 10, month: 7, quarter: 3, older: 0, old: -5, unknown: 0 };

  let score =
    (tierPoints[item.tier] || 0) +
    (locationPoints[locationBucket(item)] || 0) +
    (applicationLanguagePoints[applicationLanguagePath(item).key] || 0) +
    (directionPoints[directionKey(item)] || 0) +
    (freshnessPoints[item.freshnessTag] || 0);

  if (isChineseRelevant(item)) score += 10;
  if (toLinks(item).length) score += 8;
  if (isInternshipRole(item)) score -= 5;
  if (hasLowPayRisk(item)) score -= 8;
  if (isResearchOnly(item)) score -= 30;
  if (applicationStatus(item).key === "live") score += 6;
  if (applicationStatus(item).key === "verify") score -= 4;
  if (applicationStatus(item).key === "closed") score -= 25;
  return Math.max(0, Math.min(100, score));
}

function postedTimestamp(item) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(item.postedAt || "")) return 0;
  return Date.parse(`${item.postedAt}T00:00:00Z`) || 0;
}

function rankingScore(item) {
  let score = personalMatchScore(item);
  const status = applicationStatus(item).key;
  const hasDate = postedTimestamp(item) > 0;
  const freshDateBonus = { week: 12, month: 7, quarter: 3, older: 0, old: -6 };

  if (hasDate) {
    score += freshDateBonus[item.freshnessTag] || 0;
  } else {
    score -= status === "verify" ? 9 : 3;
  }

  if (status === "live") score += 5;
  if (status === "closed") score -= 30;
  if (state.preset === "chinese" && sourceGroup(item) === "chinese" && hasDate) score += 3;
  return score;
}

function confidenceScore(item) {
  const statusPoints = { live: 30, verify: 12, closed: -30 };
  const routePoints = toLinks(item).length ? 12 : 0;
  const datePoints = postedTimestamp(item) ? 8 : -4;
  return (statusPoints[applicationStatus(item).key] || 0) + routePoints + datePoints + personalMatchScore(item);
}

function sortRecords(records) {
  const mode = els.sortFilter?.value || "smart";
  const compareScore = (a, b) => (b.score || 0) - (a.score || 0);
  const compareMatch = (a, b) =>
    personalMatchScore(b) - personalMatchScore(a) || compareScore(a, b);

  if (mode === "latest") {
    records.sort(
      (a, b) =>
        postedTimestamp(b) - postedTimestamp(a) ||
        rankingScore(b) - rankingScore(a) ||
        compareScore(a, b),
    );
    return;
  }
  if (mode === "match") {
    records.sort(compareMatch);
    return;
  }
  if (mode === "confidence") {
    records.sort(
      (a, b) =>
        confidenceScore(b) - confidenceScore(a) ||
        postedTimestamp(b) - postedTimestamp(a) ||
        compareMatch(a, b),
    );
    return;
  }
  if (mode === "weight") {
    records.sort(compareScore);
    return;
  }
  records.sort(
    (a, b) =>
      rankingScore(b) - rankingScore(a) ||
      postedTimestamp(b) - postedTimestamp(a) ||
      compareScore(a, b),
  );
}

function matchesPreset(item) {
  const location = locationBucket(item);
  const language = languageInfo(item).key;
  const direction = directionKey(item);
  const hasRoute = toLinks(item).length > 0;

  if (state.preset === "profile") {
    const applicationLanguage = applicationLanguagePath(item).key;
    return (
      ["barcelona", "remote"].includes(location) &&
      ["chinese", "chineseCheck"].includes(applicationLanguage) &&
      isChineseRelevant(item) &&
      ["A", "B", "C"].includes(item.tier) &&
      direction !== "other" &&
      !isResearchOnly(item) &&
      applicationStatus(item).key !== "closed"
    );
  }
  if (state.preset === "actionable") {
    const applicationLanguage = applicationLanguagePath(item).key;
    const status = applicationStatus(item).key;
    const currentEnough =
      status === "live" || ["week", "month", "quarter"].includes(item.freshnessTag);
    return (
      ["barcelona", "remote"].includes(location) &&
      ["chinese", "chineseCheck", "basicSpanish"].includes(applicationLanguage) &&
      (applicationLanguage !== "basicSpanish" || sourceGroup(item) === "chinese") &&
      isChineseRelevant(item) &&
      ["A", "B", "C"].includes(item.tier) &&
      direction !== "other" &&
      hasRoute &&
      currentEnough &&
      !isInternshipRole(item) &&
      !hasLowPayRisk(item) &&
      !isResearchOnly(item) &&
      status !== "closed"
    );
  }
  if (state.preset === "chinese") {
    return (
      ["barcelona", "remote", "madrid"].includes(location) &&
      isChineseRelevant(item) &&
      isTargetOpportunity(item) &&
      direction !== "other" &&
      ["A", "B", "C"].includes(item.tier) &&
      !isResearchOnly(item) &&
      applicationStatus(item).key !== "closed"
    );
  }
  if (state.preset === "english") {
    return (
      ["barcelona", "remote"].includes(location) &&
      applicationLanguagePath(item).key === "english" &&
      !isResearchOnly(item) &&
      applicationStatus(item).key !== "closed"
    );
  }
  if (state.preset === "brand") {
    return (
      ["barcelona", "remote"].includes(location) &&
      ["brand", "digital"].includes(direction) &&
      !isResearchOnly(item) &&
      applicationStatus(item).key !== "closed"
    );
  }
  if (state.preset === "core") {
    const status = applicationStatus(item).key;
    const text = `${item.opportunity || ""} ${item.fit || ""} ${item.status || ""} ${item.analysis || ""} ${item.searchText || ""}`;
    const motionOrSystem = /brand system|visual identity|brand guideline|design system|motion|motion graphics|art direction|鍝佺墝绯荤粺|瑙嗚璇嗗埆|鍝佺墝鎸囧崡|璁捐绯荤粺|鍔ㄦ晥|鍔ㄦ€亅鑹烘湳鎸囧/i.test(text);
    return (
      ["barcelona", "remote", "madrid"].includes(location) &&
      ["brand", "digital"].includes(direction) &&
      motionOrSystem &&
      ["A", "B", "C"].includes(item.tier) &&
      ["live", "verify"].includes(status) &&
      !isInternshipRole(item) &&
      !hasLowPayRisk(item) &&
      !hasOpaqueEmployerRisk(item) &&
      !isResearchOnly(item)
    );
  }
  if (state.preset === "stable") {
    return (
      ["barcelona", "remote"].includes(location) &&
      !isInternshipRole(item) &&
      !hasLowPayRisk(item) &&
      isFormalRole(item) &&
      language !== "spanish" &&
      direction !== "other" &&
      !hasOpaqueEmployerRisk(item) &&
      !isResearchOnly(item) &&
      applicationStatus(item).key !== "closed"
    );
  }
  return true;
}

function sourceGroup(item) {
  if (["chinese", "linkedin", "other"].includes(item.sourceGroup)) return item.sourceGroup;
  const text = `${item.source} ${item.contact} ${item.searchText}`.toLowerCase();
  if (/linkedin/.test(text)) return "linkedin";
  if (/xihua|huaren|eulam|oulang|infohuaxin|leeeu|casa asia|瑗垮崕|鍗庝汉|娆ф氮|涔愬湪娆ф床|涓枃绀惧尯/.test(text)) {
    return "chinese";
  }
  return "other";
}

function directionKey(item) {
  if (CURATED[item.id]?.direction) return CURATED[item.id].direction;
  const role = String(item.opportunity || "");
  if (/琛屾斂鍔╃悊.*绠€鍗曡棰戝壀杈?i.test(role)) return "social";
  if (/绌洪棿璁捐甯坾椁愰ギ绌洪棿.*瀹ゅ唴璁捐甯?i.test(role)) return "other";
  if (/骞垮憡鍏徃瀹㈡湇.*鍩虹鎺掔増|CDR.*AI.*鎺掔増/i.test(role)) return "production";
  if (/濂宠瀵艰喘.*绾夸笂閿€鍞媿鎽剕绾夸笂閿€鍞?*鎷嶆憚|warehouse office clerk requiring simple PS/i.test(role)) return "ecommerce";
  if (/鐢靛晢璁㈠崟澶勭悊.*绾夸笂浠ｇ悊/i.test(role)) return "ecommerce";
  if (/骞垮憡骞抽潰璁捐甯?*瑙嗛鍓緫.*鎽勫奖甯?i.test(role)) return "production";
  if (/闉嬩笟鐢靛晢杩愯惀|鐢佃剳淇浘宸ヤ綔浜哄憳|鍟嗗搧鍥剧墖澶勭悊/i.test(role)) return "ecommerce";
  if (/绾夸笂钀ラ攢.*鎷嶇収.*淇浘|瑙嗛鎷嶆憚鍜屽壀杈戝笀/i.test(role)) return "social";
  if (/缃戦攢杩愯惀.*鍝佺墝瑙嗚.*Amazon/i.test(role)) return "ecommerce";
  if (/鐭棰戝唴瀹硅繍钀甯傚満钀ラ攢.*鍑洪暅鎷嶆憚/i.test(role)) return "social";
  const text = String(item.searchText || "").toLowerCase();
  if (/xiaohongshu|tiktok|instagram|social media|short video|video editing|content creator|new media|wechat|灏忕孩涔鎶栭煶|鏂板獟浣搢鐭棰憒鍓緫|鍏紬鍙穦绀惧獟|鎷嶆憚/.test(text)) {
    return "social";
  }
  if (/print|printing|signage|r[o贸]tulos|flyer|menu|poster|coreldraw|imprenta|鍗板埛|骞垮憡鍏徃|鎷涚墝|鑿滃崟|浼犲崟|鍠峰嵃|骞垮憡鍒朵綔|骞抽潰鍒朵綔|鐗╂枡鍒朵綔/.test(text)) {
    return "production";
  }
  if (/ecommerce|e-commerce|shopify|amazon|product image|listing|marketplace|product page|鐢靛晢|鐙珛绔檤浜у搧鍥緗鍟嗗搧|涓婃灦|浜氶┈閫?.test(text)) {
    return "ecommerce";
  }
  if (/website|web designer|landing|digital campaign|banner|newsletter|email marketing|digital designer|wordpress|缃戠珯|缃戦〉|瀹樼綉|椤甸潰|鏁板瓧/.test(text)) {
    return "digital";
  }
  if (/brand|branding|visual identity|identity|logo|guidelines|brand system|graphic designer|visual designer|art director|鍝佺墝|瑙嗚|骞抽潰璁捐|璁捐甯坾缇庡伐/.test(text)) {
    return "brand";
  }
  return "other";
}

function locationBucket(item) {
  const curated = CURATED[item.id];
  if (curated?.locationKey) return curated.locationKey;
  const text = `${item.location || ""} ${item.rawColumns?.Location || ""}`;
  if (/madrid|椹痉閲寍getafe|alcobendas|sese帽a|pinto|parla|fuenlabrada|humanes/i.test(text)) {
    return "madrid";
  }
  const hasEuropeRemoteSignal = /remote|remoto|杩滅▼|europe|eu based|europe-wide/i.test(text);
  const hasOnsiteOnlySignal = /on[- ]?site|onsite|office[- ]?only|鐜板満鍔炲叕|鍔炲叕瀹ゅ姙鍏?i.test(text);
  if (hasEuropeRemoteSignal && !hasOnsiteOnlySignal) return "remote";
  if (
    /not barcelona|rather than barcelona|闈炲反濉瀨涓嶅湪宸村|valencia|warsaw|shanghai|涓婃捣|london|paris|lisbon|milano|milan|berlin|amsterdam|hoofddorp|schiedam|courbevoie|uxbridge|budapest/i.test(
      text,
    )
  ) {
    return "other";
  }
  if (/barcelona|barcelon|宸村|badalona|cornell|hospitalet|sant cugat|gl[o貌]ries/i.test(text)) {
    return "barcelona";
  }
  if (/remote|remoto|杩滅▼|europe|eu based|europe-wide|hybrid/i.test(text)) return "remote";
  if (item.locationTag === "Barcelona area") return "barcelona";
  if (item.locationTag === "Remote / Europe") return "remote";
  if (item.locationTag === "Madrid area") return "madrid";
  return "other";
}

function locationLabel(item) {
  const curated = CURATED[item.id];
  if (curated?.locationLabel) return curated.locationLabel;
  if (curated) {
    const location = String(item.location || "");
    const explicit = location.match(/Barcelona(?:\s*\/\s*[^;,]+)?|Badalona(?:\s*\/\s*[^;,]+)?/i);
    if (explicit) return explicit[0].replace("Barcelona", "宸村缃楅偅");
  }
  const labels = {
    barcelona: "宸村缃楅偅鍙婂懆杈?,
    remote: "杩滅▼ / 娆ф床",
    madrid: "椹痉閲屽強鍛ㄨ竟",
    other: "鍏朵粬鍦板尯鎴栨湭璇存槑",
  };
  return labels[locationBucket(item)];
}

function languageInfo(item) {
  const curated = CURATED[item.id];
  if (curated?.language) {
    const key =
      curated.languageKey ||
      (/瑗胯 B|闇€瑕佸熀纭€瑗胯|瑗胯瑕佹眰/.test(curated.language)
        ? /鍩虹/.test(curated.language)
          ? "basic"
          : "spanish"
        : "light");
    return { key, label: curated.language };
  }

  const text = String(item.searchText || "");
  if (
    /english.{0,30}chinese.{0,30}spanish.{0,16}(?:all\s+)?essential|spanish\s+(?:is\s+|all\s+)?(?:essential|required|mandatory)|requires?\s+(?:fluent\s+)?spanish|fluent\s+spanish|spanish\s+[bc][12]|瑗跨彮鐗欒.{0,8}(?:蹇呴』|瑕佹眰|娴佸埄|宸ヤ綔娌熼€?|瑗胯.{0,12}(?:蹇呴』|瑕佹眰|娴佸埄|宸ヤ綔娌熼€殀杈惧埌|[bc][12])|鐔熺粌.{0,6}瑗胯|鐢ㄨタ璇矡閫?i.test(
      text,
    )
  ) {
    return { key: "spanish", label: "瑗胯鏈夋槑纭姹傦紝鎶曢€掑墠鍏堝垽鏂槸鍚﹁兘搴斾粯" };
  }
  if (
    /娌℃湁.{0,24}瑗胯瑕佹眰|鏈??:鍏紑|璇存槑|鍐欐槑).{0,24}瑗胯瑕佹眰|瑗胯瑕佹眰.{0,12}(?:鏈叕寮€|鏈鏄巪鏈煡)|no spanish (?:requirement|gate)|spanish (?:was )?not (?:specified|surfaced)/i.test(
      text,
    )
  ) {
    return { key: "light", label: "鍏紑淇℃伅鏈啓瑗胯瑕佹眰锛涘彲鍏堢敤涓枃纭" };
  }
  if (/basic spanish|spanish basics|鍩虹瑗胯|瑗胯鍩虹|瑗胯.{0,5}鍩虹/i.test(text)) {
    return { key: "basic", label: "鍙渶鍩虹瑗胯锛屽睘浜庣浉瀵瑰彲灏濊瘯鐨勯棬妲? };
  }
  if (
    /mandarin|chinese|涓枃|鏅€氳瘽|english as (?:a )?work language|fluent english|spanish not surfaced|鑻辫.{0,8}(?:宸ヤ綔|瑕佹眰)|鑻辨枃.{0,8}(?:宸ヤ綔|瑕佹眰)/i.test(
      text,
    )
  ) {
    if (sourceGroup(item) === "chinese") {
      return { key: "light", label: "鏉ヨ嚜涓枃娓犻亾锛涘厛纭鏃ュ父鏄惁鍙互涓昏鐢ㄤ腑鏂囨矡閫? };
    }
    return { key: "light", label: "涓枃鎴栬嫳璇彲鍙戞尌浼樺娍锛涗粛闇€鏍稿瀹屾暣瑕佹眰" };
  }
  return { key: "unknown", label: "鍏紑淇℃伅鏈槑纭鏄庤瑷€瑕佹眰" };
}

const APPLICATION_LANGUAGE_PATHS = {
  chinese: {
    key: "chinese",
    label: "涓枃鍙洿鎺ヨ仈绯?,
    short: "涓枃鍙姇",
    tone: "good",
  },
  chineseCheck: {
    key: "chineseCheck",
    label: "鍏堢敤涓枃纭宸ヤ綔璇█",
    short: "涓枃鍏堥棶",
    tone: "check",
  },
  basicSpanish: {
    key: "basicSpanish",
    label: "鍙腑鏂囪仈绯伙紝浣嗗伐浣滈渶鍩虹瑗胯",
    short: "鍩虹瑗胯",
    tone: "check",
  },
  english: {
    key: "english",
    label: "闇€瑕佽嫳鏂囩畝鍘?/ 娌熼€?,
    short: "鑻辨枃鏉愭枡",
    tone: "hard",
  },
  spanish: {
    key: "spanish",
    label: "瑗胯鎴栨湰鍦拌瑷€鏄‖闂ㄦ",
    short: "瑗胯闂ㄦ",
    tone: "hard",
  },
  unknown: {
    key: "unknown",
    label: "鎶曢€掕瑷€鏈鏄庯紝鍏堜腑鏂囨牳瀹?,
    short: "璇█寰呴棶",
    tone: "check",
  },
};

const APPLICATION_MODE_OVERRIDES = Object.freeze({
  760: "spanish",
  762: "english",
  815: "spanish",
});

function applicationLanguagePath(item) {
  const curated = CURATED[item.id];
  const explicitMode = curated?.applicationMode || APPLICATION_MODE_OVERRIDES[item.id];
  if (explicitMode && APPLICATION_LANGUAGE_PATHS[explicitMode]) {
    return APPLICATION_LANGUAGE_PATHS[explicitMode];
  }

  const language = languageInfo(item);
  const text = `${curated?.language || ""} ${curated?.next || ""} ${item.searchText || ""}`;
  if (language.key === "spanish" || curated?.languageHard) {
    return APPLICATION_LANGUAGE_PATHS.spanish;
  }
  if (language.key === "basic") {
    return APPLICATION_LANGUAGE_PATHS.basicSpanish;
  }

  const englishRequired =
    /(?:fluent|professional|excellent|advanced|high[-\s]?level)\s+english|english\s+(?:is\s+)?(?:required|essential|mandatory|must)|鑻辫.{0,10}(?:蹇呴渶|蹇呴』|纭棬妲泑娴佸埄|鐔熺粌)|鑻辨枃(?:绠€鍘唡浣滃搧闆唡鏉愭枡|鐢宠)|鐢ㄨ嫳鏂??:鎶曢€抾鐢宠|娌熼€?/i.test(
      text,
    );
  if (englishRequired) return APPLICATION_LANGUAGE_PATHS.english;

  if (sourceGroup(item) === "chinese" || curated?.chineseFit) {
    if (
      /瑗胯.{0,12}(?:鑹ソ|鐔熺粌|娴佸埄|宸ヤ綔娌熼€殀B1|B2)|瑗跨彮鐗欒.{0,12}(?:鑹ソ|鐔熺粌|娴佸埄|宸ヤ綔娌熼€殀B1|B2)/i.test(
        text,
      )
    ) {
      return APPLICATION_LANGUAGE_PATHS.spanish;
    }
    if (
      /涓枃(?:鍙瘄鑳絴娌熼€殀鍙嬪ソ|娓犻亾|鐜)|鍏堢敤涓枃|涓枃鐢佃瘽|涓枃寰俊|鍗庝汉(?:娓犻亾|鍥㈤槦|鍏徃|椤圭洰)/i.test(
        text,
      )
    ) {
      return APPLICATION_LANGUAGE_PATHS.chinese;
    }
    return APPLICATION_LANGUAGE_PATHS.chineseCheck;
  }

  if (language.key === "light") return APPLICATION_LANGUAGE_PATHS.english;
  return APPLICATION_LANGUAGE_PATHS.unknown;
}

function roleLabels(item) {
  const curated = CURATED[item.id];
  if (curated) return { zh: curated.titleZh, es: curated.titleEs };

  const role = String(item.opportunity || "");
  for (const [pattern, labels] of ROLE_RULES) {
    if (pattern.test(role)) return { zh: labels[0], es: labels[1] };
  }

  if (/璁捐|缇庡伐|瑙嗚|骞抽潰|鍝佺墝|杩愯惀|鏂板獟浣搢瑙嗛|鍓緫/.test(role)) {
    return {
      zh: role.replace(/\s*[-鈥揮\s*[A-Za-z][\s\S]*$/, "").trim() || "璁捐鐩稿叧宀椾綅",
      es: DIRECTION_LABELS[directionKey(item)].es,
    };
  }

  const direction = DIRECTION_LABELS[directionKey(item)];
  return {
    zh: `${direction.zh}鐩稿叧鏈轰細`,
    es: direction.es,
  };
}

function companyLabel(item) {
  if (CURATED[item.id]?.company) return CURATED[item.id].company;
  const role = String(item.opportunity || "");
  if (/鐢佃剳淇浘宸ヤ綔浜哄憳|鍟嗗搧鍥剧墖澶勭悊/i.test(role)) return "鍖垮悕浠撳簱闆囦富锛堥渶鍏堟牳瀹烇級";
  if (/绾夸笂钀ラ攢.*鎷嶇収.*淇浘|鎷嶇収銆佷慨鍥句笌缃戦〉鍩虹/i.test(role)) return "Valencia 绾夸笂钀ラ攢闆囦富锛堥渶鍏堟牳瀹烇級";
  if (/闉嬩笟鐢靛晢杩愯惀|浜у搧鍥俱€佽鎯呴〉涓庡箍鍛婃姇鏀?i.test(role)) return "Yuncler 闉嬩笟鍏徃锛堢枒浼?JOMIX Spain锛?;
  if (/瑙嗛鎷嶆憚鍜屽壀杈戝笀|宸村缃楅偅瑙嗛鎷嶆憚鍜屽壀杈戝笀/i.test(role)) return "宸村缃楅偅涓汉鍙戝竷鑰咃紙闇€鍏堟牳瀹烇級";
  let source = String(item.source || "鏈爣鏄庡叕鍙?);
  if (/REDLINE/i.test(source)) return "REDLINE 浼犲獟";
  if (/KLMED|SUNMED/i.test(source)) return "SUNMED / Grupo KLMED";
  if (/鍙戝竷涓讳綋鏈姭闇瞸涓讳綋鏈姭闇?i.test(source)) return "鏈姭闇查泧涓伙紙闇€鍏堟牳瀹烇級";
  source = source
    .replace(/\s+via\s+.+$/i, "")
    .replace(/\s*\/\s*(Xihua|Huarenjie|InfoHuaxin|Eulam|ES02|LinkedIn|瑗垮崕璁哄潧|鍗庝汉琛梶鍗庝汉閫?.*$/i, "")
    .replace(/\s*\+\s*.+$/, "")
    .trim();
  return source || "鏈爣鏄庡叕鍙?;
}

function sourceLabel(item) {
  return SOURCE_LABELS[sourceGroup(item)];
}

function tierLabel(tier) {
  return {
    A: "A 路 绔嬪嵆浼樺厛",
    B: "B 路 鍊煎緱鎶?,
    C: "C 路 澶囬€?,
    D: "D 路 鍐锋姇瑙傚療",
    X: "X 路 鎺掗櫎",
  }[tier] || "鏈垎绾?;
}

function isStale(item) {
  return applicationStatus(item).key !== "live";
}

function applicationStatus(item) {
  const curated = CURATED[item.id];
  if (curated?.statusKey) {
    return {
      key: curated.statusKey,
      label: { live: "椤甸潰鏄剧ず鍙姇", verify: "闇€鍏堢‘璁ょ姸鎬?, closed: "宸插叧闂?/ 鍘嗗彶" }[curated.statusKey],
    };
  }

  const text = `${item.opportunity || ""} ${item.status || ""} ${item.analysis || ""} ${item.contact || ""}`;
  if (
    /no longer accept|no longer active|no longer available|ya no se aceptan|archived|expired|\bclosed\b|redirects? to (?:an )?expired|listing has just closed|not a live confirmed opening|宸茶繃鏈焲宸插叧闂瓅涓嶅啀鎺ュ彈|宸茬粡涓嬫灦|瀹樻柟宸蹭笅鏋秥宸叉挙涓媩鑱屼綅宸插叧闂瓅涓嶈兘鎸夊湪鎷泑宸茶.{0,24}(?:鏇夸唬|鍙栦唬)/i.test(
      text,
    )
  ) {
    return { key: "closed", label: "宸插叧闂?/ 鍘嗗彶" };
  }
  if (/(?:闇€鍏堢‘璁闇€瑕佺‘璁鍦扮偣鍐茬獊|鐘舵€佸啿绐亅region[- ]eligibility conflict|location conflict|verify[- ]first|must be confirmed|confirm before|returns? 404|error=true|not found)/i.test(text)) {
    return { key: "verify", label: "闇€鍏堢‘璁ょ姸鎬? };
  }
  if (
    /still (?:has|shows).{0,20}(?:apply|solicitar)|(?:has|with) (?:an? )?(?:apply|solicitar)|shows? [鈥?]?(?:apply|solicitar)|apply for this role|live with apply|浠嶆湁[鈥?]?Solicitar|浠嶆樉绀篬鈥?]?(?:Apply|Solicitar|鐢宠|鎶曢€?|鍙洿鎺ョ敵璇穦鍙洿鎺ユ彁浜浠嶅彲鐢宠|瀹樻柟.{0,24}(?:鐢宠|鎶曢€?.{0,16}(?:寮€鏀緗鍏ュ彛)|live.{0,20}(?:role|vacancy|application)|current.{0,24}(?:apply|application)|鏄剧ず鈥淓nviar solicitud鈥潀鏄剧ず鈥淓NV脥A TU CV鈥?i.test(
      text,
    )
  ) {
    return { key: "live", label: "椤甸潰鏄剧ず鍙姇" };
  }
  return { key: "verify", label: "闇€鍏堢‘璁ょ姸鎬? };
}

function getStatusSummary(records = dedupedData) {
  return records.reduce(
    (counts, item) => {
      const key = applicationStatus(item).key;
      if (Object.prototype.hasOwnProperty.call(counts, key)) counts[key] += 1;
      return counts;
    },
    { live: 0, verify: 0, closed: 0 },
  );
}

function freshnessInfo(item) {
  const labels = {
    week: "7 澶╁唴鍙戝竷",
    month: "30 澶╁唴鍙戝竷",
    quarter: "杩?3 涓湀",
    older: "瓒呰繃 3 涓湀",
    old: "鍙戝竷鏃堕棿杈冩棭",
    unknown: "鍙戝竷鏃堕棿鏈‘璁?,
  };
  return {
    key: item.freshnessTag || "unknown",
    label: labels[item.freshnessTag] || labels.unknown,
    date: item.postedAt || "",
  };
}

function genericReason(item) {
  const text = String(item.searchText || "");
  if (item.tier === "X") {
    if (/绾夸笂浠ｇ悊|鐢靛晢浠ｇ悊|璁㈠崟澶勭悊|涓婁紶鍗曞彿|tracking|涓嶄細鍙暀/i.test(text)) {
      return "鍙戝竷鑰呮湭瀹炲悕锛屼篃鏈叕寮€鍏徃銆佽柂璧勩€佸悎鍚屻€佸湴鍧€鎴栦繚闄╋紱鐩稿悓鏂囨杩樺湪澶氫釜鍥藉鐨勫崕浜虹綉绔欓噸澶嶅嚭鐜帮紝鐪熷疄鎬т笌鐢ㄥ伐鍏崇郴鏃犳硶鏍搁獙銆?;
    }
    if (isStale(item)) return "宀椾綅宸插叧闂€佽繃鏈熸垨鍙墿鍘嗗彶鍙傝€冧环鍊硷紝涓嶅簲鍗犵敤褰撳墠鐢宠鏃堕棿銆?;
    return "鍏紑淇℃伅涓嶈冻鎴栭闄╀俊鍙疯緝寮猴紝鏆備笉杈惧埌鍙姇鏍囧噯銆?;
  }
  const direction = DIRECTION_LABELS[directionKey(item)].zh;
  const source = sourceGroup(item);
  const sourceText =
    source === "chinese"
      ? "鏉ヨ嚜鍗庝汉鎴栦腑鏂囨笭閬擄紝娌熼€氱幆澧冪浉瀵瑰弸濂姐€?
      : source === "linkedin"
        ? "鏉ヨ嚜棰嗚嫳锛屽矖浣嶄俊鎭€氬父鏇村畬鏁达紝浣嗗簲浠旂粏鏍稿璇█涓庤韩浠借姹傘€?
        : "鏉ヨ嚜鍏徃瀹樼綉鎴栨満鏋勬笭閬擄紝閫傚悎鐩存帴鏍稿褰撳墠寮€鏀剧姸鎬併€?;
  const freshness = isStale(item) ? "淇℃伅鍙兘杈冩棫锛屼环鍊间富瑕佸湪浜庡厛璇㈤棶鏄惁浠嶅紑鏀俱€? : "";
  return `${item.tier === "A" ? "楂樹紭鍏堢骇" : item.tier === "B" ? "鍊煎緱灏濊瘯" : "鍙綔涓鸿ˉ鍏?}鐨?{direction}鏈轰細銆?{sourceText}${freshness}`;
}

function genericNext(item) {
  if (item.tier === "X") {
    const text = String(item.searchText || "");
    if (/绾夸笂浠ｇ悊|鐢靛晢浠ｇ悊|璁㈠崟澶勭悊|涓婁紶鍗曞彿|tracking|涓嶄細鍙暀/i.test(text)) {
      return "浠呬綔涓洪闄╂牱鏈繚鐣欙細涓嶈鎻愪緵韬唤璇併€侀摱琛屽崱銆侀獙璇佺爜鎴栬处鍙峰瘑鐮侊紝涓嶈浠ｄ粯銆佸灚娆俱€佸埛鍗曟垨鏇垮鏂规敹浠樻銆?;
    }
    return "涓嶅缓璁姇鍏ョ敵璇锋椂闂达紝浠呬繚鐣欎负鎺掗櫎鎴栧巻鍙茶褰曘€?;
  }
  if (isStale(item)) return "鍏堢敤閭欢銆佺數璇濇垨寰俊纭宀椾綅鏄惁浠嶅紑鏀撅紝寰楀埌鑲畾绛斿鍚庡啀鍙戦€佸畬鏁存潗鏂欍€?;
  const direction = directionKey(item);
  const portfolio = {
    brand: "鍝佺墝璇嗗埆銆乂I 绯荤粺鍜岃法濯掍粙寤跺睍",
    digital: "缃戦〉銆佽惤鍦伴〉銆佸箍鍛婄礌鏉愬拰鏁板瓧鍝佺墝寤跺睍",
    social: "绀惧獟瑙嗚銆佺煭瑙嗛灏侀潰銆佸壀杈戝拰鍐呭鏍忕洰",
    ecommerce: "浜у搧鍥俱€佺數鍟?Banner銆佽鎯呴〉鍜屽簵閾鸿瑙?,
    production: "鑿滃崟銆佹嫑鐗屻€佹捣鎶ャ€佷紶鍗曞拰鍗板埛钀藉湴",
    other: "鏈€璐磋繎宀椾綅鑱岃矗鐨?,
  }[direction];
  return `鎵撳紑鍘熸嫑鑱樻笭閬撴牳瀵圭姸鎬侊紝鍑嗗涓€浠界簿绠€绠€鍘嗭紝骞朵紭鍏堝睍绀?{portfolio}妗堜緥銆俙;
}

function signalList(item) {
  const text = String(item.searchText || "");
  const signals = [];
  const freshness = freshnessInfo(item);

  if (freshness.date) {
    signals.push(`璁板綍涓殑鏈€杩戝彂甯冩棩鏈燂細${freshness.date}锛?{freshness.label}锛夈€俙);
  } else if (isStale(item)) {
    signals.push("淇℃伅瀛樺湪鏃у笘鎴栧巻鍙茶褰曚俊鍙凤紝绗竴姝ュ簲纭鏄惁浠嶅紑鏀俱€?);
  } else {
    signals.push("鍏紑璁板綍鏈‘璁ゅ彂甯冩棩鏈燂紝鎶曢€掑墠搴旀墦寮€鍘熼摼鎺ュ鏍搞€?);
  }

  signals.push(`缁忛獙闂ㄦ锛?{experienceInfo(item).label}銆俙);

  const salaryMatches = text.match(
    /(?:鈧瑋EUR|USD|\$|GBP|拢)\s?[\d,.]+(?:\s?[-鈥揮\s?(?:鈧瑋EUR|USD|\$|GBP|拢)?\s?[\d,.]+)?(?:\/month|\/year|\/day|\/hour|\/鏈坾\/骞磡\/澶﹟\/灏忔椂)?/i,
  );
  if (salaryMatches) signals.push(`鍘熶俊鎭嚭鐜拌柂璧勶細${salaryMatches[0]}銆俙);
  else if (/salary|钖祫|宸ヨ祫|钖按/i.test(text)) signals.push("鍘熶俊鎭彁鍒颁簡钖祫锛屼絾闇€瑕佸湪灞曞紑鐨勫師濮嬭褰曚腑鏍稿鍏蜂綋鏉′欢銆?);
  else signals.push("鍏紑璁板綍涓病鏈夋竻鏅般€佸彲鐩存帴姣旇緝鐨勮柂璧勮寖鍥淬€?);

  if (/work residence|work permit|legal residence|legal right to work|宸ヤ綔灞呯暀|鍚堟硶宸ヤ綔|灞呯暀/i.test(text)) {
    signals.push("宀椾綅鍙兘瑕佹眰瑗跨彮鐗欏悎娉曞伐浣滆韩浠芥垨宸ヤ綔灞呯暀銆?);
  }
  if (/portfolio|浣滃搧闆?i.test(text)) signals.push("鐢宠鏃堕渶瑕佹垨寮虹儓寤鸿闄勪笂浣滃搧闆嗐€?);
  if (/school internship agreement|internship agreement|瀛︽牎瀹炰範鍗忚/i.test(text)) {
    signals.push("杩欐槸瀹炰範璺嚎锛岄渶瑕佸鏍℃彁渚涘疄涔犲崗璁€?);
  }
  if (/full-time|鍏ㄨ亴/i.test(text)) signals.push("璁板綍鏄剧ず涓哄叏鑱屾柟鍚戙€?);
  else if (/part-time|part time|鍏艰亴/i.test(text)) signals.push("璁板綍鏄剧ず涓哄吋鑱屾柟鍚戙€?);
  else if (/internship|intern|瀹炰範/i.test(text)) signals.push("璁板綍鏄剧ず涓哄疄涔犳柟鍚戙€?);

  return [...new Set(signals)].slice(0, 5);
}

function contactTokens(item) {
  const text = String(item.contact || "");
  const tokens = [];
  const emails = [...text.matchAll(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi)].map((match) => match[0]);
  emails.slice(0, 3).forEach((email) => tokens.push({ label: `閭锛?{email}`, href: `mailto:${email}` }));

  const phoneText = text.replace(/https?:\/\/\S+/gi, " ").replace(/mailto:\S+/gi, " ");
  const phones = [...phoneText.matchAll(/(?:\+34[\s.-]*)?(?:\d[\s.-]*){9}/g)]
    .map((match) => match[0].trim())
    .filter((value) => !/202[0-9]/.test(value.replace(/\D/g, "")));
  [...new Set(phones)].slice(0, 3).forEach((phone) => {
    const digits = phone.replace(/\D/g, "");
    const dialNumber = digits.length === 9 ? `+34${digits}` : `+${digits}`;
    tokens.push({ label: `鐢佃瘽锛?{phone}`, href: `tel:${dialNumber}` });
  });

  const wechat = text.match(/(?:WeChat|寰俊)\s*[:锛歖?\s*([A-Za-z0-9_-]{4,})/i);
  if (wechat) tokens.push({ label: `寰俊锛?{wechat[1]}` });

  if (!tokens.length) tokens.push({ label: "鑱旂郴鏂瑰紡璇峰湪鍘熸嫑鑱橀〉闈腑鏌ョ湅" });
  return tokens;
}

function linkLabel(href, index) {
  if (href.startsWith("mailto:")) return "鍙戦€侀偖浠?;
  if (/linkedin\.[^/]+\/jobs\/view/i.test(href)) return "棰嗚嫳鎶曢€?;
  if (/xihua/i.test(href)) return "鏌ョ湅瑗垮崕鎷涜仒";
  if (/huarenjie/i.test(href)) return "鏌ョ湅鍗庝汉琛楁嫑鑱?;
  if (/eulam\.infohuaxin/i.test(href)) return "鎵撳紑娆ф氮鏂扮増璇︽儏";
  if (/infohuaxin/i.test(href)) return "鍗庝俊浼犵粺椤碉紙鍙兘澶辨晥锛?;
  if (/wa\.me/i.test(href)) return "WhatsApp 鑱旂郴";
  if (/leeeu/i.test(href)) return "鏌ョ湅涔愬湪娆ф床鎷涜仒";
  if (/xbyhr/i.test(href)) return "鏌ョ湅瑗跨彮鐗欏悓鍩庣綉鎷涜仒";
  if (/es02/i.test(href)) return "鏌ョ湅鍗庝汉閫氭嫑鑱?;
  if (/99876/i.test(href)) return "鏌ョ湅 99876 鍗庝汉鎷涜仒";
  if (/\.pdf(?:$|\?)/i.test(href)) return "鏌ョ湅鎷涜仒 PDF";
  if (/career|careers|jobs/i.test(href)) return "鍏徃鎷涜仒椤?;
  if (/insbrand|infiled|tineco/i.test(href)) return "鍏徃瀹樼綉";
  return index === 0 ? "鎵撳紑鎶曢€掓笭閬? : "琛ュ厖璧勬枡";
}

function renderLinks(item, node, compact = false) {
  node.innerHTML = "";
  const links = toLinks(item).slice(0, compact ? 2 : 3);
  if (!links.length) {
    const span = document.createElement("span");
    span.className = "no-link";
    span.textContent =
      sourceGroup(item) === "chinese"
        ? "鍘熷笘鏃犳湁鏁堟繁閾炬帴锛涜灞曞紑鑱旂郴鏂瑰紡鏍稿疄"
        : "鏆傛棤鍙洿鎺ユ墦寮€鐨勬姇閫掗摼鎺?;
    node.appendChild(span);
    return;
  }

  links.forEach((href, index) => {
    const link = document.createElement("a");
    link.className = index === 0 ? "action-link action-link--primary" : "action-link";
    link.href = href;
    link.target = href.startsWith("mailto:") ? "_self" : "_blank";
    link.rel = "noreferrer";
    link.textContent = linkLabel(href, index);
    node.appendChild(link);
  });
}

function renderRaw(item, node) {
  node.innerHTML = "";
  const keyLabels = {
    "Fit / location": "鍖归厤搴?/ 鍦扮偣",
    "Status / language / compensation": "鐘舵€?/ 璇█ / 钖祫",
    "Analysis / next action": "鍒嗘瀽 / 涓嬩竴姝?,
    "Original detail / application route": "鍘熷璇︽儏 / 鎶曢€掓笭閬?,
    "Role": "宀椾綅",
    "Role / result": "宀椾綅 / 缁撴灉",
    "Company / channel": "鍏徃 / 娓犻亾",
    "Status/evidence": "鐘舵€?/ 璇佹嵁",
    "Source/channel": "鏉ユ簮 / 娓犻亾",
    "Location": "鍦扮偣",
    "Contact/application": "鑱旂郴鏂瑰紡 / 鎶曢€?,
    "Priority fit": "浼樺厛绾у尮閰?,
    "Opportunity": "鏈轰細",
    "Why it matters / caution": "浠峰€?/ 娉ㄦ剰浜嬮」",
    "Status / evidence": "鐘舵€?/ 璇佹嵁",
    "Contact / application": "鑱旂郴鏂瑰紡 / 鎶曢€?,
    "Priority": "浼樺厛绾?,
  };
  const rows = item.rawColumns || {};
  Object.entries(rows).forEach(([key, value]) => {
    if (!String(value || "").trim()) return;
    const row = document.createElement("div");
    row.className = "raw-row";
    row.innerHTML = `<strong>${escapeHtml(keyLabels[key] || key)}</strong><p>${linkifyOriginal(value)}</p>`;
    node.appendChild(row);
  });
}

function linkifyOriginal(value) {
  const safe = escapeHtml(value);
  return safe.replace(
    /(https?:\/\/[^\s;锛宂+|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/gi,
    (match) => {
      const href = match.includes("@") && !match.startsWith("http") ? `mailto:${match}` : match;
      return `<a href="${href}" target="_blank" rel="noreferrer">${match}</a>`;
    },
  );
}

function identityKey(item) {
  const alias = IDENTITY_ALIASES[item.id];
  if (alias) return `alias:${alias}`;

  const links = toLinks(item);
  const specific = links.find((link) =>
    /\/jobs\/view\/|viewthread|info-\d+|\.pdf(?:$|\?)|\/S\d+\.html/i.test(link),
  );
  if (specific) {
    try {
      const url = new URL(specific);
      const tid = url.searchParams.get("tid");
      return tid ? `${url.hostname}${url.pathname}?tid=${tid}` : `${url.hostname}${url.pathname}`;
    } catch {
      return specific.toLowerCase();
    }
  }
  return `${companyLabel(item)}|${String(item.opportunity || "")}`
    .toLowerCase()
    .replace(/[^a-z0-9\u3400-\u9fff]+/g, "");
}

function dedupe(records) {
  const preference = (item) =>
    (CURATED[item.id]?.changeType === "refresh" ? 100000 : 0) +
    (item.postedAt ? 10000 : 0) +
    (item.score || 0);
  const sorted = [...records].sort((a, b) => preference(b) - preference(a));
  const seen = new Set();
  return sorted.filter((item) => {
    const key = identityKey(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

const dedupedData = dedupe(allData);
const latestRoundSection = allData.reduce(
  (latest, item) =>
    /绗?+杞?.test(item.section || "") && item.id > latest.id
      ? { id: item.id, section: item.section }
      : latest,
  { id: 0, section: "" },
).section;
const latestRoundItems = dedupe(allData.filter((item) => item.section === latestRoundSection)).filter(
  (item) => item.tier !== "X",
);
const priorityItems = PRIORITY_IDS.map((id) => allData.find((item) => item.id === id)).filter(Boolean);

function progressKey(item) {
  return identityKey(item);
}

function progressValue(item) {
  return savedProgress[progressKey(item)] || "untracked";
}

function saveProgressValue(item, value) {
  const key = progressKey(item);
  if (value === "untracked") delete savedProgress[key];
  else savedProgress[key] = value;
  try {
    window.localStorage?.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(savedProgress));
  } catch {
    // The board still works when storage is unavailable or blocked.
  }
}

function createProgressControl(item) {
  const label = document.createElement("label");
  label.className = "progress-control";
  const caption = document.createElement("span");
  caption.textContent = "鎴戠殑杩涘害";
  const select = document.createElement("select");
  select.setAttribute("aria-label", `${companyLabel(item)}锛氭垜鐨勬姇閫掕繘搴);
  Object.entries(PROGRESS_LABELS).forEach(([value, text]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = text;
    select.appendChild(option);
  });
  select.value = progressValue(item);
  select.addEventListener("change", () => {
    saveProgressValue(item, select.value);
    renderPriority();
    renderResults();
  });
  label.append(caption, select);
  return label;
}

function chineseOutreachText(item) {
  const role = roleLabels(item).zh.replace(/锛圼^锛塢+锛?g, "");
  const company = companyLabel(item);
  const focus = {
    brand: "鍝佺墝瑙嗚銆乂I 鍜屾暟瀛楀搧鐗屽欢灞?,
    digital: "鏁板瓧鍝佺墝瑙嗚銆佺綉椤典笌澶氭笭閬撳欢灞?,
    social: "绀惧獟瑙嗚銆佺煭瑙嗛涓庡搧鐗屽唴瀹?,
    ecommerce: "浜у搧鍥俱€佽鎯呴〉鍜岀數鍟嗚瑙?,
    production: "骞抽潰璁捐銆佽彍鍗曘€佹嫑鐗屽拰鍗板埛钀藉湴",
    other: "瑙嗚璁捐涓庡唴瀹瑰埗浣?,
  }[directionKey(item)];
  return `浣犲ソ锛屾垜鐪嬪埌${company}鍦ㄦ嫑鑱樷€?{role}鈥濄€傛垜鐩墠鍦ㄥ反濉炵綏閭ｏ紝涓昏鍋?{focus}锛屼腑鏂囨矡閫氭病鏈夐棶棰橈紝瑗胯鍜岃嫳璇繕鍦ㄥ涔犮€傝闂繖涓矖浣嶇幇鍦ㄨ繕鍦ㄦ嫑鑱樺悧锛熸棩甯稿伐浣滆兘鍚︿富瑕佺敤涓枃娌熼€氾紵濡傛灉鍚堥€傦紝鎴戝彲浠ュ厛鍙戜綔鍝侀泦鍜岀畝鍘嗙粰鎮ㄣ€傝阿璋紒`;
}

function englishOutreachText(item) {
  const role = roleLabels(item).es || roleLabels(item).zh;
  const company = companyLabel(item);
  const focus = {
    brand: "brand identity, visual systems, and cross-channel brand extensions",
    digital: "digital brand design, landing pages, and multichannel assets",
    social: "social visuals, short-form video, and branded content",
    ecommerce: "product visuals, e-commerce pages, and campaign assets",
    production: "graphic design, print materials, and production-ready artwork",
    other: "visual design and branded content",
  }[directionKey(item)];
  return {
    en: `Hello, I鈥檓 interested in the 鈥?{role}鈥?position at ${company}. I鈥檓 based in Barcelona and specialize in ${focus}. Before applying, could you please confirm the main working language and whether the role requires frequent client-facing English? I can share my CV and portfolio. Thank you.`,
    zh: `涓枃鎰忔€濓細浣犲ソ锛屾垜瀵?${company} 鐨勨€?{role}鈥濆矖浣嶆劅鍏磋叮銆傛垜鐩墠鍦ㄥ反濉炵綏閭ｏ紝涓昏鍋氱浉鍏宠瑙夎璁°€傛寮忕敵璇峰墠锛屾兂鍏堢‘璁や富瑕佸伐浣滆瑷€锛屼互鍙婅繖涓矖浣嶆槸鍚﹂渶瑕佺粡甯哥敤鑻辫闈㈠瀹㈡埛娌熼€氥€傛垜鍙互鍙戦€佺畝鍘嗗拰浣滃搧闆嗐€傝阿璋€俙,
  };
}

function createCopyButton(text, label = "澶嶅埗涓枃璇㈤棶") {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "copy-message-button";
  button.textContent = label;
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    button.textContent = "宸插鍒讹紝鍙互鐩存帴鍙戦€?;
    window.setTimeout(() => {
      button.textContent = label;
    }, 2200);
  });
  return button;
}

function renderPriority() {
  els.priorityGrid.innerHTML = "";
  els.languageCautionGrid.innerHTML = "";
  const fragment = document.createDocumentFragment();
  const cautionFragment = document.createDocumentFragment();
  let primaryRank = 0;
  let cautionRank = 0;

  priorityItems.forEach((item) => {
    const card = els.priorityTemplate.content.firstElementChild.cloneNode(true);
    const labels = roleLabels(item);
    const curated = CURATED[item.id];
    const freshness = freshnessInfo(item);
    const applicationLanguage = applicationLanguagePath(item);
    const isPrimary = ["chinese", "chineseCheck"].includes(applicationLanguage.key);
    const rank = isPrimary ? ++primaryRank : ++cautionRank;

    card.querySelector(".priority-card__rank").textContent = String(rank).padStart(2, "0");
    card.querySelector(".priority-card__tier").textContent = tierLabel(item.tier);
    card.querySelector(".priority-card__company").textContent = curated.company;
    card.querySelector(".priority-card__title").textContent = labels.zh;
    card.querySelector(".priority-card__title-es").textContent = labels.es;
    card.querySelector(".priority-card__meta").innerHTML = `
      <span>${escapeHtml(DIRECTION_LABELS[directionKey(item)].zh)}</span>
      <span>${escapeHtml(locationLabel(item))}</span>
      <span>${escapeHtml(sourceLabel(item))}</span>
      <span>${escapeHtml(freshness.date ? `${freshness.date} 路 ${freshness.label}` : freshness.label)}</span>
      <span class="language-route language-route--${escapeHtml(applicationLanguage.tone)}">${escapeHtml(applicationLanguage.label)}</span>
    `;
    card.querySelector(".priority-card__reason").textContent = curated.reason;
    card.querySelector(".priority-card__action").innerHTML = `<strong>涓嬩竴姝?/strong><p>${escapeHtml(curated.next)}</p>`;
    const outreachText = chineseOutreachText(item);
    card.querySelector(".priority-card__outreach-text").textContent = outreachText;
    card.querySelector(".priority-card__outreach-actions").appendChild(createCopyButton(outreachText));
    card.querySelector(".priority-card__progress").appendChild(createProgressControl(item));
    renderLinks(item, card.querySelector(".priority-card__links"), true);
    if (isPrimary) {
      fragment.appendChild(card);
    } else {
      cautionFragment.appendChild(card);
    }
  });

  els.priorityGrid.appendChild(fragment);
  els.languageCautionGrid.appendChild(cautionFragment);
}

function baseRecords() {
  if (state.scope === "latestRound") {
    return latestRoundItems;
  }
  if (state.scope === "recentChinese") {
    return dedupedData.filter(
      (item) =>
        sourceGroup(item) === "chinese" &&
        ["week", "month"].includes(item.freshnessTag) &&
        item.tier !== "X",
    );
  }
  if (state.scope === "ab") return dedupedData.filter((item) => ["A", "B"].includes(item.tier));
  if (state.scope === "excluded") return dedupedData.filter((item) => item.tier === "X");
  return dedupedData.filter((item) => item.tier !== "X");
}

function matchesFilters(item, ignoreSource = false) {
  const query = els.searchInput.value.trim().toLowerCase();
  if (query && !String(item.searchText || "").toLowerCase().includes(query)) return false;
  if (!matchesPreset(item)) return false;
  if (els.validRouteOnly.checked && toLinks(item).length === 0) return false;
  if (els.excludeLowPay.checked && hasLowPayRisk(item)) return false;
  if (els.excludeInternships.checked && isInternshipRole(item)) return false;
  if (els.directionFilter.value !== "all" && directionKey(item) !== els.directionFilter.value) return false;
  if (els.locationFilter.value !== "all" && locationBucket(item) !== els.locationFilter.value) return false;
  if (
    els.languageFilter.value !== "all" &&
    applicationLanguagePath(item).key !== els.languageFilter.value
  ) {
    return false;
  }
  const status = applicationStatus(item).key;
  if (els.statusFilter.value === "open" && status === "closed") return false;
  if (!["all", "open"].includes(els.statusFilter.value) && status !== els.statusFilter.value) return false;
  const freshness = els.freshnessFilter.value;
  if (freshness === "week" && item.freshnessTag !== "week") return false;
  if (freshness === "month" && !["week", "month"].includes(item.freshnessTag)) return false;
  if (freshness === "quarter" && !["week", "month", "quarter"].includes(item.freshnessTag)) return false;
  if (freshness === "dated" && !/^\d{4}-\d{2}-\d{2}$/.test(item.postedAt || "")) return false;
  if (freshness === "unknown" && item.freshnessTag !== "unknown") return false;
  const labor = els.laborFilter.value;
  if (labor === "formal" && !isFormalRole(item)) return false;
  if (labor === "knownPay" && !hasKnownCompensation(item)) return false;
  if (labor === "freelance" && !isFreelanceRole(item)) return false;
  if (labor === "internship" && !isInternshipRole(item)) return false;
  if (labor === "payUnknown" && hasKnownCompensation(item)) return false;
  if (els.experienceFilter.value !== "all" && experienceInfo(item).key !== els.experienceFilter.value) {
    return false;
  }
  const risks = riskFlags(item);
  if (
    els.riskFilter.value === "clear" &&
    (risks.length > 0 || applicationStatus(item).key !== "live" || isResearchOnly(item))
  ) {
    return false;
  }
  if (!["all", "clear"].includes(els.riskFilter.value) && !risks.includes(els.riskFilter.value)) {
    return false;
  }
  if (state.progressFilter !== "all" && progressValue(item) !== state.progressFilter) return false;
  if (!ignoreSource && state.source !== "all" && sourceGroup(item) !== state.source) return false;
  return true;
}

function updateSourceCounts(records) {
  const base = records.filter((item) => matchesFilters(item, true));
  els.allSourceCount.textContent = base.length;
  els.chineseCount.textContent = base.filter((item) => sourceGroup(item) === "chinese").length;
  els.linkedinCount.textContent = base.filter((item) => sourceGroup(item) === "linkedin").length;
  els.otherCount.textContent = base.filter((item) => sourceGroup(item) === "other").length;
}

function renderResultCard(item) {
  const card = els.resultTemplate.content.firstElementChild.cloneNode(true);
  const role = roleLabels(item);
  const direction = DIRECTION_LABELS[directionKey(item)];
  const language = languageInfo(item);
  const applicationLanguage = applicationLanguagePath(item);
  const group = sourceGroup(item);
  const curated = CURATED[item.id];
  const freshness = freshnessInfo(item);
  const application = applicationStatus(item);
  const labor = laborConditionInfo(item);

  card.dataset.tier = item.tier || "";
  card.querySelector(".result-card__badges").innerHTML = `
    <span class="tier-badge tier-badge--${escapeHtml(item.tier || "none")}">${escapeHtml(tierLabel(item.tier))}</span>
    ${curated?.changeType === "new" ? '<span class="change-badge change-badge--new">鏈疆鏂板</span>' : ""}
    ${curated?.changeType === "refresh" ? '<span class="change-badge change-badge--refresh">鐘舵€佹洿鏂?/span>' : ""}
    <span class="source-badge">${escapeHtml(SOURCE_LABELS[group])}</span>
    ${group !== "chinese" && isChineseRelevant(item) ? '<span class="china-badge">涓枃鐩稿叧</span>' : ""}
    ${isResearchOnly(item) ? '<span class="research-badge">鐮旂┒绾跨储</span>' : ""}
    <span class="source-badge">${escapeHtml(freshness.date ? `${freshness.date} 路 ${freshness.label}` : freshness.label)}</span>
    <span class="${application.key === "closed" ? "closed-badge" : application.key === "verify" ? "warning-badge" : "live-badge"}">${escapeHtml(application.label)}</span>
    <span class="source-badge">${escapeHtml(labor.label)}</span>
    ${hasKnownCompensation(item) ? '<span class="live-badge">钖祫閲戦鍏紑</span>' : '<span class="warning-badge">钖祫寰呯‘璁?/span>'}
    <span class="language-route language-route--${escapeHtml(applicationLanguage.tone)}">${escapeHtml(applicationLanguage.short)}</span>
    ${riskFlags(item).includes("spanish") ? '<span class="warning-badge">鏈湴璇█纭棬妲?/span>' : ""}
    ${riskFlags(item).includes("english") ? '<span class="warning-badge">闇€瑕佽嫳鏂囨潗鏂?/ 娌熼€?/span>' : ""}
    ${riskFlags(item).includes("lowpay") ? '<span class="warning-badge">浣庤柂 / 鏃犺柂椋庨櫓</span>' : ""}
    ${riskFlags(item).includes("internship") ? '<span class="warning-badge">瀹炰範 / 鍗忚闄愬埗</span>' : ""}
    ${riskFlags(item).includes("opaque") ? '<span class="warning-badge">鍖垮悕瀹㈡埛 / 鑱氬悎鍏ュ彛</span>' : ""}
  `;
  card.querySelector(".result-card__company").textContent = companyLabel(item);
  card.querySelector(".result-card__title").textContent = role.zh;
  card.querySelector(".result-card__title-es").textContent = role.es;
  card.querySelector(".result-card__direction").textContent = direction.zh;
  card.querySelector(".result-card__direction-es").textContent = direction.es;
  card.querySelector(".result-card__location").textContent = locationLabel(item);
  card.querySelector(".result-card__language").textContent = applicationLanguage.label;
  card.querySelector(".result-card__language-detail").textContent = language.label;
  card.querySelector(".result-card__reason").textContent = curated?.reason || genericReason(item);
  card.querySelector(".result-card__next").textContent = curated?.next || genericNext(item);
  const personalized = state.preset === "profile";
  card.querySelector(".result-card__score").textContent = personalized ? personalMatchScore(item) : (item.score ?? "鈥?);
  card.querySelector(".result-card__score-label").textContent = personalized ? "鎴戠殑鍖归厤鍒? : "缁煎悎鍒?;
  if (item.tier === "X") {
    card.querySelector(".result-card__reason-label").textContent = "涓轰粈涔堟帓闄?;
    card.querySelector(".result-card__score-label").textContent = "璁板綍鍒?;
    card.querySelector(".result-card__next-label").textContent = "瀹夊叏鎻愰啋";
  }

  card.querySelector(".result-card__progress").appendChild(createProgressControl(item));
  renderLinks(item, card.querySelector(".result-card__links"));

  const outreachWrap = card.querySelector(".result-card__outreach-wrap");
  const outreachTitle = card.querySelector(".result-card__outreach-title");
  const outreachTextNode = card.querySelector(".result-card__outreach");
  const outreachTranslation = card.querySelector(".result-card__outreach-translation");
  const outreachActions = card.querySelector(".result-card__outreach-actions");
  if (["chinese", "chineseCheck", "basicSpanish"].includes(applicationLanguage.key)) {
    const outreachText = chineseOutreachText(item);
    outreachTitle.textContent = "鍙洿鎺ュ彂閫佺殑涓枃璇㈤棶";
    outreachTextNode.textContent = outreachText;
    outreachActions.appendChild(createCopyButton(outreachText));
  } else if (applicationLanguage.key === "english") {
    const outreach = englishOutreachText(item);
    outreachWrap.classList.add("result-card__outreach-wrap--english");
    outreachTitle.textContent = "鑻辨枃璇㈤棶妯℃澘锛堥檮涓枃鎰忔€濓級";
    outreachTextNode.textContent = outreach.en;
    outreachTranslation.hidden = false;
    outreachTranslation.textContent = outreach.zh;
    outreachActions.appendChild(createCopyButton(outreach.en, "澶嶅埗鑻辨枃璇㈤棶"));
  } else {
    outreachWrap.hidden = true;
  }

  const contactNode = card.querySelector(".result-card__contact");
  contactTokens(item).forEach((token) => {
    const element = token.href ? document.createElement("a") : document.createElement("span");
    element.className = "contact-token";
    element.textContent = token.label;
    if (token.href) element.href = token.href;
    contactNode.appendChild(element);
  });

  const signalsNode = card.querySelector(".result-card__signals");
  signalList(item).forEach((signal) => {
    const li = document.createElement("li");
    li.textContent = signal;
    signalsNode.appendChild(li);
  });

  renderRaw(item, card.querySelector(".result-card__raw"));
  return card;
}

function renderResults() {
  const records = baseRecords();
  updateSourceCounts(records);
  const visible = records.filter((item) => matchesFilters(item));
  sortRecords(visible);

  els.visibleCount.textContent = visible.length;
  els.resultsList.innerHTML = "";

  if (!visible.length) {
    els.resultsList.innerHTML = `
      <div class="empty-state">
        <strong>娌℃湁绗﹀悎褰撳墠鏉′欢鐨勬満浼?/strong>
        <p>鍙互娓呴櫎閮ㄥ垎绛涢€夛紝鎴栧垏鎹㈠埌鈥淎 / B 鍊煎緱鎶曗€濃€滃彲鎶?+ 鍐疯仈绯烩€濆拰鈥滄帓闄?/ 宸茶繃鏈熲€濄€?/p>
      </div>
    `;
    els.loadMore.hidden = true;
    els.loadMore.parentElement.hidden = true;
    return;
  }

  const fragment = document.createDocumentFragment();
  visible.slice(0, state.limit).forEach((item) => fragment.appendChild(renderResultCard(item)));
  els.resultsList.appendChild(fragment);

  els.loadMore.hidden = visible.length <= state.limit;
  els.loadMore.parentElement.hidden = els.loadMore.hidden;
  if (!els.loadMore.hidden) {
    els.loadMore.textContent = `缁х画鍔犺浇锛堣繕鏈?${visible.length - state.limit} 鏉★級`;
  }
}

function resetLimitAndRender() {
  state.limit = 18;
  renderResults();
}

function syncPresetUi() {
  els.presetButtons.forEach((button) =>
    button.classList.toggle("is-active", button.dataset.preset === state.preset),
  );
  els.presetNote.textContent = PRESET_NOTES[state.preset] || PRESET_NOTES.none;
}

function syncScopeUi() {
  els.scopeButtons.forEach((button) =>
    button.classList.toggle("is-active", button.dataset.scope === state.scope),
  );
}

function syncSourceUi() {
  els.sourceTabs.forEach((button) =>
    button.classList.toggle("is-active", button.dataset.source === state.source),
  );
}

function syncProgressFilterUi() {
  els.progressFilterButtons.forEach((button) =>
    button.classList.toggle("is-active", button.dataset.progressFilter === state.progressFilter),
  );
}

function applyPreset(preset) {
  state.preset = preset;
  state.scope = ["profile", "actionable", "chinese", "core", "none"].includes(preset) ? "all" : "ab";
  state.source = "all";
  state.progressFilter = "all";
  els.searchInput.value = "";
  els.directionFilter.value = "all";
  els.locationFilter.value = "all";
  els.languageFilter.value = "all";
  els.statusFilter.value = "open";
  els.freshnessFilter.value = "all";
  els.sortFilter.value = "smart";
  els.laborFilter.value = "all";
  els.experienceFilter.value = "all";
  els.riskFilter.value = "all";
  els.validRouteOnly.checked = true;
  els.excludeLowPay.checked = preset !== "none";
  els.excludeInternships.checked = ["actionable", "stable"].includes(preset);
  syncPresetUi();
  syncScopeUi();
  syncSourceUi();
  syncProgressFilterUi();
  resetLimitAndRender();
}

function clearPresetForManualFilters() {
  state.preset = "none";
  syncPresetUi();
}

els.presetButtons.forEach((button) => {
  button.addEventListener("click", () => applyPreset(button.dataset.preset));
});

els.scopeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    clearPresetForManualFilters();
    state.scope = button.dataset.scope;
    state.source = "all";
    syncScopeUi();
    syncSourceUi();
    resetLimitAndRender();
  });
});

els.sourceTabs.forEach((button) => {
  button.addEventListener("click", () => {
    clearPresetForManualFilters();
    state.source = button.dataset.source;
    if (state.scope === "recentChinese" && !["all", "chinese"].includes(state.source)) {
      state.scope = "all";
      syncScopeUi();
    }
    syncSourceUi();
    resetLimitAndRender();
  });
});

els.statusSummaryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    clearPresetForManualFilters();
    state.scope = "all";
    state.source = "all";
    state.progressFilter = "all";
    els.statusFilter.value = button.dataset.status;
    syncScopeUi();
    syncSourceUi();
    syncProgressFilterUi();
    resetLimitAndRender();
    document.querySelector("#database")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

els.progressFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.progressFilter = button.dataset.progressFilter;
    if (state.progressFilter !== "all" && state.progressFilter !== "untracked") {
      clearPresetForManualFilters();
      state.scope = "all";
      state.source = "all";
      syncScopeUi();
      syncSourceUi();
    }
    syncProgressFilterUi();
    resetLimitAndRender();
  });
});

els.searchInput.addEventListener("input", resetLimitAndRender);
els.searchInput.addEventListener("change", resetLimitAndRender);

[els.directionFilter, els.locationFilter, els.languageFilter, els.statusFilter, els.freshnessFilter, els.laborFilter, els.experienceFilter, els.riskFilter].forEach((input) => {
  input.addEventListener("input", () => {
    clearPresetForManualFilters();
    resetLimitAndRender();
  });
  input.addEventListener("change", () => {
    clearPresetForManualFilters();
    resetLimitAndRender();
  });
});

els.sortFilter.addEventListener("change", resetLimitAndRender);

els.validRouteOnly.addEventListener("change", resetLimitAndRender);
els.excludeLowPay.addEventListener("change", resetLimitAndRender);
els.excludeInternships.addEventListener("change", resetLimitAndRender);

els.resetFilters.addEventListener("click", () => {
  applyPreset("profile");
});

els.loadMore.addEventListener("click", () => {
  state.limit += 18;
  renderResults();
});

function initStats() {
  els.totalCount.textContent = allData.length;
  els.priorityCount.textContent = priorityItems.filter((item) =>
    ["chinese", "chineseCheck"].includes(applicationLanguagePath(item).key),
  ).length;
  els.chineseTotal.textContent = allData.filter((item) => sourceGroup(item) === "chinese").length;
  els.recentChineseTotal.textContent = dedupedData.filter(
    (item) =>
      sourceGroup(item) === "chinese" &&
      ["week", "month"].includes(item.freshnessTag) &&
      item.tier !== "X",
  ).length;
  const statusSummary = getStatusSummary();
  els.liveCount.textContent = statusSummary.live;
  els.verifyCount.textContent = statusSummary.verify;
  els.closedCount.textContent = statusSummary.closed;
  els.updatedAt.textContent = meta.generatedAt ? meta.generatedAt.slice(0, 10) : "鈥?;
}

initStats();
renderPriority();
renderResults();

