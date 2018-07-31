import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'

import close from '_components/assets/icons/close.svg'
import IconButton from '_components/atoms/icon-button'

storiesOf('Atoms/Icon', module)
  .addDecorator(withKnobs)
  .add(
    'icon button',
    withInfo({ text: '' })(() => (
      <IconButton
        iconURL={close}
        iconText="This is a icon button"
        onClick={() => console.info('This is the click of icon button')}
      />
    ))
  )
