import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#050505",
        secondary: "#0f172a",
        accent: {
          DEFAULT: "#00F5A0",
          400: "#00F5A0",
        },
        accent2: {
          DEFAULT: "#00C2FF",
          400: "#00C2FF",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 50% 0%, rgba(0,245,160,0.12), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(0,245,160,0.25)",
        glow2: "0 0 40px rgba(0,194,255,0.25)",
        card: "0 8px 40px rgba(0,0,0,0.45)",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
