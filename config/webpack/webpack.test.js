var webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.(ts)$/,
        exclude: /(node_modules)/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader', 'angular2-router-loader']
      },
      {
        test: /\.css$/,
        loader: 'raw'
      },
      {
        test: /\.scss/,
        loader: 'raw'
      },

      {
        test: /\.(png|jpg|jpeg|gif(4)?)(\?[a-z0-9]+)?$/,
        loader: 'null'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|woff(4)?)(\?[a-z0-9]+)?$/,
        loader: 'null'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "null"
      },
      {
        test: /\.(html)$/,
        loader: 'html'
      }
    ]
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  }
};