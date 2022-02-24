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
           <button type="button" class="btn btn-de-danger btn-sm" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary btn-sm">Submit</button>
      </div>

       </form>
   </div>
</template>
<script>
   export default {
       props:['edit_mode'],
       emits: ['created','updated'],

       data(){
           return{
               category:{},
               errors:[],
           }
       },
       methods:{
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
              axios.put("/category",data).then((res)=>{

                      this.$emit('updated');
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
