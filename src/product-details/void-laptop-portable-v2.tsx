import { BrandFrame } from "@/components/product-detail/brand-frame";
import { getProductDetailFacts } from "@/data/product-detail-facts";
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
 * VOID · 노트북 거치대 휴대용 (v2 — 설득 구조 실험본)
 * 원본: void-laptop-portable.tsx
 * 아이콘: Lucide (https://lucide.dev) — 앞으로 전부 여기 사용
 */
export default function VoidLaptopPortableV2Page() {
  const facts = getProductDetailFacts("void-portable-laptop-stand")!;

  return (
    <BrandFrame brand="void">
      {/* 1. 제품 히어로 — Apple MacBook Air 스타일 */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #D4EAF6, #ffffff 70%, #ffffff)",
        }}
      >
        <div className="relative px-4 pb-[4.4rem] pt-28">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/void/laptop-portable/hero-2.webp"
            alt="노트북이 올려진 검정색 Void 휴대용 노트북 거치대"
            className="mx-auto h-auto w-full max-w-[860px] object-contain"
            style={{
              maxHeight: 780,
              marginTop: 380,
              filter: "drop-shadow(0 24px 48px rgba(29,29,31,0.18))",
            }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-28 z-[1] px-8 text-center"
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
              className="mx-auto mt-2 text-[91px] font-semibold leading-[1.09] tracking-[0em]"
              style={{
                backgroundImage: "linear-gradient(90deg, #022640, #5786AB)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                width: "fit-content",
              }}
            >
              가볍지만. 강력하다.
            </h2>
            <p
              className="mt-4 text-[46px] font-normal leading-[1.24] tracking-[-0.022em]"
              style={{ color: "#bf4800" }}
            >
              <strong className="font-semibold">얇고 강력한 알루미늄 설계</strong>
            </p>
          </div>
          <p
            className="mx-auto mt-20 max-w-[780px] px-4 text-center text-[28px] font-normal leading-[1.5] tracking-[-0.01em]"
            style={{
              color: "#1d1d1f",
              fontFamily:
                '"SF Pro KR", "SF Pro Text", Pretendard, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            알루미늄 합금으로 완성해 더욱 견고하고
            <br />
            안정적인 사용감을 선사하는 노트북 거치대.
            <br />
            6단계 각도 조절로 타이핑부터 영상 시청까지,
            <br />
            <span className="whitespace-nowrap">
              어떤 자세에서도 최적의 작업 환경을 만들어 줍니다.
            </span>
            <br />
            여기에 180g의 놀랍도록 가벼운 무게와
            <br />
            1.5cm까지 접히는 폴딩 디자인까지,
            <br />
            어디든 부담 없이 휴대할 준비가 되어 있죠.
            <br />
            이제 책상 위, 더 편안한 자세로
            <br />
            날아올라 볼까요?
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
                오후 세 시,
                <br />
                목 뒤가 뻐근해지는 이유.
              </>
            }
            imageSrc="/assets/void/laptop-portable/neck-strain.webp"
            imageAlt="책상에서 고개 숙이고 노트북 보는 모습"
            bodyAfterImage
          >
            노트북 화면은 늘 눈높이보다 아래에 있습니다. 그래서 하루 여덟 시간,
            고개를 숙인 채로 일하게 됩니다.{" "}
            <span style={{ color: "#1d1d1f" }}>
              자세가 나쁜 게 아니라, 화면이 낮은 것뿐입니다.
            </span>
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                올려야 하는 것은
                <br />
                목이 아닌 화면.
              </>
            }
            imageSrc="/assets/void/laptop-portable/posture.webp"
            imageAlt="거치대 사용 전후 자세 비교"
            bodyAfterImage
          >
            화면을 눈높이에 가깝게 올리는 것만으로도 시선은 자연스러워지고, 목과
            어깨의 부담은 줄어듭니다. 작은 높이의 차이가 더욱 편안한 작업
            환경을 만들어줍니다.
          </FeatureBlock>

          <FeatureBlock
            title="20°~45° 6단계로."
            imageSrc="/assets/void/laptop-portable/angle-stages-v2.webp"
            imageAlt="20°~45° 6단계로 조절되는 휴대용 노트북 거치대"
            aspect="3 / 4"
            bodyAfterImage
            afterImage={
              <div
                className="mt-16 w-full overflow-hidden rounded-[28px]"
                style={{ aspectRatio: "3 / 4" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/void/laptop-portable/angle-adjustment-detail-v2.webp"
                  alt="6단계 각도 조절 홈 디테일"
                  className="h-full w-full object-cover"
                />
              </div>
            }
          >
            20°부터 45°까지, 6단계 각도 조절을 지원해 사용자의 자세와 작업
            환경에 맞는 가장 편안한 높이를 선택할 수 있습니다. 앉아서 작업할
            때도, 서서 사용할 때도 자연스러운 시선을 유지하며 더욱 편안한
            작업 환경을 만들어줍니다.
          </FeatureBlock>

          <FeatureBlock
            title="가벼움과 견고함을 동시에."
            imageSrc="/assets/void/laptop-portable/weight-180g-v2.webp"
            imageAlt="전자저울 위에서 180g으로 측정된 휴대용 노트북 거치대"
            bodyAfterImage
          >
            약 180g, 아이패드 미니보다 가볍습니다. 그런데도 최대 10kg — 16인치
            맥북 프로를 네 대 쌓아 올려도 버티는 하중을 견딥니다. 언제든 가볍게
            들고 나갈 수 있지만, 사용할 때만큼은 흔들림 없이 단단하게 노트북을
            지지합니다.
          </FeatureBlock>

          <FeatureBlock
            title="어디든 함께하는 작업 환경."
            imageSrc="/assets/void/laptop-portable/backpack-portability-v2.webp"
            imageAlt="백팩 주머니에 휴대용 노트북 거치대를 넣은 모습"
            bodyAfterImage
            afterImage={
              <div
                className="mt-16 w-full overflow-hidden rounded-[28px]"
                style={{ aspectRatio: "3 / 4" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/void/laptop-portable/cafe-portability-v2.webp"
                  alt="카페 테이블 위 노트북과 접힌 휴대용 노트북 거치대"
                  className="h-full w-full object-cover"
                />
              </div>
            }
          >
            접으면 두께 1.5cm. 노트북 파우치에 함께 넣어도 표가 나지 않는
            두께입니다. 카페에서도, 출장지 호텔 책상에서도, 노트북을 펼칠 수
            있는 공간이라면 어디든 같은 작업 환경을 만들 수 있습니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                성능을 유지하는
                <br />
                가장 단순한 방법.
              </>
            }
            imageSrc="/assets/void/laptop-portable/cooling-airflow-v2.webp"
            imageAlt="노트북 아래 공기 흐름을 보여주는 휴대용 노트북 거치대"
            bodyAfterImage
          >
            높아진 화면은 자세만 바꾸는 것이 아닙니다. 노트북 아래로 공기가
            원활하게 흐르며 열을 보다 효과적으로 배출해 안정적인 작업 환경을
            유지합니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                노트북을 지키는
                <br />
                섬세한 디테일.
              </>
            }
            imageSrc="/assets/void/laptop-portable/silicone-protection-detail-v2.webp"
            imageAlt="노트북 보호용 실리콘 패드가 적용된 휴대용 노트북 거치대"
            bodyAfterImage
          >
            노트북이 닿는 부분에는 부드러운 실리콘 패드를 적용했습니다.
            미끄러짐을 줄이고 스크래치를 방지해, 소중한 기기를 더욱 안정적이고
            안전하게 보호합니다.
          </FeatureBlock>

          <FeatureBlock
            title="태블릿부터 노트북까지."
            imageSrc="/assets/void/laptop-portable/tablet-compatibility-v2.webp"
            imageAlt="휴대용 노트북 거치대에 세로로 놓인 태블릿"
            bodyAfterImage
            afterImage={
              <div
                className="mt-16 w-full overflow-hidden rounded-[28px]"
                style={{ aspectRatio: "3 / 4" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/void/laptop-portable/laptop-compatibility-v2.webp"
                  alt="휴대용 노트북 거치대에 놓인 노트북"
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
            imageSrc="/assets/void/laptop-portable/C025B579-A275-4E79-AC56-D78BD6D742AA.webp"
            imageAlt="블랙 휴대용 노트북 거치대"
            bodyAfterImage
            afterImage={
              <div
                className="mt-16 w-full overflow-hidden rounded-[28px]"
                style={{ aspectRatio: "3 / 4" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/void/laptop-portable/black-portable-carry-v2.webp"
                  alt="노트북과 함께 든 블랙 휴대용 노트북 거치대"
                  className="h-full w-full object-cover"
                />
              </div>
            }
          >
            깊이 있는 블랙 컬러는 어떤 공간에도 자연스럽게 어우러집니다.
            미니멀한 디자인과 프리미엄 알루미늄 소재가 만나 더욱 세련된 데스크
            환경을 완성합니다.
          </FeatureBlock>
        </div>
      </section>

      {/* [신규] 사용 장면 — 180g 접이식이 만드는 이동의 이야기 */}
      <section className="bg-white px-12 pb-36 pt-32">
        <h2
          className="text-center text-[58px] font-bold leading-tight tracking-[-0.025em]"
          style={{
            color: "#1d1d1f",
            fontFamily:
              '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          어디를 가든, 같은 자세로.
        </h2>
        <p
          className="mx-auto mt-8 max-w-[640px] text-center text-[26px] font-medium leading-[1.6] tracking-[-0.01em]"
          style={{ color: "#6e6e73" }}
        >
          자리를 옮긴다고 목이 다시 숙여질 이유는 없습니다.
        </p>

        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-14">
          {[
            {
              scene: "집 책상에서",
              line: "매일 앉는 자리에 펼쳐 두세요. 화면이 올라간 만큼 고개는 내려가지 않습니다.",
              imageSrc:
                "/assets/void/laptop-portable/E05940D6-F169-4142-9134-1301D6592E7D.webp",
              imageAlt: "집 책상에 펼쳐 사용 중인 VOID 노트북 거치대",
            },
            {
              scene: "카페에서",
              line: "낮은 테이블일수록 차이가 큽니다. 접힌 채로 가방에서 꺼내 바로 펼치면 끝.",
              imageSrc:
                "/assets/void/laptop-portable/D21AE67D-9CCC-45F0-833D-4E3C62B6A870.webp",
              imageAlt: "카페 테이블 위에서 사용 중인 VOID 노트북 거치대",
            },
            {
              scene: "사무실에서",
              line: "회의실로 옮겨 앉아도 그대로 들고 갑니다. 180g이라 손에 든 줄도 모르죠.",
              imageSrc:
                "/assets/void/laptop-portable/AFA6616D-02E5-4681-92F3-A1A783C8A20F.webp",
              imageAlt: "노트북과 함께 들고 이동하는 VOID 노트북 거치대",
            },
            {
              scene: "출장지에서",
              line: "호텔 책상은 늘 애매합니다. 파우치에 함께 넣어 두면 어디서든 같은 높이.",
              imageSrc:
                "/assets/void/laptop-portable/9C936CB0-3188-4007-8FC8-BB2B7EA6FB30.webp",
              imageAlt: "파우치에서 꺼내 호텔 책상에서 사용하는 VOID 노트북 거치대",
            },
          ].map(({ scene, line, imageSrc, imageAlt }) => (
            <div key={scene}>
              <div
                className="flex w-full items-center justify-center overflow-hidden rounded-[24px] bg-[#f5f5f7]"
                style={{ aspectRatio: "4 / 5" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="h-full w-full object-cover"
                />
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
          숫자로 보는 Void Stand.
        </h2>

        <div className="mt-20 grid grid-cols-2 gap-6">
          {[
            { value: "180", unit: "g", label: "무게" },
            { value: "10", unit: "kg", label: "최대 하중" },
            { value: "6", unit: "단계", label: "각도 조절" },
            { value: "1.5", unit: "cm", label: "접힘 두께" },
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
              title: "10kg 하중 테스트",
              body: "정격 하중 기준으로 반복 테스트를 거친 알루미늄 합금 구조입니다.",
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
          180g으로 바꾸는
          <br />
          하루 여덟 시간.
        </h2>
        <p
          className="mx-auto mt-10 max-w-[680px] text-center text-[28px] font-medium leading-[1.6] tracking-[-0.01em]"
          style={{
            color: "#4a5a66",
            fontFamily:
              '"SF Pro KR", "SF Pro Text", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          책상을 바꾸지 않아도, 의자를 바꾸지 않아도 됩니다. 화면 높이 하나만
          올리면 오늘 저녁의 목 상태가 달라집니다.
        </p>

        <div className="mt-16 w-full" style={{ aspectRatio: "4 / 3" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/void/laptop-portable/hero-2.webp"
            alt="노트북이 올려진 블랙 휴대용 노트북 거치대"
            className="h-full w-full object-contain"
            style={{ filter: "drop-shadow(0 24px 48px rgba(29,29,31,0.14))" }}
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
          Void Portable Laptop Stand
        </p>
        <p
          className="mt-3 text-center text-[28px] font-normal leading-snug tracking-[-0.01em]"
          style={{ color: "#6e7e8a" }}
        >
          가볍지만. 강력하다.
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
          {facts.faq.map(({ question: q, answer: a }) => (
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

        <div className="mx-auto mt-24 max-w-[780px] overflow-hidden rounded-[28px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/void/laptop-portable/size.webp"
            alt="Void 휴대용 노트북 거치대의 펼친 크기와 접힌 크기 안내"
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

        <div className="mx-auto mt-24 w-full max-w-[780px] text-center">
          <div
            className="w-full overflow-hidden rounded-[28px] bg-white"
            style={{ aspectRatio: "3 / 4" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/void/laptop-portable/included-components-v2.webp"
              alt="휴대용 노트북 거치대 본체와 휴대용 파우치 구성품"
              className="h-full w-full object-cover"
            />
          </div>
          <p
            className="mt-6 text-[32px] font-semibold tracking-[-0.01em]"
            style={{ color: "#1d1d1f" }}
          >
            알루미늄 거치대 본체 x1 · 휴대용 파우치 x1
          </p>
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
          {facts.productInformation.map(([label, value]) => (
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
                "제품을 무리하게 접거나 펼치지 마세요.",
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
