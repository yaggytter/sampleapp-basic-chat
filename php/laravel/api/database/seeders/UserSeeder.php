<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->truncate();
        DB::table('users')->insert([
            [
                'name' => 'Blade User 1',
                'email' => 'user@example.com',
                'role_id' => Role::getBladeId(),
                'password' => Hash::make('password'),
            ],
            [
                'name' => 'React User 1',
                'email' => 'user2@example.com',
                'role_id' => Role::getReactId(),
                'password' => Hash::make('password'),
            ],
            [
                'name' => 'Blade User 2',
                'email' => 'user3@example.com',
                'role_id' => Role::getBladeId(),
                'password' => Hash::make('password'),
            ],
            [
                'name' => 'React User 2',
                'email' => 'user4@example.com',
                'role_id' => Role::getReactId(),
                'password' => Hash::make('password'),
            ],
        ]);
    }
}
