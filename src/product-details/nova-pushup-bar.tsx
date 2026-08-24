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
 * NOVA · 푸쉬업 바
 * 아이콘: Lucide (https://lucide.dev) — 앞으로 전부 여기 사용
 */
export default function NovaPushupBarPage() {
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
              Nova Push-Up Bar
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
              더 깊게, 더 제대로.
            </h2>
          </div>
          <div className="mt-16 flex h-[660px] justify-center overflow-hidden pb-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/nova/pushup-bar/hihihi.webp"
              alt="블랙 Nova 프리미엄 메탈 푸쉬업바 한 세트"
              className="h-full w-full max-w-[1280px] origin-center object-cover"
              style={{
                transform: "scale(1.06)",
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
            푸쉬업은 가장 단순한 운동이지만,
            <br />
            손목이 바닥에 닿는 순간 부담이 쌓입니다.
            <br />
            손잡이를 잡으면 손목은 보다 자연스럽게 세워지고,
            <br />
            높아진 손 위치만큼 몸은 더 깊게 내려갑니다.
            <br />
            Nova Push-Up Bar는 단단한 강관 프레임으로
            <br />
            힘이 실리는 순간에도 안정적으로 버티며,
            <br />
            한 번의 푸쉬업에 온전히 집중하도록 돕습니다.
          </p>
        </div>
      </section>

      {/* 기능 + 스토리 */}
      <section className="bg-white px-12 pb-36 pt-[8.8rem]">
        <div className="flex flex-col gap-48">
          <FeatureBlock
            title={
              <>
                손목을 세우고,
                <br />
                푸쉬업에 집중하세요.
              </>
            }
            imageSrc="/assets/nova/pushup-bar/wrist-alignment-compare.webp"
            imageAlt="맨손 푸쉬업과 푸쉬업 바 사용 시 손목 정렬 비교"
            bodyAfterImage
          >
            손을 바닥에 직접 짚는 대신 손잡이를 잡고 운동하면 손목을 보다
            자연스러운 각도로 유지할 수 있습니다. 손목에 신경 쓰기보다
            가슴과 어깨, 팔을 밀어내는 동작에 집중해보세요.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                더 높아진 손 위치.
                <br />
                더 깊어진 움직임.
              </>
            }
            imageSrc="/assets/nova/pushup-bar/deep-range.webp"
            imageAlt="푸쉬업 바를 사용해 몸을 깊게 내리는 자세"
            bodyAfterImage
          >
            손의 위치를 바닥보다 높여 몸을 더 깊게 내릴 수 있습니다. 내려가는
            범위가 넓어지면 한 번의 푸쉬업에서도 몸의 움직임을 더 크게 가져가며
            운동할 수 있습니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                기본 푸쉬업부터,
                <br />
                다양한 자세까지.
              </>
            }
            photoGrid={[
              {
                title: "기본 푸쉬업",
                photoLabel: "사진 — 푸쉬업 바를 어깨너비로 놓고 하는 기본 푸쉬업 자세",
                photoSrc: "/assets/nova/pushup-bar/pushup-wide.webp",
                photoAlt: "푸쉬업 바를 어깨너비로 놓고 하는 기본 푸쉬업",
              },
              {
                title: "와이드 푸쉬업",
                photoLabel: "사진 — 푸쉬업 바 간격을 넓게 둔 와이드 푸쉬업 자세",
                photoSrc: "/assets/nova/pushup-bar/pushup-standard.webp",
                photoAlt: "푸쉬업 바 간격을 넓게 벌려 하는 와이드 푸쉬업",
              },
              {
                title: "다이아몬드 푸쉬업",
                photoLabel: "사진 — 푸쉬업 바 간격을 좁힌 다이아몬드 푸쉬업 자세",
                photoSrc: "/assets/nova/pushup-bar/pushup-narrow.webp",
                photoAlt: "푸쉬업 바 간격을 좁혀 하는 다이아몬드 푸쉬업",
              },
              {
                title: "더 깊게 내려가는 푸쉬업",
                photoLabel: "사진 — 푸쉬업 바를 사용해 깊게 내려가는 자세",
                photoSrc: "/assets/nova/pushup-bar/pushup-deep.webp",
                photoAlt: "푸쉬업 바를 사용해 깊게 내려가는 푸쉬업",
              },
            ]}
          />

          <FeatureBlock
            title={
              <>
                삼각형 구조로
                <br />
                안정적으로 받쳐줍니다.
              </>
            }
            imageSrc="/assets/nova/pushup-bar/triangle-frame.webp"
            imageAlt="화이트 배경 위에 놓인 블랙 푸쉬업 바 한 세트"
            bodyAfterImage
          >
            손잡이와 바닥 지지대가 삼각형을 이루는 구조로 설계되어 운동 중
            전달되는 하중을 고르게 분산합니다. 몸을 밀어 올리는 순간에도
            푸쉬업 바가 안정적으로 자리를 잡아, 동작에 집중할 수 있도록 돕습니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                강관 프레임으로
                <br />
                단단하게 버티도록.
              </>
            }
            imageSrc="/assets/nova/pushup-bar/steel-frame-detail.webp"
            imageAlt="푸쉬업 바의 강관 프레임과 손잡이 연결부 클로즈업"
            bodyAfterImage
          >
            본체에는 견고한 강관 프레임을 적용했습니다. 최대 150kg 하중을
            기준으로 설계되어 체중이 실리는 푸쉬업 동작에서도 제품이 쉽게
            변형되지 않도록 안정적으로 받쳐줍니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                두꺼운 이중 폼 그립.
                <br />
                편안하게, 미끄러지지 않게.
              </>
            }
            imageSrc="/assets/nova/pushup-bar/grip-detail.webp"
            imageAlt="두꺼운 이중 폼 그립이 적용된 푸쉬업 바 클로즈업"
            bodyAfterImage
          >
            손이 닿는 부분에는 두꺼운 이중 폼 커버를 적용했습니다. 부드러운
            촉감과 요철 질감이 손에 편안하게 닿고, 운동 중 그립이 쉽게 미끄러지지
            않도록 도와줍니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                힘을 주는 순간에도,
                <br />
                손잡이는 안정적으로.
              </>
            }
            imageSrc="/assets/nova/pushup-bar/stable-grip.webp"
            imageAlt="손으로 푸쉬업 바 손잡이를 단단히 잡은 모습"
            bodyAfterImage
          >
            손잡이의 원형 그립이 손바닥 전체에 닿도록 설계되어 힘을 고르게
            전달합니다. 손목을 바닥에 눌러 버티는 대신, 양손으로 바를 잡고
            몸을 안정적으로 밀어 올려보세요.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                한 개 210g.
                <br />
                가볍게 꺼내서 시작하세요.
              </>
            }
            imageSrc="/assets/nova/pushup-bar/weight-210g.webp"
            imageAlt="저울 위에서 210g으로 측정된 푸쉬업 바 한 개"
            bodyAfterImage
          >
            푸쉬업 바 한 개의 무게는 약 210g입니다. 한 손으로 가볍게 옮길 수
            있어 거실, 홈짐, 여행지 등 운동하고 싶은 곳에서 바로 꺼내 사용할 수
            있습니다. 운동을 미루게 만드는 준비 과정을 줄여보세요.
          </FeatureBlock>

        </div>
      </section>

      {/* 푸쉬업에서 사용하는 근육 — 푸쉬업 패드의 인체 SVG를 그대로 참조 */}
      <section className="bg-[#f5f5f7] px-12 pb-36 pt-32">
        <h2
          className="text-center text-[58px] font-bold leading-tight tracking-[-0.025em]"
          style={{
            backgroundImage: "linear-gradient(90deg, #1d1d1f, #3d5a6e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            fontFamily:
              '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          푸쉬업에서 사용하는 근육.
        </h2>
        <p
          className="mx-auto mt-8 max-w-[680px] text-center text-[26px] font-medium leading-[1.6] tracking-[-0.01em]"
          style={{ color: "#6e6e73" }}
        >
          푸쉬업 바를 사용할 때 주로 쓰이는 상체 근육과
          <br />
          자세를 지탱하는 근육을 한눈에 확인해보세요.
        </p>

        <div className="mx-auto mt-20 max-w-[760px]">
          <div className="grid grid-cols-2 gap-5">
            {[
              {
                label: "앞면",
                src: "/assets/nova/pushup-pad/muscle-map/man-front.svg",
                alt: "가슴, 어깨 앞쪽, 삼두, 복부를 강조한 남성 인체 근육도",
              },
              {
                label: "뒷면",
                src: "/assets/nova/pushup-pad/muscle-map/man-back.svg",
                alt: "삼두와 어깨, 등 주변을 강조한 남성 인체 후면 근육도",
              },
            ].map(({ label, src, alt }) => (
              <figure
                key={label}
                className="rounded-[28px] border border-[#e1e4e8] bg-white px-7 pb-7 pt-8 text-center"
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
                body: "대흉근 · 상완삼두근",
                color: "#3d5a6e",
              },
              {
                level: 4,
                title: "많이 사용",
                body: "전면 삼각근 · 전거근",
                color: "#668196",
              },
              {
                level: 3,
                title: "보통 사용",
                body: "복직근 · 외복사근 · 내복사근 · 광배근",
                color: "#91a5b5",
              },
              {
                level: 2,
                title: "보조적으로 사용",
                body: "승모근 · 척추기립근 · 다열근 · 둔근 · 대퇴사두근 · 전완",
                color: "#c1cdd6",
              },
              {
                level: 1,
                title: "자세를 안정시키며 사용",
                body: "후면 삼각근 · 이두근 · 햄스트링 · 비복근 · 가자미근",
                color: "#e4e9ed",
              },
            ].map(({ level, title, body, color }) => (
              <div
                key={level}
                className="border-b border-[#dce1e5] py-7 first:border-t [&:nth-child(2)]:border-t"
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
          근육 사용 정도는 손 위치·각도·개인별 자세에 따라 달라질 수 있습니다.
        </p>
      </section>

      {/* 이런 분께 — 푸쉬업 바가 잘 맞는 사람을 보여주는 자리 */}
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
          손목 부담은 덜고, 푸쉬업 자세는 더 안정적으로 가져가고 싶은 분들입니다.
        </p>

        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-14">
          {[
            {
              scene: "손목이 불편한 분",
              line: "손을 직접 짚는 대신 손잡이를 잡고, 보다 자연스러운 각도로 운동해보세요.",
              imageSrc: "/assets/nova/pushup-bar/audience-wrist-strain.webp",
              imageAlt: "푸쉬업 중 손목에 부담을 느끼는 모습",
              photo: "",
            },
            {
              scene: "더 깊게 하고 싶은 분",
              line: "높아진 손 위치만큼 몸을 더 깊게 내리며 움직임을 넓혀보세요.",
              imageSrc: "/assets/nova/pushup-bar/deep-range.webp",
              imageAlt: "푸쉬업 바를 사용해 깊게 내려가는 자세",
              photo: "",
            },
            {
              scene: "집에서 운동하는 분",
              line: "꺼내서 바로 사용할 수 있는 도구 하나로 루틴을 이어가세요.",
              imageSrc: "/assets/nova/pushup-bar/audience-home-workout.webp",
              imageAlt: "집에서 푸쉬업으로 운동하는 모습",
              photo: "",
            },
            {
              scene: "상체를 키우고 싶은 분",
              line: "손 위치와 자세를 바꾸며 내 운동 루틴에 맞춰 활용해보세요.",
              imageSrc: "/assets/nova/pushup-bar/audience-travel-workout.webp",
              imageAlt: "여행지에서 푸쉬업으로 운동하는 모습",
              photo: "",
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

      {/* 스펙 하이라이트 — 숫자를 문단에서 꺼내 크게 */}
      <section className="bg-[#f5f5f7] px-12 pb-36 pt-32">
        <h2
          className="text-center text-[58px] font-bold leading-tight tracking-[-0.025em]"
          style={{
            color: "#1d1d1f",
            fontFamily:
              '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          숫자로 보는
          <br />
          <span
            style={{
              backgroundImage: "linear-gradient(90deg, #1d1d1f, #3d5a6e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Nova Push-Up Bar.
          </span>
        </h2>

        <div className="mt-20 grid grid-cols-3 gap-6">
          {[
            { value: "150", unit: "kg", label: "최대 하중" },
            { value: "210", unit: "g", label: "한 개 무게" },
            { value: "2", unit: "겹", label: "폼 그립 구조" },
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

      {/* 신뢰 배지 — 구매 직전 불안 제거 */}
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
              title: "강관 프레임 150kg 하중",
              body: "삼각형 지지 구조와 강관 프레임으로 체중이 실리는 동작을 안정적으로 받칩니다.",
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

      {/* 클로징 — 설득 파트의 마지막, 정보 파트로 넘어가기 전 */}
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
          더 깊게, 더 제대로.
        </h2>
        <p
          className="mx-auto mt-10 max-w-[680px] text-center text-[28px] font-medium leading-[1.6] tracking-[-0.01em]"
          style={{
            color: "#4a5a66",
            fontFamily:
              '"SF Pro KR", "SF Pro Text", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          손목을 보다 자연스럽게 세우고,
          <br />
          한 번의 푸쉬업에 더 깊이 집중해보세요.
        </p>

        <div
          className="mt-16 w-full overflow-hidden rounded-[28px]"
          style={{ aspectRatio: "16 / 10", backgroundColor: "#f5f5f7" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/nova/pushup-bar/closing-product.webp"
            alt="블랙 푸쉬업 바 한 세트"
            className="h-full w-full object-cover"
          />
        </div>

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
          Nova Push-Up Bar
        </p>
        <p
          className="mt-3 text-center text-[28px] font-normal leading-snug tracking-[-0.01em]"
          style={{ color: "#6e7e8a" }}
        >
          손목은 편안하게. 푸쉬업은 더 깊게.
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
              q: "맨손 푸쉬업과 어떤 차이가 있나요?",
              a: "손바닥을 바닥에 직접 짚는 대신 손잡이를 잡고 운동할 수 있습니다. 손목을 보다 자연스러운 각도로 유지하고, 손의 위치를 높여 더 깊은 움직임을 가져가는 데 도움을 줍니다.",
            },
            {
              q: "초보자도 사용할 수 있나요?",
              a: "네. 기본 푸쉬업 자세에서 손잡이를 잡는 것부터 시작하면 됩니다. 처음에는 무리하게 깊이 내려가기보다 몸통을 곧게 유지할 수 있는 범위에서 천천히 사용해 주세요.",
            },
            {
              q: "손목 통증이 있어도 사용해도 되나요?",
              a: "푸쉬업 바는 손목을 바닥에 직접 꺾어 짚지 않도록 돕는 도구입니다. 다만 통증이 지속되거나 부상이 의심되는 경우에는 사용을 중단하고 전문가와 상담해 주세요.",
            },
            {
              q: "운동 중 흔들리거나 밀리지 않나요?",
              a: "삼각형 지지 구조가 하중을 고르게 분산하도록 설계되었습니다. 다만 바닥 상태와 운동 자세에 따라 사용감이 달라질 수 있으므로, 평평하고 미끄럽지 않은 곳에서 사용해 주세요.",
            },
            {
              q: "최대 하중은 얼마인가요?",
              a: "최대 하중은 150kg입니다. 제품에 체중을 실을 때는 양쪽을 같은 높이와 방향으로 놓고, 균형 잡힌 자세로 사용해 주세요.",
            },
            {
              q: "손잡이는 어떤 소재로 되어 있나요?",
              a: "본체는 강관 프레임으로 제작되며, 손이 닿는 부분에는 두꺼운 이중 폼 커버가 적용되어 있습니다. 요철 질감의 그립이 손에 닿는 느낌을 편안하게 하고 미끄러짐을 줄이는 데 도움을 줍니다.",
            },
            {
              q: "한 개 무게는 얼마인가요?",
              a: "푸쉬업 바 한 개 기준 약 210g입니다. 한 손으로도 가볍게 옮길 수 있어 운동 공간을 바꿔가며 사용하기 좋습니다.",
            },
            {
              q: "어떤 바닥에서 사용하는 것이 좋나요?",
              a: "평평하고 안정적인 바닥에서 사용해 주세요. 바닥이 젖어 있거나 먼지가 많으면 밀림이 생길 수 있으므로 사용 전 바닥과 제품의 접촉면을 확인해 주세요.",
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

        <ul className="mt-24">
          {[
            {
              label: "푸쉬업 바 x2",
              src: null,
            },
          ].map(({ label }) => (
            <li key={label} className="mx-auto w-full max-w-[780px] text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/nova/pushup-bar/included-bars.webp"
                alt="푸쉬업 바 2개 구성품"
                className="h-auto w-full rounded-[28px] object-cover"
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
            ["품명 및 모델명", "푸쉬업 바"],
            ["재질", "강관 + 폼"],
            ["색상", "블랙"],
            ["크기", "상세 사이즈 이미지 참조"],
            ["중량", "약 210g (한 개 기준)"],
            ["최대 하중", "150kg"],
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
                "최대 하중(150kg)을 초과하여 사용하지 마세요.",
                "반드시 평평하고 안정된 바닥에서 사용해 주세요.",
                "바닥이 젖었거나 먼지가 많은 상태에서는 사용하지 마세요.",
                "제품 위에 올라서거나 점프하는 동작에는 사용하지 마세요.",
                "사용 전 프레임과 폼 그립에 손상이나 풀림이 없는지 확인해 주세요.",
              ],
            },
            {
              title: "세척 방법",
              body: "마른 천 또는 물기를 꼭 짠 천으로 가볍게 닦아 주세요. 세척 후에는 완전히 건조한 뒤 보관하고, 강한 화학 세제나 표백제는 사용하지 마세요.",
            },
            {
              title: "색상 안내",
              body: "모니터와 촬영 환경에 따라 실제 제품 색상과 다소 차이가 있을 수 있습니다.",
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
  photoGrid,
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
  photoGrid?: readonly {
    title: string;
    photoLabel: string;
    photoSrc: string;
    photoAlt?: string;
  }[];
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

      {photoGrid?.length ? (
        <>
        <div className="mt-24 grid grid-cols-2 gap-x-6 gap-y-14">
          {photoGrid.map(({ title, photoLabel, photoSrc, photoAlt = "" }) => (
            <figure key={title}>
              <div
                className="flex w-full items-center justify-center overflow-hidden rounded-[24px] bg-[#f5f5f7]"
                style={{ aspectRatio: "4 / 5" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photoSrc}
                  alt={photoAlt || photoLabel}
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption
                className="mt-7 text-center text-[30px] font-bold tracking-[-0.02em]"
                style={{
                  color: "#1d1d1f",
                  fontFamily:
                    '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
                }}
              >
                {title}
              </figcaption>
            </figure>
          ))}
        </div>
        {body}
        </>
      ) : bodyAfterImage ? (
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
