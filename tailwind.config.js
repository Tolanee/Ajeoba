/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        lightGreen: "#F0F5EC",
        primary: "#006D33",
        darkGray: "#090909",
        lightGray: "#686868"
      }
    },
  },
  plugins: [],
}

