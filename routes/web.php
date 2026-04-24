<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'Welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'Dashboard')->name('dashboard');
});

// 👇 ADD THIS
Route::middleware(['auth'])->group(function () {
    Route::inertia('/editor', 'Editor')->name('editor');
});

require __DIR__.'/settings.php';