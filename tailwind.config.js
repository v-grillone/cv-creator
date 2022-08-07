/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    height: {
      '10vh': '10vh',
      'ph': '1056px'
    },
    width: {
      'pw': '816px',
      'fw': '67%'
    }
  },
  plugins: [],
}
