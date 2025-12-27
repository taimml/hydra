import z from "zod/v4";


export const socialSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(1, { message: "Название обязательно" }),
    url: z.url({ message: "Некорректный URL" }),
    icon: z.string().optional(),
});