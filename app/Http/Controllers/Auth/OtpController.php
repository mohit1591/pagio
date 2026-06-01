<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Mail\SendOtpMail;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class OtpController extends Controller
{
    public function show(): Response|RedirectResponse
    {
        if (!session('pending_user_id')) {
            return redirect()->route('register');
        }

        return Inertia::render('auth/VerifyOtp');
    }

    // 👇 Return type changed from RedirectResponse to mixed
    public function verify(Request $request): mixed
    {
        $request->validate([
            'otp' => 'required|string|size:6',
        ]);

        $user = User::find(session('pending_user_id'));

        if (!$user) {
            return redirect()->route('register')
                ->withErrors(['otp' => 'Session expired. Please register again.']);
        }

        if ($user->otp !== $request->otp || now()->isAfter($user->otp_expires_at)) {
            return back()->withErrors(['otp' => 'Invalid or expired OTP. Please try again.']);
        }

        $user->update([
            'otp'            => null,
            'otp_expires_at' => null,
            'otp_verified'   => true,
        ]);

        session()->forget('pending_user_id');
        Auth::login($user);

        // 👇 Changed to Inertia::location() for full page redirect
        return Inertia::location(route('dashboard'));
    }

    public function resend(): RedirectResponse
    {
        $user = User::find(session('pending_user_id'));

        if (!$user) {
            return redirect()->route('register')
                ->withErrors(['otp' => 'Session expired. Please register again.']);
        }

        $otp = str_pad(random_int(0, 999999), 6, '0', STR_PAD_LEFT);

        $user->update([
            'otp'            => $otp,
            'otp_expires_at' => now()->addMinutes(10),
        ]);

        Mail::to($user->email)->send(new SendOtpMail($otp));

        return back()->with('status', 'A new OTP has been sent to your email.');
    }
}