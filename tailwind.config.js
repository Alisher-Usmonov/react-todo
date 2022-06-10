module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      "poppins": ['Poppins', "sans-serif", "system-ui"]
    }
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("@tailwindcss/custom-forms")
  ],
}
