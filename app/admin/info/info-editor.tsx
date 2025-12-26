"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/client/api";
import { useState } from "react";
import { toast } from "sonner";

type TextItem = {
    section: string;
    content: string;
};

export function InfoEditor({ initialTexts }: { initialTexts: TextItem[] }) {
    const queryClient = useQueryClient();
    const [editing, setEditing] = useState<string | null>(null);
    const [editText, setEditText] = useState("");

    const { data: texts } = useQuery({
        queryKey: ["info"],
        queryFn: async () => {
            const responses = await Promise.all(
                initialTexts.map(({ section }) => 
                    api.info({ section }).get()
                )
            );
            
            return initialTexts.map((item, index) => ({
                section: item.section,
                content: responses[index].data?.content || "",
            }));
        },
        initialData: initialTexts,
    });

    const saveMutation = useMutation({
        mutationFn: async ({ section, content }: TextItem) => {
            const res = await api.info({ section }).put({ content });
            return res.data;
        },
        onSuccess: (_, variables) => {
            queryClient.setQueryData(["info"], (old: TextItem[] | undefined) => 
                old?.map(text => 
                    text.section === variables.section 
                        ? { ...text, content: variables.content }
                        : text
                )
            );
            setEditing(null);
            toast.success("Текст сохранен");
        },
        onError: (error) => {
            toast.error("Не удалось сохранить текст");
        },
    });

    const startEdit = (section: string, content: string) => {
        setEditing(section);
        setEditText(content);
    };

    const saveEdit = (section: string) => {
        if (editText.trim()) {
            saveMutation.mutate({ section, content: editText });
        }
    };

    return (
        <div className="p-4 lg:p-6 text-black">
            <h1 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-10">Тексты</h1>
            
            <div className="space-y-6">
                {texts.map((item) => (
                    <div key={item.section} className="border p-3 rounded-lg">
                        {editing === item.section ? (
                            <div>
                                <div className="font-medium mb-2">{item.section}</div>
                                <textarea
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    rows={3}
                                    className="w-full border p-2 rounded mb-2"
                                />
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => saveEdit(item.section)}
                                        className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
                                    >
                                        Сохранить
                                    </button>
                                    
                                    <button
                                        onClick={() => setEditing(null)}
                                        className="px-3 py-1 border rounded text-sm"
                                    >
                                        Отмена
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <div className="font-medium">{item.section}</div>
                                    <button
                                        onClick={() => startEdit(item.section, item.content)}
                                        className="px-2 py-1 border rounded text-xs"
                                    >
                                        Изменить
                                    </button>
                                </div>
                                <div className="p-2 bg-gray-50 rounded text-sm">
                                    {item.content || "(пусто)"}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}