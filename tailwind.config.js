/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.js',
    './app/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "var(--main-color)",
        mainColorLight: "var(--main-color-light)",
        secondColor: "var(--second-color)",
        secondColorLight: "var(--second-color-light)",
      },
      screens: {
        xs: "420px"
      },
      backgroundImage: {
        "mainGradient": 
          "linear-gradient(to top left, var(--background-start), var(--background-end))"
      },
      fontFamily: {
        bitter: ['var(--font-bitter)', 'serif'],
        ubuntu: ['var(--font-ubuntu)', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
