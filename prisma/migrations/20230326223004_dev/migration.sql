-- AlterTable
ALTER TABLE `Trabalhos` MODIFY `dataFim` DATETIME(3) NULL,
    MODIFY `horaFim` VARCHAR(191) NULL,
    MODIFY `trabalho` INTEGER NULL,
    MODIFY `farda` VARCHAR(191) NULL,
    MODIFY `hinario` VARCHAR(191) NULL,
    MODIFY `lista` JSON NULL,
    MODIFY `observacao` VARCHAR(191) NULL;
