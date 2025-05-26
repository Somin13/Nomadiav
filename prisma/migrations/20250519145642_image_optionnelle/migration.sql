/*
  Warnings:

  - Added the required column `updatedAt` to the `Destination` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Section` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Destination` ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `imagePrincipale` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Section` ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `contenu` TEXT NOT NULL;
