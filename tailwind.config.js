const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "320px", // => for extra small devices
      sm: "640px", // => for small devices
      md: "768px", // => for medium devices
      lg: "1024px", // => for large devices
      xl: "1280px", // => for extra large devices
      "2xl": "1536px", // => for 2xl devices
      "3xl": "1920px", // => for 3xl devices
    },
    colors: {
      primaryColor: "#018e49",
      nav3: "#0a3b1e",
      lightSecondary: "#ea4447",
      white: "#fff",
      dark: "#3c3d3e",
      text: "#f7ffff"
    },
    extend: {
      // fontFamily: {
      //   button: ['sans-serif'],
      // },
    },
  },

  plugins: [nextui(), require('daisyui')],
};
