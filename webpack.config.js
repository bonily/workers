const path = require('path');
const webpack = require('webpack');

const src = path.resolve(__dirname, './src');
const build = path.resolve(__dirname, './public'); // output worker.js to public folder



module.exports = {
  mode: 'none',
  target: "webworker", //Importan! Use webworker target
  entry: './src/worker.js',
  output: {
    filename: 'worker.js',
    path: build
  },
  resolve: {
    modules: ["node_modules", src],
    extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') })
  ],
  module: {
  }
};