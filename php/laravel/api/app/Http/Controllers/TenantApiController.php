<?php

namespace App\Http\Controllers;

class TenantApiController extends Controller
{
    public function index()
    {
        // テナント名 Auth？とかから取得したいけど仮おき
        return response()->json('Anti-Pattern Inc.');
    }
}
