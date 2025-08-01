<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'exceprt',
        'body',
        'thumbnail',
        'published',
        'published_at',
        'user_id',
        'category_id',
        'tags',
    ];
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
