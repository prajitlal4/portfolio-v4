import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          DEFAULT: "#ffffff",
          100: "#f8f8f8",
          200: "#f0f0f0",
        },
        dark: {
          DEFAULT: "#1a1a1a",
          100: "#333333",
          200: "#666666",
        },
        accent: {
          DEFAULT: "#ff6b35",
          dark: "#e55a24",
        },
        sage: {
          DEFAULT: "#a7c957",
          dark: "#9ca3af",
        },
        charcoal: {
          DEFAULT: "#2d3436",
          light: "#636e72",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-lora)", "system-ui", "serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out forwards",
        gradientShift: "gradientShift 3s ease infinite",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        glow: "0 0 20px rgba(255, 107, 53, 0.3)",
        "glow-lg": "0 0 30px rgba(255, 107, 53, 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
