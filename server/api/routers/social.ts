import { Elysia } from "elysia";
import { eq } from "drizzle-orm";
import { socialLinks } from "@/server/db/schema";
import { db } from "@/server/db";
import { userService } from "@/server/api/routers/user";
import { socialSchema } from "@/lib/shared/schemas/social";
import z from "zod/v4";

export const socialRouter = new Elysia({ prefix: "/social" })
    // .use(userService)

    .get("/", async () => {
        const socials = await db.query.socialLinks.findMany();
        return { success: true, data: socials };
    })
    
    .put("/:id", async ({ params, body }) => {
        const { id } = params;
        const { url } = body;
        
        const [updatedSocial] = await db
            .update(socialLinks)
            .set({ url })
            .where(eq(socialLinks.id, id))
            .returning();
            
        return { success: true, data: updatedSocial };
    }, {
        params: z.object({ id: z.string() }),
        body: z.object({ 
            url: z.string()
        }),
        hasRole: "admin"
    })
    
    .post("/", async ({ body }) => {
        const newSocial = await db.insert(socialLinks).values(body).returning();
        return { success: true, data: newSocial };
    }, {
        body: socialSchema,
        // hasRole: "admin"
    })

    .delete("/:id", async ({ params }) => {
        await db.delete(socialLinks).where(eq(socialLinks.id, params.id));
        return { success: true };
    }, {
        params: z.object({ id: z.string() }),
        hasRole: "admin"
    })