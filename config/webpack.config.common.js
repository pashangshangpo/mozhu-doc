/**
 * @file webpack common config
 * @author xiaozhihua
 * @date 2018-11-22 16:52:48
 */

const path = require('path')

const resolve = (...arg) => path.resolve('.', ...arg)

module.exports = {
  entry: {
    index: './web/index.js'
  },
  output: {
    path: resolve('build'),
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash:5].js',
    publicPath: './',
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      $api: resolve('web/api'),
      $common: resolve('web/common'),
      $components: resolve('web/components'),
      $style: resolve('web/style'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)/,
        include: [
          resolve('web')
        ],
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'image/[name].[hash].[ext]',
              limit: 10000
            }
          }
        ]
      },
      {
        test: /\.svg/,
        include: [
          resolve('web')
        ],
        exclude: /(node_modules|bower_components)/,
        use: ['svg-sprite-loader']
      }
    ]
  },
  plugins: [
  ]
}
