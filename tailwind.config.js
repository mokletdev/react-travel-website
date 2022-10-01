const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
        serif: ['"Volkhov"', ...defaultTheme.fontFamily.serif],
      },
      dropShadow: {
        primary: [
          "5px 5px 15px rgba(219, 104, 81, 0.2)",
          "0px 0px 0px rgba(219, 104, 81, 0.2)",
        ],
        primaryHover: [
          // "75px 75px 43px rgba(219, 104, 81, 0.03)",
          // "42px 42px 36px rgba(219, 104, 81, 0.1)",
          "19px 19px 27px rgba(219, 104, 81, 0.17)",
          "5px 5px 15px rgba(219, 104, 81, 0.2)",
          "0px 0px 0px rgba(219, 104, 81, 0.2)",
        ],
        secondary: [
          "6px 6px 9px rgba(242, 150, 47, 0.17)",
          "2px 2px 5px rgba(242, 150, 47, 0.2)",
          "0px 0px 0px rgba(242, 150, 47, 0.2)",
        ],
        secondaryHover: [
          "25px 25px 14px rgba(242, 150, 47, 0.03)",
          "14px 14px 12px rgba(242, 150, 47, 0.1)",
          "6px 6px 9px rgba(242, 150, 47, 0.17)",
          "2px 2px 5px rgba(242, 150, 47, 0.2)",
          "0px 0px 0px rgba(242, 150, 47, 0.2)",
        ],
      },
      colors: {
        primary: "#DB6851",
        secondary: "#F2962F",
      },
    },
  },
  plugins: [],
};
