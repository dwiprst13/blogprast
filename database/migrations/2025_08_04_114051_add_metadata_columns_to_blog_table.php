<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('blogs', function (Blueprint $table) {
            $table->string('image_caption')->nullable()->after('thumbnail');
            $table->string('image_source')->nullable()->after('image_caption');
            $table->json('key_points')->nullable()->after('image_source');
        });
    }

    public function down(): void
    {
        Schema::table('blogs', function (Blueprint $table) {
            $table->dropColumn(['image_caption', 'image_source', 'key_points']);
        });
    }
};
