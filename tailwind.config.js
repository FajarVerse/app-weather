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
        primary: "#E0E0E0",
      },
    },
  },
  plugins: [],
};
