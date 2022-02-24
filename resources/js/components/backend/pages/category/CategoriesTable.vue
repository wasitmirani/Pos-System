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
                                            <tr v-for="item in categories" :key="item.id">
                                                <td>



                                             <div class="media">
                                                 <AvatarComponent :name="item.name" />
                                                <!-- <img src="assets/images/products/01.png" height="30" class="me-3 align-self-center rounded" alt="..."> -->
                                                <div class="media-body align-self-center">
                                                    <h6 class="m-0">{{item.name}}</h6>
                                                    <a href="#" class="font-12 text-primary">ID: {{item.id}}</a>
                                                </div>
                                                <!--end media body-->
                                                </div>
                                                </td>


                                                <td><span class="badge badge-soft-success">Active</span></td>
                                                <td>
                                                    <a href="#"><i class="las la-pen text-primary font-16"></i></a>
                                                    <a href="#"><i class="las la-trash-alt text-danger font-16"></i></a>
                                                </td>
                                            </tr>

                                            </tbody>
                            </table><!--end /table-->
                 </div>
  </div>
</template>

<script>
import AvatarComponent from "../../components/AvatarComponent.vue";
export default {
    props:['categories'],
    components:{AvatarComponent},
}
</script>

<style>

</style>
