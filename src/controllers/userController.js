import prisma from '../config/prisma.js'
import path from 'path'
import fs from 'fs'
import {
  fetchUserProfile,
  updateUserInfo,
  updateUserPassword,
  removeUser,
  setPrivacy,
  setAdventurerType
} from '../services/userService.js'

// ✅ Affiche la page userBoard avec l'utilisateur connecté ET les destinations groupées par continent
export async function renderUserBoard(req, res) {
  try {
    console.log('DEBUG renderUserBoard - req.user:', req.user);
    if (!req.user) {
      console.log('DEBUG renderUserBoard - req.user est undefined !');
    }
    const userId = req.user.id;
    console.log('DEBUG renderUserBoard - userId:', userId);

    // 🔍 Récupère les données utilisateur (nom, voyages, etc.)
    const user = await fetchUserProfile(userId);
    console.log('DEBUG renderUserBoard - user profile:', user);

    // 🌍 Récupère toutes les destinations pour les afficher par continent
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
    console.log('DEBUG renderUserBoard - destinations:', destinations.length);

    // 📦 Regroupe les destinations par continent
    const grouped = {};
    destinations.forEach(dest => {
      const continent = dest.continent || 'Autres';
      if (!grouped[continent]) grouped[continent] = [];
      grouped[continent].push(dest);
    });

    // 🖼️ Rendu de la page avec utilisateur et destinations groupées
    res.render('user/userBoard', {
      user,
      groupedDestinations: grouped
    });

  } catch (err) {
    console.error("❌ Erreur renderUserBoard :", err);
    res.status(500).send("Erreur serveur");
  }
}


// 🧑‍💼 Affiche la page profil
export async function renderUserProfile(req, res) {
  try {
    const userId = req.user.id
    const user = await fetchUserProfile(userId)
    res.render('user/profil', { user })
  } catch (err) {
    console.error("❌ Erreur renderUserProfile :", err)
    res.status(500).send("Erreur serveur")
  }
}

// 📷 Upload avatar
export async function uploadAvatar(req, res) {
  try {
    const file = req.file
    if (!file) {
      return res.status(400).send("Aucun fichier reçu pour l'avatar")
    }

    const avatarPath = '/uploads/' + file.filename
    await updateUserInfo(req.user.id, { avatar: avatarPath })

    res.redirect('/profil')
  } catch (err) {
    console.error("❌ Erreur uploadAvatar :", err)
    res.status(500).send("Erreur upload avatar")
  }
}

// 🖼️ Upload image de couverture
export async function uploadCover(req, res) {
  try {
    const file = req.file
    if (!file) {
      return res.status(400).send("Aucun fichier reçu pour la couverture")
    }

    const coverPath = '/uploads/' + file.filename
    await updateUserInfo(req.user.id, { coverImage: coverPath })

    res.redirect('/profil')
  } catch (err) {
    console.error("❌ Erreur uploadCover :", err)
    res.status(500).send("Erreur upload cover")
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

    // 🧼 Si un champ doit être effacé (ex: clearField=instagram)
    if (req.body.clearField) {
      const fieldToClear = req.body.clearField;

      if (['instagram', 'facebook', 'youtube'].includes(fieldToClear)) {
        await prisma.user.update({
          where: { id: userId },
          data: {
            [fieldToClear]: null
          }
        });
      }

      return res.redirect('/profil');
    }

    // ✅ Traitement normal de mise à jour du profil
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

    res.redirect('/profil');
  } catch (err) {
    console.error("❌ Erreur updateUserProfile :", err);
    res.status(500).send("Erreur lors de la mise à jour du profil");
  }
}


// 🔐 Change le mot de passe
export async function changePassword(req, res) {
  try {
    const { currentPassword, newPassword } = req.body
    await updateUserPassword(req.user.id, currentPassword, newPassword)
    res.redirect('/profil')
  } catch (err) {
    console.error("❌ Erreur changePassword :", err)
    res.status(400).send("Mot de passe incorrect ou erreur")
  }
}

// ❌ Supprime le compte utilisateur
export async function deleteAccount(req, res) {
  try {
    await removeUser(req.user.id)
    res.redirect('/logout')
  } catch (err) {
    console.error("❌ Erreur deleteAccount :", err)
    res.status(500).send("Erreur lors de la suppression")
  }
}

// 👁️ Modifie la visibilité du profil
export async function updatePrivacy(req, res) {
  try {
    const isPublic = req.body.isPublic === 'on'
    await setPrivacy(req.user.id, isPublic)
    res.redirect('/profil')
  } catch (err) {
    console.error("❌ Erreur updatePrivacy :", err)
    res.status(500).send("Erreur mise à jour visibilité")
  }
}

// 🌍 Change le type d'aventurier
export async function updateAdventurerType(req, res) {
  try {
    const type = req.body.type
    await setAdventurerType(req.user.id, type)
    res.redirect('/profil')
  } catch (err) {
    console.error("❌ Erreur updateAdventurerType :", err)
    res.status(500).send("Erreur mise à jour type")
  }
}

// 📁 src/controllers/userController.js
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

    res.redirect('/profil'); // ou un status JSON si tu préfères l'ajax
  } catch (err) {
    console.error('❌ Erreur ajout voyage :', err);
    res.status(500).send("Erreur serveur");
  }
}

