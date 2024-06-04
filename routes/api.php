<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/trip', function (Request $request) {
    return response()->json(['status' => true, 'res' => 'ok']);
});
