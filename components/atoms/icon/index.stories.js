import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'

import close from '_components/assets/icons/close.svg'
import Icon from '_components/atoms/icon'

storiesOf('Atoms/Icon', module)
  .addDecorator(withKnobs)
  .add('simple icon', withInfo({ text: '' })(() => <Icon src={close} alt="close icon" />))
