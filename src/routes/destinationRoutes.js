import express from 'express';
import { getAllDestinationsGrouped, getDestinationDetails } from '../controllers/destinationController.js'

const router = express.Router();

router.get('/destination', (req, res) => {
  res.render('destination'); // ↪️ attention : il te faut src/views/destination.twig
});

// Route pour afficher toutes les destinations groupées par continent
router.get('/destinations', getAllDestinationsGrouped);

// Route pour afficher une destination en détail
router.get('/destination/:id', getDestinationDetails);

export default router;
