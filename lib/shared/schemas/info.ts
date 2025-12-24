import z from "zod/v4";


export const infoSchema = z.object({
    content: z.string().min(1, "Текст не может быть пустым"),
    type: z.enum(["text", "image"]).default("text"),
});