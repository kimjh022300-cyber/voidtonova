import { products, type Product } from "@/data/products";
import type { ProductDetailFaq, ProductDetailFacts } from "@/data/product-detail-facts";
import {
  absoluteUrl,
  NAVER_SMART_STORE_URL,
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const organizationId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;

export const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: SITE_NAME,
      url: SITE_URL,
      email: SITE_EMAIL,
      sameAs: [NAVER_SMART_STORE_URL],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "ko-KR",
      publisher: { "@id": organizationId },
    },
  ],
};

export function createWebPageStructuredData({
  path,
  name,
  description,
  mainEntityId,
}: {
  path: string;
  name: string;
  description: string;
  mainEntityId?: string;
}) {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "ko-KR",
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    ...(mainEntityId ? { mainEntity: { "@id": mainEntityId } } : {}),
  };
}

export function createBreadcrumbStructuredData(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function createProductStructuredData(
  product: Product,
  facts?: ProductDetailFacts,
) {
  if (!product.detailPath) {
    throw new Error(`Product detail path is missing for ${product.id}`);
  }

  const url = absoluteUrl(product.detailPath);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: product.name,
    description: product.description,
    ...(product.image ? { image: [absoluteUrl(product.image)] } : {}),
    category: product.category,
    url,
    ...(product.purchaseUrl ? { sameAs: product.purchaseOptions?.map((option) => option.url) ?? product.purchaseUrl } : {}),
    brand: { "@id": organizationId },
    mainEntityOfPage: { "@id": `${url}#webpage` },
    ...(facts
      ? {
          additionalProperty: facts.properties.map((property) => ({
            "@type": "PropertyValue",
            name: property.name,
            value: property.value,
          })),
        }
      : {}),
  };
}

export function createFaqStructuredData(faq: readonly ProductDetailFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export const productListStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${absoluteUrl("/products")}#product-list`,
  name: `${SITE_NAME} 제품`,
  numberOfItems: products.length,
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": product.detailPath ? "Product" : "Thing",
      "@id": product.detailPath
        ? `${absoluteUrl(product.detailPath)}#product`
        : `${absoluteUrl("/products")}#${product.id}`,
      name: product.name,
      description: product.description,
      category: product.category,
      ...(product.image ? { image: absoluteUrl(product.image) } : {}),
      url: product.detailPath
        ? absoluteUrl(product.detailPath)
        : `${absoluteUrl("/products")}#${product.id}`,
      ...(product.purchaseUrl ? { sameAs: product.purchaseOptions?.map((option) => option.url) ?? product.purchaseUrl } : {}),
      brand: { "@id": organizationId },
    },
  })),
};
