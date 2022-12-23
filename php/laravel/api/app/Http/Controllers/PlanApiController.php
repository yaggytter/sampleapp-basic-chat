<?php

namespace App\Http\Controllers;

class PlanApiController extends Controller
{
    public function index()
    {
        // プラン名リスト enumかテーブルから取得したいけど仮おき
        return response()->json(['ぷらんA', 'ぷらんB', 'ぷらんC']);
    }
}
