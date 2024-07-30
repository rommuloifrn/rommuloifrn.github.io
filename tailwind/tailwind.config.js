/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../**/*.{html, js}', '../index.html'],
  theme: {
    extend: {
      fontFamily: {
        'sans': 'Inter',
        'serif': 'Aria Serif Libre'
      },
      colors:{
        "darkin":"#1F1F25"
      }
    },
  },
  plugins: [],
}

