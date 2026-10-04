export type ProductLine = "Void" | "Nova";

export type Product = {
  id: string;
  line: ProductLine;
  name: string;
  category: string;
  description: string;
  purchaseUrl: string;
  image: string;
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
    id: "void-portable-laptop-stand",
    line: "Void",
    name: "Void 휴대용 노트북 거치대",
    category: "노트북 거치대",
    description: "180g의 가벼운 무게로, 어디서나 편하게 펼쳐 쓰는 노트북 거치대.",
    purchaseUrl: "https://smartstore.naver.com/voidtonova/products/13724117530",
    image: "/products/void-portable-laptop-stand.png",
    imageAlt: "검정색 Void 휴대용 노트북 거치대",
    detailPath: "/products/void-portable-laptop-stand",
    detailTitleLines: ["Void 휴대용", "노트북 거치대"],
  },
  {
    id: "void-360-laptop-stand",
    line: "Void",
    name: "Void 360도 노트북 거치대",
    category: "노트북 거치대",
    description: "묵직한 무게로 안정적으로 지지하고, 360도 회전으로 원하는 방향을 쉽게 맞추는 노트북 거치대.",
    purchaseUrl: "https://smartstore.naver.com/voidtonova/products/13723985948",
    image: "/products/void-360-laptop-stand.png",
    imageAlt: "360도 회전 표시가 있는 검정색 Void 노트북 거치대",
    detailPath: "/products/void-360-laptop-stand",
    detailTitleLines: ["Void 360도", "노트북 거치대"],
  },
  {
    id: "void-fixed-laptop-stand",
    line: "Void",
    name: "Void 고정형 노트북 거치대",
    category: "노트북 거치대",
    description: "단단한 구조로 흔들림을 줄이고, 노트북을 안정적으로 지지하는 고정형 거치대.",
    purchaseUrl: "https://smartstore.naver.com/voidtonova/products/13723979970",
    image: "/products/void-fixed-laptop-stand.png",
    imageAlt: "검정색 Void 고정형 노트북 거치대",
    detailPath: "/products/void-fixed-laptop-stand",
    detailTitleLines: ["Void 고정형", "노트북 거치대"],
  },
  {
    id: "void-magnetic-phone-stand",
    line: "Void",
    name: "Void 마그네틱 스마트폰 거치대",
    category: "스마트폰 거치대",
    description: "가벼운 구조와 강력한 자력으로, 스마트폰을 원하는 위치에 안정적으로 고정합니다.",
    purchaseUrl: "https://smartstore.naver.com/voidtonova/products/13725279854",
    image: "/products/void-dual-magnetic-phone-stand.png",
    imageAlt: "검정색 마그네틱 스마트폰 거치대에 부착된 스마트폰",
    detailPath: "/products/void-magnetic-phone-stand",
    detailTitleLines: ["Void 마그네틱", "스마트폰 거치대"],
    detailTitleCompact: true,
  },
  {
    id: "void-magsafe-ring-premium",
    line: "Void",
    name: "Void 맥세이프 마그네틱 링",
    category: "스마트폰 액세서리",
    description:
      "양면 자석과 360° 회전 구조로, 스마트폰 그립·스탠드·금속 표면 거치를 하나로 해결하는 마그네틱 링.",
    purchaseUrl: "https://smartstore.naver.com/voidtonova/products/13765745123",
    image: "/products/void-magsafe-ring-premium.webp",
    imageAlt: "블랙 스마트폰에 부착한 Void 맥세이프 마그네틱 링",
    detailPath: "/products/void-magsafe-ring-premium",
    detailTitleLines: ["Void 맥세이프", "마그네틱 링"],
    detailTitleCompact: true,
  },
  {
    id: "void-tablet-floor-stand",
    line: "Void",
    name: "Void 태블릿 거치대 스탠드",
    category: "태블릿 거치대",
    description: "침대와 소파에서도 화면을 편한 높이에 두고, 두 손을 자유롭게 사용할 수 있는 태블릿 스탠드.",
    purchaseUrl: "https://smartstore.naver.com/voidtonova/products/13729739148",
    image: "/products/void-tablet-floor-stand.png",
    imageAlt: "침대 옆에 설치한 검정색 Void 태블릿 거치대 스탠드",
    detailPath: "/products/void-tablet-floor-stand",
    detailTitleLines: ["Void 태블릿", "거치대 스탠드"],
  },
  {
    id: "nova-pushup-pads",
    line: "Nova",
    name: "Nova 푸쉬업 패드",
    category: "푸쉬업 운동 도구",
    description: "손목이 꺾이는 부담을 덜고, 상체 움직임에 더 편하게 집중할 수 있는 푸쉬업 패드.",
    purchaseUrl: "https://smartstore.naver.com/voidtonova/products/13714705585",
    image: "/products/nova-pushup-pads.jpeg",
    imageAlt: "Nova 푸쉬업 패드를 잡고 푸쉬업하는 사람",
    detailPath: "/products/nova-pushup-pads",
    detailTitleLines: ["Nova 푸쉬업", "패드"],
  },
  {
    id: "nova-quick-grip",
    line: "Nova",
    name: "Nova 퀵그립 리프팅 스트랩",
    category: "리프팅 스트랩",
    description:
      "넓은 그립 면과 손목 쿠션으로, 당기는 운동에서 악력 부담을 덜고 목표 부위에 집중하도록 돕는 리프팅 스트랩.",
    purchaseUrl: "https://smartstore.naver.com/voidtonova/products/13764580466",
    image: "/products/nova-quick-grip.webp",
    imageAlt: "블랙 Nova 퀵그립 리프팅 스트랩 왼손용과 오른손용 한 쌍",
    detailPath: "/products/nova-quick-grip",
    detailTitleLines: ["Nova 퀵그립", "리프팅 스트랩"],
    detailTitleCompact: true,
  },
  {
    id: "nova-wireless-battle-rope",
    line: "Nova",
    name: "Nova 무선 배틀로프",
    category: "배틀로프",
    description:
      "고정과 설치 없이 스프링의 반발력으로 상체와 코어를 함께 움직이는 홈트레이닝 배틀로프.",
    purchaseUrl: "https://smartstore.naver.com/voidtonova/products/13766072510",
    image: "/products/nova-wireless-battle-rope.webp",
    imageAlt: "교차해 세운 블랙 Nova 무선 배틀로프 한 쌍",
    detailPath: "/products/nova-wireless-battle-rope",
    detailTitleLines: ["Nova 무선", "배틀로프"],
  },
  {
    id: "nova-quiet-ab-slide",
    line: "Nova",
    name: "Nova 저소음 AB슬라이드",
    category: "AB 슬라이드",
    description: "구르는 소음을 줄여 집에서도 부담 없이, 복부 움직임에 집중할 수 있는 AB 슬라이드.",
    purchaseUrl: "https://smartstore.naver.com/voidtonova/products/13723228059",
    image: "/products/nova-quiet-ab-slide.png",
    imageAlt: "Nova 저소음 AB 슬라이드로 운동하는 사람",
    detailPath: "/products/nova-quiet-ab-slide",
    detailTitleLines: ["Nova 저소음", "AB슬라이드"],
  },
  {
    id: "nova-premium-metal-pushup-bars",
    line: "Nova",
    name: "Nova 프리미엄 메탈 푸쉬업바",
    category: "푸쉬업 운동 도구",
    description: "단단한 메탈 프레임과 안정적인 그립으로, 반복되는 푸쉬업을 흔들림 없이 이어가는 푸쉬업바.",
    purchaseUrl: "https://smartstore.naver.com/voidtonova/products/13726601654",
    image: "/products/nova-premium-metal-pushup-bars.png",
    imageAlt: "Nova 프리미엄 메탈 푸쉬업바로 운동하는 사람",
    detailPath: "/products/nova-premium-metal-pushup-bars",
    detailTitleLines: ["Nova 프리미엄 메탈", "푸쉬업바"],
    detailTitleCompact: true,
  },
  {
    id: "nova-air-acupressure-stepper",
    line: "Nova",
    name: "Nova 에어 지압 스텝퍼",
    category: "스텝퍼",
    description: "공기층의 부드러운 탄성과 지압 돌기로, 일상 속 가벼운 스텝과 발 자극을 함께하는 스텝퍼.",
    purchaseUrl: "https://smartstore.naver.com/voidtonova/products/13699985027",
    image: "/products/nova-air-acupressure-stepper.png",
    imageAlt: "보라색 Nova 에어 지압 스텝퍼",
    detailPath: "/products/nova-air-acupressure-stepper",
    detailTitleLines: ["Nova 에어 지압", "스텝퍼"],
  },
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
