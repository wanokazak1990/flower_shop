<?php

namespace App\Http\Controllers\Api\V1\Cart;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function index(\App\Services\CartService\Cart $cart)
    {
        return response()->json([
            'data' => $cart->storage->get(),
            'success' => 1,
        ]);
    }

    public function append($productId, \App\Services\CartService\Cart $cart)
    {
        $cart->storage->append($productId);

        return response()->json([
            'data' => $cart->storage->get(),
            'success' => 1,
        ]);
    }

    public function reduce($productId, \App\Services\CartService\Cart $cart)
    {
        $cart->storage->reduce($productId);

        return response()->json([
            'data' => $cart->storage->get(),
            'success' => 1,
        ]);
    }
}
