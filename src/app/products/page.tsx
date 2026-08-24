import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products — Void to Nova",
  description: "집중과 움직임을 위한 Void to Nova의 도구를 만나보세요.",
};

const groups = [
  { id: "void", name: "Void", title: "집중을 위한 도구", copy: "불필요한 것을 비우고, 해야 할 일에 집중할 수 있는 상태를 만듭니다." },
  { id: "nova", name: "Nova", title: "움직임을 위한 도구", copy: "작은 움직임을 시작하고, 나만의 에너지와 루틴을 만들어갑니다." },
];

type Product = { name: string; copy: string; href: string; image?: string; alt?: string };

const products: Record<string, Product[]> = {
  void: [
    {
      name: "Void 휴대용 노트북 거치대",
      copy: "180g의 가벼운 무게로, 어디서나 편하게 펼쳐 쓰는 노트북 거치대.",
      href: "https://smartstore.naver.com/voidtonova/products/13724117530",
      image: "/products/void-portable-laptop-stand.png",
      alt: "검정색 Void 휴대용 노트북 거치대",
    },
    {
      name: "Void 360도 회전형 노트북 거치대",
      copy: "묵직한 무게로 안정적으로 지지하고, 360도 회전으로 원하는 방향을 쉽게 맞추는 노트북 거치대.",
      href: "https://smartstore.naver.com/voidtonova/products/13723985948",
      image: "/products/void-360-laptop-stand.png",
      alt: "360도 회전 표시가 있는 검정색 Void 노트북 거치대",
    },
    {
      name: "Void 고정형 노트북 거치대",
      copy: "단단한 구조로 흔들림을 줄이고, 노트북을 안정적으로 지지하는 고정형 거치대.",
      href: "https://smartstore.naver.com/voidtonova/products/13723979970",
      image: "/products/void-fixed-laptop-stand.png",
      alt: "검정색 Void 고정형 노트북 거치대",
    },
    {
      name: "Void 듀얼 마그네틱 스마트폰 거치대",
      copy: "가벼운 구조와 강력한 자력으로, 스마트폰을 원하는 위치에 안정적으로 고정합니다.",
      href: "https://smartstore.naver.com/voidtonova/products/13725279854",
      image: "/products/void-dual-magnetic-phone-stand.png",
      alt: "검정색 듀얼 마그네틱 스마트폰 거치대에 부착된 스마트폰",
    },
    {
      name: "Void 태블릿 거치대 스탠드",
      copy: "침대와 소파에서도 화면을 편한 높이에 두고, 두 손을 자유롭게 사용할 수 있는 태블릿 스탠드.",
      href: "https://smartstore.naver.com/voidtonova/products/13729739148",
      image: "/products/void-tablet-floor-stand.png",
      alt: "침대 옆에 설치한 검정색 Void 태블릿 거치대 스탠드",
    },
  ],
  nova: [
    {
      name: "Nova 푸쉬업 패드",
      copy: "손목이 꺾이는 부담을 덜고, 상체 움직임에 더 편하게 집중할 수 있는 푸쉬업 패드.",
      href: "https://smartstore.naver.com/voidtonova/products/13714705585",
      image: "/products/nova-pushup-pads.jpeg",
      alt: "Nova 푸쉬업 패드를 잡고 푸쉬업하는 사람",
    },
    {
      name: "Nova 트라이탄 프로틴 쉐이커",
      copy: "500ml 용량과 내구성 높은 트라이탄 소재로, 운동 전후의 한 잔을 간편하게 준비하는 프로틴 쉐이커.",
      href: "https://smartstore.naver.com/voidtonova/products/13725109671",
      image: "/products/nova-tritan-protein-shaker.png",
      alt: "500ml 눈금이 표시된 검정색 Nova 트라이탄 프로틴 쉐이커",
    },
    {
      name: "Nova 저소음 AB슬라이드",
      copy: "구르는 소음을 줄여 집에서도 부담 없이, 복부 움직임에 집중할 수 있는 AB 슬라이드.",
      href: "https://smartstore.naver.com/voidtonova/products/13723228059",
      image: "/products/nova-quiet-ab-slide.png",
      alt: "Nova 저소음 AB 슬라이드로 운동하는 사람",
    },
    {
      name: "Nova 프리미엄 메탈 푸쉬업바",
      copy: "단단한 메탈 프레임과 안정적인 그립으로, 반복되는 푸쉬업을 흔들림 없이 이어가는 푸쉬업바.",
      href: "https://smartstore.naver.com/voidtonova/products/13726601654",
      image: "/products/nova-premium-metal-pushup-bars.png",
      alt: "Nova 프리미엄 메탈 푸쉬업바로 운동하는 사람",
    },
    {
      name: "Nova 에어 지압 스텝퍼",
      copy: "공기층의 부드러운 탄성과 지압 돌기로, 일상 속 가벼운 스텝과 발 자극을 함께하는 스텝퍼.",
      href: "https://smartstore.naver.com/voidtonova/products/13699985027",
      image: "/products/nova-air-acupressure-stepper.png",
      alt: "보라색 Nova 에어 지압 스텝퍼",
    },
  ],
};

export default function ProductsPage() {
  return (
    <main className="products-page" id="top">
      <header className="site-header">
        <Link href="/" className="mini-mark">Void to Nova</Link>
        <nav><Link href="/products" aria-current="page">PRODUCTS</Link><Link href="/about">ABOUT</Link><Link href="/contact">CONTACT</Link></nav>
      </header>

      <section className="products-hero">
        <p className="eyebrow">PRODUCTS</p>
        <h1>당신의 다음<br />상태를 위한 도구.</h1>
        <p>집중하는 시간과 움직이는 시간을<br />조금 더 편하게 만듭니다.</p>
        <nav className="products-jump"><a href="#void">Void <span>↗</span></a><a href="#nova">Nova <span>↗</span></a></nav>
      </section>

      {groups.map((group) => (
        <section className={`product-group product-group-${group.id}`} id={group.id} key={group.id}>
          <header className="product-group-heading">
            <div><p className="eyebrow">{group.name}</p><h2>{group.title}</h2></div>
            <p>{group.copy}</p>
          </header>
          <div className="product-card-grid">
            {Array.from({ length: 5 }, (_, index) => {
              const product = products[group.id]?.[index];
              const cardContent = <>
                <div className={`product-card-image${product?.image ? " product-card-image-filled" : ""}`}>
                  {product?.image ? <Image src={product.image} alt={product.alt ?? product.name} fill sizes="(max-width: 699px) 100vw, 50vw" /> : <span>IMAGE</span>}
                </div>
                <div className="product-card-info">
                  <span>{group.name}</span>
                  <h3>{product?.name ?? "제품명"}</h3>
                  <p>{product?.copy ?? "제품을 설명하는 한 줄 문구가 들어갑니다."}</p>
                  <span className="product-card-arrow">↗</span>
                </div>
              </>;

              return product ? (
                <a className="product-card-placeholder product-card-live" href={product.href} target="_blank" rel="noreferrer" key={index} aria-label={`${product.name} 네이버에서 보기`}>
                  {cardContent}
                </a>
              ) : <article className="product-card-placeholder" key={index}>{cardContent}</article>;
            })}
          </div>
        </section>
      ))}

      <footer className="landing-footer">
        <div className="landing-footer-top"><Link href="/" className="landing-footer-mark">Void to Nova</Link><p>아직 정해지지 않은 상태에서,<br />더 나은 다음 상태로.</p></div>
        <div className="landing-footer-bottom"><span>© 2026 Void to Nova</span><nav><Link href="/products">PRODUCTS</Link><Link href="/about">ABOUT</Link><Link href="/contact">CONTACT</Link></nav><a href="#top">TOP ↑</a></div>
      </footer>
    </main>
  );
}
