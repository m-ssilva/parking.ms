const validatePost = (body) => {
    const errors = []

    if (!body.username) { errors.push({ message: 'Please enter a username.', path: 'body.username' }) }
    if (!body.password) { errors.push({ message: 'Please enter a password.', path: 'body.password' }) }

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