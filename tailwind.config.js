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
      },
      padding: {
        '22.5': '5.625rem',
        '11': '2.8125rem'
      },
      dropShadow: {
        box: '0px 30px 60px rgba(25, 55, 102, 0.2)'
      }
    },
  },
  plugins: [],
}
