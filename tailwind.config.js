/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // --- ADD YOUR FONTS HERE ---
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"], // The pixel font
        poppins: ['"Poppins"', "sans-serif"],
      },

      // --- ADD YOUR COLORS HERE (from the design) ---
      colors: {
        // For the FAQ page
        "brand-background": "#a8d8c8", // The teal background
        "brand-item": "#f8a088", // The salmon-pink item
        "brand-border": "#212121", // The dark border

        // All your custom GDSC colors
        "gdsc-blue-1": "#4885ed",
        "gdsc-blue-2": "#4285f4",
        "gdsc-blue-3": "#547dbf",
        "gdsc-green": "#3cba54",
        "gdsc-red-1": "#db3236",
        "gdsc-red-2": "#f0766c",
        "gdsc-yellow": "#f4c20d",
        "gdsc-dark": "#1d192b",
        "gdsc-content": "#313033",
        "gdsc-grayish": "#49454f",
        "gdsc-line": "#c5c5c5",
        "gdsc-bg": "#dbdbdb",
        "gdsc-neutral": "#605d62",
        "gdsc-shadow": "rgb(218, 215, 215)",
        "grey-text": "rgba(101, 108, 115, 1)",
        "grey-text-70": "rgba(101, 108, 115, 0.7)",
      },
    },
  },
  plugins: [],
};
