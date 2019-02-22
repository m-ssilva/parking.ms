const controller = require('../../controllers/index.controller')
const url = '/api'

module.exports = [{
    method: 'get',
    path: url,
    action: controller.get
}]