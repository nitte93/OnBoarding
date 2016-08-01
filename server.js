const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware  = require('webpack-dev-middleware');
const webpackHotMiddleware  = require('webpack-hot-middleware');
const config = require('./webpack.dev.js');


const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;

var app  = express();

if(isDeveloping){
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath:config.output.publicPath,
    contentBase:'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  var staticPath = path.join(__dirname, '/build')
  app.get('*', function(req, res) {
    res.sendFile(staticPath);
  })
}else{
  var staticPath = path.join(__dirname, '/build')
  app.use(express.static(staticPath));
  app.get('*', function(req,res){
    res.sendFile(staticPath);
  })
}

app.listen(3000, function(){
  console.log('Listening on port 3000');
})
