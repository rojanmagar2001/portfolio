module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        primary: "#e5e5e5",
        secondary: "#0e121a",
        third: "#5eead4",
        fourth: "#a1a1aa",
      },
    },
    fontFamily: {
      cairo: ["Cairo", "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
