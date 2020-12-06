import { Router } from 'express';
import DeviceController from '../controllers/deviceController';

const router = Router();

router.get('/device', DeviceController.listDevices);

export default router