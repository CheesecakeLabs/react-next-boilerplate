import React, { Component } from 'react'
import Cookie from 'js-cookie'
import Router from 'next/router'

export const privateView = (AuthenticatedComponent, token) => {
  return class RequireAuth extends AuthenticatedComponent {
    render() {
      if (!token) {
        return super.render()
      } else {
        Router.push('/')
        return null
      }
    }
  }
}
