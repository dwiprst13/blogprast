import MainLayout from "@/Layouts/MainLayout";
import TentangSection from "./Part/TentangSection";

export default function Tentang({ auth }) {
    return <MainLayout auth={auth}>
        <TentangSection />
    </MainLayout>;
}
