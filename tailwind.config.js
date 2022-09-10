/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'first': "#E7717D",
        'second': "#C2CAD0",
        'third': "#C2B9B0",
        'fourth': "#7E685A"
      }
    },
  },
  plugins: [require("daisyui")],
}
