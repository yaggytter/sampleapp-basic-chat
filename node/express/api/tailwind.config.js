const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        "./views/*.ejs",
        "./views/partials/*.ejs",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
