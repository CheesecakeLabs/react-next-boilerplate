const path = require('path')

const webpack = require('webpack')
const glob = require('glob')
const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const withSourceMaps = require('@zeit/next-source-maps')
const optimizedImages = require('next-optimized-images')
const withOffline = require('next-offline')

const webpackExtra = require('./webpack.extra')

require('dotenv').config()

const nextConfiguration = {
  webpack: (nextConfig, options) => {
    const entryFactory = nextConfig.entry
    const { isServer, defaultLoaders } = options
    const config = { ...nextConfig, ...webpackExtra }

    config.plugins = [...config.plugins, new webpack.EnvironmentPlugin(process.env)]
    config.module.rules.push({
      test: /\.+(js|jsx)$/,
      include: [path.resolve(process.cwd(), 'components')],
      use: [defaultLoaders.babel],
    })

    if (!isServer) {
      return {
        ...config,
        entry: () =>
          entryFactory().then(entry => {
            const main = entry['main.js']
            const pages = glob.sync('./src/pages/**/*.js').map(page => page.replace('src/', ''))
            return {
              ...entry,
              'main.js': [...main, ...pages],
            }
          }),
      }
    }
    return config
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
