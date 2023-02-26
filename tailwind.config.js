/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html'],
    darkMode: 'class',
    theme: {
        screens: {
            xxs: '340px',
            xs: '410px',
            sm: '480px',
            s: '590px',
            md: '720px',
            m: '840px',
            lg: '976px',
            l: '1200px',
            xl: '1440px'
        },
        extend: {
            colors: {
                purple: 'hsl(241, 61%, 57%)',
                darkPurple: 'hsl(241, 61%, 40%)',
                lightPurple: 'hsl(240, 61%, 85%)',
                yellow: 'hsl(42, 100%, 48%)',
                pink: 'hsl(354, 68%, 78%)'
            }
        },
    },
    plugins: [],
}
