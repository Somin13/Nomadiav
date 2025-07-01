import express from 'express';
import { getAllDestinationsGrouped, getDestinationDetails } from '../controllers/destinationController.js'
import {requireAuth, attachUser } from '../middlewares/authMiddleware.js';
import { getContinentDestinations } from '../controllers/destinationController.js'

const router = express.Router();

// Route pour afficher toutes les destinations groupées par continent
router.get('/destinations',attachUser,requireAuth, getAllDestinationsGrouped);

// Route pour afficher une destination en détail
router.get('/destination/:id',attachUser,requireAuth, getDestinationDetails);

router.get('/continent/:continent', attachUser, requireAuth, getContinentDestinations);
export default router;
