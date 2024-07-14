/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        'bg': '#01090A',
        'primary': '#0097B2',
        'primary-light': '#00c1e3',
        'primary-dark': '#00798f'
      },
      fontFamily: {
        'poppins': ['Poppins','sans-serif']
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }        
    },
  },
  plugins: [],
}

