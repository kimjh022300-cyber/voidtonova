import { BrandFrame } from "@/components/product-detail/brand-frame";
import { Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

const metrics = [
  ["2-IN-1", "파우치와 노트북 스탠드"],
  ["13.3형", "25 × 35cm"],
  ["15.4형", "약 39 × 27cm"],
  ["230·290g", "옵션별 제품 중량"],
  ["MAGNETIC", "간결한 플랩 잠금"],
  ["PU", "블랙 레더 텍스처"],
] as const;

const faqs = [
  ["제 맥북에도 맞을까요?", "13.3형과 15.4형 두 가지 옵션이 있습니다. 같은 화면 크기라도 모델마다 실제 크기가 다르니, 사용 중인 맥북의 가로·세로·두께를 제품 실측과 비교해 주세요."],
  ["맥북이 아닌 노트북도 사용할 수 있나요?", "브랜드보다 노트북의 실제 크기가 중요합니다. 사용 중인 기기의 가로·세로·두께를 확인한 뒤 파우치 실측과 비교해 주세요. 모서리 형태와 케이스 착용 여부에 따라 수납감은 달라질 수 있습니다."],
  ["맥북에 케이스를 씌운 상태로도 들어가나요?", "얇은 케이스는 사용할 수 있지만, 두꺼운 하드 케이스를 씌우면 입구가 타이트할 수 있습니다. 케이스를 포함한 실제 크기를 기준으로 확인하는 것이 가장 정확합니다."],
  ["충전기나 마우스도 같이 넣을 수 있나요?", "노트북 본체를 얇게 수납하는 구조로, 충전기나 마우스를 함께 넣을 전용 공간은 없습니다. 두꺼운 액세서리를 같이 넣으면 파우치가 불룩해지거나 노트북에 압력을 줄 수 있어 별도로 수납하는 것을 권장합니다."],
  ["스탠드로 만드는 방법이 어렵지는 않나요?", "노트북을 꺼내고 플랩을 안쪽으로 접어 삼각형을 만든 뒤 그 위에 올리면 됩니다. 몇 번 사용하면 별도의 조립 없이 바로 펼칠 수 있습니다."],
  ["스탠드가 타이핑할 때 흔들리지는 않나요?", "가벼운 문서 작업과 웹서핑에는 편하게 사용할 수 있습니다. 다만 강하게 누르거나 밀면 접힌 구조가 움직일 수 있으니 안정적으로 놓였는지 먼저 확인해 주세요."],
  ["파우치만으로 충격 보호가 충분한가요?", "가방 안에서 생기는 생활 마찰과 스크래치를 줄이는 용도에 가깝습니다. 낙하나 강한 충격까지 막아주는 하드 케이스는 아니므로 이동할 때 주의해 주세요."],
  ["오염되면 어떻게 닦아야 하나요?", "겉면은 부드러운 마른 천으로 가볍게 닦고, 안감은 먼지를 털어 관리해 주세요. 물세탁이나 알코올, 강한 세제 사용은 피하는 것이 좋습니다."],
] as const;

export default function VoidLaptopStandSleevePage() {
  return (
    <BrandFrame brand="void">
      <Hero />

      <section className="relative aspect-[3/4] overflow-hidden bg-white">
        <Image
          src="/assets/void/laptop-stand-sleeve/product-overview-v2.webp"
          alt="블랙 노트북 파우치에 맥북을 넣는 데스크 위 모습"
          fill
          sizes="860px"
          className="object-cover object-center"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[11%]"
          style={{ background: "linear-gradient(180deg,transparent 0%,rgba(247,247,247,.72) 58%,#f7f7f7 100%)" }}
        />
        <div className="absolute inset-x-0 top-24 z-10 text-center">
          <h2 className="text-[68px] font-bold tracking-[-0.035em]">
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg,#5e4634,#c29b78)" }}
            >
              Void Laptop Pouch.
            </span>
          </h2>
        </div>
        <p className="absolute inset-x-0 bottom-24 z-10 text-center text-[31px] font-semibold text-[#72533d]">
          노트북을 감싸고, 펼치면 스탠드로.
        </p>
      </section>

      <section className="bg-[#f7f7f7] px-12 py-36">
        <Title>한눈에 보는<br /><Gradient>Void Laptop Pouch.</Gradient></Title>
        <div className="mt-20 grid grid-cols-2 gap-6">
          {metrics.map(([value, label]) => <Metric key={label} value={value} label={label} />)}
        </div>
      </section>

      <Story
        eyebrow="WHY 2-IN-1"
        title={<>노트북과 거치대,<br /><Gradient>두 개를 하나에 담다.</Gradient></>}
        label="노트북 파우치를 스탠드로 펼쳐 맥북을 올려둔 모습"
        imageSrc="/assets/void/laptop-stand-sleeve/why-two-in-one.webp"
      >
        노트북을 보호할 파우치와 화면을 올릴 거치대를 각각 챙기면 가방 속 부피와 준비물이 늘어납니다. 이동 중에는 노트북을 감싸고, 자리에 앉으면 곧바로 스탠드가 되는 하나의 구조로 휴대와 사용 사이의 과정을 줄였습니다.
      </Story>

      <BeforeAfter />
      <PouchFirst />
      <Comparison />
      <Transform />

      <Feature
        title={<>바닥에 바로 놓이던 화면을,<br /><Gradient>가볍게 들어 올리는 각도.</Gradient></>}
        label="파우치를 스탠드로 접어 맥북 뒤쪽을 들어 올린 측면 사진"
        imageSrc="/assets/void/laptop-stand-sleeve/raised-angle.webp"
        body="파우치를 접어 만든 삼각 지지 구조가 노트북 뒤쪽을 받쳐줍니다. 화면은 조금 더 높아지고 키보드에는 완만한 기울기가 생겨, 별도의 거치대 없이도 작업하기 좋은 각도를 만듭니다."
      />

      <Feature
        title={<>열고 닫는 동작까지,<br /><Gradient>간결한 마그네틱 플랩.</Gradient></>}
        label="블랙 파우치 플랩의 마그네틱 잠금 위치를 보여주는 클로즈업"
        imageSrc="/assets/void/laptop-stand-sleeve/magnetic-flap.webp"
        photoAspect="aspect-[1/2]"
        body="플랩을 덮으면 자석이 맞닿아 파우치의 입구를 간결하게 정돈합니다. 외부로 돌출된 버클이나 지퍼 없이 부드러운 봉투형 실루엣을 유지하며, 꺼내고 수납하는 동작도 단순합니다."
      />

      <Feature
        title={<>부드럽게 감싸는,<br /><Gradient>안쪽의 섬세한 촉감.</Gradient></>}
        label="노트북이 닿는 부드러운 내부 안감의 확대 사진"
        imageSrc="/assets/void/laptop-stand-sleeve/soft-lining.webp"
        body="노트북이 직접 닿는 내부에는 부드러운 안감을 적용했습니다. 이동 중 기기와 파우치 안쪽이 맞닿을 때 생기는 마찰을 줄이고, 외부의 단단한 레더 텍스처와는 다른 부드러운 촉감을 제공합니다."
      />

      <Feature
        title={<>가방 속에는 얇게,<br /><Gradient>필요한 순간에는 든든하게.</Gradient></>}
        label="블랙 파우치를 가방에 넣는 장면과 옆면 두께 사진"
        imageSrc="/assets/void/laptop-stand-sleeve/slim-carry.webp"
        body="두 옵션 모두 제품 두께는 약 1cm입니다. 13.3형은 230g, 15.4형은 290g으로 별도의 금속 거치대를 추가로 챙기지 않고 파우치 하나로 휴대할 수 있습니다."
        extra={<div className="mt-14 grid grid-cols-2 gap-5"><Metric value="230g" label="13.3형" /><Metric value="290g" label="15.4형" /></div>}
      />

      <FitGuide />

      <div style={{ background: "linear-gradient(180deg,#fff 0%,#f6f1ea 5%,#f6f1ea 95%,#fff 100%)" }}>
        <DesignStory
          eyebrow="DESIGN DETAIL 01"
          title={<>빛을 낮춘 블랙,<br /><Gradient>매끄러운 레더 텍스처.</Gradient></>}
          label="블랙 PU 레더 표면의 미세한 질감 확대 사진"
          imageSrc="/assets/void/laptop-stand-sleeve/leather-texture.webp"
        >
          잔잔한 엠보가 느껴지는 블랙 PU 표면이 단정한 인상을 만듭니다. 노트북을 넣었을 때는 슬림한 봉투형 케이스로, 펼쳤을 때는 책상 위에 자연스럽게 어우러지는 블랙 스탠드로 남습니다.
        </DesignStory>
        <DesignStory
          eyebrow="DESIGN DETAIL 02"
          title={<>끝선까지 정돈한,<br /><Gradient>라운드와 스티치.</Gradient></>}
          label="둥근 모서리와 가장자리 스티치를 보여주는 디테일 사진"
          imageSrc="/assets/void/laptop-stand-sleeve/edge-stitch.webp"
        >
          모서리는 부드러운 곡선으로 정리하고 외곽을 따라 스티치를 이어 형태를 단정하게 마감했습니다. 자주 손이 닿는 플랩의 끝선과 파우치 가장자리까지 하나의 검정 톤으로 정돈했습니다.
        </DesignStory>
        <DetailGrid />
      </div>

      <Recommended />
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
    <section className="relative min-h-[1440px] overflow-hidden bg-[#f6f1ea]">
      <Image
        src="/assets/void/laptop-stand-sleeve/hero-v2.webp"
        alt="블랙 노트북 파우치를 펼쳐 맥북 스탠드로 사용하는 데스크"
        fill
        preload
        sizes="860px"
        className="object-cover object-center"
      />
      <Fade />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%]"
        style={{ background: "linear-gradient(0deg,rgba(40,25,16,.68) 0%,rgba(40,25,16,.22) 48%,transparent 100%)" }}
      />
      <div className="relative z-10 flex min-h-[1440px] flex-col items-center px-8 pb-24 pt-20 text-center">
        <p className="text-[40px] font-semibold text-[#72533d]">Void Laptop Pouch</p>
        <h1 className="mt-8 whitespace-nowrap text-[71px] font-bold leading-[1.05] tracking-[-0.045em]">담고, 펼치고, 시작하다.</h1>
        <p className="mt-auto text-[29px] font-medium leading-[1.6] text-[#fffaf5] [text-shadow:0_3px_18px_rgba(47,30,19,0.78),0_1px_3px_rgba(47,30,19,0.9)]">맥북을 부드럽게 감싸고,<br />필요한 순간에는 편안한 각도까지.</p>
      </div>
    </section>
  );
}

function BeforeAfter() {
  return (
    <section className="bg-white px-10 py-36">
      <Title>사용하기 전과 후,<br /><Gradient>두 가지가 달라집니다.</Gradient></Title>
      <div className="mt-20 grid grid-cols-2 gap-6">
        <Scene eyebrow="BEFORE" title="그대로 넣는 노트북" label="보호 파우치 없이 노트북을 가방에 넣는 모습" imageSrc="/assets/void/laptop-stand-sleeve/before-unprotected.webp" body="가방 속 다른 물건과 직접 맞닿는 표면" />
        <Scene eyebrow="AFTER" title="단정하게 감싸는 파우치" label="블랙 노트북 파우치에 맥북을 수납한 모습" imageSrc="/assets/void/laptop-stand-sleeve/after-protected.webp" body="이동할 때는 생활 마찰을 줄이고, 꺼낸 뒤에는 스탠드로" accent />
      </div>
    </section>
  );
}

function PouchFirst() {
  return (
    <section className="bg-white px-12 py-40">
      <Eyebrow>SIMPLY ESSENTIAL</Eyebrow>
      <h2 className="mt-9 text-[64px] font-bold leading-[1.16] tracking-[-0.035em]">
        꼭 필요한 것만,<br /><Gradient>단정하게 담았습니다.</Gradient>
      </h2>
      <Photo className="mt-24" label="장식을 덜어낸 블랙 노트북 파우치의 단정한 전체 모습" imageSrc="/assets/void/laptop-stand-sleeve/simply-essential.webp" />
      <p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">
        눈에 띄는 장식과 복잡한 여밈은 덜어내고, 노트북을 부드럽게 감싸는 구조와 매일 들어도 부담 없는 단정한 형태에 집중했습니다. 오래 보아도 질리지 않는 심플함, 그것이 Void가 생각한 파우치의 기본입니다.
      </p>
    </section>
  );
}

function Comparison() {
  const rows = [
    ["노트북 수납", "O", "O"],
    ["스탠드 변환", "X", "O"],
    ["화면 높이 확보", "X", "O"],
    ["하부 통풍 공간", "X", "O"],
    ["별도 거치대 없이 사용", "X", "O"],
  ];
  return (
    <section className="bg-white px-10 py-36">
      <Title><Gradient>Void Laptop Pouch.</Gradient><br />당신에게 딱 맞는 이유.</Title>
      <div className="mt-20 overflow-hidden rounded-[28px] border border-[#d2d2d7]">
        <table className="w-full table-fixed border-collapse text-center">
          <caption className="sr-only">일반 노트북 파우치와 Void Laptop Pouch 비교</caption>
          <thead><tr className="bg-[#f5f5f7]"><th className="w-[38%] px-3 py-7 text-[21px]">기능</th><th className="border-l px-2 text-[20px] leading-tight">일반<br />파우치</th><th className="border-l bg-[#f1eae2] px-2 text-[20px] leading-tight text-[#72533d]">Void<br />Laptop Pouch</th></tr></thead>
          <tbody>{rows.map(([label, normal, pouch]) => <tr key={label} className="border-t"><th className="px-3 py-7 text-[20px] font-semibold leading-snug">{label}</th><td className={`border-l px-3 py-7 text-[34px] font-bold ${normal === "O" ? "text-[#9a7353]" : "text-[#86868b]"}`}>{normal}</td><td className="border-l bg-[#f6f1ea] px-3 py-7 text-[34px] font-bold text-[#72533d]">{pouch}</td></tr>)}</tbody>
        </table>
      </div>
    </section>
  );
}

function Transform() {
  const items = [
    ["01", "넣고 닫기", "블랙 노트북 파우치의 플랩을 닫는 모습", "/assets/void/laptop-stand-sleeve/transform-step-1.webp"],
    ["02", "꺼내고 접기", "블랙 노트북 파우치의 플랩을 접는 모습", "/assets/void/laptop-stand-sleeve/transform-step-2.webp"],
    ["03", "올리고 사용하기", "펼친 블랙 파우치 위에 맥북을 올려 사용하는 모습", "/assets/void/laptop-stand-sleeve/transform-step-3.webp"],
  ];
  return (
    <section className="bg-white px-12 py-40">
      <Eyebrow>3-STEP TRANSFORM</Eyebrow>
      <h2 className="mt-9 text-[64px] font-bold leading-[1.16] tracking-[-0.035em]">꺼내고, 접고, 올리면.<br /><Gradient>세 번의 동작으로 완성.</Gradient></h2>
      <div className="mt-24 grid grid-cols-3 gap-5">
        {items.map(([step, title, label, imageSrc]) => <article key={step}><Photo label={label} imageSrc={imageSrc} /><div className="mt-5 flex items-center gap-4 rounded-[24px] border border-[#ddd0c3] bg-[#f6f1ea] px-5 py-7"><p className="shrink-0 text-[16px] font-bold tracking-[0.12em] text-[#9a7353]">{step}</p><h3 className="whitespace-nowrap text-[23px] font-bold">{title}</h3></div></article>)}
      </div>
    </section>
  );
}

function Feature({ title, label, body, imageSrc, photoAspect, extra }: { title: ReactNode; label: string; body: string; imageSrc?: string; photoAspect?: string; extra?: ReactNode }) {
  return <section className="bg-white px-12 pb-36 pt-32"><div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-[3px] border-[#9a7353]"><Check className="h-9 w-9 text-[#9a7353]" strokeWidth={3.5} /></div><h2 className="mt-10 text-[63px] font-bold leading-[1.15] tracking-[-0.032em]">{title}</h2><Photo className="mt-24" label={label} imageSrc={imageSrc} aspect={photoAspect} /><p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">{body}</p>{extra}</section>;
}

function FitGuide() {
  const options = [
    { size: "13.3형", dimensions: "25 × 35 × 1cm", weight: "230g", label: "가로 35cm, 세로 25cm인 13.3형 블랙 노트북 파우치", imageSrc: "/assets/void/laptop-stand-sleeve/fit-guide-13-3-v1.webp" },
    { size: "15.4형", dimensions: "약 39 × 27 × 1cm", weight: "290g", label: "가로 39cm, 세로 27cm인 15.4형 블랙 노트북 파우치", imageSrc: "/assets/void/laptop-stand-sleeve/fit-guide-15-4-v1.webp" },
  ];
  return (
    <section className="bg-white px-12 py-40">
      <Title><Gradient>맥북을 위한 두 가지 크기.</Gradient></Title>
      <p className="mx-auto mt-8 max-w-[720px] text-center text-[25px] font-medium leading-[1.6] text-[#6e6e73]">화면 인치가 같아도 모델별 실제 크기는 다를 수 있습니다. 사용 중인 맥북의 가로·세로·두께를 먼저 확인해 주세요.</p>
      <div className="mt-20 grid grid-cols-2 gap-6">
        {options.map(({ size, dimensions, weight, label, imageSrc }) => <article key={size}><Photo label={label} imageSrc={imageSrc} /><div className="mt-5 rounded-[26px] border border-[#dedede] bg-[#f7f7f7] p-8"><p className="text-[34px] font-bold text-[#72533d]">{size}</p><p className="mt-5 text-[20px] font-semibold text-[#3f3f3f]">{dimensions}</p><p className="mt-2 text-[19px] font-medium text-[#6e6e73]">{weight}</p></div></article>)}
      </div>
    </section>
  );
}

function DesignStory({ eyebrow, title, label, imageSrc, children }: { eyebrow: string; title: ReactNode; label: string; imageSrc?: string; children: ReactNode }) {
  return <section className="bg-transparent px-12 py-40"><Eyebrow>{eyebrow}</Eyebrow><h2 className="mt-9 text-[64px] font-bold leading-[1.16] tracking-[-0.035em]">{title}</h2><Photo className="mt-24" label={label} imageSrc={imageSrc} /><p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">{children}</p></section>;
}

function DetailGrid() {
  const items = [
    ["MAGNETIC FLAP", "매끄럽게 닫히는 플랩", "/assets/void/laptop-stand-sleeve/detail-magnetic-flap.webp"],
    ["SOFT LINING", "기기가 닿는 부드러운 안감", "/assets/void/laptop-stand-sleeve/soft-lining.webp"],
    ["EDGE STITCH", "외곽을 따라 이어진 스티치", "/assets/void/laptop-stand-sleeve/edge-stitch.webp"],
    ["FOLDING BASE", "삼각형으로 접히는 지지 구조", "/assets/void/laptop-stand-sleeve/raised-angle.webp"],
  ];
  return <section className="bg-transparent px-12 py-40"><Eyebrow>DESIGN DETAIL 03</Eyebrow><h2 className="mt-9 text-[64px] font-bold leading-[1.16] tracking-[-0.035em]">보이는 면부터,<br /><Gradient>접히는 구조 안쪽까지.</Gradient></h2><div className="mt-24 grid grid-cols-2 gap-6">{items.map(([title, body, imageSrc]) => <article key={title}><Photo label={body + " 디테일 사진"} imageSrc={imageSrc} /><div className="mt-5 rounded-[24px] border border-[#ddd0c3] bg-[#f1eae2] p-7"><p className="text-[20px] font-bold text-[#72533d]">{title}</p><p className="mt-3 text-[18px] font-medium text-[#6e6e73]">{body}</p></div></article>)}</div></section>;
}

function Recommended() {
  const items = [
    ["맥북을 자주 들고 다니는 분", "보호용 파우치와 노트북 스탠드를 하나로 챙기고 싶은 분께 잘 맞습니다.", "맥북과 휴대용 액세서리를 함께 들고 이동하는 모습", "/assets/void/laptop-stand-sleeve/recommended-carry.webp"],
    ["카페와 사무실을 오가는 분", "자리를 옮길 때마다 별도의 거치대를 꺼내고 정리하는 과정을 줄이고 싶은 분께 잘 맞습니다.", "카페에서 맥북으로 작업하는 모습", "/assets/void/laptop-stand-sleeve/recommended-cafe-office.webp"],
    ["가방을 가볍게 정리하고 싶은 분", "여러 액세서리보다 얇고 단순한 하나의 제품으로 휴대 구성을 줄이고 싶은 분께 잘 맞습니다.", "얇고 단정한 블랙 노트북 파우치", "/assets/void/laptop-stand-sleeve/slim-carry.webp"],
    ["블랙 액세서리를 선호하는 분", "맥북과 함께 사용할 케이스도 색과 형태가 단정한 블랙으로 고르고 싶은 분께 잘 맞습니다.", "블랙 노트북과 액세서리로 구성한 데스크", "/assets/void/laptop-stand-sleeve/recommended-black-accessories.webp"],
  ];
  return <section className="bg-white px-12 py-40"><Title>이런 분께 잘 맞습니다.</Title><p className="mx-auto mt-8 whitespace-nowrap text-center text-[26px] font-medium leading-[1.6] text-[#6e6e73]">맥북의 이동과 책상 위 사용을 하나의 제품으로 연결하고 싶은 분들입니다.</p><div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-16">{items.map(([title, body, label, imageSrc]) => <article key={title}><Photo label={label} imageSrc={imageSrc} /><h3 className="mt-7 whitespace-nowrap text-[28px] font-bold">{title}</h3><p className="mt-3 text-[20px] font-medium leading-[1.55] text-[#6e6e73]">{body}</p></article>)}</div></section>;
}

function Reviews() {
  const reviews = ["맥북을 그냥 가방에 넣고 다니기 불안해서 샀어요. 안쪽이 부드럽고 생각보다 얇아서 가방 안에서 자리도 많이 차지하지 않네요.", "처음에는 스탠드 기능을 크게 기대하지 않았는데 카페에서 은근히 자주 쓰게 돼요. 따로 거치대를 안 챙겨도 되는 게 제일 편합니다.", "지퍼가 없어서 맥북을 넣고 빼기 편해요. 자석 플랩도 생각보다 잘 닫히고 전체적으로 깔끔해서 출근할 때 들고 다니기 좋습니다.", "높이 조절이 되는 거치대만큼 높지는 않지만 노트북 뒤쪽을 살짝 올려 쓰기에는 충분해요. 파우치가 기본이고 스탠드는 덤처럼 쓸 수 있어서 만족합니다."];
  return <section className="bg-white px-10 pb-32 pt-40"><div className="mx-auto max-w-[780px]"><div className="flex items-center justify-center gap-4"><p className="text-[34px] font-bold">5.0</p><p className="text-[36px] font-bold tracking-[0.12em] text-[#F5B700]">★★★★★</p></div><h2 className="mt-6 text-center text-[58px] font-bold tracking-[-0.025em]">사용 후기를 미리 만나보세요</h2><p className="mt-5 text-center text-[22px] font-medium text-[#6e6e73]">수납부터 스탠드 활용까지, 실제 사용 장면을 닮은 이야기를 담았습니다.</p><div className="mt-16 space-y-6">{reviews.map((review) => <article key={review} className="rounded-[28px] border border-[#dedede] bg-[#f7f7f7] px-8 py-8"><p className="text-[24px] font-bold tracking-[0.08em] text-[#F5B700]">★★★★★</p><p className="mt-6 text-[24px] font-medium leading-[1.6] text-[#6e6e73]">{review}</p></article>)}</div></div></section>;
}

function Closing() {
  return <section className="relative min-h-[1440px] overflow-hidden bg-[#f6f1ea] px-12 pb-40 pt-16"><Photo fill label="햇빛이 드는 배경 위에 놓인 블랙 노트북 파우치" imageSrc="/assets/void/laptop-stand-sleeve/closing.webp" /><Fade /><div className="relative z-10 flex min-h-[1160px] flex-col text-center"><h2 className="text-[68px] font-bold leading-[1.15]">이동할 때는 단정하게,<br />펼치는 순간 더 편안하게.</h2><div className="mt-auto translate-y-24"><p className="text-[58px] font-semibold text-[#72533d]">Void Laptop Pouch</p><p className="mt-4 text-[27px] font-medium text-[#74645a]">Carry. Fold. Work.</p></div></div></section>;
}

function Faq() {
  return <section className="bg-white px-10 pb-36 pt-40"><InfoTitle>질문에 답해드립니다.</InfoTitle><ul className="mt-24">{faqs.map(([question, answer]) => <li key={question} className="border-t border-[#d2d2d7] py-7 last:border-b"><div className="flex items-start justify-between gap-6"><p className="text-[28px] font-semibold leading-[1.35]">{question}</p><ChevronDown className="mt-1.5 h-7 w-7 shrink-0 text-[#86868b]" strokeWidth={2.5} /></div><p className="mt-4 pr-12 text-[22px] font-medium leading-[1.55] text-[#6e6e73]">{answer}</p></li>)}</ul></section>;
}

function Size() {
  return (
    <section className="bg-white px-10 pb-36 pt-32">
      <InfoTitle>사이즈</InfoTitle>
      <Photo
        className="mt-24"
        label="가로 35cm, 세로 25cm인 13.3형 Void Laptop Pouch 실측 안내"
        imageSrc="/assets/void/laptop-stand-sleeve/size-13-3-v2.webp"
        aspect="aspect-square"
      />
      <h3 className="mx-auto mt-16 max-w-[720px] text-[28px] font-bold">13.3형</h3>
      <Rows rows={[["제품 외형", "250 × 350 × 10mm"], ["제품 중량", "230g"], ["색상", "블랙"]]} />
      <Photo
        className="mt-24"
        label="가로 39cm, 세로 27cm인 15.4형 Void Laptop Pouch 실측 안내"
        imageSrc="/assets/void/laptop-stand-sleeve/size-15-4-v2.webp"
        aspect="aspect-square"
      />
      <h3 className="mx-auto mt-16 max-w-[720px] text-[28px] font-bold">15.4형</h3>
      <Rows rows={[["제품 외형", "약 390 × 270 × 10mm"], ["제품 중량", "290g"], ["색상", "블랙"]]} />
    </section>
  );
}

function Components() {
  return <section className="bg-white px-10 pb-36 pt-32"><InfoTitle>구성품</InfoTitle><Photo className="mt-24" label="Void Laptop Pouch 전체 구성품 사진" imageSrc="/assets/void/laptop-stand-sleeve/package-contents.webp" /><p className="mt-7 text-center text-[28px] font-semibold">Void Laptop Pouch 본체 ×1</p></section>;
}

function ProductInfo() {
  const info = [["품명 및 모델명", "Void Laptop Pouch"], ["제품 유형", "스탠드 기능이 있는 노트북 파우치"], ["옵션", "13.3형 · 15.4형"], ["색상", "블랙"], ["외부 소재", "PU 레더"], ["내부", "부드러운 안감"], ["잠금 방식", "마그네틱 플랩"], ["13.3형 크기·중량", "250 × 350 × 10mm · 230g"], ["15.4형 크기·중량", "약 390 × 270 × 10mm · 290g"], ["주요 기능", "노트북 수납 · 접이식 스탠드 변환"], ["구성품", "Void Laptop Pouch 본체 1개"], ["제조자(수입자)", "보이드 투 노바"], ["품질보증기준", "관련 법령 및 소비자분쟁해결기준에 따름"], ["A/S 책임자와 전화번호", "010-6393-0907"]];
  return <section className="bg-white px-10 pb-36 pt-32"><InfoTitle>제품 정보</InfoTitle><Rows rows={info} /></section>;
}

function Notices() {
  return <section className="bg-white px-10 pb-36 pt-32"><InfoTitle>기타 안내</InfoTitle><div className="mx-auto mt-24 max-w-[720px] space-y-12"><Notice title="취급 시 주의사항" bullets={["구매 전 노트북의 실제 가로·세로·두께와 제품 외형 크기를 확인해 주세요.", "노트북을 수납하거나 꺼낼 때 플랩과 입구를 충분히 열어 기기 모서리가 걸리지 않도록 해주세요.", "스탠드로 사용할 때 접힌 지지 구조와 노트북이 안정적으로 놓였는지 확인해 주세요.", "제품을 스탠드로 사용한 상태에서 노트북을 강하게 누르거나 밀지 마세요.", "본 제품은 생활 마찰을 줄이는 파우치로, 낙하와 강한 충격으로부터 기기를 완전히 보호하지 않습니다.", "자석에 민감한 카드와 물품은 마그네틱 플랩 가까이에 장시간 두지 마세요.", "물기와 화기, 직사광선 및 높은 온도에 가까이 두지 마세요."]} /><Notice title="관리 방법" body="외부는 부드러운 마른 천으로 가볍게 닦고 내부 안감의 먼지와 이물질은 부드럽게 털어 주세요. 물세탁과 알코올, 강한 화학 세제 사용은 피해주세요." /><Notice title="색상 및 소재 안내" body="사용하시는 화면과 촬영 환경에 따라 실제 블랙 색상과 PU 레더 표면 질감이 다르게 보일 수 있습니다. 생산 시기에 따라 소재의 결, 광택과 스티치에 미세한 차이가 있을 수 있습니다." /><Notice title="A/S 안내" body="제품 초기 불량은 수령 후 7일 이내 확인해 주시면 교환 도와드립니다. 문의는 스토어 고객센터를 통해 접수해 주세요." /><Notice title="배송 안내" bullets={["배송기간 — 평균 배송기간은 2~5일 (일부 품목은 출고지 및 반품지 주소가 다를 수 있음)", "발송 마감시간 — 평일 기준 당일 오후 4시 이전 주문건까지 당일 발송 (일부품목 제외). 오후 4시 이후 주문건은 +1일 이후 발송 (평일기준)", "제주도·도서산간 지역배송비 — 제주도/도서산간 지역의 경우 배송비가 추가됩니다. (해당 지역마다 배송비가 다를 수 있음)"]} /><ExchangeGuide /></div></section>;
}

function Story({ eyebrow, title, label, imageSrc, children }: { eyebrow: string; title: ReactNode; label: string; imageSrc?: string; children: ReactNode }) { return <section className="bg-white px-12 py-40"><Eyebrow>{eyebrow}</Eyebrow><h2 className="mt-9 text-[64px] font-bold leading-[1.16] tracking-[-0.035em]">{title}</h2><Photo className="mt-24" label={label} imageSrc={imageSrc} /><p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">{children}</p></section>; }
function Scene({ eyebrow, title, label, body, imageSrc, accent = false }: { eyebrow: string; title: string; label: string; body: string; imageSrc?: string; accent?: boolean }) { return <article className={(accent ? "border-[#ddd0c3] bg-[#f6f1ea]" : "border-[#dedede] bg-[#f7f7f7]") + " rounded-[28px] border p-5"}><Photo label={label} imageSrc={imageSrc} /><p className={(accent ? "text-[#9a7353]" : "text-[#86868b]") + " mt-7 text-[16px] font-bold tracking-[0.12em]"}>{eyebrow}</p><h3 className="mt-4 text-[28px] font-bold">{title}</h3><p className="mt-4 text-[20px] font-medium leading-[1.55] text-[#6e6e73]">{body}</p></article>; }
function Title({ children }: { children: ReactNode }) { return <h2 className="text-center text-[61px] font-bold leading-[1.17] tracking-[-0.035em]">{children}</h2>; }
function Gradient({ children }: { children: ReactNode }) { return <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg,#4b392c,#b58a64)" }}>{children}</span>; }
function Eyebrow({ children }: { children: ReactNode }) { return <p className="text-[22px] font-bold tracking-[0.13em] text-[#9a7353]">{children}</p>; }
function Metric({ value, label }: { value: string; label: string }) { return <div className="rounded-[28px] border border-[#ddd0c3] bg-white px-5 py-11 text-center shadow-[0_10px_30px_rgba(114,83,61,0.08)]"><p className="whitespace-nowrap text-[46px] font-bold text-[#72533d]">{value}</p><p className="mt-4 text-[20px] font-semibold text-[#6e6e73]">{label}</p></div>; }
function Rows({ rows }: { rows: string[][] }) { return <dl className="mx-auto mt-8 max-w-[720px]">{rows.map(([label, value]) => <div key={label} className="flex gap-8 border-b border-[#d2d2d7] py-6 first:border-t"><dt className="w-[210px] shrink-0 text-[22px] font-semibold">{label}</dt><dd className="flex-1 text-[22px] font-medium leading-snug text-[#6e6e73]">{value}</dd></div>)}</dl>; }
function InfoTitle({ children }: { children: ReactNode }) { return <h2 className="text-center text-[58px] font-bold leading-tight tracking-[-0.025em]">{children}</h2>; }
function Notice({ title, body, bullets }: { title: string; body?: string; bullets?: string[] }) { return <div><h3 className="text-[28px] font-semibold">{title}</h3>{body ? <p className="mt-4 text-[22px] font-medium leading-snug text-[#6e6e73]">{body}</p> : null}{bullets ? <ul className="mt-4 space-y-2 text-[22px] font-medium leading-snug text-[#6e6e73]">{bullets.map((item) => <li key={item} className="flex gap-3"><span>·</span><span>{item}</span></li>)}</ul> : null}</div>; }
function ExchangeGuide() { const groups = [{ title: "교환·반품 가능", items: ["상품 수령 후 7일 이내 구매한 몰에서 교환 또는 반품을 신청한 경우", "구매자의 단순 변심은 상품 수령 후 7일 이내 가능하며 반품 배송비가 발생할 수 있습니다.", "상품 초기 불량에 대한 교환과 반품은 무료이며 그 외에는 왕복 택배비가 발생할 수 있습니다.", "교환·반품 신청 후 상품은 포장과 구성품을 받은 상태로 보관해 주세요."] }, { title: "교환·반품 불가", items: ["교환 또는 반품 요청 기간이 지난 경우", "구매자 책임으로 상품이나 포장이 훼손된 경우", "사용 흔적으로 상품 가치가 현저히 감소한 경우", "구성품이 누락된 경우", "고객 요청으로 별도 제작 또는 변경된 상품인 경우"] }]; return <div><h3 className="text-[28px] font-semibold">교환·반품 안내</h3><p className="mt-4 text-[22px] font-medium leading-snug text-[#6e6e73]">교환 및 반품 접수는 구매하신 몰에서 신청해 주세요.</p>{groups.map(({ title, items }) => <div key={title} className="mt-8"><p className="text-[22px] font-semibold">{title}</p><ul className="mt-3 space-y-2 text-[22px] font-medium leading-snug text-[#6e6e73]">{items.map((item) => <li key={item} className="flex gap-3"><span>·</span><span>{item}</span></li>)}</ul></div>)}<div className="mt-8"><p className="text-[22px] font-semibold">변경·취소</p><p className="mt-3 text-[22px] font-medium leading-snug text-[#6e6e73]">취소나 변경은 실제 출고가 되지 않았을 경우에만 가능합니다. 상품 출고 후 취소 또는 변경 시 왕복 택배비는 구매자 부담입니다.</p></div></div>; }
function Fade() { return <div className="pointer-events-none absolute inset-x-0 top-0 h-[42%]" style={{ background: "linear-gradient(180deg,#fff 0%,rgba(255,255,255,.62) 56%,transparent 100%)" }} />; }
function Photo({ className = "", label, fill = false, imageSrc, aspect = "aspect-[3/4]" }: { className?: string; label: string; fill?: boolean; imageSrc?: string; aspect?: string }) { return <div aria-label={imageSrc ? undefined : "사진 자리: " + label} className={(fill ? "absolute inset-0 " : `relative ${aspect} w-full rounded-[28px] border border-[#dedede] `) + "overflow-hidden bg-[#f1f1f1] " + className}>{imageSrc && <Image src={imageSrc} alt={label} fill sizes="(max-width: 860px) 100vw, 860px" className="object-cover" />}</div>; }
