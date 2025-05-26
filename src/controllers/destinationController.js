import prisma from '../config/prisma.js';

export async function renderAdminDashboard(req, res) {
  try {
    const destinations = await prisma.destination.findMany({
      orderBy: { createdAt: 'desc' },
    });

    console.log('📦 Destinations récupérées depuis Prisma :', destinations);

    res.render('admin/dashAdm', { destinations });
  } catch (error) {
    console.error('❌ Erreur récupération destinations :', error);
    res.status(500).send('Erreur serveur');
  }
}