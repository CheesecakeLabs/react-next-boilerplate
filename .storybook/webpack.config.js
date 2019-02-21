const path = require('path')

const webpackConfig = require('../webpack.extra')

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(process.cwd()),
              },
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|png|jpg|gif)/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: webpackConfig.resolve,
}
