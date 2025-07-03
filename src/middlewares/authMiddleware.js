import prisma from '../config/prisma.js'

export async function attachUser(req, res, next) {
  if (req.session && req.session.user) {
    req.user = req.session.user;
    res.locals.user = req.session.user; // utile dans les vues Twig
  }
  next();
}

export function requireAuth(req, res, next) {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  if (req.session.user.isBanned) {
    // Déconnecte et redirige avec un paramètre
    return req.session.destroy(() => {
      res.redirect('/login?banned=1');
    });
  }
  next();
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

export function checkNotBanned(req, res, next) {
  // Vérifie si l'utilisateur est connecté et banni
  if (req.user && req.user.isBanned) {
    // Tu peux adapter ici la réponse : JSON, render Twig, ou simple message
    return res.status(403).render('banned.twig', {
      message: "Votre compte a été banni. Contactez l'administration si besoin."
    });
    // ou, si tu n'as pas de page dédiée :
    // return res.status(403).send("Votre compte a été banni.");
  }
  next();
}


export default requireAuth
