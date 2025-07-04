import prisma from '../config/prisma.js';
import path from 'path';
import fs from 'fs';
import {
  fetchUserProfile,
  updateUserInfo,
  updateUserPassword,
  removeUser,
  setPrivacy,
  setAdventurerType
} from '../services/userService.js';

// Affiche la page userBoard avec l'utilisateur connecté ET les destinations groupées par continent
export async function renderUserBoard(req, res) {
  try {
<<<<<<< Updated upstream
    console.log('DEBUG renderUserBoard - req.user:', req.user);
    if (!req.user) {
      console.log('DEBUG renderUserBoard - req.user est undefined !');
    }
    const userId = req.user.id;
    console.log('DEBUG renderUserBoard - userId:', userId);

    // 🔍 Récupère les données utilisateur (nom, voyages, etc.)
    const user = await fetchUserProfile(userId);
    console.log('DEBUG renderUserBoard - user profile:', user);
=======
    if (!req.user) {
      req.flash('error', 'Veuillez vous connecter pour accéder à votre espace.');
      return res.redirect('/login');
    }
    const userId = req.user.id;
    const user = await fetchUserProfile(userId);
>>>>>>> Stashed changes

    const destinations = await prisma.destination.findMany({
      orderBy: { continent: 'asc' },
      select: {
        id: true,
        titre: true,
        pays: true,
        continent: true,
        imagePrincipale: true,
        description: true
      },
    });
<<<<<<< Updated upstream
    console.log('DEBUG renderUserBoard - destinations:', destinations.length);
=======
>>>>>>> Stashed changes

    const grouped = {};
    destinations.forEach(dest => {
      const continent = dest.continent || 'Autres';
      if (!grouped[continent]) grouped[continent] = [];
      grouped[continent].push(dest);
    });

    res.render('user/userBoard', {
      user,
      groupedDestinations: grouped
    });

  } catch (err) {
    console.error("❌ Erreur renderUserBoard :", err);
    req.flash('error', "Erreur lors du chargement de l'espace utilisateur.");
    res.redirect('/');
  }
}

<<<<<<< Updated upstream

// 🧑‍💼 Affiche la page profil
=======
// Affiche la page profil
>>>>>>> Stashed changes
export async function renderUserProfile(req, res) {
  try {
    const userId = req.user.id;
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        userVoyages: {
          include: { destination: true }
        }
      }
    });
    res.render('user/profil', { user });
  } catch (err) {
    console.error("❌ Erreur renderUserProfile :", err);
    req.flash('error', "Erreur lors du chargement du profil.");
    res.redirect('/userBoard');
  }
}

// Upload avatar
export async function uploadAvatar(req, res) {
  try {
    const file = req.file;
    if (!file) {
      req.flash('error', "Aucun fichier reçu pour l'avatar.");
      return res.redirect('/profil');
    }

    const avatarPath = '/uploads/' + file.filename;
    await updateUserInfo(req.user.id, { avatar: avatarPath });

    req.flash('success', "Avatar mis à jour !");
    res.redirect('/profil');
  } catch (err) {
    console.error("❌ Erreur uploadAvatar :", err);
    req.flash('error', "Erreur lors du changement d'avatar.");
    res.redirect('/profil');
  }
}

// Upload image de couverture
export async function uploadCover(req, res) {
  try {
    const file = req.file;
    if (!file) {
      req.flash('error', "Aucun fichier reçu pour la couverture.");
      return res.redirect('/profil');
    }

    const coverPath = '/uploads/' + file.filename;
    await updateUserInfo(req.user.id, { coverImage: coverPath });

    req.flash('success', "Image de couverture mise à jour !");
    res.redirect('/profil');
  } catch (err) {
    console.error("❌ Erreur uploadCover :", err);
    req.flash('error', "Erreur lors de la mise à jour de la couverture.");
    res.redirect('/profil');
  }
}


// ✏️ Met à jour les infos du profil
// export async function updateUserProfile(req, res) {
//   try {
//     const userId = req.user.id
//     const { nom, prenom, bio, instagram, facebook, youtube } = req.body

//     const avatarFile = req.files?.avatar?.[0]
//     const coverFile = req.files?.coverImage?.[0]

//     const avatar = avatarFile ? '/uploads/' + avatarFile.filename : undefined
//     const coverImage = coverFile ? '/uploads/' + coverFile.filename : undefined

//     await updateUserInfo(userId, {
//       nom,
//       prenom,
//       bio,
//       instagram,
//       facebook,
//       youtube,
//       avatar,
//       coverImage
//     })

//     res.redirect('/profil')
//   } catch (err) {
//     console.error("❌ Erreur updateUserProfile :", err)
//     res.status(400).send("Erreur lors de la mise à jour du profil")
//   }
// }

export async function updateUserProfile(req, res) {
  try {
    const userId = req.user.id;

    if (req.body.clearField) {
      const fieldToClear = req.body.clearField;

      if (['instagram', 'facebook', 'youtube'].includes(fieldToClear)) {
        await prisma.user.update({
          where: { id: userId },
          data: {
            [fieldToClear]: null
          }
        });
        req.flash('success', `Champ ${fieldToClear} supprimé.`);
      }
      return res.redirect('/profil');
    }

    const { prenom, nom, bio, instagram, facebook, youtube } = req.body;

    const avatarFile = req.files?.avatar?.[0];
    const coverFile = req.files?.coverImage?.[0];

    await prisma.user.update({
      where: { id: userId },
      data: {
        prenom,
        nom,
        bio,
        instagram,
        facebook,
        youtube,
        avatar: avatarFile ? '/uploads/' + avatarFile.filename : undefined,
        coverImage: coverFile ? '/uploads/' + coverFile.filename : undefined,
      },
    });

    req.flash('success', "Profil mis à jour !");
    res.redirect('/profil');
  } catch (err) {
    console.error("❌ Erreur updateUserProfile :", err);
    req.flash('error', "Erreur lors de la mise à jour du profil.");
    res.redirect('/profil');
  }
}

// Change le mot de passe
export async function changePassword(req, res) {
  try {
    const { currentPassword, newPassword } = req.body;
    await updateUserPassword(req.user.id, currentPassword, newPassword);
    req.flash('success', "Mot de passe modifié !");
    res.redirect('/profil');
  } catch (err) {
    console.error("❌ Erreur changePassword :", err);
    req.flash('error', "Mot de passe incorrect ou erreur lors du changement.");
    res.redirect('/profil');
  }
}

// Supprime le compte utilisateur
export async function deleteAccount(req, res) {
  try {
    await removeUser(req.user.id);
    req.flash('success', "Votre compte a bien été supprimé.");
    res.redirect('/logout');
  } catch (err) {
    console.error("❌ Erreur deleteAccount :", err);
    req.flash('error', "Erreur lors de la suppression du compte.");
    res.redirect('/profil');
  }
}

// Modifie la visibilité du profil
export async function updatePrivacy(req, res) {
  try {
    const isPublic = req.body.isPublic === 'on';
    await setPrivacy(req.user.id, isPublic);
    req.flash('success', "Visibilité du profil mise à jour.");
    res.redirect('/profil');
  } catch (err) {
    console.error("❌ Erreur updatePrivacy :", err);
    req.flash('error', "Erreur lors de la mise à jour de la visibilité.");
    res.redirect('/profil');
  }
}

// Change le type d'aventurier
export async function updateAdventurerType(req, res) {
  try {
    const type = req.body.type;
    await setAdventurerType(req.user.id, type);
    req.flash('success', "Type d'aventurier modifié !");
    res.redirect('/profil');
  } catch (err) {
    console.error("❌ Erreur updateAdventurerType :", err);
    req.flash('error', "Erreur lors du changement de type.");
    res.redirect('/profil');
  }
}

// Ajoute un voyage à l'utilisateur
export async function addTripToUser(req, res) {
  const userId = req.user.id;
  const destinationId = req.params.destinationId;

  try {
    await prisma.user.update({
      where: { id: userId },
      data: {
        voyages: {
          connect: { id: destinationId }
        }
      }
    });
    req.flash('success', "Voyage ajouté à votre profil !");
    res.redirect('/profil');
  } catch (err) {
    console.error('❌ Erreur ajout voyage :', err);
    req.flash('error', "Erreur lors de l'ajout du voyage.");
    res.redirect('/profil');
  }
}

// Ajoute un UserVoyage (relation pivot) + toast déjà existant
export async function addVoyageToUser(req, res) {
  const userId = req.user.id;
  const destinationId = req.params.destinationId;

  try {
    await prisma.userVoyage.create({
      data: {
        userId,
        destinationId,
      }
    });
    req.flash('success', "Voyage ajouté à votre profil !");
    res.redirect('/profil');
  } catch (err) {
    if (err.code === 'P2002') {
      req.flash('info', "Ce voyage est déjà dans votre profil.");
      res.redirect('/profil');
    } else {
      console.error('Erreur ajout voyage:', err);
      req.flash('error', "Erreur lors de l'ajout du voyage.");
      res.redirect('/profil');
    }
  }
}

// Ajoute voyage + checklist (relation pivot + création checklist)
export async function addVoyageAndChecklist(req, res) {
  const userId = req.user.id;
  const destinationId = req.params.destinationId;

  try {
    await prisma.userVoyage.create({
      data: {
        userId,
        destinationId,
      }
    });
  } catch (err) {
    if (err.code !== 'P2002') {
      console.error('Erreur ajout voyage:', err);
      req.flash('error', "Erreur lors de l'ajout du voyage.");
      return res.redirect('/profil');
    }
  }

  try {
    let checklist = await prisma.checklist.findFirst({
      where: { userId, voyageId: destinationId }
    });
    if (!checklist) {
      checklist = await prisma.checklist.create({
        data: {
          titre: `Check-list pour ce voyage`,
          user: { connect: { id: userId } },
          voyage: { connect: { id: destinationId } },
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
    req.flash('success', "Voyage et check-list ajoutés à votre profil !");
    res.redirect('/profil');
  } catch (err) {
    console.error('Erreur création checklist:', err);
    req.flash('error', "Erreur lors de la création de la check-list.");
    res.redirect('/profil');
  }
}
