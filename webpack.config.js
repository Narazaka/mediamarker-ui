const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
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
          template: 'pug',
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
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader'),
      },
      {
        test: /\.(?:png|jpg|gif|svg|ttf|eot|woff2?)(?:\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader?name=[name].[ext]',
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
    new ExtractTextPlugin('[name].css', {allChunks: true}),
  ],
  resolve: {
    extensions: ['', '.js', '.tag'],
  },
};
