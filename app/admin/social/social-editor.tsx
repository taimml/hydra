"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/client/api";
import { useState } from "react";
import { toast } from "sonner";

type SocialLink = {
    id: string;
    name: string;
    url: string;
};

export function SocialEditor({ initialSocials }: { initialSocials: SocialLink[] }) {
    const queryClient = useQueryClient();
    
    const { data: socials = [] } = useQuery<SocialLink[]>({
        queryKey: ["socials"],
        queryFn: async () => {
            const response = await api.social.get();
            return response.data?.data || [];
        },
        initialData: initialSocials,
    });

    const updateMutation = useMutation({
        mutationFn: async ({ id, url }: { id: string; url: string }) => {
            const response = await api.social({ id }).put({ url });
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["socials"] });
            toast.success("Ссылка обновлена");
        },
        onError: (error) => {
            toast.error("Ошибка обновления");
        },
    });

    const [editingId, setEditingId] = useState<string | null>(null);
    const [editUrl, setEditUrl] = useState("");

    const startEdit = (social: SocialLink) => {
        setEditingId(social.id);
        setEditUrl(social.url);
    };

    const cancelEdit = () => {
        setEditingId(null);
        setEditUrl("");
    };

    const saveEdit = () => {
        if (editingId && editUrl.trim()) {
            updateMutation.mutate({ id: editingId, url: editUrl });
            cancelEdit();
        }
    };

    const capitalize = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <div className="p-4 md:p-6 text-black">
            <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Соцсети</h1>
            
            <div className="bg-white rounded-lg border">
                <div className="hidden md:grid grid-cols-12 border-b font-medium p-4 bg-gray-50">
                    <div className="col-span-3">Соцсеть</div>
                    <div className="col-span-6">Ссылка</div>
                    <div className="col-span-3">Действия</div>
                </div>
                
                <div className="divide-y">
                    {socials.map(social => (
                        <div key={social.id} className="block md:grid md:grid-cols-12 p-4">
                            <div className="md:hidden flex justify-between items-start mb-3">
                                <div className="font-medium">
                                    {capitalize(social.name)}
                                </div>
                                {!editingId && (
                                    <button
                                        onClick={() => startEdit(social)}
                                        className="px-3 py-1 border rounded text-sm"
                                    >
                                        Изменить
                                    </button>
                                )}
                            </div>
                            
                            <div className="hidden md:block col-span-3 font-medium">
                                {capitalize(social.name)}
                            </div>
                            
                            <div className="md:col-span-6 mb-3 md:mb-0">
                                {editingId === social.id ? (
                                    <div>
                                        <div className="md:hidden text-sm text-gray-500 mb-2">Ссылка:</div>
                                        <input
                                            type="text"
                                            value={editUrl}
                                            onChange={(e) => setEditUrl(e.target.value)}
                                            className="w-full border rounded px-3 py-2 text-black"
                                            placeholder="https://..."
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') saveEdit();
                                                if (e.key === 'Escape') cancelEdit();
                                            }}
                                        />
                                    </div>
                                ) : (
                                    <div>
                                        <div className="md:hidden text-sm text-gray-500 mb-1">Ссылка:</div>
                                        <a 
                                            href={social.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-blue-600 break-all md:truncate block"
                                        >
                                            {social.url || "Не указана"}
                                        </a>
                                    </div>
                                )}
                            </div>
                            
                            <div className="md:col-span-3">
                                {editingId === social.id ? (
                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <button
                                            onClick={saveEdit}
                                            disabled={updateMutation.isPending}
                                            className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400 w-full sm:w-auto"
                                        >
                                            {updateMutation.isPending ? "Сохранение..." : "Сохранить"}
                                        </button>
                                        <button
                                            onClick={cancelEdit}
                                            disabled={updateMutation.isPending}
                                            className="px-3 py-2 border rounded  w-full sm:w-auto"
                                        >
                                            Отмена
                                        </button>
                                    </div>
                                ) : (
                                    <div className="hidden md:block">
                                        <button
                                            onClick={() => startEdit(social)}
                                            className="px-3 py-1 border rounded text-sm"
                                        >
                                            Изменить
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}