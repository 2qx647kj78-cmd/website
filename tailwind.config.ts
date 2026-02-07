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
        // Anthropic.com inspired color palette
        background: "#FBF7ED", // Warm cream background
        foreground: "#1C1B16", // Dark brown text

        // Anthropic surfaces
        surface: {
          cream: "#FBF7ED",
          "cream-dark": "#F4EFE0",
          white: "#FFFFFF",
          orange: "#FFF4ED",
        },

        // Anthropic orange (primary action color)
        anthropic: {
          orange: "#F4845F",
          "orange-hover": "#E9734F",
          "orange-light": "#FFF4ED",
        },

        // Warm neutrals (Anthropic style)
        neutral: {
          50: "#FFFFFF",
          100: "#FBF7ED",
          200: "#F4EFE0",
          300: "#E8E3D4",
          400: "#C8C3B4",
          500: "#8B8679",
          600: "#6E6A5E",
          700: "#1C1B16",
          800: "#0D0C09",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
