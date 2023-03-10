/*
  Warnings:

  - The primary key for the `Perfis` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `perfilId` on the `Perfis` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `perfilId` on the `Usuarios` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Perfis` DROP PRIMARY KEY,
    MODIFY `perfilId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`perfilId`);

-- AlterTable
ALTER TABLE `Usuarios` MODIFY `perfilId` INTEGER NULL;
