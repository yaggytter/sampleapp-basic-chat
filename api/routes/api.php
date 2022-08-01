<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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

Route::get('/board', 'App\Http\Controllers\MessageApiController@index');
Route::post('/post', 'App\Http\Controllers\MessageApiController@post');
Route::get('/plan', 'App\Http\Controllers\PlanApiController@index');
Route::get('/tenant', 'App\Http\Controllers\TenantApiController@index');
