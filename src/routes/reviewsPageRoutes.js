import express from 'express';
import { showAllReviews } from '../controllers/reviewsController.js';
import { requireAuth, attachUser } from '../middlewares/authMiddleware.js'

const router = express.Router();

router.get('/destination/:destinationId/reviews',attachUser, requireAuth, showAllReviews);

export default router;
