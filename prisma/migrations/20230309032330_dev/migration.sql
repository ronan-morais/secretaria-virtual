/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `DadosUsuarios` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `DadosUsuarios` MODIFY `cpf` BIGINT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `DadosUsuarios_cpf_key` ON `DadosUsuarios`(`cpf`);
