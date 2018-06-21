import React from 'react'
import Cookie from 'js-cookie'

import { privateRouter } from '../../hoc/with-auth'

const PrivateSection = () => (
  <div>
    <p>PrivateSection view - You are already logged in </p>
  </div>
)

export default privateRouter(PrivateSection, Cookie.get('token'))
