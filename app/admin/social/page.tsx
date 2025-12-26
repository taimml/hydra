// app/(admin)/social/page.tsx
import { api } from "@/server/api";
import { SocialEditor } from "./social-editor";

export default async function SocialPage() {
    const response = await api.social.get();
    const socials = response.data?.data ?? [];

    return <SocialEditor initialSocials={socials} />;
}