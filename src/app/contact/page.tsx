import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { createPageMetadata } from "@/lib/metadata";
import { createBreadcrumbStructuredData, createWebPageStructuredData } from "@/lib/structured-data";
import { SITE_EMAIL } from "@/lib/site";

const description = "제품 문의와 협업 제안, 그 밖의 이야기를 Void to Nova에 남겨주세요.";

export const metadata = createPageMetadata({
  title: "문의하기",
  description,
  path: "/contact",
});

const email = SITE_EMAIL;
const inquiries = [
  { label: "PRODUCT", title: "제품 문의", copy: "제품의 사용과 구매에 관해 궁금한 점을 남겨주세요." },
  { label: "PARTNERSHIP", title: "협업 및 제안", copy: "함께 만들고 싶은 프로젝트나 새로운 제안을 들려주세요." },
  { label: "OTHER", title: "그 밖의 이야기", copy: "어느 항목에도 속하지 않는 이야기도 편하게 보내주세요." },
];

export default function ContactPage() {
  return (
    <main className="contact-page" id="top">
      <JsonLd
        data={[
          createWebPageStructuredData({ path: "/contact", name: "문의하기 | Void to Nova", description }),
          createBreadcrumbStructuredData([
            { name: "홈", path: "/" },
            { name: "문의하기", path: "/contact" },
          ]),
        ]}
      />
      <header className="site-header">
        <Link href="/" className="mini-mark">Void to Nova</Link>
        <nav aria-label="주요 메뉴">
          <Link href="/products">PRODUCTS</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/contact" aria-current="page">CONTACT</Link>
        </nav>
      </header>

      <section className="contact-hero">
        <p className="eyebrow">CONTACT</p>
        <h1>작은 질문에서,<br />다음 이야기가 시작됩니다.</h1>
        <p className="contact-hero-copy">제품에 관한 질문도, 함께하고 싶은 제안도 좋습니다.<br />편하게 이야기를 남겨주세요.</p>
        <a className="contact-email" href={`mailto:${email}`}>{email}<span>↗</span></a>
      </section>

      <section className="contact-inquiries">
        <div className="contact-section-label"><span>WRITE TO US</span><span>01 — 03</span></div>
        <div className="contact-inquiry-list">
          {inquiries.map((item, index) => (
            <a key={item.label} href={`mailto:${email}?subject=${encodeURIComponent(`[Void to Nova] ${item.title}`)}`} className="contact-inquiry">
              <span className="contact-inquiry-number">0{index + 1}</span>
              <span className="contact-inquiry-label">{item.label}</span>
              <span className="contact-inquiry-content"><strong>{item.title}</strong><small>{item.copy}</small></span>
              <span className="contact-inquiry-arrow">↗</span>
            </a>
          ))}
        </div>
        <p className="contact-response">보내주신 메일은 확인 후<br />영업일 기준 2–3일 안에 답변드리겠습니다.</p>
      </section>

      <footer className="landing-footer">
        <div className="landing-footer-top"><Link href="/" className="landing-footer-mark">Void to Nova</Link><p>아직 정해지지 않은 상태에서,<br />더 나은 다음 상태로.</p></div>
        <div className="landing-footer-bottom"><span>© 2026 Void to Nova</span><nav aria-label="푸터 메뉴"><Link href="/products">PRODUCTS</Link><Link href="/about">ABOUT</Link><Link href="/contact">CONTACT</Link></nav><a href="#top">TOP ↑</a></div>
      </footer>
    </main>
  );
}
