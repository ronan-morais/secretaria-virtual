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
