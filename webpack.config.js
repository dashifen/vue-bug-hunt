const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const filename = 'bug-hunter.js';

module.exports = (env = {production: false}) => ({
  mode: env.production ? 'production' : 'development',
  devtool: env.production ? 'source-map' : 'eval-cheap-module-source-map',
  entry: path.resolve(__dirname, './assets/scripts/' + filename),
  output: {
    path: path.resolve(__dirname, './assets'),
    filename: filename,
    publicPath: '/assets/'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'assets/scripts'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  watchOptions: {
    ignored: ['node_modules/**']
  }
})
