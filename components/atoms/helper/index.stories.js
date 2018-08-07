import React from 'react'
import { storiesOf } from '@storybook/react'

import Helper from '_components/atoms/helper'

storiesOf('Atoms/Helper', module)
  .add('Error type', () => <Helper type="error">This is an error message</Helper>)
  .add('Warning type', () => <Helper type="warning">This is an error message</Helper>)
  .add('Info type', () => <Helper type="info">This is an error message</Helper>)
