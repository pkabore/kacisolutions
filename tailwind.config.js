/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    'src/**/*.vue',
    'public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.lime,
        secondary: colors.lime
      },

      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1280px"
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Urbanist", "system-ui", "sans-serif"],
        mono: ["Monaco", "Menlo", "ui-monospace", "monospace"],
      }
    },
  },
  plugins: [],
}
