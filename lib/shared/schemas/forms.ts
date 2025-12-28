import z from "zod/v4";


export const formSchema = z.object({
    firstName: z.string({message: "Укажите имя"}),
    lastName: z.string({message: "Укажите фамилию"}),
    email: z.email("Некорректный email"),
    phone: z.string({message: "Укажите номер телефона"}),
    subject: z.string().max(200).optional(),
    message: z.string({message: "Введите сообщение"}),
});