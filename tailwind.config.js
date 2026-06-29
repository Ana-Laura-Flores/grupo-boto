/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./*.html",
    "./**/*.html"
  ],

  theme: {
    extend: {

      colors: {
        boto: {
          azul: "#1E2B4B",
          azulOscuro: "#131B31",
          naranja: "#D36145",
          champagne: "#C49A6C",
          grisFondo: "#F8FAFC",
        }
      },

      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },

      boxShadow: {
        premium: '0 25px 60px rgba(0,0,0,.12)',
      }

    }
  },

  plugins: []
}