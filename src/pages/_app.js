import App, { Container } from 'next/app'
import React from 'react'
import { createClient } from 'fetches'
import { Provider } from 'react-fetches'

const client = createClient(process.env.IMAGE_UPLOAD_ENDPOINT, {
  uri: { removeTrailingSlash: true },
})

class ProjectApp extends App {
  render() {
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
