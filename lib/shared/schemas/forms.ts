import z from "zod/v4";


export const formSchema = z.object({
    firstName: z.string({message: "Имя обязательно"}),
    lastName: z.string({message: "Фамилия обязательна"}),
    email: z.email("Некорректный email"),
    phone: z.string().min(11, "Номер телефона обязателен"),
    subject: z.string().max(200).optional(),
    message: z.string().min(10, "Сообщение слишком короткое"),
});