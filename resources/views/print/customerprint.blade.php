<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="style.css">
      <title>Order Receipt </title>
      <link href="{{asset('print/css/bootstrap.min.css')}}" rel="stylesheet" id="bootstrap-css">
      <script src="{{asset('print/js/bootstrap.min.js')}}"></script>
      <script src="{{asset('print/js/jquery-1.11.1.min.js')}}"></script>
      <style>
         * {
         font-size: 13px;
         font-weight: 100
         }
         td,
         th,
         tr,
         table {
         border-top: 1px solid black;
         border-collapse: collapse;
         }
         td.item,
         th.item {
         width:90px;
         max-width: 100px;
         }
         td.qty,
         th.qty {
         width: 10px;
         max-width: 20px;
         word-break: break-all;
         }
         td.price,
         th.price {
         width: 10px;
         max-width: 10px;
         word-break: break-all;
         }
         .centered {
         text-align: center;
         align-content: center;
         }
         .ticket {
         width: 302px;
         max-width: 302px;
         }
         img {
         max-width: inherit;
         width: inherit;
         }
         @media  print {
         .hidden-print,
         .hidden-print * {
         display: none !important;
         }
         }
      </style>
   </head>
   <body>
      <!------ Include the above in your HEAD tag ---------->
      <div class="container" style="width:320.88px;">
         <div class="row">
            <div class="col-xs-12">
               <div class="invoice-title">
                  {{-- <h2 style="marign-left:50px;">{{config('app.name')}}</h2> --}}
                  <img style="margin-top: -7px !important;" src="{{asset('assets/images/logo-sm.png')}}" height="80" width="100" alt="" srcset="">

                  <div class="mt-4">
                     <address style="margin-bottom: 0px; !important">
                        <strong>Date/Time: </strong> <small>{{$order->created_at->format('d-m-Y h:i:s a')}}</small> <br>
                        @if(!empty($order->table))
                        <strong>TableNo: </strong><span>{{$order->table->name}}</span><br>
                        @endif
                     </address>
                     <h4 class="text-left" style="margin-top: 5px !important; margin-bottom: -7px !important;" >OrderNo: {{$order->order_no}}</h4>
                  </div>
               </div>
               {{--
               <div class="row">
                  <div class="col-xs-12">
                     <address>
                        <strong>Customer</strong><br>
                        Name:<span>Atif Tariq</span><br>
                        Phone:<span>03101239886</span><br>
                        Address:<span>house #1228 B satt ghara mohallah shah latif chownk rohri</span>
                     </address>
                  </div>
               </div>
               --}}
            </div>
         </div>
         <div class="row">
            <div class="col-md-12">
               <div class="panel-heading">
                  <h3 class="panel-title text-center"><strong>Order summary</strong></h3>
               </div>
               <div class="">
                  <div class="">
                     <table class="table table-condensed">
                        <thead>
                           <tr>
                              <td class="text-left"><strong>Product Name</strong></td>
                              {{--
                              <td class="text-right"><strong>Units</strong></td>
                              --}}
                              <td class="text-right"><strong>Price</strong></td>
                              <td class="text-right"><strong>Qty</strong></td>
                              <td class="text-center"><strong>Total</strong></td>
                           </tr>
                        </thead>
                        <tbody >
                           <!-- foreach ($order->lineItems as $line) or some such thing here -->
                           @foreach ($order->items as $item)
                           <tr>
                              <td  class="text-left">{{$item->product->name}}</td>
                              {{--
                              <td class="text-right">9 pcs</td>
                              --}}
                              <td class="text-right">{{$item->price}}</td>
                              <td class="text-right">{{$item->quantity}}</td>
                              <td class="text-right" style="">{{$item->quantity*$item->price}}</td>
                           </tr>
                           @endforeach
                           <tr>
                              <td class="thick-line"></td>
                              <td class="thick-line"></td>
                              <td class="thick-line text-center"><strong>Subtotal:</strong></td>
                              <td class="thick-line text-right">Rs.{{$order->total}}</td>
                           </tr>
                           {{--
                           <tr>
                              <td class="no-line"></td>
                              <td class="no-line"></td>
                              <td class="no-line text-center"><strong>Delivery Charges</strong></td>
                              <td class="no-line text-right">Rs.100</td>
                           </tr>
                           --}}
                           <tr>
                              <td class="no-line"></td>
                              <td class="no-line"></td>
                              <td class="no-line text-center"><strong>Total:</strong></td>
                              <td class="no-line text-right">Rs.{{$order->total}}</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <script >
        window.onload = (event) => {
          window.print();
          };
    </script>
   </body>
</html>
