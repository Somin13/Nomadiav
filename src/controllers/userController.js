import prisma from '../config/prisma.js'

// Affiche le tableau de bord de l'utilisateur
export async function renderUserBoard(req, res) {
  try {
    const destinations = await prisma.destination.findMany({
      orderBy: { continent: 'asc' }
    });

    // Regroupement par continent
    const groupedDestinations = {};
    destinations.forEach(dest => {
      const continent = dest.continent || 'Autres';
      if (!groupedDestinations[continent]) {
        groupedDestinations[continent] = [];
      }
      groupedDestinations[continent].push(dest);
    });

    res.render('userBoard.twig', { groupedDestinations });
  } catch (err) {
    console.error('❌ Erreur récupération destinations :', err);
    res.status(500).render('error.twig', { message: "Erreur serveur" });
  }
}
