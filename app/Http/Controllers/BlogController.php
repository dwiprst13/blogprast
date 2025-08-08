<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Comment;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::with(['user', 'tags', 'category'])
            ->where('published', true)
            ->latest()
            ->get();

        return Inertia::render('User/Blog', [
            'blogs' => $blogs
        ]);
    }

    public function newestblog()
    {
        $blogs = Blog::with(['user', 'tags', 'category'])
            ->where('published', true) 
            ->latest() //
            ->take(5) // 
            ->get();

        return Inertia::render('User/Blogs/NewestBlog', ['blogs' => $blogs]);
    }

    public function create()
    {
        return Inertia::render('Post/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:blogs,slug', // ✅ Perbaiki table name
            'excerpt' => 'nullable|string',
            'body' => 'required|string',
            'thumbnail' => 'nullable|image|max:2048',
            'published' => 'boolean',
            'published_at' => 'nullable|date',
            'category_id' => 'nullable|exists:categories,id',
            'tags' => 'array',
            'image_caption' => 'nullable|string|max:255',
            'image_source' => 'nullable|string|max:255',
            'key_points' => 'nullable|array',
        ]);

        $validated['user_id'] = auth()->id();

        $post = Blog::create($validated);

        if ($request->has('tags')) {
            $post->tags()->sync($request->input('tags'));
        }

        return redirect()->route('posts.index')->with('success', 'Post created successfully.');
    }


    public function show($slug)
    {
        $blog = Blog::with('author')->where('slug', $slug)->firstOrFail();

        $comments = Comment::with(['author', 'replies.author'])
            ->where('blog_id', $blog->id)
            ->whereNull('parent_id')
            ->latest()
            ->get()
            ->map(fn($comment) => $this->transformComment($comment));

        return Inertia::render('User/Detail', [
            'blog' => $blog,
            'comments' => $comments,
        ]);
    }

    /**
     * Rekursif transformasi komentar dan reply
     */
    private function transformComment($comment, $depth = 0, $maxDepth = 3)
    {
        return [
            'id' => $comment->id,
            'content' => $comment->content,
            'createdAt' => $comment->created_at->toIso8601String(),
            'likes' => $comment->likes ?? 0,
            'isLiked' => false,
            'canEdit' => auth()->id() === $comment->user_id,
            'canDelete' => auth()->id() === $comment->user_id,
            'author' => [
                'name' => $comment->author->name ?? 'Anonim',
                'avatar' => null,
                'isVerified' => true,
            ],
            'replies' => $depth < $maxDepth
                ? $comment->replies->map(fn($reply) => $this->transformComment($reply, $depth + 1))
                : [],
        ];
    }


    public function edit(Blog $post)
    {
        //
    }

    public function update(Request $request, Blog $post)
    {
        //
    }

    public function destroy(Blog $post)
    {
        //
    }
}
