/*
  Warnings:

  - A unique constraint covering the columns `[usuariosIdUsuario]` on the table `Amigos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Usuarios` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cpf]` on the table `dadosUsuarios` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `usuariosIdUsuario` to the `Amigos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Amigos` ADD COLUMN `usuariosIdUsuario` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Amigos_usuariosIdUsuario_key` ON `Amigos`(`usuariosIdUsuario`);

-- CreateIndex
CREATE UNIQUE INDEX `Usuarios_email_key` ON `Usuarios`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `dadosUsuarios_cpf_key` ON `dadosUsuarios`(`cpf`);
