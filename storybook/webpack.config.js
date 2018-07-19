const path = require('path')

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
  config.resolve.alias = {
    ...config.resolve.alias,
    _atoms: path.resolve(__dirname, '..', 'src', 'components', 'atoms'),
    _molecules: path.resolve(__dirname, '..', 'src', 'components', 'molecules'),
    _organisms: path.resolve(__dirname, '..', 'src', 'components', 'organisms'),
    _images: path.resolve(__dirname, '..', 'src', 'images'),
    _pages: path.resolve(__dirname, '..', 'src', 'pages'),
    _utils: path.resolve(__dirname, '..', 'src', 'utils'),
  }
  config.module.rules = config.module.rules.map(rule => (rule.test.test('.css') ? cssRule : rule))
  return config
}
