<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BlogResource\Pages;
use App\Filament\Resources\BlogResource\RelationManagers;
use App\Models\Blog;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Forms\Set;
use Filament\Forms\Components\IconColumn;
use Illuminate\Support\Str;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Forms\Components\Placeholder;
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
                    ->afterStateUpdated(function (Get $get, Set $set, ?string $state) { // Ubah type hinting
                        if (! $get('is_slug_changed_manually') && filled($state)) {
                            $set('slug', Str::slug($state));
                        }
                    })
                    ->reactive()
                    ->required()
                    ->columnSpanFull(),

                Forms\Components\TextInput::make('slug')
                    ->label('Slug (URL)')
                    ->required()
                    ->unique(ignoreRecord: true)
                    ->afterStateUpdated(function (Set $set) { // Ubah menjadi closure explicit
                        $set('is_slug_changed_manually', true);
                    }),

                Forms\Components\Toggle::make('is_slug_changed_manually')
                    ->hidden()
                    ->default(false),

                Forms\Components\RichEditor::make('body')
                    ->required(),

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
                    ->visibility('public'),

                Forms\Components\Textarea::make('excerpt')
                    ->nullable(),

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
