<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;
use Illuminate\Support\Facades\Auth;

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
        return view('messageBoard.index', ['messages' => $messages, 'plans' => $this::PLANS, 'tenant_name' => $this::TENANT_NAME]);
    }

    public function post(Request $request)
    {
        $validated = $request->validate([
            'message' => 'required|max:255'
        ]);
        // 現在はtenant_idは1で固定する
        $message = Message::create([
            'tenant_id' => "1",
            'user_id' => Auth::id(),
            'message' => $request->message,
        ]);
        $request->session()->regenerateToken();
        return redirect()->route('board');
    }
}
