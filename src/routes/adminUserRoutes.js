import express from 'express';
import { isAdmin } from '../middlewares/isAdmin.js';
import { getAllUsers, deleteUserById } from '../controllers/adminUserController.js';
import upload from '../utils/upload.js';

const router = express.Router();

// Affichage de la page utilisateurs
router.get('/admin/adminUserView', isAdmin, getAllUsers);

// Suppression utilisateur
router.post('/admin/users/delete/:id', isAdmin, deleteUserById);


export default router;
