import { BrandFrame } from "@/components/product-detail/brand-frame";
import Image from "next/image";
import type { ReactNode } from "react";
import {
  BookOpen,
  Check,
  ChevronDown,
  Laptop,
  Tablet,
  Wind,
} from "lucide-react";

const features = [
  {
    title: <>한 번의 터치로,<br />높이와 각도를 자유롭게.</>,
    label: "각도·높이 조절 버튼 사용 사진",
    body: "필기할 때는 낮게, 책을 읽을 때는 눈높이 가까이, 화면을 볼 때는 높게. 버튼을 누르는 간단한 동작만으로 지금 필요한 위치를 만들고, 사용자와 상황이 바뀐 때마다 책상 위 환경도 빠르게 맞출 수 있습니다.",
    metrics: [["0~180°", "받침판 각도"], ["5~40cm", "높이 조절 범위"]],
  },
  {
    title: <>최대 하중 30kg,<br />단단하고 안정적인 지지력.</>,
    label: "최대 30kg 하중 테스트 사진",
    body: "여러 권의 두꺼운 책부터 묵직한 노트북까지 안정적으로 올려두세요. 최대 하중 30kg을 지지하는 알루미늄 합금 프레임과 듀얼 암 구조가 무게를 단단하게 받쳐, 읽고 쓰는 동안 든든한 안정감을 제공합니다.",
  },
  {
    title: <><Gradient>29~42cm</Gradient> 확장형 받침<br />큰 책도 넓게 안정적으로.</>,
    label: "큰 책의 양쪽을 좌우 확장 암이 받치는 사진",
    image: "/assets/sync-2026-10-29/void/book-stand/expandable-support.webp",
    imageAlt: "북스탠드의 좌우 확장 받침을 양손으로 펼치는 모습",
    body: "좌우 확장 암을 펼치면 받침 폭이 약 29~42cm까지 넓어집니다. 그림책과 대형 교재의 양쪽을 고르게 받쳐 끝부분의 처짐과 기울어짐을 줄여, 보다 안정적인 독서 환경을 만들어줍니다.",
    metrics: [["29~42cm", "확장 가능한 받침 폭"]],
  },
  {
    title: <>탄성 페이지 클립<br />두꺼운 책도 펼친 그대로.</>,
    label: "실리콘 페이지 클립 사용 사진",
    image: "/assets/sync-2026-10-29/void/book-stand/elastic-page-clips.webp",
    imageAlt: "탄성 페이지 클립으로 두꺼운 책을 고정한 모습",
    body: "탄성 있는 양쪽 페이지 클립이 벌어지는 책장을 눌러 줍니다. 끝부분은 실리콘으로 마감해 종이에 닿는 부분을 부드럽게 하고, 펼친 상태에서도 한 손으로 페이지를 넘기기 쉽게 설계했습니다.",
    metrics: [["10cm", "탄성 클립 범위"], ["2,000p", "고정 가능한 책 분량"]],
  },
  {
    title: <>미끄러짐을 줄인 설계.</>,
    label: "하부 미끄럼 방지 실리콘 패드 클로즈업",
    image: "/assets/sync-2026-10-29/void/book-stand/anti-slip-pads.webp",
    imageAlt: "북스탠드 하부의 네 개 미끄럼 방지 패드",
    body: "하부 곳곳에 배치한 실리콘 패드가 책상과 맞닿는 면을 안정적으로 잡아줍니다. 책장을 넘기거나 화면을 터치할 때 제품이 밀리는 움직임을 줄이고, 책상 표면에 직접 닿는 충격과 마찰도 덜어줍니다.",
  },
  {
    title: <>책부터 태블릿,<br />노트북까지 하나로.</>,
    label: "책·태블릿·노트북 활용 사진",
    image: "/assets/sync-2026-10-29/void/book-stand/laptop-workspace.webp",
    imageAlt: "Void Book Stand에 노트북을 올려 작업하는 월넛 데스크 공간",
  },
  {
    title: <span className="block whitespace-nowrap">6.5cm로 접히는 공간 절약 설계.</span>,
    label: "완전히 접은 제품과 책장 수납 사진",
    image: "/assets/sync-2026-10-29/void/book-stand/folded-storage.webp",
    imageAlt: "6.5cm 두께로 접어 책 사이에 보관한 Void Book Stand",
    body: "사용이 끝나면 받침판과 듀얼 암을 접어 약 6.5cm 두께로 슬림하게 정리하세요. 책 한 권 정도의 자리만 차지해 책장 옆이나 서랍에 보관하기 좋고, 필요할 때 꺼내 다시 펼치면 됩니다.",
  },
] as const;

const duplicatedLoadFeature = {
  title: <>단단함은 그대로,<br />조절은 부드럽게.</>,
  label: "듀얼 암을 부드럽게 움직여 높이와 각도를 조절하는 사진",
  body: "각도를 살짝 바꾸고 싶을 때도, 높이를 크게 올리고 싶을 때도 힘을 들여 관절을 꺾을 필요가 없습니다. 부드럽게 움직이는 듀얼 암이 원하는 위치를 섬세하게 찾아, 독서에서 필기와 스크린 사용으로 자연스럽게 이어줍니다.",
} as const;

const baseStabilityFeature = {
  title: <>묵직한 바디, 넓은 베이스.<br />흔들림을 줄인 편안함.</>,
  label: "넓은 베이스와 묵직한 본체의 안정감을 보여주는 사진",
  body: "넓게 설계된 베이스와 약 965g의 본체가 무게 중심을 안정적으로 잡아줍니다. 두꺼운 책을 넘기거나 태블릿을 터치하고 노트북으로 타이핑할 때도 흔들림을 줄여, 집중의 흐름을 안정적으로 이어가도록 돕습니다.",
} as const;

export default function VoidBookStandPage() {
  return (
    <BrandFrame brand="void">
      <section className="relative min-h-[1440px] overflow-hidden bg-[#f2f1ef]">
        <Image
          src="/assets/sync-2026-10-29/void/book-stand/hero-reading-v2.webp"
          alt="책을 펼쳐 놓은 Void Book Stand가 월넛 책상 위에 놓인 모습"
          fill
          preload
          sizes="860px"
          className="object-cover object-center"
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[44%]"
          style={{ background: "linear-gradient(180deg,rgba(255,255,255,.72) 0%,rgba(255,255,255,.52) 32%,rgba(255,255,255,.24) 66%,transparent 100%)" }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%]"
          style={{ background: "linear-gradient(0deg,rgba(40,25,16,.76) 0%,rgba(40,25,16,.28) 48%,transparent 100%)" }}
        />
        <div className="relative z-10 flex min-h-[1440px] flex-col items-center px-8 pb-24 pt-28 text-center">
          <p className="text-[39px] font-semibold text-[#493527]">Void Book Stand</p>
          <h1 className="mt-8 whitespace-nowrap text-[68px] font-bold leading-[1.04] tracking-[-0.045em] text-[#201a16]">집중을 위한 첫 번째 변화.</h1>
          <p className="mt-auto text-[29px] font-medium leading-[1.6] text-[#fffaf5] [text-shadow:0_3px_20px_rgba(47,30,19,0.88),0_1px_4px_rgba(47,30,19,0.95)]">읽는 사람에게 맞춰<br />높이와 각도가 달라지는 조절형 북 스탠드.</p>
        </div>
      </section>

      <section className="relative aspect-[3/4] overflow-hidden bg-white">
        <Image
          src="/assets/sync-2026-10-29/void/book-stand/product-overview-v3.webp"
          alt="책을 올리지 않은 Void Book Stand의 전체 모습"
          fill
          sizes="860px"
          className="object-cover object-center"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[18%]"
          style={{ background: "linear-gradient(180deg,transparent 0%,rgba(248,247,245,.72) 58%,#f8f7f5 100%)" }}
        />
        <div className="absolute inset-x-0 top-20 z-10 text-center">
          <h2 className="text-[68px] font-bold tracking-[-0.035em] text-[#fffaf5] [text-shadow:0_3px_20px_rgba(47,30,19,0.88),0_1px_4px_rgba(47,30,19,0.95)]">Void Book Stand.</h2>
        </div>
        <p className="absolute inset-x-0 bottom-20 z-10 text-center text-[31px] font-semibold text-[#493527]">읽고, 쓰고, 배우는 자리를 하나로.</p>
      </section>

      <section className="bg-[#f8f7f5] px-12 py-36">
        <Title>한눈에 보는<br /><Gradient>Void Book Stand.</Gradient></Title>
        <div className="mt-20 grid grid-cols-2 gap-6">
          {[["0~180°","받침판 각도 조절"],["약 40cm","최대 사용 높이"],["29~42cm","좌우 확장 범위"],["약 965g","제품 중량"],["약 6.5cm","접었을 때 두께"],["최대 30kg","고중량 지지 설계"]].map(([v,l])=><Metric key={l} value={v} label={l}/>) }
        </div>
      </section>

      <section
        className="px-12 py-40"
        style={{ background: "linear-gradient(180deg, #f8f7f5 0px, #ffffff 320px)" }}
      >
        <p className="text-[22px] font-bold tracking-[0.13em] text-[#8a6246]">SIMPLY ESSENTIAL</p>
        <h2 className="mt-9 text-[64px] font-bold leading-[1.16] tracking-[-0.035em]">읽고, 쓰고, 보는 데<br /><Gradient>필요한 기능을 한 대에 담다.</Gradient></h2>
        <div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px] border border-[#e5e1dc] bg-[#f3f2f0]">
          <Image
            src="/assets/sync-2026-10-29/void/book-stand/simply-essential.webp"
            alt="월넛 상판과 메탈 디테일, 듀얼 조절 암이 드러난 Void Book Stand 전체 모습"
            fill
            sizes="764px"
            className="object-cover"
          />
        </div>
        <p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">0~180° 받침 각도, 최대 약 40cm 높이, 29~42cm 확장형 받침과 최대 30kg 지지력. 책·태블릿·노트북을 다루는 데 필요한 기능을 간결한 하나의 구조에 담았습니다.</p>
      </section>

      <BookBeforeAfter />

      <section className="bg-white px-10 py-36">
        <Title>각도만 바꾸는 독서대와,<br /><Gradient>시작부터 다릅니다.</Gradient></Title>
        <Comparison />
      </section>

      <section className="bg-white px-12 py-36">
        <Title>한 대로 완성하는,<br /><Gradient>나를 위한 집중 공간.</Gradient></Title>
        <p className="mx-auto mt-8 max-w-[700px] text-center text-[25px] font-medium leading-[1.6] text-[#6e6e73]">받침판과 듀얼 암을 움직여 낮게 쓰고, 높여 읽고, 세워 볼 수 있습니다.</p>
        <div className="relative mt-20 aspect-[3/4] w-full overflow-hidden rounded-[28px]"><Image src="/assets/sync-2026-10-29/void/book-stand/focus-space.webp" alt="Void Book Stand에 책을 펼쳐 두고 노트에 필기하는 모습" fill sizes="764px" className="object-cover"/></div>
        <div className="mt-8 grid grid-cols-3 gap-5">
          {[["01","필기 모드","낮고 완만하게","문제집 · 드로잉"],["02","독서 모드","시선 가까이","책 · 교재"],["03","스크린 모드","높고 선명하게","태블릿 · 노트북"]].map(([s,t,b,d],i)=><article key={s} className="rounded-[28px] border border-[#d8d4cf] px-5 py-9 text-center" style={{backgroundColor:i===0?"#fbfaf8":i===1?"#f4eee8":"#ede3da"}}><p className="text-[19px] font-bold tracking-[0.1em] text-[#8a6246]">{s}</p><h3 className="mt-5 text-[29px] font-bold">{t}</h3><p className="mt-7 text-[20px] font-semibold text-[#493527]">{b}</p><div className="mx-auto mt-7 h-px w-12 bg-[#bca58f]"/><p className="mt-6 text-[17px] font-medium text-[#6e6e73]">{d}</p></article>)}
        </div>
      </section>

      <section className="bg-white px-12 pb-36 pt-40">
        <Feature {...features[0]} image="/assets/sync-2026-10-29/void/book-stand/one-touch-adjustment.webp" imageAlt="버튼을 눌러 북스탠드의 높이와 각도를 조절하는 방법" />
        <p className="mt-12 text-center text-[17px] font-medium leading-[1.5] text-[#86868b]">사용 환경에 맞춰 원하는 높이와 각도로 손쉽게 조절할 수 있습니다.</p>
        <ol className="mt-5 grid grid-cols-4 gap-3">{[["01","버튼 누르기"],["02","각도 조절"],["03","높이 조절"],["04","위치 고정"]].map(([s,l])=><li key={s} className="rounded-[22px] bg-[#f5f5f7] px-3 py-7 text-center"><span className="block text-[18px] font-bold text-[#8a6246]">{s}</span><span className="mt-3 block text-[23px] font-semibold">{l}</span></li>)}</ol>
      </section>
      <section className="bg-white px-12 pb-36 pt-24"><Feature {...features[1]} image="/assets/sync-2026-10-29/void/book-stand/load-capacity-v2.webp" imageAlt="여러 권의 책과 대용량 생수를 올린 최대 하중 테스트" /></section>
      <section className="bg-white px-12 pb-36 pt-24"><Feature {...duplicatedLoadFeature} image="/assets/sync-2026-10-29/void/book-stand/smooth-adjustment.webp" imageAlt="관절 버튼을 누르며 북스탠드의 각도와 높이를 부드럽게 조절하는 모습" /></section>
      {features.slice(2,5).map((feature)=><section key={feature.label} className="bg-white px-12 pb-36 pt-24"><Feature {...feature}/></section>)}
      <section className="bg-white px-12 pb-36 pt-24"><Feature {...baseStabilityFeature} image="/assets/sync-2026-10-29/void/book-stand/stable-base-weight.webp" imageAlt="전자저울에 표시된 Void Book Stand의 965g 무게" /></section>

      <section className="bg-white px-12 pb-36 pt-40"><Feature {...features[5]}/><div className="relative mt-8 aspect-[3/4] w-full overflow-hidden rounded-[28px]"><Image src="/assets/sync-2026-10-29/void/book-stand/laptop-airflow.webp" alt="노트북 아래로 공기가 흐르는 오픈형 통풍 구조" fill sizes="764px" className="object-cover"/></div><UseCases/><div className="mt-10 rounded-[32px] border border-[#e5dcd4] bg-[#f3efeb] p-10 shadow-[0_12px_30px_rgba(73,53,39,0.06)]"><div className="flex items-start gap-6"><div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#e8ddd3]"><Wind className="h-9 w-9 text-[#8a6246]"/></div><div><p className="text-[17px] font-bold tracking-[0.12em] text-[#8a6246]">AIRFLOW DESIGN</p><p className="mt-3 text-[32px] font-bold text-[#1d1d1f]">오픈형 통풍 구조</p><p className="mt-4 text-[22px] font-medium leading-[1.6] text-[#6e6e73]">받침판의 타공 구조가 기기 뒷면을 완전히 막지 않아, 열이 머무는 것을 줄이고 공기 흐름을 고려합니다.</p></div></div></div></section>
      <section className="bg-white px-12 pb-36 pt-24"><Feature {...features[6]}/></section>

      <DesignDetails />

      <RecommendedFor/><Reviews/>
      <section className="relative min-h-[1440px] overflow-hidden bg-[#f1eeea] px-12 pb-24 pt-16"><Image src="/assets/sync-2026-10-29/void/book-stand/closing-reading.webp" alt="따뜻한 서재에서 Void Book Stand에 펼친 책을 읽는 모습" fill sizes="860px" className="object-cover object-center"/><div className="pointer-events-none absolute inset-x-0 top-0 h-[28%] bg-gradient-to-b from-white via-white/80 to-transparent"/><div className="relative z-10 flex min-h-[1280px] flex-col text-center"><h2 className="text-[66px] font-bold leading-[1.17] tracking-[-0.035em] text-[#30251e]">읽는 사람도,<br />읽는 방식도 다르니까.</h2><p className="mt-10 text-[28px] font-medium leading-[1.6] text-[#5f5a55]">책상에 몸을 맞추지 말고,<br />책을 나에게 맞추세요.</p><div className="mt-auto"><p className="text-[54px] font-semibold text-[#fffaf5] [text-shadow:0_3px_20px_rgba(47,30,19,0.88),0_1px_4px_rgba(47,30,19,0.95)]">Void Book Stand</p><p className="mt-4 text-[27px] font-medium text-[#fffaf5] [text-shadow:0_3px_20px_rgba(47,30,19,0.88),0_1px_4px_rgba(47,30,19,0.95)]">나에게 맞춰지는 읽기의 자리.</p></div></div></section>
      <Faq/><Size/><Components/><ProductInfo/><Notices/>
    </BrandFrame>
  );
}

function Feature({title,label,body,metrics,image,imageAlt}:{title:ReactNode;label:string;body?:string;metrics?:readonly (readonly string[])[];image?:string;imageAlt?:string}){return <div><div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-[3px] border-[#8a6246]"><Check className="h-9 w-9 text-[#8a6246]" strokeWidth={3.5}/></div><h2 className="mt-10 text-[63px] font-bold leading-[1.15] tracking-[-0.032em]">{title}</h2>{image?<div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px]"><Image src={image} alt={imageAlt??label} fill sizes="764px" className="object-cover"/></div>:<Photo className="mt-24" label={label}/>} {body?<p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">{body}</p>:null}{metrics?<div className={`mt-14 grid ${metrics.length===1?"grid-cols-1":"grid-cols-2"} gap-5`}>{metrics.map(([v,l])=><Metric key={l} value={v} label={l}/>)}</div>:null}</div>}
function BookBeforeAfter(){return <section className="bg-white px-10 py-36"><Title>책상에 몸을 맞추기보다,<br/><Gradient>책을 나에게 맞추는 변화.</Gradient></Title><div className="mt-20 grid grid-cols-2 gap-6"><article className="rounded-[28px] border border-[#dedede] bg-[#f7f7f7] p-5"><div className="relative aspect-[3/4] overflow-hidden rounded-[24px]"><Image src="/assets/sync-2026-10-29/void/book-stand/posture-before.webp" alt="책상 위에 책을 바로 펼쳐 고개를 숙여 읽는 모습" fill sizes="380px" className="object-cover"/></div><h3 className="mt-7 text-[29px] font-bold">책상 위에 바로 펼친 책</h3><p className="mt-4 text-[20px] font-medium leading-[1.55] text-[#6e6e73]">책의 위치가 낮아 시선과 고개가 자연스럽게 아래로 향하는 상태</p></article><article className="rounded-[28px] border border-[#ddd4cc] bg-[#f4f1ed] p-5"><div className="relative aspect-[3/4] overflow-hidden rounded-[24px]"><Image src="/assets/sync-2026-10-29/void/book-stand/posture-after-v2.webp" alt="북스탠드에 책을 올려 바른 자세로 읽는 모습" fill sizes="380px" className="object-cover"/></div><h3 className="mt-7 text-[29px] font-bold">나에게 맞춰 올린 책</h3><p className="mt-4 text-[20px] font-medium leading-[1.55] text-[#6e6e73]">읽는 위치를 시선 가까이 높이고 상황에 맞게 각도를 조절한 상태</p></article></div></section>}
function DetailImage({src,alt}:{src:string;alt:string}){return <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[28px]"><Image src={src} alt={alt} fill sizes="370px" className="object-cover"/></div>}
function Metric({value,label}:{value:string;label:string}){return <div className="rounded-[28px] border border-[#e7e1db] bg-white px-5 py-11 text-center shadow-[0_10px_30px_rgba(73,53,39,0.06)]"><p className="whitespace-nowrap text-[50px] font-bold tracking-[-0.035em] text-[#6b513f]">{value}</p><p className="mt-4 text-[21px] font-semibold text-[#6e6e73]">{label}</p></div>}
function Photo({className="",label,fill=false}:{className?:string;label:string;fill?:boolean}){return <div aria-label={`사진 자리: ${label}`} className={`${fill?"absolute inset-0":"relative aspect-[3/4] w-full rounded-[28px] border border-[#e5e1dc]"} overflow-hidden bg-[#f3f2f0] ${className}`}/>}
function Title({children}:{children:ReactNode}){return <h2 className="text-center text-[61px] font-bold leading-[1.17] tracking-[-0.035em]">{children}</h2>}
function Gradient({children}:{children:ReactNode}){return <span className="bg-clip-text text-transparent" style={{backgroundImage:"linear-gradient(90deg,#493527,#9a775d)"}}>{children}</span>}
function Fade({position}:{position:"top"|"bottom"}){return <div className={`pointer-events-none absolute inset-x-0 h-[38%] ${position==="top"?"top-0":"bottom-0"}`} style={{background:position==="top"?"linear-gradient(180deg,rgba(255,255,255,.16) 0%,rgba(255,255,255,.06) 52%,transparent 82%)":"linear-gradient(0deg,#fff 0%,rgba(255,255,255,.8) 35%,transparent 100%)"}}/>}

function Comparison(){const rows=[["시선 높이 조절","X","X","O"],["받침 각도 조절","X","O","O"],["독서·필기 전환","X","X","O"],["대형 책 확장","X","X","O"],["페이지 고정","X","O","O"],["접이식 보관","X","O","O"],["고중량 거치","X","X","O"]];return <div className="mt-20 overflow-hidden rounded-[28px] border border-[#d2d2d7]"><table className="w-full table-fixed border-collapse text-center"><caption className="sr-only">책상, 일반 독서대, Void Book Stand 기능 비교</caption><thead><tr className="bg-[#f5f5f7]"><th className="w-[31%] px-3 py-7 text-[21px]">기능</th><th className="border-l px-2 text-[20px]">책상 위</th><th className="border-l px-2 text-[20px]">일반 독서대</th><th className="border-l bg-[#f3ebe4] px-2 text-[20px] text-[#6b513f]">Void<br/>Book Stand</th></tr></thead><tbody>{rows.map(([l,...v])=><tr key={l} className="border-t"><th className="px-3 py-7 text-[20px] font-semibold">{l}</th>{v.map((x,i)=><td key={`${l}-${i}`} className={`border-l px-2 py-7 text-[31px] font-bold ${i===2?"bg-[#f3ebe4] text-[#6b513f]":"text-[#86868b]"}`}>{x}</td>)}</tr>)}</tbody></table></div>}
function UseCases(){return <div className="mt-14 grid grid-cols-3 gap-5">{[{I:BookOpen,t:"책",b:"독서 · 문제집 · 필기"},{I:Tablet,t:"태블릿",b:"온라인 학습 · 자료 확인"},{I:Laptop,t:"노트북",b:"타이핑 · 화상회의"}].map(({I,t,b})=><article key={t} className="rounded-[28px] border border-[#e7e1db] bg-[#f8f5f2] px-4 py-10 text-center"><I className="mx-auto h-12 w-12 text-[#8a6246]"/><h3 className="mt-6 text-[27px] font-bold text-[#493527]">{t}</h3><p className="mt-3 text-[17px] font-medium leading-[1.45] text-[#6e6259]">{b}</p></article>)}</div>}

function DesignDetails(){return <div style={{background:"linear-gradient(180deg,#fff 0%,#f8f5f2 5%,#f8f5f2 95%,#fff 100%)"}}>
  <section className="bg-transparent px-12 py-40">
    <p className="text-[23px] font-semibold tracking-[0.09em] text-[#8a6246]">DESIGN DETAIL 01</p>
    <h2 className="mt-9 text-[64px] font-bold leading-[1.16] tracking-[-0.035em]">책상 위에 남는,<br/><Gradient>깊은 월넛 톤.</Gradient></h2>
    <div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px]"><Image src="/assets/sync-2026-10-29/void/book-stand/walnut-detail.webp" alt="깊은 월넛 톤과 자연스러운 나뭇결의 상판 디테일" fill sizes="764px" className="object-cover"/></div>
    <p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">원목 상판에 짙은 블랙 월넛 톤을 더했습니다. 나무가 가진 자연스러운 결을 그대로 살려, 책과 노트북을 치운 뒤에도 서재와 작업 공간에 차분하게 남습니다.</p>
    <div className="mt-12 flex items-center gap-6 rounded-[28px] border border-[#e5dcd4] bg-[#f3efeb] p-8"><span className="h-20 w-20 shrink-0 rounded-full border border-[#6f4b35]" style={{backgroundImage:"repeating-radial-gradient(ellipse at 22% 48%,rgba(232,196,154,.24) 0 2px,transparent 3px 8px),linear-gradient(135deg,#382116 0%,#76503a 48%,#4a2d1e 100%)"}}/><div><p className="text-[25px] font-bold">Black Walnut</p><p className="mt-2 text-[20px] font-medium text-[#6e6e73]">짙은 브라운 바탕과 자연스러운 나뭇결 표현</p></div></div>
  </section>

  <section className="bg-transparent px-12 py-40">
    <p className="text-[23px] font-semibold tracking-[0.09em] text-[#8a6246]">DESIGN DETAIL 02</p>
    <h2 className="mt-9 text-[64px] font-bold leading-[1.16] tracking-[-0.035em]">따뜻한 우드와,<br/><Gradient>단단한 메탈의 균형.</Gradient></h2>
    <div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px]"><Image src="/assets/sync-2026-10-29/void/book-stand/wood-metal-balance.webp" alt="월넛 원목 상판과 알루미늄 합금 프레임의 소재 대비" fill sizes="764px" className="object-cover"/></div>
    <p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">눈에 닿는 넓은 면에는 따뜻한 원목을, 구조를 지지하는 암과 플레이트에는 금속 소재를 배치했습니다. 부드러운 인상과 기계적인 안정감이 한 제품 안에서 균형을 이룹니다.</p>
    <div className="mt-14 grid grid-cols-3 gap-5">
      {[["WOOD","월넛 톤 원목","공간에 스며드는 표면"],["ALUMINUM","알루미늄 합금 암","구조를 받치는 프레임"],["ABS","블랙 관절 하우징","움직임을 정돈하는 연결부"]].map(([k,t,b])=><article key={k} className="rounded-[28px] border border-[#e5dcd4] bg-[#f3efeb] px-6 py-9"><p className="text-[17px] font-bold tracking-[0.12em] text-[#8a6246]">{k}</p><h3 className="mt-5 text-[25px] font-bold leading-tight">{t}</h3><p className="mt-4 text-[18px] font-medium leading-[1.5] text-[#6e6e73]">{b}</p></article>)}
    </div>
  </section>

  <section className="bg-transparent px-12 py-40">
    <p className="text-[23px] font-semibold tracking-[0.09em] text-[#8a6246]">DESIGN DETAIL 03</p>
    <h2 className="mt-9 text-[64px] font-bold leading-[1.16] tracking-[-0.035em]">보이는 면보다,<br/><Gradient>손이 닿는 곳까지.</Gradient></h2>
    <div className="mt-24 grid grid-cols-2 gap-6">
      <DetailImage src="/assets/sync-2026-10-29/void/book-stand/detail-rounded-edge.webp" alt="둥글게 마감된 월넛 상판 모서리"/>
      <DetailImage src="/assets/sync-2026-10-29/void/book-stand/detail-silicone-tip.webp" alt="책장에 닿는 페이지 클립 끝부분"/>
      <DetailImage src="/assets/sync-2026-10-29/void/book-stand/detail-metal-plate.webp" alt="브러시드 메탈 통풍 플레이트"/>
      <DetailImage src="/assets/sync-2026-10-29/void/book-stand/detail-control-knob.webp" alt="알루미늄 암과 원형 관절 노브"/>
    </div>
    <p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">둥글게 정리한 상판 모서리, 책장에 닿는 실리콘 클립, 결을 살린 금속 플레이트와 원형 조절 노브까지. 자주 보고 만지는 부분의 재질과 형태를 하나의 톤으로 정돈했습니다.</p>
    <div className="mt-12 grid grid-cols-2 gap-5">{[["Rounded Edge","부드럽게 정리한 모서리"],["Silicone Tip","책장에 닿는 클립 마감"],["Metal Plate","통풍 구조를 살린 금속 포인트"],["Control Knob","손끝으로 조절하는 원형 노브"]].map(([t,b])=><div key={t} className="rounded-[24px] border border-[#e5dcd4] bg-[#f3efeb] p-7"><p className="text-[22px] font-bold text-[#493527]">{t}</p><p className="mt-3 text-[18px] font-medium text-[#6e6e73]">{b}</p></div>)}</div>
  </section>

  <section className="bg-transparent px-12 py-40">
    <p className="text-[23px] font-semibold tracking-[0.09em] text-[#8a6246]">DESIGN DETAIL 04</p>
    <h2 className="mt-9 text-[64px] font-bold leading-[1.16] tracking-[-0.035em]">기능을 위한 독서대에서,<br/><Gradient>공간에 남는 오브제로.</Gradient></h2>
    <div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px]"><Image src="/assets/sync-2026-10-29/void/book-stand/interior-object.webp" alt="따뜻한 서재 공간에 자연스럽게 놓인 Void Book Stand" fill sizes="764px" className="object-cover"/></div>
    <p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">차분한 블랙 월넛 톤 원목과 금속 프레임이 책상과 서재에 자연스럽게 어우러집니다. 학용품처럼 가볍게 보이지 않고, 사용하지 않을 때도 공간의 분위기를 해치지 않는 디자인을 지향했습니다.</p>
  </section>
</div>}

function RecommendedFor(){const people=[
  {scene:"두꺼운 교재를 오래 보는 수험생",line:"무겁고 두꺼운 수험서를 펼쳐 둔 채 독서와 필기를 오래 이어가는 분께 잘 맞습니다.",image:"/assets/sync-2026-10-29/void/book-stand/recommended-exam-student.webp",alt:"두꺼운 수험서를 북스탠드에 펼쳐 두고 필기하는 수험생"},
  {scene:"아이의 책상 환경이 고민인 부모",line:"아이의 키와 책상 높이에 따라 읽을 위치를 조절해 주고 싶은 분께 잘 맞습니다.",image:"/assets/sync-2026-10-29/void/book-stand/recommended-parent-child.webp",alt:"보호자가 아이 눈높이에 맞춰 북스탠드를 조절하는 모습"},
  {scene:"온라인 학습을 자주 이용하는 분",line:"태블릿 화면을 세워 수업을 보고, 바로 문제집과 필기로 이어가고 싶은 분께 잘 맞습니다.",image:"/assets/sync-2026-10-29/void/book-stand/recommended-online-learning.webp",alt:"북스탠드에 태블릿을 올려 온라인 수업을 보며 필기하는 모습"},
  {scene:"책을 보며 필기하는 분",line:"책장을 펼쳐 둔 채 내용을 확인하며 노트 필기를 이어가고 싶은 분께 잘 맞습니다.",image:"/assets/sync-2026-10-29/void/book-stand/focus-space.webp",alt:"북스탠드의 책을 보며 노트에 필기하는 모습"},
  {scene:"거치대를 하나로 정리하고 싶은 분",line:"독서대와 태블릿·노트북 거치대를 용도마다 따로 두고 싶지 않은 분께 잘 맞습니다.",image:"/assets/sync-2026-10-29/void/book-stand/product-overview-v3.webp",alt:"책과 태블릿, 노트북을 모두 거치할 수 있는 Void Book Stand"},
  {scene:"우드 톤의 책상을 좋아하는 분",line:"서재와 책상에 어울리는 우드 디자인을 원하는 분께 잘 맞습니다.",image:"/assets/sync-2026-10-29/void/book-stand/interior-object.webp",alt:"따뜻한 우드 톤 서재에 놓인 Void Book Stand"},
];return <section className="bg-white px-12 py-40"><Title>이런 분께 잘 맞습니다.</Title><p className="mx-auto mt-8 max-w-[700px] text-center text-[26px] font-medium leading-[1.6] text-[#6e6e73]">공부와 작업의 자리를 나에게 맞게 바꾸고 싶은 분들입니다.</p><div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-16">{people.map(({scene,line,image,alt})=><article key={scene}><div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px]"><Image src={image} alt={alt} fill sizes="370px" className="object-cover"/></div><h3 className="mt-7 text-[29px] font-bold leading-[1.3] tracking-[-0.02em]">{scene}</h3><p className="mt-3 text-[21px] font-medium leading-[1.55] text-[#6e6e73]">{line}</p></article>)}</div></section>}

function Reviews() {
  const reviews = [
    {
      source: "네XX 구매 고객",
      review:
        "수험서가 두껍고 무거워서 일반 독서대는 자꾸 처졌는데, 이 제품은 받침이 묵직하고 넓어서 안정감이 있어요. 책을 펼쳐 둔 채로 필기하기도 편하고 높이까지 맞출 수 있어 만족합니다.",
    },
    {
      source: "쿠X 구매 고객",
      review:
        "아이 문제집과 태블릿 수업에 함께 쓰려고 구매했어요. 책을 볼 때는 페이지 클립이 잘 잡아주고, 태블릿을 올렸을 때도 흔들림이 적어서 책상 환경이 한결 깔끔해졌습니다.",
    },
    {
      source: "네XX 구매 고객",
      review:
        "원하는 높이와 각도로 부드럽게 조절할 수 있어서 독서와 노트북 작업을 번갈아 할 때 편합니다. 매번 거치대를 바꿀 필요 없이 하나로 사용할 수 있는 점이 가장 마음에 들어요.",
    },
    {
      source: "쿠X 구매 고객",
      review:
        "기능만 보고 샀는데 실제로 받아보니 월넛 톤이 훨씬 고급스럽고 책상과도 자연스럽게 어울립니다. 사용하지 않을 때는 얇게 접어둘 수 있어 공간을 많이 차지하지 않는 점도 좋아요.",
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

const qs=[
  ["크고 두꺼운 책도 안정적으로 올릴 수 있나요?","네. 좌우 받침을 펼치면 폭이 약 29cm에서 최대 42cm까지 넓어집니다. 양쪽 탄성 클립은 최대 10cm 두께, 약 2,000페이지 분량의 책까지 펼친 상태로 잡아줍니다."],
  ["태블릿과 노트북도 올릴 수 있나요?","네. 책뿐 아니라 태블릿과 노트북의 보조 거치대로도 사용할 수 있습니다. 최대 하중 30kg의 듀얼 암 구조가 묵직한 기기까지 안정적으로 지지합니다."],
  ["높이와 각도는 어떻게 조절하나요?","관절의 원터치 버튼을 누른 상태에서 받침판과 듀얼 암을 움직인 뒤, 원하는 위치에서 버튼을 놓으면 고정됩니다. 높이는 최대 약 40cm, 받침판 각도는 0~180° 범위에서 조절할 수 있습니다."],
  ["책장을 넘기거나 화면을 터치할 때 흔들리지 않나요?","약 965g의 묵직한 본체와 넓은 베이스가 무게 중심을 잡아주며, 하부 실리콘 패드가 책상 위에서 밀리는 움직임을 줄여줍니다."],
  ["페이지 클립이 책에 자국을 남기지 않나요?","책장에 닿는 클립 끝을 실리콘으로 부드럽게 마감했습니다. 클립을 가볍게 들어 페이지를 넘긴 뒤 놓으면 펼친 상태를 다시 고정할 수 있습니다."],
  ["상판은 실제 원목인가요?","네. 실제 원목으로 제작한 상판에 깊은 블랙 월넛 톤을 더했습니다. 인쇄된 무늬가 아닌 나무 본연의 자연스러운 결을 느낄 수 있습니다."],
  ["별도로 조립해야 하나요?","아닙니다. 받침판과 조절 암이 결합된 완제품으로 제공되어, 제품을 펼치고 높이와 각도만 맞추면 바로 사용할 수 있습니다."],
  ["사용하지 않을 때는 어떻게 보관하나요?","받침판과 듀얼 암을 접으면 약 6.5cm 두께로 슬림해집니다. 책장 옆이나 서랍처럼 좁은 공간에도 깔끔하게 보관할 수 있습니다."],
  ["어린이도 사용할 수 있나요?","네. 아이의 키와 책상 높이에 맞춰 읽는 위치를 조절할 수 있습니다. 관절과 접이부를 움직일 때는 손가락 끼임을 방지할 수 있도록 보호자가 함께 조절해 주세요."],
] as const;
function Faq(){return <section className="bg-white px-10 pb-36 pt-40"><InfoTitle>질문에 답해드립니다.</InfoTitle><ul className="mt-24">{qs.map(([q,a])=><li key={q} className="border-t border-[#d2d2d7] py-7 last:border-b"><div className="flex items-start justify-between gap-6"><p className="text-[28px] font-semibold leading-[1.35] tracking-[-0.015em] text-[#1d1d1f]">{q}</p><ChevronDown className="mt-1.5 h-7 w-7 shrink-0 text-[#86868b]" strokeWidth={2.5}/></div><p className="mt-4 pr-12 text-[22px] font-medium leading-[1.55] tracking-[-0.01em] text-[#6e6e73]">{a}</p></li>)}</ul></section>}

const sizes=[["받침 폭","약 29–42cm (확장 시)"],["접은 상태","29 × 23.5 × 6.5cm"],["제품 중량","약 965g"]];
function Size(){return <section className="bg-white px-10 pb-36 pt-32"><InfoTitle>사이즈</InfoTitle><div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px]"><Image src="/assets/sync-2026-10-29/void/book-stand/size-guide.webp" alt="Void Book Stand의 상판, 확장 받침, 베이스 실측 사이즈 안내" fill sizes="780px" className="object-cover"/></div><Rows rows={sizes}/></section>}
function Components(){return <section className="bg-white px-10 pb-36 pt-32"><InfoTitle>구성품</InfoTitle><div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px]"><Image src="/assets/sync-2026-10-29/void/book-stand/package-contents.webp" alt="구성품인 Void Book Stand 본체 한 개" fill sizes="780px" className="object-cover"/></div><p className="mt-7 text-center text-[28px] font-semibold tracking-[-0.01em] text-[#1d1d1f]">Void Book Stand 본체 x1</p></section>}
const info=[["품명 및 모델명","Void Book Stand"],["용도","독서대 · 태블릿 거치대 · 노트북 거치대"],["색상","블랙 월넛"],["소재","원목 · 알루미늄 합금 · ABS"],["크기","29 × 23.5 × 6.5cm"],["중량","약 965g"],["각도","0–180° 조절"],["최대 하중","30kg"],["주요 기능","듀얼 확장 암 · 각도 조절 · 확장형 받침 · 페이지 클립 · 오픈형 통풍 구조 · 미끄럼 방지 패드"],["설치","별도 조립 불필요"],["구성품","Void Book Stand 본체 1개"],["제조자(수입자)","보이드 투 노바"],["제조국","중국"],["품질보증기준","관련 법령 및 소비자분쟁해결기준에 따름"],["A/S 책임자와 전화번호","010-6393-0907"]];
function ProductInfo(){return <section className="bg-white px-10 pb-36 pt-32"><InfoTitle>제품 정보</InfoTitle><Rows rows={info}/></section>}
function Rows({rows}:{rows:string[][]}){return <dl className="mx-auto mt-24 max-w-[720px]">{rows.map(([l,v])=><div key={l} className="flex gap-8 border-b border-[#d2d2d7] py-6 first:border-t"><dt className="w-[200px] shrink-0 text-[22px] font-semibold text-[#1d1d1f]">{l}</dt><dd className="flex-1 text-[22px] font-medium leading-snug text-[#6e6e73]">{v}</dd></div>)}</dl>}
function InfoTitle({children}:{children:ReactNode}){return <h2 className="text-center text-[58px] font-bold leading-tight tracking-[-0.025em] text-[#1d1d1f]">{children}</h2>}
function Notices(){return <section className="bg-white px-10 pb-36 pt-32"><InfoTitle>기타 안내</InfoTitle><div className="mx-auto mt-24 max-w-[720px] space-y-12"><Notice title="취급 시 주의사항" bullets={["관절을 조절할 때 손가락 끼임에 주의해 주세요.","책이나 기기를 올리기 전 각 관절과 받침판이 원하는 위치에 고정되었는지 확인해 주세요.","제품을 조절할 때는 책과 기기를 먼저 내려놓아 주세요.","실제 허용 범위를 넘는 크기와 무게의 기기를 올리지 마세요.","경사지거나 흔들리는 책상에서는 사용하지 마세요.","관절을 무리하게 꺾거나 과도한 힘으로 회전하지 마세요.","어린이가 조절할 때는 보호자가 함께해 주세요.","물기와 화기, 높은 온도에 가까이 두지 마세요."]}/><Notice title="관리 방법" body="부드러운 마른 천으로 가볍게 닦아 주세요. 물이나 화학 세제 사용은 피하고, 관절부와 미끄럼 방지 패드에 먼지나 이물질이 쌓이지 않도록 관리해 주세요."/><Notice title="색상 및 무늬 안내" body="사용하시는 화면과 촬영 환경에 따라 실제 색상과 다소 차이가 있을 수 있으며, 원목의 나뭇결과 색감은 제품마다 자연스러운 차이가 있을 수 있습니다."/><Notice title="사양 안내" body="제품의 크기와 중량은 측정 방식에 따라 약간의 차이가 있을 수 있습니다."/><Notice title="A/S 안내" body="제품 초기 불량은 수령 후 7일 이내 확인해 주시면 교환 도와드립니다. 문의는 스토어 고객센터를 통해 접수해 주세요."/><Notice title="배송 안내" bullets={["배송기간 — 평균 배송기간은 2~5일 (일부 품목은 출고지 및 반품지 주소가 다를 수 있음)","발송 마감시간 — 평일 기준 당일 오후 4시 이전 주문건까지 당일 발송 (일부품목 제외). 오후 4시 이후 주문건은 +1일 이후 발송 (평일기준)","제주도·도서산간 지역배송비 — 제주도/도서산간 지역의 경우 배송비가 추가됩니다. (해당 지역마다의 배송비 편차가 상이하여 평균 배송비를 부과하며 일부 지역은 배송비가 다를 수 있음)"]}/><ExchangeGuide/></div></section>}
function ExchangeGuide(){const groups=[{title:"교환·반품 가능",items:["상품 수령 후 7일 이내 구매한 몰에서 교환 또는 반품을 신청한 경우","구매자의 단순 변심은 상품 수령 후 7일 이내 가능하며 반품 배송비가 발생할 수 있습니다.","상품 초기 불량에 대한 교환과 반품은 무료이며 그 외에는 왕복 택배비가 발생할 수 있습니다.","교환·반품 신청 후 상품은 포장과 구성품을 받은 상태로 보관해 주세요."]},{title:"교환·반품 불가",items:["교환 또는 반품 요청 기간이 지난 경우","구매자 책임으로 상품이나 포장이 훼손된 경우","사용 흔적으로 상품 가치가 현저히 감소한 경우","구성품이 누락된 경우","고객 요청으로 별도 제작 또는 변경된 상품인 경우"]}];return <div><h3 className="text-[28px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">교환·반품 안내</h3><p className="mt-4 text-[22px] font-medium leading-snug tracking-[-0.01em] text-[#6e6e73]">교환 및 반품 접수는 구매하신 몰에서 신청해 주세요.</p>{groups.map(({title,items})=><div key={title} className="mt-8"><p className="text-[22px] font-semibold tracking-[-0.01em] text-[#1d1d1f]">{title}</p><ul className="mt-3 space-y-2 text-[22px] font-medium leading-snug tracking-[-0.01em] text-[#6e6e73]">{items.map(item=><li key={item} className="flex gap-3"><span className="shrink-0">·</span><span>{item}</span></li>)}</ul></div>)}<div className="mt-8"><p className="text-[22px] font-semibold tracking-[-0.01em] text-[#1d1d1f]">변경·취소</p><p className="mt-3 text-[22px] font-medium leading-snug tracking-[-0.01em] text-[#6e6e73]">취소나 변경은 실제 출고가 되지 않았을 경우에만 가능합니다. 상품 출고 후 취소 또는 변경 시 왕복 택배비는 구매자 부담입니다.</p></div></div>}
function Notice({title,body,bullets}:{title:string;body?:string;bullets?:string[]}){return <div><h3 className="text-[28px] font-semibold">{title}</h3>{body?<p className="mt-4 text-[22px] leading-snug text-[#6e6e73]">{body}</p>:null}{bullets?<ul className="mt-4 space-y-2 text-[22px] leading-snug text-[#6e6e73]">{bullets.map(x=><li key={x} className="flex gap-3"><span>·</span><span>{x}</span></li>)}</ul>:null}</div>}
