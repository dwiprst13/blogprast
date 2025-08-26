export default function BlogBanner() {
    return (
        <>
            <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center transition-colors duration-300">
                <div className="mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center relative">
                    <div className="relative z-10">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-900/30 text-orange-800 dark:text-orange-300 text-sm font-medium mb-6 border border-orange-200 dark:border-orange-800">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                            Blog Teknologi Terkini
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-orange-900 dark:text-white mb-6">
                            <span className="block">Prast</span>
                            <span className="bg-orange-600 bg-clip-text text-transparent">
                                Blog
                            </span>
                        </h1>

                        <p className="mt-6 text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Selamat datang di blog Saya! Temukan berbagai
                            <span className="text-orange-600 dark:text-orange-400 font-semibold">
                                {" "}
                                artikel menarik
                            </span>{" "}
                            dan
                            <span className="text-yellow-600 dark:text-yellow-400 font-semibold">
                                {" "}
                                inspiratif
                            </span>{" "}
                            berkaitan dengan teknologi.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                <span className="font-medium">
                                    100+ Artikel
                                </span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                                <span className="font-medium">
                                    Update Mingguan
                                </span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                                <span className="font-medium">
                                    Teknologi Terbaru
                                </span>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="/blog"
                                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-orange-600 rounded-xl hover:bg-orange-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-orange-500/50"
                            >
                                <span className="flex items-center">
                                    Baca Artikel
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
                            </a>

                            <a
                                href="/about"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl hover:border-orange-500 dark:hover:border-orange-400 hover:text-orange-600 dark:hover:text-orange-400 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl"
                            >
                                Tentang Saya
                            </a>
                        </div>

                        {/* Scroll indicator */}
                        <div className="mt-16 animate-bounce">
                            <svg
                                className="w-6 h-6 mx-auto text-gray-400 dark:text-gray-500"
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

                        {/* Floating elements */}
                        <div className="absolute top-20 left-10 w-4 h-4 bg-orange-500/30 rounded-full animate-ping hidden lg:block"></div>
                        <div className="absolute top-40 right-20 w-3 h-3 bg-yellow-500/30 rounded-full animate-pulse hidden lg:block"></div>
                        <div className="absolute bottom-20 left-20 w-2 h-2 bg-pink-500/30 rounded-full animate-bounce hidden lg:block"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
