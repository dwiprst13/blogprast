import { Bookmark } from "lucide-react";


export default function BookMarkButton({ isBookmarked, onToggle }) {
    const handleToggle = () => {
        onToggle(!isBookmarked);
    };

    return (
        <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isBookmarked
                    ? "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
        >
            <Bookmark
                className={`w-4 h-4 mr-2 ${isBookmarked ? "fill-current" : ""}`}
            />
            <span>Simpan</span>
        </button>
    );
}