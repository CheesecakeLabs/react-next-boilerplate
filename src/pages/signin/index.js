import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import { connect } from 'react-fetches'

import ButtonSignin from '../../components/atoms/button-signin'
import InputWithLabel from '../../components/molecules/input-with-label'
import PasswordField from '../../components/molecules/password-field'
import styles from '../signin/styles.css'
import FacebookLoginButton from '../../components/organisms/facebook-login-button'

const mapDispatchToProps = (http, dispatch) => ({
  signInUser: dispatch(http.post('login')),
})

class signIn extends Component {
  state = {
    loggedUser: {},
    username: null,
    password: '',
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
        username: response.getBasicProfile().getName(),
      })
    } else {
      this.responseFailureGoogle(response)
    }
  }

  responseFailureGoogle = response => {
    alert(`Google login error ${response}`)
  }

  signInUser = event => {
    event.preventDefault()
    console.log('USER: ', this.state.username)
    console.log('password: ', this.state.password)
    this.props
      .signInUser({
        username: this.state.username,
        password: this.state.password,
      })
      .then(({ data }) => {
        console.log('password: ', data)
        this.setState(prevState => ({
          loggedUser: data,
        }))
      })
  }

  inputChangedHandler = (event, inputIdentifier) => {
    this.setState({ [inputIdentifier]: event.target.value })
  }

  render() {
    const {
      username,
      loggedUser: { token },
    } = this.state
    return (
      <div className={styles.siginWrapper}>
        <h1 className="signin-title">CKL Labs</h1>

        <div className="signin-content__fields">
          {!token && (
            <div>
              <form onSubmit={this.signInUser}>
                <div className={styles.siginEmailField}>
                  <InputWithLabel
                    label="Username"
                    type="text"
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
