<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Message;

class MessageApiController extends Controller
{
    public function index()
    {
        $messages = DB::table('messages')
            ->select('messages.*')
            ->where('tenant_id', "1")
            ->get();
        return response()->json($messages);
    }

    public function post(Request $request)
    {
        $result = Message::create([
            'tenant_id' => "1",
            'user_id' => $request->user_id,
            'message' => $request->message,
        ]);

        return response()->json($result);
    }
}
