/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#272560',
        },
        white: {
          50: '#fff',
        },
      },
    },
  },
  plugins: [],
}
