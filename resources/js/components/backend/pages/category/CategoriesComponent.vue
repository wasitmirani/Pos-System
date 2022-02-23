<template>
  <div>
           <breadcrumb active_name="Categories"/>
           <div class="row">
                        <div class="col-lg-4">
                            <div class="card">
                                <div class="card-body p-0">
                                    <div class="media p-3  align-items-center">
                                        <AvatarComponent name="Merri Diamond"/>
                                        <div class="media-body ms-3 align-self-center">
                                            <h5 class="m-0">Merri Diamond <span class="badge badge-warning font-10">New</span></h5>
                                            <p class="mb-0 text-muted">@SaraHopkins.com</p>
                                        </div>
                                        <div class="action-btn">
                                            <a href="#"><i class="las la-pen text-secondary font-16"></i></a>
                                            <a href="#"><i class="las la-trash-alt text-secondary font-16"></i></a>
                                        </div>
                                    </div>
                                </div><!--end card-body-->
                            </div><!--end card-->
                        </div><!--end col-->
                        <div class="col-lg-4">
                            <div class="card">
                                <div class="card-body p-0">
                                    <div class="media p-3  align-items-center">
                                        <AvatarComponent name="Paul Schmidt "/>
                                        <div class="media-body ms-3 align-self-center">
                                            <h5 class="m-0">Paul Schmidt <span class="badge badge-secondary font-10">New</span></h5>
                                            <p class="mb-0 text-muted">@SaraHopkins.com</p>
                                        </div>
                                        <div class="action-btn">
                                            <a href="#"><i class="las la-pen text-secondary font-16"></i></a>
                                            <a href="#"><i class="las la-trash-alt text-secondary font-16"></i></a>
                                        </div>
                                    </div>
                                </div><!--end card-body-->
                            </div><!--end card-->
                        </div><!--end col-->
                        <div class="col-lg-4">
                            <div class="card">
                                <div class="card-body p-0">
                                    <div class="media p-3  align-items-center">
                                        <AvatarComponent name="Harry McCall"/>
                                        <div class="media-body ms-3 align-self-center">
                                            <h5 class="m-0">Harry McCall</h5>
                                            <p class="mb-0 text-muted">@SaraHopkins.com</p>
                                        </div>
                                        <div class="action-btn">
                                            <a href="#"><i class="las la-pen text-secondary font-16"></i></a>
                                            <a href="#"><i class="las la-trash-alt text-secondary font-16"></i></a>
                                        </div>
                                    </div>
                                </div><!--end card-body-->
                            </div><!--end card-->
                        </div><!--end col-->
                    </div>
           <div class="row">
                        <div class="col-lg-6">
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <h5 class="mt-0">Here the list of all categories. <span class="badge badge-primary text-dark">{{categories.length}}</span></h5>
                                </li>
                            </ul>
                        </div><!--end col-->

                        <div class="col-lg-6 text-end">
                            <div class="text-end">
                                <ul class="list-inline">
                                    <li class="list-inline-item">
                                        <div class="input-group">
                                            <input type="text" id="example-input1-group2" name="example-input1-group2" class="form-control form-control-sm" placeholder="Search">
                                            <button type="button" class="btn btn-primary btn-sm"><i class="fas fa-search"></i></button>
                                        </div>
                                    </li>
                                    <li class="list-inline-item">
                                        <button type="button" class="btn btn-primary btn-sm"><i class="fas fa-filter"></i></button>
                                    </li>
                                    <li class="list-inline-item">
                                        <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modal">Add New Category</button>
                                    </li>
                                </ul>
                            </div>
                        </div><!--end col-->
                    </div>
                <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <div class="row align-items-center">
                                        <div class="col">
                                            <h4 class="card-title">Our Reguler Categories</h4>
                                        </div><!--end col-->
                                    </div>  <!--end row-->
                                </div><!--end card-header-->
                                <div class="card-body">

                                    <CategoryTable />
                                    <!--end /tableresponsive-->
                                    <div class="row">

                                        <div class="col-auto">
                                            <nav aria-label="...">
                                                <ul class="pagination pagination-sm mb-0">
                                                    <li class="page-item disabled">
                                                        <a class="page-link" href="#" tabindex="-1">Previous</a>
                                                    </li>
                                                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                                                    </li>
                                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">Next</a>
                                                    </li>
                                                </ul><!--end pagination-->
                                            </nav><!--end nav-->
                                         </div> <!--end col-->
                                    </div><!--end row-->
                                </div><!--end card-body-->
                            </div><!--end card-->
                        </div> <!-- end col -->
            </div><!--end row-->

                   <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h6 class="modal-title m-0" id="exampleModalCenterTitle">Create New Category</h6>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div><!--end modal-header-->
                                            <div class="modal-body">
                                                <CategoryForm></CategoryForm>
                                            </div><!--end modal-body-->
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-de-danger btn-sm" data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary btn-sm">Submit</button>
                                            </div><!--end modal-footer-->
                                        </div><!--end modal-content-->
                                    </div><!--end modal-dialog-->
                                </div><!--end modal-->
  </div>
</template>

<script>
import breadcrumb from "../../components/breadcrumbComponent.vue";
import CategoryTable from "./CategoriesTable.vue";
import AvatarComponent from "../../components/AvatarComponent.vue";
import CategoryForm from "./CategoryForm.vue";
export default {
    components:{
        breadcrumb,
        CategoryTable,
        CategoryForm,
        AvatarComponent,
    },
data(){
    return {
        categories:[],
    }
},
methods:{
    getCategories(){
        axios.get('category').then(response=>{
            this.categories = response.data.categories;
        })
    },
},

}
</script>

<style>

</style>
