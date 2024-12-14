/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "negro": "#171717",
        "dorado2": "#FFD700",
        "dorado": "#e2cc39",
        "negro2": "#010100",
        "negro_clarito": "#222222",
      },
      fontFamily: {
        "textos": "Poppins",
        "titulos": "titulos"
      },
      screens: {
        "500px": "500px",
        "900px": "900px"
      }
    },
  },
  plugins: [],
}