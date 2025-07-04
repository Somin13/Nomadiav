import prisma from '../config/prisma.js';

// Affiche les notifications de l'utilisateur connecté (et marque comme lues)
export async function showNotifications(req, res) {
  try {
    const userId = req.user.id;

    // Marque toutes les notifs comme lues AVANT d'afficher
    await prisma.notification.updateMany({
      where: { userId, isRead: false },
      data: { isRead: true }
    });

    const notifications = await prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      include: {
        fromUser: { select: { nom: true, prenom: true, avatar: true } },
        review: true,
        destination: true,
        checklistItem: true, // pour les rappels checklist (optionnel)
      }
    });

    res.render('notification.twig', { notifications });
  } catch (err) {
    console.error('❌ Erreur affichage notifications :', err);
    req.flash('error', 'Erreur lors du chargement des notifications.');
    res.redirect('/userBoard');
  }
}

// Marque manuellement toutes les notifs comme lues (optionnel)
export async function markAllNotificationsAsRead(req, res) {
  try {
    const userId = req.user.id;
    await prisma.notification.updateMany({
      where: { userId, isRead: false },
      data: { isRead: true }
    });
    req.flash('success', 'Toutes les notifications ont été marquées comme lues.');
    res.redirect('/notification');
  } catch (err) {
    console.error('❌ Erreur markAllNotificationsAsRead :', err);
    req.flash('error', 'Erreur lors de la mise à jour des notifications.');
    res.redirect('/notification');
  }
}

// Affiche toutes les notifs de l'utilisateur, y compris rappels checklist
export async function getAllUserNotifications(req, res) {
  try {
    const userId = req.user.id;

    const notifications = await prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      include: {
        fromUser: true,
        review: true,
        destination: true,
        checklistItem: true, // pour les rappels checklist (optionnel)
      }
    });

    res.render('notifications', { notifications });
  } catch (err) {
    console.error('❌ Erreur getAllUserNotifications :', err);
    req.flash('error', 'Erreur lors du chargement des notifications.');
    res.redirect('/userBoard');
  }
}


// supprime une notification


export async function deleteNotification(req, res) {
  try {
    await prisma.notification.delete({ where: { id: req.params.id } });
    req.flash('success', 'Notification supprimée.');
    res.redirect('/notification');
  } catch (err) {
    req.flash('error', 'Erreur lors de la suppression.');
    res.redirect('/notification');
  }
}
