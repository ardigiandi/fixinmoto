/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif']
      },
      rotate: {
        '-10': '-10deg',
      }
    },
  },
  plugins: [],
}

