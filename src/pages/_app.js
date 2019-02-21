import React from 'react'
import App, { Container } from 'next/app'
import Cookie from 'js-cookie'
import { createClient } from 'fetches'
import { Provider } from 'react-fetches'

import verifyTokenMiddleware from '_middlewares/verify-token'

const client = createClient(process.env.API_URL || 'http://api.example.com', {
  after: [verifyTokenMiddleware],
  request: {
    headers: {
      Authorization: Cookie.get('token') ? `Token ${Cookie.get('token')}` : '',
    },
  },
  uri: {
    removeTrailingSlash: false,
  },
})

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Provider client={client}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default MyApp
