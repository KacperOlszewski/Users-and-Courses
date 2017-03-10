const loaders = require('./loaders');
const plugins = require('./plugins');

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
    loaders: loaders
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.html']
  },
  plugins: plugins,
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