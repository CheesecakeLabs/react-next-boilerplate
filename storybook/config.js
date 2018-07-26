import { configure } from '@storybook/react'
import { setDefaults } from '@storybook/addon-info'

const stories = require.context('../src', true, /stories\.js$/)
const storiesComponents = require.context('../components', true, /stories\.js$/)

setDefaults({
  header: false,
  inline: true,
  source: true,
})

function loadStories() {
  stories.keys().forEach(stories)
  storiesComponents.keys().forEach(storiesComponents)
}

configure(loadStories, module)
