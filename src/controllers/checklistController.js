import prisma from '../config/prisma.js';

// 1. Création automatique de la checklist lors de l'ajout d'un voyage
export async function createChecklistOnAddTrip(req, res) {
  const userId = req.session.userId;         // Assure-toi que ta session est bien gérée
  const voyageId = req.params.id;
  try {
    // Vérifie si la checklist existe déjà (évite les doublons)
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
    }

    // Redirige directement vers la liste des checklists ou là où tu veux
    res.redirect('/allChecklist');
  } catch (err) {
    console.error('Erreur création checklist:', err);
    res.status(500).send('Erreur serveur');
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
      return res.status(404).send("Check-list introuvable");
    }
    res.render('checklist', { checklist });
  } catch (err) {
    console.error('Erreur affichage checklist:', err);
    res.status(500).send('Erreur serveur');
  }
}

// 4. Cocher/décocher un item
export async function updateChecklistItem(req, res) {
  const itemId = req.params.itemId;
  try {
    // Récupérer l'état actuel
    const item = await prisma.checklistItem.findUnique({ where: { id: itemId } });
    const newState = !item.isChecked;
    await prisma.checklistItem.update({
      where: { id: itemId },
      data: { isChecked: newState }
    });
    res.json({ success: true, isChecked: newState });
  } catch (err) {
    console.error('Erreur toggle item:', err);
    res.status(500).json({ success: false });
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
    res.status(500).send('Erreur serveur');
  }
}

// 6. Supprimer un item
export async function deleteChecklistItem(req, res) {
  const itemId = req.params.itemId;
  try {
    await prisma.checklistItem.delete({ where: { id: itemId } });
    res.json({ success: true });
  } catch (err) {
    console.error('Erreur suppression item:', err);
    res.status(500).json({ success: false });
  }
}

// 7. Tout cocher/décocher dans la checklist
export async function toggleAllChecklistItems(req, res) {
  const { checklistId } = req.params;
  const { check } = req.body; // true/false
  try {
    // Récupère tous les items de la checklist
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
    res.json({ success: true });
  } catch (err) {
    console.error('Erreur tout cocher/décocher:', err);
    res.status(500).json({ success: false });
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
    res.status(500).send('Erreur serveur');
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