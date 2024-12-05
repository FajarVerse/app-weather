/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      raleway: ["Raleway"],
      quicksand: ["Quicksand"],
    },
    extend: {
      colors: {
        primary: "#FFFFFF",
        second: "rgba(150,150,150, .7)",
        semilight: "rgba(255,255,255, .4)",
      },
    },
  },
  plugins: [],
};
