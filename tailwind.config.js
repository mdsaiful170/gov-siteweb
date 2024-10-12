/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/componet/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        textprimary: "#666666",
        textsecondary: "#2D2D2D",
        darkaccent: "#111111",
        textblue: "#00D2FF",
      },
      boxShadow: {
        arrwshadow: "0px 4px 15px 0px #0000001A",
        boxhadow: "0px 10px 30px 0px #02B6DC26",
      },
    },
  },
  plugins: [],
};
