/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: { center: true },
    extend: {
      backgroundImage: { "three-circle": "url(/assets/svg/threeCircles.svg)" },
      colors: {
        primary: "#6016FC",
        green: "#16FCD2",
        dark: "#0B0B22",
        red: "#FC165B",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
