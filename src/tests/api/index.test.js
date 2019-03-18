const request = require('supertest')
const { server } = require('../../server')

beforeAll(async () => {
    console.log('Starting API tests')
})

afterAll(() => {
    server.close()
    console.log('API tests finished')
})

describe('test on /api', () => {
    test('GET on /api', async () => {
        const response = await request(server).get('/api')
        expect(response.status).toEqual(200)
        expect(response.text).toContain('Hello World')
    })
})