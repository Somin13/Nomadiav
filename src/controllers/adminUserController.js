// src/controllers/adminUserController.js
import prisma from '../config/prisma.js';

// GET : Liste des utilisateurs
export async function getAllUsers(req, res) {
  try {
    const users = await prisma.user.findMany({
      where: { role: 'user' }, // Ne récupère que les users normaux
      orderBy: { createdAt: 'desc' }
    });
    res.render('admin/adminUserView.twig', { users });

  } catch (err) {
    console.error('Erreur getAllUsers:', err);
    res.status(500).send("Erreur serveur");
  }
}

// POST : Supprimer un utilisateur par son ID
export async function deleteUserById(req, res) {
  const { id } = req.params;
  try {
    await prisma.user.delete({
      where: { id: Number(id) }
    });
    res.redirect('/admin/adminUserView');
  } catch (err) {
    console.error('Erreur deleteUser:', err);
    res.status(500).send("Erreur lors de la suppression");
  }
}
