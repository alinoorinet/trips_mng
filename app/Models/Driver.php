<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Driver extends Model
{
    use HasFactory;

    protected $table = 'driver';

    protected $fillable = [
        'license_number',
        'is_on_mission',
        'last_mission_at',
        'user_id',
    ];
}
