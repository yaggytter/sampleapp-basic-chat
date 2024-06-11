<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class MessageController extends Controller
{
    public const PLANS = [
        'プラン A',
        'プラン B',
        'プラン C',
    ];
    public const TENANT_NAME = 'Tenant 1';

    public function index()
    {
        // 現在はtenant_idは1で固定する
        $messages = Message::where('tenant_id', "1")->get();
        // ユーザーの所属しているテナントIDを入れる
        // $userId = Auth::id();
        // $user = User::find($userId);
        // $tenantId = $user->tenant_id;
        // $messages = Message::where('tenant_id', $tenant_id)->get();
        return view('messageBoard.index', ['messages' => $messages, 'plans' => $this::PLANS, 'tenant_name' => $this::TENANT_NAME]);
    }

    public function post(Request $request)
    {
        $validated = $request->validate([
            'message' => 'required|max:255',
        ]);

        // 現在はtenant_idは1で固定する
        $tenantId = "1";
        // ユーザーの所属しているテナントIDを入れる
        // $userId = Auth::id();
        // $user = User::find($userId);
        // $tenantId = $user->tenant_id;
        $userId = Auth::id();
        $message = $request->message;

        DB::statement("INSERT INTO messages (tenant_id, user_id, message, created_at) VALUES ('$tenantId', '$userId', '$message', now())");

        $request->session()->regenerateToken();
        return redirect()->route('board');
    }
}
