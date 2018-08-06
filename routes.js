const routes = require('next-routes')()

routes.add({ name: 'index', pattern: '/', page: '/' })
routes.add({ name: 'token', pattern: '/token', page: '/token' })
routes.add({ name: 'signin', pattern: '/signin', page: '/signin' })
routes.add({ name: 'signup', pattern: '/signup', page: '/signup' })
routes.add({
  name: 'privatesection',
  pattern: '/privatesection',
  page: '/privatesection',
})

module.exports = routes
