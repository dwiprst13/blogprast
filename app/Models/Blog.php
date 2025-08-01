<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'excerpt',
        'body',
        'thumbnail',
        'published',
        'published_at',
        'user_id',
        'category_id',
        'tags',
    ];
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($blog) {
            $blog->user_id = auth()->id();
        });
    }
    protected $casts = [
        'published' => 'boolean',
        'published_at' => 'datetime',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
    
}
