<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SiteSettingResource\Pages;
use App\Filament\Resources\SiteSettingResource\RelationManagers;
use App\Models\SiteSetting;
use Doctrine\DBAL\Schema\Schema;
use Dom\Text;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\KeyValue;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class SiteSettingResource extends Resource
{
    protected static ?string $model = SiteSetting::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';



    public static function form(Form $form): Form
    {
        return $form->schema([
            TextInput::make('site_name')->required()->label('Nama Blog'),
            Textarea::make('site_description')->label('Deskripsi')->rows(3),

            TextInput::make('seo_title')->label('SEO Title'),
            Textarea::make('seo_description')->label('SEO Description')->rows(2),

            FileUpload::make('logo_path')
                ->label('Logo')
                ->image()
                ->directory('logos'),

            Forms\Components\Section::make('URL Sosial Media')
                ->columns([
                    'sm' => 1,
                    'md' => 2,
                ])
                ->schema([
                    TextInput::make('instagram_url')->label('Instagram URL'),
                    TextInput::make('facebook_url')->label('Facebook URL'),
                    TextInput::make('twitter_url')->label('Twitter URL'),
                    TextInput::make('linkedin_url')->label('LinkedIn URL'),
                ])->columns([
                    'sm' => 1,
                    'md' => 2,
                ])->columnSpanFull(),

        ]);
    }


    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('site_name')->label('Nama Blog')->searchable(),
                TextColumn::make('seo_title')->label('SEO Title')->limit(30),
                ImageColumn::make('logo_path')
                    ->label('Logo')
                    ->circular()
                    ->size(50)
                    ->getStateUsing(fn($record) => $record->logo_path ? asset('storage/' . $record->logo_path) : null)
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

    public static function canCreate(): bool
    {
        return \App\Models\SiteSetting::count() === 0;
    }
    public static function canDeleteAny(): bool
    {
        return false; // Prevent deletion of site settings
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListSiteSettings::route('/'),
            'create' => Pages\CreateSiteSetting::route('/create'),
            'edit' => Pages\EditSiteSetting::route('/{record}/edit'),
        ];
    }
}
