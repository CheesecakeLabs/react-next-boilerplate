import React from 'react'

import Button from '../../atoms/button'
import InputWithLabel from '../../molecules/input-with-label'
import PasswordField from '../../molecules/password-field'

import classes from './styles.css'

const signIn = () => (
  <form>
    <div className={classes.Login}>
      <InputWithLabel label="Email" type="email" />
      <PasswordField label="Senha" type="password" />
      <Button label="Login" />
    </div>
  </form>
)

export default signIn
