const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const withSourceMaps = require('@zeit/next-source-maps')
const optimizedImages = require('next-optimized-images')
const withOffline = require('next-offline')

const webpackExtra = require('./webpack.extra')
const getRoutes = require('./routes')

const nextConfiguration = {
  webpack: config => Object.assign({}, config, webpackExtra),
  exportPathMap: getRoutes,
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
