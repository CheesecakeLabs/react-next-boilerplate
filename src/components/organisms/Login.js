import React from 'react'

import Input from '../atoms/Input'
import Button from '../atoms/Button'
import Label from '../atoms/Label'

const login = () => (
  <div>
    <form>
      <Label label="Email" />
      <Input type="email" />
      <Label label="Senha" />
      <Input type="password" />
      <Button label="Login" />
    </form>
  </div>
)

export default login
