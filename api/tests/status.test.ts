import request from 'supertest';
import app from '../src/loaders/app'

jest.setTimeout(15000);

test('status', async () => {
    const response = await request(app).get('/status');
    expect(response.status).toBe(200);
});
