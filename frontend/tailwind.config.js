/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        spin: 'spin 1s linear infinite',
      },
      backgroundImage: {
        zooEntrance: "url(./src/assets/zooEntrance.jpg)",
        Map: "url(./src/assets/Map.jpg)",
        Ticket: "url(./src/assets/Ticket.jpg)",
        Hotel: "url(./src/assets/Hotel.jpg)",
        Logo: "url(./src/assets/Logo.png)",
      },
      fontFamily: {
        heading: ["Changa", "sans-serif"],
        body: ["Tenor Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}