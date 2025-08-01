import { Link } from "@inertiajs/react"
import { usePage } from '@inertiajs/react';
import Dropdown from '@/Components/atoms/Dropdown';
import NavLink from "../atoms/NavLink";

export default function Header({ auth, className = '' }) {
    const user = usePage().props.auth.user;
    const activeSection = usePage().props.activeSection || 'banner';
    return(
            <header className="h-20">
            <div className="h-full mx-auto max-w-2xl lg:max-w-7xl flex items-center justify-between px-4">
                <div className="flex ">
                    <Link
                        href={route('home')}
                        className="text-2xl font-bold text-black dark:text-white"
                    >
                        PrastBlog
                    </Link>
                </div>
                <div className="flex gap-5">
                    {route().current('portofolio*') ? (
                        <nav id="NavPort">
                            <NavLink href="#banner" active={route().current('portofolio') && activeSection === 'banner'}>Beranda</NavLink>
                            <NavLink href="#about" active={route().current('portofolio') && activeSection === 'about'}>Tentang Kami</NavLink>
                            <NavLink href="#project" active={route().current('project')}>Projek</NavLink>
                            <NavLink href={route('home')} active={route().current('posts')}>Blog</NavLink>
                            <NavLink href="#contact" active={route().current('contact')}>Kontak</NavLink>
                        </nav>
                    ) : (
                        <nav id="NavBlog flex gap-3">
                            <NavLink href={route('profil')} active={route().current('home')}>Beranda</NavLink>
                            <NavLink href={route('profil')} active={route().current('posts')}>Blog</NavLink>
                            <NavLink href={route('portofolio')} active={route().current('portofolio')}>Tentang Kami</NavLink> 
                            <NavLink href={route('profil')} active={route().current('contact')}>Kontak</NavLink>
                        </nav>
                    )}
                    
                    <nav className="-mx-3 flex justify-end">
                        {auth.user ? (
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
                                        >
                                            {user.name}
                                            <svg
                                                className="-me-0.5 ms-2 h-4 w-4"
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
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link
                                        href={route('profil')}
                                    >
                                        Profil
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={route('logout')}
                                        method="post"
                                        as="button"
                                    >
                                        Logout
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        ) : (
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
                                        >
                                            Akun
                                            <svg
                                                className="-me-0.5 ms-2 h-4 w-4"
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
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link
                                        href={route('login')}
                                    >
                                        Masuk
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={route('register')}
                                        method="post"
                                        as="button"
                                    >
                                        Daftar
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    )
}