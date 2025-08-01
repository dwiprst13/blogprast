<?php

namespace App\Filament\Resources\BlogResource\Widgets;

use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class BlogOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total Blogs', \App\Models\Blog::count())
                ->description('Total number of blogs')
                ->icon('heroicon-o-rectangle-stack'),

            Stat::make('Published Blogs', \App\Models\Blog::where('published', true)->count())
                ->description('Number of published blogs')
                ->icon('heroicon-o-check-circle'),
        ];
    }
}
