// /src/jobs/checkReminders.js
import prisma from '../config/prisma.js'

export async function checkChecklistReminders() {
  const now = new Date();
  const in24h = new Date(now.getTime() + 24 * 60 * 60 * 1000);

  // 1️⃣ SUPPRIMER les notifs de rappel dont l'item est coché (nettoyage)
  await prisma.notification.deleteMany({
    where: {
      type: 'rappel_checklist',
      checklistItem: {
        isChecked: true
      }
    }
  });

  // 2️⃣ CRÉER les nouvelles notifications à venir (inchangé)
  const items = await prisma.checklistItem.findMany({
    where: {
      reminderDate: {
        gte: now,
        lte: in24h,
      },
      isChecked: false,
      notifications: {
        none: {
          type: 'rappel_checklist'
        }
      }
    },
    include: {
      category: {
        include: {
          checklist: true,
        }
      }
    }
  });

  for (const item of items) {
    const checklist = item.category.checklist;
    await prisma.notification.create({
      data: {
        type: 'rappel_checklist',
        userId: checklist.userId,
        checklistItemId: item.id,
        checklistId: checklist.id,
        destinationId: checklist.voyageId,
        isRead: false
      }
    });
    console.log(`[CRON] Notification rappel créée pour l'item "${item.titre}"`);
  }
}