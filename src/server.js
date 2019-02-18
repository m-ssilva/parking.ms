const app = require('./index')
const config = require('./configs/config')
const server = app.listen(config.api.port)

console.log(`Listening on ${config.api.host}:${config.api.port}`)

module.exports = {
    app: app,
    server: server
}