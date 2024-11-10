/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["./components/**/*.js", "./app/**/*.js"],
  theme: {
    extend: {
      colors: {
        mainColor: "var(--main-color)",
        mainColorLight: "var(--main-color-light)",

        darkNavy: "var(--dark-navy)",
        navy: "var(--navy)",
        lightNavy: "var(--light-navy)",
        lightestNavy: "var(--lightest-navy)",
        navyShadow: "var(--navy-shadow)",

        darkSlate: "var(--dark-slate)",
        slate: "var(--slate)",
        lightSlate: "var(--light-slate)",
        lightestSlate: "var(--lightest-slate)",
      },
      screens: {
        xs: "420px",
      },
      backgroundImage: {
        mainGradient:
          "linear-gradient(to top left, var(--navy), var(--navy-linear))",
      },
      fontFamily: {
        main: ["var(--font-main)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
