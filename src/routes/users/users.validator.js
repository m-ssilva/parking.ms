const controller = require('../../controllers/users.controller')

const validatePost = async (body) => {
    const errors = []

    let userValidator = await controller.userValidate(body)

    if (!body.name) { errors.push({ messagE: 'Please enter a name.', path: 'body.name' }) }
    if (!body.username) { errors.push({ message: 'Please enter a username.', path: 'body.username' }) }
    if (!body.password) { errors.push({ message: 'Please enter a password.', path: 'body.password' }) }
    if (userValidator) { errors.push({ message: 'Username already in use.', path: 'body.username' }) }

    return errors
}

exports.post = async (ctx, next) => {
    const result = await validatePost(ctx.request.body)
    if (result.length > 0) {
        ctx.status = 400
        ctx.body = result
    }
    else next()
}