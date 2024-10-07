/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    screens: {
      mobile: '300px',
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px'
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)'
      },
      fontFamily: {
        GillBold: ['GillSansBoldItalic', 'sans-serif'],
        GillBoldItalic: ['GillSansBold', 'sans-serif'],
        GillHeavyItalic: ['GillSansHeavyItalic', 'sans-serif'],
        GillHeavy: ['GillSansHeavy', 'sans-serif'],
        GillItalic: ['GillSansItalic', 'sans-serif'],
        GillLightIta: ['GillSansLightItalic', 'sans-serif'],
        GillLight: ['GillSansLight', 'sans-serif'],
        GillMItalic: ['GillSansMItalic', 'sans-serif'],
        GillMedium: ['GillSansMedium', 'sans-serif'],
        GillCondensed: ['GillSansCondensed', 'sans-serif'],
        GillCondensedB: ['GillSansCondensedBold', 'sans-serif']
      }
    }
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value
          })
        },
        { values: theme('textShadow') }
      )
    })
  ]
}
