<?php

namespace App\Http\Controllers\backend\api\order;

use Carbon\Carbon;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{
    //
    public function getAllOrders(Request $request){
        $q=!empty(request('query')) ? request('query') : "";
        $per_page=!empty($request->per_page) ?  $request->per_page  : env('PER_PAGE');
        $orders=Order::latest();
        if(!empty($q)){
            $orders=$orders->where('id',$q)->orWhere('order_no',$q);
        }
        $orders=$orders->with('paymentStatus:id,name','orderStatus:id,name','table:id,name')->paginate((int)$per_page);
        $order_info = Order::latest()
                 ->select('order_type', DB::raw('count(*) as total'))
                 ->groupBy('order_type')
                 ->get();
        return response()->json(['orders'=>$orders,'order_info'=>$order_info]);
    }
    public function getDailyOrders(Request $request){
        $q=!empty(request('query')) ? request('query') : "";
        $per_page=!empty($request->per_page) ?  $request->per_page  : env('PER_PAGE');
        $orders=Order::latest()->whereDate('created_at', Carbon::today());
        if(!empty($q)){
            $orders=$orders->where('id',$q)->orWhere('order_no',$q);
        }
        $orders=$orders->with('paymentStatus:id,name','orderStatus:id,name','table:id,name')->paginate((int)$per_page);
        $order_info = Order::latest()->whereDate('created_at', Carbon::today())
                 ->select('order_type', DB::raw('count(*) as total'))
                 ->groupBy('order_type')
                 ->get();
        return response()->json(['daily_orders'=>$orders,'order_info'=>$order_info]);
    }
    public function getCookingOrders(Request $request){
        $q=!empty(request('query')) ? request('query') : "";
        $per_page=!empty($request->per_page) ?  $request->per_page  : env('PER_PAGE');
        $orders=Order::latest()->where('payment_status_id',1)->whereDate('created_at', Carbon::today());
        if(!empty($q)){
            $orders=$orders->where('id',$q)->orWhere('order_no',$q);
        }
        $orders=$orders->with('paymentStatus:id,name','orderStatus:id,name','table:id,name')->paginate((int)$per_page);
        $order_info = Order::latest()->where('payment_status_id',1)->whereDate('created_at', Carbon::today())
                 ->select('order_type', DB::raw('count(*) as total'))
                 ->groupBy('order_type')
                 ->get();
        return response()->json(['daily_orders'=>$orders,'order_info'=>$order_info]);
    }

}
