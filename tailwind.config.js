/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html ", "./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        //Primary
        BrightBlue: "hsl(220, 98%, 61%)",
        //CheckBackground: linear-gradient "hsl(192, 100%, 67%)" "hsl(280, 87%, 65%)",

        //Light Theme
        VeryLightGray: "hsl(0, 0%, 98%)",
        VeryLightGrayishBlue: "hsl(236, 33%, 92%)",
        LightGrayishBlue: "hsl(233, 11%, 84%)",
        DarkGrayishBlue: "hsl(236, 9%, 61%)",
        VeryDarkGrayishBlue: "hsl(235, 19%, 35%)",

        //Dark Theme
        VeryDarkBlue: "hsl(235, 21%, 11%)",
        VeryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
        LightGrayishBlue: "hsl(234, 39%, 85%)",
        LightGrayishBlue: "hsl(236, 33%, 92%)", //hover
        DarkGrayishBlue: "hsl(234, 11%, 52%)",
        VeryDarkGrayishBlue: "hsl(233, 14%, 35%)",
        VeryDarkGrayishBlue: "hsl(237, 14%, 26%)",
      },
    },
  },
  plugins: [],
};
