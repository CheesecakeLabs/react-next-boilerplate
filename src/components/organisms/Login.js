import React from 'react'

import Input from '../atoms/Input'
import Button from '../atoms/Button'
import Label from '../atoms/Label'

import classes from './Login.css'

const login = () => (
  <form>
    <div className={classes.Login}>
      <Label label="Email" />
      <Input type="email" />
      <Label label="Senha" />
      <Input type="password" />
      <Button label="Login" />
    </div>
  </form>
)

export default login
