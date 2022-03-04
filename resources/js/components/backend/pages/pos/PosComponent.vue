<template>
   <div>
      <breadcrumb active_name="POS System"/>
      <div class="row">
         <div class="col-lg-7">
            <div class="card">
               <div class="card-header">
                  <h4 class="card-title">POS System</h4>
                  <search-input apiurl="/pos?" placeholder="Search By Product Name" />
               </div>
               <div class="card-body" id="products_menu">
                  <div class="row">
                        <div class="d-flex justify-content-center" v-if="loading">
                     <!-- <strong>Loading...</strong> -->
                     <div class="spinner-border text-dark" role="status"></div>
                  </div>

                     <div class="col-md-4" v-for="item in products" :key="item.id" v-else>
                        <div class="card">
                           <div class="card-body" >
                              <span class="badge bg-dark">{{item.category.name}}</span>
                              <div class="text-center">
                                 <img :src="item.thumbnail" alt="" height="100">
                              </div>
                              <!--end media-->
                              <div class=" ms-2">
                                 <small class="mb-2"  data-bs-toggle="tooltip" data-bs-placement="top" :title="item.name"> {{ item.name.slice(0, 20)+"..."  }}</small>
                                 <div style="float:right">
                                    <button type="button" @click="addCart(item)" class="btn btn-danger btn-icon-square-sm">
                                    <i class="mdi mdi-shopping"></i></button>
                                 </div>
                              </div>
                           </div>
                           <!--end card-body-->
                        </div>
                     </div>
                  </div>
                  <!--end col-->
               </div>
            </div>
         </div>
         <div class="col-lg-5">
            <div class="card">
               <div class="card-header">
                  <h4 class="card-title">Order Items</h4>
               </div>
               <div class="card-body">
                 <div id="sidebar">
                  <div class="table-responsive">
                     <table class="table mb-0">
                        <thead class="thead-light">
                           <tr>
                              <th class="border-top-0">Item</th>
                              <th class="border-top-0">Qty</th>
                              <th class="border-top-0">Price</th>
                              <th class="border-top-0">Total</th>
                             <th class="border-top-0">Action</th>
                           </tr>
                           <!--end tr-->
                        </thead>
                        <tbody>
                            <tr v-if="this.cart_items.length < 1 ">
                                <td colspan="5">
                                    <div class="alert alert-warning border-0" role="alert">
                                    <strong>Empty Cart!</strong> Your order cart is empty. 😀
                                </div>
                                </td>
                            </tr>
                           <tr v-for="item in cart_items" :key="item.id" v-else>
                              <td>

                                <small>{{item.name}}</small>
                              </td>
                               <td>
                                   <div class="row">
                                       <div class="col">
                                      <i class="fas fa-minus-circle"  @click="decrementQty(item)"></i>

                                      {{item.qty}}
                                           <i class="fas fa-plus-circle"  @click="addCart(item)"></i>
                                       </div>

                                   </div>
                               </td>
                              <td>{{item.price}}  </td>
                              <td>
                                  {{item.qty*item.price}}
                              </td>
                            <td>
                              <a role="button" @click="removeCart(item)"><i class="las la-trash-alt text-danger font-16"></i></a>
                            </td>
                           </tr>
                           <!--end tr-->


                        </tbody>
                     </table>
                     <!--end table-->
                  </div>
                  </div>
                  <hr>
                  <div class="total-payment">
                                        <table class="table mb-0">
                                            <tbody>
                                                <tr>
                                                    <td class="fw-semibold">Subtotal</td>
                                                    <td>Rs.{{subTotal}}</td>
                                                </tr>


                                                <tr>
                                                    <td class="fw-semibold  border-bottom-0">Total</td>
                                                    <td class="text-dark  border-bottom-0"><strong>Rs.{{subTotal}}</strong></td>
                                                </tr>
                                            </tbody>
                                        </table><!--end table-->

                                    </div><!--end total-payment-->
                                    <hr>
                                    <button type="button" class="btn btn-primary" @click="onSubmit"><i class="mdi mdi-send me-2"></i>Place Order</button>
                                    <!-- <button type="button" class="btn btn-de-primary">Place Order</button> -->
                  <!--end /div-->
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
   import breadcrumb from "../../components/breadcrumbComponent.vue";
    import SearchInput from "../../components/SearchInput.vue";

   export default {
      components:{breadcrumb,SearchInput},

      data(){
          return{
           products:[],
           categories:[],
           loading:false,
           cart_items:[],

          };
      },
      computed:{
            subTotal(){
              const total=  this.cart_items.map((x)=>{
                    return x.qty*x.price;
                });
             return  total.reduce((partialSum, a) => partialSum + a, 0);
            }
        },
      methods:{
        onSubmit(){
            const order={table_id:null,total:this.subTotal};
            let data = {order:order,items:this.cart_items};
            axios.post('pos/order/create',data).then((res)=>{
                console.log(res.data);
                this.cart_items=[];
             this.$root.toast.success("order has been processed", {
                timeout: 1000
             });
            });
        },
        addCart(item){
          const new_item={id:item.id,name:item.name,price:item.price,qty:1};

            const i = this.cart_items.findIndex(_item => _item.id === item.id);
            if (i > -1){
                this.cart_items[i].qty++;
                this.$root.toast.info(item.name+"  has quantity  been updated successfully", {
                timeout: 1000
            });
            }else{
            this.cart_items.push(new_item);
              this.$root.toast.success(item.name+"  has been added successfully", {
                timeout: 1000
             });
            }
        // this.$root.alertNotify();
        },
        decrementQty(item){
            if(item.qty>1){

            const i = this.cart_items.findIndex(_item => _item.id === item.id);
            if (i > -1){
                this.cart_items[i].qty--;
              this.$root.toast.error(item.name+"  quantity has been less  successfully", {
                timeout: 1000
             });
            }
          }
          else
           this.removeCart(item);
        },
        removeCart(item){
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
                this.cart_items.pop(item);
                Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
            }
            })
        },
         async getProducts(){
             this.loading=true;
             await axios.get('/pos').then((res)=>{
                 this.products=res.data.products;
                 this.categories=res.data.categories;
                 this.loading=false;
             });
          },
      },
      mounted() {
          this.getProducts();
      },
   }
</script>
<style>
#sidebar {

    height:300px;
    overflow-y: scroll;
}
#products_menu {

    height:450px;
    overflow-y: scroll;
}
</style>
