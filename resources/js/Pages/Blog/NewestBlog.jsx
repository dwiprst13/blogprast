import NewestBlogCard from "@/Components/moleculs/NewestBlogCard";

export default function NewestBlog({ blogs }) {
    return (
        <>
            <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Postingan Terbaru
                        </h1>
                        <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full">
                        </div>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {blogs.map((post) => (
                            <NewestBlogCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}