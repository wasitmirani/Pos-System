<template>
  <div>
         <!-- Page-Title -->
            <breadcrumb active_name="Dashboard"/>
                    <!-- end page title end breadcrumb -->
     <div class="row">

                        <div class="col-lg-4">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col align-self-center">
                                            <div class="media">
                                                <img src="assets/images/logos/money-beg.png" alt="" class="align-self-center" height="40">
                                                <div class="media-body align-self-center ms-3">
                                                    <h6 class="m-0 font-24 fw-bold">Rs.{{orders_stat.total_revenue}}</h6>
                                                    <p class="text-muted mb-0">Total Revenue</p>
                                                </div><!--end media body-->
                                            </div><!--end media-->
                                        </div><!--end col-->
                                        <div class="col-auto align-self-center">
                                            <div class="">
                                                <div id="Revenu_Chart_bar" class="apex-charts mb-n4"></div>
                                            </div>
                                        </div><!--end col-->
                                    </div><!--end row-->
                                </div><!--end card-body-->
                            </div><!--end card-->
                            <div class="row">
                                <div class="col-12 col-lg-6">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row align-items-center">
                                                <div class="col text-center">
                                                    <span class="h5  fw-bold">Rs.{{orders_stat.today_revenue}}</span>
                                                    <h6 class="text-uppercase text-muted mt-2 m-0 font-11">Today's Revenue</h6>
                                                </div><!--end col-->
                                            </div> <!-- end row -->
                                        </div><!--end card-body-->
                                    </div> <!--end card-body-->
                                </div><!--end col-->
                                <div class="col-12 col-lg-6">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row align-items-center">
                                                <div class="col text-center">
                                                    <span class="h5  fw-bold">{{recent_orders.total}}</span>
                                                    <h6 class="text-uppercase text-muted mt-2 m-0 font-11">Today's New Order</h6>
                                                </div><!--end col-->
                                            </div> <!-- end row -->
                                        </div><!--end card-body-->
                                    </div> <!--end card-body-->
                                </div><!--end col-->
                                <div class="col-12 col-lg-6">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row align-items-center">
                                                <div class="col text-center">
                                                    <span class="h5  fw-bold">82.8%</span>
                                                    <h6 class="text-uppercase text-muted mt-2 m-0 font-11">All Orders Rate</h6>
                                                </div><!--end col-->
                                            </div> <!-- end row -->
                                        </div><!--end card-body-->
                                    </div> <!--end card-body-->
                                </div><!--end col-->
                                <div class="col-12 col-lg-6">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row align-items-center">
                                                <div class="col text-center">
                                                    <span class="h5  fw-bold">{{orders_stat.total_orders}}</span>
                                                    <h6 class="text-uppercase text-muted mt-2 m-0 font-11">All Orders</h6>
                                                </div><!--end col-->
                                            </div> <!-- end row -->
                                        </div><!--end card-body-->
                                    </div> <!--end card-->
                                </div><!--end col-->
                            </div><!--end row-->
                            <div class="card">
                                <div class="card-header">
                                    <div class="row align-items-center">
                                        <div class="col">
                                            <h4 class="card-title">View Orders</h4>
                                        </div><!--end col-->
                                    </div>  <!--end row-->
                                </div><!--end card-header-->
                                <div class="card-body">
                                    <div class="row align-items-center">
                                        <div class="col-auto">
                                            <i class="las la-file-invoice-dollar font-36 text-muted"></i>
                                        </div><!--end col-->
                                        <div class="col">
                                            <div class="input-group">
                                                <select class="form-select">
                                                    <option selected>--- Select ---</option>
                                                    <option value="Jan 2021">Jan 2022</option>
                                                    <option value="Feb 2021">Feb 2022</option>
                                                    <option value="Mar 2021">Mar 2022</option>
                                                    <!-- <option value="Apr 2021">Apr 2021</option> -->
                                                </select>
                                                <button class="btn btn-soft-primary btn-sm" type="button"><i class="las la-search"></i></button>
                                            </div>
                                        </div><!--end col-->
                                    </div>  <!--end row-->
                                </div><!--end card-body-->
                            </div><!--end card-->
                        </div><!-- end col-->
                        <div class="col-lg-8">
                            <div class="card">
                                <div class="card-header">
                                    <div class="row align-items-center">
                                        <div class="col">
                                            <h4 class="card-title">Orders By Date</h4>
                                        </div><!--end col-->
                                        <div class="col-auto">
                                            <div class="dropdown">
                                                <!-- <a href="#" class="btn btn-sm btn-outline-light dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                   This Month<i class="las la-angle-down ms-1"></i>
                                                </a> -->
                                                <!-- <div class="dropdown-menu dropdown-menu-end">
                                                    <a class="dropdown-item" href="#">Today</a>
                                                    <a class="dropdown-item" href="#">Last Week</a>
                                                    <a class="dropdown-item" href="#">Last Month</a>
                                                    <a class="dropdown-item" href="#">This Year</a>
                                                </div> -->
                                            </div>
                                        </div><!--end col-->
                                    </div>  <!--end row-->
                                </div><!--end card-header-->
                                <div class="card-body">
                                    <div class="">
                                        <div id="Revenu_Chart" class="apex-charts"></div>
                                    </div>
                                </div><!--end card-body-->
                            </div><!--end card-->
                        </div><!-- end col-->
                    </div><!--end row-->



       <div class="row">
            <div class="col-lg-12">
                            <div class="card">
                                <div class="card-header">
                                    <div class="row align-items-center">
                                        <div class="col">
                                            <h4 class="card-title">Today All Orders</h4>
                                        </div><!--end col-->
                                    </div>  <!--end row-->
                                </div><!--end card-header-->
                                <div class="card-body">

                                    <div class="table-responsive">
                                        <table class="table mb-0">
                                            <thead class="thead-light">
                                                <tr>
                                                    <th class="border-top-0">Order No</th>
                                                    <th class="border-top-0">Table No</th>
                                                    <th class="border-top-0">Status</th>

                                                    <th class="border-top-0">Type</th>
                                                    <th class="border-top-0">Payment</th>
                                                    <th class="border-top-0">Total</th>
                                                    <th class="border-top-0">Created</th>
                                                    <th class="border-top-0">Action</th>
                                                </tr><!--end tr-->
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in recent_orders.data" :key="item.id">
                                                    <td>
                                                        <div class="media">
                                                            <AvatarComponent :name="''+item.id"/>
                                                            <div class="media-body align-self-center">
                                                                <h6 class="m-0"><a href="#" class="font-12 text-primary">OrderNo: {{item.order_no}}</a></h6>

                                                            </div><!--end media body-->
                                                        </div>
                                                    </td>
                                                    <td>{{ item.table   ? item.table.name : "N/A"}}</td>
                                                    <td>
                                                    <span :class="'badge rounded-pill '+ orderStatus(item.order_status_id)">{{item.order_status.name}}</span></td>
                                                    <td>
                                                        <div v-html="this.orderType(item.order_type)"></div>
                                                        <!-- <p :inner-html.prop=""></p> -->

                                                     </td>
                                                       <td>  <span :class="'badge rounded-pill '+ paymentStatus(item.payment_status_id)">{{item.payment_status.name}}</span></td>

                                                    <td>
                                                       Rs. <strong>{{item.total}}</strong>
                                                    </td>
                                                     <td>
                                                       <small>{{dateFormat(item.created_at)}}</small>
                                                    </td>
                                                    <td>
                                                        <a role="button" @click="openPrint(item)"><i class="las la-print text-secondary font-18"></i></a>
                                                        <a role="button" @click="deleted(item)"><i class="las la-trash-alt text-secondary font-18"></i></a>
                                                    </td>
                                                </tr><!--end tr-->

                                            </tbody>
                                        </table> <!--end table-->
                                    </div><!--end /div-->
                                </div><!--end card-body-->
                            </div><!--end card-->
                        </div> <!--end col-->


       </div>
  </div>
</template>
<script>
import breadcrumb from "../../components/breadcrumbComponent.vue"
export default {
    components:{breadcrumb},
    data(){
        return{
            orders_by_date:[],
            orders_stat:[],
            recent_orders:[],
        };
    },
    setup: () => ({
        title: 'How To Install Vue 3 in Laravel 8 From Scratch'
    }),
    methods: {
        loadDashboardOrderBy(){

var options = {
    chart: {
      height: 340,
      type: 'bar',
      toolbar: {
        show: false
      },
    },
    colors: ['#2a76f4'],
    dataLabels: {
        enabled: false
    },
    plotOptions: {
      bar: {
          horizontal: false,
          columnWidth: '30%',
      },
    },
    stroke: {
        show: false,
        width: 2,
    },
    series: [{
        name: 'Orders',
        data: this.orders_by_date.map((item) => item.total)
    }],
    labels: this.orders_by_date.map((x) => x.date),

    yaxis: {
      labels: {
        offsetX: -12,
        offsetY: 0,
      }
    },
    grid: {
      borderColor: '#e0e6ed',
      strokeDashArray: 4,
      xaxis: {
          lines: {
              show: false
          }
      },
      yaxis: {
          lines: {
              show: true,
          }
      },
    },
    legend: {
     show: false
    },
    tooltip: {
      marker: {
        show: true,
      },
      x: {
        show: false,
      }
    },
    yaxis: {
        labels: {
            formatter: function (value) {
                return "" + value ;
            }
        },
    },
  };

  var chart = new ApexCharts(document.querySelector("#Revenu_Chart"), options);
  chart.render();
        },
        getAnalytics(){
            axios.get('/dashboard/analytics').then((res)=>{
                this.orders_by_date=res.data.orders_by_date;
                this.orders_stat=res.data.order_stat;
                this.recent_orders=res.data.recent_orders;
                this.loadDashboardOrderBy();
            });
        },
         dateFormat(date){
            return moment.utc(date).local().format('MMMM Do YYYY, h:mm:ss a');
        },




        openPrint(item){
            axios.get('/pos/order/update-status/'+item.id).then((res)=>{
                    const url= window.location.origin+"/customer/print/"+res.data.order.id;
                 console.log("url",url);
                 window.open(url, '_blank').focus();
            })

        },
        deleted(item){
           Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
            if (result.isConfirmed) {
                axios.get('/pos/order/delete/'+item.id).then((response)=>{
                         Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                        )
                    this.getOrders();
                });

            }
            })
       },
         paymentStatus(value) {

        switch (value) {
            case 1:
            return "bg-soft-pink";
            break;

            case 2:
            return "bg-soft-success";
            break;
            default:
                return "bg-soft-pink";
             break;
        }
        },
       orderStatus(value) {


        switch (value) {
            case 1:
            return "bg-soft-purple";
            break;

            case 2:
            return "bg-soft-success";
            break;

            case 3:
            return "bg-soft-purple";
            break;

            case 4:
            return "bg-soft-success";
            break;

            default:
                return "bg-soft-success";
             break;
      }
  },
          orderType(value) {
      switch (value) {
        case 'delivery':
              return "<a role='button' class='badge bg-primary'>delivery</a>";
           break;
        case 'takeaway':
              return "<a role='button' class='badge bg-warning'>takeaway</a>";
           break;
        case 'dining':
              return "<a role='button' class='badge bg-success'>dining</a>";
           break;

          default:
              break;
      }
  },
    },
    mounted(){
        this.getAnalytics();
    }
}
</script>
