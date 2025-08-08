<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Filament\Facades\Filament;
use Illuminate\Support\ServiceProvider;
use App\Models\Blog;
use App\Observers\BlogObserver;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);


        Inertia::share('auth', function () {
            $user = \Illuminate\Support\Facades\Auth::user();

            if (!$user) {
                return ['user' => null];
            }

            return [
                'user' => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                ],
            ];
        });

        Blog::observe(BlogObserver::class);
    }
}
