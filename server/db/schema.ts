import { integer, pgEnum, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";
export * from "./auth-schema"

const commonFields = {
    id: varchar("id", { length: 255 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
    createdAt: timestamp("created_at").defaultNow(),
    deletedAt: timestamp("deleted_at"),
}

export const infoSectionEnum = pgEnum("info_section", [
    "DIVE_INTO_TEXT",
    "ABOUT_IMAGE",
    "ABOUT_TEXT",
    "WHY_BUILD_TEXT",
    "HOW_WE_BUILD_TEXT",
]);

export const info = pgTable("info", {
    ...commonFields,
    content: text("content").notNull(),
    section: varchar("section", { length: 50 }).notNull().unique(),
    type: varchar("type", { length: 20}).default("text"),
});

export const socialLinks = pgTable("social_links", {
    ...commonFields,
    name: varchar("name", { length: 30 }).notNull(),
    url: text("url").notNull(),
    icon: varchar("icon", { length: 30 }).notNull(),
});



export const formStatusEnum = pgEnum("form_status", [
    "PENDING",
    "IN_PROGRESS",
    "COMPLETED",
    "REJECTED"
]);


export const forms = pgTable("forms", {
    ...commonFields,
    firstName: varchar("first_name", { length: 100 }).notNull(),
    lastName: varchar("last_name", { length: 100 }).notNull(),
    email: varchar("email", { length: 100 }).notNull(),
    phone: varchar("phone", { length: 20 }).notNull(),
    subject: varchar("subject", { length: 200 }),
    message: text("message").notNull(),

    status: formStatusEnum("status").default("PENDING"),

})

