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
        // Derived from Clayvio Cafe reference photographs
        // Warm cream walls, dark chocolate furniture, warm wood, golden lighting
        cream: {
          50: "#FDFBF7",
          100: "#FAF6EE",
          200: "#F3ECDD",
          300: "#E9DEC8",
          400: "#DFD0B3",
          500: "#D4C09A",
        },
        beige: {
          50: "#F7F3EB",
          100: "#EFE8D9",
          200: "#E0D4BC",
          300: "#CFBFA0",
          400: "#BCA77F",
        },
        espresso: {
          50: "#F5F0EB",
          100: "#E8DDD3",
          200: "#D3BFAE",
          300: "#B3977E",
          400: "#8F6B52",
          500: "#6F4E3A",
          600: "#573C2C",
          700: "#442E22",
          800: "#352419",
          900: "#291C14",
          950: "#1A110A",
        },
        wood: {
          50: "#F8F3EC",
          100: "#EFE4D4",
          200: "#DFC9A8",
          300: "#CCA97C",
          400: "#B88A57",
          500: "#A4703F",
          600: "#8A5A33",
          700: "#71482B",
          800: "#5C3B25",
          900: "#4A301F",
        },
        golden: {
          50: "#FBF6E9",
          100: "#F5E9C9",
          200: "#EBD493",
          300: "#E0BB5E",
          400: "#D6A538",
          500: "#C08E2A",
          600: "#A57023",
          700: "#85571F",
          800: "#6E481F",
          900: "#5E3D1E",
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
        // Warm soft shadows instead of harsh dark ones
        warm: "0 4px 24px -8px rgba(111, 78, 58, 0.15)",
        "warm-lg": "0 8px 40px -12px rgba(111, 78, 58, 0.2)",
        "warm-sm": "0 2px 12px -4px rgba(111, 78, 58, 0.12)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.05)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out both",
        "slide-up": "slide-up 0.6s ease-out both",
        "slow-zoom": "slow-zoom 8s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
export default config;