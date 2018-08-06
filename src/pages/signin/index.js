import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import { connect } from 'react-fetches'
import Cookie from 'js-cookie'
import Router from 'next/router'

import ButtonSignin from '../../components/atoms/button-signin'
import TextFieldGroup from '../../components/molecules/text-field-group'
import PasswordField from '../../components/molecules/password-field'
import styles from '../signin/styles.css'
import FacebookLogin from '../../components/organisms/facebook-login'
import { protectedRouter } from '../../hoc/with-auth'

const mapDispatchToProps = (http, dispatch) => ({
  submitHandler: dispatch(http.post('login')),
  submitFacebookHandler: dispatch(http.post('social/facebook')),
  submitGoogleHandler: dispatch(http.post('social/google')),
})

class SignIn extends Component {
  state = {
    loggedUser: {},
    username: '',
    password: '',
    token: '',
    loginError: '',
    authenticated: Cookie.get(process.env.REACT_APP_TOKEN_TEXT) ? true : false,
  }

  onFacebookLogin = (loginStatus, resultObject) => {
    if (loginStatus === true) {
      this.submitFacebookHandler(resultObject.authResponse.accessToken)
    } else {
      alert('Facebook login error')
    }
  }

  storeToken = token => {
    Cookie.set(process.env.REACT_APP_TOKEN_TEXT, token)
  }

  responseSuccessGoogle = response => {
    if (response.accessToken) {
      this.submitGoogleHandler(response.accessToken)
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
          this.storeToken(data.token)
          this.setState(() => ({
            loggedUser: data,
            token: data.token,
            loginError: error,
            authenticated: data.token ? true : false,
          }))
          Router.push('/')
        } else {
          this.setState(() => ({
            loginError: error.non_field_errors,
          }))
        }
      })
  }

  submitFacebookHandler = token => {
    this.props
      .submitFacebookHandler({
        access_token: token,
      })
      .then(({ data, error }) => {
        if (data.token) {
          this.storeToken(data.token)
          this.setState({
            username: data.user.username,
            token: data.token,
            authenticated: true,
          })
          Router.push('/')
        }
      })
  }

  submitGoogleHandler = token => {
    this.props
      .submitGoogleHandler({
        access_token: token,
      })
      .then(({ data, error }) => {
        if (data.token) {
          this.storeToken(data.token)
          this.setState({
            username: data.user.username,
            token: data.token,
            authenticated: true,
          })
          Router.push('/')
        }
      })
  }

  inputChangedHandler = (event, inputIdentifier) => {
    this.setState({ [inputIdentifier]: event.target.value })
  }

  render() {
    const { username, password, loginError } = this.state
    return (
      <div className={styles.siginWrapper}>
        <h1>Sign in form</h1>
        <div className="signin-content__fields">
          {!this.state.authenticated && (
            <div>
              <form onSubmit={this.submitHandler}>
                <div className={styles.siginEmailField}>
                  {loginError && <p>Error: {loginError}</p>}
                  <TextFieldGroup
                    label="Username"
                    type="text"
                    name="username"
                    value={username}
                    changed={event => this.inputChangedHandler(event, 'username')}
                  />
                  <PasswordField
                    label="Senha"
                    type="password"
                    value={password}
                    changed={event => this.inputChangedHandler(event, 'password')}
                  />
                  <ButtonSignin label="Login" />
                </div>
              </form>
              {process.env.REACT_APP_HAS_SOCIAL_LOGIN === 'true' && (
                <div className={styles.socialButtons}>
                  <FacebookLogin onLogin={this.onFacebookLogin}>
                    <button className={styles.facebookButton}>Facebook</button>
                  </FacebookLogin>
                  <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_ID}
                    buttonText="Login"
                    onSuccess={this.responseSuccessGoogle}
                    onFailure={this.responseFailureGoogle}
                  />
                </div>
              )}
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
)(protectedRouter(SignIn, Cookie.get(process.env.REACT_APP_TOKEN_TEXT)))
