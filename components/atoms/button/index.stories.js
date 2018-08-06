import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'

import loginIcon from '_storybook/assets/images/login-icon.svg'
import Button from '_components/atoms/button'
import styles from '_storybook/styles.css'

storiesOf('Atoms/Button', module)
  .addDecorator(withKnobs)
  .add(
    'with text',
    withInfo({ text: '' })(() => <Button onClick={() => console.info('test')}>Login</Button>)
  )
  .add(
    'with icon',
    withInfo({
      text: `You can create your style and apply this as a **className** prop of each component to custom them.
        If you'll copy the code below you **should** remove the id into the **className** props apply your own style. It's very simple to create your style, you can do that creating a style file and import this into your component and that's it :)`,
    })(() => (
      <Button onClick={() => console.info('test')} className={styles.buttonIconStyle}>
        <Button.Icon src={loginIcon} alt="login" className={styles.iconStyle} />
        Login
      </Button>
    ))
  )

  .add('disabled', withInfo({ text: '' })(() => <Button disabled>Login</Button>))
  .add(
    'customized',
    withInfo({ text: 'You can create your own style and apply this on button component' })(() => (
      <Button className={styles.customButton}>Custom</Button>
    ))
  )
