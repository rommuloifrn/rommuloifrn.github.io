/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../**/*.{html, js}', '../index.html'],
  theme: {
    extend: {
      fontFamily: {
        'sans': 'Inter',
        'serif': 'Averia Serif Libre'
      },
      colors:{
        "darkin":"#1F1F25",
        "roxin":"#62548B"
      }
    },
  },
  plugins: [],
}

