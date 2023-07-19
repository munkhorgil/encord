const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      ...colors,

      primary: "#4F45E4",
      secondary: "#CECECE",
    },
    extend: {},
  },
  plugins: [],
};
