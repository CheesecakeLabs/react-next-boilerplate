import { configure } from '@storybook/react'
import '_styles/global.css'
import '_styles/variables.css'

const req = require.context('../src/components', true, /stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
