import React from 'react'
import { storiesOf } from '@storybook/react'

import loginIcon from '_images/login-icon.svg'

import Button from './index'

storiesOf('Button', module).add('Button', () => (
  <Button iconURL={loginIcon} onClick={() => console.info('test')}>
    Login
  </Button>
))

storiesOf('Button', module).add('Button block', () => (
  <Button iconURL={loginIcon} onClick={() => console.info('test')} isBlock>
    Login
  </Button>
))
