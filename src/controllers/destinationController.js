import prisma from '../config/prisma.js'

// ✅ Affiche une destination complète avec groupedBulletPoints
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
      const existingVoyage = await prisma.voyage.findFirst({
        where: {
          userId: userId,
          destinationId: id,
        }
      });

      alreadyPlanned = !!existingVoyage;
    }

    const mainImagePath = destination.imagePrincipale?.startsWith('/uploads/')
      ? destination.imagePrincipale
      : '/uploads/' + destination.imagePrincipale;

    // ✅ On passe les infos à la vue
    res.render('destinations.twig', {
      destination,
      mainImagePath,
      alreadyPlanned,
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
    const userId = req.session.user?.id
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
      user: req.session.user,
    })
  } catch (err) {
    console.error('❌ Erreur récupération destinations :', err)
    res.status(500).render('error.twig', { message: 'Erreur serveur' })
  }
}
