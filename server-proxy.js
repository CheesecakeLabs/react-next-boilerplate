const httpProxy = require('http-proxy')
const proxy = httpProxy.createProxyServer({})

module.exports = () => (req, res, next) => {
  if (req.originalUrl.match(/.*\/api\/.*/)) {
    proxy.web(req, res, { target: process.env.BACKEND_ADDR, changeOrigin: true })
    return
  }
  next()
  return
}
