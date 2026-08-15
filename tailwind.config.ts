import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0f2438",
          light: "#1a3a56",
          dark: "#081522",
        },
        gold: {
          DEFAULT: "#b8935a",
          light: "#d4b184",
          dark: "#96723f",
        },
        sand: "#f7f4ef",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        sans: ["'Jost'", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
} satisfies Config;
