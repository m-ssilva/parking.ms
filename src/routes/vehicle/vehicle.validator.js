const controller = require('../../controllers/vehicle.controller')

const validatePost = async (body) => {
    const errors = []

    let plateValidator = await controller.plateValidator(body)

    if (!body.type) { errors.push({ message: 'Please enter a vehicle type.', path: 'body.type' }) }
    if (!body.model) { errors.push({ message: 'Please enter a vehicle model.', path: 'body.model' }) }
    if (!body.plate) { errors.push({ message: 'Please enter a vehicle plate.', path: 'body.plate' }) }
    if (plateValidator) { errors.push({ message: 'Vehicle plate already in use.', path: 'body.plate' }) }

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