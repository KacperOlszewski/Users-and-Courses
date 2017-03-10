var HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack');

var Plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html'
  }),

  new webpack.optimize.CommonsChunkPlugin({
    name: ['app']
  }),

  new webpack.DefinePlugin({
    'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
];

if (process.env.NODE_ENV == 'production') {
  Plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
  )
}

module.exports = Plugins;