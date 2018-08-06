import Router from 'next/router'
import Cookie from 'js-cookie'

export const signOut = () => {
  if (!process.browser) {
    return
  }
  Cookie.remove('token')
  Router.push('/')
}
