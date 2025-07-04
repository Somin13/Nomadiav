import prisma from "../config/prisma.js";

// 1. Récupérer les derniers avis d'une destination (API)
// (ne nécessite pas de flash car c'est de l'API pur, tu peux garder tel quel si tu veux)
export async function getRecentReviews(req, res) {
  const { destinationId } = req.params;
  const limit = parseInt(req.query.limit) || 3;

  try {
    const reviews = await prisma.review.findMany({
      where: { destinationId },
      orderBy: { createdAt: "desc" },
      take: limit,
      include: {
        user: { select: { id: true, nom: true, prenom: true, avatar: true } },
        likes: true
      }
    });
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur lors de la récupération des avis" });
  }
}

// 2. Récupérer tous les avis d'une destination (API)
// (pareil, pure API)
export async function getAllReviews(req, res) {
  const { destinationId } = req.params;
  try {
    const reviews = await prisma.review.findMany({
      where: { destinationId },
      orderBy: { createdAt: "desc" },
      include: {
        user: { select: { id: true, nom: true, prenom: true, avatar: true } },
        likes: true
      }
    });
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur lors de la récupération des avis" });
  }
}

<<<<<<< Updated upstream

// Liker ou retirer le like d'un avis
export async function toggleLikeReview(req, res) {
  const userId = req.session.user?.id;
=======
// 3. Liker ou retirer le like d'un avis (AJAX/JSON uniquement, donc pas de flash ici)
export async function toggleLikeReview(req, res) {
  const userId = req.session.user?.id || req.user?.id;
>>>>>>> Stashed changes
  const { reviewId } = req.params;

  if (!userId) {
    return res.status(401).json({ message: "Non autorisé" });
  }

  try {
    const review = await prisma.review.findUnique({ where: { id: reviewId } });

    if (!review) {
      return res.status(404).json({ message: "Avis non trouvé" });
    }

    if (review.userId === userId) {
      return res.status(403).json({ message: "Vous ne pouvez pas liker votre propre avis" });
    }

    const existingLike = await prisma.reviewLike.findUnique({
      where: { userId_reviewId: { userId, reviewId } }
    });

    if (existingLike) {
<<<<<<< Updated upstream
      await prisma.reviewLike.delete({
        where: { id: existingLike.id }
      });
      return res.json({ liked: false });
    } else {
      await prisma.reviewLike.create({
        data: {
          userId,
          reviewId,
        }
      });
=======
      await prisma.reviewLike.delete({ where: { id: existingLike.id } });
      await prisma.notification.deleteMany({
        where: {
          type: 'like',
          userId: review.userId,
          fromUserId: userId,
          reviewId: review.id
        }
      });
      return res.json({ liked: false });
    } else {
      await prisma.reviewLike.create({ data: { userId, reviewId } });
      if (userId !== review.userId) {
        await prisma.notification.create({
          data: {
            type: 'like',
            userId: review.userId,
            fromUserId: userId,
            reviewId: review.id
          }
        });
      }
>>>>>>> Stashed changes
      return res.json({ liked: true });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur lors de la modification du like" });
  }
}

// 4. Page complète des avis pour une destination
export async function showAllReviews(req, res) {
  const { destinationId } = req.params;

  try {
    const reviews = await prisma.review.findMany({
      where: { destinationId },
      orderBy: { createdAt: "desc" },
      include: {
        user: { select: { id: true, nom: true, prenom: true, avatar: true } },
        likes: true,
      }
    });
    res.render('user/fullReviews.twig', { reviews, destinationId });
  } catch (error) {
    console.error(error);
    req.flash('error', 'Erreur serveur lors de la récupération des avis.');
    res.redirect(`/destination/${destinationId}`);
  }
}

// 5. Ajout d'un avis (gestion JSON ET page classique)
export async function addReview(req, res) {
  const userId = req.session.user?.id;
  const { destinationId, rating, content } = req.body;

  // Si pas connecté
  if (!userId) {
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      return res.status(401).json({ message: "Non autorisé" });
    } else {
      req.flash('error', 'Vous devez être connecté pour poster un avis.');
      return res.redirect('/login');
    }
  }

  // Validation des champs
  if (!destinationId || !rating || !content) {
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      return res.status(400).json({ message: "Champs manquants" });
    } else {
      req.flash('error', 'Tous les champs sont obligatoires.');
      return res.redirect('back');
    }
  }

  try {
    const newReview = await prisma.review.create({
      data: {
        userId,
        destinationId,
        rating: parseInt(rating, 10),
        content,
      }
    });

    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      return res.status(201).json(newReview);
    } else {
      req.flash('success', 'Avis ajouté avec succès !');
      return res.redirect(`/destination/${destinationId}/reviews`);
    }
  } catch (error) {
    console.error(error);
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      return res.status(500).json({ message: "Erreur serveur lors de l'ajout de l'avis" });
    } else {
      req.flash('error', "Erreur serveur lors de l'ajout de l'avis.");
      return res.redirect('back');
    }
  }
}
