const controller = require('../../controllers/vehicle.controller')
const url = '/api/vehicle'
const validator = require('./vehicle.validator')

module.exports = [{
    method: 'post',
    path: url,
    action: controller.post,
    middleware: [validator.post]
},
{
    method: 'get',
    path: `${url}/types`,
    action: controller.getTypes
}]