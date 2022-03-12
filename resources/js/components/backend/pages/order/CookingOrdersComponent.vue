<template>
<div>
       <breadcrumb active_name="Cooking Orders"/>
       <div class="row">

           <div class="col"  v-for="item in order_info" :key="item.id">
                  <div class="card report-card">
                                <div class="card-body">
                                    <div class="row d-flex justify-content-center">
                                        <div class="col">
                                            <p class="text-dark mb-1 fw-semibold">{{item.order_type ? item.order_type : "Other"}}</p>
                                            <h4 class="font-22 fw-bold">{{item.total}}</h4>
                                            <p class="mb-0 text-truncate text-muted"><span class="text-success"><i class="mdi mdi-checkbox-marked-circle-outline me-1"></i></span> {{item.total}} orders Complete</p>
                                        </div>
                                        <div class="col-auto align-self-center">
                                            <div class="bg-light-alt d-flex justify-content-center align-items-center thumb-md  rounded-circle">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layers align-self-center text-muted icon-sm"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div><!--end card-body-->
                            </div>
           </div>

       </div>
         <div class="row">
         <div class="col-lg-6">
            <ul class="list-inline">
               <li class="list-inline-item">
                  <h5 class="mt-0">Showing {{orders.current_page}} to {{orders.per_page}} of {{orders.total}} entries </h5>
               </li>
            </ul>
         </div>
         <div class="col-lg-6 text-end">
            <div class="text-end">
               <ul class="list-inline">
                  <li class="list-inline-item">
                     <SearchInput  placeholder="Search By Order No" :apiurl="`/orders/cooking?page=${this.page_num}`" @query="isQuery($event)" @loading="isLoading($event)" @reload="getOrders()" @filterdata="filterData($event)" :query_input="query"/>
                  </li>
                  <!-- <li class="list-inline-item">
                     <button type="button" class="btn btn-primary btn-sm"><i class="fas fa-filter"></i></button>
                     </li> -->

                  <li class="list-inline-item">
                     <button type="button" class="btn btn-warning btn-sm" @click="getOrders"><i class="mdi mdi-reload"></i></button>
                  </li>
               </ul>
            </div>
         </div>
         <!--end col-->
         </div>
       <div class="row">
            <div class="col-lg-12">
                            <div class="card">
                                <div class="card-header">
                                    <div class="row align-items-center">
                                        <div class="col">
                                            <h4 class="card-title">Cooking All Orders</h4>
                                        </div><!--end col-->
                                    </div>  <!--end row-->
                                </div><!--end card-header-->
                                <div class="card-body">
                                          <div class="d-flex justify-content-center" v-if="loading">
                                    <!-- <strong>Loading...</strong> -->
                                    <div class="spinner-border text-dark" role="status"></div>
                                </div>
                                    <div class="table-responsive" v-else>
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
                                                <tr v-for="item in orders.data" :key="item.id">
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
                                                          <a role="button" @click="edit(item)"><i class="las la-pen text-secondary font-18"></i></a>
                                                          |
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
                         <div class="row">
         <div class="col-auto ">
            <TableFooterComponent :table="orders"/>
         </div>
      </div>
       </div>
        <hr>
      <div class="row">
         <div class="col-auto">
            <nav aria-label="...">
               <Pagination :data="orders" @pagination-change-page="getOrders" />
            </nav>
         </div>
      </div>
    </div>
</template>

<script>
import breadcrumb from "../../components/breadcrumbComponent.vue";
 import SearchInput  from  "../../components/SearchInput.vue";
import TableFooterComponent from "../../components/TableFooterComponent.vue";
   import AvatarComponent from "../../components/AvatarComponent.vue";
export default {
    components:{breadcrumb,SearchInput,TableFooterComponent,AvatarComponent},

    data(){
        return {
            orders:[],
            page_num:1,
            loading:false,
            order_info:[],
            query:'',
        };
    },
    methods:{
        dateFormat(date){
            return moment.utc(date).local().format('MMMM Do YYYY, h:mm:ss a');
        },
        filterData(data){
        this.orders = data.daily_orders;

       },

       isLoading(value) {
        this.loading = value;
      //   this.getUriWithParam();
        },
        isQuery(query){
         (this.query = query);

        },
        openPrint(item){
            axios.get('/pos/order/update-status/'+item.id).then((res)=>{
                    const url= window.location.origin+"/customer/print/"+res.data.order.id;
                 console.log("url",url);
                 window.open(url, '_blank').focus();
            })

        },
        edit(item){
            this.$router.push({ path: '/pos-system', query: {order_id: item.id }})
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
      async  getOrders(page=1){
        this.page_num=page;
        this.loading=true;
        const url=`/orders/cooking?page=${this.page_num}&query=${this.query}`;
         await axios.get(url).then((res)=>{
                this.orders=res.data.daily_orders;
                this.order_info=res.data.order_info;
                this.loading=false;
            });
        },
    },
    mounted(){
        this.getOrders();
    }
}
</script>

<style>

</style>
