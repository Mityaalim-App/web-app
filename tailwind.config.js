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
