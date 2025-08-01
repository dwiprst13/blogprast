<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogs = Blog::with(['user', 'tags', 'category']) // Eager load relasi
            ->latest() // Urutkan dari terbaru
            ->get();

        return Inertia::render('User/Blogs/Index', ['blogs' => $blogs]);
    }

    public function newestblog()
    {
        $blogs = Blog::with(['user', 'tags', 'category']) // Eager load relasi
            ->latest() // Urutkan dari terbaru
            ->take(5) // Ambil 3 blog terbaru
            ->get();

        return Inertia::render('User/Blogs/NewestBlog', ['blogs' => $blogs]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Post/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:posts,slug',
            'exceprt' => 'nullable|string',
            'body' => 'required|string',
            'thumbnail' => 'nullable|image|max:2048',
            'published' => 'boolean',
            'published_at' => 'nullable|date',
            'category_id' => 'nullable|exists:categories,id',
            'tags' => 'array',
        ]);

        $post = Blog::create($request->all());

        if ($request->has('tags')) {
            $post->tags()->sync($request->input('tags'));
        }

        return redirect()->route('posts.index')->with('success', 'Post created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Blog $post)
    {
        $post->load(['user', 'category', 'tags']);
        return Inertia::render('Post/Show', [
            'post' => $post,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
