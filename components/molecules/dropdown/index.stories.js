import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'

import Button from '_components/atoms/button'

import Dropdown from './index'

storiesOf('Molecules/Dropdown', module)
  .addDecorator(withKnobs)
  .add(
    'Initial component',
    withInfo()(() => (
      <Dropdown label="initial dropdown">
        <Button>#1 item</Button>
        <Button>#2 item</Button>
        <Button>#3 item</Button>
        <Button>#4 item</Button>
      </Dropdown>
    ))
  )
