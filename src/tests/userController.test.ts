import request from 'supertest';
import app from '../app';

describe('GET /api/user/1234', () => {
  it('responds with pong', async () => {
    const response = await request(app).get('/api/user/1234');
    expect(response.status).toBe(200);
    expect(response.body.result).toBe({});
  });
});