import express from 'express';
import { showAllReviews } from '../controllers/reviewsController.js';

const router = express.Router();

router.get('/destination/:destinationId/reviews', showAllReviews);

export default router;
