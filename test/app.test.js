const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('should respond with a 200 status and Hello World message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Hello World!' });
  });
});
