const { join } = require('path')
const { parse } = require('url')

const express = require('express')
const next = require('next')

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
  server.use(handler)

  server.listen(PORT, err => {
    if (err) throw err
    console.info(`> Ready on http://localhost:${PORT}`)
  })
})
