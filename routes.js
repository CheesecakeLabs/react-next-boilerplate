const routes = require('next-routes')()

routes.add({ name: 'index', pattern: '/', page: '/' })
routes.add({ name: 'signin', pattern: '/signin', page: '/signin' })
routes.add({ name: 'signup', pattern: '/signup', page: '/signup' })

module.exports = routes
