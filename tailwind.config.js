/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
    ],
    theme: {
        colors: {
            white: '#FAFBFF',
            yellow: '#FFF200',
            black: '#242834',
            blue: '#152F84',
            lightBlue: '#3573E5',
        },
        extend: {
            fontFamily: {
                principal: ['Poppins', ...defaultTheme.fontFamily.sans],
                secondary: ['Fontjek'],
            },
        },
    },
    plugins: [],
}
