import React from 'react'

import Button from '../../components/atoms/button'
import InputWithLabel from '../../components/molecules/input-with-label'
import PasswordField from '../../components/molecules/password-field'
import classes from '../signin/styles.css'

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
