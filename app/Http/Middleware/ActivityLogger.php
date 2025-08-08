<?php


namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Spatie\Activitylog\Models\Activity;
use Symfony\Component\HttpFoundation\Response;

class ActivityLogger
{
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        // Cek jika user login
        if (auth()->check()) {
            $user = auth()->user();

            // Tentukan tipe aktivitas
            $method = $request->method();
            $route = $request->path();

            $description = match ($method) {
                'POST'   => "Menambahkan data di {$route}",
                'PUT', 'PATCH' => "Mengubah data di {$route}",
                'DELETE' => "Menghapus data di {$route}",
                default => "Mengakses {$route}"
            };

            // Simpan log hanya jika bukan AJAX refresh atau asset
            if (!str_contains($route, 'livewire') && !str_contains($route, 'filament/assets')) {
                activity()
                    ->causedBy($user)
                    ->withProperties([
                        'method' => $method,
                        'url' => $request->fullUrl(),
                        'ip' => $request->ip(),
                        'agent' => $request->userAgent(),
                        'input' => $request->except(['password', '_token']),
                    ])
                    ->log($description);
            }
        }

        return $response;
    }
}

