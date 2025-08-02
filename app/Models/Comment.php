<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = [
        'blog_id',
        'user_id',
        'content',
        'parent_id',
        'status',
    ];

    // Relasi ke Blog
    public function blog()
    {
        return $this->belongsTo(Blog::class);
    }

    // Relasi ke User sebagai author komentar
    public function author()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    // Komentar induk
    public function parent()
    {
        return $this->belongsTo(Comment::class, 'parent_id');
    }

    // Balasan komentar
    public function replies()
    {
        return $this->hasMany(Comment::class, 'parent_id')->with(['author', 'replies']);
    }
}
