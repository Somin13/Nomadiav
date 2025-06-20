import prisma from '../config/prisma.js'
import { comparePassword, hashPassword } from '../utils/hash.js'

// 🔍 Récupère l'utilisateur connecté avec ses données utiles
export async function fetchUserProfile(userId) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      voyages: true
    }
  })

  if (!user) throw new Error("Utilisateur introuvable ❌")
  return user
}

// ✏️ Met à jour les infos de base du profil (y compris image)
export async function updateUserInfo(userId, data) {
  await prisma.user.update({
    where: { id: userId },
    data: {
      nom: data.nom,
      prenom: data.prenom,
      bio: data.bio,
      instagram: data.instagram,
      facebook: data.facebook,
      youtube: data.youtube,
      avatar: data.avatar,             // si présent
      coverImage: data.coverImage      // si présent
    }
  })
}

// 🔐 Met à jour le mot de passe après vérification
export async function updateUserPassword(userId, currentPassword, newPassword) {
  const user = await prisma.user.findUnique({ where: { id: userId } })
  if (!user) throw new Error("Utilisateur non trouvé")

  const valid = await comparePassword(currentPassword, user.password)
  if (!valid) throw new Error("Mot de passe actuel incorrect")

  const hashed = await hashPassword(newPassword)

  await prisma.user.update({
    where: { id: userId },
    data: { password: hashed }
  })
}

// ❌ Supprime le compte utilisateur
export async function removeUser(userId) {
  await prisma.user.delete({
    where: { id: userId }
  })
}

// 👁️ Met à jour la visibilité du profil
export async function setPrivacy(userId, isPublic) {
  await prisma.user.update({
    where: { id: userId },
    data: { isPublic }
  })
}

// 🌍 Change le type d’aventurier
export async function setAdventurerType(userId, type) {
  await prisma.user.update({
    where: { id: userId },
    data: { adventurerType: type }
  })
}
