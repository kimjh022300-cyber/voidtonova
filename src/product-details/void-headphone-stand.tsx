import { BrandFrame } from "@/components/product-detail/brand-frame";
import Image from "next/image";
import type { ReactNode } from "react";
import {
  Check,
  ChevronDown,
  Gamepad2,
  Headphones,
  Music2,
} from "lucide-react";

const features = [
  {
    title: <>헤드폰은 위로.<br />작은 것들은 아래로.</>,
    label: "헤드폰은 상단에 걸고 무선 이어폰과 케이블은 하부 트레이에 정리한 사진",
    imageSrc: "/assets/void/headphone-stand/feature-tray.webp",
    body: "헤드폰은 상단 받침에, 무선 이어폰과 충전 케이블처럼 흩어지기 쉬운 작은 소품은 하부 트레이에 모아두세요. 하나의 스탠드로 두 개의 정리 공간을 완성합니다.",
  },
  {
    title: <>넓게 받치고,<br />자연스럽게 걸다.</>,
    label: "이중 곡면 목재 받침이 헤드밴드를 넓게 지지하는 사진",
    imageSrc: "/assets/void/headphone-stand/feature-curved-rest-v2.webp",
    body: "좁은 모서리에 걸치는 대신, 헤드밴드의 곡선을 따라 설계한 넓은 이중 곡면 받침이 자연스럽게 지지합니다. 접촉이 한곳에 집중되는 것을 줄여 사용 후에도 헤드폰을 편안하게 걸어둘 수 있습니다.",
  },
  {
    title: <>넓은 원목 베이스.<br />원하는 자리에 가볍게.</>,
    label: "넓은 원목 베이스의 형태와 넓이를 보여주는 사진",
    imageSrc: "/assets/void/headphone-stand/feature-wide-base.webp",
    body: "넓은 사각형 원목 베이스가 헤드폰 거치대의 하부를 받쳐줍니다. 평소에는 보호필름을 떼지 않고 책상과 선반 위 원하는 자리에 놓아 사용하세요.",
  },
  {
    title: <>필요한 순간에만,<br />네 곳을 단단하게.</>,
    label: "원목 베이스 하부에 보호필름이 붙은 4점 고정 패드 사진",
    imageSrc: "/assets/void/headphone-stand/feature-optional-fix.webp",
    body: "헤드폰을 한 손으로 자주 꺼내거나 더 단단한 고정이 필요하다면, 하부 네 곳의 보호필름을 떼고 책상에 부착하세요. 고정이 필요하지 않을 때는 보호필름을 유지한 채로 사용할 수 있습니다.",
  },
] as const;

export default function VoidHeadphoneStandPage() {
  return (
    <BrandFrame brand="void">
      <section className="relative min-h-[1440px] overflow-hidden bg-[#f2f1ef]">
        <Image
          src="/assets/void/headphone-stand/hero.webp"
          alt="햇살이 드는 책상 위 월넛 우드 헤드폰 거치대와 화이트 헤드폰"
          fill
          preload
          sizes="860px"
          className="object-cover object-center"
        />
        <Fade position="top" />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[32%]"
          style={{
            background:
              "linear-gradient(0deg,rgba(35,24,18,.48) 0%,rgba(35,24,18,.14) 58%,transparent 100%)",
          }}
        />
        <div className="relative z-10 flex min-h-[1440px] flex-col items-center px-8 pb-24 pt-16 text-center">
          <p className="text-[39px] font-semibold text-[#493527]">Void Headphone Stand</p>
          <h1 className="mt-8 text-[76px] font-bold leading-[1.08] tracking-[-0.045em]">
            헤드폰을 위한 자리.
          </h1>
          <p className="mt-auto text-[29px] font-medium leading-[1.6] text-[#fffaf5] [text-shadow:0_2px_14px_rgba(35,24,18,0.55)]">
            월넛 톤 목재와 블랙 알루미늄으로 완성한<br />
            헤드폰 스탠드와 데스크 트레이.
          </p>
        </div>
      </section>

      <section className="relative aspect-[3/4] overflow-hidden bg-white">
        <Image
          src="/assets/void/headphone-stand/product-overview.webp"
          alt="햇살이 드는 책상 위에 놓인 월넛 우드 헤드폰 거치대"
          fill
          sizes="860px"
          className="object-cover object-center"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[24%]"
          style={{
            background:
              "linear-gradient(0deg,#f8f7f5 0%,rgba(248,247,245,.78) 30%,rgba(248,247,245,.28) 65%,transparent 100%)",
          }}
        />
        <div className="absolute inset-0 z-10 flex flex-col items-center px-8 pb-16 pt-20 text-center">
          <h2 className="text-[68px] font-bold tracking-[-0.035em]">
            <Gradient>Void Headphone Stand.</Gradient>
          </h2>
          <p className="mt-auto text-[31px] font-semibold text-[#544638]">
            걸어두고, 모아두고, 공간을 완성하다.
          </p>
        </div>
      </section>

      <AtAGlance />
      <BeforeAfter />

      <section className="bg-white px-12 pb-36 pt-40">
        <Feature {...features[0]} />
      </section>
      <section className="bg-white px-12 pb-36 pt-24">
        <Feature {...features[1]} />
      </section>
      <section className="bg-white px-12 pb-36 pt-24">
        <Feature {...features[2]} />
        <div className="mt-14">
          <Metric value="WIDE BASE" label="넓은 원목 베이스" />
        </div>
      </section>
      <section className="bg-white px-12 pb-36 pt-24">
        <Feature {...features[3]} />
        <div className="mt-14">
          <Metric value="OPTIONAL 4-POINT" label="선택형 4점 고정" />
        </div>
      </section>

      <Compatibility />
      <DesignDetails />
      <RecommendedFor />
      <SellerReviews />

      <section className="relative min-h-[1440px] overflow-hidden bg-[#f1eeea] px-12 pb-40 pt-16">
        <Image
          src="/assets/void/headphone-stand/hero.webp"
          alt="햇살이 드는 책상 위 월넛 우드 헤드폰 거치대와 화이트 헤드폰"
          fill
          sizes="860px"
          className="object-cover object-center"
        />
        <Fade position="top" />
        <div className="relative z-10 flex min-h-[1160px] flex-col text-center">
          <h2 className="text-[68px] font-bold leading-[1.15] tracking-[-0.035em]">
            <Gradient>Void Headphone Stand</Gradient>
          </h2>
          <p className="mt-auto whitespace-nowrap text-[28px] font-semibold leading-[1.6] text-[#5f5a55]">
            좋은 소리에도, 돌아갈 자리가 필요하니까.
          </p>
        </div>
      </section>

      <Faq />
      <Size />
      <Components />
      <ProductInfo />
      <Notices />
    </BrandFrame>
  );
}

function AtAGlance() {
  const items = [
    ["CURVED REST", "넓은 곡면 받침"],
    ["2-IN-1", "거치 + 소품 수납"],
    ["2 MATERIALS", "원목 + 알루미늄"],
    ["4-POINT FIX", "선택형 4점 고정"],
    ["WALNUT TONE", "차분한 월넛 디자인"],
    ["FREE STANDING", "원하는 곳에 배치"],
  ];

  return (
    <section className="bg-[#f8f7f5] px-12 py-36">
      <Title>
        한눈에 보는<br />
        <Gradient>Void Headphone Stand.</Gradient>
      </Title>
      <div className="mt-20 grid grid-cols-2 gap-6">
        {items.map(([value, label]) => (
          <Metric key={label} value={value} label={label} />
        ))}
      </div>
    </section>
  );
}

function BeforeAfter() {
  return (
    <section className="bg-white px-12 py-40">
      <Title>
        헤드폰을 눕혀두던 책상에서,<br />
        <Gradient>돌아갈 자리가 있는 책상으로.</Gradient>
      </Title>
      <p className="mx-auto mt-8 max-w-[700px] text-center text-[25px] font-medium leading-[1.6] text-[#6e6e73]">
        자주 쓰는 헤드폰일수록 아무 곳에나 내려놓기 쉽습니다. 전용 자리를 만들면 책상은 더 정돈되고, 다시 사용할 때도 자연스럽게 손이 닿습니다.
      </p>
      <div className="mt-20 grid grid-cols-2 gap-6">
        <article>
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[28px] border border-[#e5e1dc]">
            <Image
              src="/assets/void/headphone-stand/before-desk.webp"
              alt="햇살이 드는 책상 위에 헤드폰을 눌혀둔 사용 전 모습"
              fill
              sizes="370px"
              className="object-cover object-center"
            />
          </div>
          <p className="mt-7 text-center text-[19px] font-bold tracking-[0.12em] text-[#86868b]">BEFORE</p>
          <h3 className="mt-3 text-center text-[29px] font-bold">놓인 곳이 곧 보관 장소</h3>
        </article>
        <article>
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[28px] border border-[#e5e1dc]">
            <Image
              src="/assets/void/headphone-stand/after-stand.webp"
              alt="월넛 우드 거치대에 헤드폰을 걸어 정돈한 사용 후 모습"
              fill
              sizes="370px"
              className="object-cover object-center"
            />
          </div>
          <p className="mt-7 text-center text-[19px] font-bold tracking-[0.12em] text-[#8a6246]">WITH VOID</p>
          <h3 className="mt-3 text-center text-[29px] font-bold">헤드폰을 위한 정해진 자리</h3>
        </article>
      </div>
    </section>
  );
}

function Feature({
  title,
  label,
  body,
  imageSrc,
}: {
  title: ReactNode;
  label: string;
  body: string;
  imageSrc?: string;
}) {
  return (
    <div>
      <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-[3px] border-[#8a6246]">
        <Check className="h-9 w-9 text-[#8a6246]" strokeWidth={3.5} />
      </div>
      <h2 className="mt-10 text-[63px] font-bold leading-[1.15] tracking-[-0.032em]">
        {title}
      </h2>
      {imageSrc ? (
        <div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px] border border-[#e5e1dc]">
          <Image
            src={imageSrc}
            alt={label}
            fill
            sizes="764px"
            className="object-cover object-center"
          />
        </div>
      ) : (
        <Photo className="mt-24" label={label} />
      )}
      <p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">
        {body}
      </p>
    </div>
  );
}

function Compatibility() {
  const cases = [
    {
      I: Music2,
      title: "오버이어",
      body: "넓은 이어컵의 음악 감상용 헤드폰",
    },
    {
      I: Headphones,
      title: "온이어",
      body: "가볍게 사용하는 데일리 헤드폰",
    },
    {
      I: Gamepad2,
      title: "게이밍",
      body: "마이크가 결합된 게이밍 헤드셋",
    },
  ];

  return (
    <section className="bg-white px-12 pb-40 pt-24">
      <Title>
        하나의 형태로,<br />
        <Gradient>다양한 헤드폰을 자연스럽게.</Gradient>
      </Title>
      <div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px] border border-[#e5e1dc]">
        <Image
          src="/assets/void/headphone-stand/headphone-compatibility.webp"
          alt="월넛 우드 거치대에 화이트 오버이어 헤드폰을 걸어둔 모습"
          fill
          sizes="764px"
          className="object-cover object-center"
        />
      </div>
      <div className="mt-14 grid grid-cols-3 gap-5">
        {cases.map(({ I, title, body }) => (
          <article
            key={title}
            className="rounded-[28px] border border-[#e7e1db] bg-[#f8f5f2] px-4 py-10 text-center"
          >
            <I className="mx-auto h-12 w-12 text-[#8a6246]" />
            <h3 className="mt-6 text-[27px] font-bold text-[#493527]">{title}</h3>
            <p className="mt-3 text-[17px] font-medium leading-[1.45] text-[#6e6259]">
              {body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function DesignDetails() {
  const touchDetails = [
    {
      src: "/assets/void/headphone-stand/feature-curved-rest-v2.webp",
      alt: "헤드밴드를 넓게 받치는 이중 곡면 원목 받침",
    },
    {
      src: "/assets/void/headphone-stand/feature-wide-base.webp",
      alt: "둥글게 마감한 월넛 톤 원목 트레이 모서리",
    },
    {
      src: "/assets/void/headphone-stand/design-wood-metal.webp",
      alt: "원목 받침과 베이스 사이를 잇는 블랙 알루미늄 지지봉",
    },
    {
      src: "/assets/void/headphone-stand/feature-optional-fix.webp",
      alt: "베이스 하부 네 곳에 부착한 선택형 고정 패드",
    },
  ];

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg,#fff 0%,#f8f5f2 5%,#f8f5f2 95%,#fff 100%)",
      }}
    >
      <section className="bg-transparent px-12 py-40">
        <Eyebrow>DESIGN DETAIL 01</Eyebrow>
        <h2 className="mt-9 text-[64px] font-bold leading-[1.16] tracking-[-0.035em]">
          책상 위에 남는,<br />
          <Gradient>깊은 월넛 톤.</Gradient>
        </h2>
        <div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px] border border-[#e5e1dc]">
          <Image
            src="/assets/void/headphone-stand/design-walnut-desk.webp"
            alt="월넛 톤 데스크 액세서리로 구성한 따뜻한 작업 공간"
            fill
            sizes="764px"
            className="object-cover object-center"
          />
        </div>
        <p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">
          따뜻한 월넛 톤과 자연스러운 나뭇결이 책상 위에 차분한 인상을 더합니다. 헤드폰을 사용하고 있을 때도, 자리를 비운 뒤에도 공간에 자연스럽게 남는 소재입니다.
        </p>
        <div className="mt-12 flex items-center gap-6 rounded-[28px] border border-[#e5dcd4] bg-[#f3efeb] p-8">
          <span
            className="h-20 w-20 shrink-0 rounded-full border border-[#6f4b35]"
            style={{
              backgroundImage:
                "repeating-radial-gradient(ellipse at 22% 48%,rgba(232,196,154,.24) 0 2px,transparent 3px 8px),linear-gradient(135deg,#382116 0%,#76503a 48%,#4a2d1e 100%)",
            }}
          />
          <div>
            <p className="text-[25px] font-bold">Walnut Tone Wood</p>
            <p className="mt-2 text-[20px] font-medium text-[#6e6e73]">
              짙은 브라운과 자연스러운 나뭇결
            </p>
          </div>
        </div>
      </section>

      <section className="bg-transparent px-12 py-40">
        <Eyebrow>DESIGN DETAIL 02</Eyebrow>
        <h2 className="mt-9 text-[64px] font-bold leading-[1.16] tracking-[-0.035em]">
          원목의 온기와,<br />
          <Gradient>블랙 메탈의 선.</Gradient>
        </h2>
        <div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px] border border-[#e5e1dc]">
          <Image
            src="/assets/void/headphone-stand/design-wood-metal.webp"
            alt="월넛 톤 목재 받침과 베이스, 블랙 알루미늄 지지봉의 소재 대비"
            fill
            sizes="764px"
            className="object-cover object-center"
          />
        </div>
        <p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">
          헤드폰과 소품이 닿는 부분에는 따뜻한 목재를, 구조를 세우는 중심에는 슬림한 블랙 알루미늄을 배치했습니다. 부드러운 나뭇결과 단정한 금속 선이 하나의 균형을 이룹니다.
        </p>
        <div className="mt-14 grid grid-cols-2 gap-5">
          <MaterialCard
            eyebrow="WOOD"
            title="월넛 톤 목재"
            body="공간에 따뜻함을 더하는 받침과 베이스"
          />
          <MaterialCard
            eyebrow="ALUMINUM"
            title="블랙 알루미늄"
            body="형태를 곧게 세우는 슬림한 지지봉"
          />
        </div>
      </section>

      <section className="bg-transparent px-12 py-40">
        <Eyebrow>DESIGN DETAIL 03</Eyebrow>
        <h2 className="mt-9 text-[64px] font-bold leading-[1.16] tracking-[-0.035em]">
          보이는 면보다,<br />
          <Gradient>손이 닿는 곳까지.</Gradient>
        </h2>
        <div className="mt-24 grid grid-cols-2 gap-6">
          {touchDetails.map(({ src, alt }) => (
            <div
              key={src}
              className="relative aspect-[3/4] w-full overflow-hidden rounded-[28px] border border-[#e5e1dc]"
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="382px"
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>
        <p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">
          헤드밴드가 닿는 곡면, 소품을 담는 트레이의 둥근 모서리, 슬림하게 이어지는 금속 지지봉과 필요할 때 사용하는 4점 고정 패드까지. 자주 보고 사용하는 부분을 하나의 톤으로 정돈했습니다.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-5">
          {[
            ["Dual Curve", "헤드밴드를 넓게 받치는 곡면"],
            ["Rounded Tray", "소품을 담는 부드러운 모서리"],
            ["Metal Line", "단정하게 이어지는 지지 구조"],
            ["Optional Fix", "보호필름을 떼어 사용하는 4점 고정"],
          ].map(([title, body]) => (
            <div
              key={title}
              className="rounded-[24px] border border-[#e5dcd4] bg-[#f3efeb] p-7"
            >
              <p className="text-[22px] font-bold text-[#493527]">{title}</p>
              <p className="mt-3 text-[18px] font-medium text-[#6e6e73]">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function RecommendedFor() {
  const people = [
    {
      scene: "책상을 깔끔하게 정리하고 싶은 분",
      line: "헤드폰과 작은 소품이 책상 위에 흩어지는 것을 줄이고 싶은 분께 잘 맞습니다.",
      label: "헤드폰과 작은 소품이 정돈된 책상 장면",
      imageSrc: "/assets/void/headphone-stand/recommended-organized-desk.webp",
      objectPosition: "center",
    },
    {
      scene: "게이밍 데스크를 완성하고 싶은 분",
      line: "게이밍 헤드셋의 자리를 만들고 장비의 위치를 정돈하고 싶은 분께 잘 맞습니다.",
      label: "게이밍 데스크에서 헤드셋을 거치한 장면",
      imageSrc: "/assets/void/headphone-stand/recommended-gaming-desk.webp",
      objectPosition: "82% center",
    },
    {
      scene: "헤드폰을 매일 사용하는 분",
      line: "자주 사용하는 헤드폰을 손이 닿기 쉬운 일정한 자리에 보관하고 싶은 분께 잘 맞습니다.",
      label: "매일 사용하는 헤드폰을 스탠드에 거는 장면",
      imageSrc: "/assets/void/headphone-stand/recommended-daily-headphones.webp",
      objectPosition: "center",
    },
    {
      scene: "우드 톤의 책상을 좋아하는 분",
      line: "기능뿐 아니라 서재와 데스크테리어에 자연스럽게 어울리는 디자인을 원하는 분께 잘 맞습니다.",
      label: "우드 톤 서재에 놓인 헤드폰 스탠드 장면",
      imageSrc: "/assets/void/headphone-stand/recommended-wood-desk.webp",
      objectPosition: "center",
    },
  ];

  return (
    <section className="bg-white px-12 py-40">
      <Title>이런 분께 잘 맞습니다.</Title>
      <p className="mx-auto mt-8 max-w-[700px] text-center text-[26px] font-medium leading-[1.6] text-[#6e6e73]">
        헤드폰의 자리와 책상 위 분위기를 함께 정돈하고 싶은 분들입니다.
      </p>
      <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-16">
        {people.map(({ scene, line, label, imageSrc, objectPosition }) => (
          <article key={scene}>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-[#e5e1dc] bg-[#f3f2f0]">
              <Image
                src={imageSrc}
                alt={label}
                fill
                sizes="382px"
                className="object-cover"
                style={{ objectPosition }}
              />
            </div>
            <h3 className="mt-7 text-[29px] font-bold leading-[1.3] tracking-[-0.02em]">
              {scene}
            </h3>
            <p className="mt-3 text-[21px] font-medium leading-[1.55] text-[#6e6e73]">
              {line}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SellerReviews() {
  const reviews = [
    {
      source: "네XX 구매 고객",
      review:
        "헤드폰을 책상 위에 그냥 두면 공간을 많이 차지했는데 세워두니 훨씬 깔끔해졌어요. 아래 트레이에는 이어폰과 충전 케이블을 같이 두고 있습니다.",
    },
    {
      source: "쿠X 구매 고객",
      review:
        "나무 색감이 사진처럼 차분해서 원목 책상과 잘 어울립니다. 헤드폰을 걸지 않았을 때도 장식품처럼 보여서 데스크테리어용으로 만족스러워요.",
    },
    {
      source: "네XX 구매 고객",
      review:
        "평소에 책상 꾸미는 걸 좋아해서 이것저것 찾아보다가 구매했는데 생각보다 더 마음에 들어요. 디자인이 과하지 않고 심플해서 어떤 책상에도 잘 어울릴 것 같아요. 특히 헤드폰을 걸어놓으니까 그냥 책상 위에 올려뒀을 때보다 훨씬 깔끔해 보이네요. 작은 소품 하나 바꿨을 뿐인데 책상 분위기가 달라져서 만족스럽습니다.",
    },
    {
      source: "쿠X 구매 고객",
      review:
        "기존에는 헤드폰을 사용하고 나면 그냥 책상 한쪽에 올려뒀는데 은근히 공간도 차지하고 지저분해 보이더라고요. 거치대 사용하고 나서는 헤드폰 자리가 딱 정해져 있으니까 정리하기도 편하고 필요할 때 바로 꺼내 쓰기 좋아요. 책상 공간도 전보다 여유로워진 느낌이고, 헤드폰을 바닥에 아무렇게나 내려놓지 않아도 돼서 좋네요.",
    },
  ];

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
          {reviews.map(({ source, review }) => (
            <article
              key={review}
              className="rounded-[28px] border border-[#e5ddd6] bg-[#faf7f3] px-8 py-8"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <p className="text-[24px] font-bold text-[#1d1d1f]">5.0</p>
                  <p className="text-[24px] font-bold tracking-[0.08em] text-[#F5B700]">
                    ★★★★★
                  </p>
                </div>
                <p className="text-[18px] font-medium text-[#86868b]">{source}</p>
              </div>
              <p className="mt-6 text-[24px] font-medium leading-[1.6] tracking-[-0.01em] text-[#6e6e73]">
                {review}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const questions = [
  [
    "제가 쓰는 헤드폰도 걸 수 있나요?",
    "오버이어·온이어 헤드폰과 헤드밴드가 있는 게이밍 헤드셋에 사용할 수 있습니다. 제품 전체 높이는 30cm, 상단 받침 너비는 10cm이므로 사용 중인 헤드폰의 크기도 함께 확인해 주세요.",
  ],
  [
    "큰 헤드폰은 이어패드가 바닥에 닿지 않나요?",
    "대부분의 일반적인 헤드폰은 상단에 걸어 이어패드가 책상에 직접 닿지 않도록 보관할 수 있습니다. 다만 헤드밴드 길이와 이어컵 크기는 제품마다 다르므로 전체 높이 30cm를 기준으로 확인해 주세요.",
  ],
  [
    "헤드폰을 한 손으로 빼면 거치대도 같이 들리지 않나요?",
    "헤드폰의 무게와 빼는 방향에 따라 거치대가 움직일 수 있습니다. 자주 한 손으로 꺼내거나 더 단단한 고정을 원한다면 하부 네 곳의 보호필름을 떼어 책상에 고정해 주세요.",
  ],
  [
    "접착 패드는 처음부터 떼고 사용해야 하나요?",
    "아닙니다. 위치를 자유롭게 옮겨 쓰고 싶다면 보호필름을 떼지 않은 상태로 사용하세요. 흔들림을 줄이거나 자리를 고정하고 싶을 때만 보호필름을 제거하면 됩니다.",
  ],
  [
    "접착 패드를 떼면 책상에 자국이 남을 수 있나요?",
    "책상 소재와 코팅 상태, 부착 기간에 따라 끈적임이나 자국이 남을 수 있습니다. 도장면·무늬목·시트지·가죽 매트처럼 표면이 민감한 곳에는 부착하지 말고, 눈에 띄지 않는 곳에서 먼저 확인해 주세요.",
  ],
  [
    "조립해서 사용해야 하나요?",
    "네. 상단 받침과 원목 베이스를 블랙 지지봉에 나사 네 개로 고정하는 방식입니다. 조립용 드라이버가 함께 제공되며, 평평한 곳에서 각 부품의 방향을 맞춘 뒤 나사를 고르게 조여 주세요.",
  ],
  [
    "오래 걸어두면 헤드밴드에 자국이 생기지 않나요?",
    "상단 받침은 헤드밴드가 한쪽 모서리에만 눌리지 않도록 넓은 곡면으로 만들었습니다. 다만 헤드밴드의 소재와 쿠션 상태에 따라 눌림 정도가 다를 수 있으므로 민감한 소재는 장시간 거치 전 상태를 확인해 주세요.",
  ],
  [
    "아래 트레이에는 무엇을 둘 수 있나요?",
    "무선 이어폰 케이스, 충전 케이블, USB 메모리, 카드처럼 책상 위에서 흩어지기 쉬운 작은 소품을 모아두기 좋습니다. 무겁거나 날카로운 물건은 원목 표면 손상을 피하기 위해 올려두지 않는 것을 권장합니다.",
  ],
  [
    "사진과 실제 제품의 색이나 나뭇결이 다른가요?",
    "화면과 촬영 환경에 따라 색상이 다르게 보일 수 있으며, 목재 특성상 나뭇결과 색 농도는 제품마다 차이가 있습니다. 이는 불량이 아닌 각 제품의 자연스러운 특징입니다.",
  ],
  [
    "먼지나 얼룩은 어떻게 닦아야 하나요?",
    "부드러운 마른 천으로 가볍게 닦아 주세요. 물이나 알코올, 강한 화학 세제는 피하고 직사광선과 습기가 많은 곳에 오래 두지 않는 것이 좋습니다.",
  ],
] as const;

function Faq() {
  return (
    <section className="bg-white px-10 pb-36 pt-40">
      <InfoTitle>질문에 답해드립니다.</InfoTitle>
      <ul className="mt-24">
        {questions.map(([question, answer]) => (
          <li
            key={question}
            className="border-t border-[#d2d2d7] py-7 last:border-b"
          >
            <div className="flex items-start justify-between gap-6">
              <p className="text-[28px] font-semibold leading-[1.35] tracking-[-0.015em] text-[#1d1d1f]">
                {question}
              </p>
              <ChevronDown
                className="mt-1.5 h-7 w-7 shrink-0 text-[#86868b]"
                strokeWidth={2.5}
                aria-hidden
              />
            </div>
            <p className="mt-4 pr-12 text-[22px] font-medium leading-[1.55] tracking-[-0.01em] text-[#6e6e73]">
              {answer}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Size() {
  return (
    <section className="bg-white px-10 pb-36 pt-32">
      <InfoTitle>사이즈</InfoTitle>
      <div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px] border border-[#e5e1dc]">
        <Image
          src="/assets/void/headphone-stand/size-guide.webp"
          alt="Void Headphone Stand 가로 17.5cm, 세로 9.5cm, 높이 30cm, 상단 받침 너비 10cm 실측 안내"
          fill
          sizes="780px"
          className="object-cover object-center"
        />
      </div>
      <Rows
        rows={[
          ["가로", "17.5cm"],
          ["세로", "9.5cm"],
          ["높이", "30cm"],
          ["상단 받침 너비", "10cm"],
          ["제품 중량", "350g"],
        ]}
      />
    </section>
  );
}

function Components() {
  return (
    <section className="bg-white px-10 pb-36 pt-32">
      <InfoTitle>구성품</InfoTitle>
      <div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px] border border-[#e5e1dc]">
        <Image
          src="/assets/void/headphone-stand/components.webp"
          alt="상단 원목 받침, 원목 베이스, 블랙 지지봉, 나사 네 개와 조립용 드라이버로 구성된 Void Headphone Stand 구성품"
          fill
          sizes="780px"
          className="object-cover object-center"
        />
      </div>
      <p className="mt-7 text-center text-[25px] font-semibold leading-[1.6] tracking-[-0.01em] text-[#1d1d1f]">
        상단 받침 ×1 · 원목 베이스 ×1 · 지지봉 ×1<br />
        조립 나사 ×4 · 드라이버 ×1
      </p>
    </section>
  );
}

const productInfo = [
  ["품명", "Void Headphone Stand"],
  ["제품 유형", "탁상형 헤드폰·헤드셋 스탠드"],
  ["색상", "월넛 우드"],
  ["소재", "목재 · 알루미늄 합금"],
  ["구조", "곡면 헤드밴드 받침 · 수직 지지봉 · 수납형 사각 베이스"],
  ["거치 수량", "헤드폰 또는 헤드셋 1대"],
  ["사용 대상", "오버이어 · 온이어 헤드폰 · 게이밍 헤드셋"],
  ["설치 방식", "독립형 · 필요시 하부 4점 접착 고정"],
  ["구성품", "Void Headphone Stand 본체 1개(하부 4점 고정 패드 부착)"],
  ["제조자(수입자)", "보이드 투 노바"],
  ["품질보증기준", "관련 법령 및 소비자분쟁해결기준에 따름"],
  ["A/S 책임자와 전화번호", "010-6393-0907"],
];

function ProductInfo() {
  return (
    <section className="bg-white px-10 pb-36 pt-32">
      <InfoTitle>제품 정보</InfoTitle>
      <Rows rows={productInfo} />
    </section>
  );
}

function Notices() {
  return (
    <section className="bg-white px-10 pb-36 pt-32">
      <InfoTitle>기타 안내</InfoTitle>
      <div className="mx-auto mt-24 max-w-[720px] space-y-12">
        <Notice
          title="취급 시 주의사항"
          bullets={[
            "평평하고 흔들림이 없는 책상이나 선반 위에서 사용해 주세요.",
            "헤드폰을 거치하기 전 스탠드가 안정적으로 놓여 있는지 확인해 주세요.",
            "헤드폰 한 대 이외의 무거운 물건을 상단 받침에 걸지 마세요.",
            "헤드폰을 걸거나 꺼낼 때 제품을 과도하게 당기거나 밀지 마세요.",
            "물기와 화기, 높은 온도에 가까이 두지 마세요.",
            "어린이의 손이 닿는 곳에서는 넘어지지 않도록 주의해 주세요.",
          ]}
        />
        <Notice
          title="4점 고정 패드 사용 안내"
          bullets={[
            "고정이 필요하지 않을 때는 하부 네 곳의 보호필름을 떼지 않고 사용해 주세요.",
            "더 단단한 고정이 필요할 때만 부착할 면의 먼지와 물기를 제거한 후 보호필름을 떼고 고르게 눌러 부착해 주세요.",
            "도장면, 무늬목, 시트지, 가죽 매트 등 접착에 약한 표면에는 사용하지 마세요.",
            "접착 후 제거하면 접착 자국이 남거나 책상 표면이 손상될 수 있으며, 재부착 시 접착력이 떨어질 수 있습니다.",
            "고정 여부와 관계없이 헤드폰을 걸거나 꺼낼 때 거치대를 과도하게 당기지 마세요.",
          ]}
        />
        <Notice
          title="관리 방법"
          body="부드러운 마른 천으로 가볍게 닦아 주세요. 물이나 화학 세제 사용은 피하고, 목재와 금속 연결부 및 하부 고정 패드에 먼지가 쌓이지 않도록 관리해 주세요."
        />
        <Notice
          title="색상 및 나뭇결 안내"
          body="사용하시는 화면과 촬영 환경에 따라 실제 색상이 다소 다르게 보일 수 있으며, 목재의 나뭇결과 색감은 제품마다 자연스러운 차이가 있을 수 있습니다."
        />
        <Notice
          title="A/S 안내"
          body="제품 초기 불량은 수령 후 7일 이내 확인해 주시면 교환 도와드립니다. 문의는 스토어 고객센터를 통해 접수해 주세요."
        />
        <Notice
          title="배송 안내"
          bullets={[
            "배송기간 — 평균 배송기간은 2~5일 (일부 품목은 출고지 및 반품지 주소가 다를 수 있음)",
            "발송 마감시간 — 평일 기준 당일 오후 4시 이전 주문건까지 당일 발송 (일부품목 제외). 오후 4시 이후 주문건은 +1일 이후 발송 (평일기준)",
            "제주도·도서산간 지역배송비 — 제주도/도서산간 지역의 경우 배송비가 추가됩니다. (해당 지역마다 배송비가 다를 수 있음)",
          ]}
        />
        <ExchangeGuide />
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[28px] border border-[#e7e1db] bg-white px-5 py-11 text-center shadow-[0_10px_30px_rgba(73,53,39,0.06)]">
      <p className="whitespace-nowrap text-[38px] font-bold tracking-[-0.025em] text-[#6b513f]">
        {value}
      </p>
      <p className="mt-4 text-[21px] font-semibold text-[#6e6e73]">{label}</p>
    </div>
  );
}

function MaterialCard({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-[28px] border border-[#e5dcd4] bg-[#f3efeb] px-7 py-9">
      <p className="text-[17px] font-bold tracking-[0.12em] text-[#8a6246]">{eyebrow}</p>
      <h3 className="mt-5 text-[26px] font-bold leading-tight">{title}</h3>
      <p className="mt-4 text-[18px] font-medium leading-[1.5] text-[#6e6e73]">{body}</p>
    </article>
  );
}

function Photo({
  className = "",
  label,
  fill = false,
}: {
  className?: string;
  label: string;
  fill?: boolean;
}) {
  return (
    <div
      aria-label={"사진 자리: " + label}
      className={
        (fill
          ? "absolute inset-0"
          : "relative aspect-[3/4] w-full rounded-[28px] border border-[#e5e1dc]") +
        " overflow-hidden bg-[#f3f2f0] " +
        className
      }
    />
  );
}

function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-center text-[61px] font-bold leading-[1.17] tracking-[-0.035em]">
      {children}
    </h2>
  );
}

function InfoTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-center text-[58px] font-bold leading-tight tracking-[-0.025em] text-[#1d1d1f]">
      {children}
    </h2>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[23px] font-semibold tracking-[0.09em] text-[#8a6246]">
      {children}
    </p>
  );
}

function Gradient({ children }: { children: ReactNode }) {
  return (
    <span
      className="bg-clip-text text-transparent"
      style={{ backgroundImage: "linear-gradient(90deg,#493527,#9a775d)" }}
    >
      {children}
    </span>
  );
}

function Fade({ position }: { position: "top" | "bottom" }) {
  return (
    <div
      className={
        "pointer-events-none absolute inset-x-0 h-[38%] " +
        (position === "top" ? "top-0" : "bottom-0")
      }
      style={{
        background:
          position === "top"
            ? "linear-gradient(180deg,#fff 0%,rgba(255,255,255,.55) 58%,transparent 100%)"
            : "linear-gradient(0deg,#fff 0%,rgba(255,255,255,.8) 35%,transparent 100%)",
      }}
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
          <dt className="w-[200px] shrink-0 text-[22px] font-semibold text-[#1d1d1f]">
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
      <h3 className="text-[28px] font-semibold">{title}</h3>
      {body ? (
        <p className="mt-4 text-[22px] leading-snug text-[#6e6e73]">{body}</p>
      ) : null}
      {bullets ? (
        <ul className="mt-4 space-y-2 text-[22px] leading-snug text-[#6e6e73]">
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
        "교환·반품 신청 후 상품은 포장과 구성품을 받은 상태로 보관해 주세요.",
      ],
    },
    {
      title: "교환·반품 불가",
      items: [
        "교환 또는 반품 요청 기간이 지난 경우",
        "구매자 책임으로 상품이나 포장이 훼손된 경우",
        "사용 흔적으로 상품 가치가 현저히 감소한 경우",
        "구성품이 누락된 경우",
        "고객 요청으로 별도 제작 또는 변경된 상품인 경우",
      ],
    },
  ];

  return (
    <div>
      <h3 className="text-[28px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">
        교환·반품 안내
      </h3>
      <p className="mt-4 text-[22px] font-medium leading-snug tracking-[-0.01em] text-[#6e6e73]">
        교환 및 반품 접수는 구매하신 몰에서 신청해 주세요.
      </p>
      {groups.map(({ title, items }) => (
        <div key={title} className="mt-8">
          <p className="text-[22px] font-semibold tracking-[-0.01em] text-[#1d1d1f]">
            {title}
          </p>
          <ul className="mt-3 space-y-2 text-[22px] font-medium leading-snug tracking-[-0.01em] text-[#6e6e73]">
            {items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="shrink-0">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="mt-8">
        <p className="text-[22px] font-semibold tracking-[-0.01em] text-[#1d1d1f]">
          변경·취소
        </p>
        <p className="mt-3 text-[22px] font-medium leading-snug tracking-[-0.01em] text-[#6e6e73]">
          취소나 변경은 실제 출고가 되지 않았을 경우에만 가능합니다. 상품 출고 후 취소 또는 변경 시 왕복 택배비는 구매자 부담입니다.
        </p>
      </div>
    </div>
  );
}
