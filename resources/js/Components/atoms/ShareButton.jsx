import { Share2 } from "lucide-react";

export default function ShareButton() {
    const handleShare = () => {
        const url = window.location.href;
        navigator.clipboard
            .writeText(url)
            // .then(() => {
            //     alert("Link berhasil disalin!");
            // })
            // .catch(() => {
            //     alert("Gagal menyalin link.");
            // });
    };

    return (
        <button
            onClick={handleShare}
            className="inline-flex items-center px-4 py-2 rounded-lg font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200"
        >
            <Share2 className="w-4 h-4 mr-2" />
            <span>Bagikan</span>
        </button>
    );
}
