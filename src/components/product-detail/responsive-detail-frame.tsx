"use client";

import { DETAIL_PAGE_WIDTH } from "@/components/product-detail/brand-frame";
import type { ReactNode } from "react";
import { useLayoutEffect, useRef, useState } from "react";

type FrameMetrics = {
  height: number | null;
  scale: number;
};

export function ResponsiveDetailFrame({ children }: { children: ReactNode }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [metrics, setMetrics] = useState<FrameMetrics>({ height: null, scale: 1 });

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const content = contentRef.current;
    if (!viewport || !content) return;

    const update = () => {
      const scale = Math.min(1, viewport.clientWidth / DETAIL_PAGE_WIDTH);
      const height = content.offsetHeight * scale;

      setMetrics((current) =>
        current.scale === scale && current.height === height
          ? current
          : { scale, height },
      );
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(viewport);
    observer.observe(content);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={viewportRef}
      className="responsive-detail-frame"
      style={{ height: metrics.height ?? undefined }}
    >
      <div
        ref={contentRef}
        className="responsive-detail-frame__content"
        style={{ transform: `scale(${metrics.scale})` }}
      >
        {children}
      </div>
    </div>
  );
}
