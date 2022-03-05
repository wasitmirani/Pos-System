<?php

namespace App\Http\Controllers\backend\api\pos;

use App\Models\Order;
use App\Models\Table;
use App\Models\Product;
use App\Models\Category;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PosController extends Controller
{
    //
    public function getAllProducts(){
        $q=!empty(request('query')) ? request('query') : "";
    $products=Product::latest()->where('name','LIKE','%'.$q.'%')->with('category:id,name')->get();
    $category=new Category();

    $req=(object)['paginate'=>false];
    $categories=$category->latest()->get();
    $tables=Table::orderBy('name','ASC')->get();
    return response()->json(['products'=>$products,'categories'=>$categories,'tables'=>$tables]);
    }

    public function createOrder(Request $request){
        $order=new Order();

        $latestOrder =Order::orderBy('created_at','DESC')->first();
        $order_no= '#'.str_pad($latestOrder->id + 1, 4, "0", STR_PAD_LEFT);
        $order=$order->create([
            'table_id'=>$request->order['table_id'],
            'user_id'=>$request->user()->id,
            'order_no'=> $order_no,
            'order_type'=>$request->order['order_type'],
            'order_status_id'=>1,
            'total'=>$request->order['total'],
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

    public function updateOrderStatus(Request $request){
        $order=Order::find($request->order_id);
        $order->order_status_id=2;
        $order->payment_status_id=2;
        $order->save();
    }

    public function deleteOrder(Request $request){
        $order=OrderItem::where('order_id',$request->id)->delete();
        $order=Order::destroy($request->id);
        return response()->json(['message'=>'Order Deleted Successfully']);
    }
}
