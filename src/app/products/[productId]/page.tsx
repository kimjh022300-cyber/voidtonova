import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { ResponsiveDetailFrame } from "@/components/product-detail/responsive-detail-frame";
import { getProductById, productsWithDetails, type Product } from "@/data/products";
import { getProductDetailFacts } from "@/data/product-detail-facts";
import {
  createBreadcrumbStructuredData,
  createFaqStructuredData,
  createProductStructuredData,
  createWebPageStructuredData,
} from "@/lib/structured-data";
import { absoluteUrl, SITE_NAME } from "@/lib/site";
import { PRODUCT_DETAIL_PAGES } from "@/product-details/registry";
import "./product-detail.css";

type Props = {
  params: Promise<{ productId: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return productsWithDetails.map((product) => ({ productId: product.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = await params;
  const product = getProductById(productId);

  if (!product?.detailPath) notFound();

  const facts = getProductDetailFacts(product.id);

  return {
    title: product.name,
    description: product.description,
    keywords: [product.name, product.category, ...(facts?.keywords ?? [])],
    alternates: { canonical: product.detailPath },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url: product.detailPath,
      siteName: SITE_NAME,
      title: `${product.name} | ${SITE_NAME}`,
      description: product.description,
      images: product.image ? [{ url: product.image, alt: product.imageAlt }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | ${SITE_NAME}`,
      description: product.description,
      images: product.image ? [product.image] : [],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { productId } = await params;
  const product = getProductById(productId);
  const DetailPage = PRODUCT_DETAIL_PAGES[productId];

  if (!product?.detailPath || !DetailPage) notFound();

  const titleLines = product.detailTitleLines ?? [product.name];
  const facts = getProductDetailFacts(product.id);
  const productEntityId = `${absoluteUrl(product.detailPath)}#product`;

  return (
    <main className="product-detail-page" id="top">
      <JsonLd
        data={[
          createWebPageStructuredData({
            path: product.detailPath,
            name: `${product.name} | ${SITE_NAME}`,
            description: product.description,
            mainEntityId: productEntityId,
          }),
          createBreadcrumbStructuredData([
            { name: "홈", path: "/" },
            { name: "제품", path: "/products" },
            { name: product.name, path: product.detailPath },
          ]),
          createProductStructuredData(product, facts),
          ...(facts?.faq.length ? [createFaqStructuredData(facts.faq)] : []),
        ]}
      />

      <header className="detail-site-header">
        <Link href="/" className="mini-mark">Void to Nova</Link>
        <nav aria-label="주요 메뉴">
          <Link href="/products">PRODUCTS</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/contact">CONTACT</Link>
        </nav>
      </header>

      <section
        className={`product-detail-intro${product.detailTitleCompact ? " product-detail-title-compact" : ""}`}
        aria-labelledby="product-title"
      >
        <nav className="product-detail-breadcrumb" aria-label="현재 위치">
          <Link href="/products">PRODUCTS</Link>
          <span aria-hidden="true">/</span>
          <span>{product.line}</span>
        </nav>
        <div>
          <h1 id="product-title">
            {titleLines.map((line, index) => (
              <span key={line}>
                {line}{index < titleLines.length - 1 ? " " : null}
              </span>
            ))}
          </h1>
          <p className="product-detail-intro-copy">{product.description}</p>
        </div>
        {product.purchaseUrl ? <PurchaseLinks product={product} /> : <p className="product-purchase-pending">구매 링크 준비 중</p>}
      </section>

      <section className="product-detail-body" aria-label={`${product.name} 상세 정보`}>
        {!product.image ? <p className="product-detail-image-notice">제품 이미지는 준비 중입니다. 아래에서 상세 설명과 사양을 확인하실 수 있습니다.</p> : null}
        <ResponsiveDetailFrame>
          <DetailPage />
        </ResponsiveDetailFrame>
      </section>

      <section
        className={`product-detail-closing${product.detailTitleCompact ? " product-detail-title-compact" : ""}`}
        aria-label="구매 안내"
      >
        <p>
          <span className="product-detail-closing-name">
            {titleLines.map((line, index) => (
              <span className="product-detail-closing-name-line" key={line}>
                {line}{index < titleLines.length - 1 ? " " : null}
              </span>
            ))}
          </span>
          <span className="product-detail-closing-channel">{product.purchaseUrl ? "공식 구매 채널." : "구매 링크 준비 중."}</span>
        </p>
        {product.purchaseUrl ? <PurchaseLinks product={product} /> : null}
      </section>

      <footer className="landing-footer">
        <div className="landing-footer-top">
          <Link href="/" className="landing-footer-mark">Void to Nova</Link>
          <p>아직 정해지지 않은 상태에서,<br />더 나은 다음 상태로.</p>
        </div>
        <div className="landing-footer-bottom">
          <span>© 2026 Void to Nova</span>
          <nav aria-label="푸터 메뉴">
            <Link href="/products">PRODUCTS</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/contact">CONTACT</Link>
          </nav>
          <a href="#top">TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}

function PurchaseLinks({ product }: { product: Product }) {
  const options = product.purchaseOptions ?? (
    product.purchaseUrl ? [{ label: "네이버에서 구매하기", url: product.purchaseUrl }] : []
  );
  const links = options.map((option) => (
    <a
      key={option.url}
      className="product-purchase-link"
      href={option.url}
      target="_blank"
      rel="noopener noreferrer external"
    >
      {option.label} <span aria-hidden="true">↗</span>
    </a>
  ));

  return product.purchaseOptions ? (
    <div className="product-purchase-options" role="group" aria-label="노트북 파우치 크기별 구매">
      {links}
    </div>
  ) : <>{links}</>;
}
