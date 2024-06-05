<?php

namespace App\Http\Controllers;

use App\Models\Trip;
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
}
