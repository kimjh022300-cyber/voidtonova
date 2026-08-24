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
 * VOID · 노트북 거치대 고정형 (v2 — 설득 구조 실험본)
 * 원본: void-laptop-fixed.tsx
 * 아이콘: Lucide (https://lucide.dev) — 앞으로 전부 여기 사용
 */
export default function VoidLaptopFixedV2Page() {
  return (
    <BrandFrame brand="void">
      {/* 1. 제품 히어로 — Apple MacBook Air 스타일 */}
      <section
        className="relative overflow-x-hidden"
        style={{
          background:
            "linear-gradient(180deg, #d2d2d7 0%, #e8e8ed 42%, #f5f5f7 72%, #ffffff 100%)",
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
              Void Laptop Stand
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
              단순하게, 단단하게.
            </h2>
          </div>
          <div className="mt-24 flex justify-center overflow-visible pb-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/void/laptop-fixed/95ae0ab5-d6ce-44d1-bcf0-e203986f1c3d-2.webp"
              alt="블랙 고정형 VOID 노트북 거치대"
              className="h-auto w-full max-w-[1280px] origin-center object-contain"
              style={{
                maxHeight: 1100,
                transform: "scale(1.18)",
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
            탄소강으로 완성한 단단한 구조로
            <br />
            더욱 안정적인 사용감을 전하는 노트북 거치대.
            <br />
            자유로운 높이와 각도 조절로 타이핑부터 영상 시청까지,
            <br />
            <span className="whitespace-nowrap">
              어떤 자세에서도 편안한 작업 환경을 만들어줍니다.
            </span>
            <br />
            책상 위에 안정적으로 자리 잡아
            <br />
            매일의 업무와 학습을 흔들림 없이 받쳐주죠.
            <br />
            이제 책상 위, 더 안정적인 작업을 시작해볼까요?
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
                타이핑할 때마다
                <br />
                화면이 미세하게 떨렸다면.
              </>
            }
            imageSrc="/assets/void/laptop-fixed/wobble.webp"
            imageAlt="거치대 위에서 타이핑하는 모습"
            bodyAfterImage
          >
            거치대는 높이만 맞으면 되는 물건처럼 보이지만, 실제로 쓰다 보면
            흔들림이 먼저 거슬립니다. 키를 칠 때마다 화면이 따라 떨리면 집중도
            같이 끊기죠.{" "}
            <span style={{ color: "#1d1d1f" }}>
              받쳐주는 물건은, 흔들리지 않는 것이 먼저입니다.
            </span>
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                움직이는 부분이 없다는
                <br />
                가장 확실한 강점.
              </>
            }
            imageSrc="/assets/void/laptop-fixed/weight-1000g-user.webp"
            imageAlt="전자저울 위에서 1000g으로 측정된 고정형 노트북 거치대"
            bodyAfterImage
            afterImage={
              <div
                className="mt-16 w-full overflow-hidden rounded-[28px]"
                style={{ aspectRatio: "3 / 4" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/void/laptop-fixed/load-test-v2.webp"
                  alt="여러 대의 노트북 하중을 지지하는 고정형 노트북 거치대"
                  className="h-full w-full object-cover"
                />
              </div>
            }
          >
            회전 기구가 없다는 건 헐거워질 곳도 없다는 뜻입니다. 약 1000g의
            묵직한 본체가 바닥을 누르고, 탄소강 구조가 그대로 하중을
            받아냅니다. 최대 10kg — 16인치 맥북 프로를 네 대 올려도 버티는
            하중이라, 오래 써도 처음의 단단함이 쉽게 달라지지 않습니다.
          </FeatureBlock>

          <FeatureBlock
            title="여기에, 편안한 자세까지."
            imageSrc="/assets/void/laptop-portable/posture.webp"
            imageAlt="거치대 사용 전후 자세 비교"
            bodyAfterImage
          >
            화면을 눈높이에 가깝게 올리는 것만으로도 시선은 자연스러워지고, 목과
            어깨의 부담은 줄어듭니다. 작은 높이의 차이가 더욱 편안한 작업
            환경을 만들어줍니다.
          </FeatureBlock>

          <FeatureBlock
            title="높이와 각도도 자유롭죠."
            imageSrc="/assets/void/laptop-stand-height-angle-user.webp"
            imageAlt="노트북 거치대의 높이와 각도 조절 단계 비교"
            bodyAfterImage
          >
            높이와 각도를 자유롭게 조절해 사용자의 자세와 작업 환경에 가장 알맞은
            위치를 설정할 수 있습니다. 앉아서 작업할 때도, 서서 사용할 때도
            자연스러운 시선을 유지하며 더욱 편안한 작업 환경을 만들어줍니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                성능을 유지하는
                <br />
                가장 단순한 방법.
              </>
            }
            imageSrc="/assets/void/laptop-fixed/cooling-airflow-v2.webp"
            imageAlt="고정형 노트북 거치대의 오픈형 방열 구조와 공기 흐름"
            bodyAfterImage
          >
            오픈형 구조가 공기의 흐름을 원활하게 만들어 열을 효과적으로
            분산시켜 줍니다. 장시간 사용에도 노트북의 성능을 안정적으로
            유지하는 데 도움을 줍니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                노트북을 지키는
                <br />
                섬세한 디테일.
              </>
            }
            imageSrc="/assets/void/laptop-stand-silicone-pad-detail-v2.webp"
            imageAlt="노트북 접촉부의 미끄럼 방지 실리콘 패드"
            aspect="1 / 1"
            bodyAfterImage
          >
            노트북이 닿는 부분에는 부드러운 실리콘 패드를 적용했습니다.
            미끄러짐을 줄이고 스크래치를 방지해, 소중한 기기를 더욱 안정적이고
            안전하게 보호합니다.
          </FeatureBlock>

          <FeatureBlock
            title="태블릿부터 노트북까지."
            imageSrc="/assets/void/laptop-fixed/tablet-to-laptop-tablet-user.webp"
            imageAlt="고정형 거치대에 올려 영상 시청 중인 태블릿"
            bodyAfterImage
            afterImage={
              <div
                className="mt-16 w-full overflow-hidden rounded-[28px]"
                style={{ aspectRatio: "3 / 4" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/void/laptop-fixed/tablet-to-laptop-user.webp"
                  alt="고정형 거치대에 올려 영상 시청 중인 노트북"
                  className="h-full w-full object-cover"
                />
              </div>
            }
          >
            Void Laptop Stand는 10~17인치까지 폭넓게 호환되어, 태블릿은 물론
            다양한 디바이스에 맞춰 자연스러운 작업 높이를 만들어, 일상적인
            사용부터 집중이 필요한 작업까지 폭넓게 함께합니다.
          </FeatureBlock>

          <FeatureBlock
            title="데스크를 완성하는 블랙."
            imageSrc="/assets/void/laptop-fixed/black-desk-v2.webp"
            imageAlt="블랙 데스크 위에 배치된 고정형 노트북 거치대"
            bodyAfterImage
            afterImage={
              <div
                className="mt-16 w-full overflow-hidden rounded-[28px]"
                style={{ aspectRatio: "3 / 4" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/void/laptop-fixed/black-desk-working-v2.webp"
                  alt="고정형 노트북 거치대를 사용해 작업하는 모습"
                  className="h-full w-full object-cover"
                />
              </div>
            }
          >
            고급스러운 블랙 컬러가 어떤 공간에도 자연스럽게 어우러집니다.
            단순한 거치대를 넘어, 작업 공간의 완성도를 높여주는 하나의
            오브제로 자리합니다.
          </FeatureBlock>
        </div>
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
          화려한 기능보다 매일 흔들리지 않는 쪽이 필요한 분들입니다.
        </p>

        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-14">
          {[
            {
              scene: "하루 종일 노트북 앞",
              line: "자세가 무너지는 건 시간 문제입니다. 화면 높이부터 바꿔 두세요.",
              imageSrc: "/assets/void/laptop-fixed/long-session.webp",
              imageAlt: "책상에서 장시간 작업 중인 모습",
              photo: null,
            },
            {
              scene: "외장 키보드를 쓰는 분",
              line: "화면만 올리고 손은 책상에. 거치대가 가장 제 몫을 하는 조합입니다.",
              imageSrc: "/assets/void/laptop-fixed/external-keyboard.webp",
              imageAlt: "거치대와 외장 키보드·마우스 셋업",
              photo: null,
            },
            {
              scene: "목·어깨가 자주 뻐근한 분",
              line: "원인이 자세가 아니라 화면 높이일 수 있습니다.",
              imageSrc: "/assets/void/laptop-fixed/posture-compare.webp",
              imageAlt: "거치대 사용 전 목이 뻐근한 자세",
              photo: null,
            },
            {
              scene: "한자리에서 일하는 분",
              line: "들고 다닐 일이 없다면, 접히지 않는 쪽이 더 단단합니다.",
              imageSrc: "/assets/void/laptop-fixed/desk-setup.webp",
              imageAlt: "고정된 데스크 셋업 와이드 컷",
              photo: null,
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
          숫자로 보는 Void Fixed.
        </h2>

        <div className="mt-20 grid grid-cols-3 gap-6">
          {[
            { prefix: "", value: "10", unit: "kg", label: "최대 하중" },
            { prefix: "약", value: "1", unit: "kg", label: "본체 무게" },
            { prefix: "", value: "17", unit: "인치", label: "최대 호환 크기" },
          ].map(({ prefix, value, unit, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center rounded-[28px] bg-white px-6 py-16 text-center"
            >
              <p
                className={
                  "inline-flex h-[84px] w-full items-baseline justify-center whitespace-nowrap text-center text-[84px] font-bold leading-none tracking-[-0.03em]"
                }
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
                {prefix ? (
                  <span className="mr-[0.28em] text-[22px] font-semibold">
                    {prefix}
                  </span>
                ) : null}
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
              title: "7일 이내 무상 교환",
              body: "초기 불량은 수령 후 7일 이내 확인해 주시면 배송비 없이 교환해 드립니다.",
            },
            {
              Icon: ShieldCheck,
              title: "탄소강 10kg 하중",
              body: "정격 하중 기준으로 반복 테스트를 거친 탄소강 구조입니다.",
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
          하루 종일, 흔들림 없이
        </h2>
        <p
          className="mx-auto mt-10 max-w-[680px] text-center text-[28px] font-medium leading-[1.6] tracking-[-0.01em]"
          style={{
            color: "#4a5a66",
            fontFamily:
              '"SF Pro KR", "SF Pro Text", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          화면이 떨릴 때마다 집중도 함께 흔들립니다.
          <br />
          단단하게 받쳐주는 것, 거치대가 할 일은 사실 그것뿐입니다.
        </p>

        <PhotoSlot
          label="사진 — 거치대에 노트북 올린 완성된 데스크 (정면 와이드 컷)"
          aspect="16 / 10"
          imageSrc="/assets/void/laptop-fixed/closing-wide-v2.webp"
          imageAlt="밝은 공간에 놓인 고정형 노트북 거치대"
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
          Void Fixed Laptop Stand
        </p>
        <p
          className="mt-3 text-center text-[28px] font-normal leading-snug tracking-[-0.01em]"
          style={{ color: "#6e7e8a" }}
        >
          단순하게, 단단하게.
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
              q: "몇 인치 노트북까지 사용할 수 있나요?",
              a: "10~17인치 노트북은 물론 태블릿까지 폭넓게 호환됩니다. 맥북 에어, 맥북 프로를 비롯한 대부분의 노트북을 안정적으로 거치할 수 있습니다.",
            },
            {
              q: "회전형과 어떤 차이가 있나요?",
              a: "탄소강 구조와 하중, 높이 조절 범위는 동일하고 360° 회전 기능만 빠졌습니다. 한자리에서만 쓰시고 화면을 돌려 보여줄 일이 거의 없다면 고정형이 더 합리적입니다. 회의나 화면 공유가 잦으시면 회전형을 권해드립니다.",
            },
            {
              q: "높이와 각도는 자유롭게 조절할 수 있나요?",
              a: "네. 사용자의 자세와 작업 환경에 맞춰 높이와 각도를 자유롭게 조절할 수 있습니다. 타이핑부터 영상 시청, 화상회의까지 원하는 위치로 편안하게 사용할 수 있습니다.",
            },
            {
              q: "책상에 고정해 두고 쓰기 좋은가요?",
              a: "고정형 구조로 책상 위에 안정적으로 자리 잡습니다. 매일 같은 자리에서 사용하는 데스크 환경에 적합합니다.",
            },
            {
              q: "타이핑할 때 흔들리거나 밀리지 않나요?",
              a: "약 1000g의 안정적인 무게와 미끄럼 방지 패드가 적용되어 타이핑이나 화면 터치 시에도 흔들림을 최소화하고 안정적으로 사용할 수 있습니다.",
            },
            {
              q: "오래 사용하면 노트북 발열이 심해지지 않나요?",
              a: "오픈형 구조로 설계되어 노트북 하단의 공기 순환을 도와 열이 자연스럽게 배출될 수 있도록 도와줍니다. 장시간 사용 시에도 보다 쾌적한 작업 환경을 유지할 수 있습니다.",
            },
            {
              q: "색상은 어떤 것이 있나요?",
              a: "블랙 단일 컬러로 제공됩니다. 어떤 데스크 환경에도 자연스럽게 어우러지는 고급스러운 디자인을 완성했습니다.",
            },
            {
              q: "오래 써도 내구성에는 문제가 없나요?",
              a: "견고한 탄소강 구조로 제작되어 매일의 반복 사용에도 안정적인 사용감을 유지하도록 제작되었습니다.",
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

        <div
          className="mx-auto mt-24 flex max-w-[780px] items-center justify-center overflow-hidden rounded-[28px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/void/laptop-fixed/size-v2.webp"
            alt="고정형 노트북 거치대 사이즈"
            className="block h-auto w-full"
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

        <ul className="mt-24">
          {[
            {
              label: "고정형 거치대 본체 x1",
              src: "/assets/void/laptop-fixed/in-the-box-v2.webp",
            },
          ].map(({ label, src }) => (
            <li key={label} className="mx-auto w-full max-w-[780px] text-center">
              <div className="flex items-center justify-center overflow-hidden rounded-[28px] bg-white px-6 py-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={label}
                  className="h-auto w-full origin-center object-contain"
                  style={{
                    transform: "scale(1.2)",
                    maxHeight: 560,
                  }}
                />
              </div>
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
            ["품명 및 모델명", "고정형 노트북 거치대"],
            ["재질", "탄소강 + 실리콘"],
            ["색상", "블랙"],
            ["크기", "240 × 210 × 180 mm · 높이 50~300 mm"],
            ["중량", "약 1000g"],
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
                "정격 하중(10kg)을 초과하여 사용하지 마세요.",
                "반드시 평평하고 안정된 바닥에서 사용해 주세요.",
                "물기가 있는 곳에서의 사용은 피해 주세요.",
                "각도 조절 시 무리한 힘을 가하지 마세요.",
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
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
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
  afterImage,
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
  afterImage?: ReactNode;
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

      {bodyAfterImage ? (
        <>
          {image}
          {afterImage}
          {body}
        </>
      ) : (
        <>
          {body}
          {image}
          {afterImage}
        </>
      )}
    </div>
  );
}
