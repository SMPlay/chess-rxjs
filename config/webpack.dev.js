const path = require('path');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.config.js');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    port: 3000
  }
});
