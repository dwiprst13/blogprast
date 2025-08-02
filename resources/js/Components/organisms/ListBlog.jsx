

export default function ListBlog({ blogs }) {
    return (
        <>
            <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
                <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            Daftar Postingan
                        </h1>
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                    </div>

                    <div className="space-y-4">
                        {/* {blogs.map((post) => (
                            <NewestBlogCard key={post.id} post={post} />
                        ))} */}
                    </div>

                    {/* Pagination */}
                    <div className="mt-12 flex items-center justify-center space-x-4">
                        {blogs.prev_page_url && (
                            <button
                                onClick={() =>
                                    Inertia.visit(blogs.prev_page_url)
                                }
                                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-200 shadow-sm hover:shadow-md"
                            >
                                <svg
                                    className="w-4 h-4 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                                Previous
                            </button>
                        )}

                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                        </div>

                        {blogs.next_page_url && (
                            <button
                                onClick={() =>
                                    Inertia.visit(blogs.next_page_url)
                                }
                                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-200 shadow-sm hover:shadow-md"
                            >
                                Next
                                <svg
                                    className="w-4 h-4 ml-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}