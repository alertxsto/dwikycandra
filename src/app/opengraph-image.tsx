import { ImageResponse } from "next/og";

export const alt = "Dwiky Candra: Systems Builder and Product Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0b0d0a",
        color: "#f8faf4",
        padding: "64px 72px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          color: "#bef264",
          fontSize: 24,
          letterSpacing: "0.14em",
        }}
      >
        <span
          style={{
            display: "flex",
            width: 42,
            height: 42,
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #bef264",
            fontSize: 16,
            fontWeight: 700,
          }}
        >
          DC
        </span>
        DWIKY.DEV
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
        <div
          style={{
            color: "#bef264",
            fontSize: 22,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          Systems builder · Product engineer
        </div>
        <div
          style={{
            maxWidth: 920,
            fontSize: 78,
            fontWeight: 700,
            letterSpacing: "-0.06em",
            lineHeight: 0.95,
          }}
        >
          I build software that makes complex work clear.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#a3ad9b",
          fontSize: 20,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        <span>Systems · Products · Interfaces</span>
        <span>dwikycandra.vercel.app</span>
      </div>
    </div>,
    size,
  );
}
