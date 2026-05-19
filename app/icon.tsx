import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "32px",
        height: "32px",
        borderRadius: "8px",
        backgroundColor: "#60a7d6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
        fontSize: "13px",
        fontWeight: 700,
        color: "#fcfcfc",
        letterSpacing: "-0.5px",
      }}
    >
      AV
    </div>,
    { ...size },
  );
}
