-- CreateTable
CREATE TABLE `Usuarios` (
    `usuarioId` INTEGER NOT NULL AUTO_INCREMENT,
    `perfilId` INTEGER NULL,
    `amigoId` INTEGER NULL,
    `dataCriacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dataUpdate` DATETIME(3) NOT NULL,
    `usuario` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `senha` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NULL,

    UNIQUE INDEX `Usuarios_usuarioId_key`(`usuarioId`),
    UNIQUE INDEX `Usuarios_perfilId_key`(`perfilId`),
    UNIQUE INDEX `Usuarios_amigoId_key`(`amigoId`),
    UNIQUE INDEX `Usuarios_email_key`(`email`),
    PRIMARY KEY (`usuarioId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Amigos` (
    `amigoId` INTEGER NOT NULL AUTO_INCREMENT,
    `dadosUsuarioId` INTEGER NULL,
    `anamneseId` INTEGER NULL,
    `dataCriacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dataUpdate` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Amigos_amigoId_key`(`amigoId`),
    UNIQUE INDEX `Amigos_dadosUsuarioId_key`(`dadosUsuarioId`),
    UNIQUE INDEX `Amigos_anamneseId_key`(`anamneseId`),
    PRIMARY KEY (`amigoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DadosUsuarios` (
    `dadosUsuarioId` INTEGER NOT NULL AUTO_INCREMENT,
    `dataCriacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dataUpdate` DATETIME(3) NOT NULL,
    `genero` VARCHAR(191) NULL,
    `nome` VARCHAR(191) NOT NULL,
    `sobrenome` VARCHAR(191) NULL,
    `apelido` VARCHAR(191) NULL,
    `cpf` VARCHAR(191) NULL,
    `telefone` VARCHAR(191) NULL,
    `whatsapp` VARCHAR(191) NULL,
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
    UNIQUE INDEX `DadosUsuarios_cpf_key`(`cpf`),
    PRIMARY KEY (`dadosUsuarioId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Anamneses` (
    `anamneseId` INTEGER NOT NULL AUTO_INCREMENT,
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

    UNIQUE INDEX `Anamneses_anamneseId_key`(`anamneseId`),
    PRIMARY KEY (`anamneseId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Perfis` (
    `perfilId` INTEGER NOT NULL AUTO_INCREMENT,
    `perfil` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Perfis_perfilId_key`(`perfilId`),
    PRIMARY KEY (`perfilId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Trabalhos` (
    `trabalhoId` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `dataInicio` DATETIME(3) NOT NULL,
    `horaInicio` VARCHAR(191) NOT NULL,
    `dataFim` DATETIME(3) NOT NULL,
    `horaFim` VARCHAR(191) NOT NULL,
    `trabalho` INTEGER NOT NULL,
    `farda` VARCHAR(191) NOT NULL,
    `hinario` VARCHAR(191) NOT NULL,
    `lista` JSON NOT NULL,
    `observacao` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Trabalhos_trabalhoId_key`(`trabalhoId`),
    PRIMARY KEY (`trabalhoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
