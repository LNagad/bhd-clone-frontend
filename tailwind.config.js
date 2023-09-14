/** @type {import('tailwindcss').Config} */

// tailwind.config.js
const {nextui} = require('@nextui-org/react');

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    //next ui
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens:{
        'xs': '300px',
        ...defaultTheme.screens,
      }
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};

