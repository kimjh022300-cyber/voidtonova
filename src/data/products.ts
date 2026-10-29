export type ProductLine = "Void" | "Nova";

export type Product = {
  id: string;
  line: ProductLine;
  name: string;
  category: string;
  description: string;
  purchaseUrl: string | null;
  purchaseOptions?: readonly { label: string; url: string }[];
  image: string | null;
  imageAlt: string;
  detailPath?: `/products/${string}`;
  detailTitleLines?: readonly string[];
  detailTitleCompact?: boolean;
};

export const productGroups = [
  {
    id: "void",
    name: "Void" as const,
    title: "집중을 위한 도구",
    copy: "불필요한 것을 비우고, 해야 할 일에 집중할 수 있는 상태를 만듭니다.",
  },
  {
    id: "nova",
    name: "Nova" as const,
    title: "움직임을 위한 도구",
    copy: "작은 움직임을 시작하고, 나만의 에너지와 루틴을 만들어갑니다.",
  },
] as const;

export const products: Product[] = [
  {
    "id": "void-portable-laptop-stand",
    "line": "Void",
    "name": "Void 휴대용 노트북 거치대",
    "category": "노트북 거치대",
    "description": "180g의 가벼운 무게로, 어디서나 편하게 펼쳐 쓰는 노트북 거치대.",
    "purchaseUrl": "https://smartstore.naver.com/voidtonova/products/13724117530",
    "image": "/products/representatives/void-portable-laptop-stand.webp",
    "imageAlt": "Void 휴대용 노트북 거치대 대표 이미지",
    "detailPath": "/products/void-portable-laptop-stand",
    "detailTitleLines": [
      "Void 휴대용",
      "노트북 거치대"
    ]
  },
  {
    "id": "void-360-laptop-stand",
    "line": "Void",
    "name": "Void 360도 노트북 거치대",
    "category": "노트북 거치대",
    "description": "묵직한 무게로 안정적으로 지지하고, 360도 회전으로 원하는 방향을 쉽게 맞추는 노트북 거치대.",
    "purchaseUrl": "https://smartstore.naver.com/voidtonova/products/13723985948",
    "image": "/products/representatives/void-360-laptop-stand.webp",
    "imageAlt": "Void 360도 노트북 거치대 대표 이미지",
    "detailPath": "/products/void-360-laptop-stand",
    "detailTitleLines": [
      "Void 360도",
      "노트북 거치대"
    ]
  },
  {
    "id": "void-fixed-laptop-stand",
    "line": "Void",
    "name": "Void 고정형 노트북 거치대",
    "category": "노트북 거치대",
    "description": "단단한 구조로 흔들림을 줄이고, 노트북을 안정적으로 지지하는 고정형 거치대.",
    "purchaseUrl": "https://smartstore.naver.com/voidtonova/products/13723979970",
    "image": "/products/representatives/void-fixed-laptop-stand.webp",
    "imageAlt": "Void 고정형 노트북 거치대 대표 이미지",
    "detailPath": "/products/void-fixed-laptop-stand",
    "detailTitleLines": [
      "Void 고정형",
      "노트북 거치대"
    ]
  },
  {
    "id": "void-magnetic-phone-stand",
    "line": "Void",
    "name": "Void 마그네틱 스마트폰 거치대",
    "category": "스마트폰 거치대",
    "description": "가벼운 구조와 강력한 자력으로, 스마트폰을 원하는 위치에 안정적으로 고정합니다.",
    "purchaseUrl": "https://smartstore.naver.com/voidtonova/products/13725279854",
    "image": "/products/representatives/void-magnetic-phone-stand.webp",
    "imageAlt": "Void 마그네틱 스마트폰 거치대 대표 이미지",
    "detailPath": "/products/void-magnetic-phone-stand",
    "detailTitleLines": [
      "Void 마그네틱",
      "스마트폰 거치대"
    ],
    "detailTitleCompact": true
  },
  {
    "id": "void-magsafe-ring-premium",
    "line": "Void",
    "name": "Void 맥세이프 마그네틱 링",
    "category": "스마트폰 액세서리",
    "description": "양면 자석과 360° 회전 구조로, 스마트폰 그립·스탠드·금속 표면 거치를 하나로 해결하는 마그네틱 링.",
    "purchaseUrl": "https://smartstore.naver.com/voidtonova/products/13765745123",
    "image": "/products/representatives/void-magsafe-ring-premium.webp",
    "imageAlt": "Void 맥세이프 마그네틱 링 대표 이미지",
    "detailPath": "/products/void-magsafe-ring-premium",
    "detailTitleLines": [
      "Void 맥세이프",
      "마그네틱 링"
    ],
    "detailTitleCompact": true
  },
  {
    "id": "void-tablet-floor-stand",
    "line": "Void",
    "name": "Void 태블릿 거치대 스탠드",
    "category": "태블릿 거치대",
    "description": "침대와 소파에서도 화면을 편한 높이에 두고, 두 손을 자유롭게 사용할 수 있는 태블릿 스탠드.",
    "purchaseUrl": "https://smartstore.naver.com/voidtonova/products/13729739148",
    "image": "/products/representatives/void-tablet-floor-stand.webp",
    "imageAlt": "Void 태블릿 거치대 스탠드 대표 이미지",
    "detailPath": "/products/void-tablet-floor-stand",
    "detailTitleLines": [
      "Void 태블릿",
      "거치대 스탠드"
    ]
  },
  {
    "id": "nova-pushup-pads",
    "line": "Nova",
    "name": "Nova 푸쉬업 패드",
    "category": "푸쉬업 운동 도구",
    "description": "손목이 꺾이는 부담을 덜고, 상체 움직임에 더 편하게 집중할 수 있는 푸쉬업 패드.",
    "purchaseUrl": "https://smartstore.naver.com/voidtonova/products/13714705585",
    "image": "/products/representatives/nova-pushup-pads.webp",
    "imageAlt": "Nova 푸쉬업 패드 대표 이미지",
    "detailPath": "/products/nova-pushup-pads",
    "detailTitleLines": [
      "Nova 푸쉬업",
      "패드"
    ]
  },
  {
    "id": "nova-quick-grip",
    "line": "Nova",
    "name": "Nova 퀵그립 리프팅 스트랩",
    "category": "리프팅 스트랩",
    "description": "넓은 그립 면과 손목 쿠션으로, 당기는 운동에서 악력 부담을 덜고 목표 부위에 집중하도록 돕는 리프팅 스트랩.",
    "purchaseUrl": "https://smartstore.naver.com/voidtonova/products/13764580466",
    "image": "/products/representatives/nova-quick-grip.webp",
    "imageAlt": "Nova 퀵그립 리프팅 스트랩 대표 이미지",
    "detailPath": "/products/nova-quick-grip",
    "detailTitleLines": [
      "Nova 퀵그립",
      "리프팅 스트랩"
    ],
    "detailTitleCompact": true
  },
  {
    "id": "nova-wireless-battle-rope",
    "line": "Nova",
    "name": "Nova 무선 배틀로프",
    "category": "배틀로프",
    "description": "고정과 설치 없이 스프링의 반발력으로 상체와 코어를 함께 움직이는 홈트레이닝 배틀로프.",
    "purchaseUrl": "https://smartstore.naver.com/voidtonova/products/13766072510",
    "image": "/products/representatives/nova-wireless-battle-rope.webp",
    "imageAlt": "Nova 무선 배틀로프 대표 이미지",
    "detailPath": "/products/nova-wireless-battle-rope",
    "detailTitleLines": [
      "Nova 무선",
      "배틀로프"
    ]
  },
  {
    "id": "nova-quiet-ab-slide",
    "line": "Nova",
    "name": "Nova 저소음 AB슬라이드",
    "category": "AB 슬라이드",
    "description": "구르는 소음을 줄여 집에서도 부담 없이, 복부 움직임에 집중할 수 있는 AB 슬라이드.",
    "purchaseUrl": "https://smartstore.naver.com/voidtonova/products/13723228059",
    "image": "/products/representatives/nova-quiet-ab-slide.webp",
    "imageAlt": "Nova 저소음 AB슬라이드 대표 이미지",
    "detailPath": "/products/nova-quiet-ab-slide",
    "detailTitleLines": [
      "Nova 저소음",
      "AB슬라이드"
    ]
  },
  {
    "id": "nova-premium-metal-pushup-bars",
    "line": "Nova",
    "name": "Nova 프리미엄 메탈 푸쉬업바",
    "category": "푸쉬업 운동 도구",
    "description": "단단한 메탈 프레임과 안정적인 그립으로, 반복되는 푸쉬업을 흔들림 없이 이어가는 푸쉬업바.",
    "purchaseUrl": "https://smartstore.naver.com/voidtonova/products/13726601654",
    "image": "/products/representatives/nova-premium-metal-pushup-bars.webp",
    "imageAlt": "Nova 프리미엄 메탈 푸쉬업바 대표 이미지",
    "detailPath": "/products/nova-premium-metal-pushup-bars",
    "detailTitleLines": [
      "Nova 프리미엄 메탈",
      "푸쉬업바"
    ],
    "detailTitleCompact": true
  },
  {
    "id": "nova-air-acupressure-stepper",
    "line": "Nova",
    "name": "Nova 에어 지압 스텝퍼",
    "category": "스텝퍼",
    "description": "공기층의 부드러운 탄성과 지압 돌기로, 일상 속 가벼운 스텝과 발 자극을 함께하는 스텝퍼.",
    "purchaseUrl": "https://smartstore.naver.com/voidtonova/products/13699985027",
    "image": "/products/representatives/nova-air-acupressure-stepper.webp",
    "imageAlt": "Nova 에어 지압 스텝퍼 대표 이미지",
    "detailPath": "/products/nova-air-acupressure-stepper",
    "detailTitleLines": [
      "Nova 에어 지압",
      "스텝퍼"
    ]
  },
  {
    "id": "void-book-stand",
    "line": "Void",
    "name": "Void 북스탠드",
    "category": "독서대",
    "description": "높이와 각도를 조절하고 받침을 확장해, 책과 화면을 나에게 맞추는 원목 북스탠드.",
    "purchaseUrl": "https://smartstore.naver.com/voidtonova/products/13799163325",
    "image": "/products/representatives/void-book-stand.webp",
    "imageAlt": "Void 북스탠드 대표 이미지",
    "detailPath": "/products/void-book-stand",
    "detailTitleCompact": true
  },
  {
    "id": "void-black-walnut-keyboard-palm-rest",
    "line": "Void",
    "name": "Void 블랙월넛 키보드 팜레스트",
    "category": "키보드 팜레스트",
    "description": "블랙월넛 원목의 곡면과 미끄럼 방지 패드로, 타이핑하는 손목을 편하게 받쳐줍니다.",
    "purchaseUrl": "https://smartstore.naver.com/voidtonova/products/13803190750",
    "image": "/products/representatives/void-black-walnut-keyboard-palm-rest.webp",
    "imageAlt": "Void 블랙월넛 키보드 팜레스트 대표 이미지",
    "detailPath": "/products/void-black-walnut-keyboard-palm-rest",
    "detailTitleCompact": true
  },
  {
    "id": "void-black-walnut-mouse-palm-rest",
    "line": "Void",
    "name": "Void 블랙월넛 마우스 팜레스트",
    "category": "마우스 팜레스트",
    "description": "부드러운 곡면의 블랙월넛 원목 받침으로, 마우스를 사용하는 손목 곁에 편안함을 더합니다.",
    "purchaseUrl": "https://smartstore.naver.com/voidtonova/products/13803209299",
    "image": "/products/representatives/void-black-walnut-mouse-palm-rest.webp",
    "imageAlt": "Void 블랙월넛 마우스 팜레스트 대표 이미지",
    "detailPath": "/products/void-black-walnut-mouse-palm-rest",
    "detailTitleCompact": true
  },
  {
    "id": "void-black-walnut-palm-rest-set",
    "line": "Void",
    "name": "Void 블랙월넛 팜레스트 세트",
    "category": "팜레스트 세트",
    "description": "키보드용과 마우스용 원목 팜레스트를 한 세트로, 책상 위 두 손의 자리를 맞춥니다.",
    "purchaseUrl": "https://smartstore.naver.com/voidtonova/products/13803231185",
    "image": "/products/representatives/void-black-walnut-palm-rest-set.webp",
    "imageAlt": "Void 블랙월넛 팜레스트 세트 대표 이미지",
    "detailPath": "/products/void-black-walnut-palm-rest-set",
    "detailTitleCompact": true
  },
  {
    "id": "void-walnut-todo",
    "line": "Void",
    "name": "Void 월넛 투두리스트",
    "category": "데스크 문구",
    "description": "Today·Next·Someday 카드 50장과 블랙월넛 받침대로, 해야 할 일을 눈앞에 정리합니다.",
    "purchaseUrl": "https://smartstore.naver.com/voidtonova/products/13804954945",
    "image": "/products/representatives/void-walnut-todo.webp",
    "imageAlt": "Void 월넛 투두리스트 대표 이미지",
    "detailPath": "/products/void-walnut-todo",
    "detailTitleCompact": true
  },
  {
    "id": "void-headphone-stand",
    "line": "Void",
    "name": "Void 헤드폰 스탠드",
    "category": "헤드폰 거치대",
    "description": "헤드폰을 한곳에 걸어 보관하고, 책상 위 공간을 정돈하는 스탠드.",
    "purchaseUrl": "https://smartstore.naver.com/voidtonova/products/13806511080",
    "image": "/products/representatives/void-headphone-stand.webp",
    "imageAlt": "Void 헤드폰 스탠드 대표 이미지",
    "detailPath": "/products/void-headphone-stand",
    "detailTitleCompact": true
  },
  {
    "id": "void-360-phone-stand",
    "line": "Void",
    "name": "Void 360도 스마트폰 거치대",
    "category": "스마트폰 거치대",
    "description": "화면 높이와 방향을 조절해, 책상 위 스마트폰을 편하게 바라보는 거치대.",
    "purchaseUrl": "https://smartstore.naver.com/voidtonova/products/13808728626",
    "image": "/products/representatives/void-360-phone-stand.webp",
    "imageAlt": "Void 360도 스마트폰 거치대 대표 이미지",
    "detailPath": "/products/void-360-phone-stand",
    "detailTitleCompact": true
  },
  {
    "id": "void-laptop-stand-sleeve",
    "line": "Void",
    "name": "Void 노트북 거치대 파우치",
    "category": "노트북 파우치",
    "description": "노트북을 담아 이동하고 펼쳐 거치하는, 파우치와 거치대가 하나로 이어진 도구.",
    "purchaseUrl": "https://smartstore.naver.com/voidtonova/products/13812756269",
    "image": "/products/representatives/void-laptop-stand-sleeve.webp",
    "imageAlt": "Void 노트북 거치대 파우치 대표 이미지",
    "detailPath": "/products/void-laptop-stand-sleeve",
    "detailTitleCompact": true,
    "purchaseOptions": [
      {
        "label": "13.3형 구매하기",
        "url": "https://smartstore.naver.com/voidtonova/products/13805744585"
      },
      {
        "label": "15.4형 구매하기",
        "url": "https://smartstore.naver.com/voidtonova/products/13812756269"
      }
    ]
  },
  {
    "id": "nova-massage-ball-set",
    "line": "Nova",
    "name": "Nova 마사지볼 세트",
    "category": "마사지 도구",
    "description": "싱글볼과 더블볼을 부위에 맞춰 사용하는, 가벼운 EPP 마사지볼 한 세트.",
    "purchaseUrl": "https://smartstore.naver.com/voidtonova/products/13812455069",
    "image": "/products/representatives/nova-massage-ball-set.webp",
    "imageAlt": "Nova 마사지볼 세트 대표 이미지",
    "detailPath": "/products/nova-massage-ball-set",
    "detailTitleCompact": true
  },
  {
    "id": "nova-dual-massage-bar",
    "line": "Nova",
    "name": "Nova 듀얼 마사지 바",
    "category": "마사지 도구",
    "description": "긴 회전 롤러로 넓게, 탈착형 포인트 링으로 좁게 마사지하는 수동 마사지 스틱.",
    "purchaseUrl": null,
    "image": "/assets/sync-2026-10-29/nova/massage-stick/generated/overview-v2.webp",
    "imageAlt": "Nova 듀얼 마사지 바 제품 이미지",
    "detailPath": "/products/nova-dual-massage-bar",
    "detailTitleCompact": true
  }
];

export const productsByLine: Record<ProductLine, Product[]> = {
  Void: products.filter((product) => product.line === "Void"),
  Nova: products.filter((product) => product.line === "Nova"),
};

export const productsWithDetails = products.filter(
  (product): product is Product & { detailPath: `/products/${string}` } =>
    Boolean(product.detailPath),
);

export function getProductById(productId: string) {
  return products.find((product) => product.id === productId);
}
