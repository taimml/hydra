
import { api } from "@/server/api";
import { FormsTable } from "./forms-table";

export default async function FormsPage() {
    const forms = (await api.forms.get()).data;

    return <FormsTable initialForms={forms?.data ?? []} />;
}