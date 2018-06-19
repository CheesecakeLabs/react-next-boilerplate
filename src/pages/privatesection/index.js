import React, { Component } from 'react'
import { privateRouter } from '../../hoc/with-auth'
import Cookie from 'js-cookie'

class PrivateSection extends Component {
  render() {
    return (
      <div>
        <p>PrivateSection view - You are already logged in </p>
      </div>
    )
  }
}

export default privateRouter(PrivateSection, Cookie.get('token'))
