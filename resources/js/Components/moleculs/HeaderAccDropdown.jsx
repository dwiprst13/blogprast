import Dropdown from "@/Components/atoms/Dropdown";
import { usePage } from "@inertiajs/react";
import { useState } from "react";

export default function HeaderAccDropdown({ auth }) {
    const { user } = auth;
    const isAuthenticated = !!user;
    const [open, setOpen] = useState(false);

    const triggerContent = (
        <>
            <div className="flex items-center space-x-2">
                {/* Avatar or Initials */}
                <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-semibold">
                    {isAuthenticated ? user.name.charAt(0).toUpperCase() : "A"}
                </div>

                {/* Name */}
                <span className="text-sm font-medium">
                    {isAuthenticated ? user.name : "Akun"}
                </span>

                {/* Icon */}
                <svg
                    className={`h-4 w-4 transition-transform duration-300 ${
                        open ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        </>
    );

    return (
        <Dropdown open={open} onToggle={setOpen}>
            <Dropdown.Trigger>
                <span className="inline-flex rounded-md">
                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition-all"
                    >
                        {triggerContent}
                    </button>
                </span>
            </Dropdown.Trigger>

            <Dropdown.Content align="right" width="48" className="z-50">
                {isAuthenticated ? (
                    <>
                        <Dropdown.Link href={route("profil")}>
                            👤 Profil
                        </Dropdown.Link>
                        <Dropdown.Link
                            href={route("logout")}
                            method="post"
                            as="button"
                        >
                            🚪 Logout
                        </Dropdown.Link>
                    </>
                ) : (
                    <>
                        <Dropdown.Link href={route("login")}>
                            🔐 Masuk
                        </Dropdown.Link>
                        <Dropdown.Link
                            href={route("register")}
                            method="post"
                            as="button"
                        >
                            📝 Daftar
                        </Dropdown.Link>
                    </>
                )}
            </Dropdown.Content>
        </Dropdown>
    );
}
