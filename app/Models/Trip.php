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
        'destination_addr',
        'task_id',
        'driver_id',
        'truck_id',
    ];

    public function task() {
        return $this->belongsTo(Task::class, 'task_id');
    }

    public function driver() {
        return $this->belongsTo(Driver::class, 'driver_id');
    }

    public function truck() {
        return $this->belongsTo(Truck::class, 'truck_id');
    }
}
