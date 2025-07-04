import prisma from '../config/prisma.js';

// 1. Création automatique de la checklist lors de l'ajout d'un voyage
export async function createChecklistOnAddTrip(req, res) {
  const userId = req.session.user?.id;
  const voyageId = req.params.id;
  try {
    let checklist = await prisma.checklist.findFirst({
      where: { userId, voyageId }
    });

    if (!checklist) {
      checklist = await prisma.checklist.create({
        data: {
          titre: `Check-list pour ce voyage`,
          user: { connect: { id: userId } },
          voyage: { connect: { id: voyageId } },
          categories: {
            create: [
              { titre: 'Formalités administratives', icone: 'id-card' },
              { titre: 'Santé / médical', icone: 'stethoscope' },
              { titre: 'Bagages Essentiels', icone: 'suitcase' },
              { titre: 'Finance et documents', icone: 'credit-card' },
              { titre: 'Rappels personnalisés', icone: 'bell' }
            ]
          }
        }
      });
<<<<<<< Updated upstream
    } else {
=======
      req.flash('success', 'Checklist créée pour ce voyage !');
    } else {
      req.flash('info', 'Checklist déjà existante pour ce voyage.');
>>>>>>> Stashed changes
    }

    res.redirect('/allChecklist');
  } catch (err) {
    console.error('Erreur création checklist:', err);
    req.flash('error', 'Erreur lors de la création de la checklist.');
    res.redirect('/allChecklist');
  }
}

// 9. Supprimer une checklist complète
export async function deleteChecklist(req, res) {
  const checklistId = req.params.id;
  try {
    // 1. Supprimer tous les items liés à chaque catégorie de la checklist
    const categories = await prisma.checklistCategory.findMany({
      where: { checklistId },
      select: { id: true }
    });

    // Pour chaque catégorie, supprimer tous ses items
    for (const cat of categories) {
      await prisma.checklistItem.deleteMany({
        where: { categoryId: cat.id }
      });
    }

    // 2. Supprimer toutes les catégories de la checklist
    await prisma.checklistCategory.deleteMany({
      where: { checklistId }
    });

    // 3. Récupérer la checklist pour avoir userId et voyageId
    const checklist = await prisma.checklist.findUnique({ where: { id: checklistId } });
    const userId = checklist?.userId;
    const voyageId = checklist?.voyageId;

    // 4. Supprimer la checklist elle-même
    await prisma.checklist.delete({
      where: { id: checklistId },
    });

    // 5. Supprimer l'entrée UserVoyage correspondante
    if (userId && voyageId) {
      await prisma.userVoyage.deleteMany({
        where: {
          userId: userId,
          destinationId: voyageId
        }
      });
    }

    req.flash('success', 'Checklist supprimée avec succès.');
    res.redirect('/allChecklist');
  } catch (err) {
    console.error('Erreur suppression checklist:', err);
    req.flash('error', 'Erreur lors de la suppression de la checklist.');
    res.redirect('/allChecklist');
  }
}



// 3. Afficher une checklist complète (vue détaillée)
export async function getChecklistDetails(req, res) {
  const checklistId = req.params.id;
  try {
    const checklist = await prisma.checklist.findUnique({
      where: { id: checklistId },
      include: {
        voyage: true,
        categories: {
          include: {
            items: true
          }
        }
      }
    });
    if (!checklist) {
<<<<<<< Updated upstream
=======
      req.flash('error', 'Checklist introuvable.');
>>>>>>> Stashed changes
      return res.redirect('/allChecklist');
    }
    res.render('checklist', { checklist });
  } catch (err) {
    console.error('Erreur affichage checklist:', err);
<<<<<<< Updated upstream

=======
    req.flash('error', 'Erreur lors de l\'affichage de la checklist.');
>>>>>>> Stashed changes
    res.redirect('/allChecklist');
  }
}

// 4. Cocher/décocher un item
 export async function updateChecklistItem(req, res) {
  const { checklistId, itemId } = req.params; // récupère bien les deux !
  try {
    const item = await prisma.checklistItem.findUnique({ where: { id: itemId } });
    if (!item) {
<<<<<<< Updated upstream
=======
      req.flash('error', 'Item introuvable.');
>>>>>>> Stashed changes
      return res.redirect(`/checklist/${checklistId}`);
    }
    const newState = !item.isChecked;
    await prisma.checklistItem.update({
      where: { id: itemId },
      data: { isChecked: newState }
    });
<<<<<<< Updated upstream
    res.redirect(`/checklist/${checklistId}`); // Reviens sur la page courante
=======
    req.flash('success', newState ? 'Item coché !' : 'Item décoché !');
    res.redirect(`/checklist/${checklistId}`);
>>>>>>> Stashed changes
  } catch (err) {
    console.error('Erreur toggle item:', err);
    req.flash('error', 'Erreur lors de la mise à jour de l\'item.');
    res.redirect(`/checklist/${checklistId}`);
  }
}

<<<<<<< Updated upstream

// 5. Ajouter un item personnalisé à une catégorie
=======
/**
 * 5. Ajouter un item personnalisé à une catégorie
 */
>>>>>>> Stashed changes
export async function addChecklistItem(req, res) {
  const { checklistId, categoryId } = req.params;
  const { titre, description } = req.body;
  try {
    await prisma.checklistItem.create({
      data: {
        titre,
        description,
        isChecked: false,
        category: { connect: { id: categoryId } }
      }
    });
<<<<<<< Updated upstream
=======

    // ---------- NOTIFICATION DE RAPPEL ----------
    if (parsedDate) {
      const now = new Date();
      const diffMs = parsedDate - now;
      if (diffMs > 0 && diffMs < 86400 * 1000) {
        const checklist = await prisma.checklist.findUnique({
          where: { id: checklistId }
        });
        await prisma.notification.create({
          data: {
            type: 'rappel_checklist',
            userId: checklist.userId,
            checklistItemId: item.id,
            checklistId: checklist.id,
            destinationId: checklist.voyageId,
            isRead: false
          }
        });
      }
    }

    req.flash('success', 'Nouvel item ajouté à la checklist !');
>>>>>>> Stashed changes
    res.redirect(`/checklist/${checklistId}`);
  } catch (err) {
    console.error('Erreur ajout item:', err);
    req.flash('error', 'Erreur lors de l\'ajout de l\'item.');
    res.redirect(`/checklist/${checklistId}`);
  }
}

// 6. Supprimer un item
// 6. Supprimer un item
export async function deleteChecklistItem(req, res) {
  const { checklistId, itemId } = req.params; // <-- récupère bien les deux
  try {
    const item = await prisma.checklistItem.findUnique({ where: { id: itemId } });
    if (!item) {
<<<<<<< Updated upstream
=======
      req.flash('error', 'Item introuvable.');
>>>>>>> Stashed changes
      return res.redirect(`/checklist/${checklistId}`);
    }
    await prisma.checklistItem.delete({ where: { id: itemId } });
    req.flash('success', 'Item supprimé de la checklist.');
    res.redirect(`/checklist/${checklistId}`);
  } catch (err) {
    console.error('Erreur suppression item:', err);
    req.flash('error', 'Erreur lors de la suppression de l\'item.');
    res.redirect(`/checklist/${checklistId}`);
  }
}


// 7. Tout cocher/décocher dans la checklist
export async function toggleAllChecklistItems(req, res) {
  const { checklistId } = req.params;
  const check = req.body.check === 'true'; // Parse la valeur reçue
  try {
    const categories = await prisma.checklistCategory.findMany({
      where: { checklistId },
      include: { items: true }
    });
    for (const cat of categories) {
      for (const item of cat.items) {
        await prisma.checklistItem.update({
          where: { id: item.id },
          data: { isChecked: check }
        });
      }
    }
<<<<<<< Updated upstream

=======
    req.flash('success', check ? 'Tous les items cochés !' : 'Tous les items décochés.');
>>>>>>> Stashed changes
    res.redirect(`/checklist/${checklistId}`);
  } catch (err) {
    console.error('Erreur tout cocher/décocher:', err);
    req.flash('error', 'Erreur lors de la mise à jour des items.');
    res.redirect(`/checklist/${checklistId}`);
  }
}

// 8. Réinitialiser la checklist (tout décocher)
export async function resetChecklist(req, res) {
  const { checklistId } = req.params;
  try {
    const categories = await prisma.checklistCategory.findMany({
      where: { checklistId },
      include: { items: true }
    });
    for (const cat of categories) {
      for (const item of cat.items) {
        await prisma.checklistItem.update({
          where: { id: item.id },
          data: { isChecked: false }
        });
       }
    }
    req.flash('success', 'Checklist réinitialisée.');
    res.redirect(`/checklist/${checklistId}`);
  } catch (err) {
    console.error('Erreur reset checklist:', err);
    req.flash('error', 'Erreur lors de la réinitialisation.');
    res.redirect(`/checklist/${checklistId}`);
  }
}

// Pour la page /allChecklist (NOUVEAU)
export async function getAllUserChecklists(req, res) {
  const userId = req.session.userId;
  try {
    const checklists = await prisma.checklist.findMany({
      where: { userId },
      include: {
        voyage: true,
        categories: { include: { items: true } }
      },
      orderBy: { createdAt: 'desc' }
    });
    res.render('allChecklist', { checklists });
  } catch (err) {
    console.error('Erreur chargement checklists:', err);
    req.flash('error', 'Erreur lors du chargement des checklists.');
    res.redirect('/');
  }
}

export async function addChecklistAndUserVoyage(req, res) {
  const userId = req.user.id;
  const voyageId = req.params.id;
  try {
<<<<<<< Updated upstream
    // Ajoute dans UserVoyage (pivot)
=======
>>>>>>> Stashed changes
    try {
      await prisma.userVoyage.create({
        data: {
          userId,
          destinationId: voyageId,
        }
      });
    } catch (err) {
      if (err.code !== 'P2002') {
        console.error('Erreur ajout UserVoyage:', err);
        req.flash('error', "Erreur lors de l'ajout du voyage au profil.");
        return res.redirect('/profil');
      }
    }
    let checklist = await prisma.checklist.findFirst({
      where: { userId, voyageId }
    });
    if (!checklist) {
      checklist = await prisma.checklist.create({
        data: {
          titre: `Check-list pour ce voyage`,
          user: { connect: { id: userId } },
          voyage: { connect: { id: voyageId } },
          categories: {
            create: [
              { titre: 'Formalités administratives', icone: 'id-card' },
              { titre: 'Santé / médical', icone: 'stethoscope' },
              { titre: 'Bagages Essentiels', icone: 'suitcase' },
              { titre: 'Finance et documents', icone: 'credit-card' },
              { titre: 'Rappels personnalisés', icone: 'bell' }
            ]
          }
        }
      });
      req.flash('success', 'Checklist et voyage ajoutés au profil !');
    } else {
      req.flash('info', 'Checklist et voyage déjà présents dans votre profil.');
    }
    res.redirect('/profil');
  } catch (err) {
    console.error('Erreur ajout checklist + UserVoyage:', err);
    req.flash('error', "Erreur lors de l'ajout du voyage au profil.");
    res.redirect('/profil');
  }
}
