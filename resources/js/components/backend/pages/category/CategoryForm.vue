<template>
   <div>
      <div class="form-group">
         <label for="exampleInputEmail1">Category Name</label>
         <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Category Name" v-model="category.name">
      </div>
      <div class="form-group">
         <label for="exampleInputEmail1">Category Description</label>
         <textarea class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Category Description"></textarea>
      </div>
   </div>
</template>
<script>
   export default {
       data(){
           return{
               category:{},
           }
       }
   }
</script>
<style>
</style>
