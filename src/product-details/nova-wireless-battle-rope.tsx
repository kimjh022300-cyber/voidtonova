import { BrandFrame } from "@/components/product-detail/brand-frame";
import { ReviewSection } from "@/components/product-detail/review-section";
import Image from "next/image";
import type { ReactNode } from "react";
import { Battery, Check, ChevronDown, PackageCheck, RefreshCw, Truck } from "lucide-react";

const features = [
  [<>흔드는 순간,<br />상체와 코어가 함께 깨어납니다.</>, "스프링의 반발을 계속 제어하는 동안 어깨와 팔, 전완이 반복적으로 움직입니다. 흔들리는 몸을 잡기 위해 복부와 몸통도 함께 사용되어, 단순한 팔 운동을 넘어 상체와 코어를 연결하는 운동이 됩니다."],
  [<>흔들수록 돌아오는,<br />반복 저항.</>, "제품을 흔들면 스프링의 반발력과 관성이 손과 팔에 반복적인 저항을 전달합니다. 단순히 막대를 움직이는 것이 아니라, 되돌아오는 힘을 계속 제어하며 운동의 리듬을 이어가는 구조입니다."],
  ["소음 부담은 ZERO.", "무거운 로프를 바닥에 내리칠 필요가 없어 반복되는 충격음과 진동 부담을 줄였습니다. 완전한 무소음은 아니지만, 바닥 충격이 걱정되는 집에서도 한결 부담 없이 움직일 수 있습니다."],
  ["고정도, 설치도 필요 없이.", "운동을 시작하기 전부터 힘을 뺄 필요는 없습니다. 제품을 꺼내 손목 스트랩을 걸고 양손에 쥐면 준비 끝. 별도의 고정 장치나 조립 과정 없이, 마음먹은 순간 바로 첫 동작을 시작할 수 있습니다."],
  [<>빠르게 흔들어도,<br />손안은 안정적으로.</>, "속도가 빨라질수록 손잡이를 안정적으로 쥐는 것이 중요합니다. 미끄럼을 줄이는 손잡이 패턴이 손안에서 안정적으로 잡히고, 손목 스트랩이 한 번 더 받쳐줘 빠른 동작에서도 운동의 리듬에 집중할 수 있습니다."],
  ["강도 높은 운동에 적합한 소재.", "빠르고 크게 흔드는 동작이 반복되는 만큼, 제품의 기본 구조도 탄탄해야 합니다. 반발력을 만드는 강철 스프링과 단단한 PP 소재를 사용하고, 양 끝은 반복되는 충격과 마모를 고려해 마감했습니다. 강도 높은 운동을 꾸준히 이어갈 수 있도록 단단하게 구성했습니다."],
  ["간편한 정리, 깔끔한 디자인.", "개당 약 50cm의 짧은 형태라 운동이 끝난 뒤 넓은 공간을 차지하지 않습니다. 침대 밑이나 옷장, 운동용품 수납함에 간편하게 보관할 수 있고, 블랙 컬러의 깔끔한 디자인으로 꺼내두어도 운동 공간에 자연스럽게 어우러집니다."],
] as const;

export default function NovaWirelessBattleRopePage() {
  return <BrandFrame brand="nova">
    <section className="relative min-h-[1440px] overflow-hidden bg-[#111111]">
      <Image
        src="/assets/sync-2026-10-29/nova/battle-rope/hero-battle-rope-v2.webp"
        alt="헬스장에서 Nova Battle Rope로 웨이브 운동을 하는 남성"
        fill
        priority
        sizes="860px"
        className="object-cover object-center"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.22) 28%, rgba(0,0,0,0.08) 52%, rgba(0,0,0,0.86) 100%)",
        }}
        aria-hidden
      />
      <div
        className="relative z-10 flex min-h-[1440px] flex-col px-4 pb-24 pt-14 text-center"
        style={{
          fontFamily:
            '"SF Pro KR", "SF Pro Display", "SF Pro Text", Pretendard, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Helvetica Neue", Helvetica, Arial, sans-serif',
        }}
      >
        <p
          className="mx-auto w-fit text-[41px] font-semibold leading-[1.25] tracking-[0.007em]"
          style={{
            backgroundImage:
              "linear-gradient(105deg, #ffffff 0%, #d9e9f5 48%, #ffffff 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.9))",
          }}
        >
          Nova Battle Rope
        </p>
        <h1
          className="mx-auto mt-6 text-[84px] font-bold leading-[1.12] tracking-[-0.03em] text-white"
          style={{
            textShadow:
              "0 3px 28px rgba(0,0,0,1), 0 1px 6px rgba(0,0,0,0.95)",
          }}
        >
          상체와 코어를,
          <br />
          한 번에 깨우다.
        </h1>
        <p className="mx-auto mt-auto max-w-[780px] px-4 text-center text-[28px] font-medium leading-[1.55] tracking-[-0.01em] text-white">
          양손으로 리듬을 만들면
          <br />
          어깨와 팔, 코어가 함께 깨어납니다.
          <br />
          짧게 움직여도 운동의 밀도는 충분합니다.
        </p>
      </div>
    </section>

    <section className="relative aspect-[3/5] overflow-hidden bg-[#171719]">
      <Image
        src="/assets/sync-2026-10-29/nova/battle-rope/product-overview-extended-cropped.webp"
        alt="교차해 세워 놓은 Nova Battle Rope 한 쌍"
        fill
        sizes="860px"
        className="object-cover object-bottom"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[24%]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0) 100%)",
        }}
        aria-hidden
      />
      <div className="absolute inset-x-0 top-24 z-10 text-center">
        <h2 className="text-[70px] font-bold leading-none tracking-[-0.03em]">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(105deg, #ffffff 0%, #d9e9f5 48%, #ffffff 100%)",
              filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.9))",
            }}
          >
            Nova Battle Rope.
          </span>
        </h2>
        <p
          className="mt-5 whitespace-nowrap text-[26px] font-medium tracking-[-0.01em] text-white"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.9)" }}
        >
          긴 로프 없이, 두 손에 쥐고 바로 시작하는 배틀로프.
        </p>
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[16%]"
        style={{
          background:
            "linear-gradient(180deg, rgba(245,245,247,0) 0%, #f5f5f7 100%)",
        }}
        aria-hidden
      />
    </section>

    <section className="px-12 py-36" style={{background:"linear-gradient(180deg, #f5f5f7 0%, #f5f5f7 72%, #ffffff 100%)"}}><Title>한눈에 보는<br /><Gradient>Nova Battle Rope.</Gradient></Title><div className="mt-20 grid grid-cols-2 gap-6">{[["약 50cm","개당 길이"],["약 1kg","한 쌍 무게"],["2개 구성","양손 운동"],["충전 없음","잡고 바로 시작"]].map(([v,l])=><article key={l} className="rounded-[28px] bg-white px-6 py-16 text-center"><p className="whitespace-nowrap text-[70px] font-bold leading-none tracking-[-0.03em]"><Gradient>{v}</Gradient></p><p className="mt-7 text-[26px] font-semibold tracking-[-0.015em]">{l}</p></article>)}</div></section>

    <BattleRopePhilosophy />
    <RopeComparison />

    <section className="bg-white px-10 py-36">
      <h2 className="text-center text-[58px] font-bold leading-tight tracking-[-0.03em]"><span className="bg-clip-text text-transparent" style={{backgroundImage:"linear-gradient(90deg, #022640, #5786AB)"}}>Nova Battle Rope</span><br /><span className="text-[61px]">나에게 맞는 이유.</span></h2>
      <div className="mt-20 overflow-hidden rounded-[28px] border border-[#d2d2d7]">
        <table className="w-full table-fixed border-collapse text-center">
          <caption className="sr-only">가벼운 홈트, 헬스장 운동, Nova Battle Rope 비교</caption>
          <thead><tr className="bg-[#f5f5f7]"><th aria-label="비교 항목" className="w-[31%] px-3 py-7"/><th className="border-l border-[#d2d2d7] px-2 py-7 text-[22px] font-bold leading-tight">가벼운 홈트</th><th className="border-l border-[#d2d2d7] px-2 py-7 text-[22px] font-bold leading-tight">헬스장 운동</th><th className="border-l border-[#d2d2d7] bg-[#eef7ff] px-2 py-7 text-[22px] font-bold leading-tight text-[#0071e3]">Nova<br />Battle Rope</th></tr></thead>
          <tbody>{[
            ["높은 운동 밀도","X","O","O"],
            ["근력·유산소 동시 운동","X","O","O"],
            ["이동 없이 운동","O","X","O"],
            ["작은 공간에서 사용","O","X","O"],
            ["저소음","X","X","O"],
            ["준비 없이 바로 시작","O","X","O"],
          ].map(([label,home,gym,nova])=><tr key={label} className="border-t border-[#d2d2d7]"><th className="bg-white px-3 py-7 text-center text-[22px] font-semibold leading-snug">{label}</th>{[home,gym,nova].map((value,index)=><td key={`${label}-${index}`} className={`border-l border-[#d2d2d7] px-2 py-7 text-[34px] font-bold ${index===2?"bg-[#eef7ff] text-[#0071e3]":value==="O"?"bg-white text-[#0071e3]":"bg-white text-[#86868b]"}`}>{value}</td>)}</tr>)}</tbody>
        </table>
      </div>
    </section>

    <section className="bg-white px-12 py-36">
      <Feature
        title={features[0][0]}
        imageSrc="/assets/sync-2026-10-29/nova/battle-rope/upper-core-engagement-closeup.webp"
        imageAlt="Nova Battle Rope를 빠르게 흔드는 손과 전완 클로즈업"
      >
        {features[0][1]}
      </Feature>
    </section>
    <MuscleMap />

    <section className="bg-white px-12 py-36">
      <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-[3px] border-[#0071e3]"><Check className="h-9 w-9 text-[#0071e3]"/></div>
      <h2 className="mt-10 text-[63px] font-bold leading-[1.15] tracking-[-0.025em]">근력과 유산소를,<br />하나의 움직임으로.</h2>
      <div className="relative mt-24 aspect-[3/4] overflow-hidden rounded-[28px] bg-[#f5f5f7]">
        <Image
          src="/assets/sync-2026-10-29/nova/battle-rope/strength-cardio-squat-wave.webp"
          alt="스쿼트 자세로 Nova Battle Rope 웨이브 운동을 하는 모습"
          fill
          sizes="764px"
          className="object-cover"
        />
      </div>
      <div className="mt-14 border-b border-[#d2d2d7]">
        {[
          ["상체 근지구력","어깨와 팔, 전완을 반복적으로 사용합니다."],
          ["코어 안정화","반동에 맞서 몸통과 자세를 유지합니다."],
          ["유산소 운동","빠른 연속 동작으로 심박수를 높이는 데 도움을 줍니다."],
        ].map(([title,body])=><div key={title} className="flex items-center gap-7 border-t border-[#d2d2d7] py-7"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0071e3]"><Check className="h-6 w-6 text-white" strokeWidth={3}/></div><h3 className="w-[190px] shrink-0 text-[28px] font-bold tracking-[-0.02em]">{title}</h3><p className="text-[22px] font-medium leading-[1.5] tracking-[-0.01em] text-[#6e6e73]">{body}</p></div>)}
      </div>
    </section>

    <section className="bg-white px-12 py-36">
      <Title><Gradient>내가 정하는 운동 강도.</Gradient></Title>
      <p className="mt-8 whitespace-nowrap text-center text-[26px] font-medium leading-[1.6] tracking-[-0.01em] text-[#6e6e73]">속도와 움직임의 크기로, 운동 강도를 직접 조절하세요.</p>
      <div className="mt-20 grid grid-cols-3 gap-5">
        {[
          {step:"01",title:"초보자",motion:"천천히, 작게",purpose:"리듬부터 익히기",background:"#f4f8fb"},
          {step:"02",title:"중급자",motion:"빠르게, 크게",purpose:"운동 강도 높이기",background:"#e9f3fa"},
          {step:"03",title:"숙련자",motion:"스쿼트·런지와 함께",purpose:"전신으로 확장하기",background:"#dceef9"},
        ].map(({step,title,motion,purpose,background})=><article key={step} className="rounded-[28px] border border-[#d2d2d7] px-7 py-9 text-center" style={{backgroundColor:background}}><p className="text-[20px] font-bold tracking-[0.08em] text-[#0071e3]">{step}</p><h3 className="mt-5 text-[32px] font-bold tracking-[-0.02em]">{title}</h3><p className="mt-7 text-[22px] font-semibold leading-[1.4] text-[#3f4f5b]">{motion}</p><div className="mx-auto mt-7 h-px w-12 bg-[#9dbdd3]"/><p className="mt-6 text-[19px] font-medium text-[#6e6e73]">{purpose}</p></article>)}
      </div>
    </section>

    <section className="bg-white px-12 py-36">
      <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-[3px] border-[#0071e3]">
        <Check className="h-9 w-9 text-[#0071e3]" />
      </div>
      <h2 className="mt-10 whitespace-nowrap text-[63px] font-bold leading-[1.15] tracking-[-0.025em]">
        컨디션에 맞는 다양한 운동.
      </h2>
      <div className="mt-20 grid grid-cols-2 gap-6">
        {[
          ["동시 웨이브", "양손을 동시에 위아래로", "exercise-simultaneous-wave.webp", "양손으로 동시에 Nova Battle Rope 웨이브를 만드는 모습"],
          ["교차 웨이브", "왼손과 오른손을 번갈아", "exercise-alternating-wave.webp", "양손을 번갈아 Nova Battle Rope 웨이브를 만드는 모습"],
          ["좌우 스윙", "몸통을 잡고 좌우로", "exercise-side-swing.webp", "두 Nova Battle Rope를 몸 한쪽으로 스윙하는 모습"],
          ["원형 회전", "안쪽과 바깥쪽으로 원을 그리며", "exercise-circular-rotation.webp", "양손으로 Nova Battle Rope를 원형 회전하는 모습"],
          ["스쿼트 웨이브", "하체 동작과 웨이브를 함께", "exercise-squat-wave.webp", "스쿼트 자세에서 Nova Battle Rope 웨이브를 만드는 모습"],
          ["싱글 암 웨이브", "한쪽 팔씩 집중해서", "exercise-single-arm-wave.webp", "한쪽 팔로 Nova Battle Rope 웨이브를 만드는 모습"],
        ].map(([title, body, imageFile, imageAlt]) => (
          <article key={title} className="overflow-hidden rounded-[28px] bg-[#f5f5f7]">
            <div className="relative aspect-square overflow-hidden bg-[#eeeeF0]">
              <Image
                src={`/assets/sync-2026-10-29/nova/battle-rope/${imageFile}`}
                alt={imageAlt}
                fill
                sizes="370px"
                className="object-cover"
              />
            </div>
            <div className="p-7">
              <h3 className="text-[29px] font-bold">{title}</h3>
              <p className="mt-3 text-[21px] text-[#6e6e73]">{body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="bg-white px-12 py-36">
      <div className="flex flex-col gap-48">
        {features.slice(1).map(([title, body], index) => (
          <Feature
            key={`battle-rope-feature-${index}`}
            title={title}
            imageSrc={
              index === 0
            ? "/assets/sync-2026-10-29/nova/battle-rope/rebound-resistance-closeup-v3.webp"
            : index === 1
              ? "/assets/sync-2026-10-29/nova/battle-rope/noise-impact-comparison-v4.webp"
              : index === 2
                ? "/assets/sync-2026-10-29/nova/battle-rope/no-installation-home-gym-final.webp"
                : index === 3
                  ? "/assets/sync-2026-10-29/nova/battle-rope/stable-grip-motion.webp"
                  : index === 4
                    ? "/assets/sync-2026-10-29/nova/battle-rope/durable-material-cutaway-closeup.webp"
                    : index === 5
                      ? "/assets/sync-2026-10-29/nova/battle-rope/clean-storage-interior-reversed.webp"
              : undefined
            }
            imageAlt={
              index === 0
            ? "반대 방향으로 움직이며 반복 저항을 만드는 Nova Battle Rope"
            : index === 1
              ? "바닥을 치는 일반 배틀로프와 바닥에 닿지 않는 Nova Battle Rope 비교"
              : index === 2
                ? "고정 장치 없이 홈짐에서 바로 꺼내 사용하는 Nova Battle Rope"
                : index === 3
                  ? "빠르게 흔들면서도 손안에서 안정적으로 잡히는 Nova Battle Rope"
                  : index === 4
                    ? "외피를 분리해 내부의 탄성 스프링 구조를 보여주는 Nova Battle Rope"
                    : index === 5
                      ? "밝은 방의 서랍장 옆에 가지런히 세워 보관한 Nova Battle Rope"
              : ""
            }
            imageAspect={index === 1 ? "1 / 2" : undefined}
          >
            {body}
          </Feature>
        ))}
      </div>
    </section>

    <section className="bg-white px-12 pb-36 pt-32">
      <Title>이런 분께 잘 맞습니다.</Title>
      <p className="mx-auto mt-8 whitespace-nowrap text-center text-[26px] font-medium leading-[1.6] tracking-[-0.01em] text-[#6e6e73]">짧고 밀도 높은 운동을 원하는 분들입니다.</p>
      <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-14">
        {[
          {scene:"집에서 운동하는 분", line:"집에서도 어깨와 팔, 코어를 함께 쓰며 운동의 밀도를 높일 수 있습니다.", imageSrc:"/assets/sync-2026-10-29/nova/pushup-bar/audience-home-workout.webp", imageAlt:"집에서 운동하는 모습"},
          {scene:"짧고 굵게 운동하는 분", line:"빠른 웨이브 동작으로 짧은 시간에도 상체를 반복해서 움직이고 심박수를 높여보세요.", imageSrc:"/assets/sync-2026-10-29/nova/ab-slide/intense-short-workout.webp", imageAlt:"짧고 강도 높은 운동을 하는 모습"},
          {scene:"근력·유산소를 함께 원하는 분", line:"스프링의 반발을 제어하며 상체 근지구력과 유산소 운동을 함께 이어갈 수 있습니다.", imageSrc:"/assets/sync-2026-10-29/nova/battle-rope/audience-strength-cardio.webp", imageAlt:"Nova Battle Rope로 근력과 유산소 운동을 함께 하는 모습"},
          {scene:"바로 시작하고 싶은 분", line:"별도의 설치나 충전 없이 양손에 잡는 순간 바로 운동을 시작할 수 있습니다.", imageSrc:"/assets/sync-2026-10-29/nova/pressure-stepper/scene-02-warmup.webp", imageAlt:"집에서 운동을 준비하는 모습"},
        ].map(({scene, line, imageSrc, imageAlt}) => (
          <div key={scene}>
            <div className="w-full overflow-hidden rounded-[28px] bg-[#f5f5f7]" style={{aspectRatio:"4 / 5"}} aria-label={imageSrc ? undefined : "사진 자리"}>
              {imageSrc && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover" />
              )}
            </div>
            <p className="mt-7 text-[30px] font-bold tracking-[-0.02em]">{scene}</p>
            <p className="mt-3 text-[22px] font-medium leading-[1.5] tracking-[-0.01em] text-[#6e6e73]">{line}</p>
          </div>
        ))}
      </div>
    </section>

    <ReviewSection
      source="네XX 구매 고객"
      reviews={[
        "헬스 끝나고 유산소까지 하기는 귀찮아서 마무리용으로 샀어요. 처음엔 이걸 흔드는 게 운동이 되나 싶었는데 속도 좀 올리니까 어깨랑 팔이 바로 타는 느낌이고 숨도 금방 차네요ㅋㅋ 짧게 해도 운동한 느낌이 확실합니다.",
        "가볍게 워밍업하려고 시작했다가 생각보다 강도가 있어서 놀랐어요. 양손을 빠르게 번갈아 흔들면 전완이랑 어깨가 계속 긴장되고 심박수도 쭉 올라갑니다. 웨이트 쉬는 날에는 이것만 몇 세트 해도 땀이 꽤 나요.",
        "팔 운동만 될 줄 알았거든요. 그런데 반동 때문에 몸이 흔들리지 않게 버티다 보니 배에 계속 힘이 들어가고 옆구리까지 자극이 옵니다. 상체 쓰면서 코어까지 같이 잡는 느낌이라 단순한 팔 운동은 아니네요.",
        "처음에는 천천히 하다가 익숙해져서 점점 크게 흔들고 있는데 강도 차이가 꽤 큽니다. 빠르게 할수록 어깨랑 팔이 버티기 힘들어지고 호흡도 확 올라와요. 따로 무게를 바꾸지 않아도 제 체력에 맞춰 할 수 있어서 좋습니다.",
        "스쿼트하면서 같이 흔들어봤는데 이건 진짜 전신 운동이네요. 팔이랑 어깨는 계속 움직이고 하체는 버텨야 하고, 자세 안 무너지게 배에도 힘을 줘야 해서 한 세트 끝나면 온몸이 힘들어요. 짧고 굵게 홈트할 때 잘 쓰고 있습니다.",
      ]}
    />

    <Trust />
    <section className="relative min-h-[1500px] overflow-hidden bg-[#111113] text-center">
      <Image
        src="/assets/sync-2026-10-29/nova/battle-rope/final-cta-workout-bg.webp"
        alt="어두운 헬스장에서 Nova Battle Rope로 운동하는 남성"
        fill
        sizes="860px"
        className="object-cover object-center"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[42%]"
        style={{background:"linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.78) 42%, rgba(255,255,255,0.24) 76%, transparent 100%)"}}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%]"
        style={{background:"linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.34) 52%, transparent 100%)"}}
        aria-hidden
      />
      <div className="relative z-10 flex min-h-[1500px] flex-col px-12 pb-28 pt-28">
        <h2 className="text-[64px] font-bold leading-[1.18] tracking-[-0.028em] text-[#1d1d1f]">
          <span className="text-[#416b8a]">Nova</span>와 함께,<br />오늘의 운동을 더 밀도 있게.
        </h2>
        <div className="mt-auto">
          <p className="text-[52px] font-semibold leading-tight tracking-[-0.02em] text-white" style={{textShadow:"0 3px 20px rgba(0,0,0,0.95)"}}>Nova Battle Rope</p>
          <p className="mt-3 text-[28px] font-normal leading-snug tracking-[-0.01em] text-[#d9e9f5]" style={{textShadow:"0 2px 14px rgba(0,0,0,0.95)"}}>공간은 작게, 움직임은 크게.</p>
        </div>
      </div>
    </section>
    <Faq />
    <InfoSection title="사이즈"><div className="relative mt-24 aspect-[3/4] overflow-hidden rounded-[28px] bg-[#f4f4f5]"><Image src="/assets/sync-2026-10-29/nova/battle-rope/size-50cm.webp" alt="Nova Battle Rope 길이 50cm 안내" fill sizes="764px" className="object-cover"/></div></InfoSection>
    <InfoSection title="구성품"><div className="relative mt-24 aspect-[3/4] overflow-hidden rounded-[28px] bg-[#f4f4f5]"><Image src="/assets/sync-2026-10-29/nova/battle-rope/package-contents-pair.webp" alt="나란히 놓인 Nova Battle Rope 두 개 구성" fill sizes="764px" className="object-cover"/></div><p className="mt-7 text-center text-[28px] font-semibold">스프링 배틀로프 x2</p></InfoSection>
    <ProductInfo />
    <Notices />
  </BrandFrame>;
}

function BattleRopePhilosophy() {
  const essentials = [
    ["반복 저항", "흔들 때마다 스프링의 반발력이 되돌아옵니다", "border-[#d7e6f1] bg-[#f4f8fb]"],
    ["작은 공간", "개당 약 50cm로 긴 로프를 펼칠 필요가 없습니다", "border-[#bdd8ea] bg-[#e9f3fa]"],
    ["바로 시작", "고정과 충전 없이 두 손에 쥐면 준비가 끝납니다", "border-[#a8cade] bg-[#dceef9]"],
  ];

  return (
    <section className="bg-white px-12 py-40">
      <p className="text-[21px] font-bold tracking-[0.14em] text-[#416b8a]">COMPACT RESISTANCE</p>
      <h2 className="mt-9 text-[64px] font-bold leading-[1.16] tracking-[-0.035em]">
        긴 로프의 운동감,
        <br />
        <Gradient>두 개의 스프링에 담다.</Gradient>
      </h2>
      <div className="relative mt-24 aspect-[3/4] w-full overflow-hidden rounded-[28px] bg-[#f5f5f7]">
        <Image
          src="/assets/sync-2026-10-29/nova/battle-rope/compact-resistance-pair.webp"
          alt="밝은 빛이 드는 배경에 나란히 놓인 Nova Battle Rope 한 쌍"
          fill
          sizes="764px"
          className="object-cover"
        />
      </div>
      <div className="mt-16 grid grid-cols-3 gap-5">
        {essentials.map(([title, body, tone], index) => (
          <article key={title} className={`rounded-[26px] border px-6 py-8 ${tone}`}>
            <p className="text-[18px] font-bold tracking-[0.1em] text-[#0071e3]">0{index + 1}</p>
            <h3 className="mt-5 text-[25px] font-bold leading-[1.3]">{title}</h3>
            <p className="mt-4 text-[18px] font-medium leading-[1.55] text-[#3f5668]">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function RopeComparison() {
  const scenes = [
    {
      eyebrow: "BEFORE",
      title: "바닥에 펼치는 긴 로프",
      body: "넓은 공간과 고정 지점이 필요하고 바닥 충격이 반복되는 방식",
      image: "/assets/sync-2026-10-29/nova/battle-rope/comparison-before-long-rope.webp",
      imageAlt: "긴 배틀로프를 바닥에 펼쳐 웨이브 운동을 하는 모습",
      accent: false,
    },
    {
      eyebrow: "AFTER",
      title: "두 손에 쥐는 배틀로프",
      body: "설치 없이 작은 공간에서 바로 흔들며 반복 저항을 만드는 방식",
      image: "/assets/sync-2026-10-29/nova/battle-rope/comparison-after-compact-rope.webp",
      imageAlt: "두 손에 Nova Battle Rope를 쥐고 스프링을 흔드는 모습",
      accent: true,
    },
  ];

  return (
    <section className="bg-white px-10 py-36">
      <h2 className="text-center text-[60px] font-bold leading-[1.16] tracking-[-0.03em]">
        긴 로프를 걷어내면,
        <br />
        <Gradient>운동은 더 가까워집니다.</Gradient>
      </h2>
      <div className="mt-20 grid grid-cols-2 gap-6">
        {scenes.map(({ eyebrow, title, body, image, imageAlt, accent }) => (
          <article
            key={eyebrow}
            className={`rounded-[28px] border p-7 ${accent ? "border-[#bdd8ea] bg-[#eef7ff]" : "border-[#dedede] bg-[#f7f7f7]"}`}
          >
            <p className={`text-[19px] font-bold tracking-[0.13em] ${accent ? "text-[#0071e3]" : "text-[#86868b]"}`}>
              {eyebrow}
            </p>
            <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-[22px] bg-white">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="370px"
                className="object-cover object-center"
              />
            </div>
            <h3 className="mt-7 text-[29px] font-bold tracking-[-0.02em]">{title}</h3>
            <p className="mt-4 text-[21px] font-medium leading-[1.55] text-[#6e6e73]">{body}</p>
          </article>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-[720px] text-center text-[18px] font-medium leading-[1.55] text-[#86868b]">일반적인 긴 배틀로프와의 사용 방식 차이를 보여주기 위한 이미지입니다.</p>
    </section>
  );
}

function MuscleMap(){const levels=[
  {level:5,title:"매우 많이 사용",body:"삼각근 · 전완근 · 악력",color:"#C93D1B"},
  {level:4,title:"많이 사용",body:"이두근 · 삼두근 · 승모근 · 극하근",color:"#E96843"},
  {level:3,title:"보통 사용",body:"복직근 · 외복사근 · 광배근",color:"#EE967B"},
  {level:2,title:"보조적으로 사용",body:"대흉근 · 둔근",color:"#F4C8B8"},
  {level:1,title:"자세를 안정시키며 사용",body:"대퇴사두근 · 햄스트링 · 종아리",color:"#F8E7E0"},
];return <section className="px-12 py-36" style={{background:"linear-gradient(180deg, #ffffff 0%, #f5f5f7 14%, #f5f5f7 86%, #ffffff 100%)"}}><Title><span className="text-[#c93d1b]">배틀로프에 쓰이는 근육.</span></Title><p className="mt-8 text-center text-[26px] leading-[1.6] text-[#6e6e73]">기본 웨이브 동작을 기준으로, 반복해서 움직이는 상체 근육과<br/>자세를 지탱하는 근육의 상대적 참여도를 표시했습니다.</p><div className="mt-20 grid grid-cols-2 gap-5">{[["앞면","man-front.svg"],["뒷면","man-back.svg"]].map(([l,f])=><figure key={l} className="rounded-[28px] border border-[#f0ddd5] bg-white p-7 text-center"><object data={`/assets/sync-2026-10-29/nova/battle-rope/muscle-map/${f}`} type="image/svg+xml" aria-label={`${l} 근육도`} className="h-[480px] w-full"/><figcaption className="text-[20px] font-semibold text-[#6e6e73]">{l}</figcaption></figure>)}</div><div className="mt-16 grid grid-cols-2 gap-x-10">{levels.map(({level,title,body,color})=><div key={level} className="border-b border-[#ecdcd5] py-7 first:border-t [&:nth-child(2)]:border-t"><div className="flex items-center gap-4"><span className="h-4 w-4 shrink-0 rounded-full" style={{backgroundColor:color}} aria-hidden/><p className="text-[26px] font-bold tracking-[-0.02em]">{level}. {title}</p></div><p className="mt-3 pl-8 text-[19px] font-medium leading-[1.55] tracking-[-0.01em] text-[#6e6e73]">{body}</p></div>)}</div><p className="mx-auto mt-12 max-w-[760px] text-center text-[17px] font-medium leading-[1.5] tracking-[-0.01em] text-[#86868b]">숫자는 기본 웨이브 동작의 상대적 참여도를 뜻하며, 속도·동작 범위·개인별 자세에 따라 달라질 수 있습니다.</p></section>}
function Feature({title,children,imageSrc,imageAlt="",imageAspect="3 / 4"}:{title:ReactNode;children:ReactNode;imageSrc?:string;imageAlt?:string;imageAspect?:string}){return <div><div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-[3px] border-[#0071e3]"><Check className="h-9 w-9 text-[#0071e3]"/></div><h2 className="mt-10 text-[63px] font-bold leading-[1.15] tracking-[-0.025em]">{title}</h2>{imageSrc?<div className="relative mt-24 overflow-hidden rounded-[28px] bg-[#f5f5f7]" style={{aspectRatio:imageAspect}}><Image src={imageSrc} alt={imageAlt} fill sizes="764px" className="object-cover"/></div>:<Photo aspect="3 / 4" className="mt-24"/>}<p className="mt-10 text-[29px] font-semibold leading-[1.7] text-[#86868b]">{children}</p></div>}
function Title({children}:{children:ReactNode}){return <h2 className="text-center text-[60px] font-bold leading-tight tracking-[-0.03em]">{children}</h2>}
function Photo({aspect,className=""}:{aspect:string;className?:string}){return <div aria-label="사진 자리" className={`w-full rounded-[28px] bg-[#f5f5f7] ${className}`} style={{aspectRatio:aspect}}/>}
function Gradient({children}:{children:ReactNode}){return <span className="bg-clip-text text-transparent" style={{backgroundImage:"linear-gradient(90deg,#022640,#5786ab)"}}>{children}</span>}
function Trust(){const items=[
  {Icon:RefreshCw,title:"7일 이내 무상 교환",body:"초기 불량은 수령 후 7일 이내 확인해 주시면 배송비 없이 교환해 드립니다."},
  {Icon:PackageCheck,title:"좌우 한 쌍 구성",body:"양손으로 운동할 수 있는 스프링 배틀로프 2개가 한 세트로 구성됩니다."},
  {Icon:Battery,title:"충전 없는 기계식 구조",body:"전원과 배터리 없이 스프링의 반발력으로 바로 운동할 수 있습니다."},
  {Icon:Truck,title:"당일 발송",body:"평일 오후 4시 이전 주문은 당일 발송됩니다. (일부 품목 제외)"},
];return <section className="bg-white px-12 pb-32 pt-32"><div className="grid grid-cols-2 gap-x-10 gap-y-12">{items.map(({Icon,title,body})=><div key={title} className="flex gap-6"><Icon className="mt-1 h-12 w-12 shrink-0 text-[#0071e3]" strokeWidth={2} aria-hidden/><div><p className="text-[28px] font-semibold tracking-[-0.015em]">{title}</p><p className="mt-3 text-[22px] font-medium leading-[1.5] tracking-[-0.01em] text-[#6e6e73]">{body}</p></div></div>)}</div></section>}
function Faq(){const q=[
  ["일반 배틀로프와 무엇이 다른가요?","일반 배틀로프는 긴 로프를 바닥에 펼친 뒤 기둥이나 앵커에 고정해 사용합니다. Nova Battle Rope는 긴 로프와 고정 장치 없이 양손에 하나씩 잡고 흔드는 방식이라, 양팔을 움직일 공간만 있으면 바로 운동할 수 있습니다."],
  ["어떤 원리로 운동 부하가 생기나요?","제품을 흔들면 내부 스프링의 반발력과 제품 자체의 관성이 되돌아오며 반복적인 저항을 만듭니다. 이 힘을 계속 제어하는 동안 어깨와 팔, 전완이 움직이고 몸통이 흔들리지 않도록 코어도 함께 사용됩니다."],
  ["집에서 사용하면 층간소음이 생기지 않나요?","무거운 로프를 바닥에 반복해서 내려치는 방식이 아니어서 바닥 충격음과 진동 부담을 줄였습니다. 다만 스프링이 움직이는 소리와 빠르게 흔들 때 발생하는 작동음은 있을 수 있으므로 완전한 무소음 제품은 아닙니다."],
  ["운동 강도는 어떻게 조절하나요?","별도의 강도 조절 장치는 없습니다. 처음에는 작고 천천히 흔들고, 익숙해지면 움직임의 범위와 속도를 높여 강도를 조절해 주세요. 스쿼트나 런지를 함께하면 전신 운동으로 확장할 수 있습니다."],
  ["어떤 운동 효과를 기대할 수 있나요?","반복해서 흔드는 동안 어깨와 팔, 전완의 근지구력 운동에 활용할 수 있으며 반동에 맞서 자세를 유지하면서 코어 안정화에도 도움을 줍니다. 빠른 웨이브 동작은 심박수를 높이는 유산소 운동과 전신 컨디셔닝에도 활용할 수 있습니다."],
  ["운동 초보자도 사용할 수 있나요?","네. 양손을 동시에 위아래로 흔드는 기본 웨이브부터 시작하면 됩니다. 처음에는 손목 스트랩을 착용한 뒤 작은 범위와 느린 속도로 리듬을 익히고, 자세가 안정되면 운동 시간과 속도를 조금씩 늘려 주세요."],
  ["얼마나 넓은 공간이 필요한가요?","긴 로프를 펼칠 공간은 필요하지 않지만 제품이 주변 사람이나 가구에 닿지 않도록 양팔을 움직일 수 있는 안전거리는 확보해야 합니다. 운동 전 천장과 벽, 조명 등 주변 환경도 함께 확인해 주세요."],
  ["한 손으로도 운동할 수 있나요?","네. 두 개를 동시에 또는 번갈아 흔드는 양손 운동뿐 아니라 한 개만 사용하는 싱글 암 웨이브도 가능합니다. 한 손 운동 시에는 몸통이 한쪽으로 기울지 않도록 자세를 유지하고 좌우를 같은 시간 동안 운동해 주세요."],
  ["충전이나 별도의 설치가 필요한가요?","필요하지 않습니다. 전원과 배터리를 사용하지 않는 기계식 스프링 구조이며, 나사나 앵커로 고정하는 설치 과정도 없습니다. 손목 스트랩을 착용하고 손잡이를 단단히 쥐면 바로 시작할 수 있습니다."],
  ["크기와 구성은 어떻게 되나요?","개당 길이는 약 50cm이며 한 쌍의 무게는 약 1kg입니다. 좌우 한 쌍으로 사용할 수 있도록 스프링 배틀로프 2개가 함께 구성되며, 운동 후에는 침대 밑이나 옷장, 운동용품 수납함 등에 보관하기 좋습니다."],
];return <section className="bg-white px-10 pb-36 pt-40"><h2 className="text-center text-[58px] font-bold leading-tight tracking-[-0.025em]">질문에 답해드립니다.</h2><ul className="mt-24">{q.map(([a,b])=><li key={a} className="border-t border-[#d2d2d7] py-7 last:border-b"><div className="flex items-start justify-between gap-6"><p className="text-[28px] font-semibold leading-[1.35] tracking-[-0.015em]">{a}</p><ChevronDown className="mt-1.5 h-7 w-7 shrink-0 text-[#86868b]" strokeWidth={2.5} aria-hidden/></div><p className="mt-4 pr-12 text-[22px] font-medium leading-[1.5] tracking-[-0.01em] text-[#6e6e73]">{b}</p></li>)}</ul></section>}
function InfoSection({title,children}:{title:string;children:ReactNode}){return <section className="bg-white px-10 pb-36 pt-32"><h2 className="text-center text-[58px] font-bold leading-tight tracking-[-0.025em]">{title}</h2>{children}</section>}
function ProductInfo(){const r=[["품명 및 모델명","Nova Battle Rope"],["제품 유형","스프링 반발식 무선 배틀로프"],["재질","강철 · PP"],["색상","블랙"],["크기","개당 약 50cm"],["중량","한 쌍 약 1kg"],["사용 용도","상체 근지구력 및 전신 컨디셔닝 운동"],["구성품","스프링 배틀로프 2개"],["제조자(수입자)","보이드 투 노바"],["품질보증기준","관련 법령 및 소비자분쟁해결기준에 따름"],["A/S 책임자와 전화번호","010-6393-0907"]];return <InfoSection title="제품 정보"><dl className="mx-auto mt-24 max-w-[720px]">{r.map(([a,b])=><div key={a} className="flex gap-8 border-b border-[#d2d2d7] py-6 first:border-t"><dt className="w-[200px] shrink-0 text-[22px] font-semibold tracking-[-0.01em]">{a}</dt><dd className="flex-1 text-[22px] font-medium leading-snug tracking-[-0.01em] text-[#6e6e73]">{b}</dd></div>)}</dl></InfoSection>}
function Notices(){const blocks=[
  {title:"취급 시 주의사항",bullets:["주변 사람과 가구에 부딪히지 않도록 충분한 안전거리를 확보해 주세요.","운동 전 손목 스트랩을 착용하고 손잡이를 단단히 쥐어 주세요.","처음에는 작은 동작과 느린 속도로 시작하고, 익숙해진 뒤 강도를 높여 주세요.","제품과 손목 스트랩에 손상이나 풀림이 없는지 운동 전에 확인해 주세요.","통증이나 어지러움이 느껴지면 즉시 사용을 중단해 주세요."]},
  {title:"관리 방법",body:"사용 후 땀과 먼지를 마른 천으로 닦고 습기와 직사광선을 피해 보관해 주세요."},
  {title:"색상 안내",body:"사용하시는 환경과 화면 설정에 따라 실제 색상과 다소 차이가 있을 수 있습니다."},
  {title:"A/S 안내",body:"제품 초기 불량은 수령 후 7일 이내 확인해 주시면 교환 도와드립니다. 문의는 스토어 고객센터를 통해 접수해 주세요."},
  {title:"배송 안내",bullets:["배송기간 — 평균 배송기간은 2~5일 (일부 품목은 출고지 및 반품지 주소가 다를 수 있음)","발송 마감시간 — 평일 기준 당일 오후 4시 이전 주문건까지 당일 발송 (일부품목 제외). 오후 4시 이후 주문건은 +1일 이후 발송 (평일기준)","제주도·도서산간 지역배송비 — 제주도/도서산간 지역의 경우 배송비가 추가됩니다. (해당 지역마다의 배송비 편차가 상이하여 평균 배송비를 부과하며 일부 지역은 배송비가 다를 수 있음)"]},
] as const;return <InfoSection title="기타 안내"><div className="mx-auto mt-24 max-w-[720px] space-y-12">{blocks.map(block=><div key={block.title}><h3 className="text-[28px] font-semibold tracking-[-0.015em]">{block.title}</h3>{"body" in block&&block.body?<p className="mt-4 text-[22px] font-medium leading-snug tracking-[-0.01em] text-[#6e6e73]">{block.body}</p>:null}{"bullets" in block&&block.bullets?<ul className="mt-4 space-y-2 text-[22px] font-medium leading-snug tracking-[-0.01em] text-[#6e6e73]">{block.bullets.map(item=><li key={item} className="flex gap-3"><span className="shrink-0">·</span><span>{item}</span></li>)}</ul>:null}</div>)}<div><h3 className="text-[28px] font-semibold tracking-[-0.015em]">교환·반품 안내</h3><p className="mt-4 text-[22px] font-medium leading-snug tracking-[-0.01em] text-[#6e6e73]">교환 및 반품 접수는 구매하신 몰에서 신청해주세요.</p>{[
  {subtitle:"교환/반품 가능",items:["상품 수령 후 7일 내 구매한 몰에서 교환/반품 신청 시 가능","구매자의 단순 변심은 상품 수령 후 7일 이내 (구매자 반품배송비 부담)","상품 초기 불량에 대한 교환/반품은 전액 무료, 그 외 왕복택배비 발생 (왕복 택배비는 상품별로 다를 수 있음)","교환/반품 신청 후 판매자로부터 연락이 없다면 택배사에서 방문하여 수거 후 판매자에게 회수 확인 후 교환/반품 진행 — 판매자에게 연락을 받았다면 판매자의 안내대로 진행"]},
  {subtitle:"교환/반품 불가",items:["교환/반품요청 기간이 지난 경우 (구매확정 후)","구매자 책임 사유로 상품 등이 멸실 또는 훼손된 경우","구매자 책임 사유로 포장 훼손 또는 상품 가치가 현저히 상실·감소된 경우","고객 요청에 의해 제작되는 맞춤 제작 상품의 경우","복제 가능한 상품 등의 포장을 훼손한 경우","교환/반품 신청 후 다시 보낸 제품 중 구성품이 누락된 경우"]},
].map(({subtitle,items})=><div key={subtitle} className="mt-8"><p className="text-[22px] font-semibold tracking-[-0.01em]">{subtitle}</p><ul className="mt-3 space-y-2 text-[22px] font-medium leading-snug tracking-[-0.01em] text-[#6e6e73]">{items.map(item=><li key={item} className="flex gap-3"><span className="shrink-0">·</span><span>{item}</span></li>)}</ul></div>)}<div className="mt-8"><p className="text-[22px] font-semibold tracking-[-0.01em]">변경·취소</p><p className="mt-3 text-[22px] font-medium leading-snug tracking-[-0.01em] text-[#6e6e73]">취소나 변경은 실제 출고가 되지 않았을 경우에만 가능합니다. 상품 출고 후 취소/변경 시 왕복택배비는 구매자 부담입니다.</p></div></div></div></InfoSection>}
