/*
  Warnings:

  - You are about to drop the column `perfilId` on the `Amigos` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioId` on the `Amigos` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioId` on the `Anamneses` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioId` on the `DadosUsuarios` table. All the data in the column will be lost.
  - The primary key for the `Perfis` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idPerfil` on the `Perfis` table. All the data in the column will be lost.
  - You are about to drop the column `anamneseId` on the `Usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `dadosUsuarioId` on the `Usuarios` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[dadosUsuarioId]` on the table `Amigos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[anamneseId]` on the table `Amigos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[perfilId]` on the table `Perfis` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[perfilId]` on the table `Usuarios` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[amigoId]` on the table `Usuarios` will be added. If there are existing duplicate values, this will fail.
  - The required column `perfilId` was added to the `Perfis` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Made the column `perfilId` on table `Usuarios` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `Amigos_usuarioId_key` ON `Amigos`;

-- DropIndex
DROP INDEX `Anamneses_usuarioId_key` ON `Anamneses`;

-- DropIndex
DROP INDEX `DadosUsuarios_usuarioId_key` ON `DadosUsuarios`;

-- DropIndex
DROP INDEX `Perfis_idPerfil_key` ON `Perfis`;

-- AlterTable
ALTER TABLE `Amigos` DROP COLUMN `perfilId`,
    DROP COLUMN `usuarioId`;

-- AlterTable
ALTER TABLE `Anamneses` DROP COLUMN `usuarioId`;

-- AlterTable
ALTER TABLE `DadosUsuarios` DROP COLUMN `usuarioId`;

-- AlterTable
ALTER TABLE `Perfis` DROP PRIMARY KEY,
    DROP COLUMN `idPerfil`,
    ADD COLUMN `perfilId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`perfilId`);

-- AlterTable
ALTER TABLE `Usuarios` DROP COLUMN `anamneseId`,
    DROP COLUMN `dadosUsuarioId`,
    ADD COLUMN `amigoId` VARCHAR(191) NULL,
    MODIFY `perfilId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Amigos_dadosUsuarioId_key` ON `Amigos`(`dadosUsuarioId`);

-- CreateIndex
CREATE UNIQUE INDEX `Amigos_anamneseId_key` ON `Amigos`(`anamneseId`);

-- CreateIndex
CREATE UNIQUE INDEX `Perfis_perfilId_key` ON `Perfis`(`perfilId`);

-- CreateIndex
CREATE UNIQUE INDEX `Usuarios_perfilId_key` ON `Usuarios`(`perfilId`);

-- CreateIndex
CREATE UNIQUE INDEX `Usuarios_amigoId_key` ON `Usuarios`(`amigoId`);
