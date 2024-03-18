import request from 'supertest';
import app from '../app';  // import your Express app
import fs from 'fs';
import util from 'util';

const readFile = util.promisify(fs.readFile);

// Test case for non-existent route
describe('GET /nonexistentroute', () => {
  // Expected to respond with a 404 error
  it('responds with 404', async () => {
    // Request to the non-existent route
    const response = await request(app).get('/nonexistentroute');
    // Check if the response status is 404
    expect(response.status).toBe(404);
    // Check if the response body returns the correct result
    expect(response.body).toEqual({ result: '404' });
  });
});

// Test case for GET request to /api-docs
describe('GET /api-docs', () => {
  // Expected to respond with 200 OK status and the contents should contain Swagger UI
  it('responds with 200 and contains Swagger UI', async () => {
    // Make a GET request to /api-docs/
    const response = await request(app).get('/api-docs/');

    // Check if the response status is 200 OK
    expect(response.status).toBe(200);

    // Check if the response text contains the title 'Swagger UI'
    expect(response.text).toContain('<title>Swagger UI</title>');
  });
});
