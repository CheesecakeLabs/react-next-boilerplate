import React from 'react'

import Input from '../../atoms/input'
import Button from '../../atoms/button'
import Label from '../../atoms/label'

import classes from './styles.css'

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
