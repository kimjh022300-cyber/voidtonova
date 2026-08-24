import type { Metadata } from "next";
import "./globals.css";
import "./hero-fix.css";
import "./design-system.css";

export const metadata: Metadata = {
  title: "Void to Nova — 다음 상태를 위한 도구",
  description: "집중과 움직임을 위한 11개의 도구. Void to Nova.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
