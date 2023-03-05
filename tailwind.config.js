/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#041204",
        gray: {
          100: "#F2F2F2",
          200: "#dedede",
          300: "#AAB2AA",
          400: "#868886",
          400: "#868886",
        },
        green: {
          100: "#D3EAD3",
          200: "#93D193",
          300: "#22AA22",
          400: "#086008",
          400: "#086008",
        },
        orange: {
          primary: "#EC7B29",
          primary: "#EC7B29",
        },
        info: "#0CB3E8",
        success: "#0CE871",
        warning: "#E8DF0C",
        error: "#E80C0C",
        error: "#E80C0C",
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
  plugins: [],
};
