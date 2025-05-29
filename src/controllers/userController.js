import prisma from '../config/prisma.js'

// Affiche le tableau de bord de l'utilisateur
export function renderUserBoard(req, res) {
  res.render('userBoard'); // nécessite src/views/userBoard.twig
}
