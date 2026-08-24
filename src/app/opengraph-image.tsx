import { ImageResponse } from "next/og";

export const alt = "검은 배경의 Void to Nova 소셜 공유 이미지";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#080808",
          color: "#f3f3ef",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, fontWeight: 700 }}>
          Void to Nova
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: 980,
            fontSize: 82,
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "-0.06em",
          }}
        >
          Void / Nova
        </div>
      </div>
    ),
    size,
  );
}
