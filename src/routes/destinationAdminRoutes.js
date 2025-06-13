import express from 'express'
import { isAdmin } from '../middlewares/isAdmin.js';

import { getDestinationById, handleAddDestination, renderAddDestination } from '../controllers/destinationAdminController.js';
import upload from "../utils/upload.js";
import {handleEditDestination, renderEditDestination} from '../controllers/destinationAdminController.js';

const router = express.Router();

// 🔧 Formulaire de modification (affichage)
router.get('/admin/destinations/edit/:id', isAdmin, renderEditDestination);

// 🔧 Enregistrement des modifications (POST)
router.post('/admin/destinations/edit/:id', isAdmin, upload.any(), handleEditDestination);


router.get('/admin/destinations/add', isAdmin, renderAddDestination);

router.post('/admin/destinations/add', isAdmin, upload.any(), handleAddDestination)

// 🔗 Page publique d'une destination
router.get('/destination/:id', getDestinationById);

export default router;
