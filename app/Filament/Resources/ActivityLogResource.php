<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ActivityLogResource\Pages;
use Filament\Tables;
use Filament\Resources\Resource;
use Spatie\Activitylog\Models\Activity;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\Filter;
use Illuminate\Database\Eloquent\Builder;
use Filament\Forms;
use Carbon\Carbon;

class ActivityLogResource extends Resource
{
    protected static ?string $model = Activity::class;
    protected static ?string $navigationIcon = 'heroicon-o-clipboard-document';
    protected static ?string $navigationLabel = 'Activity Logs';
    protected static ?string $navigationGroup = 'System';

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Time')
                    ->dateTime()
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('log_name')
                    ->label('Log Name')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('description')
                    ->label('Description')
                    ->searchable()
                    ->sortable()
                    ->color(fn(string $state): string => match (true) {
                        str_contains(strtolower($state), 'logged in') => 'success',
                        str_contains(strtolower($state), 'logged out') => 'danger',
                        str_contains(strtolower($state), 'edit') => 'warning',
                        str_contains(strtolower($state), 'created') => 'info',
                        str_contains(strtolower($state), 'deleted') => 'danger',
                        str_contains(strtolower($state), 'updated') => 'warning',
                        str_contains(strtolower($state), 'failed') => 'danger',
                        default => 'gray',
                    })
                    ->badge(),

                Tables\Columns\TextColumn::make('causer.name')
                    ->label('User')
                    ->searchable()
                    ->sortable()
                    ->placeholder('System'),

                Tables\Columns\TextColumn::make('subject_type')
                    ->label('Subject')
                    ->searchable()
                    ->formatStateUsing(fn(?string $state): string => $state ? class_basename($state) : '-'),

                Tables\Columns\TextColumn::make('properties')
                    ->label('Details')
                    ->limit(50)
                    ->tooltip(function ($record) {
                        $properties = $record->properties->toArray();
                        return !empty($properties) ? json_encode($properties, JSON_PRETTY_PRINT) : 'No details';
                    })
                    ->formatStateUsing(function ($record) {
                        $properties = $record->properties->toArray();
                        if (empty($properties)) return '-';

                        if (isset($properties['ip'])) {
                            return "IP: {$properties['ip']}";
                        }

                        return collect($properties)->map(function ($value, $key) {
                            return "{$key}: " . (is_array($value) ? json_encode($value) : $value);
                        })->join(', ');
                    }),
            ])
            ->filters([
                // Filter berdasarkan activity type
                SelectFilter::make('activity_type')
                    ->label('Activity Type')
                    ->options([
                        'login' => 'Login Activities',
                        'logout' => 'Logout Activities',
                        'edit' => 'Edit Activities',
                        'create' => 'Create Activities',
                        'delete' => 'Delete Activities',
                        'failed' => 'Failed Activities',
                    ])
                    ->query(function (Builder $query, array $data): Builder {
                        return $query->when(
                            $data['value'],
                            function (Builder $query, string $type): Builder {
                                return match ($type) {
                                    'login' => $query->where('description', 'like', '%logged in%'),
                                    'logout' => $query->where('description', 'like', '%logged out%'),
                                    'edit' => $query->where('description', 'like', '%edit%')
                                        ->orWhere('description', 'like', '%updated%'),
                                    'create' => $query->where('description', 'like', '%created%')
                                        ->orWhere('description', 'like', '%registered%'),
                                    'delete' => $query->where('description', 'like', '%deleted%'),
                                    'failed' => $query->where('description', 'like', '%failed%'),
                                    default => $query,
                                };
                            }
                        );
                    }),

                // Filter berdasarkan user
                // SelectFilter::make('causer_id')
                //     ->label('User')
                //     ->relationship('causer', 'name')
                //     ->searchable()
                //     ->preload(),

                // Filter berdasarkan log name
                SelectFilter::make('log_name')
                    ->label('Log Name')
                    ->options(function () {
                        return Activity::query()
                            ->distinct()
                            ->pluck('log_name', 'log_name')
                            ->filter()
                            ->toArray();
                    }),

                // Filter berdasarkan subject type
                SelectFilter::make('subject_type')
                    ->label('Subject Type')
                    ->options(function () {
                        return Activity::query()
                            ->distinct()
                            ->pluck('subject_type')
                            ->filter()
                            ->mapWithKeys(fn($type) => [$type => class_basename($type)])
                            ->toArray();
                    }),

                // Filter berdasarkan tanggal
                Filter::make('created_at')
                    ->form([
                        Forms\Components\DatePicker::make('created_from')
                            ->label('From Date'),
                        Forms\Components\DatePicker::make('created_until')
                            ->label('Until Date'),
                    ])
                    ->query(function (Builder $query, array $data): Builder {
                        return $query
                            ->when(
                                $data['created_from'],
                                fn(Builder $query, $date): Builder => $query->whereDate('created_at', '>=', $date),
                            )
                            ->when(
                                $data['created_until'],
                                fn(Builder $query, $date): Builder => $query->whereDate('created_at', '<=', $date),
                            );
                    })
                    ->indicateUsing(function (array $data): array {
                        $indicators = [];

                        if ($data['created_from'] ?? null) {
                            $indicators['created_from'] = 'From: ' . Carbon::parse($data['created_from'])->toFormattedDateString();
                        }

                        if ($data['created_until'] ?? null) {
                            $indicators['created_until'] = 'Until: ' . Carbon::parse($data['created_until'])->toFormattedDateString();
                        }

                        return $indicators;
                    }),

                // Filter untuk hari ini
                Filter::make('today')
                    ->label('Today\'s Activities')
                    ->query(fn(Builder $query): Builder => $query->whereDate('created_at', today()))
                    ->toggle(),

                // Filter untuk aktivitas dengan properties
                Filter::make('has_properties')
                    ->label('Has Details')
                    ->query(fn(Builder $query): Builder => $query->whereJsonLength('properties', '>', 0))
                    ->toggle(),
            ])
            ->actions([
                Tables\Actions\ViewAction::make()
                    ->modalContent(function ($record) {
                        $properties = $record->properties->toArray();

                        return view('filament.resources.activity-log.view-modal', [
                            'record' => $record,
                            'properties' => $properties
                        ]);
                    }),
            ])
            ->defaultSort('created_at', 'desc')
            ->searchable()
            ->poll('30s') // Auto refresh setiap 30 detik
            ->striped()
            ->paginated([10, 25, 50, 100]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListActivityLogs::route('/'),
        ];
    }

    // Disable create, edit, delete actions
    public static function canCreate(): bool
    {
        return false;
    }

    public static function canEdit($record): bool
    {
        return false;
    }

    public static function canDelete($record): bool
    {
        return false;
    }

    public static function canDeleteAny(): bool
    {
        return false;
    }
}
