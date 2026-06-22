/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#111111",
        secondary: "#666666",
        background: "#FFFFFFF",
        surface: "#F7F7F7",
        accent: "#FF4c3b",
        border: "EEEEEEE",
      },
      fontFamily: {
        sans: ["Roboto_400Regular"],
        roboto: ["Roboto_400Regular"],
        "roboto-medium": ["Roboto_500Medium"],
        "roboto-bold": ["Roboto_700Bold"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".font-normal": {
          fontFamily: "Roboto_400Regular",
          fontWeight: "normal",
        },
        ".font-medium": {
          fontFamily: "Roboto_500Medium",
          fontWeight: "normal",
        },
        ".font-semibold": {
          fontFamily: "Roboto_500Medium",
          fontWeight: "normal",
        },
        ".font-bold": {
          fontFamily: "Roboto_700Bold",
          fontWeight: "normal",
        },
      });
    },
  ],
};
