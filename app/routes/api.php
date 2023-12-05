<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('admin')->group(function(){
    //Route::prefix('products')->group(function(){
        Route::resource('categories',  \App\Http\Controllers\Api\V1\Category\CategoryController::class)->except(['edit', 'create']);
        Route::resource('products',  \App\Http\Controllers\Api\V1\Product\ProductController::class)->except(['edit', 'create']);
    //})
});
