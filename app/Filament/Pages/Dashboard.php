<?php

namespace App\Filament\Pages;

use Filament\Pages\Page;
use App\Filament\Resources\BlogResource\Widgets\BlogOverview;

class Dashboard extends Page
{
    protected static ?string $navigationIcon = 'heroicon-o-chart-bar';
    
    protected static string $view = 'filament.pages.dashboard';

    // Untuk menambahkan widget
    protected function getHeaderWidgets(): array
    {
        return [
            BlogOverview::class,
            // Tambahkan widget lain di sini
        ];
    }

    // Untuk mengatur layout
    protected function getColumns(): int|array
    {
        return [
            'sm' => 1,
            'md' => 2,
            'lg' => 3,
        ];
    }

    // Jika ingin custom content
    protected function getFooterWidgets(): array
    {
        return [
            // Widget untuk footer
        ];
    }
}