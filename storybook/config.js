import { configure } from '@storybook/react'
import { setDefaults } from '@storybook/addon-info'

const stories = require.context('../src/', true, /stories\.js$/)

setDefaults({
  header: false,
  inline: true,
  source: true,
})

function loadStories() {
  stories.keys().forEach(stories)
}

configure(loadStories, module)
