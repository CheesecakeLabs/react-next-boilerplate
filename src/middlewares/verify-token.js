import Cookies from 'js-cookie'
import Router from 'next/router'

export default response => {
  if (response.status === 401) {
    Cookies.set('token', '')
    Router.push('/signin')
  }
  return response
}
