import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'

import Tooltip from '_components/atoms/tooltip'

storiesOf('Atoms/Tooltip', module)
  .addDecorator(withKnobs)
  .add('with text', withInfo({ text: '' })(() => <Tooltip isOpen>tweet do neymar</Tooltip>))
