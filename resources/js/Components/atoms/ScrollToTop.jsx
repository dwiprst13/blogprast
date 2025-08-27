import React from "react";
import { HiChevronDoubleUp } from "react-icons/hi";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const toggleVisibility = () => {
            // Hitung 50% tinggi viewport (bukan 50% scrollHeight)
            const halfViewportHeight = window.innerHeight / 2;

            // Munculkan tombol jika scroll melebihi 50% viewport
            setIsVisible(window.scrollY > halfViewportHeight);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!isVisible) return null;
    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 w-12 h-12 bg-gradient-to-r from-orange-700 to-orange-500 rounded-full flex items-center justify-center text-white text-lg font-semibold hover:animate-bounce"
            aria-label="Scroll to top"
        >
            <HiChevronDoubleUp />
        </button>
    );
}
