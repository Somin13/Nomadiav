/*
  Warnings:

  - You are about to drop the `Subsection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SubsectionContent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Subsection` DROP FOREIGN KEY `Subsection_sectionId_fkey`;

-- DropForeignKey
ALTER TABLE `SubsectionContent` DROP FOREIGN KEY `SubsectionContent_subsectionId_fkey`;

-- DropTable
DROP TABLE `Subsection`;

-- DropTable
DROP TABLE `SubsectionContent`;

-- CreateTable
CREATE TABLE `GroupedBulletPoint` (
    `id` VARCHAR(191) NOT NULL,
    `titre` VARCHAR(191) NOT NULL,
    `ordre` INTEGER NOT NULL,
    `sectionId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BulletPointContent` (
    `id` VARCHAR(191) NOT NULL,
    `contenu` VARCHAR(191) NOT NULL,
    `ordre` INTEGER NOT NULL,
    `groupId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `GroupedBulletPoint` ADD CONSTRAINT `GroupedBulletPoint_sectionId_fkey` FOREIGN KEY (`sectionId`) REFERENCES `Section`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BulletPointContent` ADD CONSTRAINT `BulletPointContent_groupId_fkey` FOREIGN KEY (`groupId`) REFERENCES `GroupedBulletPoint`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
