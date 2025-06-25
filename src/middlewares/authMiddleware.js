import prisma from '../config/prisma.js'

export async function attachUser(req, res, next) {
  if (req.session && req.session.userId) {
    try {
      const user = await prisma.user.findUnique({
        where: { id: req.session.userId }
      })
      if (user) {
        req.user = user
        res.locals.user = user // utile dans les vues Twig
      }
    } catch (err) {
      console.error('❌ Erreur attachUser :', err.message)
    }
  }
  next()
}

export function requireAuth(req, res, next) {
  if (!req.user) {
    return res.redirect('/login') // à adapter selon ton app
  }
  next()
}

// Middleware à utiliser dans les routes API REST (retourne JSON 401 si pas connecté)
export function isAuthenticated(req, res, next) {
  if (req.user) {
    return next();
  }
  return res.status(401).json({ message: 'Non autorisé' });
}


export default requireAuth
