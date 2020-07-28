const autoprefixer = require("autoprefixer");
const postcssImport = require("postcss-import");
const postcssNested = require("postcss-nested");

module.exports = {
  plugins: [postcssNested, postcssImport, autoprefixer],
};
