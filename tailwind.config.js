/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        
      },
      backgroundImage: {
        "bug": "linear-gradient(180deg, #729f3f 50%, #729f3f 50%)",
        "dragon": "linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)",
        "fairy": "linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%)",
        "fire": "linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%)",
        "ghost": "linear-gradient(180deg, #7b62a3 50%, #7b62a3 50%)",
        "ground": "linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)",
        "normal": "linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%)",
        "psychic": "linear-gradient(180deg, #f366b9 50%, #f366b9 50%)",
        "steel": "linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%)",
        "dark": "linear-gradient(180deg, #707070 50%, #707070 50%)",
        "electric": "linear-gradient(180deg, #eed535 50%, #eed535 50%)",
        "fighting": "linear-gradient(180deg, #d56723 50%, #d56723 50%)",
        "flying": "linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)",
        "grass": "linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%)",
        "ice": "linear-gradient(180deg, #51c4e7 50%, #51c4e7 50%)",
        "poison": "linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%)",
        "rock": "linear-gradient(180deg, #a38c21 50%, #a38c21 50%)",
        "water": "linear-gradient(180deg, #4592c4 50%, #4592c4 50%)",
        "unknown": "linear-gradient(180deg, red 50%, black 50%)",
        "shadow": "linear-gradient(180deg, black 50%, red 50%)",
      }
    },
  },
  plugins: [],
}
