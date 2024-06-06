<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{config('app.name')}}</title>
        <link rel="icon" type="image/x-icon" href="/img/icon.png">
        @viteReactRefresh
    </head>
    <body>
        <div id='root'></div>
        @vite('resources/js/app.jsx')
    </body>
</html>
