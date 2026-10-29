import { BrandFrame } from "@/components/product-detail/brand-frame";
import { ReviewSection } from "@/components/product-detail/review-section";
import { Check, ChevronDown } from "lucide-react";
import { Fragment, type ReactNode } from "react";
import Image from "next/image";

// 상단은 Nova Push-Up Pad의 소개 흐름, 하단은 기능별 스토리와 사용 가이드로 구성.
// 실물 사진을 기준으로 제작한 제품·사용·사이즈 이미지를 사용한다.
export default function NovaMassageStickPage() {
  return (
    <BrandFrame brand="nova">
      <Hero />
      <ProductOverview />
      <Metrics />
      <ProductPhilosophy />
      <RollingModes />
      <WhyItFits />
      <FeatureStories />
      <BodyGuide />
      <UsageGuide />
      <IntensityGuide />
      <DesignAndStorage />
      <Audience />
      <Reviews />
      <Closing />
      <Faq />
      <Size />
      <Components />
      <ProductInfo />
      <Notices />
    </BrandFrame>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[1440px] overflow-hidden bg-[#e7edf2]">
      <PhotoSlot src="hero-v3.webp" alt="밝은 실내에서 마사지 스틱으로 다리를 마사지하는 모습" preload className="absolute inset-0 !rounded-none !border-0" label="히어로 — 밝은 실내에서 종아리에 마사지 스틱을 사용하는 장면" aspect="auto" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32%] bg-gradient-to-b from-[#f0f3f6] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%]" style={{ background: "linear-gradient(0deg, rgba(203,220,231,0.85) 0%, rgba(203,220,231,0.62) 32%, rgba(203,220,231,0.28) 65%, rgba(203,220,231,0) 100%)" }} />
      <div className="relative flex min-h-[1440px] flex-col items-center px-8 pb-12 pt-24 text-center">
        <p className="text-[39px] font-semibold text-[#49697f]">Nova Massage Stick</p>
        <h1 className="mt-8 text-[76px] font-bold leading-[1.1] tracking-[-0.045em] text-[#1d252d]">하루의 마무리,<br />나를 위한 마사지.</h1>
        <p className="mt-auto text-[29px] font-medium leading-[1.6] text-[#425e71]">뻐근했던 종아리와 허벅지에,<br />편안한 힘으로 천천히 굴려주세요.</p>
      </div>
    </section>
  );
}

function ProductOverview() {
  return (
    <section className="relative aspect-[3/4] overflow-hidden bg-[#e7edf2]">
      <PhotoSlot src="overview-v2.webp" alt="마사지 스틱 전체와 분리한 포인트 링" imageClassName="mix-blend-multiply" className="absolute inset-0 !rounded-none !border-0 !bg-[#e7edf2]" label="제품 소개 — 블랙 롤러와 라이트 그레이 손잡이, 분리한 포인트 링 전체 구성" aspect="auto" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[18%] bg-gradient-to-t from-white to-transparent" />
      <div className="absolute inset-x-0 top-24 text-center">
        <h2 className="text-[68px] font-bold tracking-[-0.04em]"><Gradient>Nova Massage Stick.</Gradient></h2>
        <p className="mt-5 text-[31px] font-semibold text-[#49697f]">긴 롤러로 넓게, 포인트 링으로 좁게.</p>
      </div>
    </section>
  );
}

function Metrics() {
  const metrics = [["1,960개", "촘촘하게 닿는 작은 돌기"], ["회전 롤러", "손잡이와 따로 회전"], ["포인트 링", "원하는 곳에 좁게 닿는 링"], ["58cm", "양손으로 잡기 좋은 길이"]];
  return (
    <section className="px-12 py-36" style={{ background: "linear-gradient(180deg, #ffffff 0%, #eaf0f5 16%, #eaf0f5 84%, #ffffff 100%)" }}>
      <Title center>한눈에 보는<br /><Gradient>Nova Massage Stick.</Gradient></Title>
      <div className="mt-20 grid grid-cols-2 gap-6">{metrics.map(([value, label]) => (
        <article key={label} className="rounded-[28px] border border-[#c7d7e3] bg-white px-5 py-16 text-center shadow-[0_12px_34px_rgba(70,121,152,0.06)]">
          <p className="text-[58px] font-bold tracking-[-0.04em] text-[#467998]">{value}</p>
          <p className="mt-7 text-[23px] font-semibold text-[#6e6e73]">{label}</p>
        </article>
      ))}</div>
    </section>
  );
}

function ProductPhilosophy() {
  const essentials = [["넓은 부위는", "긴 롤러로 다리를 넓게 굴려주세요."], ["좁은 부위는", "링을 끼워 한곳을 마사지하세요."], ["누르는 힘은", "두 손으로 편안하게 조절하세요."]];
  return (
    <section className="bg-white px-12 py-40">
      <Eyebrow>ROLL YOUR WAY</Eyebrow>
      <Title>하나의 스틱으로,<br /><Gradient>두 가지 마사지.</Gradient></Title>
      <PhotoSlot src="concept-v2.webp" alt="링을 뺀 스틱과 링을 끼운 스틱의 모습 비교" className="mt-24" label="제품 콘셉트 — 기본 스틱과 포인트 링을 장착한 스틱을 나란히 비교" />
      <div className="mt-16 grid grid-cols-3 gap-5">{essentials.map(([title, body], index) => (
        <article key={title} className={`rounded-[26px] border border-[#c7d7e3] min-h-[210px] px-6 py-8 ${index === 2 ? "bg-[#dce9f2]" : index === 1 ? "bg-[#e4ecf2]" : "bg-[#f0f3f6]"}`}>
          <p className="text-[18px] font-bold tracking-[0.1em] text-[#467998]">0{index + 1}</p>
          <h3 className="mt-5 text-[25px] font-bold leading-[1.3]">{title}</h3>
          <p className="mt-4 break-keep text-[21px] font-medium leading-[1.6] text-[#506879]">{body}</p>
        </article>
      ))}</div>
    </section>
  );
}

function WhyItFits() {
  const rows = [["몸에 닿는 부분", "촘촘한 돌기가 있는 롤러", "도톰한 굴곡이 있는 링"], ["마사지 범위", "다리를 따라 넓게", "한곳을 좁게"], ["강도와 속도", "손으로 직접 조절", "손으로 직접 조절"], ["전원·충전", "필요 없음", "필요 없음"]];
  return (
    <section className="bg-white px-10 py-36">
      <Title center><Gradient>Nova Massage Stick</Gradient><br />나에게 맞는 이유.</Title>
      <p className="mt-8 text-center text-[26px] font-medium leading-[1.6] text-[#6e6e73]">링을 빼거나 끼워, 필요한 부위에 맞춰 쓰세요.</p>
      <div className="mt-20 overflow-hidden rounded-[28px] border border-[#c7d7e3]">
        <table className="w-full table-fixed border-collapse text-center">
          <caption className="sr-only">기본 스틱과 포인트 링 장착 시 사용 방식 비교</caption>
          <thead><tr className="bg-[#f0f3f6]"><th aria-label="비교 항목" className="w-[30%] px-3 py-7" /><th scope="col" className="border-l border-[#c7d7e3] px-2 py-7 text-[23px] font-bold">기본 스틱</th><th scope="col" className="border-l border-[#c7d7e3] bg-[#dce9f2] px-2 py-7 text-[23px] font-bold text-[#467998]">포인트 링 장착</th></tr></thead>
          <tbody>{rows.map(([label, basic, point]) => <tr key={label} className="border-t border-[#c7d7e3]"><th scope="row" className="px-3 py-8 text-[22px] font-semibold">{label}</th><td className="border-l border-[#c7d7e3] px-3 py-8 break-keep text-[21px] font-medium leading-[1.5] text-[#6e6e73]">{basic}</td><td className="border-l border-[#c7d7e3] bg-[#eaf0f5] px-3 py-8 break-keep text-[21px] font-semibold leading-[1.5] text-[#467998]">{point}</td></tr>)}</tbody>
        </table>
      </div>
    </section>
  );
}

function RollingModes() {
  const modes = [
    { name: "BASIC", src: "basic-v3.webp", alt: "링 없이 긴 돌기 롤러로 허벅지를 마사지하는 모습", title: "다리를 따라 넓게", body: "링 없이 긴 롤러를 대고 굴려주세요. 허벅지와 종아리를 넓게 마사지할 때 쓰기 좋아요.", photo: "기본 스틱으로 허벅지를 굴리는 장면" },
    { name: "POINT", src: "point-v2.webp", alt: "포인트 링으로 허벅지의 좁은 부위를 마사지하는 모습", title: "신경 쓰이는 곳을 좁게", body: "링을 끼우면 도톰한 부분이 먼저 닿아요. 한곳을 집중해서 굴릴 땐 힘을 조금 빼주세요.", photo: "링을 장착한 스틱과 링이 몸에 닿는 부분 확대" },
  ];
  return (
    <section className="bg-white px-10 py-36">
      <Title center>링을 끼우면,<br /><Gradient>좁은 곳을 더 집중해서.</Gradient></Title>
      <div className="mt-20 grid grid-cols-2 gap-6">{modes.map(({ name, src, alt, title, body, photo }, index) => (
        <article key={name} className={`rounded-[28px] border p-7 ${index ? "border-[#afc9dc] bg-[#dce9f2]" : "border-[#d0dce5] bg-[#f0f3f6]"}`}>
          <p className="text-[19px] font-bold tracking-[0.13em] text-[#467998]">{name}</p>
          <PhotoSlot src={src} alt={alt} className="mt-8 !rounded-[22px]" label={photo} />
          <h3 className="mt-7 text-[29px] font-bold tracking-[-0.02em]">{title}</h3>
          <p className="mt-4 break-keep text-[22px] font-medium leading-[1.65] text-[#6e6e73]">{body}</p>
        </article>
      ))}</div>
    </section>
  );
}

function EverydayNeeds() {
  const moments = [
    ["운동을 마친 뒤", "허벅지와 종아리가 뻐근하다면"],
    ["오래 앉아 있던 날", "일어나도 다리가 묵직하다면"],
    ["많이 걸은 저녁", "집에서 편히 쉬고 싶다면"],
  ];
  return <section className="bg-white px-12 py-32">
    <Title center>운동 후 묵직한 다리,<br /><Gradient>가볍게 굴려보세요.</Gradient></Title>
    <p className="mt-8 break-keep text-center text-[25px] font-medium leading-[1.6] text-[#526373]">손으로 주무르기 번거로울 땐 스틱으로 천천히 굴려주세요.</p>
    <ul className="mt-14 overflow-hidden rounded-[28px] bg-[#eef3f7] px-8">{moments.map(([title, body], index) => <li key={title} className="grid grid-cols-[40px_220px_1fr] items-center gap-5 border-b border-[#d5e1e9] py-8 last:border-0"><span className="text-[20px] font-semibold text-[#65849b]">0{index + 1}</span><h3 className="whitespace-nowrap text-[25px] font-bold text-[#354f62]">{title}</h3><p className="break-keep text-[23px] font-medium leading-[1.5] text-[#526373]">{body}</p></li>)}</ul>
  </section>;
}

function FeatureStories() {
  const features = [
    {
      id: "texture",
      src: "texture-v2.webp",
      alt: "작고 촘촘한 검정 돌기 표면 확대",
      title: <>굴릴 때마다 느껴지는,<br /><Gradient>1,960개의 입체 돌기.</Gradient></>,
      photo: "돌기 표면 매크로와 전체 배열",
      body: "매끈한 마사지봉으로는 조금 아쉬웠다면, 촘촘한 돌기의 자극을 느껴보세요. 긴 롤러를 따라 작은 돌기가 차례로 닿아 허벅지와 종아리를 넓게 마사지할 수 있어요.",
    },
    {
      id: "bearing",
      src: "rotation-v2.webp",
      alt: "양쪽 손잡이를 잡고 중앙 롤러를 굴리는 모습",
      title: <>손잡이는 잡고,<br /><Gradient>롤러만 굴려주세요.</Gradient></>,
      photo: "손잡이를 잡은 채 중앙 롤러가 회전하는 영상 자리",
      body: "스틱을 손안에서 돌릴 필요 없어요. 양쪽 손잡이를 잡고 앞뒤로 움직이면 가운데 롤러가 따라 돌아갑니다. 베어링이 회전을 도와 같은 부위를 반복해서 굴리기 편해요.",
    },
    {
      id: "manual-pressure",
      src: "everyday-v2.webp",
      alt: "집에서 편안한 옷차림으로 마사지 스틱을 사용하는 모습",
      title: <>충전할 필요 없이,<br /><Gradient>생각날 때 바로.</Gradient></>,
      photo: "운동 후 앉아서 스틱을 사용하는 생활 장면",
      body: "충전하거나 전원을 켤 필요가 없어요. 운동을 마친 뒤에도, TV를 보며 쉬는 시간에도 꺼내서 바로 쓸 수 있어요. 편하게 앉아 뻐근한 부위부터 천천히 굴려보세요.",
    },
    {
      id: "grip",
      src: "grip-v2.webp",
      alt: "회색 손잡이의 얕은 세로 홈과 실버 연결부 확대",
      title: <>두 손으로 잡고,<br /><Gradient>누르는 힘을 조절하세요.</Gradient></>,
      photo: "세로 홈 손잡이 확대와 양손으로 잡은 전체 58cm 스틱",
      body: "세로 홈이 있는 손잡이를 양손으로 감싸 잡아보세요. 누르는 힘을 더하거나 빼면서 편안한 강도를 찾을 수 있어요. 전체 길이 58cm로 허벅지와 종아리에 대고 쓰기 좋습니다.",
    },
  ];
  return (
    <>
      {features.map(({ id, src, alt, title, photo, body }) => (
        <Fragment key={id}>
        <section data-feature={id} className="bg-white px-12 pb-36 pt-32">
          <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-[3px] border-[#467998]">
            <Check className="h-9 w-9 text-[#467998]" strokeWidth={3.5} aria-hidden />
          </div>
          <h2 className="mt-10 break-keep text-[61px] font-bold leading-[1.18] tracking-[-0.032em]">{title}</h2>
          <PhotoSlot src={src} alt={alt} imageClassName={id === "manual-pressure" ? "scale-[1.3] origin-[50%_85%]" : undefined} className="mt-24" label={photo} />
          <p className="mt-10 break-keep text-[27px] font-medium leading-[1.7] text-[#5e6d78]">{body}</p>
        </section>
        {id === "manual-pressure" ? <EverydayNeeds /> : null}
        </Fragment>
      ))}
    </>
  );
}

function BodyGuide() {
  const regions = [["01", "팔", "팔을 받치고 짧은 범위부터 굴려주세요."], ["02", "허벅지", "긴 롤러로 허벅지를 따라 천천히 굴려주세요."], ["03", "종아리", "롤러로 넓게, 링을 끼워 좁게 마사지하세요."]];
  return (
    <section className="px-12 py-40" style={{ background: "linear-gradient(180deg, #ffffff 0%, #eaf0f5 16%, #eaf0f5 84%, #ffffff 100%)" }}>
      <Title center>팔부터 다리까지,<br /><Gradient>원하는 부위를 골라서.</Gradient></Title>
      <p className="mx-auto mt-8 max-w-[764px] break-keep text-center text-[26px] font-medium leading-[1.6] text-[#6e6e73]">뼈와 관절을 피해, 근육이 있는 부위에 사용하세요.</p>
      <div className="mt-20 grid grid-cols-2 gap-5">{(["front", "back"] as const).map((side) => (
        <figure key={side} className="rounded-[28px] border border-[#c7d7e3] bg-white px-7 pb-7 pt-10">
          <div className="relative mx-auto h-[560px] w-[249px]">
            <object data={`/assets/sync-2026-10-29/nova/massage-stick/body-map/man-${side}.svg`} type="image/svg+xml" aria-label={`마사지 스틱 사용 위치 ${side === "front" ? "앞면" : "뒷면"} 인체도`} className="h-full w-full"><p className="pt-24 text-center text-[20px] text-[#467998]">팔 · 허벅지 · 종아리</p></object>
            <BodyDot left="24%" top="29%" label="팔" />
            <BodyDot left="40%" top="62%" label="허벅지" />
            <BodyDot left="63%" top="80%" label="종아리" />
          </div>
          <figcaption className="mt-7 text-center text-[20px] font-semibold text-[#6e6e73]">{side === "front" ? "앞면" : "뒷면"}</figcaption>
        </figure>
      ))}</div>
      <div className="mt-8 space-y-4">{regions.map(([number, title, body]) => <div key={number} className="grid grid-cols-[48px_90px_1fr] items-start gap-4 rounded-[22px] bg-white p-7"><span className="mt-1 text-[18px] font-bold text-[#467998]">{number}</span><h3 className="text-[25px] font-semibold">{title}</h3><p className="break-keep text-[21px] font-medium leading-[1.6] text-[#6e6e73]">{body}</p></div>)}</div>
      <p className="mt-8 text-center text-[18px] leading-[1.6] text-[#647580]">사용 위치를 안내하는 인체도입니다. 뼈와 관절은 직접 누르지 마세요.<br />통증이나 저림이 느껴지면 즉시 사용을 중단해 주세요.</p>
    </section>
  );
}

function BodyDot({ left, top, label }: { left: string; top: string; label: string }) {
  return <span role="img" aria-label={`${label} 사용 위치`} className="absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white bg-[#467998] shadow-[0_0_0_7px_rgba(70,121,152,0.18)]" style={{ left, top }}><span className="h-1.5 w-1.5 rounded-full bg-white" /></span>;
}

function UsageGuide() {
  const steps = [
    ["허벅지", "의자에 앉아 양쪽 손잡이를 잡고 허벅지 위에 롤러를 대세요. 무릎은 피하고, 앞뒤로 짧게 굴려주세요."],
    ["종아리", "한쪽 무릎을 굽혀 편하게 앉은 뒤 종아리 근육에 롤러를 대세요. 정강이뼈와 무릎 뒤를 피해 천천히 굴려주세요."],
    ["팔", "팔을 수건이나 테이블 위에 받치고, 반대 손으로 스틱을 잡으세요. 손목과 팔꿈치 사이의 근육을 짧게 굴려주세요."],
  ];
  return <section className="bg-white px-12 py-36">
    <Title center>어디부터 시작할까요?<br /><Gradient>부위별로 이렇게 사용하세요.</Gradient></Title>
    <div className="mt-20 space-y-16">{steps.map(([title, body], index) => <article key={title}>
      <PhotoSlot src={["usage-thigh-v3.webp", "usage-calf-v2.webp", "usage-arm-v3.webp"][index]} alt={`${title} 부위에 마사지 스틱을 대고 굴리는 사용 자세`} label={`${title} 사용 자세와 이동 방향`} aspect="3 / 2" />
      <h3 className="mt-8 text-[32px] font-bold"><span className="mr-4 text-[#467998]">0{index + 1}</span>{title}</h3>
      <p className="mt-5 break-keep text-[26px] font-medium leading-[1.7] text-[#6e6e73]">{body}</p>
    </article>)}</div>
  </section>;
}

function IntensityGuide() {
  const tips = [
    { title: <>얇은 옷 위에<br />가볍게</>, body: "처음 쓰는 날에는 옷 위에서 돌기의 느낌부터 익혀보세요." },
    { title: <>짧은 범위를<br />천천히</>, body: "한 부위를 오래 누르지 말고 짧게 앞뒤로 움직여주세요." },
    { title: <>링을 끼우면<br />힘은 더 약하게</>, body: "좁은 곳에 힘이 모이니, 링 없이 쓸 때보다 살살 굴려주세요." },
  ];
  return <section className="px-12 py-36" style={{ background: "linear-gradient(180deg, #ffffff 0%, #dce9f2 16%, #dce9f2 84%, #ffffff 100%)" }}>
    <Title center>자극은 또렷하게.<br /><Gradient>시작은 가볍게.</Gradient></Title>
    <p className="mt-9 text-center text-[26px] font-medium leading-[1.6] text-[#526373]">처음에는 얇은 옷 위에서,<br />아프지 않을 만큼만 가볍게 굴려주세요.</p>
    <div className="mt-16 grid grid-cols-3 items-stretch gap-5">{tips.map(({ title, body }, index) => <article key={index} className="flex min-h-[365px] flex-col rounded-[26px] border border-[#c7d7e3] bg-white p-7"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e4ecf2] text-[22px] font-bold text-[#3d617a]">{index + 1}</span><h3 className="mt-7 text-[28px] font-bold leading-[1.3] text-[#263b4b]">{title}</h3><p className="mt-6 break-keep text-[22px] font-medium leading-[1.6] text-[#526373]">{body}</p></article>)}</div>
    <p className="mt-10 text-center text-[21px] font-semibold leading-[1.6] text-[#425e71]">통증이나 저림이 느껴지면 즉시 사용을 멈춰주세요.</p>
  </section>;
}

function DesignAndStorage() {
  return <section className="bg-white px-12 py-36">
    <Title>디자인은 차분하게.<br /><Gradient>보관은 간편하게.</Gradient></Title>
    <PhotoSlot src="storage-v2.webp" alt="선반 위에 스틱과 포인트 링을 함께 정리한 모습" className="mt-20" label="블랙 롤러와 그레이 손잡이 디테일, 선반에 링과 함께 놓은 장면" aspect="3 / 4" />
    <p className="mt-10 break-keep text-[27px] font-medium leading-[1.7] text-[#5e6d78]">블랙과 회색의 차분한 조합으로 운동 공간에 깔끔하게 어울려요. 사용 후에는 스틱을 선반이나 매트 옆에 눕혀 두고, 링도 함께 보관하세요.</p>
  </section>;
}

function Audience() {
  const items = [
    {
      title: <>운동 후 다리가 뻐근한 분</>,
      body: "운동이 끝나면 매트에 앉아 뻐근한 다리를 천천히 굴려보세요.",
      src: "audience-workout-v2.webp",
      alt: "운동 후 매트에 앉아 마사지 스틱을 사용하는 모습",
      photo: "추천 대상 01 — 운동 매트 옆에 앉아 허벅지를 롤링하는 장면",
    },
    {
      title: <>오래 앉아서 일하는 분</>,
      body: "하루 종일 책상 앞에 앉아 있었다면, 집에서 쉬며 다리를 마사지해보세요.",
      src: "audience-desk-v3.webp",
      alt: "책상 옆 의자에 앉아 마사지하는 모습",
      photo: "추천 대상 02 — 책상 옆 의자에 앉아 종아리를 롤링하는 장면",
    },
    {
      title: <>부위별로 마사지하고 싶은 분</>,
      body: "긴 롤러로 넓게 굴리다가, 신경 쓰이는 곳은 링을 끼워 좁게 마사지하세요.",
      src: "audience-ring-v4.webp",
      alt: "포인트 링을 끼운 마사지 스틱을 양손으로 들어 보여주는 모습",
      photo: "추천 대상 03 — 기본 스틱과 포인트 링 장착 상태를 비교한 장면",
    },
    {
      title: <>강도를 직접 조절하고 싶은 분</>,
      body: "강한 자극이 부담스러운 날에는 손에 힘을 빼고 가볍게 굴려주세요.",
      src: "audience-pressure-v3.webp",
      alt: "양손으로 누르는 힘을 조절하며 옷 위에서 사용하는 모습",
      photo: "추천 대상 04 — 양손으로 손잡이를 잡고 약한 압력으로 굴리는 장면",
    },
  ];
  return (
    <section className="bg-white px-12 py-40" data-section="audience">
      <Title center>이런 분께 <Gradient>추천합니다.</Gradient></Title>
      <p className="mx-auto mt-8 max-w-[720px] text-center text-[25px] font-medium leading-[1.6] text-[#6e6e73]">운동을 마친 뒤에도, 집에서 쉬는 시간에도.</p>
      <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-16">
        {items.map(({ title, body, photo, src, alt }) => (
          <article key={photo}>
            <PhotoSlot src={src} alt={alt} aspect="4 / 5" label={photo} compact />
            <h3 className="mt-7 whitespace-nowrap text-[25px] font-bold leading-[1.3] tracking-[-0.02em] text-[#1d1d1f]">{title}</h3>
            <p className="mt-4 break-keep text-[21px] font-medium leading-[1.6] text-[#6e6e73]">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    "운동하고 나면 종아리랑 허벅지가 자주 뭉쳐서 구매했어요. 원하는 부위를 직접 문지를 수 있어서 좋고 힘 조절도 제가 할 수 있으니까 편하네요. 특히 운동 끝나고 종아리 풀어줄 때 자주 사용하고 있습니다.",
    "일반적인 매끈한 마사지봉이랑은 느낌이 좀 다르네요. 돌기가 촘촘하게 있어서 굴릴 때 자극이 확실히 느껴져요. 처음엔 조금 아팠는데 힘을 약하게 주니까 괜찮았어요. 개인적으로 시원하게 마사지하는 걸 좋아해서 만족합니다.",
    "양쪽에 손잡이가 있어서 잡고 굴리기 편해요. 손에 힘을 얼마나 주느냐에 따라 강도를 조절할 수 있는 게 가장 마음에 듭니다. 허벅지나 종아리 마사지할 때 사용하기 좋고 생각보다 사용법도 간단하네요.",
    "하루 종일 앉아서 일하다 보니 다리가 뻐근할 때가 많아서 샀어요. 전동 제품처럼 충전할 필요도 없고 그냥 꺼내서 굴리면 되니까 편하네요. TV 보면서 가볍게 사용하기에도 괜찮아요. 요즘은 퇴근하고 거의 매일 쓰고 있습니다.",
  ];
  return <div className="[&_article>p]:break-keep"><ReviewSection reviews={reviews} source="구매 고객" /></div>;
}

function Closing() {
  return <section className="relative min-h-[1440px] overflow-hidden bg-white"><PhotoSlot src="closing-v3.webp" alt="차분한 운동 공간에 놓인 마사지 스틱과 포인트 링" label="클로징 — 밝은 실내에 스틱과 포인트 링을 함께 놓은 장면" aspect="auto" className="absolute inset-0 !rounded-none !border-0" /><div className="pointer-events-none absolute inset-x-0 top-0 h-[38%]" style={{ background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.96) 30%, rgba(255,255,255,0) 100%)" }} /><div className="relative flex min-h-[1440px] flex-col items-center px-10 pb-24 pt-28 text-center"><h2 className="text-[66px] font-bold leading-[1.17] tracking-[-0.04em]">하루의 마무리,<br /><Gradient>나를 위한 마사지.</Gradient></h2><p className="mt-8 text-[28px] font-medium leading-[1.6] text-[#6e6e73]">오늘 뻐근했던 곳에,<br />편안한 힘으로 천천히 굴려주세요.</p><p className="mt-auto text-[44px] font-semibold text-[#49697f]">Nova Massage Stick</p></div></section>;
}

function Size() {
  return <section className="bg-white px-10 pb-36 pt-32"><InfoTitle>사이즈</InfoTitle><PhotoSlot src="size-guide-v1.webp" alt="스틱 전체 길이 58cm, 지름 2.5cm와 포인트 링 바깥지름 5cm 치수 안내" className="mt-24 !bg-white !border-[#d2d2d7]" label="사이즈 — 스틱 전체 길이 58cm 표시, 포인트 링 별도 배치" /><Rows rows={[["스틱 크기", "길이 58cm × 지름 2.5cm"], ["포인트 링 크기", "바깥지름 5cm"], ["스틱 중량", "420g"], ["포인트 링 중량", "40g"]]} /></section>;
}

function Faq() {
  const questions = [
    ["마사지 스틱이 처음인데, 어떻게 쓰나요?", "먼저 링을 빼고 얇은 옷 위에서 써보세요. 양쪽 손잡이를 잡고 허벅지나 종아리에 댄 뒤, 작은 범위로 천천히 굴리면 됩니다. 아프지 않고 편안한 정도로 눌러주세요."],
    ["포인트 링은 언제 사용하나요?", "넓게 굴리다가 한곳을 더 집중해서 마사지하고 싶을 때 끼워주세요. 도톰한 링에 힘이 모이므로 링 없이 쓸 때보다 약하게 눌러 시작하세요."],
    ["돌기 자극이 많이 강한가요?", "매끈한 봉보다 돌기의 자극이 분명하게 느껴질 수 있어요. 강하게 느껴지면 누르는 힘을 빼고 얇은 옷 위에서 사용해보세요. 통증이나 저림이 생기면 참지 말고 바로 멈춰주세요."],
    ["손잡이까지 함께 돌려야 하나요?", "손잡이를 돌릴 필요는 없어요. 양쪽을 잡고 앞뒤로 움직이면 가운데 롤러가 따로 회전합니다. 손은 손잡이를 잡고 방향과 누르는 힘만 조절해 주세요."],
    ["충전이나 배터리가 필요한가요?", "필요 없어요. 손으로 직접 굴리는 제품이라 꺼내서 바로 사용할 수 있습니다. 손으로 누르는 힘과 움직이는 속도를 바꿔 강도를 조절하세요."],
    ["사용 후 물로 씻어도 되나요?", "물에 담그거나 연결부에 직접 물을 붓지 마세요. 마른 천이나 물기를 꼭 짠 천으로 닦고 말려주세요. 직사광선과 습기를 피해 보관하세요."],
  ];
  return (
    <section className="bg-white px-10 pb-36 pt-40">
      <InfoTitle>질문에 답해드립니다.</InfoTitle>
      <ul className="mt-24">
        {questions.map(([question, answer]) => (
          <li key={question} className="border-t border-[#d2d2d7] py-7 last:border-b">
            <div className="flex items-start justify-between gap-6">
              <h3 className="text-[28px] font-semibold leading-[1.35] tracking-[-0.02em] text-[#111827]">{question}</h3>
              <ChevronDown className="mt-1.5 h-7 w-7 shrink-0 text-[#86868b]" strokeWidth={2.5} aria-hidden />
            </div>
            <p className="mt-4 break-keep pr-12 text-[23px] font-medium leading-[1.55] text-[#6e6e73]">{answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Components() {
  return <section className="bg-white px-14 py-28"><InfoTitle>제품 구성</InfoTitle><PhotoSlot src="components-v2.webp" alt="마사지 스틱 1개와 포인트 마사지 링 1개 전체 구성" className="mt-16 !bg-white !border-[#d2d2d7]" /><div className="mt-8 flex items-center justify-center gap-10 py-6 text-[24px] font-semibold text-[#354f62]"><span>마사지 스틱 × 1</span><span aria-hidden="true" className="h-5 w-px bg-[#c7d7e3]" /><span>포인트 마사지 링 × 1</span></div></section>;
}

function ProductInfo() {
  // 길이와 중량은 사용자 확인값. 소재와 내부 구조는 공급처 확인 후 확정한다.
  const rows = [["제품명", "Nova Massage Stick"], ["제품 유형", "포인트 링 탈착형 수동 마사지 스틱"], ["색상", "블랙 · 라이트 그레이"], ["마사지 스틱 크기", "길이 58cm × 지름 2.5cm"], ["포인트 링 크기", "바깥지름 5cm"], ["마사지 스틱 중량", "420g"], ["포인트 링 중량", "40g"], ["구성품", "마사지 스틱 1개 · 포인트 마사지 링 1개"], ["제조자(수입자)", "보이드 투 노바"], ["품질보증기준", "관련 법령 및 소비자분쟁해결기준에 따름"], ["A/S 책임자와 전화번호", "010-6393-0907"]];
  return <section className="bg-white px-14 py-28"><InfoTitle>제품 정보</InfoTitle><Rows rows={rows} /></section>;
}

// 이미지의 확대·혼합 효과는 각 섹션에서 필요한 경우에만 지정한다.
function PhotoSlot({ src, alt = "", className = "", aspect = "3 / 4", preload = false, imageClassName = "" }: { src?: string; label?: string; alt?: string; className?: string; aspect?: string; compact?: boolean; preload?: boolean; imageClassName?: string }) {
  return (
    <div aria-hidden={src ? undefined : true} data-photo-slot={!src ? true : undefined} className={`${className.includes("absolute") ? "" : "relative"} w-full overflow-hidden rounded-[28px] border border-[#c7d7e3] bg-[#e4ecf2] ${className}`} style={{ aspectRatio: aspect }}>
      {src ? <Image src={`/assets/sync-2026-10-29/nova/massage-stick/generated/${src}`} alt={alt} fill sizes="860px" className={`object-cover ${imageClassName}`} preload={preload} /> : null}
    </div>
  );
}
function Eyebrow({ children }: { children: ReactNode }) { return <p className="mb-9 text-[21px] font-bold tracking-[0.14em] text-[#467998]">{children}</p>; }
function Title({ children, center = false }: { children: ReactNode; center?: boolean }) { return <h2 className={`${center ? "text-center" : ""} text-[60px] font-bold leading-[1.16] tracking-[-0.035em] text-[#1d1d1f]`}>{children}</h2>; }
function Gradient({ children }: { children: ReactNode }) { return <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg,#3d6c8b,#7fa8c1)" }}>{children}</span>; }
function InfoTitle({ children }: { children: ReactNode }) { return <h2 className="text-center text-[52px] font-bold leading-[1.3] tracking-[-0.035em]">{children}</h2>; }
function Rows({ rows }: { rows: string[][] }) { return <dl className="mt-16">{rows.map(([label, value]) => <div key={label} className="flex gap-8 border-b border-[#c7d7e3] py-6 first:border-t"><dt className="w-[210px] shrink-0 text-[22px] font-semibold">{label}</dt><dd className="text-[22px] leading-[1.6] text-[#6e6e73]">{value}</dd></div>)}</dl>; }

function Notices() {
  return <section className="bg-white px-10 pb-36 pt-32"><InfoTitle>기타 안내</InfoTitle><div className="mx-auto mt-24 max-w-[720px] space-y-12"><Notice title="사용 시 주의사항" bullets={["처음에는 옷 위에서 약한 압력과 느린 속도로 시작해 주세요.", "뼈와 관절, 얼굴, 목 앞쪽, 상처·염증·멍이 있는 부위에는 사용하지 마세요.", "한 부위를 강한 압력으로 오래 누르지 말고 통증이나 저림이 느껴지면 즉시 중단해 주세요.", "임산부, 고령자, 혈액순환 또는 근골격계 관련 질환이 있는 분은 사용 전 전문가와 상담해 주세요.", "어린이의 손이 닿지 않는 곳에 보관해 주세요."]} /><Notice title="관리 방법" bullets={["사용 후 마른 천 또는 물기를 꼭 짠 부드러운 천으로 표면을 닦아 주세요.", "제품 전체를 물에 담그거나 연결부에 직접 물을 붓지 마세요.", "직사광선과 고온다습한 장소를 피해 충분히 건조한 뒤 보관해 주세요."]} /><Notice title="제품 안내" body="본 제품은 일상적인 셀프 마사지와 운동 전후 롤링을 위한 생활용품으로 의료기기가 아닙니다. 질환의 진단·치료·예방 또는 통증 개선을 보장하지 않습니다." /><Notice title="색상 안내" body="화면과 촬영 환경에 따라 실제 색상이 다르게 보일 수 있습니다. 제품은 블랙 롤러와 라이트 그레이 손잡이 구성입니다." /><Notice title="A/S 안내" body="제품 초기 불량은 수령 후 7일 이내 확인해 주시면 교환 도와드립니다. 문의는 스토어 고객센터를 통해 접수해 주세요." /><Notice title="배송 안내" bullets={["배송기간 — 평균 배송기간은 2~5일 (일부 품목은 출고지 및 반품지 주소가 다를 수 있음)", "발송 마감시간 — 평일 오후 4시 이전 주문건까지 당일 발송 (일부 품목 제외)", "제주도·도서산간 지역은 추가 배송비가 발생할 수 있습니다."]} /><ExchangeGuide /></div></section>;
}

function ExchangeGuide() {
  const groups = [
    { title: "교환·반품 신청", items: [
      "단순 변심에 의한 교환·반품은 상품 수령 후 7일 이내 신청해 주세요.",
      "상품 불량·오배송 또는 안내된 내용과 다른 상품을 받은 경우, 수령 후 3개월 이내이면서 그 사실을 안 날 또는 알 수 있었던 날부터 30일 이내에 신청할 수 있습니다.",
      "반송 시 마사지 스틱과 포인트 링 등 받으신 구성품을 함께 보내주세요.",
    ] },
    { title: "배송비 안내", items: [
      "단순 변심에 따른 교환·반품 배송비는 구매자 부담이며, 금액은 구매하신 몰의 안내를 확인해 주세요.",
      "상품 불량·오배송 등 판매자 책임으로 교환·반품하는 경우 배송비는 판매자가 부담합니다.",
    ] },
    { title: "단순 변심 교환·반품이 제한되는 경우", items: [
      "단순 변심에 따른 신청 기간이 지난 경우",
      "구매자 책임으로 상품이 분실·훼손되거나, 사용으로 상품 가치가 현저히 감소한 경우",
      "상품 확인을 위해 포장을 열거나 훼손한 것만으로는 교환·반품이 제한되지 않습니다.",
      "상품 불량이나 표시·광고 내용과 다른 경우에는 위 단순 변심 제한과 별도로 관련 법령에 따라 처리합니다.",
    ] },
  ];
  return <div><h3 className="text-[28px] font-semibold tracking-[-0.015em]">교환·반품 안내</h3><p className="mt-4 text-[22px] font-medium leading-snug text-[#6e6e73]">교환 및 반품 접수는 구매하신 몰에서 신청해 주세요.</p>{groups.map(({ title, items }) => <div key={title} className="mt-8"><p className="text-[22px] font-semibold">{title}</p><ul className="mt-3 space-y-2 text-[22px] font-medium leading-snug text-[#6e6e73]">{items.map((item) => <li key={item} className="flex gap-3"><span>·</span><span>{item}</span></li>)}</ul></div>)}</div>;
}

function Notice({ title, body, bullets }: { title: string; body?: string; bullets?: string[] }) {
  return <div><h3 className="text-[28px] font-semibold">{title}</h3>{body ? <p className="mt-4 text-[22px] font-medium leading-snug text-[#6e6e73]">{body}</p> : null}{bullets ? <ul className="mt-4 space-y-2 text-[22px] font-medium leading-snug text-[#6e6e73]">{bullets.map((item) => <li key={item} className="flex gap-3"><span>·</span><span>{item}</span></li>)}</ul> : null}</div>;
}

