/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      first: '#23BE0A',
      second: '#59C6D2',
      third100: '#328EFF',
      third15: '#328EFF26',
      forth100: '#FFAC33',
      forth15: '#FFAC3326',
      white100: '#FFFFFF',
      black100: '#131313',
      black80: '#131313CC',
      black60: '#13131399',
      ashback: '#F3F3F3'

    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

