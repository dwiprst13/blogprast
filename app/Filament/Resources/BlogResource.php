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
                    ->suffixAction(
                        ActionsAction::make('generateSlug')
                            ->label('Buat')
                            ->icon('heroicon-o-sparkles')
                            ->action(function ($state, $get, $set) {
                                $title = $get('site_name');
                                if ($title) {
                                    $set('slug', Str::slug($title));
                                    $set('is_slug_changed_manually', true);
                                }
                            })
                    ),

                Toggle::make('is_slug_changed_manually')
                    ->hidden()
                    ->default(false),

                // Form biasa untuk excerpt (hanya muncul saat create/data kosong)
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
                    ->columnSpanFull(),

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
                    ->columnSpanFull(),

                Forms\Components\ViewField::make('thumbnail_preview')
                    ->view('filament.custom.thumbnail-preview')
                    ->visible(fn($record) => filled($record?->thumbnail))
                    ->viewData(fn($record) => [
                        'thumbnail' => $record?->thumbnail,
                    ]),

                Forms\Components\FileUpload::make('new_thumbnail')
                    ->image()
                    ->directory('thumbnails')
                    ->preserveFilenames()
                    ->visibility('public')
                    ->afterStateUpdated(function ($state, Forms\Set $set) {
                        if ($state) {
                            $set('thumbnail', $state); // tetap isi kolom thumbnail saat upload baru
                        }
                    })
                    ->helperText(function ($record) {
                        if ($record && $record->thumbnail) {
                            return 'File saat ini: ' . basename($record->thumbnail) .
                                ' (Preview sudah ada di samping). Upload file baru untuk mengganti.';
                        }
                        return 'Upload gambar thumbnail baru';
                    }),


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

    protected function mutateFormDataBeforeSave(array $data): array
    {
        if (!empty($data['new_thumbnail'])) {
            $data['thumbnail'] = $data['new_thumbnail'];
        }
        unset($data['new_thumbnail']); // biar nggak nyangkut di DB
        return $data;
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
                    ->sortable()
                    ->color(fn(string $state): string => match (true) {
                        str_contains(strtolower($state), 'Draft') => 'danger',
                        default => 'success',
                    }),

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
