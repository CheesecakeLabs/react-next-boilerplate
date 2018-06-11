import React, { Component } from 'react'
import { connect } from 'react-fetches'

import InputWithLabel from '../../components/molecules/input-with-label'
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
      userName: '',
      email: '',
      password: '',
    }
  }

  signUpUser = event => {
    event.preventDefault()
    this.props
      .signUpUser({
        username: this.state.userName,
        email: this.state.email,
        password: this.state.password,
      })
      .catch(error => {
        console.log(error)
      })
      .then(({ data }) => {
        this.setState(prevState => ({
          newUser: data,
        }))
      })
  }

  inputChangedHandler = (event, inputIdentifier) => {
    this.setState({ [inputIdentifier]: event.target.value })
  }

  render() {
    const {
      newUser: { token },
    } = this.state

    const { newUser } = this.state

    return (
      <div>
        {!newUser || !token ? (
          <form onSubmit={this.signUpUser} className={styles.form}>
            <p>Sign up form</p>
            <InputWithLabel
              label="Email"
              type="email"
              value={this.state.email}
              changed={event => this.inputChangedHandler(event, 'email')}
            />
            <InputWithLabel
              label="Name"
              type="text"
              value={this.state.userName}
              changed={event => this.inputChangedHandler(event, 'userName')}
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
            <p>Welcome, {this.state.userName}</p>
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
