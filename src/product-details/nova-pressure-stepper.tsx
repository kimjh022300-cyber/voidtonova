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
 * NOVA · 지압 스텝퍼 (노트북 거치대 고정형 v2에서 분리한 작업본)
 * 원본: void-laptop-fixed-v2.tsx — 이후 이 파일만 수정한다.
 * 아이콘: Lucide (https://lucide.dev) — 앞으로 전부 여기 사용
 */
export default function NovaPressureStepperPage() {
  return (
    <BrandFrame brand="nova">
      {/* 1. 제품 히어로 */}
      <section
        className="relative overflow-x-hidden"
        style={{
          background:
            "linear-gradient(180deg, #f1dbe7 0%, #f9f0f5 50%, #fdf9fb 82%, #ffffff 100%)",
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
                  "linear-gradient(105deg, #3c2957 0%, #76509b 48%, #a875bd 72%, #3c2957 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                width: "fit-content",
              }}
            >
              Nova Pressure Stepper
            </p>
            <h2
              className="mx-auto mt-2 whitespace-nowrap text-[85px] font-bold leading-[1.15] tracking-[-0.025em]"
              style={{
                color: "#1d1d1f",
                fontFamily:
                  '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
                width: "fit-content",
              }}
            >
              가벼운 움직임의 시작.
            </h2>
          </div>
          <div className="mt-12 flex justify-center overflow-visible pb-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/nova/pressure-stepper/hero.webp"
              alt="퍼플 Nova 에어 지압 스텝퍼"
              className="h-auto w-full max-w-[1280px] origin-center object-contain"
              style={{
                maxHeight: 1100,
                transform: "scale(0.95)",
                filter: "drop-shadow(0 24px 48px rgba(93,57,128,0.2))",
              }}
            />
          </div>
          <p
            className="mx-auto mt-12 max-w-[780px] px-4 text-center text-[28px] font-normal leading-[1.5] tracking-[-0.01em]"
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
            신발을 벗고, 두 발을 올리고,
            <br />
            천천히 디뎌보세요.
            <br />
            말랑하게 내려앉는 공기 발판과
            <br />
            발바닥에 닿는 입체 돌기가
            <br />
            오늘의 몸을 가볍게 움직이게 합니다.
          </p>
        </div>
      </section>

      {/* 기능 + 스토리 */}
      <section className="bg-white px-12 pb-36 pt-[8.8rem]">
        <div className="flex flex-col gap-48">
          <FeatureBlock
            title={
              <>
                운동을 미루는 건,
                <br />
                의지보다 시작이 커서입니다.
              </>
            }
            imageSrc="/assets/nova/pressure-stepper/user-03-seated-use.webp"
            imageAlt="의자에 앉아 양말을 신고 지압 스텝퍼를 사용하는 모습"
            photoLabel="사진 — 오래 앉아 있다가 스텝퍼에 발을 올리는 장면"
            bodyAfterImage
          >
            운동복을 꺼내고, 영상을 고르고, 시간을 비워야 시작할 수 있는 운동은
            바쁜 날일수록 가장 먼저 미뤄집니다. 그래서 필요한 건 더 큰 계획이
            아니라, 생각날 때 바로 발을 올릴 수 있는 한 발판일지 모릅니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                운동 전에도,
                <br />
                운동이 아닌 날에도.
              </>
            }
            imageSrc="/assets/nova/pressure-stepper/user-05-standing-use.webp"
            imageAlt="맨발로 지압 스텝퍼 위에 서서 사용하는 모습"
            photoLabel="사진 — 거실에서 가볍게 스태핑하는 장면"
            bodyAfterImage
          >
            Nova Pressure Stepper는 거창한 운동 루틴을 대신하는 제품이 아닙니다.
            움직임이 필요하다고 느낀 순간, 망설이지 않고 발을 올리게 만드는
            제품입니다. 씻기 전 3분, 회의 사이 1분, 영상 한 편을 보는 동안.
            발을 번갈아 디디며 오늘의 리듬을 다시 시작해보세요.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                디딜 때는 부드럽게,
                <br />
                리듬은 가볍게.
              </>
            }
            imageSrc="/assets/nova/pressure-stepper/user-04-side-pressure.webp"
            imageAlt="발을 디뎠을 때 지압 돌기와 발판의 측면 반응"
            photoLabel="사진 — 눌린 공기 발판의 쿠션감을 보여주는 측면 컷"
            bodyAfterImage
          >
            안에는 공기를, 겉에는 두꺼운 PVC를 담았습니다. 발을 디디면 살짝
            내려앉고, 다시 다음 발을 기다립니다. 딱딱한 발판 위에서 버티는
            느낌보다 내 체중에 맞춰 부드럽게 반응하는 감각. 한 발, 그리고 다음
            한 발이면 충분합니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                발바닥을 따라 닿는,
                <br />
                또렷한 자극.
              </>
            }
            imageSrc="/assets/nova/pressure-stepper/user-10-pressure-highlight.webp"
            imageAlt="발바닥이 지압 돌기에 닿는 자극을 강조한 사용 모습"
            photoLabel="사진 — 서로 다른 형태의 입체 지압 돌기 클로즈업"
            bodyAfterImage
          >
            발판 전체에 높이와 모양이 다른 입체 돌기를 더했습니다. 맨발로
            디딜 때마다 발바닥에 다양한 감각이 전해지죠. 운동을 위해 꺼냈다가,
            잠시 맨발로 서 있기 위해서도 자연스럽게 찾게 되는 발판입니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                발바닥에 닿는 구조부터
                <br />
                다르게.
              </>
            }
            imageSrc="/assets/nova/pressure-stepper/user-06-product-top.webp"
            imageAlt="입체 지압 돌기와 발 모양 구조가 보이는 제품 상면"
            photoLabel="사진 — 입체 돌기와 에어 구조를 함께 보여주는 제품 컷"
            bodyAfterImage
          >
            Nova Pressure Stepper는 공기를 채운 PVC 발판 위에 다양한 형태의
            입체 돌기를 더했습니다. 발을 디디면 에어 구조가 체중을 부드럽게
            받아주고, 발바닥에는 돌기의 또렷한 감각이 전해집니다. 바닥면에는
            미끄럼 방지 패턴을 적용해 집에서도 안정적으로 사용할 수 있도록
            구성했습니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                오른발도, 왼발도.
                <br />
                같은 리듬으로 편안하게.
              </>
            }
            imageSrc="/assets/nova/pressure-stepper/user-09-alternating-feet.webp"
            imageAlt="양발을 번갈아 디디는 지압 스텝퍼 사용 모습"
            photoLabel="사진 — 양발 대칭 발판 위에 맨발을 올린 장면"
            bodyAfterImage
          >
            두 발이 자연스럽게 놓이는 양방향 대칭 구조입니다. 한쪽 발에 체중을
            싣고, 다른 발을 옮기고, 천천히 반복해보세요. 복잡한 동작을 외울
            필요 없이 발을 올린 순간부터 내 몸의 리듬으로 시작할 수 있습니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                미끄럼 방지 패턴,
                <br />
                발판은 제자리에.
              </>
            }
            imageSrc="/assets/nova/pressure-stepper/user-01-bottom.webp"
            imageAlt="미끄럼 방지 패턴이 보이는 지압 스텝퍼 바닥면"
            photoLabel="사진 — 미끄럼 방지 바닥 패턴 클로즈업"
            bodyAfterImage
          >
            발판 아래에는 바닥과의 접지감을 고려한 패턴을 더했습니다. 발을
            번갈아 디디는 순간에도, 잠시 멈춰 설 때도 안정감을 놓치지 않도록.
            움직임은 가볍게, 발 디딤은 안정적으로. 집에서 쓰는 운동 도구라면
            이 기본부터 확실해야 하니까요.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                늦은 밤에도,
                <br />
                내 리듬은 멈추지 않게.
              </>
            }
            imageSrc="/assets/nova/pressure-stepper/user-08-late-night.webp"
            imageAlt="늦은 밤 침실 옆에서 지압 스텝퍼를 사용하는 모습"
            photoLabel="사진 — 조용한 저녁 거실에서 스태핑하는 장면"
            bodyAfterImage
          >
            집에서 운동이 어려운 이유 중 하나는 소리와 진동이 신경 쓰이기
            때문입니다. 공기를 채운 발판이 디딜 때의 충격을 부드럽게 받아줘,
            이른 아침이나 늦은 저녁에도 조금 더 가볍게 꺼내 쓸 수 있습니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                꺼내기 쉬워야,
                <br />
                매일의 루틴이 되니까.
              </>
            }
            imageSrc="/assets/nova/pressure-stepper/user-07-storage.webp"
            imageAlt="거실 수납장 위에 세워 보관한 지압 스텝퍼"
            photoLabel="사진 — 소파 옆 또는 침대 아래에 정리된 스텝퍼"
            bodyAfterImage
          >
            운동 기구는 크면 멀어집니다. 눈에 보여도 꺼내기 귀찮고, 끝나면
            정리하기 번거롭죠. 39 × 33cm의 컴팩트한 크기라 거실 한쪽, 책상 옆,
            침대 아래에도 부담 없이 둘 수 있습니다. 생각났을 때 꺼내고,
            끝나면 가볍게 옮기세요.
          </FeatureBlock>
        </div>
      </section>

      {/* 9. 운동 부위 */}
      <section className="bg-[#fdf9fb] px-12 pb-36 pt-32">
        <h2
          className="text-center text-[58px] font-bold leading-tight tracking-[-0.025em]"
          style={{
            backgroundImage: "linear-gradient(90deg, #b45683, #df8cae)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            fontFamily:
              '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          작은 스텝,
          <br />
          하체부터 자세까지.
        </h2>
        <p
          className="mx-auto mt-8 max-w-[680px] text-center text-[26px] font-medium leading-[1.6] tracking-[-0.01em]"
          style={{ color: "#6e6e73" }}
        >
          한 발씩 디딜 때, 하체는 리듬을 만들고
          <br />
          코어는 흔들리지 않는 자세를 돕습니다.
        </p>

        <div className="mx-auto mt-20 max-w-[760px]">
          <div className="grid grid-cols-2 gap-5">
            {[
              {
                label: "앞면",
                src: "/assets/nova/pressure-stepper/muscle-map/front.svg",
                alt: "스태핑 동작에서 함께 쓰이는 앞면 하체와 코어 근육도",
              },
              {
                label: "뒷면",
                src: "/assets/nova/pressure-stepper/muscle-map/back.svg",
                alt: "스태핑 동작에서 함께 쓰이는 뒷면 하체와 자세 유지 근육도",
              },
            ].map(({ label, src, alt }) => (
              <figure
                key={label}
                className="rounded-[28px] border border-[#f0dce7] bg-white px-7 pb-7 pt-8 text-center"
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
                title: "주로 쓰이는 부위",
                body: "대퇴사두근 · 비복근 · 가자미근",
                color: "#DC5F98",
              },
              {
                level: 4,
                title: "함께 쓰이는 부위",
                body: "전경골근 · 햄스트링 · 대둔근",
                color: "#E88BB5",
              },
              {
                level: 3,
                title: "자세를 지탱하며 쓰이는 부위",
                body: "복직근 · 외복사근 · 중둔근 · 외전근",
                color: "#EFA9C8",
              },
              {
                level: 2,
                title: "균형을 보조하는 부위",
                body: "광배근 · 하부 승모근 · 허리 주변",
                color: "#F4C9DC",
              },
              {
                level: 1,
                title: "동작에 따라 달라지는 부위",
                body: "발의 위치 · 스텝 깊이 · 개인의 자세에 따라 달라집니다.",
                color: "#F8E8F0",
              },
            ].map(({ level, title, body, color }) => (
              <div
                key={title}
                className="border-b border-[#efdde6] py-7 first:border-t [&:nth-child(2)]:border-t"
              >
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
          사용 시간, 디디는 강도, 개인의 자세에 따라 사용감은 달라질 수 있습니다.
        </p>
      </section>

      {/* 10. 사용 장면 */}
      <section className="bg-white px-12 pb-36 pt-32">
        <h2
          className="text-center text-[58px] font-bold leading-tight tracking-[-0.025em]"
          style={{
            color: "#1d1d1f",
            fontFamily:
              '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          운동이 아니라도,
          <br />
          움직임은 필요하니까.
        </h2>
        <p
          className="mx-auto mt-8 whitespace-nowrap text-center text-[26px] font-medium leading-[1.6] tracking-[-0.01em]"
          style={{ color: "#6e6e73" }}
        >
          생각날 때 바로 발을 올릴 수 있는 한 자리가, 작은 루틴을 오래 이어줍니다.
        </p>

        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-14">
          {[
            {
              scene: "오래 앉아 있던 오후",
              line: "다음 일을 시작하기 전, 두 발을 올리고 내 리듬대로 천천히 디뎌보세요.",
              imageSrc: "/assets/nova/pressure-stepper/scene-01-after-sitting.webp",
              imageAlt: "오래 앉아 책상 앞에 있는 사람",
              photo: "이미지 준비 중",
            },
            {
              scene: "운동 전 워밍업",
              line: "본격적인 루틴 전에, 발부터 가볍게 깨우는 작은 스텝으로 시작할 수 있습니다.",
              imageSrc: "/assets/nova/pressure-stepper/scene-02-warmup.webp",
              imageAlt: "거실에서 운동 전 스트레칭을 하는 사람",
              photo: "이미지 준비 중",
            },
            {
              scene: "집에서 쉬는 시간",
              line: "소파 앞에 두고 영상 한 편을 보는 동안에도 한 발씩 천천히 움직일 수 있습니다.",
              imageSrc: "/assets/nova/pressure-stepper/scene-03-rest.webp",
              imageAlt: "침대에서 편안하게 쉬는 사람",
              photo: "이미지 준비 중",
            },
            {
              scene: "운동이 끝난 뒤",
              line: "숨을 고르며 발바닥에 전해지는 입체 돌기의 감각을 느껴보세요.",
              imageSrc: "/assets/nova/pressure-stepper/scene-04-after-workout.webp",
              imageAlt: "운동 후 매트 위에서 휴식을 취하는 사람",
              photo: "이미지 준비 중",
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

      {/* 4. 스펙 하이라이트 — 지압 스텝퍼용으로 분리한 2×2 카드 */}
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
              backgroundImage: "linear-gradient(90deg, #b45683, #df8cae)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Nova Pressure Stepper.
          </span>
        </h2>

        <div className="mt-20 grid grid-cols-2 gap-6">
          {[
            { value: "39×33", unit: "cm", label: "제품 크기" },
            { value: "5", unit: "cm", label: "발판 높이" },
            { value: "1.2", unit: "kg", label: "제품 무게" },
            { value: "PVC", unit: "", label: "외피 소재" },
          ].map(({ value, unit, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center rounded-[28px] bg-white px-8 py-16 text-center"
            >
              <p
                className={`w-full whitespace-nowrap text-center font-bold leading-none tracking-[-0.03em] ${
                  value === "39×33" ? "text-[68px]" : "text-[84px]"
                }`}
                style={{
                  backgroundImage: "linear-gradient(90deg, #b45683, #df8cae)",
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
                className="mt-7 w-full whitespace-nowrap text-center text-[26px] font-semibold tracking-[-0.015em]"
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
              title: "7일 이내 무상 교환",
              body: "초기 불량은 수령 후 7일 이내 확인해 주시면 배송비 없이 교환해 드립니다.",
            },
            {
              Icon: ShieldCheck,
              title: "에어 PVC 구조",
              body: "발을 디딜 때 쿠션감 있게 반응하도록 설계한 에어 발판입니다.",
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
                className="mt-1 h-12 w-12 shrink-0 text-[#dc5f98]"
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
          background: "linear-gradient(180deg, #ffffff 0%, #fdf9fb 28%, #faeef4 68%, #f5e4ed 100%)",
        }}
      >
        <h2
          className="whitespace-nowrap text-center text-[58px] font-bold leading-[1.18] tracking-[-0.028em]"
          style={{
            color: "#1d1d1f",
            fontFamily:
              '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          한 발씩, 오늘을 가볍게.
        </h2>
        <p
          className="mx-auto mt-10 max-w-[680px] text-center text-[28px] font-medium leading-[1.6] tracking-[-0.01em]"
          style={{
            color: "#4a5a66",
            fontFamily:
              '"SF Pro KR", "SF Pro Text", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          운동을 끝까지 해내지 않아도 됩니다.
          <br />
          한 발씩 디디며 오늘을 가볍게 시작해보세요.
        </p>

        <PhotoSlot
          label="사진 — 거실에서 지압 스텝퍼를 사용하는 완성 컷 (와이드)"
          imageSrc="/assets/nova/pressure-stepper/final-wide-storage.webp"
          imageAlt="따뜻한 거실 조명 아래 세워 보관한 지압 스텝퍼"
          aspect="16 / 10"
        />

        <p
          className="mt-20 text-center text-[52px] font-semibold leading-tight tracking-[-0.02em]"
          style={{
            backgroundImage: "linear-gradient(90deg, #b45683, #df8cae)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            fontFamily:
              '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          Nova Pressure Stepper
        </p>
        <p
          className="mt-3 text-center text-[28px] font-normal leading-snug tracking-[-0.01em]"
          style={{ color: "#6e7e8a" }}
        >
          가벼운 움직임의 시작.
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
              q: "이거 회전 운동 기구인가요?",
              a: "아닙니다. 몸을 비트는 회전 운동 기구가 아니라, 두 발을 올리고 번갈아 디디는 에어 지압 스텝퍼입니다. 복잡한 동작 없이 발을 올리고 내 리듬대로 천천히 시작할 수 있습니다.",
            },
            {
              q: "운동을 잘하지 못해도 사용할 수 있나요?",
              a: "네. 정해진 동작을 외울 필요 없이 두 발을 올리고 번갈아 디디는 방식입니다. 처음에는 짧은 시간부터 시작해, 본인에게 편안한 속도로 사용해 주세요.",
            },
            {
              q: "지압 돌기가 많이 아프지 않나요? 맨발로만 써야 하나요?",
              a: "돌기의 높이와 모양이 다양해 맨발로 디디면 또렷한 감각이 전해집니다. 처음에는 짧게 사용하며 강도를 익히는 것을 권합니다. 보다 부드러운 감각을 원한다면 양말을 신고 사용할 수 있습니다.",
            },
            {
              q: "밤이나 아파트에서도 사용할 수 있나요?",
              a: "공기를 채운 PVC 구조가 발을 디딜 때의 충격을 부드럽게 받아줍니다. 다만 사용 환경과 바닥 재질에 따라 느낌은 달라질 수 있으니, 늦은 시간에는 천천히 사용해 주세요.",
            },
            {
              q: "공기를 채워서 써야 하나요?",
              a: "네. 에어 방식으로 사용하는 제품입니다. 사용 전 제품 상태를 확인하고, 적정한 수준으로 공기를 채워 사용해 주세요. 과도한 공기 주입은 피하는 것이 좋습니다.",
            },
            {
              q: "미끄러지지는 않나요?",
              a: "바닥면에는 접지감을 고려한 패턴을 적용했습니다. 평평하고 건조한 실내 바닥에서 사용해 주세요. 주변에 걸려 넘어질 물건이 없는지 먼저 확인하면 더 안전합니다.",
            },
            {
              q: "집에서 보관하기 부담스럽지 않나요?",
              a: "39 × 33cm, 약 1.2kg의 컴팩트한 크기입니다. 거실 한쪽이나 책상 옆, 침대 아래처럼 생각날 때 바로 꺼낼 수 있는 곳에 두기 좋습니다.",
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
                  className="mt-1.5 h-7 w-7 shrink-0 text-[#dc5f98]"
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

        <ul className="mt-24">
          {[
            {
              label: "에어 지압 스텝퍼 본체 x1 · 공기 주입 펌프 x1",
              src: "/assets/nova/pressure-stepper/components.webp",
            },
          ].map(({ label, src }) => (
            <li key={label} className="mx-auto w-full max-w-[780px] text-center">
              {/* 구성품 이미지는 원본 세로 비율을 유지하고 가로형 카드 프레임을 사용하지 않는다. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt="에어 지압 스텝퍼 본체와 공기 주입 펌프"
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
            ["품명 및 모델명", "Nova 에어 지압 스텝퍼"],
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
                "반드시 평평하고 안정된 바닥에서 사용해 주세요.",
                "처음 사용할 때는 짧은 시간부터 시작해, 본인에게 편안한 강도로 사용해 주세요.",
                "사용 전 공기 주입 상태와 제품의 이상 유무를 확인해 주세요.",
                "과도한 공기 주입은 피하고, 날카로운 물건과의 접촉을 피해 주세요.",
                "물기가 있거나 미끄러운 바닥에서는 사용하지 마세요.",
                "균형을 잡기 어렵거나 보행이 불안정한 경우에는 보호자와 함께 사용 여부를 판단해 주세요.",
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
      className="mt-16 flex w-full items-center justify-center rounded-[28px]"
      style={{
        aspectRatio: aspect,
        backgroundColor: imageSrc ? undefined : "#f5f5f7",
        overflow: "hidden",
      }}
    >
      {imageSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={imageSrc} alt={imageAlt || label} className="h-full w-full object-cover" />
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
        style={{ border: "3px solid #dc5f98" }}
        aria-hidden
      >
        <Check className="h-9 w-9 text-[#dc5f98]" strokeWidth={3.5} />
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
