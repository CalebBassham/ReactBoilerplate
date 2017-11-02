/* eslint-disable */
const webpack = require('webpack');
const path = require('path');

const output = path.join(__dirname, 'dist');

module.exports = {
  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-router-dom'
    ]
  },

  output: {
    filename: '[name].bundle.js',
    path: output,
    library: '[name]_lib',
  },

  plugins: [
    new webpack.DllPlugin({
      name: '[name]_lib',
      path: path.join(output, '[name]-manifest.json')
    })
  ]
};