const request = require('supertest')
const app = require('../server').server

describe('GET on /api', () => {
    it('should return a hello world message', (done) => {
        request(app)
            .get('/api')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
})

describe('POST on /api', () => {
    it('should return a test message', (done) => {
        request(app)
            .post('/api')
            .send({ username: 'teste', password: 'teste' })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
})