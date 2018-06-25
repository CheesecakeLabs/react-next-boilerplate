const { join } = require('path')
const { parse } = require('url')

const express = require('express')
const next = require('next')
const cookieParser = require('cookie-parser')

const proxy = require('./server-proxy')
const routes = require('./routes')

const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 5000

const app = next({ dir: './src/', dev })

const handler = routes.getRequestHandler(app, ({ req, res, route, query }) => {
  const parsedUrl = parse(req.url, true)
  const { pathname } = parsedUrl
  if (pathname === '/service-worker.js') {
    const filePath = join(__dirname, '.next', pathname)

    return app.serveStatic(req, res, filePath)
  }

  return app.render(req, res, route.page, query)
})

app.prepare().then(() => {
  const server = express()

  // Authorization Cookie handle
  server.use(cookieParser())

  // Server Proxy
  server.use(proxy())

  server.get('/token', (req, res) => {
    if ('cookie' in req.headers) {
      const cookieParts = req.headers.cookie.split('; ')
      const authorization = cookieParts
        .map(cookie => {
          const cookieParts = cookie.split('=')
          if (cookieParts.length && cookieParts[0] === 'csrftoken') {
            return cookieParts[1]
          }
          return false
        })
        .filter(cookie => cookie !== false)
      if (authorization.length) {
        res.send(authorization[0])
        return
      }
    }
    res.status(204).send()
  })

  server.use(handler)
  server.listen(PORT, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
