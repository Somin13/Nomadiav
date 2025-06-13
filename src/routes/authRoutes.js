import express from 'express';
import {
  renderLogin,
  renderSignup,
  handleSignup,
  handleLogin,
  logoutUser
} from '../controllers/authController.js';

const router = express.Router();

router.get('/signup', renderSignup);
router.get('/login', renderLogin);
router.post('/signup', handleSignup);
router.post('/login', handleLogin);
router.get('/logout', logoutUser)

export default router;
