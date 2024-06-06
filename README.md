<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

## About Trip Management

We have some pre-defined tasks, drivers and trucks. We create new trip and then assign task to it.

- [Online Demo](https://stki.ir).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Setup instructions

Back-End: we use laravel framework v11 and mysql.
1. Install laravel packages:

```
composer install
```
2. Create mysql trips database:

```
CREATE DATABASE trips CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

3. Create tables:

```
php artisan migrate
```

4. Add some tasks, driver and truck data:

```
php artisan db:seed
```

Front-End: we use React, Redux Toolkit, Vite Lastest version for spa purpose.

