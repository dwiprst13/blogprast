<?php

namespace App\Observers;
use App\Models\Blog;
use Illuminate\Support\Facades\Auth;

class BlogObserver
{
    public function creating(Blog $blog)
    {
        if (!$blog->user_id && auth()->check()) {
            $blog->user_id = auth()->id();
        }
    }
}
