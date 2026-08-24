import { BrandFrame } from "@/components/product-detail/brand-frame";
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
 * VOID · 맥세이프 휴대폰 거치대 (v2 — 설득 구조 실험본)
 * 원본: void-magsafe-phone.tsx
 * 아이콘: Lucide (https://lucide.dev) — 앞으로 전부 여기 사용
 */
export default function VoidMagsafePhoneV2Page() {
  return (
    <BrandFrame brand="void">
      {/* 1. 제품 히어로 — Apple iPad Air 스타일 */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #C8E4F4 0%, #E8F4FB 42%, #F5FAFD 70%, #ffffff 100%)",
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
            Magnetic Phone Stand
          </p>

          <h2
            className="mx-auto mt-8 text-[134px] font-bold leading-[1.02] tracking-[-0.01em]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #0E4A78 0%, #1A6FA8 40%, #5BA3D4 75%, #8EC8EA 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              width: "fit-content",
            }}
          >
            착. 붙다.
          </h2>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/void/macsafe/69b13ad3-0dea-49ec-a54c-66986c1fbfbb-2.png"
            alt="블랙 Void 마그네틱 스마트폰 거치대"
            className="mx-auto mt-16 h-auto w-full max-w-[936px] object-contain"
            style={{ maxHeight: 832 }}
          />

          <p
            className="mt-14 text-[46px] font-bold leading-[1.24] tracking-[-0.022em]"
            style={{
              backgroundImage:
                "linear-gradient(125deg, #165A8C 0%, #1A6FA8 28%, #6FB0DC 48%, #9AD0F0 52%, #6FB0DC 56%, #1A6FA8 72%, #165A8C 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              width: "fit-content",
            }}
          >
            더 자유로운 거치 방식
          </p>

          <p
            className="mx-auto mt-28 max-w-[780px] px-4 text-center text-[28px] font-normal leading-[1.5] tracking-[-0.01em]"
            style={{
              color: "#1d1d1f",
              fontFamily:
                '"SF Pro KR", "SF Pro Text", Pretendard, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            강력한 마그네틱으로 완성해
            <br />
            더욱 안정적이고 편안한 사용감을
            <br />
            선사하는 휴대폰 거치대. 양면 마그네틱
            <br />
            설계로 책상 위는 물론, 금속 표면 어디서나
            <br />
            자유롭게 거치할 수 있습니다. 여기에
            <br />
            컴팩트한 사이즈와 간편하게 휴대할 수
            <br />
            있는 디자인까지, 어디든 부담 없이
            <br />
            함께할 준비가 되어 있죠. 이제
            <br />
            원하는 곳 어디서든,
            <br />
            더 자유롭게 붙여 볼까요?
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
                폰을 세울 자리가,
                <br />
                늘 마땅치 않죠.
              </>
            }
            imageSrc="/assets/void/macsafe/1.png"
            imageAlt="주방 벽에 휴대폰을 기대 세워둔 모습"
            bodyAfterImage
          >
            요리하다 레시피를 보려고 폰을 벽에 기대 세워 본 적, 있으실 겁니다.
            운동할 때는 기구 위에 아슬아슬하게 올려두고요.{" "}
            <span style={{ color: "#1d1d1f" }}>
              화면을 볼 일은 계속 생기는데, 폰을 둘 자리는 늘 없습니다.
            </span>
          </FeatureBlock>

          <FeatureBlock
            title="양면 자석으로 고민 끝."
            imageSrc="/assets/void/macsafe/double-magnetic.png"
            imageAlt="앞면과 뒷면에 자석이 적용된 맥세이프 휴대폰 거치대"
            bodyAfterImage
          >
            한쪽은 휴대폰에, 다른 한쪽은 금속 표면에. 양면이 모두 자석이라
            우리가 생활하는 공간 어디든 척척 붙습니다. 벽에 기대 세울 일도,
            아슬아슬하게 올려둘 일도 없죠.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                붙인 뒤에도,
                <br />
                원하는 각도 그대로.
              </>
            }
            imageSrc="/assets/void/macsafe/rotation-360-angle-180.png"
            imageAlt="휴대폰에 부착한 거치대의 360도 회전과 180도 각도 조절 기능"
            bodyAfterImage
          >
            360° 회전과 180° 각도 조절로 화면을 보는 방향에 맞춰 자유롭게
            움직일 수 있습니다. 세로로 볼 때도, 가로로 돌려 영상을 볼 때도
            원하는 시선과 자세에 맞춰 편안하게 고정됩니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                아이폰 일곱 대를
                <br />
                붙잡는 힘.
              </>
            }
            imageSrc="/assets/void/macsafe/magnetic-strength.png"
            imageAlt="스마트폰에 강하게 부착된 맥세이프 휴대폰 거치대"
            bodyAfterImage
          >
            마그네틱 거치대에서 가장 불안한 건 떨어지는 순간입니다. 이 제품의
            자력은 17N,{" "}
            <span style={{ color: "#1d1d1f" }}>
              약 1.7kg을 잡아당기는 힘입니다.
            </span>{" "}
            아이폰 프로 맥스 일곱 대를 합친 무게죠. 네오디뮴 자석이 그만큼의
            힘으로 붙잡고 있으니, 손이 스쳐도 진동이 있어도 제자리를 지킵니다.
          </FeatureBlock>

          <FeatureBlock
            title="돌리고, 기울이고."
            imageSrc="/assets/void/macsafe/rotation-angle.png"
            imageAlt="가로와 세로로 거치하고 각도를 조절한 맥세이프 휴대폰 거치대"
            bodyAfterImage
          >
            세로로 보다가 영상이 나오면 가로로. 붙인 채로 돌리면 됩니다. 각도도
            조절되니 앉은 자세에 맞춰 화면을 기울여 두면 목을 숙일 일이
            줄어들죠.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                접으면 슬림,
                <br />
                실용적인 사용.
              </>
            }
            imageSrc={[
              "/assets/void/macsafe/folded-slim.png",
              "/assets/void/macsafe/pocket-portability.png",
            ]}
            imageAlt="접힌 맥세이프 휴대폰 거치대와 주머니에 휴대하는 모습"
            imageLayout="stacked"
            bodyAfterImage
          >
            쓰지 않을 때가 더 중요합니다. 접으면 두께 21.5mm, 주머니에 넣어도
            티가 나지 않습니다. 필요할 때 펼치면 그대로 스탠드가 되고요.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                약 50g의 가벼움,
                <br />
                어디든 함께.
              </>
            }
            imageSrc="/assets/void/macsafe/weight-50g.png"
            imageAlt="전자저울 위에서 50g으로 측정된 맥세이프 휴대폰 거치대"
            bodyAfterImage
          >
            약 50g의 가벼운 무게로 손에 들고 이동할 때 부담이 적습니다. 접어서
            가방이나 파우치에 넣어 두었다가, 필요한 곳에서 꺼내 바로 사용할 수
            있죠. 강력한 자력과 휴대성을 함께 담았습니다.
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
              "/assets/void/macsafe/metaling-iphone.png",
              "/assets/void/macsafe/metaling-galaxy.png",
            ]}
            imageAlt="메탈링을 부착한 아이폰 케이스와 갤럭시 케이스"
            bodyAfterImage
          >
            아이폰을 포함한 모든 스마트폰은 동봉된 메탈링을 케이스에 부착해
            사용할 수 있습니다. 메탈링 하나만 붙여 두면 맥세이프처럼 착 붙고,
            기종에 상관없이 같은 방식으로 간편하게 거치할 수 있습니다.
          </FeatureBlock>

          <FeatureBlock
            title={
              <>
                깊이 있는 블랙으로
                <br />
                완성한 세련됨.
              </>
            }
            imageSrc="/assets/void/macsafe/black-finish.png"
            imageAlt="블랙 아이폰에 부착된 무광 블랙 맥세이프 휴대폰 거치대"
            bodyAfterImage
          >
            무광 블랙은 제품을 더 단정하고 밀도 있게 보이게 합니다. ABS와 아연
            합금을 조합해 손에 쥐었을 때의 감촉까지 신경 썼습니다. 눈에 띄려
            애쓰지 않아도 충분히 완성도 있게 느껴지는 이유죠.
          </FeatureBlock>
        </div>
      </section>

      {/* [신규] 스펙 하이라이트 — 숫자를 문단에서 꺼내 크게 */}
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
            Magnetic Stand.
          </span>
        </h2>

        <div className="mt-20 grid grid-cols-2 gap-6">
          {[
            { value: "17", unit: "N", label: "아이폰 일곱 대를 붙잡는 힘" },
            { value: "2", unit: "면", label: "앞뒤 모두 마그네틱" },
            { value: "21.5", unit: "mm", label: "접었을 때 두께" },
            { value: "145", unit: "mm", label: "펼쳤을 때 높이" },
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

      {/* [신규] 신뢰 배지 — 구매 직전 불안 제거 */}
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
              title: "17N 네오디뮴 자석",
              body: "약 1.7kg을 잡아당기는 힘으로 붙잡아, 수직면에 붙여도 흘러내리지 않습니다.",
            },
            {
              Icon: Smartphone,
              title: "모든 스마트폰 사용 가능",
              body: "아이폰을 포함한 모든 스마트폰은 동봉된 메탈링을 케이스에 붙이면 사용할 수 있습니다.",
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

      {/* [신규] 클로징 — 설득 파트의 마지막, 정보 파트로 넘어가기 전 */}
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
          이제, 아무 데나 붙이세요
        </h2>
        <p
          className="mx-auto mt-10 max-w-[680px] text-center text-[28px] font-medium leading-[1.6] tracking-[-0.01em]"
          style={{
            color: "#4a5a66",
            fontFamily:
              '"SF Pro KR", "SF Pro Text", Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          냉장고 문에도, 사물함에도, 책상 위에도. 붙일 곳을 고르는 순간
          거치대가 생깁니다.
        </p>

        <div
          className="mt-16 w-full overflow-hidden rounded-[28px] bg-[#f5f5f7]"
          style={{ aspectRatio: "16 / 10" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/void/macsafe/closing-stand.png"
            alt="책상 위에 세워진 맥세이프 휴대폰 거치대"
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
          Void Magnetic Phone Stand
        </p>
        <p
          className="mt-3 text-center text-[28px] font-normal leading-snug tracking-[-0.01em]"
          style={{ color: "#6e7e8a" }}
        >
          강력하게. 자유롭게
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
              q: "어떤 스마트폰에서 사용할 수 있나요?",
              a: (
                <>
                  아이폰을 포함한 모든 스마트폰은 구성품에 함께 든{" "}
                  <span style={{ color: "#1d1d1f" }}>메탈링</span>을 케이스에
                  부착하면 사용할 수 있습니다. 기종에 상관없이 같은 방식으로
                  간편하게 거치할 수 있습니다.
                </>
              ),
            },
            {
              q: "저렴한 마그네틱 거치대와 뭐가 다른가요?",
              a: (
                <>
                  자력과 구조가 다릅니다. 저가 제품은 자력이 약해 수직면에
                  붙이면 서서히 흘러내리는 경우가 많습니다. 이 제품은{" "}
                  <span style={{ color: "#1d1d1f" }}>17N 네오디뮴 자석</span>
                  으로 약 1.7kg을 잡아당기는 힘을 냅니다. 또 대부분의 거치대가
                  책상 위 전용인 것과 달리{" "}
                  <span style={{ color: "#1d1d1f" }}>뒷면까지 자석</span>이라,
                  금속이 있는 곳이라면 어디든 거치대로 쓸 수 있습니다.
                </>
              ),
            },
            {
              q: "케이스를 착용한 상태에서도 사용할 수 있나요?",
              a: "MagSafe 호환 케이스에서는 안정적으로 사용할 수 있습니다. 일반 케이스나 두꺼운 케이스, 카드지갑을 함께 사용하는 경우 자력이 약해질 수 있습니다.",
            },
            {
              q: "자력이 약해서 스마트폰이 떨어지지는 않나요?",
              a: (
                <>
                  <span style={{ color: "#1d1d1f" }}>17N</span>의 네오디뮴
                  자석을 적용해, 약 1.7kg을 잡아당기는 힘으로 고정합니다. 아이폰
                  프로 맥스 일곱 대를 합친 무게에 해당하는 힘이라 일상적인 사용
                  환경에서는 안정적입니다. 다만 강한 충격이나 심한 흔들림에서는
                  분리될 수 있습니다.
                </>
              ),
            },
            {
              q: "양면 마그네틱은 어떻게 사용하나요?",
              a: "한쪽에는 스마트폰을 부착하고, 다른 한쪽은 금속 표면에 부착하여 다양한 환경에서 편리하게 사용할 수 있습니다.",
            },
            {
              q: "세로와 가로 모두 거치할 수 있나요?",
              a: "네. 스마트폰을 세로 또는 가로 방향으로 자유롭게 거치하여 영상 시청, 화상회의, 콘텐츠 감상 등 다양한 용도로 사용할 수 있습니다.",
            },
            {
              q: "금속이 아닌 곳에도 부착할 수 있나요?",
              a: "제품 뒷면은 금속 표면에 부착하도록 설계되었습니다. 비금속 표면에서는 별도의 금속 플레이트가 필요할 수 있습니다. 책상처럼 붙일 곳이 없는 자리에서는 접이식 구조를 펼쳐 스탠드로 사용하시면 됩니다.",
            },
            {
              q: "자석이 카드나 전자기기에 영향을 줄 수 있나요?",
              a: "강한 자석이 내장되어 있으므로 신용카드, 교통카드, 저장 매체 및 의료기기와는 일정 거리를 두고 사용해 주세요.",
            },
            {
              q: "휴대하기에도 편한가요?",
              a: (
                <>
                  접이식 디자인으로 사용하지 않을 때는 두께{" "}
                  <span style={{ color: "#1d1d1f" }}>21.5mm</span>로 접혀,
                  가방이나 주머니에 넣고 편리하게 휴대할 수 있습니다.
                </>
              ),
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

        <ul className="mt-24 grid grid-cols-2 gap-8">
          {[
            {
              label: "마그네틱 휴대폰 거치대 x1",
              src: "/assets/void/macsafe/Photoroom_20260725_124017.png",
            },
            {
              label: "메탈링 x2",
              src: "/assets/void/macsafe/e15c76b5-c4ce-47d7-a4f9-4d62ec9c43a4-2.png",
            },
          ].map(({ label, src }) => (
            <li key={label} className="text-center">
              <div
                className="flex items-center justify-center overflow-hidden rounded-[28px] bg-[#f5f5f7] px-8 py-12"
                style={{ aspectRatio: "3 / 4", minHeight: 0 }}
              >
                {src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={src}
                    alt={label}
                    className="mx-auto h-auto w-full object-contain"
                    style={{
                      maxHeight: src.includes("Photoroom") ? 620 : 420,
                      transform: src.includes("Photoroom")
                        ? "scale(1.7)"
                        : undefined,
                    }}
                  />
                ) : null}
              </div>
              <p
                className="mt-6 text-[28px] font-semibold tracking-[-0.01em]"
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

        <div className="mx-auto mt-24 flex max-w-[780px] items-center justify-center overflow-hidden rounded-[28px] bg-white px-8 py-12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/void/macsafe/Photoroom_20260725_125625.png"
            alt="Void 마그네틱 스마트폰 거치대의 접었을 때와 펼쳤을 때 치수"
            className="mx-auto h-auto w-full object-contain"
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
            ["품명 및 모델명", "마그네틱 휴대폰 거치대"],
            ["재질", "ABS · 아연 합금 · 네오디뮴 자석"],
            ["색상", "블랙"],
            ["크기", "접힘 59 × 21.5 mm / 펼침 59 × 145 mm"],
            ["중량", "약 50g"],
            ["자력", "17N"],
            ["구성품", "본체 1개, 메탈링 2개"],
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
                "MagSafe 지원 기기 또는 MagSafe 케이스에 사용해 주세요. 두꺼운 케이스·카드 지갑을 끼운 경우 부착력이 약해질 수 있습니다.",
                "금속 표면에 부착할 때는 안정적인 면을 이용해 주세요. 얇거나 불안정한 면에서는 떨어질 수 있습니다.",
                "관절을 무리하게 꺾거나 돌리지 마세요.",
                "강한 자석이 포함되어 있으니 신용카드, 교통카드, 의료기기 등과 가까이 두지 마세요.",
                "물기가 있는 곳에서의 사용은 피해 주세요.",
                "어린이의 손이 닿지 않는 곳에 보관해 주세요.",
                "제품을 임의로 분해하거나 개조하지 마세요.",
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
                      <span
                        className={
                          item.startsWith("강한 자석이")
                            ? "whitespace-nowrap"
                            : undefined
                        }
                      >
                        {item}
                      </span>
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
  imageLayout = "row",
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
  imageSrc?: string | string[];
  imageAlt?: string | string[];
  imageLayout?: "row" | "stacked";
  aspect?: string;
  imageScale?: number;
  framePy?: number;
  noBackground?: boolean;
  hideImage?: boolean;
  bodyAfterImage?: boolean;
  photoLabel?: string;
}) {
  const isStackedImage =
    Array.isArray(imageSrc) && imageLayout === "stacked";

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
      className={`mt-24 w-full ${isStackedImage ? "" : "rounded-[28px]"} ${
        !imageSrc && photoLabel ? "flex items-center justify-center" : ""
      }`}
      style={{
        paddingTop: framePy,
        paddingBottom: framePy,
        overflow: imageScale ? "visible" : "hidden",
        aspectRatio: framePy || isStackedImage ? undefined : aspect,
        backgroundColor: noBackground ? undefined : "#f5f5f7",
      }}
    >
      {imageSrc ? (
        <div
          className={
            Array.isArray(imageSrc)
              ? isStackedImage
                ? "w-full space-y-6"
                : `grid h-full w-full ${imageSrc.length > 2 ? "grid-cols-3" : "grid-cols-2"} gap-3`
              : "h-full w-full"
          }
        >
          {(Array.isArray(imageSrc) ? imageSrc : [imageSrc]).map(
            (src, index) => (
              <div
                key={src}
                className={
                  isStackedImage
                    ? "aspect-[3/4] overflow-hidden rounded-[28px] bg-[#f5f5f7]"
                    : undefined
                }
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={
                    Array.isArray(imageAlt) ? imageAlt[index] ?? "" : imageAlt
                  }
                  className={
                    framePy
                      ? "mx-auto block w-full"
                      : "h-full w-full object-cover"
                  }
                  style={
                    imageScale
                      ? { transform: `scale(${imageScale})` }
                      : undefined
                  }
                />
              </div>
            ),
          )}
        </div>
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
