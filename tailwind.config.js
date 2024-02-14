/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      // screens:{
      //   'md': '900px',
      //   'sm-l':'425px',
      //   'sm-m':'375px',
      //   'sm-s':'320px',
      //   'md-m':'1208px'
      // },
      fontFamily:{
        "overpass": ["Overpass",'sans-serif'],
      },
      // colors:{
      //   "button-color": "#FD6363",
      //   "dark-text-color": "#1B1C1E",
      //   "light-text-color": "#8A8A8A",
      //   "dark-bg-color": "#151516",
      //   "border-color": "#3F4349",
      //   "contactFormBg": "#141316",
      // }
    },
  },
  plugins: [
    require("./plugins/hideScrollbarPlugin.js"),
    require("./plugins/textOrientation.js"),
    require('tailwindcss-3d')
],
}