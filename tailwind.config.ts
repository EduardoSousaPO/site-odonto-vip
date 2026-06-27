import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "oklch(var(--cream) / <alpha-value>)",
          200: "oklch(var(--cream-200) / <alpha-value>)",
          300: "oklch(var(--cream-300) / <alpha-value>)",
        },
        sand: "oklch(var(--sand) / <alpha-value>)",
        ink: {
          DEFAULT: "oklch(var(--ink) / <alpha-value>)",
          700: "oklch(var(--ink-700) / <alpha-value>)",
          800: "oklch(var(--ink-800) / <alpha-value>)",
        },
        teal: {
          DEFAULT: "oklch(var(--teal) / <alpha-value>)",
          deep: "oklch(var(--teal-deep) / <alpha-value>)",
        },
        gold: {
          DEFAULT: "oklch(var(--gold) / <alpha-value>)",
          deep: "oklch(var(--gold-deep) / <alpha-value>)",
        },
        wa: "#25d366",
        body: "oklch(var(--body) / <alpha-value>)",
        muted: "oklch(var(--muted) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 24px 60px -28px oklch(0.27 0.045 215 / 0.32)",
        card: "0 2px 18px -10px oklch(0.27 0.045 215 / 0.18)",
        gold: "0 18px 40px -18px oklch(0.66 0.085 70 / 0.55)",
      },
      maxWidth: {
        "6xl": "72rem",
        "7xl": "80rem",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        floaty: "floaty 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
