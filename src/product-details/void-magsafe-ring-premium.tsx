import { BrandFrame } from "@/components/product-detail/brand-frame";
import { ReviewSection } from "@/components/product-detail/review-section";
import Image from "next/image";
import type { ReactNode } from "react";
import {
  Check,
  ChevronDown,
  PackageCheck,
  RefreshCw,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

/**
 * Void Magnetic Ring
 * 원본: void-laptop-swivel-v2.tsx — 원본과 완전히 분리된 작업본
 * 실제 제품 사진은 준비 전까지 빈 카드로 유지한다.
 */
export default function VoidMagsafeRingPremiumPage() {
  return (
    <BrandFrame brand="void">
      {/* 히어로 */}
      <section className="relative min-h-[1440px] overflow-hidden bg-[#f3f4f6]">
        <Image
          src="/assets/void/magsafe-ring-premium/hero-magnetic-ring-v4.webp"
          alt="Void Magnetic Ring을 부착한 블랙 스마트폰"
          fill
          priority
          sizes="860px"
          className="object-cover object-center"
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[34%]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.18) 62%, rgba(255,255,255,0) 100%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.82) 78%, #ffffff 100%)",
          }}
          aria-hidden
        />
        <div
          className="relative z-10 flex min-h-[1440px] flex-col items-center px-4 pb-[4.4rem] pt-28 text-center"
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
            Void Magnetic Ring
          </p>
          <h1
            className="mx-auto mt-8 text-[134px] font-bold leading-[1.02] tracking-[-0.01em]"
            style={{
              backgroundImage:
                "linear-gradient(105deg, #111111 0%, #55555a 50%, #111111 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              width: "fit-content",
            }}
          >
            착. 붙다.
          </h1>

          <div className="mt-auto">
            <p
              className="mx-auto max-w-[780px] px-4 text-center text-[28px] font-normal leading-[1.5] tracking-[-0.01em]"
              style={{ color: "#1d1d1f" }}
            >
              손에 걸어 잡고, 책상 위에 세우고, 필요한 곳에는 가볍게 착.
              <br />
              하나의 링으로 매일의 스마트폰 사용이 더 자유로워집니다.
            </p>
          </div>
        </div>
      </section>

      <section className="relative aspect-[3/4] overflow-hidden bg-white">
        <Image
          src="/assets/void/magsafe-ring-premium/product-overview-fridge.webp"
          alt="냉장고에 부착한 Void Magnetic Ring과 스마트폰"
          fill
          sizes="860px"
          className="object-cover object-center"
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[32%]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.38) 55%, rgba(255,255,255,0) 100%)",
          }}
          aria-hidden
        />
        <h2 className="absolute inset-x-0 top-24 z-10 text-center text-[70px] font-bold leading-none tracking-[-0.03em]">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(105deg, #111111 0%, #55555a 50%, #111111 100%)",
            }}
          >
            Void Magnetic Ring.
          </span>
        </h2>
        <div className="absolute inset-x-0 bottom-24 z-10 text-center">
          <p
            className="mx-auto text-[46px] font-bold leading-[1.24] tracking-[-0.022em] text-white"
            style={{
              textShadow: "0 2px 18px rgba(0,0,0,0.72)",
              width: "fit-content",
            }}
          >
            그립부터 거치까지, 하나로.
          </p>
        </div>
      </section>

      <ReviewSection
        source="네XX 구매 고객"
        reviews={[
          "접었을 때 동그랗고 깔끔해서 휴대폰에 붙여둬도 거슬리지 않아요. 금속 느낌도 괜찮고 기존에 쓰던 제품보다 전체적으로 마감이 고급스럽게 느껴집니다.",
          "손가락을 걸어 그립으로 쓰다가 영상 볼 때 바로 펼쳐 세울 수 있어서 편합니다. 가로와 세로 방향을 바꾸기도 쉬워서 생각보다 자주 사용하게 돼요.",
          "냉장고에 붙여 레시피를 보거나 책상에서는 스탠드로 쓰고 있습니다. 액세서리를 여러 개 챙길 필요 없이 하나로 해결돼서 만족스러워요.",
          "헬스장에서 운동기구에 붙여 타이머를 보거나 자세를 촬영할 때 유용합니다. 붙이고 각도만 맞추면 돼서 준비 과정도 간단해요.",
          "합금 제품인데도 무겁다는 느낌이 크지 않고 접으면 부피가 작아 휴대하기 좋습니다. 디자인과 실용성을 둘 다 중요하게 보는 분들에게 잘 맞을 것 같아요.",
        ]}
      />

      {/* 3-in-1 비교 */}
      <section className="bg-white px-12 pb-36 pt-36">
        <h2
          className="whitespace-nowrap text-center text-[64px] font-bold leading-tight tracking-[-0.03em]"
          style={{
            backgroundImage: "linear-gradient(90deg, #022640, #5786ab)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          세 가지 액세서리를, 하나로.
        </h2>
        <div className="mt-20 overflow-hidden rounded-[28px] border border-[#d2d2d7] bg-white">
          <table className="w-full table-fixed border-collapse text-center">
            <caption className="sr-only">
              여러 액세서리를 따로 사용할 때와 Void Magnetic Ring 비교
            </caption>
            <thead>
              <tr className="bg-[#f5f5f7]">
                <th className="w-[30%] px-5 py-7 text-[25px] font-bold text-[#1d1d1f]">
                  기능
                </th>
                <th className="border-l border-[#d2d2d7] px-4 py-7 text-[#1d1d1f]">
                  <span className="block text-[24px] font-bold">일반 액세서리</span>
                  <span className="mt-2 block text-[16px] font-semibold leading-tight text-[#86868b]">
                    그립 · 스탠드 · 자석 거치대
                  </span>
                </th>
                <th className="border-l border-[#d2d2d7] bg-[#e8f4fb] px-5 py-7 text-[25px] font-bold leading-tight text-[#0071e3]">
                  Void
                  <br />
                  Magnetic Ring
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["한 손 그립", "별도 그립 필요", "O"],
                ["책상 위 거치", "별도 스탠드 필요", "O"],
                ["금속 표면 부착", "별도 자석 거치대 필요", "O"],
                ["액세서리", "총 3개", "1개"],
              ].map(([label, separate, ring]) => (
                <tr key={label} className="border-t border-[#d2d2d7]">
                  <th className="px-5 py-7 text-[24px] font-semibold leading-snug text-[#1d1d1f]">
                    {label}
                  </th>
                  <td className="border-l border-[#d2d2d7] px-5 py-7 text-[22px] font-semibold leading-snug text-[#86868b]">
                    {separate}
                  </td>
                  <td className="border-l border-[#d2d2d7] bg-[#eef7ff] px-5 py-7 text-[32px] font-bold text-[#0071e3]">
                    {ring}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 자력 + 프리미엄 전환 */}
      <section className="bg-white px-12 pb-0 pt-40">
        <div className="flex flex-col gap-48">
          <FeatureBlock
            title={
              <>
                폰을 세울 자리가,
                <br />
                늘 마땅치 않죠.
              </>
            }
            imageSrc="/assets/void/magsafe-ring-premium/kitchen-wall-stand.webp"
            imageAlt="주방 벽면에 스마트폰을 세워 둔 모습"
          >
            요리하다 레시피를 보려고 폰을 벽에 기대 세워 본 적, 있으실 겁니다.
            운동할 때는 기구 위에 아슬아슬하게 올려두고요. 화면을 볼 일은 계속
            생기는데, 폰을 둘 자리는 늘 없습니다.
          </FeatureBlock>

          <FeatureBlock
            title="양면 자석으로 고민 끝."
            imageSrc="/assets/void/magsafe-ring-premium/dual-sided-magnet.webp"
            imageAlt="양면 자석으로 휴대폰을 금속 표면에 거치한 모습"
          >
            한쪽은 휴대폰에, 다른 한쪽은 금속 표면에. 양면이 모두 자석이라
            우리가 생활하는 공간 어디든 척척 붙습니다. 벽에 기대 세울 일도,
            아슬아슬하게 올려둘 일도 없죠.
          </FeatureBlock>

          <FeatureBlock
            title="마감까지, 정교하게."
            imageSrc="/assets/void/magsafe-ring-premium/refined-finish.webp"
            imageAlt="Void Magnetic Ring의 정교한 표면과 관절 마감"
          >
            휴대폰에 늘 붙어 있는 액세서리는 기능만큼 디자인과 손에 닿는 감각도
            중요합니다. 복잡한 구조는 안으로 감추고, 정돈된 원형 실루엣과
            합금의 단단한 질감만 남겼습니다.
          </FeatureBlock>
        </div>
      </section>

      {/* 기능 + 스토리 */}
      <section className="bg-white px-12 pb-36 pt-48">
        <div className="flex flex-col gap-48">
          <FeatureBlock
            title="접으면, 하나의 원."
            imageSrc="/assets/void/magsafe-ring-premium/folded-circle.webp"
            imageAlt="하나의 원형으로 접힌 Void Magnetic Ring"
          >
            사용하지 않을 때는 링을 접어 하나의 슬림한 원형으로 정리됩니다.
            휴대폰에 부착한 상태에서도 깔끔한 인상을 유지하고, 가방이나 주머니에
            넣어 이동할 때도 부피 부담을 덜어줍니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                4mm.
                <br />
                한층 더 슬림하게.
              </>
            }
            imageSrc={[
              "/assets/void/magsafe-ring-premium/slim-profile-angle.webp",
              "/assets/void/magsafe-ring-premium/slim-profile-side.webp",
            ]}
            imageAlt={[
              "휴대폰에 밀착된 Void Magnetic Ring의 슬림한 측면",
              "접힌 Void Magnetic Ring의 얇은 두께",
            ]}
            imageLayout="stacked"
          >
            사용하지 않을 때는 링을 접어 약 4mm의 슬림한 두께로 정리됩니다.
            휴대폰에 붙인 채로 사용하거나 가방과 주머니에 넣어 다닐 때도 부피
            부담을 덜었습니다.
          </FeatureBlock>

          <FeatureBlock
            title="360°로 자유롭게."
            imageSrc={[
              "/assets/void/magsafe-ring-premium/rotate-360-portrait.webp",
              "/assets/void/magsafe-ring-premium/rotate-360-landscape.webp",
            ]}
            imageAlt={[
              "세로 방향으로 자유롭게 각도를 조절한 Void Magnetic Ring",
              "가로 방향으로 자유롭게 각도를 조절한 Void Magnetic Ring",
            ]}
            imageLayout="stacked"
          >
            휴대폰의 방향을 360°로 회전해 세로 화면과 가로 화면을 빠르게
            전환할 수 있습니다. 관절을 펼쳐 낮은 시청 각도부터 세운 촬영
            각도까지 사용 환경에 맞게 조절할 수 있습니다.
          </FeatureBlock>

          <FeatureBlock
            title="잡고, 붙이고, 세우고."
            imageSrc={[
              "/assets/void/magsafe-ring-premium/use-grip.webp",
              "/assets/void/magsafe-ring-premium/use-magnetic-mount.webp",
              "/assets/void/magsafe-ring-premium/use-stand.webp",
            ]}
            imageAlt={[
              "링에 손가락을 걸어 휴대폰을 잡은 모습",
              "자석으로 휴대폰을 금속 표면에 붙인 모습",
              "링을 펼쳐 휴대폰을 세운 모습",
            ]}
            imageLayout="square-stacked"
          >
            링에 손가락을 걸면 그립으로, 금속 표면에 붙이면 마그네틱 거치대로,
            책상 위에 세우면 스탠드로 활용할 수 있습니다. 상황이 달라져도
            액세서리를 바꿀 필요 없이 하나로 이어집니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                약 45g의 가벼움,
                <br />
                어디든 함께.
              </>
            }
            imageSrc="/assets/void/magsafe-ring-premium/weight-45g.webp"
            imageAlt="저울에 표시된 Void Magnetic Ring의 45g 무게"
          >
            합금 바디를 사용하면서도 무게는 약 45g으로 줄였습니다. 기존 판매
            제품의 약 50g보다 가벼우며, 사용하지 않을 때는 슬림하게 접어 휴대폰에
            부착한 상태나 가방과 주머니 안에서도 부담을 덜었습니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                메탈링 하나면,
                <br />
                어떤 기종도 간편.
              </>
            }
            imageSrc={[
              "/assets/void/magsafe-ring-premium/metal-ring-compatible.webp",
              "/assets/void/magsafe-ring-premium/metal-ring-galaxy.webp",
            ]}
            imageAlt={[
              "메탈링을 부착한 아이폰 케이스",
              "메탈링을 부착한 갤럭시 케이스",
            ]}
            imageLayout="row"
          >
            아이폰을 포함한 모든 스마트폰은 메탈링을 케이스에 부착해 사용할 수
            있습니다. 메탈링 하나만 붙여 두면 맥세이프처럼 착 붙고, 기종에
            상관없이 같은 방식으로 간편하게 거치할 수 있습니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                깊이 있는 블랙으로
                <br />
                완성한 세련됨.
              </>
            }
            imageSrc={[
              "/assets/void/magsafe-ring-premium/deep-black-standing.webp",
              "/assets/void/magsafe-ring-premium/deep-black-open.webp",
            ]}
            imageAlt={[
              "깊이 있는 무광 블랙 색상의 Void Magnetic Ring",
              "완전히 펼쳐진 Void Magnetic Ring의 블랙 마감",
            ]}
            imageLayout="stacked"
          >
            무광 블랙은 제품을 더 단정하고 밀도 있게 보이게 합니다. 합금 소재의
            정제된 질감이 스마트폰과 자연스럽게 어우러져, 눈에 띄기 위해
            과장하지 않아도 충분히 완성도 있게 느껴집니다.
          </FeatureBlock>

        </div>
      </section>

      {/* 핵심 수치 */}
      <section className="bg-[#f5f5f7] px-12 pb-36 pt-32">
        <h2 className="text-center text-[58px] font-bold leading-tight tracking-[-0.025em] text-[#1d1d1f]">
          숫자로 보는
          <br />
          <GradientText>Void Magnetic Ring.</GradientText>
        </h2>
        <div className="mt-20 grid grid-cols-2 gap-6">
          {[
            { value: "45", unit: "g", label: "합금 바디의 비교적 가벼운 무게" },
            { value: "2", unit: "면", label: "앞뒤를 활용하는 양면 마그네틱" },
            { value: "360", unit: "°", label: "가로와 세로를 오가는 자유 회전" },
            { value: "3", unit: "in 1", label: "그립·스탠드·마그네틱 거치" },
          ].map(({ value, unit, label }) => (
            <article
              key={label}
              className="flex flex-col items-center justify-center rounded-[28px] bg-white px-8 py-16 text-center"
            >
              <p className="text-[82px] font-bold leading-none tracking-[-0.035em]">
                <GradientText>
                  {value}
                  <span className="ml-2 text-[36px] font-semibold">{unit}</span>
                </GradientText>
              </p>
              <p className="mt-7 text-[25px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">
                {label}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* 신뢰 정보 */}
      <section className="bg-white px-12 pb-36 pt-24">
        <div className="grid grid-cols-2 gap-x-10 gap-y-14">
          {[
            {
              Icon: RefreshCw,
              title: "7일 이내 무상 교환",
              body: "초기 불량은 수령 후 7일 이내 확인해 주시면 배송비 없이 교환해 드립니다.",
            },
            {
              Icon: Smartphone,
              title: "맥세이프 호환",
              body: "맥세이프 지원 스마트폰 또는 맥세이프 호환 케이스에서 사용할 수 있습니다.",
            },
            {
              Icon: ShieldCheck,
              title: "도구 없는 탈부착",
              body: "접착제와 나사, 클램프 없이 필요한 순간 붙이고 분리할 수 있습니다.",
            },
            {
              Icon: PackageCheck,
              title: "당일 발송",
              body: "평일 오후 4시 이전 주문은 당일 발송됩니다. 일부 품목은 제외될 수 있습니다.",
            },
          ].map(({ Icon, title, body }) => (
            <div key={title} className="flex gap-6">
              <Icon
                className="mt-1 h-12 w-12 shrink-0 text-[#0071e3]"
                strokeWidth={2}
                aria-hidden
              />
              <div>
                <p className="text-[28px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">
                  {title}
                </p>
                <p className="mt-3 text-[22px] font-medium leading-[1.5] tracking-[-0.01em] text-[#6e6e73]">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 클로징 */}
      <section className="relative min-h-[1440px] overflow-hidden bg-white px-12 pb-40 pt-12">
        <Image
          src="/assets/void/magsafe-ring-premium/closing-fridge.webp"
          alt="냉장고에 부착한 Void Magnetic Ring과 스마트폰"
          fill
          sizes="764px"
          className="object-cover object-center"
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[50%]"
          style={{
            background:
              "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.94) 28%, rgba(255,255,255,0) 100%)",
          }}
          aria-hidden
        />
        <div className="relative z-10 flex min-h-[1160px] flex-col">
          <div>
            <h2 className="text-center text-[64px] font-bold leading-[1.18] tracking-[-0.028em] text-[#1d1d1f]">
              이제, 아무 데나 붙이세요
            </h2>
            <p className="mx-auto mt-10 max-w-[680px] text-center text-[28px] font-medium leading-[1.6] tracking-[-0.01em] text-[#4a5a66]">
              냉장고 문에도, 사물함에도, 책상 위에도. 붙일 곳을 고르는 순간
              거치대가 생깁니다.
            </p>
          </div>
          <div className="mt-auto text-center">
            <p
              className="text-[52px] font-semibold leading-tight tracking-[-0.02em] text-white"
              style={{ textShadow: "0 2px 18px rgba(0,0,0,0.75)" }}
            >
              Void Magnetic Ring
            </p>
            <p
              className="mt-3 text-[28px] font-medium leading-snug tracking-[-0.01em] text-white"
              style={{ textShadow: "0 2px 14px rgba(0,0,0,0.8)" }}
            >
              강력하게. 자유롭게
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-10 pb-36 pt-40">
        <h2 className="text-center text-[58px] font-bold leading-tight tracking-[-0.025em] text-[#1d1d1f]">
          질문에 답해드립니다.
        </h2>
        <ul className="mt-24">
          {[
            {
              q: "어떤 스마트폰에서 사용할 수 있나요?",
              a: "MagSafe 지원 스마트폰과 MagSafe 호환 케이스에 바로 부착할 수 있습니다. 그 외 기기는 동봉된 메탈링을 케이스 바깥쪽의 평평한 면에 부착해 사용할 수 있습니다.",
            },
            {
              q: "케이스를 착용한 상태에서도 사용할 수 있나요?",
              a: "네. MagSafe 호환 케이스라면 바로 사용할 수 있습니다. 일반 케이스는 동봉된 메탈링을 부착해 주세요. 두껍거나 표면이 거친 케이스는 자력과 접착력이 약해질 수 있습니다.",
            },
            {
              q: "메탈링은 어디에 붙이면 되나요?",
              a: "케이스 바깥쪽의 중앙에 맞춰 부착해 주세요. 먼지와 유분을 닦고 완전히 건조한 뒤 붙이면 더 안정적으로 사용할 수 있습니다. 스마트폰 본체에 직접 부착하는 것은 권장하지 않습니다.",
            },
            {
              q: "양면 마그네틱은 어떻게 사용하나요?",
              a: "큰 원형 면은 스마트폰에, 접이식 링 면은 냉장고·사물함·운동기구처럼 자석이 붙는 평평한 철제 표면에 부착합니다.",
            },
            {
              q: "모든 금속 표면에 붙나요?",
              a: "자석이 반응하는 철제 표면에서 사용할 수 있습니다. 알루미늄과 일부 스테인리스처럼 자석이 붙지 않는 소재가 있으며, 굴곡이나 코팅 상태에 따라서도 고정력이 달라질 수 있습니다.",
            },
            {
              q: "세로와 가로 모두 거치할 수 있나요?",
              a: "네. 360° 회전 구조로 세로와 가로 방향을 자유롭게 바꿀 수 있으며, 두 개의 관절을 펼쳐 원하는 시청 각도로 조절할 수 있습니다.",
            },
            {
              q: "그립으로도 사용할 수 있나요?",
              a: "링에 손가락을 걸어 큰 화면 스마트폰을 한 손으로 사용할 때 안정감을 보조할 수 있습니다. 손가락에 과도한 압박이 느껴지면 위치를 조절해 주세요.",
            },
            {
              q: "휴대하기에 무겁거나 두껍지 않나요?",
              a: "무게는 약 45g입니다. 사용하지 않을 때는 링과 관절을 원형 본체 안쪽으로 접을 수 있어 부피 부담을 줄였습니다.",
            },
            {
              q: "무선 충전할 때도 부착해 둘 수 있나요?",
              a: "거치대가 무선 충전기의 접촉을 방해할 수 있으므로 무선 충전 시에는 본체를 분리한 뒤 사용하는 것을 권장합니다.",
            },
            {
              q: "자석이 카드나 의료기기에 영향을 줄 수 있나요?",
              a: "강한 자석이 포함되어 있으므로 신용카드, 교통카드, 저장 매체와 거리를 두고 사용해 주세요. 심박조율기 등 의료기기 사용자는 제조사의 안전 지침을 확인해야 합니다.",
            },
            {
              q: "구성품은 무엇인가요?",
              a: "Void Magnetic Ring 1개와 비맥세이프 기기용 부착 메탈링 1개가 함께 제공됩니다.",
            },
          ].map(({ q, a }) => (
            <li key={q} className="border-t border-[#d2d2d7] py-7 last:border-b">
              <div className="flex items-start justify-between gap-6">
                <p className="text-[28px] font-semibold leading-[1.35] tracking-[-0.015em] text-[#1d1d1f]">
                  {q}
                </p>
                <ChevronDown
                  className="mt-1.5 h-7 w-7 shrink-0 text-[#86868b]"
                  strokeWidth={2.5}
                  aria-hidden
                />
              </div>
              <p className="mt-4 pr-12 text-[22px] font-medium leading-[1.55] tracking-[-0.01em] text-[#6e6e73]">
                {a}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* 사이즈 */}
      <section className="bg-white px-10 pb-36 pt-32">
        <h2 className="text-center text-[58px] font-bold tracking-[-0.025em] text-[#1d1d1f]">
          사이즈
        </h2>
        <PhotoCard
          className="mt-24"
          aspect="3 / 4"
          src="/assets/void/magsafe-ring-premium/size-guide.webp"
          alt="Void Magnetic Ring의 전체 길이와 링별 크기 안내"
        />
      </section>

      {/* 구성품 */}
      <section className="bg-white px-10 pb-36 pt-32">
        <h2 className="text-center text-[58px] font-bold tracking-[-0.025em] text-[#1d1d1f]">
          구성품
        </h2>
        <PhotoCard
          className="mt-24"
          aspect="3 / 4"
          src="/assets/void/magsafe-ring-premium/package-contents.webp"
          alt="Void Magnetic Ring과 부착용 메탈링 구성품"
        />
        <p className="mt-7 text-center text-[28px] font-semibold text-[#1d1d1f]">
          마그네틱 링 1개 · 부착용 메탈링 1개
        </p>
      </section>

      {/* 제품 정보 */}
      <section className="bg-white px-10 pb-36 pt-32">
        <h2 className="text-center text-[58px] font-bold tracking-[-0.025em] text-[#1d1d1f]">
          제품 정보
        </h2>
        <dl className="mx-auto mt-24 max-w-[720px]">
          {[
            ["품명 및 모델명", "Void Magnetic Ring"],
            ["색상", "블랙"],
            [
              "크기",
              "펼쳤을 때 길이 12cm · 큰 링 외경 5.6cm/내경 4.2cm · 작은 링 외경 3.7cm/내경 2.5cm · 접었을 때 두께 약 4mm",
            ],
            ["중량", "약 45g"],
            ["회전 범위", "360°"],
            ["주요 기능", "스마트폰 그립 · 스탠드 · 금속 표면 거치"],
            ["지원 기기", "MagSafe 지원 스마트폰 및 MagSafe 호환 케이스"],
            ["구성품", "마그네틱 링 1개 · 부착용 메탈링 1개"],
            ["제조자(수입자)", "보이드 투 노바"],
            ["제조국", "확인 후 업데이트 예정"],
            ["품질보증기준", "관련 법령 및 소비자분쟁해결기준에 따름"],
            ["A/S 책임자와 전화번호", "010-6393-0907"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex gap-8 border-b border-[#d2d2d7] py-6 first:border-t"
            >
              <dt className="w-[200px] shrink-0 text-[22px] font-semibold text-[#1d1d1f]">
                {label}
              </dt>
              <dd className="flex-1 text-[22px] font-medium leading-snug text-[#6e6e73]">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 기타 안내 */}
      <section className="bg-white px-10 pb-36 pt-32">
        <h2 className="text-center text-[58px] font-bold tracking-[-0.025em] text-[#1d1d1f]">
          기타 안내
        </h2>
        <div className="mx-auto mt-24 max-w-[720px] space-y-12">
          {[
            {
              title: "취급 시 주의사항",
              bullets: [
                "MagSafe 지원 기기 또는 MagSafe 호환 케이스에서 사용해 주세요.",
                "부착 전 스마트폰과 제품, 금속 표면에 이물질이 없는지 확인해 주세요.",
                "얇거나 불안정한 금속판, 굴곡이 큰 표면에서는 사용을 피해 주세요.",
                "강한 충격이나 진동이 발생하는 상황에서는 제품이 분리될 수 있습니다.",
                "관절을 무리하게 꺾거나 과도한 힘으로 회전하지 마세요.",
                "강한 자석이 포함되어 있으므로 카드와 저장 매체, 의료기기와 거리를 두세요.",
                "물기가 있는 곳에서의 사용은 피해 주세요.",
              ],
            },
            {
              title: "관리 방법",
              body: "부드러운 마른 천으로 가볍게 닦아 주세요. 물이나 화학 세제 사용은 피하고, 접촉면에 금속 가루나 이물질이 붙지 않도록 관리해 주세요.",
            },
            {
              title: "색상 안내",
              body: "화면과 촬영 환경에 따라 실제 제품의 색상이 다르게 보일 수 있습니다.",
            },
            {
              title: "A/S 안내",
              body: "제품 초기 불량은 수령 후 7일 이내 확인해 주시면 교환을 도와드립니다. 문의는 스토어 고객센터를 통해 접수해 주세요.",
            },
            {
              title: "배송 안내",
              bullets: [
                "평균 배송기간은 2~5일이며 일부 품목은 출고지와 반품지 주소가 다를 수 있습니다.",
                "평일 오후 4시 이전 주문은 당일 발송되며 일부 품목은 제외될 수 있습니다.",
                "제주도와 도서산간 지역은 추가 배송비가 발생할 수 있습니다.",
              ],
            },
          ].map((block) => (
            <div key={block.title}>
              <h3 className="text-[28px] font-semibold text-[#1d1d1f]">
                {block.title}
              </h3>
              {"body" in block && block.body ? (
                <p className="mt-4 text-[22px] font-medium leading-snug text-[#6e6e73]">
                  {block.body}
                </p>
              ) : null}
              {"bullets" in block && block.bullets ? (
                <ul className="mt-4 space-y-2 text-[22px] font-medium leading-snug text-[#6e6e73]">
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
            <h3 className="text-[28px] font-semibold text-[#1d1d1f]">
              교환·반품 안내
            </h3>
            <p className="mt-4 text-[22px] font-medium leading-snug text-[#6e6e73]">
              교환 및 반품 접수는 구매하신 몰에서 신청해 주세요.
            </p>
            {[
              {
                title: "교환·반품 가능",
                items: [
                  "상품 수령 후 7일 이내 구매한 몰에서 교환 또는 반품을 신청한 경우",
                  "상품 초기 불량에 대한 교환과 반품은 무료이며 단순 변심은 배송비가 발생할 수 있습니다.",
                ],
              },
              {
                title: "교환·반품 불가",
                items: [
                  "교환 또는 반품 요청 기간이 지난 경우",
                  "구매자 책임으로 상품이나 포장, 구성품이 훼손 또는 누락된 경우",
                  "사용 흔적으로 상품 가치가 현저히 감소한 경우",
                ],
              },
            ].map(({ title, items }) => (
              <div key={title} className="mt-8">
                <p className="text-[22px] font-semibold text-[#1d1d1f]">{title}</p>
                <ul className="mt-3 space-y-2 text-[22px] font-medium leading-snug text-[#6e6e73]">
                  {items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="shrink-0">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </BrandFrame>
  );
}

function FeatureBlock({
  title,
  children,
  statement = false,
  imageSrc,
  imageAlt,
  imageLayout = "single",
}: {
  title: ReactNode;
  children: ReactNode;
  statement?: boolean;
  imageSrc?: string | string[];
  imageAlt?: string | string[];
  imageLayout?: "single" | "row" | "stacked" | "square-stacked";
}) {
  const isRowImage = Array.isArray(imageSrc) && imageLayout === "row";
  const isStackedImage = Array.isArray(imageSrc) && imageLayout === "stacked";
  const isSquareStackedImage =
    Array.isArray(imageSrc) && imageLayout === "square-stacked";

  return (
    <div>
      {!statement ? (
        <div
          className="flex h-[72px] w-[72px] items-center justify-center rounded-full"
          style={{ border: "3px solid #0071e3" }}
          aria-hidden
        >
          <Check className="h-9 w-9 text-[#0071e3]" strokeWidth={3.5} />
        </div>
      ) : null}
      <h2
        className={
          statement
            ? "text-center text-[88px] font-bold leading-none tracking-[-0.04em]"
            : "mt-10 text-[64px] font-bold leading-[1.16] tracking-[-0.03em]"
        }
        style={{
          ...(statement
            ? {
                backgroundImage: "linear-gradient(90deg, #022640, #5786ab)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }
            : { color: "#1d1d1f" }),
          fontFamily:
            '"SF Pro KR", "SF Pro Display", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
        }}
      >
        {title}
      </h2>
      {isRowImage ? (
        <div
          className={`${statement ? "mt-20" : "mt-24"} grid aspect-[3/4] w-full grid-cols-2 gap-3 overflow-hidden rounded-[28px] bg-[#f5f5f7]`}
        >
          {imageSrc.map((src, index) => (
            <div key={src} className="relative h-full w-full">
              <Image
                src={src}
                alt={
                  Array.isArray(imageAlt) ? imageAlt[index] ?? "" : imageAlt ?? ""
                }
                fill
                sizes="382px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      ) : isStackedImage || isSquareStackedImage ? (
        <div className={`${statement ? "mt-20" : "mt-24"} w-full space-y-6`}>
          {imageSrc.map((src, index) => (
            <PhotoCard
              key={src}
              aspect={isSquareStackedImage ? "1 / 1" : "3 / 4"}
              src={src}
              alt={Array.isArray(imageAlt) ? imageAlt[index] ?? "" : imageAlt}
            />
          ))}
        </div>
      ) : (
        <PhotoCard
          className={statement ? "mt-20" : "mt-24"}
          aspect="3 / 4"
          src={typeof imageSrc === "string" ? imageSrc : undefined}
          alt={typeof imageAlt === "string" ? imageAlt : undefined}
        />
      )}
      <p
        className={
          statement
            ? "mt-10 w-full text-[29px] font-semibold leading-[1.7] tracking-[-0.01em] text-[#86868b]"
            : "mt-10 text-[29px] font-semibold leading-[1.7] tracking-[-0.01em] text-[#86868b]"
        }
      >
        {children}
      </p>
    </div>
  );
}

function PhotoCard({
  aspect,
  className = "",
  src,
  alt = "",
}: {
  aspect: string;
  className?: string;
  src?: string;
  alt?: string;
}) {
  return (
    <div
      aria-label={src ? undefined : "사진 자리"}
      className={
        "relative w-full overflow-hidden rounded-[28px] bg-[#f5f5f7] " +
        className
      }
      style={{ aspectRatio: aspect }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="764px"
          className="object-cover"
        />
      ) : null}
    </div>
  );
}

function GradientText({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        backgroundImage: "linear-gradient(90deg, #022640, #5786ab)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      {children}
    </span>
  );
}
