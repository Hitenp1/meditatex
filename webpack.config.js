var webpack = require('webpack');

module.exports = {
  entry: './src/main.jsx',
  output: {
    path: __dirname,
    filename: './bundle.js'
  },
  module: {
      loaders: [
         { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: "file-loader" },
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
};


