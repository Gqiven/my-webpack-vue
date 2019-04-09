const config = require('../config/index.js');
const webpack = require('webpack');

//定义NODE_ENV 环境变量
process.env.NODE_ENV = config.build.mode;

const webpackConfig = require('./webpack.prod.js')

webpack(webpackConfig, () => {
  console.log('start build:/\n')
})