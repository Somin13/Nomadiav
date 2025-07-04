import prisma from '../config/prisma.js';

// ✅ Affiche le formulaire
export function renderAddDestination(req, res) {
  res.render('admin/addDestination');
}

<<<<<<< Updated upstream
// ✅ Traite l’ajout complet d’une destination
export async function handleAddDestination(req, res) {
  try {
    const { titre, pays, continent, description } = req.body;

=======
// Ajout complet d'une destination + notifications à tous les users (sauf admin)
export async function handleAddDestination(req, res) {
  try {
    const { titre, pays, continent, description } = req.body;
>>>>>>> Stashed changes
    const imagePrincipaleFile = req.files.find(f => f.fieldname === 'imagePrincipale');
    const imagePrincipale = imagePrincipaleFile ? '/uploads/' + imagePrincipaleFile.filename : null;

    const destination = await prisma.destination.create({
      data: { titre, pays, continent, description, imagePrincipale },
    });

<<<<<<< Updated upstream
=======
    // 2️⃣ NOTIFICATION "nouvelle_destination" envoyée à tous les utilisateurs sauf l'admin qui ajoute
    const adminId = req.user?.id || req.session.user?.id;
    const allUsers = await prisma.user.findMany({ where: { id: { not: adminId } } });
    const notificationsData = allUsers.map(user => ({
      type: 'nouvelle_destination',
      userId: user.id,
      fromUserId: adminId,
      destinationId: destination.id,
    }));
    if (notificationsData.length > 0) {
      await prisma.notification.createMany({ data: notificationsData });
    }

    // 3️⃣ Traitement des sections, bullet points, groupes, images
>>>>>>> Stashed changes
    const parseField = (field) => {
      try { return typeof field === 'string' ? JSON.parse(field) : field; }
      catch { return field; }
    };
    const sectionsRaw = req.body.sections || [];
    const sections = Array.isArray(sectionsRaw)
      ? sectionsRaw.map(parseField)
      : [parseField(sectionsRaw)];
<<<<<<< Updated upstream

    // ✅ Enum Prisma : Types valides
=======
>>>>>>> Stashed changes
    const allowedTypes = ['GUIDE', 'PRESENTATION', 'ACCES', 'FORMALITES', 'CONSEILS', 'POURQUOI'];

    for (let i = 0; i < sections.length; i++) {
      const sectionData = sections[i];

      const formattedType = (sectionData.type || 'GUIDE').toUpperCase();
      const finalType = allowedTypes.includes(formattedType) ? formattedType : 'GUIDE';

<<<<<<< Updated upstream
      // ✅ Création section
=======
>>>>>>> Stashed changes
      const newSection = await prisma.section.create({
        data: {
          titre: sectionData.titre,
          contenu: sectionData.contenu || '',
          ordre: i,
          type: finalType,
          destinationId: destination.id,
        },
      });

      // ✅ Bullet points simples
      const bulletPoints = sectionData.bulletPoints || [];
      for (let b = 0; b < bulletPoints.length; b++) {
        await prisma.bulletPoint.create({
          data: {
            contenu: bulletPoints[b],
            ordre: b,
            sectionId: newSection.id,
          },
        });
      }

      // ✅ Groupes de bullet points
      const groups = sectionData.groups || [];
      for (let j = 0; j < groups.length; j++) {
        const group = await prisma.groupedBulletPoint.create({
          data: {
            titre: groups[j].titre,
            ordre: j,
            sectionId: newSection.id,
          },
        });
        const contents = groups[j].contenus || [];
        for (let k = 0; k < contents.length; k++) {
          await prisma.bulletPointContent.create({
            data: {
              contenu: contents[k],
              ordre: k,
              groupId: group.id,
            },
          });
        }
      }

      // ✅ Images
      const imageFiles = req.files.filter(file => file.fieldname === `sections[${i}][images][]`);
      for (const img of imageFiles) {
        await prisma.image.create({
          data: {
            url: '/uploads/' + img.filename,
            sectionId: newSection.id,
          },
        });
      }
    }

<<<<<<< Updated upstream
=======
    req.flash('success', 'Destination ajoutée avec succès !'); // ✅
>>>>>>> Stashed changes
    res.redirect('/dashAdm');
  } catch (err) {
    console.error('❌ Erreur lors de l’ajout complet de la destination :', err);
    req.flash('error', "Erreur lors de l’ajout de la destination.");
    res.redirect('/dashAdm');
  }
}

<<<<<<< Updated upstream



=======
>>>>>>> Stashed changes
// ✅ Contrôleur : Affiche une destination complète pour l'utilisateur
export async function getDestinationById(req, res) {
  const id = req.params.id;

  try {
    const destination = await prisma.destination.findUnique({
      where: { id },
      include: {
        sections: {
          orderBy: { ordre: 'asc' },
          include: {
            images: true,
            groupedPoints: {
              orderBy: { ordre: 'asc' },
              include: { contents: { orderBy: { ordre: 'asc' } } }
            },
            bulletPoints: { orderBy: { ordre: 'asc' } }
          }
        }
      }
    });

    if (!destination) {
      req.flash('error', 'Destination introuvable.');
      return res.redirect('/dashAdm');
    }

    const mainImagePath = destination.imagePrincipale?.startsWith('/uploads/')
      ? destination.imagePrincipale
      : '/uploads/' + destination.imagePrincipale;

    res.render('destination.twig', {
      destination,
      mainImagePath,
    });
  } catch (err) {
    console.error('❌ Erreur affichage destination :', err);
    req.flash('error', 'Erreur lors de l\'affichage de la destination.');
    res.redirect('/dashAdm');
  }
}

// ✅ Affiche toutes les destinations + nombre utilisateurs
export async function showAllDestinations(req, res) {
  try {
    const destinations = await prisma.destination.findMany({
      orderBy: { createdAt: 'desc' },
<<<<<<< Updated upstream
=======
      include: { _count: { select: { reviews: true } } }
>>>>>>> Stashed changes
    });
    const userCount = await prisma.user.count();
    res.render('dashAdm', { destinations, userCount });
  } catch (err) {
    console.error('❌ Erreur récupération dashboard admin :', err);
    req.flash('error', 'Erreur lors du chargement des destinations.');
    res.redirect('/dashAdm');
  }
}

// ✅ Supprime une destination avec toutes ses données liées
export async function deleteDestination(req, res) {
  const id = req.params.id;
  try {
    const sections = await prisma.section.findMany({
      where: { destinationId: id },
      select: { id: true }
    });
    const sectionIds = sections.map(s => s.id);
    const groups = await prisma.groupedBulletPoint.findMany({
      where: { sectionId: { in: sectionIds } },
      select: { id: true }
    });
    const groupIds = groups.map(g => g.id);

    await prisma.bulletPointContent.deleteMany({ where: { groupId: { in: groupIds } } });
    await prisma.groupedBulletPoint.deleteMany({ where: { sectionId: { in: sectionIds } } });
    await prisma.bulletPoint.deleteMany({ where: { sectionId: { in: sectionIds } } });
    await prisma.image.deleteMany({ where: { sectionId: { in: sectionIds } } });
    await prisma.section.deleteMany({ where: { destinationId: id } });
    await prisma.destination.delete({ where: { id } });

    req.flash('success', 'Destination supprimée avec succès !');
    res.redirect('/dashAdm');
  } catch (error) {
    console.error('❌ Erreur suppression destination :', error);
    req.flash('error', 'Erreur lors de la suppression de la destination.');
    res.redirect('/dashAdm');
  }
}

// ✅ Affiche le formulaire de modification avec toutes les données liées
export async function renderEditDestination(req, res) {
  const id = req.params.id;
  try {
    const destination = await prisma.destination.findUnique({
      where: { id },
      include: {
        sections: {
          include: {
            images: true,
            groupedPoints: { include: { contents: true } }
          }
        }
      }
    });

    if (!destination) {
      req.flash('error', 'Destination introuvable.');
      return res.redirect('/dashAdm');
    }
    res.render('admin/editDestination', { destination });
  } catch (err) {
    console.error('❌ Erreur récupération destination :', err);
    req.flash('error', 'Erreur lors de la récupération de la destination.');
    res.redirect('/dashAdm');
  }
}

// ✅ Traite la mise à jour d'une destination
export async function handleEditDestination(req, res) {
  const id = req.params.id;
  try {
    const { titre, pays, continent, description, deleted = {} } = req.body;
    const imagePrincipaleFile = req.files?.find(f => f.fieldname === 'imagePrincipale');
    const imagePrincipale = imagePrincipaleFile ? '/uploads/' + imagePrincipaleFile.filename : null;

    // Mise à jour de la destination
    const updateData = { titre, pays, continent, description };
    if (imagePrincipale) updateData.imagePrincipale = imagePrincipale;
    await prisma.destination.update({ where: { id }, data: updateData });

    // Sécurise les champs deleted
    const forceArray = (data) => { if (!data) return []; return Array.isArray(data) ? data : [data]; };
    const deletedSections = forceArray(deleted.deletedSections);
    const deletedGroups = forceArray(deleted.deletedGroups);
    const deletedBulletPoints = forceArray(deleted.deletedBulletPoints);
    const deletedImages = forceArray(deletedImages);

    if (deletedSections.length)
      await prisma.section.deleteMany({ where: { id: { in: deletedSections } } });
    if (deletedGroups.length)
      await prisma.groupedBulletPoint.deleteMany({ where: { id: { in: deletedGroups } } });
    if (deletedBulletPoints.length)
      await prisma.bulletPointContent.deleteMany({ where: { id: { in: deletedBulletPoints } } });
    if (deletedImages.length)
      await prisma.image.deleteMany({ where: { id: { in: deletedImages } } });

    // Traitement des sections restantes
    const sectionsRaw = req.body.sections || [];
    const sections = Array.isArray(sectionsRaw) ? sectionsRaw : Object.values(sectionsRaw);

    for (let i = 0; i < sections.length; i++) {
      const sectionData = sections[i];
      let section;

      if (sectionData.id) {
        section = await prisma.section.update({
          where: { id: sectionData.id },
          data: {
            titre: sectionData.titre,
            contenu: sectionData.contenu || '',
            ordre: i,
            type: sectionData.type || 'Autre',
          },
        });
      } else {
        section = await prisma.section.create({
          data: {
            titre: sectionData.titre,
            contenu: sectionData.contenu || '',
            ordre: i,
            type: sectionData.type || 'Autre',
            destinationId: id,
          },
        });
      }

      // Traitement des groupes
      const groups = sectionData.groups || [];
      for (let j = 0; j < groups.length; j++) {
        let groupId;
        if (groups[j].id) {
          await prisma.groupedBulletPoint.update({
            where: { id: groups[j].id },
            data: { titre: groups[j].titre, ordre: j },
          });
          await prisma.bulletPointContent.deleteMany({
            where: { groupId: groups[j].id },
          });
          groupId = groups[j].id;
        } else {
          const group = await prisma.groupedBulletPoint.create({
            data: {
              titre: groups[j].titre,
              ordre: j,
              sectionId: section.id,
            },
          });
          groupId = group.id;
        }

        // Ajout des bullet points
        const contents = groups[j].contenus || [];
        for (let k = 0; k < contents.length; k++) {
          await prisma.bulletPointContent.create({
            data: {
              contenu: contents[k],
              ordre: k,
              groupId,
            },
          });
        }
      }

      // Ajout des nouvelles images (si existantes)
      const imageFiles = req.files?.filter(file => file.fieldname === `sections[${i}][images][]`) || [];
      for (const img of imageFiles) {
        await prisma.image.create({
          data: {
            url: '/uploads/' + img.filename,
            sectionId: section.id,
          },
        });
      }
    }

    req.flash('success', 'Destination modifiée avec succès !');
    res.redirect('/dashAdm');
  } catch (err) {
    console.error('❌ Erreur mise à jour destination :', err);
    req.flash('error', 'Erreur lors de la mise à jour de la destination.');
    res.redirect('/dashAdm');
  }
}
