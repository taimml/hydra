import z from "zod/v4";


export const infoSchema = z.object({
    content: z.string({message: "Текст не может быть пустым"}),
    section: z.string({message: "Раздел обязателен"}),
});