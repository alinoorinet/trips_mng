<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

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
}
