const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('should respond with a 200 status and HTML containing "Agile Freaks"', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/html/);
    expect(response.text).toContain('<h1>Agile Freaks</h1>');
  });
});
