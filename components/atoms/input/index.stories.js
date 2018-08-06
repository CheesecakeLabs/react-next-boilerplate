import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text } from '@storybook/addon-knobs/react'

import Input from './index'

const today = () => {
  const dt = new Date()
  const month = dt.getMonth() + 1 > 9 ? dt.getMonth() + 1 : `0${dt.getMonth() + 1}`
  const date = dt.getDate() > 9 ? dt.getDate() : `0${dt.getDate()}`
  return `${dt.getFullYear()}-${month}-${date}`
}

storiesOf('Atoms/Input', module)
  .addDecorator(withKnobs)
  .add(
    'initial',
    withInfo({ text: 'Initial component' })(() => <Input value={text('value', 'initial value')} />)
  )
  .add(
    'multiline input',
    withInfo({ text: 'Props: **multiline**' })(() => (
      <Input value={text('value', 'initial\nvalue')} multiline />
    ))
  )
  .add(
    'html5 type',
    withInfo({ text: 'Props: **type="date"**' })(() => (
      <Input value={text('value', today())} type="date" />
    ))
  )
  .add(
    'disabled',
    withInfo({ text: 'Initial component' })(() => (
      <Input value={text('value', 'initial value')} disabled />
    ))
  )
