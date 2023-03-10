/*
  Warnings:

  - The primary key for the `Amigos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `amigoId` on the `Amigos` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `anamneseId` on the `Amigos` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `dadosUsuarioId` on the `Amigos` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `Anamneses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `anamneseId` on the `Anamneses` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `DadosUsuarios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `dadosUsuarioId` on the `DadosUsuarios` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `Usuarios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `usuarioId` on the `Usuarios` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `amigoId` on the `Usuarios` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Amigos` DROP PRIMARY KEY,
    MODIFY `amigoId` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `anamneseId` INTEGER NULL,
    MODIFY `dadosUsuarioId` INTEGER NULL,
    ADD PRIMARY KEY (`amigoId`);

-- AlterTable
ALTER TABLE `Anamneses` DROP PRIMARY KEY,
    MODIFY `anamneseId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`anamneseId`);

-- AlterTable
ALTER TABLE `DadosUsuarios` DROP PRIMARY KEY,
    MODIFY `dadosUsuarioId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`dadosUsuarioId`);

-- AlterTable
ALTER TABLE `Usuarios` DROP PRIMARY KEY,
    MODIFY `usuarioId` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `amigoId` INTEGER NULL,
    ADD PRIMARY KEY (`usuarioId`);
