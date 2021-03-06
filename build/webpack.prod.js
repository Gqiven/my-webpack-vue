const merge = require('webpack-merge');
const base = require('./webpack.base.js');

module.exports = merge(base, {
  //mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
  ]
})