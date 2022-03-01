<template>
   <div>
      <div class="table-responsive">
         <table class="table ">
            <thead class="thead-light">
               <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Action</th>
               </tr>
            </thead>
            <tbody>
                <tr v-if="products.length<1">
                    <AlertComponent message="Category has been not found" title="Not Found"></AlertComponent>
                </tr>
               <tr v-for="item in products.data" :key="item.id" v-else>
                  <td>
                     <div class="media">
                        <AvatarComponent :name="item.name" />
                        <div class="media-body align-self-center">
                           <h6 class="m-0">{{item.name}}</h6>
                           <a role="button" @click="edited(item)" class="font-12 text-primary">ID: {{item.id}}</a>
                        </div>
                     </div>
                  </td>
                  <td><p class="text-muted mt-4 mb-1">{{item.description.slice(0, 35) + (item.description.length > 35 ? "..." : "")}}</p></td>
                  <td>
                     <a role="button" @click="edited(item)"><i class="las la-pen text-primary font-16"></i></a>
                     <a role="button" @click="deleted(item)"><i class="las la-trash-alt text-danger font-16"></i></a>
                  </td>
               </tr>
            </tbody>
         </table>
         <!--end /table-->
      </div>
      <div class="row">
         <div class="col-auto ">
            <TableFooterComponent :table="products"/>
         </div>
      </div>
      <hr>
      <div class="row">
         <div class="col-auto">
            <nav aria-label="...">
               <Pagination :data="products" @pagination-change-page="getProducts" />
            </nav>
         </div>
      </div>
   </div>
</template>
<script>
   import AvatarComponent from "../../components/AvatarComponent.vue";
   import TableFooterComponent from "../../components/TableFooterComponent.vue";
   import AlertComponent from "../../components/AlertComponent.vue";
   export default {
       props:['products','getProducts'],
       emits: ['edited','deleted'],
       components:{AvatarComponent,TableFooterComponent,AlertComponent},
       methods:{
           edited(item) {
                this.$emit('edited',item);
           },
           deleted(item){
            this.$emit('deleted',item);
           }
       }
   }
</script>
<style>
</style>
