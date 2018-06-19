import React, { Component } from 'react'
import Cookie from 'js-cookie'
import Router from 'next/router'

export const privateRouter = (AuthComponent, token) => {
  return class Authenticated extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoading: true,
      }
    }

    componentDidMount() {
      if (!token) {
        Router.push('/signin')
      }
      this.setState({ isLoading: false })
    }

    render() {
      return (
        <div>
          {this.state.isLoading ? <div>LOADING....</div> : <AuthComponent {...this.props} />}
        </div>
      )
    }
  }
}

export const protectedRouter = (AuthComponent, token) => {
  return class Authenticated extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoading: true,
      }
    }

    componentDidMount() {
      if (token) {
        Router.push('/')
      }
      this.setState({ isLoading: false })
    }

    render() {
      return (
        <div>
          {this.state.isLoading ? <div>LOADING....</div> : <AuthComponent {...this.props} />}
        </div>
      )
    }
  }
}
