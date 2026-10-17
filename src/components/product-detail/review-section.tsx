type ReviewSectionProps = {
  reviews: string[];
  source?: string;
  title?: string;
  description?: string;
};

export function ReviewSection({
  reviews,
  source = "네이버 구매 고객",
  title = "실제 구매자들의 솔직한 후기",
  description = "먼저 사용해 본 분들의 솔직한 후기입니다.",
}: ReviewSectionProps) {
  return (
    <section className="bg-white px-10 pb-32 pt-40">
      <div className="mx-auto max-w-[780px]">
        <div
          className="flex items-center justify-center gap-4"
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
          {title}
        </h2>
        <p className="mt-5 text-center text-[22px] font-medium text-[#6e6e73]">
          {description}
        </p>

        <div className="mt-16 space-y-6">
          {reviews.map((review) => (
            <article
              key={review}
              className="rounded-[28px] border border-[#dfe3e7] bg-[#f5f5f7] px-8 py-8"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <p className="text-[24px] font-bold text-[#1d1d1f]">5.0</p>
                  <p className="text-[24px] font-bold tracking-[0.08em] text-[#F5B700]">★★★★★</p>
                </div>
                <p className="text-[18px] font-medium text-[#86868b]">{source}</p>
              </div>
              <p className="mt-6 text-[24px] font-medium leading-[1.6] tracking-[-0.01em] text-[#6e6e73]">
                {review}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
