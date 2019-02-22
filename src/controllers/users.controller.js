const userModel = require('../models/user-model')

exports.post = (ctx) => {
    userModel.create(ctx.request.body)
    ctx.body = {
        message: 'User created'
    }
}

exports.userValidate = async (body) => {
    const result = await userModel.findAll({
        where: { username: body.username }
    })

    if (result.length > 0) return true
    else return false
}