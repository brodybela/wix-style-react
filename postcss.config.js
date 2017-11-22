module.exports = {
  map: false,
  plugins: [
    require('postcss-modules')({
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    })
  ]
};
