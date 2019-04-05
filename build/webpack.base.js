const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
//构建前清空构建目录
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
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
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './examples/index.html',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ]
}