import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

// Динамическая Open Graph картинка (1200×630) — без статических ассетов.
export const alt = "Подбор специалистов для e-commerce и маркетплейсов";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #16263D 0%, #1E3553 55%, #27466B 100%)",
          color: "#FBFAF7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 30, opacity: 0.9 }}>
          ● {site.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: 980 }}>
            Подбираем сильных специалистов для e-commerce и маркетплейсов
          </div>
          <div style={{ fontSize: 30, opacity: 0.82, maxWidth: 900 }}>
            Закрываем ключевые роли системно — без хаоса и случайных кандидатов.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, opacity: 0.7 }}>
          Погружение в задачу · Профиль роли · Отбор · Сопровождение
        </div>
      </div>
    ),
    { ...size }
  );
}
