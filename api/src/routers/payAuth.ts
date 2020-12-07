import { Router } from 'express';
import PayAuthController from '../controllers/payAuthController';


const router = Router();

router.get('/pay-auth/:deviceSN', PayAuthController.deviceStatus);
router.post('/user/:userId/pay-auth/:deviceSN', PayAuthController.requestAuthentication);

export default router