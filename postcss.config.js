const autoprefixer = require('autoprefixer')
const postCSSImport = require('postcss-import')()
const postCSSNested = require('postcss-nested')
const postCssCssVariables = require('postcss-css-variables')()
const postCSSCustomMedia = require('postcss-custom-media')({
  extensions: {
    '--sm-viewport': '(min-width:320px) and (max-width:640px)',
    '--md-viewport': '(min-width:640px) and (max-width:960px)',
    '--lg-viewport': '(min-width:960px)',
    '--retina-display': '(-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi)',
  },
})
const postCSSInlineSVG = require('postcss-inline-svg')()
const colorFunction = require('postcss-color-function')

const postCSSAutoprefixer = autoprefixer({ browsers: ['IE 9', 'iOS 7'] })

module.exports = {
  plugins: [
    postCSSImport,
    postCSSAutoprefixer,
    postCSSNested,
    postCssCssVariables,
    postCSSCustomMedia,
    postCSSInlineSVG,
    colorFunction,
  ],
}
