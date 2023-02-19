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
        gray: {
          100: "#F9F9F9",
          250: "#C7D2D0",
          550: "#9F9F9F",
          650: "#79747E",
          dark: "#3C3C3C"
        },
        green: {
          light: "#D3EAD3",
          primary: "#22AA22"
        }
      },
      fontFamily: {
        primary: ["var(--font-open-sans)"]
      }
    }
  },
  plugins: []
};
