import { BrandFrame } from "@/components/product-detail/brand-frame";
import { Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

const metrics = [
  ["36cm", "텐키리스와 사용하기 좋은 길이"],
  ["8cm", "손목을 받치는 폭"],
  ["약 1.9cm", "제품 높이"],
  ["CURVED", "완만하게 이어지는 곡면"],
  ["WALNUT", "짙고 깊은 블랙월넛"],
  ["2-PAD", "양쪽 미끄럼 방지 패드"],
] as const;

const faqs = [
  ["제 키보드와 길이가 잘 맞을까요?", "가로 약 36cm로 일반적인 텐키리스 키보드와 나란히 두기 좋은 길이입니다. 같은 텐키리스 배열도 하우징 너비는 다를 수 있으니, 구매 전 사용 중인 키보드의 실제 가로 길이와 비교해 주세요."],
  ["키보드 높이와 팜레스트가 맞지 않으면 어떡하나요?", "제품 높이는 약 1.9cm이며 상단은 손목이 놓이는 방향으로 완만하게 이어집니다. 키보드마다 전면 높이와 경사가 다르므로, 사용 중인 키보드의 앞쪽 높이를 확인하면 더 정확하게 판단할 수 있습니다."],
  ["풀배열이나 미니 키보드에도 사용할 수 있나요?", "사용은 가능하지만 양끝 길이가 정확히 맞지 않을 수 있습니다. 풀배열에서는 팜레스트가 짧게, 60%·65% 배열에서는 길게 느껴질 수 있으므로 36cm 길이를 기준으로 책상 위 배치를 확인해 주세요."],
  ["원목이면 손목이 너무 딱딱하지 않나요?", "쿠션처럼 푹신하게 눌리는 제품은 아닙니다. 형태가 쉽게 변하지 않는 단단한 받침 위에 손목을 잠시 내려놓는 사용감으로, 부드러운 쿠션감보다 안정적인 지지감을 선호하는 분께 잘 맞습니다."],
  ["타이핑할 때 책상 위에서 밀리지 않나요?", "바닥 양쪽의 미끄럼 방지 패드가 움직임을 줄여줍니다. 책상이나 패드에 먼지와 물기가 있으면 고정력이 약해질 수 있으니 깨끗하고 마른 표면에서 사용해 주세요."],
  ["손목에 땀이 나거나 오염되면 어떻게 관리하나요?", "사용 후 부드러운 마른 천으로 가볍게 닦아 주세요. 물기가 묻었다면 바로 닦아 충분히 말리고, 알코올·강한 세제·거친 수세미는 표면을 손상시킬 수 있어 피하는 것이 좋습니다."],
  ["사진과 다른 색이나 나뭇결의 제품이 올 수도 있나요?", "네. 천연 블랙월넛은 제품마다 색의 농도와 결의 흐름, 무늬가 다릅니다. 촬영 환경과 화면 설정에 따라서도 색이 다르게 보일 수 있으며, 이러한 차이는 원목마다 생기는 고유한 특징입니다."],
  ["손목 통증을 줄여주는 제품인가요?", "손목을 잠시 올려놓을 자리를 마련하는 데스크 액세서리이며 의료기기는 아닙니다. 손목이 과하게 꺾이거나 불편함이 느껴지면 키보드와 팜레스트의 거리, 의자 높이와 자세를 함께 조정해 주세요."],
] as const;

export default function VoidBlackWalnutKeyboardPalmRestPage() {
  return (
    <BrandFrame brand="void">
      <Hero />

      <section className="relative aspect-[3/4] overflow-hidden bg-white">
        <Image
          src="/assets/void/keyboard-palm-rest/product-overview-curved.webp"
          alt="화이트 텐키리스 키보드 앞에서 얕은 중앙 곡면이 드러나는 블랙월넛 팜레스트"
          fill
        sizes="860px"
        className="object-cover object-center"
      />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[38%]"
          style={{ background: "linear-gradient(180deg,rgba(255,255,255,.96) 0%,rgba(255,255,255,.78) 48%,transparent 100%)" }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[18%]"
          style={{ background: "linear-gradient(180deg,transparent 0%,rgba(248,247,245,.72) 58%,#f8f7f5 100%)" }}
        />
        <div className="absolute inset-x-0 top-24 z-10 text-center">
          <h2 className="text-[68px] font-bold tracking-[-0.035em]"><Gradient>Void Keyboard Rest.</Gradient></h2>
        </div>
        <p className="absolute inset-x-0 bottom-24 z-10 text-center text-[31px] font-semibold text-[#493527]">
          손목이 머무는 자리까지, 책상의 일부가 되도록.
        </p>
      </section>

      <section className="bg-[#f8f7f5] px-12 py-36">
        <Title>한눈에 보는<br /><Gradient>Void Keyboard Rest.</Gradient></Title>
        <div className="mt-20 grid grid-cols-2 gap-6">
          {metrics.map(([value, label]) => <Metric key={label} value={value} label={label} />)}
        </div>
      </section>

      <Story
        eyebrow="WHY PALM REST"
        title={<>키보드는 올라와 있는데,<br /><Gradient>손목은 책상에 남아 있습니다.</Gradient></>}
        label="블랙월넛 팜레스트에 손목을 올리고 흰색 텐키리스 키보드를 타이핑하는 모습"
        image="/assets/void/keyboard-palm-rest/why-palm-rest-hands.webp"
        imageAlt="블랙월넛 팜레스트에 양쪽 손목을 올리고 흰색 텐키리스 키보드를 타이핑하는 모습"
      >
        키보드 앞에 비어 있는 높이만큼 손목은 공중에 머물거나 책상 모서리에 직접 닿게 됩니다.
        팜레스트는 그 사이에 손을 잠시 내려놓을 수 있는 안정적인 자리를 만듭니다.
      </Story>

      <section className="bg-white px-10 py-36">
        <Title>손목이 놓일 자리가 생기면,<br /><Gradient>타이핑 자세도 달라집니다.</Gradient></Title>
        <div className="mt-20 grid grid-cols-2 gap-6">
          <Scene title="비어 있는 높이" label="팜레스트 없이 키보드를 사용하는 손목 측면" image="/assets/void/keyboard-palm-rest/posture-without-rest.webp" imageAlt="팜레스트 없이 키보드를 사용해 손목이 책상에 직접 닿는 모습">
            손목이 공중에 머물거나 책상 모서리에 직접 닿는 상태
          </Scene>
          <Scene title="이어지는 받침" label="팜레스트와 함께 키보드를 사용하는 손목 측면" image="/assets/void/keyboard-palm-rest/posture-with-rest.webp" imageAlt="블랙월넛 팜레스트가 손목과 키보드 사이 높이를 이어주는 모습" accent>
            키보드 앞에 손목을 잠시 내려놓을 수 있는 자리가 생긴 상태
          </Scene>
        </div>
      </section>

      <Feature
        title={<>텐키리스 키보드 앞,<br /><Gradient>부족하지도 넘치지도 않게.</Gradient></>}
        label="36cm 팜레스트와 텐키리스 키보드의 가로 길이 비교 사진"
        image="/assets/void/keyboard-palm-rest/desk-white-keyboard.webp"
        imageAlt="화이트 텐키리스 키보드와 폭이 자연스럽게 맞는 36cm 블랙월넛 팜레스트"
        body="가로 약 36cm로 일반적인 텐키리스 키보드와 사용하기 좋은 길이입니다. 키보드의 양끝을 따라 손목이 움직이는 범위를 넓게 받쳐 책상 위 구성을 간결하게 정돈합니다."
        extra={<><div className="mt-14 grid grid-cols-2 gap-5"><Metric value="36cm" label="팜레스트 가로 길이" /><Metric value="8cm" label="손목을 받치는 폭" /></div><p className="mt-9 text-center text-[18px] font-medium text-[#86868b]">키보드마다 하우징 크기가 다르므로 구매 전 실제 길이를 확인해 주세요.</p></>}
      />
      <Feature
        title={<>평평한 나무 한 장이 아닌,<br /><Gradient>손목이 놓이는 곡면.</Gradient></>}
        label="손목이 닿는 중앙부의 완만한 곡면과 측면 높이 사진"
        image="/assets/void/keyboard-palm-rest/curved-surface-6deg.webp"
        imageAlt="화이트 키보드 앞 블랙월넛 팜레스트의 완만한 곡면과 6도 경사"
        body="손목이 닿는 위치를 따라 상단을 부드러운 곡면과 6° 경사로 다듬었습니다. 키보드 앞의 높이 차이를 완만하게 이어주고, 손목과 손바닥이 한 지점에만 닿지 않도록 넓은 면으로 받쳐줍니다."
      />

      <Comparison />

      <Feature
        title={<>모양보다 먼저 느껴지는,<br /><Gradient>부드러운 라운드 마감.</Gradient></>}
        label="전면과 측면의 둥글게 다듬은 모서리 클로즈업"
        image="/assets/void/keyboard-palm-rest/rounded-edge.webp"
        imageAlt="둥글고 매끄럽게 다듬은 블랙월넛 팜레스트 모서리 클로즈업"
        body="손목과 손바닥 가장자리가 닿는 전면과 네 귀퉁이를 둥글게 정리했습니다. 상단 곡면부터 측면까지 매끄럽게 다듬어 원목의 단단함은 유지하고 날카롭게 닿는 느낌은 줄였습니다."
      />
      <Feature
        title={<>손은 움직여도,<br /><Gradient>팜레스트는 제자리에서.</Gradient></>}
        label="제품을 뒤집어 양쪽의 넓은 실리콘 패드를 보여주는 사진"
        image="/assets/void/keyboard-palm-rest/anti-slip-pad.webp"
        imageAlt="블랙월넛 팜레스트 바닥의 넓은 검정색 미끄럼 방지 패드"
        body="바닥 양쪽의 넓은 실리콘 패드가 책상과의 마찰력을 높입니다. 타이핑 중 밀리는 움직임을 줄이고 원목과 책상 표면이 직접 맞닿는 마찰도 덜어줍니다."
      />

      <div
        style={{
          background:
            "linear-gradient(180deg,#fff 0%,#f8f5f2 5%,#f8f5f2 95%,#fff 100%)",
        }}
      >
        <Story
          eyebrow="BLACK WALNUT"
          tone="chapter"
          title={<>짙은 색보다 깊은,<br /><Gradient>블랙월넛의 표정.</Gradient></>}
          label="빛에 따라 깊은 브라운 나뭇결이 드러나는 블랙월넛 매크로 사진"
          image="/assets/void/keyboard-palm-rest/black-walnut-expression.webp"
          imageAlt="따뜻한 햇빛 아래 깊은 브라운 나뭇결이 드러나는 블랙월넛 팜레스트"
        >
          빛을 머금은 블랙월넛은 단순한 짙은 갈색에 머물지 않습니다. 보는 각도에 따라 결의 흐름과
          색의 깊이가 다르게 드러나고, 손끝에는 매끄럽게 다듬은 원목의 밀도감이 남습니다.
        </Story>

        <section className="bg-transparent px-12 py-40">
          <Eyebrow>NATURAL GRAIN</Eyebrow>
          <h2 className="mt-9 text-[64px] font-bold leading-[1.16] tracking-[-0.035em]">같은 블랙월넛,<br /><Gradient>서로 다른 하나의 결.</Gradient></h2>
          <div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px]">
            <Image
              src="/assets/void/keyboard-palm-rest/natural-grain-variations.webp"
              alt="서로 다른 색 농도와 나뭇결을 가진 블랙월넛 팜레스트 세 개"
              fill
              sizes="764px"
              className="object-cover"
            />
          </div>
          <p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">
            하나의 블랙월넛이라도 나무가 자란 시간과 부위에 따라 결의 흐름과 색의 깊이가 달라집니다.
            똑같은 무늬가 반복되지 않아, 받아보는 제품마다 하나뿐인 표정을 갖습니다.
          </p>
        </section>

        <Care />
      </div>
      <DeskStyles />
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
    <section className="relative min-h-[1440px] overflow-hidden bg-[#f2f0ed]">
      <Image
        src="/assets/void/keyboard-palm-rest/hero-v2.webp"
        alt="밝은 데스크 위 텐키리스 키보드와 블랙월넛 팜레스트"
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
      <div className="relative z-10 flex min-h-[1440px] flex-col items-center px-8 pb-24 pt-10 text-center">
        <p className="text-[39px] font-semibold text-[#493527] [text-shadow:0_2px_16px_rgba(255,255,255,.96),0_1px_3px_rgba(255,255,255,.96)]">Void Keyboard Rest</p>
        <h1 className="mt-8 whitespace-nowrap text-[68px] font-bold leading-[1.04] tracking-[-0.045em] text-[#201a16] [text-shadow:0_2px_18px_rgba(255,255,255,.98),0_1px_4px_rgba(255,255,255,.98)]">타이핑이 시작되는 자리부터.</h1>
        <p className="mt-auto text-[29px] font-medium leading-[1.6] text-[#fffaf5] [text-shadow:0_3px_18px_rgba(47,30,19,0.78),0_1px_3px_rgba(47,30,19,0.9)]">텐키리스 키보드 앞의 높이 차이를<br />부드럽게 이어주는 36cm 블랙월넛 팜레스트.</p>
      </div>
    </section>
  );
}

function Feature({ title, label, body, extra, image, imageAlt }: { title: ReactNode; label: string; body: string; extra?: ReactNode; image?: string; imageAlt?: string }) {
  return (
    <section className="bg-white px-12 pb-36 pt-32">
      <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-[3px] border-[#8a6246]">
        <Check className="h-9 w-9 text-[#8a6246]" strokeWidth={3.5} />
      </div>
      <h2 className="mt-10 text-[63px] font-bold leading-[1.15] tracking-[-0.032em]">{title}</h2>
      {image ? <div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px]"><Image src={image} alt={imageAlt ?? label} fill sizes="764px" className="object-cover" /></div> : <Photo className="mt-24" label={label} />}
      <p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">{body}</p>
      {extra}
    </section>
  );
}

function Story({ eyebrow, title, label, children, tone = "white", image, imageAlt }: { eyebrow: string; title: ReactNode; label: string; children: ReactNode; tone?: "white" | "chapter"; image?: string; imageAlt?: string }) {
  return (
    <section className={(tone === "chapter" ? "bg-transparent " : "bg-white ") + "px-12 py-40"}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-9 text-[64px] font-bold leading-[1.16] tracking-[-0.035em]">{title}</h2>
      {image ? <div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px]"><Image src={image} alt={imageAlt ?? label} fill sizes="764px" className="object-cover" /></div> : <Photo className="mt-24" label={label} />}
      <p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">{children}</p>
    </section>
  );
}

function Comparison() {
  const rows = [["지지감", "부드럽고 푹신함", "단단하고 안정적"], ["형태", "압력에 따라 눌림", "형태를 일정하게 유지"], ["표면", "원단의 촉감", "매끄러운 원목"], ["관리", "소재에 맞는 세탁", "마른 천으로 관리"], ["분위기", "패브릭 액세서리", "원목 데스크 오브제"]];
  return (
    <section className="bg-white px-10 py-36">
      <Title>푹 꺼지는 감촉보다,<br /><Gradient>흔들리지 않는 지지감.</Gradient></Title>
      <div className="mt-20 overflow-hidden rounded-[28px] border border-[#d2d2d7]">
        <table className="w-full table-fixed border-collapse text-center">
          <caption className="sr-only">쿠션형과 블랙월넛 원목 팜레스트 특징 비교</caption>
          <thead><tr className="bg-[#f5f5f7]"><th className="w-[25%] px-3 py-7 text-[21px]">구분</th><th className="border-l text-[20px]">패브릭·쿠션형</th><th className="border-l bg-[#f3ebe4] text-[20px] text-[#6b513f]">블랙월넛 원목</th></tr></thead>
          <tbody>{rows.map(([label, cushion, walnut]) => <tr key={label} className="border-t"><th className="px-3 py-7 text-[20px]">{label}</th><td className="border-l px-3 text-[19px] text-[#6e6e73]">{cushion}</td><td className="border-l bg-[#f9f5f1] px-3 text-[19px] font-bold text-[#6b513f]">{walnut}</td></tr>)}</tbody>
        </table>
      </div>
      <p className="mt-10 text-center text-[21px] font-medium leading-[1.6] text-[#6e6e73]">부드러움과 단단함은 취향의 차이입니다.<br />형태가 쉽게 변하지 않는 받침을 선호하는 분을 위한 선택입니다.</p>
    </section>
  );
}

function DeskStyles() {
  return (
    <section className="bg-white px-12 py-40">
      <Title>키보드가 달라도,<br /><Gradient>책상의 분위기는 자연스럽게.</Gradient></Title>
      <div className="mt-20 grid grid-cols-3 gap-5">
        {[
          ["WHITE", "화이트 키보드", "/assets/void/keyboard-palm-rest/desk-white-keyboard.webp", "화이트 텐키리스 키보드와 블랙월넛 팜레스트"],
          ["BLACK", "블랙 키보드", "/assets/void/keyboard-palm-rest/desk-black-keyboard.webp", "블랙 텐키리스 키보드와 블랙월넛 팜레스트"],
          ["METAL", "메탈 키보드", "/assets/void/keyboard-palm-rest/desk-metal-keyboard.webp", "메탈 하우징 텐키리스 키보드와 블랙월넛 팜레스트"],
        ].map(([key, title, image, alt]) => (
          <div key={key}>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[28px]">
              <Image src={image} alt={alt} fill sizes="240px" className="object-cover" />
            </div>
            <article className="mt-5 rounded-[24px] border border-[#e3ddd7] bg-[#faf8f6] px-5 py-6 text-center">
              <p className="text-[16px] font-bold tracking-[0.12em] text-[#8a6246]">{key}</p>
              <h3 className="mt-3 text-[24px] font-bold">{title}</h3>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

function Recommended() {
  const items = [
    {
      title: "텐키리스 키보드 사용자",
      body: "36cm 길이의 팜레스트를 키보드 앞에 자연스럽게 맞춰 사용하고 싶은 분께 잘 맞습니다.",
      image: "/assets/void/keyboard-palm-rest/product-overview-white-keyboard.webp",
      alt: "텐키리스 키보드와 36cm 블랙월넛 팜레스트를 함께 사용하는 모습",
    },
    {
      title: "단단한 받침을 선호하는 분",
      body: "푹 꺼지는 쿠션보다 형태를 일정하게 유지하는 원목 받침을 선호하는 분께 잘 맞습니다.",
      image: "/assets/void/keyboard-palm-rest/black-walnut-expression.webp",
      alt: "형태를 단단하게 유지하는 블랙월넛 원목 팜레스트",
    },
    {
      title: "간편한 관리를 원하는 분",
      body: "먼지와 보풀이 신경 쓰이는 패브릭 대신 매끄러운 표면을 간편하게 관리하고 싶은 분께 잘 맞습니다.",
      image: "/assets/void/keyboard-palm-rest/care-guide.webp",
      alt: "부드러운 마른 천으로 블랙월넛 팜레스트를 닦는 모습",
    },
    {
      title: "우드톤 데스크를 좋아하는 분",
      body: "기능적인 데스크 액세서리도 책상의 소재와 분위기에 맞춰 고르고 싶은 분께 잘 맞습니다.",
      image: "/assets/void/keyboard-palm-rest/recommended-wood-desk.webp",
      alt: "월넛 소재의 데스크 액세서리로 꾸민 따뜻한 우드톤 작업 공간",
    },
  ];
  return (
    <section className="bg-white px-12 py-40">
      <Title>이런 분께 잘 맞습니다.</Title>
      <p className="mx-auto mt-8 max-w-[700px] text-center text-[26px] font-medium leading-[1.6] text-[#6e6e73]">
        손목이 놓이는 자리와 책상 위 분위기를 함께 바꾸고 싶은 분들입니다.
      </p>
      <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-16">
        {items.map(({ title, body, image, alt }) => (
          <article key={title}>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px]">
              <Image src={image} alt={alt} fill sizes="370px" className="object-cover" />
            </div>
            <h3 className="mt-7 whitespace-nowrap text-[29px] font-bold leading-[1.3] tracking-[-0.02em]">
              {title}
            </h3>
            <p className="mt-3 text-[20px] font-medium leading-[1.55] text-[#6e6e73]">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    {
      review:
        "처음에는 나무라서 손목에 너무 딱딱하게 느껴지지 않을까 걱정했는데, 생각보다 손목을 받쳐주는 느낌이 안정적이에요. 가운데가 완만하게 낮아지는 형태라 손을 올렸을 때 한 부분만 눌리는 느낌도 적었습니다. 텐키리스 키보드와 36cm 길이도 자연스럽게 맞아서 오래 타이핑할 때 손목을 잠시 내려놓기 편해요.",
    },
    {
      review:
        "사진으로 볼 때보다 실제 블랙월넛 색감이 더 깊고 고급스럽게 느껴져요. 같은 브라운 안에서도 나뭇결이 자연스럽게 이어져 있어서 단순한 키보드 액세서리보다 작은 원목 소품처럼 보입니다. 화이트 키보드와 함께 사용하고 있는데 따뜻한 대비가 생겨 책상 분위기가 훨씬 차분해졌어요.",
    },
    {
      review:
        "표면이 매끈하게 정리되어 있고 손이 자주 닿는 앞쪽 모서리도 둥글게 다듬어져 있어요. 손목을 좌우로 움직일 때 거칠게 걸리는 부분이 없고, 원목인데도 촉감이 부드러운 편이라 만족스럽습니다. 패브릭처럼 보풀이나 먼지가 달라붙지 않아 마른 천으로 가볍게 닦아 관리할 수 있는 점도 좋아요.",
    },
    {
      review:
        "키보드에 맞추려고 구매했는데 실제로 놓아보니 데스크테리어 효과가 더 크게 느껴집니다. 짙은 월넛 톤이 블랙 키보드와 잘 어울리고, 키보드를 치운 뒤에도 책상 위에 그대로 두기 좋을 만큼 디자인이 깔끔해요. 바닥의 실리콘 패드가 책상을 잘 잡아줘서 타이핑할 때 쉽게 밀리지 않는 점도 마음에 듭니다.",
    },
  ];

  return (
    <section className="bg-white px-10 pb-32 pt-40">
      <div className="mx-auto max-w-[780px]">
        <div className="flex items-center justify-center gap-4" aria-label="후기 영역 미리보기">
          <p className="text-[34px] font-bold tracking-[-0.02em] text-[#1d1d1f]">5.0</p>
          <p className="text-[36px] font-bold tracking-[0.12em] text-[#F5B700]">★★★★★</p>
        </div>
        <h2 className="mt-6 text-center text-[58px] font-bold leading-tight tracking-[-0.025em] text-[#1d1d1f]">
          사용 후기를 미리 만나보세요
        </h2>
        <p className="mt-5 text-center text-[22px] font-medium text-[#6e6e73]">
          블랙월넛 팜레스트를 사용하며 느낄 수 있는 주요 경험을 담았습니다.
        </p>

        <div className="mt-16 space-y-6">
          {reviews.map(({ review }) => (
            <article
              key={review}
              className="rounded-[28px] border border-[#e5ddd6] bg-[#faf7f3] px-8 py-8"
            >
              <div className="flex items-center gap-4">
                <p className="text-[24px] font-bold tracking-[0.08em] text-[#F5B700]">★★★★★</p>
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

function Care() {
  const items = [["01", "마른 천으로", "마른 천으로 가볍게 닦아 주세요."], ["02", "물기는 바로", "젖었을 때는 즉시 닦아 주세요."], ["03", "강한 세제 없이", "알코올과 강한 세제는 피해주세요."], ["04", "고온을 피해", "직사광선과 화기 가까이에 두지 마세요."]];
  return (
    <section className="bg-transparent px-12 py-40">
      <Eyebrow>CARE GUIDE</Eyebrow><h2 className="mt-9 text-[64px] font-bold leading-[1.16]">오래 곁에 두기 위한,<br /><Gradient>간단한 관리.</Gradient></h2>
      <div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px]">
        <Image
          src="/assets/void/keyboard-palm-rest/care-guide.webp"
          alt="부드러운 마른 천으로 블랙월넛 팜레스트 표면을 닦는 모습"
          fill
          sizes="764px"
          className="object-cover"
        />
      </div>
      <div className="mt-14 grid grid-cols-2 gap-5">{items.map(([step, title, body]) => <article key={step} className="rounded-[26px] border border-[#e1d6cc] bg-white p-8"><p className="text-[18px] font-bold text-[#8a6246]">{step}</p><h3 className="mt-4 text-[25px] font-bold">{title}</h3><p className={"mt-4 text-[19px] font-medium text-[#6e6e73] " + (step === "01" ? "whitespace-nowrap" : "")}>{body}</p></article>)}</div>
    </section>
  );
}

function Closing() {
  return (
    <section className="relative min-h-[1440px] overflow-hidden bg-[#eee8e2] px-12 pb-40 pt-8">
      <Image
        src="/assets/void/keyboard-palm-rest/closing-typing-desk.webp"
        alt="우드톤 데스크에서 블랙월넛 팜레스트에 손목을 올리고 텐키리스 키보드를 타이핑하는 모습"
        fill
        sizes="860px"
        className="object-cover object-center"
      />
      <Fade />
      <div className="relative z-10 text-center">
        <h2 className="text-[66px] font-semibold text-[#493527]">Void Keyboard Rest</h2>
        <p className="mt-4 text-[31px] font-medium text-[#6e6259]">손목이 머무는 36cm.</p>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="bg-white px-10 pb-36 pt-40">
      <InfoTitle>질문에 답해드립니다.</InfoTitle>
      <ul className="mt-24">
        {faqs.map(([question, answer]) => (
          <li key={question} className="border-t border-[#d2d2d7] py-7 last:border-b">
            <div className="flex items-start justify-between gap-6">
              <p className="text-[28px] font-semibold leading-[1.35] tracking-[-0.015em] text-[#1d1d1f]">{question}</p>
              <ChevronDown className="mt-1.5 h-7 w-7 shrink-0 text-[#86868b]" strokeWidth={2.5} />
            </div>
            <p className="mt-4 pr-12 text-[22px] font-medium leading-[1.55] tracking-[-0.01em] text-[#6e6e73]">{answer}</p>
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
      <div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px]">
        <Image
          src="/assets/void/keyboard-palm-rest/size-guide.webp"
          alt="Void Keyboard Rest 가로 36cm, 세로 8cm 실측 안내"
          fill
          sizes="780px"
          className="object-cover"
        />
      </div>
      <Rows rows={[["가로", "약 36cm"], ["세로", "약 8cm"], ["높이", "약 1.9cm"], ["권장 키보드", "텐키리스 배열"]]} />
    </section>
  );
}

function Components() {
  return (
    <section className="bg-white px-10 pb-36 pt-32">
      <InfoTitle>구성품</InfoTitle>
      <div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px]">
        <Image
          src="/assets/void/keyboard-palm-rest/components.webp"
          alt="Void Keyboard Rest 본체 구성품"
          fill
          sizes="780px"
          className="object-cover"
        />
      </div>
      <p className="mt-7 text-center text-[28px] font-semibold tracking-[-0.01em] text-[#1d1d1f]">Void Keyboard Rest 본체 x1</p>
    </section>
  );
}

function ProductInfo() {
  const info = [["품명 및 모델명", "Void Keyboard Rest"], ["용도", "키보드용 원목 팜레스트"], ["권장 배열", "텐키리스 키보드"], ["색상", "블랙월넛"], ["소재", "블랙월넛 원목 · 실리콘 패드"], ["크기", "약 360 × 80 × 19mm"], ["주요 특징", "곡면형 상단 · 라운드 모서리 · 미끄럼 방지 패드"], ["구성품", "Void Keyboard Rest 본체 1개"], ["제조자(수입자)", "보이드 투 노바"], ["제조국", "확인 후 업데이트 예정"], ["품질보증기준", "관련 법령 및 소비자분쟁해결기준에 따름"], ["A/S 책임자와 전화번호", "010-6393-0907"]];
  return <section className="bg-white px-10 pb-36 pt-32"><InfoTitle>제품 정보</InfoTitle><Rows rows={info} /></section>;
}

function Notices() {
  return (
    <section className="bg-white px-10 pb-36 pt-32">
      <InfoTitle>기타 안내</InfoTitle>
      <div className="mx-auto mt-24 max-w-[720px] space-y-12">
        <Notice title="취급 시 주의사항" bullets={["평평하고 흔들림 없는 책상 위에서 사용해 주세요.", "제품을 던지거나 강한 충격을 가하지 마세요.", "원목 표면에 날카로운 물건이 직접 닿지 않도록 주의해 주세요.", "물기와 화기, 직사광선 및 높은 온도에 가까이 두지 마세요.", "본 제품은 의료기기가 아니며 개인의 체형과 자세에 따라 사용감이 다를 수 있습니다."]} />
        <Notice title="관리 방법" body="부드러운 마른 천으로 가볍게 닦아 주세요. 물이나 알코올, 강한 화학 세제 사용은 피하고 실리콘 패드에 먼지나 이물질이 쌓이지 않도록 관리해 주세요." />
        <Notice title="색상 및 무늬 안내" body="사용하시는 화면과 촬영 환경에 따라 실제 색상이 다소 다르게 보일 수 있습니다. 천연 원목의 나뭇결과 색 농도, 무늬의 방향은 제품마다 자연스러운 차이가 있을 수 있습니다." />
        <Notice title="사양 안내" body="제품의 크기와 중량은 측정 방식에 따라 약간의 차이가 있을 수 있습니다." />
        <Notice title="A/S 안내" body="제품 초기 불량은 수령 후 7일 이내 확인해 주시면 교환 도와드립니다. 문의는 스토어 고객센터를 통해 접수해 주세요." />
        <Notice title="배송 안내" bullets={["배송기간 — 평균 배송기간은 2~5일 (일부 품목은 출고지 및 반품지 주소가 다를 수 있음)", "발송 마감시간 — 평일 기준 당일 오후 4시 이전 주문건까지 당일 발송 (일부품목 제외). 오후 4시 이후 주문건은 +1일 이후 발송 (평일기준)", "제주도·도서산간 지역배송비 — 제주도/도서산간 지역의 경우 배송비가 추가됩니다. (해당 지역마다 배송비가 다를 수 있음)"]} />
        <ExchangeGuide />
      </div>
    </section>
  );
}

function Scene({ title, label, children, accent = false, image, imageAlt }: { title: string; label: string; children: ReactNode; accent?: boolean; image?: string; imageAlt?: string }) {
  return <article className={(accent ? "border-[#ddd4cc] bg-[#f4f1ed]" : "border-[#dedede] bg-[#f7f7f7]") + " rounded-[28px] border p-5"}>{image ? <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[24px]"><Image src={image} alt={imageAlt ?? label} fill sizes="370px" className="object-cover" /></div> : <Photo label={label} />}<h3 className="mt-7 text-[29px] font-bold">{title}</h3><p className="mt-4 text-[20px] font-medium leading-[1.55] text-[#6e6e73]">{children}</p></article>;
}

function Title({ children }: { children: ReactNode }) { return <h2 className="text-center text-[61px] font-bold leading-[1.17] tracking-[-0.035em]">{children}</h2>; }
function Gradient({ children }: { children: ReactNode }) { return <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg,#493527,#9a775d)" }}>{children}</span>; }
function Eyebrow({ children }: { children: ReactNode }) { return <p className="text-[22px] font-bold tracking-[0.13em] text-[#8a6246]">{children}</p>; }
function Metric({ value, label }: { value: string; label: string }) { return <div className="rounded-[28px] border border-[#e7e1db] bg-white px-5 py-11 text-center shadow-[0_10px_30px_rgba(73,53,39,0.06)]"><p className="whitespace-nowrap text-[48px] font-bold text-[#6b513f]">{value}</p><p className="mt-4 text-[20px] font-semibold text-[#6e6e73]">{label}</p></div>; }
function Rows({ rows }: { rows: string[][] }) { return <dl className="mx-auto mt-24 max-w-[720px]">{rows.map(([label, value]) => <div key={label} className="flex gap-8 border-b border-[#d2d2d7] py-6 first:border-t"><dt className="w-[200px] shrink-0 text-[22px] font-semibold text-[#1d1d1f]">{label}</dt><dd className="flex-1 text-[22px] font-medium leading-snug text-[#6e6e73]">{value}</dd></div>)}</dl>; }
function InfoTitle({ children }: { children: ReactNode }) { return <h2 className="text-center text-[58px] font-bold leading-tight tracking-[-0.025em] text-[#1d1d1f]">{children}</h2>; }
function Notice({ title, body, bullets }: { title: string; body?: string; bullets?: string[] }) { return <div><h3 className="text-[28px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">{title}</h3>{body ? <p className="mt-4 text-[22px] font-medium leading-snug tracking-[-0.01em] text-[#6e6e73]">{body}</p> : null}{bullets ? <ul className="mt-4 space-y-2 text-[22px] font-medium leading-snug tracking-[-0.01em] text-[#6e6e73]">{bullets.map((item) => <li key={item} className="flex gap-3"><span className="shrink-0">·</span><span>{item}</span></li>)}</ul> : null}</div>; }
function ExchangeGuide() { const groups = [{ title: "교환·반품 가능", items: ["상품 수령 후 7일 이내 구매한 몰에서 교환 또는 반품을 신청한 경우", "구매자의 단순 변심은 상품 수령 후 7일 이내 가능하며 반품 배송비가 발생할 수 있습니다.", "상품 초기 불량에 대한 교환과 반품은 무료이며 그 외에는 왕복 택배비가 발생할 수 있습니다.", "교환·반품 신청 후 상품은 포장과 구성품을 받은 상태로 보관해 주세요."] }, { title: "교환·반품 불가", items: ["교환 또는 반품 요청 기간이 지난 경우", "구매자 책임으로 상품이나 포장이 훼손된 경우", "사용 흔적으로 상품 가치가 현저히 감소한 경우", "구성품이 누락된 경우", "고객 요청으로 별도 제작 또는 변경된 상품인 경우"] }]; return <div><h3 className="text-[28px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">교환·반품 안내</h3><p className="mt-4 text-[22px] font-medium leading-snug text-[#6e6e73]">교환 및 반품 접수는 구매하신 몰에서 신청해 주세요.</p>{groups.map(({ title, items }) => <div key={title} className="mt-8"><p className="text-[22px] font-semibold text-[#1d1d1f]">{title}</p><ul className="mt-3 space-y-2 text-[22px] font-medium leading-snug text-[#6e6e73]">{items.map((item) => <li key={item} className="flex gap-3"><span>·</span><span>{item}</span></li>)}</ul></div>)}<div className="mt-8"><p className="text-[22px] font-semibold text-[#1d1d1f]">변경·취소</p><p className="mt-3 text-[22px] font-medium leading-snug text-[#6e6e73]">취소나 변경은 실제 출고가 되지 않았을 경우에만 가능합니다. 상품 출고 후 취소 또는 변경 시 왕복 택배비는 구매자 부담입니다.</p></div></div>; }
function Fade() { return <div className="pointer-events-none absolute inset-x-0 top-0 h-[42%]" style={{ background: "linear-gradient(180deg,#fff 0%,rgba(255,255,255,.62) 56%,transparent 100%)" }} />; }
function Photo({ className = "", label, fill = false }: { className?: string; label: string; fill?: boolean }) { return <div aria-label={"사진 자리: " + label} className={(fill ? "absolute inset-0 " : "relative aspect-[3/4] w-full rounded-[28px] border border-[#e5e1dc] ") + "overflow-hidden bg-[#f3f2f0] " + className} />; }
