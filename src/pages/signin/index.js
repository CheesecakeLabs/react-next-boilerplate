import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import { connect } from 'react-fetches'

import ButtonSignin from '../../components/atoms/button-signin'
import TextFieldGroup from '../../components/molecules/text-field-group'
import PasswordField from '../../components/molecules/password-field'
import styles from '../signin/styles.css'
import FacebookLoginButton from '../../components/organisms/facebook-login-button'

const mapDispatchToProps = (http, dispatch) => ({
  submitHandler: dispatch(http.post('login')),
})

class signIn extends Component {
  state = {
    loggedUser: {},
    username: null,
    password: '',
    token: '',
    loginError: '',
  }

  onFacebookLogin = (loginStatus, resultObject) => {
    if (loginStatus === true) {
      this.setState({
        username: resultObject.user.name,
        token: resultObject.authResponse.accessToken,
      })
    } else {
      alert('Facebook login error')
    }
  }

  responseSuccessGoogle = response => {
    if (response.tokenId) {
      this.setState({
        username: response.getBasicProfile().getName(),
        token: response.tokenId,
      })
    } else {
      this.responseFailureGoogle(response)
    }
  }

  responseFailureGoogle = response => {
    this.setState({
      loginError: response.error,
    })
  }

  submitHandler = event => {
    event.preventDefault()
    this.props
      .submitHandler({
        username: this.state.username,
        password: this.state.password,
      })
      .then(({ data, error }) => {
        if (!error) {
          this.setState(prevState => ({
            loggedUser: data,
            token: data.token,
            loginError: error,
          }))
        } else {
          this.setState(prevState => ({
            loginError: error.non_field_errors,
          }))
        }
      })
  }

  inputChangedHandler = (event, inputIdentifier) => {
    this.setState({ [inputIdentifier]: event.target.value })
  }

  render() {
    const { token, username, loginError } = this.state
    return (
      <div className={styles.siginWrapper}>
        <h1>Sign in form</h1>
        <div className="signin-content__fields">
          {!token && (
            <div>
              <form onSubmit={this.submitHandler}>
                <div className={styles.siginEmailField}>
                  {loginError && <p>Error: {loginError}</p>}
                  <TextFieldGroup
                    label="Username"
                    type="text"
                    name="username"
                    value={this.state.username}
                    changed={event => this.inputChangedHandler(event, 'username')}
                  />
                  <PasswordField
                    label="Senha"
                    type="password"
                    value={this.state.password}
                    changed={event => this.inputChangedHandler(event, 'password')}
                  />
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
          {token && (
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

export default connect(
  null,
  mapDispatchToProps
)(signIn)
