import React from 'react'
import { storiesOf } from '@storybook/react'

import loginIcon from '_storybook/assets/images/login-icon.svg'
import Button from '_components/atoms/button'
import Icon from '_components/atoms/icon'
import styles from '_storybook/styles.css'

storiesOf('Atoms/Button', module)
  .add('with text', () => <Button onClick={() => console.info('test')}>Login</Button>)
  .add('with icon', () => (
    <Button
      iconURL={loginIcon}
      onClick={() => console.info('test')}
      className={styles.buttonIconStyle}
    >
      <Icon src={loginIcon} alt="login" className={styles.iconStyle} />
      Login
    </Button>
  ))
  .add('disabled', () => <Button disabled>Login</Button>)
  .add('customized', () => <Button className={styles.customButton}>Custom</Button>)
