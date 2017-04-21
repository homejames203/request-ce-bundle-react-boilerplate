/**
 * README -
 */

var path = require('path');
var webpack = require('webpack');

var config = require('./config');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:'+config.localPort,
    'webpack/hot/only-dev-server',
    './src/bundle/index.js',
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/static/'
  },

  devtool: 'inline-source-map',

  module: {
    rules: config.loaderRules
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],

  devServer: {
    host: 'localhost',
    port: config.localPort,
    historyApiFallback: true,
    hot: true,
    overlay: true,
    proxy: {
      '/': {
        target: config.kineticWebserver,
        headers: { 'X-Webpack-Bundle-Name' : config.bundleName },
        secure: false,
        autoRewrite: true,
        protocolRewrite: 'http'
      }
    }
  },
};
