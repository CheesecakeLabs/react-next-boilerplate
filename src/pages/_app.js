import App, { Container } from 'next/app'
import React from 'react'
import { createClient } from 'fetches'
import { Provider } from 'react-fetches'
import Cookie from 'js-cookie'

class ProjectApp extends App {
  static getInitialProps(context) {
    const { ctx } = context
    const getTokenFromLocalCookie = () => Cookie.get(process.env.REACT_APP_TOKEN_TEXT)
    const getTokenFromServerCookie = req => {
      if (!req.headers.cookie) {
        return undefined
      }
      const sessionToken = req.headers.cookie
        .split(';')
        .find(c => c.trim().startsWith(`${process.env.REACT_APP_TOKEN_TEXT}=`))
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
