// src/controllers/adminUserController.js
import prisma from '../config/prisma.js';

// GET : Liste des utilisateurs
export async function getAllUsers(req, res) {
  try {
    const users = await prisma.user.findMany({
      where: { role: 'user' },
      orderBy: { createdAt: 'desc' }
    });
    res.render('admin/adminUserView.twig', { users });
  } catch (err) {
    console.error('Erreur getAllUsers:', err);
    req.flash('error', 'Erreur lors de la récupération des utilisateurs.');
    res.redirect('/admin/adminUserView');
  }
}

// POST : Supprimer un utilisateur par son ID
export async function deleteUserById(req, res) {
  const { id } = req.params;
  try {
    await prisma.user.delete({
      where: { id: Number(id) }
    });
    req.flash('success', 'Utilisateur supprimé avec succès.');
    res.redirect('/admin/adminUserView');
  } catch (err) {
    console.error('Erreur deleteUser:', err);
    req.flash('error', "Erreur lors de la suppression de l'utilisateur.");
    res.redirect('/admin/adminUserView');
  }
}

// GET : Afficher le profil complet d’un utilisateur pour l’admin
export async function viewUserProfile(req, res) {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
      include: {
        voyages: true,
        checklists: true,
      }
    });
    if (!user) {
      req.flash('error', 'Utilisateur introuvable.');
      return res.redirect('/admin/adminUserView');
    }
    res.render('admin/adminUserProfile.twig', { user });
  } catch (err) {
    console.error('Erreur viewUserProfile:', err);
    req.flash('error', "Erreur lors de l'affichage du profil utilisateur.");
    res.redirect('/admin/adminUserView');
  }
}

// Affiche tous les avis d’une destination pour l’admin
export async function viewDestinationReviews(req, res) {
  const { destinationId } = req.params;
  try {
    const destination = await prisma.destination.findUnique({
      where: { id: destinationId },
      select: { titre: true }
    });
    const reviews = await prisma.review.findMany({
      where: { destinationId },
      include: {
        user: true,
        likes: true,
      },
      orderBy: { createdAt: 'desc' }
    });
    res.render('admin/adminDestinationReviews.twig', { destination, reviews, destinationId });
  } catch (err) {
    req.flash('error', "Erreur lors de la récupération des avis.");
    res.redirect('/dashAdm');
  }
}

// Pour supprimer un avis
export async function deleteReview(req, res) {
  const { reviewId } = req.params;
  const { destinationId } = req.body;
  try {
    await prisma.review.delete({ where: { id: Number(reviewId) } });
    req.flash('success', 'Avis supprimé avec succès.');
    res.redirect(`/admin/destinations/${destinationId}/reviews`);
  } catch (err) {
    req.flash('error', "Erreur lors de la suppression de l'avis.");
    res.redirect(`/admin/destinations/${destinationId}/reviews`);
  }
}

// Bannir un utilisateur par son ID
export async function banUser(req, res) {
  const { userId } = req.params;
  const { destinationId } = req.body;

  // Empêcher de bannir l’admin (ou soi-même)
  if (req.session.user && Number(userId) === req.session.user.id) {
    req.flash('error', "Impossible de se bannir soi-même.");
    return res.redirect(`/admin/destinations/${destinationId}/reviews`);
  }

  try {
    await prisma.user.update({
      where: { id: Number(userId) },
      data: { isBanned: true }
    });
    req.flash('success', 'Utilisateur banni avec succès.');
    res.redirect(`/admin/destinations/${destinationId}/reviews`);
  } catch (err) {
    console.error('Erreur banUser:', err);
    req.flash('error', "Erreur lors du bannissement.");
    res.redirect(`/admin/destinations/${destinationId}/reviews`);
  }
}
