"use client";
import { useForm } from "react-hook-form";
import Image from "next/image";
import vector16 from "@/public/Vector 16.svg";
import z from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { formSchema } from "@/lib/shared/schemas/forms";
import { Form as ShadcnForm, FormField, FormItem, FormControl, FormMessage} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/lib/client/api";

type FormData = z.infer<typeof formSchema>;

export default function JoinHydraMain() {
    const queryClient = useQueryClient();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {} as z.infer<typeof formSchema>,
    });


    const submitMutation = useMutation({
        mutationFn: async (data: FormData) => {
            const result = await api.forms.post(data)
            if(result.error){
                throw Error("error")
            }
            return result.data;
        },
        onSuccess: () => {
            form.reset();
            alert("Форма успешно отправлена!");
            queryClient.invalidateQueries({ queryKey: ['forms'] });
        },
        onError: (error) => {
            alert("чтото пошло не так")
        }
        });

    const onSubmit = (data: FormData) => {
        submitMutation.mutate(data);
    };   

    const formatPhone = (value: string): string => {
    let cleaned = value.replace(/\D/g, '');
    if (cleaned.length > 11) cleaned = cleaned.substring(0, 11);
    
    if (cleaned.length === 0) return '';
    if (cleaned.length <= 3) return cleaned;
    if (cleaned.length <= 6) return `${cleaned.slice(0, 3)} ${cleaned.slice(3)}`;
    if (cleaned.length <= 8) return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
    
    return `${cleaned.slice(0, 1)} (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 9)}-${cleaned.slice(9)}`;
    };      

    return (
    <div className="bg-radial from-[#403A5F] to-[#211E2E] lg:rounded-[100px] rounded-4xl p-12">
        <div className="flex flex-col text-center mb-10 items-center">
            <h2 className="lg:text-[36px] text-2xl font-bold text-white">JOIN HYDRA</h2>
            <Image src={vector16} alt="16" className="my-6" />
            <p className="lg:text-[36px] text-2xl font-light text-white hidden lg:block">Lets Build Your VR Experience</p>
            <p className="lg:text-[36px] text-2xl font-light text-white lg:hidden">Lets Build </p>
            <p className="lg:text-[36px] text-2xl font-light text-white lg:hidden">Your VR Experience</p>
        </div>

        <ShadcnForm {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-sm">
            <div className="grid lg:grid-cols-2 gap-8">
            <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                <FormItem>
                    <FormControl>
                    <input
                        {...field}
                        placeholder="First Name"
                        className="w-full border-2 border-white rounded-[40px] px-8 py-5 text-white placeholder-white"
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            
            <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                <FormItem>
                    <FormControl>
                    <input
                        {...field}
                        placeholder="Last Name"
                        className="w-full border-2 border-white rounded-[40px] px-8 py-5 text-white placeholder-white"
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                <FormItem>
                    <FormControl>
                    <input
                        type="email"
                        {...field}
                        placeholder="Email"
                        className="w-full border-2 border-white rounded-[40px] px-8 py-5 text-white placeholder-white"
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            
            <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                <FormItem>
                    <FormControl>
                    <input
                        type="tel"
                        {...field}
                        placeholder="Phone Number"
                        onChange={(e) => {
                        const formatted = formatPhone(e.target.value);
                        field.onChange(formatted);
                        }}
                        className="w-full border-2 border-white rounded-[40px] px-8 py-5 text-white placeholder-white"
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            </div>

            <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
                <FormItem>
                <FormControl>
                    <Input
                    {...field}
                    placeholder="Subject"
                    className="w-full border-2 border-white rounded-[40px] px-8 py-8 text-white placeholder-white"
                    />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />

            <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
                <FormItem>
                <FormControl>
                    <Textarea
                    {...field}
                    placeholder="Tell Us Something..."
                    className="w-full border-2 border-white rounded-[40px] px-8 lg:py-20 py-8 text-white placeholder-white lg:text-center h-50"
                    />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />

            <div className="text-center pt-6">
            <button
                type="submit"
                disabled={submitMutation.isPending}
                className="bg-linear-to-r from-[#8176AF] to-[#C0B7E8] text-gray-900 lg:px-14 py-4 rounded-[40px] font-bold text-sm w-full lg:max-w-3xs cursor-pointer"
            >
                {submitMutation.isPending ? 'SENDING...' : 'SEND TO HYDRA'}
            </button>
            </div>
        </form>
        </ShadcnForm>
    </div>
    );
}