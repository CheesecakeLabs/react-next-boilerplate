const path = require('path')

module.exports = {
  resolve: {
    modules: [path.join(process.cwd()), path.join(process.cwd(), 'node_modules')],
    extensions: ['.js', '.css'],
    alias: {
      _storybook: path.resolve(process.cwd(), 'storybook'),
      _atoms: path.resolve(process.cwd(), 'src', 'components', 'atoms'),
      _molecules: path.resolve(process.cwd(), 'src', 'components', 'molecules'),
      _organisms: path.resolve(process.cwd(), 'src', 'components', 'organisms'),
      _images: path.resolve(process.cwd(), 'src', 'images'),
      _utils: path.resolve(process.cwd(), 'src', 'utils'),
      _pages: path.resolve(process.cwd(), 'src', 'pages'),
      _components: path.resolve(process.cwd(), 'components'),
    },
  },
}
