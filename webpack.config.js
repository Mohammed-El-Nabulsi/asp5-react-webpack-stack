var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  context: path.join(__dirname),
  entry: ['babel-polyfill', './Frontend/main.jsx'],
  output: {
    path: path.join(__dirname, 'wwwroot/built'),
    filename: '[name].bundle.js'
  },

  watch: true,

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css'), include: /node_modules/ },
      { test: /\.(png|jpg|svg)$/, loader: 'file' },
      { test: /\.(ttf|eot|svg|woff|woff2)$/, loader: 'file' },
    ],
  },

  postcss: function () {
    return [autoprefixer];
  },

  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new ExtractTextPlugin('[name].bundle.css', {
      allChunks: true
    })
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
}
