const glob = require('glob')
const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const withSourceMaps = require('@zeit/next-source-maps')
const optimizedImages = require('next-optimized-images')
const withOffline = require('next-offline')

const webpackExtra = require('./webpack.extra')

const nextConfiguration = {
  webpack: (config, options) => {
    const entryFactory = config.entry
    const { isServer } = options
    if (!isServer) {
      const newConfig = {
        ...config,
        entry: () =>
          entryFactory().then(entry => {
            const main = entry['main.js']
            const pages = glob.sync('./src/pages/**/*.js').map(page => page.replace('src/', ''))
            return {
              'main.js': [...main, ...pages],
              'bundles/pages/_app.js': './pages/_app.js',
              'bundles/pages/_document.js': './pages/_document.js',
              'bundles/pages/_error.js': './pages/_error.js',
            }
          }),
      }
      return Object.assign({}, newConfig, webpackExtra)
    }
    return Object.assign({}, config, webpackExtra)
  },
  poweredByHeader: false,
  rootPaths: ['./src'],
}

const sourceMapsConfiguration = [withSourceMaps, {}]

const cssConfiguration = [
  withCSS,
  {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]___[hash:base64:5]',
    },
  },
]

const imagesConfiguration = [optimizedImages, {}]

const offlineConfiguration = withOffline

module.exports = withPlugins(
  [sourceMapsConfiguration, imagesConfiguration, cssConfiguration, offlineConfiguration],
  nextConfiguration
)
