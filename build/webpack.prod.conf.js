const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const AnnotatePlugin = require('annotate-webpack-plugin')

module.exports = {
  target: 'web',
  entry: './src/index.js',
  output: {
    filename: 'hg-jslibrary.js',
    path: path.resolve(__dirname, '../dist'),
    library: 'M',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: [".jsx", ".json", ".js"],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, '../src')]
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin(),
    new AnnotatePlugin({
      author: 'hanger',
      create: '2017/7/7'
    })
  ]
}
