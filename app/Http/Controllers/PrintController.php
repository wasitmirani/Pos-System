<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class PrintController extends Controller
{
    //
    public function getKitchenPrint(Request $request){
        $order=Order::where('id',$request->order_id)
                      ->with('items','paymentStatus:id,name','orderStatus:id,name','table:id,name')
                       ->first();
                       date_default_timezone_set("Asia/Karachi");
        return view('print.kitchenprint',['order'=>$order]);
    }
    public function getCustomerPrint(Request $request){
        $order=Order::where('id',$request->order_id)
                      ->with('items','paymentStatus:id,name','orderStatus:id,name','table:id,name')
                       ->first();
                       date_default_timezone_set("Asia/Karachi");
        return view('print.customerprint',['order'=>$order]);
    }

}
