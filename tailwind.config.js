/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      custombp: { raw: "(max-height: 400px),(min-width:800px)" },
      custombp2: { raw: "(min-height: 650px) and (min-width:800px)" },
      custombp3: { raw: "(min-height: 650px) and (min-width:900px)" },
      xl: "1440px",
    },
    extend: {
      colors: {
        primary500: "#077A85",
        primary400: "#0A8B96",
        primary300: "#0D9CA7",
        primary200: "#10ADB8",
        
        // Action button colors (keeping original yellow)
        action500: "#FBBC05",
        action400: "#FDD253",
        action300: "#FEE290",

        grey500: "#8995A9",
        grey400: "#D0D5DD",
        grey300: "#E7EAEE",
        grey200: "#F6F7F9",
        greyCustom: "#646464",

        error500: "#912018",
        error400: "#D92D20",
        error300: "#F04438",
        error200: "#F97066",

        fontPrimary: "#212121",
        fontSecondary: "#077A85",
        
        // Link color
        linkColor: "#006699",
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
