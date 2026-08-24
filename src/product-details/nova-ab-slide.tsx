import { BrandFrame } from "@/components/product-detail/brand-frame";
import type { ReactNode } from "react";
import {
  Check,
  ChevronDown,
  PackageCheck,
  RefreshCw,
  ShieldCheck,
  Wrench,
} from "lucide-react";

/**
 * NOVA · AB 슬라이드 (노트북 거치대 고정형 v2에서 분리한 작업본)
 * 원본: void-laptop-fixed-v2.tsx — 이후 이 파일만 수정한다.
 * 아이콘: Lucide (https://lucide.dev) — 앞으로 전부 여기 사용
 */
export default function NovaAbSlidePage() {
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
              Nova AB Slide
            </p>
            <h2
              className="mx-auto mt-2 whitespace-nowrap text-[95px] font-bold leading-[1.15] tracking-[-0.025em]"
              style={{
                color: "#1d1d1f",
                fontFamily:
                  '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
                width: "fit-content",
              }}
            >
              코어에 집중하다.
            </h2>
          </div>
          <div className="mt-24 flex justify-center overflow-visible pb-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/nova/ab-slide/ab-hero-2.png"
              alt="블랙 Nova 저소음 AB 슬라이드"
              className="h-auto w-full max-w-[1280px] origin-center object-contain"
              style={{
                maxHeight: 1100,
                transform: "scale(0.826)",
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
            운동은 해야 할 것 같은데,
            <br />
            시작하기까지가 어려운 날이 있습니다.
            <br />
            그럴 땐 바닥에 무릎을 대고,
            <br />
            두 손으로 바퀴를 잡아보세요.
            <br />
            앞으로 천천히. 그리고 다시, 내 힘으로.
            <br />
            Nova AB Slide는 복잡한 루틴 대신
            <br />
            한 번의 롤아웃으로 코어에 집중하게 합니다.
          </p>
        </div>
      </section>

      {/* 기능 + 스토리 */}
      <section className="bg-white px-12 pb-36 pt-[8.8rem]">
        <div className="flex flex-col gap-48">
          <FeatureBlock
            title={
              <>
                500g의 가벼움.
                <br />
                최대 100kg의 튼튼함.
              </>
            }
            imageSrc="/assets/nova/ab-slide/weight-500g.png"
            imageAlt="디지털 저울에서 약 500g으로 측정된 AB 슬라이드"
            bodyAfterImage
          >
            약 500g의 가벼운 무게와 컴팩트한 크기로 어디에나 간편하게 보관하고,
            생각날 때 바로 꺼내 운동할 수 있습니다. 최대 100kg의 하중을 견디는 견고한
            설계로, 집에서도 부담 없이 코어 운동을 시작해 보세요.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                늦은 시간에도,
                <br />
                조용하게 굴러가도록.
              </>
            }
            imageSrc="/assets/nova/ab-slide/quiet-night-workout.png"
            imageAlt="늦은 시간 거실에서 AB 슬라이드로 운동하는 모습"
            bodyAfterImage
          >
            휠이 바닥을 따라 부드럽게 굴러가며 운동 중 발생하는 소음을 줄였습니다.
            집에서도 주변의 소음 부담을 덜고, 내가 정한 시간에 롤아웃 동작에
            집중할 수 있습니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                좌우 흔들림을 줄이는,
                <br />
                폭 9cm · 지름 16.5cm 휠.
              </>
            }
            imageSrcs={[
              {
                src: "/assets/nova/ab-slide/wheel-width-9cm.png",
                alt: "폭 9cm 치수가 표시된 AB 슬라이드 휠",
              },
              {
                src: "/assets/nova/ab-slide/wheel-diameter-16-5cm.png",
                alt: "지름 16.5cm 치수가 표시된 AB 슬라이드 휠",
              },
            ]}
            noBackground
            bodyAfterImage
          >
            폭 9cm의 넓은 단일 휠이 좌우 흔들림을 줄여주고, 지름 16.5cm의 큰
            휠은 밀고 당길 때 부드럽게 움직입니다. 좌우 움직임에 대한 부담을
            덜고, 보다 안정적인 자세로 복부 운동에 집중할 수 있습니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                두 손의 힘을 고르게,
                <br />
                30cm 와이드 그립.
              </>
            }
            imageSrc="/assets/nova/ab-slide/grip-width-30cm.png"
            imageAlt="전체 폭 30cm 치수가 표시된 AB 슬라이드 와이드 그립"
            bodyAfterImage
          >
            손잡이 끝에서 끝까지 약 30cm. 양손으로 제품을 잡고 힘을 고르게
            전달하며, 몸을 앞으로 밀고 돌아오는 기본 동작에 집중할 수 있는
            너비입니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                겉은 부드럽게.
                <br />
                안쪽은 단단하게.
              </>
            }
            imageSrcs={[
              {
                src: "/assets/nova/ab-slide/foam-grip-closeup.png",
                alt: "부드러운 폼 그립이 보이는 AB 슬라이드 손잡이 클로즈업",
              },
              {
                src: "/assets/nova/ab-slide/steel-pipe-grip.png",
                alt: "폼 그립 안쪽의 강관 구조가 보이는 AB 슬라이드 손잡이",
              },
            ]}
            noBackground
            bodyAfterImage
          >
            손이 닿는 바깥쪽은 부드러운 폼 그립으로 감싸고, 안쪽에는 강관을
            적용했습니다. 편안하게 잡으면서도 두 손의 힘을 안정적으로 전달해,
            밀고 돌아오는 동안 제품을 단단히 잡는 데 도움을 줍니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                밀어낸 거리만큼,
                <br />
                내 힘으로 돌아오도록.
              </>
            }
            imageSrc="/assets/nova/ab-slide/manual-return-sequence.png"
            imageAlt="AB 슬라이드를 밀어낸 뒤 시작 자세로 돌아오는 연속 동작"
            aspect="2250 / 5000"
            bodyAfterImage
          >
            자동으로 되돌아오는 리바운드 기능이 없는 기본형 AB 슬라이드입니다.
            앞으로 밀어낸 뒤 시작 자세로 돌아오는 구간까지, 내 힘으로 움직임을
            직접 제어하는 롤아웃에 집중할 수 있습니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                운동이 끝나면,
                <br />
                작은 공간에 가볍게.
              </>
            }
            imageSrcs={[
              {
                src: "/assets/nova/ab-slide/storage-shelf-closeup.png",
                alt: "홈짐 선반에 AB 슬라이드를 보관한 모습의 클로즈업",
              },
              {
                src: "/assets/nova/ab-slide/storage-shelf-wide.png",
                alt: "거실 선반의 작은 공간에 AB 슬라이드를 보관한 모습",
              },
            ]}
            noBackground
            bodyAfterImage
          >
            300 × 165 × 90 mm의 컴팩트한 크기로 운동이 끝난 뒤에도 많은 자리를
            차지하지 않습니다. 약 500g의 가벼운 무게로 필요한 순간 꺼내고,
            사용한 뒤에는 선반이나 운동 공간 한쪽에 간편하게 정리할 수 있습니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                내 수준에 맞게.
                <br />
                거리부터 조절하세요.
              </>
            }
            imageSrc="/assets/nova/ab-slide/rollout-distance-stages.png"
            imageAlt="짧은 거리부터 긴 거리까지 단계별로 AB 슬라이드를 밀어내는 모습"
            bodyAfterImage
          >
            밀어내는 거리에 따라 운동 강도가 달라집니다. 처음에는 전용 무릎 매트
            위에서 짧게 시작하고, 익숙해지면 자세가 무너지지 않는 범위에서 거리를
            늘려보세요. 멀리 가는 것보다 돌아올 때까지 움직임을 제어하는 것이
            중요합니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                순서대로 끼우면,
                <br />
                조립은 간단하게.
              </>
            }
            imageSrcs={[
              {
                src: "/assets/nova/ab-slide/assembly-step-1.png",
                alt: "AB 슬라이드 휠과 강관, 폼 손잡이를 나란히 놓은 조립 준비 단계",
                stepNumber: 1,
              },
              {
                src: "/assets/nova/ab-slide/assembly-step-2.png",
                alt: "강관과 폼 손잡이를 휠 한쪽에 끼운 조립 중간 단계",
                stepNumber: 2,
              },
              {
                src: "/assets/nova/ab-slide/assembly-step-3.png",
                alt: "반대쪽 폼 손잡이를 끼워 AB 슬라이드 조립을 마무리하는 단계",
                stepNumber: 3,
              },
            ]}
            noBackground
            bodyAfterImage
          >
            복잡한 공구나 어려운 과정 없이, 구성품을 순서에 맞게 끼워주면 바로
            사용할 수 있습니다. 처음 받아보는 순간부터 운동을 시작하기까지,
            조립 때문에 망설일 필요가 없습니다.
          </FeatureBlock>
        </div>
      </section>

      {/* 자극 부위 — AB 슬라이드 동작에 쓰이는 근육 */}
      <section className="bg-[#f5f5f7] px-12 pb-36 pt-32">
        <h2
          className="text-center text-[58px] font-bold leading-tight tracking-[-0.025em]"
          style={{
            backgroundImage: "linear-gradient(90deg, #8F2F1B, #E4572A)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            fontFamily:
              '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          AB 슬라이드에 쓰이는 근육.
        </h2>
        <p
          className="mx-auto mt-8 max-w-[680px] text-center text-[26px] font-medium leading-[1.6] tracking-[-0.01em]"
          style={{ color: "#6e6e73" }}
        >
          <span className="whitespace-nowrap">무릎 롤아웃에 쓰이는 주요 근육을</span>
          <br />
          <span className="whitespace-nowrap">상대적 참여도 1–5로 나눠 표시했습니다.</span>
        </p>

        <div className="mx-auto mt-20 max-w-[760px]">
          <div className="grid grid-cols-2 gap-5">
            {[
              {
                label: "앞면",
                src: "/assets/nova/ab-slide/muscle-map/man-front.svg",
                alt: "복부와 어깨 앞쪽을 강조한 남성 인체 근육도",
              },
              {
                label: "뒷면",
                src: "/assets/nova/ab-slide/muscle-map/man-back.svg",
                alt: "등과 어깨 주변을 강조한 남성 인체 후면 근육도",
              },
            ].map(({ label, src, alt }) => (
              <figure
                key={label}
                className="rounded-[28px] border border-[#f0ddd5] bg-white px-7 pb-7 pt-8 text-center"
              >
                <object
                  data={src}
                  type="image/svg+xml"
                  aria-label={alt}
                  className="mx-auto h-[480px] w-full"
                />
                <figcaption
                  className="mt-3 text-[20px] font-semibold tracking-[-0.01em]"
                  style={{ color: "#6e6e73" }}
                >
                  {label}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-2 gap-x-12">
            {[
              {
                level: 5,
                title: "매우 많이 사용",
                body: "복직근 · 대흉근",
                color: "#C93D1B",
              },
              {
                level: 4,
                title: "많이 사용",
                body: "외복사근 · 전면 삼각근",
                color: "#E96843",
              },
              {
                level: 3,
                title: "함께 쓰이는 부위",
                body: "광배근 · 상완삼두근",
                color: "#EE967B",
              },
              {
                level: 2,
                title: "자세를 지탱하며 쓰이는 부위",
                body: "승모근 · 둔근 · 전완",
                color: "#F4C8B8",
              },
              {
                level: 1,
                title: "동작에 따라 달라지는 부위",
                body: "대퇴사두근 · 햄스트링 · 종아리",
                color: "#F8E7E0",
              },
            ].map(({ level, title, body, color }) => (
              <div key={level} className="border-b border-[#d8e5ee] py-7 first:border-t [&:nth-child(2)]:border-t">
                <div className="flex items-center gap-4">
                  <span
                    className="h-4 w-4 rounded-full"
                    style={{ backgroundColor: color }}
                    aria-hidden
                  />
                  <p
                    className="text-[26px] font-bold tracking-[-0.02em]"
                    style={{ color: "#1d1d1f" }}
                  >
                    {level}. {title}
                  </p>
                </div>
                <p
                  className="mt-3 pl-8 text-[19px] font-medium leading-[1.55] tracking-[-0.01em]"
                  style={{ color: "#6e6e73" }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p
          className="mx-auto mt-12 max-w-[760px] text-center text-[17px] font-medium leading-[1.5] tracking-[-0.01em]"
          style={{ color: "#86868b" }}
        >
          수치는 무릎 롤아웃의 상대적 참여도를 뜻하며, 가동 범위·자세·개인별
          운동 경험에 따라 달라질 수 있습니다.
        </p>
      </section>

      {/* [신규] 이런 분께 — 고정형이 정답인 사람을 좁혀 주는 자리 */}
      <section className="bg-white px-12 pb-36 pt-32">
        <h2
          className="text-center text-[58px] font-bold leading-tight tracking-[-0.025em]"
          style={{
            color: "#1d1d1f",
            fontFamily:
              '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          이런 분께 잘 맞습니다.
        </h2>
        <p
          className="mx-auto mt-8 max-w-[640px] text-center text-[26px] font-medium leading-[1.6] tracking-[-0.01em]"
          style={{ color: "#6e6e73" }}
        >
          한 번의 동작을 내 힘으로 완성하고 싶은 분들입니다.
        </p>

        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-14">
          {[
            {
              scene: "집에서 코어 루틴을 만드는 분",
              imageSrc: "/assets/nova/ab-slide/home-core-routine.png",
              imageAlt: "거실 운동 매트 위에서 코어 운동을 하는 모습",
              imagePosition: "center top",
              photo: "사진 — 거실 매트 위에서 무릎을 대고 AB 슬라이드를 사용하는 홈트 장면",
            },
            {
              scene: "반동 없는 기본형을 찾는 분",
              imageSrc: "/assets/nova/ab-slide/rollout-distance-stages.png",
              imageAlt: "AB 슬라이드를 직접 밀어내며 롤아웃 동작을 이어가는 모습",
              imagePosition: "center",
              photo: "사진 — AB 슬라이드를 앞으로 밀어낸 뒤, 내 힘으로 돌아오는 측면 동작 컷",
            },
            {
              scene: "짧게, 밀도 있게 운동하는 분",
              imageSrc: "/assets/nova/ab-slide/intense-short-workout.png",
              imageAlt: "짧고 강도 높은 운동을 마친 뒤 호흡을 고르는 모습",
              imagePosition: "center top",
              photo: "사진 — 집 안에서 짧은 롤아웃 한 세트를 마무리하는 운동 장면",
            },
            {
              scene: "자세부터 차근히 배우는 분",
              imageSrc: "/assets/nova/ab-slide/beginner-form-practice.png",
              imageAlt: "무릎을 대고 AB 슬라이드의 시작 자세를 연습하는 모습",
              imagePosition: "center",
              photo: "사진 — 동봉 무릎 매트 위에서 짧은 가동 범위를 연습하는 정면 컷",
            },
          ].map(({ scene, imageSrc, imageAlt, imagePosition, photo }) => (
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
                    style={{ objectPosition: imagePosition }}
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
                className="mt-7 text-center text-[30px] font-bold tracking-[-0.02em]"
                style={{
                  color: "#1d1d1f",
                  fontFamily:
                    '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
                }}
              >
                {scene}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* [신규] 3. 스펙 하이라이트 — 숫자를 문단에서 꺼내 크게 */}
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
            Nova AB Slide.
          </span>
        </h2>

        <div className="mt-20 grid grid-cols-2 gap-6">
          {[
            { value: "500", unit: "g", label: "제품 무게" },
            { value: "30", unit: "cm", label: "제품 가로" },
            { value: "100", unit: "kg", label: "최대 하중" },
            { value: "Black", unit: "", label: "블랙 단일 컬러" },
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

      {/* [신규] 4. 신뢰 배지 — 구매 직전 불안 제거 */}
      <section className="bg-white px-12 pb-32 pt-32">
        <div className="grid grid-cols-2 gap-x-10 gap-y-12">
          {[
            {
              Icon: RefreshCw,
              title: "초기 불량 무상 교환",
              body: "초기 불량은 수령 후 7일 이내 확인해 주시면 배송비 없이 교환해 드립니다.",
            },
            {
              Icon: ShieldCheck,
              title: "전용 무릎 매트 포함",
              body: "무릎을 대고 짧은 롤아웃부터 바로 시작할 수 있도록 전용 매트를 함께 구성했습니다.",
            },
            {
              Icon: Wrench,
              title: "판매자 직접 A/S",
              body: "문의는 대행사를 거치지 않고 담당자가 직접 확인하고 답변드립니다.",
            },
            {
              Icon: PackageCheck,
              title: "당일 발송",
              body: "평일 오후 4시 이전 주문은 당일 발송됩니다. (일부 품목 제외)",
            },
          ].map(({ Icon, title, body }) => (
            <div key={title} className="flex gap-6">
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

      {/* [신규] 5. 클로징 — 설득 파트의 마지막, 정보 파트로 넘어가기 전 */}
      <section
        className="px-12 pb-40 pt-36"
        style={{
          background: "linear-gradient(180deg, #ffffff, #e3f1f8 60%, #d8ebf5)",
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
          짧게 밀고, 깊게 집중하다.
        </h2>
        <p
          className="mx-auto mt-10 max-w-[680px] text-center text-[28px] font-medium leading-[1.6] tracking-[-0.01em]"
          style={{
            color: "#4a5a66",
            fontFamily:
              '"SF Pro KR", "SF Pro Text", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          내 몸이 허락하는 오늘의 거리에서, 오늘의 한 번을.
          <br />
          멀리 갈 필요는 없습니다.
        </p>

        <PhotoSlot
          label="사진 — 블랙 AB 슬라이드와 무릎 매트를 놓은 정돈된 홈트 공간 와이드 컷"
          src="/assets/nova/ab-slide/closing-core-workout.png"
          alt="AB 슬라이드를 앞으로 밀며 코어 운동에 집중하는 모습"
          aspect="1672 / 941"
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
          Nova AB Slide
        </p>
        <p
          className="mt-3 text-center text-[28px] font-normal leading-snug tracking-[-0.01em]"
          style={{ color: "#6e7e8a" }}
        >
          코어에 집중하다.
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
              q: "자동 리바운드 기능이 있나요?",
              a: "아닙니다. 자동으로 되돌아오는 리바운드 기능이 없는 기본형 AB 슬라이드입니다. 밀어낸 뒤 돌아오는 구간까지 내 힘으로 직접 제어하는 방식입니다.",
            },
            {
              q: "처음 사용하는 사람도 가능한가요?",
              a: "네. 동봉된 무릎 매트를 사용해 무릎을 대고, 짧은 가동 범위부터 시작해 주세요. 횟수보다 자세가 무너지기 전에 돌아오는 것이 중요합니다.",
            },
            {
              q: "무릎 매트가 함께 들어 있나요?",
              a: "네. AB 슬라이드 본체와 함께 무릎을 받쳐주는 전용 매트가 포함됩니다. 별도로 준비할 것 없이 무릎 자세부터 바로 시작할 수 있습니다.",
            },
            {
              q: "최대 하중은 얼마인가요?",
              a: "최대 하중은 100kg입니다. 제품 사용 전 각 부위가 단단히 결합되어 있는지 확인하고, 평평한 바닥에서 사용해 주세요.",
            },
            {
              q: "단일 휠은 사용하기 어렵지 않나요?",
              a: "넓은 단일 휠 구조로 앞뒤 롤아웃 동작에 집중할 수 있습니다. 처음에는 무릎을 대고 짧게 밀어내며 움직임에 익숙해지는 것을 권합니다.",
            },
            {
              q: "어떤 바닥에서 사용하면 좋나요?",
              a: "평평하고 건조한 실내 바닥에서 사용해 주세요. 주변에 걸리거나 미끄러질 물건이 없는지 확인하고, 충분한 공간을 확보한 뒤 사용하는 것이 좋습니다.",
            },
            {
              q: "어느 부위 운동에 활용할 수 있나요?",
              a: "복부와 가슴을 중심으로, 동작 중 어깨·팔·등이 함께 사용됩니다. 느껴지는 부위와 강도는 사용 거리, 자세, 개인의 운동 경험에 따라 달라질 수 있습니다.",
            },
            {
              q: "사용 후 어떻게 관리하나요?",
              a: "마른 천으로 손잡이와 휠 표면을 가볍게 닦아 보관해 주세요. 물기나 이물질이 묻은 상태에서는 사용을 피하고, 직사광선과 습기가 많은 곳은 피해 주세요.",
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

        <div className="mx-auto mt-16 aspect-[3/4] w-full overflow-hidden rounded-[28px] bg-[#f5f5f7]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/nova/ab-slide/size.png"
            alt="AB 슬라이드 가로 30cm, 휠 폭 9cm, 휠 지름 16.5cm 사이즈 안내"
            className="h-full w-full object-cover"
          />
        </div>
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

        <div className="mx-auto mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px] bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/nova/ab-slide/components.png"
            alt="AB 슬라이드 본체와 전용 무릎 매트 구성품"
            className="h-full w-full object-cover"
          />
        </div>
        <p
          className="mt-8 text-center text-[32px] font-semibold tracking-[-0.01em]"
          style={{ color: "#1d1d1f" }}
        >
          AB 슬라이드 본체 ×1 · 전용 무릎 매트 ×1
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
            ["품명 및 모델명", "Nova AB Slide"],
            ["재질", "강관 + 폼 그립"],
            ["색상", "블랙"],
            ["크기", "300 × 165 × 90 mm"],
            ["중량", "약 500g"],
            ["최대 하중", "100kg"],
            ["구성", "AB 슬라이드 본체 ×1 + 전용 무릎 매트 ×1"],
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
                "최대 하중(100kg)을 초과하여 사용하지 마세요.",
                "평평하고 건조한 실내 바닥에서 사용해 주세요.",
                "사용 전 손잡이와 휠이 단단히 결합되어 있는지 확인해 주세요.",
                "처음에는 무릎 매트를 사용해 짧은 가동 범위부터 시작해 주세요.",
                "운동 중 통증이나 불편함이 느껴지면 즉시 사용을 멈춰 주세요.",
              ],
            },
            {
              title: "세척 방법",
              body: "마른 천으로 가볍게 닦아 사용해 주세요. 물이나 화학 세제 사용은 삼가 주세요.",
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
  src,
  alt = "",
}: {
  label: string;
  aspect?: string;
  src?: string;
  alt?: string;
}) {
  return (
    <div
      className="mt-16 flex w-full items-center justify-center overflow-hidden rounded-[28px]"
      style={{ aspectRatio: aspect, backgroundColor: "#f5f5f7" }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="h-full w-full object-cover" />
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
  imageSrcs,
  imageAlt = "",
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
  imageSrcs?: Array<{ src: string; alt: string; stepNumber?: number }>;
  imageAlt?: string;
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

  const image = !hideImage ? (
    <div
      className={`mt-24 w-full rounded-[28px] ${
        !imageSrc && !imageSrcs?.length && photoLabel
          ? "flex items-center justify-center"
          : ""
      }`}
      style={{
        paddingTop: framePy,
        paddingBottom: framePy,
        overflow: imageScale ? "visible" : "hidden",
        aspectRatio: imageSrcs?.length || framePy ? undefined : aspect,
        backgroundColor: noBackground ? undefined : "#f5f5f7",
      }}
    >
      {imageSrcs?.length ? (
        <div className="flex w-full flex-col gap-5">
          {imageSrcs.map(({ src, alt, stepNumber }) =>
            stepNumber ? (
              <div key={src} className="w-full">
                <div
                  className="mb-6 block min-w-[72px] text-[40px] font-semibold leading-[1.2] text-[#86868b]"
                  style={{
                    fontFamily:
                      '"SF Pro Display", "Helvetica Neue", Arial, sans-serif',
                    fontVariantNumeric: "tabular-nums",
                  }}
                  aria-label={`조립 단계 ${stepNumber}`}
                >
                  {String(stepNumber).padStart(2, "0")}
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={alt}
                  className="aspect-[3/4] h-auto w-full rounded-[28px] object-cover"
                />
              </div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                src={src}
                alt={alt}
                className="aspect-[3/4] h-auto w-full rounded-[28px] object-cover"
              />
            ),
          )}
        </div>
      ) : imageSrc ? (
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
