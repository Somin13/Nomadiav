import prisma from '../config/prisma.js'; // ✅ À ne déclarer qu'une seule fois

// Affiche la vue du formulaire d'ajout
export function renderAddDestination(req, res) {
  res.render('admin/addDestination');
}


// Contrôleur pour traiter l’ajout complet
export async function handleAddDestination(req, res) {
  try {
    const { titre, pays, continent, description } = req.body;

    const imagePrincipaleFile = req.files.find(f => f.fieldname === 'imagePrincipale');
    const imagePrincipale = imagePrincipaleFile ? '/uploads/' + imagePrincipaleFile.filename : null;

    const destination = await prisma.destination.create({
      data: {
        titre,
        pays,
        continent,
        description,
        imagePrincipale,
      },
    });

    const sectionsRaw = req.body.sections || [];
    const sections = Array.isArray(sectionsRaw) ? sectionsRaw : Object.values(sectionsRaw);

    for (let i = 0; i < sections.length; i++) {
      const sectionData = sections[i];

      const newSection = await prisma.section.create({
        data: {
          titre: sectionData.titre,
          contenu: Array.isArray(sectionData.contenus)
            ? sectionData.contenus.join('\n')
            : sectionData.contenus || '',
          ordre: i,
          type: sectionData.type || 'Autre',
          destinationId: destination.id,
        },
      });

      // Bullet points
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

      // Images
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

      // Sous-sections
      const subsectionsRaw = sectionData.subsections || [];
      const subsections = Array.isArray(subsectionsRaw) ? subsectionsRaw : Object.values(subsectionsRaw);

      for (let k = 0; k < subsections.length; k++) {
        const sub = subsections[k];

        const newSubsection = await prisma.subsection.create({
          data: {
            titre: sub.titre,
            ordre: k,
            sectionId: newSection.id,
          },
        });

        const subContents = Array.isArray(sub.contents) ? sub.contents : Object.values(sub.contents || {});
        for (let l = 0; l < subContents.length; l++) {
          await prisma.subsectionContent.create({
            data: {
              contenu: subContents[l],
              ordre: l,
              subsectionId: newSubsection.id,
            },
          });
        }
      }
    }

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
  const id = req.params.id;

  try {
    // 1️⃣ Récupère toutes les sections liées à la destination
    const sections = await prisma.section.findMany({
      where: { destinationId: id },
      select: { id: true }
    });

    const sectionIds = sections.map(sec => sec.id);

    // 2️⃣ Récupère toutes les sous-sections liées à ces sections
    const subsections = await prisma.subsection.findMany({
      where: { sectionId: { in: sectionIds } },
      select: { id: true }
    });

    const subsectionIds = subsections.map(s => s.id);

    // 🧽 Supprime les contenus des sous-sections
    await prisma.subsectionContent.deleteMany({
      where: { subsectionId: { in: subsectionIds } }
    });

    // 🧽 Supprime les sous-sections
    await prisma.subsection.deleteMany({
      where: { sectionId: { in: sectionIds } }
    });

    // 🧽 Supprime les bullet points
    await prisma.bulletPoint.deleteMany({
      where: { sectionId: { in: sectionIds } }
    });

    // 🧽 Supprime les images
    await prisma.image.deleteMany({
      where: { sectionId: { in: sectionIds } }
    });

    // 🧽 Supprime les sections
    await prisma.section.deleteMany({
      where: { destinationId: id }
    });

    // 🧽 Supprime la destination
    await prisma.destination.delete({
      where: { id }
    });

    res.redirect('/dashAdm');
  } catch (error) {
    console.error('❌ Erreur suppression destination :', error);
    res.status(500).send('Erreur lors de la suppression');
  }
}


// ✅ Contrôleur : Affiche le formulaire de modification avec toutes les données liées
export async function renderEditDestination(req, res) {
  const id = req.params.id;

  try {
    const destination = await prisma.destination.findUnique({
      where: { id },
      include: {
        sections: {
          include: {
            bulletPoints: true,              // 🔁 Récupère les bullet points
            images: true,                    // 🖼️ Récupère les images de section
            subsections: {
              include: {
                contents: true              // 🧾 Récupère les contenus des sous-sections
              }
            }
          }
        }
      }
    });

    if (!destination) {
      return res.status(404).send('Destination introuvable');
    }

    // ✅ Rendu avec les données complètes
    res.render('admin/editDestination', { destination });
  } catch (err) {
    console.error('❌ Erreur récupération destination :', err);
    res.status(500).send('Erreur serveur');
  }
}



// Affiche le formulaire de modification
// export async function renderEditDestination(req, res) {
//   const id = req.params.id;

//   try {
//     const destination = await prisma.destination.findUnique({
//       where: { id },
//     });

//     if (!destination) {
//       return res.status(404).send('Destination introuvable');
//     }

//     res.render('admin/editDestination', { destination });
//   } catch (err) {
//     console.error('❌ Erreur récupération destination :', err);
//     res.status(500).send('Erreur serveur');
//   }
// }

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


// // ✅ Contrôleur : Affiche une destination complète pour l'utilisateur
// export async function getDestinationById(req, res) {
//   const id = req.params.id;

//   try {
//     const destination = await prisma.destination.findUnique({
//       where: { id },
//       include: {
//         sections: {
//           orderBy: { ordre: 'asc' },
//           include: {
//             bulletPoints: { orderBy: { ordre: 'asc' } },
//             images: true,
//             subsections: {
//               orderBy: { ordre: 'asc' },
//               include: {
//                 contents: { orderBy: { ordre: 'asc' } }
//               }
//             }
//           }
//         }
//       }
//     });

//     if (!destination) {
//       return res.status(404).render('error.twig', { message: 'Destination introuvable' });
//     }

//     const mainImagePath = destination.imagePrincipale?.startsWith('/uploads/')
//       ? destination.imagePrincipale
//       : '/uploads/' + destination.imagePrincipale;

//     res.render('destination.twig', {
//       destination,
//       mainImagePath,
//     });
//   } catch (err) {
//     console.error('❌ Erreur affichage destination :', err);
//     res.status(500).render('error.twig', { message: 'Erreur serveur' });
//   }
// }

// src/controllers/destinationAdminController.js

export async function getDestinationById(req, res) {
  const id = req.params.id;

  try {
    const destination = await prisma.destination.findUnique({
      where: { id },
      include: {
        sections: {
          orderBy: { ordre: 'asc' },
          include: {
            bulletPoints: { orderBy: { ordre: 'asc' } },
            images: true,
            subsections: {
              orderBy: { ordre: 'asc' },
              include: {
                contents: { orderBy: { ordre: 'asc' } }
              }
            }
          }
        }
      }
    });

    if (!destination) {
      return res.status(404).render('error.twig', { message: 'Destination introuvable' });
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
    res.status(500).render('error.twig', { message: 'Erreur serveur' });
  }
}
