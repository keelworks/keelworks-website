/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      custombp: { raw: "(max-height: 400px),(min-width:600px)" },
      custombp2: { raw: "(min-height: 650px) and (min-width:600px)" },
      xl: "1440px",
    },
    extend: {
      colors: {
        primary500: "#FBBC05",
        primary400: "#FDD253",
        primary300: "#FEE290",
        primary200: "#FFF4D7",

        grey500: "#8995A9",
        grey400: "#D0D5DD",
        grey300: "#E7EAEE",
        grey200: "#F6F7F9",
        greyCustom: "#646464",

        error500: "#912018",
        error400: "#D92D20",
        error300: "#F04438",
        error200: "#F97066",

        fontPrimary: "#101828",
        fontSecondary: "#DBA300",
      },
      height: {
        68: "68%",
      },

      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
