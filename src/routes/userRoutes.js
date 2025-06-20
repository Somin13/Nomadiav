import express from 'express'
import {
  renderUserBoard,
  renderUserProfile,
  updateUserProfile,
  changePassword,
  deleteAccount,
  updatePrivacy,
  updateAdventurerType
} from '../controllers/userController.js'

import { requireAuth } from '../middlewares/authMiddleware.js'
import upload from '../utils/upload.js'
import { addTripToUser } from '../controllers/userController.js';

const router = express.Router()

// 🔐 Page d'accueil utilisateur après login
router.get('/userBoard', requireAuth, renderUserBoard)

// 👤 Page profil utilisateur
router.get('/profil', requireAuth, renderUserProfile)

// ✏️ Modifier les infos texte ET les images du profil
router.post(
  '/profil/update',
  requireAuth,
  upload.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'coverImage', maxCount: 1 }
  ]),
  updateUserProfile
)

// 🔐 Modifier mot de passe
router.post('/profil/password', requireAuth, changePassword)

// ❌ Supprimer le compte
router.post('/profil/delete', requireAuth, deleteAccount)

// 👁️ Changer visibilité publique/privée
router.post('/profil/privacy', requireAuth, updatePrivacy)

// 🌍 Changer type d'aventurier
router.post('/profil/adventurer-type', requireAuth, updateAdventurerType)

router.post('/add-trip/:destinationId', requireAuth, addTripToUser);
export default router
