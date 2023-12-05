<?php

namespace App\Http\Controllers\Api\V1\Delivery;

use App\Http\Controllers\Controller;
use App\Models\Delivery;
use Illuminate\Http\Request;

class DeliveryController extends Controller
{
    public function index()
    {
        return response()->json([
            'data' => Delivery::get(),
            'success' => 1
        ]);
    }

    public function show(Delivery $delivery)
    {
        return response()->json([
            'data' => $delivery,
            'success' => 1,
        ]);
    }

    public function store(Delivery $delivery, Request $request)
    {
        $delivery->fill([
            'name' => $request->name,
        ])->save();

        return response()->json([
            'data' => $delivery,
            'success' => 1,
        ]);
    }

    public function update(Delivery $delivery, Request $request)
    {
        $delivery->fill([
            'name' => $request->name,
        ])->save();

        return response()->json([
            'data' => $delivery,
            'success' => 1,
        ]);
    }

    public function destroy(Delivery $delivery)
    {
        $delivery->delete();
    }
}
