<?php

namespace App\Http\Controllers\backend\api\pos;

use App\Models\Order;
use App\Models\Product;
use App\Models\Category;
use App\Models\OrderItem;
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

    public function createOrder(Request $request){
        $order=new Order();
        $order=$order->create([
            'table_id'=>$request->table_id,
            'user_id'=>$request->user()->id,
            'order_status_id'=>1,
            'total'=>$request->total,
        ]);
        // dd($request->items);
        $items=$request->items;
        $data=collect($items)->map(function($item) use($order){
            return[
                'order_id'=>$order->id,
                'product_id'=>$item['id'],
                'quantity'=>$item['qty'],
             
                'price'=>$item['price'],
                'total'=>$item['qty']*$item['price'],
            ];
        });

        OrderItem::insert($data->toArray());
    return response()->json(['order'=>$order,'items'=>$items,'message'=>'Order Created Successfully']);
    }
}
