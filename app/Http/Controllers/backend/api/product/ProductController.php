<?php

namespace App\Http\Controllers\backend\api\product;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    private $product;
    public function __construct()
    {
        $this->product=new Product();
    }
    public function index(Request $request)
    {
        $latest_products=$this->product->latest()->take(3)->get();
        $category=new Category();
        $req=(object)['paginate'=>false];
        $categories=$category->getAllCategories($req);
        $products=$this->product->getProducts($request);

        return response()->json(['products'=>$products,'categories'=>$categories,'latest_products'=>$latest_products]);
        //
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|unique:products|max:255',]);

        return $this->product->create([
            'name'=>$request->name,
            'price'=>$request->price,
            'description'=>$request->description,
            'category_id'=>$request->category_id,
            'thumbnail'=>'ww',
            'slug'=>Str::snake($request->name, '-'),
        ]);
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $validated = $request->validate([
            'name' => 'required|unique:products,name,'.$id,
        ]);
        return $this->product->where('id',$id)->update([
            'name'=>$request->name,
            'price'=>$request->price,
            'description'=>$request->description,
            'category_id'=>$request->category_id,
            'thumbnail'=>'ww',
            'slug'=>Str::snake($request->name, '-'),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        return  $this->product->destroy($id);
    }
}
