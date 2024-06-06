<p align="center"><a href="https://stki.ir" target="_blank"><img src="https://cdn-icons-png.freepik.com/512/974/974593.png" width="200"></a></p>

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

3. Create tables: before run the below command, make sure you have database user credential same in .env file.

```
php artisan migrate
```

4. Add some tasks, driver and truck data:

```
php artisan db:seed
```

Front-End: we use React, Redux Toolkit, Vite Lastest version for spa purpose.
1. Install packages:

```
npm install
```

## Demo image
<img src="https://stki.ir/img/demo.png">

