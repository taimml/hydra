import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db";

export const auth = betterAuth({
    secret: process.env.BETTER_AUTH_SECRET!,

    baseURL: process.env.NODE_ENV === "production" 
        ? "https://nastya.orn1xx.ru/"
        : "http://localhost:3000",

    trustedOrigins: process.env.NODE_ENV === "production"
        ? ["https://nastya.orn1xx.ru/", "https://nastya.orn1xx.ru/"]
        : ["http://localhost:3000"],

    database: drizzleAdapter(db, {
        provider: "pg"
    }),
    emailAndPassword: {
        enabled: true
    },
    user: {
        additionalFields: {
            role: {
                type: "string",
                required: true,
                defaultValue: "user"
            }
        }
    },
    databaseHooks: {
        user: {
            create: {
                before: (user) => new Promise((resolve) => resolve({
                    data: {
                        ...user,
                        role: (user.email === process.env.BETTER_AUTH_ADMIN_EMAIL ? 'admin' : 'user')
                    }
                }))
            }
        }
    }
})