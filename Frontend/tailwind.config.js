/**
 * 
imp 
@type {import('tailwindcss').Config} */
// import {fontFamily} from "tailwindcss/defaulTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["goshan-regular", "san-serif"],
      },
    },
  },
  plugins: [],
};
