import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'

import ButtonSignin from '../../components/atoms/button-signin'
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

  responseSuccessGoogle = response => {
    if (response.profileObj.name) {
      this.setState({
        username: response.profileObj.name,
      })
    } else {
      this.responseFailureGoogle(response)
    }
  }

  responseFailureGoogle = response => {
    alert(`Google login error ${response}`)
  }

  render() {
    const { username } = this.state
    return (
      <div className={styles.siginWrapper}>
        <h1 className="signin-title">CKL Labs</h1>

        <div className="signin-content__fields">
          {!username && (
            <div>
              <form>
                <div className={styles.siginEmailField}>
                  <InputWithLabel label="Email" type="email" />
                  <PasswordField label="Senha" type="password" />
                  <ButtonSignin label="Login" />
                </div>
              </form>
              <div className={styles.socialButtons}>
                <FacebookLoginButton onLogin={this.onFacebookLogin}>
                  <button className={styles.facebookButton}>Facebook</button>
                </FacebookLoginButton>
                <GoogleLogin
                  clientId="339667288442-a608ubodajou9kdmp0foct11molm1s1r.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={this.responseSuccessGoogle}
                  onFailure={this.responseFailureGoogle}
                />
              </div>
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
