/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        zooEntrance: "url(./src/assets/zooEntrance.jpg)",
      },
      fontFamily: {
        heading: ["Changa", "sans-serif"],
        body: ["Tenor Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}