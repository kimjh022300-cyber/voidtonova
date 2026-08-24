import type { ReactNode } from "react";

export const DETAIL_PAGE_WIDTH = 860;

export function BrandFrame({
  brand,
  children,
}: {
  brand: "void" | "nova";
  children: ReactNode;
}) {
  return (
    <article
      className={`detail-page brand-${brand}`}
      style={{ width: DETAIL_PAGE_WIDTH }}
    >
      {children}
    </article>
  );
}
