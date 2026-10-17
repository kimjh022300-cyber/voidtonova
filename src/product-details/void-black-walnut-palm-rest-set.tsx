import { BrandFrame } from "@/components/product-detail/brand-frame";
import { Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

const metrics = [
  ["2 PIECES", "키보드용 + 마우스용"],
  ["36cm", "텐키리스 키보드용"],
  ["16cm", "마우스용"],
  ["CURVED", "손목을 위한 완만한 곡면"],
  ["WALNUT", "하나로 이어지는 블랙월넛"],
  ["6-PAD", "두 제품의 미끄럼 방지 패드"],
] as const;

const faqs = [
  ["세트에는 무엇이 포함되나요?", "키보드용 팜레스트 1개와 마우스용 팜레스트 1개가 함께 들어 있습니다. 키보드용은 가로 36cm, 마우스용은 가로 16cm이며 미끄럼 방지 패드는 각 제품 바닥에 부착되어 있습니다."],
  ["제 키보드와 길이가 잘 맞을까요?", "키보드용은 가로 약 36cm로 일반적인 텐키리스 키보드와 나란히 두기 좋은 길이입니다. 같은 텐키리스라도 하우징 너비는 다를 수 있고, 풀배열에서는 짧게·미니 배열에서는 길게 느껴질 수 있으니 구매 전 키보드의 실제 가로 길이와 비교해 주세요."],
  ["마우스를 움직일 때 방해되지 않나요?", "마우스용은 손목 바로 아래나 조금 뒤쪽에 두면 이동 공간을 확보할 수 있습니다. 손의 크기와 마우스 이동 범위에 맞춰 앞뒤 위치를 조정해 주세요. 넓게 움직이는 경우에는 손목을 고정하기보다 필요할 때 잠시 받치는 용도로 사용하는 것이 좋습니다."],
  ["두 제품의 색과 나뭇결이 완전히 같나요?", "아닙니다. 천연 블랙월넛은 제품마다 색 농도와 결의 흐름, 무늬가 다릅니다. 세트의 두 제품도 서로 다를 수 있으며, 동일한 소재 안에서 자연스럽게 어우러지는 차이입니다. 촬영 환경과 화면 설정에 따라서도 색이 다르게 보일 수 있습니다."],
  ["원목이면 손목이 너무 딱딱하지 않나요?", "쿠션처럼 푹신하게 눌리는 제품은 아닙니다. 형태가 쉽게 변하지 않는 단단한 받침 위에 손목을 잠시 내려놓는 사용감으로, 부드러운 쿠션감보다 안정적인 지지감을 선호하는 분께 잘 맞습니다. 두 제품 모두 상단은 완만한 곡면, 가장자리는 라운드 마감입니다."],
  ["장패드나 데스크 매트 위에서도 사용할 수 있나요?", "사용할 수 있습니다. 다만 매트의 소재와 표면 질감에 따라 미끄럼 방지 패드의 고정력은 달라질 수 있습니다. 먼지와 물기가 있으면 밀리기 쉬우니 깨끗하고 마른 표면에서 사용해 주세요."],
  ["손목 통증을 줄여주는 제품인가요?", "손목을 잠시 올려놓을 자리를 마련하는 데스크 액세서리이며 의료기기는 아닙니다. 손목이 과하게 꺾이거나 불편함이 느껴지면 키보드·마우스와 팜레스트의 거리, 의자 높이와 자세를 함께 조정해 주세요."],
  ["땀이 나거나 오염되면 어떻게 닦나요?", "사용 후 부드러운 마른 천으로 가볍게 닦아 주세요. 물기가 묻었다면 바로 닦아 충분히 말리고, 알코올·강한 세제·거친 수세미는 표면을 손상시킬 수 있어 피하는 것이 좋습니다."],
] as const;

export default function VoidBlackWalnutPalmRestSetPage() {
  return (
    <BrandFrame brand="void">
      <Hero />

      <section className="relative aspect-[3/4] overflow-hidden bg-white">
        <Image
          src="/assets/void/palm-rest-set/product-overview-v2.webp"
          alt="밝은 데스크 위에 키보드용과 마우스용 블랙월넛 팜레스트를 함께 놓은 모습"
          fill
          sizes="860px"
          className="object-cover object-center"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[18%]"
          style={{ background: "linear-gradient(180deg,transparent 0%,rgba(248,247,245,.72) 58%,#f8f7f5 100%)" }}
        />
        <div className="absolute inset-x-0 top-24 z-10 text-center">
          <h2 className="text-[72px] font-bold tracking-[-0.04em]"><Gradient>Void Walnut Duo.</Gradient></h2>
        </div>
        <p className="absolute inset-x-0 bottom-32 z-10 text-center text-[31px] font-semibold text-[#493527]">
          손이 머무는 두 자리를, 하나의 블랙월넛으로.
        </p>
      </section>

      <section className="bg-[#f8f7f5] px-12 py-36">
        <Title>한눈에 보는<br /><Gradient>Void Walnut Duo.</Gradient></Title>
        <div className="mt-20 grid grid-cols-2 gap-6">
          {metrics.map(([value, label]) => <Metric key={label} value={value} label={label} />)}
        </div>
      </section>

      <Story
        eyebrow="WHY DUO"
        title={<>손이 머무는 책상 위에,<br /><Gradient>두 개의 블랙월넛.</Gradient></>}
        label="키보드용과 마우스용 블랙월넛 팜레스트를 함께 놓고 타이핑하는 장면"
        images={[
          { src: "/assets/void/palm-rest-set/why-duo-v2.webp", alt: "흰 키보드 앞에서 양손을 키보드용 팜레스트에 올린 채 타이핑하고, 오른쪽에 마우스용 팜레스트가 놓인 모습" },
        ]}
      >
        긴 받침이 키보드 앞 양 손목을 받치고, 작은 받침이 마우스 곁에 자리를 지킵니다. 타이핑하다가 마우스로 손을 옮길 때도 같은 블랙월넛이 이어집니다.
      </Story>

      <BeforeAfter />

      <section className="bg-white px-12 py-40">
        <Title>서로 다른 두 움직임을,<br /><Gradient>하나의 세트로.</Gradient></Title>
        <Photo className="mt-24" label="키보드와 마우스 앞에 두 팜레스트를 나란히 배치한 전체 사용 사진" src="/assets/void/palm-rest-set/source/duo-black-setup.webp" alt="블랙 키보드와 마우스 앞에 두 블랙월넛 팜레스트를 함께 배치한 모습" />
        <div className="mt-10 grid grid-cols-2 gap-6">
          <Role eyebrow="KEYBOARD" title="타이핑이 시작되는 자리" body="36cm 길이가 텐키리스 키보드 앞을 따라가며 양손을 위한 넓은 받침 공간을 만듭니다." />
          <Role eyebrow="MOUSE" title="움직임이 이어지는 자리" body="16cm의 작은 받침이 마우스를 사용하는 손목 곁에 필요한 만큼의 자리를 만듭니다." accent />
        </div>
      </section>

      <Feature
        title={<>36cm와 16cm,<br /><Gradient>필요한 곳에 필요한 만큼.</Gradient></>}
        label="키보드용 36cm와 마우스용 16cm 팜레스트 크기 비교 사진"
        images={[{ src: "/assets/void/palm-rest-set/size-comparison-v2.webp", alt: "36cm 키보드용과 16cm 마우스용 블랙월넛 팜레스트의 크기 차이" }]}
        body="키보드 앞에는 양손을 위한 긴 받침을, 마우스 옆에는 한 손목을 위한 작은 받침을 배치했습니다. 책상 공간을 과하게 차지하지 않으면서 각 사용 영역을 분명하게 나눕니다."
        extra={<div className="mt-14 grid grid-cols-2 gap-5"><Metric value="36 × 8cm" label="텐키리스 키보드용" /><Metric value="16 × 7.8cm" label="마우스용" /></div>}
      />

      <section className="bg-white px-10 py-36">
        <Title>각각 놓아도 좋지만,<br /><Gradient>함께 놓을 때 완성되는 이유.</Gradient></Title>
        <Photo className="mt-20" label="같은 블랙월넛 소재로 맞춘 키보드용과 마우스용 팜레스트" src="/assets/void/palm-rest-set/source/duo-light-setup.webp" alt="화이트 키보드 곁에 키보드용과 마우스용 블랙월넛 팜레스트를 함께 놓은 모습" />
        <div className="mt-20 grid grid-cols-3 gap-5">
          {[
            ["01", "이어지는 높이", "키보드와 마우스를 오갈 때 비슷한 높이의 받침이 손목 곁을 이어줍니다."],
            ["02", "통일된 소재", "서로 다른 형태를 같은 블랙월넛으로 맞춰 책상 위 소재감을 정돈합니다."],
            ["03", "완성된 균형", "한쪽만 놓았을 때보다 좌우 공간이 자연스럽게 연결되어 보입니다."],
          ].map(([step, title, body]) => (
            <article key={step} className="rounded-[28px] border border-[#e3ddd7] bg-[#faf8f6] px-6 py-9">
              <p className="text-[16px] font-bold tracking-[0.12em] text-[#8a6246]">{step}</p>
              <h3 className="mt-5 whitespace-nowrap text-[23px] font-bold tracking-[-0.02em]">{title}</h3>
              <p className="mt-4 text-[18px] font-medium leading-[1.55] text-[#6e6e73]">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <Feature
        title={<>평평한 나무 두 장이 아닌,<br /><Gradient>손목을 따라 흐르는 곡면.</Gradient></>}
        label="두 팜레스트의 완만한 상단 곡면을 나란히 보여주는 측면 사진"
        images={[
          { src: "/assets/void/keyboard-palm-rest/curved-surface-6deg.webp", alt: "키보드용 팜레스트의 완만한 곡면" },
          { src: "/assets/void/mouse-palm-rest/curved-surface.webp", alt: "마우스용 팜레스트의 완만한 곡면" },
        ]}
        body="두 제품 모두 손목이 닿는 위치를 따라 상단을 완만한 곡면으로 다듬었습니다. 키보드와 마우스를 오갈 때도 일관된 원목의 촉감과 안정적인 받침을 경험할 수 있습니다."
      />

      <Comparison />

      <Feature
        title={<>손이 닿는 모든 가장자리까지,<br /><Gradient>부드러운 라운드 마감.</Gradient></>}
        label="키보드용과 마우스용 팜레스트의 둥근 모서리 클로즈업"
        images={[
          { src: "/assets/void/keyboard-palm-rest/rounded-edge.webp", alt: "키보드용 팜레스트의 둥글게 다듬은 모서리" },
          { src: "/assets/void/mouse-palm-rest/rounded-edge.webp", alt: "마우스용 팜레스트의 둥글게 다듬은 모서리" },
        ]}
        body="손목과 손바닥 가장자리가 닿는 전면과 네 귀퉁이를 둥글게 정리했습니다. 곡면부터 측면까지 매끄럽게 다듬어 원목의 단단함은 유지하고 날카롭게 닿는 느낌은 줄였습니다."
      />
      <Feature
        title={<>두 개의 받침 모두,<br /><Gradient>움직임은 적게.</Gradient></>}
        label="키보드용 양쪽 패드와 마우스용 네 모서리 패드를 보여주는 사진"
        images={[
          { src: "/assets/void/keyboard-palm-rest/anti-slip-pad.webp", alt: "키보드용 팜레스트 바닥의 미끄럼 방지 패드" },
          { src: "/assets/void/mouse-palm-rest/anti-slip-pads.webp", alt: "마우스용 팜레스트 바닥 네 모서리의 미끄럼 방지 패드" },
        ]}
        body="키보드용 바닥 양쪽과 마우스용 바닥 네 모서리의 미끄럼 방지 패드가 책상과의 마찰력을 높입니다. 타이핑하거나 마우스를 움직인 뒤 손목을 다시 올려놓을 때 받침이 쉽게 밀리는 움직임을 줄여줍니다."
      />

      <div style={{ background: "linear-gradient(180deg,#fff 0%,#f8f5f2 5%,#f8f5f2 95%,#fff 100%)" }}>
        <Story
          eyebrow="BLACK WALNUT"
          tone="chapter"
          title={<>두 개의 형태를 잇는,<br /><Gradient>하나의 블랙월넛.</Gradient></>}
          label="두 팜레스트의 깊은 브라운 나뭇결이 함께 보이는 매크로 사진"
          images={[
            { src: "/assets/void/palm-rest-set/black-walnut-duo-macro.webp", alt: "하나의 블랙월넛 소재로 이어지는 키보드용과 마우스용 팜레스트의 나뭇결 클로즈업" },
          ]}
        >
          차분한 브라운과 자연스러운 결이 키보드와 마우스 영역을 하나의 소재로 연결합니다. 기능을 위한 두 개의 받침이면서, 사용하지 않을 때도 책상 위 균형을 잡아주는 한 쌍의 원목 오브제입니다.
        </Story>
        <Grain />
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
        src="/assets/void/keyboard-palm-rest/closing-typing-desk.webp"
        alt="키보드용과 마우스용 블랙월넛 팜레스트를 함께 사용하는 따뜻한 데스크"
        fill
        preload
        sizes="860px"
        className="object-cover object-center"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[55%]"
        style={{ background: "linear-gradient(180deg,#fff 0%,#fff 16%,rgba(255,255,255,.76) 52%,transparent 100%)" }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%]"
        style={{ background: "linear-gradient(0deg,rgba(40,25,16,.68) 0%,rgba(40,25,16,.22) 48%,transparent 100%)" }}
      />
      <div className="relative z-10 flex min-h-[1440px] flex-col items-center px-8 pb-24 pt-24 text-center">
        <p className="text-[41px] font-semibold text-[#493527]">Void Walnut Duo</p>
        <h1 className="mt-8 whitespace-nowrap text-[72px] font-bold leading-[1.04] tracking-[-0.045em]">두 개의 받침, 하나의 데스크.</h1>
        <p className="mt-auto text-[29px] font-medium leading-[1.6] text-[#fffaf5] [text-shadow:0_3px_18px_rgba(47,30,19,0.78),0_1px_3px_rgba(47,30,19,0.9)]">키보드와 마우스를 오가는 손목의 자리를<br />하나의 블랙월넛으로 완성하는 팜레스트 세트.</p>
      </div>
    </section>
  );
}

function Role({ eyebrow, title, body, accent = false }: { eyebrow: string; title: string; body: string; accent?: boolean }) {
  return <article className={(accent ? "border-[#d9cec4] bg-[#f3efeb]" : "border-[#e0ddd9] bg-[#f7f6f4]") + " rounded-[28px] border p-8"}><p className="text-[16px] font-bold tracking-[0.12em] text-[#8a6246]">{eyebrow}</p><h3 className="mt-5 text-[29px] font-bold">{title}</h3><p className="mt-4 text-[20px] font-medium leading-[1.55] text-[#6e6e73]">{body}</p></article>;
}

function BeforeAfter() {
  return (
    <section className="bg-white px-10 py-36">
      <Title>책상에 바로 닿던 손목에서,<br /><Gradient>팜레스트 위에 머무는 손목으로.</Gradient></Title>
      <div className="mt-20 grid grid-cols-2 gap-6">
        <article className="rounded-[28px] border border-[#dedede] bg-[#f7f7f7] p-5">
          <Photo label="팜레스트 없이 키보드를 사용하는 손목" src="/assets/void/keyboard-palm-rest/posture-without-rest.webp" alt="팜레스트 없이 키보드를 사용해 손목이 책상에 직접 닿는 모습" />
          <p className="mt-7 text-[16px] font-bold tracking-[0.12em] text-[#86868b]">BEFORE · 사용 전</p>
          <h3 className="mt-4 text-[29px] font-bold">책상에 바로 닿는 손목</h3>
          <p className="mt-4 text-[20px] font-medium leading-[1.55] text-[#6e6e73]">키보드와 마우스를 사용할 때 손목이 책상 표면이나 모서리에 직접 닿는 상태</p>
        </article>
        <article className="rounded-[28px] border border-[#ddd4cc] bg-[#f4f1ed] p-5">
          <Photo label="팜레스트를 사용해 손목을 받치는 모습" src="/assets/void/keyboard-palm-rest/posture-with-rest.webp" alt="키보드용 팜레스트 위에 손목을 올리고 타이핑하는 모습" />
          <p className="mt-7 text-[16px] font-bold tracking-[0.12em] text-[#8a6246]">AFTER · 사용 후</p>
          <h3 className="mt-4 text-[29px] font-bold">손목을 받치는 안정적인 자리</h3>
          <p className="mt-4 text-[20px] font-medium leading-[1.55] text-[#6e6e73]">키보드와 마우스 앞에 팜레스트를 놓아 손목이 잠시 머물 공간을 만든 상태</p>
        </article>
      </div>
    </section>
  );
}

function Feature({ title, label, body, extra, images }: { title: ReactNode; label: string; body: string; extra?: ReactNode; images?: ImageSpec[] }) {
  return <section className="bg-white px-12 pb-36 pt-32"><div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-[3px] border-[#8a6246]"><Check className="h-9 w-9 text-[#8a6246]" strokeWidth={3.5} /></div><h2 className="mt-10 text-[63px] font-bold leading-[1.15] tracking-[-0.032em]">{title}</h2><MediaBlock className="mt-24" label={label} images={images} /><p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">{body}</p>{extra}</section>;
}

function Story({ eyebrow, title, label, children, tone = "white", images }: { eyebrow: string; title: ReactNode; label: string; children: ReactNode; tone?: "white" | "chapter"; images?: ImageSpec[] }) {
  return <section className={(tone === "chapter" ? "bg-transparent " : "bg-white ") + "px-12 py-40"}><Eyebrow>{eyebrow}</Eyebrow><h2 className="mt-9 text-[64px] font-bold leading-[1.16] tracking-[-0.035em]">{title}</h2><MediaBlock className="mt-24" label={label} images={images} /><p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">{children}</p></section>;
}

function Comparison() {
  const rows = [["구성", "한쪽 손목 영역만", "키보드와 마우스 영역"], ["높이", "한쪽만 받침", "두 영역을 비슷한 높이로"], ["소재", "서로 다른 액세서리", "하나의 블랙월넛"], ["분위기", "부분적인 포인트", "좌우가 이어지는 균형"]];
  return <section className="bg-white px-10 py-36"><Title>하나만 놓았을 때와,<br /><Gradient>둘을 함께 놓았을 때.</Gradient></Title><div className="mt-20 overflow-hidden rounded-[28px] border border-[#d2d2d7]"><table className="w-full table-fixed border-collapse text-center"><caption className="sr-only">단품과 블랙월넛 팜레스트 세트 구성 비교</caption><thead><tr className="bg-[#f5f5f7]"><th className="w-[25%] px-3 py-7 text-[21px]">구분</th><th className="border-l text-[20px]">단품 사용</th><th className="border-l bg-[#f3ebe4] text-[20px] text-[#6b513f]">DUO 세트</th></tr></thead><tbody>{rows.map(([label, single, duo]) => <tr key={label} className="border-t"><th className="px-3 py-7 text-[20px]">{label}</th><td className="border-l px-3 text-[19px] text-[#6e6e73]">{single}</td><td className="border-l bg-[#f9f5f1] px-3 text-[19px] font-bold text-[#6b513f]">{duo}</td></tr>)}</tbody></table></div></section>;
}

function Grain() {
  const images: ImageSpec[] = [
    { src: "/assets/void/keyboard-palm-rest/natural-grain-variations.webp", alt: "서로 다른 결을 가진 키보드용 블랙월넛 팜레스트" },
    { src: "/assets/void/mouse-palm-rest/natural-grain-variations.webp", alt: "서로 다른 결을 가진 마우스용 블랙월넛 팜레스트" },
  ];
  return <section className="bg-transparent px-12 py-40"><Eyebrow>NATURAL GRAIN</Eyebrow><h2 className="mt-9 text-[64px] font-bold leading-[1.16] tracking-[-0.035em]">같은 블랙월넛,<br /><Gradient>서로 다른 하나의 결.</Gradient></h2><div className="mt-24 space-y-6">{images.map((image) => <Photo key={image.src} label={image.alt} src={image.src} alt={image.alt} />)}</div><p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">하나의 블랙월넛이라도 나무가 자란 시간과 부위에 따라 결의 흐름과 색의 깊이가 달라집니다. 똑같은 무늬가 반복되지 않아, 받아보는 제품마다 하나뿐인 표정을 갖습니다. 세트의 두 제품 사이에서도 결은 서로 다를 수 있습니다.</p></section>;
}

function Care() {
  const items = [["01", "마른 천으로", "두 제품 모두 가볍게 닦아 주세요."], ["02", "물기는 바로", "젖었을 때는 즉시 닦아 주세요."], ["03", "강한 세제 없이", "알코올과 강한 세제는 피해주세요."], ["04", "고온을 피해", "직사광선과 화기 가까이에 두지 마세요."]];
  return <section className="bg-transparent px-12 py-40"><Eyebrow>CARE GUIDE</Eyebrow><h2 className="mt-9 text-[64px] font-bold leading-[1.16]">오래 곁에 두기 위한,<br /><Gradient>간단한 관리.</Gradient></h2><Photo className="mt-24" label="블랙월넛 팜레스트 관리 방법" src="/assets/void/keyboard-palm-rest/care-guide.webp" alt="키보드용 블랙월넛 팜레스트를 마른 천으로 닦는 모습" /><div className="mt-14 grid grid-cols-2 gap-5">{items.map(([step, title, body]) => <article key={step} className="rounded-[26px] border border-[#e1d6cc] bg-white p-8"><p className="text-[18px] font-bold text-[#8a6246]">{step}</p><h3 className="mt-4 text-[25px] font-bold">{title}</h3><p className="mt-4 text-[19px] font-medium text-[#6e6e73]">{body}</p></article>)}</div></section>;
}

function DeskStyles() {
  const items = [
    { key: "LIGHT", title: "밝은 데스크", src: "/assets/void/palm-rest-set/source/duo-light-setup.webp" },
    { key: "DARK", title: "블랙 셋업", src: "/assets/void/palm-rest-set/source/duo-black-setup.webp" },
    { key: "WOOD", title: "우드 데스크", src: "/assets/void/keyboard-palm-rest/recommended-wood-desk.webp" },
  ];
  return <section className="bg-white px-12 py-40"><Title>어떤 셋업에서도,<br /><Gradient>두 자리는 하나처럼.</Gradient></Title><div className="mt-20 grid grid-cols-3 gap-5">{items.map(({ key, title, src }) => <div key={key}><Photo label={title + "에 배치한 블랙월넛 팜레스트 세트"} src={src} alt={title + "에 놓인 블랙월넛 팜레스트"} /><article className="mt-5 rounded-[24px] border border-[#e3ddd7] bg-[#faf8f6] px-5 py-6 text-center"><p className="text-[16px] font-bold tracking-[0.12em] text-[#8a6246]">{key}</p><h3 className="mt-3 whitespace-nowrap text-[22px] font-bold">{title}</h3></article></div>)}</div></section>;
}

function Recommended() {
  const items = [
    { title: "키보드·마우스 사용자", body: "두 작업 영역을 오가며 손목을 내려놓을 자리가 모두 필요한 분께 잘 맞습니다.", src: "/assets/void/keyboard-palm-rest/closing-typing-desk.webp" },
    { title: "단단한 받침을 선호하는 분", body: "푹 꺼지는 쿠션보다 형태를 유지하는 원목 받침을 선호하는 분께 잘 맞습니다.", src: "/assets/void/mouse-palm-rest/wrist-with-rest.webp" },
    { title: "깔끔한 관리를 원하는 분", body: "패브릭의 먼지와 보풀 대신 매끄러운 표면을 간편하게 관리하고 싶은 분께 잘 맞습니다.", src: "/assets/void/keyboard-palm-rest/care-guide.webp" },
    { title: "완성된 데스크를 원하는 분", body: "기능뿐 아니라 소재와 색감까지 하나의 톤으로 맞추고 싶은 분께 잘 맞습니다.", src: "/assets/void/palm-rest-set/source/duo-black-setup.webp" },
  ];
  return <section className="bg-white px-12 py-40"><Title>이런 분께 잘 맞습니다.</Title><p className="mx-auto mt-8 max-w-[700px] text-center text-[26px] font-medium leading-[1.6] text-[#6e6e73]">손목이 놓이는 자리와 책상 위 분위기를 함께 바꾸고 싶은 분들입니다.</p><div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-16">{items.map(({ title, body, src }) => <article key={title}><Photo label={title} src={src} alt={title} /><h3 className="mt-7 whitespace-nowrap text-[28px] font-bold leading-[1.3] tracking-[-0.02em]">{title}</h3><p className="mt-3 text-[20px] font-medium leading-[1.55] text-[#6e6e73]">{body}</p></article>)}</div></section>;
}

function Reviews() {
  const reviews = ["키보드용만 살까 고민하다 세트로 골랐는데, 마우스를 쓸 때도 같은 높이의 받침이 있으니 책상 앞 동선이 훨씬 자연스럽게 느껴져요. 두 제품을 나란히 놓았을 때 길이와 비율이 잘 맞고, 각각 필요한 공간만 차지해서 생각보다 책상이 답답해 보이지 않습니다.", "블랙월넛 색감이 키보드와 마우스 사이를 이어주는 느낌이라 데스크테리어 만족도가 커요. 두 제품의 나뭇결이 완전히 똑같지는 않지만 같은 톤 안에서 자연스럽게 어울려서 오히려 원목다운 매력이 느껴집니다.", "처음에는 원목이 단단할까 걱정했는데 곡면이 손목을 넓게 받쳐주고 모서리도 부드럽게 다듬어져 있어요. 키보드에서 마우스로 손을 옮겨도 촉감이 일관되고, 바닥 패드가 잘 잡아줘 쉽게 밀리지 않는 점도 마음에 듭니다.", "패브릭 팜레스트 두 개를 따로 쓰다가 바꿨는데 책상이 훨씬 깔끔해졌어요. 먼지나 보풀이 신경 쓰이지 않고 마른 천으로 두 제품을 같이 닦으면 관리도 끝이라 편합니다. 사용하지 않을 때도 한 쌍의 우드 소품처럼 보여 그대로 두기 좋아요."];
  return <section className="bg-white px-10 pb-32 pt-40"><div className="mx-auto max-w-[780px]"><div className="flex items-center justify-center gap-4"><p className="text-[34px] font-bold">5.0</p><p className="text-[36px] font-bold tracking-[0.12em] text-[#F5B700]">★★★★★</p></div><h2 className="mt-6 text-center text-[58px] font-bold tracking-[-0.025em]">사용 후기를 미리 만나보세요</h2><p className="mt-5 text-center text-[22px] font-medium text-[#6e6e73]">두 개의 블랙월넛 팜레스트를 함께 사용하며 느낄 수 있는 주요 경험을 담았습니다.</p><div className="mt-16 space-y-6">{reviews.map((review) => <article key={review} className="rounded-[28px] border border-[#e5ddd6] bg-[#faf7f3] px-8 py-8"><p className="text-[24px] font-bold tracking-[0.08em] text-[#F5B700]">★★★★★</p><p className="mt-6 text-[24px] font-medium leading-[1.6] text-[#6e6e73]">{review}</p></article>)}</div></div></section>;
}

function Closing() {
  return <section className="relative min-h-[1440px] overflow-hidden bg-[#eee8e2] px-12 pb-40 pt-16"><Photo fill label="블랙월넛 팜레스트 세트가 완성한 우드 데스크 클로징 사진" src="/assets/void/palm-rest-set/source/duo-black-setup.webp" alt="블랙 키보드와 마우스 곁에 두 블랙월넛 팜레스트를 함께 놓은 데스크" /><Fade /><div className="relative z-10 flex min-h-[1160px] flex-col text-center"><h2 className="text-[68px] font-bold leading-[1.15]">Void Walnut Duo</h2><p className="mt-10 text-[28px] font-medium text-[#5f5a55]">두 개의 움직임, 하나의 데스크.</p></div></section>;
}

function Faq() {
  return <section className="bg-white px-10 pb-36 pt-40"><InfoTitle>질문에 답해드립니다.</InfoTitle><ul className="mt-24">{faqs.map(([question, answer]) => <li key={question} className="border-t border-[#d2d2d7] py-7 last:border-b"><div className="flex items-start justify-between gap-6"><p className="text-[28px] font-semibold leading-[1.35]">{question}</p><ChevronDown className="mt-1.5 h-7 w-7 shrink-0 text-[#86868b]" strokeWidth={2.5} /></div><p className="mt-4 pr-12 text-[22px] font-medium leading-[1.55] text-[#6e6e73]">{answer}</p></li>)}</ul></section>;
}

function Size() {
  return <section className="bg-white px-10 pb-36 pt-32"><InfoTitle>사이즈</InfoTitle><Photo className="mt-24" label="키보드용 팜레스트 실측 안내" src="/assets/void/keyboard-palm-rest/size-guide.webp" alt="키보드용 팜레스트 가로 36cm 세로 8cm 안내" /><h3 className="mx-auto mt-16 max-w-[720px] text-[28px] font-bold">키보드용 팜레스트</h3><Rows rows={[["가로", "36cm"], ["세로", "8cm"], ["높이", "약 1.9cm"], ["권장 배열", "텐키리스"]]} /><Photo className="mt-24" label="마우스용 팜레스트 실측 안내" src="/assets/void/mouse-palm-rest/size-guide.webp" alt="마우스용 팜레스트 가로 16cm 세로 7.8cm 안내" /><h3 className="mx-auto mt-16 max-w-[720px] text-[28px] font-bold">마우스용 팜레스트</h3><Rows rows={[["가로", "16cm"], ["세로", "7.8cm"], ["높이", "약 2cm"], ["제품 중량", "100g"]]} /></section>;
}

function Components() {
  return <section className="bg-white px-10 pb-36 pt-32"><InfoTitle>구성품</InfoTitle><Photo className="mt-24" label="Void Walnut Duo 전체 구성품" src="/assets/void/palm-rest-set/source/duo-product-only.webp" alt="키보드용과 마우스용 블랙월넛 팜레스트 구성품" /><div className="mx-auto mt-8 grid max-w-[720px] grid-cols-2 gap-5"><div className="rounded-[22px] border border-[#e3ddd7] bg-[#faf8f6] p-6 text-center text-[23px] font-semibold">키보드용 본체 ×1</div><div className="rounded-[22px] border border-[#e3ddd7] bg-[#faf8f6] p-6 text-center text-[23px] font-semibold">마우스용 본체 ×1</div></div></section>;
}

function ProductInfo() {
  const info = [["품명 및 모델명", "Void Walnut Duo"], ["용도", "키보드·마우스용 원목 팜레스트 세트"], ["색상", "블랙월넛"], ["소재", "블랙월넛 원목 · 실리콘 패드"], ["키보드용 크기", "36 × 8 × 약 1.9cm"], ["마우스용 크기", "16 × 7.8 × 약 2cm"], ["마우스용 중량", "100g"], ["주요 특징", "곡면형 상단 · 라운드 모서리 · 미끄럼 방지 패드"], ["구성품", "키보드용 1개 · 마우스용 1개"], ["제조자(수입자)", "보이드 투 노바"], ["품질보증기준", "관련 법령 및 소비자분쟁해결기준에 따름"], ["A/S 책임자와 전화번호", "010-6393-0907"]];
  return <section className="bg-white px-10 pb-36 pt-32"><InfoTitle>제품 정보</InfoTitle><Rows rows={info} /></section>;
}

function Notices() {
  return (
    <section className="bg-white px-10 pb-36 pt-32">
      <InfoTitle>기타 안내</InfoTitle>
      <div className="mx-auto mt-24 max-w-[720px] space-y-12">
        <Notice title="취급 시 주의사항" bullets={["평평하고 흔들림 없는 책상 위에서 사용해 주세요.", "제품을 던지거나 강한 충격을 가하지 마세요.", "원목 표면에 날카로운 물건이 직접 닿지 않도록 주의해 주세요.", "물기와 화기, 직사광선 및 높은 온도에 가까이 두지 마세요.", "본 제품은 의료기기가 아니며 개인의 체형과 자세에 따라 사용감이 다를 수 있습니다."]} />
        <Notice title="관리 방법" body="부드러운 마른 천으로 가볍게 닦아 주세요. 물이나 알코올, 강한 화학 세제 사용은 피하고 실리콘 패드에 먼지나 이물질이 쌓이지 않도록 관리해 주세요." />
        <Notice title="색상 및 무늬 안내" body="사용하시는 화면과 촬영 환경에 따라 실제 색상이 다소 다르게 보일 수 있습니다. 천연 원목의 나뭇결과 색 농도, 무늬의 방향은 제품마다 자연스러운 차이가 있을 수 있으며 세트의 두 제품도 서로 다를 수 있습니다." />
        <Notice title="사양 안내" body="표기된 크기와 중량은 실측 기준이며 측정 방법에 따라 약간의 차이가 있을 수 있습니다. 천연 원목 특성상 제품마다 색과 결, 무게에 자연스러운 차이가 생길 수 있습니다." />
        <Notice title="A/S 안내" body="제품 초기 불량은 수령 후 7일 이내 확인해 주시면 교환 도와드립니다. 문의는 스토어 고객센터를 통해 접수해 주세요." />
        <Notice title="배송 안내" bullets={["배송기간 — 평균 배송기간은 2~5일 (일부 품목은 출고지 및 반품지 주소가 다를 수 있음)", "발송 마감시간 — 평일 기준 당일 오후 4시 이전 주문건까지 당일 발송 (일부품목 제외). 오후 4시 이후 주문건은 +1일 이후 발송 (평일기준)", "제주도·도서산간 지역배송비 — 제주도/도서산간 지역의 경우 배송비가 추가됩니다. (해당 지역마다 배송비가 다를 수 있음)"]} />
        <ExchangeGuide />
      </div>
    </section>
  );
}

function Title({ children }: { children: ReactNode }) { return <h2 className="text-center text-[61px] font-bold leading-[1.17] tracking-[-0.035em]">{children}</h2>; }
function Gradient({ children }: { children: ReactNode }) { return <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg,#493527,#9a775d)" }}>{children}</span>; }
function Eyebrow({ children }: { children: ReactNode }) { return <p className="text-[22px] font-bold tracking-[0.13em] text-[#8a6246]">{children}</p>; }
function Metric({ value, label }: { value: string; label: string }) { return <div className="rounded-[28px] border border-[#e7e1db] bg-white px-5 py-11 text-center shadow-[0_10px_30px_rgba(73,53,39,0.06)]"><p className="whitespace-nowrap text-[47px] font-bold text-[#6b513f]">{value}</p><p className="mt-4 text-[20px] font-semibold text-[#6e6e73]">{label}</p></div>; }
function Rows({ rows }: { rows: string[][] }) { return <dl className="mx-auto mt-8 max-w-[720px]">{rows.map(([label, value]) => <div key={label} className="flex gap-8 border-b border-[#d2d2d7] py-6 first:border-t"><dt className="w-[210px] shrink-0 text-[22px] font-semibold">{label}</dt><dd className="flex-1 text-[22px] font-medium leading-snug text-[#6e6e73]">{value}</dd></div>)}</dl>; }
function InfoTitle({ children }: { children: ReactNode }) { return <h2 className="text-center text-[58px] font-bold leading-tight tracking-[-0.025em]">{children}</h2>; }
function Notice({ title, body, bullets }: { title: string; body?: string; bullets?: string[] }) { return <div><h3 className="text-[28px] font-semibold">{title}</h3>{body ? <p className="mt-4 text-[22px] font-medium leading-snug text-[#6e6e73]">{body}</p> : null}{bullets ? <ul className="mt-4 space-y-2 text-[22px] font-medium leading-snug text-[#6e6e73]">{bullets.map((item) => <li key={item} className="flex gap-3"><span>·</span><span>{item}</span></li>)}</ul> : null}</div>; }
function ExchangeGuide() { const groups = [{ title: "교환·반품 가능", items: ["상품 수령 후 7일 이내 구매한 몰에서 교환 또는 반품을 신청한 경우", "구매자의 단순 변심은 상품 수령 후 7일 이내 가능하며 반품 배송비가 발생할 수 있습니다.", "상품 초기 불량에 대한 교환과 반품은 무료이며 그 외에는 왕복 택배비가 발생할 수 있습니다.", "교환·반품 신청 후 상품은 포장과 구성품을 받은 상태로 보관해 주세요."] }, { title: "교환·반품 불가", items: ["교환 또는 반품 요청 기간이 지난 경우", "구매자 책임으로 상품이나 포장이 훼손된 경우", "사용 흔적으로 상품 가치가 현저히 감소한 경우", "구성품이 누락된 경우", "고객 요청으로 별도 제작 또는 변경된 상품인 경우"] }]; return <div><h3 className="text-[28px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">교환·반품 안내</h3><p className="mt-4 text-[22px] font-medium leading-snug text-[#6e6e73]">교환 및 반품 접수는 구매하신 몰에서 신청해 주세요.</p>{groups.map(({ title, items }) => <div key={title} className="mt-8"><p className="text-[22px] font-semibold text-[#1d1d1f]">{title}</p><ul className="mt-3 space-y-2 text-[22px] font-medium leading-snug text-[#6e6e73]">{items.map((item) => <li key={item} className="flex gap-3"><span>·</span><span>{item}</span></li>)}</ul></div>)}<div className="mt-8"><p className="text-[22px] font-semibold text-[#1d1d1f]">변경·취소</p><p className="mt-3 text-[22px] font-medium leading-snug text-[#6e6e73]">취소나 변경은 실제 출고가 되지 않았을 경우에만 가능합니다. 상품 출고 후 취소 또는 변경 시 왕복 택배비는 구매자 부담입니다.</p></div></div>; }
function Fade() { return <div className="pointer-events-none absolute inset-x-0 top-0 h-[42%]" style={{ background: "linear-gradient(180deg,#fff 0%,rgba(255,255,255,.62) 56%,transparent 100%)" }} />; }

type ImageSpec = { src: string; alt: string };

function MediaBlock({ className = "", label, images }: { className?: string; label: string; images?: ImageSpec[] }) {
  if (!images?.length) return <Photo className={className} label={label} />;
  if (images.length === 1) return <Photo className={className} label={label} src={images[0].src} alt={images[0].alt} />;
  return <div className={"space-y-6 " + className}>{images.map((image) => <Photo key={image.src} label={image.alt} src={image.src} alt={image.alt} square />)}</div>;
}

function Photo({ className = "", label, fill = false, src, alt, square = false, contain = false }: { className?: string; label: string; fill?: boolean; src?: string; alt?: string; square?: boolean; contain?: boolean }) {
  const frame = fill ? "absolute inset-0 " : square ? "relative aspect-square w-full rounded-[28px] border border-[#e5e1dc] " : "relative aspect-[3/4] w-full rounded-[28px] border border-[#e5e1dc] ";
  return <div aria-label={label} className={frame + "overflow-hidden bg-[#f3f2f0] " + className}>{src ? <Image src={src} alt={alt ?? label} fill sizes={fill ? "860px" : square ? "370px" : "764px"} className={contain ? "object-contain" : "object-cover"} /> : null}</div>;
}
