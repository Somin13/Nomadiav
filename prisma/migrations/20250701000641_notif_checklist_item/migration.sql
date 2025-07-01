-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_checklistItemId_fkey` FOREIGN KEY (`checklistItemId`) REFERENCES `ChecklistItem`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
