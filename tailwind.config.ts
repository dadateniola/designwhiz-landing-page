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
        background: "var(--background)",
        foreground: "var(--foreground)",

        text: {
          sub: "#344054",
          weak: "#98A2B3",
          black: "#0C0A14",
        },

        neutral: {
          0: "#FDFEFF",
          700: "#1D2739",
        },

        blue: {
          900: "#16102D",
        },

        purple: {
          0: "#F0EFFC",

          base: "#6C50E0",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
