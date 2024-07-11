/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        limeColor: '#F3FF34',
        darkGreyish: '#282828'
      },
      backgroundImage: {
        'first': "url(/imgs/heritage-lp-3.webp)",
        'second-1': "url(/imgs/sage1-desktop.webp)",
        'second-2': "url(/imgs/sage2-desktop.webp)",
        'third': "url(/imgs/tom-dixon-lp-tile-1.webp)",
        'forth-1': "url(/imgs/jump1-desktop.webp)",
        'forth-2': "url(/imgs/jump2-desktop.webp)",
        'fifth': "url(/imgs/mk-lp-tile-1.webp)",

      }
    },
  },
  plugins: [],
}

