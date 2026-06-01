<?php

namespace App\Models;

use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;

#[Fillable(['name', 'email', 'password', 'otp', 'otp_expires_at', 'otp_verified'])]  // 👈 add 3 fields
#[Hidden(['password', 'two_factor_secret', 'two_factor_recovery_codes', 'remember_token', 'otp'])]  // 👈 hide otp too
class User extends Authenticatable
{
    /** @use HasFactory<UserFactory> */
    use HasFactory, Notifiable, TwoFactorAuthenticatable;

    protected function casts(): array
    {
        return [
            'email_verified_at'       => 'datetime',
            'password'                => 'hashed',
            'two_factor_confirmed_at' => 'datetime',
            'otp_expires_at'          => 'datetime',  // 👈 add
            'otp_verified'            => 'boolean',   // 👈 add
        ];
    }
}