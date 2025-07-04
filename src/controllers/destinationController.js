import prisma from '../config/prisma.js';

// ✅ Affiche une destination complète avec groupedBulletPoints et 2 derniers avis
export async function getDestinationDetails(req, res) {
  const { id } = req.params;
  const userId = req.session.user?.id;

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
                contents: { orderBy: { ordre: 'asc' } }
              }
            },
            bulletPoints: { orderBy: { ordre: 'asc' } }
          }
        }
      }
    });

    if (!destination) {
      req.flash('error', 'Destination non trouvée.');
      return res.redirect('/userBoard');
    }

    // ✅ Vérifie si l'utilisateur a déjà ce voyage
    let alreadyPlanned = false;
    if (userId) {
      const existingChecklist = await prisma.checklist.findFirst({
        where: { userId, voyageId: id }
      });
      alreadyPlanned = !!existingChecklist;
    }

    // --- 2 derniers avis ---
    const lastTwoReviews = await prisma.review.findMany({
      where: { destinationId: id },
      orderBy: { createdAt: 'desc' },
      take: 2,
      include: {
        user: { select: { id: true, nom: true, prenom: true, avatar: true } },
        likes: true,
      }
    });

    const mainImagePath = destination.imagePrincipale?.startsWith('/uploads/')
      ? destination.imagePrincipale
      : '/uploads/' + destination.imagePrincipale;

    res.render('destinations.twig', {
      destination,
      mainImagePath,
      alreadyPlanned,
      lastTwoReviews,
      user: req.session.user,
    });
  } catch (err) {
    console.error('❌ Erreur getDestinationDetails :', err);
    req.flash('error', 'Erreur serveur lors du chargement de la destination.');
    res.redirect('/userBoard');
  }
}

// ✅ Affiche toutes les destinations groupées par continent POUR L'UTILISATEUR CONNECTÉ
export async function getAllDestinationsGrouped(req, res) {
  try {
    const user = req.session.user;
    const userId = user?.id;

    if (!userId) {
      req.flash('error', 'Vous devez être connecté.');
      return res.redirect('/login');
    }

    const destinations = await prisma.destination.findMany({
      orderBy: { continent: 'asc' },
      select: {
        id: true,
        titre: true,
        pays: true,
        continent: true,
        imagePrincipale: true,
        description: true,
      },
    });

    const grouped = {};
    destinations.forEach(dest => {
      const continent = dest.continent || 'Autres';
      if (!grouped[continent]) grouped[continent] = [];
      grouped[continent].push(dest);
    });

    res.render('userBoard.twig', {
      groupedDestinations: grouped,
      user,
    });
  } catch (err) {
    console.error('❌ Erreur récupération destinations :', err);
    req.flash('error', 'Erreur lors du chargement des destinations.');
    res.redirect('/');
  }
}

export function attachUser(req, res, next) {
  if (req.session && req.session.user) {
    req.user = req.session.user;
    res.locals.user = req.session.user;
  }
  next();
}
<<<<<<< Updated upstream
=======

// ✅ Affiche toutes les destinations d’un continent
export async function getContinentDestinations(req, res) {
  const { continent } = req.params;
  const user = req.session.user;

  try {
    const destinations = await prisma.destination.findMany({
      where: { continent },
      orderBy: { titre: 'asc' },
      select: {
        id: true,
        titre: true,
        pays: true,
        continent: true,
        imagePrincipale: true,
        description: true,
      }
    });

    if (!destinations.length) {
      req.flash('info', 'Aucune destination pour ce continent.');
    }

    res.render('continentDestination.twig', {
      continent,
      destinations,
      user
    });
  } catch (err) {
    console.error('❌ Erreur getContinentDestinations :', err);
    req.flash('error', 'Erreur lors du chargement du continent.');
    res.redirect('/userBoard');
  }
}
>>>>>>> Stashed changes
