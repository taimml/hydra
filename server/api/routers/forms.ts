import { Elysia } from "elysia";
import { userService } from "./user";
import { eq } from "drizzle-orm";
import { db } from "../../db";
import { forms } from "../../db/schema";
import { formSchema } from "@/lib/shared/schemas/forms";

export const formsPublicRouter = new Elysia({ prefix: "/forms" })
    .get("/", () => "Forms API is working!")
    .post("/", async ({ body }) => {
        await db
            .insert(forms)
            .values(body)
    }, {
        body: formSchema
    });



export const formsAdminRouter = new Elysia({ prefix: "/forms" })
    .use(userService)
    .get("/", async () => {
        try {
        const allForms = await db.query.forms.findMany({
            orderBy: (forms, { desc }) => [desc(forms.createdAt)],
        });
        return { success: true, data: allForms };
        } catch (error) {
        return { success: false, error: "Failed to fetch forms" };
        }
    }, {
        hasRole: "admin"
    })
    .patch("/:id", async ({ params, body }) => {
        try {
        const { id } = params;
        const { status } = body as any;
        
        const [updatedForm] = await db
            .update(forms)
            .set({
            status,
            })
            .where(eq(forms.id, id))
            .returning();
        
        return { success: true, data: updatedForm };
        } catch (error) {
        return { success: false, error: "Failed to update form" };
        }
    }, {
        hasRole: "admin"
    });

export const formsRouter = new Elysia()
    .use(formsPublicRouter)
    .use(formsAdminRouter);