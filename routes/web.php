<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use Inertia\Inertia;

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\BuilderController;
use App\Http\Controllers\Auth\OtpController; // 👈 add this
use App\Http\Controllers\AccountSettingsController;


Route::inertia('/', 'Welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::get('/dashboard', [DashboardController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::middleware(['auth'])->group(function () {

    Route::get('/create-site', [BuilderController::class, 'create']);

    Route::get('/editor/{id}', [BuilderController::class, 'editor']);

    Route::post('/save-site/{id}', [BuilderController::class, 'save']);

});

// 👇 OTP routes — add these
Route::middleware('guest')->group(function () {
    Route::get('/otp/verify',  [OtpController::class, 'show'])->name('otp.verify');
    Route::post('/otp/verify', [OtpController::class, 'verify'])->name('otp.verify.submit');
    Route::post('/otp/resend', [OtpController::class, 'resend'])->name('otp.resend');
});

Route::get('/build-your-website', function () {
    return Inertia::render('BuildYourWebsite');
});

Route::get('/free-website-design', function () {
    return Inertia::render('Freewebsitedesign');
});

Route::get('/free-website-transfer', function () {
    return Inertia::render('Freewebsitetransfer');
});

Route::get('/features', function () {
    return Inertia::render('Features');
});

Route::get('/templates', function () {
    return Inertia::render('Templates');
});


Route::get('/account-settings', [AccountSettingsController::class, 'index'])->name('account.settings');
Route::post('/account-settings/update', [AccountSettingsController::class, 'update'])->name('account.settings.update');
require __DIR__.'/settings.php';