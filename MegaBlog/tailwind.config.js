/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        '3xl':"2px 5px 0px 0px black",
      }
    },
    screens:{
      'ms':'375px',
      'ml':'426px'
    }
  },
  plugins: [],
}

