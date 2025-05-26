-- CreateTable
CREATE TABLE `Destination` (
    `id` VARCHAR(191) NOT NULL,
    `titre` VARCHAR(191) NOT NULL,
    `pays` VARCHAR(191) NOT NULL,
    `imagePrincipale` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Section` (
    `id` VARCHAR(191) NOT NULL,
    `titre` VARCHAR(191) NOT NULL,
    `contenu` VARCHAR(191) NOT NULL,
    `ordre` INTEGER NOT NULL,
    `type` ENUM('PRESENTATION', 'QUE_FAIRE', 'CONSEILS', 'MEILLEURE_PERIODE', 'SANTE', 'COMMENT_Y_ALLER', 'POURQUOI_Y_ALLER') NOT NULL,
    `destinationId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Image` (
    `id` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `alt` VARCHAR(191) NULL,
    `sectionId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Section` ADD CONSTRAINT `Section_destinationId_fkey` FOREIGN KEY (`destinationId`) REFERENCES `Destination`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_sectionId_fkey` FOREIGN KEY (`sectionId`) REFERENCES `Section`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
