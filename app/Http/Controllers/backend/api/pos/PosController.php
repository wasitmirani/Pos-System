<?php

namespace App\Http\Controllers\backend\api\pos;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PosController extends Controller
{
    //
    public function getAllProducts(){

    $products=Product::latest()->with('category')->get();
    $category=new Category();

    $req=(object)['paginate'=>false];
    $categories=$category->getAllCategories($req);
    return response()->json(['products'=>$products,'categories'=>$categories]);
    }
}
