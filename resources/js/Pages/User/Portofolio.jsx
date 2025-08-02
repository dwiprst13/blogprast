import { Head } from '@inertiajs/react';
import Header from "@/Components/organisms/Header";
import PortofolioBanner from "@/Components/organisms/PortofolioBanner";


export default function Portofolio({ auth }) {
    return (
        <>
        <Head title="Portofolio Dwi Prasetia" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative flex min-h-screen justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full">
                        <Header auth={auth} className="flex justify-between" />
                        <main className="">
                            <PortofolioBanner/>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}