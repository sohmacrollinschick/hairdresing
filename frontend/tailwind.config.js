/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        salonPrimary: "#B8A2D9",
        salonSecondary: "#F8F5FF",
        salonAccent: "#8D73C6",
        salonDark: "#8D73C6",
        salonText: "#8D73C6",
        salonBlack: "#8D73C6",
        salonGold: "#8D73C6",
        salonCream: "#F8F5FF",
        salonWhite: "#FFFFFF"
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        luxe: "0 24px 80px rgba(141, 115, 198, 0.14)"
      }
    }
  },
  plugins: []
};
