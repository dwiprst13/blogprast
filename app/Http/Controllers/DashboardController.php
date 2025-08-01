<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class DashboardController extends Controller
{

public function index()
{
    $newestBlogs = Blog::with(['user', 'category', 'tags'])
        ->latest()
        ->take(5)
        ->get();

    return Inertia::render('User/Dashboard', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'newestBlogs' => $newestBlogs
    ]);
}
}
