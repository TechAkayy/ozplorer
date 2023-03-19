const { pg_colors, pg_fonts } = require('./themes/pg-tailwindcss-theme.cjs')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './_pginfo/used-classes.html',
  ],
  theme: {
    extend: {
      colors: {
        ...pg_colors,
      },
      fontFamily: pg_fonts,
      backgroundImage: {
        logo: "url('https://icons.vuetelescope.com/framework/iles.svg')",
      },
    },
  },
  plugins: [],
}
