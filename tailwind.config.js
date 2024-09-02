/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'custom-blue': '#E3F4FC',
                'button-color-primary': '#DADA32',
                'blue-primary': '#133040',
                'blue-secondary': '#0E2431',
                'blue-span': '#E2F5FC',
                'color-input': '#FFFFD7',
                'button-color-secundary': '#EEEE5F',
            },
            borderRadius: {
                'radius-custom': '4rem',
            },
        },
    },
}