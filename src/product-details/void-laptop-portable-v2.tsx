import { BrandFrame } from "@/components/product-detail/brand-frame";
import { ReviewSection } from "@/components/product-detail/review-section";
import type { ReactNode } from "react";
import {
  Check,
  PackageCheck,
  RefreshCw,
  ShieldCheck,
  Wrench,
} from "lucide-react";

/**
 * VOID · 노트북 거치대 휴대용
 * 아이콘: Lucide (https://lucide.dev) — 앞으로 전부 여기 사용
 */
export default function VoidLaptopPortableV2Page() {
  return (
    <BrandFrame brand="void">
      <div className="[&_p]:break-keep [&_p]:text-pretty [&_h2]:break-keep [&_h3]:break-keep [&_li]:break-keep [&_dt]:break-keep [&_dd]:break-keep [&_th]:break-keep [&_td]:break-keep">
      {/* 제품 히어로 — 전체 배경 사진 위에 카피 배치 */}
      <section className="relative min-h-[1500px] overflow-hidden bg-[#e5eef4]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/sync-2026-10-29/void/laptop-portable/closing-premium-blue-v1.webp" alt="닫힌 노트북과 파우치 옆에 슬림하게 접어 둔 블랙 휴대용 노트북 거치대" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(245,250,255,0.42) 14%, transparent 36%, transparent 65%, rgba(8,28,45,0.76) 100%)" }} aria-hidden />
        <div className="relative z-10 flex min-h-[1500px] flex-col px-12 pb-24 pt-20 text-center">
          <div style={{ textShadow: "0 2px 18px rgba(255,255,255,0.65)" }}>
            <p className="text-[41px] font-semibold leading-[1.25] tracking-[0.007em] text-[#3d5a6e]">Void Laptop Stand</p>
            <h1 className="mx-auto mt-2 w-fit whitespace-nowrap text-[85px] font-bold leading-[1.15] tracking-[-0.025em] text-[#022640]">가볍지만. 강력하다.</h1>
          </div>
          <p className="mx-auto mt-auto max-w-[780px] text-[28px] font-medium leading-[1.5] tracking-[-0.01em] text-white" style={{ textShadow: "0 2px 12px rgba(8,28,45,0.8)" }}>
            펼치면 편안하게, 접으면 가볍게.<br />
            180g의 알루미늄 바디와 6단계 각도 조절로<br />
            어디서든 나에게 맞는 작업 환경을.
          </p>
        </div>
      </section>

      {/* 제품 오버뷰 — 제품 구조가 보이는 전체 배경 사진 */}
      <section className="relative aspect-[3/5] overflow-hidden bg-[#edf6fb]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/sync-2026-10-29/void/laptop-portable/product-overview-premium-blue-v1.webp" alt="블루 그레이 공간에 펼쳐진 휴대용 거치대의 X자 구조와 실리콘 패드" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-x-0 top-32 z-10 px-8 text-center" style={{ textShadow: "0 2px 18px rgba(255,255,255,0.7)" }}>
          <h2 className="text-[68px] font-bold leading-[1.05] tracking-[-0.035em]"><span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(105deg, #022640 0%, #5786AB 50%, #022640 100%)", textShadow: "none" }}>Void Laptop Stand</span></h2>
          <p className="mt-6 text-[26px] font-medium tracking-[-0.015em] text-[#3d5a6e]">휴대용 노트북 거치대 · 가볍게 접어 어디든.</p>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[22%]" style={{ background: "linear-gradient(180deg, rgba(245,245,247,0) 0%, #f5f5f7 100%)" }} aria-hidden />
      </section>

      {/* 한눈에 보는 핵심 사양 */}
      <section className="bg-[#f5f5f7] px-12 pb-36 pt-32">
        <h2
          className="text-center text-[58px] font-bold leading-tight tracking-[-0.025em]"
          style={{
            color: "#1d1d1f",
            fontFamily:
              '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          한눈에 보는<br /><span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #022640, #5786AB)" }}>Void Laptop Stand</span>
        </h2>

        <div className="mt-20 grid grid-cols-2 gap-6">
          {[
            { value: "180", unit: "g", label: "무게" },
            { value: "10", unit: "kg", label: "최대 하중" },
            { value: "6", unit: "단계", label: "각도 조절" },
            { value: "1.5", unit: "cm", label: "접힘 두께" },
            { value: "20–45", unit: "°", label: "각도 조절 범위" },
            { value: "10–17", unit: "인치", label: "호환 기기 크기" },
          ].map(({ value, unit, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center rounded-[28px] bg-white px-8 py-16 text-center"
            >
              <p
                className={`inline-flex h-[84px] w-full items-baseline justify-center whitespace-nowrap text-center font-bold leading-none tracking-[-0.03em] ${value.length >= 5 ? "text-[60px]" : "text-[76px]"}`}
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
                <span className="ml-[0.08em] text-[34px] font-semibold">
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

      {/* 제품 포커스 — 구조와 실루엣 */}
      <section
        className="overflow-hidden px-12 py-40 text-center"
        style={{
          background: "linear-gradient(180deg, #f5f5f7 0px, #ffffff 320px)",
        }}
      >
        <p className="text-[20px] font-bold tracking-[0.14em] text-[#0071e3]">
          FORM FOLLOWS FUNCTION
        </p>
        <h2 className="mt-8 text-[64px] font-bold leading-[1.15] tracking-[-0.035em] text-[#1d1d1f]">
          필요한 기능만,
          <br />
          가볍게 담았습니다.
        </h2>
        <p className="mx-auto mt-8 whitespace-nowrap text-[27px] font-medium leading-[1.65] text-[#6e6e73]">
          각도 조절부터 기기 보호까지, 슬림한 바디 하나에.
        </p>
        <div className="mx-auto mt-20 flex aspect-[3/4] max-w-[780px] items-center justify-center overflow-hidden rounded-[32px] border border-[#e5e5e7] bg-white shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/sync-2026-10-29/void/laptop-portable/product-focus-premium-blue-v1.webp"
            alt="X자 연결부와 각도 조절 홈, 실리콘 패드가 선명하게 보이는 블랙 휴대용 노트북 거치대"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-8 grid grid-cols-3 gap-5">
          {[
            ["접이식 바디", "접으면 두께 1.5cm"],
            ["6단계 조절", "작업에 맞는 각도 선택"],
            ["실리콘 패드", "기기 접촉부 보호"],
          ].map(([title, body]) => (
            <div
              key={title}
              className="rounded-[24px] border border-[#d5e5f1] bg-white/80 px-5 py-8"
            >
              <p className="text-[24px] font-bold text-[#1d1d1f]">{title}</p>
              <p className="mt-3 text-[18px] font-medium leading-[1.5] text-[#6e6e73]">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 책상 위 직접 사용 비교 */}
      <section className="bg-white px-12 pb-36 pt-36">
        <h2 className="text-center text-[58px] font-bold leading-tight tracking-[-0.03em]">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #022640, #5786AB)",
            }}
          >
            Void Laptop Stand
          </span>
          <br />
          <span className="text-[61px]">나에게 맞는 이유.</span>
        </h2>
        <div className="mt-20 overflow-hidden rounded-[28px] border border-[#d2d2d7] bg-white">
          <table className="w-full table-fixed border-collapse text-center">
            <caption className="sr-only">
              책상 위에 노트북을 직접 놓고 사용할 때와 Void Laptop Stand 사용 비교
            </caption>
            <thead>
              <tr className="bg-[#f5f5f7]">
                <th className="w-[27%] px-4 py-7 text-[25px] font-bold text-[#1d1d1f]">
                  비교 항목
                </th>
                <th className="border-l border-[#d2d2d7] px-4 py-7 text-[23px] font-bold leading-tight text-[#1d1d1f]">
                  책상 위
                  <br />
                  직접 사용
                </th>
                <th className="border-l border-[#d2d2d7] bg-[#e3f0fa] px-4 py-7 text-[24px] font-bold leading-tight text-[#285875]">
                  Void
                  <br />
                  Laptop Stand
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["시선 높이", "낮은 화면", "화면을 더 높게"],
                ["각도 조절", "책상 위에 고정", "20°~45° 6단계"],
                ["외부 작업", "책상 높이에 맞춰 사용", "휴대해 각도 조절"],
                ["발열 관리", "바닥과 밀착", "오픈형 방열 구조"],
                ["사용 후 보관", "그대로 놓아두기", "1.5cm로 슬림하게 접기"],
              ].map(([label, desk, stand]) => (
                <tr key={label} className="border-t border-[#d2d2d7]">
                  <th className="px-4 py-8 text-[23px] font-semibold leading-snug text-[#1d1d1f]">
                    {label}
                  </th>
                  <td className="border-l border-[#d2d2d7] px-4 py-8 text-[21px] font-semibold leading-snug text-[#86868b]">
                    {desk}
                  </td>
                  <td className="border-l border-[#d2d2d7] bg-[#f0f7fc] px-4 py-8 text-[22px] font-bold leading-snug text-[#285875]">
                    {stand}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
            imageSrc="/assets/sync-2026-10-29/void/laptop-portable/neck-strain.webp"
            imageAlt="책상에서 고개 숙이고 노트북 보는 모습"
            bodyAfterImage
          >
            낮은 노트북 화면을 보다 보면 고개도 함께 내려갑니다.{" "}
            <span style={{ color: "#1d1d1f" }}>
              더 편안한 작업을 위한 시작, 화면 높이부터 바꿔보세요.
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
            imageSrc="/assets/sync-2026-10-29/void/laptop-portable/posture.webp"
            imageAlt="거치대 사용 전후 자세 비교"
            bodyAfterImage
            supporting={<FeatureSupport items={[["BEFORE", "낮은 화면을 향하는 시선"], ["AFTER", "화면을 올려 편안한 시선"]]} />}
          >
            거치대로 화면을 올려, 고개를 깊이 숙이지 않아도 되는 위치를 찾아보세요.
            책상과 의자 높이에 맞춰 각도를 조절하면 더 편안하게 작업할 수 있습니다.
          </FeatureBlock>

          <FeatureBlock
            title="20°~45° 6단계로."
            imageSrc="/assets/sync-2026-10-29/void/laptop-portable/angle-stages-v2.webp"
            imageAlt="20°~45° 6단계로 조절되는 휴대용 노트북 거치대"
            aspect="3 / 4"
            bodyAfterImage
            supporting={<FeatureSupport items={[["20°–45°", "작업에 맞는 각도 범위"], ["6단계", "조절 홈에 맞춰 고정"]]} />}
            afterImage={
              <div
                className="mt-16 w-full overflow-hidden rounded-[28px]"
                style={{ aspectRatio: "3 / 4" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/sync-2026-10-29/void/laptop-portable/angle-adjustment-detail-v2.webp"
                  alt="6단계 각도 조절 홈 디테일"
                  className="h-full w-full object-cover"
                />
              </div>
            }
          >
            타이핑할 때는 낮게, 영상을 볼 때는 더 높게.
            지지대를 원하는 조절 홈에 끼워 20°부터 45°까지 6단계로 맞춰보세요.
          </FeatureBlock>

          <FeatureBlock
            title="가벼움과 견고함을 동시에."
            imageSrc="/assets/sync-2026-10-29/void/laptop-portable/weight-180g-v2.webp"
            imageAlt="전자저울 위에서 180g으로 측정된 휴대용 노트북 거치대"
            bodyAfterImage
            supporting={<FeatureSupport items={[["약 180g", "가볍게 챙기는 알루미늄 바디"], ["최대 10kg", "제품의 최대 지지 하중"]]} />}
          >
            약 180g의 알루미늄 합금 바디로 이동할 때의 부담을 줄였습니다.
            펼치면 X자 연결부와 양쪽 지지대가 노트북을 받쳐줍니다.
          </FeatureBlock>

          <FeatureBlock
            title="어디든 함께하는 작업 환경."
            imageSrc="/assets/sync-2026-10-29/void/laptop-portable/backpack-portability-v2.webp"
            imageAlt="백팩 주머니에 휴대용 노트북 거치대를 넣은 모습"
            bodyAfterImage
            supporting={<FeatureSupport items={[["1.5cm", "접었을 때의 두께"], ["접이식", "펼쳐 쓰고 슬림하게 보관"]]} />}
            afterImage={
              <div
                className="mt-16 w-full overflow-hidden rounded-[28px]"
                style={{ aspectRatio: "3 / 4" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/sync-2026-10-29/void/laptop-portable/cafe-portability-v2.webp"
                  alt="카페 테이블 위 노트북과 접힌 휴대용 노트북 거치대"
                  className="h-full w-full object-cover"
                />
              </div>
            }
          >
            접으면 두께 1.5cm. 구성품인 휴대용 파우치에 넣어 가방에 챙기세요.
            카페부터 출장지까지, 자리를 옮겨도 익숙한 각도로 작업할 수 있습니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                노트북 아래,
                <br />
                공기가 지나는 여유.
              </>
            }
            imageSrc="/assets/sync-2026-10-29/void/laptop-portable/cooling-airflow-v2.webp"
            imageAlt="노트북 아래 공기 흐름을 보여주는 휴대용 노트북 거치대"
            bodyAfterImage
            supporting={<FeatureSupport items={[["OPEN", "하부를 열어둔 구조"], ["AIRFLOW", "기기 아래 공기 흐름 확보"]]} />}
          >
            두 개의 레일이 노트북을 받치고, 가운데는 열어두었습니다.
            바닥과 기기 사이에 공간을 만들어 하부 공기 흐름을 돕습니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                노트북을 지키는
                <br />
                섬세한 디테일.
              </>
            }
            imageSrc="/assets/sync-2026-10-29/void/laptop-portable/silicone-protection-detail-v2.webp"
            imageAlt="노트북 보호용 실리콘 패드가 적용된 휴대용 노트북 거치대"
            bodyAfterImage
            supporting={<FeatureSupport columns={3} items={[["실리콘 패드", "기기 접촉부 보호"], ["전면 받침 턱", "노트북 하단을 받치는 구조"], ["바닥 패드", "책상 위 밀림 완화"]]} />}
          >
            노트북이 닿는 레일과 전면 받침 턱에 부드러운 실리콘 패드를 더했습니다.
            기기 표면을 보호하고, 사용 중 미끄러짐을 줄여줍니다.
          </FeatureBlock>

          <FeatureBlock
            title="태블릿부터 노트북까지."
            imageSrc="/assets/sync-2026-10-29/void/laptop-portable/tablet-compatibility-v2.webp"
            imageAlt="휴대용 노트북 거치대에 세로로 놓인 태블릿"
            bodyAfterImage
            supporting={<FeatureSupport items={[["10–17인치", "호환 기기 크기"], ["태블릿 · 노트북", "기기에 맞춰 함께 사용"]]} />}
            afterImage={
              <div
                className="mt-16 w-full overflow-hidden rounded-[28px]"
                style={{ aspectRatio: "3 / 4" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/sync-2026-10-29/void/laptop-portable/laptop-compatibility-v2.webp"
                  alt="휴대용 노트북 거치대에 놓인 노트북"
                  className="h-full w-full object-cover"
                />
              </div>
            }
          >
            10~17인치 노트북은 물론 태블릿도 함께 사용할 수 있습니다.
            기기의 두께와 하단 형태에 따라 거치 상태가 달라질 수 있으니,
            양쪽 레일과 전면 턱에 안정적으로 놓이는지 확인해 주세요.
          </FeatureBlock>

          <FeatureBlock
            title="데스크를 완성하는 블랙."
            imageSrc="/assets/sync-2026-10-29/void/laptop-portable/C025B579-A275-4E79-AC56-D78BD6D742AA.webp"
            imageAlt="블랙 휴대용 노트북 거치대"
            bodyAfterImage
            afterImage={
              <div
                className="mt-16 w-full overflow-hidden rounded-[28px]"
                style={{ aspectRatio: "3 / 4" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/sync-2026-10-29/void/laptop-portable/black-portable-carry-v2.webp"
                  alt="노트북과 함께 든 블랙 휴대용 노트북 거치대"
                  className="h-full w-full object-cover"
                />
              </div>
            }
          >
            차분한 블랙 컬러와 얇은 실루엣으로 책상 위를 단정하게.
            펼쳐놓을 때도, 노트북과 함께 챙길 때도 자연스럽게 어울립니다.
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
          집에서도, 밖에서도 익숙한 작업 각도를 이어가세요.
        </p>

        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-14">
          {[
            {
              scene: "집 책상에서",
              line: "매일 쓰는 책상에 펼쳐두고 나에게 맞는 각도를 찾아보세요.",
              imageSrc:
                "/assets/sync-2026-10-29/void/laptop-portable/E05940D6-F169-4142-9134-1301D6592E7D.webp",
              imageAlt: "집 책상에 펼쳐 사용 중인 VOID 노트북 거치대",
            },
            {
              scene: "카페에서",
              line: "가방에서 꺼내 펼치면, 작은 테이블에서도 화면 각도를 편하게.",
              imageSrc:
                "/assets/sync-2026-10-29/void/laptop-portable/D21AE67D-9CCC-45F0-833D-4E3C62B6A870.webp",
              imageAlt: "카페 테이블 위에서 사용 중인 VOID 노트북 거치대",
            },
            {
              scene: "사무실에서",
              line: "회의실로 자리를 옮길 때도, 가볍게 접어 노트북과 함께.",
              imageSrc:
                "/assets/sync-2026-10-29/void/laptop-portable/AFA6616D-02E5-4681-92F3-A1A783C8A20F.webp",
              imageAlt: "회의실에서 휴대용 거치대와 노트북으로 작업하는 모습",
            },
            {
              scene: "출장지에서",
              line: "낯선 호텔 책상에서도 파우치에서 꺼내 익숙한 각도로 맞춰보세요.",
              imageSrc:
                "/assets/sync-2026-10-29/void/laptop-portable/9C936CB0-3188-4007-8FC8-BB2B7EA6FB30.webp",
              imageAlt: "호텔 책상에서 휴대용 거치대에 노트북을 올려 작업하는 모습",
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

      {/* [신규] 4. 신뢰 배지 — 구매 직전 불안 제거 */}
      <section className="bg-white px-12 pb-32 pt-32">
        <div className="grid grid-cols-2 gap-x-10 gap-y-12">
          {[
            {
              Icon: RefreshCw,
              title: "7일 이내 무상 교환",
              body: "수령 후 7일 이내 접수한 초기 불량은 배송비 없이 교환합니다.",
            },
            {
              Icon: ShieldCheck,
              title: "알루미늄 합금 바디",
              body: "가볍게 휴대하면서 기기를 받치도록 설계한 접이식 구조입니다.",
            },
            {
              Icon: Wrench,
              title: "스토어 고객센터",
              body: "제품 문의와 초기 불량 접수는 스토어 고객센터에서 안내합니다.",
            },
            {
              Icon: PackageCheck,
              title: "당일 발송",
              body: "평일 오후 4시 이전 주문은 당일 발송합니다. 일부 품목은 제외됩니다.",
            },
          ].map(({ Icon, title, body }) => (
            <div key={title} className="flex flex-col gap-5 rounded-[28px] border border-[#d5e5f1] bg-[#f0f7fc] px-7 py-9">
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

      <ReviewSection
        reviews={[
          "노트북 받침대를 찾다가 구매했는데 생각보다 훨씬 튼튼합니다. 타이핑할 때 흔들림이 적고 화면 높이가 올라가서 목이 편해졌어요.",
          "6단계로 각도를 조절할 수 있어서 자세에 맞춰 쓰기 좋습니다. 노트북으로 오래 작업하는 분들에게 정말 유용할 것 같아요.",
          "180g이라 가방에 넣어도 부담이 거의 없습니다. 접으면 얇아져서 회사와 집을 오가며 사용하기 편해요.",
          "알루미늄이라 마감이 깔끔하고 책상 위에 올려두면 디자인도 괜찮습니다. 노트북을 안정적으로 받쳐줘서 만족스럽습니다.",
          "영상 볼 때도 타이핑할 때도 각도만 바꿔서 사용할 수 있어 편합니다. 가볍고 보관하기 쉬운 거치대를 찾는 분들께 추천해요.",
        ]}
      />

      {/* 클로징 — 접힌 제품으로 휴대성을 보여주는 전체 배경 사진 */}
      <section className="relative min-h-[1500px] overflow-hidden bg-[#e5eef4] text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/sync-2026-10-29/void/laptop-portable/closing-premium-blue-v1.webp" alt="닫힌 노트북과 파우치 옆에 슬림하게 접어 둔 블랙 휴대용 노트북 거치대" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[45%]" style={{ background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.96) 18%, rgba(255,255,255,0.62) 48%, rgba(255,255,255,0) 100%)" }} aria-hidden />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%]" style={{ background: "linear-gradient(180deg, rgba(8,28,45,0) 0%, rgba(8,28,45,0.85) 100%)" }} aria-hidden />
        <div className="relative z-10 flex min-h-[1500px] flex-col px-12 pb-28 pt-28">
          <div style={{ textShadow: "0 2px 24px rgba(255,255,255,0.75)" }}>
            <h2 className="text-[64px] font-bold leading-[1.18] tracking-[-0.028em] text-[#022640]">180g으로 바꾸는<br />하루 여덟 시간.</h2>
            <p className="mx-auto mt-8 whitespace-nowrap text-[27px] font-medium leading-[1.55] tracking-[-0.01em] text-[#3d5a6e]">
              가볍게 챙겨, 어디서든 편안한 작업 환경을.
            </p>
          </div>
          <div className="mt-auto" style={{ textShadow: "0 3px 20px rgba(8,28,45,0.9)" }}>
            <p className="text-[52px] font-semibold leading-tight tracking-[-0.02em] text-white">Void Portable Laptop Stand</p>
            <p className="mt-3 text-[28px] font-normal leading-snug tracking-[-0.01em] text-[#d4eaf6]">가볍지만. 강력하다.</p>
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
              q: "몇 인치 노트북까지 올릴 수 있나요?",
              a: "10~17인치 노트북과 태블릿에 사용할 수 있습니다. 구매 전 기기 두께와 하단 형태를 확인하고, 양쪽 레일과 전면 턱에 안정적으로 놓이는지 확인해 주세요.",
            },
            {
              q: "일반 거치대와 무엇이 다른가요?",
              a: "약 180g의 알루미늄 합금 구조에 20°부터 45°까지 6단계 각도 조절을 지원하며, 최대 10kg의 하중을 견딜 수 있도록 설계했습니다. 가볍게 휴대하면서도 노트북을 안정적으로 지지합니다.",
            },
            {
              q: "각도는 어떻게 조절하나요?",
              a: "노트북을 내린 뒤 양쪽 지지대를 같은 단계의 홈에 끼워주세요. 20°부터 45°까지 6단계로 조절할 수 있으며, 사용 전 양쪽이 고정됐는지 확인해 주세요.",
            },
            {
              q: "미끄러지거나 흔들리지 않나요?",
              a: "노트북과 바닥이 닿는 부분에 미끄럼 방지 실리콘 패드를 적용했습니다. 사용 중 움직임을 줄이고 안정적인 사용을 돕습니다.",
            },
            {
              q: "오래 쓰면 노트북이 뜨거워지지 않나요?",
              a: "노트북 하부를 가리지 않는 개방형 구조로 아래쪽 공기 흐름을 방해하지 않아 열 배출에 도움을 줍니다.",
            },
            {
              q: "휴대하기 편한가요? 부피가 크지 않나요?",
              a: "접으면 두께 1.5cm, 무게 180g(±5g)으로 가방에 넣어도 부담 없이 들고 다니실 수 있어요.",
            },
            {
              q: "타이핑할 때도 사용할 수 있나요?",
              a: "직접 타이핑할 때는 낮은 각도로 맞춰보세요. 화면을 더 높게 두고 오래 작업할 때는 별도 키보드와 마우스를 함께 사용하면 편리합니다.",
            },
            {
              q: "색상은 어떤 게 있나요?",
              a: "블랙 한 가지 색상입니다.",
            },
            {
              q: "접거나 펼칠 때 주의할 점이 있나요?",
              a: "기기를 먼저 내리고 천천히 접거나 펼쳐주세요. 연결부에 손가락이 끼지 않도록 주의하고, 조절 홈과 지지대를 무리한 힘으로 누르지 마세요.",
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
            src="/assets/sync-2026-10-29/void/laptop-portable/size.webp"
            alt="펼친 크기 255 × 180 × 50~150mm, 접은 크기 255 × 45 × 15mm"
            className="block h-auto w-full"
          />
        </div>
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

        <div className="mx-auto mt-24 w-full max-w-[780px] text-center">
          <div
            className="w-full overflow-hidden rounded-[28px] bg-white"
            style={{ aspectRatio: "3 / 4" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/sync-2026-10-29/void/laptop-portable/included-components-v2.webp"
              alt="휴대용 노트북 거치대 본체와 휴대용 파우치 구성품"
              className="h-full w-full object-cover"
            />
          </div>
          <p
            className="mt-6 text-[32px] font-semibold tracking-[-0.01em]"
            style={{ color: "#1d1d1f" }}
          >
            알루미늄 거치대 본체 × 1 · 휴대용 파우치 × 1
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
          {[
            ["품명 및 모델명", "알루미늄 휴대용 노트북 거치대"],
            ["재질", "알루미늄 합금"],
            ["색상", "블랙"],
            ["펼쳤을 때", "255 × 180 × 50~150 mm"],
            ["접었을 때", "255 × 45 × 15 mm"],
            ["중량", "180g (±5g)"],
            ["각도 조절", "20°~45°, 6단계"],
            ["최대 하중", "10kg"],
            ["호환 기기", "10~17인치 노트북·태블릿"],
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
                className="w-[230px] shrink-0 text-[22px] font-semibold tracking-[-0.01em]"
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
      </div>
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
  supporting,
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
  supporting?: ReactNode;
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
      {supporting}
    </div>
  );
}


function FeatureSupport({
  items,
  columns = 2,
}: {
  items: readonly (readonly [string, string])[];
  columns?: 2 | 3;
}) {
  return (
    <div className={`mt-12 grid ${columns === 3 ? "grid-cols-3" : "grid-cols-2"} gap-5`}>
      {items.map(([value, label]) => (
        <div key={value} className="rounded-[24px] border border-[#d5e5f1] bg-[#f0f7fc] px-5 py-8 text-center">
          <p className="text-[24px] font-bold tracking-[-0.02em] text-[#285875]">{value}</p>
          <p className="mt-3 text-[18px] font-medium leading-[1.45] text-[#6e6e73]">{label}</p>
        </div>
      ))}
    </div>
  );
}
