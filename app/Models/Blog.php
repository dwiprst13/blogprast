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
        'image_caption',
        'image_source',
        'key_points',
    ];
    protected $casts = [
        'published' => 'boolean',
        'published_at' => 'datetime',
        'key_points' => 'array', // Assuming key_points is a JSON array
    ];
    protected static function booted()
    {
        static::saving(function ($model) {
            if (!empty($model->new_thumbnail)) {
                $model->thumbnail = $model->new_thumbnail;
            }
        });
    }

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

    public function author()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
