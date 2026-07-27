import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050505",
          borderRadius: 14,
          fontSize: 30,
          fontWeight: 700,
          color: "#00F5A0",
          fontFamily: "sans-serif",
        }}
      >
        B
      </div>
    ),
    { ...size }
  );
}
