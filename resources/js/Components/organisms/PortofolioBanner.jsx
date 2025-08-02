
import {
    SiReact,
    SiLaravel,
    SiJavascript,
    SiPhp,
    SiNodedotjs,
} from "react-icons/si";

export default function PortfolioBanner() {
    const skills = [
        { icon: <SiReact size={28} color="#61DBFB" />, name: "React" },
        { icon: <SiLaravel size={28} color="#F9322C" />, name: "Laravel" },
        {
            icon: <SiJavascript size={28} color="#F0DB4F" />,
            name: "JavaScript",
        },
        { icon: <SiPhp size={28} color="#8993be" />, name: "PHP" },
        { icon: <SiNodedotjs size={28} color="#3C873A" />, name: "Node.js" },
    ];


    const stats = [
        { number: "50+", label: "Proyek Selesai", icon: "📊" },
        { number: "3+", label: "Tahun Pengalaman", icon: "⚡" },
        { number: "20+", label: "Client Puas", icon: "🎯" },
        { number: "100%", label: "Komitmen", icon: "💎" }
    ];

    return (
        <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {/* Floating orbs */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-bounce"></div>
                <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-cyan-500/15 rounded-full blur-xl animate-bounce"></div>

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-white space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                            Available for Projects
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                                <span className="block text-white">Dwi</span>
                                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Prasetia
                                </span>
                            </h1>
                            <div className="text-xl lg:text-2xl text-gray-300 space-y-2">
                                <p className="typewriter">
                                    Full Stack Developer
                                </p>
                                <p className="text-lg text-gray-400">
                                    Passionate about creating digital
                                    experiences that matter
                                </p>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                            Saya adalah seorang Full Stack Developer dengan
                            passion untuk menciptakan solusi digital yang
                            inovatif dan user-friendly. Berpengalaman dalam
                            membangun aplikasi web modern dengan teknologi
                            terdepan.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1">
                                <span className="flex items-center justify-center">
                                    Lihat Portofolio
                                    <svg
                                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                        />
                                    </svg>
                                </span>
                            </button>
                            <button className="px-8 py-4 border-2 border-white/30 rounded-xl font-semibold backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:-translate-y-1">
                                Download CV
                            </button>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center space-x-6 pt-4">
                            <span className="text-gray-400 text-sm font-medium">
                                Follow me:
                            </span>
                            {["GitHub", "LinkedIn", "Twitter", "Instagram"].map(
                                (social) => (
                                    <a
                                        key={social}
                                        href="#"
                                        className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
                                    >
                                        <span className="text-xs font-medium group-hover:scale-110 transition-transform duration-200">
                                            {social.charAt(0)}
                                        </span>
                                    </a>
                                )
                            )}
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="space-y-8">
                        {/* Profile Card */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
                            <div className="text-center mb-6">
                                <div className="relative inline-block">
                                    <div className="w-32 h-32 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
                                        DP
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                {stats.map((stat, index) => (
                                    <div
                                        key={index}
                                        className="text-center p-3 bg-white/5 rounded-lg border border-white/10"
                                    >
                                        <div className="text-2xl mb-1">
                                            {stat.icon}
                                        </div>
                                        <div className="text-2xl font-bold text-white">
                                            {stat.number}
                                        </div>
                                        <div className="text-xs text-gray-300">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
                            <h3 className="text-white font-semibold mb-4 flex items-center">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="w-14 h-14 flex items-center justify-center bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300"
                                        title={skill.name}
                                    >
                                        {skill.icon}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Contact */}
                        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-blue-400/30 rounded-2xl p-6 shadow-2xl">
                            <h3 className="text-white font-semibold mb-3">
                                Let's Work Together
                            </h3>
                            <p className="text-gray-300 text-sm mb-4">
                                Punya proyek menarik? Mari diskusikan bagaimana
                                kita bisa berkolaborasi.
                            </p>
                            <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                                Get In Touch
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
                    <div className="flex flex-col items-center animate-bounce">
                        <span className="text-xs mb-2">Scroll Down</span>
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .bg-grid-white\/\[0\.02\] {
                    background-image: radial-gradient(
                        circle,
                        rgba(255, 255, 255, 0.02) 1px,
                        transparent 1px
                    );
                }
                .typewriter {
                    border-right: 2px solid #3b82f6;
                    animation: blink 1s infinite;
                }
                @keyframes blink {
                    0%,
                    50% {
                        border-color: transparent;
                    }
                    51%,
                    100% {
                        border-color: #3b82f6;
                    }
                }
            `}</style>
        </div>
    );
}