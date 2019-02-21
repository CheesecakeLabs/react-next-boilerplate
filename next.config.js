const webpack = require('webpack')
const withPlugins = require('next-compose-plugins')
const css = require('@zeit/next-css')
const sourceMaps = require('@zeit/next-source-maps')
const optimizedImages = require('next-optimized-images')
const fonts = require('next-fonts')
const offline = require('next-offline')

const webpackExtra = require('./webpack.extra')

require('dotenv').config()

const nextConfiguration = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  webpack: config => {
    const plugins = [...config.plugins, new webpack.EnvironmentPlugin(process.env)]
    const resolve = { alias: { ...(config.resolve.alias || {}), ...webpackExtra.resolve.alias } }
    return { ...config, ...webpackExtra, plugins, resolve }
  },
}

module.exports = withPlugins([css, optimizedImages, fonts, sourceMaps, offline], nextConfiguration)
