<template>
   <div>
       <form v-on:submit.prevent="onSubmit">
      <div class="form-group">
         <label for="exampleInputEmail1">Category Name</label>
         <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Category Name" v-model="category.name" required>
      </div>
      <div class="form-group">
         <label for="exampleInputEmail1">Category Description</label>
         <textarea class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Category Description" v-model="category.description"></textarea>
      </div>
      <hr>
      <div class="float-right-buttons">
        <button type="button" class="btn btn-de-danger btn-sm"  style="margin-right: 10px;" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary btn-sm" v-if="!edit_mode">Submit</button>
      <button type="submit" class="ml-2 btn btn-success btn-sm" v-else>Update</button>
      </div>

       </form>
   </div>
</template>
<script>
   export default {
       props:['edit_mode','editForm'],
       emits: ['created','updated'],

       data(){
           return{
               category:{},
               errors:[],
           }
       },
       watch: {
    editForm(collection) {
    //   if (collection == null) {
    //     return this.rest_form();
    //   }
      if (collection) {
        this.errors = [];
        this.category = collection;
      }
    //   } else {
    //     this.rest_form();
    //   }
    }
    },
       methods:{
           toastAlert(icon,title) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })

              Toast.fire({
                icon: icon,
                title: title,
              })
        },
           onSubmit(){
               let data = this.category;
                // this.$emit('created')
               if(this.edit_mode){
                   this.updateItem(data);
                }else {
                   this.createItem(data);
                }
           },
           createItem(data){
                 axios.post("/category",data).then((res)=>{
                    //   console.log(re);
                      this.$emit('created');
                      this.category = {};
                      return res.data;
                  }).catch((err)=>{
                        this.errors = err.response.data.errors;

                  });
           },
           updateItem(data){
              const url="/category/"+this.category.id;
              axios.put(url,data).then((res)=>{
                      this.$emit('updated');
                    this.toastAlert('success',"Category Updated Successfully");

                  }).catch((err)=>{
                        this.errors = err.response.data.errors;

                  });
           }
       }
   }
</script>
<style>
.float-right-buttons{
float: right;
}
</style>
