const path = require('path')

module.exports = {
  resolve: {
    alias: {
      _atoms: path.resolve(__dirname, 'src/components/atoms'),
      _molecules: path.resolve(__dirname, 'src/components/molecules'),
      _organisms: path.resolve(__dirname, 'src/components/organisms'),
      _templates: path.resolve(__dirname, 'src/templates'),
      _middlewares: path.resolve(__dirname, 'src/middlewares'),
      _config: path.resolve(__dirname, 'src/config'),
      _hocs: path.resolve(__dirname, 'src/hocs'),
      _images: path.resolve(__dirname, 'src/images'),
      _pages: path.resolve(__dirname, 'src/pages'),
      _styles: path.resolve(__dirname, 'src/styles'),
      _utils: path.resolve(__dirname, 'src/utils'),
      _storybook: path.resolve(__dirname, '.storybook/components'),
    },
  },
}
