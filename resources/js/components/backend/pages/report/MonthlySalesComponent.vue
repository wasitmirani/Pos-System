<template>
    <div>
        <breadcrumb active_name="Monthly Sales" :links="[{name:'Home',url:'/'},{name:'Products',url:'/products'}]"></breadcrumb>

        <div class="row">
             <div class="col">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row align-items-center">
                                                <div class="col text-center">
                                                    <span class="h5  fw-bold">{{total_orders}}</span>
                                                    <h6 class="text-uppercase text-muted mt-2 m-0 font-11">Total Orders</h6>
                                                </div><!--end col-->
                                            </div> <!-- end row -->
                                        </div><!--end card-body-->
                                    </div> <!--end card-body-->
            </div>
             <div class="col">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row align-items-center">
                                                <div class="col text-center">
                                                    <span class="h5  fw-bold">{{total_sale}}</span>
                                                    <h6 class="text-uppercase text-muted mt-2 m-0 font-11">Total Sales</h6>
                                                </div><!--end col-->
                                            </div> <!-- end row -->
                                        </div><!--end card-body-->
                                    </div> <!--end card-body-->
            </div>
              <div class="col">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row align-items-center">
                                                <div class="col text-center">
                                                    <span class="h5  fw-bold">{{total_quantity}}</span>
                                                    <h6 class="text-uppercase text-muted mt-2 m-0 font-11">Total Product Sales</h6>
                                                </div><!--end col-->
                                            </div> <!-- end row -->
                                        </div><!--end card-body-->
                                    </div> <!--end card-body-->
            </div>

        </div>
       <div class="row">
            <div class="col-lg-12">
                            <div class="card">
                                <div class="card-header">
                                    <div class="row align-items-center">
                                        <div class="col">
                                            <h4 class="card-title">Monthly Sales</h4>
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
                                                    <th class="border-top-0">Name</th>
                                                    <th class="border-top-0">Price</th>
                                                    <th class="border-top-0">Quantity</th>
                                                    <th class="border-top-0">Total</th>

                                                </tr><!--end tr-->
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in orders.data" :key="item.id">
                                                    <td>
                                                        <div class="media">
                                                            <AvatarComponent :name="item.product.name"/>
                                                            <div class="media-body align-self-center">
                                                                <h6 class="m-0"><a href="#" class="font-12 text-primary">{{item.product.name}}</a></h6>

                                                            </div><!--end media body-->
                                                        </div>
                                                    </td>
                                                    <td>{{item.price}}</td>
                                                    <td>{{item.quantity}}</td>
                                                    <td>
                                                       Rs. <strong>{{item.total}}</strong>
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
            total_orders:0,
            total_quantity:0,
            total_sale:0,

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



      async  getOrders(page=1){
        this.page_num=page;
        this.loading=true;
        const url=`/report/monthly?page=${this.page_num}&query=${this.query}`;
         await axios.get(url).then((res)=>{
                this.orders=res.data.monthly_report;
                this.total_sale=res.data.total_sale;
                this.total_orders=res.data.total_orders;
                this.total_quantity=res.data.total_quantity;
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

<style>

</style>
