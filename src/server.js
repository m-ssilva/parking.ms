const app = require('./index')
const config = require('./configs/config')

console.log(`Listening on ${config.api.host}:${config.api.port}`)

module.exports = {
    app: app,
    server: server
}