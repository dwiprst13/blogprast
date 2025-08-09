import React, { useState } from "react";
import "../../../css/codeblock.css";
import {
    Calendar,
    Clock,
    User,
    Tag,
    Eye,
    Heart,
    Share2,
    ArrowLeft,
    Bookmark,
} from "lucide-react";
import RelatedBlog from "./RelatedBlog";
import ShareButton from "@/Components/atoms/ShareButton";
import BookMarkButton from "@/Components/atoms/BookMarkButton";

export default function DetailBlog({ blog, relatedblogs }) {
    const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [readingTime] = useState(
        Math.ceil(blog.body.split(" ").length / 200)
    ); 

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    const formatTime = (dateString) => {
        return new Date(dateString).toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white">
            {/* Header Navigation */}
            <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <button
                        onClick={() => (window.location.href = "/blog")}
                        className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        <span className="font-medium">Kembali ke Blog</span>
                    </button>
                </div>
            </div>

            <div
                id="Content"
                className="max-w-5xl mx-auto flex flex-col md:grid md:grid-cols-12"
            >
                {/* Main Content */}
                <article className="md:col-span-8 px-6 sm:px-6 lg:px-8 py-8">
                    {/* Article Header */}
                    <header className="mb-8">
                        {/* Category Badge */}
                        {blog.category && (
                            <div className="mb-4">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                                    {blog.category.name}
                                </span>
                            </div>
                        )}

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            {blog.title}
                        </h1>

                        {/* Excerpt */}
                        {blog.excerpt && (
                            <p className="text-justify text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                {blog.excerpt.replace(/<[^>]*>?/gm, "")}
                            </p>
                        )}

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-600 dark:text-gray-400 mb-6">
                            <div className="flex items-center">
                                <User className="w-4 h-4 mr-2" />
                                <span>
                                    By{" "}
                                    <strong className="text-gray-900 dark:text-white">
                                        {blog.author?.name || "Admin"}
                                    </strong>
                                </span>
                            </div>

                            <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span>{formatDate(blog.published_at)}</span>
                            </div>

                            <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                <span>{readingTime} menit baca</span>
                            </div>

                            <div className="flex items-center">
                                <Eye className="w-4 h-4 mr-2" />
                                <span>{blog.views || 0} views</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-3 pb-6 border-b border-gray-200 dark:border-gray-700">
                            <button
                                onClick={() => setIsLiked(!isLiked)}
                                className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                                    isLiked
                                        ? "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800"
                                        : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                                }`}
                            >
                                <Heart
                                    className={`w-4 h-4 mr-2 ${
                                        isLiked ? "fill-current" : ""
                                    }`}
                                />
                                <span>Suka</span>
                            </button>

                            <BookMarkButton />

                            <ShareButton />
                        </div>
                    </header>

                    {/* Featured Image */}
                    {blog.thumbnail && (
                        <div className="mb-8">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={`/storage/${blog.thumbnail}`}
                                    alt={blog.title}
                                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </div>
                    )}

                    {blog.image_caption && (
                        <div className="mb-8 text-center text-sm text-gray-500 dark:text-gray-400 italic">
                            {blog.image_caption}
                        </div>
                    )}

                    {/* Article Content */}
                    <div
                        className="prose prose-lg prose-gray dark:prose-invert max-w-none mb-8 text-justify"
                        dangerouslySetInnerHTML={{ __html: blog.body }}
                    />

                    {/* Author Info */}
                    <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                    {(blog.author?.name || "A")
                                        .charAt(0)
                                        .toUpperCase()}
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                    {blog.author?.name || "Admin"}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-3">
                                    {blog.author?.bio ||
                                        "Penulis yang berpengalaman dalam berbagai topik menarik dan bermanfaat."}
                                </p>
                                <div className="text-sm text-gray-500 dark:text-gray-500">
                                    <span>
                                        Bergabung sejak{" "}
                                        {formatDate(
                                            blog.author?.created_at ||
                                                blog.published_at
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Publication Status (for admin/editor view) */}
                    {!blog.published && (
                        <div className="mb-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                                <span className="text-yellow-800 dark:text-yellow-300 font-medium">
                                    Draft - Artikel ini belum dipublikasikan
                                </span>
                            </div>
                        </div>
                    )}
                </article>
                <div className="md:col-span-4 py-8 px-6">
                    {blog.tags && blog.tags.length > 0 && (
                        <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center mb-4">
                                <Tag className="w-5 h-5 mr-2 text-gray-600 dark:text-gray-400" />
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                    Tags
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {blog.tags.map((tag) => (
                                    <span
                                        key={tag.id}
                                        className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:shadow-md transition-all duration-200 cursor-pointer"
                                    >
                                        <span className="w-1.5 h-1.5 bg-current rounded-full mr-2"></span>
                                        {tag.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    <RelatedBlog relatedblogs={relatedblogs} />
                </div>
            </div>
        </div>
    );
}
