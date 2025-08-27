
export default function RelatedBlog({ relatedblogs }) {
    return (
        <>
            <div className="bg-gray-50 dark:bg-black transition-colors duration-300">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Postingan Terkait
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* {relatedblogs.map((post) => (
                            <div
                                key={post.id}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
                            >

                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {post.title}
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    {post.excerpt}
                                </p>
                                <a
                                    href={`/blog/${post.slug}`}
                                    className="text-blue-600 hover:underline"
                                >
                                    Baca Selengkapnya
                                </a>
                            </div>
                        ))} */}
                    </div>
                </div>
            </div>
        </>
    );
}