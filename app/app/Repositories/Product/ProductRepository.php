<?php

namespace App\Repositories\Product;

use \App\Models\Product;

Class ProductRepository
{
    public function getAll()
    {
        $products = Product::get();

        return $products;
    }

    public function save(Product $product, array $data)
    {
        $product->fill([
            'name'          => $data['name']        ?? $product->name,
            'price'         => $data['price']       ?? $product->price,
            'img'           => $data['img']         ?? $product->img,
            'category_id'   => $data['category_id']  ?? $product->category_id,
            'description'   => $data['description']     ?? $product->description,
        ])->save();
    }

    public function delete(Product $product)
    {
        $product->delete();
    }
}
