module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      "poiret": ['Poiret One', "cursive"]
    }
  },
  plugins: [
    require("prettier-plugin-tailwindcss")
  ],
}
