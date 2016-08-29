var path = require('path');
var webpack = require('webpack');

var config = {
  entry: './app.js',
  
  output: {
    path:'./',
    filename: 'index.js',
  },
  module: {
    loaders: [
      {
        test: /.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules|bower_components/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devServer: {
    inline: true,
    port: 8080
  }
}

module.exports = config;
