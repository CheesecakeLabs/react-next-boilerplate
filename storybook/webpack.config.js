const path = require('path')

module.exports = (baseConfig, env, defaultConfig) => {
  const config = defaultConfig
  config.resolve.alias = {
    ...config.resolve.alias,
    _atoms: path.resolve(__dirname, '..', 'src', 'components', 'atoms'),
    _molecules: path.resolve(__dirname, '..', 'src', 'components', 'molecules'),
    _organisms: path.resolve(__dirname, '..', 'src', 'components', 'organisms'),
    _images: path.resolve(__dirname, '..', 'src', 'images'),
    _pages: path.resolve(__dirname, '..', 'src', 'pages'),
  }
  return config
}
