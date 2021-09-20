const colors = require("tailwindcss/colors");

module.exports = {
  purge: {enabled: false},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#B6DCE9",
          dark: "#307C91",
        },
        gray: {
          light: "#E5E3E4",
          dark: "#8B929A",
        },
        brown: "#7B5C52",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
