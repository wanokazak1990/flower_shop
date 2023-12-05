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
    /**
     * [GET]    [api/admin/categories]                      GET ALL CATEGORIES
     * [GET]    [api/admin/categories/{int category_id}]    GET CATEGORY BY ID
     * [POST]   [api/admin/categories/]                     STORE CATEGORY [name = string, sort = ?int]
     * [PATCH]  [api/admin/categories/{int category_id}]    UPDATE CATEGORY BY ID [name = string, sort = ?int]
     * [DELETE] [api/admin/categories/{int category_id}]    DELETE CATEGORY
     */
    Route::resource('categories',  \App\Http\Controllers\Api\V1\Category\CategoryController::class)->except(['edit', 'create']);

    /**
     * [GET]    [api/admin/products]                     GET ALL PRODUCTS
     * [GET]    [api/admin/products/{int product_id}]    GET PRODUCT BY ID
     * [POST]   [api/admin/products/]                    STORE PRODUCT [name = string, sort = ?int]
     * [PATCH]  [api/admin/products/{int product_id}]    UPDATE PRODUCT BY ID [name = string, sort = ?int]
     * [DELETE] [api/admin/products/{int product_id}]    DELETE PRODUCT
     */
    Route::resource('products',  \App\Http\Controllers\Api\V1\Product\ProductController::class)->except(['edit', 'create']);
});
