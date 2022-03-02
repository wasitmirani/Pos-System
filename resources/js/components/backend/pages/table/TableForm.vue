<template>
   <div>
       <form v-on:submit.prevent="onSubmit">
      <div class="form-group">
         <label for="exampleInputEmail1">Table Name</label>
         <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Table Name" v-model="table.name" required>
      </div>
      <div class="form-group">
         <label for="exampleInputEmail1">Table Description</label>
         <textarea class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Table Description" v-model="table.description"></textarea>
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
               table:{},
               errors:[],
           }
       },
       watch: {
    editForm(collection) {
      if (collection == null) {
       this.table={};
       return true;
      }
      if (collection) {
        this.errors = [];
        this.table = collection;
      }
      else {
          this.table ={};
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
              })

              Toast.fire({
                icon: icon,
                title: title,
              })
        },
           onSubmit(){
               let data = this.table;
                // this.$emit('created')
               if(this.edit_mode){
                   this.updateItem(data);
                }else {
                   this.createItem(data);
                }
           },
           createItem(data){
                 axios.post("/table",data).then((res)=>{
                    //   console.log(re);
                      this.$emit('created');
                      this.table = {};
                      return res.data;
                  }).catch((err)=>{
                        this.errors = err.response.data.errors;

                  });
           },
           updateItem(data){
              const url="/table/"+this.table.id;
              axios.put(url,data).then((res)=>{
                      this.$emit('updated');
                    this.toastAlert('success',"Table Updated Successfully");

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
