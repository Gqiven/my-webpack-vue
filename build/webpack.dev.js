const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const webpack = require('webpack');

//给入口文件添加热重载关联代码
Object.keys(base.entry).forEach(function(name) {
  base.entry[name] = ['webpack-hot-middleware/client?noInfo=true&reload=true'].concat(base.entry[name])
})

module.exports = merge(base, {
  //mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    //https://github.com/webpack-contrib/webpack-hot-middleware
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ]
})