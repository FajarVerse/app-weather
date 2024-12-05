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
        second: "rgba(200,200,200, .4)",
        semilight: "rgba(255,255,255, .4)",
      },
    },
  },
  plugins: [],
};
