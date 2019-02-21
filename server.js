const express = require('express')
const next = require('next')
const compression = require('compression')
const path = require('path')

const isDev = process.env.NODE_ENV !== 'production'
const port = 3000
const app = next({ dev: isDev, dir: './src' })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()
    server.use(compression())

    server.get('/service-worker.js', (req, res) => {
      const filePath = path.join(__dirname, 'src', '.next', 'service-worker.js')

      return app.serveStatic(req, res, filePath)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, err => {
      if (err) throw err
      console.info(`> Ready on http://localhost:${port}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
