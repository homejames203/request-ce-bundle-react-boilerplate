var webpack = require('webpack');
var config = require('./config');

module.exports = {
  entry: [
    'babel-polyfill',
    'isomorphic-fetch',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:'+config.localPort,
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],
  devtool: 'inline-source-map',
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
