const webpack = require('webpack');
const path = require('path');

module.exports = {
  module: {
    preLoaders: [
      {
        test: /\.tag$/,
        exclude: /node_modules/,
        loader: 'riotjs-loader',
        query: {
          type: 'babel',
        },
      },
    ],
    loaders: [
      {
        test: /\.(?:js|tag)$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
  entry: {
    'index': './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'app'),
    filename: '[name].js',
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
//    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.ProvidePlugin({
      riot: 'riot'
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.tag'],
  },
};
