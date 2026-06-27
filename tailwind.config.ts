import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "var(--navy)",
          700: "var(--navy-700)",
        },
        brand: "var(--brand)",
        teal: {
          DEFAULT: "var(--teal)",
          600: "var(--teal-600)",
        },
        wa: "var(--wa-green)",
        ink: "var(--ink)",
        slate: "var(--slate)",
        mist: "var(--mist)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(11, 43, 60, 0.18)",
        card: "0 4px 24px -8px rgba(11, 43, 60, 0.12)",
      },
      maxWidth: {
        "6xl": "72rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
