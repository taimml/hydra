import { api } from "@/server/api";
import { InfoEditor } from "./info-editor";

const INFO_SECTIONS = [
    "DIVE_INTO_TEXT",
    "ABOUT_TEXT", 
    "WHY_BUILD_TEXT",
    "HOW_WE_BUILD_TEXT"
];

export default async function InfoPage() {
    const textsData = await Promise.all(
        INFO_SECTIONS.map(async (section) => {
            const response = await api.info({ section }).get();
            return {
                section,
                content: response.data?.content || "",
            };
        })
    );

    return <InfoEditor initialTexts={textsData} />;
}