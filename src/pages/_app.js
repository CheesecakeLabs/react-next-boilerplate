import App, { Container } from 'next/app'
import React from 'react'

import Cookie from 'js-cookie'

// Temporary fix to fetch dependency on 'fetches' lib
if (typeof window === 'undefined') {
  const fetch = require('isomorphic-fetch')
}

import { createClient, getHTTPMethods } from 'fetches'
import { Provider } from 'react-fetches'

class ProjectApp extends App {
  static getInitialProps(context) {
    const { ctx } = context
    const getTokenFromLocalCookie = () => Cookie.get('token')
    const getTokenFromServerCookie = req => {
      if (!req.headers.cookie) {
        return undefined
      }
      const sessionToken = req.headers.cookie.split(';').find(c => c.trim().startsWith('token='))
      if (!sessionToken) {
        return undefined
      }
      return sessionToken.split('=')[1]
    }
    const token = process.browser ? getTokenFromLocalCookie() : getTokenFromServerCookie(ctx.req)

    return {
      token,
    }
  }

  render() {
    const { Component, pageProps, token } = this.props
    const client = createClient(process.env.REACT_APP_SERVER_URL, {
      request: {
        headers: {
          Authorization: token ? `Token: ${token}` : undefined,
        },
      },
      uri: {
        removeTrailingSlash: true,
      },
    })

    return (
      <Provider client={client}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Provider>
    )
  }
}

export default ProjectApp
