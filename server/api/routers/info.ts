import { Elysia } from "elysia";
import { userService } from "./user";
import { eq } from "drizzle-orm";
import { db } from "../../db";
import { info } from "../../db/schema";
import z from "zod/v4";

export const infoRouter = new Elysia({ prefix: "/info" })
    .use(userService)
    .get("/:section", async ({ params }) => {
        return await db.query.info.findFirst({
            where: eq(info.section, params.section),
        }) ?? null;
    }, {
        params: z.object({
            section: z.string()
        })
    } )
    .put("/:section", async ({ params, body }) => {
        const existing = await db.query.info.findFirst({
            where: eq(info.section, params.section),
        });

        if (!existing) {
            await db.insert(info).values({
                section: params.section,
                ...body,
            });
            return { success: true };
        }

        await db.update(info).set(body).where(eq(info.id, existing.id));
        return { success: true };
    }, {
        params: z.object({ section: z.string() }),
        body: z.object({
            content: z.string(),
        }),
        hasRole: "admin"
    });