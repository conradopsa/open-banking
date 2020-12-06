import request from 'supertest';
import app from '../src/loaders/app'

jest.setTimeout(15000);

it ('test authentication via payment', async () => {
    const response = await request(app)
        .post('/auth-pay');
    
    expect(response.status).toBe(200);
});
