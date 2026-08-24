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
 * VOID · 태블릿 거치대 스탠드형 (v2 — 설득 구조 실험본)
 * 원본: void-tablet-stand.tsx
 * 아이콘: Lucide (https://lucide.dev) — 앞으로 전부 여기 사용
 */
export default function VoidTabletStandV2Page() {
  return (
    <BrandFrame brand="void">
      {/* 1. 제품 히어로 — MagSafe 페이지와 동일 구조 */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #d2d2d7 0%, #e8e8ed 42%, #f5f5f7 72%, #ffffff 100%)",
        }}
      >
        <div
          className="relative flex flex-col items-center px-4 pb-[4.4rem] pt-36 text-center"
          style={{
            fontFamily:
              '"SF Pro KR", "SF Pro Display", "SF Pro Text", Pretendard, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Helvetica Neue", Helvetica, Arial, sans-serif',
          }}
        >
          <p
            className="text-[37px] font-semibold leading-[1.25] tracking-[0.007em]"
            style={{
              backgroundImage:
                "linear-gradient(105deg, #1d1d1f 0%, #2a3d4a 45%, #3d5a6e 70%, #1d1d1f 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              width: "fit-content",
            }}
          >
            Void Tablet Stand
          </p>

          <h2
            className="mx-auto mt-8 whitespace-nowrap text-[90px] font-bold leading-[1.08] tracking-[-0.01em]"
            style={{
              color: "#1d1d1f",
              fontFamily:
                '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
              width: "fit-content",
            }}
          >
            당신의 시선에 맞추다.
          </h2>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/void/tablet-stand/hero.png"
            alt="블랙 Void 태블릿 거치대 스탠드"
            className="mx-auto mt-2 h-auto w-full max-w-[980px] object-contain"
            style={{
              maxHeight: 1680,
              filter: "drop-shadow(0 24px 48px rgba(29,29,31,0.18))",
            }}
          />

          <p
            className="mx-auto mt-28 max-w-[780px] px-4 text-center text-[28px] font-normal leading-[1.5] tracking-[-0.01em]"
            style={{
              color: "#1d1d1f",
              fontFamily:
                '"SF Pro KR", "SF Pro Text", Pretendard, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            탄소강으로 완성해 더욱 견고하고
            <br />
            안정적인 사용감을 선사하는 태블릿 스탠드.
            <br />
            2단 관절 암과 360° 회전 클램프로
            <br />
            영상 시청부터 업무, 온라인 강의까지,
            <br />
            <span className="whitespace-nowrap">
              어떤 자세에서도 가장 편안한 시선을 만들어 줍니다.
            </span>
            <br />
            여기에 한 손으로도 손쉬운 각도 조절과
            <br />
            4.7인치부터 12.9인치까지 폭넓은 호환성까지,
            <br />
            당신의 일상 어디에서나 자연스럽게 함께하죠.
            <br />
            이제 더 자유롭게,
            <br />
            태블릿을 사용해 볼까요?
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
                영상은 재밌는데,
                <br />
                팔이 먼저 지치죠.
              </>
            }
            imageSrc="/assets/void/tablet-stand/holding-in-bed.png"
            imageAlt="침대에서 태블릿을 손으로 들고 보는 모습"
            bodyAfterImage
          >
            침대에서든 소파에서든, 결국 태블릿은 손으로 듭니다. 십 분이면 팔이
            저려오고 베개에 기대 세워두면 각도가 어긋나죠.{" "}
            <span style={{ color: "#1d1d1f" }}>
              화면을 붙잡고 있어야 한다는 것, 그게 진짜 불편입니다.
            </span>{" "}
            이제는 그 불편을 내려놓고, 편안함을 찾아야 할 때입니다.
          </FeatureBlock>

          <FeatureBlock
            title="들지 않아도 되는 편안함."
            imageSrc="/assets/void/tablet-stand/comfort-without-holding.png"
            imageAlt="침대에 누워 태블릿 거치대의 화면을 편안하게 바라보는 모습"
            bodyAfterImage
          >
            이제 화면은 스탠드가 들어줍니다. 손은 자유로워지고, 화면은 시선이
            편안한 높이에 그대로 머무르죠. 영상 시청부터 업무, 온라인 강의까지
            붙잡고 있을 필요 없이 편한 자세로 볼 수 있습니다. 작은 높이의
            차이가 일상의 사용감을 훨씬 더 편하게 바꿔줍니다.
          </FeatureBlock>

          <FeatureBlock
            title="원하는 높이와 거리까지."
            imageSrc="/assets/void/tablet-stand/height-distance.png"
            imageAlt="2단 관절 암을 접고 펼쳐 태블릿의 높이와 거리를 조절하는 모습"
            bodyAfterImage
          >
            팔꿈치처럼 두 번 접히는 관절 암이라, 높이와 거리를 따로 맞출 수
            있습니다. 앉아서 볼 때는 가까이, 누워서 볼 때는 머리 위로. 자세를
            화면에 맞추는 대신 화면을 자세에 맞추면 되죠. 지지봉 80cm에 25cm
            암 두 개를 더해 최대 140cm까지 닿습니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                힌지 하나하나에 담은
                <br />
                안정적인 움직임.
              </>
            }
            imageSrcs={[
              {
                src: "/assets/void/tablet-stand/rotation-landscape.png",
                alt: "힌지를 접어 태블릿 암의 움직임을 조절하는 모습",
              },
              {
                src: "/assets/void/tablet-stand/rotation-portrait.png",
                alt: "2단 힌지가 태블릿 암을 안정적으로 지지하는 모습",
              },
            ]}
            bodyAfterImage
          >
            단순히 접히기만 하는 관절이 아닙니다. 스프링이 적용된 힌지가 암의
            움직임을 부드럽게 받아주고, 원하는 각도에서 안정적으로 지지합니다.
            움직일 때는 부드럽게, 멈췄을 때는 단단하게. 매일 반복해서 사용해도
            편안한 조작감을 느낄 수 있습니다.
          </FeatureBlock>

          <FeatureBlock
            title="한 손으로도 쉬운 조절."
            imageSrcs={[
              {
                src: "/assets/void/tablet-stand/one-hand-adjustment-1.png",
                alt: "한 손으로 태블릿의 방향을 조절하는 모습",
              },
              {
                src: "/assets/void/tablet-stand/one-hand-adjustment-2.png",
                alt: "한 손으로 태블릿의 각도를 조절하는 모습",
              },
            ]}
            bodyAfterImage
          >
            조절이 번거로우면 결국 처음 맞춘 자리에 그대로 두고 씁니다. 그래서
            한 손으로 끝나도록 만들었습니다. 높이도, 각도도, 방향도 보던 자세
            그대로 손만 뻗어 바꾸면 됩니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                흔들림보다
                <br />
                안정감에 집중하다.
              </>
            }
            imageSrcs={[
              {
                src: "/assets/void/tablet-stand/weight-1-86kg.png",
                alt: "태블릿 거치대 베이스의 무게가 1.86kg으로 표시된 모습",
              },
              {
                src: "/assets/void/tablet-stand/stability-focus.png",
                alt: "암을 끝까지 펼친 상태에서도 안정적으로 서 있는 태블릿 거치대",
              },
              {
                src: "/assets/void/tablet-stand/stability-full-height.png",
                alt: "지지봉과 베이스를 포함한 태블릿 거치대 전체 모습",
              },
            ]}
            bodyAfterImage
          >
            거치대가 흔들리는 이유는 대부분 가볍기 때문입니다. 암을 앞으로
            펼치면 무게중심이 따라 쏠리는데, 본체가 가벼우면 그 순간 앞으로
            기울죠.{" "}
            <span style={{ color: "#1d1d1f" }}>
              그래서 무게를 줄이지 않았습니다.
            </span>{" "}
            탄소강 지지봉과 29.5 × 19.5cm의 넓은 베이스, 1.86kg의 묵직한 본체가
            바닥을 눌러 암을 끝까지 펼쳐도 제자리를 지킵니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                태블릿을 지키는,
                <br />
                섬세한 디테일.
              </>
            }
            imageSrc="/assets/void/tablet-stand/tablet-protection-detail.png"
            imageAlt="태블릿 거치대의 클램프 보호 패드를 확대한 모습"
            bodyAfterImage
          >
            기기가 닿는 클램프 안쪽에는 실리콘 보호 패드를 넣었습니다. 단단히
            잡아주면서도 스크래치는 남기지 않죠. 베이스 아래에도 미끄럼 방지
            패드를 붙여, 제품이 밀리거나 책상에 자국이 남는 일을 막았습니다.
          </FeatureBlock>

          <FeatureBlock
            title="스마트폰부터 태블릿까지."
            imageSrc="/assets/void/tablet-stand/phone-to-tablet.png"
            imageAlt="스마트폰부터 태블릿까지 고정할 수 있는 거치대 클램프"
            bodyAfterImage
          >
            4.7인치부터 12.9인치까지, 아이폰 SE만 한 크기부터 12.9형 아이패드
            프로까지 물립니다. 영상은 태블릿으로, 레시피는 폰으로 바꿔 걸어도
            되고요. 기기를 새로 사도 거치대는 그대로 쓰시면 됩니다.
          </FeatureBlock>

          <FeatureBlock
            title="쉽고 빠른 조립."
            imageSrcs={[
              {
                src: "/assets/void/tablet-stand/assembly-01.png",
                alt: "태블릿 거치대 조립 전 구성품",
              },
              {
                src: "/assets/void/tablet-stand/assembly-02.png",
                alt: "태블릿 거치대 베이스에 부품을 연결하는 모습",
                caption:
                  "1. 스탠드에 볼트와 너트를 체결하고, 뒷면에 보호 패드를 부착합니다.",
              },
              {
                src: "/assets/void/tablet-stand/assembly-03.png",
                alt: "태블릿 거치대 베이스에 지지봉을 연결한 모습",
                caption:
                  "2. 지지봉을 베이스에 연결한 뒤, 양쪽 나사산이 있는 연결 볼트를 사용해 다음 지지봉을 연결합니다.",
              },
              {
                src: "/assets/void/tablet-stand/assembly-04.png",
                alt: "태블릿 거치대 클램프 부품을 조립하는 모습",
                caption:
                  "3. 태블릿 거치대 뒷면의 고정 링을 풀어 분리합니다.",
              },
              {
                src: "/assets/void/tablet-stand/assembly-05.png",
                alt: "태블릿 거치대 암과 클램프를 연결한 모습",
                caption:
                  "4. 고정 링을 먼저 끼운 뒤, 태블릿 거치대와 암을 결합하고 고정 링을 돌려 단단히 잠급니다.",
              },
              {
                src: "/assets/void/tablet-stand/assembly-06.png",
                alt: "조립이 완성된 태블릿 거치대",
                caption:
                  "5. 2단 관절 암을 지지봉에 끼워 넣어 조립을 마무리합니다.",
              },
            ]}
            bodyAfterImage
          >
            드라이버도, 설명서와의 씨름도 필요 없습니다. 구성품을 순서대로
            끼우고 조이면 끝입니다. 박스를 열고 얼마 지나지 않아 첫 영상을
            틀어두실 수 있습니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                깊이 있는 블랙으로
                <br />
                완성한 세련됨.
              </>
            }
            imageSrc="/assets/void/tablet-stand/deep-black-finish.png"
            imageAlt="깊이 있는 블랙 컬러의 태블릿 거치대 전체 모습"
            bodyAfterImage
          >
            기능이 많은 제품일수록 디자인은 더 정돈되어야 합니다. 깊이 있는
            블랙은 공간에서 과하게 튀지 않으면서도 구조를 또렷하게 보여줍니다.
            침실에 두어도, 책상에 두어도 원래 그 자리에 있던 것처럼
            어우러집니다.
          </FeatureBlock>
        </div>
      </section>

      {/* [신규] 사용 장면 — 내 공간에 놓인 모습을 그리게 하는 자리 */}
      <section className="bg-white px-12 pb-36 pt-32">
        <h2
          className="text-center text-[58px] font-bold leading-tight tracking-[-0.025em]"
          style={{
            color: "#1d1d1f",
            fontFamily:
              '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          하루 어디에나 있습니다.
        </h2>
        <p
          className="mx-auto mt-8 max-w-none whitespace-nowrap text-center text-[26px] font-medium leading-[1.6] tracking-[-0.01em]"
          style={{ color: "#6e6e73" }}
        >
          손이 바쁠 때도, 누워 있을 때도. 화면이 필요한 자리마다 옮겨 갑니다.
        </p>

        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-14">
          {[
            {
              scene: "침대에서",
              line: "누운 자세 위로 화면을 내려 두세요. 팔을 들고 있을 필요가 없습니다.",
              imageSrc: "/assets/void/tablet-stand/bedside-view.png",
              imageAlt: "침대 옆에 세워 누워서 보는 모습",
              photo: null,
            },
            {
              scene: "주방에서",
              line: "손에 물이 묻어 있어도 레시피는 눈앞에 그대로 떠 있습니다.",
              imageSrc: "/assets/void/tablet-stand/kitchen-recipe.png",
              imageAlt: "주방 조리대 옆에서 레시피를 보는 모습",
              photo: null,
            },
            {
              scene: "책상에서",
              line: "노트북 옆 세컨드 스크린으로. 자료를 띄워두고 작업하세요.",
              imageSrc: "/assets/void/tablet-stand/desk-second-screen.png",
              imageAlt: "모니터 옆에 나란히 둔 태블릿 거치 모습",
              photo: null,
            },
            {
              scene: "홈트할 때",
              line: "따라 하기 영상을 눈높이에 맞춰 두세요. 바닥에 눕혀 둘 필요가 없습니다.",
              imageSrc: "/assets/void/tablet-stand/home-workout.png",
              imageAlt: "홈트 영상을 보며 운동하는 모습",
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
          숫자로 보는
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
            Void Tablet Stand.
          </span>
        </h2>

        <div className="mt-20 grid grid-cols-2 gap-6">
          {[
            { value: "360", unit: "°", label: "회전 클램프" },
            { value: "140", unit: "cm", label: "암 펼침 시 최대 높이" },
            { value: "12.9", unit: "인치", label: "아이패드 프로까지 호환" },
            { value: "1.86", unit: "kg", label: "본체 무게" },
          ].map(({ value, unit, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center rounded-[28px] bg-white px-8 py-16 text-center"
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
              title: "7일 이내 무상 교환",
              body: "초기 불량은 수령 후 7일 이내 확인해 주시면 배송비 없이 교환해 드립니다.",
            },
            {
              Icon: ShieldCheck,
              title: "탄소강 + 1.86kg 베이스",
              body: "넓은 베이스와 탄소강 지지봉으로 암을 길게 펼쳐도 흔들리지 않습니다.",
            },
            {
              Icon: Wrench,
              title: "공구 없이 조립",
              body: "별도의 전문 공구 없이 구성품을 순서대로 연결하면 바로 사용할 수 있습니다.",
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
          이제, 팔은 내려두세요
        </h2>
        <p
          className="mx-auto mt-10 max-w-[680px] text-center text-[28px] font-medium leading-[1.6] tracking-[-0.01em]"
          style={{
            color: "#4a5a66",
            fontFamily:
              '"SF Pro KR", "SF Pro Text", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          침대에서도, 소파에서도, 책상에서도. 화면은 스탠드가 들어드립니다.
          손은 자유로워지고 시선은 편해집니다.
        </p>

        <PhotoSlot
          label=""
          aspect="16 / 10"
          imageSrc="/assets/void/tablet-stand/closing-bedside.png"
          imageAlt="침대에 누워 태블릿 거치대의 화면을 바라보는 모습"
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
          Void Tablet Stand
        </p>
        <p
          className="mt-3 text-center text-[28px] font-normal leading-snug tracking-[-0.01em]"
          style={{ color: "#6e7e8a" }}
        >
          당신의 시선에 맞추다.
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
              q: "제 폰이나 태블릿도 사용할 수 있나요?",
              a: (
                <>
                  네.{" "}
                  <span style={{ color: "#1d1d1f" }}>4.7~12.9인치</span>로,
                  아이폰 SE 크기부터{" "}
                  <span style={{ color: "#1d1d1f" }}>
                    12.9형 아이패드 프로
                  </span>
                  까지 대부분의 스마트폰·태블릿과 호환됩니다. 클램프 내부에는
                  실리콘 보호 패드가 적용되어 있어 기기를 안정적으로 고정하면서
                  스크래치 걱정도 덜어드립니다.
                </>
              ),
            },
            {
              q: "저렴한 태블릿 거치대와 뭐가 다른가요?",
              a: (
                <>
                  무게와 재질이 다릅니다. 저가 제품은 대부분 플라스틱 소재에{" "}
                  <span style={{ color: "#1d1d1f" }}>500g 안팎</span>이라 암을
                  길게 펼치면 무게중심이 앞으로 쏠려 흔들리거나 기울어집니다.
                  이 제품은{" "}
                  <span style={{ color: "#1d1d1f" }}>탄소강 지지봉</span>에{" "}
                  <span style={{ color: "#1d1d1f" }}>1.86kg</span>,{" "}
                  <span style={{ color: "#1d1d1f" }}>29.5 × 19.5cm</span>의 넓은
                  베이스를 적용해 암을 끝까지 펼친 상태에서도 안정적으로
                  버팁니다. 거치대에서 무게는 단점이 아니라 성능입니다.
                </>
              ),
            },
            {
              q: "각도 조절은 자유로운가요?",
              a: (
                <>
                  네.{" "}
                  <span style={{ color: "#1d1d1f" }}>360° 회전 클램프</span>와{" "}
                  <span style={{ color: "#1d1d1f" }}>2단 관절 암</span>을 적용해
                  가로·세로 화면 전환은 물론, 원하는 높이와 각도를 한 손으로
                  간편하게 조절할 수 있습니다.
                </>
              ),
            },
            {
              q: "오래 사용해도 흔들리지 않나요?",
              a: "탄소강 지지봉과 넓은 베이스를 적용해 안정적인 사용감을 제공합니다. 영상 시청이나 업무 중에도 흔들림을 최소화해 더욱 편안하게 사용할 수 있습니다.",
            },
            {
              q: "바닥이 미끄럽거나 자국이 남지는 않나요?",
              a: (
                <>
                  베이스 하단에{" "}
                  <span style={{ color: "#1d1d1f" }}>미끄럼 방지 패드</span>를
                  적용해 바닥을 보호하고, 제품이 쉽게 밀리지 않도록 안정적으로
                  지지해 줍니다.
                </>
              ),
            },
            {
              q: "1.86kg이면 자리를 옮기기 번거롭지 않나요?",
              a: (
                <>
                  한 손으로 들어 옮길 수 있는 무게입니다. 다만 자주 들고 다니기
                  위한 제품이라기보다{" "}
                  <span style={{ color: "#1d1d1f" }}>
                    한자리에 두고 쓰는 스탠드
                  </span>
                  에 가깝습니다. 침대 옆이나 책상처럼 주로 쓰는 공간에 두고
                  사용하시는 것을 권해 드립니다.
                </>
              ),
            },
            {
              q: "색상은 어떤 것이 있나요?",
              a: (
                <>
                  <span style={{ color: "#1d1d1f" }}>블랙</span> 한 가지
                  색상으로 제공됩니다. 어느 공간에도 자연스럽게 어울리는
                  심플하고 고급스러운 컬러입니다.
                </>
              ),
            },
            {
              q: "침대나 소파에서도 사용할 수 있나요?",
              a: (
                <>
                  네.{" "}
                  <span style={{ color: "#1d1d1f" }}>지지봉 높이 80cm</span>에{" "}
                  <span style={{ color: "#1d1d1f" }}>
                    25cm + 25cm 2단 관절 암
                  </span>
                  을 더해{" "}
                  <span style={{ color: "#1d1d1f" }}>최대 140cm</span>까지
                  닿습니다. 침대, 소파, 책상 등 다양한 환경에서 원하는 위치와
                  높이로 편리하게 사용할 수 있습니다.
                </>
              ),
            },
            {
              q: "어떤 공간에서 사용하기 좋나요?",
              a: "침대 옆, 책상, 소파, 거실 등 다양한 공간에서 활용할 수 있습니다. 영상 시청, 온라인 강의, 화상회의, 독서, 레시피 확인 등 다양한 상황에 편리하게 사용할 수 있습니다.",
            },
            {
              q: "조립이 필요한 제품인가요?",
              a: "네. 간단한 조립만으로 바로 사용할 수 있으며, 별도의 전문 공구 없이 손쉽게 설치할 수 있습니다.",
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
              label: "태블릿 거치대 본체 x1 (조립식)",
              src: "/assets/void/tablet-stand/hero.png",
            },
          ].map(({ label, src }) => (
            <li key={label} className="mx-auto w-full max-w-[780px] text-center">
              <div
                className="flex items-center justify-center overflow-hidden rounded-[28px] bg-[#f5f5f7] px-6 py-10"
                style={{ minHeight: 480 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={label}
                  className="h-auto w-full object-contain"
                  style={{ maxHeight: 560 }}
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

      {/* 사이즈 */}
      <section className="bg-[#f5f5f7] px-10 pb-36 pt-32">
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

        <div className="mx-auto mt-24 max-w-[780px] overflow-hidden rounded-[28px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/void/tablet-stand/size.png"
            alt="Void 태블릿 거치대 스탠드의 제품 치수"
            className="block h-auto w-full"
          />
        </div>
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
            ["품명 및 모델명", "보이드 태블릿 거치대"],
            ["재질", "탄소강+플라스틱"],
            ["색상", "블랙"],
            [
              "크기",
              "295 x 195 x 800 mm (베이스 295×195mm, 지지봉 높이 800mm, 암 250+250mm, 암 펼침 시 최대 1400mm)",
            ],
            ["중량", "1.86kg"],
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
                "제품을 과도한 힘으로 꺾거나 무리하게 조작하지 마세요. 관절부 손상의 원인이 될 수 있습니다.",
                "거치 가능 범위(4.7~12.9인치) 내의 기기만 사용해 주세요. 과도한 하중은 제품 안정성에 영향을 줄 수 있습니다.",
                "평평하고 안정적인 바닥에서 사용해 주세요. 기울어지거나 불안정한 장소에서는 넘어질 수 있습니다.",
                "각도 조절 후 관절과 클램프가 제대로 고정되었는지 확인한 후 사용해 주세요. 기기 낙하를 예방할 수 있습니다.",
                "직사광선이나 고온·다습한 환경을 피해 보관해 주세요. 제품 변형 및 수명 저하를 방지할 수 있습니다.",
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
  imageSrcs,
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
  imageSrcs?: Array<{ src: string; alt: string; caption?: string }>;
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
        className={`mt-24 w-full ${imageSrcs?.length ? "grid grid-cols-1 gap-16" : "rounded-[28px]"} ${
        !imageSrc && !imageSrcs?.length && photoLabel
          ? "flex items-center justify-center"
          : ""
      }`}
      style={{
        ...(imageSrcs?.length
          ? undefined
          : {
              paddingTop: framePy,
              paddingBottom: framePy,
              overflow: imageScale ? "visible" : "hidden",
              aspectRatio: framePy ? undefined : aspect,
              backgroundColor: noBackground ? undefined : "#f5f5f7",
            }),
      }}
    >
      {imageSrcs?.length ? (
        imageSrcs.map(({ src, alt, caption }) => (
          <div key={src}>
            {caption ? (
              <p
                className="mb-5 text-[28px] font-semibold leading-[1.45] tracking-[-0.015em]"
                style={{
                  color: "#1d1d1f",
                  fontFamily:
                    '"SF Pro KR", "SF Pro Text", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
                }}
              >
                {caption}
              </p>
            ) : null}
            <div className="flex aspect-[3/4] items-center justify-center overflow-hidden rounded-[28px] bg-[#f5f5f7]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={alt} className="h-full w-full object-cover" />
            </div>
          </div>
        ))
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
