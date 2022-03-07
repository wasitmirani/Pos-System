<?php

namespace App\Http\Controllers\backend\api\report;

use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Http\Controllers\Controller;

class ReportController extends Controller
{
    //

    public function getDailyReport(Request $request){
       $item_sale=OrderItem::latest()->whereDate('created_at', Carbon::today())
                        ->groupBy('product_id')
                        ->selectRaw('product_id,sum(quantity) as quantity,sum(price) as price,sum(total) as total')
                        ->with('product:id,name');
        $items=$item_sale->paginate((int)env('PER_PAGE'));
        $total_sale=$item_sale->get();
        $total_sale=$total_sale->sum('total');
        $total_quantity=$item_sale->get()->sum('quantity');
        $total_orders=Order::latest()->whereDate('created_at', Carbon::today())->count();


        return response()->json(['daily_report'=>$items,'total_orders'=>$total_orders,'total_sale'=>$total_sale,'total_quantity'=>$total_quantity]);
    }
    public function getMonthlyReport(Request $request){
        $item_sale=OrderItem::latest()->whereMonth('created_at', date('m'))
                         ->groupBy('product_id')
                         ->selectRaw('product_id,sum(quantity) as quantity,sum(price) as price,sum(total) as total')
                         ->with('product:id,name');
                         $items=$item_sale->paginate((int)env('PER_PAGE'));
                         $total_sale=$item_sale->get();
                         $total_sale=$total_sale->sum('total');
                         $total_quantity=$item_sale->get()->sum('quantity');
                         $total_orders=Order::latest()->whereMonth('created_at', date('m'))->count();


     return response()->json(['monthly_report'=>$items,'total_orders'=>$total_orders,'total_sale'=>$total_sale,'total_quantity'=>$total_quantity]);
     }


}
