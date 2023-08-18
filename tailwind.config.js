/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    extend: {
      colors: {
        'login': '#1B3764',
        'loginBtn': '#3949AB',
        'individual_page': '#003E60'
      },
    },
  },
  plugins: [
    
    require('@tailwindcss/line-clamp'), 
    require('flowbite/plugin'),
    require("daisyui"),
    
  ],
}

