import App, { Container } from 'next/app'
import React from 'react'

class ProjectApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default ProjectApp
