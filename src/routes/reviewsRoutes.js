import express from 'express';
import { showAllReviews, addReview, getRecentReviews, getAllReviews, toggleLikeReview } from '../controllers/reviewsController.js';
import { isAuthenticated } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Route affichage page avis complète (Twig)
router.get('/destination/:destinationId/reviews', showAllReviews);

// Routes API JSON
router.get('/reviews/:destinationId', getRecentReviews);
router.get('/reviews/all/:destinationId', getAllReviews);
router.post('/reviews', isAuthenticated, addReview);
router.post('/reviews/:reviewId/like', isAuthenticated, toggleLikeReview);

// POST ajout avis formulaire
router.post('/reviews/add', isAuthenticated, addReview);

export default router;
