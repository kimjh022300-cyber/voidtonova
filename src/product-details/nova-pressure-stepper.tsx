import Image from "next/image";
import type { ReactNode } from "react";
import { Check, PackageCheck, RefreshCw, Wrench } from "lucide-react";
import { BrandFrame } from "@/components/product-detail/brand-frame";
import { ReviewSection } from "@/components/product-detail/review-section";

const asset = (name: string) => `/assets/sync-2026-10-29/nova/pressure-stepper/${name}`;
const gradient = "linear-gradient(90deg, #67417e, #ad7fc6)";

export default function NovaPressureStepperPage() {
  return (
    <BrandFrame brand="nova">
      {/* 1. 히어로 — 사용 장면으로 제품의 용도를 먼저 전달 */}
      <section className="break-keep relative min-h-[1440px] overflow-hidden bg-[#eee5dc]">
        <Image src={asset("hero-seated-sunlit-v1.webp")} alt="햇살이 드는 거실에서 소파에 앉아 보라색 지압 스테퍼에 발을 올린 모습" fill preload sizes="860px" className="object-cover object-center" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[36%] bg-gradient-to-b from-[#fffaf4]/95 via-[#fffaf4]/70 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[29%] bg-gradient-to-t from-[#34233d]/80 via-[#34233d]/35 to-transparent" />
        <div className="relative z-10 flex min-h-[1440px] flex-col items-center px-8 pb-20 pt-24 text-center">
          <p className="text-[39px] font-semibold text-[#69447d]">Nova Pressure Stepper</p>
          <h1 className="mt-8 text-[70px] font-bold leading-[1.08] tracking-[-0.045em] text-[#271d2c]">두 발부터, 가볍게.</h1>
          <p className="mt-auto text-[29px] font-medium leading-[1.6] text-[#fffaf5] [text-shadow:0_2px_12px_rgba(30,20,35,.5)]">
            발을 번갈아 디디는 에어 지압 스테퍼.
            <br />집에서 가볍게 움직이고, 발바닥까지 자극하세요.
          </p>
        </div>
      </section>

      {/* 2. 제품 소개 */}
      <section className="break-keep relative aspect-[3/4] overflow-hidden bg-[#f8f7f5]">
        <Image src={asset("product-overview-sunlit-v1.webp")} alt="햇살이 비치는 나무 바닥 위 Nova 지압 스테퍼 전체 모습" fill sizes="860px" className="object-cover" />
        <div className="absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-[#fffaf4]/90 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[22%]" style={{ background: "linear-gradient(180deg, rgba(248,247,245,0) 0%, rgba(248,247,245,0.55) 55%, #f8f7f5 100%)" }} />
        <div className="absolute inset-x-0 top-24 px-8 text-center">
          <h2 className="text-[61px] font-bold tracking-[-0.04em]"><Accent>Nova Pressure Stepper.</Accent></h2>
          <p className="mt-5 text-[31px] font-semibold text-[#624b6b]">에어 쿠션과 지압 돌기를 하나로.</p>
        </div>
      </section>

      {/* 3. 구매 전 크기와 소재를 빠르게 확인 */}
      <section className="break-keep px-12 py-36" style={{ background: "linear-gradient(180deg, #f8f7f5 0%, #f8f7f5 72%, #ffffff 100%)" }}>
        <SectionTitle>한눈에 보는<br /><Accent>Nova Pressure Stepper.</Accent></SectionTitle>
        <div className="mt-20 grid grid-cols-2 gap-6">
          {[
            ["39 × 33cm", "제품 크기"], ["5cm", "발판 높이"],
            ["약 1.2kg", "제품 무게"], ["PVC", "소재"],
          ].map(([value, label]) => (
            <article key={label} className="rounded-[28px] border border-[#e7dcea] bg-white px-5 py-16 text-center shadow-[0_12px_34px_rgba(75,48,82,.05)]">
              <p className="whitespace-nowrap text-[58px] font-bold tracking-[-0.04em] text-[#79568e]">{value}</p>
              <p className="mt-7 text-[23px] font-semibold text-[#6e6e73]">{label}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 4. 핵심 특징 */}
      <section className="break-keep bg-white px-12 py-40">
        <p className="text-[21px] font-bold tracking-[0.14em] text-[#9262b2]">세 가지 핵심 기능</p>
        <h2 className="mt-9 text-[64px] font-bold leading-[1.16] tracking-[-0.035em]">부드러운 쿠션부터,<br /><Accent>미끄럼 방지까지.</Accent></h2>
        <PhotoSlot imageSrc={asset("user-06-product-top.webp")} label="입체 돌기와 양발 구조가 보이는 지압 스테퍼" aspect="3 / 4" />
        <div className="mt-16 grid grid-cols-3 gap-5">
          {[
            ["에어 쿠션", "디디는 힘에 따라 부드럽게 반응하는 공기 발판"],
            ["입체 지압", "서로 다른 모양의 돌기가 전하는 발바닥 자극"],
            ["미끄럼 방지", "발판의 밀림을 줄여주는 바닥 패턴"],
          ].map(([title, body], index) => (
            <article key={title} className={`rounded-[26px] border border-[#dfcce9] px-6 py-8 ${["bg-[#f8f3fa]", "bg-[#f1e7f6]", "bg-[#e9daf1]"][index]}`}>
              <p className="text-[18px] font-bold tracking-[0.1em] text-[#9262b2]">0{index + 1}</p>
              <h3 className="mt-5 text-[25px] font-bold">{title}</h3>
              <p className="mt-4 text-[18px] font-medium leading-[1.55] text-[#695574]">{body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 6. 쿠션 반응 */}
      <section className="break-keep bg-white px-12 py-32">
        <FeatureBlock title={<>발을 디디면 느껴지는,<br />부드러운 에어 쿠션.</>} imageSrc={asset("user-04-side-pressure.webp")} imageAlt="발을 디뎠을 때 발바닥 아래에서 눌리는 에어 발판의 측면" aspect="4 / 3">
          공기를 채운 발판이 발로 누르면 부드럽게 눌립니다.
          딱딱한 바닥 대신 쿠션감 있는 발판 위에서 양발을 번갈아 디뎌보세요.
        </FeatureBlock>
      </section>

      {/* 7. 돌기 — 전체와 접촉면을 함께 제시 */}
      <section className="break-keep bg-white px-12 py-32">
        <FeatureBlock title={<>발바닥을 자극하는,<br />입체 지압 돌기.</>} imageSrc={asset("user-10-pressure-highlight.webp")} imageAlt="발바닥과 지압 돌기가 맞닿는 모습">
          발 모양을 따라 배치한 다양한 돌기가 발바닥을 자극합니다.
          맨발로 사용하면 돌기의 감각이 더 또렷하게 느껴집니다.
          자극이 강하게 느껴진다면 양말을 신고 가볍게 눌러 주세요.
        </FeatureBlock>
      </section>

      {/* 미끄럼 방지 — 핵심 기능을 사용법 앞에서 함께 설명 */}
      <section className="break-keep bg-white px-12 py-32">
          <FeatureBlock title={<>미끄럼 방지 패턴으로,<br />발 디딤은 안정적으로.</>} imageSrc={asset("user-01-bottom.webp")} imageAlt="미끄럼 방지 패턴이 보이는 스테퍼 바닥면">
            바닥면의 미끄럼 방지 패턴이 발판의 밀림을 줄여줍니다.
            양발을 번갈아 디딜 때 발판을 안정적으로 받쳐주어,
            동작에 집중하기 좋습니다.
          </FeatureBlock>
      </section>

      {/* 8. 처음 사용하기 */}
      <section className="break-keep px-12 py-36" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8f7f5 16%, #f8f7f5 84%, #ffffff 100%)" }}>
        <SectionTitle>처음이어도,<br /><Accent>시작은 간단하게.</Accent></SectionTitle>
        <p className="mx-auto mt-8 max-w-[680px] text-center text-[26px] leading-[1.6] text-[#6e6e73]">공기를 채우고, 발을 올리고, 천천히 디뎌보세요.</p>
        <ol className="mt-20 grid grid-cols-2 gap-6">
          {[
            ["공기 채우기", "동봉된 펌프로 공기를 조금씩 채워 주세요. 너무 팽팽하게 넣지 마세요."],
            ["바닥에 놓기", "평평하고 마른 바닥에 놓고, 공기 주입구가 잘 닫혔는지 확인하세요."],
            ["두 발 올리기", "발 모양에 맞춰 양발을 올려 주세요. 처음에는 의자에 앉아서 가볍게 눌러보세요."],
            ["천천히 디디기", "서서 균형을 잡은 뒤, 양발에 체중을 번갈아 옮겨 주세요. 처음에는 짧게 시작하세요."],
          ].map(([title, body], index) => (
            <li key={title} className="rounded-[28px] border border-[#e7dcea] bg-white px-8 py-10">
              <p className="text-[20px] font-bold text-[#9262b2]">0{index + 1}</p>
              <h3 className="mt-5 text-[29px] font-bold tracking-[-0.02em]">{title}</h3>
              <p className="mt-4 text-[22px] leading-[1.55] text-[#6e6e73]">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 9. 사용 동작 */}
      <section className="break-keep bg-white px-12 py-36">
        <SectionTitle>앉아서 가볍게.<br /><Accent>서서 리듬 있게.</Accent></SectionTitle>
        <div className="mt-20 grid grid-cols-2 gap-6">
          {[
            ["앉아서 누르기", "user-03-seated-use.webp", "의자에 앉아 양발을 올리고 가볍게 눌러 주세요. 앉아 있는 동안에도 발바닥 자극을 느낄 수 있습니다."],
            ["서서 번갈아 디디기", "user-09-alternating-feet.webp", "양발을 올리고 오른발과 왼발에 체중을 번갈아 옮겨 주세요. 발바닥 자극과 함께 하체를 움직일 수 있습니다."],
          ].map(([title, src, body]) => (
            <article key={title} className="overflow-hidden rounded-[28px] border border-[#e7dcea] bg-[#fcf9fd]">
              <div className="relative aspect-[3/4]"><Image src={asset(src)} alt={title} fill sizes="370px" className="object-cover" /></div>
              <div className="px-7 py-8"><h3 className="text-[28px] font-bold tracking-[-0.03em]">{title}</h3><p className="mt-4 text-[21px] leading-[1.55] text-[#6e6e73]">{body}</p></div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-[18px] leading-[1.6] text-[#86868b]">서서 사용할 때는 균형을 유지하며, 점프하거나 몸을 비틀지 마세요.</p>
      </section>

      {/* 10. 동작과 연결되는 부위 안내 */}
      <section className="break-keep bg-gradient-to-b from-white via-[#f5edf9] to-white px-12 py-36">
        <SectionTitle><Accent>디딜 때 함께 쓰이는,<br />하체와 몸통.</Accent></SectionTitle>
        <p className="mt-8 text-center text-[26px] leading-[1.6] text-[#6e6e73]">양발에 체중을 번갈아 옮기며 하체를 움직이고,<br />복부와 몸통으로 균형을 잡습니다.</p>
        <div className="mt-20 grid grid-cols-2 gap-5">
          {[ ["앞면", "front.svg"], ["뒷면", "back.svg"] ].map(([label, src]) => (
            <figure key={label} className="rounded-[28px] border border-[#e7dcea] bg-white px-7 py-8">
              <object data={asset(`muscle-map/${src}`)} type="image/svg+xml" aria-label={`서서 디디는 동작과 관련된 ${label} 근육도`} className="mx-auto h-[480px] w-full" />
              <figcaption className="mt-3 text-center text-[20px] font-semibold text-[#6e6e73]">{label}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-2 gap-6">
          {[["하체 움직임", "허벅지 · 종아리 · 엉덩이", "체중을 옮기고 발을 디디는 동작에 함께 쓰입니다."], ["자세 유지", "복부 · 몸통 주변", "서서 디딜 때 몸이 흔들리지 않도록 중심을 잡습니다."]].map(([title, area, body]) => (
            <div key={title} className="border-y border-[#e7dcea] py-8"><h3 className="text-[28px] font-bold text-[#79568e]">{title}</h3><p className="mt-4 text-[22px] font-semibold">{area}</p><p className="mt-3 text-[20px] leading-[1.55] text-[#6e6e73]">{body}</p></div>
          ))}
        </div>
        <p className="mt-10 text-center text-[17px] leading-[1.6] text-[#86868b]">사용 자세와 체중을 옮기는 정도에 따라 쓰이는 부위는 달라질 수 있습니다.</p>
      </section>

      {/* 11. 소재 디테일에서 실제 생활로 */}
      <section className="break-keep bg-white px-12 py-36">
        <div className="flex flex-col gap-48">
          <FeatureBlock title={<>TV 보는 시간에도,<br />가볍게 한 발씩.</>} imageSrc={asset("user-08-late-night.webp")} imageAlt="저녁 실내에서 지압 스테퍼를 사용하는 모습">
            소파 앞에 두고 TV를 보거나 쉬는 동안 가볍게 사용해보세요.
            따로 운동 시간을 내기 어려운 날에도 짧게 움직일 수 있습니다.
            늦은 시간에는 소리와 진동을 줄이도록 천천히 디뎌 주세요.
          </FeatureBlock>
          <FeatureBlock title={<>가운데 손잡이로,<br />이동도 보관도 간편하게.</>} imageSrc={asset("user-07-storage.webp")} imageAlt="수납장 위에 세워 보관한 보라색 지압 스테퍼">
            크기는 39 × 33cm, 무게는 약 1.2kg.
            가운데 손잡이를 잡고 필요한 곳으로 옮기세요.
            사용 후에는 거실 한쪽이나 책상 옆에 세워 보관할 수 있습니다.
          </FeatureBlock>
        </div>
      </section>

      {/* 12. 구매자의 생활과 연결 */}
      <section className="break-keep bg-white px-12 py-36">
        <SectionTitle>이런 분께, <Accent>추천합니다.</Accent></SectionTitle>
        <p className="mt-8 text-center text-[26px] leading-[1.6] text-[#6e6e73]">집에서 틈틈이 움직이고, 발바닥 자극을 느끼고 싶은 분께.</p>
        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-14">
          {[
            ["오래 앉아 있는 분", "일하는 틈틈이 의자에 앉아 발바닥을 가볍게 눌러보세요.", "scene-01-after-sitting.webp"],
            ["가볍게 홈트를 시작하는 분", "복잡한 동작 없이 양발을 번갈아 디디며 시작해보세요.", "scene-02-warmup.webp"],
            ["따로 운동 시간을 내기 어려운 분", "TV를 보거나 쉬는 시간에 잠깐씩 사용해보세요.", "scene-03-rest.webp"],
            ["운동 뒤 발바닥 자극을 찾는 분", "맨발이나 양말을 신은 채 가볍게 눌러 발바닥을 자극해보세요.", "scene-04-after-workout.webp"],
          ].map(([title, body, src]) => (
            <article key={title}><div className="relative aspect-[4/5] overflow-hidden rounded-[24px]"><Image src={asset(src)} alt={title} fill sizes="370px" className="object-cover" /></div><h3 className="mt-7 text-[29px] font-bold tracking-[-0.03em]">{title}</h3><p className="mt-3 text-[22px] leading-[1.5] text-[#6e6e73]">{body}</p></article>
          ))}
        </div>
      </section>
      {/* [신규] 4. 신뢰 배지 — 구매 직전 불안 제거 */}
      <section className="break-keep bg-white px-12 pb-32 pt-32">
        <div className="grid grid-cols-2 gap-x-10 gap-y-12">
          {[
            {
              Icon: RefreshCw,
              title: "초기 불량 무상 교환",
              body: "초기 불량은 수령 후 7일 이내 확인해 주시면 배송비 없이 교환해 드립니다.",
            },
            {
              Icon: Check,
              title: "공기 주입 펌프 포함",
              body: "별도로 준비할 필요 없이, 동봉된 펌프로 공기를 채울 수 있습니다.",
            },
            {
              Icon: Wrench,
              title: "판매자 직접 A/S",
              body: "제품 문의와 A/S는 판매자가 직접 확인하고 안내해 드립니다.",
            },
            {
              Icon: PackageCheck,
              title: "당일 발송",
              body: "평일 오후 4시 이전 주문은 당일 발송됩니다. (일부 품목 제외)",
            },
          ].map(({ Icon, title, body }) => (
            <div key={title} className="flex gap-6">
              <Icon
                className="mt-1 h-12 w-12 shrink-0 text-[#9262b2]"
                strokeWidth={2}
                aria-hidden
              />
              <div>
                <p
                  className="text-[28px] font-semibold tracking-[-0.015em]"
                  style={{ color: "#1d1d1f" }}
                >
                  {title}
                </p>
                <p
                  className="mt-3 text-[22px] font-medium leading-[1.5] tracking-[-0.01em]"
                  style={{ color: "#6e6e73" }}
                >
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ReviewSection
        reviews={[
          "운동을 시작하기 귀찮은 날에도 발만 올리면 돼서 부담 없이 사용하고 있습니다. 발바닥 자극도 적당하고 잠깐씩 하기 좋아요.",
          "집에서 오래 앉아 있다가 틈틈이 사용하려고 샀는데 생각보다 만족스럽습니다. 공기 발판이 말랑해서 발에 무리가 덜하고 개운해요.",
          "크기가 크지 않아 보관하기 편하고 디자인도 깔끔합니다. TV 보면서 몇 분씩 사용하기 좋고 꾸준히 움직이는 습관을 만드는 데 도움이 됩니다.",
          "발바닥 돌기가 너무 아프지 않을까 걱정했는데 자극이 시원한 정도라 괜찮습니다. 신발을 벗고 바로 사용할 수 있어 편해요.",
          "운동복을 따로 입지 않아도 집에서 가볍게 시작할 수 있는 점이 마음에 듭니다. 책상 아래 두고 생각날 때마다 사용하고 있어요.",
        ]}
      />

      {/* 클로징 — 히어로와 다른 실제 사용 장면 */}
      <section className="break-keep relative min-h-[1050px] overflow-hidden bg-[#eee6dc]">
        <Image src={asset("closing-standing-sunlit-v1.webp")} alt="따뜻한 거실에서 지압 스테퍼 위에 서서 양발을 번갈아 디디는 모습" fill sizes="860px" className="object-cover object-[52%_center]" />
        <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.95) 12%, rgba(255,255,255,0.55) 29%, rgba(255,255,255,0) 52%)" }} />
        <div className="relative flex min-h-[1050px] flex-col items-center px-10 pb-20 pt-24 text-center">
          <h2 className="text-[58px] font-semibold leading-[1.14] tracking-[-0.03em]"><Accent>Nova Pressure Stepper</Accent></h2>
          <p className="mt-5 text-[31px] font-medium leading-[1.6] text-[#695574]">두 발부터, 가볍게.</p>
        </div>
      </section>
      {/* 질문에 답해드립니다 */}
      <section className="break-keep bg-white px-10 pb-36 pt-40">
        <h2
          className="text-center text-[58px] font-bold leading-tight tracking-[-0.025em]"
          style={{
            color: "#1d1d1f",
            fontFamily:
              '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          질문에 답해드립니다.
        </h2>

        <ul className="mt-24">
          {[
            {
              q: "어떻게 사용하는 제품인가요?",
              a: "공기를 채운 발판 위에 양발을 올리고 번갈아 디디는 지압 스테퍼입니다. 앉아서 발바닥을 가볍게 누르거나, 서서 체중을 옮기며 사용할 수 있습니다.",
            },
            {
              q: "운동을 잘하지 못해도 사용할 수 있나요?",
              a: "네. 양발에 체중을 번갈아 옮기는 간단한 방식입니다. 처음에는 의자에 앉아 가볍게 눌러보고, 서서 사용할 때는 균형을 잡고 천천히 시작해 주세요.",
            },
            {
              q: "지압 돌기가 많이 아프지 않나요? 맨발로만 써야 하나요?",
              a: "양말을 신고 사용할 수 있습니다. 맨발에서는 자극이 더 또렷하게 느껴지므로, 처음에는 양말을 신고 짧게 사용해보세요. 아프게 느껴질 정도로 세게 누르지 마세요.",
            },
            {
              q: "밤이나 아파트에서도 사용할 수 있나요?",
              a: "바닥 재질과 디디는 동작에 따라 소리와 진동이 생길 수 있습니다. 늦은 시간에는 세게 밟거나 뛰지 말고 천천히 사용해 주세요.",
            },
            {
              q: "공기를 채워서 써야 하나요?",
              a: "네. 동봉된 펌프로 공기를 조금씩 채운 뒤, 주입구를 닫고 사용해 주세요. 너무 팽팽하게 넣지 말고, 사용 전 공기가 새거나 제품에 손상이 없는지 확인해 주세요.",
            },
            {
              q: "앉아서도 사용할 수 있나요?",
              a: "네. 안정된 의자에 앉아 양발을 올리고 가볍게 누르면 됩니다. 서서 사용할 때보다 체중을 적게 실어 발바닥을 자극할 수 있습니다.",
            },
            {
              q: "미끄러지지는 않나요?",
              a: "바닥면에 발판의 밀림을 줄이는 미끄럼 방지 패턴이 있습니다. 평평하고 마른 바닥에서 사용하고, 사용 전 발판과 바닥의 물기를 닦아 주세요.",
            },
            {
              q: "집에서 보관하기 부담스럽지 않나요?",
              a: "크기는 39 × 33 × 5cm, 무게는 약 1.2kg입니다. 가운데 손잡이로 옮기고, 거실 한쪽이나 책상 옆에 세워 보관할 수 있습니다.",
            },
          ].map(({ q, a }) => (
            <li
              key={q}
              className="border-t border-[#d2d2d7] py-7 last:border-b"
            >
              <div className="flex items-start justify-between gap-6">
                <p
                  className="text-[28px] font-semibold leading-[1.35] tracking-[-0.015em]"
                  style={{
                    color: "#1d1d1f",
                    fontFamily:
                      '"SF Pro KR", "SF Pro Text", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
                  }}
                >
                  {q}
                </p>
              </div>
              <p
                className="mt-4 text-[22px] font-medium leading-[1.5] tracking-[-0.01em]"
                style={{
                  color: "#6e6e73",
                  fontFamily:
                    '"SF Pro KR", "SF Pro Text", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
                }}
              >
                {a}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* 구성품 */}
      <section className="break-keep bg-white px-10 pb-36 pt-32">
        <h2
          className="text-center text-[58px] font-bold leading-tight tracking-[-0.025em]"
          style={{
            color: "#1d1d1f",
            fontFamily:
              '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          구성품
        </h2>

        <ul className="mt-24">
          {[
            {
              label: "에어 지압 스테퍼 1개 · 공기 주입 펌프 1개",
              src: "/assets/sync-2026-10-29/nova/pressure-stepper/components.webp",
            },
          ].map(({ label, src }) => (
            <li key={label} className="mx-auto w-full max-w-[780px] text-center">
              {/* 구성품 이미지는 원본 세로 비율을 유지하고 가로형 카드 프레임을 사용하지 않는다. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt="에어 지압 스테퍼 본체와 공기 주입 펌프"
                className="mx-auto block h-auto w-full rounded-[28px]"
              />
              <p
                className="mt-6 text-[32px] font-semibold tracking-[-0.01em]"
                style={{ color: "#1d1d1f" }}
              >
                {label}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* 제품 정보 */}
      <section className="break-keep bg-white px-10 pb-36 pt-32">
        <h2
          className="text-center text-[58px] font-bold leading-tight tracking-[-0.025em]"
          style={{
            color: "#1d1d1f",
            fontFamily:
              '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          제품 정보
        </h2>

        <dl className="mx-auto mt-24 max-w-[720px]">
          {[
            ["품명 및 모델명", "NOVA 에어 지압 스테퍼"],
            ["재질", "PVC"],
            ["색상", "퍼플"],
            ["크기", "39 × 33 × 5cm"],
            ["중량", "약 1.2kg"],
            ["구조", "에어 발판 · 입체 돌기 · 미끄럼 방지 바닥 패턴"],
            ["제조자(수입자)", "보이드 투 노바"],
            ["제조국", "중국"],
            ["품질보증기준", "관련 법령 및 소비자분쟁해결기준에 따름"],
            ["A/S 책임자와 전화번호", "010-6393-0907"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex gap-8 border-b border-[#d2d2d7] py-6 first:border-t"
            >
              <dt
                className="w-[200px] shrink-0 text-[22px] font-semibold tracking-[-0.01em]"
                style={{ color: "#1d1d1f" }}
              >
                {label}
              </dt>
              <dd
                className="flex-1 text-[22px] font-medium leading-snug tracking-[-0.01em]"
                style={{ color: "#6e6e73" }}
              >
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 기타 안내 */}
      <section className="break-keep bg-white px-10 pb-36 pt-32">
        <h2
          className="text-center text-[58px] font-bold leading-tight tracking-[-0.025em]"
          style={{
            color: "#1d1d1f",
            fontFamily:
              '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          기타 안내
        </h2>

        <div className="mx-auto mt-24 max-w-[720px] space-y-12">
          {[
            {
              title: "취급 시 주의사항",
              bullets: [
                "반드시 평평하고 안정된 바닥에서 사용해 주세요.",
                "처음 사용할 때는 짧은 시간부터 시작해, 본인에게 편안한 강도로 사용해 주세요.",
                "사용 전 공기 주입 상태와 제품의 이상 유무를 확인해 주세요.",
                "과도한 공기 주입은 피하고, 날카로운 물건과의 접촉을 피해 주세요.",
                "물기가 있거나 미끄러운 바닥에서는 사용하지 마세요.",
                "균형을 잡기 어렵다면 혼자 서서 사용하지 말고, 보호자의 도움을 받아 주세요.",
              ],
            },
            {
              title: "세척 방법",
              body: "사용 후에는 부드러운 마른 천으로 가볍게 닦아 주세요. 강한 화학 세제나 날카로운 도구를 사용한 세척은 피해 주세요.",
            },
            {
              title: "보관 방법",
              body: "직사광선과 강한 열을 피해 보관해 주세요. 장기간 사용하지 않을 때는 제품 상태를 확인한 뒤, 날카로운 물건이 닿지 않는 곳에 보관해 주세요.",
            },
            {
              title: "색상 안내",
              body: "화면 밝기와 조명에 따라 실제 제품의 색상이 사진과 다르게 보일 수 있습니다.",
            },
            {
              title: "A/S 안내",
              body: "초기 불량은 수령 후 7일 이내 구매하신 스토어 고객센터로 접수해 주세요. 확인 후 교환을 안내해 드립니다.",
            },
            {
              title: "배송 안내",
              bullets: [
                "배송기간 — 평균 2~5일 소요됩니다. 출고지와 반품지가 다를 수 있으니 반품 전 안내를 확인해 주세요.",
                "발송 마감 — 평일 오후 4시 이전 주문은 당일 발송됩니다. 이후 주문은 다음 영업일부터 발송됩니다. (일부 품목 제외)",
                "추가 배송비 — 제주도·도서산간 지역은 배송비가 추가됩니다. 금액은 배송 지역에 따라 다릅니다.",
              ],
            },
          ].map((block) => (
            <div key={block.title}>
              <h3
                className="text-[28px] font-semibold tracking-[-0.015em]"
                style={{ color: "#1d1d1f" }}
              >
                {block.title}
              </h3>
              {"body" in block && block.body ? (
                <p
                  className="mt-4 text-[22px] font-medium leading-snug tracking-[-0.01em]"
                  style={{ color: "#6e6e73" }}
                >
                  {block.body}
                </p>
              ) : null}
              {"bullets" in block && block.bullets ? (
                <ul
                  className="mt-4 space-y-2 text-[22px] font-medium leading-snug tracking-[-0.01em]"
                  style={{ color: "#6e6e73" }}
                >
                  {block.bullets.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="shrink-0">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}

          <div>
            <h3
              className="text-[28px] font-semibold tracking-[-0.015em]"
              style={{ color: "#1d1d1f" }}
            >
              교환·반품 안내
            </h3>
            <p
              className="mt-4 text-[22px] font-medium leading-snug tracking-[-0.01em]"
              style={{ color: "#6e6e73" }}
            >
              교환·반품은 구매하신 스토어에서 신청해 주세요.
            </p>

            {(
              [
                {
                  subtitle: "교환/반품 가능",
                  items: [
                    "상품 수령 후 7일 내 구매한 몰에서 교환/반품 신청 시 가능",
                    "구매자의 단순 변심은 상품 수령 후 7일 이내 (구매자 반품배송비 부담)",
                    "상품 초기 불량에 대한 교환/반품은 전액 무료, 그 외 왕복택배비 발생 (왕복 택배비는 상품별로 다를 수 있음)",
                    "교환·반품은 판매자 안내에 따라 진행해 주세요. 별도 안내가 없는 경우 택배사 방문 수거 후 상품 회수를 확인하여 처리합니다.",
                  ],
                },
                {
                  subtitle: "교환/반품 불가",
                  items: [
                    "교환/반품요청 기간이 지난 경우 (구매확정 후)",
                    "구매자 책임 사유로 상품 등이 멸실 또는 훼손된 경우",
                    "구매자 책임 사유로 포장 훼손 또는 상품 가치가 현저히 상실·감소된 경우",
                    "교환/반품 신청 후 다시 보낸 제품 중 구성품이 누락된 경우",
                  ],
                },
              ] as const
            ).map(({ subtitle, items }) => (
              <div key={subtitle} className="mt-8">
                <p
                  className="text-[22px] font-semibold tracking-[-0.01em]"
                  style={{ color: "#1d1d1f" }}
                >
                  {subtitle}
                </p>
                <ul
                  className="mt-3 space-y-2 text-[22px] font-medium leading-snug tracking-[-0.01em]"
                  style={{ color: "#6e6e73" }}
                >
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
              <p
                className="text-[22px] font-semibold tracking-[-0.01em]"
                style={{ color: "#1d1d1f" }}
              >
                변경·취소
              </p>
              <p
                className="mt-3 text-[22px] font-medium leading-snug tracking-[-0.01em]"
                style={{ color: "#6e6e73" }}
              >
                취소나 변경은 실제 출고가 되지 않았을 경우에만 가능합니다.
                상품 출고 후 취소/변경 시 왕복택배비는 구매자 부담입니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </BrandFrame>
  );
}

function Accent({ children }: { children: ReactNode }) {
  return <span className="bg-clip-text text-transparent" style={{ backgroundImage: gradient }}>{children}</span>;
}

function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-center text-[60px] font-bold leading-[1.16] tracking-[-0.03em] text-[#1d1d1f]">{children}</h2>;
}

function PhotoSlot({ label, aspect = "3 / 2", imageSrc }: { label: string; aspect?: string; imageSrc: string }) {
  return <div className="relative mt-16 w-full overflow-hidden rounded-[28px] bg-[#f8f7f5]" style={{ aspectRatio: aspect }}><Image src={imageSrc} alt={label} fill sizes="764px" className="object-cover" /></div>;
}

function FeatureBlock({ title, children, imageSrc, imageAlt, aspect = "3 / 4" }: { title: ReactNode; children: ReactNode; imageSrc: string; imageAlt: string; aspect?: string }) {
  return <div>
    <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-[3px] border-[#9262b2]" aria-hidden><Check className="h-9 w-9 text-[#9262b2]" strokeWidth={3.5} /></div>
    <h2 className="mt-10 text-[63px] font-bold leading-[1.15] tracking-[-0.025em] text-[#1d1d1f]">{title}</h2>
    <PhotoSlot imageSrc={imageSrc} label={imageAlt} aspect={aspect} />
    <p className="mt-10 text-[30px] font-semibold leading-[1.725] tracking-[-0.01em] text-[#86868b]">{children}</p>
  </div>;
}
