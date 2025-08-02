import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import HeaderAccDropdown from "../moleculs/HeaderAccDropdown";
import NavLink from "../atoms/NavLink";

export default function Header({ auth, className = "" }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const user = usePage().props.auth.user;

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const navItems = [
        {
            href: route("home"),
            label: "Beranda",
            active: route().current("home"),
        },
        { href: route("blog"), label: "Blog", active: route().current("blog") },
        {
            href: route("tentang"),
            label: "Tentang",
            active: route().current("tentang"),
        },
        {
            href: route("kontak"),
            label: "Kontak",
            active: route().current("kontak"),
        },
    ];

    return (
        <>
            <header className="sticky top-0 z-30 h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300">
                <div className="h-full max-w-7xl mx-auto px-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href={route("home")}
                        className="flex items-center text-xl font-bold group"
                    >
                        <span className="text-gray-900 dark:text-white">
                            Prast
                        </span>
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Blog
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <nav className="flex space-x-6">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.href}
                                    href={item.href}
                                    active={item.active}
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </nav>
                        <HeaderAccDropdown auth={auth} />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleSidebar}
                        className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={
                                    isSidebarOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16M4 18h16"
                                }
                            />
                        </svg>
                    </button>
                </div>
            </header>

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                />
            )}

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
                    isSidebarOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center text-lg font-bold">
                        <span className="text-gray-900 dark:text-white">
                            Prast
                        </span>
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Blog
                        </span>
                    </div>
                    <button
                        onClick={toggleSidebar}
                        className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Sidebar Content */}
                <div className="p-6">
                    <nav className="space-y-3">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.href}
                                href={item.href}
                                active={item.active}
                                className=" block w-full"
                                onClick={toggleSidebar}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                        {user ? (
                            <HeaderAccDropdown auth={auth} mobile />
                        ) : (
                            <div className="space-y-3">
                                <Link
                                    href={route("login")}
                                    className="block w-full px-4 py-2.5 text-center text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                                    onClick={toggleSidebar}
                                >
                                    Masuk
                                </Link>
                                <Link
                                    href={route("register")}
                                    className="block w-full px-4 py-2.5 text-center text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
                                    onClick={toggleSidebar}
                                >
                                    Daftar
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
