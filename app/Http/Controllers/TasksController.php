<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\Trip;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TasksController extends Controller
{
    /*
     * This method send all tasks to tasks component
     *
     * @return \Illuminate\Http\JsonResponse
     * */
    public function index(): \Illuminate\Http\JsonResponse
    {
        $tasks = Task::all();

        return response()->json(['status' => 200, 'tasks' => $tasks]);
    }

    /*
    * This method assign task to trip
    *
    * @return \Illuminate\Http\JsonResponse
    * */
    public function assign(Request $request)
    {
        $v = Validator::make($request->all(), [
            'trId' => 'required|integer|exists:App\Models\Trip,id',
            'tsId' => 'required|integer|exists:App\Models\Task,id',
        ]);
        if ($v->fails())
            return response()->json([
                'status' => 102,
                'res'    => 'Invalid data!'
            ]);

        $trip = Trip::find($request->trId);
        $task = Task::find($request->tsId);
        if($trip->task_id)
            return response()->json([
                'status' => 102,
                'res'    => 'Already have a task',
            ]);

        if($task->assigned)
            return response()->json([
                'status' => 102,
                'res'    => 'Already assigned',
            ]);

        $trip->task_id = $request->tsId;
        $trip->save();

        $task->assigned = 1;
        $task->save();

        return response()->json([
            'status' => 200,
            'task'   => $task,
            'res'    => 'Assigned to trip successfully!',
        ]);
    }
}
