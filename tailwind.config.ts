import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          sub: "#344054",
          soft: "#667185",
          weak: "#98A2B3",
          black: "#0C0A14",
        },

        neutral: {
          0: "#FDFEFF",
          75: "#F7F9FC",
          100: "#F0F2F5",
          200: "#33274B",
          400: "#98a2b3",
          700: "#1D2739",
        },

        blue: {
          900: "#16102D",
        },

        purple: {
          0: "#F0EFFC",
          600: "#5522C0",

          base: "#6C50E0",
        },

        background: {
          canvas: "#FDFEFF",
        },

        grey: {
          13: "#212123",
          500: "#667185",
        },
      },
      screens: {
        xs: "500px",
        navbar: "900px",
      },
    },
  },
  plugins: [],
} satisfies Config;
