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
        // Apple.com inspired color palette
        background: "#F5F5F7", // Apple's light background
        foreground: "#1D1D1F", // Apple's primary text color

        // Apple surfaces
        surface: {
          light: "#FBFBFD",
          gray: "#F5F5F7",
          dark: "#E8E8ED",
        },

        // Apple blue (primary action color)
        apple: {
          blue: "#0071E3",
          "blue-hover": "#0077ED",
        },

        // Neutral grays (Apple style)
        neutral: {
          50: "#FFFFFF",
          100: "#FBFBFD",
          200: "#F5F5F7",
          300: "#E8E8ED",
          400: "#D2D2D7",
          500: "#86868B",
          600: "#6E6E73",
          700: "#1D1D1F",
          800: "#000000",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
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
