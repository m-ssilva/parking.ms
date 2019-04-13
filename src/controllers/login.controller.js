const userModel = require('../models/user-model')

exports.post = (ctx) => {
    ctx.body = { message: 'Seja bem vindo!' }
    ctx.status = 200
}

exports.searchUser = async (body) => {
    const result = await userModel.findOne({
        where: {
            username: body.username
        }
    }).then((user) => {
        /* username not found */
        if (!user) return false

        /* not matching password */
        else if (!user.comparePassword(body.password)) return false

        /* correct username and password */
        else return true
    })

    if (result === null) return false
    if (result) return true
    else return false
}