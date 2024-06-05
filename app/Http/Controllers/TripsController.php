<?php

namespace App\Http\Controllers;

use App\Models\Driver;
use App\Models\Task;
use App\Models\Trip;
use App\Models\Truck;
use Illuminate\Http\Request;

class TripsController extends Controller
{
    /*
     * This method send all trips to Trips component
     *
     * @return \Illuminate\Http\JsonResponse
     * */
    public function index(): \Illuminate\Http\JsonResponse
    {
        $trips = Trip::all();

        return response()->json(['status' => 200, 'trips' => $trips]);
    }

    /*
     * This method send all initial data to AddTrips component
     *
     * @return \Illuminate\Http\JsonResponse
     * */
    public function add()
    {
        $tasks   = Task::where('assigned', 0)->get();
        $trucks  = Truck::where('is_on_mission', 0)->get();
        $drivers = Driver::where('is_on_mission', 0)->with('user')->get();

        return response()->json([
            'status'  => 200,
            'tasks'   => $tasks,
            'trucks'  => $trucks,
            'drivers' => $drivers
        ]);
    }
}
