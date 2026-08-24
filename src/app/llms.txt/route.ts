import { products } from "@/data/products";
import { NAVER_SMART_STORE_URL, SITE_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const productList = products
    .map((product) => `- ${product.name}: ${product.description}`)
    .join("\n");

  const content = `# ${SITE_NAME}

${SITE_NAME}는 집중하는 시간과 움직이는 시간을 조금 더 편하게 만드는 일상의 도구를 소개하는 브랜드입니다.

## Public pages
- ${SITE_URL}/ — 브랜드와 제품군 소개
- ${SITE_URL}/products — Void와 Nova 제품 소개 및 공식 외부 구매 링크
- ${SITE_URL}/about — 브랜드의 시작, 이름의 의미, 기준
- ${SITE_URL}/contact — 제품 문의와 협업 제안

## Product lines
- Void: 집중을 위한 도구
- Nova: 움직임을 위한 도구

## Products
${productList}

## Purchasing
이 웹사이트는 상품을 소개하며 직접 주문이나 결제를 처리하지 않습니다. 상품 구매는 제품 페이지에서 연결되는 Void to Nova 네이버 스마트스토어(${NAVER_SMART_STORE_URL})에서 이루어집니다.

## Contact
- ${SITE_EMAIL}
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
