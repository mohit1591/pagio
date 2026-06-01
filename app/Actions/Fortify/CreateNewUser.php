<?php

namespace App\Actions\Fortify;

use App\Concerns\PasswordValidationRules;
use App\Concerns\ProfileValidationRules;
use App\Mail\SendOtpMail;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules, ProfileValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     */
    public function create(array $input): User
    {
        Validator::make($input, [
            ...$this->profileRules(),
            'password' => $this->passwordRules(),
        ])->validate();

        // Generate 6-digit OTP
        $otp = str_pad(random_int(0, 999999), 6, '0', STR_PAD_LEFT);

        // Create user (unverified)
        $user = User::create([
            'name'           => $input['name'],
            'email'          => $input['email'],
            'password'       => $input['password'],
            'otp'            => $otp,
            'otp_expires_at' => now()->addMinutes(10),
            'otp_verified'   => false,
        ]);

        // Send OTP email
        Mail::to($user->email)->send(new SendOtpMail($otp));

        // Store user id in session for OTP verification
        session(['pending_user_id' => $user->id]);

        return $user;
    }
}