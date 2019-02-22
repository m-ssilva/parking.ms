const controller = require('../../controllers/login.controller')
const validator = require('./login.validator')
const url = '/api/login'

module.exports = [
    {
        method: 'post',
        path: url,
        action: controller.post,
        middleware: [validator.post]
    }
]