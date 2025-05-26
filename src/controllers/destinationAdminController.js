import prisma from '../config/prisma.js'; // ✅ À ne déclarer qu'une seule fois

// Affiche la vue du formulaire d'ajout
export function renderAddDestination(req, res) {
  res.render('admin/addDestination');
}

// Traite l'ajout d'une nouvelle destination
export async function handleAddDestination(req, res) {
  const { titre, pays, description } = req.body;
  const image = req.file ? '/uploads/' + req.file.filename : null;

  await prisma.destination.create({
    data: {
      titre,
      pays,
      description,
      imagePrincipale: image,
    },
  });

  res.redirect('/dashAdm');
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
  const { titre, pays, description } = req.body;
  const image = req.file ? '/uploads/' + req.file.filename : null;

  try {
    const updateData = {
      titre,
      pays,
      description,
    };

    if (image) {
      updateData.imagePrincipale = image;
    }

    await prisma.destination.update({
      where: { id },
      data: updateData,
    });

    res.redirect('/dashAdm');
  } catch (err) {
    console.error('❌ Erreur mise à jour :', err);
    res.status(500).send('Erreur lors de la mise à jour');
  }
}



// import prisma from '../config/prisma.js';

// export function renderAddDestination(req, res) {
//   res.render('admin/addDestination'); // le fichier Twig qu’on crée ensuite
// }

// export async function handleAddDestination(req, res) {
//   const { titre, pays, description } = req.body;
//   const image = req.file ? '/uploads/' + req.file.filename : null;

// //   if (!titre || !pays || !description || !image) {
// //     return res.status(400).send('Tous les champs sont obligatoires.');
// //   }

//   await prisma.destination.create({
//     data: {
//       titre,
//       pays,
//       description,
//       imagePrincipale: image
//     }
//   });

//   res.redirect('/dashAdm');
// }


// export async function showAllDestinations(req, res) {
//   try {
//     const destinations = await prisma.destination.findMany();
//     const userCount = await prisma.user.count(); //  nombre d'utilisateurs

//     res.render('dashAdm', {
//       destinations,
//       userCount // on passe la variable à la vue
//     });
//   } catch (err) {
//     console.error(' Erreur récupération dashboard admin :', err);
//     res.status(500).send('Erreur serveur');
//   }
// }



// export async function deleteDestination(req, res) {
//   try {
//     await prisma.destination.delete({
//       where: { id: req.params.id },
//     });
//     res.redirect('/dashAdm');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Erreur lors de la suppression');
//   }
// }

// export async function renderEditDestination(req, res) {
//   const id = req.params.id;

//   try {
//     const destination = await prisma.destination.findUnique({ where: { id } });

//     if (!destination) {
//       return res.status(404).send('Destination introuvable');
//     }

//     res.render('admin/editDestination', { destination }); 
//   } catch (err) {
//     console.error(' Erreur récupération destination :', err);
//     res.status(500).send('Erreur serveur');
//   }
// }

// export async function handleEditDestination(req, res) {
//   const id = req.params.id;
//   const { titre, pays, description } = req.body;
//   const image = req.file ? '/uploads/' + req.file.filename : null;

//   try {
//     // Construction de l'objet data dynamique
//     const updateData = {
//       titre,
//       pays,
//       description
//     };

//     if (image) {
//       updateData.imagePrincipale = image;
//     }

//     await prisma.destination.update({
//       where: { id },
//       data: updateData,
//     });

//     res.redirect('/dashAdm');
//   } catch (err) {
//     console.error(' Erreur mise à jour :', err);
//     res.status(500).send('Erreur lors de la mise à jour');
//   }
// }

