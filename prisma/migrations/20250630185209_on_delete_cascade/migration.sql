-- DropForeignKey
ALTER TABLE `BulletPoint` DROP FOREIGN KEY `BulletPoint_sectionId_fkey`;

-- DropForeignKey
ALTER TABLE `BulletPointContent` DROP FOREIGN KEY `BulletPointContent_groupId_fkey`;

-- DropForeignKey
ALTER TABLE `ChecklistCategory` DROP FOREIGN KEY `ChecklistCategory_checklistId_fkey`;

-- DropForeignKey
ALTER TABLE `ChecklistItem` DROP FOREIGN KEY `ChecklistItem_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `GroupedBulletPoint` DROP FOREIGN KEY `GroupedBulletPoint_sectionId_fkey`;

-- DropForeignKey
ALTER TABLE `Image` DROP FOREIGN KEY `Image_sectionId_fkey`;

-- DropForeignKey
ALTER TABLE `Review` DROP FOREIGN KEY `Review_destinationId_fkey`;

-- DropForeignKey
ALTER TABLE `ReviewLike` DROP FOREIGN KEY `ReviewLike_reviewId_fkey`;

-- DropForeignKey
ALTER TABLE `Section` DROP FOREIGN KEY `Section_destinationId_fkey`;

-- DropForeignKey
ALTER TABLE `UserVoyage` DROP FOREIGN KEY `UserVoyage_destinationId_fkey`;

-- DropIndex
DROP INDEX `BulletPoint_sectionId_fkey` ON `BulletPoint`;

-- DropIndex
DROP INDEX `BulletPointContent_groupId_fkey` ON `BulletPointContent`;

-- DropIndex
DROP INDEX `ChecklistCategory_checklistId_fkey` ON `ChecklistCategory`;

-- DropIndex
DROP INDEX `ChecklistItem_categoryId_fkey` ON `ChecklistItem`;

-- DropIndex
DROP INDEX `GroupedBulletPoint_sectionId_fkey` ON `GroupedBulletPoint`;

-- DropIndex
DROP INDEX `Image_sectionId_fkey` ON `Image`;

-- DropIndex
DROP INDEX `Review_destinationId_fkey` ON `Review`;

-- DropIndex
DROP INDEX `ReviewLike_reviewId_fkey` ON `ReviewLike`;

-- DropIndex
DROP INDEX `Section_destinationId_fkey` ON `Section`;

-- DropIndex
DROP INDEX `UserVoyage_destinationId_fkey` ON `UserVoyage`;

-- AddForeignKey
ALTER TABLE `Section` ADD CONSTRAINT `Section_destinationId_fkey` FOREIGN KEY (`destinationId`) REFERENCES `Destination`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BulletPoint` ADD CONSTRAINT `BulletPoint_sectionId_fkey` FOREIGN KEY (`sectionId`) REFERENCES `Section`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GroupedBulletPoint` ADD CONSTRAINT `GroupedBulletPoint_sectionId_fkey` FOREIGN KEY (`sectionId`) REFERENCES `Section`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BulletPointContent` ADD CONSTRAINT `BulletPointContent_groupId_fkey` FOREIGN KEY (`groupId`) REFERENCES `GroupedBulletPoint`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_sectionId_fkey` FOREIGN KEY (`sectionId`) REFERENCES `Section`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChecklistCategory` ADD CONSTRAINT `ChecklistCategory_checklistId_fkey` FOREIGN KEY (`checklistId`) REFERENCES `Checklist`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChecklistItem` ADD CONSTRAINT `ChecklistItem_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `ChecklistCategory`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_destinationId_fkey` FOREIGN KEY (`destinationId`) REFERENCES `Destination`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReviewLike` ADD CONSTRAINT `ReviewLike_reviewId_fkey` FOREIGN KEY (`reviewId`) REFERENCES `Review`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserVoyage` ADD CONSTRAINT `UserVoyage_destinationId_fkey` FOREIGN KEY (`destinationId`) REFERENCES `Destination`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
