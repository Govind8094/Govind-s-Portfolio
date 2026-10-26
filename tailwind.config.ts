import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#05060a",
        surface: "#0d0f17",
        line: "rgba(255,255,255,0.08)",
        accent: { DEFAULT: "#7c5cff", cyan: "#22d3ee", pink: "#f472b6" },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        marquee: { to: { transform: "translateX(-50%)" } },
        pulseDot: { "0%,100%": { opacity: "1" }, "50%": { opacity: ".3" } },
      },
      animation: { marquee: "marquee 28s linear infinite", pulseDot: "pulseDot 1.6s ease-in-out infinite" },
    },
  },
  plugins: [],
};
export default config;
