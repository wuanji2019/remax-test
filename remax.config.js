const less = require('@remax/plugin-less');
const sass = require('@remax/plugin-sass');
module.exports = {
  one: true,
  output: 'dist/' + process.env.REMAX_PLATFORM,
  // cssModules: /\.module\.(less|scss|css)$/,
  plugins: [less(), sass()],
};
