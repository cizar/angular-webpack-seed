'use strict';

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var pkg = require('./package.json');

module.exports = {
  entry: [
    path.resolve(__dirname, 'src', 'index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'raw' },
      { test: /\.js$/, loaders: ['ng-annotate', 'babel-loader'], exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: pkg.name,
      template: path.resolve(__dirname, 'src', 'index.html')
    })
  ]
};
