const vehicleModel = require('../models/vehicle.model')
const vehicleType = require('../models/vehicleType.model')

exports.post = (ctx) => {
    vehicleModel.create(ctx.request.body)
    ctx.body = { message: 'Vehicle created' }
}

exports.plateValidator = async (body) => {
    const result = await vehicleModel.findAll({
        where: { plate: body.plate }
    })
    if (result.length > 0) return true
    else return false
}

exports.getTypes = async (ctx) => {
    const result = await vehicleType.findAll()
    ctx.body = result
}