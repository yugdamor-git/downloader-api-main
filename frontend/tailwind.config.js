module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 13px 30px rgb(0 0 0 / 11%)",
        "2xl": " 0 4px 10px rgb(255 86 63 / 40%)",
      },
      screens: {
        custom: { raw: "(max-width: 320px)" },
      },
      animation: {
        bounce: "1.5s bounce infinite ease-in-out both",
      },
    },
  },
  plugins: [],
};
