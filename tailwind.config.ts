import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['var(--font-beth-ellen)'],
        serif: ['var(--font-the-seasons)'],
      },
      colors: {
        primary:"rgb(var(--background-rgb))",
        accent: "var(--accent-rgb)"
      },
      backgroundColor: {
        primary: "rgb(var(--background-rgb))"
      }
    },
  },
  plugins: [],
};
export default config;
