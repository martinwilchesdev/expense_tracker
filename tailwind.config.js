module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'media',
    theme: {
        extend: {
          colors: {
            "at-light-green": "#44ba9f",
            "at-light-red": "#c0392b",
            "at-green": "#286d5d",
            "light-grey": "#e8e8e8"
          }
        },
        fontFamily: {
          Poppins: ["Poppins, sans-serif"],
        },
    },
    variants: {
        extend: {}
    },
    plugins: []
}
