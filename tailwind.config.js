module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-mibig': '#006ca2',
        'blue-mibig-dark': '#006293',  //'#00527a',
        'blue-mibig-light': '#0084c6',  //'#00a7fa',
        'green-ok': '#2a9d8f',
        'yellow-warning': '#e9c46a',
        'orange-warning': '#f4a261',
        'red-error': '#e76f51',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
