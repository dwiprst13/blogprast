import MainLayout from "@/Layouts/MainLayout";
import KontakSection from "./Part/KontakSection";


export default function Kontak({ auth }) {
    return (
        <>
            <MainLayout auth={auth}>
                <KontakSection />
            </MainLayout>
        </>
    );
}