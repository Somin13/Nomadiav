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


dotenv.config();
const app = express();
app.use(express.static('./public'))
app.use(express.urlencoded({extended: true}))

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuration Twig
app.set('view engine', 'twig');
app.set('views', path.join(__dirname, 'src/views'));

// Fichiers statiques (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Si tes images sont dans /public/uploads, c’est déjà accessible via app.use(express.static('public'))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/uploads', express.static('uploads'))


// Middleware session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

// Middleware pour parser les formulaires
app.use(express.urlencoded({ extended: true }));

// 🟠 ROUTE PAGE D’ACCUEIL VITRINE
app.get('/', (req, res) => {
  res.render('home'); // Assure-toi que src/views/home.twig existe !
});

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
