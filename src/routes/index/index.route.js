const controller = require('../../controllers/index.controller')
const url = '/api'
const validator = require('./index.validator')

module.exports = [{
    method: 'get',
    path: url,
    action: controller.get
},
{
    method: 'post',
    path: url,
    action: controller.post,
    middleware: [validator.post]
}]