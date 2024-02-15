/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      screens:{
        'md-s': '770px',
        'md': '900px',
        'sm-l':'445px',
        'sm-m':'375px',
        'sm-s':'320px',
      },
      fontFamily:{
        "overpass": ["Overpass",'sans-serif'],
        "montserrat": ["Montserrat",'sans-serif'],
      },
      colors:{
        "main-color-dark": "#00338D",
        "main-color-light": "#0D4AB2",
        "black-light": "#1e1e1e",
      }
    },
  },
  plugins: [
    require("./plugins/hideScrollbarPlugin.js"),
    require("./plugins/textOrientation.js"),
    require('tailwindcss-3d')
],
}