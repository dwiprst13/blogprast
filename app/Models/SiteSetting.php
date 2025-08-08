<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SiteSetting extends Model
{
    protected $fillable = [
        'site_name',
        'site_description',
        'seo_title',
        'seo_description',
        'logo_path',
        'instagram_url',
        'facebook_url',
        'twitter_url',
        'linkedin_url',
    ];

}
