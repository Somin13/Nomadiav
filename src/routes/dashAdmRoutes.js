import express from 'express';
import { isAdmin } from '../middlewares/isAdmin.js';
import { deleteDestination, handleEditDestination, renderEditDestination, showAllDestinations } from '../controllers/destinationAdminController.js';
import upload from '../utils/upload.js';

const router = express.Router();



router.get('/admin/destination', isAdmin, (req, res) => {
    res.render('/dashAdm.twig');
});

router.post('/admin/destination', isAdmin);
router.post('/admin/delete/:id', isAdmin);
router.get('/dashAdm', isAdmin, showAllDestinations);
router.get('/dashAdm', isAdmin, deleteDestination)
router.post('/admin/destinations/delete/:id', isAdmin, deleteDestination);
router.get('/admin/destinations/edit/:id', isAdmin, renderEditDestination);
router.post(
  '/admin/destinations/edit/:id',
  isAdmin,
  upload.single('imagePrincipale'),
  handleEditDestination
);




export default router;
