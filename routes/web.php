<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\KontakController;
use App\Http\Controllers\DashboardController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     $newestBlogs = app(BlogController::class)->newestblog();
    
//     return Inertia::render('User/Dashboard', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//         'newestBlogs' => $newestBlogs, // Pastikan nama key konsisten
//     ]);
// })->name('home');

Route::get('/', [DashboardController::class, 'index'])->name('home');

Route::get('/tentang', function ( ) {
    return Inertia::render('User/Tentang');
})->name('tentang');

Route::get('/profil', function () {
    return Inertia::render('User/Profile');
})->middleware(['auth', 'verified'])->name('profil');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
// Route::resource('posts', \App\Http\Controllers\PostController::class)
//     ->only(['index', 'create', 'store', 'show', 'edit', 'update', 'destroy'])
//     ->middleware(['auth', 'verified'])
//     ->except(['create', 'edit'])
//     ->names('posts');

Route::get('blog', [BlogController::class, 'index'])->name('blog');
Route::get('kontak', [KontakController::class, 'index'])->name('kontak');
Route::get('blog/{slug}', [BlogController::class, 'show'])->name('posts.show');
// Route::get('newestblog', [BlogController::class, 'newestblog'])->name('blogs.newestblog');


require __DIR__.'/auth.php';
