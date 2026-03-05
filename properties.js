// =============================================
//  부동산 매물 데이터 - properties.js
//  index.html에서 이 파일을 먼저 로드하세요:
//  <script src="properties.js"></script>
// =============================================

// =============================================
//  사진 배열
// =============================================
const WOLGANG = ['dd1.jpeg','dd2.jpeg','dd3.jpeg','dd4.jpeg','dd5.jpeg',
  'dd6.jpeg','dd7.jpeg','dd8.jpeg','dd9.jpeg','dd10.jpeg',
  'dd11.jpeg','dd12.jpeg','dd13.jpeg','dd14.jpeg','dd15.jpeg'];

const PROPS = [
  {id:0,type:'apt',isNew:true,real:true,
    loc:'제주시 도련일동',locEn:'Doryeon-il-dong, Jeju-si',locZh:'济州市道莲一洞',
    name:'도련블루핀 풀옵션 연세',nameEn:'Doryeon Bluefin – Full Option Yearly',nameZh:'道莲蓝鳍公寓全配年租',
    priceKo:'보 2,000만 / 연세 2,400만',priceEn:'Dep. $1,384 / Annual $16,609',priceZh:'押金₩200万 / 年租₩2,400万',
    area:'전용 84.97㎡ / 공급 111.42㎡',floor:'탑층 7/7층',floorEn:'Top Floor 7F/7F',floorZh:'顶层7/7层',
    year:'2025.01 사용승인',yearEn:'Approved Jan 2025',yearZh:'2025年1月竣工',dir:'동향',
    manage:'약 9만원/월',manageEn:'~$62/mo',manageZh:'约₩9万/月',
    desc:'2025년 신축 탑층 매물. 가전 풀옵션, 몸만 들어오시면 됩니다.\n방3 화2 + 거실 + 베란다 + 드레스룸 + 팬트리. LG 세탁기·건조기, 냉장고(4도어 비스포크) 완비.\n90세대/주차 93대. 관리비 약 9만원. 입주 2026.05.09 이후 협의.',
    descEn:'Top floor 2025 new build. Full appliances – just move in.\n3 bed/2 bath + veranda + walk-in closet + pantry. LG tower washer/dryer, 4-door fridge.\n90 units/93 parking. ~$62/mo maintenance. Move-in after May 9, 2026.',
    descZh:'2025年新建顶层，拎包入住。\n3房2卫+阳台+衣帽间+储藏室。含LG洗烘机、4门冰箱。\n90户/93车位。物业费约₩9万/月。2026年5月9日后入住。',
    imgs:APT},
  {id:1,type:'house',isNew:true,real:true,
    loc:'제주시 조천읍 선흘리',locEn:'Seonheul-ri, Jocheon-eup',locZh:'济州市朝天邑善屹里',
    name:'선흘리 급매 단독주택',nameEn:'Seonheul-ri Urgent Sale House',nameZh:'善屹里急售独栋住宅',
    priceKo:'급매 3억 5,000만원',priceEn:'Urgent $256,055',priceZh:'急售₩3.7亿 ($256,055)',
    area:'대지 198평(654.55㎡) / 전용 약 30평',floor:'지상 1층',floorEn:'Ground Floor',floorZh:'地上1层',
    year:'2021년 6월 준공',yearEn:'Built June 2021',yearZh:'2021年6月竣工',dir:'남향',
    manage:'없음',manageEn:'None',manageZh:'无物业费',
    desc:'급매! 선흘초등학교 약 2km / 차량 5분 내.\n대지 198평, 전용 약 30평. 남향. 즉시 입주 가능.\n철근콘크리트 구조. 지분등기 아님 (단독 소유권). 2021년 신축.',
    descEn:'Urgent Sale! 2km from Seonheul Elementary / 5 min by car.\nLand 655㎡, Living ~99㎡. South-facing. Move-in ready.\nReinforced concrete. Full ownership (not fractional). Built 2021.',
    descZh:'急售！距善屹小学约2km/车程5分钟。\n地积655㎡，专用约99㎡。朝南。可即刻入住。\n钢筋混凝土。独立产权。2021年新建。',
    imgs:HOUSE},
  {id:2,type:'house',isNew:true,real:true,
    loc:'제주시 봉개동',locEn:'Bongae-dong, Jeju-si',locZh:'济州市凤开洞',
    name:'봉개동 몽돌빌리지 풀옵션 임대',nameEn:'Mongdol Village – Full Option Rental',nameZh:'凤开洞蒙石村全配租赁',
    priceKo:'보 1,800만 / 년세 1,800만',priceEn:'Dep. $1,246 / Annual $12,457',priceZh:'押金₩1,800万 / 年租₩1,800万',
    area:'2층 단독주택 / 풀옵션',floor:'지상 2층',floorEn:'2-Story House',floorZh:'地上2层',
    year:'즉시입주',yearEn:'Move-in Ready',yearZh:'可即刻入住',dir:'남향',
    manage:'별도 문의',manageEn:'Inquire',manageZh:'另行咨询',
    desc:'봉개동 몽돌빌리지. 방 구성 좋고 테라스까지 있어 활용도 최고.\n골프장 및 관광지 근접. 풀옵션 임대로 편리한 생활 가능.\n즉시 입주 가능.',
    descEn:'Mongdol Village, Bongae-dong. Excellent room layout with terrace.\nNear golf courses & tourist attractions. Full option – move in as-is.\nImmediate occupancy.',
    descZh:'凤开洞蒙石村。房间布局好，带露台。\n靠近高尔夫球场和旅游景点。全配租赁，生活便利。\n可即刻入住。',
    imgs:BONG},
  {id:3,type:'house',isNew:true,real:true,
    loc:'제주시 애월읍 소길리',locEn:'Sogil-ri, Aewol-eup',locZh:'济州市涯月邑小吉里',
    name:'소길리 프라이빗 전원주택 매매',nameEn:'Sogil-ri Private Country House',nameZh:'小吉里私密田园住宅出售',
    priceKo:'7억 2,000만 (절충가능)',priceEn:'$498,270 (Negotiable)',priceZh:'₩7.2亿 ($498,270，可协商)',
    area:'대지 210평 / 건축 33평 / 연면적 55평',floor:'지상 2층 (목조+벽돌)',floorEn:'2F Wood+Brick',floorZh:'地上2层(木造+砖)',
    year:'상태 최상',yearEn:'Excellent Condition',yearZh:'状态最佳',dir:'남향',
    manage:'없음',manageEn:'None',manageZh:'无物业费',
    desc:'애월읍 소길리 전원주택. 대지 210평, 연면적 55평. 방2 화2 넓은 거실.\n목조와 벽돌로 잘 지어진 예쁜 집. 소나무로 둘러싸인 프라이빗한 환경.\n평화로 인근. 상태 최상. 이 집을 아껴주실 분께 절충 가능.',
    descEn:'Country house in Sogil-ri, Aewol. Land 210py / Total 55py. 2 bed, 2 bath, large living room.\nBeautifully built with wood & brick. Pine trees all around – private & healing.\nNear Pyeonghwa-ro. Excellent condition. Price negotiable.',
    descZh:'涯月邑小吉里田园住宅。地积210坪，总面积55坪。2室2卫宽敞客厅。\n木造加砖墙精心建造，松树环绕，私密宜居。\n距平和路不远。状态最佳。诚心买家可议价。',
    imgs:SOGIL},
  {id:4,type:'oneroom',isNew:true,real:true,
    loc:'제주시 연동',locEn:'Yeondong, Jeju-si',locZh:'济州市涟洞',
    name:'연동 1.5룸 테라스 월세',nameEn:'Yeondong 1.5 Room w/ Terrace',nameZh:'涟洞1.5室带露台月租',
    priceKo:'보 200만 / 월세 65만',priceEn:'Dep. $1,384 / Rent $450/mo',priceZh:'押金₩200万 / 月租₩65万',
    area:'전용 28.07㎡ / 공급 41.98㎡',floor:'6층/17층',floorEn:'6F/17F',floorZh:'6层/17层',
    year:'2020.12 사용승인',yearEn:'Approved Dec 2020',yearZh:'2020年12月竣工',dir:'북향',
    manage:'7만원/월',manageEn:'$48/mo',manageZh:'₩7万/月',
    desc:'메종글래드 바로 옆, 생활 인프라 완벽. 테라스 보유.\n반려동물 가능. 즉시 입주. 카페·식당·편의점·은행·병원·버스정류장 도보권.\n공항 접근성 우수. 관리비 7만원. 주차 110대(420세대).',
    descEn:'Next to Maison Glad Hotel – all amenities walkable. Terrace included.\nPet-friendly. Move-in now. Great airport access.\nMaintenance $48/mo. 110 parking/420 units.',
    descZh:'紧邻美颂格莱德酒店，生活配套完善。带露台。\n允许宠物。可即刻入住。物业费₩7万/月。停车位110个。',
    imgs:ROOM},
  {id:5,type:'house',isNew:true,real:true,
    loc:'제주시 월광로 107-10',locEn:'107-10 Wolgwang-ro, Jeju-si',locZh:'济州市月光路107-10',
    name:'월광로 복층 라메종 연세 (5호)',nameEn:'La Maison Duplex – Annual Rent (Unit 5)',nameZh:'月光路复式拉梅种年租（5号）',
    priceKo:'보 2,000만 / 연세 1,700만',priceEn:'Dep. $13,840 / Annual $11,764',priceZh:'押金₩2,000万 / 年租₩1,700万',
    area:'전용 84.42㎡ (1층 45㎡ + 2층 39.32㎡)',floor:'복층 1~2층',floorEn:'Duplex 1F~2F',floorZh:'复式1~2层',
    year:'2019.12.23 사용승인',yearEn:'Approved Dec 2019',yearZh:'2019年12月竣工',dir:'남향',
    manage:'약 15,000원/월',manageEn:'~$10/mo',manageZh:'约₩15,000/月',
    desc:'대지지분 넓은 세대. 복층 구조 + 오픈 베란다.\n1층: 거실·주방·화장실·다용도실 / 2층: 방2·화장실·드레스룸.\n시스템에어컨 3대 + 벽걸이에어컨 1대. 방마다 붙박이장.\n영어교육도시 30분 / 공항 5분 / 드림타워 5분. 퇴청 협의. 즉시입주.',
    descEn:'Large land share unit. Duplex layout + open veranda.\n1F: Living room, kitchen, bathroom, utility room / 2F: 2 beds, bathroom, dressing room.\n3 system A/C + 1 wall-mounted A/C. Built-in wardrobe in every room.\n30 min to English Education City / 5 min to airport / 5 min to Dream Tower. Move-in ready.',
    descZh:'大地积份额户型。复式结构+开放式阳台。\n1层：客厅·厨房·卫生间·多功能室 / 2层：2室·卫生间·衣帽间。\n中央空调3台+壁挂空调1台。每间房配内嵌衣柜。\n距英语教育城30分钟/机场5分钟/梦想塔5分钟。可即刻入住。',
    imgs:WOLGANG}
];

// =============================================
//  다국어 타입 라벨
// =============================================
const TL = {
  apt:     {ko:'아파트',    en:'Apartment',    zh:'公寓'},
  oneroom: {ko:'원룸/투룸', en:'Studio/1BR',   zh:'单间/一室'},
  house:   {ko:'단독주택',  en:'House',        zh:'独栋'},
  land:    {ko:'토지',      en:'Land',         zh:'土地'},
  comm:    {ko:'상가',      en:'Commercial',   zh:'商铺'}
};

// =============================================
//  언어 상태 변수
// =============================================
let lang = 'ko', slide = 0, cur = null;

function L(ko, en, zh) {
  return lang === 'en' ? en : lang === 'zh' ? zh : ko;
}
