import React, { Component } from 'react'
import { connect } from 'react-fetches'

import TextFieldGroup from '../../components/molecules/text-field-group'

import Input from '../../components/atoms/input'
import Label from '../../components/atoms/label'

import PasswordField from '../../components/molecules/password-field'
import Button from '../../components/atoms/button'

import styles from './styles.css'

const mapDispatchToProps = (http, dispatch) => ({
  signUpUser: dispatch(http.post('register')),
})

class signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newUser: {
        token: '',
      },
      username: '',
      email: '',
      password: '',
      signupError: {},
    }
  }

  signUpUser = event => {
    event.preventDefault()
    this.props
      .signUpUser({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      })
      .then(({ data, error }) => {
        console.log('DATA: ', data)
        this.setState(prevState => ({
          newUser: data,
          signupError: error,
        }))
      })
  }

  inputChangedHandler = (event, inputIdentifier) => {
    this.setState({ [inputIdentifier]: event.target.value })
  }

  render() {
    const { newUser } = this.state
    return (
      <div>
        {this.state.newUser ? (
          <form onSubmit={this.signUpUser} className={styles.form}>
            <h1>Sign up form</h1>

            <TextFieldGroup
              label="Email"
              type="email"
              value={this.state.email}
              changed={event => this.inputChangedHandler(event, 'email')}
            />

            <TextFieldGroup
              label="Name"
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
            <Button label="Send" />
          </form>
        ) : (
          <div>
            <p>Welcome, {this.state.username}</p>
          </div>
        )}
      </div>
    )
  }
}

export default connect(
  null,
  mapDispatchToProps
)(signup)
