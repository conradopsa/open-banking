import { Router } from 'express';
import UserController from '../controllers/userController';

const router = Router();

//router.get('/user/:id', UserController.getUser);
router.get('/user', UserController.listUsers);
router.post('/user/login', UserController.login);

export default router