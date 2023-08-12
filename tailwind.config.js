/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Libre: ["Libre Franklin", "sans-serif"],
        Merriweather: ["Merriweather", "serif"],
      },
      gridTemplateRows: {
        rootLayout: "1fr",
      },
      gridTemplateColumns: {
        rootColLayout: "200px 1fr",
      },
    },
  },
  plugins: [],
};
