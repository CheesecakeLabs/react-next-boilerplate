import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class DefaultDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://unpkg.com/react-image-crop@4.0.1/dist/ReactCrop.css"
          />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
