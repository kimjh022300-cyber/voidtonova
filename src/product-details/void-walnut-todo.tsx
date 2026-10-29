import { BrandFrame } from "@/components/product-detail/brand-frame";
import { Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

const metrics = [
  ["총 50장", "한 상자에 담긴 투두 카드"], ["35장", "Today · 화이트"],
  ["10장", "Next · 베이지"], ["5장", "Someday · 옐로"],
  ["3가지", "오늘 · 다음 · 언젠가"], ["WALNUT", "블랙월넛 원목 받침대"],
] as const;

const faqs = [
  ["기본 구성은 어떻게 되나요?", "블랙월넛 받침대 1개와 투두 카드 50장이 한 상자에 담겨 있습니다. 화이트 Today 35장, 베이지 Next 10장, 옐로 Someday 5장 구성입니다."],
  ["카드를 모두 사용하면 다시 채울 수 있나요?", "네. 기본 구성의 50장을 모두 사용한 뒤에는 전용 리필 카드를 추가해 블랙월넛 받침대를 계속 사용할 수 있습니다."],
  ["일반 종이나 메모지도 꽂을 수 있나요?", "받침대는 전용 투두 카드에 맞춰 제작되었습니다. 일반 종이는 크기와 두께에 따라 안정적으로 세워지지 않을 수 있어 전용 리필 카드 사용을 권장합니다."],
  ["원목의 색이나 나뭇결이 사진과 다를 수 있나요?", "네. 천연 블랙월넛은 나무가 자란 부위와 결에 따라 색의 농도와 무늬가 다릅니다. 촬영 환경과 화면 설정에 따라서도 색상이 다르게 보일 수 있습니다."],
  ["어떻게 관리하면 되나요?", "받침대는 부드러운 마른 천으로 가볍게 닦아 주세요. 물기, 알코올, 강한 세제는 피하고 종이는 습기가 많은 장소에 오래 두지 않는 것이 좋습니다."],
] as const;

export default function VoidWalnutTodoPage() {
  return <BrandFrame brand="void">
    <Hero />
    <Overview />
    <section className="px-12 py-36" style={{ background: "linear-gradient(180deg, #f8f7f5 0%, #f8f7f5 calc(100% - 240px), #ffffff 100%)" }}>
      <Title>한눈에 보는<br/><Gradient>Void Walnut To-do.</Gradient></Title>
      <div className="mt-20 grid grid-cols-2 gap-6">{metrics.map(([v,l])=><Metric key={l} value={v} label={l}/>)}</div>
    </section>
    <Story eyebrow="A SMALL WORK RITUAL" title={<>더 복잡한 계획보다,<br/><Gradient>눈앞에 두는 단순함.</Gradient></>} label="오늘 할 일을 적고 책상 위에 세워두는 장면" image="/assets/sync-2026-10-29/void/walnut-todo/work-ritual-v2.webp" imageAlt="키보드 옆 블랙월넛 받침대에 오늘의 할 일을 적은 투두 카드를 세워둔 모습">
      해야 할 일을 손으로 적고, 가장 먼저 해야 할 한 장을 눈앞에 세웁니다. 많은 기능을 더하기보다 오늘의 우선순위를 선명하게 보여주며, 작업을 시작하는 단순한 리듬을 만듭니다.
    </Story>
    <PaperSystem />
    <Refill />
    <Feature eyebrow="DESIGN DETAIL 01" title={<>종이와 원목 사이,<br/><Gradient>작지만 분명한 대비.</Gradient></>} label="밝은 종이와 짙은 블랙월넛의 대비를 보여주는 디자인 사진" image="/assets/sync-2026-10-29/void/walnut-todo/material-contrast-v2.webp" imageAlt="밝은 Today 카드와 짙은 블랙월넛 받침대가 대비되는 정면 모습" body="밝은 카드와 짙은 블랙월넛의 대비가 작은 기록 한 장을 또렷하게 보여줍니다. 사용하지 않는 순간에도 두 소재의 차분한 조합이 책상 위에 단정한 오브제로 남습니다." />
    <Feature eyebrow="DESIGN DETAIL 02" title={<>더하지 않고 남긴,<br/><Gradient>하나의 홈과 간결한 선.</Gradient></>} label="블랙월넛 받침대의 홈과 측면 실루엣 사진" image="/assets/sync-2026-10-29/void/walnut-todo/groove-detail-v2.webp" imageAlt="블랙월넛 받침대의 홈과 카드가 세워진 각도를 보여주는 측면 모습" body="별도의 장식이나 눈에 띄는 부품 없이 원목에 낸 하나의 홈으로 카드를 세웁니다. 앞에서는 기록에 집중하고, 어느 방향에서 보아도 간결한 실루엣이 이어집니다." />
    <div style={{background:"linear-gradient(180deg,#fff 0%,#f8f5f2 5%,#f8f5f2 95%,#fff 100%)"}}>
      <Story tone="chapter" eyebrow="BLACK WALNUT" title={<>종이의 가벼움과,<br/><Gradient>블랙월넛의 깊이.</Gradient></>} label="밝은 종이와 깊은 브라운 나뭇결이 대비되는 블랙월넛 받침대 사진" image="/assets/sync-2026-10-29/void/walnut-todo/walnut-depth.webp" imageAlt="밝은 Today 카드와 깊은 나뭇결의 블랙월넛 받침대를 가까이 보여주는 모습">
        매일 바뀌는 기록 아래에는 오래 사용할 수 있는 블랙월넛을 두었습니다. 나무가 자란 시간과 부위에 따라 결의 흐름과 색의 깊이가 달라져, 각 받침대마다 하나뿐인 자연스러운 표정을 갖습니다.
      </Story>
      <StartingPoint />
    </div>
    <Recommended />
    <Closing />
    <Faq />
    <Size />
    <Components />
    <ProductInfo />
    <Notices />
  </BrandFrame>;
}

function Hero(){return <section className="relative min-h-[1440px] overflow-hidden bg-[#f2f0ed]">
  <Image src="/assets/sync-2026-10-29/void/walnut-todo/hero.webp" alt="햇살이 드는 책상 위 블랙월넛 받침대와 Today 투두 카드" fill priority sizes="860px" className="object-cover"/><Fade/>
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%]" style={{background:"linear-gradient(0deg,rgba(40,25,16,.68) 0%,rgba(40,25,16,.22) 48%,transparent 100%)"}}/>
  <div className="relative z-10 flex min-h-[1440px] flex-col items-center px-8 pb-24 pt-24 text-center">
    <p className="text-[39px] font-semibold text-[#493527]">Void Walnut To-do</p>
    <h1 className="mt-8 whitespace-nowrap text-[70px] font-bold leading-[1.06] tracking-[-0.045em] text-[#201a16]">할 일을, 눈앞에 세우다.</h1>
    <p className="mt-auto whitespace-nowrap text-[27px] font-medium leading-[1.6] text-[#fffaf5] [text-shadow:0_3px_18px_rgba(47,30,19,0.78),0_1px_3px_rgba(47,30,19,0.9)]">해야 할 일을 적고 세워두는 블랙월넛 투두리스트.</p>
  </div>
</section>}

function Overview(){return <section className="relative aspect-[3/4] overflow-hidden bg-white">
  <Image src="/assets/sync-2026-10-29/void/walnut-todo/overview.webp" alt="Today, Next, Someday 투두 카드와 블랙월넛 받침대 구성" fill sizes="860px" className="object-cover"/>
  <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[38%]" style={{background:"linear-gradient(180deg,rgba(255,255,255,.96) 0%,rgba(255,255,255,.78) 48%,transparent 100%)"}}/>
  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[18%]" style={{background:"linear-gradient(180deg,transparent 0%,rgba(248,247,245,.72) 58%,#f8f7f5 100%)"}}/>
  <div className="absolute inset-x-0 top-24 z-10 text-center"><h2 className="text-[68px] font-bold tracking-[-0.035em]"><Gradient>Void Walnut To-do.</Gradient></h2></div>
  <p className="absolute inset-x-0 bottom-24 z-10 text-center text-[31px] font-semibold text-[#493527]">계획이 책상 위의 풍경이 되는 순간.</p>
</section>}

function PaperSystem(){const cards=[["TODAY","35장","화이트"],["NEXT","10장","베이지"],["SOMEDAY","5장","옐로"]];return <section className="bg-white px-12 pb-36 pt-32">
  <CheckIcon/><h2 className="mt-10 text-[63px] font-bold leading-[1.15] tracking-[-0.032em]">오늘과 다음,<br/><Gradient>그리고 언젠가를 나누다.</Gradient></h2>
  <div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px]"><Image src="/assets/sync-2026-10-29/void/walnut-todo/paper-system-v2.webp" alt="Today, Next, Someday 세 가지 투두 카드를 블랙월넛 받침대에 세워둔 모습" fill sizes="764px" className="object-cover"/></div>
  <p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">Today에는 지금 해야 할 일, Next에는 이어서 할 일, Someday에는 언젠가 꺼내볼 일을 기록합니다. 자주 사용하는 Today를 35장으로 넉넉하게 구성해 지금 집중할 기록만 눈앞에 세워둘 수 있습니다.</p>
  <div className="mt-14 grid grid-cols-3 gap-5">{cards.map(([n,a,c])=><article key={n} className="rounded-[24px] border border-[#e3ddd7] bg-[#faf8f6] px-4 py-7 text-center"><p className="text-[16px] font-bold tracking-[0.1em] text-[#8a6246]">{n}</p><p className="mt-3 text-[32px] font-bold text-[#493527]">{a}</p><p className="mt-2 text-[19px] font-semibold">{c}</p></article>)}</div>
</section>}

function Refill(){return <Feature title={<>50장의 기록이 끝나도,<br/><Gradient>다시 채워 이어가도록.</Gradient></>} label="기본 카드와 리필 카드를 함께 보여주는 구성 사진" image="/assets/sync-2026-10-29/void/walnut-todo/refill-v2.webp" imageAlt="Today, Next, Someday 투두 카드 50장과 패키지 구성" body="한 상자에는 화이트 35장, 베이지 10장, 옐로 5장으로 총 50장의 투두 카드가 담겨 있습니다. 카드를 모두 사용한 뒤에는 전용 리필 카드만 추가해 블랙월넛 받침대를 계속 사용할 수 있습니다." extra={<div className="mt-14 grid grid-cols-2 gap-5"><Metric value="총 50장" label="기본 카드 구성"/><Metric value="REFILL" label="카드 추가 구매 가능"/></div>}/>}

function Feature({eyebrow,title,label,body,extra,image,imageAlt}:{eyebrow?:string;title:ReactNode;label:string;body:string;extra?:ReactNode;image?:string;imageAlt?:string}){return <section className="bg-white px-12 pb-36 pt-32">
  {eyebrow?<Eyebrow>{eyebrow}</Eyebrow>:<CheckIcon/>}<h2 className="mt-10 text-[63px] font-bold leading-[1.15] tracking-[-0.032em]">{title}</h2>
  {image?<div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px]"><Image src={image} alt={imageAlt??label} fill sizes="764px" className="object-cover"/></div>:<Photo className="mt-24" label={label}/>}<p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">{body}</p>{extra}
</section>}

function Story({eyebrow,title,label,children,tone="white",image,imageAlt}:{eyebrow:string;title:ReactNode;label:string;children:ReactNode;tone?:"white"|"chapter";image?:string;imageAlt?:string}){return <section className={(tone==="chapter"?"bg-transparent ":"bg-white ")+"px-12 py-40"}>
  <Eyebrow>{eyebrow}</Eyebrow><h2 className="mt-9 text-[64px] font-bold leading-[1.16] tracking-[-0.035em]">{title}</h2>{image?<div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px]"><Image src={image} alt={imageAlt??label} fill sizes="764px" className="object-cover"/></div>:<Photo className="mt-24" label={label}/>}<p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">{children}</p>
</section>}

function StartingPoint(){return <section className="bg-transparent px-12 py-40"><Eyebrow>A PLACE TO BEGIN</Eyebrow><h2 className="mt-9 text-[64px] font-bold leading-[1.16] tracking-[-0.035em]">책상 위의,<br/><Gradient>작은 시작점.</Gradient></h2><div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px]"><Image src="/assets/sync-2026-10-29/void/walnut-todo/starting-point.webp" alt="책상에서 Today 투두 카드에 오늘의 할 일을 적는 모습" fill sizes="764px" className="object-cover"/></div><p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">할 일을 쓰는 짧은 시간은 흩어진 생각을 정리하고 작업 모드로 전환하는 작은 신호가 됩니다. 오늘의 카드 한 장이 늘 같은 자리에 머물며 하루의 시작과 끝을 이어줍니다.</p></section>}

function Recommended(){const items=[
  {title:"책상 위 분위기를 중요하게 보는 분",body:"문구 하나도 작업 공간의 일부로 고르고 싶은 분께 잘 맞습니다.",image:"/assets/sync-2026-10-29/void/walnut-todo/recommended-desk-atmosphere.webp",alt:"햇살이 드는 밝은 책상 위에 블랙월넛 팜레스트와 데스크 소품을 배치한 모습"},
  {title:"손으로 적는 계획을 좋아하는 분",body:"앱보다 종이에 직접 쓰고 지우는 감각을 선호하는 분께 좋습니다.",image:"/assets/sync-2026-10-29/void/book-stand/recommended-exam-student.webp",alt:"책상에서 노트에 계획과 공부 내용을 직접 적는 모습"},
  {title:"해야 할 일을 눈앞에 두고 싶은 분",body:"오늘의 우선순위를 작업하는 자리 가까이에 세워두고 싶은 분께 어울립니다.",image:"/assets/sync-2026-10-29/void/keyboard-palm-rest/closing-typing-desk.webp",alt:"투두 카드를 작업 시야 안에 세워두고 키보드로 일하는 모습"},
  {title:"일을 시작하는 리듬이 필요한 분",body:"하루의 시작에 할 일을 적는 작은 루틴을 만들고 싶은 분을 위한 오브제입니다.",image:"/assets/sync-2026-10-29/void/walnut-todo/recommended-start-rhythm.webp",alt:"Today 투두 카드에 오늘의 할 일을 직접 적으며 하루를 시작하는 모습"},
];return <section className="bg-white px-12 py-40"><Title>이런 분께 잘 맞습니다.</Title><p className="mx-auto mt-8 max-w-[700px] text-center text-[26px] font-medium leading-[1.6] text-[#6e6e73]">계획하는 방식과 책상 위 분위기를 함께 가꾸고 싶은 분들입니다.</p><div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-16">{items.map(({title,body,image,alt})=><article key={title}><div className="relative aspect-[3/4] w-full overflow-hidden rounded-[28px]"><Image src={image} alt={alt} fill sizes="370px" className="object-cover"/></div><h3 className="mt-7 text-[28px] font-bold leading-[1.3] tracking-[-0.02em]">{title}</h3><p className="mt-3 text-[20px] font-medium leading-[1.55] text-[#6e6e73]">{body}</p></article>)}</div></section>}

function Closing(){return <section className="relative min-h-[1290px] overflow-hidden bg-[#eee8e2] px-12 pb-28 pt-16"><Image src="/assets/sync-2026-10-29/void/walnut-todo/hero.webp" alt="햇살이 드는 책상 위 블랙월넛 받침대와 Today 투두 카드" fill sizes="860px" className="object-cover"/><Fade/><div className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%]" style={{background:"linear-gradient(0deg,rgba(40,25,16,.7) 0%,rgba(40,25,16,.24) 52%,transparent 100%)"}}/><div className="relative z-10 flex min-h-[1114px] flex-col text-center"><h2 className="text-[68px] font-bold leading-[1.15]"><Gradient>Void Walnut To-do</Gradient></h2><p className="mt-auto whitespace-nowrap text-[29px] font-medium leading-[1.6] text-[#fffaf5] [text-shadow:0_3px_18px_rgba(47,30,19,0.78),0_1px_3px_rgba(47,30,19,0.9)]">오늘의 일을 적고, 세우고, 시작하세요.</p></div></section>}

function Faq(){return <section className="bg-white px-10 pb-36 pt-40"><InfoTitle>질문에 답해드립니다.</InfoTitle><ul className="mt-24">{faqs.map(([q,a])=><li key={q} className="border-t border-[#d2d2d7] py-7 last:border-b"><div className="flex items-start justify-between gap-6"><p className="text-[28px] font-semibold leading-[1.35]">{q}</p><ChevronDown className="mt-1.5 h-7 w-7 shrink-0 text-[#86868b]" strokeWidth={2.5}/></div><p className="mt-4 pr-12 text-[22px] font-medium leading-[1.55] text-[#6e6e73]">{a}</p></li>)}</ul></section>}

function Size(){return <section className="bg-white px-10 pb-36 pt-32"><InfoTitle>사이즈</InfoTitle><div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px]"><Image src="/assets/sync-2026-10-29/void/walnut-todo/size-guide.webp" alt="투두 카드와 블랙월넛 받침대의 가로와 세로 크기 안내" fill sizes="780px" className="object-cover"/></div><Rows rows={[["투두 카드","약 7.5 × 12.5cm"],["블랙월넛 받침대","약 10 × 4 × 2cm"]]}/></section>}

function Components(){const items=["블랙월넛 받침대 ×1","Today 화이트 ×35","Next 베이지 ×10","Someday 옐로 ×5"];return <section className="bg-white px-10 pb-36 pt-32"><InfoTitle>구성품</InfoTitle><div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px]"><Image src="/assets/sync-2026-10-29/void/walnut-todo/components.webp" alt="투두 카드가 담긴 블랙 패키지와 블랙월넛 받침대 구성" fill sizes="780px" className="object-cover"/></div><div className="mx-auto mt-8 grid max-w-[720px] grid-cols-2 gap-5">{items.map(i=><div key={i} className="rounded-[22px] border border-[#e3ddd7] bg-[#faf8f6] p-6 text-center text-[22px] font-semibold">{i}</div>)}</div><p className="mt-7 text-center text-[25px] font-semibold text-[#6b513f]">투두 카드 총 50장 구성</p></section>}

function ProductInfo(){const info=[["품명 및 모델명","Void Walnut To-do"],["용도","데스크용 투두리스트 카드 및 원목 받침대"],["카드 구성","Today 화이트 35장 · Next 베이지 10장 · Someday 옐로 5장"],["카드 수량","총 50장"],["받침대 색상","블랙월넛"],["소재","블랙월넛 원목 · 종이"],["크기","카드 약 7.5 × 12.5cm · 받침대 약 10 × 4 × 2cm"],["추가 사용","리필 카드 추가 구매 가능"],["구성품","블랙월넛 받침대 1개 · 투두 카드 50장"],["제조자(수입자)","보이드 투 노바"],["품질보증기준","관련 법령 및 소비자분쟁해결기준에 따름"],["A/S 책임자와 전화번호","010-6393-0907"]];return <section className="bg-white px-10 pb-36 pt-32"><InfoTitle>제품 정보</InfoTitle><Rows rows={info}/></section>}

function Notices(){return <section className="bg-white px-10 pb-36 pt-32"><InfoTitle>기타 안내</InfoTitle><div className="mx-auto mt-24 max-w-[720px] space-y-12"><Notice title="취급 시 주의사항" bullets={["평평하고 흔들림 없는 책상 위에서 사용해 주세요.","받침대를 던지거나 강한 충격을 가하지 마세요.","원목 표면에 날카로운 물건이 직접 닿지 않도록 주의해 주세요.","물기와 화기, 직사광선 및 높은 온도에 가까이 두지 마세요.","종이 카드는 습기와 물기에 의해 휘거나 변형될 수 있으니 건조한 곳에 보관해 주세요.","필기구에 따라 번짐과 비침 정도가 달라질 수 있습니다."]}/><Notice title="관리 방법" body="블랙월넛 받침대는 부드러운 마른 천으로 가볍게 닦아 주세요. 물이나 알코올, 강한 화학 세제 사용은 피하고, 받침대의 홈에 먼지나 이물질이 쌓이지 않도록 관리해 주세요."/><Notice title="색상 및 무늬 안내" body="사용하시는 화면과 촬영 환경에 따라 실제 색상이 다소 다르게 보일 수 있습니다. 천연 원목의 나뭇결과 색 농도, 무늬의 방향은 제품마다 자연스러운 차이가 있을 수 있습니다."/><Notice title="사양 안내" body="받침대와 카드의 크기는 측정 방식에 따라 약간의 차이가 있을 수 있으며, 카드의 인쇄 위치와 재단면에도 미세한 차이가 생길 수 있습니다. 리필 카드의 세부 구성은 구매하신 스토어에서 확인해 주세요."/><Notice title="A/S 안내" body="제품 초기 불량은 수령 후 7일 이내 확인해 주시면 교환 도와드립니다. 문의는 스토어 고객센터를 통해 접수해 주세요."/><Notice title="배송 안내" bullets={["배송기간 — 평균 배송기간은 2~5일 (일부 품목은 출고지 및 반품지 주소가 다를 수 있음)","발송 마감시간 — 평일 기준 당일 오후 4시 이전 주문건까지 당일 발송 (일부품목 제외). 오후 4시 이후 주문건은 +1일 이후 발송 (평일기준)","제주도·도서산간 지역배송비 — 제주도/도서산간 지역의 경우 배송비가 추가됩니다. (해당 지역마다 배송비가 다를 수 있음)"]}/><ExchangeGuide/></div></section>}

function CheckIcon(){return <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-[3px] border-[#8a6246]"><Check className="h-9 w-9 text-[#8a6246]" strokeWidth={3.5}/></div>}
function Title({children}:{children:ReactNode}){return <h2 className="text-center text-[61px] font-bold leading-[1.17] tracking-[-0.035em]">{children}</h2>}
function Gradient({children}:{children:ReactNode}){return <span className="bg-clip-text text-transparent" style={{backgroundImage:"linear-gradient(90deg,#493527,#9a775d)"}}>{children}</span>}
function Eyebrow({children}:{children:ReactNode}){return <p className="text-[22px] font-bold tracking-[0.13em] text-[#8a6246]">{children}</p>}
function Metric({value,label}:{value:string;label:string}){return <div className="rounded-[28px] border border-[#e7e1db] bg-white px-5 py-11 text-center shadow-[0_10px_30px_rgba(73,53,39,0.06)]"><p className="whitespace-nowrap text-[47px] font-bold text-[#6b513f]">{value}</p><p className="mt-4 text-[20px] font-semibold text-[#6e6e73]">{label}</p></div>}
function InfoTitle({children}:{children:ReactNode}){return <h2 className="text-center text-[58px] font-bold leading-tight tracking-[-0.025em]">{children}</h2>}
function Rows({rows}:{rows:readonly(readonly string[])[]}){return <dl className="mx-auto mt-8 max-w-[720px]">{rows.map(([l,v])=><div key={l} className="flex gap-8 border-b border-[#d2d2d7] py-6 first:border-t"><dt className="w-[210px] shrink-0 text-[22px] font-semibold">{l}</dt><dd className="flex-1 text-[22px] font-medium leading-snug text-[#6e6e73]">{v}</dd></div>)}</dl>}
function Notice({title,body,bullets}:{title:string;body?:string;bullets?:string[]}){return <div><h3 className="text-[28px] font-semibold">{title}</h3>{body?<p className="mt-4 text-[22px] font-medium leading-snug text-[#6e6e73]">{body}</p>:null}{bullets?<ul className="mt-4 space-y-2 text-[22px] font-medium leading-snug text-[#6e6e73]">{bullets.map(i=><li key={i} className="flex gap-3"><span>·</span><span>{i}</span></li>)}</ul>:null}</div>}
function ExchangeGuide(){const groups=[{title:"교환·반품 가능",items:["상품 수령 후 7일 이내 구매한 몰에서 교환 또는 반품을 신청한 경우","구매자의 단순 변심은 상품 수령 후 7일 이내 가능하며 반품 배송비가 발생할 수 있습니다.","상품 초기 불량에 대한 교환과 반품은 무료이며 그 외에는 왕복 택배비가 발생할 수 있습니다.","교환·반품 신청 후 상품은 포장과 구성품을 받은 상태로 보관해 주세요."]},{title:"교환·반품 불가",items:["교환 또는 반품 요청 기간이 지난 경우","구매자 책임으로 상품이나 포장이 훼손된 경우","사용 흔적이나 필기 흔적으로 상품 가치가 현저히 감소한 경우","종이 카드 또는 그 밖의 구성품이 누락된 경우","고객 요청으로 별도 제작 또는 변경된 상품인 경우"]}];return <div><h3 className="text-[28px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">교환·반품 안내</h3><p className="mt-4 text-[22px] font-medium leading-snug tracking-[-0.01em] text-[#6e6e73]">교환 및 반품 접수는 구매하신 몰에서 신청해 주세요.</p>{groups.map(({title,items})=><div key={title} className="mt-8"><p className="text-[22px] font-semibold tracking-[-0.01em] text-[#1d1d1f]">{title}</p><ul className="mt-3 space-y-2 text-[22px] font-medium leading-snug tracking-[-0.01em] text-[#6e6e73]">{items.map(item=><li key={item} className="flex gap-3"><span className="shrink-0">·</span><span>{item}</span></li>)}</ul></div>)}<div className="mt-8"><p className="text-[22px] font-semibold tracking-[-0.01em] text-[#1d1d1f]">변경·취소</p><p className="mt-3 text-[22px] font-medium leading-snug tracking-[-0.01em] text-[#6e6e73]">취소나 변경은 실제 출고가 되지 않았을 경우에만 가능합니다. 상품 출고 후 취소 또는 변경 시 왕복 택배비는 구매자 부담입니다.</p></div></div>}
function Fade(){return <div className="pointer-events-none absolute inset-x-0 top-0 h-[42%]" style={{background:"linear-gradient(180deg,#fff 0%,rgba(255,255,255,.62) 56%,transparent 100%)"}}/>}
function Photo({className="",label,fill=false}:{className?:string;label:string;fill?:boolean}){const frame=fill?"absolute inset-0 ":"relative aspect-[3/4] w-full rounded-[28px] border border-[#e5e1dc] ";return <div aria-label={`사진 자리: ${label}`} className={frame+"overflow-hidden bg-[#f3f2f0] "+className}/>}
