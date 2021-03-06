'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  devtool:'cheap-module-eval-source-map',
  entry:{
      examples:[
           'webpack-hot-middleware/client?reload=true',
           path.join(__dirname, 'src/examples')
      ],
      autocomplete: path.join(__dirname, 'src')
  },
  output:{
    path:path.join(__dirname, '/build/'),
    filename: '[name].dev.js',
    publicPath: '/'
  },
  plugins: [
   new HtmlWebpackPlugin({
     template: 'src/index.tpl.html',
     inject: 'body',
     filename: 'index.html'
   }),
   new webpack.optimize.OccurenceOrderPlugin(),
   new webpack.HotModuleReplacementPlugin(),
   new webpack.NoErrorsPlugin(),
   new webpack.DefinePlugin({
     'process.env.NODE_ENV': JSON.stringify('development')
   }),
   new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  })
 ],
 module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        "presets": ["react", "es2015", "stage-0", "react-hmre"]
      }
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },{
      test: /\.(png|jpe?g)$/,
     loaders: ['file'],
   },
    { test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },

    ]
  }
}
