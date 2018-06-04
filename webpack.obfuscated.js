// Js modules base obfuscated

const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    // vendor: ['lodash', 'jquery'],
    // obfuscated function library
    // obfuscated2: './src/modules/obfuscated/obfuscated2.js',
    obfuscated: './src/modules/obfuscated/obfuscated.js'
  },
  output: {
    // filename: "[name].bundle.js",
    // path: path.resolve(__dirname, '../../public/templates/ico/assets')
    // library: "globalFn"
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // https://github.com/mishoo/UglifyJS2
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};
