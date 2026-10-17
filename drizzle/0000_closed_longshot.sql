CREATE TABLE `inquiries` (
	`id` text PRIMARY KEY NOT NULL,
	`kind` text NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`business_name` text,
	`phone` text,
	`website_url` text,
	`service` text,
	`message` text NOT NULL,
	`created_at` text NOT NULL
);
