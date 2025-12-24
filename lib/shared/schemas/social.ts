import { z } from "zod";

export const socialSchema = z.object({
    name: z.string().min(1, { message: "Название обязательно" }),
    url: z.url({ message: "Некорректный URL" }),
    icon: z.string().min(1, { message: "Иконка обязательна" }),
});