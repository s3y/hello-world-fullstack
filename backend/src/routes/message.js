import { Router } from 'express';

const router = Router();

router.get('/message', (req, res) => {
  res.json({
    message: 'Hello, preview from the backend!',
    timestamp: new Date().toISOString()
  });
});

export default router;
