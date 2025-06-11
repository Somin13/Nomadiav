/*
  Warnings:

  - You are about to alter the column `type` on the `Section` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Destination` MODIFY `description` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Section` MODIFY `type` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `SubsectionContent` (
    `id` VARCHAR(191) NOT NULL,
    `contenu` VARCHAR(191) NOT NULL,
    `ordre` INTEGER NOT NULL,
    `subsectionId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SubsectionContent` ADD CONSTRAINT `SubsectionContent_subsectionId_fkey` FOREIGN KEY (`subsectionId`) REFERENCES `Subsection`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
