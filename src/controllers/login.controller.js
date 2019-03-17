const userModel = require('../models/user-model')

exports.post = (ctx) => {
    ctx.body = { message: 'Seja bem vindo!' }
    ctx.status = 200
}

exports.searchUser = async (body) => {
    const result = await userModel.find({
        where: {
            username: body.username
        }
    }).then((user) => {
        console.log(user)
        if (!user) {
            return false // username not found.
        }

        else if (!user.comparePassword(body.password)) {
            return false // not matching password.
        }

        else {
            return true // correct username and password.
        }
    })

    console.log(`########### ${result}`)
    if (result === null) return false
    if (result) return true
    else return false
}