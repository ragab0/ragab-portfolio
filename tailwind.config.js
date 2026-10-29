/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        bgSecondary: "hsl(var(--bg-secondary))",
        bgTertiary: "hsl(var(--bg-tertiary))",
        textPrimary: "hsl(var(--text-primary))",
        textSecondary: "hsl(var(--text-secondary))",
        textMuted: "hsl(var(--text-muted))",

        heroBg: "var(--section-hero-bg)",
        aboutBg: "var(--section-about-bg)",

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
        border: "hsl(var(--border))",
        "border-hover": "hsl(var(--border-hover) / .5)",
      },
      screens: {
        xs: "420px",
      },
      backgroundImage: {
        mainGradient:
          "linear-gradient(to top left, hsl(var(--bg-primary)), hsl(var(--bg-secondary)))",
      },
      fontFamily: {
        main: ["var(--font-main)", "sans-serif"],
      },
      boxShadow: {
        cardShadow: "0 10px 30px -15px var(--navy-shadow)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        fadeIn: "fadeIn 1s ease-out forwards",
        "fade-up": "fade-up 0.5s ease-out forwards",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
