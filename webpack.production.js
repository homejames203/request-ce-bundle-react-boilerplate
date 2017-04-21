/**
 * README -
 */

var path = require('path');
var webpack = require('webpack');

var config = require('./config');

module.exports = {
  entry: './src/bundle/index.production.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  devtool: 'source-map',

  module: {
    rules: config.loaderRules
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false
    })
  ]
};
