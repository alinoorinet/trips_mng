<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trip extends Model
{
    use HasFactory;

    protected $table = 'trip';
    protected $fillable = [
        'customer_name',
        'begin_at',
        'end_at',
        'load_content',
        'load_weight',
        'load_id',
        'destination_addr',
        'task_id',
        'driver_id',
        'truck_id',
    ];
}
