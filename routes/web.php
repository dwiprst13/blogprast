<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\KontakController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [DashboardController::class, 'index'])->name('home');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/tentang', function ( ) {
    return Inertia::render('User/Tentang');
})->name('tentang');

Route::get('/profil', function () {
    return Inertia::render('User/Profile');
})->middleware(['auth', 'verified'])->name('profil');


Route::get('blog', [BlogController::class, 'index'])->name('blog');
Route::get('kontak', [KontakController::class, 'index'])->name('kontak');
Route::get('blog/{slug}', [BlogController::class, 'show'])->name('blog.detail');

require __DIR__.'/auth.php';
