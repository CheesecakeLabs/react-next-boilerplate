import React, { Component } from 'react'

export default class FacebookLogin extends Component {
  componentDidMount() {
    document.addEventListener('FBObjectReady', this.initializeFacebookLogin)
  }

  componentWillUnmount() {
    document.removeEventListener('FBObjectReady', this.initializeFacebookLogin)
  }

  /**
   * Init FB object and check Facebook Login status
   */
  initializeFacebookLogin = () => {
    this.checkLoginStatus()
  }

  /**
   * Check login status
   */
  checkLoginStatus = () => {
    window.FB.getLoginStatus(this.facebookLoginHandler)
  }

  /**
   * Check login status and call login api is user is not logged in
   */
  facebookLogin = () => {
    window.FB.getLoginStatus(response => {
      if (response.status === 'connected') {
        this.facebookLoginHandler(response)
      } else {
        window.FB.login(this.facebookLoginHandler, { scope: 'public_profile' })
      }
    })
  }

  /**
   * Handle login response
   */
  facebookLoginHandler = response => {
    if (response.status === 'connected') {
      window.FB.api('/me', userData => {
        const result = {
          ...response,
          user: userData,
        }
        this.props.onLogin(true, result)
      })
    } else {
      this.props.onLogin(false)
    }
  }

  render() {
    const { children } = this.props
    return <div onClick={this.facebookLogin}>{children}</div>
  }
}
