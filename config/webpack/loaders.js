module.exports = [
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
];