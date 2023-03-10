/*
  Warnings:

  - The primary key for the `Amigos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idAmigo` on the `Amigos` table. All the data in the column will be lost.
  - You are about to drop the column `idAnamnese` on the `Amigos` table. All the data in the column will be lost.
  - You are about to drop the column `idDadosUsuario` on the `Amigos` table. All the data in the column will be lost.
  - You are about to drop the column `idPerfil` on the `Amigos` table. All the data in the column will be lost.
  - You are about to drop the column `idUsuario` on the `Amigos` table. All the data in the column will be lost.
  - You are about to drop the column `usuariosIdUsuario` on the `Amigos` table. All the data in the column will be lost.
  - The primary key for the `Anamneses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idAnamnese` on the `Anamneses` table. All the data in the column will be lost.
  - You are about to drop the column `idUsuario` on the `Anamneses` table. All the data in the column will be lost.
  - The primary key for the `Usuarios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idAnamnese` on the `Usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `idDadosUsuario` on the `Usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `idPerfil` on the `Usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `idUsuario` on the `Usuarios` table. All the data in the column will be lost.
  - You are about to drop the `dadosUsuarios` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[amigoId]` on the table `Amigos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[usuarioId]` on the table `Amigos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[anamneseId]` on the table `Anamneses` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[usuarioId]` on the table `Anamneses` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[usuarioId]` on the table `Usuarios` will be added. If there are existing duplicate values, this will fail.
  - The required column `amigoId` was added to the `Amigos` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `usuarioId` to the `Amigos` table without a default value. This is not possible if the table is not empty.
  - The required column `anamneseId` was added to the `Anamneses` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `usuarioId` to the `Anamneses` table without a default value. This is not possible if the table is not empty.
  - The required column `usuarioId` was added to the `Usuarios` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX `Amigos_idAmigo_key` ON `Amigos`;

-- DropIndex
DROP INDEX `Amigos_usuariosIdUsuario_key` ON `Amigos`;

-- DropIndex
DROP INDEX `Anamneses_idAnamnese_key` ON `Anamneses`;

-- DropIndex
DROP INDEX `Usuarios_idUsuario_key` ON `Usuarios`;

-- AlterTable
ALTER TABLE `Amigos` DROP PRIMARY KEY,
    DROP COLUMN `idAmigo`,
    DROP COLUMN `idAnamnese`,
    DROP COLUMN `idDadosUsuario`,
    DROP COLUMN `idPerfil`,
    DROP COLUMN `idUsuario`,
    DROP COLUMN `usuariosIdUsuario`,
    ADD COLUMN `amigoId` VARCHAR(191) NOT NULL,
    ADD COLUMN `anamneseId` VARCHAR(191) NULL,
    ADD COLUMN `dadosUsuarioId` VARCHAR(191) NULL,
    ADD COLUMN `perfilId` VARCHAR(191) NULL,
    ADD COLUMN `usuarioId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`amigoId`);

-- AlterTable
ALTER TABLE `Anamneses` DROP PRIMARY KEY,
    DROP COLUMN `idAnamnese`,
    DROP COLUMN `idUsuario`,
    ADD COLUMN `anamneseId` VARCHAR(191) NOT NULL,
    ADD COLUMN `usuarioId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`anamneseId`);

-- AlterTable
ALTER TABLE `Usuarios` DROP PRIMARY KEY,
    DROP COLUMN `idAnamnese`,
    DROP COLUMN `idDadosUsuario`,
    DROP COLUMN `idPerfil`,
    DROP COLUMN `idUsuario`,
    ADD COLUMN `anamneseId` VARCHAR(191) NULL,
    ADD COLUMN `dadosUsuarioId` VARCHAR(191) NULL,
    ADD COLUMN `perfilId` VARCHAR(191) NULL,
    ADD COLUMN `usuarioId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`usuarioId`);

-- DropTable
DROP TABLE `dadosUsuarios`;

-- CreateTable
CREATE TABLE `DadosUsuarios` (
    `dadosUsuarioId` VARCHAR(191) NOT NULL,
    `usuarioId` VARCHAR(191) NOT NULL,
    `dataCriacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dataUpdate` DATETIME(3) NOT NULL,
    `genero` VARCHAR(191) NULL,
    `nome` VARCHAR(191) NOT NULL,
    `sobrenome` VARCHAR(191) NULL,
    `apelido` VARCHAR(191) NULL,
    `cpf` INTEGER NULL,
    `telefone` INTEGER NULL,
    `whatsapp` INTEGER NULL,
    `dataNascimento` DATETIME(3) NULL,
    `logradouro` VARCHAR(191) NULL,
    `bairro` VARCHAR(191) NULL,
    `cidade` VARCHAR(191) NULL,
    `uf` VARCHAR(191) NULL,
    `nacionalidade` VARCHAR(191) NULL,
    `contatoEmergencia` VARCHAR(191) NULL,
    `estadoCivil` VARCHAR(191) NULL,
    `escolaridade` VARCHAR(191) NULL,
    `observacao` VARCHAR(191) NULL,

    UNIQUE INDEX `DadosUsuarios_dadosUsuarioId_key`(`dadosUsuarioId`),
    UNIQUE INDEX `DadosUsuarios_usuarioId_key`(`usuarioId`),
    UNIQUE INDEX `DadosUsuarios_cpf_key`(`cpf`),
    PRIMARY KEY (`dadosUsuarioId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Amigos_amigoId_key` ON `Amigos`(`amigoId`);

-- CreateIndex
CREATE UNIQUE INDEX `Amigos_usuarioId_key` ON `Amigos`(`usuarioId`);

-- CreateIndex
CREATE UNIQUE INDEX `Anamneses_anamneseId_key` ON `Anamneses`(`anamneseId`);

-- CreateIndex
CREATE UNIQUE INDEX `Anamneses_usuarioId_key` ON `Anamneses`(`usuarioId`);

-- CreateIndex
CREATE UNIQUE INDEX `Usuarios_usuarioId_key` ON `Usuarios`(`usuarioId`);
