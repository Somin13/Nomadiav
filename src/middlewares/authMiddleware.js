import prisma from '../config/prisma.js'

export async function attachUser(req, res, next) {
  if (req.session && req.session.user) {
    req.user = req.session.user;
    res.locals.user = req.session.user; // utile dans les vues Twig
  }
  next();
}

export function requireAuth(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/login');
  }
}

// Middleware à utiliser dans les routes API REST (retourne JSON 401 si pas connecté)
export function isAuthenticated(req, res, next) {
  if (req.user) {
    return next();
  }
  return res.status(401).json({ message: 'Non autorisé' });
}

// Middleware d'authentification pour injecter l'utilisateur connecté dans les vues
const authguard = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/login');
  }
};

export default requireAuth
