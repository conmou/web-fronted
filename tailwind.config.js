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

      'gray-dark': '#273444',
      'all-bg': '#878D95',
      'bg': '#E6E6E6',
      'b-blue': 'rgb(170 184 188)',
      'w-blue': 'rgb(188 199 201)',
      'b-green': 'rgb(132 163 135)',
      'w-green': 'rgb(161 183 163)',
      'b-red': 'rgb(188 130 120)',
      'w-red': 'rgb(196 150 142)',

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