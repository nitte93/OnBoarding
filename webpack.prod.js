'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Extract = require('extract-text-webpack-plugin')



module.exports = {
  devtool:'cheap-module-source-map',
  entry:{
      'examples.min': path.join(__dirname, 'src/examples'),
      'onBoarding':path.join(__dirname,'src'),
      'onBoarding.min':path.join(__dirname,'src')
  },
  output:{
    path:path.join(__dirname, '/build/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
   new HtmlWebpackPlugin({
     template: 'src/index.tpl.html',
     inject: 'body',
     filename: 'index.html'
   }),
   new webpack.optimize.OccurenceOrderPlugin(),
   new webpack.NoErrorsPlugin(),
   new webpack.DefinePlugin({
     'process.env.NODE_ENV': JSON.stringify('production')
   }),
   new webpack.optimize.UglifyJsPlugin({
     compressor: { warnings: false },
     include: /\.min\./,
   }),
   new Extract('styles.min.bundle.css'),
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
