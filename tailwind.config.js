/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important:"#root",
  theme: {
    colors: {
      'black':  'rgba(0,0,0,0.75)',
      'blueish': '#7f1d1d',
      'light-purple': '#9da7ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'purple-grad': '#9F55FF',
      'blue-grad': '#5479FF',
    },
    extend: {},
  },
  plugins: [],
}