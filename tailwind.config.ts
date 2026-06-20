import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Премиальная B2B-палитра. Меняется в одном месте под бренд клиента.
        ink: {
          DEFAULT: "#15191F", // основной текст / графит
          soft: "#3B434E",
          muted: "#6B7480",
        },
        navy: {
          DEFAULT: "#16263D", // глубокий тёмно-синий акцент
          700: "#1E3553",
          600: "#27466B",
        },
        sand: {
          DEFAULT: "#F4F0E8", // тёплый бежевый
          200: "#EDE7DB",
          300: "#E2D9C7",
        },
        paper: "#FBFAF7", // светлый премиальный фон
        line: "#E7E4DC", // тонкие линии
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(21,25,31,0.04), 0 8px 24px -12px rgba(21,25,31,0.12)",
        card: "0 1px 3px rgba(21,25,31,0.05), 0 18px 40px -24px rgba(21,25,31,0.18)",
        lift: "0 2px 6px rgba(21,25,31,0.06), 0 28px 60px -28px rgba(22,38,61,0.30)",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
