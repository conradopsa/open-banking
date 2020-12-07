import request from 'supertest';
import app from '../src/loaders/app'
import PayAuthService from '../src/services/payAuthService';

jest.setTimeout(15000);

it ('test authentication via payment', async () => {
    PayAuthService.checkAuthViaPayment({})
});
