import { Elysia } from "elysia";
import { userService } from "./user";
import { eq } from "drizzle-orm";
import { db } from "../../db";
import { info } from "../../db/schema";

export const infoRouter = new Elysia({
    prefix: "/info"
})
    .use(userService)
    .get("/:section", async ({ params }) => {
        return await db.query.info.findFirst({
            where: eq(info.section, params.section),
        }) ?? null;
    })
    .post("/admin/:section", async ({ params, body }) => {
        const existing = await db.query.info.findFirst({
            where: eq(info.section, params.section),
        });

        // if (!existing) {
        //     await db.insert(info).values(body)
        //     return;
        // }

        // await db.update(info).set(body).where(eq(info.id, existing.id))

    }, {
        hasRole: "admin"
    });