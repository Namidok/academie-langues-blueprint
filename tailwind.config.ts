
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E3A8A",
          light: "#2563EB",
        },
        secondary: "#1E40AF",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
