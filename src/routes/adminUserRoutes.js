import express from 'express';
import { isAdmin } from '../middlewares/isAdmin.js';
import {
  getAllUsers,
  deleteUserById,
  viewUserProfile,
  viewDestinationReviews,
  deleteReview,
  banUser,
  unbanUser,
  banUserFromList,
  unbanUserFromList
} from '../controllers/adminUserController.js';

import upload from '../utils/upload.js';

const router = express.Router();

// Affichage de la page utilisateurs
router.get('/admin/adminUserView', isAdmin, getAllUsers);

// Affichage du profil utilisateur
router.get('/admin/users/:userId', isAdmin, viewUserProfile);

// Suppression utilisateur
router.post('/admin/users/delete/:userId', isAdmin, deleteUserById);

// Avis destination
router.get('/admin/destinations/:destinationId/reviews', isAdmin, viewDestinationReviews);
router.post('/admin/reviews/:reviewId/delete', isAdmin, deleteReview);

// Ban/Unban depuis modération d'avis (POST)
router.post('/admin/users/:userId/ban', isAdmin, banUser);
router.post('/admin/users/:userId/unban', isAdmin, unbanUser);

// Ban/Unban depuis la liste utilisateurs (GET ou POST selon ce que tu veux)
router.get('/admin/users/:userId/ban-from-list', isAdmin, banUserFromList);
router.get('/admin/users/:userId/unban-from-list', isAdmin, unbanUserFromList);


export default router;
