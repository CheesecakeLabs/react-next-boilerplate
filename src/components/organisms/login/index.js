import React from 'react'

import Button from '../../atoms/button'
import InputWithLabel from '../../molecules/input-with-label'

import classes from './styles.css'

const login = () => (
  <form>
    <div className={classes.Login}>
      <InputWithLabel label="Email" type="email" />
      <InputWithLabel label="Senha" type="password" />
      <Button label="Login" />
    </div>
  </form>
)

export default login
