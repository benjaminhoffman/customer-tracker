const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

console.log(process.env)
module.exports = {
  entry: {
    index: './src/client/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['recharts'],
            presets: ['env', 'es2015', 'react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', // needed for css modules
          {
            loader: 'css-loader',
            options: {
              modules: true, // enables for css modules
              importLoaders: 1,
              localIdentName: '[path][name]_[local]_[hash:5]' // more descriptive class names
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
  devServer: {
    hot: true, // enable HMR
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    proxy: {
      '/': `${process.env.BASE_URL || 'http://localhost'}:${process.env.PORT ||
        3001}`
    }
  }
}
