<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Truck extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'max_loading_weight',
        'is_on_mission',
        'need_repair',
        'last_mission_at',
    ];
}
