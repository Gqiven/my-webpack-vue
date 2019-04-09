const config = require('../config/index.js');

//定义NODE_ENV 环境变量
process.env.NODE_ENV = config.dev.mode;

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-hot-middleware");
//引入
const open = require('open');

const app = express();
const config_js = require('./webpack.dev.js');
const compiler = webpack(config_js);


// 告诉 express 使用 webpack-dev-middleware，
// 以及将 webpack.base.js 配置文件作为基础配置
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  quiet: true,
  publicPath: config_js.output.publicPath
}));

// app.use(webpackHotMiddleware(compiler));
app.use(webpackHotMiddleware(compiler, {
  log: false,
  quiet: true
  //path: "/__what",
  //heartbeat: 2000
}));
//将项目根目录作为静态资源目录，用于服务html文件
app.use(express.static('.'));

// devMiddleware.waitUntilValid(function() {
//   console.log('> Listening at ' + uri + '\n')
// });

let _port = config.dev.port,
  _url = `http://localhost:${_port}/#alert`;

module.exports = app.listen(_port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('open:', _url)
  open(_url);
})