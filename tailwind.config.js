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
      },
      colors: {
        blueberry: "#302A36",
        blueberryLight: "#68636B",
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
      },
      animation: {
        marquee: "marquee 100s linear infinite",
        slideUp: "slideUp 0.8s ease-in-out forwards",
        slideDown: "slideDown 0.8s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
