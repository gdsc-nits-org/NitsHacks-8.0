/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // --- ADD YOUR FONTS HERE ---
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"], // The pixel font
        poppins: ['"Poppins"', "sans-serif"],
        pocket: ['"Pocket Monk"', "sans-serif"],
      },

      colors: {},
      screens: {
        tablet: "640px",
        lg: "1200px",
      },
    },
  },
  plugins: [],
};
