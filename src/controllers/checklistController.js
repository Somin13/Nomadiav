import prisma from '../config/prisma.js';

// 1. Création automatique de la checklist lors de l'ajout d'un voyage
export async function createChecklistOnAddTrip(req, res) {
  const userId = req.session.userId;
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
      req.flash('success', '✅ Check-list créée pour ce voyage !');
    } else {
      req.flash('info', 'ℹ️ Une check-list existe déjà pour ce voyage.');
    }

    res.redirect('/allChecklist');
  } catch (err) {
    console.error('Erreur création checklist:', err);
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

    // 3. Supprimer la checklist elle-même
    await prisma.checklist.delete({
      where: { id: checklistId },
    });
    res.redirect('/allChecklist');
  } catch (err) {
    console.error('Erreur suppression checklist:', err);
    // req.flash('error', '❌ Erreur lors de la suppression.');
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
      return res.redirect('/allChecklist');
    }
    res.render('checklist', { checklist });
  } catch (err) {
    console.error('Erreur affichage checklist:', err);

    res.redirect('/allChecklist');
  }
}

// 4. Cocher/décocher un item
 export async function updateChecklistItem(req, res) {
  const { checklistId, itemId } = req.params; // récupère bien les deux !
  try {
    const item = await prisma.checklistItem.findUnique({ where: { id: itemId } });
    if (!item) {
      return res.redirect(`/checklist/${checklistId}`);
    }
    const newState = !item.isChecked;
    await prisma.checklistItem.update({
      where: { id: itemId },
      data: { isChecked: newState }
    });
    res.redirect(`/checklist/${checklistId}`); // Reviens sur la page courante
  } catch (err) {
    console.error('Erreur toggle item:', err);
    res.redirect(`/checklist/${checklistId}`);
  }
}


// 5. Ajouter un item personnalisé à une catégorie
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
    res.redirect(`/checklist/${checklistId}`);
  } catch (err) {
    console.error('Erreur ajout item:', err);
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
      return res.redirect(`/checklist/${checklistId}`);
    }
    await prisma.checklistItem.delete({ where: { id: itemId } });
    res.redirect(`/checklist/${checklistId}`);
  } catch (err) {
    console.error('Erreur suppression item:', err);
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

    res.redirect(`/checklist/${checklistId}`);
  } catch (err) {
    console.error('Erreur tout cocher/décocher:', err);
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
    res.redirect(`/checklist/${checklistId}`);
  } catch (err) {
    console.error('Erreur reset checklist:', err);
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
    res.status(500).send('Erreur serveur');
  }
}
