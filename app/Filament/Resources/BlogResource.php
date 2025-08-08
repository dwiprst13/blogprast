<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BlogResource\Pages;
use App\Filament\Resources\BlogResource\RelationManagers;
use App\Models\Blog;
use Filament\Actions\Action;
use Filament\Forms;
use Filament\Forms\Components\Actions\Action as ActionsAction;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Forms\Set;
use Filament\Forms\Components\IconColumn;
use Illuminate\Support\Str;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\ViewField;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class BlogResource extends Resource
{
    protected static ?string $model = Blog::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static function mutateFormDataBeforeCreate(array $data): array
    {
        $data['user_id'] = auth()->id();
        return $data;
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Blog')
                    ->columns([
                        'sm' => 1,
                        'md' => 2,
                    ])
                    ->schema([
                        Forms\Components\TextInput::make('image_caption')
                            ->label('Keterangan Gambar')
                            ->nullable(),

                        Forms\Components\TextInput::make('image_source')
                            ->label('Sumber Gambar')
                            ->nullable(),

                        Forms\Components\KeyValue::make('key_points')
                            ->label('Poin-Poin Utama')
                            ->keyLabel('Poin')
                            ->valueLabel('Deskripsi'),
                    ]),

                Forms\Components\TextInput::make('title')
                    ->label('Judul')
                    ->afterStateUpdated(function (Get $get, Set $set, ?string $state) {
                        if (! $get('is_slug_changed_manually') && filled($state)) {
                            $set('slug', Str::slug($state));
                        }
                    })
                    ->reactive()
                    ->required()
                    ->columnSpanFull(),

                TextInput::make('slug')
                    ->label('Slug (URL)')
                    ->required()
                    ->unique(ignoreRecord: true)
                    ->suffixAction( // tombol di ujung kanan input
                        ActionsAction::make('generateSlug')
                            ->label('Buat')
                            ->icon('heroicon-o-sparkles')
                            ->action(function ($state, $get, $set) {
                                $title = $get('site_name'); // ganti sesuai field sumber
                                if ($title) {
                                    $set('slug', Str::slug($title));
                                    $set('is_slug_changed_manually', true);
                                }
                            })
                    ),

                Forms\Components\Actions::make([
                    Forms\Components\Actions\Action::make('edit_excerpt')
                        ->label('Edit Ringkasan')
                        ->icon('heroicon-o-document-text')
                        ->color('gray')
                        ->modalHeading('Edit Ringkasan Blog')
                        ->modalWidth('5xl')
                        ->form([
                            Forms\Components\RichEditor::make('excerpt')
                                ->label('Ringkasan')
                                ->nullable()
                                ->toolbarButtons([
                                    'bold',
                                    'bulletList',
                                    'italic',
                                    'link',
                                    'orderedList',
                                    'strike',
                                    'underline',
                                ])
                                ->columnSpanFull()
                        ])
                        ->action(function (array $data, Forms\Set $set): void {
                            $set('excerpt', $data['excerpt']);
                        })
                        ->fillForm(function (Forms\Get $get): array {
                            return [
                                'excerpt' => $get('excerpt'),
                            ];
                        })
                ])
                    ->columnSpanFull(),

                Toggle::make('is_slug_changed_manually')
                    ->hidden()
                    ->default(false),
                Forms\Components\Actions::make([
                    Forms\Components\Actions\Action::make('edit_body')
                        ->label('Edit Konten')
                        ->icon('heroicon-o-pencil-square')
                        ->color('primary')
                        ->modalHeading('Edit Konten Blog')
                        ->modalWidth('7xl')
                        ->form([
                            Forms\Components\RichEditor::make('body')
                                ->label('Konten')
                                ->required()
                                ->toolbarButtons([
                                    'attachFiles',
                                    'blockquote',
                                    'bold',
                                    'bulletList',
                                    'codeBlock',
                                    'h2',
                                    'h3',
                                    'italic',
                                    'link',
                                    'orderedList',
                                    'redo',
                                    'strike',
                                    'underline',
                                    'undo',
                                ])
                                ->columnSpanFull()
                        ])
                        ->action(function (array $data, Forms\Set $set): void {
                            $set('body', $data['body']);
                        })
                        ->fillForm(function (Forms\Get $get): array {
                            return [
                                'body' => $get('body'),
                            ];
                        })
                ])
                    ->columnSpanFull(),

                Forms\Components\ViewField::make('thumbnail_preview')
                    ->view('filament.custom.thumbnail-preview')
                    ->visible(fn($record) => filled($record?->thumbnail))
                    ->viewData(fn($record) => [
                        'thumbnail' => $record?->thumbnail,
                    ]),

            Forms\Components\FileUpload::make('thumbnail')
                ->image()
                ->directory('thumbnails')
                ->preserveFilenames()
                ->visibility('public')
                ->statePath('new_thumbnail') // Menggunakan path berbeda untuk file baru
                ->afterStateUpdated(function ($state, Forms\Set $set) {
                    if ($state) {
                        $set('thumbnail', $state);
                    }
                })
                ->helperText(
                    fn($record) => $record && $record->thumbnail ?
                        'File saat ini: ' . basename($record->thumbnail) . ' (Preview ditampilkan di samping). Upload file baru untuk mengganti.' :
                        'Upload gambar thumbnail baru'
                ),

                Forms\Components\Toggle::make('published')
                    ->default(false),

                Forms\Components\DateTimePicker::make('published_at')
                    ->nullable(),

                Forms\Components\Select::make('category_id')
                    ->relationship('category', 'name')
                    ->nullable(),

                Forms\Components\Select::make('tags')
                    ->relationship('tags', 'name')
                    ->multiple()
            ]);
    }



    public static function table(Table $table): Table
    {
        return $table
            ->columns([

                Tables\Columns\TextColumn::make('title')
                    ->label('Judul')
                    ->searchable()
                    ->sortable()
                    ->limit(25),

                Tables\Columns\TextColumn::make('published')
                    ->label('Status')
                    ->formatStateUsing(fn(bool $state): string => $state ? 'Publish' : 'Draft')
                    ->sortable(),

                Tables\Columns\TextColumn::make('category.name')
                    ->label('Kategori')
                    ->sortable(),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Dibuat Pada')
                    ->dateTime()
                    ->sortable(),
            ])->filters([
                //
            ])->actions([
                Tables\Actions\ViewAction::make(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBlogs::route('/'),
            'create' => Pages\CreateBlog::route('/create'),
            'view' => Pages\ViewBlog::route('/{record}'),
            'edit' => Pages\EditBlog::route('/{record}/edit'),
        ];
    }
}
