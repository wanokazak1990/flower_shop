<?php

namespace App\Services\CartService;

Class Cart
{
    public $storage;

    public function __construct()
    {
        $this->storage = CartStorage::instance();
    }
}
