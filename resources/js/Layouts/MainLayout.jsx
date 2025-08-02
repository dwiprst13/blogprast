import React from "react";
import Header from "@/Components/organisms/Header";
import Footer from "@/Components/organisms/Footer";
import ScrollToTop from "@/Components/atoms/ScrollToTop";

export default function MainLayout({ children, auth }) {
    return (
        <>
            <div className="bg-gray-50 dark:bg-gray-900">
                <div className="relative flex min-h-screen justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full">
                        <Header auth={auth} />
                        <main className="min-h-screen">{children}</main>
                        <Footer />
                        <ScrollToTop />
                    </div>
                </div>
            </div>
        </>
    );
}
