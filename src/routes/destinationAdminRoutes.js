import express from 'express'
import { isAdmin } from '../middlewares/isAdmin.js';

import { getDestinationById, handleAddDestination, renderAddDestination } from '../controllers/destinationAdminController.js';
import upload from "../utils/upload.js";

const router = express.Router();

router.get('/admin/destinations/add', isAdmin, renderAddDestination);

router.post('/admin/destinations/add', isAdmin, upload.any(), handleAddDestination)

// 🔗 Page publique d'une destination
router.get('/destination/:id', getDestinationById);

export default router;
