import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Void to Nova",
  description: "불확실해도 계속 나아가는 사람을 위해, 일상을 조금 더 편하게 만드는 도구를 만듭니다.",
};

export default function AboutPage() {
  return (
    <main className="about-page" id="top">
      <header className="site-header">
        <Link href="/" className="mini-mark">Void to Nova</Link>
        <nav>
          <Link href="/products">PRODUCTS</Link>
          <Link href="/about" aria-current="page">ABOUT</Link>
          <Link href="/contact">CONTACT</Link>
        </nav>
      </header>

      <section className="about-hero">
        <p className="eyebrow">ABOUT / Void to Nova</p>
        <h1 className="about-title-desktop">불확실해도,<br />나아가는 사람을 위해.</h1>
        <h1 className="about-title-mobile">불확실해도,<br />계속 나아가는<br />사람을 위해.</h1>
        <p className="about-hero-copy">우리는 완벽한 답을 기다리기보다,<br />오늘을 조금 더 나은 상태로 만드는<br className="about-mobile-break" /> 도구를 만듭니다.</p>
        <span className="about-scroll">OUR STORY <i>↓</i></span>
      </section>

      <section className="about-origin">
        <div className="about-section-label"><span>OUR BEGINNING</span><span>SEOUL / 2026</span></div>
        <div className="about-origin-grid">
          <h2>확신이 있어서<br />시작한 것은<br className="about-mobile-break" /> 아니었습니다.<br /><em>그래도 시작했습니다.</em></h2>
          <div className="about-origin-copy">
            <p>Void to Nova는 새로운 도시에서 혼자 삶을 만들어가던 한 사람의 필요에서 시작되었습니다.</p>
            <p>앞으로 무엇이 될지, 지금 잘 가고 있는지 알 수 없었습니다. 하지만 불안한 채로 멈춰 있기보다 오늘 할 수 있는 일을 하나씩 해나갔습니다.</p>
            <p>그 과정에서 직접 필요하고, 매일 사용할 수 있으며, 삶을 조금 더 편하게 만드는 물건을 만들기 시작했습니다.</p>
          </div>
        </div>
      </section>

      <section className="about-name">
        <p className="eyebrow">THE NAME</p>
        <div className="about-name-mark" aria-label="Void to Nova"><span>Void</span><i>→</i><span>Nova</span></div>
        <div className="about-name-copy">
          <p><strong>Void</strong>는 아직 형태가 없는 가능성입니다.</p>
          <p><strong>Nova</strong>는 그 가능성이 움직이기 시작하는 순간입니다.</p>
        </div>
        <p className="about-name-line"><span>아무것도 정해지지 않은 상태에서,</span><span>작지만 분명한 다음 상태로.</span></p>
      </section>

      <section className="about-belief">
        <div className="about-section-label"><span>WHAT WE BELIEVE</span><span>01 — 03</span></div>
        <h2>삶은 거대한 결심보다,<br />자주 반복하는<br className="about-mobile-break" /> 작은 행동으로 달라집니다.</h2>
        <div className="about-values">
          <article><span>01</span><h3>직접 필요한 것</h3><p>우리부터 필요를 느끼고 실제로 사용하는 제품을 만듭니다.</p></article>
          <article><span>02</span><h3>자주 쓰이는 것</h3><p>한 번의 인상보다 매일의 편안함과 오래 쓰이는 이유를 생각합니다.</p></article>
          <article><span>03</span><h3>다음을 쉽게 하는 것</h3><p>집중하고 움직이는 다음 행동이 조금 더 자연스러워지게 합니다.</p></article>
        </div>
      </section>

      <section className="about-closing">
        <p className="eyebrow">FOR YOUR NEXT STATE</p>
        <h2>아직 정해지지 않은<br />당신의 다음 상태를 위해.</h2>
        <Link className="button-link" href="/products">제품 둘러보기 <span>↗</span></Link>
      </section>

      <footer className="landing-footer">
        <div className="landing-footer-top"><Link href="/" className="landing-footer-mark">Void to Nova</Link><p>아직 정해지지 않은 상태에서,<br />더 나은 다음 상태로.</p></div>
        <div className="landing-footer-bottom"><span>© 2026 Void to Nova</span><nav><Link href="/products">PRODUCTS</Link><Link href="/about">ABOUT</Link><Link href="/contact">CONTACT</Link></nav><a href="#top">TOP ↑</a></div>
      </footer>
    </main>
  );
}
