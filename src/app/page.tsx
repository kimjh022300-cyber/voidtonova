"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpaceWarp from "./space-warp";
import { JsonLd } from "@/components/json-ld";
import { createWebPageStructuredData } from "@/lib/structured-data";
import { SITE_DESCRIPTION } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);
const heroLines = ["아직 정해지지 않은 상태에서", "더 나은 다음 상태로."];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const warpProgress = useRef(0);
  useLayoutEffect(() => {
    ScrollTrigger.config({ ignoreMobileResize: true });
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      const build = (mobile: boolean) => {
        const holdDuration = mobile ? 2.7 : 2.4;
        const hero = gsap.timeline({ scrollTrigger: { trigger: heroRef.current, start: "top top", end: mobile ? "+=4050" : "+=6000", scrub: mobile ? .5 : 1.15, pin: true, anticipatePin: 1, onUpdate: (s) => {
          const progress = s.progress;
          warpProgress.current = progress;
          heroRef.current?.style.setProperty("--stars-far-scale", String(1 + progress * 1.4));
          heroRef.current?.style.setProperty("--stars-near-scale", String(1 + progress * 2.8));
        } } });
        hero
          .to(".hero-wordmark", { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.15, ease: "power2.out" })
          .to({}, { duration: holdDuration })
          .to(".hero-wordmark", { opacity: 0, scale: mobile ? 5 : 7, duration: 1.9, ease: "power2.inOut" })
          .to(".hero-statement", { opacity: 1, scale: 1, duration: 1.25, ease: "power2.inOut" }, "-=.8")
          .to({}, { duration: holdDuration })
          .to(".hero-statement", { opacity: 0, scale: mobile ? 2.5 : 3.6, duration: 1.45, ease: "power2.inOut" })
          .to(".hero-copy", { opacity: 1, scale: 1, duration: 1.05, ease: "power2.inOut" }, "-=.3")
          .to({}, { duration: holdDuration });
      };
      mm.add("(min-width: 700px)", () => { build(false); });
      mm.add("(max-width: 699px)", () => { build(true); });
      return () => mm.revert();
    });
    return () => ctx.revert();
  }, []);

  return <main id="top">
    <JsonLd data={createWebPageStructuredData({ path: "/", name: "Void to Nova — 다음 상태를 위한 도구", description: SITE_DESCRIPTION })} />
    <header className="site-header"><Link href="/" className="mini-mark">Void to Nova</Link><nav aria-label="주요 메뉴"><Link href="/products">PRODUCTS</Link><Link href="/about">ABOUT</Link><Link href="/contact">CONTACT</Link></nav></header>
    <section className="hero" ref={heroRef}><div className="hero-noise" /><div className="hero-webgl" aria-hidden="true"><SpaceWarp progress={warpProgress} /></div><div className="hero-wordmark">Void to Nova</div><div className="hero-statement">{heroLines.map((line) => <span key={line}>{line}</span>)}</div><div className="hero-copy"><p className="eyebrow">Void to Nova</p><h1>작은 변화가,<br />다음 상태를 만듭니다.</h1><Link className="button-link" href="/products">제품 둘러보기 <span>↗</span></Link></div></section>
    <section className="name-story" id="about"><p className="eyebrow">THE NAME</p><div className="name-transition" aria-label="Void to Nova"><span>Void</span><i>→</i><span>Nova</span></div><p className="name-copy">Void는 아직 형태가 없는 가능성입니다.<br />Nova는 그 가능성이 움직이기 시작하는 순간입니다.</p><Link className="button-link name-cta" href="/about">브랜드 이야기 보기 <span>↗</span></Link></section>
    <section className="line-story"><div className="line-story-heading"><p className="eyebrow">Void / Nova</p><h2>일하는 시간과,<br />움직이는 시간을 <span>더 편하게.</span></h2></div><div className="line-story-grid"><article className="line-story-card line-story-void"><header><span>Void</span></header><div><h3>집중을 위한 도구</h3><p>불필요한 것을 비우고 시선과 공간을 정돈합니다. 해야 할 일에 온전히 집중할 수 있는 상태를 만듭니다.</p><Link className="button-link" href="/products">Void 제품 보기 <span>↗</span></Link></div></article><article className="line-story-card line-story-nova"><header><span>Nova</span></header><div><h3>움직임을 위한 도구</h3><p>멈춰 있던 몸을 깨우고 작은 움직임을 시작합니다. 반복할수록 에너지와 루틴이 생기는 상태를 만듭니다.</p><Link className="button-link" href="/products">Nova 제품 보기 <span>↗</span></Link></div></article></div></section>
    <footer className="landing-footer"><div className="landing-footer-top"><Link href="/" className="landing-footer-mark">Void to Nova</Link><p>아직 정해지지 않은 상태에서,<br />더 나은 다음 상태로.</p></div><div className="landing-footer-bottom"><span>© 2026 Void to Nova</span><nav aria-label="푸터 메뉴"><Link href="/products">PRODUCTS</Link><Link href="/about">ABOUT</Link><Link href="/contact">CONTACT</Link></nav><a href="#top">TOP ↑</a></div></footer>
  </main>;
}
