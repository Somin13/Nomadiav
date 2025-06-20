-- AlterTable
ALTER TABLE `BulletPoint` MODIFY `contenu` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `BulletPointContent` MODIFY `contenu` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Destination` ADD COLUMN `utilisateurId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Section` MODIFY `contenu` TEXT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `adventurerType` VARCHAR(191) NULL,
    ADD COLUMN `bio` VARCHAR(191) NULL,
    ADD COLUMN `facebook` VARCHAR(191) NULL,
    ADD COLUMN `instagram` VARCHAR(191) NULL,
    ADD COLUMN `isPublic` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `youtube` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Destination` ADD CONSTRAINT `Destination_utilisateurId_fkey` FOREIGN KEY (`utilisateurId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
