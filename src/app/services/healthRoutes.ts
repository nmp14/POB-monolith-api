import express from 'express';
const router = express.Router();

router.get('/health', (_, res) => {
  res.status(200).json(Date.now());
});

export default router;