
import { ChartBar, Sparkles, Users, Search, Target, ShieldCheck, Zap, Headphones, TrendingUp, Heart, Repeat, ScanSearch, Handshake, Link, BarChart3 } from 'lucide-react';

export const NAV_LINKS = [];

export const HERO_CONTENT = {
  badge: 'Trusted by 500+ Top Beauty Celebs',
  title: '내 팬덤이 "원하는 상품"\n정확히 찾아드립니다.',
  subtitle: '많은 공구·기획전 제안 중 아무거나가 아닌, 채널에서 터질 확률이 가장 높은 제품만 AI가 선별합니다.',
  cta: '내 채널 무료 분석하기',
  cta_secondary: '서비스 소개서 보기',
};

export const BRAND_LOGOS = [
  "Bioderma", "Olive Young", "Rom&nd", "Clio", "Dr.Jart+", "Innisfree", "3CE", "Laneige"
];

export const STATS_DATA = [
  {
    value: "40%",
    label: "평균 매출 성장률",
    desc: "기존 공구 대비",
    icon: TrendingUp
  },
  {
    value: "98%",
    label: "팬덤 긍정 반응",
    desc: "채널 핏 기반 매칭 시",
    icon: Heart
  },
  {
    value: "85%",
    label: "재진행 희망률",
    desc: "셀럽 파트너 만족도",
    icon: Repeat
  }
];

export const PAIN_POINTS = [
  {
    id: 1,
    title: "쏟아지는 제안, 안 맞는 결",
    desc: "제안은 많지만 내 채널에 먹힐지 확신이 없어 선택이 늘 불안하지 않나요?",
    icon: Search,
  },
  {
    id: 2,
    title: "팬덤의 신뢰 하락 걱정",
    desc: "팬덤이 좋아하는 기준, 그리고 그 기준에 딱 맞는 제품을 찾기 어렵지 않나요?",
    icon: Users,
  },
  {
    id: 3,
    title: "들쭉날쭉한 공구 성과",
    desc: "어떤 건 잘 되고 어떤 건 안 되고... 안정적인 성공 레퍼런스가 필요하신가요?",
    icon: ChartBar,
  },
  {
    id: 4,
    title: "복잡한 운영과 조율",
    desc: "업체와의 소통, CS, 배송 이슈는 외적인 스트레스가 크신가요?",
    icon: Headphones,
  },
];

export const HOW_IT_WORKS = [
  {
    step: 'STEP 01',
    title: 'Channel DNA 분석',
    subtitle: 'AI 기반 데이터 분석',
    desc: '', 
    features: ['오디언스 성향 분석', '과거 퍼포먼스 데이터 트래킹', '성공 키워드 추출'],
    icon: ScanSearch
  },
  {
    step: 'STEP 02',
    title: 'AI 맞춤 제품 소싱',
    subtitle: 'AI 기반 맞춤 제품 소싱',
    desc: '',
    features: ['팬덤이 좋아하는 제품 구성', '안정적이고 꾸준한 제품 소싱', '브랜드가 먼저 찾아오는 구조'],
    icon: Handshake
  },
  {
    step: 'STEP 03',
    title: '전담 매니저 올인원 케어',
    subtitle: '셀럽은 소통에만 집중하세요',
    desc: '',
    features: ['1:1 전담 매니저 배정', '실시간 CS 대응', '투명한 정산 시스템'],
    icon: Headphones
  },
];

export const FEATURES = [
  {
    title: '링크 한번에 간편 등록',
    desc: '채널 링크 등록 하나만으로 모든 준비는 끝,\n간편 등록으로 채널의 성장을 함께하세요.',
    icon: Link,
  },
  {
    title: '다양한 채널 팬덤 데이터 제공',
    desc: '팬덤의 특징과 채널이 갖고 있는\n다양한 심층 분석 결과를 제공합니다.',
    icon: BarChart3,
  },
  {
    title: '검증된 압도적 브랜드 풀',
    desc: '매 달 업데이트 되는 수 천가지의\n압도적인 브랜드 POOL을 경험하세요.',
    icon: ShieldCheck,
  },
  {
    title: '매일 최적의 제품 소싱',
    desc: '내가 가는 것이 아닌 브랜드가 먼저 찾아옵니다!\n채널에 최적화된 제품을 지속하여 제공해 드립니다.',
    icon: Sparkles,
  },
  {
    title: '운영 리소스 ZERO',
    desc: '주문, 배송, CS까지 모든 운영 과정은 셀럽뷰티가\n책임지니 콘텐츠와 판매에만 집중하세요.',
    icon: Zap,
  },
];

export const TESTIMONIALS = [
  {
    quote: "제안이 너무 많아서 항상 선택이 힘들었는데, 이번엔 후보가 딱 정리돼서 왔어요. ‘이 제품이 왜 우리 채널에서 먹힐지’가 설명되니까 제가 판단하기도 쉬웠고요.",
    author: "뷰티 크리에이터 A님",
    role: "팔로워 15만, 색조 전문",
    img: "https://api.dicebear.com/9.x/lorelei/svg?seed=Aneka"
  },
  {
    quote: "타 플랫폼 처럼 내가 찾아가는 것이 아닌, 내 채널에 맞는 제품을 안정적으로 공급해줄 수 있다는 지점이 채널 성장과 더불어 안정성을 더해줬습니다.",
    author: "인플루언서 B님",
    role: "팔로워 8만, 스킨케어 전문",
    img: "https://api.dicebear.com/9.x/lorelei/svg?seed=qwe&beardProbability=0&earringsProbability=100&hairAccessoriesProbability=100"
  },
  {
    quote: "내 채널 DNA를 분석해준다는 게 신기했어요. 실제로 추천받은 기초 제품이 제 채널 역사상 역대급 반응을 이끌어냈습니다. 레퍼런스가 쌓이니 든든해요.",
    author: "유튜버 C님",
    role: "구독자 30만, 데일리 메이크업",
    img: "https://api.dicebear.com/7.x/lorelei/svg?seed=Celina"
  },
];

export const FAQ_ITEMS = [
  {
    question: "서비스 이용에 들어가는 비용이 따로 있을까요?",
    answer: "가입비, 유지비, 관리비 모두 0원! 서비스를 이용하는 모든 과정에서 발생하는 비용은 무료이며, 비용 부담 없는 서비스 이용으로 채널의 성장을 함께하세요!"
  },
  {
    question: "서비스 이용에 필요한 단계가 어떻게 되나요?",
    answer: "서비스는 아래 5단계로 진행돼요.\n\n1. 간편 문의\n간단히 채널/관심 카테고리만 알려주시면, 전담 매니저가 배정돼요.\n\n2. 계정 간편 등록\n채널 링크를 등록하면, 채널 데이터를 기반으로 상세 분석이 진행됩니다.\n\n3. 제품 맞춤 소싱 (상시 진행)\n분석 결과를 바탕으로 내 채널에 맞는 공구·기획전 제품을 상시 추천드려요.\n\n4. 선호 제품 & 일정 선택\n추천받은 제품 중 원하는 제품을 고르고, 진행 일정만 확정하면 됩니다.\n(캠페인 진행을 원할 경우에만 선택)\n\n5. 기획전·공구 진행\n기획/운영/정산 등 실무 진행을 지원하며, 셀럽은 콘텐츠 제작과 소통에 집중하시면 돼요."
  },
  {
    question: "어느 분야의 제품들이 주로 소싱 되는 걸까요?",
    answer: "저희는 현재 뷰티와 푸드 관련 공구·기획전 상품을 주로 소싱해 드리고 있으며, 채널에 최적화된 제품만 선별합니다.\n\n구체적으로는 아래 카테고리에서 “터질 확률이 높은” 제품 위주로 제안드려요.\n\n뷰티(메인): 스킨케어(클렌징/각질·모공/진정/미백·탄력), 바디·헤어, 선케어, 색조(베이스/립), 이너뷰티\n\n푸드(확장): 간편식·밀키트, 단백질/다이어트 식품, 건강기능식품, 디저트·간식, 음료(티/스무디 등)\n\n다만 단순히 “유행템”을 가져오는 방식이 아니라,\n셀럽님의 콘텐츠 톤·팬덤 반응·가격대·구매성향(반복구매/선물/충동구매 등)을 함께 보고,\n제품별 채널에 적합한 부분을 고려해 가장 성공 확률이 높은 후보만 압축해서 전달드립니다."
  },
  {
    question: "캠페인 관리, 운영, 소통, 정산과 같은 전체적인 부분을 누가 담당하나요?",
    answer: "캠페인 별로 전담 매니저가 함께하여, 캠페인의 A TO Z를 관리합니다. 셀럽, 크리에이터분들이 집중해야 할 부분에만 집중하세요! 전담 매니저의 체적인 관리와 함께 여러분의 성공적인 성과를 지원합니다!"
  },
  {
    question: "벤더사 및 소속 MCN이 있어도 진행이 가능한가요?",
    answer: "네, 가능합니다. 셀럽뷰티는 이미 다양한 벤더사 및 MCN과의 협업을 확대하고 있으며, 소속 셀럽들의 매출 성장을 적극 지원하고 있습니다.\n\n만약 타 회사에 소속되어 진행에 망설임이 있으실 경우, 문의 시 해당 내용을 함께 말씀해 주시면 저희가 소속사와의 협업 관계를 조율해 드립니다. 이를 통해 AI 매칭이 원활하게 적용되고, 채널 성과를 극대화할 수 있도록 지원합니다.\n\n또한 채널을 저희 서비스에 등록하신 이후에도 저희를 통한 것뿐만 아니라 타사의 제안을 자유롭게 진행하실 수 있기에, 다양한 방면으로 폭넓은 기회를 누리실 수 있습니다."
  }
];
