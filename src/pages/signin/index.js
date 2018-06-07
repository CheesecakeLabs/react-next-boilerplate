import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'

import Button from '../../components/atoms/button'
import InputWithLabel from '../../components/molecules/input-with-label'
import PasswordField from '../../components/molecules/password-field'
import styles from '../signin/styles.css'
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

  responseGoogle = response => {
    console.log(response)
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
                <div className={styles.login}>
                  <InputWithLabel label="Email" type="email" />
                  <PasswordField label="Senha" type="password" />
                  <Button label="Login" />
                </div>
              </form>

              <p>Click on one of any button below to login</p>
              <FacebookLoginButton onLogin={this.onFacebookLogin}>
                <button>Facebook</button>
              </FacebookLoginButton>
              <GoogleLogin
                clientId="339667288442-a608ubodajou9kdmp0foct11molm1s1r.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
              />
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
