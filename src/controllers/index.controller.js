const userModel = require('../models/user-model')

exports.get = (ctx) => {
    ctx.body = {
        message: 'Hello World'
    }
}

exports.post = (ctx) => {
    userModel.create(ctx.request.body)
}