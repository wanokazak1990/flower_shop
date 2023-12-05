<?php

namespace App\Http\Controllers\Api\V1\Category;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    private $repo;

    public function __construct(\App\Repositories\Product\CategoryRepository $repo)
    {
        $this->repo = $repo;
    }

    public function index()
    {
        $categories = $this->repo->getAll();

        return response()->json([
            'data' => $categories,
            'success' => 1,
        ]);
    }

    public function show(Category $category)
    {
        return response()->json([
            'data' => $category,
            'success' => 1,
        ]);
    }

    public function store(Category $category, Request $request)
    {
        $this->repo->save($category, $request->all());

        return response()->json([
            'data' => $category,
            'success' => 1,
        ]);
    }

    public function update(Category $category, Request $request)
    {
        $this->repo->save($category, $request->all());

        return response()->json([
            'data' => $category,
            'success' => 1,
        ]);
    }

    public function destroy(Category $category)
    {
        $this->repo->delete($category);
    }
}
