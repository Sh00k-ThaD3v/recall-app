const tailwind = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [tailwind("./tailwind.js"), autoprefixer()]
};
