import { z } from "zod";

export const socialSchema = z.object({
    name: z.string({ message: "Название обязательно" }),
    url: z.string({ message: "URL обязательно" }),
    icon: z.string().optional(),
});