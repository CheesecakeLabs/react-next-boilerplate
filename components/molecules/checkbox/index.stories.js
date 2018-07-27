import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react'

import Checkbox from './index'

storiesOf('Molecules/Checkbox', module)
  .addDecorator(withKnobs)
  .add(
    'initial',
    withInfo({ text: 'Initial component' })(() => (
      <Checkbox name="checkbox" id="checkbox" value="1" isChecked={false} handleChange={() => {}} />
    ))
  )
  .add(
    'checked',
    withInfo({ text: 'Checked: **isChecked{true}**' })(() => (
      <Checkbox name="checkbox" id="checkbox" value="1" isChecked handleChange={() => {}} />
    ))
  )
  .add(
    'checked and disabled',
    withInfo({ text: 'Disabled: **isChecked{true} disabled**' })(() => (
      <Checkbox
        name="checkbox"
        id="checkbox"
        value="1"
        isChecked
        disabled
        handleChange={() => {}}
      />
    ))
  )
