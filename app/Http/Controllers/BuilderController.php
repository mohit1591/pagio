<?php

namespace App\Http\Controllers;

use App\Models\Site;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Browsershot\Browsershot;

class BuilderController extends Controller
{
    // CREATE WEBSITE
    public function create()
    {
        $site = Site::create([

            'name' => 'New Website',

            'status' => 'Unpublished'

        ]);

        return redirect('/editor/' . $site->id);
    }

    // OPEN EDITOR
    public function editor($id)
    {
        $site = Site::findOrFail($id);

        return Inertia::render('Editor', [

            'site' => $site

        ]);
    }

    // SAVE WEBSITE
    public function save(Request $request, $id)
    {
        $site = Site::findOrFail($id);

        // SAVE WEBSITE DATA
        $site->html = $request->html;

        $site->css = $request->css;

        $site->components =
            json_encode($request->components);

        $site->styles =
            json_encode($request->styles);

        // FULL HTML
        $html = "
            <html>

                <head>

                    <meta charset='UTF-8'>

                    <style>

                        body{
                            margin:0;
                            padding:0;
                        }

                        {$request->css}

                    </style>

                </head>

                <body>

                    {$request->html}

                </body>

            </html>
        ";

        // IMAGE NAME
        $fileName =
            'site-' . $site->id . '.png';

        try {

            // GENERATE SCREENSHOT
            Browsershot::html($html)

                ->windowSize(1400, 900)

                ->setChromePath(
                    'C:\Program Files\Google\Chrome\Application\chrome.exe'
                )

                ->save(

                    public_path(
                        'screenshots/' . $fileName
                    )

                );

            // SAVE IMAGE PATH
            $site->image =
                '/screenshots/' . $fileName;

        } catch (\Exception $e) {

            dd($e->getMessage());

        }

        // SAVE DB
        $site->save();

        return response()->json([

            'success' => true

        ]);
    }
}