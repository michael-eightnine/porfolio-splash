const path = require("path");
module.exports = {
  webpack: {
    alias: {
      '@Scss': path.resolve(__dirname, "src/scss/"),
      '@Three': path.resolve(__dirname, "src/three/"),
    }
  }
}
