const path = require('path')

const extra = require('../webpack.extra.js')

module.exports = (baseConfig, env, defaultConfig) => {
  const cssRule = {
    test: /\.css$/,
    exclude: /node_modules/,
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
            path: path.resolve(process.cwd()),
          },
        },
      },
    ],
  }
  const cssRuleModules = {
    test: /\.css$/,
    include: /node_modules/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          modules: false,
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
  }

  const rules = defaultConfig.module.rules.map(rule => (rule.test.test('.css') ? cssRule : rule))
  rules.push(cssRuleModules)

  const config = {
    ...defaultConfig,
    resolve: {
      ...defaultConfig.resolve,
      alias: extra.resolve.alias,
    },
    module: {
      ...defaultConfig.module,
      rules,
    },
  }

  return config
}
