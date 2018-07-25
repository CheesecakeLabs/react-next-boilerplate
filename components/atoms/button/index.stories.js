import React from 'react'
import { storiesOf } from '@storybook/react'

import loginIcon from '_storybook/assets/images/login-icon.svg'

import Button from './index'

storiesOf('Button', module).add('with text', () => (
  <Button onClick={() => console.info('test')}>Login</Button>
))

storiesOf('Button', module).add('with icon', () => (
  <Button iconURL={loginIcon} onClick={() => console.info('test')}>
    Login
  </Button>
))

storiesOf('Button', module).add('is disabled', () => <Button isDisabled>Login</Button>)
