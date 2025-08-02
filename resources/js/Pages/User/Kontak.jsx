import MainLayout from "@/Layouts/MainLayout";
import KontakForm from "./Part/KontakForm";


export default function Kontak({ auth }) {
    return (
        <>
            <MainLayout auth={auth}>
                <KontakForm />
            </MainLayout>
        </>
    );
}