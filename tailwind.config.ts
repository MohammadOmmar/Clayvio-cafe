import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium cafe palette — warm ivory, espresso, clay, brass, olive
        parchment: {
          50: "#FAF7F0", // soft cream
          100: "#F4EFE6", // warm ivory / primary background
          200: "#E9E0D2", // darker parchment / secondary background
          300: "#DCCFBA",
          400: "#C9B79C",
          500: "#B39D7D",
        },
        espresso: {
          50: "#F5F0EB",
          100: "#E8DDD3",
          200: "#D3BFAE",
          300: "#B3977E",
          400: "#8F6B52",
          500: "#6F4E3A",
          600: "#573C2C",
          700: "#3A2720", // dark coffee
          800: "#2A1B16", // deep espresso
          900: "#1F1410",
          950: "#140D0A",
        },
        clay: {
          50: "#FBF3EF",
          100: "#F5E3DA",
          200: "#E9C4B3",
          300: "#D9A084",
          400: "#C88463",
          500: "#B87557", // muted terracotta
          600: "#A65F42", // clay / terracotta
          700: "#8A4C34",
          800: "#6E3C2A",
          900: "#57301F",
        },
        brass: {
          50: "#FBF7EE",
          100: "#F4EBD8",
          200: "#E7D5AE",
          300: "#D6BC82",
          400: "#C5A76A",
          500: "#B8955A", // warm brass
          600: "#A07C45",
          700: "#826338",
          800: "#684E2E",
          900: "#543E26",
        },
        olive: {
          50: "#F5F5EF",
          100: "#E8E8D9",
          200: "#D0D0B4",
          300: "#B0B08C",
          400: "#8F8F6B",
          500: "#6C6A4D", // muted olive
          600: "#5A5840",
          700: "#484634",
          800: "#38362A",
          900: "#2C2A21",
        },
        charcoal: {
          50: "#F5F5F4",
          100: "#E5E5E4",
          200: "#D4D4D3",
          300: "#B3B3B1",
          400: "#8A8A87",
          500: "#6E6E6B",
          600: "#555553",
          700: "#424241",
          800: "#353535",
          900: "#262625",
          950: "#1A1A1A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      boxShadow: {
        warm: "0 4px 24px -8px rgba(42, 27, 22, 0.12)",
        "warm-lg": "0 8px 40px -12px rgba(42, 27, 22, 0.16)",
        "warm-sm": "0 2px 12px -4px rgba(42, 27, 22, 0.08)",
        "inner-warm": "inset 0 2px 8px rgba(42, 27, 22, 0.06)",
        editorial: "0 20px 60px -15px rgba(42, 27, 22, 0.2)",
        "editorial-lg": "0 30px 80px -20px rgba(42, 27, 22, 0.25)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      letterSpacing: {
        eyebrow: "0.2em",
        "eyebrow-lg": "0.3em",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.06)" },
        },
        "scroll-line": {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top" },
          "51%": { transform: "scaleY(1)", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
        "clip-reveal": {
          from: { clipPath: "inset(100% 0 0 0)" },
          to: { clipPath: "inset(0 0 0 0)" },
        },
        "text-reveal": {
          from: { transform: "translateY(110%)" },
          to: { transform: "translateY(0)" },
        },
        "line-grow": {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
        "image-scale": {
          from: { transform: "scale(1.15)" },
          to: { transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out both",
        "slide-up": "slide-up 0.6s ease-out both",
        "slow-zoom": "slow-zoom 8s ease-in-out infinite alternate",
        "scroll-line": "scroll-line 2s ease-in-out infinite",
        "clip-reveal": "clip-reveal 0.9s cubic-bezier(0.77, 0, 0.175, 1) both",
        "text-reveal": "text-reveal 0.8s cubic-bezier(0.21, 0.47, 0.32, 0.98) both",
        "line-grow": "line-grow 0.8s cubic-bezier(0.21, 0.47, 0.32, 0.98) both",
        "image-scale": "image-scale 1.2s cubic-bezier(0.21, 0.47, 0.32, 0.98) both",
      },
    },
  },
  plugins: [],
};
export default config;