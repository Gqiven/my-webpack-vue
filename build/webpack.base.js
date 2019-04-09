const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
//构建前清空构建目录
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const config = require('../config/index.js')
let configData = null;//配置字段

//确定mode
let _mode;
switch(process.env.NODE_ENV) {
  case 'development':
    _mode = 'development';
    configData = config.dev;
    break;
  case 'production':
    _mode = 'production';
    configData = config.build;
    break;
  default:
    _mode = 'none';
}

module.exports = {
  mode: _mode,
  //入口文件
  entry: {
    index: './examples/index.js'
  },
  //输出配置
  output: {
    //文件名称
    filename: '[name].js',
    //文件存放地址
    path: path.resolve(__dirname, '../dist'),
    publicPath: configData.publicPath
  },
  resolve: {
    //自动解析确定的扩展
    extensions: ['.js', '.vue'],
    //指定解析模块使的搜索目录
    modules: [path.resolve(__dirname, '../node_modules')]
  },
  stats:{
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: ['vue-style-loader','css-loader','less-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './examples/index.html',
      filename: 'index.html',
      //favicon: 'https://static.mileslife.com/image/32X32.ico'
      // minify: true
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  optimization: {
    //分离第三方库
    splitChunks: {
      chunks: 'all',
      name: 'vendor'
    }
  }
}