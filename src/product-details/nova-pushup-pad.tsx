import { BrandFrame } from "@/components/product-detail/brand-frame";
import Image from "next/image";
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
 * NOVA · 푸쉬업 패드
 * 섹션 골격은 void-laptop-portable-v2.tsx와 동일하게 유지한다.
 * 아이콘: Lucide (https://lucide.dev)
 */
export default function NovaPushupPadPage() {
  return (
    <BrandFrame brand="nova">
      {/* 1. 제품 히어로 */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #FFE2D5 0%, #FFECE4 58%, #FFF5F0 82%, #ffffff 100%)",
        }}
      >
        <div className="relative px-4 pb-[4.4rem] pt-28">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/nova/pushup-pad/hero.webp"
            alt="그레이와 오렌지 색상의 Nova 푸쉬업 패드 한 세트"
            className="mx-auto h-auto w-full max-w-[860px] object-contain"
            style={{
              maxHeight: 700,
              marginTop: 380,
              filter: "drop-shadow(0 24px 48px rgba(29,29,31,0.18))",
              transform: "scale(1.5) translateY(-48px)",
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
                  "linear-gradient(105deg, #2B201D 0%, #7F3826 50%, #2B201D 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                width: "fit-content",
              }}
            >
              Nova Push-Up Pad
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
              손목 부담을 덜다.
            </h2>
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
            손목에는 생각보다 많은 부담이 쌓입니다. 바닥을
            <br />
            짚는 순간, 손목은 꺾이고 동작에 집중해야 할
            <br />
            시간은 짧아지죠. Nova Push-Up Pad는 손이 닿는 각도를
            <br />
            자연스럽게 받쳐, 손목의 부담은 덜고 푸쉬업에
            <br />
            온전히 집중할 수 있도록 돕습니다. 이제 손목을
            <br />
            걱정하기보다 한 번 더,
            <br />
            제대로 밀어보세요.
          </p>
        </div>
      </section>

      {/* 2. 기능 + 스토리 */}
      <section className="bg-white px-12 pb-36 pt-[8.8rem]">
        <div className="flex flex-col gap-48">
          {/* 문제 공감 */}
          <FeatureBlock
            title={
              <>
                푸쉬업을 멈추게 하는 건,
                <br />
                가슴이 아니라 손목이니까.
              </>
            }
            photoLabel="사진 — 맨손 푸쉬업 중 손목이 부담스러워 잠시 멈춘 모습 (측면 클로즈업)"
            photoSrc="/assets/nova/pushup-pad/pushup.webp"
            photoAlt="맨손 푸쉬업 중 손목 통증을 느끼는 사람"
          >
            몇 세트만 해도 손목이 뻐근해지고, 자세가 무너지면 푸쉬업은 금방
            미뤄집니다. 의지가 부족한 게 아닙니다. 손목이 버틸 수 있는 자세가
            필요했을 뿐이죠.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                손목을 꺾는 대신,
                <br />
                패드가 받칩니다.
              </>
            }
            photoLabel="사진 — 회색 패드 위 손 위치 클로즈업"
            photoSrc="/assets/nova/pushup-pad/wrist-alignment-compare-v2.webp"
            photoAlt="맨손 푸쉬업과 푸쉬업 패드를 사용한 동작의 손목 부담 비교"
            aspect="2 / 3"
          >
            바닥을 짚는 순간, 손목과 팔의 선은 쉽게 꺾입니다. 패드 위에서는 손바닥이
            높아져 전완과 손목이 한층 자연스럽게 이어집니다. 손목 한곳에 몰리던 부담은
            손바닥 전체로 나누고, 힘은 푸쉬업 동작에 더 온전히 집중할 수 있도록
            설계했습니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                하나의 패드.
                <br />
                다양한 운동의 시작.
              </>
            }
            photoGrid={[
              {
                title: "표준 푸쉬업",
                photoLabel: "사진 — 표준 푸쉬업 자세",
                photoSrc: "/assets/nova/pushup-pad/11.webp",
                photoAlt: "푸쉬업 패드를 어깨너비로 놓고 하는 표준 푸쉬업",
              },
              {
                title: "와이드 푸쉬업",
                photoLabel: "사진 — 양손 간격을 넓힌 와이드 푸쉬업 자세",
                photoSrc: "/assets/nova/pushup-pad/22.webp",
                photoAlt: "푸쉬업 패드 간격을 넓게 벌린 와이드 푸쉬업",
              },
              {
                title: "다이아몬드 푸쉬업",
                photoLabel: "사진 — 패드를 가깝게 놓은 다이아몬드 푸쉬업 자세",
                photoSrc: "/assets/nova/pushup-pad/33.webp",
                photoAlt: "푸쉬업 패드를 가깝게 놓고 하는 다이아몬드 푸쉬업",
              },
              {
                title: "인클라인 푸쉬업",
                photoLabel: "사진 — 높은 곳에 패드를 놓은 인클라인 푸쉬업 자세",
                photoSrc: "/assets/nova/pushup-pad/44.webp",
                photoAlt: "푸쉬업 패드를 짚고 상체를 밀어 올리는 푸쉬업 자세",
              },
            ]}
          >
            표준으로 가슴 전체를. 와이드로 가슴 바깥쪽을. 다이아몬드로 삼두를.
            인클라인과 디클라인으로 강도를 조절하세요. 패드 한 세트면, 매번
            같은 푸쉬업만 반복하지 않아도 됩니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                땀이 나도,
                <br />
                자세는 밀리지 않게.
              </>
            }
            photoLabel="사진 — 상단 그립과 하단 논슬립 질감 비교"
            photoSrc="/assets/nova/pushup-pad/sweat-grip-use.webp"
            photoAlt="물기가 있는 손으로 푸쉬업 패드를 짚고 운동하는 모습"
            aspect="8 / 5"
            additionalPhotoSrc="/assets/nova/pushup-pad/wet-grip-detail.webp"
            additionalPhotoAlt="물기가 맺힌 푸쉬업 패드의 상단 그립 표면"
            additionalPhotoAspect="3 / 4"
          >
            손이 닿는 위쪽은 그립감 있게. 바닥에 닿는 아래쪽은 단단하게. 땀이
            차도 손이 밀리지 않고, 마룻바닥이나 매트 위에서도 패드가 제자리를
            지킵니다. 자세를 잡느라 힘을 빼지 마세요. 푸쉬업에만 집중하면
            됩니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                충격에 강한,
                <br />
                6cm 고밀도 쿠션.
              </>
            }
            photoLabel="사진 — 패드 압축 전후, 푸쉬업 동작"
            photoSrc="/assets/nova/pushup-pad/1.webp"
            photoAlt="6cm 두께의 고밀도 쿠션 구조를 표현한 이미지"
            additionalPhotoLabel="사진 — 6cm 고밀도 쿠션의 두께와 복원력을 보여주는 장면"
            additionalPhotoSrc="/assets/nova/pushup-pad/cushion-material-gray.webp"
            additionalPhotoAlt="그레이와 오렌지 입자로 푸쉬업 패드의 고밀도 소재를 표현한 이미지"
            widePhotoSrc="/assets/nova/pushup-pad/cushion-side-grip.webp"
            widePhotoAlt="손으로 잡은 푸쉬업 패드의 6cm 측면 두께"
          >
            6cm 고밀도 EVA 폼은 내려갈 때의 충격은 받아주고, 버텨야 할 때는
            자세를 무너지지 않게 받칩니다. 너무 물러서 손이 가라앉는 쿠션이
            아니라, 매 세트 같은 자세를 이어갈 수 있는 단단한 쿠션입니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                한 개 68g.
                <br />
                어디서든 가볍게.
              </>
            }
            photoLabel="사진 — 가방·호텔·홈트 사용 장면"
            photoSrc="/assets/nova/pushup-pad/무게.webp"
            photoAlt="전자저울 위에 놓인 68g 푸쉬업 패드"
            additionalPhotoSrc="/assets/nova/pushup-pad/portable-bag.webp"
            additionalPhotoAlt="푸쉬업 패드를 운동 가방에 넣는 모습"
            thirdPhotoSrc="/assets/nova/pushup-pad/lightweight-hand.webp"
            thirdPhotoAlt="한 손으로 가볍게 들어 올린 푸쉬업 패드"
          >
            양손 한 세트여도 136g. 스마트폰보다 가볍게, 가방 한쪽에 들어갑니다.
            거실 바닥에서. 출장 간 호텔에서. 사무실의 짧은 빈 시간에도. 공간이
            없어서, 도구가 무거워서 운동을 미루는 일은 줄어듭니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
운동이 끝난 뒤에도,
                <br />
공간에 남는 디자인.
              </>
            }
            photoLabel="사진 — 그레이 패드 제품 단독 컷"
            photoSrc="/assets/nova/pushup-pad/gray-lifestyle.webp"
            photoAlt="차분한 공간에 놓인 그레이와 오렌지 컬러의 푸쉬업 패드"
          >
차분한 그레이에 선명한 오렌지 포인트를 더했습니다. 숨겨두어야 할 운동
도구가 아니라, 어느 공간에 놓아도 자연스럽게 어우러지는 하나의 오브제. 눈에
보이는 곳에 두고, 필요할 때 바로 다음 세트를 시작하세요.
          </FeatureBlock>
        </div>
      </section>

      {/* 3. 자극 부위 — 제품이 돕는 동작의 목적을 시각화 */}
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
          푸쉬업에 쓰이는 근육.
        </h2>
        <p
          className="mx-auto mt-8 max-w-[680px] text-center text-[26px] font-medium leading-[1.6] tracking-[-0.01em]"
          style={{ color: "#6e6e73" }}
        >
          표준 푸쉬업을 기준으로, 상체를 밀어내는 근육부터 자세를 지탱하는
          <br />
          근육까지 상대적 참여도를 1–5로 나눠 표시했습니다.
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
                body: "대흉근 · 상완삼두근",
                color: "#C93D1B",
              },
              {
                level: 4,
                title: "많이 사용",
                body: "전면 삼각근 · 전거근",
                color: "#E96843",
              },
              {
                level: 3,
                title: "보통 사용",
                body: "복직근 · 외복사근 · 내복사근 · 광배근",
                color: "#EE967B",
              },
              {
                level: 2,
                title: "보조적으로 사용",
                body: "승모근 · 척추기립근 · 다열근 · 둔근 · 대퇴사두근 · 전완",
                color: "#F4C8B8",
              },
              {
                level: 1,
                title: "자세를 안정시키며 사용",
                body: "후면 삼각근 · 이두근 · 햄스트링 · 비복근 · 가자미근",
                color: "#F8E7E0",
              },
            ].map(({ level, title, body, color }) => (
              <div key={level} className="border-b border-[#ecdcd5] py-7 first:border-t [&:nth-child(2)]:border-t">
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
          숫자는 표준 푸쉬업의 상대적 참여도를 뜻하며, 손 위치·각도·개인별
          자세에 따라 달라질 수 있습니다.
        </p>
      </section>

      {/* 4. 이런 분께 — 푸쉬업을 미루는 이유를 좁혀 주는 자리 */}
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
          푸쉬업을 포기할 이유를 하나씩 줄이고 싶은 분들입니다.
        </p>

        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-14">
          {[
            {
              scene: "손목이 먼저 아픈 분",
              line: "가슴보다 손목이 먼저 끝났다면. 손목 부담을 덜어주는 자세부터 다시 시작하세요.",
              photoLabel: "사진 — 손목 부담 때문에 푸쉬업을 멈춘 사람의 측면 컷",
              photoSrc: "/assets/nova/pushup-pad/wrist-strain.webp",
              photoAlt: "손목 부담 때문에 푸쉬업을 멈춘 사람의 측면 컷",
            },
            {
              scene: "홈트를 꾸준히 하시는 분",
              line: "거창한 홈짐보다, 꺼내는 데 망설임 없는 도구 하나가 더 오래 갑니다.",
              photoLabel:
                "사진 — 거실 매트 위에서 푸쉬업 패드를 사용하는 홈트 장면",
              photoSrc: "/assets/nova/pushup-pad/home-workout.webp",
              photoAlt: "거실 매트 위에서 푸쉬업 패드를 사용하는 홈트 장면",
            },
            {
              scene: "푸쉬업바가 불편한 분",
              line: "흔들리는 손잡이보다 손바닥 전체를 받치는 쪽이 편하다면 잘 맞습니다.",
              photoLabel: "사진 — 푸쉬업바 대신 회색 패드를 짚은 손 클로즈업",
              photoSrc: "/assets/nova/pushup-pad/pushup-bar-discomfort.webp",
              photoAlt: "푸쉬업바를 잡고 손목에 부담을 느끼는 모습",
            },
            {
              scene: "여행에도 운동을 하시는 분",
              line: "한 세트 136g. 가방 한쪽에 넣고, 어디서든 익숙한 루틴을 이어가세요.",
              photoLabel:
                "사진 — 운동 가방 또는 호텔 바닥 위 푸쉬업 패드 사용 장면",
              photoSrc: "/assets/nova/pushup-pad/travel-hotel.webp",
              photoAlt: "호텔 바닥에서 푸쉬업하는 여행 중 홈트 장면",
            },
          ].map(({ scene, line, photoLabel, photoSrc, photoAlt }) => (
            <div key={scene}>
              {photoSrc ? (
                <div
                  className="relative w-full overflow-hidden rounded-[24px] bg-[#f5f5f7]"
                  style={{ aspectRatio: "4 / 5" }}
                >
                  <Image
                    src={photoSrc}
                    alt={photoAlt ?? ""}
                    fill
                    sizes="(max-width: 768px) 50vw, 384px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div
                  className="flex w-full items-center justify-center overflow-hidden rounded-[24px] bg-[#f5f5f7]"
                  style={{ aspectRatio: "4 / 5" }}
                >
                  <span
                    className="px-6 text-center text-[19px] font-medium leading-[1.5]"
                    style={{ color: "#b8b8bd" }}
                  >
                    {photoLabel}
                  </span>
                </div>
              )}
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

      {/* 4. 스펙 하이라이트 — 숫자를 문단에서 꺼내 크게 */}
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
              backgroundImage: "linear-gradient(90deg, #8F2F1B, #E4572A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Nova Push-Up Pad.
          </span>
        </h2>

        <div className="mt-20 grid grid-cols-2 gap-6">
          {[
            { value: "68", unit: "g", label: "한 개 무게" },
            { value: "136", unit: "g", label: "양손 한 세트" },
            { value: "6", unit: "cm", label: "패드 높이" },
            { value: "20×13", unit: "cm", label: "한 개 기준 크기" },
          ].map(({ value, unit, label }) => {
            const isCompactValue = value === "20×13";

            return (
              <div
                key={label}
                className="flex flex-col items-center justify-center rounded-[28px] bg-white px-8 py-16 text-center"
              >
                <p
                  className={`w-full whitespace-nowrap text-center font-bold leading-none tracking-[-0.03em] ${
                    isCompactValue ? "text-[68px]" : "text-[84px]"
                  }`}
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
                  {value}
                  <span
                    className={`ml-[0.08em] font-semibold ${
                      isCompactValue ? "text-[30px]" : "text-[38px]"
                    }`}
                  >
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
            );
          })}
        </div>
      </section>

      {/* 5. 신뢰 배지 — 구매 직전 불안 제거 */}
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
              title: "고밀도 EVA 소재",
              body: "6cm EVA 폼이 체중을 안정적으로 받칩니다.",
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
                className="mt-1 h-12 w-12 shrink-0 text-[#E4572A]"
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

      {/* 6. 클로징 — 설득 파트의 마지막, 정보 파트로 넘어가기 전 */}
      <section
        className="px-12 pb-40 pt-36"
        style={{
          background: "linear-gradient(180deg, #ffffff, #FFE7DC 60%, #FFD8C7)",
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
          푸쉬업의 안정감은,
          <br />
          손목에서 시작됩니다.
        </h2>
        <p
          className="mx-auto mt-10 max-w-[680px] text-center text-[28px] font-medium leading-[1.6] tracking-[-0.01em]"
          style={{
            color: "#684238",
            fontFamily:
              '"SF Pro KR", "SF Pro Text", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          운동 방식을 바꾸거나, 푸쉬업 횟수를 줄일 필요는 없습니다.
          <br />
          손목을 받치는 변화가, 동작의 안정감을 더합니다.
        </p>

        <PhotoSlot
          label="사진 — 푸쉬업 패드에 손을 올리고 운동하는 장면"
          aspect="16 / 10"
          src="/assets/nova/pushup-pad/pushup_studio_product_light.webp"
          alt="푸쉬업 패드에 손을 올리고 운동하는 모습"
        />

        <p
          className="mt-20 text-center text-[52px] font-semibold leading-tight tracking-[-0.02em]"
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
          Nova Push-Up Pad
        </p>
        <p
          className="mt-3 text-center text-[28px] font-normal leading-snug tracking-[-0.01em]"
          style={{ color: "#74554C" }}
        >
          손목 부담을 덜다.
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
              q: "푸쉬업바와 무엇이 다른가요?",
              a: "푸쉬업바가 좁은 손잡이를 잡는 방식이라면, Nova Push-Up Pad는 손바닥 전체를 받치고 손가락 위치를 잡아주는 방식입니다. 높이만 더하는 것보다, 손이 닿는 자세와 안정감에 집중했습니다.",
            },
            {
              q: "손목이 불편한데 사용해도 되나요?",
              a: "그루브와 비대칭 높이 설계가 푸쉬업 자세에서 손목이 과하게 꺾이는 부담을 덜도록 돕습니다. 다만 통증이 지속되거나 기존 손목 부상이 있다면 사용을 멈추고 의료 전문가와 상담해 주세요. 본 제품은 운동 보조용품이며 의료기기가 아닙니다.",
            },
            {
              q: "땀이 나도 미끄러지지 않나요?",
              a: "제품 전체가 EVA 폼으로 구성되어 있으며, 손이 닿는 위쪽과 바닥에 닿는 아래쪽에는 각각의 역할에 맞는 표면 질감을 적용했습니다. 물기나 땀은 사용 후 바로 닦아 주시고, 마룻바닥이나 요가매트처럼 평평하고 마른 바닥에서 사용해 주세요.",
            },
            {
              q: "푸쉬업을 처음 하는 사람도 쓸 수 있나요?",
              a: "네. 무릎 푸쉬업처럼 부담이 적은 동작부터 천천히 시작해 보세요. 횟수보다 자세가 무너지기 전에 멈추는 것이 더 중요합니다.",
            },
            {
              q: "어떤 푸쉬업 동작이 가능한가요?",
              a: "표준, 와이드, 다이아몬드, 인클라인·디클라인 푸쉬업에 활용할 수 있습니다. 패드 간격과 위치를 바꾸면 같은 푸쉬업도 다른 방식으로 이어갈 수 있어요.",
            },
            {
              q: "들고 다니기 부담 없나요?",
              a: "한 개 68g, 양손 한 세트는 136g입니다. 한 개 기준 20 × 13 × 6cm로 운동 가방이나 캐리어 한쪽에 넣기 좋습니다.",
            },
            {
              q: "어떻게 세척하고 보관하나요?",
              a: "사용 후 마른 천이나 살짝 적신 천으로 닦고, 그늘에서 자연 건조해 주세요. EVA 소재 변형을 막기 위해 세제·알코올·표백제 사용과 고온·직사광선 보관은 피해 주세요.",
            },
          ].map(({ q, a }) => (
            <li key={q} className="border-t border-[#d2d2d7] py-7 last:border-b">
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
          label="사진 — 그레이 푸쉬업 패드 한 개의 가로·세로·높이 치수 안내 컷 (20 × 13 × 6cm)"
          aspect="3 / 4"
          src="/assets/nova/pushup-pad/size-top-v2.webp"
          alt="가로 130mm, 세로 200mm 푸쉬업 패드 사이즈 안내"
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

        <figure className="mt-24 text-center">
          <div
            className="relative w-full overflow-hidden rounded-[28px] bg-white"
            style={{ aspectRatio: "4 / 3" }}
          >
            <Image
              src="/assets/nova/pushup-pad/Photoroom_20260809_213220.webp"
              alt="푸쉬업 패드 좌·우 1세트"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              style={{ objectPosition: "center 48%", transform: "scale(0.95)" }}
            />
          </div>
          <figcaption
            className="mt-7 text-[26px] font-semibold tracking-[-0.01em]"
            style={{ color: "#1d1d1f" }}
          >
            푸쉬업 패드 좌·우 각 1개 · 1세트
          </figcaption>
        </figure>
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
            ["품명 및 모델명", "푸쉬업 패드 (Nova Push-Up Pad)"],
            ["재질", "EVA 폼"],
            ["색상", "그레이, 오렌지"],
            ["크기", "200 x 130 x 60 mm (1개 기준)"],
            ["중량", "68g (1개) / 136g (1세트)"],
            ["구성", "푸쉬업 패드 좌·우 1세트"],
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
                "반드시 평평하고 안정적인 바닥에서 사용해 주세요.",
                "물기·기름기·먼지가 많은 바닥에서는 사용을 피해 주세요.",
                "점프성 동작이나 제품에 강한 충격을 주는 사용은 피해 주세요.",
                "사용 중 통증이나 불편함이 느껴지면 즉시 사용을 중단해 주세요.",
                "본 제품은 운동 보조용품이며 의료기기가 아닙니다.",
              ],
            },
            {
              title: "세척 및 보관 방법",
              body: "사용 후 마른 천이나 살짝 적신 천으로 닦고, 그늘에서 자연 건조해 주세요. EVA 소재 변형을 막기 위해 세제·알코올·표백제 사용과 고온·직사광선 보관은 피해 주세요.",
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
                취소나 변경은 실제 출고가 되지 않았을 경우에만 가능합니다. 상품
                출고 후 취소/변경 시 왕복택배비는 구매자 부담입니다.
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
      className="relative mt-16 flex w-full items-center justify-center overflow-hidden rounded-[28px]"
      style={{ aspectRatio: aspect, backgroundColor: "#f5f5f7" }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
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
  photoLabel,
  photoSrc,
  photoAlt = "",
  additionalPhotoLabel,
  additionalPhotoSrc,
  additionalPhotoAlt = "",
  thirdPhotoSrc,
  thirdPhotoAlt = "",
  widePhotoSrc,
  widePhotoAlt = "",
  photoGrid,
  aspect = "3 / 4",
  additionalPhotoAspect = aspect,
}: {
  title: ReactNode;
  children?: ReactNode;
  photoLabel?: string;
  photoSrc?: string;
  photoAlt?: string;
  additionalPhotoLabel?: string;
  additionalPhotoSrc?: string;
  additionalPhotoAlt?: string;
  thirdPhotoSrc?: string;
  thirdPhotoAlt?: string;
  widePhotoSrc?: string;
  widePhotoAlt?: string;
  photoGrid?: readonly {
    title: string;
    photoLabel: string;
    photoSrc?: string;
    photoAlt?: string;
  }[];
  aspect?: string;
  additionalPhotoAspect?: string;
}) {
  return (
    <div>
      <div
        className="flex h-[72px] w-[72px] items-center justify-center rounded-full"
        style={{ border: "3px solid #E4572A" }}
        aria-hidden
      >
        <Check className="h-9 w-9 text-[#E4572A]" strokeWidth={3.5} />
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
        <div className="mt-24 grid grid-cols-2 gap-x-6 gap-y-14">
          {photoGrid.map(({ title, photoLabel, photoSrc, photoAlt = "" }) => (
            <figure key={title}>
              <div
                className="relative flex w-full items-center justify-center overflow-hidden rounded-[24px] bg-[#f5f5f7]"
                style={{ aspectRatio: "4 / 5" }}
              >
                {photoSrc ? (
                  <Image
                    src={photoSrc}
                    alt={photoAlt}
                    fill
                    sizes="(max-width: 768px) 50vw, 384px"
                    className="object-cover"
                  />
                ) : (
                  <span
                    className="px-6 text-center text-[19px] font-medium leading-[1.5]"
                    style={{ color: "#b8b8bd" }}
                  >
                    {photoLabel}
                  </span>
                )}
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
      ) : photoSrc ? (
        <div
          className="relative mt-24 w-full overflow-hidden rounded-[28px]"
          style={{ aspectRatio: aspect, backgroundColor: "#f5f5f7" }}
        >
          <Image
            src={photoSrc}
            alt={photoAlt}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      ) : photoLabel ? (
        <div
          className="mt-24 flex w-full items-center justify-center rounded-[28px]"
          style={{ aspectRatio: aspect, backgroundColor: "#f5f5f7" }}
        >
          <span
            className="px-10 text-center text-[22px] font-medium"
            style={{ color: "#b8b8bd" }}
          >
            {photoLabel}
          </span>
        </div>
      ) : null}

      {additionalPhotoSrc ? (
        <div
          className="relative mt-8 w-full overflow-hidden rounded-[28px]"
          style={{
            aspectRatio: additionalPhotoAspect,
            backgroundColor: "#f5f5f7",
          }}
        >
          <Image
            src={additionalPhotoSrc}
            alt={additionalPhotoAlt}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      ) : additionalPhotoLabel ? (
        <div
          className="mt-8 flex w-full items-center justify-center rounded-[28px]"
          style={{
            aspectRatio: additionalPhotoAspect,
            backgroundColor: "#f5f5f7",
          }}
        >
          <span
            className="px-10 text-center text-[22px] font-medium"
            style={{ color: "#b8b8bd" }}
          >
            {additionalPhotoLabel}
          </span>
        </div>
      ) : null}

      {thirdPhotoSrc ? (
        <div
          className="relative mt-8 w-full overflow-hidden rounded-[28px]"
          style={{ aspectRatio: aspect, backgroundColor: "#f5f5f7" }}
        >
          <Image
            src={thirdPhotoSrc}
            alt={thirdPhotoAlt}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      ) : null}

      {widePhotoSrc ? (
        <div
          className="relative mt-8 w-full overflow-hidden rounded-[28px]"
          style={{ aspectRatio: "16 / 10", backgroundColor: "#f5f5f7" }}
        >
          <Image
            src={widePhotoSrc}
            alt={widePhotoAlt}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      ) : null}

      {children != null && children !== "" ? (
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
      ) : null}
    </div>
  );
}
