const path = require('path');
module.exports = {
  webpack: {
    alias: {
      Assets: path.resolve(__dirname, 'src/assets/'),
      Components: path.resolve(__dirname, 'src/components/'),
      Constants: path.resolve(__dirname, 'src/constants/'),
      Hooks: path.resolve(__dirname, 'src/hooks/'),
      Scss: path.resolve(__dirname, 'src/scss/'),
      Three: path.resolve(__dirname, 'src/three/')
    }
  }
};
