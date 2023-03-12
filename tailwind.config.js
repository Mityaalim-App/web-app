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
          dark: "#3C3C3C",
        },
        green: {
          light: "#D3EAD3",
          primary: "#22AA22",
          progressBarIncome: "#93D193",
          dark: "#134239",
        },
      },
      boxShadow: {
        main: " 0px 4px 24px rgba(0, 0, 0, 0.08)",
      },
      fontFamily: {
        primary: ["var(--font-open-sans)"],
      },
    },
  },
  plugins: [],
};
