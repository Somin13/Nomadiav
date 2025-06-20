import express from 'express';
import { 
  createChecklistOnAddTrip,
  getChecklistDetails,
  updateChecklistItem,
  addChecklistItem,
  deleteChecklistItem,
  toggleAllChecklistItems,
  resetChecklist,
  getAllUserChecklists
} from '../controllers/checklistController.js';

const router = express.Router();

// Route pour ajouter le voyage ET créer une checklist personnalisée
router.post('/checklist/:id', createChecklistOnAddTrip);


// Afficher une checklist complète pour un voyage
router.get('/checklist/:id', getChecklistDetails);

// Cocher/décocher un item
router.post('/checklist/item/:itemId/toggle', updateChecklistItem);

// Ajouter un item personnalisé à une catégorie
router.post('/checklist/:checklistId/category/:categoryId/item/add', addChecklistItem);

// Supprimer un item
router.post('/checklist/item/:itemId/delete', deleteChecklistItem);

// Tout cocher/décocher dans une checklist
router.post('/checklist/:checklistId/toggle-all', toggleAllChecklistItems);

// Réinitialiser la checklist (tout décocher)
router.post('/checklist/:checklistId/reset', resetChecklist);


router.get('/allChecklist', getAllUserChecklists);


export default router;
