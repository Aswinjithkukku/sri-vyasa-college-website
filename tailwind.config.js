/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#281a39",
        bgColor: "#f6f6f6",
        peachColor: "#f6ebe4",
        stoneGray: "#d9d9d9",
        darkColor: "#202020",
        hoverBlueColor: "#b0b8db",
        bgHBColor: "#c1d7e0",
      },
    },
  },
  plugins: [],
};
