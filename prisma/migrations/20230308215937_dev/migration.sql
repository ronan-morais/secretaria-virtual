/*
  Warnings:

  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Usuario`;

-- CreateTable
CREATE TABLE `Usuarios` (
    `idUsuario` VARCHAR(191) NOT NULL,
    `idPerfil` VARCHAR(191) NOT NULL,
    `idDadosUsuario` VARCHAR(191) NULL,
    `idAnamnese` VARCHAR(191) NULL,
    `dataCriacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dataUpdate` DATETIME(3) NOT NULL,
    `usuario` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `senha` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NULL,

    UNIQUE INDEX `Usuarios_idUsuario_key`(`idUsuario`),
    PRIMARY KEY (`idUsuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Amigos` (
    `idAmigo` VARCHAR(191) NOT NULL,
    `idUsuario` VARCHAR(191) NULL,
    `idPerfil` VARCHAR(191) NULL,
    `idDadosUsuario` VARCHAR(191) NULL,
    `idAnamnese` VARCHAR(191) NULL,
    `dataCriacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dataUpdate` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Amigos_idAmigo_key`(`idAmigo`),
    PRIMARY KEY (`idAmigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dadosUsuarios` (
    `idDadosUsuario` VARCHAR(191) NOT NULL,
    `idUsuario` VARCHAR(191) NOT NULL,
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

    UNIQUE INDEX `dadosUsuarios_idDadosUsuario_key`(`idDadosUsuario`),
    PRIMARY KEY (`idDadosUsuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Anamneses` (
    `idAnamnese` VARCHAR(191) NOT NULL,
    `idUsuario` VARCHAR(191) NOT NULL,
    `dataCriacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dataUpdate` DATETIME(3) NOT NULL,
    `dataAnamnese` DATETIME(3) NOT NULL,
    `queixaClinica` VARCHAR(191) NULL,
    `medicacao` VARCHAR(191) NULL,
    `internacao` VARCHAR(191) NULL,
    `doencaDiagnosticada` VARCHAR(191) NULL,
    `humor` VARCHAR(191) NULL,
    `situacaoMental` VARCHAR(191) NULL,
    `compulsao` VARCHAR(191) NULL,
    `tratamentoPsi` VARCHAR(191) NULL,
    `centroReligioso` VARCHAR(191) NULL,
    `familiaReligiao` VARCHAR(191) NULL,
    `aprovacaoFamiliar` VARCHAR(191) NULL,
    `comoSoube` VARCHAR(191) NULL,
    `conhecido` VARCHAR(191) NULL,
    `pdc` VARCHAR(191) NULL,
    `primeiroTrabalho` VARCHAR(191) NULL,
    `anexo` VARCHAR(191) NULL,
    `observacao` VARCHAR(191) NULL,

    UNIQUE INDEX `Anamneses_idAnamnese_key`(`idAnamnese`),
    PRIMARY KEY (`idAnamnese`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Perfis` (
    `idPerfil` VARCHAR(191) NOT NULL,
    `perfil` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Perfis_idPerfil_key`(`idPerfil`),
    PRIMARY KEY (`idPerfil`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
