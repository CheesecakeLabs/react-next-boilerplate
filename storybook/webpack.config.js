const path = require('path')

const extra = require('../webpack.extra.js')

module.exports = (baseConfig, env, defaultConfig) => {
  const cssRule = {
    test: /\.css$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: path.resolve(__dirname, '..'),
          },
        },
      },
    ],
  }
  const config = defaultConfig
  config.resolve = extra.resolve
  config.module.rules = config.module.rules.map(rule => (rule.test.test('.css') ? cssRule : rule))
  return config
}
