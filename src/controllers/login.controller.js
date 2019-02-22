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
        if (!user) return false
        else return true
    })

    console.log(`########### ${result}`)
    if (result === null) return false
    if (result.length > 0) return true
    else return false
}