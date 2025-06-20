// app.js

import express from 'express';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv'
import authRoutes from './src/routes/authRoutes.js';
import destinationRoutes from './src/routes/destinationRoutes.js';
import adminRoutes from './src/routes/dashAdmRoutes.js'; // ou ton fichier route
import destinationAdminRoutes from './src/routes/destinationAdminRoutes.js';
import userRoutes from './src/routes/userRoutes.js'
import { attachUser } from './src/middlewares/authMiddleware.js'

dotenv.config();
const app = express();
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuration Twig
app.set('view engine', 'twig');
app.set('views', path.join(__dirname, 'src/views'));

// Fichiers statiques (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Si tes images sont dans /public/uploads, c’est déjà accessible via app.use(express.static('public'))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



// Middleware session
app.use(session({
  secret: 'nomadia_secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // ⚠️ à passer à true en prod avec HTTPS
    maxAge: 1000 * 60 * 60 * 2 // 2h
  }
}))

// Middleware global pour rendre l'utilisateur accessible dans tous les fichiers Twig
app.use((req, res, next) => {
  res.locals.user = req.session.userId ? { id: req.session.userId, role: req.session.role } : null;
  next();
});


// 🟠 ROUTE PAGE D’ACCUEIL VITRINE
app.get('/', (req, res) => {
  res.render('home'); // Assure-toi que src/views/home.twig existe !
});

app.use(attachUser)

// Autres routes (authentification, etc.)
app.use('/', authRoutes);
app.use('/', destinationRoutes);
app.use('/', adminRoutes);
app.use('/', destinationAdminRoutes);
app.use('/', userRoutes)

// Lancement du serveur
app.listen(3016, () => {
  console.log('✅ Serveur démarré sur le port 3016');
});
