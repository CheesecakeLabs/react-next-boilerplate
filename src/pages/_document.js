import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class DefaultDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    const FB_SCRIPT = `
      window.fbAsyncInit = function() {
        FB.init({
          appId      : ${process.env.REACT_APP_FB_APP_ID},
          xfbml      : true,
          version    : 'v3.0'
        });
        FB.AppEvents.logPageView();
      };
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v3.0&appId=${
          process.env.REACT_APP_FB_APP_ID
        }&autoLogAppEvents=1';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
      `
    const loadFBAuth = () => {
      if (process.env.REACT_APP_HAS_SOCIAL_LOGIN === 'True') {
        return {
          __html: FB_SCRIPT,
        }
      }
      return null
    }

    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,400,700"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <script dangerouslySetInnerHTML={loadFBAuth()} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
