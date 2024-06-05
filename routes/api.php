<?php

use App\Http\Controllers\TasksController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/trip', function (Request $request) {
    return response()->json(['status' => true, 'res' => 'ok']);
});
Route::prefix('tasks')->group(function () {
    Route::get('/', [TasksController::class, 'index'])->name('tasks_index');
});
