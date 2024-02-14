-- CreateTable
CREATE TABLE `Address` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `street` VARCHAR(255) NOT NULL,
    `city` VARCHAR(255) NOT NULL,
    `province` VARCHAR(255) NOT NULL,
    `country` VARCHAR(255) NOT NULL,
    `postal_code` INTEGER NOT NULL,
    `contact_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Address` ADD CONSTRAINT `Address_contact_id_fkey` FOREIGN KEY (`contact_id`) REFERENCES `Contact`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
