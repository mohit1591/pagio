<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Site;

class DashboardController extends Controller
{
    public function index()
    {
        $sites = Site::all();

        return Inertia::render('Dashboard', [
            'sites' => $sites
        ]);
    }
}