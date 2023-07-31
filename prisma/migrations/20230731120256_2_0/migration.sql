-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `language` ENUM('en', 'es', 'it', 'fr') NOT NULL DEFAULT 'en',

    UNIQUE INDEX `name`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Continent` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Country` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(3) NOT NULL,
    `name` JSON NOT NULL,
    `capital` JSON NOT NULL,
    `official_name` JSON NOT NULL,
    `region_id` INTEGER UNSIGNED NOT NULL,
    `population` INTEGER UNSIGNED NOT NULL,
    `google_maps_link` VARCHAR(255) NOT NULL,
    `flag` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `code`(`code`),
    INDEX `idx_country_region_id`(`region_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CountryCurrency` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `country_id` INTEGER UNSIGNED NOT NULL,
    `currency_id` INTEGER UNSIGNED NOT NULL,

    INDEX `idx_countrycurrency_country_id`(`country_id`),
    INDEX `idx_countrycurrency_currency_id`(`currency_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Currency` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `symbol` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Region` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` JSON NOT NULL,
    `continent_id` INTEGER UNSIGNED NOT NULL,

    INDEX `idx_region_continent_id`(`continent_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `QuestionResult` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER UNSIGNED NOT NULL,
    `country_id` INTEGER UNSIGNED NOT NULL,
    `learning_type` ENUM('capital', 'flag') NOT NULL DEFAULT 'capital',
    `result` ENUM('succeeded', 'medium', 'failed') NOT NULL DEFAULT 'succeeded',
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `QuestionResult_country_id_idx`(`country_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
