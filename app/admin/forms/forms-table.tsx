"use client";

import { useQuery, useMutation } from "@tanstack/react-query";
import { api } from "@/lib/client/api";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

type Form = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    subject?: string | null;
    message: string;
    status: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "REJECTED" | null;
};

export function FormsTable({ initialForms }: { initialForms: Form[] }) {
    const { data: forms } = useQuery({
        queryKey: ["forms"],
        queryFn: async () => {
            const res = await api.forms.get();
            const data = res.data?.data ?? [];
            return data.map(form => ({
                id: form.id,
                firstName: form.firstName,
                lastName: form.lastName,
                email: form.email,
                phone: form.phone,
                subject: form.subject,
                message: form.message,
                status: form.status || "PENDING",
            }));
        },
        initialData: initialForms,
    });

    const updateStatus = useMutation({
        mutationFn: async ({ id, status }: { id: string; status: string }) => {
            const res = await api.forms({ id }).patch({ status });
            return res.data;
        },
    });

    return (
        <div className="p-4 lg:p-6 text-black">
            <h1 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">Заявки ({forms.length})</h1>
            
            <div className="rounded-lg border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-black">Имя</TableHead>
                            <TableHead className="text-black">Email</TableHead>
                            <TableHead className="text-black">Телефон</TableHead>
                            <TableHead className="text-black">Сообщение</TableHead>
                            <TableHead className="text-black">Статус</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {forms.map((form) => (
                            <TableRow key={form.id}>

                                <TableCell>
                                    <div>{form.firstName} {form.lastName}</div>
                                    {form.subject && (
                                        <div className="text-sm text-gray-400 max-w-xs truncate">
                                            Тема: {form.subject}
                                        </div>
                                    )}
                                </TableCell>

                                <TableCell>
                                    <a href={`mailto:${form.email}`} className="text-blue-600">
                                        {form.email}
                                    </a>
                                </TableCell>

                                <TableCell>{form.phone}</TableCell>

                                <TableCell>
                                    <div className="max-w-xs truncate" title={form.message}>
                                        {form.message}
                                    </div>
                                </TableCell>

                                <TableCell>
                                    <Select value={form.status || "PENDING"}
                                        onValueChange={(value) => updateStatus.mutate({ 
                                            id: form.id, 
                                            status: value 
                                        })}>

                                        <SelectTrigger className="w-32">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="PENDING">Ожидает</SelectItem>
                                            <SelectItem value="IN_PROGRESS">В работе</SelectItem>
                                            <SelectItem value="COMPLETED">Завершена</SelectItem>
                                            <SelectItem value="REJECTED">Отклонена</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}