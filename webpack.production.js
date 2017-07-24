/* eslint-disable */
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    'isomorphic-fetch',
    './src/index.production.js',
  ],
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false
    })
  ]
};
