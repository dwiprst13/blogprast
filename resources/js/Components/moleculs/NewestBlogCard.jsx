
export default function NewestBlogCard({ post }) {
    return (
        <>
        <article 
                        key={post.id} 
                        className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden"
                        >
                        <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                        
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                            {post.title}
                            </h2>

                            <div className="flex items-center justify-between mb-4 text-sm">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                                {post.user.name.charAt(0).toUpperCase()}
                                </div>
                                <span className="text-gray-600 dark:text-gray-300 font-medium">
                                {post.user.name}
                                </span>
                            </div>
                            </div>

                            <div className="mb-4">
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                <span 
                                    key={tag.id}
                                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                                >
                                    <span className="w-1.5 h-1.5 bg-current rounded-full mr-1.5"></span>
                                    {tag.name}
                                </span>
                                ))}
                            </div>
                            </div>

                            {/* Excerpt */}
                            <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-4 leading-relaxed">
                            {post.excerpt}
                            </p>

                            {/* Read More Button */}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                            <button className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm transition-colors duration-200 group">
                                Baca Selengkapnya
                                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            
                            {/* Action buttons */}
                            <div className="flex items-center space-x-2">
                                <button className="p-2 text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                </svg>
                                </button>
                                <button className="p-2 text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                </svg>
                                </button>
                            </div>
                            </div>
                        </div>
                        </article>
        </>
    )
}