const config = require('../config/index.js');

//定义NODE_ENV 环境变量
process.env.NODE_ENV = config.dev.mode;

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-hot-middleware");

const app = express();
const config_js = require('./webpack.dev.js');
const compiler = webpack(config_js);

// 告诉 express 使用 webpack-dev-middleware，
// 以及将 webpack.base.js 配置文件作为基础配置
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config_js.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));


// 将文件 serve 到 port 3000。
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});