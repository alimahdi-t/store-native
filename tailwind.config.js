/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        ISans_ExtraLight: ["ISans_ExtraLight", "sans-serif"],
        ISans_Light: ["ISans_Light", "sans-serif"],
        ISans_Regular: ["ISans_Regular", "sans-serif"],
        ISans_Medium: ["ISans_Medium", "sans-serif"],
        ISans_Bold: ["ISans_Bold", "sans-serif"],
        ISans_Black: ["ISans_Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
