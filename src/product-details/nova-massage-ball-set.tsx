import { BrandFrame } from "@/components/product-detail/brand-frame";
import {
  Check,
  ChevronDown,
  PackageCheck,
  RefreshCw,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

const productGradient =
  "linear-gradient(90deg, #111827 0%, #376d9f 48%, #111827 100%)";

const customerReviews = [
  {
    source: "네이버 구매 고객",
    review: "하루 종일 컴퓨터 앞에 앉아 있어서 구매했어요. 생각보다 단단한 편인데 벽에 대고 살살 움직이니까 원하는 부위를 누르기 좋네요. 특히 어깨 쪽은 싱글볼이 쓰기 편해요. 책상 옆에 두고 틈날 때마다 사용 중입니다.",
  },
  {
    source: "쿠팡 구매 고객",
    review: "운동 끝나고 스트레칭할 때 쓰려고 샀습니다. 종아리나 엉덩이는 싱글볼로 하고 등 쪽은 더블볼로 쓰니까 괜찮네요. 처음엔 너무 가벼워서 놀랐는데 생각보다 단단합니다ㅋㅋ 가격 대비 만족해요.",
  },
  {
    source: "네이버 구매 고객",
    review: "마사지볼 하나만 사려다가 두 개 세트라 구매했는데 잘 산 것 같아요. 크기도 적당하고 엄청 가벼워요. 처음엔 바닥에 놓고 했다가 좀 아파서 벽에 대고 쓰고 있습니다. 강도 조절하면서 사용하니까 괜찮네요.",
  },
  {
    source: "쿠팡 구매 고객",
    review: "처음 받아보고 스티로폼 같은 느낌이라 살짝 당황했어요ㅋㅋ 근데 막상 사용해보니 꽤 단단하네요. 개인적으로 더블볼이 등 마사지할 때 편해서 자주 쓰고 있어요. 자리도 별로 안 차지하고 간단하게 쓰기 좋습니다.",
  },
] as const;

export default function NovaMassageBallSetPage() {
  return (
    <BrandFrame brand="nova">
      <Hero />
      <ProductOverview />
      <div
        style={{
          background:
            "linear-gradient(180deg,#f7f7f7 0%,#f7f7f7 42%,#ffffff 100%)",
        }}
      >
        <QuickFacts />
        <CoreStory />
      </div>
      <ShapeGuide />
      <UsageGuide />

      <Feature
        title={<>원하는 한 곳을,<br /><Gradient>싱글볼로 정확하게.</Gradient></>}
        src="/assets/sync-2026-10-29/nova/massage-ball-set/feature-single.webp"
        label="벽과 어깨 사이에 싱글볼을 두고 원하는 지점을 찾는 장면"
        body="둥근 공 하나가 몸과 벽 사이에서 원하는 지점을 찾습니다. 어깨 주변이나 둔부, 종아리처럼 위치를 조금씩 옮겨가며 한 곳에 집중하고 싶을 때 사용하기 좋습니다."
      />

      <Feature
        title={<>몸의 가운데는 비우고,<br /><Gradient>더블볼로 양옆을 함께.</Gradient></>}
        src="/assets/sync-2026-10-29/nova/massage-ball-set/feature-double.webp"
        label="등 중앙을 피해 더블볼의 두 구가 양옆에 닿는 장면"
        body="두 개의 공 사이에 생긴 홈을 몸의 중앙에 맞추면 목 뒤와 등, 허리 주변의 양옆을 함께 받칠 수 있습니다. 척추나 뼈 위를 직접 누르지 말고 천천히 움직여 주세요."
      />

      <BodyGuide />

      <div
        style={{
          background:
            "linear-gradient(180deg,#fff 0%,#eef3f7 8%,#eef3f7 92%,#fff 100%)",
        }}
      >
        <MaterialStory />
        <LightweightStory />
      </div>
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
    <section className="relative min-h-[1440px] overflow-hidden bg-[#f3f6f8]">
      <Image
        src="/assets/sync-2026-10-29/nova/massage-ball-set/hero-usage.webp"
        alt="밝은 벽 앞에서 싱글 마사지볼을 어깨에 대는 모습"
        fill
        preload
        sizes="860px"
        className="object-cover object-center"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[30%]"
        style={{
          background:
            "linear-gradient(180deg,rgba(250,252,253,.84) 0%,rgba(250,252,253,.4) 55%,transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[36%]"
        style={{
          background:
            "linear-gradient(0deg,rgba(8,14,22,.78) 0%,rgba(8,14,22,.36) 52%,transparent 100%)",
        }}
      />
      <div className="relative z-10 flex min-h-[1440px] flex-col items-center px-10 pb-24 pt-24 text-center">
        <p className="text-[40px] font-semibold tracking-[-0.02em]">
          <Gradient>Nova Massage Ball Set</Gradient>
        </p>
        <h1 className="mt-8 whitespace-nowrap text-[75px] font-bold leading-[1.08] tracking-[-0.045em] text-[#111827]">
          부위마다, 맞는 모양.
        </h1>
        <p className="mt-auto text-[29px] font-medium leading-[1.62] text-[#f7fafc] [text-shadow:0_3px_18px_rgba(0,0,0,.72),0_1px_3px_rgba(0,0,0,.9)]">
          한 점은 싱글볼로, 등 양옆은 더블볼로.
          <br />
          오늘 몸에 맞춰 골라 쓰세요.
        </p>
      </div>
    </section>
  );
}

function ProductOverview() {
  return (
    <section className="relative aspect-[3/4] overflow-hidden bg-white">
      <Image
        src="/assets/sync-2026-10-29/nova/massage-ball-set/product-overview.webp"
        alt="밝은 배경 위에 놓인 Nova 싱글 마사지볼과 더블 마사지볼"
        fill
        sizes="860px"
        className="object-cover object-center"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[11%]"
        style={{ background: "linear-gradient(180deg,transparent 0%,rgba(247,247,247,.72) 58%,#f7f7f7 100%)" }}
      />
      <div className="absolute inset-x-0 top-24 z-10 text-center">
        <h2 className="text-[68px] font-bold tracking-[-0.035em] text-[#111827]">
          <Gradient>Nova Massage Ball Set.</Gradient>
        </h2>
      </div>
      <p className="absolute inset-x-0 bottom-24 z-10 text-center text-[31px] font-semibold text-[#376d9f]">
        한 곳은 싱글볼, 양옆은 더블볼.
      </p>
    </section>
  );
}

function QuickFacts() {
  const facts = [
    ["2개", "싱글볼 + 더블볼"],
    ["지름 8cm", "싱글볼 크기"],
    ["8 × 16cm", "더블볼 크기"],
    ["15g", "싱글볼 무게"],
    ["30g", "더블볼 무게"],
    ["EPP", "가볍고 단단한 소재"],
  ] as const;

  return (
    <section className="bg-transparent px-12 py-36">
      <Title>
        한눈에 보는
        <br />
        <Gradient>Nova Massage Ball Set.</Gradient>
      </Title>
      <div className="mt-20 grid grid-cols-2 gap-6">
        {facts.map(([value, label]) => (
          <Metric key={label} value={value} label={label} />
        ))}
      </div>
    </section>
  );
}

function CoreStory() {
  return (
    <section className="bg-transparent px-12 py-40">
      <Eyebrow>WHY TWO SHAPES</Eyebrow>
      <h2 className="mt-9 text-[64px] font-bold leading-[1.16] tracking-[-0.04em] text-[#111827]">
        한 점과 두 점,
        <br />
        <Gradient>두 개를 하나에 담다.</Gradient>
      </h2>
      <StoryImage
        className="mt-24"
        src="/assets/sync-2026-10-29/nova/massage-ball-set/two-shapes.webp"
        alt="두 손에 각각 든 Nova 싱글볼과 더블볼"
      />
      <p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">
        어깨 끝처럼 한 곳을 짚고 싶은 날이 있고, 등처럼 양옆을 함께 받치고
        싶은 날도 있습니다. 몸은 한 가지 모양으로만 뻐근하지 않으니까.
        필요한 곳에 맞춰 골라 쓸 수 있도록 싱글볼과 더블볼을 한 세트에
        담았습니다.
      </p>
    </section>
  );
}

function ShapeGuide() {
  return (
    <section className="bg-white px-10 py-36">
      <Title>부위에 따라 고르는,<br /><Gradient>두 가지 모양.</Gradient></Title>
      <div className="mt-20 grid grid-cols-2 gap-6">
        <Scene
          eyebrow="SINGLE BALL"
          title="한 곳을 짚는 싱글볼"
          src="/assets/sync-2026-10-29/nova/massage-ball-set/single-product.webp"
          label="블랙 싱글볼 단독 제품 컷"
          body="지름 8cm · 15g — 어깨 주변, 둔부, 종아리처럼 한 지점을 찾을 때"
        />
        <Scene
          eyebrow="DOUBLE BALL"
          title="양옆을 받치는 더블볼"
          src="/assets/sync-2026-10-29/nova/massage-ball-set/double-product.webp"
          label="블랙 더블볼 단독 제품 컷"
          body="8×16cm · 30g — 목 뒤와 등처럼 중앙을 비우고 양옆에 닿을 때"
        />
      </div>
    </section>
  );
}

function Essential() {
  return (
    <section className="bg-white px-12 py-40">
      <Eyebrow>SIMPLY ESSENTIAL</Eyebrow>
      <h2 className="mt-9 text-[64px] font-bold leading-[1.16] tracking-[-0.035em] text-[#111827]">
        필요한 모양만,
        <br />
        <Gradient>두 개로 나눠 담았습니다.</Gradient>
      </h2>
      <PhotoSlot className="mt-24" aspect="3 / 4" label="싱글볼과 더블볼이 나란히 놓인 전체 제품 컷" />
      <p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">
        복잡한 조절 장치나 전원 없이, 필요한 곳에 놓고 몸을 기대는 구조에
        집중했습니다. 한 곳을 찾는 싱글볼과 중앙을 비우고 양옆을 받치는
        더블볼, 두 가지면 일상의 뻐근함에 간결하게 대응할 수 있습니다.
      </p>
    </section>
  );
}

function Scene({
  eyebrow,
  title,
  src,
  label,
  body,
}: {
  eyebrow: string;
  title: string;
  src: string;
  label: string;
  body: string;
}) {
  return (
    <article className="rounded-[28px] border border-[#d8e2ea] bg-[#f7f7f7] p-5">
      <StoryImage src={src} alt={label} compact />
      <p className="mt-7 text-[16px] font-bold tracking-[0.12em] text-[#376d9f]">{eyebrow}</p>
      <h3 className="mt-4 text-[28px] font-bold text-[#111827]">{title}</h3>
      <p className="mt-4 text-[20px] font-medium leading-[1.55] text-[#6e6e73]">{body}</p>
    </article>
  );
}

function Comparison() {
  const rows = [
    ["한 곳을 집중해서", "O", "△"],
    ["양옆을 동시에", "X", "O"],
    ["어깨·둔부·종아리", "O", "△"],
    ["목 뒤·등·허리 양옆", "△", "O"],
    ["벽과 바닥에서 사용", "O", "O"],
  ] as const;

  return (
    <section className="bg-white px-10 py-36">
      <Title>
        <Gradient>Nova Massage Ball Set.</Gradient>
        <br />
        두 가지가 필요한 이유.
      </Title>
      <div className="mt-20 overflow-hidden rounded-[28px] border border-[#d2d2d7]">
        <table className="w-full table-fixed border-collapse text-center">
          <caption className="sr-only">싱글볼과 더블볼 사용 방식 비교</caption>
          <thead>
            <tr className="bg-[#f5f5f7]">
              <th className="w-[44%] px-3 py-7 text-[21px]">사용 방식</th>
              <th className="border-l border-[#d2d2d7] px-2 text-[20px] leading-tight">
                싱글볼
              </th>
              <th className="border-l border-[#c9d8e6] bg-[#edf3f8] px-2 text-[20px] leading-tight text-[#284f73]">
                더블볼
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, single, double]) => (
              <tr key={label} className="border-t border-[#d2d2d7]">
                <th className="px-3 py-7 text-[20px] font-semibold leading-snug">
                  {label}
                </th>
                <td className={`border-l border-[#d2d2d7] px-3 py-7 text-[34px] font-bold ${single === "O" ? "text-[#376d9f]" : single === "△" ? "text-[#7895ae]" : "text-[#a1a1a6]"}`}>
                  {single}
                </td>
                <td className={`border-l border-[#c9d8e6] bg-[#f3f7fa] px-3 py-7 text-[34px] font-bold ${double === "O" ? "text-[#284f73]" : "text-[#7895ae]"}`}>
                  {double}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 text-center text-[17px] font-medium leading-[1.5] text-[#86868b]">
        대표적인 사용 방식을 기준으로 정리했으며, 느껴지는 자극은 부위와
        자세에 따라 달라질 수 있습니다.
      </p>
    </section>
  );
}

function Feature({ title, src, label, body, extra }: { title: ReactNode; src: string; label: string; body: string; extra?: ReactNode }) {
  return (
    <section className="bg-white px-12 pb-36 pt-32">
      <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-[3px] border-[#376d9f]">
        <Check className="h-9 w-9 text-[#376d9f]" strokeWidth={3.5} />
      </div>
      <h2 className="mt-10 text-[63px] font-bold leading-[1.15] tracking-[-0.032em] text-[#111827]">{title}</h2>
      <StoryImage className="mt-24" src={src} alt={label} />
      <p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">{body}</p>
      {extra}
    </section>
  );
}

function BallFeatures() {
  const features = [
    {
      number: "01",
      eyebrow: "SINGLE BALL",
      title: "콕 집어 누르고 싶은 곳엔, 싱글볼.",
      body: "둥근 공 하나가 몸과 벽 사이에서 원하는 지점을 찾아줍니다. 어깨 주변이나 둔부, 종아리처럼 위치를 조금씩 옮겨가며 쓰고 싶은 곳에 잘 맞습니다.",
      note: "벽에서는 가볍게 · 바닥에서는 더 또렷하게",
      photo: "촬영 — 벽과 어깨 사이에 싱글볼을 두고 사용하는 장면",
    },
    {
      number: "02",
      eyebrow: "DOUBLE BALL",
      title: "가운데는 비우고, 양옆을 나란히.",
      body: "두 개의 공 사이에 생긴 홈을 몸의 중앙에 맞추면 목 뒤와 등, 허리 주변의 양옆을 함께 받칠 수 있습니다. 척추나 뼈 위를 직접 누르지 않고 천천히 움직여 주세요.",
      note: "목 뒤 주변 · 등 양옆 · 허리 주변",
      photo: "촬영 — 등 중앙을 피해 더블볼의 두 구가 양옆에 닿는 사용 장면",
    },
  ] as const;

  return (
    <section className="bg-white px-12 py-40">
      <div className="flex flex-col gap-48">
        {features.map(({ number, eyebrow, title, body, note, photo }) => (
          <article key={number}>
            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-[3px] border-[#376d9f]">
              <span className="text-[22px] font-bold text-[#376d9f]">{number}</span>
            </div>
            <p className="mt-10 text-[21px] font-bold tracking-[0.1em] text-[#376d9f]">
              {eyebrow}
            </p>
            <h3 className="mt-7 text-[63px] font-bold leading-[1.15] tracking-[-0.032em] text-[#111827]">
              {title}
            </h3>
            <PhotoSlot className="mt-24" aspect="3 / 4" label={photo} />
            <p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">
              {body}
            </p>
            <p className="mt-5 text-[20px] font-semibold text-[#376d9f]">{note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function BodyGuide() {
  const guides = [
    {
      number: "01",
      title: "싱글볼로 한 곳을",
      body: "어깨 주변 · 종아리 · 발바닥",
      color: "#4d9de0",
    },
    {
      number: "02",
      title: "더블볼로 양옆을",
      body: "목 뒤 · 등 양옆 · 둔부 양옆",
      color: "#e27d60",
    },
  ] as const;

  return (
    <section className="bg-white px-12 py-40">
      <Title>
        <Gradient>부위에 따라 고르는 두 가지 모양.</Gradient>
      </Title>
      <p className="mx-auto mt-8 max-w-[720px] text-center text-[26px] font-medium leading-[1.6] text-[#6e6e73]">
        싱글볼과 더블볼, 부위에 맞는 사용 위치를 확인해 보세요.
      </p>

      <div className="mt-20 grid grid-cols-2 gap-5">
        <figure className="relative overflow-hidden rounded-[28px] border border-[#dedede] bg-[#f7f7f7] p-7 text-center">
          <object
            data="/assets/sync-2026-10-29/nova/battle-rope/muscle-map/man-front.svg"
            type="image/svg+xml"
            aria-label="마사지볼 사용 부위 앞면 인체도"
            className="h-[480px] w-full grayscale opacity-45"
          />
          <BodyDot className="left-[34%] top-[25%]" label="어깨" tone="single" />
          <BodyDot className="right-[36%] top-[69%]" label="종아리" tone="single" />
          <figcaption className="text-[20px] font-semibold text-[#6e6e73]">
            앞면
          </figcaption>
        </figure>
        <figure className="relative overflow-hidden rounded-[28px] border border-[#dedede] bg-[#f7f7f7] p-7 text-center">
          <object
            data="/assets/sync-2026-10-29/nova/battle-rope/muscle-map/man-back.svg"
            type="image/svg+xml"
            aria-label="마사지볼 사용 부위 뒷면 인체도"
            className="h-[480px] w-full grayscale opacity-45"
          />
          <BodyDot className="left-[34%] top-[24%]" label="어깨" tone="single" />
          <BodyDot className="left-[45.5%] top-[19%]" label="목 뒤 왼쪽" tone="double" />
          <BodyDot className="left-[54.5%] top-[19%]" label="목 뒤 오른쪽" tone="double" />
          <BodyDot className="left-[42.5%] top-[34%]" label="등 왼쪽" tone="double" />
          <BodyDot className="left-[57.5%] top-[34%]" label="등 오른쪽" tone="double" />
          <BodyDot className="left-[42.5%] top-[51%]" label="둔부 왼쪽" tone="double" />
          <BodyDot className="left-[57.5%] top-[51%]" label="둔부 오른쪽" tone="double" />
          <BodyDot className="right-[36%] top-[72%]" label="종아리" tone="single" />
          <figcaption className="text-[20px] font-semibold text-[#6e6e73]">
            뒷면
          </figcaption>
        </figure>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-5">
        {guides.map(({ number, title, body, color }) => (
          <div key={number} className="rounded-[26px] border border-[#c9d8e6] bg-[#edf3f8] p-8">
            <div className="flex items-center gap-4">
              <span
                className="h-4 w-4 shrink-0 rounded-full"
                style={{ backgroundColor: color }}
                aria-hidden
              />
              <p className="text-[26px] font-bold tracking-[-0.02em]">
                {number}. {title}
              </p>
            </div>
            <p className="mt-3 pl-8 text-[19px] font-medium leading-[1.55] text-[#6e6e73]">
              {body}
            </p>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-[740px] text-center text-[17px] font-medium leading-[1.55] text-[#8f9aa8]">
        척추와 관절, 뼈가 돌출된 부위는 직접 누르지 마세요. 통증이나 저림이
        느껴지면 즉시 사용을 중단해 주세요.
      </p>
    </section>
  );
}

function BodyDot({
  className,
  label,
  tone,
}: {
  className: string;
  label: string;
  tone: "single" | "double";
}) {
  return (
    <div className={`absolute ${className} -translate-x-1/2 -translate-y-1/2`}>
      <span
        className={`block h-7 w-7 rounded-full border-[5px] border-white shadow-[0_0_0_10px_rgba(255,255,255,.12)] ${
          tone === "single" ? "bg-[#4d9de0]" : "bg-[#e27d60]"
        }`}
        aria-label={`${label} 추천 위치`}
      />
    </div>
  );
}

function UsageGuide() {
  const steps = [
    ["01", "모양 고르기", "/assets/sync-2026-10-29/nova/massage-ball-set/routine-select.webp", "손으로 싱글볼을 고르는 장면"],
    ["02", "몸에 놓기", "/assets/sync-2026-10-29/nova/massage-ball-set/routine-single.webp", "벽과 어깨 사이에 싱글볼을 놓는 장면"],
    ["03", "천천히 움직이기", "/assets/sync-2026-10-29/nova/massage-ball-set/routine-double.webp", "더블볼을 등 중앙에 수평으로 놓는 장면"],
  ] as const;

  return (
    <section className="bg-white px-12 py-40">
      <Eyebrow>3-STEP ROUTINE</Eyebrow>
      <h2 className="mt-9 text-[64px] font-bold leading-[1.16] tracking-[-0.04em] text-[#111827]">
        고르고, 놓고,
        <br />
        <Gradient>천천히.</Gradient>
      </h2>
      <div className="mt-24 grid grid-cols-3 gap-5">
        {steps.map(([number, title, src, alt]) => (
          <article key={number}>
            <StoryImage src={src} alt={alt} compact />
            <div className="mt-5 flex items-center gap-4 rounded-[24px] border border-[#c9d8e6] bg-[#edf3f8] px-5 py-7">
              <p className="shrink-0 text-[16px] font-bold tracking-[0.12em] text-[#376d9f]">{number}</p>
              <h3 className="whitespace-nowrap text-[23px] font-bold text-[#111827]">{title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function MaterialStory() {
  return (
    <section className="bg-transparent px-12 py-40">
      <Eyebrow>MATERIAL · EPP</Eyebrow>
      <h2 className="mt-9 text-[64px] font-bold leading-[1.16] tracking-[-0.04em] text-[#111827]">
        가볍지만 흐트러지지 않게,
        <br />
        <Gradient>단단한 EPP.</Gradient>
      </h2>
      <StoryImage
        className="mt-24"
        src="/assets/sync-2026-10-29/nova/massage-ball-set/epp-macro.webp"
        alt="검은색 EPP 알갱이 표면을 확대한 모습"
      />
      <p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">
        EPP는 공기를 품은 알갱이를 단단하게 결합한 소재입니다. 손에
        들었을 때는 가볍고, 몸을 기대었을 때는 형태가 쉽게 무너지지
        않아 필요한 곳을 받쳐줍니다.
      </p>
    </section>
  );
}

function LightweightStory() {
  return (
    <section className="bg-transparent px-12 py-40">
      <Eyebrow>LIGHTWEIGHT</Eyebrow>
      <h2 className="mt-9 text-[64px] font-bold leading-[1.16] tracking-[-0.04em] text-[#111827]">
        두 개를 챙겨도,
        <br />
        <Gradient>겨우 45g.</Gradient>
      </h2>
      <div className="mt-24 overflow-hidden rounded-[28px] border border-[#d8e2ea] bg-white">
        <Image
          src="/assets/sync-2026-10-29/nova/massage-ball-set/weight.webp"
          alt="저울 위에서 각각 15g과 30g을 표시하는 싱글볼과 더블볼"
          width={971}
          height={1619}
          sizes="764px"
          className="block h-auto w-full"
        />
      </div>
      <p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">
        싱글볼은 약 15g, 더블볼은 약 30g. 합쳐도 약 45g이라 책상
        옆에 두기도, 운동 가방에 챙기기도 부담이 적습니다. 큰 준비
        없이 손이 가도록, 크기와 무게를 작게 남겼습니다.
      </p>
      <div className="mt-14 grid grid-cols-2 gap-5">
        <Metric value="15g" label="싱글볼" />
        <Metric value="30g" label="더블볼" />
      </div>
    </section>
  );
}

function DetailGrid() {
  const details = [
    ["SINGLE SPHERE", "한 지점을 찾는 둥근 구", "촬영 — 싱글볼의 완전한 구 형태 클로즈업"],
    ["CENTER GROOVE", "몸의 가운데를 비우는 홈", "촬영 — 더블볼 중앙 홈을 보여주는 측면 클로즈업"],
    ["EPP TEXTURE", "손과 몸에 닿는 알갱이 질감", "촬영 — EPP 표면 입자가 선명한 매크로 컷"],
    ["BLACK FINISH", "운동 공간에 자연스러운 블랙", "촬영 — 밝은 배경 위 블랙 두 볼의 색감 상세 컷"],
  ] as const;

  return (
    <section className="bg-transparent px-12 py-40">
      <Eyebrow>DESIGN DETAIL 03</Eyebrow>
      <h2 className="mt-9 text-[64px] font-bold leading-[1.16] tracking-[-0.04em] text-[#111827]">
        작은 형태 안에,
        <br />
        <Gradient>쓰임을 분명하게.</Gradient>
      </h2>
      <div className="mt-24 grid grid-cols-2 gap-6">
        {details.map(([name, title, photo]) => (
          <article key={name}>
            <PhotoSlot aspect="1 / 1" label={photo} compact />
            <div className="mt-5 rounded-[24px] border border-[#c9d8e6] bg-[#e8f0f6] p-7">
              <p className="text-[20px] font-bold text-[#284f73]">
                {name}
              </p>
              <h3 className="mt-3 text-[18px] font-medium text-[#6e6e73]">
                {title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Audience() {
  const items = [
    ["오래 앉아 있던 오후", "책상에서 일어났을 때 목 뒤와 어깨 주변이 묵직하게 느껴지는 순간", "촬영 — 업무를 마치고 벽에 기대 더블볼을 사용하는 장면"],
    ["운동을 마치고 돌아온 뒤", "둔부나 종아리처럼 오늘 유독 많이 쓴 곳을 천천히 살피는 시간", "촬영 — 운동 매트 위에서 싱글볼을 사용하는 장면"],
    ["가방에 하나 챙겨 나갈 때", "작은 싱글볼 하나만 넣어 운동 전후나 이동 중에도 이어가는 루틴", "촬영 — 작은 운동 가방에 싱글볼을 넣는 장면"],
    ["잠들기 전 잠깐", "거창하게 준비하지 않고 벽 앞에서 몇 분만 몸을 움직이는 시간", "촬영 — 침실 벽에서 더블볼을 사용하는 차분한 장면"],
  ] as const;

  return (
    <section className="bg-white px-12 py-40">
      <Title>
        이런 분께 잘 맞습니다.
      </Title>
      <p className="mx-auto mt-8 max-w-[720px] text-center text-[25px] font-medium leading-[1.6] text-[#6e6e73]">
        부위에 맞는 도구를 골라 짧게라도 바로 시작하고 싶은 분들입니다.
      </p>
      <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-16">
        {items.map(([title, body, photo]) => (
          <article key={title}>
            <PhotoSlot aspect="4 / 5" label={photo} compact />
            <h3 className="mt-7 text-[28px] font-bold leading-[1.3] tracking-[-0.02em] text-[#111827]">
              {title}
            </h3>
            <p className="mt-3 text-[20px] font-medium leading-[1.55] text-[#6e6e73]">
              {body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="bg-white px-10 pb-32 pt-40">
      <div className="mx-auto max-w-[780px]">
        <div
          className="flex items-center justify-center gap-4"
          aria-label="별점 5점, 평점 5.0"
        >
          <p className="text-[34px] font-bold tracking-[-0.02em] text-[#1d1d1f]">5.0</p>
          <p className="text-[36px] font-bold tracking-[0.12em] text-[#F5B700]">★★★★★</p>
        </div>
        <h2 className="mt-6 text-center text-[58px] font-bold leading-tight tracking-[-0.025em] text-[#1d1d1f]">
          실제 구매자들의 솔직한 후기
        </h2>
        <p className="mt-5 text-center text-[22px] font-medium text-[#6e6e73]">
          먼저 사용해 본 분들의 솔직한 후기입니다.
        </p>
        <div className="mt-16 space-y-6">
          {customerReviews.map(({ source, review }) => (
            <article key={review} className="rounded-[28px] border border-[#dfe3e7] bg-[#f5f5f7] px-8 py-8">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <p className="text-[24px] font-bold text-[#1d1d1f]">5.0</p>
                  <p className="text-[24px] font-bold tracking-[0.08em] text-[#F5B700]">★★★★★</p>
                </div>
                <p className="text-[18px] font-medium text-[#86868b]">{source}</p>
              </div>
              <p className="mt-6 text-[24px] font-medium leading-[1.6] tracking-[-0.01em] text-[#6e6e73]">{review}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicePoints() {
  const items = [
    {
      Icon: RefreshCw,
      title: "7일 이내 무상 교환",
      body: "초기 불량은 수령 후 7일 이내 확인해 주시면 배송비 없이 교환해 드립니다.",
    },
    {
      Icon: PackageCheck,
      title: "싱글·더블 세트 구성",
      body: "지름 8cm 싱글볼 하나와 8 × 16cm 더블볼 하나를 함께 보내드립니다.",
    },
    {
      Icon: ShieldCheck,
      title: "전원 없이 바로 사용",
      body: "꺼내서 원하는 곳에 놓으면 준비가 끝납니다. 충전도 조립도 필요 없습니다.",
    },
    {
      Icon: Truck,
      title: "당일 발송",
      body: "평일 오후 4시 이전 주문은 당일 발송됩니다. (일부 품목 제외)",
    },
  ];

  return (
    <section className="bg-white px-12 py-32">
      <div className="grid grid-cols-2 gap-x-10 gap-y-14">
        {items.map(({ Icon, title, body }) => (
          <article key={title} className="flex gap-6">
            <Icon className="mt-1 h-12 w-12 shrink-0 text-[#376d9f]" strokeWidth={2} />
            <div>
              <h3 className="text-[27px] font-semibold tracking-[-0.02em] text-[#111827]">
                {title}
              </h3>
              <p className="mt-3 text-[21px] font-medium leading-[1.5] text-[#6e6e73]">
                {body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="relative min-h-[1440px] overflow-hidden bg-[#e8edf1] px-12 pb-36 pt-20">
      <Image
        src="/assets/sync-2026-10-29/nova/massage-ball-set/hero.webp"
        alt="밝은 운동 공간에 놓인 Nova 싱글 마사지볼과 더블 마사지볼"
        fill
        sizes="860px"
        className="object-cover object-center"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[42%]"
        style={{
          background:
            "linear-gradient(180deg,#ffffff 0%,rgba(255,255,255,.9) 30%,rgba(255,255,255,.48) 66%,transparent 100%)",
        }}
      />
      <div className="relative z-10 flex min-h-[1180px] flex-col text-center">
        <h2 className="text-[66px] font-bold leading-[1.17] tracking-[-0.04em] text-[#111827]">
          오늘 몸이 보내는 신호를,
          <br />
          그냥 넘기지 않도록.
        </h2>
        <p className="mt-9 text-[27px] font-medium leading-[1.6] text-[#526274]">
          한 곳은 싱글볼로, 양옆은 더블볼로.
          <br />
          필요한 곳에 맞춰 가볍게 시작하세요.
        </p>
        <div className="mt-auto translate-y-12">
          <p className="text-[51px] font-semibold tracking-[-0.03em] text-[#1f3448]">
            Nova Massage Ball Set
          </p>
          <p className="mt-4 text-[26px] font-medium text-[#526274]">
            Two shapes. Your daily reset.
          </p>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const questions = [
    ["싱글볼이랑 더블볼, 막상 받으면 뭘 먼저 써야 하나요?", "어깨나 종아리처럼 한 곳을 찾고 싶다면 싱글볼부터 써보세요. 등처럼 가운데는 피하고 양옆을 함께 누르고 싶을 때는 더블볼이 편합니다."],
    ["생각보다 딱딱해서 아프진 않나요?", "푹신한 공보다는 단단하게 받쳐주는 사용감입니다. 처음에는 얇은 옷을 입고 벽에서 살짝 기대는 정도로 시작하면 압력을 조절하기 쉽습니다."],
    ["등 뒤에 혼자 놓기 어렵지 않나요?", "한 손으로 원하는 위치에 볼을 댄 뒤 벽에 천천히 기대면 됩니다. 자리를 잡은 다음 손을 떼고 몸을 조금씩 움직여 주세요."],
    ["바닥에 누워서 사용해도 되나요?", "사용할 수 있지만 벽보다 체중이 많이 실려 자극이 훨씬 강하게 느껴질 수 있습니다. 벽 사용에 익숙해진 뒤 작은 범위로 천천히 움직여 주세요."],
    ["목이 뻐근할 때도 써도 되나요?", "목 앞쪽이나 뼈 위를 직접 누르지 말고, 더블볼을 목 뒤 양옆 근육에 가볍게 대는 정도로 사용해 주세요. 통증이나 저림이 느껴지면 바로 중단해야 합니다."],
    ["땀이 묻으면 물로 씻어도 되나요?", "물에 담그기보다는 마른 천이나 물기를 꼭 짠 부드러운 천으로 닦아 주세요. 닦은 뒤에는 그늘에서 완전히 말려 보관하면 됩니다."],
  ] as const;

  return (
    <section className="bg-white px-10 pb-36 pt-40">
      <InfoTitle>질문에 답해드립니다.</InfoTitle>
      <ul className="mt-24">
        {questions.map(([question, answer]) => (
          <li key={question} className="border-t border-[#d2d2d7] py-7 last:border-b">
            <div className="flex items-start justify-between gap-6">
              <p className="text-[28px] font-semibold leading-[1.35] tracking-[-0.02em] text-[#111827]">
                {question}
              </p>
              <ChevronDown className="mt-1.5 h-7 w-7 shrink-0 text-[#86868b]" strokeWidth={2.5} />
            </div>
            <p className="mt-4 pr-12 text-[22px] font-medium leading-[1.55] text-[#6e6e73]">
              {answer}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Size() {
  const rows = [
    ["싱글볼", "지름 약 8cm · 약 15g"],
    ["더블볼", "약 8 × 16cm · 약 30g"],
    ["세트 총중량", "약 45g"],
  ];

  return (
    <section className="bg-white px-10 pb-36 pt-32">
      <InfoTitle>사이즈</InfoTitle>
      <StoryImage
        className="mt-24"
        src="/assets/sync-2026-10-29/nova/massage-ball-set/size-guide.webp"
        alt="싱글볼 지름 8cm와 더블볼 8 × 16cm 크기 안내"
      />
      <Rows rows={rows} />
    </section>
  );
}

function Components() {
  return (
    <section className="bg-white px-10 pb-36 pt-32">
      <InfoTitle>구성품</InfoTitle>
      <StoryImage
        className="mt-24"
        src="/assets/sync-2026-10-29/nova/massage-ball-set/components.webp"
        alt="Nova 싱글 마사지볼 1개와 더블 마사지볼 1개"
      />
      <p className="mt-7 text-center text-[28px] font-semibold tracking-[-0.01em] text-[#111827]">
        싱글볼 ×1 · 더블볼 ×1
      </p>
    </section>
  );
}

function ProductInfo() {
  const rows = [
    ["제품명", "Nova Massage Ball Set"],
    ["제품 유형", "싱글볼·더블볼 마사지볼 세트"],
    ["색상", "블랙"],
    ["싱글볼 크기", "지름 약 8cm"],
    ["더블볼 크기", "약 8 × 16cm"],
    ["중량", "싱글볼 약 15g · 더블볼 약 30g"],
    ["재질", "EPP"],
    ["구성품", "싱글볼 1개 · 더블볼 1개"],
    ["제조자(수입자)", "보이드 투 노바"],
    ["품질보증기준", "관련 법령 및 소비자분쟁해결기준에 따름"],
    ["A/S 책임자와 전화번호", "010-6393-0907"],
  ];

  return (
    <section className="bg-white px-10 pb-36 pt-32">
      <InfoTitle>제품 정보</InfoTitle>
      <Rows rows={rows} />
    </section>
  );
}

function Notices() {
  return (
    <section className="bg-white px-10 pb-36 pt-32">
      <InfoTitle>기타 안내</InfoTitle>
      <div className="mx-auto mt-24 max-w-[720px] space-y-12">
        <Notice
          title="사용 시 주의사항"
          bullets={[
            "처음에는 벽에서 약한 압력과 느린 움직임으로 시작해 주세요.",
            "머리, 얼굴, 목 앞쪽, 척추와 관절, 뼈가 돌출된 부위에는 직접 사용하지 마세요.",
            "상처·염증·멍이 있거나 감각이 둔한 부위에는 사용하지 마세요.",
            "한 부위를 강한 압력으로 오래 누르지 말고 통증이나 저림이 느껴지면 즉시 중단해 주세요.",
            "임산부, 고령자 또는 관련 질환이 있는 분은 사용 전 전문가와 상담해 주세요.",
            "어린이의 손이 닿지 않는 곳에 보관해 주세요.",
          ]}
        />
        <Notice
          title="관리 방법"
          bullets={[
            "사용 후 마른 천 또는 물기를 꼭 짠 부드러운 천으로 표면을 닦아 주세요.",
            "강한 세제와 날카로운 도구 사용은 피해주세요.",
            "직사광선과 화기, 고온다습한 장소를 피해 충분히 건조한 뒤 보관해 주세요.",
          ]}
        />
        <Notice
          title="제품 안내"
          body="본 제품은 일상적인 셀프 마사지와 운동 전후 사용을 위한 생활용품으로 의료기기가 아닙니다. 질환의 진단·치료·예방 또는 통증 개선을 보장하지 않습니다."
        />
        <Notice
          title="수치 및 색상 안내"
          body="크기와 중량은 측정 방법에 따라 차이가 있을 수 있습니다. 화면과 촬영 환경에 따라 실제 블랙 색상과 EPP 표면 질감이 다르게 보일 수 있습니다."
        />
        <Notice
          title="A/S 안내"
          body="제품 초기 불량은 수령 후 7일 이내 확인해 주시면 교환 도와드립니다. 문의는 스토어 고객센터를 통해 접수해 주세요."
        />
        <Notice
          title="배송 안내"
          bullets={[
            "배송기간 — 평균 배송기간은 2~5일 (일부 품목은 출고지 및 반품지 주소가 다를 수 있음)",
            "발송 마감시간 — 평일 오후 4시 이전 주문건까지 당일 발송 (일부 품목 제외)",
            "제주도·도서산간 지역은 추가 배송비가 발생할 수 있습니다.",
          ]}
        />
        <ExchangeGuide />
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[28px] border border-[#d8e2ea] bg-white px-5 py-12 text-center shadow-[0_10px_30px_rgba(34,64,91,.06)]">
      <p className="whitespace-nowrap text-[48px] font-bold tracking-[-0.04em] text-[#284f73]">
        {value}
      </p>
      <p className="mt-4 text-[20px] font-semibold text-[#6e6e73]">{label}</p>
    </div>
  );
}

function StoryImage({
  src,
  alt,
  className = "",
  compact = false,
}: {
  src: string;
  alt: string;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[28px] border border-[#d8e2ea] bg-[#f1f1f1] ${className}`}
      style={{ aspectRatio: "3 / 4" }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={compact ? "240px" : "764px"}
        className="object-cover object-center"
      />
    </div>
  );
}

function PhotoSlot({
  aspect,
  label,
  className = "",
  compact = false,
  dark = false,
}: {
  aspect: string;
  label: string;
  className?: string;
  compact?: boolean;
  dark?: boolean;
}) {
  return (
    <div
      aria-label={`사진 자리: ${label}`}
      data-compact={compact ? "" : undefined}
      className={`w-full overflow-hidden rounded-[28px] border ${
        dark
          ? "border-[#cbd6df] bg-[#e7edf2]"
          : "border-[#dedede] bg-[#f1f1f1]"
      } ${className}`}
      style={{ aspectRatio: aspect }}
    />
  );
}

function Rows({ rows }: { rows: string[][] }) {
  return (
    <dl className="mx-auto mt-24 max-w-[720px]">
      {rows.map(([label, value]) => (
        <div
          key={label}
          className="flex gap-8 border-b border-[#d2d2d7] py-6 first:border-t"
        >
          <dt className="w-[220px] shrink-0 text-[22px] font-semibold text-[#111827]">
            {label}
          </dt>
          <dd className="flex-1 text-[22px] font-medium leading-snug text-[#6e6e73]">
            {value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function Notice({
  title,
  body,
  bullets,
}: {
  title: string;
  body?: string;
  bullets?: string[];
}) {
  return (
    <div>
      <h3 className="text-[28px] font-semibold text-[#111827]">{title}</h3>
      {body ? (
        <p className="mt-4 text-[22px] font-medium leading-snug text-[#6e6e73]">
          {body}
        </p>
      ) : null}
      {bullets ? (
        <ul className="mt-4 space-y-2 text-[22px] font-medium leading-snug text-[#6e6e73]">
          {bullets.map((item) => (
            <li key={item} className="flex gap-3">
              <span>·</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function ExchangeGuide() {
  const groups = [
    {
      title: "교환·반품 가능",
      items: [
        "상품 수령 후 7일 이내 구매한 몰에서 교환 또는 반품을 신청한 경우",
        "구매자의 단순 변심은 상품 수령 후 7일 이내 가능하며 반품 배송비가 발생할 수 있습니다.",
        "상품 초기 불량에 대한 교환과 반품은 무료이며 그 외에는 왕복 택배비가 발생할 수 있습니다.",
      ],
    },
    {
      title: "교환·반품 불가",
      items: [
        "교환 또는 반품 요청 기간이 지난 경우",
        "구매자 책임으로 상품이나 포장이 훼손된 경우",
        "사용 흔적으로 상품 가치가 현저히 감소한 경우",
        "싱글볼 또는 더블볼 등 구성품이 누락된 경우",
      ],
    },
  ];

  return (
    <div>
      <h3 className="text-[28px] font-semibold text-[#111827]">교환·반품 안내</h3>
      <p className="mt-4 text-[22px] font-medium leading-snug text-[#6e6e73]">
        교환 및 반품 접수는 구매하신 몰에서 신청해 주세요.
      </p>
      {groups.map(({ title, items }) => (
        <div key={title} className="mt-8">
          <p className="text-[22px] font-semibold text-[#111827]">{title}</p>
          <ul className="mt-3 space-y-2 text-[22px] font-medium leading-snug text-[#6e6e73]">
            {items.map((item) => (
              <li key={item} className="flex gap-3">
                <span>·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-center text-[60px] font-bold leading-[1.18] tracking-[-0.04em] text-[#111827]">
      {children}
    </h2>
  );
}

function InfoTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-center text-[58px] font-bold leading-tight tracking-[-0.03em] text-[#111827]">
      {children}
    </h2>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[22px] font-bold tracking-[0.1em] text-[#376d9f]">
      {children}
    </p>
  );
}

function Gradient({ children }: { children: ReactNode }) {
  return (
    <span
      className="bg-clip-text text-transparent"
      style={{ backgroundImage: productGradient }}
    >
      {children}
    </span>
  );
}
