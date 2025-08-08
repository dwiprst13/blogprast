<?php

namespace App\Filament\Resources\ActivityLogResource\Pages;

use App\Filament\Resources\ActivityLogResource;
use Filament\Resources\Pages\ListRecords;
use Filament\Actions;
use Filament\Tables;
use Filament\Resources\Components\Tab;
use Illuminate\Database\Eloquent\Builder;
use Spatie\Activitylog\Models\Activity;

class ListActivityLogs extends ListRecords
{
    protected static string $resource = ActivityLogResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\Action::make('cleanup')
                ->label('Cleanup Old Logs')
                ->icon('heroicon-o-trash')
                ->color('danger')
                ->requiresConfirmation()
                ->modalHeading('Cleanup Old Activity Logs')
                ->modalDescription('This will delete activity logs older than 30 days. This action cannot be undone.')
                ->action(function () {
                    $deleted = Activity::where('created_at', '<', now()->subDays(30))->delete();

                    $this->notify('success', "Deleted {$deleted} old activity logs.");
                }),

            Actions\Action::make('export')
                ->label('Export Logs')
                ->icon('heroicon-o-arrow-down-tray')
                ->color('primary')
                ->action(function () {
                    // Implement export functionality
                    $this->notify('info', 'Export functionality coming soon...');
                }),
        ];
    }

    protected function getTableBulkActions(): array
    {
        return [
            Tables\Actions\BulkAction::make('delete')
                ->label('Delete Selected')
                ->icon('heroicon-o-trash')
                ->color('danger')
                ->requiresConfirmation()
                ->action(function ($records) {
                    $count = $records->count();
                    $records->each->delete();

                    $this->notify('success', "Deleted {$count} activity logs.");
                })
                ->deselectRecordsAfterCompletion(),

            Tables\Actions\BulkAction::make('export_selected')
                ->label('Export Selected')
                ->icon('heroicon-o-arrow-down-tray')
                ->action(function ($records) {
                    // Implement export selected functionality
                    $count = $records->count();
                    $this->notify('info', "Export {$count} logs functionality coming soon...");
                }),
        ];
    }

    protected function getTableFiltersLayout(): ?string
    {
        return 'above'; // Atau 'below' atau null untuk sidebar
    }

    protected function getTableFiltersFormColumns(): int
    {
        return 3; // Jumlah kolom untuk filter form
    }

    public function getTabs(): array
    {
        return [
            'all' => Tab::make('All Activities'),

            'today' => Tab::make('Today')
                ->modifyQueryUsing(fn(Builder $query) => $query->whereDate('created_at', today()))
                ->badge(Activity::whereDate('created_at', today())->count()),

            'authentication' => Tab::make('Authentication')
                ->modifyQueryUsing(
                    fn(Builder $query) =>
                    $query->where(function ($q) {
                        $q->where('description', 'like', '%login%')
                            ->orWhere('description', 'like', '%logout%')
                            ->orWhere('description', 'like', '%failed%');
                    })
                )
                ->badge(Activity::where(function ($q) {
                    $q->where('description', 'like', '%login%')
                        ->orWhere('description', 'like', '%logout%')
                        ->orWhere('description', 'like', '%failed%');
                })->count()),

            'user_actions' => Tab::make('User Actions')
                ->modifyQueryUsing(
                    fn(Builder $query) =>
                    $query->where(function ($q) {
                        $q->where('description', 'like', '%created%')
                            ->orWhere('description', 'like', '%updated%')
                            ->orWhere('description', 'like', '%deleted%');
                    })
                )
                ->badge(Activity::where(function ($q) {
                    $q->where('description', 'like', '%created%')
                        ->orWhere('description', 'like', '%updated%')
                        ->orWhere('description', 'like', '%deleted%');
                })->count()),

            'system' => Tab::make('System')
                ->modifyQueryUsing(fn(Builder $query) => $query->whereNull('causer_id'))
                ->badge(Activity::whereNull('causer_id')->count()),
        ];
    }
}
