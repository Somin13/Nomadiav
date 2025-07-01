import express from 'express';
const router = express.Router();

import { markAllNotificationsAsRead, showNotifications } from '../controllers/notificationsController.js';
import { attachUser ,requireAuth } from '../middlewares/authMiddleware.js';
import { getAllUserNotifications } from '../controllers/notificationsController.js';

router.get('/notification', attachUser ,requireAuth, showNotifications);
router.get('/notification/read', attachUser, requireAuth, markAllNotificationsAsRead);
router.get('/notifications', getAllUserNotifications);

export default router;
