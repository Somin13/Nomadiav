import prisma from '../config/prisma.js'; // ✅ À ne déclarer qu'une seule fois

// Affiche la vue du formulaire d'ajout
export function renderAddDestination(req, res) {
  res.render('admin/addDestination');
}

// src/controllers/destinationController.js

import path from 'path';

// 🧠 Contrôleur pour traiter l’ajout d’une nouvelle destination
export async function handleAddDestination(req, res) {
  try {
    const { titre, pays, continent, description } = req.body;

    // ✅ Trouve l'image principale
    const imagePrincipaleFile = req.files.find(f => f.fieldname === 'imagePrincipale');
    const imagePrincipale = imagePrincipaleFile ? '/uploads/' + imagePrincipaleFile.filename : null;

    // ✅ Création de la destination principale
    const destination = await prisma.destination.create({
      data: {
        titre,
        pays,
        continent,
        description,
        imagePrincipale,
      },
    });

    // ✅ Traitement des sections dynamiques
    const sectionsRaw = req.body.sections || [];

    // ⚠️ Si une seule section, ce sera un objet, sinon tableau
    const sections = Array.isArray(sectionsRaw) ? sectionsRaw : Object.values(sectionsRaw);

    for (let i = 0; i < sections.length; i++) {
      const sectionData = sections[i];

      // 🔁 1. Création de la section
      const newSection = await prisma.section.create({
        data: {
          titre: sectionData.titre,
          contenu: Array.isArray(sectionData.contenus)
            ? sectionData.contenus.join('\n')
            : sectionData.contenus || '',
          ordre: i,
          type: sectionData.type,
          destinationId: destination.id,
        },
      });

      // 🔁 2. Insertion des bullet points
      if (Array.isArray(sectionData.contenus)) {
        for (let j = 0; j < sectionData.contenus.length; j++) {
          await prisma.bulletPoint.create({
            data: {
              contenu: sectionData.contenus[j],
              ordre: j,
              sectionId: newSection.id,
            },
          });
        }
      }

      // 📸 3. Insertion des images liées à cette section
      const imageFiles = req.files.filter(file =>
        file.fieldname === `sections[${i}][images][]`
      );

      for (const img of imageFiles) {
        await prisma.image.create({
          data: {
            url: '/uploads/' + img.filename,
            sectionId: newSection.id,
          },
        });
      }
    }

    // ✅ Redirection après succès
    res.redirect('/dashAdm');
  } catch (err) {
    console.error('❌ Erreur lors de l’ajout complet de la destination :', err);
    res.status(500).send("Erreur lors de l’ajout de la destination");
  }
}


// ✅ Affiche toutes les destinations + nombre utilisateurs
export async function showAllDestinations(req, res) {
  try {
    const destinations = await prisma.destination.findMany({
      orderBy: { createdAt: 'desc' }, // optionnel : trie par date
    });

    const userCount = await prisma.user.count(); // ✅ récupération du total users

    res.render('dashAdm', {
      destinations,
      userCount,
    });
  } catch (err) {
    console.error('❌ Erreur récupération dashboard admin :', err);
    res.status(500).send('Erreur serveur');
  }
}

// Supprime une destination par ID
export async function deleteDestination(req, res) {
  try {
    await prisma.destination.delete({
      where: {
        id: req.params.id,
      },
    });

    res.redirect('/dashAdm');
  } catch (error) {
    console.error('❌ Erreur suppression destination :', error);
    res.status(500).send('Erreur lors de la suppression');
  }
}

// Affiche le formulaire de modification
export async function renderEditDestination(req, res) {
  const id = req.params.id;

  try {
    const destination = await prisma.destination.findUnique({
      where: { id },
    });

    if (!destination) {
      return res.status(404).send('Destination introuvable');
    }

    res.render('admin/editDestination', { destination });
  } catch (err) {
    console.error('❌ Erreur récupération destination :', err);
    res.status(500).send('Erreur serveur');
  }
}

// Traite la mise à jour d'une destination
export async function handleEditDestination(req, res) {
  const id = req.params.id;

  const { titre, pays, continent, description } = req.body;

  // 🔍 Recherche de la nouvelle image principale si elle a été uploadée
  const imagePrincipaleFile = req.files?.find(f => f.fieldname === 'imagePrincipale');
  const imagePrincipale = imagePrincipaleFile ? '/uploads/' + imagePrincipaleFile.filename : null;

  try {
    // ✅ Mise à jour de la destination principale
    const updateData = {
      titre,
      pays,
      continent,
      description,
    };

    if (imagePrincipale) {
      updateData.imagePrincipale = imagePrincipale;
    }

    await prisma.destination.update({
      where: { id },
      data: updateData,
    });

    // ✅ Récupération des sections envoyées depuis le formulaire
    const sectionsRaw = req.body.sections || [];
    const sections = Array.isArray(sectionsRaw) ? sectionsRaw : Object.values(sectionsRaw);

    for (let i = 0; i < sections.length; i++) {
      const sectionData = sections[i];
      const sectionId = sectionData.id || null;

      let section;

      if (sectionId) {
        // 🟢 Mise à jour de la section existante
        section = await prisma.section.update({
          where: { id: sectionId },
          data: {
            titre: sectionData.titre,
            contenu: Array.isArray(sectionData.contenus)
              ? sectionData.contenus.join('\n')
              : sectionData.contenus || '',
            ordre: i,
            type: sectionData.type,
          },
        });
      } else {
        // ➕ Création d'une nouvelle section
        section = await prisma.section.create({
          data: {
            titre: sectionData.titre,
            contenu: Array.isArray(sectionData.contenus)
              ? sectionData.contenus.join('\n')
              : sectionData.contenus || '',
            ordre: i,
            type: sectionData.type,
            destinationId: id,
          },
        });
      }

      // ➕ Ajout des nouveaux bullet points (contenus)
      if (Array.isArray(sectionData.contenus)) {
        for (let j = 0; j < sectionData.contenus.length; j++) {
          await prisma.bulletPoint.create({
            data: {
              contenu: sectionData.contenus[j],
              ordre: j,
              sectionId: section.id,
            },
          });
        }
      }

      // 📸 Ajout des nouvelles images (sans supprimer les anciennes)
      const imagesFiles = req.files?.filter(file =>
        file.fieldname === `sections[${i}][images][]`
      );

      for (const file of imagesFiles) {
        await prisma.image.create({
          data: {
            url: '/uploads/' + file.filename,
            sectionId: section.id,
          },
        });
      }
    }

    // ✅ Redirection après succès
    res.redirect('/dashAdm');
  } catch (err) {
    console.error('❌ Erreur mise à jour non destructive :', err);
    res.status(500).send('Erreur lors de la mise à jour');
  }
}


