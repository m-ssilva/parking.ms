const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()
const path = require('path')
const registerRoutes = require('')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')

app.use(bodyParser())
app.use(logger())
app.use(router.routes())

module.exports = app