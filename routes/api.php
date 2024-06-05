<?php

use App\Http\Controllers\TasksController;
use App\Http\Controllers\TripsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('tasks')->group(function () {
    Route::get('/', [TripsController::class, 'index'])->name('tasks_index');
});
Route::prefix('tasks')->group(function () {
    Route::get('/', [TasksController::class, 'index'])->name('tasks_index');
});
