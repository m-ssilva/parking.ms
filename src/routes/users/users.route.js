const controller = require('../../controllers/users.controller')
const url = '/api/users'
const validator = require('./users.validator')

module.exports = [{
    method: 'post',
    path: url,
    action: controller.post,
    middleware: [validator.post]
}]