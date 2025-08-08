<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Prast Blog') }}</title>
    <meta name="description" content="Prast Blog menyajikan artikel terbaru seputar teknologi, pemrograman, dan dunia digital untuk membantu kamu terus berkembang.">
    <meta name="keywords" content="blog teknologi, pemrograman, Laravel, React, coding, dev, tutorial">
    <meta name="author" content="Dwi Prasetia">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:title" content="{{ config('app.name', 'Prast Blog') }}">
    <meta property="og:description" content="Artikel terbaru seputar teknologi dan pemrograman.">
    <meta property="og:image" content="{{ asset('images/preview.png') }}">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{{ config('app.name', 'Prast Blog') }}">
    <meta name="twitter:description" content="Temukan insight teknologi terbaru di Prast Blog.">
    <meta name="twitter:image" content="{{ asset('images/preview.png') }}">

    <!-- Canonical URL -->
    <link rel="canonical" href="{{ url()->current() }}">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>