const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

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

  module.exports.plugins.push(
    new FaviconsWebpackPlugin({ // (see https://github.com/haydenbleasel/favicons#usage)
      // Your source logo
      logo: path.join(__dirname, 'client/favicon.png'),
      // The prefix for all image files (might be a folder or a name)
      prefix: 'icons/',
      // Emit all stats of the generated icons
      emitStats: false,
      // The name of the json containing all favicon information
      statsFilename: 'iconstats.json',
      // Generate a cache file with control hashes and
      // don't rebuild the favicons until those hashes change
      persistentCache: false,
      // Inject the html into the html-webpack-plugin
      inject: true,
      // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
      background: '#fff',
      // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
      title: 'Title',
  
      // which icons should be generated 
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: true
      }
    })
  )
} else {
  module.exports.plugins.push(
    // Seperate config to reduce build time
    new FaviconsWebpackPlugin({
      logo: path.join(__dirname, 'client/favicon.png'),
      prefix: 'icons/',
      emitStats: false,
      statsFilename: 'iconstats.json',
      persistentCache: true,
      inject: true,
      background: '#fff',
      title: 'Title',
      logging: false,
      
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    })
  )
}