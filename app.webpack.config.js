const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const prod = process.env.NODE_ENV === 'production';

module.exports = {
  // Tell webpack to start bundling our app at app/index.js
  entry: path.join(__dirname, 'client/index.js'),
  // Output our app to the dist/ directory
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist')
  },
  // Emit source maps so we can debug our code in the browser
  devtool: 'source-map',
  // Tell webpack to run our source code through Babel
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'scss-loader']
      }
    ]
  },
  // Since Webpack only understands JavaScript, we need to
  // add a plugin to tell it how to handle html files.   
  plugins: [
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require('./dist/vendor-manifest.json')
    }),
    new HtmlPlugin({
      template: path.join(__dirname, 'client/index.html'),
      inject: 'body'
    })
  ]
}

if (prod) {
  module.exports.plugins.push(
    new UglifyJSPlugin({
      cache: true,
      exclude: /node_modules/,
      parallel: true,
      sourceMap: false
    }))
}