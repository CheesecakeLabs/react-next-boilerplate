const express = require('express')
const next = require('next')
const compression = require('compression')

const isDev = process.env.NODE_ENV !== 'production'
const port = isDev ? 3000 : 8081
const app = next({ dev: isDev, dir: './src' })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()
    server.use(compression())

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
