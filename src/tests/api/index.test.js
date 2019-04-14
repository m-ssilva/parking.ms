const request = require('supertest')
const { server } = require('../../server')
const sequelize = require('../../helpers/mysql-connect')

beforeAll(async () => {
    console.log('Starting API tests')
})

afterAll(() => {
    sequelize.close()
    server.close()
    console.log('API tests finished')
})

describe('testing /api', () => {
    it('GET should return 200', async () => {
        const response = await request(server).get('/api')
        expect(response.status).toEqual(200)
        expect(response.text).toContain('Hello World')
    })
})