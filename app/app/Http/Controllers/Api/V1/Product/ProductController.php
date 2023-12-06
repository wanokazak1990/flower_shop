<?php

namespace App\Http\Controllers\Api\V1\Product;

use App\Http\Controllers\Controller;
use App\Http\Resources\Product\ProductItemResource;
use App\Http\Resources\Product\ProductListCollection;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    private $repo;

    public function __construct(\App\Repositories\Product\ProductRepository $repo)
    {
        $this->repo = $repo;
    }

    public function index(Request $request)
    {
        $products = $this->repo->getAll();

        return new ProductListCollection($products);
    }

    public function store(Product $product, Request $request)
    {
        $this->repo->save($product, $request->all(), $request->file('img'));

        return new ProductItemResource($product);
    }

    public function show(Product $product)
    {
        return new ProductItemResource($product);
    }

    public function update(Product $product, Request $request)
    {
        $this->repo->save($product, $request->all(), $request->file('img'));

        return new ProductItemResource($product);
    }

    public function destroy(Product $product)
    {
        $this->repo->delete($product);
    }
}
