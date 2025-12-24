CREATE TYPE "public"."form_status" AS ENUM('PENDING', 'IN_PROGRESS', 'COMPLETED', 'REJECTED');--> statement-breakpoint
CREATE TYPE "public"."info_section" AS ENUM('DIVE_INTO_TEXT', 'ABOUT_IMAGE', 'ABOUT_TEXT', 'WHY_BUILD_TEXT', 'HOW_WE_BUILD_TEXT');--> statement-breakpoint
CREATE TABLE "forms" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"deleted_at" timestamp,
	"first_name" varchar(100) NOT NULL,
	"email" varchar(100) NOT NULL,
	"phone" varchar(20) NOT NULL,
	"subject" varchar(200),
	"message" text NOT NULL,
	"status" "form_status" DEFAULT 'PENDING'
);
--> statement-breakpoint
CREATE TABLE "info" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"deleted_at" timestamp,
	"content" text NOT NULL,
	"section" "info_section" NOT NULL,
	"type" varchar(20) DEFAULT 'text',
	CONSTRAINT "info_section_unique" UNIQUE("section")
);
--> statement-breakpoint
CREATE TABLE "social_links" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"deleted_at" timestamp,
	"name" varchar(30) NOT NULL,
	"url" text NOT NULL,
	"icon" varchar(30) NOT NULL
);
