<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    protected $fillable = [
        'name',
        'city',
        'price',
        'shortDescription',
        'description',
        'images',
    ];

    protected $casts = [
        'images' => 'array',
        'price' => 'integer',
    ];
}
