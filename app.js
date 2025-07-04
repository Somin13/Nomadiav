import express from 'express';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// 🟢 Ajout du package connect-flash
import flash from 'connect-flash';

import authRoutes from './src/routes/authRoutes.js';
import destinationRoutes from './src/routes/destinationRoutes.js';
import adminRoutes from './src/routes/dashAdmRoutes.js';
import destinationAdminRoutes from './src/routes/destinationAdminRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import checklistRoutes from './src/routes/checklistRoutes.js';
import reviewsRoutes from './src/routes/reviewsRoutes.js';
<<<<<<< Updated upstream
=======
import notificationRoutes from './src/routes/notificationRoutes.js';
import { checkChecklistReminders } from './src/jobs/checkReminders.js';
import adminUserRoutes from './src/routes/adminUserRoutes.js';
>>>>>>> Stashed changes

import { attachUser } from './src/middlewares/authMiddleware.js';
import { showAllReviews } from './src/controllers/reviewsController.js';

dotenv.config();

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Middleware pour servir fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Parsing POST form & JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Accès images uploadées
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Configuration moteur Twig
app.set('view engine', 'twig');
app.set('views', path.join(__dirname, 'src/views'));

// Sessions (OBLIGATOIRE pour connect-flash)
app.use(session({
  secret: 'nomadia_secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 * 2 // 2h
  }
}));

// 🟢 connect-flash (doit venir après session)
app.use(flash());

// 🟢 Middleware pour rendre les flash messages disponibles partout dans Twig
app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.info = req.flash('info');
  next();
});

// Route d'accueil
app.get('/', (req, res) => {
  res.render('home');
});

// Middleware pour attacher l'utilisateur connecté
app.use(attachUser);

// --- ROUTE SPÉCIALE POUR LA PAGE D’AVIS COMPLÈTE ---
// Accessible via : /destination/:destinationId/reviews
app.get('/destination/:destinationId/reviews', showAllReviews);

// Montée des autres routes sans conflit
app.use('/', authRoutes);
app.use('/', destinationRoutes);
app.use('/', adminRoutes);
app.use('/', destinationAdminRoutes);
app.use('/', userRoutes);
app.use('/', checklistRoutes);
<<<<<<< Updated upstream
=======
app.use('/', notificationRoutes);
app.use('/', adminUserRoutes);
>>>>>>> Stashed changes

// Routes API prefixées par /api
app.use('/api', reviewsRoutes);

// Lancement serveur
app.listen(3016, () => {
  console.log('✅ Serveur démarré sur le port 3016');
});
<<<<<<< Updated upstream
//test
=======
>>>>>>> Stashed changes
