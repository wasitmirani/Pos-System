<?php

namespace App\Http\Controllers\backend\api\order;

use Carbon\Carbon;
use App\Models\Order;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{
    //

    public function getDailyOrders(Request $request){
        $q=!empty(request('query')) ? request('query') : "";
        $per_page=!empty($request->per_page) ?  $request->per_page  : env('PER_PAGE');
        $orders=Order::latest()->whereDate('created_at', Carbon::today());
        if(!empty($q)){
            $orders=$orders->where('id',$q)->orWhere('order_no',$q);
        }
        $orders=$orders->with('paymentStatus:id,name','orderStatus:id,name','table:id,name')->paginate((int)$per_page);

        return response()->json(['daily_orders'=>$orders]);
    }
}
