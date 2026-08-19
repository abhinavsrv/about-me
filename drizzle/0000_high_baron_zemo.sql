CREATE TABLE `portfolioItems` (
	`id` int AUTO_INCREMENT NOT NULL,
	`slug` varchar(160) NOT NULL,
	`itemType` enum('research','applied_work','technical_practice') NOT NULL,
	`category` varchar(120) NOT NULL,
	`focus` varchar(120) NOT NULL,
	`status` varchar(180) NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` text NOT NULL,
	`evidence` text NOT NULL,
	`stack` json NOT NULL,
	`details` json NOT NULL,
	`sourceUrl` varchar(500),
	`sourceNote` varchar(255) NOT NULL,
	`featured` boolean NOT NULL DEFAULT false,
	`published` boolean NOT NULL DEFAULT true,
	`sortOrder` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `portfolioItems_id` PRIMARY KEY(`id`),
	CONSTRAINT `portfolioItems_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `profileRecords` (
	`id` int AUTO_INCREMENT NOT NULL,
	`recordType` enum('experience','education','credential','language','availability','research_interest') NOT NULL,
	`title` varchar(255) NOT NULL,
	`organization` varchar(255),
	`periodLabel` varchar(120),
	`locationLabel` varchar(180),
	`summary` text NOT NULL,
	`metadata` json,
	`sourceNote` varchar(255) NOT NULL,
	`published` boolean NOT NULL DEFAULT true,
	`sortOrder` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `profileRecords_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `siteSettings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`settingKey` varchar(120) NOT NULL,
	`value` json NOT NULL,
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `siteSettings_id` PRIMARY KEY(`id`),
	CONSTRAINT `siteSettings_settingKey_unique` UNIQUE(`settingKey`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`openId` varchar(64) NOT NULL,
	`name` text,
	`email` varchar(320),
	`loginMethod` varchar(64),
	`role` enum('user','admin') NOT NULL DEFAULT 'user',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`lastSignedIn` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_openId_unique` UNIQUE(`openId`)
);
