/**
 * README - ...
 */

module.exports = {
  // SETTINGS - These will likely require modification for every project.
  bundleName: 'react-bundle-template',
  kineticWebserver: 'https://kinops.io',
  localPort: 3000,

  // LOADERS - These likely don't require much modification.
  loaderRules: [
    {
      test: /\.jsx?$/,
      use: [
        'babel-loader',
	'eslint-loader',
      ],
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    },
    {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      use: 'url-loader?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      use: 'url-loader?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      use: 'url-loader?limit=10000&mimetype=application/octet-stream'
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      use: 'file-loader'
    },
    {
      test: /\.(jpg|png|svg)/,
      use: 'file-loader'
    },
  ]
};
