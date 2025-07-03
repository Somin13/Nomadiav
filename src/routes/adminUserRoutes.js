import express from 'express';
import { isAdmin } from '../middlewares/isAdmin.js';
import {
  getAllUsers,
  deleteUserById,
  viewUserProfile,
  viewDestinationReviews,
  deleteReview,
  banUser
} from '../controllers/adminUserController.js';

import upload from '../utils/upload.js';

const router = express.Router();

// Affichage de la page utilisateurs
router.get('/admin/adminUserView', isAdmin, getAllUsers);

// Affichage du profil utilisateur (NEW)
router.get('/admin/users/:id', isAdmin, viewUserProfile);

// Suppression utilisateur
router.post('/admin/users/delete/:id', isAdmin, deleteUserById);

// Exemple
router.get('/admin/destinations/:destinationId/reviews', isAdmin, viewDestinationReviews);

// Action de suppression (POST ou GET selon ta logique)
router.post('/admin/reviews/:reviewId/delete', isAdmin, deleteReview);

router.post('/admin/users/:userId/ban', isAdmin, banUser);


export default router;
