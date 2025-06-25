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
import { deleteChecklist } from '../controllers/checklistController.js';

const router = express.Router();

// ✅ suprimmer une checklist complète
router.post('/checklist/:id/delete', deleteChecklist);

// ✅ Créer une checklist lors de l'ajout d'un voyage
router.post('/checklist/:id', createChecklistOnAddTrip);

// ✅ Afficher une checklist complète
router.get('/checklist/:id', getChecklistDetails);

// ✅ Cocher/décocher un item (on ajoute :checklistId)
router.post('/checklist/:checklistId/item/:itemId/toggle', updateChecklistItem);

// ✅ Ajouter un item personnalisé à une catégorie
router.post('/checklist/:checklistId/category/:categoryId/item/add', addChecklistItem);

// ✅ Supprimer un item (on ajoute :checklistId)
router.post('/checklist/:checklistId/item/:itemId/delete', deleteChecklistItem);

// ✅ Tout cocher/décocher dans une checklist
router.post('/checklist/:checklistId/toggle-all', toggleAllChecklistItems);

// ✅ Réinitialiser la checklist (tout décocher)
router.post('/checklist/:checklistId/reset', resetChecklist);

// ✅ Voir toutes les checklists de l'utilisateur
router.get('/allChecklist', getAllUserChecklists);

export default router;
