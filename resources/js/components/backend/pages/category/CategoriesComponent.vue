<template>
   <div>
      <breadcrumb active_name="Categories"/>
      <div class="row" v-if="latest_categories">
         <div class="col-lg-4" v-for="item in latest_categories" :key="item.id">
            <div class="card">
               <div class="card-body p-0">
                  <div class="media p-3  align-items-center">
                     <AvatarComponent name="Merri Diamond"/>
                     <div class="media-body ms-3 align-self-center">
                        <h5 class="m-0">{{item.name}} <span class="badge badge-warning font-10">New</span></h5>
                        <p class="mb-0 text-muted">@{{item.slug}}</p>
                     </div>
                     <div class="action-btn">
                        <a role="button" @click="edited(item)"><i class="las la-pen text-secondary font-16"></i></a>
                        <a role="button" @click="deleted($event)"><i class="las la-trash-alt text-secondary font-16"></i></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="row">
         <div class="col-lg-6">
            <ul class="list-inline">
               <li class="list-inline-item">
                  <h5 class="mt-0">Showing {{categories.current_page}} to {{categories.per_page}} of {{categories.total}} entries </h5>
               </li>
            </ul>
         </div>
         <div class="col-lg-6 text-end">
            <div class="text-end">
               <ul class="list-inline">
                  <li class="list-inline-item">
                     <SearchInput  placeholder="Search By Name" :apiurl="`/category?page=${this.page_num}`" @query="isQuery($event)" @loading="isLoading($event)" @reload="getCategories()" @filterdata="filterData($event)" :query_input="query"/>
                  </li>
                  <!-- <li class="list-inline-item">
                     <button type="button" class="btn btn-primary btn-sm"><i class="fas fa-filter"></i></button>
                     </li> -->
                  <li class="list-inline-item">
                     <button type="button" class="btn btn-primary btn-sm" @click="openModal">Add New Category</button>
                  </li>
                  <li class="list-inline-item">
                     <button type="button" class="btn btn-warning btn-sm" @click="getCategories"><i class="mdi mdi-reload"></i></button>
                  </li>
               </ul>
            </div>
         </div>
         <!--end col-->
      </div>
      <div class="row">
         <div class="col-12">
            <div class="card">
               <div class="card-header">
                  <div class="row align-items-center">
                     <div class="col">
                        <h4 class="card-title">Here the list of all categories</h4>
                     </div>
                     <!--end col-->
                  </div>
                  <!--end row-->
               </div>
               <!--end card-header-->
               <div class="card-body">
                  <div class="d-flex justify-content-center" v-if="loading">
                     <!-- <strong>Loading...</strong> -->
                     <div class="spinner-border text-dark" role="status"></div>
                  </div>
                  <CategoryTable :categories="categories" @deleted="deleted($event)" @edited="edited($event)" :getCategories="getCategories" v-else />
                  <!--end row-->
               </div>
               <!--end card-body-->
            </div>
            <!--end card-->
         </div>
         <!-- end col -->
      </div>
      <!--end row-->
      <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
               <div class="modal-header">
                  <h6 class="modal-title m-0" id="exampleModalCenterTitle">{{ edit_mode ? 'Update  Category' : 'Create New Category'  }} </h6>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <!--end modal-header-->
               <div class="modal-body">
                  <CategoryForm :edit_mode="edit_mode" :editForm="edit_data" @created="closePopup()" @updated="closePopup()"></CategoryForm>
               </div>
            </div>
            <!--end modal-content-->
         </div>
         <!--end modal-dialog-->
      </div>
      <!--end modal-->
   </div>
</template>
<script>
   import breadcrumb from "../../components/breadcrumbComponent.vue";
   import CategoryTable from "./CategoriesTable.vue";
   import AvatarComponent from "../../components/AvatarComponent.vue";
   import CategoryForm from "./CategoryForm.vue";
   import SearchInput  from  "../../components/SearchInput.vue";
   export default {
       components:{
           breadcrumb,
           CategoryTable,
           CategoryForm,
           AvatarComponent,
           SearchInput,
       },
   data(){
       return {
           categories:[],
           latest_categories:[],
           edit_mode:false,
           loading:false,
           query:"",
           page_num:1,
       }
   },
   methods:{
       resetForm(){
              this.edit_mode = false;
              this.edit_data = {};

       },
       edited(item){
           this.resetForm();
            this.edit_mode = true;
           this.edit_data = item;
           $("#modal").modal("show");
       },
       openModal(){
          this.resetForm();
            $("#modal").modal("show");
       },
      closePopup() {
         this.resetForm();
           this.getCategories();
           $("#modal").modal("hide");
       },
       filterData(data){
        this.categories = data.categories;
        console.log(this.loading);
       },

       isLoading(value) {
        this.loading = value;
      //   this.getUriWithParam();
        },
        isQuery(query){
         (this.query = query);
          this.getUriWithParam();
        },
         getUriWithParam(baseUrl, params) {
         let queryParams = new URLSearchParams(window.location.search);

            queryParams.set('page', this.page_num);
            queryParams.set('query', this.query);
             history.replaceState(null, null, "?" + queryParams.toString());
            },
      async getCategories(page = 1){
        this.page_num=page;
        this.loading=true;
        const url=`category?page=${this.page_num}&query=${this.query}`;
        await axios.get(url).then(response=>{
                this.categories = response.data.categories;
                this.latest_categories=response.data.latest_categories;
                this.loading=false;
                this.getUriWithParam();
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
                axios.delete('category/'+item.id).then((response)=>{
                         Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                        )
                    this.getCategories();
                });

            }
            })
       },

   },
    mounted() {

          let queryParams = new URLSearchParams(window.location.search);
          this.page_num= queryParams.get('page');
          const q= queryParams.get('query');

           if(q=='null' || q==undefined || q=="null"){
               this.query='';
           }
           else
               this.query=q;

           this.getCategories();
       },

   }
</script>
<style></style>
