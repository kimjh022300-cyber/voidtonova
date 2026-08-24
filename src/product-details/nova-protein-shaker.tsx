import { BrandFrame } from "@/components/product-detail/brand-frame";
import type { ReactNode } from "react";
import {
  Check,
  ChevronDown,
  PackageCheck,
  RefreshCw,
  Truck,
  WashingMachine,
} from "lucide-react";

/**
 * NOVA · 프로틴 쉐이커
 * 아이콘: Lucide (https://lucide.dev) — 앞으로 전부 여기 사용
 */
export default function NovaProteinShakerPage() {
  return (
    <BrandFrame brand="nova">
      {/* 1. 제품 히어로 — Apple MacBook Air 스타일 */}
      <section
        className="relative overflow-x-hidden"
        style={{
          background:
            "linear-gradient(180deg, #d2d2d7 0%, #e8e8ed 50%, #f5f5f7 82%, #ffffff 100%)",
        }}
      >
        <div className="relative px-4 pb-[4.4rem] pt-28">
          <div
            className="px-8 text-center"
            style={{
              fontFamily:
                '"SF Pro KR", "SF Pro Display", "SF Pro Text", Pretendard, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            <p
              className="mx-auto text-[41px] font-semibold leading-[1.25] tracking-[0.007em]"
              style={{
                backgroundImage:
                  "linear-gradient(105deg, #1d1d1f 0%, #2a3d4a 45%, #3d5a6e 70%, #1d1d1f 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                width: "fit-content",
              }}
            >
              Nova Protein Shaker
            </p>
            <h2
              className="mx-auto mt-6 whitespace-nowrap text-[85px] font-bold leading-[1.15] tracking-[-0.025em]"
              style={{
                color: "#1d1d1f",
                fontFamily:
                  '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
                width: "fit-content",
              }}
            >
              매일 마시는 것, 제대로.
            </h2>
          </div>
          <div className="mt-24 flex justify-center overflow-visible pb-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/nova/protein-shaker/3e51ae39-7171-4b07-8531-2a8ebb5ba0a7-2.webp"
              alt="500ml 블랙 Nova 트라이탄 프로틴 쉐이커"
              className="h-auto w-full max-w-[1280px] origin-center object-contain"
              style={{
                maxHeight: 1100,
                transform: "scale(1.074)",
                filter: "drop-shadow(0 24px 48px rgba(29,29,31,0.18))",
              }}
            />
          </div>
          <p
            className="mx-auto mt-20 max-w-[780px] px-4 text-center text-[28px] font-normal leading-[1.5] tracking-[-0.01em]"
            style={{
              color: "#1d1d1f",
              fontFamily:
                '"SF Pro KR", "SF Pro Text", Pretendard, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            운동을 꾸준히 하는 일은 거창한 결심보다
            <br />
            작은 반복에서 시작됩니다.
            <br />
            물과 파우더를 담고, 흔들고, 마시는 일.
            <br />
            매일 손에 쥐는 물건이라 소재부터 무게,
            <br />
            <span className="whitespace-nowrap">
              손에 남는 인상까지 가볍게 고르지 않았습니다.
            </span>
            <br />
            이제 운동을 마무리하는 한 잔까지,
            <br />
            내 방식으로 챙겨볼까요?
          </p>
        </div>
      </section>

      {/* 기능 + 스토리 */}
      <section className="bg-white px-12 pb-36 pt-[8.8rem]">
        <div className="flex flex-col gap-48">
          {/* [신규] 문제 공감 */}
          <FeatureBlock
            title={
              <>
                운동은 챙기면서,
                <br />
                물통은 아무거나 쓰고 있었다면.
              </>
            }
            imageSrc="/assets/nova/protein-shaker/1.webp"
            imageAlt="운동 가방 속 일반 쉐이커"
            bodyAfterImage
          >
            단백질은 꼬박 챙기는데, 쉐이커는 늘 아무거나 집게 됩니다. 매일 마시는 것을 담는 물건인데 소재나 무게는 뒤로 밀려나기 쉽죠. 결국 오래 손이 가는 건, 처음부터 잘 고른 물건입니다.
          </FeatureBlock>

          <FeatureBlock
            title="트라이탄 소재로 고민 끝."
            imageSrc="/assets/nova/protein-shaker/tritan-water-drops.webp"
            imageAlt="물방울이 맺힌 블랙 트라이탄 프로틴 쉐이커"
            bodyAfterImage
          >
            물병은 생각보다 험하게 쓰입니다. 운동 가방 안에서 부딪히고, 매일 씻고, 다시 채워지죠. 그래서 튼튼한 트라이탄 소재로 만들었습니다. 가볍게 들고 다니면서도 반복해 사용하기 좋은 물병. 매일 쓰는 물건이라면, 소재부터 달라야 하니까요.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                BPA Free,
                <br />
                식기세척기·전자레인지까지.
              </>
            }
            imageSrc="/assets/nova/protein-shaker/dishwasher-safe.webp"
            imageAlt="식기세척기 안에 분리해 넣은 블랙 프로틴 쉐이커"
            imageSrc2="/assets/nova/protein-shaker/microwave-safe.webp"
            imageAlt2="전자레인지 안에 놓인 블랙 프로틴 쉐이커"
            aspect="4 / 3"
            bodyAfterImage
          >
            매일 입에 닿고, 매일 씻는 물병이니까. BPA Free 소재로 만들고, 세척까지 편하게 쓸 수 있게 했습니다. 식기세척기에 넣어도 되고, 필요할 때는 90°C 이하에서 전자레인지도 사용할 수 있습니다. 단, 전자레인지에는 믹싱 볼만 빼고 넣어주세요.
          </FeatureBlock>

          <FeatureBlock
            title="덩어리 생길 걱정은 그만."
            imageSrc="/assets/nova/protein-shaker/mixing-ball.webp"
            imageAlt="블랙 프로틴 쉐이커와 스테인리스 믹싱 볼"
            imageSrc2="/assets/nova/protein-shaker/mixed-shake.webp"
            imageAlt2="덩어리 없이 고르게 섞인 프로틴 음료가 담긴 블랙 쉐이커"
            bodyAfterImage
          >
            안쪽은 오목하게 이어져, 물과 파우더가 한곳에 남지 않고 자연스럽게 섞이도록 했습니다. 여기에 스테인리스 믹싱 볼이 움직이며, 흔드는 동안 더 고르게 풀어주죠. 물을 담고, 파우더를 넣고, 몇 번 흔들면 됩니다. 운동 끝난 뒤 한 잔까지, 괜히 오래 붙잡고 있을 필요는 없으니까요.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                오목한 내부 구조라,
                <br />
                씻는 일까지 간단하죠.
              </>
            }
            imageSrc="/assets/nova/protein-shaker/interior-top-view.webp"
            imageAlt="위에서 내려다본 블랙 프로틴 쉐이커의 오목한 내부 구조"
            imageSrc2="/assets/nova/protein-shaker/concave-interior.webp"
            imageAlt2="뚜껑을 분리해 오목한 바닥 구조가 보이는 블랙 프로틴 쉐이커 본체"
            bodyAfterImage
          >
            쉐이크는 마시는 순간보다, 마신 뒤가 더 귀찮을 때가 있습니다. 복잡한 모서리 대신 오목하게 이어진 내부 구조라, 남은 내용물을 비우고 헹구는 일도 한결 간단합니다. 잘 쓰는 물건은, 정리하는 순간까지 어렵지 않아야 하니까요.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                가방에 넣어도,
                <br />
                물이 새지 않도록.
              </>
            }
            imageSrc="/assets/nova/protein-shaker/leakproof-shake.webp"
            imageAlt="물을 담은 상태로 기울여도 새지 않는 블랙 프로틴 쉐이커"
            imageSrc2="/assets/nova/protein-shaker/gym-bag.webp"
            imageAlt2="운동복과 함께 운동 가방 안에 넣은 블랙 프로틴 쉐이커"
            aspect="4 / 3"
            bodyAfterImage
          >
            흔든 뒤 가방에 넣는 물건이라면, 닫는 구조도 확실해야 합니다. 뚜껑과 마시는 입구가 단단히 닫히는 밀폐 구조로, 내용물이 새어 가방 안을 번거롭게 만드는 일을 줄였습니다. 운동복과 수건 사이에 넣어도, 필요한 순간 편하게 꺼내세요.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                500ml
                <br />
                한 번 마시기에 딱.
              </>
            }
            imageSrc="/assets/nova/protein-shaker/capacity-detail.webp"
            imageAlt="100ml부터 500ml까지 표시된 블랙 프로틴 쉐이커 용량 눈금 클로즈업"
            imageSrc2="/assets/nova/protein-shaker/serving-500ml.webp"
            imageAlt2="500ml 눈금이 보이도록 음료를 담은 블랙 프로틴 쉐이커"
            bodyAfterImage
          >
            500ml. 한 번의 쉐이크를 넉넉하게 준비하면서도, 들고 다니기엔 과하지 않은 용량입니다. 필요한 만큼 담고, 마시고, 다음 루틴을 이어가면 됩니다. 한 번의 쉐이크에 알맞은 용량으로.
          </FeatureBlock>

          <FeatureBlock
            title="220g의 가벼운 무게."
            imageSrc="/assets/nova/protein-shaker/weight-220g.webp"
            imageAlt="전자저울에서 220g으로 측정된 블랙 프로틴 쉐이커"
            bodyAfterImage
          >
            약 220g. 손에 들었을 때도, 가방에서 꺼낼 때도 묵직함보다 가벼움이 먼저 느껴지는 무게입니다. 매일 챙길 물건이라면, 들고 나가는 순간부터 부담이 덜해야 하니까요.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                운동 가방에도, 책상 위에도.
                <br />
                깔끔한 블랙.
              </>
            }
            imageSrc="/assets/nova/protein-shaker/desk.webp"
            imageAlt="노트북과 식물 사이 책상 위에 놓인 블랙 프로틴 쉐이커"
            bodyAfterImage
          >
            블랙이라 더 자주 들게 됩니다. 운동 가방 안에 넣어도, 회사 책상 위에 올려둬도 튀지 않죠. 운동을 마친 뒤에도, 출근한 뒤에도 그냥 자연스럽게 손이 갑니다.
          </FeatureBlock>
        </div>
      </section>

      {/* 사용 장면 */}
      <section className="bg-white px-12 pb-36 pt-32">
        <h2
          className="text-center text-[58px] font-bold leading-tight tracking-[-0.025em]"
          style={{
            color: "#1d1d1f",
            fontFamily:
              '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          운동이 있는 날에도,
          <br />
          없는 날에도.
        </h2>
        <p
          className="mx-auto mt-8 max-w-[640px] text-center text-[26px] font-medium leading-[1.6] tracking-[-0.01em]"
          style={{ color: "#6e6e73" }}
        >
          필요한 순간 꺼내 쓰는 한 잔이, 루틴을 조금 더 오래 이어줍니다.
        </p>

        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-14">
          {[
            {
              scene: "운동 전",
              line: "물과 파우더를 담아 두면, 운동을 시작할 준비도 한결 간단해집니다.",
              imageSrc: "/assets/nova/protein-shaker/before-workout.webp",
              imageAlt: "운동 전 헬스장 가방 옆에 놓인 블랙 프로틴 쉐이커",
              photo: "사진 — 운동 전, 가방 옆에 놓인 쉐이커 컷",
            },
            {
              scene: "운동 직후",
              line: "숨이 가라앉기 전, 필요한 한 잔을 바로 챙길 수 있습니다.",
              imageSrc: "/assets/nova/protein-shaker/after-workout.webp",
              imageAlt: "운동 직후 블랙 프로틴 쉐이커로 음료를 마시는 남성",
              photo: "사진 — 운동 직후 쉐이커를 든 컷",
            },
            {
              scene: "출근길",
              line: "운동이 없는 날에도, 나를 챙기는 일은 계속되니까요.",
              imageSrc: "/assets/nova/protein-shaker/commute.webp",
              imageAlt: "출근길에 백팩을 메고 블랙 프로틴 쉐이커로 음료를 마시는 남성",
              photo: "사진 — 출근 가방과 블랙 쉐이커 컷",
            },
            {
              scene: "집에서",
              line: "홈트가 끝난 뒤에도, 물과 파우더를 담고 가볍게 흔들면 됩니다.",
              imageSrc: "/assets/nova/protein-shaker/at-home.webp",
              imageAlt: "집 주방 조리대 위에 놓인 블랙 프로틴 쉐이커",
              photo: "사진 — 집에서 쉐이크를 준비하는 컷",
            },
          ].map(({ scene, line, imageSrc, imageAlt, photo }) => (
            <div key={scene}>
              <div
                className="flex w-full items-center justify-center overflow-hidden rounded-[24px] bg-[#f5f5f7]"
                style={{ aspectRatio: "4 / 5" }}
              >
                {imageSrc ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span
                    className="px-6 text-center text-[19px] font-medium leading-[1.5]"
                    style={{ color: "#b8b8bd" }}
                  >
                    {photo}
                  </span>
                )}
              </div>
              <p
                className="mt-7 text-[30px] font-bold tracking-[-0.02em]"
                style={{
                  color: "#1d1d1f",
                  fontFamily:
                    '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
                }}
              >
                {scene}
              </p>
              <p
                className="mt-3 text-[22px] font-medium leading-[1.5] tracking-[-0.01em]"
                style={{ color: "#6e6e73" }}
              >
                {line}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 스펙 하이라이트 */}
      <section className="bg-[#f5f5f7] px-12 pb-36 pt-32">
        <h2
          className="text-center text-[58px] font-bold leading-tight tracking-[-0.025em]"
          style={{
            color: "#1d1d1f",
            fontFamily:
              '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          한눈에 보는
          <br />
          <span
            style={{
              backgroundImage: "linear-gradient(90deg, #022640, #5786AB)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Nova Protein Shaker.
          </span>
        </h2>

        <div className="mt-20 grid grid-cols-2 gap-6">
          {[
            { value: "500", unit: "ml", label: "한 번의 쉐이크를 담는 용량" },
            { value: "220", unit: "g", label: "가볍게 챙기는 무게" },
            { value: "BPA", unit: "Free", label: "매일 입에 닿는 물병의 기준" },
            { value: "Tritan", unit: "", label: "매일 쓰기 좋은 소재" },
          ].map(({ value, unit, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center rounded-[28px] bg-white px-6 py-16 text-center"
            >
              <p
                className="w-full text-center text-[84px] font-bold leading-none tracking-[-0.03em]"
                style={{
                  backgroundImage: "linear-gradient(90deg, #022640, #5786AB)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                  fontFamily:
                    '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
                }}
              >
                {value}
                <span className="ml-[0.08em] text-[38px] font-semibold">
                  {unit}
                </span>
              </p>
              <p
                className="mt-7 w-full text-center text-[26px] font-semibold tracking-[-0.015em]"
                style={{ color: "#1d1d1f" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 구매 전 한눈에 */}
      <section className="bg-white px-12 pb-32 pt-32">
        <div className="grid grid-cols-2 gap-x-10 gap-y-12">
          {[
            {
              Icon: RefreshCw,
              title: "7일 이내 무상 교환",
              body: "초기 불량은 수령 후 7일 이내 확인해 주시면 배송비 없이 교환해 드립니다.",
            },
            {
              Icon: PackageCheck,
              title: "믹싱 볼 포함",
              body: "물과 파우더가 섞이는 흐름을 돕는 스테인리스 믹싱 볼이 함께 들어 있습니다.",
            },
            {
              Icon: WashingMachine,
              title: "식기세척기·전자레인지",
              body: "식기세척기로 관리할 수 있고, 전자레인지에는 믹싱 볼을 빼고 넣어주세요.",
            },
            {
              Icon: Truck,
              title: "당일 발송",
              body: "평일 오후 4시 이전 주문은 당일 발송됩니다. (일부 품목 제외)",
            },
          ].map(({ Icon, title, body }) => (
            <div key={body ?? "dishwasher-microwave"} className="flex gap-6">
              <Icon
                className="mt-1 h-12 w-12 shrink-0 text-[#0071e3]"
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
                {body ? (
                  <p
                    className="mt-3 text-[22px] font-medium leading-[1.5] tracking-[-0.01em]"
                    style={{ color: "#6e6e73" }}
                  >
                    {body}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* [신규] 5. 클로징 — 설득 파트의 마지막, 정보 파트로 넘어가기 전 */}
      <section
        className="px-12 pb-40 pt-36"
        style={{
          background: "linear-gradient(180deg, #ffffff, #D4EAF6 60%, #cfe6f4)",
        }}
      >
        <h2
          className="text-center text-[64px] font-bold leading-[1.18] tracking-[-0.028em]"
          style={{
            color: "#1d1d1f",
            fontFamily:
              '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          운동을 끝내는 한 잔까지,
          <br />
          내 방식으로.
        </h2>
        <p
          className="mx-auto mt-10 max-w-[680px] text-center text-[28px] font-medium leading-[1.6] tracking-[-0.01em]"
          style={{
            color: "#4a5a66",
            fontFamily:
              '"SF Pro KR", "SF Pro Text", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          잘 챙기는 일은 생각보다 오래 갑니다. 물을 담고, 흔들고, 마시는 작은 반복이 오늘의 운동을 내일로 이어주니까요.
        </p>

        <PhotoSlot
          label="사진 — 운동을 마친 뒤 블랙 쉐이커를 든 완성 컷 (와이드)"
          imageSrc="/assets/nova/protein-shaker/closing.webp"
          imageAlt="흰 배경 위의 블랙 프로틴 쉐이커와 스테인리스 믹싱 볼"
          aspect="3 / 2"
        />

        <p
          className="mt-20 text-center text-[52px] font-semibold leading-tight tracking-[-0.02em]"
          style={{
            backgroundImage: "linear-gradient(90deg, #022640, #5786AB)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            fontFamily:
              '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          Nova Protein Shaker
        </p>
        <p
          className="mt-3 text-center text-[28px] font-normal leading-snug tracking-[-0.01em]"
          style={{ color: "#6e7e8a" }}
        >
          가볍게 챙기고, 오래 함께하세요.
        </p>
      </section>

      {/* 질문에 답해드립니다 */}
      <section className="bg-[#f5f5f7] px-10 pb-36 pt-40">
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
              q: "트라이탄이면, 그냥 플라스틱 물병이랑 뭐가 다른가요?",
              a: "트라이탄은 물병과 드링크웨어에 많이 쓰이는 단단한 소재입니다. 매일 들고 다니며 부딪히고 씻는 물병에 잘 어울리죠. 쉐이커는 결국 오래 쓰는 물건이라, 용량만큼 소재를 봤습니다.",
            },
            {
              q: "파우더가 잘 안 풀리는 제품도 있잖아요. 그래도 괜찮나요?",
              a: "파우더 종류와 물의 양에 따라 섞이는 정도는 달라질 수 있습니다. 다만 안쪽의 오목한 구조와 스테인리스 믹싱 볼이 흔드는 흐름을 도와, 한곳에 뭉치기보다 더 고르게 섞일 수 있게 했습니다. 물을 먼저 넣고 파우더를 넣은 뒤 흔들어 보세요.",
            },
            {
              q: "믹싱 볼은 매번 꺼내야 하나요?",
              a: "아닙니다. 쉐이커 안에 넣은 채로 사용하시면 됩니다. 물과 파우더를 넣고 흔들 때 안에서 움직이며 섞이는 것을 돕는 구성품입니다. 세척할 때만 함께 꺼내 헹궈주시면 됩니다.",
            },
            {
              q: "운동 가방에 넣어도 정말 괜찮나요?",
              a: "뚜껑과 마시는 입구를 끝까지 닫은 상태라면 가방에 넣어도 됩니다. 다만 어떤 물병이든 닫힘이 덜 된 상태에서는 샐 수 있으니, 넣기 전 한 번 더 잠겼는지 확인해 주세요.",
            },
            {
              q: "운동이 끝났는데 바로 못 씻으면 어떻게 하나요?",
              a: "가능하면 남은 내용물을 비우고 물로 한 번 헹궈 두는 게 좋습니다. 특히 프로틴을 오래 남겨두면 냄새가 남을 수 있으니까요. 집에 돌아와 세척하는 건 괜찮지만, 내용물은 비우고 가는 쪽이 훨씬 편합니다.",
            },
            {
              q: "매일 쓰면 냄새나 색이 배지 않나요?",
              a: "트라이탄은 반복 사용에 잘 어울리는 소재지만, 어떤 물병이든 사용 후 그대로 두면 냄새가 남을 수 있습니다. 마신 뒤 바로 비우고 헹구는 습관만 들이면 훨씬 산뜻하게 오래 쓸 수 있습니다.",
            },
            {
              q: "500ml가 저한테도 맞을까요?",
              a: "운동 전후 한 번의 쉐이크를 준비하는 분에게 잘 맞는 용량입니다. 너무 큰 물통은 가방에서 자리만 차지하고, 너무 작으면 한 번에 부족할 수 있죠. 매일 한 잔씩 챙기는 루틴에 맞춘 크기입니다.",
            },
            {
              q: "프로틴 말고 물만 넣어도 되나요?",
              a: "물론입니다. 운동할 때 물병으로 쓰다가, 필요할 때만 파우더와 믹싱 볼을 넣어 쉐이커로 쓰셔도 됩니다. 운동하는 날과 아닌 날을 따로 나눌 필요가 없습니다.",
            },
            {
              q: "뜨거운 물을 넣어도 되나요?",
              a: "90°C 이하의 음료를 담아 사용해 주세요. 뜨거운 음료를 담을 때는 화상에 주의해 뚜껑을 열고 천천히 다뤄주세요.",
            },
            {
              q: "식기세척기와 전자레인지 사용이 가능한가요?",
              a: "네, 가능합니다. 전자레인지에 사용할 때는 스테인리스 믹싱 볼을 반드시 빼고 사용해 주세요.",
            },
            {
              q: "BPA Free 제품인가요?",
              a: "네. BPA Free 트라이탄 소재로 제작했습니다.",
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
                <ChevronDown
                  className="mt-1.5 h-7 w-7 shrink-0 text-[#86868b]"
                  strokeWidth={2.5}
                  aria-hidden
                />
              </div>
              <p
                className="mt-4 pr-12 text-[22px] font-medium leading-[1.5] tracking-[-0.01em]"
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

      {/* 사이즈 */}
      <section className="bg-white px-10 pb-36 pt-32">
        <h2
          className="text-center text-[58px] font-bold leading-tight tracking-[-0.025em]"
          style={{
            color: "#1d1d1f",
            fontFamily:
              '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          사이즈
        </h2>

        <PhotoSlot
          label="사진 — 500ml 쉐이커 사이즈 안내 이미지"
          imageSrc="/assets/nova/protein-shaker/size.webp"
          imageAlt="높이 21cm, 너비 10cm인 프로틴 쉐이커와 높이 5cm인 믹싱 볼 사이즈 안내"
          aspect="3 / 4"
        />
      </section>

      {/* 구성품 */}
      <section className="bg-[#f5f5f7] px-10 pb-36 pt-32">
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

        <PhotoSlot
          label="사진 — 프로틴 쉐이커 본체와 스테인리스 믹싱 볼"
          imageSrc="/assets/nova/protein-shaker/mixing-ball.webp"
          imageAlt="블랙 프로틴 쉐이커 본체 1개와 스테인리스 믹싱 볼 1개"
          aspect="3 / 4"
        />
        <p
          className="mt-7 text-center text-[28px] font-semibold tracking-[-0.01em]"
          style={{ color: "#1d1d1f" }}
        >
          프로틴 쉐이커 본체 x1 · 스테인리스 믹싱 볼 x1
        </p>
      </section>

      {/* 제품 정보 */}
      <section className="bg-white px-10 pb-36 pt-32">
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
            ["품명 및 모델명", "Nova 프로틴 쉐이커"],
            ["재질", "트라이탄 · 스테인리스 믹싱 볼"],
            ["색상", "블랙"],
            ["크기", "10 × 21cm"],
            ["용량", "500ml"],
            ["중량", "약 220g"],
            ["BPA", "BPA Free"],
            ["내열 온도", "90°C 이하"],
            ["사용 가능", "식기세척기 · 전자레인지 (믹싱 볼 제외)"],
            ["구성품", "쉐이커 본체 1개, 스테인리스 믹싱 볼 1개"],
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
      <section className="bg-[#f5f5f7] px-10 pb-36 pt-32">
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
                "음료 용도 외의 사용은 피해 주세요.",
                "사용 전 제품과 구성품을 세척해 주세요.",
                "사용 후에는 내용물을 비우고 세척한 뒤 건조해 주세요.",
                "강한 충격이나 날카로운 물체와의 접촉은 피해 주세요.",
                "90°C를 초과하는 음료는 담지 마세요.",
                "전자레인지 사용 시 스테인리스 믹싱 볼은 반드시 분리해 주세요.",
              ],
            },
            {
              title: "세척 방법",
              body: "사용 후에는 내용물을 비우고 제품과 믹싱 볼을 세척해 주세요. 세척 후에는 충분히 건조한 뒤 보관해 주세요.",
            },
            {
              title: "색상 안내",
              body: "사용하시는 환경에 따라 실제 색상과 다소 차이가 있을 수 있습니다.",
            },
            {
              title: "A/S 안내",
              body: "제품 초기 불량은 수령 후 7일 이내 확인해 주시면 교환 도와드립니다. 문의는 스토어 고객센터를 통해 접수해 주세요.",
            },
            {
              title: "배송 안내",
              bullets: [
                "배송기간 — 평균 배송기간은 2~5일 (일부 품목은 출고지 및 반품지 주소가 다를 수 있음)",
                "발송 마감시간 — 평일 기준 당일 오후 4시 이전 주문건까지 당일 발송 (일부품목 제외). 오후 4시 이후 주문건은 +1일 이후 발송 (평일기준)",
                "제주도·도서산간 지역배송비 — 제주도/도서산간 지역의 경우 배송비가 추가됩니다. (해당 지역마다의 배송비 편차가 상이하여 평균 배송비를 부과하며 일부 지역은 배송비가 다를 수 있음)",
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
              교환 및 반품 접수는 구매하신 몰에서 신청해주세요.
            </p>

            {(
              [
                {
                  subtitle: "교환/반품 가능",
                  items: [
                    "상품 수령 후 7일 내 구매한 몰에서 교환/반품 신청 시 가능",
                    "구매자의 단순 변심은 상품 수령 후 7일 이내 (구매자 반품배송비 부담)",
                    "상품 초기 불량에 대한 교환/반품은 전액 무료, 그 외 왕복택배비 발생 (왕복 택배비는 상품별로 다를 수 있음)",
                    "교환/반품 신청 후 판매자로부터 연락이 없다면 택배사에서 방문하여 수거 후 판매자에게 회수 확인 후 교환/반품 진행 — 판매자에게 연락을 받았다면 판매자의 안내대로 진행",
                  ],
                },
                {
                  subtitle: "교환/반품 불가",
                  items: [
                    "교환/반품요청 기간이 지난 경우 (구매확정 후)",
                    "구매자 책임 사유로 상품 등이 멸실 또는 훼손된 경우",
                    "구매자 책임 사유로 포장 훼손 또는 상품 가치가 현저히 상실·감소된 경우",
                    "고객 요청에 의해 제작되는 맞춤 제작 상품의 경우",
                    "복제 가능한 상품 등의 포장을 훼손한 경우",
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

/** 사진이 들어갈 자리를 눈에 보이게 잡아두는 카드 */
function PhotoSlot({
  label,
  aspect = "3 / 2",
  imageSrc,
  imageAlt = "",
}: {
  label: string;
  aspect?: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <div
      className="mt-16 flex w-full items-center justify-center overflow-hidden rounded-[28px]"
      style={{ aspectRatio: aspect, backgroundColor: "#f5f5f7" }}
    >
      {imageSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover" />
      ) : (
        <span
          className="px-10 text-center text-[22px] font-medium"
          style={{ color: "#b8b8bd" }}
        >
          {label}
        </span>
      )}
    </div>
  );
}

function FeatureBlock({
  title,
  children,
  imageSrc,
  imageAlt = "",
  imageSrc2,
  imageAlt2 = "",
  aspect = "3 / 4",
  imageScale,
  framePy,
  noBackground = false,
  hideImage = false,
  bodyAfterImage = false,
  photoLabel,
}: {
  title: ReactNode;
  children?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  aspect?: string;
  imageScale?: number;
  framePy?: number;
  noBackground?: boolean;
  hideImage?: boolean;
  bodyAfterImage?: boolean;
  photoLabel?: string;
}) {
  const body =
    children != null && children !== "" ? (
      <p
        className="mt-10 text-[30px] font-semibold leading-[1.725] tracking-[-0.01em]"
        style={{
          color: "#86868b",
          fontFamily:
            '"SF Pro KR", "SF Pro Text", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
        }}
      >
        {children}
      </p>
    ) : null;

  const image = !hideImage && imageSrc && imageSrc2 ? (
    <div className="mt-24 flex w-full flex-col gap-6">
      {[{ src: imageSrc, alt: imageAlt }, { src: imageSrc2, alt: imageAlt2 }].map(
        ({ src, alt }) => (
          <div
            key={src}
            className="w-full overflow-hidden rounded-[28px] bg-[#f5f5f7]"
            style={{ aspectRatio: aspect }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} className="h-full w-full object-cover" />
          </div>
        ),
      )}
    </div>
  ) : !hideImage ? (
    <div
      className={`mt-24 w-full rounded-[28px] ${
        !imageSrc && photoLabel ? "flex items-center justify-center" : ""
      }`}
      style={{
        paddingTop: framePy,
        paddingBottom: framePy,
        overflow: imageScale ? "visible" : "hidden",
        aspectRatio: framePy ? undefined : aspect,
        backgroundColor: noBackground ? undefined : "#f5f5f7",
      }}
    >
      {imageSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt={imageAlt}
          className={
            framePy ? "mx-auto block w-full" : "h-full w-full object-cover"
          }
          style={imageScale ? { transform: `scale(${imageScale})` } : undefined}
        />
      ) : photoLabel ? (
        <span
          className="px-10 text-center text-[22px] font-medium"
          style={{ color: "#b8b8bd" }}
        >
          {photoLabel}
        </span>
      ) : null}
    </div>
  ) : null;

  return (
    <div>
      <div
        className="flex h-[72px] w-[72px] items-center justify-center rounded-full"
        style={{ border: "3px solid #0071e3" }}
        aria-hidden
      >
        <Check className="h-9 w-9 text-[#0071e3]" strokeWidth={3.5} />
      </div>

      <h3
        className="mt-10 text-[63px] font-bold leading-[1.15] tracking-[-0.025em]"
        style={{
          color: "#1d1d1f",
          fontFamily:
            '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
        }}
      >
        {title}
      </h3>

      {bodyAfterImage ? (
        <>
          {image}
          {body}
        </>
      ) : (
        <>
          {body}
          {image}
        </>
      )}
    </div>
  );
}
