/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
			primary: colors.indigo,
      secondary: colors.yellow,
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#FFFFFF',
      'red': '#CB4042',
      'bgcolor': 'rgb(168 162 158)',
      'txtcolor': 'rgb(255 247 237)',
      'titlebg': 'rgb(214 211 209)',
      'titletxt': 'rgb(255 251 235)',
      'navbarbg': 'rgb(231 229 228)',
      'spanbg':'rgb(100 116 139)',
      'uderlinecolor': 'rgb(21 94 117)',
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}