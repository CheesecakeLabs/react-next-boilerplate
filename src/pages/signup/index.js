import React, { Component } from 'react'
import { connect } from 'react-fetches'

import InputWithLabel from '../../components/molecules/input-with-label'
import PasswordField from '../../components/molecules/password-field'
import Button from '../../components/atoms/button'

const mapDispatchToProps = (http, dispatch) => ({
  signUpUser: dispatch(http.post('register')),
})

class signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newUser: {},
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
      .then(({ data }) => {
        if (this.props.token) {
          this.setState(prevState => ({
            newUser: data,
          }))
        }
      })
  }

  inputChangedHandler = (event, inputIdentifier) => {
    this.setState({ [inputIdentifier]: event.target.value })
  }

  render() {
    if (this.props.loading) {
      return 'Loading...'
    }

    return (
      <div>
        <div>
          <form onSubmit={this.signUpUser}>
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
            <Button click={this.signUpUser} label="Send" link="" />
          </form>
        </div>
      </div>
    )
  }
}

export default connect(
  null,
  mapDispatchToProps
)(signup)
