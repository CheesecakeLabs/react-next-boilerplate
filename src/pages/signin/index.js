import React, { Component } from 'react'

import Button from '../../components/atoms/button'
import InputWithLabel from '../../components/molecules/input-with-label'
import PasswordField from '../../components/molecules/password-field'
import classes from '../signin/styles.css'
import FacebookLoginButton from '../../components/organisms/facebook-login-button'

class signIn extends Component {
  state = {
    username: null,
  }

  onFacebookLogin = (loginStatus, resultObject) => {
    if (loginStatus === true) {
      this.setState({
        username: resultObject.user.name,
      })
    } else {
      alert('Facebook login error')
    }
  }

  onFacebookLogout = () => {
    window.FB.logout = response => {
      this.setState({
        username: null,
      })
    }
  }

  render() {
    const { username } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Social Media Login</h1>
        </header>

        <div className="App-intro">
          {!username && (
            <div>
              <form>
                <div className={classes.Login}>
                  <InputWithLabel label="Email" type="email" />
                  <PasswordField label="Senha" type="password" />
                  <Button label="Login" />
                </div>
              </form>

              <p>Click on one of any button below to login</p>
              <FacebookLoginButton onLogin={this.onFacebookLogin}>
                <button>Facebook</button>
              </FacebookLoginButton>
            </div>
          )}
          {username && (
            <div>
              <button onClick={this.onFacebookLogout}>facebook logout</button>
              <p>Welcome back, {username}</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default signIn
