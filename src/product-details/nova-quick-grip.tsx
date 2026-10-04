import { BrandFrame } from "@/components/product-detail/brand-frame";
import { ReviewSection } from "@/components/product-detail/review-section";
import type { ReactNode } from "react";
import {
  Check,
  ChevronDown,
  PackageCheck,
  RefreshCw,
  ShieldCheck,
  Truck,
} from "lucide-react";

/**
 * Nova · 퀵그립 리프팅 스트랩
 * 아이콘: Lucide (https://lucide.dev) — 앞으로 전부 여기 사용
 */
export default function NovaQuickGripPage() {
  return (
    <BrandFrame brand="nova">
      {/* 1. 제품 히어로 */}
      <section className="relative min-h-[1440px] overflow-hidden bg-[#111111]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/nova/quick-grip/hero-lat-pulldown-v2.webp"
          alt="Nova 퀴그립을 착용하고 랫풀다운을 하는 운동인"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.22) 28%, rgba(0,0,0,0.08) 52%, rgba(0,0,0,0.82) 100%)",
          }}
          aria-hidden
        />
        <div className="relative z-10 flex min-h-[1440px] flex-col px-4 pb-24 pt-28">
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
                  "linear-gradient(105deg, #ffffff 0%, #d9e9f5 48%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                width: "fit-content",
                filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.9))",
              }}
            >
              Nova Quick Grip
            </p>
            <h1
              className="mx-auto mt-6 whitespace-nowrap text-[85px] font-bold leading-[1.15] tracking-[-0.025em]"
              style={{
                color: "#ffffff",
                textShadow:
                  "0 3px 28px rgba(0,0,0,1), 0 1px 6px rgba(0,0,0,0.95)",
                fontFamily:
                  '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
                width: "fit-content",
              }}
            >
              더 깊은 자극을 위해.
            </h1>
          </div>
          <p
            className="mx-auto mt-auto max-w-[780px] px-4 text-center text-[28px] font-medium leading-[1.5] tracking-[-0.01em]"
            style={{
              color: "#ffffff",
              fontFamily:
                '"SF Pro KR", "SF Pro Text", Pretendard, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            당기는 힘은 충분한데,
            <br />
            그립이 먼저 풀리는 순간이 있습니다.
            <br />
            손과 전완에 몰리던 부담은 덜고,
            <br />
            등의 수축과 움직임에 더 집중하도록.
            <br />
            <span className="whitespace-nowrap">
              빠르게 감고 단단하게 잡아,
            </span>
            <br />
            마지막 반복까지 이어가세요.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden" style={{ aspectRatio: "3 / 4" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/nova/quick-grip/product-overview.webp"
          alt="Nova 퀵그립 좌우 한 쌍"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <h2
          className="absolute inset-x-0 top-24 z-10 text-center text-[70px] font-bold leading-none tracking-[-0.03em]"
        >
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(105deg, #111111 0%, #55555a 50%, #111111 100%)" }}
          >
            Nova Quick Grip.
          </span>
        </h2>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[16%]"
          style={{ background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, #ffffff 100%)" }}
          aria-hidden
        />
      </section>

      <section className="bg-white px-10 pb-32 pt-40">
        <div className="mx-auto max-w-[780px]">
          <h2
            className="text-center text-[58px] font-bold leading-tight tracking-[-0.025em]"
            style={{
              color: "#1d1d1f",
              fontFamily:
                '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
            }}
          >
            운동의 불편함을 줄입니다.
          </h2>

          <div className="mt-20 overflow-hidden rounded-[28px] border border-[#d2d2d7]">
            <table className="w-full table-fixed border-collapse text-center">
              <caption className="sr-only">
                맨손, 줄 스트랩, Nova 퀵그립 기능 비교
              </caption>
              <thead>
                <tr className="bg-[#f5f5f7]">
                  <th
                    aria-label="비교 항목"
                    className="w-[31%] px-4 py-7"
                  />
                  <th className="border-l border-[#d2d2d7] px-3 py-7 text-[24px] font-bold text-[#1d1d1f]">
                    맨손
                  </th>
                  <th className="border-l border-[#d2d2d7] px-3 py-7 text-[24px] font-bold leading-tight text-[#1d1d1f]">
                    줄 스트랩
                  </th>
                  <th className="border-l border-[#d2d2d7] bg-[#eef7ff] px-3 py-7 text-[24px] font-bold leading-tight text-[#0071e3]">
                    Nova 퀵그립
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["악력 부담 감소", "X", "O", "O"],
                  ["손바닥 보호", "X", "X", "O"],
                  ["한 바퀴 착용", "–", "X", "O"],
                  ["빠른 착용", "–", "X", "O"],
                  ["벨크로 고정", "–", "X", "O"],
                ].map(([label, bare, strap, quick]) => (
                  <tr key={label} className="border-t border-[#d2d2d7]">
                    <th className="bg-white px-4 py-7 text-center text-[24px] font-semibold leading-snug text-[#1d1d1f]">
                      {label}
                    </th>
                    {[bare, strap, quick].map((value, index) => (
                      <td
                        key={`${label}-${index}`}
                        className={`border-l border-[#d2d2d7] px-3 py-7 text-[34px] font-bold ${
                          index === 2 ? "bg-[#eef7ff]" : "bg-white"
                        } ${
                          value === "O"
                            ? "text-[#0071e3]"
                            : value === "X"
                              ? "text-[#86868b]"
                              : "text-[#b8b8bd]"
                        }`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ReviewSection
        source="네XX 구매 고객"
        reviews={[
          "등 운동할 때 손에 힘이 먼저 빠져서 늘 아쉬웠는데, 퀵그립을 쓰고 나서는 마지막 세트까지 훨씬 안정적으로 당길 수 있었어요. 손보다 등에 집중되는 느낌이라 만족합니다.",
          "줄 스트랩은 양손에 감는 과정이 번거로웠는데 이건 한 바퀴만 감으면 돼서 정말 편합니다. 세트 사이에 빠르게 착용할 수 있고 운동 흐름도 끊기지 않아요.",
          "무게를 올리면 손바닥이 아프고 손목도 쓸렸는데 쿠션이 받쳐줘서 부담이 확실히 덜합니다. 오래 착용해도 불편하지 않고 그립도 안정적으로 잡혀요.",
          "벨크로가 단단하게 고정되고 바를 감싼 부분도 쉽게 풀리지 않습니다. 랫풀다운이나 로우처럼 당기는 운동에서 악력 걱정이 줄어 운동에 더 집중하게 돼요.",
          "처음 써봤는데 착용법이 어렵지 않고 한 손으로도 금방 감을 수 있었습니다. 손바닥 보호와 그립 보조를 함께 해줘서 데드리프트할 때도 유용하게 쓰고 있어요.",
        ]}
      />

      {/* 기능 + 스토리 */}
      <section className="bg-white px-12 pb-36 pt-[8.8rem]">
        <div className="flex flex-col gap-48">
          <FeatureBlock
            title={
              <>
                한계가 오기 전에,
                <br />
                손을 놓아버렸다면.
              </>
            }
            imageSrc="/assets/nova/quick-grip/grip-fatigue.webp"
            imageAlt="악력과 전완이 지쳐 던벨을 놓은 운동인"
            bodyAfterImage
          >
            목표 부위에는 아직 힘이 남아 있어도, 손가락과 전완이 먼저 지치면 세트는 예상보다 일찍 끝나게 됩니다. 더 이어갈 수 있었던 반복까지 놓치지 않도록, 손에 쏠리던 부담은 덜고 목표한 부위의 움직임과 자극에 더 오래 집중할 수 있게 도와줍니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                악력의 부담은 덜고,
                <br />
                더 깊게 집중할 수 있도록.
              </>
            }
            imageSrc="/assets/nova/quick-grip/grip-support.webp"
            imageAlt="헬스장에 놓인 Nova 퀵그립 한 쌍"
            bodyAfterImage
          >
            바벨이나 기구를 감싸 쥐는 힘을 보조해 손과 전완에 몰리는 부담을 줄여줍니다. 랫풀다운과 로우, 데드리프트처럼 당기는 운동에서 그립 걱정보다 자세와 수축에 집중해보세요. 한 번 더 이어갈 수 있는 안정감이 운동의 밀도를 바꿉니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                당길수록 더 밀착되는,
                <br />
                풀림을 줄인 전면 구조.
              </>
            }
            imageSrc="/assets/nova/quick-grip/front-structure.webp"
            imageAlt="바에 밀착되는 Nova 퀵그립의 전면 구조"
            bodyAfterImage
          >
            바벨이나 기구에 감기는 그립 부분이 운동 중 쉽게 풀리지 않도록 앞쪽 형태를 설계했습니다. 바를 당기는 방향으로 힘이 실릴수록 그립이 바에 밀착되어, 반복 동작 중에도 안정적으로 잡는 감각을 이어갈 수 있습니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                무게가 올라가도,
                <br />
                손목은 편안하게.
              </>
            }
            imageSrc="/assets/nova/quick-grip/wrist-cushion.webp"
            imageAlt="손목 안쪽 쿠션을 강조한 Nova 퀵그립"
            aspect="3 / 4"
            bodyAfterImage
          >
            중량이 실릴수록 손목과 스트랩 사이에는 압박과 마찰이 반복됩니다. 손목에 직접 닿는 안쪽 면에 부드러운 폼 소재를 더해 피부 쓸림과 눌림을 줄였습니다. 무게가 올라가고 세트가 길어져도 손목의 부담을 덜어 편안한 착용감을 유지해줍니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                단단한 벨크로와 봉제,
                <br />
                흔들림 없는 고정력.
              </>
            }
            imageSrc="/assets/nova/quick-grip/velcro-stitching.webp"
            imageAlt="Nova 퀵그립의 벨크로와 봉제 디테일"
            imageSrc2="/assets/nova/quick-grip/stitching-detail.webp"
            imageAlt2="Nova 퀵그립의 상하단 봉제 라인"
            bodyAfterImage
          >
            착용과 해제를 반복하는 퀵그립은 고정력이 기본입니다. 손목을 단단하게 잡아주는 벨크로와 힘을 받는 부분의 견고한 봉제로 운동 중 흔들림과 풀림을 줄였습니다. 자주 쓰는 장비일수록 기본부터 오래 버텨야 하니까요.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                손바닥의 부담은 줄이고,
                <br />
                물집 걱정도 덜도록.
              </>
            }
            imageSrc="/assets/nova/quick-grip/palm-protection.webp"
            imageAlt="손바닥을 넓게 덮는 Nova 퀵그립"
            bodyAfterImage
          >
            손바닥을 넓게 덮는 패브릭 그립 면이 바와 손바닥 사이를 감싸 직접 닿는 마찰을 줄이고, 물집과 따가움으로 운동의 흐름이 끊기는 부담을 덜어줍니다. 굳은살은 운동의 흔적이지만, 물집 때문에 다음 운동까지 불편할 필요는 없으니까요😄
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                한 손으로 한 바퀴,
                <br />
                바로 시작할 수 있게.
              </>
            }
            imageSrc="/assets/nova/quick-grip/one-wrap-step-1.webp"
            imageAlt="Nova 퀵그립을 바에 감기 전 동작"
            imageSrc2="/assets/nova/quick-grip/one-wrap-step-2.webp"
            imageAlt2="Nova 퀵그립을 한 바퀴 감아 쥐 동작"
            aspect="1 / 1"
            bodyAfterImage
          >
            손목을 고정하고, 그립을 바에 밀착한 뒤, 손으로 한 바퀴 감아 쥐면 준비가 끝납니다. 반대쪽 손도 같은 방식으로 빠르게 착용할 수 있어 세트 사이의 흐름을 끊지 않습니다. 감는 데 힘을 쓰기보다 운동에 힘을 남겨두세요.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                사이즈 고민 없이,
                <br />
                하나로 편안하게.
              </>
            }
            imageSrc="/assets/nova/quick-grip/size-guide.webp"
            imageAlt="Nova 퀵그립 상세 치수"
            bodyAfterImage
          >
            손목 둘레에 맞춰 벨크로의 고정 위치를 조절할 수 있는 원 사이즈 제품입니다. 별도의 사이즈를 고를 필요 없이, 손목에 맞게 조여 안정적으로 착용할 수 있습니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                하나에 85g,
                <br />
                가볍게 휴대하도록.
              </>
            }
            imageSrc="/assets/nova/quick-grip/weight-85g.webp"
            imageAlt="전자저울에서 85g으로 측정된 Nova 퀵그립"
            bodyAfterImage
          >
            한쪽 기준 약 85g으로, 손목을 안정적으로 잡아주는 구조를 갖추고도 운동 가방에 부담 없이 챙길 수 있는 무게입니다. 헬스장은 물론 여행이나 외출 중에도 간편하게 휴대할 수 있습니다.
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
          당기는 운동이라면,
          <br />
          빠르게 감고 시작하세요.
        </h2>
        <p
          className="mx-auto mt-8 whitespace-nowrap text-center text-[26px] font-medium leading-[1.6] tracking-[-0.01em]"
          style={{ color: "#6e6e73" }}
        >
          손목에 착용해두고 필요한 순간 한 바퀴. 운동의 흐름을 끊지 않습니다.
        </p>

        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-14">
          {[
            {
              scene: "랫풀다운",
              line: "전완이 먼저 지치기 쉬운 수직 당기기에서 등에 집중하도록 도와줍니다.",
              imageSrc: "/assets/nova/quick-grip/exercise-lat-pulldown.webp",
              imageAlt: "랫풀다운에서 퀵그립을 사용하는 모습",
              photo: "",
            },
            {
              scene: "바벨·덤벨 로우",
              line: "그립에 쏠리는 신경을 덜고 당기는 궤적과 수축에 집중해보세요.",
              imageSrc: "/assets/nova/quick-grip/exercise-row.webp",
              imageAlt: "로우 동작에서 퀵그립을 사용하는 모습",
              photo: "",
            },
            {
              scene: "데드리프트",
              line: "중량이 올라갈수록 커지는 악력 부담을 보조해 안정적인 반복을 돕습니다.",
              imageSrc: "/assets/nova/quick-grip/exercise-deadlift.webp",
              imageAlt: "데드리프트에서 퀵그립을 사용하는 모습",
              photo: "",
            },
            {
              scene: "풀업",
              line: "체중을 당기는 동안 악력 부담을 덜어 등의 움직임과 수축에 집중하도록 돕습니다.",
              imageSrc: "/assets/nova/quick-grip/exercise-pull-up.webp",
              imageAlt: "풀업에서 퀵그립을 사용하는 모습",
              photo: "",
            },
          ].map(({ scene, line, imageSrc, imageAlt, photo }) => (
            <div key={scene}>
              <div
                className="flex w-full items-center justify-center overflow-hidden rounded-[24px] bg-[#f5f5f7]"
                style={{ aspectRatio: "4 / 5" }}
              >
                {imageSrc.startsWith("/") ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover" />
                ) : imageSrc ? (
                  <div aria-label="사진 자리" className="h-full min-h-[320px] w-full rounded-[28px] bg-[#f5f5f7]" />
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
            Nova Quick Grip.
          </span>
        </h2>

        <div className="mt-20 grid grid-cols-2 gap-6">
          {[
            { value: "악력", unit: "보조", label: "목표 부위에 더 깊게 집중" },
            { value: "한", unit: "바퀴", label: "한 손으로 빠르고 간편한 착용" },
            { value: "전면", unit: "구조", label: "당길수록 밀착되어 풀림 감소" },
            { value: "이중", unit: "보호", label: "손바닥 마찰과 손목 압박 완화" },
          ].map(({ value, unit, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center rounded-[28px] bg-white px-6 py-16 text-center"
            >
              <p
                className="w-full text-center text-[70px] font-bold leading-none tracking-[-0.03em]"
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
                <span className="ml-[0.08em] text-[70px] font-bold">
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
              title: "좌우 한 쌍 구성",
              body: "양손에 착용할 수 있는 퀵그립 한 쌍으로 구성됩니다.",
            },
            {
              Icon: ShieldCheck,
              title: "손바닥·손목 보호",
              body: "넓은 그립 면과 손목 쿠션이 반복 운동의 마찰과 압박 부담을 줄여줍니다.",
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
        className="relative min-h-[1440px] overflow-hidden bg-white px-12 pb-40 pt-24"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/nova/quick-grip/closing-product.webp"
          alt="헬스장에 놓인 Nova 퀵그립 한 쌍"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[48%]"
          style={{ background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.94) 28%, rgba(255,255,255,0) 100%)" }}
          aria-hidden
        />
        <div className="relative z-10 flex min-h-[1160px] flex-col">
          <h2
            className="text-center text-[64px] font-bold leading-[1.18] tracking-[-0.028em]"
            style={{
              color: "#1d1d1f",
              fontFamily:
                '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
            }}
          >
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #022640, #5786AB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Nova
            </span>
            와 함께,
            <br />
            더 깊은 자극의 세계로.
          </h2>

          <div className="mt-auto text-center">
            <p
              className="text-[52px] font-semibold leading-tight tracking-[-0.02em] text-white"
              style={{ textShadow: "0 2px 18px rgba(0,0,0,0.75)" }}
            >
              Nova Quick Grip
            </p>
            <p
              className="mt-3 text-[28px] font-medium leading-snug tracking-[-0.01em] text-white"
              style={{ textShadow: "0 2px 14px rgba(0,0,0,0.8)" }}
            >
              빠르게 감고, 마지막 반복까지.
            </p>
          </div>
        </div>
      </section>

      {/* 질문에 답해드립니다 */}
      <section className="bg-white px-10 pb-36 pt-40">
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
              q: "일반 줄 스트랩과 무엇이 다른가요?",
              a: "긴 줄을 바에 여러 번 감는 방식 대신, 넓은 그립 부분을 바에 대고 한 바퀴 감아 쥐는 방식입니다. 양손 착용에 걸리는 시간을 줄여 세트 사이에 빠르게 사용할 수 있습니다.",
            },
            {
              q: "정말 한 손으로 착용할 수 있나요?",
              a: "먼저 양쪽 퀵그립을 손목에 고정해 주세요. 이후 한쪽 그립을 바에 밀착하고 손으로 한 바퀴 감아 쥐면 됩니다. 반대쪽도 같은 방식으로 착용할 수 있습니다.",
            },
            {
              q: "어떤 운동에 사용하면 좋나요?",
              a: "랫풀다운, 바벨·덤벨 로우, 데드리프트, 풀업처럼 바나 손잡이를 당기는 운동에 활용하기 좋습니다. 기구의 손잡이 형태와 운동 방식에 맞춰 안정적으로 감기는지 확인한 뒤 사용해 주세요.",
            },
            {
              q: "악력이 전혀 필요 없어지는 건가요?",
              a: "퀵그립은 바를 쥐는 힘을 보조하는 운동 장비이며 악력을 완전히 대신하지는 않습니다. 운동 목적에 따라 맨손 세트와 함께 사용하고, 목표 부위보다 손이 먼저 지칠 때 보조적으로 활용해 주세요.",
            },
            {
              q: "손바닥 보호에도 도움이 되나요?",
              a: "넓은 그립 면이 바와 손바닥 사이를 감싸 직접적인 눌림과 마찰 부담을 줄여줍니다. 다만 착용 상태와 운동 강도에 따라 느껴지는 정도는 달라질 수 있습니다.",
            },
            {
              q: "손목 부분은 어떻게 보호되나요?",
              a: "손목에 직접 닿는 안쪽 면에 부드러운 폼 소재를 적용해, 중량이 실릴 때 발생하는 압박과 쓸림 부담을 줄였습니다.",
            },
            {
              q: "그립은 어떻게 고정되나요?",
              a: "손목은 단단한 벨크로로 고정하고, 바를 당기는 방향으로 힘이 실릴수록 그립이 더욱 밀착되도록 전면 구조를 설계했습니다.",
            },
            {
              q: "사이즈는 어떻게 선택하나요?",
              a: "손목 둘레에 맞춰 벨크로의 고정 위치를 조절하는 원 사이즈 제품입니다. 별도의 사이즈 선택 없이 손목에 맞게 조여 착용할 수 있습니다.",
            },
            {
              q: "좌우가 구분되어 있나요?",
              a: "양손에 각각 착용하는 한 쌍 구성입니다. 손바닥 쪽 그립이 바를 자연스럽게 감싸는 방향으로 놓였는지 확인한 뒤 착용해 주세요.",
            },
            {
              q: "사용 후에는 어떻게 관리하나요?",
              a: "운동 후 땀과 먼지를 부드러운 천으로 닦고 통풍이 잘되는 그늘에서 충분히 건조해 주세요. 벨크로를 정리한 상태로 보관하면 다른 옷이나 장비에 걸리는 것을 줄일 수 있습니다.",
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

      {/* 구성품 */}
      <section className="bg-white px-10 pb-36 pt-32">
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
          label=""
          imageSrc="/assets/nova/quick-grip/components.webp"
          imageAlt="왼손용과 오른손용 퀵그립 한 쌍"
          aspect="3 / 4"
        />
        <p
          className="mt-7 text-center text-[28px] font-semibold tracking-[-0.01em]"
          style={{ color: "#1d1d1f" }}
        >
          왼손용 x1 · 오른손용 x1
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
            ["품명 및 모델명", "Nova Quick Grip"],
            ["색상", "블랙"],
            ["크기", "세로 17.5cm × 가로 8.5cm"],
            ["중량", "85g (1개 기준)"],
            ["사용 부위", "양손 손목 및 손바닥"],
            ["사용 용도", "웨이트 트레이닝 시 그립 보조"],
            ["구성품", "퀵그립 왼손용 1개, 오른손용 1개"],
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
      <section className="bg-white px-10 pb-36 pt-32">
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
                "웨이트 트레이닝 시 그립을 보조하는 용도로만 사용해 주세요.",
                "처음 사용할 때는 가벼운 중량으로 착용 방향과 감는 방법을 익혀주세요.",
                "운동 전 벨크로와 봉제 부위에 손상이나 풀림이 없는지 확인해 주세요.",
                "그립이 바를 충분히 감싸고 벨크로가 단단히 고정된 뒤 운동을 시작해 주세요.",
                "제품은 부상 방지 장비가 아니며, 무리한 중량 사용은 피해 주세요.",
                "통증이나 저림, 과도한 압박이 느껴지면 즉시 사용을 중단해 주세요.",
              ],
            },
            {
              title: "관리 방법",
              body: "사용 후 땀과 먼지를 부드러운 천으로 닦고 통풍이 잘되는 그늘에서 충분히 건조해 주세요. 벨크로는 서로 맞붙인 상태로 보관하면 다른 장비에 걸리는 것을 줄일 수 있습니다.",
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
      {imageSrc?.startsWith("/") ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover" />
      ) : imageSrc ? (
        <div aria-label="사진 자리" className="h-full min-h-[320px] w-full rounded-[28px] bg-[#f5f5f7]" />
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
            {src.startsWith("/") ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={src} alt={alt} className="h-full w-full object-cover" />
            ) : (
              <div aria-label="사진 자리" className="h-full min-h-[320px] w-full rounded-[28px] bg-[#f5f5f7]" />
            )}
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
      {imageSrc?.startsWith("/") ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full min-h-[320px] w-full rounded-[28px] object-cover"
          style={{ transform: imageScale ? `scale(${imageScale})` : undefined }}
        />
      ) : imageSrc ? (
        <div aria-label="사진 자리" className="h-full min-h-[320px] w-full rounded-[28px] bg-[#f5f5f7]" />
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
