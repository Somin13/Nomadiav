-- DropForeignKey
ALTER TABLE `Checklist` DROP FOREIGN KEY `Checklist_voyageId_fkey`;

-- DropIndex
DROP INDEX `Checklist_voyageId_fkey` ON `Checklist`;

-- AddForeignKey
ALTER TABLE `Checklist` ADD CONSTRAINT `Checklist_voyageId_fkey` FOREIGN KEY (`voyageId`) REFERENCES `Destination`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
