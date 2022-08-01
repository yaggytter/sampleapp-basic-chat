<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('auth')->group(function () {
    Route::get('/', function () {
        return view('welcome');
    });
    Route::get('/dispatch', 'App\Http\Controllers\DispatchController@index')->name('dispatch');
    Route::get('/board', 'App\Http\Controllers\MessageController@index')->name('board');
    Route::post('/post', 'App\Http\Controllers\MessageController@post')->name('post');
});

require __DIR__ . '/auth.php';
