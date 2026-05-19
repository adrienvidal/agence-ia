import { ImageResponse } from "next/og";

export const runtime = "edge";

export function GET() {
  return new ImageResponse(
    <div
      style={{
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px",
        backgroundColor: "#060709",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Top: domain badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "#60a7d6",
          }}
        />
        <span
          style={{
            color: "#60a7d6",
            fontSize: "18px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          viloris.io
        </span>
      </div>

      {/* Middle: headline */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div
          style={{
            color: "#f6f9fb",
            fontSize: "64px",
            fontWeight: 700,
            lineHeight: 1.05,
            maxWidth: "900px",
          }}
        >
          Automatisation IA &<br />
          <span style={{ color: "#60a7d6" }}>Agents sur-mesure</span>
        </div>
        <div style={{ color: "#999fa4", fontSize: "24px", maxWidth: "700px", lineHeight: 1.4 }}>
          Pour les PME qui veulent scaler sans recruter.
        </div>
      </div>

      {/* Bottom: author + avatar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              backgroundColor: "#60a7d6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              fontWeight: 700,
              color: "#fcfcfc",
            }}
          >
            AV
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={{ color: "#f6f9fb", fontSize: "20px", fontWeight: 600 }}>
              Adrien Vidal
            </span>
            <span style={{ color: "#999fa4", fontSize: "16px" }}>
              Développeur IA & Automatisation · WEBNROLLS
            </span>
          </div>
        </div>
        <div
          style={{
            border: "1px solid #1d1f23",
            borderRadius: "12px",
            padding: "12px 20px",
            color: "#999fa4",
            fontSize: "16px",
          }}
        >
          Audit gratuit 30 min
        </div>
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
