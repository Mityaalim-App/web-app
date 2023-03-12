/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#F9F9F9",
          250: "#C7D2D0",
          550: "#9F9F9F",
          650: "#79747E",
          750: "#E8E8E8",
          dark: "#3C3C3C",
        },
        green: {
          light: "#D3EAD3",
          middle: "#8FAE98",
          progressBarIncome: "#93D193",
          primary: "#22AA22",
          dark: "#187718",
        },
        orange: {
          expense: "#EC7B29",
        },
        black: {
          dest: "#282729",
        },
      },
      fontFamily: {
        primary: ["var(--font-open-sans)"],
      },
      boxShadow: {
        main: " 0px 2px 16px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
