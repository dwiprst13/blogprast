export default function BlogBanner() {
    return (
        <div className="bg-white dark:bg-black/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            PrastBlog
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Selamat datang di blog Saya! Temukan berbagai artikel menarik dan inspiratif berkaitan dengan teknologi.
            </p>
            <div className="mt-8 flex justify-center">
                <a
                    href="/blog"
                    className="inline-block rounded-md bg-[#FF2D20] px-6 py-3 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                    Baca Artikel
                </a>
            </div>
        </div>
        </div>
    );
    }