/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
  extend: {
    colors: {
      primary: "#7ce2ff", // or your previous electric blue
      primaryDim: "#58b8d4",
    }
  }
},
  plugins: [],
};