import { BrandFrame } from "@/components/product-detail/brand-frame";
import { ReviewSection } from "@/components/product-detail/review-section";
import type { ReactNode } from "react";
import { Check, ChevronDown } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: <>최대 20cm까지.<br />화면을 시선 가까이.</>,
    label: "다관절 구조를 펼쳐 화면 높이를 조절하는 사진",
    image: "/assets/sync-2026-10-29/void/phone-stand/height-20cm.webp",
    body: "약 4~20cm 범위로 높이를 조절해 책상 가까이에 머물던 화면을 시선 가까이 올려보세요. 영상 시청부터 업무와 화상회의까지 사용하는 자세에 맞춰 화면 위치를 바꿀 수 있습니다.",
    metrics: [["4~20cm", "제품 높이"], ["약 16cm", "높이 조절 폭"]],
  },
  {
    title: <>360°로 돌리고,<br />세 관절로 세밀하게.</>,
    label: "360도 회전 베이스와 세 관절의 조절 범위 사진",
    image: "/assets/sync-2026-10-29/void/phone-stand/rotation-joints.webp",
    body: "원형 베이스를 돌려 화면 방향을 바꾸고 세 개의 관절로 높이와 전후 각도를 조절하세요. 기기를 들어 옮기지 않아도 필요한 방향과 시야각을 빠르게 만들 수 있습니다.",
    metrics: [["360°", "원형 베이스 회전"], ["3 × 180°", "세 관절 각도 조절"]],
  },
  {
    title: <>거치한 그대로,<br />충전은 끊김 없이.</>,
    label: "Void 360 Phone Stand에 거치한 채 충전 케이블을 연결한 사진",
    image: "/assets/sync-2026-10-29/void/phone-stand/charging-access.webp",
    body: "스마트폰 하단을 가리지 않는 오픈 구조로 설계했습니다. 거치 중에도 충전 케이블을 간편하게 연결해 영상 시청과 업무를 끊김 없이 이어갈 수 있습니다.",
  },
  {
    title: <>이중 탄소강 암.<br />움직인 뒤에도 단단하게.</>,
    label: "이중 탄소강 지지 암과 댐핑 관절 사진",
    image: "/assets/sync-2026-10-29/void/phone-stand/dual-arm.webp",
    body: "두꺼운 이중 탄소강 암과 고저항 댐핑 관절이 기기를 단단하게 받쳐줍니다. 화면을 원하는 위치에 맞춘 뒤에도 쉽게 처지거나 흔들리지 않도록 지지 구조를 강화했습니다.",
    metrics: [["DUAL ARM", "이중 지지 구조"], ["DAMPING", "고저항 관절"]],
  },
  {
    title: <>넓은 원형 베이스.<br />터치할 때도 안정적으로.</>,
    label: "넓은 원형 탄소강 베이스와 회전부 사진",
    image: "/assets/sync-2026-10-29/void/phone-stand/wide-base.webp",
    body: "약 9.7cm 원형 탄소강 베이스가 책상 위에서 무게 중심을 잡아줍니다. 화면을 터치하거나 방향을 바꿀 때 생기는 밀림과 흔들림을 줄여 보다 편안하게 사용할 수 있습니다.",
    metrics: [["약 9.7cm", "원형 베이스 지름"]],
  },
  {
    title: <>기기에 닿는 곳마다,<br />실리콘으로 세심하게.</>,
    label: "기기가 닿는 거치 홈의 실리콘 패드 사진",
    image: "/assets/sync-2026-10-29/void/phone-stand/device-silicone.webp",
    body: "스마트폰과 태블릿이 닿는 거치 홈에 실리콘 패드를 배치했습니다. 기기를 안정적으로 받쳐주고 사용 중 생길 수 있는 스크래치와 마찰을 줄여줍니다.",
  },
  {
    title: <>책상에 닿는 하단까지,<br />미끄러지지 않도록.</>,
    label: "베이스 하단의 미끄럼 방지 실리콘 패드 사진",
    image: "/assets/sync-2026-10-29/void/phone-stand/base-silicone.webp",
    body: "책상과 맞닿는 베이스 하단에 실리콘 패드를 적용했습니다. 화면을 터치하거나 방향을 바꿀 때 생기는 미끄러짐을 줄이고 책상 표면도 보호합니다.",
    metrics: [["SILICONE", "베이스 하단 패드"], ["NON-SLIP", "미끄럼 방지"]],
  },
  {
    title: <>접으면 작게.<br />필요한 자리로 가볍게.</>,
    label: "접은 거치대를 가방과 서랍에 보관하는 사진",
    image: "/assets/sync-2026-10-29/void/phone-stand/folded.webp",
    body: "사용이 끝나면 패널과 지지 암을 접어 슬림하게 정리하세요. 가방이나 서랍에 넣기 쉬워 집과 사무실을 오갈 때도 간편하게 휴대할 수 있습니다.",
    metrics: [["FOLDABLE", "완전 접이식 구조"]],
  },
] as const;

export default function Void360PhoneStandPage() {
  return <BrandFrame brand="void">
    <section className="relative min-h-[1440px] overflow-hidden bg-[#edf5fa]">
      <Image
        src="/assets/sync-2026-10-29/void/phone-stand/hero-v2.webp"
        alt="햇살이 드는 책상 위 Void 360 Phone Stand"
        fill
        preload
        sizes="860px"
        className="object-cover"
      />
      <Fade position="top" />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%]"
        style={{ background: "linear-gradient(0deg,rgba(14,17,19,.78) 0%,rgba(14,17,19,.32) 48%,transparent 100%)" }}
      />
      <div className="relative z-10 flex min-h-[1440px] flex-col items-center px-8 pb-24 pt-28 text-center">
        <p className="text-[39px] font-semibold text-[#275f86]">Void 360 Phone Stand</p>
        <h1 className="mt-8 whitespace-nowrap text-[68px] font-bold leading-[1.04] tracking-[-0.045em]">시선을 높여, 더 편안하게.</h1>
        <p className="mt-auto text-[29px] font-medium leading-[1.6] text-white [text-shadow:0_2px_14px_rgba(0,0,0,.45)]">높이고, 돌리고, 원하는 각도에 멈추다.<br />화면을 내 자리로 맞추는 360° 메탈 스탠드.</p>
      </div>
    </section>

    <section className="relative aspect-[3/4] overflow-hidden bg-white">
      <Image
        src="/assets/sync-2026-10-29/void/phone-stand/product-overview-v2.webp"
        alt="햇살이 드는 책상 위에 놓인 Void 360 Phone Stand"
        fill
        sizes="860px"
        className="scale-[1.3] object-cover"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[30%]"
        style={{ background: "linear-gradient(180deg,rgba(255,255,255,.72) 0%,rgba(255,255,255,.3) 52%,transparent 100%)" }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[32%]"
        style={{ background: "linear-gradient(0deg,#fbfdff 0%,rgba(251,253,255,.82) 34%,transparent 100%)" }}
      />
      <div className="absolute inset-x-0 top-24 z-10 text-center">
        <h2 className="text-[68px] font-bold tracking-[-0.035em]"><Gradient>Void 360 Phone Stand.</Gradient></h2>
      </div>
      <p className="absolute inset-x-0 bottom-12 z-10 text-center text-[31px] font-semibold text-[#4f5358]">손에 들던 화면을, 편안한 시선 높이로.</p>
    </section>

    <section className="bg-[#fbfdff] px-12 py-36">
      <Title>한눈에 보는<br /><Gradient>Void 360 Phone Stand.</Gradient></Title>
      <div className="mt-20 grid grid-cols-2 gap-6">
        {[["360°", "원형 베이스 회전"], ["4~20cm", "제품 높이"], ["3 × 180°", "세 관절 각도 조절"], ["DUAL ARM", "이중 탄소강 암"], ["약 9.7cm", "원형 베이스 지름"], ["FOLDABLE", "완전 접이식 구조"]].map(([value, label]) => <Metric key={label} value={value} label={label} />)}
      </div>
    </section>

    <section className="bg-white px-12 py-40">
      <p className="text-[21px] font-bold tracking-[0.14em] text-[#2f6f9f]">BETTER VIEW</p>
      <h2 className="mt-9 text-[64px] font-bold leading-[1.16] tracking-[-0.035em]">
        편안한 시선을 위한 변화,
        <br />
        <Gradient>하나의 스탠드에 담다.</Gradient>
      </h2>
      <div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px]">
        <Image
          src="/assets/sync-2026-10-29/void/phone-stand/daily-modes-v2.webp"
          alt="햇살이 드는 책상 위 Void 360 Phone Stand"
          fill
          sizes="764px"
          className="object-cover"
        />
      </div>
      <div className="mt-16 grid grid-cols-3 gap-5">
        {[["높이 조절", "4~20cm 범위로 화면을 시선 가까이 올립니다."], ["각도 조절", "세 개의 관절로 화면을 자세에 맞게 기울입니다."], ["360° 회전", "원형 베이스를 돌려 원하는 방향으로 화면을 옮깁니다."]].map(([title, body], index) => (
          <article key={title} className={`rounded-[26px] border px-6 py-8 ${index === 0 ? "border-[#d9e8f3] bg-[#f7fbff]" : index === 1 ? "border-[#c8deed] bg-[#edf7ff]" : "border-[#b8d5e8] bg-[#e4f2fb]"}`}>
            <p className="text-[18px] font-bold tracking-[0.1em] text-[#0071e3]">0{index + 1}</p>
            <h3 className="mt-5 text-[25px] font-bold leading-[1.3]">{title}</h3>
            <p className="mt-4 text-[18px] font-medium leading-[1.55] text-[#496879]">{body}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="bg-white px-12 py-40">
      <Title>책상에 눕혀 보던 화면에서,<br /><Gradient>시선에 맞춰 움직이는 화면으로.</Gradient></Title>
      <p className="mx-auto mt-8 max-w-[700px] text-center text-[25px] font-medium leading-[1.6] text-[#6e6e73]">그대로 세워두는 데서 끝나지 않습니다. 화면의 높이와 방향을 내 자세에 맞춰 더 편안한 시야를 만들어보세요.</p>
      <div className="mt-20 grid grid-cols-2 gap-6">
        <article><CardImage src="/assets/sync-2026-10-29/void/phone-stand/before-desk.webp" alt="책상 위에 눕혀 사용하는 스마트폰 화면" /><p className="mt-7 text-center text-[19px] font-bold tracking-[0.12em] text-[#86868b]">BEFORE</p><h3 className="mt-3 text-center text-[29px] font-bold">책상에 눕혀 보는 화면</h3></article>
        <article><CardImage src="/assets/sync-2026-10-29/void/phone-stand/with-void.webp" alt="Void 360 Phone Stand로 시선에 맞춘 스마트폰 화면" /><p className="mt-7 text-center text-[19px] font-bold tracking-[0.12em] text-[#2f6f9f]">WITH VOID</p><h3 className="mt-3 text-center text-[29px] font-bold">시선에 맞춰진 화면</h3></article>
      </div>
    </section>

    <section className="bg-white px-12 pb-36 pt-36">
      <h2 className="text-center text-[58px] font-bold leading-tight tracking-[-0.03em]"><Gradient>Void 360 Phone Stand</Gradient><br /><span className="text-[61px]">나에게 맞는 이유.</span></h2>
      <Comparison />
    </section>

    {features.map((feature, index) => <section key={feature.label} className={`bg-white px-12 pb-36 ${index === 0 ? "pt-40" : "pt-24"}`}><Feature {...feature} /></section>)}

    <UseCases />
    <DesignDetails />
    <RecommendedFor />
    <ReviewSection reviews={reviews} />

    <section className="relative min-h-[1440px] overflow-hidden bg-[#edf5fa] px-12 pb-40 pt-16">
      <Image
        src="/assets/sync-2026-10-29/void/phone-stand/hero-v2.webp"
        alt="햇살이 드는 책상 위 Void 360 Phone Stand"
        fill
        sizes="860px"
        className="object-cover"
      />
      <Fade position="top" />
      <div className="relative z-10 flex min-h-[1160px] flex-col text-center">
        <h2 className="text-[66px] font-bold leading-[1.17] tracking-[-0.035em]">화면이 나에게 맞춰질 때,<br />일상의 몰입이 달라집니다.</h2>
        <p className="mt-10 whitespace-nowrap text-[28px] font-medium leading-[1.6] text-[#5f5a55]">기기에 몸을 맞추지 말고, 화면을 나에게 맞추세요.</p>
        <div className="mt-auto translate-y-32"><p className="text-[54px] font-semibold"><Gradient>Void 360 Phone Stand</Gradient></p><p className="mt-4 text-[27px] font-medium text-[#6e6e73]">높이부터 방향까지, 내 시선에 맞춘 화면.</p></div>
      </div>
    </section>

    <Faq /><Size /><Components /><ProductInfo /><Notices />
  </BrandFrame>;
}

function Feature({ title, label, image, body, metrics }: { title: ReactNode; label: string; image?: string; body: string; metrics?: readonly (readonly string[])[] }) {
  return <div><CheckIcon /><h2 className="mt-10 text-[63px] font-bold leading-[1.15] tracking-[-0.032em]">{title}</h2>{image ? <div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px]"><Image src={image} alt={label} fill sizes="764px" className="object-cover" /></div> : <Photo className="mt-24" label={label} />}<p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">{body}</p>{metrics ? <div className={`mt-14 grid ${metrics.length === 1 ? "grid-cols-1" : "grid-cols-2"} gap-5`}>{metrics.map(([value, metricLabel]) => <Metric key={metricLabel} value={value} label={metricLabel} />)}</div> : null}</div>;
}

function CheckIcon() { return <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-[3px] border-[#0071e3]"><Check className="h-9 w-9 text-[#0071e3]" strokeWidth={3.5} /></div>; }
function Metric({ value, label }: { value: string; label: string }) { return <div className="rounded-[28px] border border-[#dfe7ee] bg-white px-5 py-11 text-center shadow-[0_10px_30px_rgba(40,43,46,0.06)]"><p className="whitespace-nowrap text-[50px] font-bold tracking-[-0.035em] text-[#2f6f9f]">{value}</p><p className="mt-4 text-[21px] font-semibold text-[#6e6e73]">{label}</p></div>; }
function CardImage({ src, alt }: { src: string; alt: string }) { return <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[28px]"><Image src={src} alt={alt} fill sizes="406px" className="object-cover" /></div>; }
function Photo({ className = "", label, fill = false }: { className?: string; label: string; fill?: boolean }) { return <div aria-label={`사진 자리: ${label}`} className={`${fill ? "absolute inset-0" : "relative aspect-[3/4] w-full rounded-[28px] border border-[#dedede]"} overflow-hidden bg-[#f1f1f1] ${className}`} />; }
function Title({ children }: { children: ReactNode }) { return <h2 className="text-center text-[61px] font-bold leading-[1.17] tracking-[-0.035em]">{children}</h2>; }
function Gradient({ children }: { children: ReactNode }) { return <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg,#022640,#5786ab)" }}>{children}</span>; }
function Fade({ position }: { position: "top" | "bottom" }) { return <div className={`pointer-events-none absolute inset-x-0 h-[38%] ${position === "top" ? "top-0" : "bottom-0"}`} style={{ background: position === "top" ? "linear-gradient(180deg,#fff 0%,rgba(255,255,255,.55) 58%,transparent 100%)" : "linear-gradient(0deg,#fff 0%,rgba(255,255,255,.8) 35%,transparent 100%)" }} />; }

function Comparison() {
  const rows = [["화면 높이", "책상 가까이에 고정", "최대 20cm까지"], ["화면 방향", "기기를 직접 이동", "베이스 360° 회전"], ["보는 각도", "제한적인 각도", "세 관절 각각 180°"], ["지지 구조", "가벼운 단일 구조", "이중 탄소강 암과 댐핑 축"], ["사용 후 보관", "그대로 자리 차지", "완전히 접어서 보관"]];
  return <div className="mt-20 overflow-hidden rounded-[28px] border border-[#d2d2d7] bg-white"><table className="w-full table-fixed border-collapse text-center"><caption className="sr-only">일반 거치대와 Void 360 Phone Stand 비교</caption><thead><tr className="bg-[#f5f5f7]"><th className="w-[27%] px-4 py-7"><span className="sr-only">비교 항목</span></th><th className="border-l border-[#d2d2d7] px-4 py-7 text-[23px] font-bold leading-tight">일반<br />거치대</th><th className="border-l border-[#d2d2d7] bg-[#e8f4fb] px-4 py-7 text-[24px] font-bold leading-tight text-[#0071e3]">Void 360<br />Phone Stand</th></tr></thead><tbody>{rows.map(([label, normal, voidStand]) => <tr key={label} className="border-t border-[#d2d2d7]"><th className="px-4 py-8 text-[23px] font-semibold leading-snug">{label}</th><td className="border-l border-[#d2d2d7] px-4 py-8 text-[21px] font-semibold leading-snug text-[#86868b]">{normal}</td><td className="border-l border-[#d2d2d7] bg-[#eef7ff] px-4 py-8 text-[22px] font-bold leading-snug text-[#0071e3]">{voidStand}</td></tr>)}</tbody></table></div>;
}

function UseCases() {
  const cases = [["01", "영상 시청", "영화 · 스트리밍"], ["02", "온라인 학습", "강의 · 자료 확인"], ["03", "화상회의", "업무 · 화면 공유"], ["04", "라이브 방송", "촬영 · 모니터링"], ["05", "데스크 업무", "알림 · 멀티태스킹"], ["06", "게임", "터치 · 컨트롤러"]];
  return <section className="bg-white px-12 py-40"><Title>한 대로 충분한,<br /><Gradient>여섯 가지 활용.</Gradient></Title><div className="mt-20 grid grid-cols-3 gap-5">{cases.map(([number, title, body]) => <article key={number} className="rounded-[28px] border border-[#dfe7ee] bg-[#f5faff] px-4 py-10 text-center"><p className="text-[17px] font-bold tracking-[0.12em] text-[#0071e3]">{number}</p><h3 className="mt-6 text-[27px] font-bold text-[#275f86]">{title}</h3><p className="mt-3 text-[17px] font-medium text-[#6e6e73]">{body}</p></article>)}</div></section>;
}

function DesignDetails() {
  return <>
    <section className="bg-white px-12 py-40"><p className="text-[23px] font-semibold tracking-[0.09em] text-[#0071e3]">DESIGN DETAIL 01</p><h2 className="mt-9 text-[64px] font-bold leading-[1.16] tracking-[-0.035em]">빛을 낮춘,<br /><Gradient>차분한 블랙 메탈.</Gradient></h2><div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px]"><Image src="/assets/sync-2026-10-29/void/phone-stand/black-metal.webp" alt="햇살이 드는 책상 위 Void 360 Phone Stand의 블랙 메탈 마감" fill sizes="764px" className="object-cover" /></div><p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">차분한 블랙 메탈 마감이 견고한 구조를 선명하게 보여줍니다. 밝은 책상부터 어두운 데스크까지 자연스럽게 어우러집니다.</p></section>
    <section className="bg-white px-12 py-40"><p className="text-[23px] font-semibold tracking-[0.09em] text-[#0071e3]">DESIGN DETAIL 02</p><h2 className="mt-9 text-[64px] font-bold leading-[1.16] tracking-[-0.035em]">보이는 면보다,<br /><Gradient>손이 닿는 곳까지.</Gradient></h2><div className="mt-24 grid grid-cols-2 gap-6"><CardImage src="/assets/sync-2026-10-29/void/phone-stand/device-silicone.webp" alt="기기를 보호하는 거치 홈 실리콘 패드" /><CardImage src="/assets/sync-2026-10-29/void/phone-stand/base-silicone.webp" alt="책상을 보호하는 베이스 하단 실리콘 패드" /><CardImage src="/assets/sync-2026-10-29/void/phone-stand/dual-arm.webp" alt="Void 360 Phone Stand의 금속 관절과 이중 지지 암" /><CardImage src="/assets/sync-2026-10-29/void/phone-stand/charging-access.webp" alt="스마트폰을 거치한 채 케이블을 연결하는 충전 구조" /></div><p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">기기를 받치는 홈과 책상에 닿는 하부, 반복해서 움직이는 관절까지 실제 사용이 이어지는 모든 부분을 세심하게 다듬었습니다.</p></section>
  </>;
}

function RecommendedFor() {
  const people = [
    { scene: "휴대폰으로 영상을 자주 보는 분", line: "손으로 들지 않고 편안한 높이와 각도로 화면을 보고 싶은 분께 잘 맞습니다.", label: "휴대폰 영상 시청 장면", image: "/assets/sync-2026-10-29/void/phone-stand/with-void.webp" },
    { scene: "화상회의와 영상 통화가 잦은 분", line: "카메라를 시선 가까이에 두고 자연스럽게 대화하고 싶은 분께 잘 맞습니다.", label: "Void 360 Phone Stand로 화상 통화하는 장면", image: "/assets/sync-2026-10-29/void/phone-stand/recommended-video-call.webp" },
    { scene: "책상 위 멀티태스킹이 필요한 분", line: "업무 화면 옆에 스마트폰을 세워 알림과 자료를 함께 확인하고 싶은 분께 잘 맞습니다.", label: "데스크에서 화면을 함께 활용하는 장면", image: "/assets/sync-2026-10-29/void/tablet-stand/desk-second-screen.webp" },
    { scene: "거치대를 자주 옮겨 사용하는 분", line: "사용 후 접어서 가방에 넣고 집과 사무실을 오가며 사용하고 싶은 분께 잘 맞습니다.", label: "접은 Void 360 Phone Stand를 가방에 넣는 장면", image: "/assets/sync-2026-10-29/void/phone-stand/recommended-portable.webp" },
  ];
  return <section className="bg-white px-12 py-40"><Title>이런 분께 잘 맞습니다.</Title><p className="mx-auto mt-8 max-w-[700px] text-center text-[26px] font-medium leading-[1.6] text-[#6e6e73]">매일 보는 작은 화면을 더 편안한 자리에서 사용하고 싶은 분들입니다.</p><div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-16">{people.map(({ scene, line, label, image }) => <article key={scene}>{image ? <CardImage src={image} alt={label} /> : <Photo label={label} />}<h3 className="mt-7 text-[29px] font-bold leading-[1.3]">{scene}</h3><p className="mt-3 text-[21px] font-medium leading-[1.55] text-[#6e6e73]">{line}</p></article>)}</div></section>;
}

const reviews = [
  "영상 볼 때마다 휴대폰을 책상에 눕혀두고 내려다봤는데, 높이를 올리고 각도를 맞추니 목이 한결 편해요. 관절이 원하는 위치에서 잘 멈춰서 자주 쓰게 됩니다.",
  "화상회의할 때 카메라를 눈높이에 맞출 수 있는 점이 가장 마음에 듭니다. 받침을 통째로 옮기지 않고 바닥 회전만으로 화면 방향을 바꿀 수 있어 편해요.",
  "작은 거치대보다 베이스가 넓고 묵직해서 휴대폰을 터치해도 안정적이에요. 닿는 부분에 실리콘이 있어 기기와 책상에 흔적이 남을 걱정도 덜합니다.",
  "거치한 채로 충전 케이블을 연결할 수 있어 장시간 영상을 볼 때 좋습니다. 사용 후에는 납작하게 접어서 서랍에 넣어두니 책상도 깔끔해요.",
];

const questions = [
  ["스마트폰과 태블릿을 모두 거치할 수 있나요?", "두 기기 모두 거치할 수 있습니다. 다만 태블릿은 크기와 무게에 따라 관절을 낮게 펼쳐 무게중심을 베이스 가까이에 두는 편이 안정적입니다. 기기를 올린 뒤 흔들림이 없는지 먼저 확인해 주세요."],
  ["두꺼운 케이스를 끼운 채로도 사용할 수 있나요?", "일반적인 케이스는 함께 거치할 수 있지만, 두께와 후면 부착물의 형태에 따라 거치 홈에 완전히 안착하지 않을 수 있습니다. 그립과 카드지갑 등 두꺼운 부착물은 제거한 뒤 사용해 주세요."],
  ["높이와 각도는 어느 정도까지 조절할 수 있나요?", "제품 높이는 약 4cm에서 최대 20cm까지 조절할 수 있습니다. 세 개의 관절을 각각 움직여 화면의 높이와 전후 각도를 함께 맞출 수 있습니다."],
  ["가로·세로 전환과 화면 방향 변경은 어떻게 하나요?", "기기를 가로 또는 세로로 올려 사용할 수 있습니다. 다른 방향을 보여줄 때는 제품을 들어 옮기지 말고 원형 베이스를 360° 회전해 주세요."],
  ["화면을 터치할 때 쉽게 밀리거나 흔들리지 않나요?", "넓은 탄소강 베이스가 무게중심을 잡고, 하부 실리콘 패드가 미끄러짐을 줄여줍니다. 다만 큰 태블릿을 높게 편 상태에서 강하게 누르면 흔들릴 수 있으므로 기기 크기에 맞게 높이를 조절해 주세요."],
  ["거치한 상태로 충전할 수 있나요?", "거치부 중앙이 열려 있어 스마트폰을 세로로 둔 상태에서도 충전 케이블을 연결할 수 있습니다. 케이블 커넥터가 거치부와 부딪히지 않는지 확인해 주세요."],
  ["태블릿을 올리면 관절이 처지지 않나요?", "고저항 댐핑 관절과 이중 탄소강 암이 기기를 받쳐주지만, 기기의 무게와 거치 각도에 따라 차이가 있을 수 있습니다. 무거운 기기는 무게중심이 베이스 안쪽에 오도록 관절을 조절해 주세요."],
  ["받은 뒤 따로 조립해야 하나요?", "본체 한 개로 구성된 접이식 제품이라 별도 조립 없이 펼쳐서 사용할 수 있습니다. 관절을 펼칠 때는 손가락이 끼이지 않도록 주의해 주세요."],
  ["접어서 가방에 넣어도 되나요?", "패널과 지지 암을 접어 휴대할 수 있습니다. 금속 부품이 다른 기기와 부딪히지 않도록 별도 파우치나 가방 안쪽 공간에 넣어 주세요."],
] as const;

function Faq() { return <section className="bg-white px-10 pb-36 pt-40"><InfoTitle>질문에 답해드립니다.</InfoTitle><ul className="mt-24">{questions.map(([question, answer]) => <li key={question} className="border-t border-[#d2d2d7] py-7 last:border-b"><div className="flex items-start justify-between gap-6"><p className="text-[28px] font-semibold leading-[1.35]">{question}</p><ChevronDown className="mt-1.5 h-7 w-7 shrink-0 text-[#86868b]" /></div><p className="mt-4 pr-12 text-[22px] font-medium leading-[1.55] text-[#6e6e73]">{answer}</p></li>)}</ul></section>; }

const sizes = [["제품 높이", "약 4~20cm"], ["높이 조절 폭", "약 16cm"], ["원형 베이스", "지름 약 9.7cm"], ["베이스 회전", "360°"], ["관절 조절", "3축 · 각 180°"], ["호환 범위", "스마트폰 · 태블릿"]];
function Size() { return <section className="bg-white px-10 pb-36 pt-32"><InfoTitle>사이즈</InfoTitle><div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px]"><Image src="/assets/sync-2026-10-29/void/phone-stand/size-guide.webp" alt="Void 360 Phone Stand 전체 실측 사이즈 안내" fill sizes="780px" className="object-cover" /></div><Rows rows={sizes} /></section>; }
function Components() { return <section className="bg-white px-10 pb-36 pt-32"><InfoTitle>구성품</InfoTitle><div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px]"><Image src="/assets/sync-2026-10-29/void/phone-stand/components.webp" alt="Void 360 Phone Stand 본체 구성품" fill sizes="780px" className="object-cover" /></div><p className="mt-7 text-center text-[28px] font-semibold">Void 360 Phone Stand 본체 x1</p></section>; }

const info = [["품명 및 모델명", "Void 360 Phone Stand"], ["제품 유형", "탁상용 스마트폰·태블릿 거치대"], ["색상", "블랙"], ["소재", "탄소강 · 실리콘"], ["구조", "이중 지지 암 · 3축 댐핑 관절"], ["호환 기기", "스마트폰 · 태블릿"], ["회전 범위", "원형 베이스 360° · 관절 각 180°"], ["조절 방식", "높이 조절 · 전후 각도 조절 · 가로·세로 거치"], ["주요 기능", "충전 중 사용 · 실리콘 미끄럼 방지 · 완전 접이식 보관"], ["A/S 책임자와 전화번호", "010-6393-0907"]];
function ProductInfo() { return <section className="bg-white px-10 pb-36 pt-32"><InfoTitle>제품 정보</InfoTitle><Rows rows={info} /></section>; }
function Rows({ rows }: { rows: string[][] }) { return <dl className="mx-auto mt-24 max-w-[720px]">{rows.map(([label, value]) => <div key={label} className="flex gap-8 border-b border-[#d2d2d7] py-6 first:border-t"><dt className="w-[200px] shrink-0 text-[22px] font-semibold">{label}</dt><dd className="flex-1 text-[22px] font-medium leading-snug text-[#6e6e73]">{value}</dd></div>)}</dl>; }
function InfoTitle({ children }: { children: ReactNode }) { return <h2 className="text-center text-[58px] font-bold leading-tight">{children}</h2>; }

function Notices() { return <section className="bg-white px-10 pb-36 pt-32"><InfoTitle>기타 안내</InfoTitle><div className="mx-auto mt-24 max-w-[720px] space-y-12"><Notice title="취급 시 주의사항" bullets={["관절을 접거나 펼칠 때 손가락 끼임에 주의해 주세요.", "기기를 올리기 전 베이스가 평평하고 흔들림 없는 곳에 놓였는지 확인해 주세요.", "높이와 각도를 조절할 때는 기기를 먼저 내려놓아 주세요.", "기기를 거치한 상태에서 관절을 무리하게 꺾거나 강한 힘으로 회전하지 마세요.", "제품의 최대 지지 하중을 초과하는 기기나 물건을 올리지 마세요.", "기기의 크기와 무게, 케이스 형태에 따라 실제 거치 상태가 달라질 수 있습니다.", "물기와 화기, 높은 온도에 가까이 두지 마세요."]} /><Notice title="관리 방법" body="부드러운 마른 천으로 가볍게 닦아 주세요. 물이나 화학 세제 사용은 피하고, 관절부와 회전부 및 실리콘 패드에 먼지나 이물질이 쌓이지 않도록 관리해 주세요." /><Notice title="색상 안내" body="사용하시는 화면과 촬영 환경에 따라 실제 블랙 색상과 표면 질감이 다소 다르게 보일 수 있습니다." /><Notice title="A/S 안내" body="제품 초기 불량은 수령 후 7일 이내 확인해 주시면 교환 도와드립니다. 문의는 스토어 고객센터를 통해 접수해 주세요." /><Notice title="배송 안내" bullets={["배송기간 — 평균 배송기간은 2~5일 (일부 품목은 출고지 및 반품지 주소가 다를 수 있음)", "발송 마감시간 — 평일 기준 당일 오후 4시 이전 주문건까지 당일 발송 (일부품목 제외). 오후 4시 이후 주문건은 +1일 이후 발송 (평일기준)", "제주도·도서산간 지역배송비 — 제주도/도서산간 지역의 경우 배송비가 추가됩니다. (해당 지역마다 배송비가 다를 수 있음)"]} /><ExchangeGuide /></div></section>; }
function Notice({ title, body, bullets }: { title: string; body?: string; bullets?: string[] }) { return <div><h3 className="text-[28px] font-semibold">{title}</h3>{body ? <p className="mt-4 text-[22px] leading-snug text-[#6e6e73]">{body}</p> : null}{bullets ? <ul className="mt-4 space-y-2 text-[22px] leading-snug text-[#6e6e73]">{bullets.map(item => <li key={item} className="flex gap-3"><span>·</span><span>{item}</span></li>)}</ul> : null}</div>; }
function ExchangeGuide() {
  const groups = [{ title: "교환·반품 가능", items: ["상품 수령 후 7일 이내 구매한 몰에서 교환 또는 반품을 신청한 경우", "구매자의 단순 변심은 상품 수령 후 7일 이내 가능하며 반품 배송비가 발생할 수 있습니다.", "상품 초기 불량에 대한 교환과 반품은 무료이며 그 외에는 왕복 택배비가 발생할 수 있습니다.", "교환·반품 신청 후 상품은 포장과 구성품을 받은 상태로 보관해 주세요."] }, { title: "교환·반품 불가", items: ["교환 또는 반품 요청 기간이 지난 경우", "구매자 책임으로 상품이나 포장이 훼손된 경우", "사용 흔적으로 상품 가치가 현저히 감소한 경우", "구성품이 누락된 경우", "고객 요청으로 별도 제작 또는 변경된 상품인 경우"] }];
  return <div><h3 className="text-[28px] font-semibold tracking-[-0.015em]">교환·반품 안내</h3><p className="mt-4 text-[22px] font-medium leading-snug text-[#6e6e73]">교환 및 반품 접수는 구매하신 몰에서 신청해 주세요.</p>{groups.map(({ title, items }) => <div key={title} className="mt-8"><p className="text-[22px] font-semibold">{title}</p><ul className="mt-3 space-y-2 text-[22px] font-medium leading-snug text-[#6e6e73]">{items.map(item => <li key={item} className="flex gap-3"><span>·</span><span>{item}</span></li>)}</ul></div>)}<div className="mt-8"><p className="text-[22px] font-semibold">변경·취소</p><p className="mt-3 text-[22px] font-medium leading-snug text-[#6e6e73]">취소나 변경은 실제 출고가 되지 않았을 경우에만 가능합니다. 상품 출고 후 취소 또는 변경 시 왕복 택배비는 구매자 부담입니다.</p></div></div>;
}
