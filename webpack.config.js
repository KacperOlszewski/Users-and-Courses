var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/app.ts'
  },
  output: {
    path: './dist',
    publicPath: 'http://127.0.0.1:8085/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  module: {
    loaders: [
      {
        test: /\.(ts)$/,
        exclude: /(node_modules)/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader', 'angular2-router-loader']
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.scss/,
        loader: 'style!css!sass'
      },

      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|woff(4)?)(\?[a-z0-9]+)?$/,
        loader: 'file?name=bundles/[hash].[ext]'
      },
      {
        test: /\.(html)$/,
        loader: 'raw'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.html']
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),

      new webpack.optimize.CommonsChunkPlugin({
        name: ['app']
      })
  ],
  devServer: {
    historyApiFallback: true,
    host: '127.0.0.1',
    port: 8085,
    proxy: {
      '/*': {
        target: 'http://127.0.0.1:8085/',
        rewrite: function(req){
          req.url='index.html';
        }
      }
    }
  }
};