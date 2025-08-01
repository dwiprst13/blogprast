import { Link } from "@inertiajs/react"
import { usePage } from '@inertiajs/react';
import HeaderAccDropdown from "../moleculs/HeaderAccDropdown";
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
                        className="flex text-2xl font-bold text-black dark:text-white"
                    >
                        <span className="block">Prast</span>
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Blog
                        </span>
                    </Link>
                </div>
                <div className="hidden md:flex gap-5">
                        <nav className="NavBlog flex gap-3">
                            <NavLink href={route('home')} active={route().current('home')}>Beranda</NavLink>
                            <NavLink href={route('blog')} active={route().current('blog')}>Blog</NavLink>
                            <NavLink href={route('portofolio')} active={route().current('portofolio')}>Tentang Kami</NavLink> 
                            <NavLink href={route('profil')} active={route().current('contact')}>Kontak</NavLink>
                        </nav>
                    <nav className="-mx-3 flex justify-end">
                        <HeaderAccDropdown auth={auth} />
                    </nav>
                </div>

            </div>
        </header>
    )
}