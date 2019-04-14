const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()
const path = require('path')
const registerRoutes = require('./helpers/register-routes')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')

registerRoutes(router, path.join(__dirname, './routes')) // eslint-disable-line

app.use(bodyParser())
app.use(logger())
app.use(router.routes())

module.exports = app