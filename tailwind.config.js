/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      screens:{
        'md': '900px',
        'sm-l':'425px',
        'sm-m':'375px',
        'sm-s':'320px',
        'md-m':'1208px'
      },
      fontFamily:{
        "overpass": ["Overpass",'sans-serif'],
        "montserrat": ["Montserrat",'sans-serif'],
      },
      colors:{
        "main-color-dark": "#00338D",
        "main-color-light": "#0D4AB2",
      }
    },
  },
  plugins: [
    require("./plugins/hideScrollbarPlugin.js"),
    require("./plugins/textOrientation.js"),
    require('tailwindcss-3d')
],
}