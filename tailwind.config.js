module.exports = {
  mode: "jit",
  content: [
    "./public/*.{html,js}",
    "./src/*.{html,js}",
    "src/components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Encode-Sans": ["Encode Sans", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
