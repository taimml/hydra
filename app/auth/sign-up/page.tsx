"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod/v4";
import { authClient } from "@/lib/client/auth-client";
import Image from "next/image";
import vector16 from "@/public/Vector 16.svg";
import { Form as ShadcnForm, FormField, FormItem, FormControl, FormMessage} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SignUp() {
    const router = useRouter();
    const formSchema = z.object({
		email: z.email("Некоректная почта"),
		password: z.string().min(8, "Пароль должен быть минимум 8 символов"),
        name: z.string({message: "Имя обязательно"}),
        confirmPassword: z.string().min(8, "Повторите пароль"),
	}).refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
    });

    type FormData = z.infer<typeof formSchema>;

    const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {} as z.infer<typeof formSchema>,
	});

    const onFormSubmit = async (data: FormData) => {
        await authClient.signUp.email(
            {
                email: data.email,
                password: data.password,
                name: data.name,
            },
            {
                onSuccess: () => {
                    toast.success("Вы успешно зарегистрировались")
                    router.push("/");
                    

                },
            },
        );
    };
    return(
        <div className="bg-radial from-[#403A5F] to-[#211E2E] lg:rounded-[100px] rounded-4xl p-12">
            <div className="flex flex-col text-center mb-10 items-center">
                <h2 className="lg:text-[36px] text-2xl font-bold text-white">SIGN UP</h2>
                <Image src={vector16} alt="16" className="my-6" />
                <p className="lg:text-[36px] text-2xl font-light text-white hidden lg:block">Lets Build Your VR Experience</p>
                <p className="lg:text-[36px] text-2xl font-light text-white lg:hidden">Lets Build Your </p>
                <p className="lg:text-[36px] text-2xl font-light text-white lg:hidden">VR Experience</p>
            </div>
            <ShadcnForm {...form}>
                <form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-8 text-sm">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                        <FormItem>
                            <FormControl>
                            <Input 
                                placeholder="Name"
                                className="w-full border-2 border-white rounded-[40px] px-8 py-6 text-white placeholder-white"
                                {...field}
                            />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                        <FormItem>
                            <FormControl>
                            <Input
                                type="email"
                                {...field}
                                placeholder="Email"
                                className="w-full border-2 border-white rounded-[40px] px-8 py-6 text-white placeholder-white"
                            />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                        <FormItem>
                            <FormControl>
                            <Input
                                type="password"
                                {...field}
                                placeholder="Password"
                                className="w-full border-2 border-white rounded-[40px] px-8 py-6 text-white placeholder-white"
                            />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="password"
                                        placeholder="Повторите пароль"
                                        className="w-full border-2 border-white rounded-[40px] px-8 py-6 text-white placeholder-white"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-center">
						<Button 
							type="submit"  
							className="text-sm text-mypurple font-extrabold bg-linear-to-r from-[#8176AF] to-[#C0B7E8] w-full max-w-3xs py-6 rounded-4xl cursor-pointer"
						>
							SIGN UP
						</Button>
					</div>
                    
                </form>
            </ShadcnForm>
        </div>

        
    )
}