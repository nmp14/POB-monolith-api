import express from 'express';
import health from './healthRoutes';
const router = express.Router();

router.use('/v1', health);

export default router;