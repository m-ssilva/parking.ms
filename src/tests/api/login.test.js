const request = require('supertest')
const { server } = require('../../server')
const sequelize = require('../../helpers/mysql-connect')
const sinon = require('sinon')
const loginController = require('../../controllers/login.controller')

let sandbox

beforeAll(async () => {
    sandbox = sinon.createSandbox()
    console.log('Starting API tests')
})

afterAll(() => {
    sequelize.close()
    server.close()
    sandbox.restore()
    console.log('API tests finished')
})

describe('testing /api/login', () => {
    it('POST should return 200', async () => {
        sandbox.stub(loginController, 'searchUser')
            .returns(true)

        await request(server)
            .post('/api/login')
            .send({ username: 'username', password: 'password' })
            .expect(200)
            .expect({ message: 'Seja bem vindo!' })
    })
})