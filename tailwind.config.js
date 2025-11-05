/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // --- ADD YOUR FONTS HERE ---
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"], // The pixel font
        poppins: ['"Poppins"', "sans-serif"],
        "pokemon-fire-red": ['"Pokemon Fire Red"', "sans-serif"],
      },

      colors: {},
    },
  },
  plugins: [],
};
