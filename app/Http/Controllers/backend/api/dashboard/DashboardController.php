<?php

namespace App\Http\Controllers\backend\api\dashboard;

use Carbon\Carbon;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    //
    public function getAnalytics(Request $request){
        $orders_by_date=Order::latest()
                    ->select(DB::raw('DATE(created_at) as date'), DB::raw('count(*) as total'))
                    ->groupBy('date')
                    ->get();
                    $per_page=!empty($request->per_page) ?  $request->per_page  : env('PER_PAGE');
        $total_orders=Order::latest()->get();
                    $orders=Order::latest()->whereDate('created_at', Carbon::today());
                    $orders=$orders->with('paymentStatus:id,name','orderStatus:id,name','table:id,name')->paginate((int)$per_page);

        $total_revenue=$total_orders->where('payment_status_id',2)->sum('total');
        $today_revenue=Order::latest()->where('payment_status_id',2)->whereDate('created_at', Carbon::today())->sum('total');
        $items=OrderItem::latest()->whereDate('created_at', Carbon::today())
        ->groupBy('product_id')
        ->selectRaw('product_id,sum(quantity) as quantity,sum(price) as price,sum(total) as total')
        ->with('product:id,name')->take(5)->get();
        $order_stat=[
            'total_revenue'=>$total_revenue,
            'total_orders'=>count($total_orders),
            'today_revenue'=>$today_revenue
        ];
      return response()->json(['order_stat'=>$order_stat,'orders_by_date'=>$orders_by_date,'recent_orders'=>$orders]);
    }
}
