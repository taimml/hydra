import { Elysia } from "elysia";
import { eq } from "drizzle-orm";
import { socialLinks } from "@/server/db/schema";
import { db } from "@/server/db";
import { userService } from "@/server/api/routers/user";


export const socialPublicRouter = new Elysia({ prefix: "/social" })
    .get("/", async () => {
        const socials = await db.query.socialLinks.findMany();
        return { success: true, data: socials };
    });




export const socialAdminRouter = new Elysia({ prefix: "/admin/social" })
    .use(userService)
    .get("/", async () => {
        const socials = await db.query.socialLinks.findMany();
        return { success: true, data: socials };
    }, {
        hasRole: "admin"
    })
    .put("/:id", async ({ params, body }) => {
        const { id } = params;
        const { name, url, icon } = body as any;
        
        const [updatedSocial] = await db
        .update(socialLinks)
        .set({ 
            name, 
            url, 
            icon
        })
        .where(eq(socialLinks.id, id))
        .returning();
        
        return { success: true, data: updatedSocial };
    }, {
        hasRole: "admin"
    });

export const socialRouter = new Elysia()
    .use(socialPublicRouter)
    .use(socialAdminRouter);