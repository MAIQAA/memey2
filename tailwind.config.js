/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "rotate-slow": "rotateOnly 7s linear infinite",
      },
      keyframes: {
        rotateOnly: {
          "0%": { transform: "scale(1.75) rotate(0deg) translateZ(0px)" },
          "100%": { transform: "scale(1.75) rotate(360deg) translateZ(0px)" },
        },
      },
    },
  },
  plugins: [],
};
