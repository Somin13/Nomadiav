import express from 'express';
import { isAdmin } from '../middlewares/isAdmin.js';
import {
  deleteDestination,
  handleEditDestination,
  renderEditDestination,
  showAllDestinations
} from '../controllers/destinationAdminController.js';
import upload from '../utils/upload.js';

const router = express.Router();

// Dashboard admin principal
router.get('/dashAdm', isAdmin, showAllDestinations);

// Suppression d'une destination
router.post('/admin/destinations/delete/:id', isAdmin, deleteDestination);

// Modification d'une destination
router.get('/admin/destinations/edit/:id', isAdmin, renderEditDestination);
router.post(
  '/admin/destinations/edit/:id',
  isAdmin,
  upload.single('imagePrincipale'),
  handleEditDestination
);

export default router;
