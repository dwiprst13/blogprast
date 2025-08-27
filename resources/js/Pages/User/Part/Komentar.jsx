import React, { useState } from "react";
import {
    MessageCircle,
    Heart,
    Reply,
    MoreHorizontal,
    Flag,
    Edit,
    Trash2,
    Send,
    User,
} from "lucide-react";

// Individual Comment Component
function Comment({ comment, onReply, onLike, onEdit, onDelete, depth = 0 }) {
    const [showReplies, setShowReplies] = useState(false);
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [isLiked, setIsLiked] = useState(comment.isLiked || false);
    const [likeCount, setLikeCount] = useState(comment.likes || 0);

    const handleLike = () => {
        const newIsLiked = !isLiked;
        setIsLiked(newIsLiked);
        setLikeCount((prev) => (newIsLiked ? prev + 1 : prev - 1));
        onLike?.(comment.id, newIsLiked);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffInHours = (now - date) / (1000 * 60 * 60);

        if (diffInHours < 1) return "Baru saja";
        if (diffInHours < 24) return `${Math.floor(diffInHours)} jam yang lalu`;
        if (diffInHours < 48) return "Kemarin";
        return date.toLocaleDateString("id-ID", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    };

    return (
        <div
            className={`${depth > 0 ? "ml-6 sm:ml-8 md:ml-12" : ""} ${
                depth > 2
                    ? "border-l-2 border-gray-200 dark:border-gray-700 pl-4"
                    : ""
            }`}
        >
            <div className="bg-white dark:bg-black rounded-lg p-4 sm:p-6 mb-4 transition-all duration-200 hover:shadow-md">
                {/* Comment Header */}
                <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                            {comment.author.avatar ? (
                                <img
                                    src={comment.author.avatar}
                                    alt={comment.author.name}
                                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                                />
                            ) : (
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-orange-700 to-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                                    {comment.author.name
                                        .charAt(0)
                                        .toUpperCase()}
                                </div>
                            )}
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                                {comment.author.name}
                                {comment.author.isVerified && (
                                    <span className="ml-1 inline-flex items-center">
                                        <svg
                                            className="w-4 h-4 text-blue-500"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                )}
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                {formatDate(comment.createdAt)}
                            </p>
                        </div>
                    </div>

                    {/* Comment Menu */}
                    <div className="relative">
                        <button
                            onClick={() => setShowMenu(!showMenu)}
                            className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                        >
                            <MoreHorizontal className="w-4 h-4" />
                        </button>

                        {showMenu && (
                            <div className="absolute right-0 top-8 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-10">
                                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center">
                                    <Flag className="w-4 h-4 mr-2" />
                                    Laporkan
                                </button>
                                {comment.canEdit && (
                                    <button
                                        onClick={() => onEdit?.(comment.id)}
                                        className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
                                    >
                                        <Edit className="w-4 h-4 mr-2" />
                                        Edit
                                    </button>
                                )}
                                {comment.canDelete && (
                                    <button
                                        onClick={() => onDelete?.(comment.id)}
                                        className="w-full px-4 py-2 text-left text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center"
                                    >
                                        <Trash2 className="w-4 h-4 mr-2" />
                                        Hapus
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Comment Content */}
                <div className="mb-4">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                        {comment.content}
                    </p>
                </div>

                {/* Comment Actions */}
                <div className="flex items-center space-x-4 text-sm">
                    <button
                        onClick={handleLike}
                        className={`flex items-center space-x-1 transition-colors duration-200 ${
                            isLiked
                                ? "text-red-500 dark:text-red-400"
                                : "text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400"
                        }`}
                    >
                        <Heart
                            className={`w-4 h-4 ${
                                isLiked ? "fill-current" : ""
                            }`}
                        />
                        <span>{likeCount}</span>
                    </button>

                    <button
                        onClick={() => setShowReplyForm(!showReplyForm)}
                        className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                        <Reply className="w-4 h-4" />
                        <span>Balas</span>
                    </button>

                    {comment.replies && comment.replies.length > 0 && (
                        <button
                            onClick={() => setShowReplies(!showReplies)}
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
                        >
                            {showReplies ? "Sembunyikan" : "Lihat"}{" "}
                            {comment.replies.length} balasan
                        </button>
                    )}
                </div>

                {/* Reply Form */}
                {showReplyForm && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <CommentForm
                            onSubmit={(content) => {
                                onReply?.(comment.id, content);
                                setShowReplyForm(false);
                            }}
                            onCancel={() => setShowReplyForm(false)}
                            placeholder={`Balas ke ${comment.author.name}...`}
                            isReply={true}
                        />
                    </div>
                )}
            </div>

            {/* Replies */}
            {showReplies &&
                comment.replies &&
                comment.replies.map((reply) => (
                    <Comment
                        key={reply.id}
                        comment={reply}
                        onReply={onReply}
                        onLike={onLike}
                        onEdit={onEdit}
                        onDelete={onDelete}
                        depth={depth + 1}
                    />
                ))}
        </div>
    );
}

// Comment Form Component
function CommentForm({
    onSubmit,
    onCancel,
    placeholder = "Tulis komentar...",
    isReply = false,
}) {
    const [content, setContent] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!content.trim()) return;

        setIsSubmitting(true);
        try {
            await onSubmit(content);
            setContent("");
        } catch (error) {
            console.error("Error submitting comment:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="space-y-4">
            <div className="relative">
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder={placeholder}
                    rows={isReply ? 3 : 4}
                    className="w-full p-3 sm:p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                    maxLength={500}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && e.ctrlKey) {
                            handleSubmit(e);
                        }
                    }}
                />
                <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                    {content.length}/500
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <User className="w-4 h-4" />
                    <span>Komentar sebagai Tamu</span>
                </div>

                <div className="flex items-center space-x-2">
                    {isReply && onCancel && (
                        <button
                            onClick={onCancel}
                            className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200"
                        >
                            Batal
                        </button>
                    )}
                    <button
                        onClick={handleSubmit}
                        disabled={!content.trim() || isSubmitting}
                        className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white text-sm font-medium rounded-lg transition-all duration-200 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                Mengirim...
                            </>
                        ) : (
                            <>
                                <Send className="w-4 h-4 mr-2" />
                                {isReply ? "Balas" : "Kirim Komentar"}
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

// Main Comment Section Component
export default function CommentSection({
    postId,
    comments: initialComments = [],
}) {
    const [comments, setComments] = useState(initialComments);
    const [sortBy, setSortBy] = useState("newest"); // newest, oldest, popular
    const [showLoginPrompt, setShowLoginPrompt] = useState(false);

    const handleNewComment = async (content) => {
        // Simulate API call
        const newComment = {
            id: Date.now(),
            content,
            author: {
                name: "Pengguna Tamu",
                avatar: null,
                isVerified: false,
            },
            createdAt: new Date().toISOString(),
            likes: 0,
            isLiked: false,
            replies: [],
            canEdit: true,
            canDelete: true,
        };

        setComments((prev) => [newComment, ...prev]);
    };

    const handleReply = async (parentId, content) => {
        const newReply = {
            id: Date.now(),
            content,
            author: {
                name: "Pengguna Tamu",
                avatar: null,
                isVerified: false,
            },
            createdAt: new Date().toISOString(),
            likes: 0,
            isLiked: false,
            replies: [],
            canEdit: true,
            canDelete: true,
        };

        setComments((prev) =>
            prev.map((comment) =>
                comment.id === parentId
                    ? {
                          ...comment,
                          replies: [...(comment.replies || []), newReply],
                      }
                    : comment
            )
        );
    };

    const handleLike = (commentId, isLiked) => {
        // Handle like/unlike logic
        console.log(`Comment ${commentId} ${isLiked ? "liked" : "unliked"}`);
    };

    const handleEdit = (commentId) => {
        // Handle edit logic
        console.log(`Edit comment ${commentId}`);
    };

    const handleDelete = (commentId) => {
        // Handle delete logic
        if (confirm("Apakah Anda yakin ingin menghapus komentar ini?")) {
            setComments((prev) =>
                prev.filter((comment) => comment.id !== commentId)
            );
        }
    };

    const sortedComments = [...comments].sort((a, b) => {
        switch (sortBy) {
            case "oldest":
                return new Date(a.createdAt) - new Date(b.createdAt);
            case "popular":
                return (b.likes || 0) - (a.likes || 0);
            default: // newest
                return new Date(b.createdAt) - new Date(a.createdAt);
        }
    });

    const totalComments = comments.reduce((total, comment) => {
        return total + 1 + (comment.replies?.length || 0);
    }, 0);

    return (
        <div className="bg-white dark:bg-black rounded-2xl shadow-lg p-6 sm:p-8">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                    <MessageCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                        Komentar ({totalComments})
                    </h3>
                </div>

                {/* Sort Options */}
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                    <option value="newest">Terbaru</option>
                    <option value="oldest">Terlama</option>
                    <option value="popular">Terpopuler</option>
                </select>
            </div>

            {/* Comment Form */}
            <div className="mb-8">
                <CommentForm onSubmit={handleNewComment} />
            </div>

            {/* Comments List */}
            <div className="space-y-6">
                {sortedComments.length > 0 ? (
                    sortedComments.map((comment) => (
                        <Comment
                            key={comment.id}
                            comment={comment}
                            onReply={handleReply}
                            onLike={handleLike}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    ))
                ) : (
                    <div className="text-center py-12">
                        <MessageCircle className="w-12 h-12 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                        <p className="text-gray-500 dark:text-gray-400 text-lg">
                            Belum ada komentar. Jadilah yang pertama
                            berkomentar!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
