import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { productGroups, productsByLine } from "@/data/products";
import { createPageMetadata } from "@/lib/metadata";
import {
  createBreadcrumbStructuredData,
  createWebPageStructuredData,
  productListStructuredData,
} from "@/lib/structured-data";

const description = "집중과 움직임을 위한 Void to Nova의 11가지 도구와 공식 구매 채널을 확인하세요.";

export const metadata = createPageMetadata({
  title: "제품",
  description,
  path: "/products",
  keywords: ["Void 제품", "Nova 제품", "노트북 거치대", "홈트레이닝 도구"],
});

export default function ProductsPage() {
  return (
    <main className="products-page" id="top">
      <JsonLd
        data={[
          createWebPageStructuredData({ path: "/products", name: "제품 | Void to Nova", description }),
          createBreadcrumbStructuredData([
            { name: "홈", path: "/" },
            { name: "제품", path: "/products" },
          ]),
          productListStructuredData,
        ]}
      />
      <header className="site-header">
        <Link href="/" className="mini-mark">Void to Nova</Link>
        <nav aria-label="주요 메뉴"><Link href="/products" aria-current="page">PRODUCTS</Link><Link href="/about">ABOUT</Link><Link href="/contact">CONTACT</Link></nav>
      </header>

      <section className="products-hero">
        <p className="eyebrow">PRODUCTS</p>
        <h1>당신의 다음<br />상태를 위한 도구.</h1>
        <p>집중하는 시간과 움직이는 시간을<br />조금 더 편하게 만듭니다.</p>
        <nav className="products-jump" aria-label="제품군 바로가기"><a href="#void">Void <span>↗</span></a><a href="#nova">Nova <span>↗</span></a></nav>
      </section>

      {productGroups.map((group) => (
        <section className={`product-group product-group-${group.id}`} id={group.id} key={group.id} aria-labelledby={`${group.id}-heading`}>
          <header className="product-group-heading">
            <div><p className="eyebrow">{group.name}</p><h2 id={`${group.id}-heading`}>{group.title}</h2></div>
            <p>{group.copy}</p>
          </header>
          <div className="product-card-grid">
            {productsByLine[group.name].map((product) => (
              <article className="product-card-placeholder" id={product.id} key={product.id}>
                <Link
                  className="product-card-live"
                  href={product.detailPath ?? product.purchaseUrl}
                  target={product.detailPath ? undefined : "_blank"}
                  rel={product.detailPath ? undefined : "noopener noreferrer external"}
                  aria-label={product.detailPath ? `${product.name} 자세히 보기` : `${product.name} 네이버 스마트스토어에서 보기`}
                >
                  <div className="product-card-image product-card-image-filled">
                    <Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 699px) 100vw, 50vw" />
                  </div>
                  <div className="product-card-info">
                    <span>{group.name}</span>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <span className="product-card-arrow" aria-hidden="true">↗</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      ))}

      <footer className="landing-footer">
        <div className="landing-footer-top"><Link href="/" className="landing-footer-mark">Void to Nova</Link><p>아직 정해지지 않은 상태에서,<br />더 나은 다음 상태로.</p></div>
        <div className="landing-footer-bottom"><span>© 2026 Void to Nova</span><nav aria-label="푸터 메뉴"><Link href="/products">PRODUCTS</Link><Link href="/about">ABOUT</Link><Link href="/contact">CONTACT</Link></nav><a href="#top">TOP ↑</a></div>
      </footer>
    </main>
  );
}
