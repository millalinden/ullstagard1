/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        erode: ["var(--font-erode)"],
        satoshi: ["var(--font-satoshi)"],
        cabinet: ["var(--font-cabinet)"],
      },
      colors: {
        blueberry: "#302A36",
        blueberryLight: "#68636B",
        offwhite: "#FFFDFA",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
        scaleDown: {
          "0%": { transform: "scale(3)" },
          "100%": { transform: "scale(1)" }, // Adjust scaling as needed
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 100s linear infinite",
        slideUp: "slideUp 0.8s ease-in-out forwards",
        slideDown: "slideDown 0.8s ease-in-out forwards",
        slideUpForm: "slideUp 0.5s ease-out",
        scaleDown: "scaleDown 1s ease-out forwards",
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
      translate: {
        full: "100%",
        "-full": "-100%",
      },
      transitionDuration: {
        500: "500ms",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
