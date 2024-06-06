<?php

use App\Http\Controllers\TasksController;
use App\Http\Controllers\TripsController;
use Illuminate\Support\Facades\Route;


Route::prefix('trips')->group(function () {
    Route::get('/',       [TripsController::class, 'index'])->name('trips_index');
    Route::get('/add',    [TripsController::class, 'add'])->name('trips_add');
    Route::post('/store', [TripsController::class, 'store'])->name('trips_store');
});
Route::prefix('tasks')->group(function () {
    Route::get('/',        [TasksController::class, 'index'])->name('tasks_index');
    Route::post('/assign', [TasksController::class, 'assign'])->name('tasks_assign');
});
