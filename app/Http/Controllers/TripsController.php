<?php

namespace App\Http\Controllers;

use App\Models\Driver;
use App\Models\Task;
use App\Models\Trip;
use App\Models\Truck;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TripsController extends Controller
{
    /*
     * This method send all trips to Trips component
     *
     * @return \Illuminate\Http\JsonResponse
     * */
    public function index(): \Illuminate\Http\JsonResponse
    {
        $trips = Trip::with(['task', 'truck', 'driver.user'])->get();

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

    /*
     * This method store and create new trip
     *
     * @return \Illuminate\Http\JsonResponse
     * */
    public function store(Request $request)
    {
        $v = Validator::make($request->all(), [
            'customer_name'    => 'required|string',
            'load_content'     => 'required|string',
            'load_weight'      => 'required|string',
            'destination_addr' => 'required|string',
            'truck_id'         => 'required|integer|exists:App\Models\Truck,id',
            'driver_id'        => 'required|integer|exists:App\Models\Driver,id',
            'task_id'          => 'nullable|integer|exists:App\Models\Task,id',
        ]);
        if ($v->fails())
            return response()->json([
                'status' => 101,
                'errors' => $v->errors()
            ]);


        $trip = Trip::factory()->state($request->all())->create();
        return response()->json([
            'status' => 200,
            'res'    => 'Trip created successfully!',
            'trip'   => $trip
        ]);
    }
}
