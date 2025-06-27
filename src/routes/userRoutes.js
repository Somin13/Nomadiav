import express from 'express'
import {
  renderUserBoard,
  renderUserProfile,
  updateUserProfile,
  changePassword,
  deleteAccount,
  updatePrivacy,
  updateAdventurerType,
  addVoyageAndChecklist
} from '../controllers/userController.js'

import { requireAuth, attachUser } from '../middlewares/authMiddleware.js'
import upload from '../utils/upload.js'
import { addTripToUser } from '../controllers/userController.js';


const router = express.Router()

// 🔐 Page d'accueil utilisateur après login
router.get('/userBoard', attachUser, requireAuth, renderUserBoard)

// 👤 Page profil utilisateur
router.get('/profil', attachUser, requireAuth, renderUserProfile)

// ✏️ Modifier les infos texte ET les images du profil
router.post(
  '/profil/update',
  attachUser,
  requireAuth,
  upload.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'coverImage', maxCount: 1 }
  ]),
  updateUserProfile
)

// 🔐 Modifier mot de passe
router.post('/profil/password', attachUser, requireAuth, changePassword)

// ❌ Supprimer le compte
router.post('/profil/delete', attachUser, requireAuth, deleteAccount)

// 👁️ Changer visibilité publique/privée
router.post('/profil/privacy', attachUser, requireAuth, updatePrivacy)

// 🌍 Changer type d'aventurier
router.post('/profil/adventurer-type', attachUser, requireAuth, updateAdventurerType)

router.post('/add-trip/:destinationId', attachUser, requireAuth, addTripToUser);

router.post('/add-voyage/:destinationId', attachUser, requireAuth, addVoyageAndChecklist);

export default router
