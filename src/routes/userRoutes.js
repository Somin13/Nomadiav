import express from 'express'
import { renderUserBoard } from '../controllers/userController.js'

const router = express.Router()

// Route protégée pour l'espace utilisateur
router.get('/userBoard', renderUserBoard)

export default router
