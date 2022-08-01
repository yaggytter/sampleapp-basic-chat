<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Models\Role;


class DispatchController extends Controller
{
    public function index()
    {
        if (Auth::user()->role_id === Role::getReactId()) {
            return redirect(getenv('SAASUS_REDIRECT_URL_REACT'));
        }
        return redirect(route('board'));
    }
}
