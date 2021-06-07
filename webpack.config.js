const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = (env = {production: false}) => ({
  mode: env.production ? 'production' : 'development',
  devtool: env.production ? 'source-map' : 'eval-cheap-module-source-map',
  entry: path.resolve(__dirname, './assets/scripts/bug-hunter.js'),
  output: {
    path: path.resolve(__dirname, './assets'),
    filename: 'bug-hunter.min.js',
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
