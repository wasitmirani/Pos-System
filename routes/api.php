<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\backend\api\pos\PosController;
use App\Http\Controllers\backend\api\order\OrderController;
use App\Http\Controllers\backend\api\table\TableController;
use App\Http\Controllers\backend\api\product\ProductController;
use App\Http\Controllers\backend\api\category\CategoryController;
use App\Http\Controllers\backend\api\dashboard\DashboardController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});


Route::middleware(['auth:sanctum'])->group(function () {
    Route::resource('category', CategoryController::class);
    Route::resource('product', ProductController::class);
    Route::resource('table', TableController::class);

    Route::prefix('pos')->group(function () {
        Route::get('/',[PosController::class,'getAllProducts']);
        Route::prefix('order')->group(function () {
            Route::post('/create',[PosController::class,'createOrder']);
            Route::get('update-status/{id}',[PosController::class,'updateOrderStatus']);
            Route::get('delete/{id}',[PosController::class,'deleteOrder']);
        });
    });

    Route::prefix('orders')->group(function () {
     Route::get('/daily',[OrderController::class,'getDailyOrders']);
     Route::get('/cooking',[OrderController::class,'getCookingOrders']);
      Route::get('/all',[OrderController::class,'getAllOrders']);
    });

    Route::prefix('dashboard')->group(function () {
        Route::get('/analytics',[DashboardController::class,'getAnalytics']);
    });


});
