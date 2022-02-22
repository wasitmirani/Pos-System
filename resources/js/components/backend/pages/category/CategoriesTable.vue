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
                                            <tr>
                                                <td>
                                                  <div>
                                                       <AvatarComponent name="Aaron Pouli" /> Aaron Poulin
                                                  </div>
                                                </td>


                                                <td><span class="badge badge-soft-success">Active</span></td>
                                                <td>
                                                    <a href="#"><i class="las la-pen text-secondary font-16"></i></a>
                                                    <a href="#"><i class="las la-trash-alt text-secondary font-16"></i></a>
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
    components:{AvatarComponent},
}
</script>

<style>

</style>
