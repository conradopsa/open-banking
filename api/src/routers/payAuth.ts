import { Router } from 'express';
import PayAuthController from '../controllers/payAuthController';


const router = Router();

router.post('/pay-auth/:deviceSN', PayAuthController.devicesStatus);
router.post('/user/:userId/pay-auth/:deviceSN', PayAuthController.requestAuthentication);

export default router