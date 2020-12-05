import { Router } from 'express';

const router = Router();

router.get('/status', (req, res) => {
    res.send("Sucesso!");
})

export default router