import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ theme, toggleTheme }) {
    const isDark = theme === "dark";

    return (
        <button
            onClick={toggleTheme}
            className={` relative inline-flex items-center h-6 w-12 rounded-full p-0.5 cursor-pointer transition-colors duration-300 ${isDark ? "bg-gray-600" : "bg-gray-300"} focus:outline-none `}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
            {/* Toggle circle */}
            <div
                className={`relative flex items-center justify-center h-5 w-5 rounded-full shadow-md transition-transform duration-300 ease-in-out ${isDark ? "translate-x-6 bg-gray-200" : "translate-x-0 bg-white"}`}
            >
                {isDark ? (
                    <Moon className="w-3 h-3 text-gray-600" />
                ) : (
                    <Sun className="w-3 h-3 text-yellow-500" />
                )}
            </div>
        </button>
    );
}
