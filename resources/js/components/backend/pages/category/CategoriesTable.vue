<template>
   <div>
      <div class="table-responsive">
         <table class="table ">
            <thead class="thead-light">
               <tr>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Action</th>
               </tr>
            </thead>
            <tbody>
               <tr v-for="item in categories.data" :key="item.id">
                  <td>
                     <div class="media">
                        <AvatarComponent :name="item.name" />
                        <div class="media-body align-self-center">
                           <h6 class="m-0">{{item.name}}</h6>
                           <a href="#" class="font-12 text-primary">ID: {{item.id}}</a>
                        </div>
                     </div>
                  </td>
                  <td><span class="badge badge-soft-success">Active</span></td>
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
            <TableFooterComponent :table="categories"/>
         </div>
      </div>
      <hr>
      <div class="row">
         <div class="col-auto">
            <nav aria-label="...">
               <Pagination :data="categories" @pagination-change-page="getCategories" />
            </nav>
         </div>
      </div>
   </div>
</template>
<script>
   import AvatarComponent from "../../components/AvatarComponent.vue";
   import TableFooterComponent from "../../components/TableFooterComponent.vue";
   export default {
       props:['categories','getCategories'],
       emits: ['edited','deleted'],
       components:{AvatarComponent,TableFooterComponent},
       methods:{
           edited(item) {
                this.$emit('edited',item);
           },
       }
   }
</script>
<style>
</style>
