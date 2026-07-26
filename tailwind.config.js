/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        black: "#041204",
        gray: {
          100: "#F2F2F2",
          200: "#dedede",
          300: "#AAB2AA",
          400: "#868886"
        },
        green: {
          100: "#D3EAD3",
          200: "#93D193",
          300: "#22AA22",
          400: "#086008"
        },
        orange: {
          primary: "#EC7B29"
        },
        dawn: {
          bg: "#FBF6F2",
          surface: "#FFFFFF",
          primary: "#F0805A",
          "primary-strong": "#E96A44",
          "primary-soft": "#FCE7DD",
          lavender: "#B7A6E4",
          "lavender-soft": "#ECE6FA",
          teal: "#57C2B0",
          "teal-soft": "#DCF3EF",
          pink: "#F2A9C0",
          "pink-soft": "#FBE4EC",
          ink: "#3E3A4D",
          muted: "#918C9C",
          line: "#F0E7E0"
        },
        info: "#0CB3E8",
        success: "#0CE871",
        warning: "#E8DF0C",
        error: "#E80C0C"
      },
      fontFamily: {
        primary: ["var(--font-open-sans)"]
      },
      fontSize: {
        h1: "3rem", // 48px
        h2: "2.25rem", // 36px
        h3: "1.5rem", // 24px
        h4: "1.25rem", // 20px
        h5: "1rem", // 16px
        h6: "0.875rem", //14px
        base: "1rem" // 16px
      },
      boxShadow: {
        main: " 0px 4px 24px rgba(0, 0, 0, 0.08)"
      }
    }
  },
  plugins: []
};
