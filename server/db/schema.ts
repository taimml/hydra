import { integer, pgEnum, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

const commonFields = {
    id: varchar("id", { length: 255 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
    createdAt: timestamp("created_at").defaultNow(),
    deletedAt: timestamp("deleted_at"),
}

export const formStatusEnum = pgEnum("form_status", [
    "PENDING",
    "IN_PROGRESS",
    "COMPLETED",
    "REJECTED"
]);


export const forms = pgTable("forms", {
    ...commonFields,
    firstName: varchar("first_name", { length: 100 }).notNull(),
    lastName: varchar("first_name", { length: 100 }).notNull(),
    email: varchar("email", { length: 100 }).notNull(),
    phone: varchar("phone", { length: 20 }).notNull(),
    subject: varchar("subject", { length: 200 }),
    message: text("message").notNull(),

    status: formStatusEnum("status").default("PENDING"),

})

