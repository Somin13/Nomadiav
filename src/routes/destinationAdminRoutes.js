import express from 'express'
import { isAdmin } from '../middlewares/isAdmin.js';

import { handleEditDestination, renderAddDestination } from '../controllers/destinationAdminController.js';
import { handleAddDestination } from '../controllers/destinationAdminController.js';
import upload from "../utils/upload.js";

const router = express.Router();

router.get('/admin/destinations/add', isAdmin, renderAddDestination);

router.post('/admin/destinations/add', isAdmin, upload.any(), handleAddDestination)



export default router;
