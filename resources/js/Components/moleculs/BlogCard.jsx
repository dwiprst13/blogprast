export default function BlogCard({ blogs }) {
    return (
        <>
            {blogs.map((post) => (
                <article
                    key={post.id}
                    className="group bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg dark:shadow-gray-900/25 transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                    <div className="flex flex-col sm:flex-row">
                        <div className="sm:w-48 sm:flex-shrink-0">
                            <div className="h-48 sm:h-full bg-orange-600 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                    <svg
                                        className="w-12 h-12 text-white/80"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                {/* Uncomment dan ganti dengan gambar aktual */}
                                {/* <img 
                                src={post.image} 
                                alt={post.title}
                                className="w-full h-full object-cover"
                                /> */}
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 p-6">
                            {/* Meta Info */}
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
                                    <div className="flex items-center space-x-1">
                                        <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                                            {post.user.name
                                                .charAt(0)
                                                .toUpperCase()}
                                        </div>
                                        <span className="font-medium">
                                            {post.user.name}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Title */}
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                                {post.title}
                            </h2>

                            {/* Excerpt */}
                            <p className="text-gray-600 dark:text-gray-400 mb-3 line-clamp-2 text-sm leading-relaxed">
                                {post.excerpt}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5 mb-3">
                                {post.tags.slice(0, 3).map((tag) => (
                                    <span
                                        key={tag.id}
                                        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                                    >
                                        #{tag.name}
                                    </span>
                                ))}
                                {post.tags.length > 3 && (
                                    <span className="text-xs text-gray-400 dark:text-gray-500 px-2 py-1">
                                        +{post.tags.length - 3} lainnya
                                    </span>
                                )}
                            </div>

                            {/* Read More Link */}
                            <div className="flex items-center justify-between">
                                <button className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm transition-colors duration-200 group">
                                    Baca Selengkapnya
                                    <svg
                                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
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

                                {/* Quick Actions */}
                                <div className="flex items-center space-x-1">
                                    <button className="p-1.5 text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200 rounded">
                                        <svg
                                            className="w-4 h-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                        </svg>
                                    </button>
                                    <button className="p-1.5 text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 rounded">
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
                                                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            ))}
        </>
    );
}
