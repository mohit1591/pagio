<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Site extends Model
{
    protected $fillable = [

        'name',
        'html',
        'css',
        'components',
        'styles',
        'image',
        'status'

    ];
}