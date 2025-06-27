import prisma from '../config/prisma.js'

// ✅ Affiche une destination complète avec groupedBulletPoints et 2 derniers avis
export async function getDestinationDetails(req, res) {
  const { id } = req.params;
  const userId = req.session.user?.id; // 🔐 Récupère l'utilisateur connecté

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
              include: {
                contents: {
                  orderBy: { ordre: 'asc' }
                }
              }
            },
            bulletPoints: {
              orderBy: { ordre: 'asc' }
            }
          }
        }
      }
    });

    if (!destination) {
      return res.status(404).render('404.twig', { message: 'Destination non trouvée' });
    }

    // ✅ Vérifie si l'utilisateur a déjà ce voyage
    let alreadyPlanned = false;

    if (userId) {
      // Il n'y a pas de modèle Voyage, on vérifie via Checklist
      const existingChecklist = await prisma.checklist.findFirst({
        where: {
          userId: userId,
          voyageId: id,
        }
      });

      alreadyPlanned = !!existingChecklist;
    }

    // --- NOUVEAU : récupère les 2 derniers avis ---
    const lastTwoReviews = await prisma.review.findMany({
      where: { destinationId: id },
      orderBy: { createdAt: 'desc' },
      take: 2,
      include: {
        user: {
          select: { id: true, nom: true, prenom: true, avatar: true }
        },
        likes: true,
      }
    });

    const mainImagePath = destination.imagePrincipale?.startsWith('/uploads/')
      ? destination.imagePrincipale
      : '/uploads/' + destination.imagePrincipale;

      
    // ✅ On passe les infos à la vue, y compris les 2 derniers avis
    console.log('DEBUG user dans controller:', req.session.user);
    res.render('destinations.twig', {
      destination,
      mainImagePath,
      alreadyPlanned,
      lastTwoReviews,  // <-- Ajouté ici
      user: req.session.user,
    });
  } catch (err) {
    console.error('❌ Erreur getDestinationDetails :', err);
    res.status(500).render('error.twig', { message: 'Erreur serveur' });
  }
}



// ✅ Affiche toutes les destinations groupées par continent POUR L'UTILISATEUR CONNECTÉ
export async function getAllDestinationsGrouped(req, res) {
  try {
    const user = req.session.user; // Récupère l'utilisateur connecté
    const userId = user?.id;
    console.log('🧪 Rendering userBoard.twig avec groupedDestinations')

    if (!userId) {
      return res.status(401).render('error.twig', { message: 'Non autorisé' })
    }

    const destinations = await prisma.destination.findMany({
      orderBy: { continent: 'asc' },
      select: {
        id: true,
        titre: true,
        pays: true,
        continent: true,
        imagePrincipale: true,
      },
    })

    const grouped = {}

    destinations.forEach(dest => {
      const continent = dest.continent || 'Autres'
      if (!grouped[continent]) grouped[continent] = []
      grouped[continent].push(dest)
    })

    res.render('userBoard.twig', {
      groupedDestinations: grouped,
      user, // Passe l'utilisateur à la vue
    })
  } catch (err) {
    console.error('❌ Erreur récupération destinations :', err)
    res.status(500).render('error.twig', { message: 'Erreur serveur' })
  }
}

export function attachUser(req, res, next) {
  if (req.session && req.session.user) {
    req.user = req.session.user;
    res.locals.user = req.session.user; // utile dans les vues Twig
  }
  next();
}
