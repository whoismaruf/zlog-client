 // tailwind.config.js
 module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      screens: {
        '3xl': '1920px',
      },
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }