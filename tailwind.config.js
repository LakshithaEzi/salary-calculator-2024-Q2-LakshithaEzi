/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        cal: ["Playfair Display", " serif"],
        tp: ["DM Sans", " sans-serif"],
      },
    },
  },
  plugins: [],
};
