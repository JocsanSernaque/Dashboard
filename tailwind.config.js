/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        'PrincipalColor':'#242429',
        'HoverColor':'#37373f',
        'TextColor':'#fff'
      }
    },
  },
  plugins: [],
}

