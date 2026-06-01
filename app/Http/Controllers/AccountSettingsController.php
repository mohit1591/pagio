<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AccountSettingsController extends Controller
{
    public function index()
    {
        return Inertia::render('AccountSettings', [
            'user' => auth()->user()
        ]);
    }

    public function update(Request $request)
    {
        $user = auth()->user();

        $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName'  => 'nullable|string|max:255',
            'phone'     => 'nullable|string|max:20',
        ]);

        $user->update([
            'name'  => trim($request->firstName . ' ' . $request->lastName),
            'phone' => $request->phone,
        ]);

        return back()->with('success', 'Changes saved!');
    }
}