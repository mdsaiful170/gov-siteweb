/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/componet/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        textprimary: "#666666",
        textsecondary: "#2D2D2D",
        darkaccent: "#111111",
      },
    },
  },
  plugins: [],
};
