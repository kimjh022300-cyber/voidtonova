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
 * VOID · 노트북 거치대 회전형
 * 아이콘: Lucide (https://lucide.dev) — 앞으로 전부 여기 사용
 */
export default function VoidLaptopSwivelV2Page() {
  return (
    <BrandFrame brand="void">
      {/* 1. 제품 히어로 */}
      <section className="relative min-h-[1500px] overflow-hidden bg-[#ece9e5]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/void/laptop-swivel/hero-swivel-sunlit-wide-v3.webp"
          alt="햇살이 드는 책상 위에 노트북과 함께 올려진 블랙 회전형 노트북 거치대"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 30%, rgba(0,0,0,0.04) 58%, rgba(0,0,0,0.78) 100%)",
          }}
          aria-hidden
        />
        <div className="relative z-10 flex min-h-[1500px] flex-col px-4 pb-24 pt-20">
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
                  "linear-gradient(105deg, #1d1d1f 0%, #55616a 48%, #1d1d1f 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                width: "fit-content",
              }}
            >
              Void Laptop Stand
            </p>
            <h1
              className="mx-auto mt-2 whitespace-nowrap text-[85px] font-bold leading-[1.15] tracking-[-0.025em]"
              style={{
                color: "#1d1d1f",
                textShadow: "0 2px 18px rgba(255,255,255,0.72)",
                fontFamily:
                  '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
                width: "fit-content",
              }}
            >
              회전, 그 이상의 자유.
            </h1>
          </div>
          <p
            className="mx-auto mt-auto max-w-[780px] px-4 text-center text-[28px] font-medium leading-[1.5] tracking-[-0.01em] text-white"
            style={{
              textShadow: "0 2px 12px rgba(0,0,0,0.92)",
              fontFamily:
                '"SF Pro KR", "SF Pro Text", Pretendard, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            높이와 각도를 맞추고, 필요할 때 화면만 돌리세요.
            <br />
            묵직한 탄소강 바디와 360° 회전으로
            <br />
            집중부터 공유까지 더 자연스럽게.
          </p>
        </div>
      </section>

      {/* 히어로 직후 제품 오버뷰 */}
      <section className="relative aspect-[3/5] overflow-hidden bg-[#eee9e3]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/void/laptop-swivel/product-overview-front-v3.webp"
          alt="햇살이 드는 책상 위에 정면으로 펼쳐진 블랙 회전형 노트북 거치대"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-x-0 top-32 z-10 px-8 text-center">
          <h2 className="text-[68px] font-bold leading-[1.05] tracking-[-0.035em]">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(105deg, #111111 0%, #55555a 50%, #111111 100%)",
              }}
            >
              Void Laptop Stand
            </span>
          </h2>
          <p className="mt-6 text-[26px] font-medium tracking-[-0.015em] text-[#4f4f53]">
            높이와 각도, 방향까지 자유롭게.
          </p>
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[22%]"
          style={{
            background:
              "linear-gradient(180deg, rgba(245,245,247,0) 0%, rgba(245,245,247,0.72) 58%, #f5f5f7 100%)",
          }}
          aria-hidden
        />
      </section>

      {/* 히어로 직후 한눈에 보는 핵심 스펙 */}
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
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #493527, #9a775d)",
            }}
          >
            Void Laptop Stand
          </span>
        </h2>

        <div className="mt-20 grid grid-cols-2 gap-6">
          {[
            { prefix: "", value: "360", unit: "°", label: "자유 회전" },
            { prefix: "", value: "10", unit: "kg", label: "최대 하중" },
            { prefix: "", value: "1", unit: "kg", label: "본체 무게" },
            { prefix: "", value: "10–17", unit: "인치", label: "호환 기기 크기" },
            { prefix: "", value: "5–30", unit: "cm", label: "높이 조절 범위" },
            { prefix: "", value: "24×21", unit: "cm", label: "베이스 크기" },
          ].map(({ prefix, value, unit, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center rounded-[28px] bg-white px-8 py-16 text-center"
            >
              <p
                className={`inline-flex h-[84px] w-full items-baseline justify-center whitespace-nowrap text-center font-bold leading-none tracking-[-0.03em] ${
                  value.length >= 6 ? "text-[48px]" : "text-[76px]"
                }`}
                style={{
                  backgroundImage: "linear-gradient(90deg, #493527, #9a775d)",
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

      {/* 책상 위 직접 사용 비교 */}
      <section className="bg-white px-12 pb-36 pt-36">
        <h2 className="text-center text-[58px] font-bold leading-tight tracking-[-0.03em]">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #493527, #9a775d)",
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
                <th className="border-l border-[#d2d2d7] bg-[#f3ebe4] px-4 py-7 text-[24px] font-bold leading-tight text-[#6b513f]">
                  Void
                  <br />
                  Laptop Stand
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["시선 높이", "낮은 화면", "원하는 높이로"],
                ["화면 방향", "노트북을 직접 이동", "360° 자유 회전"],
                ["높이·각도", "고정", "자유롭게 조절"],
                ["발열 관리", "바닥과 밀착", "오픈형 방열 구조"],
                ["데스크 공간", "그대로 차지", "하부 공간 활용"],
              ].map(([label, desk, stand]) => (
                <tr key={label} className="border-t border-[#d2d2d7]">
                  <th className="px-4 py-8 text-[23px] font-semibold leading-snug text-[#1d1d1f]">
                    {label}
                  </th>
                  <td className="border-l border-[#d2d2d7] px-4 py-8 text-[21px] font-semibold leading-snug text-[#86868b]">
                    {desk}
                  </td>
                  <td className="border-l border-[#d2d2d7] bg-[#f8f3ef] px-4 py-8 text-[22px] font-bold leading-snug text-[#6b513f]">
                    {stand}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 제품 포커스 — 구조와 실루엣 */}
      <section className="overflow-hidden bg-white px-12 py-40 text-center">
        <p className="text-[20px] font-bold tracking-[0.14em] text-[#8a6246]">
          FORM FOLLOWS FUNCTION
        </p>
        <h2 className="mt-8 text-[64px] font-bold leading-[1.15] tracking-[-0.035em] text-[#1d1d1f]">
          필요한 기능만,
          <br />
          단단하게 담았습니다.
        </h2>
        <p className="mx-auto mt-8 max-w-[690px] text-[27px] font-medium leading-[1.65] text-[#6e6e73]">
          넓은 받침판과 듀얼 암, 회전 베이스.
          <br />
          매일 쓰는 구조만 남겨 하나의 단정한 실루엣으로 완성했습니다.
        </p>
        <div className="mx-auto mt-20 flex aspect-[3/4] max-w-[780px] items-center justify-center overflow-hidden rounded-[32px] border border-[#e5e5e7] bg-white shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/void/laptop-swivel/product-focus-sunlit-v4.webp"
            alt="햇살이 드는 책상 위에 펼쳐진 블랙 회전형 노트북 거치대"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-8 grid grid-cols-3 gap-5">
          {[
            ["넓은 받침판", "기기를 넓게 받치는 오픈형 구조"],
            ["듀얼 암", "높이와 각도를 단단히 유지"],
            ["회전 베이스", "본체를 옮기지 않고 방향 전환"],
          ].map(([title, body]) => (
            <div
              key={title}
              className="rounded-[24px] border border-[#e5ddd6] bg-white/80 px-5 py-8"
            >
              <p className="text-[24px] font-bold text-[#1d1d1f]">{title}</p>
              <p className="mt-3 text-[18px] font-medium leading-[1.5] text-[#6e6e73]">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 작업 흐름에 맞는 세 가지 모드 */}
      <section className="bg-white px-12 py-36">
        <h2 className="text-center text-[58px] font-bold leading-tight tracking-[-0.03em] text-[#1d1d1f]">
          한 대로 이어지는,
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #493527, #9a775d)",
            }}
          >
            세 가지 작업 모드.
          </span>
        </h2>
        <p className="mx-auto mt-8 max-w-[680px] text-center text-[25px] font-medium leading-[1.6] text-[#6e6e73]">
          노트북을 옮기지 않고 높이와 각도, 방향만 바꾸어
          집중부터 공유까지 자연스럽게 전환합니다.
        </p>
        <div className="mt-20 grid grid-cols-3 gap-5">
          {[
            ["01", "집중 모드", "정면으로 단단하게", "타이핑 · 문서 작업"],
            ["02", "공유 모드", "화면만 360° 회전", "회의 · 협업"],
            ["03", "시청 모드", "높이와 각도를 편안하게", "영상 · 화상 통화"],
          ].map(([step, title, position, use], index) => (
            <article
              key={step}
              className="rounded-[28px] border border-[#dfe5e9] px-5 py-9 text-center"
              style={{
                backgroundColor:
                  index === 0 ? "#fbfaf8" : index === 1 ? "#f4eee8" : "#ede3da",
              }}
            >
              <p className="text-[19px] font-bold tracking-[0.1em] text-[#8a6246]">
                {step}
              </p>
              <h3 className="mt-5 text-[29px] font-bold text-[#1d1d1f]">
                {title}
              </h3>
              <p className="mt-7 text-[20px] font-semibold leading-[1.45] text-[#493527]">
                {position}
              </p>
              <div className="mx-auto mt-7 h-px w-12 bg-[#bca58f]" />
              <p className="mt-6 text-[17px] font-medium text-[#6e6e73]">
                {use}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* 기능 + 스토리 */}
      <section className="bg-white px-12 pb-36 pt-[8.8rem]">
        <div className="flex flex-col gap-48">
          <FeatureBlock
            title={
              <>
                360°로 도는
                <br />
                자유로운 시선.
              </>
            }
            imageSrc="/assets/void/laptop-swivel/rotation-360-sunlit-v3.webp"
            imageAlt="회전 베이스 위에 360도 회전 방향이 표시된 노트북 거치대"
            bodyAfterImage
            supporting={
              <FeatureSupport
                items={[
                  ["360°", "원하는 방향으로 자유 회전"],
                  ["제자리", "노트북을 들지 않고 화면 공유"],
                ]}
              />
            }
          >
            360° 자유 회전으로 화면을 원하는 방향으로 부드럽게 돌릴 수
            있습니다. 노트북을 들어 옮기지 않아도 혼자 작업할 때는 물론,
            회의와 협업까지 더욱 자연스럽게 이어집니다.
          </FeatureBlock>

          <FeatureBlock
            title="여기에, 편안한 자세까지."
            imageSrc="/assets/void/laptop-portable/posture.webp"
            imageAlt="거치대 사용 전후 자세 비교"
            bodyAfterImage
            supporting={
              <FeatureSupport
                items={[
                  ["BEFORE", "낮은 화면을 향하는 시선"],
                  ["AFTER", "눈높이에 가까워진 화면"],
                ]}
              />
            }
          >
            화면을 눈높이에 가깝게 올리는 것만으로도 시선은 자연스러워지고, 목과
            어깨의 부담은 줄어듭니다. 작은 높이의 차이가 더욱 편안한 작업
            환경을 만들어줍니다.
          </FeatureBlock>

          <FeatureBlock
            title="높이와 각도도 자유롭죠."
            imageSrc="/assets/void/laptop-swivel/height-angle-stages-sunlit-v3.webp"
            imageAlt="낮은 위치부터 높은 위치까지 노트북 거치대의 높이와 각도 조절 단계"
            bodyAfterImage
            supporting={
              <FeatureSupport
                columns={3}
                items={[
                  ["01", "높이 맞추기"],
                  ["02", "각도 맞추기"],
                  ["03", "방향 돌리기"],
                ]}
              />
            }
          >
            높이와 각도를 자유롭게 조절해 사용자의 자세와 작업 환경에 가장 알맞은
            위치를 설정할 수 있습니다. 앉아서 작업할 때도, 서서 사용할 때도
            자연스러운 시선을 유지하며 더욱 편안한 작업 환경을 만들어줍니다.
          </FeatureBlock>

          <FeatureBlock
            title="흔들림 없는 안정감."
            imageSrc="/assets/void/laptop-swivel/weight-1000g-sunlit-v3.webp"
            imageAlt="전자저울 위에서 1000g으로 측정된 회전형 노트북 거치대"
            bodyAfterImage
            supporting={
              <FeatureSupport
                items={[
                  ["약 1kg", "바닥을 눌러주는 묵직한 본체"],
                  ["최대 10kg", "노트북을 받치는 지지 하중"],
                ]}
              />
            }
            afterImage={
              <div
                className="mt-16 w-full overflow-hidden rounded-[28px]"
                style={{ aspectRatio: "3 / 4" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/void/laptop-swivel/load-test-sunlit-v3.webp"
                  alt="여러 대의 노트북 하중을 지지하는 회전형 노트북 거치대"
                  className="h-full w-full object-cover"
                />
              </div>
            }
          >
            약 1000g의 묵직한 본체가 바닥을 눌러 흔들림을 잡아줍니다. 최대
            10kg — 16인치 맥북 프로를 네 대 올려도 버티는 하중이라, 타이핑부터
            화면 터치까지 흔들림 걱정 없이 사용할 수 있습니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                성능을 유지하는
                <br />
                가장 단순한 방법.
              </>
            }
            imageSrc="/assets/void/laptop-swivel/cooling-airflow-sunlit-v3.webp"
            imageAlt="노트북 하단의 열을 빼내는 공기 흐름이 표시된 회전형 노트북 거치대"
            bodyAfterImage
            supporting={
              <FeatureSupport
                items={[
                  ["OPEN", "기기 뒷면을 막지 않는 받침판"],
                  ["AIRFLOW", "공기 흐름을 고려한 타공 구조"],
                ]}
              />
            }
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
            imageSrc="/assets/void/laptop-swivel/silicone-protection-sunlit-v3.webp"
            imageAlt="노트북이 닿는 실리콘 보호 부위를 표시한 회전형 노트북 거치대"
            aspect="3 / 4"
            bodyAfterImage
            supporting={
              <FeatureSupport
                columns={3}
                items={[
                  ["상판", "기기 접촉부 보호"],
                  ["전면 턱", "기기 미끄러짐 완화"],
                  ["바닥", "책상 위 밀림 완화"],
                ]}
              />
            }
          >
            노트북이 닿는 부분에는 부드러운 실리콘 패드를 적용했습니다.
            미끄러짐을 줄이고 스크래치를 방지해, 소중한 기기를 더욱 안정적이고
            안전하게 보호합니다.
          </FeatureBlock>

          <FeatureBlock
            title="태블릿부터 노트북까지."
            imageSrc="/assets/void/laptop-swivel/tablet-compatibility-sunlit-v3.webp"
            imageAlt="회전형 거치대에 태블릿을 가로로 올려 영상을 시청하는 모습"
            bodyAfterImage
            supporting={
              <FeatureSupport
                items={[
                  ["10–17인치", "노트북 호환 범위"],
                  ["2 IN 1", "태블릿과 노트북을 하나로"],
                ]}
              />
            }
            afterImage={
              <div
                className="mt-16 w-full overflow-hidden rounded-[28px]"
                style={{ aspectRatio: "3 / 4" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/void/laptop-swivel/laptop-compatibility-sunlit-v3.webp"
                  alt="회전형 거치대에 노트북을 올려 작업하는 모습"
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
            imageSrc="/assets/void/laptop-swivel/black-desk-sunlit-v3.webp"
            imageAlt="블랙 조명과 컵이 놓인 책상 위의 블랙 회전형 노트북 거치대"
            bodyAfterImage
            afterImage={
              <div
                className="mt-16 w-full overflow-hidden rounded-[28px]"
                style={{ aspectRatio: "4 / 3" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/void/laptop-swivel/black-desk-working-sunlit-v3.webp"
                  alt="블랙 회전형 노트북 거치대를 사용해 책상에서 타이핑하는 모습"
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

      {/* [신규] 사용 상황 — 회전이 필요한 순간들 */}
      <section className="bg-white px-12 pb-36 pt-32">
        <h2
          className="text-center text-[58px] font-bold leading-tight tracking-[-0.025em]"
          style={{
            color: "#1d1d1f",
            fontFamily:
              '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          돌릴 일은 생각보다 자주 옵니다.
        </h2>
        <p
          className="mx-auto mt-8 max-w-[640px] text-center text-[26px] font-medium leading-[1.6] tracking-[-0.01em]"
          style={{ color: "#6e6e73" }}
        >
          그동안 노트북을 들어 옮겼던 순간들이, 손끝 한 번으로 끝납니다.
        </p>

        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-14">
          {[
            {
              scene: "옆자리 동료에게",
              line: "자료를 보여줄 때 노트북을 들지 않습니다. 손끝으로 돌리면 끝입니다.",
              imageSrc: "/assets/void/laptop-swivel/colleague-share.webp",
              imageAlt: "옆자리 동료 쪽으로 화면을 돌려 보여주는 모습",
              photo: null,
            },
            {
              scene: "고객 앞에서",
              line: "마주 앉은 채로 화면만 넘겨 보여주세요. 자리를 옮길 필요가 없습니다.",
              imageSrc: "/assets/void/laptop-swivel/client-share.webp",
              imageAlt: "마주 앉은 상대에게 화면을 돌려 설명하는 모습",
              photo: null,
            },
            {
              scene: "둘이서 볼 때",
              line: "가운데 두고 각도만 맞추면 두 사람 모두 편한 시선이 나옵니다.",
              imageSrc: "/assets/void/laptop-swivel/together-view.webp",
              imageAlt: "두 사람이 함께 화면을 보는 모습",
              photo: null,
            },
            {
              scene: "혼자 집중할 때",
              line: "정면으로 돌려 두면 그냥 단단한 거치대입니다. 흔들림도 없고요.",
              imageSrc: "/assets/void/laptop-swivel/solo-focus.webp",
              imageAlt: "정면 거치 상태로 혼자 작업하는 모습",
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
                className="mt-1 h-12 w-12 shrink-0 text-[#8a6246]"
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

      {/* 구매 고객 후기 — 제품 설명 후 신뢰 형성 */}
      <section className="bg-white px-10 pb-32 pt-40">
        <div className="mx-auto max-w-[780px]">
          <div
            className="flex items-center justify-center gap-4 text-[#3d5a6e]"
            aria-label="별점 5점, 평점 5.0"
          >
            <p className="text-[34px] font-bold tracking-[-0.02em] text-[#1d1d1f]">5.0</p>
            <p className="text-[36px] font-bold tracking-[0.12em] text-[#F5B700]">★★★★★</p>
          </div>
          <h2
            className="mt-6 text-center text-[58px] font-bold leading-tight tracking-[-0.025em]"
            style={{
              color: "#1d1d1f",
              fontFamily:
                '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
            }}
          >
            실제 구매자들의 솔직한 후기
          </h2>
          <p className="mt-5 text-center text-[22px] font-medium text-[#6e6e73]">
            먼저 사용해 본 분들의 솔직한 후기입니다.
          </p>

          <div className="mt-16 space-y-6">
            {[
              "노트북을 오래 쓰다 보니 목이 너무 아파서 구매했는데 생각보다 훨씬 만족스럽습니다. 높이랑 각도 조절도 잘 되고, 무엇보다 회전이 돼서 옆 사람한테 화면 보여주거나 방향 바꿀 때 진짜 편해요. 거치대가 흔들릴까 걱정했는데 생각보다 묵직하게 잘 잡아주고 노트북 올려놨을 때 안정감도 있습니다. 책상 위도 깔끔해져서 만족해요. 집이나 사무실에서 노트북 자주 쓰시는 분들한테 추천합니다!",
              "생각보다 진짜 편해요. 노트북 올려두고 각도 조절하기도 쉽고, 필요할 때 바로 돌릴 수 있어서 옆 사람한테 화면 보여주거나 방향 바꿀 때 편합니다. 흔들림도 크게 없고 책상 위에 두니까 훨씬 깔끔해 보여서 만족해요.",
              "노트북 안정적이게 올라가고 부드럽게 잘 돌아가요. 회사에서 사용 중인데 좋아보인다고 직원들도 따라 구매함",
              "사용해보니 생각보다 훨씬 편하고 튼튼해서 만족스럽습니다! 노트북을 안정적으로 잡아주고 360도 회전이 되니까 원하는 방향이나 각도로 맞추기 정말 편하네요. 책상 위 공간도 깔끔하게 정리되고 디자인도 심플해서 어디에 둬도 잘 어울립니다. 노트북 거치대 고민하시는 분들에게 강추하고 싶은 제품이에요!",
            ].map((review) => (
              <article
                key={review}
                className="rounded-[28px] border border-[#e5ddd6] bg-[#faf7f3] px-8 py-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <p className="text-[24px] font-bold text-[#1d1d1f]">5.0</p>
                    <p className="text-[24px] font-bold tracking-[0.08em] text-[#F5B700]">★★★★★</p>
                  </div>
                  <p className="text-[18px] font-medium text-[#86868b]">네이버 구매 고객</p>
                </div>
                <p className="mt-6 text-[24px] font-medium leading-[1.6] tracking-[-0.01em] text-[#6e6e73]">
                  {review}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* [신규] 5. 클로징 — 설득 파트의 마지막, 정보 파트로 넘어가기 전 */}
      <section className="relative min-h-[1500px] overflow-hidden bg-white text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/void/laptop-swivel/product-overview-light-v1.webp"
          alt="밝은 홈오피스 데스크 위의 Void 회전형 노트북 거치대"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[48%]"
          style={{
            background:
              "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.96) 28%, rgba(255,255,255,0) 100%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%]"
          style={{
            background:
              "linear-gradient(180deg, rgba(12,14,16,0) 0%, rgba(12,14,16,0.82) 100%)",
          }}
          aria-hidden
        />
        <div className="relative z-10 flex min-h-[1500px] flex-col px-12 pb-28 pt-28">
          <div>
            <h2
              className="text-[64px] font-bold leading-[1.18] tracking-[-0.028em] text-[#1d1d1f]"
              style={{ textShadow: "0 2px 24px rgba(255,255,255,0.72)" }}
            >
              그 자리에서, 360°
            </h2>
            <p
              className="mx-auto mt-8 max-w-[690px] text-[27px] font-medium leading-[1.55] tracking-[-0.01em] text-[#4a4a4f]"
              style={{ textShadow: "0 1px 18px rgba(255,255,255,0.82)" }}
            >
              화면을 보여주려고 노트북을 들어 올리지 않아도 됩니다.
              <br />
              손끝으로 살짝 돌리면, 그걸로 끝입니다.
            </p>
          </div>
          <div className="mt-auto">
            <p
              className="text-[52px] font-semibold leading-tight tracking-[-0.02em] text-white"
              style={{ textShadow: "0 3px 20px rgba(0,0,0,0.92)" }}
            >
              Void Laptop Stand
            </p>
            <p
              className="mt-3 text-[28px] font-normal leading-snug tracking-[-0.01em] text-[#f0e4d8]"
              style={{ textShadow: "0 2px 14px rgba(0,0,0,0.92)" }}
            >
              회전, 그 이상의 자유.
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
              q: "몇 인치 노트북까지 사용할 수 있나요?",
              a: "10~17인치 노트북은 물론 태블릿까지 폭넓게 호환됩니다. 맥북 에어, 맥북 프로를 비롯한 대부분의 노트북을 안정적으로 거치할 수 있습니다.",
            },
            {
              q: "휴대용 접이식 거치대와 어떤 차이가 있나요?",
              a: "휴대용은 180g으로 가방에 넣어 들고 다니는 제품이고, 회전형은 약 1000g의 탄소강 구조로 책상에 두고 쓰는 제품입니다. 360° 회전과 단계 없는 높이 조절이 필요하시면 회전형을, 이동이 잦으시면 휴대용을 권해드립니다.",
            },
            {
              q: "높이와 각도는 자유롭게 조절할 수 있나요?",
              a: "네. 사용자의 자세와 작업 환경에 맞춰 높이와 각도를 자유롭게 조절할 수 있습니다. 타이핑부터 영상 시청, 화상회의까지 원하는 위치로 편안하게 사용할 수 있습니다.",
            },
            {
              q: "회전은 어느 정도까지 되나요?",
              a: "360° 자유 회전이 가능해 원하는 방향으로 화면을 손쉽게 돌릴 수 있습니다. 화면을 공유하거나 작업 위치를 바꿀 때 더욱 편리합니다.",
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
              q: "자주 회전해도 내구성에는 문제가 없나요?",
              a: "견고한 탄소강 구조와 정밀한 회전 설계로 반복적인 회전에도 안정적인 사용감을 유지하도록 제작되었습니다.",
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
          className="mx-auto mt-24 flex max-w-[780px] items-center justify-center overflow-hidden rounded-[28px] px-6 py-10"
          style={{ backgroundColor: "#f5f5f7" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/void/laptop-swivel/size.webp"
            alt="Laptop Stand 사이즈"
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

        <ul className="mt-24">
          {[
            {
              label: "회전형 거치대 본체 x1",
              src: "/assets/void/laptop-swivel/package-contents-studio-v2.webp",
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
            ["품명 및 모델명", "회전형 노트북 거치대"],
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
                "회전 또는 각도 조절 시 무리한 힘을 가하지 마세요.",
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
                    "교환/반품 신청 후 다시 보낸 박스 중 구성품이 누락된 경우",
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
        style={{ border: "3px solid #8a6246" }}
        aria-hidden
      >
        <Check className="h-9 w-9 text-[#8a6246]" strokeWidth={3.5} />
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
    <div
      className={`mt-12 grid ${columns === 3 ? "grid-cols-3" : "grid-cols-2"} gap-5`}
    >
      {items.map(([value, label]) => (
        <div
          key={`${value}-${label}`}
          className="rounded-[24px] border border-[#e5ddd6] bg-[#faf7f3] px-5 py-8 text-center"
        >
          <p className="text-[24px] font-bold tracking-[-0.02em] text-[#1d1d1f]">
            {value}
          </p>
          <p className="mt-3 text-[18px] font-medium leading-[1.45] text-[#6e6e73]">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}
