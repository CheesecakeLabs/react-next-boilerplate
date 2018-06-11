import App, { Container } from 'next/app'
import React from 'react'

import { createClient } from 'fetches'
import { Provider } from 'react-fetches'

class ProjectApp extends App {
  render() {
    const client = createClient('http://localhost:8000/api/v1/', {
      uri: {
        removeTrailingSlash: true,
      },
    })
    const { Component, pageProps } = this.props

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
