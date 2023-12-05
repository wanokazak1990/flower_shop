<?php

namespace App\Services\CartService;

use App\Models\Product;
use Illuminate\Contracts\Session\Session;

Class CartStorage
{
    private static $_instance;
    private $data = [];

    private function __construct(){}
    private function __clone(){}

    public static function instance()
    {
        if(!self::$_instance instanceof CartStorage)
        {
            self::$_instance = new self();
            self::$_instance->data = (session()->get('cart'));
        }
        return self::$_instance;
    }

    public function syncSession()
    {
        session(['cart' => $this->data]);
    }

    public function append($productId)
    {
        if(array_key_exists($productId, $this->data))
            $this->data[$productId]['count']++;
        else
        {
            $product = Product::findOrFail($productId);
            $this->data[$productId] = [
                'id' => $product->id,
                'price' => $product->price,
                'name' => $product->name,
                'count' => 1,
            ];
        }

        $this->syncSession();
    }

    public function reduce($productId)
    {
        if(array_key_exists($productId, $this->data) && $this->data[$productId]['count'] > 1)
            $this->data[$productId]['count']--;
        else
            unset($this->data[$productId]);

        $this->syncSession();
    }

    public function get()
    {
        return $this->data;
    }

    public function totalPrice()
    {
        $price = 0;

        foreach($this->data as $item)
        {
            $price+=($item['count']*$item['price']);
        }

        return $price;
    }

    public function totalCount()
    {
        $count = 0;

        foreach($this->data as $item)
        {
            $count+=($item['count']);
        }

        return $count;
    }
}
