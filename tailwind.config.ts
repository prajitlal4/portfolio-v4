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
          100: "#fafaf8",
          200: "#f3f1ed",
        },
        dark: {
          DEFAULT: "#2d2620",
          100: "#4a4238",
          200: "#6b6258",
        },
        // Sophisticated color palette - Light mode focused
        accent: {
          DEFAULT: "#6b5844",
          dark: "#5a4a3a",
        },
        sage: {
          DEFAULT: "#5a6f63",
          dark: "#4a5f53",
        },
        charcoal: {
          DEFAULT: "#2a2a2a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-lora)", "system-ui", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out forwards",
        fadeUp: "fadeUp 0.7s ease-out forwards",
        scaleIn: "scaleIn 0.6s ease-out forwards",
        slideInRight: "slideInRight 0.7s ease-out forwards",
        slideInLeft: "slideInLeft 0.7s ease-out forwards",
        gradientShift: "gradientShift 8s ease infinite",
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 113, 227, 0.3)",
        "glow-lg": "0 0 40px rgba(0, 113, 227, 0.4)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
