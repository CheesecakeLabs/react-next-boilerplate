import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from './index'

storiesOf('Button', module).add('Button', () => (
  <Button text="Login" onclick={() => console.info('test')} />
))
