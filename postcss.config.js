const postcssPresetEnv = require('postcss-preset-env')
const postcssImport = require('postcss-import')
const postcssNested = require('postcss-nested')
const postcssGlobalImport = require('postcss-global-import')

module.exports = {
  plugins: [
    postcssPresetEnv({ stage: 0 }),
    postcssImport(),
    postcssNested(),
    postcssGlobalImport(),
  ],
}
