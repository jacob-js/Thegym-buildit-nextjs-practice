/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#E1EBFA',
        default: '#678C92',
        bluelight: '#5BCCDE',
        'dark-text': '#486A6F'
      },
      width: {
        '17.5': '4.375rem'
      },
      height: {
        '17.5': '4.375rem'
      }
    },
  },
  plugins: [],
}
