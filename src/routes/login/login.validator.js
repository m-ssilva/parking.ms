const controller = require('../../controllers/login.controller')

const validatePost = async (body) => {
    const errors = []

    const userExists = await controller.searchUser(body)

    if (!body.username) { errors.push({ message: 'Please enter a valid username.', path: 'body.username' }) }
    if (!body.password) { errors.push({ message: 'Please enter a valid password.', path: 'body.password' }) }
    if (body.username && body.password && !userExists) { errors.push({ message: 'Username or password is wrong, try again.', path: ['body.username', 'body.password'] }) }

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